import * as jQuery from "jquery";
import { Button } from "./button";
import { IPopover, IPopoverProps } from "./types/popover";

/**
 * Popover Types
 */
export enum PopoverTypes {
    Auto = 1,
    Bottom = 2,
    Left = 3,
    Right = 4,
    Top = 5
}

/**
 * Popover
 */
export const Popover = (props: IPopoverProps): IPopover | string => {
    // Create the button
    let el = document.createElement("div");
    let btnProps = props.btnProps || {};
    btnProps.el = el;
    btnProps.isLink = props.isDismissible ? true : false;
    btnProps.toggle = "popover";
    btnProps.trigger = "focus";
    Button(btnProps);

    // Set the popover options
    let options = props.options || {};

    // Set the type
    switch (props.type) {
        // Auto
        case PopoverTypes.Auto:
            options.placement = "auto";
            break;
        // Bottom
        case PopoverTypes.Bottom:
            options.placement = "bottom";
            break;
        // Left
        case PopoverTypes.Left:
            options.placement = "left";
            break;
        // Right
        case PopoverTypes.Right:
            options.placement = "right";
            break;
        // Top
        case PopoverTypes.Top:
            options.placement = "top";
            break;
    }

    // Set the attributes
    el.children[0].setAttribute("tabindex", "0");
    el.children[0].setAttribute("title", options.title || "");
    el.children[0].setAttribute("data-content", options.content || "");

    // Ensure the main popover element exists
    // This will ensure the popovers are wrapped with a parent element with the "bs" class applied to it.
    let elParent = document.querySelector("#bs-popovers");
    if (elParent == null) {
        // Create the main element
        elParent = document.createElement("div");
        elParent.classList.add("bs");
        elParent.id = "bs-popovers";

        // Add it to the page
        document.body.appendChild(elParent)
    }

    // Set the options to target the main popover element
    options.container = "#bs-popovers";

    // See if the element exists
    if (props.el) {
        // Set the class
        props.el.classList.add("bs");

        // Set the html
        props.el.innerHTML = el.innerHTML;

        // Create the popover
        let popover = jQuery(props.el.children[0]).popover(options);

        // Return the popover
        return {
            dispose: () => { popover.popover("dispose"); },
            el: popover,
            hide: () => { popover.popover("hide"); },
            show: () => { popover.popover("show"); },
            toggle: () => { popover.popover("toggle"); },
            toggleEnabled: () => { popover.popover("toggleEnabled"); },
            update: () => { popover.popover("update"); }
        };
    } else {
        // Return the html
        return el.innerHTML;
    }
}