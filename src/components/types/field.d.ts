import { Helper } from "gd-sprest";
import { Components } from "gd-bs";

/**
 * Field
 */
export const Field: (listInfo: Helper.Types.IListFormResult, fieldInfo: Helper.Types.IListFormFieldInfo) => IField;

/**
 * Field
 */
export interface IField {
    control: Components.IFormControl;
    controlProps: Components.IFormControlProps;
    getValue: () => IFieldValue;
    save: () => PromiseLike<void>;
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