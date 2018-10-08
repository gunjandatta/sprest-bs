import { Components } from "gd-bs";
import { Helper, SPTypes, Types } from "gd-sprest";
import { DateTime } from "./datetime";
import { IField, IFieldProps, IFieldValue, IFieldValueUser } from "./types/field";
import { PeoplePicker } from "./peoplePicker";
import { IPeoplePicker } from "./types/peoplePicker";

/**
 * Field
 */
export const Field = (props: IFieldProps): IField => {
    let control: Components.IFormControl;
    let lookupFieldInfo: Helper.Types.IListFormLookupFieldInfo = null;
    let mmsFieldInfo: Helper.Types.IListFormMMSFieldInfo = null;

    // Method to get the choice options
    let getChoiceItems = (field: Types.SP.IFieldChoice, selectedValues) => {
        let items: Array<Components.IDropdownItem> = [];

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

            // Add the item
            items.push({
                isSelected,
                text: choice,
                value: choice
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

    // Method to generate the lookup dropdown items
    let getLookupItems = (field: Types.SP.IFieldLookup, lookupItems: Array<Types.SP.IListItemQueryResult>, selectedValues) => {
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
    let getMMSItems = (term: Helper.Types.ITerm, selectedValues = []) => {
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
        if (items.length > 0 && selectedValues.length == 0 && props.field.Required) {
            // Select the first item
            items[0].isSelected = true;
        }

        // Return the items
        return items;
    }

    // Method to get the user items
    let getUserItems = (value) => {
        let users: Array<Types.SP.IPeoplePickerUser> = [];

        // See if a value exists
        if (value) {
            let userValues = value.results ? value.results : [value];
            for (let i = 0; i < userValues.length; i++) {
                let userValue = userValues[i] as Types.SP.ComplexTypes.FieldUserValue;

                // Ensure a title exists
                if (userValue.Title) {
                    // Add the user
                    users.push({
                        DisplayText: userValue.Title,
                        EntityData: {
                            Email: userValue.EMail,
                            SPUserID: userValue.Id.toString()
                        },
                        Key: userValue.Id.toString()
                    });
                }
            }
        }

        // Return the users
        return users;
    }

    // Set the default properties for the control
    let controlProps: Components.IFormControlProps = {
        description: props.field.Description,
        isReadonly: props.field.ReadOnlyField,
        label: props.field.Title,
        name: props.field.InternalName,
        type: Components.FormControlTypes.TextField,
        value: props.value,
        onControlRendered: formControl => {
            // Save the control
            control = formControl;
        }
    };

    // See if this is a new form, a default value exists and no value has been defined
    if (props.controlMode == SPTypes.ControlMode.New && props.field.DefaultValue && props.value == null) {
        // Set the default value
        controlProps.value = props.field.DefaultValue;
    }

    // Set the type
    switch (props.field.FieldTypeKind) {
        // Boolean
        case SPTypes.FieldType.Boolean:
            // Set the type
            controlProps.type = Components.FormControlTypes.Checkbox;

            // Hide the label
            (controlProps as Components.IFormControlPropsCheckbox).hideLabel = true;

            // Set the type
            (controlProps as Components.IFormControlPropsCheckbox).items = [
                { checked: props.value ? true : false }
            ];
            break;

        // Choice
        case SPTypes.FieldType.Choice:
            // Set the type
            controlProps.type = Components.FormControlTypes.Dropdown;

            // Get the items
            let items = getChoiceItems(props.field as any, props.value);

            // See if this is not a required field
            if (!props.field.Required) {
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
            controlProps.onControlRendered = (formControl) => {
                // Save the control
                control = formControl;
            }
            break;

        // Date/Time
        case SPTypes.FieldType.DateTime:
            let showTime = (props.field as Types.SP.IFieldDateTime).DisplayFormat == SPTypes.DateFormat.DateTime;

            // Set the type
            controlProps.type = Components.FormControlTypes.TextField;

            // Set the rendered event
            controlProps.onControlRendered = (formControl) => {
                // Save the control
                control = formControl;

                // Clear the element
                control.el.innerHTML = "";

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
            break;

        // Multi-Choice
        case SPTypes.FieldType.MultiChoice:
            // Set the type
            controlProps.type = Components.FormControlTypes.MultiDropdown;

            // Set the items
            (controlProps as Components.IFormControlPropsDropdown).items = getChoiceItems(props.field as any, props.value);
            break;

        // Lookup
        case SPTypes.FieldType.Lookup:
            // Set the rendering event
            controlProps.onControlRendering = newProps => {
                // Update the control properties
                controlProps = newProps;

                // Display a loading message
                let progress = Components.Progress({
                    el: controlProps.el,
                    isAnimated: true,
                    isStriped: true,
                    label: "Loading the lookup data",
                    size: 100
                });

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
                        (fieldInfo: Helper.Types.IListFormLookupFieldInfo) => {
                            // Save the field information
                            lookupFieldInfo = fieldInfo;

                            // Get the drop down information
                            Helper.ListFormField.loadLookupData(lookupFieldInfo, 500).then(
                                // Success
                                items => {
                                    // Set the type
                                    controlProps.type = lookupFieldInfo.multi ? Components.FormControlTypes.MultiDropdown : Components.FormControlTypes.Dropdown;

                                    // Get the dropdown items
                                    let ddlItems = getLookupItems(props.field as any, items, props.value);

                                    // See if this is not a required field and not a multi-select
                                    if (!props.field.Required && !lookupFieldInfo.multi) {
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

                                    // Resolve the promise
                                    resolve(controlProps);
                                },
                                // Error
                                msg => {
                                    // Set the error message
                                    let errorMessage = "Error loading the lookup field values for '" + props.field.InternalName + "'.";

                                    // Remove the progress bar
                                    progress.el.parentElement ? progress.el.parentElement.removeChild(progress.el) : null;

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

                            // Remove the progress bar
                            progress.el.parentElement ? progress.el.parentElement.removeChild(progress.el) : null;

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
            break;

        // Note
        case SPTypes.FieldType.Note:
            // Set the properties
            controlProps.type = Components.FormControlTypes.TextArea;
            (controlProps as Components.IFormControlPropsTextField).rows = (props.field as Types.SP.IFieldNote).NumberOfLines;
            break;

        // Number Field
        case SPTypes.FieldType.Number:
            let numberField = props.field as Types.SP.IFieldNumber;
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
            } else {
                // Set the type
                numberProps.type = Components.FormControlTypes.TextField;
            }
            break;

        // URL
        case SPTypes.FieldType.URL:
            // See if a value exists
            if (props.value) {
                // Update the value
                controlProps.value = (props.value as Types.SP.ComplexTypes.FieldUrlValue).Url;
            }
            /*
                // See if a value exists
                if (value) {
                    // Update the value
                    value[field.InternalName + "_Description"] = (value as Types.SP.ComplexTypes.FieldUrlValue).Description;
                    value[field.InternalName + "_URL"] = (value as Types.SP.ComplexTypes.FieldUrlValue).Url;
                }
    
                // Set the columns
                let columns = [
                    {
                        size: 6,
                        control: {
                            label: field.Title + " Description",
                            name: field.InternalName + "_Description",
                            type: Components.FormControlTypes.TextField
                        } as Components.IFormControlProps
                    },
                    {
                        size: 6,
                        control: {
                            label: field.Title + " URL",
                            name: field.InternalName + "_URL",
                            type: Components.FormControlTypes.TextField
                        } as Components.IFormControlProps
                    }
                ];
            */
            break;

        // User
        case SPTypes.FieldType.User:
            let picker: IPeoplePicker = null;

            // Set the rendered event
            controlProps.onControlRendered = formControl => {
                // Save the control
                control = formControl;

                // Clear the control
                control.el.innerHTML = "";

                // Render a people picker to it
                picker = PeoplePicker({
                    el: control.el,
                    value: getUserItems(props.value)
                });
            }

            // Set the get value event
            controlProps.onGetValue = () => {
                // Get the values
                return picker.getValue();
            };
            break;
    }

    // See if this is a taxonomy field
    if (/^TaxonomyFieldType/.test(props.field.TypeAsString)) {
        // Set the type
        controlProps.type = Components.FormControlTypes.Dropdown;

        // Set a render event
        controlProps.onControlRendering = newProps => {
            // Update the control properties
            controlProps = newProps;

            // Return a promise
            return new Promise((resolve, reject) => {
                // Display a loading message
                let progress = Components.Progress({
                    el: controlProps.el,
                    isAnimated: true,
                    isStriped: true,
                    label: "Loading the mms data",
                    size: 100
                });

                // Load the field information
                Helper.ListFormField.create({
                    field: props.field,
                    listName: props.listInfo.list.Title,
                    name: props.field.InternalName,
                    webUrl: props.listInfo.webUrl
                }).then(
                    // Success
                    (fieldInfo: Helper.Types.IListFormMMSFieldInfo) => {
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
                                        if (!props.field.Required && !mmsFieldInfo.multi) {
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

                                        // Resolve the promise
                                        resolve(controlProps);
                                    },
                                    // Error
                                    msg => {
                                        // Set the error message
                                        let errorMessage = "Error loading the mms terms for '" + props.field.InternalName + "'.";

                                        // Remove the progress bar
                                        progress.el.parentElement ? progress.el.parentElement.removeChild(progress.el) : null;

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

                                // Remove the progress bar
                                progress.el.parentElement ? progress.el.parentElement.removeChild(progress.el) : null;

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
                        // Remove the progress bar
                        progress.el.parentElement ? progress.el.parentElement.removeChild(progress.el) : null;

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
                // Choice
                case SPTypes.FieldType.Choice:
                    let ddlValue: Components.IDropdownItem = fieldValue.value;
                    // See if there is a value
                    if (ddlValue) {
                        // Update the field value
                        fieldValue.value = ddlValue.value || ddlValue.text;
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
                    fieldValue.value = fieldValue.value || null;
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
                    let values: Array<Components.IDropdownItem> = fieldValue.value || [];
                    fieldValue.value = { results: [] };

                    // Parse the values
                    for (let j = 0; j < values.length; j++) {
                        // Add the values
                        fieldValue.value.results.push(values[j].value || values[j].text);
                    }
                    break;

                // Number Field
                case SPTypes.FieldType.Number:
                    let numberField = props.field as Types.SP.IFieldNumber;

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
                    if (fieldValue.value) {
                        // Add the metadata
                        fieldValue.value = {
                            __metadata: { type: "SP.FieldUrlValue" },
                            Description: fieldValue.value, // TO DO - Add ability to update the description
                            Url: fieldValue.value
                        };
                    } else {
                        // Ensure the value is null
                        fieldValue.value = null;
                    }
                    break;

                // User
                case SPTypes.FieldType.User:
                    let userFieldValue = fieldValue as IFieldValueUser;

                    // Append 'Id' to the field name
                    fieldValue.name += fieldValue.name.lastIndexOf("Id") == fieldValue.name.length - 2 ? "" : "Id";

                    // See if this is a multi-value field
                    if ((props.field as Types.SP.IFieldUser).AllowMultipleValues) {
                        let values: Array<Components.IDropdownItem> = userFieldValue.value || [];
                        userFieldValue.value = { results: [] };

                        // Parse the options
                        for (let j = 0; j < values.length; j++) {
                            let userValue = values[j] as Types.SP.IPeoplePickerUser;
                            if (userValue && userValue.EntityData) {
                                // Ensure the user or group id exists
                                if (userValue.EntityData.SPGroupID || userValue.EntityData.SPUserID) {
                                    // Update the field value
                                    userFieldValue.value.results.push(userValue.EntityData.SPUserID || userValue.EntityData.SPGroupID);
                                } else {
                                    // Add the unknown user account
                                    userFieldValue.unknownUsers = userFieldValue.unknownUsers || [];
                                    userFieldValue.unknownUsers[userFieldValue.name].push(userValue.Key);
                                }
                            }
                        }
                    } else {
                        let userValue: Types.SP.IPeoplePickerUser = userFieldValue.value ? userFieldValue.value[0] : null;
                        if (userValue && userValue.EntityData) {
                            // Ensure the user or group id exists
                            if (userValue.EntityData.SPGroupID || userValue.EntityData.SPUserID) {
                                // Update the field value
                                userFieldValue.value = userValue.EntityData.SPUserID || userValue.EntityData.SPGroupID;
                            } else {
                                // Add the unknown user account
                                userFieldValue.unknownUsers = userFieldValue.unknownUsers || [];
                                userFieldValue.unknownUsers[userFieldValue.name].push(userValue.Key);
                            }
                        } else {
                            // Clear the field value
                            userFieldValue.value = null;
                        }
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
                            fieldValue.value = fieldValue.value ? {
                                __metadata: { type: "SP.Taxonomy.TaxonomyFieldValue" },
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
        }
    };
}