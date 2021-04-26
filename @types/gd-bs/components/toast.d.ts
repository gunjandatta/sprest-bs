/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Create the toast
 *         $REST.Components.Toast({
 *             el: document.querySelector("#demo"),
 *             headerText: "Header",
 *             body: "This is the body of the toast.",
 *             mutedText: "2 seconds ago",
 *             options: { autohide: false }
 *         });
 *     });
 * </script>
 */

/**
 * ### Toast
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create a toast
 * let el = document.querySelector("#toast");
 * Components.Toast({
 *     el,
 *     headerText: "Header",
 *     body: "This is the body of the toast.",
 *     mutedText: "2 seconds ago",
 *     options: { autohide: false }
 * });
 * ```
 */
export const Toast: (props: IToastProps, template?: string) => IToast;

import { IBaseProps } from "../base";

/**
 * Toast
 */
export interface IToast {
    /** The component element. */
    el: HTMLElement;

    /** Hides the toast. */
    hide: () => void;

    /** Shows the toast. */
    show: () => void;
}

/**
 * Toast Properties
 */
export interface IToastProps<T = Element> extends IBaseProps<IToast> {
    body?: string | T;
    data?: any;
    headerImgClass?: string;
    headerImgSrc?: string;
    headerText?: string;
    mutedText?: string;
    options?: IToastOptions;
    onClick?: (el?: HTMLElement, data?: any) => void;
    onRenderBody?: (el?: HTMLElement, data?: any) => void;
    onRenderHeader?: (el?: HTMLElement, data?: any) => void;
}

/**
 * Toast Options
 */
export interface IToastOptions {
    animation?: boolean;
    autohide?: boolean;
    delay?: number;
}