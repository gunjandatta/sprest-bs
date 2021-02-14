/**
 * Offcanvas
 */
export const Offcanvas: (props: IOffcanvasProps, template?: string) => IOffcanvas;

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
    enableBackdrop?: boolean;
    enableScroll?: boolean;
    id?: string;
    onRenderBody?: (el?: HTMLDivElement, props?: IOffcanvasProps) => void;
    onRenderHeader?: (el?: HTMLDivElement, props?: IOffcanvasProps) => void;
    title?: string | T;
}

/**
 * Offcanvas Types
 */
export type IOffcanvasTypes = {
    Bottom: number;
    Left: number;
    Right: number;
}