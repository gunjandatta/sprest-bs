import * as jQuery from "jquery";
import { Badge, BadgeTypes } from "./badge";
import { IButton, IButtonProps } from "./types/button";

/**
 * Button Types
 */
export enum ButtonTypes {
    Danger = 1,
    Dark = 2,
    Info = 3,
    Light = 4,
    Link = 5,
    Primary = 6,
    Secondary = 7,
    Success = 8,
    Warning = 9
}

/**
 * Button
 * @param props The button properties.
 */
export const Button = (props: IButtonProps): IButton => {
    // Set the class names
    let classNames = ["btn"];
    props.className ? classNames.push(props.className) : null;
    props.isBlock ? classNames.push("btn-block") : null;
    props.isLarge ? classNames.push("btn-lg") : null;
    props.isSmall ? classNames.push("btn-sm") : null;

    // Read the type
    switch (props.type) {
        // Danger
        case ButtonTypes.Danger:
            classNames.push("btn" + (props.isOutline ? "-outline" : "") + "-danger");
            break;
        // Dark
        case ButtonTypes.Dark:
            classNames.push("btn" + (props.isOutline ? "-outline" : "") + "-dark");
            break;
        // Info
        case ButtonTypes.Info:
            classNames.push("btn" + (props.isOutline ? "-outline" : "") + "-info");
            break;
        // Light
        case ButtonTypes.Light:
            classNames.push("btn" + (props.isOutline ? "-outline" : "") + "-light");
            break;
        // Link
        case ButtonTypes.Link:
            classNames.push("btn" + (props.isOutline ? "-outline" : "") + "-link");
            break;
        // Secondary
        case ButtonTypes.Secondary:
            classNames.push("btn" + (props.isOutline ? "-outline" : "") + "-secondary");
            break;
        // Success
        case ButtonTypes.Success:
            classNames.push("btn" + (props.isOutline ? "-outline" : "") + "-success");
            break;
        // Warning
        case ButtonTypes.Warning:
            classNames.push("btn" + (props.isOutline ? "-outline" : "") + "-warning");
            break;
        // Default - Primary
        default:
            classNames.push("btn" + (props.isOutline ? "-outline" : "") + "-primary");
            break;
    }

    // Set the attributes
    let attributes = [
        props.id ? 'id="' + props.id + '"' : '',
        'type="button"',
        'class="' + classNames.join(' ') + '"',
        props.isDisabled ? "disabled" : "",
        props.isLink ? 'role="button"' : "",
        props.target ? 'data-target="' + props.target + '"' : "",
        props.toggle ? 'data-toggle="' + props.toggle + '"' : "",
        props.trigger ? 'data-trigger="' + props.trigger + '"' : "",
        typeof (props.isExpanded) === "boolean" ? 'aria-expanded="' + (props.isExpanded ? "true" : "false") + '"' : '',
        props.controls ? 'aria-controls="' + props.controls.join(' ') + '"' : ''
    ].join(' ').replace(/  /g, " ");

    // Generate the html
    let html = [
        '<' + (props.isLink ? 'a' : 'button') + ' ' + attributes + '>',
        props.text || "",
        props.badgeValue ? Badge({ content: props.badgeValue, type: props.badgeType || BadgeTypes.Light }) : '',
        '</' + (props.isLink ? 'a' : 'button') + '>'
    ].join('\n');

    // Get the element to render to
    let el = props.el || document.createElement("div");

    // Set the boostrap class
    el.classList.contains("bs") ? null : el.classList.add("bs");

    // Set the html
    el.innerHTML = html;

    // See if there is a click event
    if (props.onClick) {
        // Add a click event
        el.querySelector(".btn").addEventListener("click", props.onClick);
    }

    // Return the button
    let btn = jQuery(el.children[0]);
    return {
        dispose: () => { btn.button("dispose"); },
        el,
        toggle: () => { btn.button("toggle"); }
    };
}