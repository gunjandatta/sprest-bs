import { IDateTime, IDateTimeProps } from "./types/datetime";
import { jQuery, Components } from "gd-bs";
import "../../lib/jquery-ui-1.12.1.custom/jquery-ui.min.css";

/**
 * Date/Time
 */
export const DateTime = (props: IDateTimeProps): IDateTime => {
    // Create the date/time element
    let elDateTime = document.createElement("div");
    elDateTime.className = "bs date-time";

    // Create the textbox
    let elTextbox = Components.InputGroup({
        appendedButtons: [{
            className: "dropdown-toggle",
            onClick: () => {
                // Toggle the menu
                toggle();
            }
        }]
    });
    elDateTime.appendChild(elTextbox.el);

    // Create the dropdown menu
    let elMenu = document.createElement("div");
    elMenu.className = "dropdown-menu float-right";
    elDateTime.appendChild(elMenu);

    // Method to toggle the menu
    let toggle = () => {
        // See if it's visible
        if (elMenu.classList.contains("show")) {
            // Hide the menu
            elMenu.classList.remove("show");
        } else {
            // Show the menu
            elMenu.classList.add("show");
        }
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

    // Render the date/time picker
    jQuery(elMenu).datepicker();

    // Return the element
    return {
        el: elDateTime,
        toggle,
        getValue: () => {
            return elTextbox.el.getAttribute("value");
        }
    };
}