import * as jQuery from "jquery";
import { IBadge, IBadgeProps } from "./types/badge";

/**
 * Badge Types
 */
export enum BadgeTypes {
    Danger = 1,
    Dark = 2,
    Info = 3,
    Light = 4,
    Primary = 5,
    Secondary = 6,
    Success = 7,
    Warning = 8
}

/**
 * Badge
 */
export const Badge = (props: IBadgeProps): IBadge => {
    // Set the class names
    let classNames = ["badge"];
    props.className ? classNames.push(props.className) : null;
    props.isPill ? classNames.push("badge-pill") : null;

    // Read the type
    switch (props.type) {
        // Danger
        case BadgeTypes.Danger:
            classNames.push("badge-danger");
            break;
        // Dark
        case BadgeTypes.Dark:
            classNames.push("badge-dark");
            break;
        // Info
        case BadgeTypes.Info:
            classNames.push("badge-info");
            break;
        // Light
        case BadgeTypes.Light:
            classNames.push("badge-light");
            break;
        // Secondary
        case BadgeTypes.Secondary:
            classNames.push("badge-secondary");
            break;
        // Success
        case BadgeTypes.Success:
            classNames.push("badge-success");
            break;
        // Warning
        case BadgeTypes.Warning:
            classNames.push("badge-warning");
            break;
        // Default - Primary
        default:
            classNames.push("badge-primary");
            break;
    }

    // Generate the html
    let html = props.href ?
        '<a href="' + props.href + '" class="' + classNames.join(' ') + '">' + (props.content || "") + '</a>'
        :
        '<span class="' + classNames.join(' ') + '">' + (props.content || "") + '</span>';

    // Get the element to render to
    let el = props.el || document.createElement("div");

    // Set the boostrap class
    el.classList.contains("bs") ? null : el.classList.add("bs");

    // Set the html
    el.innerHTML = html;

    // Return the badge
    let badge = jQuery(el.children[0]);
    return { el };
}