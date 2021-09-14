import { IFormControl, IFormControlProps } from "gd-bs/src/components/form/controlTypes";
import { IFormRow } from "gd-bs/src/components/form/formTypes";
import { IModal, IModalProps } from "gd-bs/src/components/modal/types";
import { IToolbarProps } from "gd-bs/src/components/toolbar/types";
import { Helper, Types } from "gd-sprest";

/**
 * List Form Dialog
 */
export const ListFormDialog: (props: IListFormDialogProps) => IListFormDialog;

/**
 * List Form Dialog
 */
export interface IListFormDialog extends IModal {
    /** Method to save the form. */
    saveForm: () => PromiseLike<Types.SP.ListItem>;
}

/**
 * List Form Dialog Properties
 */
export interface IListFormDialogProps extends Helper.IListFormProps {
    /** The form actions. */
    actions?: IToolbarProps;

    /** Assigns the object to the input parameter. */
    assignTo?: (obj: IListFormDialog) => void;

    /** The form control mode. */
    controlMode?: number;

    /** The element to render the field to. */
    el: Element | HTMLElement;

    /** The item. */
    item?: any;

    /** The modal dialog properties. */
    modalProps?: IModalProps;

    /** The control rendered event. */
    onControlRendered?: (control: IFormControl) => void | Promise<IFormControl>;

    /** The control rendering event. */
    onControlRendering?: (control: IFormControlProps) => void | Promise<IFormControlProps>;

    /** The form saving event. */
    onSaving?: (item: any) => void | PromiseLike<any>;

    /** The form saved event. */
    onSaved?: (item?: Types.SP.ListItem) => void;

    /** The list form rows. */
    template?: Array<IFormRow>;

    /** True to display the modal by default. */
    visible?: boolean;
}