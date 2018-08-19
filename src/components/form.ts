import {
    Dropdown,
    InputGroup, InputGroupTypes
} from ".";
/**
 * Form Control
 */
export interface IFormControl {
    description?: string;
    isSmall?: boolean;
    isLarge?: boolean;
    label?: string;
    name?: string;
    placeholder?: string;
    type?: number;
}

/**
 * Form Control Type
 */
export enum FormControlTypes {
    CheckBox = 0,
    Email = 1,
    File = 2,
    MultiSelect = 3,
    Password = 4,
    Range = 5,
    Readonly = 6,
    TextArea = 7,
    TextField = 8,
    Select = 9,
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
export const Form = (props: IFormProps) => {
    let _form = null;

    // Set the starting tag
    let html = ["<form>"];

    // Method to render the control
    let renderControl = (control: IFormControl): string => {
        let html = [];
        let value = props.value || {};

        // Return the html based on the type
        switch (control.type) {
            case FormControlTypes.CheckBox:
                break;
            case FormControlTypes.Email:
                // Add the input
                html.push(InputGroup({
                    label: control.label,
                    placeholder: control.placeholder,
                    type: InputGroupTypes.Email,
                    value: value[control.name]
                }));
                break;
            case FormControlTypes.File:
                // Add the input
                html.push(InputGroup({
                    label: control.label,
                    placeholder: control.placeholder,
                    type: InputGroupTypes.File,
                    value: value[control.name]
                }));
                break;
            case FormControlTypes.MultiSelect:
                break;
            case FormControlTypes.Password:
                // Add the input
                html.push(InputGroup({
                    label: control.label,
                    placeholder: control.placeholder,
                    type: InputGroupTypes.Password,
                    value: value[control.name]
                }));
                break;
            case FormControlTypes.Range:
                break;
            case FormControlTypes.Readonly:
                break;
            case FormControlTypes.Select:
                break;
            case FormControlTypes.TextArea:
                // Add the input
                html.push(InputGroup({
                    label: control.label,
                    placeholder: control.placeholder,
                    type: InputGroupTypes.TextArea,
                    value: value[control.name]
                }));
                break;
            case FormControlTypes.TextField:
                // Add the input
                html.push(InputGroup({
                    label: control.label,
                    placeholder: control.placeholder,
                    type: InputGroupTypes.TextField,
                    value: value[control.name]
                }));
                break;
        }

        // Return the html
        return html.join('\n');
    }

    // Parse the rows
    let rows = props.rows || [];
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];

        // See if columns exist
        if (row.columns) {
            // Set the row class names
            let rowClassNames = ["form-row"];
            row.isCentered ? rowClassNames.push("align-items-center") : null;

            // Add the row starting tag
            html.push('<div class="' + rowClassNames.join(' ') + '">');

            // Parse the columns
            let columns = row.columns || [];
            for (let j = 0; j < columns.length; j++) {
                let column = columns[j];

                // Set the row class name based on the properties
                let colClassNames = ["form-group"];
                if (row.isCentered) {
                    // Add the class name
                    colClassNames.push("col-auto");
                } else {
                    // Add the class name based on the size
                    colClassNames.push(column.size > 0 && column.size < 13 ? "col-" + column.size : "col");
                }

                // Add the column starting tag
                html.push('<div class="' + colClassNames.join(' ') + '">');

                // Render the control
                html.push(renderControl(column.control));

                // Add the column ending tag
                html.push('</div>');
            }

            // Add the row ending tag
            html.push('</div>');
        }
        // Else, see if a control is defined
        else if (row.control) {
            // Render the control
            html.push([
                "<div class='form-group'>",
                renderControl(row.control),
                "</div>"
            ].join('\n'));
        }
    }

    // Set the ending tag
    html.push("</form>");

    // See if the element exists
    if (props.el) {
        // Set the class name
        props.el.classList.add("bs");

        // Set the html
        props.el.innerHTML = html.join('\n');
    } else {
        // Return the html
        return html;
    }
}