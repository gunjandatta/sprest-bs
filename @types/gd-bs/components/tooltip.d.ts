/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the tooltip
 *         $REST.Components.Tooltip({
 *             el: document.querySelector("#demo"),
 *             text: "Tooltip",
 *             options: {
 *                 html: true,
 *                 title: "My Tooltip",
 *             }
 *         });
 *     });
 * </script>
 */

/**
 * ### Tooltip
 * 
 * ```ts
import { Components } from "gd-sprest-bs";

// Create the tooltip
let el = document.querySelector("#tooltip");
let tooltip = Components.Tooltip({
    el: el,
    text: "Tooltip Demo"
    options: {
        html: true,
        title: "My Tooltip",
    }
});
```
 */
export const Tooltip: (props: ITooltipProps, template?: string) => ITooltip;

/**
 * Tooltip Types
 */
export const TooltipTypes: ITooltipTypes;

import { IBaseProps } from "../base";
import { ITippyProps } from "../libs";
import { IButtonProps, IButton } from "./button";

/**
 * Tooltip
 */
export interface ITooltip {
    /** Reference to the button. */
    button: IButton;

    /** The element. */
    el: HTMLButtonElement;

    /** Gives an element’s tooltip the ability to be shown. */
    enable: () => void;

    /** Hides an element’s tooltip. */
    hide: () => void;

    /** The tippy instance. */
    tippy: any;

    /** Toggles an element's tooltip. */
    toggle: () => void;

    /** Reveals an element’s tooltip. */
    show: () => void;
}

/**
 * Tooltip Properties
 */
export interface ITooltipProps extends IBaseProps<ITooltip> {
    btnProps?: IButtonProps;
    options?: ITippyProps;
    type?: number;
}

/**
 * Tooltip Types
 */
export type ITooltipTypes = {
    Auto: number;
    Bottom: number;
    Left: number;
    Right: number;
    Top: number;
}