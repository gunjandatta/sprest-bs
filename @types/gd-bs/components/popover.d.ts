/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the popover
 *         $REST.Components.Popover({
 *             el: document.querySelector("#demo"),
 *             isDismissible: true,
 *             btnProps: {
 *                 text: "Popover Demo"
 *             },
 *             options: {
 *                 container: "body",
 *                 content: "This is the popover content.",
 *                 title: "My Popover",
 *                 trigger: "hover"
 *             }
 *         });
 *     });
 * </script>
 */

/**
 * ### Popover
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the popover
 * let el = document.querySelector("#popover");
 * let popover = Components.Popover({
 *     el: el,
 *     isDismissible: true,
 *     btnProps: {
 *         text: "Popover Demo"
 *     },
 *     options: {
 *         container: "body",
 *         content: "This is the popover content.",
 *         title: "My Popover",
 *         trigger: "hover"
 *     }
 * });
 * ```
 */
export const Popover: (props: IPopoverProps, template?: string) => IPopover;

/**
 * Popover Placements
 */
 export const PopoverPlacements: IPopoverPlacements;

/**
 * Popover Types
 */
export const PopoverTypes: IPopoverTypes;

import { IBaseProps } from "../base";
import { ITippyProps } from "../libs";
import { IButtonProps } from "./button";

/**
 * Popover
 */
export interface IPopover {
    /** The element. */
    el: Element;

    /** The tippy instance. */
    tippy: any;

    /** Enables the popover. */
    enable: () => void;

    /** Hides an element’s popover. */
    hide: () => void;

    /** Toggles an element's popover. */
    toggle: () => void;

    /** Reveals an element’s popover. */
    show: () => void;
}

/**
 * Popover Properties
 */
export interface IPopoverProps extends IBaseProps<IPopover> {
    btnProps?: IButtonProps;
    isDismissible?: boolean;
    options?: ITippyProps;
    placement?: number;
    target?: Element,
    title?: string;
    type?: number;
}

/**
 * Popover Types
 */
 export type IPopoverTypes = {
    Light: number;
    LightBorder: number;
    Material: number;
    Primary: number;
    Secondary: number;
    Translucent: number;
}

/**
 * Popover Placements
 */
 export type IPopoverPlacements = {
    Auto: number;
    AutoStart: number;
    AutoEnd: number;
    Bottom: number;
    BottomStart: number;
    BottomEnd: number;
    Left: number;
    LeftStart: number;
    LeftEnd: number;
    Right: number;
    RightStart: number;
    RightEnd: number;
    Top: number;
    TopStart: number;
    TopEnd: number;
}