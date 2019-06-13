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
    saveForm: () => PromiseLike<Types.SP.ListItem>;
}

/**
 * List Form Dialog Properties
 */
export interface IListFormDialogProps extends Helper.IListFormProps {
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
    onControlRendered?: (control: Components.IFormControl) => void | Promise<Components.IFormControl>;

    /** The control rendering event. */
    onControlRendering?: (control: Components.IFormControlProps) => void | Promise<Components.IFormControlProps>;

    /** The form saving event. */
    onSaving?: (item: any) => void | PromiseLike<any>;

    /** The form saved event. */
    onSaved?: (item?: Types.SP.ListItem) => void;

    /** The list form rows. */
    template?: Array<Components.IFormRow>;

    /** True to display the modal by default. */
    visible?: boolean;
}