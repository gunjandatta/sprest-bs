"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gd_bs_1 = require("gd-bs");
var gd_sprest_1 = require("gd-sprest");
var datetime_1 = require("./datetime");
var peoplePicker_1 = require("./peoplePicker");
/**
 * Field
 */
exports.Field = function (props) {
    var control;
    var lookupFieldInfo = null;
    var mmsFieldInfo = null;
    // Method to get the choice options
    var getChoiceItems = function (isCheckbox, field, selectedValues) {
        var items = [];
        // Update the selected values
        selectedValues = selectedValues && selectedValues.results ? selectedValues.results : [selectedValues];
        // Parse the choices
        for (var i = 0; i < field.Choices.results.length; i++) {
            var choice = field.Choices.results[i];
            var isSelected = false;
            // Determine if this choice is selected
            for (var j = 0; j < selectedValues.length; j++) {
                // See if this choice is selected
                if (choice == selectedValues[j]) {
                    // Set the flag and break from the loop
                    isSelected = true;
                    break;
                }
            }
            // See if this is a checkbox
            if (isCheckbox) {
                // Add the item
                items.push({
                    isSelected: isSelected,
                    label: choice
                });
            }
            else {
                // Add the item
                items.push({
                    isSelected: isSelected,
                    text: choice,
                    value: choice
                });
            }
        }
        // See if this is a dropdown and no selected values exists, and this is a required field
        if (!isCheckbox && items.length > 0 && selectedValues.length == 0 && field.Required) {
            // Select the first item
            items[0].isSelected = true;
        }
        // Return the items
        return items;
    };
    // Method to generate the lookup dropdown items
    var getLookupItems = function (field, lookupItems, selectedValues) {
        var items = [];
        // Update the selected values
        selectedValues = selectedValues && selectedValues.results ? selectedValues.results : [selectedValues];
        // Parse the lookup items
        for (var i = 0; i < lookupItems.length; i++) {
            var item = lookupItems[i];
            var isSelected = false;
            // Determine if this lookup is selected
            for (var j = 0; j < selectedValues.length; j++) {
                var id = selectedValues[j] ? selectedValues[j].Id : null;
                // See if this choice is selected
                if (item.Id == id) {
                    // Set the flag and break from the loop
                    isSelected = true;
                    break;
                }
            }
            // Add the item
            items.push({
                isSelected: isSelected,
                text: item[field.LookupField],
                value: item.Id.toString()
            });
        }
        // See if no selected values exists, and this is a required field
        if (items.length > 0 && selectedValues.length == 0 && field.Required) {
            // Select the first item
            items[0].isSelected = true;
        }
        // Return the items
        return items;
    };
    // Method to get the mms dropdown items
    var getMMSItems = function (term, selectedValues) {
        if (selectedValues === void 0) { selectedValues = []; }
        var items = [];
        // See if information exists
        if (term.info) {
            var isSelected = false;
            // Parse the selected values
            for (var i = 0; i < selectedValues.length; i++) {
                // See if this item is selected
                if (selectedValues[i] == term.info.id) {
                    isSelected = true;
                    break;
                }
            }
            // Add the heading
            items.push({
                isHeader: true,
                isSelected: isSelected,
                text: term.info.name,
                value: term.info.id
            });
        }
        // Parse the terms
        for (var termName in term) {
            var child = term[termName];
            // Skip the info and parent properties
            if (termName == "info" || termName == "parent") {
                continue;
            }
            // Get the child items
            var childItems = getMMSItems(child, selectedValues);
            // Add the item
            items = items.concat(childItems);
        }
        // See if no selected values exists, and this is a required field
        if (items.length > 0 && selectedValues.length == 0 && isRequired) {
            // Select the first item
            items[0].isSelected = true;
        }
        // Return the items
        return items;
    };
    // Set the properties based on the field link
    var fieldLink = props.listInfo.fieldLinks ? props.listInfo.fieldLinks[props.field.InternalName] : null;
    var isReadonly = fieldLink && typeof (fieldLink.ReadOnly) === "boolean" ? fieldLink.ReadOnly : props.field.ReadOnlyField;
    var isRequired = fieldLink && typeof (fieldLink.Required) === "boolean" ? fieldLink.Required : props.field.Required;
    // See if this is an internal field
    if (props.field.CanBeDeleted == false) {
        // Override the property based on the field property
        isReadonly = isReadonly || props.field.ReadOnlyField;
    }
    // Set the default properties for the control
    var controlProps = {
        description: props.field.Description,
        errorMessage: props.errorMessage,
        isReadonly: isReadonly,
        label: (isRequired ? "* " : "") + props.field.Title,
        name: props.field.InternalName,
        onControlRendering: function (control) {
            // Execute the event
            return props.onControlRendering ? props.onControlRendering(control, props.field) : null;
        },
        onControlRendered: function (formControl) {
            // Save the control
            control = formControl;
            // Execute the event
            return props.onControlRendered ? props.onControlRendered(control, props.field) : null;
        },
        required: isRequired,
        type: gd_bs_1.Components.FormControlTypes.TextField,
        value: props.value
    };
    // See if this is a new form, a default value exists and no value has been defined
    if (props.controlMode == gd_sprest_1.SPTypes.ControlMode.New && props.field.DefaultValue && props.value == null) {
        // Set the default value
        controlProps.value = props.field.DefaultValue;
    }
    // Set the type
    var onControlRendered = null;
    var onControlRendering = null;
    switch (props.field.FieldTypeKind) {
        // Boolean
        case gd_sprest_1.SPTypes.FieldType.Boolean:
            // Set the type
            controlProps.type = gd_bs_1.Components.FormControlTypes.Checkbox;
            // Create the item
            controlProps.items = [{ label: controlProps.label }];
            // Clear the label
            controlProps.label = "";
            break;
        // Choice
        case gd_sprest_1.SPTypes.FieldType.Choice:
            var displayRadioButtons = props.field.SchemaXml.indexOf('Format="RadioButtons"') > 0 ? true : false;
            // See if we are displaying radio buttons
            if (displayRadioButtons) {
                // Set the type
                controlProps.type = gd_bs_1.Components.FormControlTypes.Switch;
            }
            else {
                // Set the type
                controlProps.type = gd_bs_1.Components.FormControlTypes.Dropdown;
            }
            // Get the items
            var items = getChoiceItems(displayRadioButtons, props.field, props.value);
            // See if this is not a required field
            if (!isRequired) {
                // Add a blank entry
                items = [{
                        text: "",
                        value: null
                    }].concat(items);
            }
            // Set the items
            controlProps.items = items;
            break;
        // Currency Field
        case gd_sprest_1.SPTypes.FieldType.Currency:
            // Set the type
            controlProps.type = gd_bs_1.Components.FormControlTypes.TextField;
            // Set the rendered event
            onControlRendered = controlProps.onControlRendered;
            controlProps.onControlRendered = function (formControl) {
                // Save the control
                control = formControl;
                // Call the event
                onControlRendered ? onControlRendered(formControl) : null;
            };
            break;
        // Date/Time
        case gd_sprest_1.SPTypes.FieldType.DateTime:
            var showTime_1 = props.field.DisplayFormat == gd_sprest_1.SPTypes.DateFormat.DateTime;
            // Set the type
            controlProps.type = isReadonly ? gd_bs_1.Components.FormControlTypes.Readonly : null;
            // Set the rendered event
            onControlRendered = controlProps.onControlRendered;
            controlProps.onControlRendered = function (formControl) {
                // Save the control
                control = formControl;
                // See if this field is readonly and a value exists
                if (props.value && isReadonly) {
                    // Set the class name
                    control.el.classList.add("form-control");
                    control.el.style.backgroundColor = "#e9ecef";
                    // Override the html rendered
                    control.el.innerHTML = props.listInfo.fieldValuesAsHtml[props.field.InternalName];
                }
                else {
                    // Render a date picker
                    var dt_1 = datetime_1.DateTime({
                        el: control.el,
                        showTime: showTime_1,
                        value: control.props.value
                    });
                    // Set the get value event
                    control.props.onGetValue = function () {
                        // Return the value
                        return dt_1.getValue();
                    };
                }
                // Call the event
                onControlRendered ? onControlRendered(formControl) : null;
            };
            break;
        // Lookup
        case gd_sprest_1.SPTypes.FieldType.Lookup:
            // See if this field is readonly and a value exists
            if (isReadonly) {
                // Update the value
                controlProps.type = gd_bs_1.Components.FormControlTypes.Readonly;
                // Ensure a value exists
                if (props.value) {
                    // Set the rendered event
                    onControlRendered = controlProps.onControlRendered;
                    controlProps.onControlRendered = function (formControl) {
                        // Set the class name
                        control.el.classList.add("form-control");
                        control.el.style.backgroundColor = "#e9ecef";
                        // Override the html rendered
                        control.el.innerHTML = props.listInfo.fieldValuesAsHtml[props.field.InternalName];
                    };
                }
            }
            else {
                // Set the rendering event
                onControlRendering = controlProps.onControlRendering;
                controlProps.onControlRendering = function (newProps) {
                    // Update the control properties
                    controlProps = newProps;
                    // Display a loading message
                    controlProps.loadingMessage = "Loading the Lookup Data";
                    // Return a promise
                    return new Promise(function (resolve, reject) {
                        // Load the field information
                        gd_sprest_1.Helper.ListFormField.create({
                            field: props.field,
                            listName: props.listInfo.list.Title,
                            name: props.field.InternalName,
                            webUrl: props.listInfo.webUrl
                        }).then(
                        // Success
                        function (fieldInfo) {
                            // Save the field information
                            lookupFieldInfo = fieldInfo;
                            // Update the multi property
                            controlProps.multi = lookupFieldInfo.multi;
                            // Get the drop down information
                            gd_sprest_1.Helper.ListFormField.loadLookupData(lookupFieldInfo, 500).then(
                            // Success
                            function (items) {
                                // Set the type
                                controlProps.type = lookupFieldInfo.multi ? gd_bs_1.Components.FormControlTypes.MultiDropdown : gd_bs_1.Components.FormControlTypes.Dropdown;
                                // Get the dropdown items
                                var ddlItems = getLookupItems(props.field, items, props.value);
                                // See if this is not a required field and not a multi-select
                                if (!isRequired && !lookupFieldInfo.multi) {
                                    // Add a blank entry
                                    ddlItems = [{
                                            text: "",
                                            value: null
                                        }].concat(ddlItems);
                                }
                                // Set the items
                                controlProps.items = ddlItems;
                                // Clear the element
                                controlProps.el ? controlProps.el.innerHTML = "" : null;
                                // Call the event
                                var returnVal = onControlRendering ? onControlRendering(controlProps) : null;
                                if (returnVal && returnVal.then) {
                                    // Wait for the promise to complete
                                    returnVal.then(function (props) {
                                        // Resolve the promise
                                        resolve(props || controlProps);
                                    });
                                }
                                else {
                                    // Resolve the promise
                                    resolve(controlProps);
                                }
                            }, 
                            // Error
                            function (msg) {
                                // Set the error message
                                var errorMessage = "Error loading the lookup field values for '" + props.field.InternalName + "'.";
                                // Display an error message
                                gd_bs_1.Components.Alert({
                                    el: controlProps.el,
                                    content: errorMessage,
                                    type: gd_bs_1.Components.AlertTypes.Danger
                                });
                                // Call the error event
                                props.onError ? props.onError(errorMessage) : null;
                            });
                        }, 
                        // Error
                        function (msg) {
                            // Set the error message
                            var errorMessage = "Error loading the field information for field '" + props.field.InternalName + "'.";
                            // Display an error message
                            controlProps.el.innerHTML = "";
                            gd_bs_1.Components.Alert({
                                el: controlProps.el,
                                content: "Error loading the lookup field information.",
                                type: gd_bs_1.Components.AlertTypes.Danger
                            });
                            // Call the error event
                            props.onError ? props.onError(errorMessage) : null;
                            // Reject the request
                            reject(msg);
                        });
                    });
                };
            }
            break;
        // Multi-Choice
        case gd_sprest_1.SPTypes.FieldType.MultiChoice:
            var isChoice = props.field.SchemaXml.indexOf('Format="RadioButtons"') > 0 ? true : false;
            // See if we are displaying radio buttons
            if (isChoice) {
                // Update the properties
                controlProps.multi = true;
                controlProps.type = gd_bs_1.Components.FormControlTypes.Switch;
            }
            else {
                // Set the type
                controlProps.type = gd_bs_1.Components.FormControlTypes.MultiDropdown;
            }
            // Update the value
            controlProps.value = (props.value ? props.value.results : null) || props.value;
            // Set the items
            controlProps.items = getChoiceItems(isChoice, props.field, props.value);
            break;
        // Note
        case gd_sprest_1.SPTypes.FieldType.Note:
            // Set the properties
            controlProps.type = gd_bs_1.Components.FormControlTypes.TextArea;
            controlProps.rows = props.field.NumberOfLines;
            break;
        // Number Field
        case gd_sprest_1.SPTypes.FieldType.Number:
            var numberField = props.field;
            var numberProps = controlProps;
            // See if this is a percentage
            if (numberField.ShowAsPercentage) {
                // Set the type
                numberProps.type = gd_bs_1.Components.FormControlTypes.Range;
                // Set the max value
                numberProps.max = numberField.MaximumValue == Number.MAX_VALUE ? 100 : numberField.MaximumValue;
                // Set the min value
                numberProps.min = numberField.MinimumValue == -1.7976931348623157e+308 ? 0 : numberField.MinimumValue;
                // Set the value
                numberProps.value = numberProps.value == null || numberProps.value == Number.MIN_VALUE ? 0 : numberProps.value;
            }
            // Else, see if the min/max values are defined
            else if (typeof (numberField.MaximumValue) == "number" && typeof (numberField.MinimumValue) == "number") {
                // Update the properties to display a range
                numberProps.type = gd_bs_1.Components.FormControlTypes.Range;
                numberProps.max = numberField.MaximumValue;
                numberProps.min = numberField.MinimumValue;
                numberProps.value = typeof (numberProps.value) == "number" ? numberProps.value : numberProps.min;
            }
            else {
                // Set the type
                numberProps.type = gd_bs_1.Components.FormControlTypes.TextField;
            }
            break;
        // URL
        case gd_sprest_1.SPTypes.FieldType.URL:
            var desc_1 = null;
            var url_1 = null;
            var value_1 = props.value;
            // See if a value exists
            if (props.value) {
                // Update the value
                controlProps.value = props.value.Url;
            }
            // Set the render event
            onControlRendered = controlProps.onControlRendered;
            controlProps.onControlRendered = function (formControl) {
                // Save the control
                control = formControl;
                // Clear the element
                control.el.innerHTML = "";
                // Render the description
                desc_1 = gd_bs_1.Components.FormControl({
                    className: "mb-1",
                    el: control.el,
                    placeholder: "Description",
                    type: gd_bs_1.Components.FormControlTypes.TextField,
                    value: value_1 ? value_1.Description : null
                });
                // Render the url
                url_1 = gd_bs_1.Components.FormControl({
                    el: control.el,
                    placeholder: "Url",
                    type: gd_bs_1.Components.FormControlTypes.TextField,
                    value: value_1 ? value_1.Url : null
                });
                // Set the get value event
                control.props.onGetValue = function (controlProps) {
                    // Return the value
                    return {
                        Description: desc_1.getValue(),
                        Url: url_1.getValue()
                    };
                };
                // Call the event
                onControlRendered ? onControlRendered(formControl) : null;
            };
            // Set the validate event
            controlProps.onValidate = function (control) {
                var descValid, urlValid = false;
                // Get the form control elements
                var elFormControl = control.el.querySelectorAll(".form-control");
                var elDesc = elFormControl[0];
                var elUrl = elFormControl[1];
                // See if the description exists
                if (elDesc) {
                    // Clear the classes
                    elDesc.classList.remove("is-invalid");
                    elDesc.classList.remove("is-valid");
                    // Set the flag
                    descValid = control.required ? (desc_1.getValue() ? true : false) : true;
                    // Set the class
                    elDesc.classList.add(descValid ? "is-valid" : "is-invalid");
                }
                // See if the url exists
                if (elUrl) {
                    // Clear the classes
                    elUrl.classList.remove("is-invalid");
                    elUrl.classList.remove("is-valid");
                    // Set the flag
                    urlValid = control.required ? (url_1.getValue() ? true : false) : true;
                    // Set the class
                    elUrl.classList.add(urlValid ? "is-valid" : "is-invalid");
                }
                // Return the flag if this field is required
                return descValid && urlValid;
            };
            break;
        // User
        case gd_sprest_1.SPTypes.FieldType.User:
            // Set the type
            controlProps.type = isReadonly ? gd_bs_1.Components.FormControlTypes.Readonly : peoplePicker_1.PeoplePickerControlType;
            // Set the rendered event
            onControlRendered = controlProps.onControlRendered;
            controlProps.onControlRendered = function (formControl) {
                // Save the control
                control = formControl;
                // See if this field is readonly and a value exists
                if (props.value && isReadonly) {
                    // Set the class name
                    control.el.classList.add("form-control");
                    control.el.style.backgroundColor = "#e9ecef";
                    // Override the html rendered
                    control.el.innerHTML = props.listInfo.fieldValuesAsHtml[props.field.InternalName];
                }
                // Call the event
                onControlRendered ? onControlRendered(formControl) : null;
            };
            break;
    }
    // See if this is a taxonomy field
    if (/^TaxonomyFieldType/.test(props.field.TypeAsString)) {
        // Set the type
        controlProps.type = gd_bs_1.Components.FormControlTypes.Dropdown;
        // Set a render event
        onControlRendering = controlProps.onControlRendering;
        controlProps.onControlRendering = function (newProps) {
            // Update the control properties
            controlProps = newProps;
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Display a loading message
                controlProps.loadingMessage = "Loading the MMS Data";
                // Load the field information
                gd_sprest_1.Helper.ListFormField.create({
                    field: props.field,
                    listName: props.listInfo.list.Title,
                    name: props.field.InternalName,
                    webUrl: props.listInfo.webUrl
                }).then(
                // Success
                function (fieldInfo) {
                    // Save the field information
                    mmsFieldInfo = fieldInfo;
                    // Set the type
                    controlProps.type = mmsFieldInfo.multi ? gd_bs_1.Components.FormControlTypes.MultiDropdown : gd_bs_1.Components.FormControlTypes.Dropdown;
                    // Load the value field
                    gd_sprest_1.Helper.ListFormField.loadMMSValueField(mmsFieldInfo).then(
                    // Success
                    function (valueField) {
                        // Set the value field
                        mmsFieldInfo.valueField = valueField;
                        // See if this is a new form
                        if (props.controlMode == gd_sprest_1.SPTypes.ControlMode.New) {
                            var fieldValue = [];
                            // Get the default values
                            var values = (props.field.DefaultValue || "").split(";#");
                            for (var i = 0; i < values.length; i++) {
                                var value = values[i].split("|");
                                if (value.length == 2) {
                                    // Add the term id
                                    fieldValue.push(value[1]);
                                }
                            }
                            // Update the field value
                            controlProps.value = fieldValue;
                        }
                        else {
                            var fieldValue = props.value;
                            // Get the field value
                            var values = fieldValue && fieldValue.results ? fieldValue.results : [fieldValue];
                            // Clear the field values
                            fieldValue = [];
                            // Parse the values
                            for (var i = 0; i < values.length; i++) {
                                // Ensure the value exists
                                if (values[i] && values[i].TermGuid) {
                                    // Add the value
                                    fieldValue.push(values[i].TermGuid);
                                }
                            }
                            // Update the field value
                            controlProps.value = fieldValue;
                        }
                        // Load the terms
                        gd_sprest_1.Helper.ListFormField.loadMMSData(mmsFieldInfo).then(
                        // Success
                        function (terms) {
                            // Get the items
                            var items = getMMSItems(gd_sprest_1.Helper.Taxonomy.toObject(terms), controlProps.value);
                            // See if this is not a required field and not a multi-select
                            if (!isRequired && !mmsFieldInfo.multi) {
                                // Add a blank entry
                                items = [{
                                        text: "",
                                        value: null
                                    }].concat(items);
                            }
                            // Set the items
                            controlProps.items = items;
                            // Clear the element
                            controlProps.el ? controlProps.el.innerHTML = "" : null;
                            // Call the event
                            var returnVal = onControlRendering ? onControlRendering(controlProps) : null;
                            if (returnVal && returnVal.then) {
                                // Wait for the promise to complete
                                returnVal.then(function (props) {
                                    // Resolve the promise
                                    resolve(props || controlProps);
                                });
                            }
                            else {
                                // Resolve the promise
                                resolve(controlProps);
                            }
                        }, 
                        // Error
                        function (msg) {
                            // Set the error message
                            var errorMessage = "Error loading the mms terms for '" + props.field.InternalName + "'.";
                            // Display an error message
                            gd_bs_1.Components.Alert({
                                el: controlProps.el,
                                content: errorMessage,
                                type: gd_bs_1.Components.AlertTypes.Danger
                            });
                            // Call the error event
                            props.onError ? props.onError(errorMessage) : null;
                        });
                    }, 
                    // Error
                    function (msg) {
                        // Set the error message
                        var errorMessage = "Error loading the mms value field for '" + props.field.InternalName + "'.";
                        // Display an error message
                        gd_bs_1.Components.Alert({
                            el: controlProps.el,
                            content: errorMessage,
                            type: gd_bs_1.Components.AlertTypes.Danger
                        });
                        // Call the error event
                        props.onError ? props.onError(errorMessage) : null;
                        // Reject the request
                        reject(msg);
                    });
                }, function (msg) {
                    // Display an error message
                    gd_bs_1.Components.Alert({
                        el: controlProps.el,
                        content: msg,
                        type: gd_bs_1.Components.AlertTypes.Danger
                    });
                    // Call the error event
                    props.onError ? props.onError(msg) : null;
                });
            });
        };
    }
    // Return the field
    return {
        control: control,
        controlProps: controlProps,
        getValue: function () {
            var fieldValue = {
                name: props.field.InternalName,
                value: control ? control.getValue() : null
            };
            // Update the field name/value, based on the type
            switch (props.field.FieldTypeKind) {
                // Boolean
                case gd_sprest_1.SPTypes.FieldType.Boolean:
                    // Update the value
                    fieldValue.value = fieldValue.value ? true : false;
                    break;
                // Choice
                case gd_sprest_1.SPTypes.FieldType.Choice:
                    // See if this is a dropdown
                    if (controlProps.type == gd_bs_1.Components.FormControlTypes.Dropdown) {
                        // See if there is a value
                        var ddlValue = fieldValue.value;
                        if (ddlValue) {
                            // Update the field value
                            fieldValue.value = ddlValue.value || ddlValue.text;
                        }
                    }
                    else {
                        // See if there is a value
                        var cbValue = fieldValue.value;
                        if (cbValue) {
                            // Update the field value
                            fieldValue.value = cbValue.label;
                        }
                    }
                    break;
                // Number Field
                case gd_sprest_1.SPTypes.FieldType.Currency:
                    // Ensure a value exists, otherwise null
                    fieldValue.value = fieldValue.value || null;
                    break;
                // Date/Time
                case gd_sprest_1.SPTypes.FieldType.DateTime:
                    // Ensure a value exists, otherwise null
                    fieldValue.value = fieldValue.value ? (new Date(fieldValue.value)).toISOString() : null;
                    break;
                // Lookup
                case gd_sprest_1.SPTypes.FieldType.Lookup:
                    // Append 'Id' to the field name
                    fieldValue.name += fieldValue.name.lastIndexOf("Id") == fieldValue.name.length - 2 ? "" : "Id";
                    // See if this is a multi-value field
                    if (lookupFieldInfo.multi) {
                        var values_1 = fieldValue.value || [];
                        fieldValue.value = { results: [] };
                        // Parse the values
                        for (var j = 0; j < values_1.length; j++) {
                            // Add the value
                            fieldValue.value.results.push(values_1[j].value || values_1[j].text);
                        }
                    }
                    else {
                        // Update the field value
                        fieldValue.value = fieldValue.value ? fieldValue.value.value || fieldValue.value.text : null;
                        // Ensure a value exists, otherwise null
                        fieldValue.value = fieldValue.value || null;
                    }
                    break;
                // Multi-Choice
                case gd_sprest_1.SPTypes.FieldType.MultiChoice:
                    var values = fieldValue.value || [];
                    fieldValue.value = { results: [] };
                    // Parse the values
                    for (var j = 0; j < values.length; j++) {
                        // See if this is a dropdown
                        if (controlProps.type == gd_bs_1.Components.FormControlTypes.MultiDropdown) {
                            // See if there is a value
                            var ddlValue = values[j];
                            // Add the values
                            fieldValue.value.results.push(ddlValue.value || ddlValue.text);
                        }
                        else {
                            // See if there is a value
                            var cbValue = values[j];
                            // Add the values
                            fieldValue.value.results.push(cbValue.label);
                        }
                    }
                    break;
                // Number Field
                case gd_sprest_1.SPTypes.FieldType.Number:
                    var numberField = props.field;
                    // Ensure a field value exists
                    if (fieldValue.value) {
                        // See if this is a percentage
                        if (numberField.ShowAsPercentage) {
                            // Update the value
                            fieldValue.value = fieldValue.value / 100;
                        }
                    }
                    else {
                        // Ensure the value is null
                        fieldValue.value = null;
                    }
                    break;
                // URL
                case gd_sprest_1.SPTypes.FieldType.URL:
                    // See if the field value exists
                    if (fieldValue.value && fieldValue.value.Url) {
                        // Set the url, and validate the format
                        var url = fieldValue.value.Url;
                        if (url && /^http/.test(url.toLowerCase()) == false) {
                            // Update the url, otherwise the request will fail
                            url = "https://" + url;
                        }
                        // Add the metadata
                        fieldValue.value = {
                            __metadata: { type: "Types.SP.FieldUrlValue" },
                            Description: fieldValue.value.Description || "",
                            Url: url
                        };
                    }
                    else {
                        // Ensure the value is null
                        fieldValue.value = null;
                    }
                    break;
                // User
                case gd_sprest_1.SPTypes.FieldType.User:
                    // Append 'Id' to the field name
                    fieldValue.name += fieldValue.name.lastIndexOf("Id") == fieldValue.name.length - 2 ? "" : "Id";
                    // See if this is a multi-value field
                    if (props.field.AllowMultipleValues) {
                        var values_2 = fieldValue.value || [];
                        // Default the value
                        fieldValue.value = { results: [] };
                        // Parse the options
                        for (var j = 0; j < values_2.length; j++) {
                            var userValue = values_2[j];
                            // Add the field value
                            userValue.Id ? fieldValue.value.results.push(userValue.Id) : null;
                        }
                    }
                    else {
                        var userValue = fieldValue.value ? fieldValue.value[0] : null;
                        // Set the field value
                        fieldValue.value = userValue.Id ? userValue.Id : null;
                    }
                    break;
                // MMS
                default:
                    // See if this is a MMS field
                    if (mmsFieldInfo) {
                        // See if this is a multi field
                        if (mmsFieldInfo.multi) {
                            // Update the field name to the value field
                            fieldValue.name = mmsFieldInfo ? mmsFieldInfo.valueField.InternalName : fieldValue.name + "_0";
                            // Parse the field values
                            var fieldValues = fieldValue.value || [];
                            fieldValue.value = [];
                            for (var j = 0; j < fieldValues.length; j++) {
                                var termInfo = fieldValues[j];
                                // Add the field value
                                fieldValue.value.push(-1 + ";#" + termInfo.text + "|" + termInfo.value);
                            }
                            // Set the field value
                            fieldValue.value = fieldValue.value.join(";#");
                        }
                        else {
                            // Update the value
                            fieldValue.value = fieldValue.value && fieldValue.value.value ? {
                                __metadata: { type: "Types.SP.Taxonomy.TaxonomyFieldValue" },
                                Label: fieldValue.value.text,
                                TermGuid: fieldValue.value.value,
                                WssId: -1
                            } : null;
                        }
                    }
                    break;
            }
            // Return the field value
            return fieldValue;
        },
        isValid: function () {
            // Validate the control
            var isValid = control ? control.isValid : false;
            // Call the event
            isValid = props.onValidate ? props.onValidate(props.field, control) : isValid;
            // Return the flag
            return isValid;
        }
    };
};
