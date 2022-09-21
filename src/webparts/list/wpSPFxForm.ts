import { Components } from "gd-bs";
import { Helper, SPTypes, Web } from "gd-sprest";
import { ListForm } from "../../components/listForm";
import { IListFormDisplayProps, IListFormEditProps } from "../../components/listForm/types";
import { SPFxListWebPart } from "./wpSPFx";
import { ISPFxListFormWebPartProps, ISPFxListFormWebPart } from "./types";

/**
 * List Form WebPart
 */
export const SPFxListFormWebPart = (wpProps: ISPFxListFormWebPartProps): ISPFxListFormWebPart => {
    // Set the base properties
    let baseProps: ISPFxListFormWebPartProps = {
        render: (el, cfg) => {
            // Set the list form properties
            let listProps: Helper.IListFormProps = {
                itemId: wpProps.spfx.context.itemId,
                listName: wpProps.spfx.context.list.title
            }

            // Call the get list information event
            listProps = wpProps.onGetListInfo ? wpProps.onGetListInfo(listProps) : listProps;

            // Load the list information
            Helper.ListForm.create(listProps).then(info => {
                // See if this is the display form
                let isDisplay = wpProps.spfx.displayMode == SPTypes.FormDisplayMode.Display;
                if (isDisplay) {
                    // Set the display form properties
                    let dispProps: IListFormDisplayProps = {
                        el: wpProps.spfx.domElement,
                        info,
                        rowClassName: "mb-3"
                    };

                    // Call the rendering event
                    dispProps = wpProps.onDisplayFormRendering ? wpProps.onDisplayFormRendering(dispProps) : dispProps;

                    // Render the display form
                    wp.DisplayForm = ListForm.renderDisplayForm(dispProps);

                    // Call the rendered event
                    wpProps.onDisplayFormRendered ? wpProps.onDisplayFormRendered(wp.DisplayForm) : null;
                } else {
                    // Render the edit form
                    let editProps: IListFormEditProps = {
                        el: wpProps.spfx.domElement,
                        info,
                        controlMode: info.item ? SPTypes.ControlMode.Edit : SPTypes.ControlMode.New,
                        rowClassName: "mb-3"
                    }

                    // Call the rendering event
                    editProps = wpProps.onEditFormRendering ? wpProps.onEditFormRendering(editProps) : editProps;

                    // Render the edit form
                    wp.EditForm = ListForm.renderEditForm(editProps);

                    // Call the rendered event
                    wpProps.onEditFormRendered ? wpProps.onEditFormRendered(wp.EditForm) : null;
                }

                // Render the footer
                let elFooter = document.createElement("div");
                elFooter.classList.add("footer");
                wpProps.spfx.domElement.appendChild(elFooter);

                // Set the footer properties
                let btnSave: Components.IButton = null;
                let footerProps: Components.ITooltipGroupProps = isDisplay ? {
                    el: elFooter,
                    tooltips: [
                        {
                            content: "Closes the form.",
                            btnProps: {
                                text: "Close",
                                type: Components.ButtonTypes.OutlineDark,
                                onClick: () => {
                                    // Call the close event
                                    wpProps.spfx.formClosed();
                                }
                            }
                        }
                    ]
                } : {
                    el: elFooter,
                    tooltips: [
                        {
                            content: "Saves the item.",
                            btnProps: {
                                text: info.item ? "Update" : "Save",
                                type: Components.ButtonTypes.OutlinePrimary,
                                assignTo: btn => { btnSave = btn; },
                                onClick: () => {
                                    // Ensure the form is valid
                                    if (wp.EditForm.isValid()) {
                                        let values = wp.EditForm.getValues();

                                        // Disable the button
                                        btnSave.disable();

                                        // Call the saving event
                                        values = wpProps.onSaving ? wpProps.onSaving(values) : values;

                                        // Save the item
                                        wp.EditForm.save(values).then(
                                            // Success
                                            (item) => {
                                                // Call the saved event
                                                wpProps.onSaved ? wpProps.onSaved(item) : null;

                                                // Enable the button
                                                btnSave.enable();

                                                // Call the save event
                                                wpProps.spfx.formSaved();
                                            },

                                            // Error
                                            err => {
                                                // TODO
                                            }
                                        )
                                    }
                                }
                            }
                        },
                        {
                            content: "Cancels the request.",
                            btnProps: {
                                text: "Cancel",
                                type: Components.ButtonTypes.OutlineDanger,
                                onClick: () => {
                                    // Call the close event
                                    wpProps.spfx.formClosed();
                                }
                            }
                        }
                    ]
                }

                // Call the rendering method
                footerProps = wpProps.onEditFooterRendering ? wpProps.onEditFooterRendering(footerProps) : footerProps;
                if (footerProps) {
                    // Render the footer
                    Components.TooltipGroup(footerProps);
                }
            });
        },

        renderEdit: el => {
            let elBody: HTMLElement = null;
            let elFooter: HTMLElement = null;

            // Render a modal
            let modal = Components.Modal({
                el,
                title: "List Form Configuration (" + wp.Configuration.ListName + ")",
                onRenderBody: el => { elBody = el; },
                onRenderFooter: el => { elFooter = el; }
            });

            // Render the configure list button
            Components.Button({
                el,
                text: "Configure List",
                onClick: () => {
                    // Clear the body
                    while (elBody.firstChild) { elBody.removeChild(elBody.firstChild); }

                    // Clear the footer
                    while (elFooter.firstChild) { elFooter.removeChild(elFooter.firstChild); }

                    // Ensure a list has been selected
                    if (wp.Configuration.ListId) {
                        // Show a loading message
                        Components.Alert({
                            el: elBody,
                            type: Components.AlertTypes.Primary,
                            content: "Loading the list data..."
                        });

                        // Get the content types
                        Web(wp.Configuration.WebUrl).Lists().getById(wp.Configuration.ListId).ContentTypes().execute(cts => {
                            let items: Components.IDropdownItem[] = [];

                            // Clear the body
                            while (elBody.firstChild) { elBody.removeChild(elBody.firstChild); }

                            // Parse the content types
                            for (let i = 0; i < cts.results.length; i++) {
                                let ct = cts.results[i];

                                // Add the item
                                items.push({
                                    data: ct,
                                    text: ct.Name,
                                    value: ct.Id.StringValue
                                });
                            }

                            // Render a form
                            let form = Components.Form({
                                el: elBody,
                                controls: [
                                    {
                                        name: "ContentType",
                                        label: "Content Type",
                                        type: Components.FormControlTypes.Dropdown,
                                        items,
                                        required: true
                                    } as Components.IFormControlPropsDropdown,
                                    {
                                        name: "ComponentId",
                                        label: "Component ID",
                                        type: Components.FormControlTypes.TextField,
                                        required: true,
                                        value: wpProps.componentId
                                    },
                                    {
                                        name: "ComponentProps",
                                        label: "Component Properties",
                                        type: Components.FormControlTypes.TextArea,
                                        value: wpProps.componentProps
                                    }
                                ]
                            });

                            // Render the footer
                            Components.TooltipGroup({
                                el: elFooter,
                                tooltips: [
                                    {
                                        content: "Clears the list forms and reverts back to the default forms.",
                                        btnProps: {
                                            text: "Clear Custom Forms",
                                            type: Components.ButtonTypes.OutlineDanger,
                                            onClick: () => {
                                                // Ensure an item is selected
                                                if (form.isValid()) {
                                                    let values = form.getValues();
                                                    let item = values["ContentType"] as Components.IDropdownItem;

                                                    // Clear the form component properties
                                                    Web(wp.Configuration.WebUrl).Lists().getById(wp.Configuration.ListId).ContentTypes(item.value).update({
                                                        DisplayFormClientSideComponentId: "",
                                                        DisplayFormClientSideComponentProperties: "",
                                                        EditFormClientSideComponentId: "",
                                                        EditFormClientSideComponentProperties: "",
                                                        NewFormClientSideComponentId: "",
                                                        NewFormClientSideComponentProperties: ""
                                                    }).execute(() => {
                                                        // Close the modal
                                                        modal.hide();
                                                    });
                                                }
                                            }
                                        }
                                    },
                                    {
                                        content: "Applies the custom list forms to the selected list.",
                                        btnProps: {
                                            text: "Apply Custom Forms",
                                            type: Components.ButtonTypes.OutlineSuccess,
                                            onClick: () => {
                                                // Ensure an item is selected
                                                if (form.isValid()) {
                                                    let values = form.getValues();
                                                    let item = values["ContentType"] as Components.IDropdownItem;

                                                    // Set the form component properties
                                                    Web(wp.Configuration.WebUrl).Lists().getById(wp.Configuration.ListId).ContentTypes(item.value).update({
                                                        DisplayFormClientSideComponentId: values["ComponentId"],
                                                        DisplayFormClientSideComponentProperties: values["ComponentProps"],
                                                        EditFormClientSideComponentId: values["ComponentId"],
                                                        EditFormClientSideComponentProperties: values["ComponentProps"],
                                                        NewFormClientSideComponentId: values["ComponentId"],
                                                        NewFormClientSideComponentProperties: values["ComponentProps"]
                                                    }).execute(() => {
                                                        // Close the modal
                                                        modal.hide();
                                                    });
                                                }
                                            }
                                        }
                                    }
                                ]
                            })
                        });

                        // Display the modal
                        modal.show();
                    } else {
                        // Render an error
                        Components.Alert({
                            el: elBody,
                            type: Components.AlertTypes.Danger,
                            content: "Edit the webpart and select a list to apply the solution to."
                        });

                        // Display the modal
                        modal.show();
                    }
                }
            });
        }
    }

    // Return the webpart
    let wp: ISPFxListFormWebPart = SPFxListWebPart({ ...wpProps, ...baseProps });
    return wp;
}