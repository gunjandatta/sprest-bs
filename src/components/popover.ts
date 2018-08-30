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
    el.children[0].setAttribute("title", options.title || "");
    el.children[0].setAttribute("data-content", options.content || "");

    // See if the element exists
    if (props.el) {
        // Set the class
        props.el.classList.add("bs");

        // Set the html
        props.el.innerHTML = el.innerHTML;

        // Set the popover to be manual
        options.trigger = "manual";

        // Create the popover
        let popover = jQuery(props.el.children[0]).popover(options);

        // Set a click event to manually toggle the popover
        props.el.children[0].addEventListener("click", ev => {
            // Prevent the window click event to be triggered
            ev.stopPropagation();

            // Toggle the popover
            popover.popover("toggle");
        });

        // See if this popover is dismissible
        if (props.isDismissible) {
            // Set a click event
            window.addEventListener("click", () => {
                // See if the popover is open
                if (props.el.getAttribute("data-visible") == "true") {
                    // Hide the popover
                    popover.popover("toggle");
                }
            });
        }

        // Set a pop over shown event to move the popover under a "bootstrap" element for the css to be applied
        jQuery(popover).on("shown.bs.popover", () => {
            // Set the attribute
            props.el.setAttribute("data-visible", "true");

            // Get the popover
            let elId = popover[0].getAttribute("aria-describedby");
            if (elId) {
                // Get the element
                let el = document.querySelector("#" + elId);
                if (el) {
                    // Get the popovers main element
                    let elParent = document.querySelector("#bs-popovers");
                    if (elParent == null) {
                        // Create the main element
                        elParent = document.createElement("div");
                        elParent.classList.add("bs");
                        elParent.id = "bs-popovers";

                        // Add it to the page
                        document.body.appendChild(elParent)
                    }

                    // Append the element
                    elParent.appendChild(el);
                }
            }
        });

        // Set a popover hidden event to set the flag
        jQuery(popover).on("hidden.bs.popover", () => {
            // Set the attribute
            props.el.setAttribute("data-visible", "false");
        });

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