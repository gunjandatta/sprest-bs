/**
 * Button Types
 */
export enum ButtonTypes {
    Danger = 0,
    Dark = 1,
    Info = 2,
    Light = 3,
    Link = 4,
    Primary = 5,
    Secondary = 6,
    Success = 7,
    Warning = 8
}

/**
 * Button Properties
 */
export interface IButtonProps {
    className?: string;
    el?: Element | HTMLElement;
    id?: string;
    isBlock?: boolean;
    isDisabled?: boolean;
    isLarge?: boolean;
    isOutline?: boolean;
    isSmall?: boolean;
    target?: string;
    text?: string;
    toggle?: string;
    type?: number;
}

/**
 * Button
 * @param props The button properties.
 */
export const Button = (props: IButtonProps) => {
    // Set the class names
    let classNames = ["btn"];
    props.className ? classNames.push(props.className) : null;
    props.isBlock ? classNames.push("btn-block") : null;
    props.isLarge ? classNames.push("btn-lg") : null;
    props.isSmall ? classNames.push("btn-sm") : null;

    // Set the type
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
        props.target ? 'data-target="' + props.target + '"' : "",
        props.toggle ? 'data-toggle="' + props.toggle + '"' : ""
    ].join(' ').replace(/  /g, " ");

    // Generate the html
    let html = [
        '<button ' + attributes + '>',
        props.text || "",
        '</button>'
    ].join('\n');

    // See if the element exists
    if (props.el) {
        // Set the class
        props.el.classList.add("bs");

        // Set the html
        props.el.innerHTML = html;
    } else {
        // Return the html
        return html;
    }
}