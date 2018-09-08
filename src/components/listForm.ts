import { Helper, SPTypes, Types } from "gd-sprest";
import { Components } from "gd-bs";
import { IListForm, IListFormDisplayProps, IListFormEdit, IListFormEditProps } from "./types/listForm";
import { FieldInfo } from "./fieldInfo";

// Extend the list form
export const ListForm: IListForm = Helper.ListForm as any;

// Method to render a display form for an item
ListForm.renderDisplayForm = (props: IListFormDisplayProps) => {
    // Render a loading message
    Components.Progress({
        el: props.el,
        isAnimated: true,
        isStriped: true,
        label: "Loading the Item Form",
        size: 100
    });

    // Load the list item
    props.info.list.Items(props.info.item.Id)
        // Get the html for the fields
        .FieldValuesAsHtml()
        // Execute the request
        .execute(formValues => {
            let hasUserField = false;
            let mapper: { [key: string]: Components.IFormControlProps } = {};
            let rows: Array<Components.IFormRow> = [];

            // Parse the fields
            for (let fieldName in props.info.fields) {
                let field = props.info.fields[fieldName];
                let html = formValues[fieldName] || formValues[fieldName.replace(/\_/g, "_x005f_")] || "";

                // Set the control
                mapper[fieldName] = {
                    description: field.Description,
                    html,
                    label: field.Title
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
                rows: props.template || rows
            });

            // See if we are displaying a user field
            if (hasUserField) {
                // Enable the persona
                window["ProcessImn"]();
            }
        });
};

// Render the edit form
ListForm.renderEditForm = (props: IListFormEditProps): IListFormEdit => {
    let mapper: {
        [key: string]: {
            control: Components.IFormControlProps;
            fieldInfo: Helper.Types.IFieldInfo;
        }
    } = {};
    let rows: Array<Components.IFormRow> = [];
    let value = {};

    // Render a loading message
    Components.Progress({
        el: props.el,
        isAnimated: true,
        isStriped: true,
        label: "Loading the Item Form",
        size: 100
    });

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

    // Parse the fields
    for (let fieldName in props.info.fields) {
        let columns = null;
        let field = props.info.fields[fieldName];

        // Set the value
        value[fieldName] = props.info.item ? props.info.item[fieldName] : null;
        let fieldValue = value[fieldName];

        // See if this is a read-only field
        if (field.ReadOnlyField) {
            // Do not render in the new form
            if (props.controlMode == SPTypes.ControlMode.New) { continue; }
        }

        // Do not render a hidden taxonomy field
        if (field.Hidden && field.FieldTypeKind == SPTypes.FieldType.Note && field.Title.endsWith("_0")) { continue; }

        // See if this is an invalid field type
        if (field.FieldTypeKind == SPTypes.FieldType.Invalid) {
            // Ensure it's not a taxonomy field
            if (!field.TypeAsString.startsWith("TaxonomyFieldType")) { continue; }
        }

        // Set the default properties for the control
        let control: Components.IFormControlProps = {
            description: field.Description,
            isReadonly: field.ReadOnlyField,
            label: field.Title,
            name: field.InternalName,
            type: Components.FormControlTypes.TextField
        };

        // Set the type
        switch (field.FieldTypeKind) {
            // Choice
            case SPTypes.FieldType.Choice:
                // Set the type
                control.type = Components.FormControlTypes.Dropdown;

                // Set the items
                (control as Components.IFormControlPropsDropdown).items = getChoiceItems(field as any, fieldValue);
                break;

            // Boolean
            case SPTypes.FieldType.Boolean:
                // Set the type
                control.type = Components.FormControlTypes.Checkbox;

                // Hide the label
                (control as Components.IFormControlPropsCheckbox).hideLabel = true;

                // Set the type
                (control as Components.IFormControlPropsCheckbox).items = [
                    { checked: fieldValue ? true : false }
                ]
                break;

            // Multi-Choice
            case SPTypes.FieldType.MultiChoice:
                // Set the type
                control.type = Components.FormControlTypes.MultiDropdown;

                // Set the items
                (control as Components.IFormControlPropsDropdown).items = getChoiceItems(field as any, fieldValue);
                break;

            // Lookup
            case SPTypes.FieldType.Lookup:
                // Set the render event
                control.onRenderControl = control => {
                    // Display a loading message
                    Components.Progress({
                        el: control.el,
                        isAnimated: true,
                        isStriped: true,
                        label: "Loading the lookup data",
                        size: 100
                    });

                    // Return a promise
                    return new Promise((resolve, reject) => {
                        // Load the field information
                        FieldInfo({
                            field,
                            listName: props.info.list.Title,
                            name: fieldName,
                            webUrl: props.info.webUrl
                        }).then((fieldInfo: Helper.Types.IListFormLookupFieldInfo) => {
                            // Update the mapper
                            mapper[fieldName].fieldInfo = fieldInfo;

                            // Set the type
                            control.type = fieldInfo.multi ? Components.FormControlTypes.MultiDropdown : Components.FormControlTypes.Dropdown;

                            // Get the drop down information
                            Helper.ListFormField.loadLookupData(fieldInfo, 500).then(items => {
                                // Set the items
                                (control as Components.IFormControlPropsDropdown).items = getLookupItems(field as any, items, fieldValue);

                                // Clear the element
                                control.el.innerHTML = "";

                                // Resolve the promise
                                resolve(control);
                            });
                        });
                    });
                };
                break;

            // Note
            case SPTypes.FieldType.Note:
                // Set the type
                control.type = Components.FormControlTypes.TextArea;
                break;

            // URL
            case SPTypes.FieldType.URL:
                // See if a value exists
                if (fieldValue) {
                    // Update the value
                    value[field.InternalName + "_Description"] = (fieldValue as Types.SP.ComplexTypes.FieldUrlValue).Description;
                    value[field.InternalName + "_URL"] = (fieldValue as Types.SP.ComplexTypes.FieldUrlValue).Url;
                }

                // Clear the control
                control = null;

                // Set the columns
                columns = [
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
                break;
        }

        // See if this is a taxonomy field
        if (field.TypeAsString.startsWith("TaxonomyFieldType")) {
            // Set the type
            control.type = Components.FormControlTypes.Dropdown;

            // Set a render event
            control.onRenderControl = el => {
                // Return a promise
                return new Promise((resolve, reject) => {
                    // Display a loading message
                    Components.Progress({
                        el: control.el,
                        isAnimated: true,
                        isStriped: true,
                        label: "Loading the mms data",
                        size: 100
                    });

                    // Load the field information
                    FieldInfo({
                        field,
                        listName: props.info.list.Title,
                        name: fieldName,
                        webUrl: props.info.webUrl
                    }).then((mmsInfo: Helper.Types.IListFormMMSFieldInfo) => {
                        // Update the mapper
                        mapper[fieldName].fieldInfo = mmsInfo;

                        // See if this is a new form
                        if (props.controlMode == SPTypes.ControlMode.New) {
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
                            value[fieldName] = fieldValue;
                        } else {
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
                            value[fieldName] = fieldValue;
                        }

                        // Load the terms
                        Helper.ListFormField.loadMMSData(mmsInfo).then(terms => {
                            // Load the value field
                            Helper.ListFormField.loadMMSValueField(mmsInfo).then(valueField => {
                                // Set the value field
                                mmsInfo.valueField = valueField;

                                // Set the items
                                (control as Components.IFormControlPropsDropdown).items = getMMSItems(Helper.Taxonomy.toObject(terms), value[fieldName]);

                                // Clear the element
                                control.el.innerHTML = "";

                                // Resolve the promise
                                resolve(control);
                            });
                        });
                    });
                });
            };
        }

        // Add the field to the mapper
        mapper[fieldName] = { control, fieldInfo: null };

        // Add the row
        rows.push({
            colSize: 2,
            columns,
            control
        });
    }

    // Clear the element
    props.el ? props.el.innerHTML = "" : null;

    // See if there is a template
    if (props.template) {
        let updateControl = (refControl) => {
            // Get the control from the mapper
            let control = refControl ? mapper[refControl.name].control : null;

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

    // Render the form
    let form = Components.Form({
        el: props.el,
        rows: props.template || rows,
        value
    });

    // Return the form
    return {
        getValues: () => {
            let unknownUsers = {};

            // Get the form values
            let formValues = form.getValues();

            // Parse the fields
            for (let fieldName in props.info.fields) {
                let field = props.info.fields[fieldName];
                let fieldInfo = mapper[fieldName];
                let fieldValue: any = formValues[fieldName];

                // Update the field name/value, based on the type
                switch (field.FieldTypeKind) {
                    // Lookup
                    case SPTypes.FieldType.Lookup:
                        // Append 'Id' to the field name
                        fieldName += fieldName.lastIndexOf("Id") == fieldName.length - 2 ? "" : "Id";

                        // See if this is a multi-value field
                        let lookupInfo: Helper.Types.IFieldInfoLookup = fieldInfo.fieldInfo;
                        if (lookupInfo && lookupInfo.multi) {
                            let values: Array<Components.IDropdownItem> = fieldValue || [];
                            fieldValue = { results: [] };

                            // Parse the values
                            for (let j = 0; j < values.length; j++) {
                                // Add the value
                                fieldValue.results.push(values[j].value);
                            }
                        } else {
                            // Update the field value
                            fieldValue = fieldValue && fieldValue.length > 0 ? fieldValue[0].value : fieldValue;
                        }
                        break;

                    // Multi-Choice
                    case SPTypes.FieldType.MultiChoice:
                        let values: Array<Components.IDropdownItem> = fieldValue || [];
                        fieldValue = { results: [] };

                        // Parse the values
                        for (let j = 0; j < values.length; j++) {
                            // Add the values
                            fieldValue.results.push(values[j].value);
                        }
                        break;

                    // URL
                    case SPTypes.FieldType.URL:
                        // See if the field value exists
                        if (fieldValue) {
                            // Add the metadata
                            fieldValue.__metadata = { type: "SP.FieldUrlValue" };
                        }
                        break;

                    // User
                    case SPTypes.FieldType.User:
                        // Append 'Id' to the field name
                        fieldName += fieldName.lastIndexOf("Id") == fieldName.length - 2 ? "" : "Id";

                        // See if this is a multi-value field
                        if ((field as Types.SP.IFieldUser).AllowMultipleValues) {
                            let values: Array<Components.IDropdownItem> = fieldValue || [];
                            fieldValue = { results: [] };

                            // Parse the options
                            for (let j = 0; j < values.length; j++) {
                                let userValue = values[j] as Types.SP.IPeoplePickerUser;
                                if (userValue && userValue.EntityData) {
                                    // Ensure the user or group id exists
                                    if (userValue.EntityData.SPGroupID || userValue.EntityData.SPUserID) {
                                        // Update the field value
                                        fieldValue.results.push(userValue.EntityData.SPUserID || userValue.EntityData.SPGroupID);
                                    } else {
                                        // Add the unknown user account
                                        unknownUsers[fieldName] = unknownUsers[fieldName] || [];
                                        unknownUsers[fieldName].push(userValue.Key);
                                    }
                                }
                            }
                        } else {
                            let userValue: Types.SP.IPeoplePickerUser = fieldValue ? fieldValue[0] : null;
                            if (userValue && userValue.EntityData) {
                                // Ensure the user or group id exists
                                if (userValue.EntityData.SPGroupID || userValue.EntityData.SPUserID) {
                                    // Update the field value
                                    fieldValue = userValue.EntityData.SPUserID || userValue.EntityData.SPGroupID;
                                } else {
                                    // Add the unknown user account
                                    unknownUsers[fieldName] = unknownUsers[fieldName] || [];
                                    unknownUsers[fieldName].push(userValue.Key);
                                }
                            } else {
                                // Clear the field value
                                fieldValue = null;
                            }
                        }
                        break;

                    // MMS
                    default:
                        if (field.TypeAsString.startsWith("TaxonomyFieldType")) {
                            // See if this is a multi field
                            if (field.TypeAsString.endsWith("Multi")) {
                                // Update the field name to the value field
                                fieldName = fieldInfo.fieldInfo ? (fieldInfo.fieldInfo as Types.Helper.IListFormMMSFieldInfo).valueField.InternalName : fieldName + "_0";

                                // Parse the field values
                                let fieldValues: Array<Components.IDropdownItem> = fieldValue || [];
                                fieldValue = [];
                                for (let j = 0; j < fieldValues.length; j++) {
                                    let termInfo = fieldValues[j];

                                    // Add the field value
                                    fieldValue.push(-1 + ";#" + termInfo.text + "|" + termInfo.value);
                                }

                                // Set the field value
                                fieldValue = fieldValue.join(";#");
                            } else {
                                // Update the value
                                fieldValue = fieldValue && fieldValue.length > 0 ? {
                                    __metadata: { type: "SP.Taxonomy.TaxonomyFieldValue" },
                                    Label: fieldValue[0].text,
                                    TermGuid: fieldValue[0].value,
                                    WssId: -1
                                } : fieldValue;
                            }
                        }
                        break;
                }

                // Set the field value
                formValues[fieldName] = fieldValue;
            }

            // Return the form values
            return { formValues, unknownUsers };
        },
        isValid: () => {
            // TO DO
            return true;
        }
    }
};