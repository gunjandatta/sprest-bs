import { Components } from "gd-bs";
import { Helper } from "gd-sprest";

/**
 * Field
 */
export interface IField {
    control: Components.IFormControl;
    fieldInfo: Helper.Types.IListFormFieldInfo;
    value: any;
}

/**
 * Field Information
 */
export interface IFieldInfo {
}

/**
 * Field Properties
 */
export interface IFieldProps {
    /** Class name */
    className?: string;

    /** The control mode of the form. */
    controlMode?: number;

    /** Disabled */
    disabled?: boolean;

    /** The element to render the field to. */
    el: Element | HTMLElement;

    /** The field information */
    fieldInfo: Helper.Types.IListFormFieldInfo;

    /** The change event */
    onChange?: (value: any) => void;

    /** The field value */
    value?: any;
}
