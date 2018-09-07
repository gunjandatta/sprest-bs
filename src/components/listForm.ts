import { Helper, SPTypes, Types } from "gd-sprest";
import { Components } from "gd-bs";
import { IListForm, IListFormDisplayProps, IListFormEditProps } from "./types";

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
            let rows: Array<Components.IFormRow> = [];

            // Parse the fields
            for (let fieldName in props.info.fields) {
                let field = props.info.fields[fieldName];
                let html = formValues[fieldName] || formValues[fieldName.replace(/\_/g, "_x005f_")] || "";

                // Add the row
                rows.push({
                    colSize: 2,
                    control: {
                        description: field.Description,
                        html,
                        label: field.Title
                    }
                });
            }

            // Clear the element
            props.el ? props.el.innerHTML = "" : null;

            // Render the form
            Components.Form({
                el: props.el,
                rows
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

    // Parse the fields
    for (let fieldName in props.info.fields) {
        let columns = null;
        let field = props.info.fields[fieldName];

        // Set the value
        value[fieldName] = props.info.item ? props.info.item[fieldName] : null;

        // Set the default properties for the control
        let control: Components.IFormControl = {
            description: field.Description,
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
                control.type = Components.FormControlTypes.CheckBox;
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

                    // Get the drop down information
                    Helper.ListFormField.loadLookupData({
                        lookupField: (field as Types.SP.IFieldLookup).LookupField,
                        lookupListId: (field as Types.SP.IFieldLookup).LookupList,
                        lookupWebId: (field as Types.SP.IFieldLookup).LookupWebId,
                        name: field.InternalName,
                        listName: props.info.list.Title,
                        webUrl: props.info.webUrl
                    }, 500).then(items => {
                        // Set the items
                        (control as Components.IFormControlDropdown).items = getLookupItems(field as any, items, value);

                        // Clear the element
                        control.el.innerHTML = "";

                        // Render the form control
                        Components.FormControl(control);
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

        // Add the row
        rows.push({
            colSize: 2,
            columns,
            control
        });
    }

    // Clear the element
    props.el ? props.el.innerHTML = "" : null;

    // Render the form
    Components.Form({
        el: props.el,
        rows,
        value
    });
};