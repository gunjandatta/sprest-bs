import { Helper, Types } from "gd-sprest";
import { IFormControl, IFormControlProps, IFormControlValidationResult } from "gd-bs/src/components/form/controlTypes";

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
    assignTo?: (obj: IField) => void;
    controlMode?: number;
    errorMessage?: string;
    field: Types.SP.Field;
    listInfo: Helper.IListFormResult;
    lookupFilter?: string;
    onError?: (msg: string) => void;
    onControlRendered?: (control: IFormControl, field: Types.SP.Field) => void | Promise<IFormControl>;
    onControlRendering?: (control: IFormControlProps, field: Types.SP.Field) => void | Promise<IFormControlProps>;
    onValidate?: (field: Types.SP.Field, control: IFormControl, value: IFormControlValidationResult) => boolean | IFormControlValidationResult;
    value?: any;
}

/**
 * Field Value
 */
export interface IFieldValue {
    name: string;
    value: any;
}