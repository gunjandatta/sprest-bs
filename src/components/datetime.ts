import { jQuery, Components } from "gd-bs";
import { IDateTime, IDateTimeProps } from "../../@types/components";
import "../../lib/jquery-ui-1.12.1.custom/jquery-ui.min.css";

/**
 * Date/Time
 */
export const DateTime = (props: IDateTimeProps): IDateTime => {
    // Create the date/time element
    let elDateTime = document.createElement("div");
    elDateTime.className = "date-time";

    // Create the textbox
    let textbox = Components.InputGroup({
        label: props.label
    });
    let elTextbox = textbox.el.querySelector("input");
    elDateTime.appendChild(textbox.el);

    // See if we are displaying the time
    if (props.showTime) {
        // TO DO
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(elDateTime);

    // See if we are rendering it to an element
    if (props.el) {
        // Ensure the parent element exists
        if (props.el.parentElement && props.el.parentElement.classList) {
            // Set the bootstrap class
            props.el.parentElement.classList.contains("bs") ? null : props.el.parentElement.classList.add("bs");
        }

        // Append the elements
        while (el.children.length > 0) {
            props.el.appendChild(el.children[0]);
        }

        // Update the element
        el = props.el as any;
    } else {
        // Set the bootstrap class
        el.classList.add("bs");
    }

    // Initialize the date/time picker
    jQuery(elTextbox).datepicker();

    // See if a value exists
    if (props.value) {
        // Set the value
        jQuery(elTextbox).datepicker("setDate", new Date(props.value));
    }

    // Return the element
    return {
        el: elDateTime,
        toggle: () => { },
        getValue: () => {
            return elTextbox.value;
        }
    };
}