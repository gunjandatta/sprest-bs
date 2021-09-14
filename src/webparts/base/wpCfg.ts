import { Components } from "gd-bs";
import { Helper } from "./helper";
import { IWebPartCfg, IWebPartEditForm, IWebPartInfo, IWebPartProps } from "./types";
declare var MSOWebPartPageFormName;

/**
 * WebPart Configuration
 */
export const WPCfg = (cfg: IWebPartCfg, wp: IWebPartInfo, props: IWebPartProps) => {
    let _editForm: IWebPartEditForm = props.editForm || {};

    // Method to detect if the wiki page is being edited
    let isWikiPageInEdit = () => {
        let wikiPageMode = null;

        // Get the form
        let form = document.forms[MSOWebPartPageFormName];
        if (form) {
            // Get the wiki page mode
            wikiPageMode = form._wikiPageMode ? form._wikiPageMode.value : null;
        }

        // Determine if this wiki page is being edited
        return wikiPageMode == "Edit";
    }

    // The default render method when the page is edited
    let render = () => {
        let form: Components.IForm = null;

        // Ensure we need to render this
        if (_editForm == null) { return; }

        // Render the template
        wp.el.innerHTML = [
            '<div></div>',
            '<div></div>'
        ].join('\n');

        // Render the button to toggle the modal
        Components.Button({
            el: wp.el.children[0],
            text: "Configure WebPart",
            type: Components.ButtonTypes.Secondary,
            onClick: () => { modal.show(); }
        });

        // Render the modal
        let modal = Components.Modal({
            el: wp.el.children[1],
            id: (wp.cfg.WebPartId || "") + "_modal",
            isCentered: true,
            title: "Configuration Panel",
            type: Components.ModalTypes.Large,
            onRenderBody: el => {
                let formControls: any = null;

                // Set the class name
                el.classList.add("wp-cfg-form");

                // See if the render form event exists
                if (_editForm.onRenderForm) {
                    // Call the event
                    formControls = _editForm.onRenderForm(wp) || [];
                }

                // See if there is a promise
                if (formControls.then) {
                    // Wait for the promise to be resolved
                    formControls.then(formControls => {
                        // Render the edit form
                        form = Helper.renderEditForm(el, wp.cfg, formControls);
                    });
                }
                // Else, render the edit form
                else { form = Helper.renderEditForm(el, wp.cfg, formControls); }

                // Call the render form event
                props.onRenderForm ? props.onRenderForm(form, wp) : null;
            },
            onRenderFooter: el => {
                let actionButtons: Array<Components.IButtonProps> = [];

                // See if this is a wiki page
                let disableSaveButton = isWikiPageInEdit();
                if (disableSaveButton) {
                    // Get the webpart manager key name
                    let elWPMgrKeyName = document.getElementById("MSOSPWebPartManager_OldSelectedStorageKeyName") as HTMLInputElement;

                    // Set the flag
                    disableSaveButton = elWPMgrKeyName == null || elWPMgrKeyName.value.indexOf(cfg.WebPartId) < 0;
                    if (disableSaveButton) {
                        // Show a message
                        el.innerHTML = "<label>You must edit the webpart in order to save changes.</label>";
                        return;
                    }
                }

                // See if we are adding the save button
                if (_editForm.showSaveButton != false) {
                    // Add the save button
                    actionButtons.push({
                        isDisabled: disableSaveButton,
                        text: "Save",
                        onClick: ev => {
                            // Validate the form
                            if (form.isValid()) {
                                // Call the save event and set the configuration
                                let cfg = _editForm.onSave ? _editForm.onSave(wp.cfg, form) : null;
                                cfg = cfg ? cfg : wp.cfg;

                                // Save the configuration
                                Helper.saveConfiguration(wp.wpId, props.cfgElementId, cfg).then(() => {
                                    // Close the modal
                                    modal.toggle();
                                });
                            }
                        }
                    });
                }

                // See if custom actions exist
                if (_editForm.actions) {
                    // Add the buttons
                    actionButtons = actionButtons.concat(_editForm.actions);
                }

                // Render the menu buttons
                Components.ButtonGroup({
                    buttons: actionButtons,
                    buttonType: Components.ButtonTypes.Secondary,
                    el,
                    isSmall: true
                });
            }
        });
    }

    // Render the webpart configuration
    render();
}