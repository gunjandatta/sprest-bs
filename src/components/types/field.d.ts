import { Helper, SP } from "gd-sprest";
import { Components } from "gd-bs";

/**
 * Field
 */
export const Field: (props: IFieldProps) => IField;

/**
 * Field
 */
export interface IField {
    control: Components.IFormControl;
    controlProps: Components.IFormControlProps;
    getValue: () => IFieldValue;
    isValid: () => boolean;
}

/**
 * Field Properties
 */
export interface IFieldProps {
    controlMode?: number;
    errorMessage?: string;
    field: SP.Field;
    listInfo: Helper.IListFormResult;
    onError?: (msg: string) => void;
    onValidate?: (field: SP.Field, control: Components.IFormControl) => boolean;
    value?: any;
}

/**
 * Field Value
 */
export interface IFieldValue {
    name: string;
    value: any;
}

/**
 * Field Value - Users
 */
export interface IFieldValueUser extends IFieldValue {
    unknownUsers?: Array<string>;
}