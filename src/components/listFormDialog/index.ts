import { SPTypes } from "gd-sprest";
import { Components } from "../core";
import { ListForm } from "../listForm";
import { IListFormEdit } from "../listForm/types";
import { IListFormDialog, IListFormDialogProps } from "./types";

/**
 * List Form Dialog
 */
export const ListFormDialog = (props: IListFormDialogProps): IListFormDialog => {
    let form: IListFormEdit = null;
    let modalProps = props.modalProps || {};

    // Method to save the form
    let saveForm = (): PromiseLike<any> => {
        // Hide the form
        form.el.classList.add("d-none");

        // Hide the footer
        elFooter.classList.add("d-none");

        // Add a progress
        let progress = Components.Progress({
            el: form.el.parentElement,
            isAnimated: true,
            isStriped: true,
            size: 100
        }).el;

        // Return a promise
        return new Promise((resolve, reject) => {
            // Ensure the form is valid
            if (!form.isValid()) {
                // Remove the progress
                form.el.parentElement.removeChild(progress);

                // Show the form
                form.el.classList.remove("d-none");

                // Show the footer
                elFooter.classList.remove("d-none");

                // Reject the promise
                reject("Form is invalid");

                // Return
                return;
            }

            // Save the form
            form.save().then(item => {
                // Remove the progress
                form.el.parentElement.removeChild(progress);

                // Show the form
                form.el.classList.remove("d-none");

                // Show the footer
                elFooter.classList.remove("d-none");

                // Call the save event
                props.onSaved ? props.onSaved(item) : null;

                // Resolve the promise
                resolve(item);
            }, reject);
        });
    };

    // Update the properties
    modalProps.el = modalProps.el || props.el;
    modalProps.title = modalProps.title || props.listName;
    modalProps.body = Components.Progress({
        isAnimated: true,
        isStriped: true,
        label: "Loading the Form...",
        size: 100
    }).el.outerHTML;

    // Set the on render event
    modalProps.onRenderBody = (el) => {
        // Create an instance of the list form
        ListForm.create({
            excludeFields: props.excludeFields,
            fields: props.fields,
            item: props.item,
            itemId: props.itemId,
            listName: props.listName,
            loadAttachments: props.loadAttachments,
            query: props.query,
            webUrl: props.webUrl
        }).then(
            // Success
            info => {
                // Clear the modal body
                el.innerHTML = "";

                // Ensure the item exists, otherwise default to the new form
                let controlMode = props.item || props.itemId > 0 ? props.controlMode : SPTypes.ControlMode.New;

                // Check the control mode
                switch (controlMode) {
                    // Edit Form
                    case SPTypes.ControlMode.Edit:
                    case SPTypes.ControlMode.New:
                        // Render the list form
                        form = ListForm.renderEditForm({
                            controlMode: props.controlMode,
                            el,
                            onControlRendered: props.onControlRendered,
                            onControlRendering: props.onControlRendering,
                            onSaving: props.onSaving,
                            info,
                            template: props.template
                        });
                        break;
                    // Default - Display Form
                    default:
                        // Render the list form
                        ListForm.renderDisplayForm({
                            el,
                            info,
                            onControlRendered: props.onControlRendered,
                            onControlRendering: props.onControlRendering,
                            template: props.template
                        });
                        break;
                }

                // Display the actions
                elFooter.classList.remove("d-none");
            },
            // Error
            () => {
                // Log the error
                console.error("Error loading the list form information.");

                // Clear the modal
                el.innerHTML = "";

                // Display an error message
                Components.Alert({
                    el,
                    content: "Error loading the list form information.",
                    type: Components.AlertTypes.Danger
                });
            }
        );
    }

    // Set the render footer event
    modalProps.onRenderFooter = (el) => {
        // Parse the actions
        let actions = props.actions || null;
        if (actions == null) {
            // Default the actions based on the control mode
            switch (props.controlMode) {
                // Edit
                case (SPTypes.ControlMode.Edit):
                    // Set the actions
                    actions = {
                        spacing: 3,
                        items: [
                            {
                                buttons: [{ text: "Close", onClick: () => { dialog.hide(); } }]
                            },
                            {
                                buttons: [{ text: "Update", onClick: saveForm }]
                            }
                        ]
                    };
                    break;

                // New
                case (SPTypes.ControlMode.New):
                    // Set the actions
                    actions = {
                        spacing: 3,
                        items: [
                            {
                                buttons: [{ text: "Close", onClick: () => { dialog.hide(); } }]
                            },
                            {
                                buttons: [{ text: "Save", onClick: saveForm }]
                            }
                        ]
                    };
                    break;

                // Default - Display
                default:
                    actions = {
                        spacing: 3,
                        items: [
                            {
                                buttons: [{ text: "Close", onClick: () => { dialog.hide(); } }]
                            }
                        ]
                    };
                    break;
            }
        }

        // Set the element
        actions.el = el;

        // Render the toolbar
        Components.Toolbar(actions);
    }

    // Create the dialog
    let dialog = Components.Modal(modalProps) as IListFormDialog;

    // Hide the actions
    let elFooter = dialog.el.querySelector(".modal-footer");
    elFooter.classList.add("d-none");

    // Add the class name
    dialog.el.classList.add("listformdialog");

    // Set the save method
    form == null ? null : dialog.saveForm = saveForm;

    // See if we are displaying it by default
    if (props.visible) {
        // Display the dialog
        dialog.show();
    }

    // Execute the assign to event
    props.assignTo ? props.assignTo(dialog) : null;

    // Return the dialog
    return dialog;
}