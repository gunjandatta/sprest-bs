import { Components } from "gd-bs";
import { Helper, Types } from "gd-sprest";
import { IFormControl, IFormControlProps } from "gd-bs/src/components/types";

/**
 * List Form Dialog
 */
export const ListFormDialog: (props: IListFormDialogProps) => IListFormDialog;

/**
 * List Form Dialog
 */
export interface IListFormDialog extends Components.IModal {
    /** Method to save the form. */
    saveForm: () => PromiseLike<Types.SP.IListItemResult>;
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

    /** The control rendered event. */
    onControlRendered?: (control: IFormControl) => void | Promise<IFormControl>;

    /** The control rendering event. */
    onControlRendering?: (control: IFormControlProps) => void | Promise<IFormControlProps>;

    /** The form saving event. */
    onSaving?: (item: any) => void;

    /** The form saved event. */
    onSaved?: (item?: Types.SP.IListItemResult) => void;

    /** The list form rows. */
    template?: Array<Components.IFormRow>;

    /** True to display the modal by default. */
    visible?: boolean;
}