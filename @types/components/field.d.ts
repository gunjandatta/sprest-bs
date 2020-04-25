import { Helper, Types } from "gd-sprest";
import { IFormControl, IFormControlProps } from "gd-bs/components/formControl";

/**
 * Field
 */
export const Field: (props: IFieldProps) => IField;

/**
 * Field
 */
export interface IField {
    control: IFormControl;
    controlProps: IFormControlProps;
    getValue: () => IFieldValue;
    isValid: () => boolean;
}

/**
 * Field Properties
 */
export interface IFieldProps {
    controlMode?: number;
    errorMessage?: string;
    field: Types.SP.Field;
    listInfo: Helper.IListFormResult;
    onError?: (msg: string) => void;
    onControlRendered?: (control: IFormControl, field: Types.SP.Field) => void | Promise<IFormControl>;
    onControlRendering?: (control: IFormControlProps, field: Types.SP.Field) => void | Promise<IFormControlProps>;
    onValidate?: (field: Types.SP.Field, control: IFormControl) => boolean;
    value?: any;
}

/**
 * Field Value
 */
export interface IFieldValue {
    name: string;
    value: any;
}