import { Components } from "gd-bs";
import { Helper, SPTypes, Types } from "gd-sprest";
import { IField, IListForm, IListFormDisplayProps, IListFormEdit, IListFormEditProps } from "../../@types/components";
import { Field } from "./field";

// Extend the list form
export const ListForm: IListForm = Helper.ListForm as any;

// Method to get the fields to render
let getFieldsToRender = (props: IListFormDisplayProps | IListFormEditProps): Array<string> => {
    let fieldNames = [];

    // See if the "include" fields property is defined
    if (props.includeFields) {
        // Set the field names
        fieldNames = props.includeFields;
    } else {
        // Parse the fields
        for (let fieldName in props.info.fields) {
            // See if the "exclude" property is set
            if (props.excludeFields) {
                let renderFl = true;

                // Parse the fields
                for (let i = 0; i < props.excludeFields.length; i++) {
                    // See if we are excluding this field
                    if (props.excludeFields[i] == fieldName) {
                        // Set the flag
                        renderFl = false;
                        break;
                    }
                }

                // Skip this field, if we are not rendering it
                if (!renderFl) { continue; }
            }

            // Add the field name
            fieldNames.push(fieldName);
        }
    }

    // Return the field names
    return fieldNames;
}

// Method to render a display form for an item
ListForm.renderDisplayForm = (props: IListFormDisplayProps) => {
    let form: Components.IForm = null;

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
                        columns: [{
                            control: {
                                label: "Attachments",
                                name: "Attachments",
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
                        }]
                    });
                }

                // Parse the fields to render
                let fieldNames = getFieldsToRender(props);
                for (let i = 0; i < fieldNames.length; i++) {
                    let fieldName = fieldNames[i];
                    let field = props.info.fields[fieldName];
                    let html = formValues[fieldName] || formValues[fieldName.replace(/\_/g, "_x005f_")] || "";

                    // Ensure the field exists
                    if (field == null) {
                        // Log
                        console.error("[List Form] Field '" + fieldName + "' does not exist. Check the list or query.");
                        continue;
                    }

                    // See if this is a note field
                    if (field.FieldTypeKind == SPTypes.FieldType.Note) {
                        // Update the html
                        html = html.replace(/\r?\n/g, '<br />');
                    }
                    // Else, see if this is a user field
                    else if (field.FieldTypeKind == SPTypes.FieldType.User) {
                        // Set the flag
                        hasUserField = true;
                    }

                    // Set the control
                    mapper[fieldName] = {
                        data: html,
                        description: field.Description,
                        label: field.Title,
                        name: field.InternalName,
                        onControlRendered: control => {
                            // Set the html
                            control.el.innerHTML = control.props.data;
                        }
                    };

                    // Add the row
                    rows.push({
                        columns: [{
                            control: mapper[fieldName]
                        }]
                    });
                }

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
                form = Components.Form({
                    el: props.el,
                    onControlRendered: control => { return props.onControlRendered ? props.onControlRendered(control, props.info.fields[control.props.name]) : null; },
                    onControlRendering: control => { return props.onControlRendering ? props.onControlRendering(control, props.info.fields[control.name]) : null; },
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

    // Return the form informaiton
    return {
        get el() { return form ? form.el as HTMLFormElement : null; }
    };
};

// Render the edit form
ListForm.renderEditForm = (props: IListFormEditProps): IListFormEdit => {
    let mapper: { [key: string]: IField } = {};
    let rows: Array<Components.IFormRow> = [];
    let value = {};
    let attachments: {
        delete: Array<Types.SP.Attachment>;
        new: Array<Helper.IListFormAttachmentInfo>;
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
    let removeAttachments = (info: Helper.IListFormResult) => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Ensure attachments exists
            if (attachments.delete.length == 0) { resolve(); return; }

            // Get the web
            props.info.list.ParentWeb().execute(web => {
                // Parse the attachments
                Helper.Executor<Types.SP.Attachment>(attachments.delete, attachment => {
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
                    (web as any as Types.SP.IWeb).done(() => {
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
    let saveAttachments = (info: Helper.IListFormResult) => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Ensure attachments exists
            if (attachments.new.length == 0) { resolve(); return; }

            // Parse the attachments
            Helper.Executor<Helper.IListFormAttachmentInfo>(attachments.new, attachment => {
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
                (props.info.list as any as Types.SP.IList).done(() => {
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
            columns: [{
                control: {
                    label: "Attachments",
                    name: "Attachments",
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
                                                            let fileName = (btn.data as Helper.IListFormAttachmentInfo).name;

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
                                                let attachment = btn.data as Types.SP.Attachment;

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
            }]
        });
    }

    // Parse the fields to render
    let fieldNames = getFieldsToRender(props);
    for (let i = 0; i < fieldNames.length; i++) {
        let fieldName = fieldNames[i];
        let field = props.info.fields[fieldName];

        // Ensure the field exists
        if (field == null) {
            // Log
            console.error("[List Form] Field '" + fieldName + "' does not exist. Check the list or query.");
            continue;
        }

        // See if the item exists
        value[fieldName] = null;
        if (props.info.item) {
            // Set the value
            value[fieldName] = props.info.item[fieldName];

            // See if this is a lookup or user field
            if (field.FieldTypeKind == SPTypes.FieldType.Lookup || field.FieldTypeKind == SPTypes.FieldType.User) {
                // Update the value
                value[fieldName] = value[fieldName + "Id"] || (value[fieldName] ? value[fieldName].Id : null) || value[fieldName];
            }
        }

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
            onControlRendered: (control, field) => {
                // Update the mapper
                mapper[field.InternalName].control = control;

                // Call the event
                return props.onControlRendered ? props.onControlRendered(control, field) : null;
            },
            onControlRendering: props.onControlRendering,
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
            columns: [{
                control: fieldControl.controlProps
            }]
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
        onControlRendered: control => { return props.onControlRendered ? props.onControlRendered(control, props.info.fields[control.props.name]) : null },
        onControlRendering: control => { return props.onControlRendering ? props.onControlRendering(control, props.info.fields[control.name]) : null; },
        rows: props.template || rows,
        value
    });

    // Method to get the values
    let getValues = () => {
        let values = {};

        // Parse the fields
        for (let fieldName in props.info.fields) {
            // Skip readonly fields
            let field = props.info.fields[fieldName];
            if (field.ReadOnlyField) { continue; }

            // Get the form field
            let formField = mapper[fieldName];
            if (formField == null) { continue; }

            // Get the field value
            let fieldValue = formField.getValue();

            // Set the item value
            values[fieldValue.name] = fieldValue.value;
        }

        // Return the form values
        return values;
    };

    // Return the form
    return {
        el: form.el as HTMLFormElement,
        getControl: (fieldName: string) => { return mapper[fieldName] ? mapper[fieldName].control : null; },
        getValues,
        isValid: () => {
            let isValid = true;

            // Parse the fields
            for (let fieldName in props.info.fields) {
                // Skip readonly fields
                let field = props.info.fields[fieldName];
                if (field.ReadOnlyField) { continue; }

                // Get the form field
                let formField = mapper[field.InternalName];

                // Validate the form field and update the status flag
                let formValidation = formField ? formField.isValid() : isValid;
                isValid = isValid && formValidation;
            }

            // Return the flag
            return isValid;
        },
        save: () => {
            // Return a promise
            return new Promise((resolve, reject) => {
                // Update the item
                ListForm.saveItem(props.info, getValues()).then(info => {
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
            });
        }
    }
};