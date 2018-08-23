/**
 * Modal
 */
export const Modal: (props: IModalProps) => IModal | string;

/**
 * Modal
 */
export interface IModal {
    /** Destroys an element’s modal. */
    dispose: () => void;

    /** The element. */
    el: Element,

    /** Manually readjust the modal’s position if the height of a modal changes while it is open (i.e. in case a scrollbar appears). */
    handleUpdate: () => void;

    /** Manually hides a modal. */
    hide: () => void;

    /** Activates your content as a modal. */
    modal: (options: IModalOptions) => void;

    /** Manually opens a modal. */
    show: () => void;

    /** Manually toggles a modal. */
    toggle: () => void;
}

/**
 * Modal Options
 */
export interface IModalOptions {
    /** Includes a modal-backdrop element. Alternatively, specify static for a backdrop which doesn't close the modal on click. */
    backdrop: boolean | string;

    /** Puts the focus on the modal when initialized. */
    focus: boolean;

    /** Closes the modal when escape key is pressed. */
    keyboard: boolean;

    /** Shows the modal when initialized. */
    show: boolean;
}

/**
 * Modal Properties
 */
export interface IModalProps {
    className?: string;
    el?: Element | HTMLElement;
    disableFade?: boolean;
    hideCloseButton?: boolean;
    id?: string;
    isCentered?: boolean;
    isLarge?: boolean;
    isSmall?: boolean;
    onRenderBody?: (el: HTMLDivElement) => void;
    onRenderFooter?: (el: HTMLDivElement) => void;
    title?: string;
}