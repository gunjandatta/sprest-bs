import { Types } from "gd-sprest";
import { IField } from ".";
import { IListFormAttachmentInfo } from "gd-sprest/build/helper/types";

/**
 * List Form
 */
export interface IListForm extends Types.Helper.IListForm {
    /**
     * Method to render the attachments view.
     * @param props - The attachment information.
     */
    renderAttachmentsView(props: IListFormAttachmentsProps);

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

    /**
     * Method to render the form template.
     * @param props - The form properties.
     */
    renderFormTemplate(props: IListFormDisplayProps);
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
 * List Form Display
 */
export interface IListFormDisplay {
    /**
     * Method to get the fields
     */
    getFields(): Array<HTMLDivElement>;
}

/**
 * List Form Display Properties
 */
export interface IListFormDisplayProps {
    /** The element to render the form to. */
    el: Element;

    /** The fields to exclude from the form. */
    excludeFields?: Array<string>;

    /** The fields to include in the form. */
    includeFields?: Array<string>;

    /** The list form information. */
    info: Types.Helper.IListFormResult;
}

/**
 * List Form Edit
 */
export interface IListFormEdit {
    /**
     * Method to get the fields
     */
    getFields(): Array<IField>;

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