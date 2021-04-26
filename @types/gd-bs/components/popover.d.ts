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
    /** Disables the popover. */
    disable: () => void;

    /** Disposes the popover. */
    dispose: () => void;

    /** The element. */
    el: Element;

    /** Enables the popover. */
    enable: () => void;

    /** Hides an element’s popover. */
    hide: () => void;

    /** Toggles an element's popover. */
    toggle: () => void;

    /** Toggles the ability for an element’s popover to be shown or hidden. */
    toggleEnabled: () => void;

    /** Reveals an element’s popover. */
    show: () => void;

    /** Updates the position of an element’s popover. */
    update: () => void;
}

/**
 * Popover Options
 */
export interface IPopoverOptions {
    animation?: boolean;
    boundary?: string | Element;
    container?: string | Element | Function;
    content?: string | Element | Function;
    delay?: number | object;
    fallbackPlacement?: string | Array<string>;
    html?: boolean;
    offset?: number | string;
    placement?: string | Function;
    selector?: string;
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