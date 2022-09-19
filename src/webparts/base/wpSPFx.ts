import { Components } from "gd-bs";
import { ContextInfo, Helper, SPTypes } from "gd-sprest";
import { ISPFxWebPart, ISPFxWebPartProps } from "./types";

// SP global variable
declare var SP;

/**
 * SPFx WebPart Base Class
 */
class _SPFxWebPart implements ISPFxWebPart {
    private _cfg: any = null;
    private _props: ISPFxWebPartProps = null;

    /** The configuration form. */
    private _form: Components.IForm = null;
    get Form(): Components.IForm { return this._form; }

    /** The configuration modal. */
    private _modal: Components.IModal = null;
    get Modal(): Components.IModal { return this._modal; }

    /** The configuration modal. */

    // Constructor
    constructor(props: ISPFxWebPartProps) {
        let isEdit = false;

        // Save the properties
        this._props = props;

        // Ensure the spfx object was set
        if (this._props.spfx == null) {
            // Error
            console.error("[gd-sprest-bs] The spfx property wasn't set.");
            return;
        }

        // Set the page context
        ContextInfo.setPageContext(this._props.spfx.context.pageContext);

        // Try to parse the configuration
        if (this._props.wpCfg) {
            try { this._cfg = JSON.parse(this._props.wpCfg); }
            catch { }
        }

        // Set the webpart properties pane to trigger the modal from displaying
        let propertyPageConfig = this._props.spfx.getPropertyPaneConfiguration;
        this._props.spfx.getPropertyPaneConfiguration = () => {
            // Get the original configuration
            let config = propertyPageConfig ? propertyPageConfig() : null;

            // Update the configuration w/ a button
            config = config || {};
            config.pages = config.pages || [];
            config.pages.push({
                header: {
                    description: "Configuration"
                },
                groups: [
                    {
                        groupFields: [{
                            targetProperty: "configuration",
                            type: SPTypes.PropertyPaneType.Button,
                            onClick: () => {
                                // Display the modal
                                this._modal.show();
                            }
                        }]
                    }
                ]
            });

            // Call the configuration
            return config;
        }

        // See if this is the workbench
        if (window.location.pathname.indexOf("workbench.aspx") > 0) {
            // Render the configuration button
            this.renderEdit();

            // Render the solution
            this.render();
        } else {
            // See if this is a classic page
            if (Helper.SP.Ribbon.exists) {
                // Set the flag
                isEdit = Helper.WebPart.isEditMode();
            } else {
                // Set the flag
                isEdit = this._props.spfx.displayMode == SPTypes.FormDisplayMode.Edit;
            }

            // Ensure we are in edit mode
            if (isEdit) {
                // Render the configuration button
                this.renderEdit();
            } else {
                // Render the webpart
                this.render();
            }
        }
    }

    // Method to render the webpart
    private render() {
        // Call the render event
        this._props.render ? this._props.render(this._props.spfx.domElement) : null;
    }

    // Method to render the edit interface
    private renderEdit() {
        // Render the edit button
        Components.Button({
            el: this._props.spfx.domElement,
            text: "Edit",
            onClick: () => {
                // Display the modal
                this._modal.show();

                // Hide the property pane
                this._props.spfx.context.propertyPane.close();
            }
        });

        // Create the modal props
        let modalProps: Components.IModalProps = {
            el: this._props.spfx.domElement,
            onRenderBody: el => {
                // Create the form properties
                let formProps: Components.IFormProps = { el, value: this._cfg };

                // Call the rendering event
                formProps = this._props.onEditFormRendering ? this._props.onEditFormRendering(formProps) : formProps;

                // Render the form
                this._form = Components.Form(formProps);

                // Call the rendered event
                this._props.onEditFormRendered ? this._props.onEditFormRendered(this._form) : null;
            },
            onRenderFooter: el => {
                // Render the footer buttons
                let footerProps: Components.ITooltipGroupProps = {
                    el,
                    tooltips: [
                        {
                            content: "Click to save the webpart configuration.",
                            btnProps: {
                                text: "Save",
                                type: Components.ButtonTypes.OutlineSuccess,
                                onClick: () => {
                                    // Ensure the form is valid
                                    if (this._form.isValid()) {
                                        let cfg = this._form.getValues();

                                        // Call the saving event
                                        cfg = this._props.onConfigSaving ? this._props.onConfigSaving(cfg) : cfg;

                                        // Try to convert the form values
                                        let wpCfg = null;
                                        try { wpCfg = JSON.stringify(cfg); }
                                        catch { }

                                        // Save the configuration
                                        this._props.spfxSaveConfig ? this._props.spfxSaveConfig(wpCfg) : null;

                                        // Call the saved event
                                        this._props.onConfigSaved ? this._props.onConfigSaved(cfg) : null;
                                    }
                                }
                            }
                        }
                    ]
                }

                // Call the event
                footerProps = this._props.onEditFormFooterRendering ? this._props.onEditFormFooterRendering(footerProps) : footerProps;

                // Render the footer
                Components.TooltipGroup(footerProps);
            }
        };

        // Call the rendering event
        let onRender = null;
        let newProps = this._props.onModalRendering ? this._props.onModalRendering(modalProps) : null;
        if (newProps) { onRender = newProps.onRenderBody; }

        // Render the modal
        this._modal = Components.Modal({ ...newProps, ...modalProps });

        // Call the rendered event
        this._props.onModalRendered ? this._props.onModalRendered(this._modal) : null;
    }

    // Shows the modal
    showEditModal() {
        // Show the modal
        this._modal ? this._modal.show() : null;

        // Call the event
        this._props.onEditFormDisplaying ? this._props.onEditFormDisplaying() : null;
    }
}
export const SPFxWebPart = (props: ISPFxWebPartProps) => { return new _SPFxWebPart(props); }