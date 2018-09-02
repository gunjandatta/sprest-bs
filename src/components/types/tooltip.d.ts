import { IButtonProps } from "./button";

/**
 * Tooltip
 */
export const Tooltip: (props: ITooltipProps) => ITooltip;

/**
 * Tooltip Types
 */
export const TooltipTypes: ITooltipTypes;

/**
 * Tooltip
 */
export interface ITooltip {
    /** Destroys an element’s tooltip. */
    dispose: () => void;

    /** The element. */
    el: Element;

    /** Gives an element’s tooltip the ability to be shown. */
    enable: () => void;

    /** Hides an element’s tooltip. */
    hide: () => void;

    /** Toggles an element's tooltip. */
    toggle: () => void;

    /** Toggles the ability for an element’s tooltip to be shown or hidden. */
    toggleEnabled: () => void;

    /** Reveals an element’s tooltip. */
    show: () => void;

    /** Updates the position of an element’s tooltip. */
    update: () => void;
}

/**
 * Tooltip Options
 */
export interface ITooltipOptions {
    animation?: boolean;
    boundary?: string;
    container?: string;
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
 * Tooltip Properties
 */
export interface ITooltipProps {
    btnProps?: IButtonProps;
    className?: string;
    el?: Element | HTMLElement;
    options?: ITooltipOptions;
    type?: number;
}

/**
 * Tooltip Types
 */
export type ITooltipTypes = {
    Auto: number;
    Bottom: number;
    Left: number;
    Right: number;
    Top: number;
}