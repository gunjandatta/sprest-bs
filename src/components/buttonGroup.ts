import * as $ from "jquery";
import { Button } from "./button";
import { IButtonGroupProps } from "./types/buttonGroup";

/**
 * Button Group
 * @property props - The button group properties.
 */
export const ButtonGroup = (props: IButtonGroupProps): Element | string => {
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

    // Parse the buttons
    let buttons = props.buttons || [];
    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];

        // Set the property
        button.type = button.type || typeof (props.buttonType) === "number" ? props.buttonType : button.type;

        // Add the button html
        html.push(Button(button));
    }

    // Add the closing tag
    html.push("</div>");

    // See if the element exists
    if (props.el) {
        // Set the class
        props.el.classList.add("bs");

        // Set the html
        props.el.innerHTML = html.join('\n');

        // Parse the buttons
        let elButtons = props.el.querySelectorAll(".btn-group > .btn");
        for (let i = 0; i < elButtons.length; i++) {
            let button = props.buttons[i];

            // See if there is a click event
            if (button.onClick) {
                // Set the click event
                elButtons[i].addEventListener("click", button.onClick);
            }
        }

        // Return the element
        return $(props.el.children[0]);
    } else {
        // Return the html
        return html.join('\n');
    }
}