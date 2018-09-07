import { Types } from "gd-sprest";
import { Components } from "gd-bs";

/**
 * List Form
 */
export const ListForm: IListForm;

/**
 * List Form
 */
export interface IListForm extends Types.Helper.IListForm {
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
    info: Types.Helper.IListFormResult;

    /** The item attachment saved event. */
    onSave?: (info: Types.Helper.IListFormResult) => void;
}

/**
 * List Form Display Properties
 */
export interface IListFormDisplayProps {
    /** The element to render the form to. */
    el: Element;

    /** The list form information. */
    info: Types.Helper.IListFormResult;

    /** The list form rows. */
    template?: Array<Components.IFormRow>;
}

/**
 * List Form Edit
 */
export interface IListFormEdit {
    /**
     * Method to get the form values
     */
    getValues(): PromiseLike<any>;

    /**
     * Method to determine if the field is valid
     */
    isValid(): boolean;
}

/**
 * List Form Edit Properties
 */
export interface IListFormEditProps extends IListFormDisplayProps {
    /** The form mode (New/Edit) */
    controlMode?: number;
}