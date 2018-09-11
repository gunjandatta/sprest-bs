import { Components } from "gd-bs";
import { Helper, SPTypes, Types } from "gd-sprest";
import { IField, IFieldValue, IFieldValueUser } from "./types/field";
import { PeoplePicker } from "./peoplePicker";
import { IPeoplePicker } from "./types/peoplePicker";

/**
 * Field
 */
export const Field = (listInfo: Helper.Types.IListFormResult, field: Types.SP.IFieldResult, value: any, controlMode: number): IField => {
    let control: Components.IFormControl;
    let lookupFieldInfo: Helper.Types.IListFormLookupFieldInfo = null;
    let mmsFieldInfo: Helper.Types.IListFormMMSFieldInfo = null;

    // Method to get the choice options
    let getChoiceItems = (field: Types.SP.IFieldChoice, selectedValues) => {
        let items: Array<Components.IDropdownItem> = [];

        // Get the current value
        let values = selectedValues || null;
        values = values && values.results ? values.results : [values];

        // Parse the choices
        for (let i = 0; i < field.Choices.results.length; i++) {
            let choice = field.Choices.results[i];
            let isSelected = false;

            // Determine if this choice is selected
            for (let j = 0; j < values.length; j++) {
                // See if this choice is selected
                if (choice == values[j]) {
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
        description: field.Description,
        isReadonly: field.ReadOnlyField,
        label: field.Title,
        name: field.InternalName,
        type: Components.FormControlTypes.TextField,
        onControlRendered: formControl => {
            // Save the control
            control = formControl;
        }
    };

    // Set the type
    switch (field.FieldTypeKind) {
        // Choice
        case SPTypes.FieldType.Choice:
            // Set the type
            controlProps.type = Components.FormControlTypes.Dropdown;

            // Set the items
            (controlProps as Components.IFormControlPropsDropdown).items = getChoiceItems(field as any, value);
            break;

        // Boolean
        case SPTypes.FieldType.Boolean:
            // Set the type
            controlProps.type = Components.FormControlTypes.Checkbox;

            // Hide the label
            (controlProps as Components.IFormControlPropsCheckbox).hideLabel = true;

            // Set the type
            (controlProps as Components.IFormControlPropsCheckbox).items = [
                { checked: value ? true : false }
            ];
            break;

        // Multi-Choice
        case SPTypes.FieldType.MultiChoice:
            // Set the type
            controlProps.type = Components.FormControlTypes.MultiDropdown;

            // Set the items
            (controlProps as Components.IFormControlPropsDropdown).items = getChoiceItems(field as any, value);
            break;

        // Lookup
        case SPTypes.FieldType.Lookup:
            // Set the rendering event
            controlProps.onControlRendering = props => {
                // Update the control properties
                controlProps = props;

                // Display a loading message
                Components.Progress({
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
                        field: field as any,
                        listName: listInfo.list.Title,
                        name: field.InternalName,
                        webUrl: listInfo.webUrl
                    }).then((fieldInfo: Helper.Types.IListFormLookupFieldInfo) => {
                        // Save the field information
                        lookupFieldInfo = fieldInfo;

                        // Get the drop down information
                        Helper.ListFormField.loadLookupData(lookupFieldInfo, 500).then(items => {
                            // Set the type
                            controlProps.type = lookupFieldInfo.multi ? Components.FormControlTypes.MultiDropdown : Components.FormControlTypes.Dropdown;

                            // Set the items
                            (controlProps as Components.IFormControlPropsDropdown).items = getLookupItems(field as any, items, value);

                            // Clear the element
                            controlProps.el ? controlProps.el.innerHTML = "" : null;

                            // Resolve the promise
                            resolve(controlProps);
                        });
                    });
                });
            };
            break;

        // Note
        case SPTypes.FieldType.Note:
            // Set the type
            controlProps.type = Components.FormControlTypes.TextArea;
            break;

        // Number or Currency Field
        case SPTypes.FieldType.Number:
        case SPTypes.FieldType.Currency:
            // Set the type
            controlProps.type = (field as Types.SP.IFieldNumber).ShowAsPercentage ? Components.FormControlTypes.Range : Components.FormControlTypes.TextField;
            break;

        // URL
        case SPTypes.FieldType.URL:
            // See if a value exists
            if (value) {
                // Update the value
                controlProps.value = (value as Types.SP.ComplexTypes.FieldUrlValue).Url;
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
                    value: getUserItems(value)
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
    if (field.TypeAsString.startsWith("TaxonomyFieldType")) {
        // Set the type
        controlProps.type = Components.FormControlTypes.Dropdown;

        // Set a render event
        controlProps.onControlRendering = props => {
            // Update the control properties
            controlProps = props;

            // Return a promise
            return new Promise((resolve, reject) => {
                // Display a loading message
                Components.Progress({
                    el: controlProps.el,
                    isAnimated: true,
                    isStriped: true,
                    label: "Loading the mms data",
                    size: 100
                });

                // Load the field information
                Helper.ListFormField.create({
                    field: field as any,
                    listName: listInfo.list.Title,
                    name: field.InternalName,
                    webUrl: listInfo.webUrl
                }).then((fieldInfo: Helper.Types.IListFormMMSFieldInfo) => {
                    // Save the field information
                    mmsFieldInfo = fieldInfo;

                    // Set the type
                    controlProps.type = mmsFieldInfo.multi ? Components.FormControlTypes.MultiDropdown : Components.FormControlTypes.Dropdown;

                    // Load the value field
                    Helper.ListFormField.loadMMSValueField(mmsFieldInfo).then(valueField => {
                        // Set the value field
                        mmsFieldInfo.valueField = valueField;

                        // See if this is a new form
                        if (controlMode == SPTypes.ControlMode.New) {
                            let fieldValue = [];

                            // Get the default values
                            let values = (field.DefaultValue || "").split(";#")
                            for (let i = 0; i < values.length; i++) {
                                let value = values[i].split("|");
                                if (value.length == 2) {
                                    // Add the term id
                                    fieldValue.push(value[1]);
                                }
                            }

                            // Update the field value
                            value[field.InternalName] = fieldValue;
                        } else {
                            let fieldValue = value;

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
                            value[field.InternalName] = fieldValue;
                        }

                        // Load the terms
                        Helper.ListFormField.loadMMSData(mmsFieldInfo).then(terms => {
                            // Set the items
                            (controlProps as Components.IFormControlPropsDropdown).items = getMMSItems(Helper.Taxonomy.toObject(terms), value[field.InternalName]);

                            // Clear the element
                            controlProps.el ? controlProps.el.innerHTML = "" : null;

                            // Resolve the promise
                            resolve(controlProps);
                        });
                    });
                });
            });
        };
    }

    // Return the field
    return {
        control,
        controlProps,
        getValue: () => {
            let fieldValue: IFieldValue = {
                name: field.InternalName,
                value: control.getValue()
            };

            // Update the field name/value, based on the type
            switch (field.FieldTypeKind) {
                // Choice
                case SPTypes.FieldType.Choice:
                    let ddlValue: Components.IDropdownItem = fieldValue.value;
                    // See if there is a value
                    if (ddlValue) {
                        // Update the field value
                        fieldValue.value = ddlValue.value || ddlValue.text;
                    }
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
                    }
                    break;

                // User
                case SPTypes.FieldType.User:
                    let userFieldValue = fieldValue as IFieldValueUser;

                    // Append 'Id' to the field name
                    fieldValue.name += fieldValue.name.lastIndexOf("Id") == fieldValue.name.length - 2 ? "" : "Id";

                    // See if this is a multi-value field
                    if ((field as Types.SP.IFieldUser).AllowMultipleValues) {
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
                                Label: fieldValue.value[0].text,
                                TermGuid: fieldValue.value[0].value,
                                WssId: -1
                            } : null;
                        }
                    }
                    break;
            }

            // Return the field value
            return fieldValue;
        },
        save: () => {
            // Return a promise
            return new Promise((resolve, reject) => {
            });
        }
    };
}