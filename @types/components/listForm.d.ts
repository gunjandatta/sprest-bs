import { Helper, Types } from "gd-sprest";
import { IFormRow } from "gd-bs/@types/components/form";
import { IFormControl, IFormControlProps } from "gd-bs/@types/components/formControl";

/**
 * List Form
 */
export const ListForm: IListForm;

/**
 * List Form
 */
export interface IListForm extends Helper.IListForm {
    /**
     * Method to render the display form template.
     * @param props - The display form properties.
     */
    renderDisplayForm(props: IListFormDisplayProps): IListFormDisplay;

    /**
     * Method to render the edit/new form.
     * @param props - The edit/new form properties.
     */
    renderEditForm(props: IListFormEditProps): IListFormEdit;
}

/**
 * List Form Attachments Properties
 */
export interface IListFormAttachmentsProps {
    /** The element to render the form to. */
    el: Element;

    /** The list form information. */
    info: Helper.IListFormResult;

    /** The item attachment saved event. */
    onSave?: (info: Helper.IListFormResult) => void;
}

/**
 * List Form Display
 */
export interface IListFormDisplay {
    /** The form element. */
    el: HTMLFormElement;
}

/**
 * List Form Display Properties
 */
export interface IListFormDisplayProps extends Helper.IListFormDisplayProps {
    /** The form component class name. */
    className?: string;

    /** The form component group class name. */
    groupClassName?: string;

    /** The form component row class name. */
    rowClassName?: string;

    /** The control rendered event. */
    onControlRendered?: (control: IFormControl, field: Types.SP.Field) => void | Promise<IFormControl>;

    /** The control rendering event. */
    onControlRendering?: (control: IFormControlProps, field: Types.SP.Field) => void | Promise<IFormControlProps>;

    /** The error event. */
    onError?: (msg?: string) => void;

    /** The list form rows. */
    template?: Array<IFormRow>;
}

/**
 * List Form Edit
 */
export interface IListFormEdit {
    /** Appends controls to the form */
    appendControls(controls: Array<IFormControlProps>);

    /** Appends rows to the form */
    appendRows(rows: Array<IFormRow>);

    /** The form element. */
    el: HTMLFormElement;

    /** Method to get a control by field name */
    getControl(fieldName: string): IFormControl;

    /** Method to get the form values */
    getValues(): { [key: string]: any }

    /** Method to determine if the field is valid */
    isValid(): boolean;

    /** The control rendered event. */
    onControlRendered?: (control: IFormControl) => void | Promise<IFormControl>;

    /** The control rendering event. */
    onControlRendering?: (control: IFormControlProps) => void | Promise<IFormControlProps>;

    /** Method to save the form. */
    save(): PromiseLike<Types.SP.ListItem>;
}

/**
 * List Form Edit Properties
 */
export interface IListFormEditProps extends IListFormDisplayProps, Helper.IListFormEditProps {
    /** The form saving event. */
    onSaving?: (item: any) => void | PromiseLike<any>;

    /** The form validating event. */
    onValidate?: (field: Types.SP.Field, control: IFormControl) => boolean;
}