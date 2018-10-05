import { Helper, Types } from "gd-sprest";
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
}

/**
 * Field Properties
 */
export interface IFieldProps {
    controlMode?: number;
    field: Types.SP.IFieldResult;
    listInfo: Helper.Types.IListFormResult;
    onError?: (msg: string) => void;
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