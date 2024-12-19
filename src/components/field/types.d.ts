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
    setControl: (control: IFormControl) => void;
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
    lookupFilter?: string | Types.IODataQuery;
    onError?: (msg: string) => void;
    onControlRendered?: (control: IFormControl, field: Types.SP.Field) => void | Promise<IFormControl>;
    onControlRendering?: (control: IFormControlProps, field: Types.SP.Field) => void | Promise<IFormControlProps>;
    onValidate?: (field: Types.SP.Field, control: IFormControl, value: IFormControlValidationResult) => boolean | IFormControlValidationResult;
    value?: any;
}

/**
 * Field Image Information
 */
export interface IFieldImageInfo extends Helper.IListFormAttachmentInfo {
    fieldId: string;
    fieldName: string;
}

/**
 * Field Image Value
 */
export interface IFieldImageValue {
    fieldId: string;
    fieldName: string;
    fileName: string;
    id: string;
    nativeFile?: any;
    serverRelativeUrl: string;
    serverUrl: string;
    type: string;
}

/**
 * Field Value
 */
export interface IFieldValue {
    name: string;
    value: any;
}

/**
 * Form Control Lookup Properties
 */
export interface IFormControlLookupProps extends IFormControlProps {
    lookupFilter?: string | Types.IODataQuery;
    onControlRendering?: (control: IFieldLookupProps, field: Types.SP.Field) => void | Promise<IFieldLookupProps>;
}

/**
 * Form Control Url Properties
 */
export interface IFormControlUrlProps extends IFormControlProps {
    showDescription?: boolean;
    onControlRendering?: (control: IFieldUrlProps, field: Types.SP.Field) => void | Promise<IFieldUrlProps>;
}