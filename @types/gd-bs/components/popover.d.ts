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
 * Popover Types
 */
export const PopoverTypes: IPopoverTypes;

import { IBaseProps } from "../base";
import { IButtonProps } from "./button";

/**
 * Popover
 */
export interface IPopover {
    /** The element. */
    el: Element;

    /** The popper instance. */
    popper: any;

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
 * Popover Options
 */
export interface IPopoverOptions {
    animation?: boolean;
    boundary?: string | Element;
    container?: Element;
    content?: string | Element | Function;
    fallbackPlacement?: string | Array<string>;
    offset?: number | string;
    onChange?: Function;
    placement?: string | Function;
    template?: string;
    title?: string | Element | Function;
    trigger?: string;
}

/**
 * Popover Properties
 */
export interface IPopoverProps extends IBaseProps<IPopover> {
    btnProps?: IButtonProps;
    isDismissible?: boolean;
    options?: IPopoverOptions;
    target?: Element,
    type?: number;
}

/**
 * Popover Types
 */
export type IPopoverTypes = {
    Auto: number;
    Bottom: number;
    Left: number;
    Right: number;
    Top: number;
}