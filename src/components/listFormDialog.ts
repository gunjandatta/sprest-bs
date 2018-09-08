import { Components } from "gd-bs";
import { SPTypes } from "gd-sprest";
import { IListFormEdit } from "./types/listForm";
import { IListFormDialog, IListFormDialogProps } from "./types/listFormDialog";
import { ListForm } from "./listForm";

/**
 * List Form Dialog
 */
export const ListFormDialog = (props: IListFormDialogProps): IListFormDialog => {
    let form: IListFormEdit = null;
    let modalProps = props.modalProps || {};

    // Method to save the form
    let saveForm = (): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Get the form values
            let values = form.getValues();

            // Resolve the request
            resolve();
        });
    };

    // Update the properties
    modalProps.el = modalProps.el || props.el;
    modalProps.title = modalProps.title || props.listName;

    // Set the on render event
    modalProps.onRenderBody = (el) => {
        // Create an instance of the list form
        ListForm.create({
            fields: props.fields,
            item: props.item,
            itemId: props.itemId,
            listName: props.listName,
            loadAttachments: props.loadAttachments,
            query: props.query,
            webUrl: props.webUrl
        }).then(info => {
            // Check the control mode
            switch (props.controlMode) {
                // Edit Form
                case SPTypes.ControlMode.Edit:
                case SPTypes.ControlMode.New:
                    // Render the list form
                    form = ListForm.renderEditForm({
                        controlMode: props.controlMode,
                        el,
                        info
                    });
                    break;
                // Default - Display Form
                default:
                    // Render the list form
                    ListForm.renderDisplayForm({
                        el,
                        info
                    });
                    break;
            }
        });
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

    // Add the class name
    dialog.el.classList.add("listformdialog");

    // Set the save method
    form == null ? null : dialog.saveForm = saveForm;

    // Return the dialog
    return dialog;
}