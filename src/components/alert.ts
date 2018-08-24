import * as jQuery from "jquery";
import { IAlert, IAlertProps } from "./types/alert";

/**
 * Alert Types
 */
export enum AlertTypes {
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
 * Alert
 */
export const Alert = (props: IAlertProps): IAlert | string => {
    // Set the class names
    let classNames = ["alert"];
    props.className ? classNames.push(props.className) : null;
    props.isDismissible ? classNames.push("alert-dismissible") : null;

    // Read the type
    switch (props.type) {
        // Danger
        case AlertTypes.Danger:
            classNames.push("btn-danger");
            break;
        // Dark
        case AlertTypes.Dark:
            classNames.push("btn-dark");
            break;
        // Info
        case AlertTypes.Info:
            classNames.push("btn-info");
            break;
        // Light
        case AlertTypes.Light:
            classNames.push("btn-light");
            break;
        // Secondary
        case AlertTypes.Secondary:
            classNames.push("btn-secondary");
            break;
        // Success
        case AlertTypes.Success:
            classNames.push("btn-success");
            break;
        // Warning
        case AlertTypes.Warning:
            classNames.push("btn-warning");
            break;
        // Default - Primary
        default:
            classNames.push("btn-primary");
            break;
    }

    // Generate the html
    let html = [
        '<div class="' + classNames.join(' ') + '" role="alert">',
        props.header ? '<h4 class="alert-heading">' + props.header + '</h4>' : '',
        props.content || '',
        '</div>'
    ].join('\n');

    // See if the element exists
    if (props.el) {
        // Set the class
        props.el.classList.add("bs");

        // Set the html
        props.el.innerHTML = html;

        // Return the alert
        let alert = jQuery(props.el.children[0]);
        return {
            close: () => { alert.alert("toggle"); },
            dispose: () => { alert.alert("dispose"); },
            el: alert
        };
    } else {
        // Return the html
        return html;
    }
}