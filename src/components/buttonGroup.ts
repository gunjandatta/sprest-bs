import { Button, IButtonProps } from "./button";

/**
 * Button Group Properties
 */
export interface IButtonGroupProps {
    buttons?: Array<IButtonProps>;
    className?: string;
    el?: Element | HTMLElement;
    id?: string;
    isLarge?: boolean;
    isSmall?: boolean;
    isVertical?: boolean;
    label?: string;
}

/**
 * Button Group
 * @property props - The button group properties.
 */
export const ButtonGroup = (props: IButtonGroupProps) => {
    let html = [];

    // Set the class names
    let classNames = [props.isVertical ? "btn-group-vertical" : "btn-group"];
    props.className ? classNames.push(props.className) : null;
    props.isLarge ? classNames.push("btn-group-lg") : null;
    props.isSmall ? classNames.push("btn-group-sm") : null;

    // Set the attributes
    let attributes = [
        props.id ? 'id="' + props.id + '"' : '',
        'role="group"',
        'class="' + classNames.join(' ') + '"',
        props.label ? "aria-label='" + props.label + "'" : ""
    ].join(' ').replace(/  /g, " ");

    // Set the starting tag
    html.push("<div " + attributes + ">");

    // Parse the buttons and generate the html
    let buttons = props.buttons || [];
    for (let i = 0; i < buttons.length; i++) {
        // Add the button html
        html.push(Button(buttons[i]));
    }

    // Add the ending tag
    html.push("</div>");

    // See if the element exists
    if (props.el) {
        // Set the class
        props.el.classList.add("bs");

        // Set the html
        props.el.innerHTML = html.join('\n');
    } else {
        // Return the html
        return html.join('\n');
    }
}