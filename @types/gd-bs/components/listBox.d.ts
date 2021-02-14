/**
 * List Box
 */
export const ListBox: (props: IListBoxProps, template?: string) => IListBox;

import { IBase } from "../base";
import { IDropdownItem } from "./dropdown";

/**
 * List Box
 */
export interface IListBox extends IBase<IListBoxProps> {
    /** The element. */
    el: Element;

    /** The selected listbox items. */
    getValue: () => Array<IDropdownItem>;

    /** Sets the listbox value. */
    setValue: (value?: string | Array<string> | Array<IDropdownItem>) => void;
}

/**
 * List Box Properties
 */
export interface IListBoxProps {
    label?: string;
    id?: string;
    isReadonly?: boolean;
    items: Array<IDropdownItem>;
    multi?: boolean;
    placeholder?: string;
    onChange?: (items: IDropdownItem | Array<IDropdownItem>, ev?: Event) => void;
    value?: string | Array<string>;
}