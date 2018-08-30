/**
 * Collapse
 */
export const Collapse: (props: ICollapseProps) => ICollapse | string;

/**
 * Collapse
 */
export interface ICollapse {
    /** Destroys an element’s collapse. */
    dispose: () => void;

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
 * Collapse Options
 */
export interface ICollapseOptions {
    parent?: string;
    toggle?: string;
}

/**
 * Collapse Properties
 */
export interface ICollapseProps {
    className?: string;
    content?: string;
    el?: Element | HTMLElement;
    id?: string;
    isMulti?: boolean;
    options?: ICollapseOptions;
}