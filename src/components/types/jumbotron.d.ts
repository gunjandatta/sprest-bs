/**
 * Jumbotron
 */
export const Jumbotron: (props: IJumbotronProps) => IJumbotron;

/**
 * Jumbotron
 */
export interface IJumbotron {
    /** The element. */
    el: Element;
}

/**
 * Jumbotron Properties
 */
export interface IJumbotronProps {
    className?: string;
    content?: string;
    el?: Element | HTMLElement;
    isFluid?: boolean;
    lead?: string;
    onRenderContent?: (el?: HTMLElement) => void;
    title?: string;
}