import { Components } from "gd-bs";
import { Helper, SPTypes, Types } from "gd-sprest";
import { IField, IFieldProps, IFieldValue } from "../../@types/components";
import { DateTime } from "./datetime";
import { PeoplePickerControlType } from "./peoplePicker";

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
                let id = selectedValues[j] ? selectedValues[j].Id : null;

                // See if this choice is selected
                if (item.Id == id) {
                    // Set the flag and break from the loop
                    isSelected = true;
                    break;
                }
            }

            // Add the item
            items.push({
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
    let getMMSItems = (term: Helper.ITerm, selectedValues = []) => {
        let items: Array<Components.IDropdownItem> = [];

        // See if information exists
        if (term.info) {
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
                isHeader: true,
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
            let childItems = getMMSItems(child, selectedValues);

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
            let showTime = (props.field as Types.SP.FieldDateTime).DisplayFormat == SPTypes.DateFormat.DateTime;

            // Set the type
            controlProps.type = isReadonly ? Components.FormControlTypes.Readonly : null;

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
                } else {
                    // Render a date picker
                    let dt = DateTime({
                        el: control.el,
                        showTime,
                        value: control.props.value
                    });

                    // Set the get value event
                    control.props.onGetValue = () => {
                        // Return the value
                        return dt.getValue();
                    }
                }

                // Call the event
                onControlRendered ? onControlRendered(formControl) : null;
            }
            break;

        // Lookup
        case SPTypes.FieldType.Lookup:
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

                                // Update the multi property
                                (controlProps as Helper.IListFormLookupFieldInfo).multi = lookupFieldInfo.multi;

                                // Get the drop down information
                                Helper.ListFormField.loadLookupData(lookupFieldInfo, 500).then(
                                    // Success
                                    items => {
                                        // Set the type
                                        controlProps.type = lookupFieldInfo.multi ? Components.FormControlTypes.MultiDropdown : Components.FormControlTypes.Dropdown;

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

            // Default the multi property
            (controlProps as Components.IFormControlPropsSwitch).multi = true;

            // Set the type
            controlProps.type = isChoice ? Components.FormControlTypes.Switch : Components.FormControlTypes.MultiDropdown;

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

            // See if this is a percentage
            if (numberField.ShowAsPercentage) {
                // Set the type
                numberProps.type = Components.FormControlTypes.Range;

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
                numberProps.type = Components.FormControlTypes.Range;
                numberProps.max = numberField.MaximumValue;
                numberProps.min = numberField.MinimumValue;
                numberProps.value = typeof (numberProps.value) == "number" ? numberProps.value : numberProps.min;
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
            controlProps.onValidate = (control) => {
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
                    descValid = control.required ? (desc.getValue() ? true : false) : true;

                    // Set the class
                    elDesc.classList.add(descValid ? "is-valid" : "is-invalid");
                }

                // See if the url exists
                if (elUrl) {
                    // Clear the classes
                    elUrl.classList.remove("is-invalid");
                    elUrl.classList.remove("is-valid");

                    // Set the flag
                    urlValid = control.required ? (url.getValue() ? true : false) : true;

                    // Set the class
                    elUrl.classList.add(urlValid ? "is-valid" : "is-invalid");
                }

                // Return the flag if this field is required
                return descValid && urlValid;
            }
            break;

        // User
        case SPTypes.FieldType.User:
            // Set the type
            controlProps.type = isReadonly ? Components.FormControlTypes.Readonly : PeoplePickerControlType;

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

    // Return the field
    return {
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
                    fieldValue.value = fieldValue.value ? (new Date(fieldValue.value)).toISOString() : null;
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
                            __metadata: { type: "Types.SP.FieldUrlValue" },
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
                        // See if this is a multi field
                        if (mmsFieldInfo.multi) {
                            // Update the field name to the value field
                            fieldValue.name = mmsFieldInfo ? mmsFieldInfo.valueField.InternalName : fieldValue.name + "_0";

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
        isValid: () => {
            // Validate the control
            let isValid = control ? control.isValid : false;

            // Call the event
            isValid = props.onValidate ? props.onValidate(props.field, control) : isValid;

            // Return the flag
            return isValid;
        }
    };
}