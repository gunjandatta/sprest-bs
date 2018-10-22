import { SP } from "gd-sprest-def";
import { Components } from "gd-bs";
import { Helper, SPTypes, Types } from "gd-sprest";
import { IField } from "./types/field";
import { IListForm, IListFormDisplayProps, IListFormEdit, IListFormEditProps } from "./types/listForm";
import { Field } from "./field";

// Extend the list form
export const ListForm: IListForm = Helper.ListForm as any;

// Method to render a display form for an item
ListForm.renderDisplayForm = (props: IListFormDisplayProps) => {
    // Render a loading message
    let progress = Components.Progress({
        el: props.el,
        isAnimated: true,
        isStriped: true,
        label: "Loading the Form",
        size: 100
    });

    // Load the list item
    props.info.list.Items(props.info.item.Id)
        // Get the html for the fields
        .FieldValuesAsHtml()
        // Execute the request
        .execute(
            // Success
            formValues => {
                let hasUserField = false;
                let mapper: { [key: string]: Components.IFormControlProps } = {};
                let rows: Array<Components.IFormRow> = [];

                // See if we are rendering attachments
                if (props.info.attachments) {
                    // Render the attachments
                    rows.push({
                        colSize: 2,
                        control: {
                            label: "Attachments",
                            onControlRendered: control => {
                                let items: Array<Components.IToolbarItem> = [];

                                // Parse the attachments
                                for (let i = 0; i < props.info.attachments.length; i++) {
                                    let attachment = props.info.attachments[i];

                                    // Add the item
                                    items.push({
                                        buttons: [{
                                            className: "mr-1",
                                            href: attachment.ServerRelativeUrl,
                                            isSmall: true,
                                            text: attachment.FileName
                                        }]
                                    });
                                }

                                // Render a toolbar
                                Components.Toolbar({
                                    el: control.el,
                                    items
                                });
                            }
                        }
                    });
                }

                // Parse the fields
                for (let fieldName in props.info.fields) {
                    let field = props.info.fields[fieldName];
                    let html = formValues[fieldName] || formValues[fieldName.replace(/\_/g, "_x005f_")] || "";

                    // Set the control
                    mapper[fieldName] = {
                        data: html,
                        description: field.Description,
                        label: field.Title,
                        onControlRendered: control => {
                            // Set the html
                            control.el.innerHTML = control.props.data;
                        }
                    };

                    // Add the row
                    rows.push({
                        colSize: 2,
                        control: mapper[fieldName]
                    });
                }

                // Clear the element
                props.el ? props.el.innerHTML = "" : null;

                // See if there is a template
                if (props.template) {
                    let updateControl = (refControl) => {
                        // Get the control from the mapper
                        let control = refControl ? mapper[refControl.name] : null;

                        // Ensure the controls exists
                        if (control && refControl) {
                            // Parse the control keys
                            for (let key in control) {
                                // Skip if a value is already defined
                                if (refControl[key]) { continue; }

                                // Update the property
                                refControl[key] = control[key];
                            }
                        }
                    }

                    // Parse the template
                    for (let i = 0; i < props.template.length; i++) {
                        let row = props.template[i];

                        // Update the control
                        updateControl(row.control);

                        // Parse the columns if there are columns
                        let columns = row.columns || [];
                        for (let j = 0; j < columns.length; j++) {
                            let column = columns[j];

                            // Update the control
                            updateControl(column.control);
                        }
                    }
                }

                // Render the form
                Components.Form({
                    el: props.el,
                    onControlRendered: props.onControlRendered,
                    onControlRendering: props.onControlRendering,
                    rows: props.template || rows
                });

                // See if we are displaying a user field
                if (hasUserField) {
                    // Enable the persona
                    window["ProcessImn"]();
                }
            },
            // Error
            () => {
                // Remove the progress bar
                progress.el.parentElement ? progress.el.parentElement.removeChild(progress.el) : null;

                // Display an alert
                Components.Alert({
                    el: props.el,
                    content: "Error loading the form information...",
                    type: Components.AlertTypes.Danger
                });
            }
        );
};

// Render the edit form
ListForm.renderEditForm = (props: IListFormEditProps): IListFormEdit => {
    let mapper: { [key: string]: IField } = {};
    let rows: Array<Components.IFormRow> = [];
    let value = {};
    let attachments: {
        delete: Array<SP.Attachment>;
        new: Array<Types.Helper.IListFormAttachmentInfo>;
    } = {
        delete: [],
        new: []
    };

    // Method to add a refresh alert
    let addRefreshLink = () => {
        // Ensure the link doesn't already exist
        if (props.el.querySelector(".refresh-btn")) { return; }

        // Create the refresh button
        let alert = Components.ButtonGroup({
            className: "refresh-btn",
            buttonType: Components.ButtonTypes.Danger,
            buttons: [
                {
                    text: "Refresh Form",
                    onClick: () => {
                        // Clear the element and reload the form
                        props.el.innerHTML = "";

                        // Render the form
                        ListForm.renderEditForm(props);
                    }
                },
                {
                    text: "Refresh Page",
                    onClick: () => {
                        // Refresh the page
                        document.location.href = document.location.href;
                    }
                }
            ]
        });

        // Add the element at the top
        props.el.insertBefore(alert.el, props.el.children[0]);
    }

    // Method to remove the attachments
    let removeAttachments = (info: Types.Helper.IListFormResult) => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Ensure attachments exists
            if (attachments.delete.length == 0) { resolve(); return; }

            // Get the web
            props.info.list.ParentWeb().execute(web => {
                // Parse the attachments
                Helper.Executor<SP.Attachment>(attachments.delete, attachment => {
                    // Get the attachment file
                    web.getFileByServerRelativeUrl(attachment.ServerRelativeUrl).delete().execute();

                    // Parse the attachments
                    for (let i = 0; i < props.info.attachments.length; i++) {
                        // See if this is the target attachment
                        if (props.info.attachments[i].ServerRelativeUrl == attachment.ServerRelativeUrl) {
                            // Remove this item
                            props.info.attachments.splice(i, 1);
                            break;
                        }
                    }
                }).then(() => {
                    // Wait for the files to be deleted
                    web.done(() => {
                        // Clear the attachments
                        attachments.delete = [];

                        // Resolve the promise
                        resolve();
                    });
                });
            });
        });
    }

    // Method to save the attachments
    let saveAttachments = (info: Types.Helper.IListFormResult) => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Ensure attachments exists
            if (attachments.new.length == 0) { resolve(); return; }

            // Parse the attachments
            Helper.Executor<Types.Helper.IListFormAttachmentInfo>(attachments.new, attachment => {
                // Get the item's attachments
                props.info.list.Items(info.item.Id).AttachmentFiles()
                    // Add the file
                    .add(attachment.name, attachment.data)
                    // Execute the request
                    .execute(attachment => {
                        // Ensure attachments exist
                        info.attachments = info.attachments || [];

                        // Append the attachment
                        info.attachments.push(attachment);
                    });
            }).then(() => {
                // Wait for the files to upload
                props.info.list.done(() => {
                    // Clear the attachments
                    attachments.new = [];

                    // Resolve the promise
                    resolve();
                });
            });
        });
    }

    // Render a loading message
    let progress = Components.Progress({
        el: props.el,
        isAnimated: true,
        isStriped: true,
        label: "Loading the Form",
        size: 100
    });

    // See if we are rendering attachments
    if (props.info.attachments) {
        // Render the attachments
        rows.push({
            colSize: 2,
            control: {
                label: "Attachments",
                onControlRendered: control => {
                    // Render a toolbar
                    let toolbar = Components.Toolbar({
                        el: control.el,
                        items: [{
                            buttons: [{
                                className: "upload-btn mr-1",
                                isSmall: true,
                                text: "Upload",
                                type: Components.ButtonTypes.Secondary,
                                onClick: (btn, ev) => {
                                    let elUpload = ev.currentTarget as HTMLButtonElement;

                                    // Display an upload dialog
                                    Helper.ListForm.showFileDialog().then(fileInfo => {
                                        // Get the buttons and remove any duplicates
                                        let buttons = elUpload.parentElement.querySelectorAll(".btn");
                                        for (let i = 0; i < buttons.length; i++) {
                                            let button = buttons[i] as HTMLButtonElement;

                                            // See if this is the associated button
                                            if (button.innerText.replace(/X$/, '') == fileInfo.name) {
                                                // Get the badge
                                                let badge = button.querySelector(".badge") as HTMLSpanElement;
                                                if (badge) {
                                                    // Remove the button
                                                    badge.click();
                                                }
                                                break;
                                            }
                                        }

                                        // Save the file information
                                        attachments.new.push(fileInfo);

                                        // Append the attachment
                                        elUpload.parentElement.appendChild(Components.Popover({
                                            isDismissible: true,
                                            type: Components.PopoverTypes.Bottom,
                                            btnProps: {
                                                className: "mr-1",
                                                isSmall: true,
                                                text: fileInfo.name
                                            },
                                            options: {
                                                html: true,
                                                content: Components.Button({
                                                    data: fileInfo,
                                                    isSmall: true,
                                                    text: "Remove",
                                                    type: Components.ButtonTypes.Danger,
                                                    onClick: (btn, ev) => {
                                                        let fileName = (btn.data as Types.Helper.IListFormAttachmentInfo).name;

                                                        // Parse the array
                                                        for (let i = 0; i < attachments.new.length; i++) {
                                                            // See if this is the target attachment
                                                            if (attachments.new[i].name == fileName) {
                                                                // Remove this attachment
                                                                attachments.new.splice(i, 1);
                                                                break;
                                                            }
                                                        }

                                                        // Get the files
                                                        let files = btnGroup.querySelectorAll(".btn[data-toggle='popover']");
                                                        for (let i = 0; i < files.length; i++) {
                                                            let file = files[i] as HTMLAnchorElement;

                                                            // See if this is the target button
                                                            if (file.innerText == fileName) {
                                                                // Remove this popover
                                                                file.parentElement.removeChild(file);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                }).el as any
                                            }
                                        }).el);
                                    });
                                }
                            }]
                        }]
                    });

                    // Get the button group
                    let btnGroup = toolbar.el.querySelector(".btn-group");
                    if (btnGroup) {
                        // Parse the attachments
                        for (let i = 0; i < props.info.attachments.length; i++) {
                            let attachment = props.info.attachments[i];

                            // Add the attachment
                            btnGroup.appendChild(Components.Popover({
                                isDismissible: true,
                                type: Components.PopoverTypes.Bottom,
                                btnProps: {
                                    className: "mr-1",
                                    isSmall: true,
                                    text: attachment.FileName,
                                },
                                options: {
                                    html: true,
                                    content: Components.Button({
                                        data: attachment,
                                        isSmall: true,
                                        text: "Remove",
                                        type: Components.ButtonTypes.Danger,
                                        onClick: (btn, ev) => {
                                            let attachment = btn.data as SP.Attachment;

                                            // Add this file for deletion
                                            attachments.delete.push(attachment);

                                            // Get the files
                                            let files = btnGroup.querySelectorAll(".btn[data-toggle='popover']");
                                            for (let i = 0; i < files.length; i++) {
                                                let file = files[i] as HTMLAnchorElement;

                                                // See if this is the target button
                                                if (file.innerText == attachment.FileName) {
                                                    // Remove this popover
                                                    file.parentElement.removeChild(file);
                                                    break;
                                                }
                                            }
                                        }
                                    }).el as any
                                }
                            }).el);
                        }
                    }
                }
            }
        });
    }

    // Parse the fields
    for (let fieldName in props.info.fields) {
        let columns = null;
        let field = props.info.fields[fieldName];

        // Set the value
        value[fieldName] = props.info.item ? props.info.item[fieldName] : null;

        // See if this is a read-only field
        if (field.ReadOnlyField) {
            // Do not render in the new form
            if (props.controlMode == SPTypes.ControlMode.New) { continue; }
        }

        // Do not render a hidden taxonomy field
        if (field.Hidden && field.FieldTypeKind == SPTypes.FieldType.Note && /_0$/.test(field.Title)) { continue; }

        // See if this is an invalid field type
        if (field.FieldTypeKind == SPTypes.FieldType.Invalid) {
            // Ensure it's not a taxonomy field
            if (!/^TaxonomyFieldType/.test(field.TypeAsString)) { continue; }
        }

        // Create the control
        let fieldControl = Field({
            controlMode: props.controlMode,
            field,
            listInfo: props.info,
            value: value[fieldName],
            onValidate: props.onValidate,
            onError: msg => {
                // Add the refresh link
                addRefreshLink();

                // Call the event
                props.onError ? props.onError(msg) : null;
            }
        });

        // Update the mapper
        mapper[fieldName] = fieldControl;

        // Add the row
        rows.push({
            colSize: 2,
            columns,
            control: fieldControl.controlProps
        });
    }

    // See if there is a template
    if (props.template) {
        let updateControl = (refControl: Components.IFormControlProps) => {
            // Get the control from the mapper
            let control = refControl && mapper[refControl.name] ? mapper[refControl.name].controlProps : null;

            // Ensure the controls exists
            if (control && refControl) {
                // Parse the control keys
                for (let key in control) {
                    // Skip if a value is already defined
                    if (refControl[key]) { continue; }

                    // Update the property
                    refControl[key] = control[key];
                }
            }
        }

        // Parse the template
        for (let i = 0; i < props.template.length; i++) {
            let row = props.template[i];

            // Default the row size
            row.colSize = typeof (row.colSize) === "number" ? row.colSize : 2;

            // Update the control
            updateControl(row.control);

            // Parse the columns if there are columns
            let columns = row.columns || [];
            for (let j = 0; j < columns.length; j++) {
                let column = columns[j];

                // Update the control
                updateControl(column.control);
            }
        }
    }

    // Remove the progress bar
    progress.el.parentElement ? progress.el.parentElement.removeChild(progress.el) : null;

    // Render the form
    let form = Components.Form({
        el: props.el,
        onControlRendered: props.onControlRendered,
        onControlRendering: props.onControlRendering,
        rows: props.template || rows,
        value
    });

    // Method to get the values
    let getValues = () => {
        let item = {};
        let unknownUsers = {};

        // Parse the fields
        for (let fieldName in props.info.fields) {
            // Skip readonly fields
            let field = props.info.fields[fieldName];
            if (field.ReadOnlyField) { continue; }

            // Get the field value
            let fieldValue = mapper[fieldName].getValue();

            // Set the item value
            item[fieldValue.name] = fieldValue.value;
        }

        // Return the form values
        return { formValues: item, unknownUsers };
    };

    // Return the form
    return {
        el: form.el,
        getValues,
        isValid: () => {
            let isValid = true;

            // Parse the fields
            for (let fieldName in props.info.fields) {
                // Skip readonly fields
                let field = props.info.fields[fieldName];
                if (field.ReadOnlyField) { continue; }

                // Set the flag
                isValid = isValid && mapper[field.InternalName].isValid();
            }

            // Return the flag
            return isValid;
        },
        save: () => {
            // Return a promise
            return new Promise((resolve, reject) => {
                // Get the values
                let item = getValues().formValues;

                // Method to save the item
                let saveItem = (item) => {
                    // Update the item
                    ListForm.saveItem(props.info, item).then(info => {
                        // Remove the attachments
                        removeAttachments(info).then(() => {
                            // Save the attachments
                            saveAttachments(info).then(() => {
                                // Update the info
                                props.info = info;

                                // Resolve the promise
                                resolve(props.info.item as any);
                            });
                        });
                    }, reject);
                }

                // Execute the saving event
                let returnVal = props.onSaving ? props.onSaving(item) : null;
                if (returnVal && returnVal.then) {
                    // Wait for the promise to complete
                    returnVal.then(saveItem);
                } else {
                    // Save the item
                    saveItem(item);
                }
            });
        }
    }
};