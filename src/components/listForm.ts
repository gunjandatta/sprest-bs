import { Components } from "gd-bs";
import { ContextInfo, Helper, SPTypes } from "gd-sprest";
import { IField } from "./types/field";
import { IListForm, IListFormDisplayProps, IListFormEdit, IListFormEditProps } from "./types/listForm";
import { Field } from "./field";

// Extend the list form
export const ListForm: IListForm = Helper.ListForm as any;

// Method to render a display form for an item
ListForm.renderDisplayForm = (props: IListFormDisplayProps) => {
    // Render a loading message
    let progress = Components.Progress({
        el: props.el,
        isAnimated: true,
        isStriped: true,
        label: "Loading the Form",
        size: 100
    });

    // Load the list item
    props.info.list.Items(props.info.item.Id)
        // Get the html for the fields
        .FieldValuesAsHtml()
        // Execute the request
        .execute(
            // Success
            formValues => {
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
                    onControlRendered: props.onControlRendered,
                    onControlRendering: props.onControlRendering,
                    rows: props.template || rows
                });

                // See if we are displaying a user field
                if (hasUserField) {
                    // Enable the persona
                    window["ProcessImn"]();
                }
            },
            // Error
            () => {
                // Remove the progress bar
                progress.el.parentElement ? progress.el.parentElement.removeChild(progress.el) : null;

                // Display an alert
                Components.Alert({
                    el: props.el,
                    content: "Error loading the form information...",
                    type: Components.AlertTypes.Danger
                });
            }
        );
};

// Render the edit form
ListForm.renderEditForm = (props: IListFormEditProps): IListFormEdit => {
    let mapper: { [key: string]: IField } = {};
    let rows: Array<Components.IFormRow> = [];
    let value = {};

    // Method to add a refresh alert
    let addRefreshLink = () => {
        // Ensure the link doesn't already exist
        if (props.el.querySelector(".refresh-btn")) { return; }

        // Create the refresh button
        let alert = Components.Button({
            className: "refresh-btn",
            type: Components.ButtonTypes.Danger,
            text: "Refresh Form",
            onClick: () => {
                // Clear the element and reload the form
                props.el.innerHTML = "";

                // Render a loading message
                let progress = Components.Progress({
                    el: props.el,
                    isAnimated: true,
                    isStriped: true,
                    label: "Loading the Form",
                    size: 100
                });

                // Ensure a connection to SharePoint still exists
                ContextInfo.getWeb("").execute(
                    // Success
                    () => {
                        // Clear the element and reload the form
                        props.el.innerHTML = "";

                        // Render the form
                        ListForm.renderEditForm(props);
                    },
                    // Error
                    () => {
                        // Clear the element and reload the form
                        props.el.innerHTML = "";

                        // Display a message
                        Components.Alert({
                            el: props.el,
                            content: "The connection to SharePoint is no longer valid. Please refresh the page.",
                            type: Components.AlertTypes.Danger
                        });
                    }
                );
            }
        });

        // Add the element at the top
        props.el.insertBefore(alert.el, props.el.children[0]);
    }

    // Render a loading message
    let progress = Components.Progress({
        el: props.el,
        isAnimated: true,
        isStriped: true,
        label: "Loading the Form",
        size: 100
    });

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

        // Create the control
        let fieldControl = Field({
            controlMode: props.controlMode,
            field,
            listInfo: props.info,
            value: value[fieldName],
            onError: msg => {
                // Add the refresh link
                addRefreshLink();

                // Call the event
                props.onError ? props.onError(msg) : null;
            },
        });

        // Update the mapper
        mapper[fieldName] = fieldControl;

        // Add the row
        rows.push({
            colSize: 2,
            columns,
            control: fieldControl.controlProps
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

    // Remove the progress bar
    progress.el.parentElement ? progress.el.parentElement.removeChild(progress.el) : null;

    // Render the form
    let form = Components.Form({
        el: props.el,
        onControlRendered: props.onControlRendered,
        onControlRendering: props.onControlRendering,
        rows: props.template || rows,
        value
    });

    // Method to get the values
    let getValues = () => {
        let item = {};
        let unknownUsers = {};

        // Parse the fields
        for (let fieldName in props.info.fields) {
            // Skip readonly fields
            let field = props.info.fields[fieldName];
            if (field.ReadOnlyField) { continue; }

            // Get the field value
            let fieldValue = mapper[fieldName].getValue();

            // Set the item value
            item[fieldValue.name] = fieldValue.value;
        }

        // Return the form values
        return { formValues: item, unknownUsers };
    };

    // Return the form
    return {
        el: form.el,
        getValues,
        isValid: () => {
            // TO DO
            return true;
        },
        save: () => {
            // Return a promise
            return new Promise((resolve, reject) => {
                // Get the values
                let item = getValues().formValues;

                // Method to save the item
                let saveItem = (item) => {
                    // Update the item
                    ListForm.saveItem(props.info, item).then(info => {
                        // Update the info
                        props.info = info;

                        // Resolve the promise
                        resolve(props.info.item as any);
                    }, reject);
                }

                // Execute the saving event
                let returnVal = props.onSaving ? props.onSaving(item) : null;
                if (returnVal && returnVal.then) {
                    // Wait for the promise to complete
                    returnVal.then(saveItem);
                } else {
                    // Save the item
                    saveItem(item);
                }
            });
        }
    }
};