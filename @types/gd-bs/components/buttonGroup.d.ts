/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the buttonGroup
 *         $REST.Components.ButtonGroup({
 *             el: document.querySelector("#demo"),
 *             buttonType: $REST.Components.ButtonTypes.Primary,
 *             buttons: [
 *                 { text: "Left" },
 *                 { text: "Middle" },
 *                 { text: "Right" }
 *             ]
 *         });
 *     });
 * </script>
 */

/**
 * ### Button Group
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the buttonGroup
 * let el = document.querySelector("#buttonGroup");
 * let buttonGroup = Components.ButtonGroup({
 *     el: el,
 *     buttonType: $REST.Components.ButtonTypes.Primary,
 *     buttons: [
 *         { text: "Left" },
 *         { text: "Middle" },
 *         { text: "Right" }
 *     ]
 * });
 * ```
 */
export const ButtonGroup: (props: IButtonGroupProps, template?: string, btnTemplate?: string) => IButtonGroup;

import { IBaseProps } from "../base";
import { IButton, IButtonProps } from "./button";

/**
 * Button Group
 */
export interface IButtonGroup {
    /** The element. */
    el: Element;

    /** The buttons. */
    buttons: Array<IButton>;

    /** Hides the button group. */
    hide: () => void;

    /** Shows the button group. */
    show: () => void;
}

/**
 * Button Group Properties
 */
export interface IButtonGroupProps extends IBaseProps<IButtonGroup> {
    buttons?: Array<IButtonProps>;
    buttonType?: number;
    id?: string;
    isLarge?: boolean;
    isSmall?: boolean;
    isVertical?: boolean;
    label?: string;
}