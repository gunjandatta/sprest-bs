import { IDropdownItem } from "./dropdown";

/**
 * Form
 */
export interface IForm {
    form: HTMLFormElement,
    getValues: () => { [key: string]: any };
}

/**
 * Form
 */
export const Form: (props: IFormProps) => IForm;

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