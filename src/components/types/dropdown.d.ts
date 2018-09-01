/**
 * Dropdown
 */
export const Dropdown: (props: IDropdownProps) => IDropdown | string;

/**
 * Dropdown Types
 */
export const DropdownTypes: IDropdownTypes;

/**
 * Dropdown
 */
export interface IDropdown {
    /** Destroys an element’s dropdown. */
    dispose: () => void;

    /** The element. */
    el: Element;

    /** Toggles the dropdown menu of a given navbar or tabbed navigation. */
    toggle: () => void;

    /** Updates the position of an element’s dropdown. */
    update: () => void;
}

/**
 * Dropdown Item
 */
export interface IDropdownItem {
    data?: any;
    href?: string;
    isDivider?: string;
    isHeader?: string;
    isSelected?: boolean;
    onChange?: (item?: IDropdownItem | Array<IDropdownItem>, ev?: Event) => void;
    text?: string;
    value?: any;
}

/**
 * Dropdown Properties
 */
export interface IDropdownProps {
    className?: string;
    dropLeft?: boolean;
    dropRight?: boolean;
    dropUp?: boolean;
    el?: Element | HTMLElement;
    formFl?: boolean;
    id?: string;
    isSplit?: boolean;
    items: Array<IDropdownItem>;
    label?: string;
    multi?: boolean;
    navFl?: boolean;
    onChange?: (item?: IDropdownItem | Array<IDropdownItem>, ev?: Event) => void;
    type?: number;
    value?: any;
}

/**
 * Dropdown Types
 */
export type IDropdownTypes = {
    Danger: number;
    Info: number;
    Primary: number;
    Secondary: number;
    Success: number;
    Warning: number;
}