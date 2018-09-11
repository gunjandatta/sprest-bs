import { Components } from "gd-bs";
import { Helper, Types } from "gd-sprest";

/**
 * List Form Dialog
 */
export const ListFormDialog: (props: IListFormDialogProps) => IListFormDialog;

/**
 * List Form Dialog
 */
export interface IListFormDialog extends Components.IModal {
    /** Method to save the form. */
    saveForm: () => PromiseLike<void>;
}

/**
 * List Form Dialog Properties
 */
export interface IListFormDialogProps extends Helper.Types.IListFormProps {
    /** The form actions. */
    actions?: Components.IToolbarProps;

    /** The form control mode. */
    controlMode?: number;

    /** The element to render the field to. */
    el: Element | HTMLElement;

    /** The item. */
    item?: any;

    /** The modal dialog properties. */
    modalProps?: Components.IModalProps;

    /** The on save event. */
    onSave?: (item?: Types.SP.IListItemResult) => void;

    /** True to display the modal by default. */
    visible?: boolean;
}