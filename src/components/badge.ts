import * as jQuery from "jquery";
import { IBadge, IBadgeProps } from "./types/badge";

/**
 * Badge Types
 */
export enum BadgeTypes {
    Danger = 0,
    Dark = 1,
    Info = 2,
    Light = 3,
    Primary = 4,
    Secondary = 5,
    Success = 6,
    Warning = 7
}

/**
 * Badge
 */
export const Badge = (props: IBadgeProps): IBadge | string => {
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

    // See if the element exists
    if (props.el) {
        // Set the class
        props.el.classList.add("bs");

        // Set the html
        props.el.innerHTML = html;

        // Return the badge
        let badge = jQuery(props.el.children[0]);
        return {
            el: badge
        };
    } else {
        // Return the html
        return html;
    }
}