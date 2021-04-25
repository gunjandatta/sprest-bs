/**
 * <div id="demo"></div>
 * <script src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the button
 *         $REST.Components.Button({
 *             el: document.querySelector("#demo"),
 *             text: "Button"
 *         });
 *     });
 * </script>
 */

/**
 * ### Button
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the button
 * let el = document.querySelector("#btn");
 * let btn = Components.Button({
 *     el: el,
 *     text: "Button",
 *     onClick: (ev) => {
 *         alert("The button was clicked.");
 *     }
 * });
 * ```
 */
export const Button: (props: IButtonProps, template?: string) => IButton;

/**
 * Button Types
 */
export const ButtonTypes: IButtonTypes;

import { IBaseProps } from "../base";
import { IBadgeProps } from "./badge";
import { ISpinnerProps } from "./spinner";

/**
 * Button
 */
export interface IButton {
    /** The element. */
    el: HTMLAnchorElement | HTMLButtonElement;

    /** Disables the button. */
    disable: () => void;

    /** Enables the button. */
    enable: () => void;

    /** Hides the button. */
    hide: () => void;

    /** Updates the button text. */
    setText: (btnText?: string) => void;

    /** Updates the button type. */
    setType: (btnType: number) => void;

    /** Shows the button. */
    show: () => void;

    /** Toggles push state. Gives the button the appearance that it has been activated. */
    toggle: () => void;
}

/**
 * Button Properties
 */
export interface IButtonProps extends IBaseProps<IButton> {
    badge?: IBadgeProps;
    controls?: string | Array<string>;
    data?: any;
    dismiss?: string;
    href?: string;
    iconSize?: number;
    iconType?: number;
    id?: string;
    isBlock?: boolean;
    isDisabled?: boolean;
    isExpanded?: boolean;
    isLarge?: boolean;
    isLink?: boolean;
    isSmall?: boolean;
    onClick?: (button?: IButtonProps, ev?: Event) => void;
    spinnerProps?: ISpinnerProps;
    tabIndex?: number;
    target?: string;
    text?: string;
    title?: string;
    toggle?: string;
    toggleObj?: any;
    trigger?: string;
    type?: number;
}

/**
 * Button Types
 */
export type IButtonTypes = {
    Danger: number;
    Dark: number;
    Info: number;
    Light: number;
    Link: number;
    Primary: number;
    Secondary: number;
    Success: number;
    Warning: number;
    OutlineDanger: number;
    OutlineDark: number;
    OutlineInfo: number;
    OutlineLight: number;
    OutlineLink: number;
    OutlinePrimary: number;
    OutlineSecondary: number;
    OutlineSuccess: number;
    OutlineWarning: number;
}