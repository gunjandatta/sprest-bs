/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Create the spinner
 *         $REST.Components.Spinner({
 *             el: document.querySelector("#demo"),
 *             text: "Loading...",
 *             type: $REST.Components.SpinnerTypes.Danger
 *         });
 *     });
 * </script>
 */

/**
 * ### Spinner
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create a spinner
 * let el = document.querySelector("#spinner");
 * Components.Spinner({
 *     el,
 *     text: "Loading...",
 *     type: Components.SpinnerTypes.Danger
 * });
 * ```
 */
export const Spinner: (props: ISpinnerProps, template?: string) => ISpinner;

/**
 * Spinner Types
 */
export const SpinnerTypes: ISpinnerTypes;

import { IBaseProps } from "../base";

/**
 * Spinner
 */
export interface ISpinner {
    /** The element. */
    el: Element;

    /** Hides the spinner. */
    hide: () => void;

    /** Shows the spinner. */
    show: () => void;
}

/**
 * Spinner Properties
 */
export interface ISpinnerProps extends IBaseProps<ISpinner> {
    isGrowing?: boolean;
    isSmall?: boolean;
    text?: string;
    type?: number;
}

/**
 * Spinner Types
 */
export type ISpinnerTypes = {
    Danger: number;
    Dark: number;
    Info: number;
    Light: number;
    Primary: number;
    Secondary: number;
    Success: number;
    Warning: number;
}