import { IButtonProps } from "./button";

/**
 * Popover
 */
export const Popover: (props: IPopoverProps) => IPopover;

/**
 * Popover Types
 */
export const PopoverTypes: IPopoverTypes;

/**
 * Popover
 */
export interface IPopover {
    /** Destroys an element’s popover. */
    dispose: () => void;

    /** The element. */
    el: Element;

    /** Hides an element’s popover. */
    hide: () => void;

    /** Toggles an element's popover. */
    toggle: () => void;

    /** Toggles the ability for an element’s popover to be shown or hidden. */
    toggleEnabled: () => void;

    /** Reveals an element’s popover. */
    show: () => void;

    /** Updates the position of an element’s popover. */
    update: () => void;
}

/**
 * Popover Options
 */
export interface IPopoverOptions {
    animation?: boolean;
    boundary?: string;
    container?: string;
    content?: string;
    delay?: number | object;
    fallbackPlacement?: string | Array<string>;
    html?: boolean;
    offset?: number | string;
    placement?: string | Function;
    selector?: string;
    template?: string;
    title?: string;
    trigger?: string;
}

/**
 * Popover Properties
 */
export interface IPopoverProps {
    btnProps?: IButtonProps;
    className?: string;
    el?: Element | HTMLElement;
    isDismissible?: boolean;
    options?: IPopoverOptions;
    type?: number;
}

/**
 * Popover Types
 */
export type IPopoverTypes = {
    Auto: number;
    Bottom: number;
    Left: number;
    Right: number;
    Top: number;
}