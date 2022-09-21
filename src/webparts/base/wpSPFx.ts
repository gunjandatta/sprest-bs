import { Components } from "gd-bs";
import { ContextInfo, Helper, SPTypes } from "gd-sprest";
import { ISPFxWebPart, ISPFxWebPartProps } from "./types";

/**
 * SPFx WebPart Base Class
 */
class _SPFxWebPart implements ISPFxWebPart {
    private _props: ISPFxWebPartProps = null;

    /** The webpart configuration */
    private _cfg: any = null;
    get Configuration(): any { return this._cfg; };
    set Configuration(value: string) {
        // Clear the value
        this._cfg = {};

        // Ensure a value exists
        if (value) {
            // Try to parse the value
            try { this._cfg = JSON.parse(value); }
            catch { }
        }
    }

    /** The configuration form. */
    private _form: Components.IForm = null;
    get Form(): Components.IForm { return this._form; }

    /** The configuration modal. */
    private _modal: Components.IModal = null;
    get Modal(): Components.IModal { return this._modal; }

    /** Is in display mode */
    private _isDisplay: boolean = null;
    get IsDisplay(): boolean { return this._isDisplay; }

    /** Is in edit mode */
    private _isEdit: boolean = null;
    get IsEdit(): boolean { return this._isEdit; }

    /** The configuration modal. */

    // Constructor
    constructor(props: ISPFxWebPartProps) {
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

        // Set the configuration
        this.Configuration = this._props.spfx.properties.configuration;

        // See if this is the workbench
        if (window.location.pathname.indexOf("workbench.aspx") > 0) {
            // Set both flags to render edit/display
            this._isDisplay = true;
            this._isEdit = true;
        } else {
            // See if this is a classic page
            if (Helper.SP.Ribbon.exists) {
                // Set the flag
                this._isEdit = Helper.WebPart.isEditMode();
            } else {
                // Set the flag
                this._isEdit = this._props.spfx.displayMode == SPTypes.DisplayMode.Edit;
            }

            // Set the flag
            this._isDisplay = !this._isEdit;
        }

        // Run the render method in another thread
        setTimeout(() => {
            // See if we are in edit mode
            if (this._isEdit) {
                // Render the configuration button
                this.renderEdit();
            }

            // See if we are in display mode
            if (this.IsDisplay) {
                // Render the webpart
                this.render();
            }
        }, 10);
    }

    // Method to render the webpart
    private render() {
        // Get the webpart element
        let elWP: HTMLElement = this._props.spfx.domElement.querySelector(".webpart");
        if (elWP == null) {
            // Create the element
            elWP = document.createElement("div");
            elWP.classList.add("webpart");
            this._props.spfx.domElement.appendChild(elWP);
        } else {
            // Clear the element
            while (elWP.firstChild) { elWP.removeChild(elWP.firstChild); }
        }

        // Call the render event
        this._props.render ? this._props.render(elWP, this.Configuration) : null;
    }

    // Method to render the edit interface
    private renderEdit() {
        // Get the webpart element
        let elWPConfig: HTMLElement = this._props.spfx.domElement.querySelector(".webpart-cfg");
        if (elWPConfig == null) {
            // Create the element
            elWPConfig = document.createElement("div");
            elWPConfig.classList.add("webpart-cfg");
            this._props.spfx.domElement.appendChild(elWPConfig);
        } else {
            // Do nothing
            return;
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
                            properties: {
                                text: "Configuration",
                                onClick: () => {
                                    // Show the modal
                                    this.showEditModal();
                                }
                            }
                        }]
                    }
                ]
            });

            // Call the configuration
            return config;
        }

        // Render the edit button
        Components.Button({
            el: elWPConfig,
            text: "Edit",
            onClick: () => {
                // Show the edit modal
                this.showEditModal();
            }
        });

        // Create the modal props
        let modalProps: Components.IModalProps = {
            el: elWPConfig,
            onClose: () => {
                // Hide the property pane to cause the webpart to re-render
                this._props.spfx.context.propertyPane.close();
            },
            onRenderBody: el => {
                // Create the form properties
                let formProps: Components.IFormProps = { el, value: this._cfg };

                // Call the rendering event
                formProps = this._props.onConfigFormRendering ? this._props.onConfigFormRendering(formProps) : formProps;

                // Render the form
                this._form = Components.Form(formProps);

                // Call the rendered event
                this._props.onConfigFormRendered ? this._props.onConfigFormRendered(this._form) : null;
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
                                        this._props.spfx.properties.configuration = wpCfg;

                                        // Call the saved event
                                        this._props.onConfigSaved ? this._props.onConfigSaved(cfg) : null;

                                        // See if we are in display mode and the property pane is closed
                                        if (this.IsDisplay && !this._props.spfx.context.propertyPane.isPropertyPaneOpen()) {
                                            // Render the display webpart
                                            this.render();
                                        }

                                        // Close the modal
                                        this._modal.hide();
                                    }
                                }
                            }
                        }
                    ]
                }

                // Call the event
                footerProps = this._props.onConfigFormFooterRendering ? this._props.onConfigFormFooterRendering(footerProps) : footerProps;

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

        // Call the renderEdit event
        this._props.renderEdit ? this._props.renderEdit(elWPConfig, this.Configuration) : null;
    }

    // Shows the modal
    showEditModal() {
        // Show the modal
        this._modal ? this._modal.show() : null;

        // Call the event
        this._props.onConfigFormDisplaying ? this._props.onConfigFormDisplaying() : null;
    }
}
export const SPFxWebPart = (props: ISPFxWebPartProps) => { return new _SPFxWebPart(props); }