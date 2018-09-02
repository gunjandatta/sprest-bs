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
export const Tooltip = (props: ITooltipProps): ITooltip => {
    // Create the button
    let btnProps = props.btnProps || {};
    btnProps.toggle = "tooltip";
    let elBtn = Button(btnProps).el;

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
    elBtn.children[0].setAttribute("title", options.title || "");
    elBtn.children[0].setAttribute("data-placement", options.placement as string || "");

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

    // Get the element to render to
    let el = props.el || document.createElement("div");

    // Set the boostrap class
    el.classList.contains("bs") ? null : el.classList.add("bs");

    // Add the button
    el.appendChild(elBtn);

    // Create the tooltip
    let tooltip = jQuery(el.children[0]).tooltip(options);

    // Return the tooltip
    return {
        dispose: () => { tooltip.tooltip("dispose"); },
        el,
        enable: () => { tooltip.tooltip("enable"); },
        hide: () => { tooltip.tooltip("hide"); },
        show: () => { tooltip.tooltip("show"); },
        toggle: () => { tooltip.tooltip("toggle"); },
        toggleEnabled: () => { tooltip.tooltip("toggleEnabled"); },
        update: () => { tooltip.tooltip("update"); }
    };
}