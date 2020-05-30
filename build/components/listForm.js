"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gd_bs_1 = require("gd-bs");
var gd_sprest_1 = require("gd-sprest");
var field_1 = require("./field");
// Extend the list form
exports.ListForm = gd_sprest_1.Helper.ListForm;
// Method to get the fields to render
var getFieldsToRender = function (props) {
    var fieldNames = [];
    // See if the "include" fields property is defined
    if (props.includeFields) {
        // Set the field names
        fieldNames = props.includeFields;
    }
    else {
        // Parse the fields
        for (var fieldName in props.info.fields) {
            // See if the "exclude" property is set
            if (props.excludeFields) {
                var renderFl = true;
                // Parse the fields
                for (var i = 0; i < props.excludeFields.length; i++) {
                    // See if we are excluding this field
                    if (props.excludeFields[i] == fieldName) {
                        // Set the flag
                        renderFl = false;
                        break;
                    }
                }
                // Skip this field, if we are not rendering it
                if (!renderFl) {
                    continue;
                }
            }
            // Add the field name
            fieldNames.push(fieldName);
        }
    }
    // Return the field names
    return fieldNames;
};
// Method to render a display form for an item
exports.ListForm.renderDisplayForm = function (props) {
    var form = null;
    // Render a loading message
    var progress = gd_bs_1.Components.Progress({
        el: props.el,
        isAnimated: true,
        isStriped: true,
        label: "Loading the Form",
        size: 100
    });
    var hasUserField = false;
    var mapper = {};
    var rows = [];
    // See if we are rendering attachments
    if (props.info.attachments) {
        // Render the attachments
        rows.push({
            columns: [{
                    control: {
                        label: "Attachments",
                        name: "Attachments",
                        onControlRendered: function (control) {
                            var items = [];
                            // Parse the attachments
                            for (var i = 0; i < props.info.attachments.length; i++) {
                                var attachment = props.info.attachments[i];
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
                            gd_bs_1.Components.Toolbar({
                                el: control.el,
                                items: items
                            });
                        }
                    }
                }]
        });
    }
    // Parse the fields to render
    var fieldNames = getFieldsToRender(props);
    for (var i = 0; i < fieldNames.length; i++) {
        var fieldName = fieldNames[i];
        var field = props.info.fields[fieldName];
        var html = props.info.fieldValuesAsHtml[fieldName] || props.info.fieldValuesAsHtml[fieldName.replace(/\_/g, "_x005f_")] || "";
        // Ensure the field exists
        if (field == null) {
            // Log
            console.error("[List Form] Field '" + fieldName + "' does not exist. Check the list or query.");
            continue;
        }
        // See if this is a note field
        if (field.FieldTypeKind == gd_sprest_1.SPTypes.FieldType.Note) {
            // Update the html
            html = html.replace(/\r?\n/g, '<br />');
        }
        // Else, see if this is a user field
        else if (field.FieldTypeKind == gd_sprest_1.SPTypes.FieldType.User) {
            // Set the flag
            hasUserField = true;
        }
        // Set the control
        mapper[fieldName] = {
            data: html,
            description: field.Description,
            isReadonly: true,
            label: field.Title,
            name: field.InternalName,
            type: gd_bs_1.Components.FormControlTypes.TextField,
            value: html
        };
        // Update the type, based on the field
        switch (field.FieldTypeKind) {
            case gd_sprest_1.SPTypes.FieldType.Note:
                mapper[fieldName].type = gd_bs_1.Components.FormControlTypes.TextArea;
                break;
        }
        // Detect html
        if (/<*>/g.test(html)) {
            // Update the control to be read-only
            mapper[fieldName].type = gd_bs_1.Components.FormControlTypes.Readonly;
            // Set the rendered event
            mapper[fieldName].onControlRendered = function (control) {
                // Set the class name
                control.el.classList.add("form-control");
                control.el.style.backgroundColor = "#e9ecef";
                // Override the html rendered
                control.el.innerHTML = control.props.data;
            };
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
        var updateControl = function (refControl) {
            // Get the control from the mapper
            var control = refControl ? mapper[refControl.name] : null;
            // Ensure the controls exists
            if (control && refControl) {
                // Parse the control keys
                for (var key in control) {
                    // Skip if a value is already defined
                    if (refControl[key]) {
                        continue;
                    }
                    // Update the property
                    refControl[key] = control[key];
                }
            }
        };
        // Parse the template
        for (var i = 0; i < props.template.length; i++) {
            var row = props.template[i];
            // Parse the columns if there are columns
            var columns = row.columns || [];
            for (var j = 0; j < columns.length; j++) {
                var column = columns[j];
                // Update the control
                updateControl(column.control);
            }
        }
    }
    // Remove the progress bar
    progress.el.parentElement ? progress.el.parentElement.removeChild(progress.el) : null;
    // Render the form
    form = gd_bs_1.Components.Form({
        el: props.el,
        onControlRendered: function (control) { return props.onControlRendered ? props.onControlRendered(control, props.info.fields[control.props.name]) : null; },
        onControlRendering: function (control) { return props.onControlRendering ? props.onControlRendering(control, props.info.fields[control.name]) : null; },
        rows: props.template || rows
    });
    // See if we are displaying a user field
    if (hasUserField) {
        // Enable the persona
        window["ProcessImn"]();
    }
    // Return the form informaiton
    return {
        get el() { return form ? form.el : null; }
    };
};
// Render the edit form
exports.ListForm.renderEditForm = function (props) {
    var mapper = {};
    var rows = [];
    var value = {};
    var attachments = {
        delete: [],
        new: []
    };
    // Method to add a refresh alert
    var addRefreshLink = function () {
        // Ensure the link doesn't already exist
        if (props.el.querySelector(".refresh-btn")) {
            return;
        }
        // Create the refresh button
        var alert = gd_bs_1.Components.ButtonGroup({
            className: "refresh-btn",
            buttonType: gd_bs_1.Components.ButtonTypes.Danger,
            buttons: [
                {
                    text: "Refresh Form",
                    onClick: function () {
                        // Clear the element and reload the form
                        props.el.innerHTML = "";
                        // Render the form
                        exports.ListForm.renderEditForm(props);
                    }
                },
                {
                    text: "Refresh Page",
                    onClick: function () {
                        // Refresh the page
                        document.location.href = document.location.href;
                    }
                }
            ]
        });
        // Add the element at the top
        props.el.insertBefore(alert.el, props.el.children[0]);
    };
    // Method to remove the attachments
    var removeAttachments = function (info) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Ensure attachments exists
            if (attachments.delete.length == 0) {
                resolve();
                return;
            }
            // Get the web
            props.info.list.ParentWeb().execute(function (web) {
                // Parse the attachments
                gd_sprest_1.Helper.Executor(attachments.delete, function (attachment) {
                    // Get the attachment file
                    web.getFileByServerRelativeUrl(attachment.ServerRelativeUrl).delete().execute();
                    // Parse the attachments
                    for (var i = 0; i < props.info.attachments.length; i++) {
                        // See if this is the target attachment
                        if (props.info.attachments[i].ServerRelativeUrl == attachment.ServerRelativeUrl) {
                            // Remove this item
                            props.info.attachments.splice(i, 1);
                            break;
                        }
                    }
                }).then(function () {
                    // Wait for the files to be deleted
                    web.done(function () {
                        // Clear the attachments
                        attachments.delete = [];
                        // Resolve the promise
                        resolve();
                    });
                });
            });
        });
    };
    // Method to save the attachments
    var saveAttachments = function (info) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Ensure attachments exists
            if (attachments.new.length == 0) {
                resolve();
                return;
            }
            // Parse the attachments
            gd_sprest_1.Helper.Executor(attachments.new, function (attachment) {
                // Get the item's attachments
                props.info.list.Items(info.item.Id).AttachmentFiles()
                    // Add the file
                    .add(attachment.name, attachment.data)
                    // Execute the request
                    .execute(function (attachment) {
                    // Ensure attachments exist
                    info.attachments = info.attachments || [];
                    // Append the attachment
                    info.attachments.push(attachment);
                });
            }).then(function () {
                // Wait for the files to upload
                props.info.list.done(function () {
                    // Clear the attachments
                    attachments.new = [];
                    // Resolve the promise
                    resolve();
                });
            });
        });
    };
    // Render a loading message
    var progress = gd_bs_1.Components.Progress({
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
                        onControlRendered: function (control) {
                            // Render a toolbar
                            var toolbar = gd_bs_1.Components.Toolbar({
                                el: control.el,
                                items: [{
                                        buttons: [{
                                                className: "upload-btn mr-1",
                                                isSmall: true,
                                                text: "Upload",
                                                type: gd_bs_1.Components.ButtonTypes.Secondary,
                                                onClick: function (btn, ev) {
                                                    var elUpload = ev.currentTarget;
                                                    // Display an upload dialog
                                                    gd_sprest_1.Helper.ListForm.showFileDialog().then(function (fileInfo) {
                                                        // Get the buttons and remove any duplicates
                                                        var buttons = elUpload.parentElement.querySelectorAll(".btn");
                                                        for (var i = 0; i < buttons.length; i++) {
                                                            var button = buttons[i];
                                                            // See if this is the associated button
                                                            if (button.innerText.replace(/X$/, '') == fileInfo.name) {
                                                                // Get the badge
                                                                var badge = button.querySelector(".badge");
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
                                                        elUpload.parentElement.appendChild(gd_bs_1.Components.Popover({
                                                            isDismissible: true,
                                                            type: gd_bs_1.Components.PopoverTypes.Bottom,
                                                            btnProps: {
                                                                className: "mr-1",
                                                                isSmall: true,
                                                                text: fileInfo.name
                                                            },
                                                            options: {
                                                                html: true,
                                                                content: gd_bs_1.Components.Button({
                                                                    data: fileInfo,
                                                                    isSmall: true,
                                                                    text: "Remove",
                                                                    type: gd_bs_1.Components.ButtonTypes.Danger,
                                                                    onClick: function (btn, ev) {
                                                                        var fileName = btn.data.name;
                                                                        // Parse the array
                                                                        for (var i = 0; i < attachments.new.length; i++) {
                                                                            // See if this is the target attachment
                                                                            if (attachments.new[i].name == fileName) {
                                                                                // Remove this attachment
                                                                                attachments.new.splice(i, 1);
                                                                                break;
                                                                            }
                                                                        }
                                                                        // Get the files
                                                                        var files = btnGroup.querySelectorAll(".btn[data-toggle='popover']");
                                                                        for (var i = 0; i < files.length; i++) {
                                                                            var file = files[i];
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
                            var btnGroup = toolbar.el.querySelector(".btn-group");
                            if (btnGroup) {
                                // Parse the attachments
                                for (var i = 0; i < props.info.attachments.length; i++) {
                                    var attachment = props.info.attachments[i];
                                    // Add the attachment
                                    btnGroup.appendChild(gd_bs_1.Components.Popover({
                                        isDismissible: true,
                                        type: gd_bs_1.Components.PopoverTypes.Bottom,
                                        btnProps: {
                                            className: "mr-1",
                                            isSmall: true,
                                            text: attachment.FileName,
                                        },
                                        options: {
                                            html: true,
                                            content: gd_bs_1.Components.Button({
                                                data: attachment,
                                                isSmall: true,
                                                text: "Remove",
                                                type: gd_bs_1.Components.ButtonTypes.Danger,
                                                onClick: function (btn, ev) {
                                                    var attachment = btn.data;
                                                    // Add this file for deletion
                                                    attachments.delete.push(attachment);
                                                    // Get the files
                                                    var files = btnGroup.querySelectorAll(".btn[data-toggle='popover']");
                                                    for (var i_1 = 0; i_1 < files.length; i_1++) {
                                                        var file = files[i_1];
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
    var fieldNames = getFieldsToRender(props);
    for (var i = 0; i < fieldNames.length; i++) {
        var fieldName = fieldNames[i];
        var field = props.info.fields[fieldName];
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
            if (field.FieldTypeKind == gd_sprest_1.SPTypes.FieldType.Lookup || field.FieldTypeKind == gd_sprest_1.SPTypes.FieldType.User) {
                // Update the value
                value[fieldName] = value[fieldName + "Id"] || (value[fieldName] ? value[fieldName].Id : null) || value[fieldName];
            }
        }
        // See if this is an edit form
        if (props.controlMode == gd_sprest_1.SPTypes.ControlMode.Edit) {
            // See if we are hiding the field
            if (field.SchemaXml.indexOf('ShowInEditForm="FALSE"') > 0) {
                continue;
            }
        }
        // See if this is a display form
        if (props.controlMode == gd_sprest_1.SPTypes.ControlMode.Display) {
            // See if we are hiding the field
            if (field.SchemaXml.indexOf('ShowInDisplayForm="FALSE"') > 0) {
                continue;
            }
        }
        // See if this is a new form
        if (props.controlMode == gd_sprest_1.SPTypes.ControlMode.New) {
            // See if we are hiding the field
            if (field.SchemaXml.indexOf('ShowInNewForm="FALSE"') > 0) {
                continue;
            }
        }
        // See if this is a read-only field
        if (field.ReadOnlyField) {
            // Do not render in the new form
            if (props.controlMode == gd_sprest_1.SPTypes.ControlMode.New) {
                continue;
            }
        }
        // Do not render a hidden taxonomy field
        if (field.Hidden && field.FieldTypeKind == gd_sprest_1.SPTypes.FieldType.Note && /_0$/.test(field.Title)) {
            continue;
        }
        // See if this is an invalid field type
        if (field.FieldTypeKind == gd_sprest_1.SPTypes.FieldType.Invalid) {
            // Ensure it's not a taxonomy field
            if (!/^TaxonomyFieldType/.test(field.TypeAsString)) {
                continue;
            }
        }
        // Else, see if this is a calculated column
        else if (field.FieldTypeKind == gd_sprest_1.SPTypes.FieldType.Calculated) {
            // Do not render in the new/edit forms
            if (props.controlMode != gd_sprest_1.SPTypes.ControlMode.Display) {
                continue;
            }
        }
        // Create the control
        var fieldControl = field_1.Field({
            controlMode: props.controlMode,
            field: field,
            listInfo: props.info,
            value: value[fieldName],
            onControlRendered: function (control, field) {
                // Update the mapper
                mapper[field.InternalName].control = control;
            },
            onValidate: props.onValidate,
            onError: function (msg) {
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
        var updateControl = function (refControl) {
            // Get the control from the mapper
            var control = refControl && mapper[refControl.name] ? mapper[refControl.name].controlProps : null;
            // Ensure the controls exists
            if (control && refControl) {
                // Parse the control keys
                for (var key in control) {
                    // Skip if a value is already defined
                    if (refControl[key]) {
                        continue;
                    }
                    // Update the property
                    refControl[key] = control[key];
                }
            }
        };
        // Parse the template
        for (var i = 0; i < props.template.length; i++) {
            var row = props.template[i];
            // Parse the columns if there are columns
            var columns = row.columns || [];
            for (var j = 0; j < columns.length; j++) {
                var column = columns[j];
                // Update the control
                updateControl(column.control);
            }
        }
    }
    // Remove the progress bar
    progress.el.parentElement ? progress.el.parentElement.removeChild(progress.el) : null;
    // Render the form
    var form = gd_bs_1.Components.Form({
        el: props.el,
        onControlRendered: function (control) { return props.onControlRendered ? props.onControlRendered(control, props.info.fields[control.props.name]) : null; },
        onControlRendering: function (control) {
            var updateReadOnly = function (control) {
                // See if this control is readonly
                if (control.isReadonly) {
                    var html_1 = props.info.fieldValuesAsHtml[field.InternalName];
                    // Update the control properties
                    control.type = gd_bs_1.Components.FormControlTypes.Readonly;
                    // Detect html
                    if (/<*>/g.test(html_1)) {
                        // Update the control properties
                        control.data = html_1;
                    }
                    // Set the rendered event
                    control.onControlRendered = function (control) {
                        // Set the class name
                        control.el.classList.add("form-control");
                        control.el.style.backgroundColor = "#e9ecef";
                        // Override the html rendered
                        control.el.innerHTML = html_1 || control.props.value;
                    };
                    // See if this is a user field
                    if (field.FieldTypeKind == gd_sprest_1.SPTypes.FieldType.User && window["ProcessImn"]) {
                        // Enable the persona
                        window["ProcessImn"]();
                    }
                }
            };
            // Execute the rendering event
            var field = props.info.fields[control.name];
            var returnVal = props.onControlRendering ? props.onControlRendering(control, field) : null;
            if (returnVal && returnVal.then) {
                // Wait for the event to complete
                returnVal.then(function (ctrlProps) {
                    // Update the properties
                    updateReadOnly(ctrlProps || control);
                });
            }
            else {
                // Update the properties
                updateReadOnly(control);
            }
        },
        rows: props.template || rows,
        value: value
    });
    // Method to get the values
    var getValues = function () {
        var values = {};
        // Parse the fields
        for (var fieldName in props.info.fields) {
            // Get the form field and skip readonly fields
            var formField = mapper[fieldName];
            if (formField == null || formField.controlProps.isReadonly) {
                continue;
            }
            // Get the field value
            var fieldValue = formField.getValue();
            // Set the item value
            values[fieldValue.name] = fieldValue.value;
        }
        // Return the form values
        return values;
    };
    // Return the form
    return {
        appendControls: function (controls) { form.appendControls(controls); },
        appendRows: function (rows) { form.appendRows(rows); },
        el: form.el,
        getControl: function (fieldName) { return mapper[fieldName] ? mapper[fieldName].control : null; },
        getValues: getValues,
        isValid: function () {
            var isValid = true;
            // Parse the fields
            for (var fieldName in props.info.fields) {
                // Skip readonly fields
                var formField = mapper[fieldName];
                if (formField == null || formField.controlProps.isReadonly) {
                    continue;
                }
                // Validate the form field and update the status flag
                isValid = isValid && formField.isValid();
            }
            // Return the flag
            return isValid;
        },
        save: function () {
            var onSaving = function (values) {
                return new Promise(function (resolve) {
                    // See if a save event exists
                    var returnVal = props.onSaving ? props.onSaving(values) : null;
                    if (returnVal && returnVal.then) {
                        // Wait for the promise to complete
                        returnVal.then(function (newValues) {
                            // Resolve the promise
                            resolve(newValues || values);
                        });
                    }
                    else {
                        // Resolve the promise
                        resolve(values);
                    }
                });
            };
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Call the saving event
                onSaving(getValues()).then(function (values) {
                    // Update the item
                    exports.ListForm.saveItem(props.info, values).then(function (info) {
                        // Remove the attachments
                        removeAttachments(info).then(function () {
                            // Save the attachments
                            saveAttachments(info).then(function () {
                                // Update the info
                                props.info = info;
                                // Resolve the promise
                                resolve(props.info.item);
                            });
                        });
                    }, reject);
                });
            });
        }
    };
};
