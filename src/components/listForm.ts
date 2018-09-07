import { Helper, SPTypes, Types } from "gd-sprest";
import { Components } from "gd-bs";
import { IListForm, IListFormDisplayProps, IListFormEditProps } from "./types";
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
            let mapper: { [key: string]: Components.IFormControl } = {};
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
ListForm.renderEditForm = (props: IListFormEditProps) => {
    let controlMode = typeof (props.controlMode) === "number" ? props.controlMode : props.info.item ? SPTypes.ControlMode.Edit : SPTypes.ControlMode.New;
    let mapper: { [key: string]: Components.IFormControl } = {};
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

            // See if this is a multi-lookup field
            if (field.AllowMultipleValues) {
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
        let control: Components.IFormControl = {
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
                (control as Components.IFormControlDropdown).items = getChoiceItems(field as any, value);
                break;

            // Boolean
            case SPTypes.FieldType.Boolean:
                // Set the type
                control.type = Components.FormControlTypes.Checkbox;

                // Hide the label
                (control as Components.IFormControlCheckbox).hideLabel = true;

                // Set the type
                (control as Components.IFormControlCheckbox).items = [
                    { checked: value ? true : false }
                ]
                break;

            // Multi-Choice
            case SPTypes.FieldType.MultiChoice:
                // Set the type
                control.type = Components.FormControlTypes.MultiDropdown;

                // Set the items
                (control as Components.IFormControlDropdown).items = getChoiceItems(field as any, value);
                break;

            // Lookup
            case SPTypes.FieldType.Lookup:
                // Set the type
                control.type = (field as Types.SP.IFieldLookup).AllowMultipleValues ? Components.FormControlTypes.MultiDropdown : Components.FormControlTypes.Dropdown;

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

                    // Load the field information
                    FieldInfo({
                        field,
                        listName: props.info.list.Title,
                        name: fieldName,
                        webUrl: props.info.webUrl
                    }).then((fieldInfo: Helper.Types.IListFormLookupFieldInfo) => {
                        // Get the drop down information
                        Helper.ListFormField.loadLookupData(fieldInfo, 500).then(items => {
                            // Set the items
                            (control as Components.IFormControlDropdown).items = getLookupItems(field as any, items, value);

                            // Clear the element
                            control.el.innerHTML = "";

                            // Render the form control
                            Components.FormControl(control);
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
                if (value[fieldName]) {
                    // Update the value
                    value[field.InternalName + "_Description"] = (value[fieldName] as Types.SP.ComplexTypes.FieldUrlValue).Description;
                    value[field.InternalName + "_URL"] = (value[fieldName] as Types.SP.ComplexTypes.FieldUrlValue).Url;
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
                        } as Components.IFormControl
                    },
                    {
                        size: 6,
                        control: {
                            label: field.Title + " URL",
                            name: field.InternalName + "_URL",
                            type: Components.FormControlTypes.TextField
                        } as Components.IFormControl
                    }
                ];
                break;
        }

        // See if this is a taxonomy field
        if (field.TypeAsString.startsWith("TaxonomyFieldType")) {
            // Set the type
            control.type = Components.FormControlTypes.Dropdown;

            // Load the field information
            FieldInfo({
                field,
                listName: props.info.list.Title,
                name: fieldName,
                webUrl: props.info.webUrl
            }).then((mmsInfo: Helper.Types.IListFormMMSFieldInfo) => {
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
                } else {
                    // Get the field value
                    let fieldValue = value[field.InternalName];
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
                }

                // Load the terms
                Helper.ListFormField.loadMMSData(mmsInfo).then(terms => {
                    // Load the value field
                    Helper.ListFormField.loadMMSValueField(mmsInfo).then(valueField => {
                        // Set the value field
                        mmsInfo.valueField = valueField;

                        // Set the items
                        (control as Components.IFormControlDropdown).items = getMMSItems(Helper.Taxonomy.toObject(terms), value[fieldName]);

                        // Clear the element
                        control.el.innerHTML = "";

                        // Render the form control
                        Components.FormControl(control);
                    });
                });
            });
        }

        // Add the field to the mapper
        mapper[fieldName] = control;

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
    Components.Form({
        el: props.el,
        rows: props.template || rows,
        value
    });
};