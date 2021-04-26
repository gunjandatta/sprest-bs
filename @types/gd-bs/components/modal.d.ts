/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Create the button
 *         $REST.Components.Button({
 *             el: document.querySelector("#demo"),
 *             target: "#bsModalDemo",
 *             text: "Show Modal",
 *             toggle: "modal"
 *         });
 *         // Create the modal
 *         var modal = $REST.Components.Modal({
 *             el: document.querySelector("#demo"),
 *             id: "bsModalDemo",
 *             title: "Modal Demo",
 *             body: "This is the body of the modal."
 *         });
 *     });
 * </script>
 */

/**
 * ### Modal
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the button
 * Components.Button({
 *     el: document.querySelector("#modalDemo"),
 *     target: "#bsModalDemo",
 *     text: "Show Modal",
 *     toggle: "modal"
 * });
 * 
 * // Create the modal
 * let el = document.querySelector("#modalDemo");
 * let modal = Components.Modal({
 *     el: el,
 *     id: "bsModalDemo",
 *     title: "Modal Demo",
 *     body: "This is the body of the modal."
 * });
 * ```
 */
export const Modal: (props: IModalProps, template?: string) => IModal;

/**
 * Modal Types
 */
export const ModalTypes: IModalTypes;

import { IBaseProps } from "../base";

/**
 * Modal
 */
export interface IModal {
    /** Disposes the modal. */
    dispose: () => void;

    /** The element. */
    el: Element,

    /** Manually readjust the modal’s position if the height of a modal changes while it is open (i.e. in case a scrollbar appears). */
    handleUpdate: () => void;

    /** Manually hides a modal. */
    hide: () => void;

    /** Returns true if the modal is visible. */
    isVisible: boolean;

    /** Updates the title. */
    setTitle: (title: string) => void;

    /** Updates the type. */
    setType: (modalType: number) => void;

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
    backdrop?: boolean | string;

    /** Puts the focus on the modal when initialized. */
    focus?: boolean;

    /** Closes the modal when escape key is pressed. */
    keyboard?: boolean;
}

/**
 * Modal Properties
 */
export interface IModalProps<T = Element> extends IBaseProps<IModal> {
    body?: string | T;
    disableFade?: boolean;
    footer?: string | T;
    hideCloseButton?: boolean;
    id?: string;
    isCentered?: boolean;
    isStatic?: boolean;
    onClose?: (el: HTMLDivElement) => void;
    onRenderBody?: (el: HTMLDivElement) => void;
    onRenderFooter?: (el: HTMLDivElement) => void;
    options?: IModalOptions;
    title?: string;
    type?: number;
}

/**
 * Checkbox Group Types
 */
export type IModalTypes = {
    Small: number;
    Medium: number;
    Large: number;
    XLarge: number;
    Full: number;
    FullSmall: number;
    FullMedium: number;
    FullLarge: number;
    FullXLarge: number;
}