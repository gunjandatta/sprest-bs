/**
 * Dropdown
 */
export const Dropdown: (props: IDropdownProps) => Element | string;

/**
 * Dropdown Item
 */
export interface IDropdownItem {
    href?: string;
    isSelected?: boolean;
    onChange?: (item?: IDropdownItem | Array<IDropdownItem>, ev?: Event) => void;
    text?: string;
    value?: any;
}

/**
 * Dropdown Properties
 */
export interface IDropdownProps {
    items: Array<IDropdownItem>;
    onChange?: (item?: IDropdownItem | Array<IDropdownItem>, ev?: Event) => void;
    className?: string;
    el?: Element | HTMLElement;
    id?: string;
    label?: string;
    multi?: boolean;
    type?: number;
    value?: any;
}

/**
 * Dropdown Types
 */
export const DropdownTypes: {
    Danger: number;
    Info: number;
    Primary: number;
    Secondary: number;
    Success: number;
    Warning: number;
}