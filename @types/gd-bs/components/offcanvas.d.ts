/**
 * Offcanvas
 */
export const Offcanvas: (props: IOffcanvasProps, template?: string) => IOffcanvas;

/**
 * Offcanvas Types
 */
export const OffcanvasTypes: IOffcanvasTypes;

import { IBaseProps } from "../base";

/**
 * Offcanvas
 */
export interface IOffcanvas {
    /** The element. */
    el: Element;

    /** Hides a collapsible element. */
    hide: () => void;

    /** Returns true if the modal is visible. */
    isVisible: boolean;

    /** Updates the auto close flag. */
    setAutoClose: (value: boolean) => void;

    /** Updates the type. */
    setType: (canvasType: number) => void;

    /** Shows a collapsible element. */
    show: () => void;

    /** Toggles the collapsible element on invocation. */
    toggle: () => void;
}

/**
 * Offcanvas Properties
 */
export interface IOffcanvasProps<T = Element> extends IBaseProps<IOffcanvas> {
    body?: string | T;
    data?: any;
    id?: string;
    onRenderBody?: (el?: HTMLDivElement, props?: IOffcanvasProps) => void;
    onRenderHeader?: (el?: HTMLDivElement, props?: IOffcanvasProps) => void;
    options?: IOffcanvasOptions;
    title?: string | T;
    type?: number;
}

/**
 * Offcanvas Options
 */
export interface IOffcanvasOptions {
    /** True to automatically close the offcanvas when clicking outside of it. */
    autoClose?: boolean;

    /** True to enable the backdrop when the offcanvas is visible. */
    backdrop?: boolean;

    /** Puts the focus on the offcanvas when initialized. */
    focus?: boolean;

    /** Closes the offcanvas when escape key is pressed. */
    keyboard?: boolean;

    /** True to enable scrolling of the background. */
    scroll?: boolean;

    /** True to toggle the offcanvas on creation. */
    visible?: boolean;
}

/**
 * Offcanvas Types
 */
export type IOffcanvasTypes = {
    Bottom: number;
    End: number;
    Start: number;
}