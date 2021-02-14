/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Create the toolbar
 *         $REST.Components.Toolbar({
 *         el: document.querySelector("#demo"),
 *         spacing: 3,
 *         items: [
 *             { buttons: [{ text: "Button 1" }] },
 *             { buttons: [{ text: "Button 2" }] },
 *             { buttons: [{ text: "Button 3" }] },
 *             { buttons: [{ text: "Button 4" }] },
 *             { buttons: [{ text: "Button 5" }] }
 *         ]
 *         });
 *     });
 * </script>
 */

/**
 * ### Toolbar
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create a toolbar
 * let el = document.querySelector("#toolbar");
 * Components.Toolbar({
 *     el,
 *     spacing: 3,
 *     items: [
 *         { buttons: [{ text: "Button 1" }] },
 *         { buttons: [{ text: "Button 2" }] },
 *         { buttons: [{ text: "Button 3" }] },
 *         { buttons: [{ text: "Button 4" }] },
 *         { buttons: [{ text: "Button 5" }] }
 *     ]
 * });
 * ```
 */
export const Toolbar: (props: IToolbarProps, template?: string) => IToolbar;

/**
 * Toolbar
 */
export interface IToolbar {
    /** The element. */
    el: Element;

    /** Hides the toolbar. */
    hide: () => void;

    /** Shows the toolbar. */
    show: () => void;
}

import { IBaseProps } from "../base";
import { IButtonProps } from "./button";
import { IInputGroupProps } from "./inputGroup";

/**
 * Toolbar Item
 */
export interface IToolbarItem {
    buttons?: Array<IButtonProps>;
    buttonType?: number;
    inputGroup?: IInputGroupProps;
}

/**
 * Toolbar Properties
 */
export interface IToolbarProps extends IBaseProps<IToolbar> {
    items?: Array<IToolbarItem>;
    spacing?: number;
}