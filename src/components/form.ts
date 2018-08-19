import {
    Dropdown, IDropdownItem,
    InputGroup, InputGroupTypes
} from ".";

/**
 * Form
 */
export interface IForm {
    form: HTMLFormElement,
    getValues: () => { [key: string]: any };
}

/**
 * Form Control
 */
export interface IFormControl {
    description?: string;
    isSmall?: boolean;
    isLarge?: boolean;
    label?: string;
    name?: string;
    type?: number;
}

/**
 * Form Control - Checkbox
 */
export interface IFormControlCheckbox extends IFormControl { }

/**
 * Form Control - Dropdown
 */
export interface IFormControlDropdown extends IFormControl {
    items?: Array<IDropdownItem>;
    onChange?: (item: IDropdownItem) => void;
    placeholder?: string;
    type?: number;
}

/**
 * Form Control - TextField
 */
export interface IFormControlTextField extends IFormControl {
    onChange?: (value: string) => void;
    placeholder?: string;
}

/**
 * Form Control Type
 */
export enum FormControlTypes {
    CheckBox = 0,
    Email = 1,
    Dropdown = 2,
    File = 3,
    MultiDropdown = 4,
    Password = 5,
    Range = 6,
    Readonly = 7,
    TextArea = 8,
    TextField = 9
}

/**
 * Form Properties
 */
export interface IFormProps {
    el: Element | HTMLElement,
    rows: Array<{
        isAutoSized?: boolean;
        isCentered?: boolean;
        control?: IFormControl;
        columns?: Array<{
            control: IFormControl;
            size?: number;
        }>
    }>;
    value?: any;
}

/**
 * Form
 * @property props - The form properties.
 */
export const Form = (props: IFormProps): IForm | string => {
    // Create the form element
    let elForm = document.createElement("form");

    // Method to render the control
    let renderControl = (el: HTMLElement, control: IFormControl) => {
        let html = [];
        let value = props.value || {};

        // Return the html based on the type
        switch (control.type) {
            // Checkbox
            case FormControlTypes.CheckBox:
                break;
            // Dropdown
            case FormControlTypes.Dropdown:
                Dropdown({
                    el,
                    items: (control as IFormControlDropdown).items,
                    label: (control as IFormControlDropdown).label,
                    onChange: (control as IFormControlDropdown).onChange,
                    value: value[control.name]
                });
                break;
            // Email
            case FormControlTypes.Email:
                // Add the input
                InputGroup({
                    el,
                    label: control.label,
                    onChange: (control as IFormControlTextField).onChange,
                    placeholder: (control as IFormControlTextField).placeholder,
                    type: InputGroupTypes.Email,
                    value: value[control.name]
                });
                break;
            // File
            case FormControlTypes.File:
                // Add the input
                InputGroup({
                    el,
                    label: control.label,
                    onChange: (control as IFormControlTextField).onChange,
                    placeholder: (control as IFormControlTextField).placeholder,
                    type: InputGroupTypes.File,
                    value: value[control.name]
                });
                break;
            // Multi-Dropdown
            case FormControlTypes.MultiDropdown:
                Dropdown({
                    el,
                    items: (control as IFormControlDropdown).items,
                    label: (control as IFormControlDropdown).label,
                    multi: true,
                    onChange: (control as IFormControlDropdown).onChange,
                    value: value[control.name]
                });
                break;
            // Password
            case FormControlTypes.Password:
                // Add the input
                InputGroup({
                    el,
                    label: control.label,
                    onChange: (control as IFormControlTextField).onChange,
                    placeholder: (control as IFormControlTextField).placeholder,
                    type: InputGroupTypes.Password,
                    value: value[control.name]
                });
                break;
            // Range
            case FormControlTypes.Range:
                break;
            // Readonly
            case FormControlTypes.Readonly:
                break;
            // Text Area
            case FormControlTypes.TextArea:
                // Add the input
                InputGroup({
                    el,
                    label: control.label,
                    onChange: (control as IFormControlTextField).onChange,
                    placeholder: (control as IFormControlTextField).placeholder,
                    type: InputGroupTypes.TextArea,
                    value: value[control.name]
                });
                break;
            // Text Field
            case FormControlTypes.TextField:
                // Add the input
                InputGroup({
                    el,
                    label: control.label,
                    onChange: (control as IFormControlTextField).onChange,
                    placeholder: (control as IFormControlTextField).placeholder,
                    type: InputGroupTypes.TextField,
                    value: value[control.name]
                });
                break;
        }
    }

    // Method to render the form
    let renderForm = () => {
        // Parse the rows
        let rows = props.rows || [];
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];

            // See if columns exist
            if (row.columns) {
                let elRow = document.createElement("div");

                // Set the row class names
                elRow.classList.add("form-row");
                row.isCentered ? elRow.classList.add("align-items-center") : null;

                // Parse the columns
                let columns = row.columns || [];
                for (let j = 0; j < columns.length; j++) {
                    let column = columns[j];
                    let elCol = document.createElement("div");

                    // Set the row class name based on the properties
                    elCol.classList.add("form-group");
                    if (row.isCentered) {
                        // Add the class name
                        elCol.classList.add("col-auto");
                    } else {
                        // Add the class name based on the size
                        elCol.classList.add(column.size > 0 && column.size < 13 ? "col-" + column.size : "col");
                    }

                    // Render the control
                    renderControl(elCol, column.control);

                    // Add the column to the row
                    elRow.appendChild(elCol);
                }

                // Add the row to the form
                elForm.appendChild(elRow);
            }
            // Else, see if a control is defined
            else if (row.control) {
                let elRow = document.createElement("div");
                elRow.classList.add("form-group");

                // Render the control
                renderControl(elRow, row.control);

                // Add the row to the form
                elForm.appendChild(elRow);
            }
        }
    }

    // Render the form
    renderForm();

    // See if the element exists
    if (props.el) {
        // Set the class name
        props.el.classList.add("bs");

        // Append the form
        props.el.appendChild(elForm);

        // Return the form
        return {
            form: elForm,
            getValues: () => {
                let values = {};

                // Return the values
                return values;
            }
        };
    } else {
        // Return the html
        return elForm.outerHTML;
    }
}