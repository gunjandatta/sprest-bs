import { Helper, Types } from "gd-sprest";
import { Components } from "gd-bs";

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
    renderDisplayForm(props: IListFormDisplayProps);

    /**
     * Method to render the edit/new form.
     * @param props - The edit/new form properties.
     */
    renderEditForm(props: IListFormEditProps);
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
 * List Form Display Properties
 */
export interface IListFormDisplayProps extends Helper.IListFormDisplayProps {
    /** The control rendered event. */
    onControlRendered?: (control: Components.IFormControl) => void | Promise<Components.IFormControl>;

    /** The control rendering event. */
    onControlRendering?: (control: Components.IFormControlProps) => void | Promise<Components.IFormControlProps>;

    /** The error event. */
    onError?: (msg?: string) => void;

    /** The list form rows. */
    template?: Array<Components.IFormRow>;
}

/**
 * List Form Edit
 */
export interface IListFormEdit {
    /** The element to render the form to. */
    el: HTMLFormElement;

    /** Method to get the form values */
    getValues(): { [key: string]: any }

    /** Method to determine if the field is valid */
    isValid(): boolean;

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
    onValidate?: (field: Types.SP.Field, control: Components.IFormControl) => boolean;
}