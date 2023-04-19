import { Helper, SPTypes, Types } from "gd-sprest";
import { Components } from "../core";
import { DateTimeControlType } from "../datetime";
import { IFormControlPropsDateTime } from "../datetime/types";
import { Field } from "../field";
import { IField, IFormControlLookupProps, IFieldImageInfo, IFieldImageValue } from "../field/types";
import { RichTextBoxControlType, RichTextBoxTypes } from "../richTextBox"
import { IFormControlPropsRichTextBox } from "../richTextBox/types";
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

    // See if an event exists
    if (props.onGetFields) {
        // Call the event
        fieldNames = props.onGetFields(fieldNames);
    }

    // Return the field names
    return fieldNames;
}

// Method to render the display control
let renderDisplay = (fieldName: string, props: IListFormDisplayProps): Components.IFormControlProps => {
    let control: Components.IFormControlProps = null;
    let field = props.info.fields[fieldName];
    let isRichText = field ? (field as Types.SP.FieldMultiLineText).RichText : false;
    let value = props.info.fieldValuesAsText ? props.info.fieldValuesAsText[fieldName] || "" : "";
    let html: string = props.info.fieldValuesAsHtml ? props.info.fieldValuesAsHtml[fieldName] || props.info.fieldValuesAsHtml[fieldName.replace(/\_/g, "_x005f_")] || "" : "";

    // Ensure the field exists
    if (field == null) {
        // See if a value was found
        if (value || html) {
            // Return a read-only control
            return {
                data: value || html,
                isDisabled: true,
                label: fieldName,
                name: fieldName,
                type: Components.FormControlTypes.TextField,
                value: value || html
            };
        }

        // Log
        console.warn("[List Form] Field '" + fieldName + "' does not exist. Check the list or query.");
        return control;
    }

    // See if we are hiding the field
    if (field.SchemaXml.indexOf('ShowInDisplayForm="FALSE"') > 0) { return control; }

    // See if this is an image field
    if (field.FieldTypeKind == SPTypes.FieldType.Image) {
        // Ensure a value exists
        if (value) {
            // Update the html
            try {
                let imgInfo: IFieldImageValue = JSON.parse(value);
                html = "<img style='height: 64px; width: 64px;' src='" + imgInfo.serverRelativeUrl + "' alt='" + imgInfo.fileName + "' />";
            } catch { }
        }
    }
    // Else, see if this is a note field
    else if (field.FieldTypeKind == SPTypes.FieldType.Note) {
        // Update the html
        html = html.replace(/\r?\n/g, '<br />')
            .replace(/&quot;/g, '"');
    }
    // Else, see if this is a user field
    else if (field.FieldTypeKind == SPTypes.FieldType.User) {
        // See if this is a multi-user selection
        if ((field as Types.SP.FieldUser).AllowMultipleValues) {
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
    control = {
        data: html,
        description: field.Description,
        isDisabled: true,
        label: field.Title,
        name: field.InternalName,
        type: Components.FormControlTypes.TextField,
        value: html
    };

    // Update the type, based on the field
    switch (field.FieldTypeKind) {
        case SPTypes.FieldType.DateTime:
            // Set the time flag
            (control as IFormControlPropsDateTime).showTime = (field as Types.SP.FieldDateTime).DisplayFormat == SPTypes.DateFormat.DateTime ? true : false;

            // Set the type
            control.type = DateTimeControlType;
            break;
        case SPTypes.FieldType.Lookup:
            // Ensure a value exists
            if (html) {
                // Create an element to store the html
                let elLookup = document.createElement("div");
                elLookup.innerHTML = html;

                // Update the value to be text
                html = elLookup.innerText
                control.data = html;
                control.value = html;
            }
            break;
        case SPTypes.FieldType.Note:
            // See if this is a rich text field
            if (isRichText) {
                // Set the properties
                (control as IFormControlPropsRichTextBox).toolbarType = RichTextBoxTypes.None;
                control.type = RichTextBoxControlType;
            } else {
                // Set the type
                control.type = Components.FormControlTypes.TextArea;
            }
            break;
        case SPTypes.FieldType.URL:
            // Set the value
            let urlValue = props.info.item[fieldName] as Types.SP.FieldUrlValue;
            html = urlValue ? urlValue.Url : html;
            control.value = html;
            break;
        case SPTypes.FieldType.User:
            // Set the type
            control.type = (field as Types.SP.FieldLookup).AllowMultipleValues ? Components.FormControlTypes.TextArea : control.type;
            break;
    }

    // Detect html
    if (/<*>/g.test(html)) {
        let isMultiLine = html.indexOf("<br />") >= 0 ? true : false;

        // See if it's an image
        if (field.FieldTypeKind == SPTypes.FieldType.Image) {
            // Set the rendered event
            control.onControlRendered = control => {
                // Override the html rendered
                control.el.innerHTML = html;
            }
        }
        // Else, ensure this isn't a rich text field or multi-line
        else if (!isRichText && !isMultiLine) {
            // Update the control to be read-only
            control.type = Components.FormControlTypes.Readonly;

            // Set the rendered event
            control.onControlRendered = control => {
                // Get the target element
                let elTarget = control.el.querySelector("input") || control.el;

                // Override the html rendered
                elTarget.innerHTML = control.props.data;
            }
        } else {
            // Update the html break line
            html = html.replace(/<br \/>/g, '\n');
            control.data = html;
            control.value = html;
        }
    }
    // Else, detect xml
    else if (/&lt;|&gt;|&amp;|&quot;/i.test(html)) {
        // Update the value
        control.value = html.replace(/&lt;/ig, '<')
            .replace(/&gt;/ig, '>')
            .replace(/&amp;/ig, '&')
            .replace(/&quot;/ig, '"');
    }

    // Return the control
    return control;
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

    // Method to generate the attachments row
    let generateAttachmentsRow = () => {
        // See if we are rendering attachments
        let displayAttachments = typeof (props.displayAttachments) === "boolean" ? props.displayAttachments : true;
        if (props.info.attachments && displayAttachments) {
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
                                        className: "me-1",
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
    }

    // Get the fields to render
    let fieldNames = getFieldsToRender(props);

    // Parse the fields to render
    for (let i = 0; i < fieldNames.length; i++) {
        let fieldName = fieldNames[i];

        // See if this is the attachment field
        if (fieldName == "Attachments") {
            // Generate the attachments row
            generateAttachmentsRow();
            continue;
        }

        // Generate the control
        let control = renderDisplay(fieldName, props);
        if (control) {
            // Update the mapper
            mapper[fieldName] = control;

            // Add the row
            rows.push({
                columns: [{ control }]
            });
        }
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
        get el() { return form ? form.el as HTMLFormElement : null; },
        getControl(fieldName: string) { return form ? form.getControl(fieldName) : null; }
    };
};

// Render the edit form
ListForm.renderEditForm = (props: IListFormEditProps): IListFormEdit => {
    let customControls: Components.IFormControl[] = [];
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

    // Method to upload the images
    let images: IFieldImageInfo[] = [];
    let uploadImages = (info: Helper.IListFormResult): PromiseLike<any> => {
        // Return a promise
        return new Promise((resolve) => {
            let values = {};

            // Ensure we have images
            if (images.length == 0) {
                // Do nothing
                resolve(values);
                return;
            }

            // Get the list folder
            Helper.ListFormField.getOrCreateImageFolder(info).then(fld => {
                // Removes the existing image
                let removeExisting = (value: string) => {
                    // Return a promise
                    return new Promise(resolve => {
                        // Try to get the image info
                        let imageInfo: IFieldImageValue = null;
                        try { imageInfo = JSON.parse(value); }
                        catch { }

                        // Ensure the info exists
                        if (imageInfo) {
                            // See if the file exists
                            fld.Files(imageInfo.fileName).execute(
                                // Exists
                                file => {
                                    // Delete the file
                                    file.delete().execute(() => {
                                        // Resolve the request
                                        resolve(null);
                                    });
                                },

                                // Doesn't exist
                                () => {
                                    // Resolve the request
                                    resolve(null);
                                }
                            );
                        } else {
                            // Resolve the request
                            resolve(null);
                        }
                    });
                }

                // Validates the list name
                let validateFileName = (fileName: string): PromiseLike<string> => {
                    // Return a promise
                    return new Promise(resolve => {
                        // Get the file name w/out the extension
                        let info = fileName.toLowerCase().split('.');
                        let fileExt = info[info.length - 1];
                        let fileNameNoExt = "";
                        for (let i = 0; i < info.length - 1; i++) { fileNameNoExt += info[i]; }

                        // Get the files with a similar name
                        fld.Files().query({
                            Filter: "startswith(Name, '" + fileNameNoExt + "')",
                            Top: 5000
                        }).execute(files => {
                            let isValid = true;
                            let counter = -1;
                            let validFileName = null;

                            // See if no files were found
                            if (files.results.length == 0) {
                                // Resolve the request
                                resolve(fileName);
                                return;
                            }

                            // Loop until it's valid
                            do {
                                // Reset the flag and file name
                                validFileName = fileNameNoExt + (++counter == 0 ? "" : counter) + "." + fileExt;
                                isValid = true;

                                // Parse the files
                                for (let i = 0; i < files.results.length; i++) {
                                    let file = files.results[i];

                                    // See if there is a match
                                    if (file.Name.toLowerCase() == validFileName) {
                                        // Set the flag
                                        isValid = false;
                                        break;
                                    }
                                }
                            } while (!isValid)

                            // Resolve the request
                            resolve(validFileName);
                        });
                    });
                }

                // Parse the images
                Helper.Executor(images, imageInfo => {
                    // See if this is a file that needs to be uploaded
                    if (imageInfo.name && imageInfo.data && imageInfo.fieldName) {
                        // Return a promise
                        return new Promise(resolve => {
                            // Remove the existing image
                            removeExisting(info.item ? info.item[imageInfo.fieldName] : null).then(() => {
                                // Validate the name
                                validateFileName(imageInfo.name).then(fileName => {
                                    // Upload the file
                                    fld.Files().add(fileName, true, imageInfo.data).execute(file => {
                                        // Update the field value
                                        values[imageInfo.fieldName] = JSON.stringify({
                                            fieldId: imageInfo.fieldId,
                                            fieldName: imageInfo.fieldName,
                                            fileName: file.Name,
                                            id: file.UniqueId,
                                            nativeFile: {},
                                            serverRelativeUrl: file.ServerRelativeUrl,
                                            type: "thumbnail"
                                        } as IFieldImageValue);

                                        // Resolve the request
                                        resolve(null);
                                    });
                                })
                            });
                        });
                    }
                }).then(() => {
                    // Resolve the request
                    resolve(values);
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

    // Generates the attachments row
    let generateAttachmentsRow = () => {
        // See if we are rendering attachments
        let displayAttachments = typeof (props.displayAttachments) === "boolean" ? props.displayAttachments : true;
        if (props.info.attachments && displayAttachments) {
            // Set a default field
            // This will help w/ the onControlRendering/ed events to not have a null value for this parameter
            props.info.fields["Attachments"] = {} as any;

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
                                        className: "upload-btn me-1",
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
                                                        className: "me-1 file-attachment",
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
                                                                let files = btnGroup.querySelectorAll(".btn.file-attachment");
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
                                            className: "me-1 file-attachment",
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
                                                    let files = btnGroup.querySelectorAll(".btn.file-attachment");
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
    }

    // Get the fields to render
    let fieldNames = getFieldsToRender(props);

    // Parse the fields to render
    for (let i = 0; i < fieldNames.length; i++) {
        let fieldName = fieldNames[i];
        let field = props.info.fields[fieldName];

        // See if this is the attachment field
        if (fieldName == "Attachments") {
            // Generate the attachments row
            generateAttachmentsRow();
            continue;
        }

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

        // See if there is a custom event for setting the value
        if (props.onSetFieldDefaultValue) {
            // Call the event to override the value
            value[fieldName] = props.onSetFieldDefaultValue(field, value[fieldName]);
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
                    // Get the control display properties
                    let dispControl = renderDisplay(control.name, props);
                    if (dispControl) {
                        // Update the properties
                        control.data = dispControl.data;
                        control.label = dispControl.label;
                        (control as IFormControlPropsDateTime).showTime = (dispControl as IFormControlPropsDateTime).showTime;
                        control.type = dispControl.type;
                        control.value = dispControl.value;
                    }
                }
            }

            // Execute the rendering event
            let field = props.info.fields[control.name] || {} as any;
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

        // See if the content type was set
        if (props.info.contentType) {
            // Set the content type id
            values["ContentTypeId"] = props.info.contentType.Id.StringValue;
        }

        // Clear the image values
        images = [];

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

            // See if this is an image field
            let field = props.info.fields[fieldName];
            if (field && field.FieldTypeKind == SPTypes.FieldType.Image) {
                // Add the value if it exists
                fieldValue.value ? images.push(fieldValue.value) : null;
            }
        }

        // Return the form values
        return values;
    };

    // Create the form object
    let formObj: any = {
        appendControls: (controls: Components.IFormControlProps[]) => {
            // Append the controls
            form.appendControls(controls);

            // Wait for the controls to be loaded
            setTimeout(() => {
                // Parse the new controls
                for (let i = 0; i < controls.length; i++) {
                    let control = controls[i].name ? form.getControl(controls[i].name) : null;
                    if (control) {
                        // Append the control
                        customControls.push(control);
                    }
                }
            }, 10);
        },
        appendRows: (rows: Components.IFormRow[]) => {
            // Append the controls
            form.appendRows(rows);

            // Wait for the controls to be loaded
            setTimeout(() => {
                // Parse the rows
                for (let i = 0; i < rows.length; i++) {
                    // Parse the columns
                    let columns = rows[i].columns;
                    for (let j = 0; j < columns.length; j++) {
                        // Get the control
                        let control = columns[j].control && columns[j].control.name ? form.getControl(columns[j].control.name) : null;
                        if (control) {
                            // Append the control
                            customControls.push(control);
                        }
                    }
                }
            }, 10);
        },
        el: form.el as HTMLFormElement,
        getControl: (fieldName: string) => {
            // See if it's in the mapper
            if (mapper[fieldName]) {
                // Return the control
                return mapper[fieldName].control;
            }

            // Parse the custom controls
            for (let i = 0; i < customControls.length; i++) {
                let control = customControls[i];

                // See if this is the target control
                if (control.props.name == fieldName) {
                    // Return the control
                    return control;
                }
            }

            // Not found
            return null;
        },
        getItem: () => { return props.info.item; },
        getValues,
        insertControl: (idx: number, control: Components.IFormControlProps) => {
            // Append the controls
            form.insertControl(idx, control);

            // Wait for the controls to be loaded
            setTimeout(() => {
                let newControl = control.name ? form.getControl(control.name) : null;
                if (newControl) {
                    // Append the control
                    customControls.push(newControl);
                }

            }, 10);
        },
        isValid: () => {
            let isValid = true;

            // Parse the fields
            for (let fieldName in props.info.fields) {
                // Skip readonly fields
                let formField = mapper[fieldName];
                if (formField == null || formField.controlProps.isReadonly) { continue; }

                // Validate the form field and update the status flag
                let controlIsValid = formField.isValid();

                // Update the flag
                isValid = isValid && controlIsValid;
            }

            // Parse the custom controls
            for (let i = 0; i < customControls.length; i++) {
                // Validate the form field and update the status flag
                let controlIsValid = customControls[i].isValid;
                isValid = isValid && controlIsValid;
            }

            // Return the flag
            return isValid;
        },
        save: (customValues: any = {}) => {
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
                let formValues = getValues();

                // Upload the images
                uploadImages(props.info).then((imageValues) => {
                    // Call the saving event
                    onSaving({ ...formValues, ...imageValues, ...customValues }).then(values => {
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
            });
        }
    };

    // Execute the assign to event
    props.assignTo ? props.assignTo(formObj) : null;

    // Return the form
    return formObj;
};