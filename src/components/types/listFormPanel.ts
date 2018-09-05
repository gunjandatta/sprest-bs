import { Helper } from "gd-sprest";
import { IListFormDisplay, IListFormEdit } from ".";

/**
 * List Form Panel
 */
export interface IListFormPanel {
    /**
     * Returns the form.
     */
    getForm(): IListFormDisplay | IListFormEdit;

    /**
     * Displays the list form
     * @param controlMode - The form type.
     */
    show(controlMode?: number);
}

/**
 * List Form Panel Properties
 */
export interface IListFormPanelProps extends Helper.Types.IListFormProps {
    /** Class name */
    className?: string;

    /** The form control mode. */
    controlMode?: number;

    /** The element to render the field to. */
    el: Element | HTMLElement;

    /** The item. */
    item?: any;

    /** True to make the panel blocking */
    panelIsBlocking?: boolean;

    /** the panel title. */
    panelTitle?: string;

    /** The panel type. */
    panelType?: number;
}