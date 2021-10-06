import { Helper, SPTypes, Types } from "gd-sprest";
import { Components } from "../core";
import { IField, IFieldProps, IFieldValue } from "./types";
import { DateTimeControlType } from "../datetime";
import { IFormControlPropsDateTime } from "../datetime/types";
import { PeoplePickerControlType } from "../peoplePicker";
import { IFormControlPropsPeoplePicker } from "../peoplePicker/types";

/**
 * Field
 */
export const Field = (props: IFieldProps): IField => {
    let control: Components.IFormControl;
    let lookupFieldInfo: Helper.IListFormLookupFieldInfo = null;
    let mmsFieldInfo: Helper.IListFormMMSFieldInfo = null;

    // Method to get the choice options
    let getChoiceItems = (isCheckbox: boolean, field: Types.SP.FieldMultiChoice, selectedValues) => {
        let items: Array<Components.ICheckboxGroupItem | Components.IDropdownItem> = [];

        // Update the selected values
        selectedValues = selectedValues && selectedValues.results ? selectedValues.results : [selectedValues];

        // Parse the choices
        for (let i = 0; i < field.Choices.results.length; i++) {
            let choice = field.Choices.results[i];
            let isSelected = false;

            // Determine if this choice is selected
            for (let j = 0; j < selectedValues.length; j++) {
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
                    isSelected,
                    label: choice
                } as Components.ICheckboxGroupItem);
            } else {
                // Add the item
                items.push({
                    isSelected,
                    label: choice,
                    text: choice,
                    value: choice
                } as Components.IDropdownItem);
            }
        }

        // See if this is a dropdown and no selected values exists, and this is a required field
        if (!isCheckbox && items.length > 0 && selectedValues.length == 0 && field.Required) {
            // Select the first item
            items[0].isSelected = true;
        }

        // Return the items
        return items;
    }

    // Method to get the file extension
    let getFileExtension = (fileName: string = "") => {
        let extension = fileName.split('.');
        return extension[extension.length - 1].toLowerCase();
    }

    // Method to generate the lookup dropdown items
    let getLookupItems = (field: Types.SP.FieldLookup, lookupItems: Array<Types.SP.IListItemQuery>, selectedValues) => {
        let items: Array<Components.IDropdownItem> = [];

        // Update the selected values
        selectedValues = selectedValues && selectedValues.results ? selectedValues.results : [selectedValues];

        // Parse the lookup items
        for (let i = 0; i < lookupItems.length; i++) {
            let item = lookupItems[i];
            let isSelected = false;

            // Determine if this lookup is selected
            for (let j = 0; j < selectedValues.length; j++) {
                let id = selectedValues[j] && selectedValues[j].Id ? selectedValues[j].Id : selectedValues[j];

                // See if this choice is selected
                if (item.Id == id) {
                    // Set the flag and break from the loop
                    isSelected = true;
                    break;
                }
            }

            // Add the item
            items.push({
                data: item,
                isSelected,
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
    }

    // Method to get the mms dropdown items
    let getMMSItems = (term: Helper.ITerm, selectedValues = [], isRoot = true) => {
        let items: Array<Components.IDropdownItem> = [];

        // See if information exists
        if (term.info && !isRoot) {
            let isSelected = false;

            // Parse the selected values
            for (let i = 0; i < selectedValues.length; i++) {
                // See if this item is selected
                if (selectedValues[i] == term.info.id) {
                    isSelected = true;
                    break;
                }
            }

            // Add the heading
            items.push({
                data: term,
                isSelected,
                text: term.info.name,
                value: term.info.id
            });
        }

        // Parse the terms
        for (let termName in term) {
            let child = term[termName];

            // Skip the info and parent properties
            if (termName == "info" || termName == "parent") { continue; }

            // Get the child items
            let childItems = getMMSItems(child, selectedValues, false);

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
    }

    // Set the properties based on the field link
    let fieldLink = props.listInfo.fieldLinks ? props.listInfo.fieldLinks[props.field.InternalName] : null;
    let isReadonly = fieldLink && typeof (fieldLink.ReadOnly) === "boolean" ? fieldLink.ReadOnly : props.field.ReadOnlyField;
    let isRequired = fieldLink && typeof (fieldLink.Required) === "boolean" ? fieldLink.Required : props.field.Required;

    // See if this is an internal field
    if (props.field.CanBeDeleted == false) {
        // Override the property based on the field property
        isReadonly = isReadonly || props.field.ReadOnlyField;
    }

    // Set the default properties for the control
    let controlProps: Components.IFormControlProps = {
        description: props.field.Description,
        errorMessage: props.errorMessage,
        id: props.field.InternalName,
        isReadonly,
        label: (isRequired ? "* " : "") + props.field.Title,
        name: props.field.InternalName,
        onControlRendering: control => {
            // Execute the event
            return props.onControlRendering ? props.onControlRendering(control, props.field) : null;
        },
        onControlRendered: formControl => {
            // Save the control
            control = formControl;

            // Execute the event
            return props.onControlRendered ? props.onControlRendered(control, props.field) : null;
        },
        required: isRequired,
        type: Components.FormControlTypes.TextField,
        value: props.value
    };

    // Define a base validation method
    let baseValidation: (control: Components.IFormControl, result: Components.IFormControlValidationResult) => Components.IFormControlValidationResult = null;

    // See if this is a new form, a default value exists and no value has been defined
    if (props.controlMode == SPTypes.ControlMode.New && props.field.DefaultValue && props.value == null) {
        // Set the default value
        controlProps.value = props.field.DefaultValue;
    }

    // Set the type
    let onControlRendered = null;
    let onControlRendering = null;
    switch (props.field.FieldTypeKind) {
        // Boolean
        case SPTypes.FieldType.Boolean:
            // Set the type
            controlProps.type = Components.FormControlTypes.Checkbox;

            // Create the item
            (controlProps as Components.IFormControlPropsCheckbox).items = [{ label: controlProps.label }]

            // Clear the label
            controlProps.label = "";
            break;

        // Choice
        case SPTypes.FieldType.Choice:
            let displayRadioButtons = props.field.SchemaXml.indexOf('Format="RadioButtons"') > 0 ? true : false;

            // See if we are displaying radio buttons
            if (displayRadioButtons) {
                // Set the type
                controlProps.type = Components.FormControlTypes.Switch;
            } else {
                // Set the type
                controlProps.type = Components.FormControlTypes.Dropdown;
            }

            // Get the items
            let items = getChoiceItems(displayRadioButtons, props.field as any, props.value);

            // See if this is not a required field
            if (!isRequired) {
                // Add a blank entry
                items = [{
                    text: "",
                    value: null
                } as any].concat(items);
            }

            // Set the items
            (controlProps as Components.IFormControlPropsDropdown).items = items;
            break;

        // Currency Field
        case SPTypes.FieldType.Currency:
            // Set the type
            controlProps.type = Components.FormControlTypes.TextField;

            // Set the rendered event
            onControlRendered = controlProps.onControlRendered;
            controlProps.onControlRendered = (formControl) => {
                // Save the control
                control = formControl;

                // Call the event
                onControlRendered ? onControlRendered(formControl) : null;
            }
            break;

        // Date/Time
        case SPTypes.FieldType.DateTime:
            // Set the time flag
            let showTime = (props.field as Types.SP.FieldDateTime).DisplayFormat == SPTypes.DateFormat.DateTime;
            (controlProps as IFormControlPropsDateTime).showTime = showTime;

            // Set the type
            controlProps.type = DateTimeControlType;

            // See if there is a formula and this is a new form
            let dtValue = (props.field.DefaultFormula || props.field.DefaultValue || "").toLowerCase();
            if (dtValue && props.controlMode == SPTypes.ControlMode.New) {
                let idx = dtValue.indexOf("today");

                // See if the date is a formula
                if (idx >= 0) {
                    let dtNow = new Date(Date.now());

                    // See if we are adding days
                    let daysIdx = dtValue.indexOf("+", idx);
                    if (daysIdx > 0) {
                        // Get the number of days to add
                        let days = parseInt(dtValue.substr(daysIdx + 1));
                        if (days > 0) {
                            // Add the days
                            dtNow.setDate(dtNow.getDate() + days);
                        }
                    }

                    // See if we are subtracting days
                    daysIdx = dtValue.indexOf("-", idx);
                    if (daysIdx > 0) {
                        // Get the number of days to add
                        let days = parseInt(dtValue.substr(daysIdx + 1));
                        if (days > 0) {
                            // Add the days
                            dtNow.setDate(dtNow.getDate() - days);
                        }
                    }

                    // Set the value
                    controlProps.value = dtNow;
                } else {
                    // Set the value
                    controlProps.value = new Date(dtValue);
                }
            }
            break;

        // Lookup
        case SPTypes.FieldType.Lookup:
            // Default the lookup field props will determine the default type
            controlProps.type = (props.field as Types.SP.FieldLookup).AllowMultipleValues ? Components.FormControlTypes.MultiDropdown : Components.FormControlTypes.Dropdown;

            // See if this field is readonly and a value exists
            if (isReadonly) {
                // Update the value
                controlProps.type = Components.FormControlTypes.Readonly;

                // Ensure a value exists
                if (props.value) {
                    // Set the rendered event
                    onControlRendered = controlProps.onControlRendered;
                    controlProps.onControlRendered = (formControl) => {
                        // Set the class name
                        control.el.classList.add("form-control");
                        control.el.style.backgroundColor = "#e9ecef";

                        // Override the html rendered
                        control.el.innerHTML = props.listInfo.fieldValuesAsHtml[props.field.InternalName];
                    }
                }
            } else {
                // Set the rendering event
                onControlRendering = controlProps.onControlRendering;
                controlProps.onControlRendering = newProps => {
                    // Update the control properties
                    controlProps = newProps;

                    // Display a loading message
                    controlProps.loadingMessage = "Loading the Lookup Data";

                    // Return a promise
                    return new Promise((resolve, reject) => {
                        // Load the field information
                        Helper.ListFormField.create({
                            field: props.field as any,
                            listName: props.listInfo.list.Title,
                            name: props.field.InternalName,
                            webUrl: props.listInfo.webUrl
                        }).then(
                            // Success
                            (fieldInfo: Helper.IListFormLookupFieldInfo) => {
                                // Save the field information
                                lookupFieldInfo = fieldInfo;

                                // Set the lookup filter
                                lookupFieldInfo.lookupFilter = props.lookupFilter;

                                // Update the multi property
                                (controlProps as Helper.IListFormLookupFieldInfo).multi = lookupFieldInfo.multi;

                                // Get the drop down information
                                Helper.ListFormField.loadLookupData(lookupFieldInfo, 500).then(
                                    // Success
                                    items => {
                                        // Get the dropdown items
                                        let ddlItems = getLookupItems(props.field as any, items, props.value);

                                        // See if this is not a required field and not a multi-select
                                        if (!isRequired && !lookupFieldInfo.multi) {
                                            // Add a blank entry
                                            ddlItems = [{
                                                text: "",
                                                value: null
                                            } as any].concat(ddlItems);
                                        }

                                        // Set the items
                                        (controlProps as Components.IFormControlPropsDropdown).items = ddlItems;

                                        // Clear the element
                                        controlProps.el ? controlProps.el.innerHTML = "" : null;

                                        // Clear the value, since the getLookupItems method takes care of this for us
                                        controlProps.value = null;

                                        // Call the event
                                        let returnVal = onControlRendering ? onControlRendering(controlProps) : null;
                                        if (returnVal && returnVal.then) {
                                            // Wait for the promise to complete
                                            returnVal.then(props => {
                                                // Resolve the promise
                                                resolve(props || controlProps);
                                            })
                                        } else {
                                            // Resolve the promise
                                            resolve(controlProps);
                                        }
                                    },
                                    // Error
                                    msg => {
                                        // Set the error message
                                        let errorMessage = "Error loading the lookup field values for '" + props.field.InternalName + "'.";

                                        // Display an error message
                                        Components.Alert({
                                            el: controlProps.el,
                                            content: errorMessage,
                                            type: Components.AlertTypes.Danger
                                        });

                                        // Call the error event
                                        props.onError ? props.onError(errorMessage) : null;
                                    }
                                );
                            },
                            // Error
                            msg => {
                                // Set the error message
                                let errorMessage = "Error loading the field information for field '" + props.field.InternalName + "'.";

                                // Display an error message
                                controlProps.el.innerHTML = "";
                                Components.Alert({
                                    el: controlProps.el,
                                    content: "Error loading the lookup field information.",
                                    type: Components.AlertTypes.Danger
                                });

                                // Call the error event
                                props.onError ? props.onError(errorMessage) : null;

                                // Reject the request
                                reject(msg);
                            }
                        );
                    });
                };
            }
            break;

        // Multi-Choice
        case SPTypes.FieldType.MultiChoice:
            let isChoice = props.field.SchemaXml.indexOf('Format="RadioButtons"') > 0 ? true : false;

            // Set the type
            controlProps.type = isChoice ? Components.FormControlTypes.MultiSwitch : Components.FormControlTypes.MultiDropdown;

            // Update the value
            controlProps.value = (props.value ? props.value.results : null) || props.value;

            // Set the items
            (controlProps as Components.IFormControlPropsDropdown).items = getChoiceItems(isChoice, props.field as any, props.value);
            break;

        // Note
        case SPTypes.FieldType.Note:
            // Set the properties
            controlProps.type = Components.FormControlTypes.TextArea;
            (controlProps as Components.IFormControlPropsTextField).rows = (props.field as Types.SP.FieldMultiLineText).NumberOfLines;
            break;

        // Number Field
        case SPTypes.FieldType.Number:
            let numberField = props.field as Types.SP.FieldNumber;
            let numberProps = controlProps as Components.IFormControlPropsNumberField;

            // Set the default value
            numberProps.value = numberProps.value == null ? numberField.DefaultValue : numberProps.value;

            // See if this is a percentage
            let isPercent = numberField.ShowAsPercentage;
            if (isPercent == null) {
                // Set the value from the schema (2013 environments)
                isPercent = numberField.SchemaXml.toLowerCase().indexOf('percentage="true"') > 0;
            }
            if (isPercent) {
                // Set the type
                numberProps.type = Components.FormControlTypes.Range;

                // Default the max
                numberProps.max = numberField.MaximumValue == 1 || numberField.MaximumValue == Number.MAX_VALUE ? 100 : numberField.MaximumValue;

                // Set the min value
                numberProps.min = numberField.MinimumValue == -1.7976931348623157e+308 ? 0 : numberField.MinimumValue;

                // Set the value
                numberProps.value = numberProps.value == null || numberProps.value == Number.MIN_VALUE ? 0 : numberProps.value;
                numberProps.value = numberProps.value * (numberProps.max == 100 && numberProps.value < 1 ? 100 : 1);
            }
            // Else, see if the min/max values are defined
            else if ((typeof (numberField.MaximumValue) == "number" && numberField.MaximumValue != Number.MAX_VALUE) && (typeof (numberField.MinimumValue) == "number" && numberField.MinimumValue != Number.MIN_VALUE)) {
                // Update the properties to display a range
                numberProps.type = Components.FormControlTypes.Range;
                numberProps.max = numberField.MaximumValue;
                numberProps.min = numberField.MinimumValue;
                numberProps.value = typeof (numberProps.value) == "number" ? numberProps.value : numberProps.min;

                // Set validation
                if (numberField.MinimumValue || numberField.MaximumValue) {
                    // Add validation
                    baseValidation = (control, result) => {
                        // Ensure the value is a number
                        if (/^[0-9]*$/.test(result.value) == false) {
                            // Update the validation and return it
                            result.isValid = false;
                            result.invalidMessage = "The value must be a number.";
                            return result;
                        }

                        // Validate the min value
                        if (numberField.MinimumValue && result.value < numberField.MinimumValue) {
                            // Update the validation and return it
                            result.isValid = false;
                            result.invalidMessage = "The value must be greater than or equal to " + numberField.MinimumValue;
                            return result;
                        }

                        // Validate the max value
                        if (numberField.MaximumValue && result.value > numberField.MaximumValue) {
                            // Update the validation and return it
                            result.isValid = false;
                            result.invalidMessage = "The value must be less than or equal to " + numberField.MaximumValue;
                            return result;
                        }

                        // Valid
                        result.isValid = true;

                        // Return the result
                        return result;
                    }
                }
            }
            else {
                // Set the type
                numberProps.type = Components.FormControlTypes.TextField;
            }
            break;

        // URL
        case SPTypes.FieldType.URL:
            let desc: Components.IFormControl = null;
            let url: Components.IFormControl = null;
            let value = props.value as Types.SP.FieldUrlValue;

            // See if a value exists
            if (props.value) {
                // Update the value
                controlProps.value = (props.value as Types.SP.FieldUrlValue).Url;
            }

            // Set the render event
            onControlRendered = controlProps.onControlRendered;
            controlProps.onControlRendered = (formControl) => {
                // Save the control
                control = formControl;

                // Clear the element
                control.el.innerHTML = "";

                // Render the description
                desc = Components.FormControl({
                    className: "mb-1",
                    el: control.el,
                    placeholder: "Description",
                    type: Components.FormControlTypes.TextField,
                    value: value ? value.Description : null
                } as Components.IFormControlPropsTextField);

                // Render the url
                url = Components.FormControl({
                    el: control.el,
                    placeholder: "Url",
                    type: Components.FormControlTypes.TextField,
                    value: value ? value.Url : null
                } as Components.IFormControlPropsTextField);

                // Set the get value event
                control.props.onGetValue = (controlProps) => {
                    // Return the value
                    return {
                        Description: desc.getValue(),
                        Url: url.getValue()
                    }
                }

                // Call the event
                onControlRendered ? onControlRendered(formControl) : null;
            }

            // Set the validate event
            baseValidation = (control, result) => {
                let descValid, urlValid = false;

                // Get the form control elements
                let elFormControl = control.el.querySelectorAll(".form-control");
                let elDesc = elFormControl[0];
                let elUrl = elFormControl[1];

                // See if the description exists
                if (elDesc) {
                    // Clear the classes
                    elDesc.classList.remove("is-invalid");
                    elDesc.classList.remove("is-valid");

                    // Set the flag
                    descValid = control.props.required ? (desc.getValue() ? true : false) : true;

                    // Set the class
                    elDesc.classList.add(descValid ? "is-valid" : "is-invalid");
                }

                // See if the url exists
                if (elUrl) {
                    // Clear the classes
                    elUrl.classList.remove("is-invalid");
                    elUrl.classList.remove("is-valid");

                    // Set the flag
                    urlValid = control.props.required ? (url.getValue() ? true : false) : true;

                    // Set the class
                    elUrl.classList.add(urlValid ? "is-valid" : "is-invalid");
                }

                // Set the validation falg
                result.isValid = descValid && urlValid;

                // Return the result
                return result;
            }
            break;

        // User
        case SPTypes.FieldType.User:
            // Set the type
            controlProps.type = isReadonly ? Components.FormControlTypes.Readonly : PeoplePickerControlType;

            // Set the flag to allow multiple selections
            (controlProps as IFormControlPropsPeoplePicker).multi = (props.field as Types.SP.FieldUser).AllowMultipleValues;

            // Set the rendered event
            onControlRendered = controlProps.onControlRendered;
            controlProps.onControlRendered = (formControl) => {
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
            }
            break;
    }

    // See if this is the document name field
    if (props.field.InternalName == "FileLeafRef") {
        // Set base validation
        baseValidation = (control, result) => {
            let value = result.value;

            // Ensure the value exists
            result.isValid = value ? true : false;
            if (result.isValid) {
                // See if it ends w/ a .
                if (value[value.length - 1] == '.') {
                    // Update the validation
                    result.isValid = false;
                    result.invalidMessage = "The value cannot end with a '.' character.";
                }
                // Else, see if it contains invalid characters
                else if (/[~"\#\%\&\*\:\<\>\?\/\\\{\|\}"]/.test(value) || value.indexOf('\\') >= 0) {
                    // Update the validation
                    result.isValid = false;
                    result.invalidMessage = "The value cannot contain the following characters: ~ \" # % & * : < > ? / \\ { | }";
                }
                // Else, see if we are changing the extension
                else if (control.props.value) {
                    // Get the file extensions
                    let origExtension = getFileExtension(control.props.value);
                    let newExtension = getFileExtension(value);

                    // Update the validation
                    result.isValid = origExtension == newExtension;
                    result.invalidMessage = "The file extension cannot be changed. It must end with '." + origExtension + "'";
                }
            }

            // Return the validation result
            return result;
        }
    }

    // See if this is a taxonomy field
    if (/^TaxonomyFieldType/.test(props.field.TypeAsString)) {
        // Set the type
        controlProps.type = Components.FormControlTypes.Dropdown;

        // Set a render event
        onControlRendering = controlProps.onControlRendering;
        controlProps.onControlRendering = newProps => {
            // Update the control properties
            controlProps = newProps;

            // Return a promise
            return new Promise((resolve, reject) => {
                // Display a loading message
                controlProps.loadingMessage = "Loading the MMS Data";

                // Load the field information
                Helper.ListFormField.create({
                    field: props.field,
                    listName: props.listInfo.list.Title,
                    name: props.field.InternalName,
                    webUrl: props.listInfo.webUrl
                }).then(
                    // Success
                    (fieldInfo: Helper.IListFormMMSFieldInfo) => {
                        // Save the field information
                        mmsFieldInfo = fieldInfo;

                        // Set the type
                        controlProps.type = mmsFieldInfo.multi ? Components.FormControlTypes.MultiDropdown : Components.FormControlTypes.Dropdown;

                        // Load the value field
                        Helper.ListFormField.loadMMSValueField(mmsFieldInfo).then(
                            // Success
                            valueField => {
                                // Set the value field
                                mmsFieldInfo.valueField = valueField;

                                // See if this is a new form
                                if (props.controlMode == SPTypes.ControlMode.New) {
                                    let fieldValue = [];

                                    // Get the default values
                                    let values = (props.field.DefaultValue || "").split(";#")
                                    for (let i = 0; i < values.length; i++) {
                                        let value = values[i].split("|");
                                        if (value.length == 2) {
                                            // Add the term id
                                            fieldValue.push(value[1]);
                                        }
                                    }

                                    // Update the field value
                                    controlProps.value = fieldValue;
                                } else {
                                    let fieldValue = props.value;

                                    // Get the field value
                                    let values = fieldValue && fieldValue.results ? fieldValue.results : [fieldValue];

                                    // Clear the field values
                                    fieldValue = [];

                                    // Parse the values
                                    for (let i = 0; i < values.length; i++) {
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
                                Helper.ListFormField.loadMMSData(mmsFieldInfo).then(
                                    // Success
                                    terms => {
                                        // Get the items
                                        let items = getMMSItems(Helper.Taxonomy.toObject(terms), controlProps.value);

                                        // See if this is not a required field and not a multi-select
                                        if (!isRequired && !mmsFieldInfo.multi) {
                                            // Add a blank entry
                                            items = [{
                                                text: "",
                                                value: null
                                            } as any].concat(items);
                                        }

                                        // Set the items
                                        (controlProps as Components.IFormControlPropsDropdown).items = items;

                                        // Clear the element
                                        controlProps.el ? controlProps.el.innerHTML = "" : null;

                                        // Call the event
                                        let returnVal = onControlRendering ? onControlRendering(controlProps) : null;
                                        if (returnVal && returnVal.then) {
                                            // Wait for the promise to complete
                                            returnVal.then(props => {
                                                // Resolve the promise
                                                resolve(props || controlProps);
                                            })
                                        } else {
                                            // Resolve the promise
                                            resolve(controlProps);
                                        }
                                    },
                                    // Error
                                    msg => {
                                        // Set the error message
                                        let errorMessage = "Error loading the mms terms for '" + props.field.InternalName + "'.";

                                        // Display an error message
                                        Components.Alert({
                                            el: controlProps.el,
                                            content: errorMessage,
                                            type: Components.AlertTypes.Danger
                                        });

                                        // Call the error event
                                        props.onError ? props.onError(errorMessage) : null;
                                    }
                                );
                            },
                            // Error
                            msg => {
                                // Set the error message
                                let errorMessage = "Error loading the mms value field for '" + props.field.InternalName + "'.";

                                // Display an error message
                                Components.Alert({
                                    el: controlProps.el,
                                    content: errorMessage,
                                    type: Components.AlertTypes.Danger
                                });

                                // Call the error event
                                props.onError ? props.onError(errorMessage) : null;

                                // Reject the request
                                reject(msg);
                            }
                        );
                    },
                    msg => {
                        // Display an error message
                        Components.Alert({
                            el: controlProps.el,
                            content: msg,
                            type: Components.AlertTypes.Danger
                        });

                        // Call the error event
                        props.onError ? props.onError(msg) : null;
                    }
                );
            });
        };
    }

    // Create the field
    let field = {
        control,
        controlProps,
        getValue: () => {
            let fieldValue: IFieldValue = {
                name: props.field.InternalName,
                value: control ? control.getValue() : null
            };

            // Update the field name/value, based on the type
            switch (props.field.FieldTypeKind) {
                // Boolean
                case SPTypes.FieldType.Boolean:
                    // Update the value
                    fieldValue.value = fieldValue.value ? true : false;
                    break;

                // Choice
                case SPTypes.FieldType.Choice:
                    // See if this is a dropdown
                    if (controlProps.type == Components.FormControlTypes.Dropdown) {
                        // See if there is a value
                        let ddlValue: Components.IDropdownItem = fieldValue.value;
                        if (ddlValue) {
                            // Update the field value
                            fieldValue.value = ddlValue.value || ddlValue.text;
                        }
                    } else {
                        // See if there is a value
                        let cbValue: Components.ICheckboxGroupItem = fieldValue.value;
                        if (cbValue) {
                            // Update the field value
                            fieldValue.value = cbValue.label;
                        }
                    }
                    break;

                // Number Field
                case SPTypes.FieldType.Currency:
                    // Ensure a value exists, otherwise null
                    fieldValue.value = fieldValue.value || null;
                    break;

                // Date/Time
                case SPTypes.FieldType.DateTime:
                    // Ensure a value exists, otherwise null
                    fieldValue.value = fieldValue.value ? (fieldValue.value as Date).toISOString() : null;
                    break;

                // Lookup
                case SPTypes.FieldType.Lookup:
                    // Append 'Id' to the field name
                    fieldValue.name += fieldValue.name.lastIndexOf("Id") == fieldValue.name.length - 2 ? "" : "Id";

                    // See if this is a multi-value field
                    if (lookupFieldInfo.multi) {
                        let values: Array<Components.IDropdownItem> = fieldValue.value || [];
                        fieldValue.value = { results: [] };

                        // Parse the values
                        for (let j = 0; j < values.length; j++) {
                            // Add the value
                            fieldValue.value.results.push(values[j].value || values[j].text);
                        }
                    } else {
                        // Update the field value
                        fieldValue.value = fieldValue.value ? fieldValue.value.value || fieldValue.value.text : null;

                        // Ensure a value exists, otherwise null
                        fieldValue.value = fieldValue.value || null;
                    }
                    break;

                // Multi-Choice
                case SPTypes.FieldType.MultiChoice:
                    let values: Array<Components.ICheckboxGroupItem | Components.IDropdownItem> = fieldValue.value || [];
                    fieldValue.value = { results: [] };

                    // Parse the values
                    for (let j = 0; j < values.length; j++) {
                        // See if this is a dropdown
                        if (controlProps.type == Components.FormControlTypes.MultiDropdown) {
                            // See if there is a value
                            let ddlValue: Components.IDropdownItem = values[j];

                            // Add the values
                            fieldValue.value.results.push(ddlValue.value || ddlValue.text);
                        } else {
                            // See if there is a value
                            let cbValue: Components.ICheckboxGroupItem = values[j];

                            // Add the values
                            fieldValue.value.results.push(cbValue.label);
                        }
                    }
                    break;

                // Number Field
                case SPTypes.FieldType.Number:
                    let numberField = props.field as Types.SP.FieldNumber;

                    // Ensure a field value exists
                    if (fieldValue.value) {
                        // See if this is a percentage
                        if (numberField.ShowAsPercentage) {
                            // Update the value
                            fieldValue.value = fieldValue.value / 100;
                        }
                    } else {
                        // Ensure the value is null
                        fieldValue.value = null;
                    }
                    break;

                // URL
                case SPTypes.FieldType.URL:
                    // See if the field value exists
                    if (fieldValue.value && fieldValue.value.Url) {
                        // Set the url, and validate the format
                        let url = fieldValue.value.Url;
                        if (url && /^http/.test(url.toLowerCase()) == false) {
                            // Update the url, otherwise the request will fail
                            url = "https://" + url;
                        }

                        // Add the metadata
                        fieldValue.value = {
                            __metadata: { type: "SP.FieldUrlValue" },
                            Description: fieldValue.value.Description || "",
                            Url: url
                        };
                    } else {
                        // Ensure the value is null
                        fieldValue.value = null;
                    }
                    break;

                // User
                case SPTypes.FieldType.User:
                    // Append 'Id' to the field name
                    fieldValue.name += fieldValue.name.lastIndexOf("Id") == fieldValue.name.length - 2 ? "" : "Id";

                    // See if this is a multi-value field
                    if ((props.field as Types.SP.FieldUser).AllowMultipleValues) {
                        let values: Array<Components.IDropdownItem> = fieldValue.value || [];

                        // Default the value
                        fieldValue.value = { results: [] };

                        // Parse the options
                        for (let j = 0; j < values.length; j++) {
                            let userValue = values[j] as Types.SP.User | Types.SP.Group;

                            // Add the field value
                            userValue.Id ? fieldValue.value.results.push(userValue.Id) : null;
                        }
                    } else {
                        let userValue: Types.SP.User | Types.SP.Group = fieldValue.value ? fieldValue.value[0] : null;

                        // Set the field value
                        fieldValue.value = userValue && userValue.Id ? userValue.Id : null;
                    }
                    break;

                // MMS
                default:
                    // See if this is a MMS field
                    if (mmsFieldInfo) {
                        // Update the field name to the value field
                        fieldValue.name = mmsFieldInfo ? mmsFieldInfo.valueField.InternalName : fieldValue.name + "_0";

                        // See if this is a multi field
                        if (mmsFieldInfo.multi) {
                            // Parse the field values
                            let fieldValues: Array<Components.IDropdownItem> = fieldValue.value || [];
                            fieldValue.value = [];
                            for (let j = 0; j < fieldValues.length; j++) {
                                let termInfo = fieldValues[j];

                                // Add the field value
                                fieldValue.value.push(-1 + ";#" + termInfo.text + "|" + termInfo.value);
                            }

                            // Set the field value
                            fieldValue.value = fieldValue.value.join(";#");
                        } else {
                            // Set the value
                            fieldValue.value = fieldValue.value && fieldValue.value.value ? -1 + ";#" + fieldValue.value.text + "|" + fieldValue.value.value : "";
                        }
                    }
                    break;
            }

            // Return the field value
            return fieldValue;
        },
        isValid: () => {
            // See if there is base validation
            if (baseValidation) {
                // Validate the field
                let baseResult = baseValidation(control, { isValid: false, value: control.getValue() });

                // Validate the current control
                let result = controlProps.onValidate ? controlProps.onValidate(controlProps, baseResult) : baseResult;

                // Return the flag
                if (typeof (result) === "boolean") {
                    // Update the validation
                    baseResult.isValid = result;
                    control.updateValidation(control.el, baseResult);

                    // Return the result
                    return result;
                }

                // Update the validation
                control.updateValidation(control.el, result);

                // Return the flag
                return result.isValid;
            }

            // Validate the control
            return control ? control.isValid : false;
        }
    };

    // Execute the assign to event
    props.assignTo ? props.assignTo(field) : null;

    // Return the field
    return field;
}