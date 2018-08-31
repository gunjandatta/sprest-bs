import * as jQuery from "jquery";
import { Button } from "./button";
import { ITooltip, ITooltipProps } from "./types/tooltip";

/**
 * Tooltip Types
 */
export enum TooltipTypes {
    Auto = 1,
    Bottom = 2,
    Left = 3,
    Right = 4,
    Top = 5
}

/**
 * Tooltip
 */
export const Tooltip = (props: ITooltipProps): ITooltip | string => {
    // Create the button
    let el = document.createElement("div");
    let btnProps = props.btnProps || {};
    btnProps.el = el;
    btnProps.toggle = "tooltip";
    Button(btnProps);

    // Set the tooltip options
    let options = props.options || {};

    // Set the type
    switch (props.type) {
        // Auto
        case TooltipTypes.Auto:
            options.placement = "auto";
            break;
        // Bottom
        case TooltipTypes.Bottom:
            options.placement = "bottom";
            break;
        // Left
        case TooltipTypes.Left:
            options.placement = "left";
            break;
        // Right
        case TooltipTypes.Right:
            options.placement = "right";
            break;
        // Default - Top
        default:
            options.placement = "top";
            break;
    }

    // Set the attributes
    el.children[0].setAttribute("title", options.title || "");
    el.children[0].setAttribute("data-placement", options.placement as string || "");

    // Ensure the main tooltip element exists
    // This will ensure the tooltips are wrapped with a parent element with the "bs" class applied to it.
    let elParent = document.querySelector("#bs-tooltips");
    if (elParent == null) {
        // Create the main element
        elParent = document.createElement("div");
        elParent.classList.add("bs");
        elParent.id = "bs-tooltips";

        // Add it to the page
        document.body.appendChild(elParent)
    }

    // Set the options to target the main tooltip element
    options.container = "#bs-tooltips";

    // See if the element exists
    if (props.el) {
        // Set the class
        props.el.classList.add("bs");

        // Set the html
        props.el.innerHTML = el.innerHTML;

        // Create the tooltip
        let tooltip = jQuery(props.el.children[0]).tooltip(options);

        // Return the tooltip
        return {
            dispose: () => { tooltip.tooltip("dispose"); },
            el: tooltip,
            enable: () => { tooltip.tooltip("enable"); },
            hide: () => { tooltip.tooltip("hide"); },
            show: () => { tooltip.tooltip("show"); },
            toggle: () => { tooltip.tooltip("toggle"); },
            toggleEnabled: () => { tooltip.tooltip("toggleEnabled"); },
            update: () => { tooltip.tooltip("update"); }
        };
    } else {
        // Return the html
        return el.innerHTML;
    }
}