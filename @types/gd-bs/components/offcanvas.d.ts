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
    backdrop?: boolean;
    keyboard?: boolean;
    scroll?: boolean;
}

/**
 * Offcanvas Types
 */
export type IOffcanvasTypes = {
    Bottom: number;
    Left: number;
    Right: number;
}