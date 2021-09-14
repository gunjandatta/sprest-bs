import { Helper, SPTypes, Types } from "gd-sprest";
import { Components } from "../core";
import { DateTimeControlType } from "../datetime";
import { Field } from "../field";
import { IField } from "../field/types";
import { IListForm, IListFormDisplayProps, IListFormEdit, IListFormEditProps } from "./types";

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

    let mapper: { [key: string]: Components.IFormControlProps } = {};
    let rows: Array<Components.IFormRow> = [];

    // See if we are rendering attachments
    if (props.info.attachments) {
        // Render the attachments
        rows.push({
            columns: [{
                control: {
                    id: "ListFormAttachments",
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
        let value = props.info.fieldValuesAsText[fieldName] || "";
        let html: string = props.info.fieldValuesAsHtml[fieldName] || props.info.fieldValuesAsHtml[fieldName.replace(/\_/g, "_x005f_")] || "";

        // Ensure the field exists
        if (field == null) {
            // Log
            console.error("[List Form] Field '" + fieldName + "' does not exist. Check the list or query.");
            continue;
        }

        // See if we are hiding the field
        if (field.SchemaXml.indexOf('ShowInDisplayForm="FALSE"') > 0) { continue; }

        // See if this is a note field
        if (field.FieldTypeKind == SPTypes.FieldType.Note) {
            // Update the html
            html = html.replace(/\r?\n/g, '<br />');
        }
        // Else, see if this is a user field
        else if (field.FieldTypeKind == SPTypes.FieldType.User) {
            // See if this is a multi-user selection
            if ((field as Types.SP.FieldLookup).AllowMultipleValues) {
                let userNames = [];

                // Parse the users
                let users: Types.SP.User[] = (props.info.item[fieldName] ? props.info.item[fieldName].results : null) || [];
                for (let j = 0; j < users.length; j++) {
                    // Append the user name
                    userNames.push(users[j].Title);
                }

                // Set the html value
                html = userNames.join('<br />\n');
            } else {
                // Extract the text only for single selections
                let elUser = document.createElement("div");
                elUser.innerHTML = html;
                html = elUser.innerText;
            }
        }
        // Else, see if this is a choice field
        else if (field.FieldTypeKind == SPTypes.FieldType.Choice || field.FieldTypeKind == SPTypes.FieldType.MultiChoice) {
            // Update the html
            html = value;
        }

        // Set the control
        mapper[fieldName] = {
            data: html,
            description: field.Description,
            isReadonly: true,
            label: field.Title,
            name: field.InternalName,
            type: Components.FormControlTypes.TextField,
            value: html
        };

        // Update the type, based on the field
        switch (field.FieldTypeKind) {
            case SPTypes.FieldType.DateTime:
                mapper[fieldName].type = DateTimeControlType;
                break;
            case SPTypes.FieldType.Note:
                mapper[fieldName].type = Components.FormControlTypes.TextArea;
                break;
            case SPTypes.FieldType.User:
                mapper[fieldName].type = (field as Types.SP.FieldLookup).AllowMultipleValues ? Components.FormControlTypes.TextArea : mapper[fieldName].type;
                break;
        }

        // Detect html
        if (/<*>/g.test(html)) {
            // Update the control to be read-only
            mapper[fieldName].type = Components.FormControlTypes.Readonly;

            // Set the rendered event
            mapper[fieldName].onControlRendered = control => {
                // Set the class name
                control.el.classList.add("form-control");
                control.el.style.backgroundColor = "#e9ecef";

                // Override the html rendered
                control.el.innerHTML = control.props.data;
            }
        }

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

    // Counter for each control
    let ctrlCounter = 0;

    // Render the form
    form = Components.Form({
        el: props.el,
        className: props.className,
        groupClassName: props.groupClassName,
        rowClassName: props.rowClassName,
        onControlRendered: control => {
            // See if all of the controls have been rendered
            if (++ctrlCounter == rows.length) {
                // See if an event exists
                if (props.onFormRendered) {
                    // Execute the form rendered event in another thread
                    setTimeout(() => { props.onFormRendered(form); }, 10);
                }
            }

            // Return the control rendered event
            return props.onControlRendered ? props.onControlRendered(control, props.info.fields[control.props.name]) : null;
        },
        onControlRendering: control => { return props.onControlRendering ? props.onControlRendering(control, props.info.fields[control.name]) : null; },
        rows: props.template || rows
    });

    // Execute the assign to event
    props.assignTo ? props.assignTo(form) : null;

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
    let removeAttachments = (info: Helper.IListFormResult): PromiseLike<void> => {
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
    let saveAttachments = (info: Helper.IListFormResult): PromiseLike<void> => {
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
                    id: "ListFormAttachments",
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
                                                type: Components.PopoverPlacements.Bottom,
                                                btnProps: {
                                                    className: "mr-1",
                                                    isSmall: true,
                                                    text: fileInfo.name
                                                },
                                                options: {
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
                                                    }).el
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
                                    type: Components.PopoverPlacements.Bottom,
                                    btnProps: {
                                        className: "mr-1",
                                        isSmall: true,
                                        text: attachment.FileName,
                                    },
                                    options: {
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
                                        }).el
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

            // See if this is a file leaf ref
            if (fieldName == "FileLeafRef") {
                // Update the value
                value[fieldName] = value[fieldName] || props.info.item.Title;
            }
        }

        // Determine the control mode
        let controlMode = props.controlMode || (props.info.item ? SPTypes.ControlMode.Edit : SPTypes.ControlMode.New);

        // See if this is an edit form and we are hiding this field
        if (controlMode == SPTypes.ControlMode.Edit && field.SchemaXml.indexOf('ShowInEditForm="FALSE"') > 0) { continue; }

        // See if this is a new form and we are hiding this field
        if (controlMode == SPTypes.ControlMode.New && field.SchemaXml.indexOf('ShowInNewForm="FALSE"') > 0) { continue; }

        // See if thi sis a new form and this is an associated lookup field
        if (controlMode == SPTypes.ControlMode.New && (field as Types.SP.FieldLookup).IsDependentLookup) { continue; }

        // See if this is a display form and we are hiding this field
        if (controlMode == SPTypes.ControlMode.Display && field.SchemaXml.indexOf('ShowInDisplayForm="FALSE"') > 0) { continue; }

        // See if this is a read-only field
        if (field.ReadOnlyField) {
            // Do not render in the new form
            if (props.controlMode == SPTypes.ControlMode.New) {
                continue;
            }
        }

        // Do not render a hidden taxonomy field
        if (field.Hidden && field.FieldTypeKind == SPTypes.FieldType.Note && /_0$/.test(field.Title)) { continue; }

        // See if this is an invalid field type
        if (field.FieldTypeKind == SPTypes.FieldType.Invalid) {
            // Ensure it's not a taxonomy field
            if (!/^TaxonomyFieldType/.test(field.TypeAsString)) { continue; }
        }
        // Else, see if this is a calculated column
        else if (field.FieldTypeKind == SPTypes.FieldType.Calculated) {
            // Do not render in the new/edit forms
            if (props.controlMode != SPTypes.ControlMode.Display) { continue; }
        }

        // See if this is a lookup field
        let lookupFilter = null;
        if (field.FieldTypeKind == SPTypes.FieldType.Lookup) {
            // Call the filter event
            lookupFilter = props.onFilterLookupField ? props.onFilterLookupField(field) : null;
        }

        // Create the control
        let fieldControl = Field({
            controlMode: props.controlMode,
            field,
            listInfo: props.info,
            lookupFilter,
            value: value[fieldName],
            onControlRendered: (control, field) => {
                // Update the mapper
                mapper[field.InternalName].control = control;
            },
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

    // Counter for each control
    let ctrlCounter = 0;

    // Render the form
    let form = Components.Form({
        el: props.el,
        className: props.className,
        groupClassName: props.groupClassName,
        rowClassName: props.rowClassName,
        onControlRendered: control => {
            // See if all of the controls have been rendered
            if (++ctrlCounter == rows.length) {
                // See if an event exists
                if (props.onFormRendered) {
                    // Execute the form rendered event in another thread
                    setTimeout(() => { props.onFormRendered(form); }, 10);
                }
            }

            // Return the event
            return props.onControlRendered ? props.onControlRendered(control, props.info.fields[control.props.name]) : null;
        },
        onControlRendering: control => {
            let updateReadOnly = (control: Components.IFormControlProps) => {
                // See if this control is readonly
                if (control.isReadonly) {
                    let html = (props.info.fieldValuesAsHtml && props.info.fieldValuesAsHtml[field.InternalName]) || "";

                    // Update the control properties
                    control.type = Components.FormControlTypes.Readonly;

                    // Detect html
                    if (/<*>/g.test(html)) {
                        // Update the control properties
                        control.data = html;
                    }

                    // Set the rendered event
                    control.onControlRendered = control => {
                        // Set the class name
                        control.el.classList.add("form-control");
                        control.el.style.backgroundColor = "#e9ecef";

                        // Override the html rendered
                        control.el.innerHTML = html || control.props.value;
                    }

                    // See if this is a user field
                    if (field.FieldTypeKind == SPTypes.FieldType.User) {
                        // See if this is a multi-user selection
                        if ((field as Types.SP.FieldLookup).AllowMultipleValues) {
                            let userNames = [];

                            // Parse the users
                            let users: Types.SP.User[] = (props.info.item[field.InternalName] ? props.info.item[field.InternalName].results : null) || [];
                            for (let j = 0; j < users.length; j++) {
                                // Append the user name
                                userNames.push(users[j].Title);
                            }

                            // Set the html value
                            html = userNames.join('<br />\n');
                        } else {
                            // Extract the text only for single selections
                            let elUser = document.createElement("div");
                            elUser.innerHTML = html;
                            html = elUser.innerText;
                        }
                    }
                }
            }

            // Execute the rendering event
            let field = props.info.fields[control.name];
            let returnVal = props.onControlRendering ? props.onControlRendering(control, field) : null;
            if (returnVal && returnVal.then) {
                // Wait for the event to complete
                returnVal.then((ctrlProps) => {
                    // Update the properties
                    updateReadOnly(ctrlProps || control);
                });
            } else {
                // Update the properties
                updateReadOnly(control);
            }
        },
        rows: props.template || rows,
        value
    });

    // Method to get the values
    let getValues = () => {
        let values = {};

        // Parse the fields
        for (let fieldName in props.info.fields) {
            // Get the form field and skip readonly fields
            let formField = mapper[fieldName];
            if (formField == null || formField.controlProps.isReadonly) { continue; }

            // Get the field value
            let fieldValue = formField.getValue();

            // Set the item value
            values[fieldValue.name] = fieldValue.value;

            // See if this is the file leaf ref
            if (fieldValue.name == "FileLeafRef") {
                // Update the 'Title'
                values["Title"] = values["Title"] || values[fieldValue.name];
            }
        }

        // Return the form values
        return values;
    };

    // Create the form object
    let formObj: any = {
        appendControls: controls => { form.appendControls(controls); },
        appendRows: rows => { form.appendRows(rows); },
        el: form.el as HTMLFormElement,
        getControl: (fieldName: string) => { return mapper[fieldName] ? mapper[fieldName].control : null; },
        getValues,
        isValid: () => {
            let isValid = true;

            // Parse the fields
            for (let fieldName in props.info.fields) {
                // Skip readonly fields
                let formField = mapper[fieldName];
                if (formField == null || formField.controlProps.isReadonly) { continue; }

                // Validate the form field and update the status flag
                let controlIsValid = formField.isValid();
                isValid = isValid && controlIsValid;
            }

            // Return the flag
            return isValid;
        },
        save: () => {
            let onSaving = (values) => {
                return new Promise((resolve) => {
                    // See if a save event exists
                    let returnVal = props.onSaving ? props.onSaving(values) : null;
                    if (returnVal && returnVal.then) {
                        // Wait for the promise to complete
                        returnVal.then(newValues => {
                            // Resolve the promise
                            resolve(newValues || values);
                        });
                    } else {
                        // Resolve the promise
                        resolve(values);
                    }
                });
            }

            // Return a promise
            return new Promise((resolve, reject) => {
                // Call the saving event
                onSaving(getValues()).then(values => {
                    // Update the item
                    ListForm.saveItem(props.info, values).then(info => {
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
            });
        }
    };

    // Execute the assign to event
    props.assignTo ? props.assignTo(formObj) : null;

    // Return the form
    return formObj;
};