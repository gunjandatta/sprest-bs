import { IFormControl, IFormControlProps } from "gd-bs/src/components/form/controlTypes";
import { IForm, IFormRow } from "gd-bs/src/components/form/formTypes";
import { Helper, Types } from "gd-sprest";

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
    /** Assigns the object to the input parameter. */
    assignTo?: (obj: IListFormDisplay) => void;

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

    /** The form rendered event. */
    onFormRendered?: (form: IForm) => void;

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

    /** Method to save the form. */
    save(): PromiseLike<Types.SP.ListItem>;
}

/**
 * List Form Edit Properties
 */
export interface IListFormEditProps extends IListFormDisplayProps, Helper.IListFormEditProps {
    /** Assigns the object to the input parameter. */
    assignTo?: (obj: IListFormEdit) => void;

    /** Use this event to filter a lookup field by OData query. */
    onFilterLookupField?: (field: Types.SP.Field) => string | Types.IODataQuery;

    /** The form saving event. */
    onSaving?: (item: any) => void | PromiseLike<any>;

    /** The form validating event. */
    onValidate?: (field: Types.SP.Field, control: IFormControl) => boolean;
}