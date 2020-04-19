import { jQuery, Components } from "gd-bs";
import { IDateTime, IDateTimeProps } from "../../@types/components";
import "../../lib/jquery-ui-1.12.1.custom/jquery-ui.min.css";
import { Helper } from "gd-sprest";

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

    // Append the textbox
    let elTextbox = textbox.el.querySelector("input");
    elDateTime.appendChild(textbox.el);

    // See if we are displaying the time
    let ddlTime: Components.IDropdown = null;
    if (props.showTime) {
        // Render the time form
        ddlTime = Components.FormControl({
            type: Components.FormControlTypes.Dropdown,
            items: [
                { text: "12:00 AM" }, { text: "12:15 AM" }, { text: "12:30 AM" }, { text: "12:45 AM" },
                { text: "1:00 AM" }, { text: "1:15 AM" }, { text: "1:30 AM" }, { text: "2:45 AM" },
                { text: "2:00 AM" }, { text: "2:15 AM" }, { text: "2:30 AM" }, { text: "1:45 AM" },
                { text: "3:00 AM" }, { text: "3:15 AM" }, { text: "3:30 AM" }, { text: "3:45 AM" },
                { text: "4:00 AM" }, { text: "4:15 AM" }, { text: "4:30 AM" }, { text: "4:45 AM" },
                { text: "5:00 AM" }, { text: "5:15 AM" }, { text: "5:30 AM" }, { text: "5:45 AM" },
                { text: "6:00 AM" }, { text: "6:15 AM" }, { text: "6:30 AM" }, { text: "6:45 AM" },
                { text: "7:00 AM" }, { text: "7:15 AM" }, { text: "7:30 AM" }, { text: "7:45 AM" },
                { text: "8:00 AM" }, { text: "8:15 AM" }, { text: "8:30 AM" }, { text: "8:45 AM" },
                { text: "9:00 AM" }, { text: "9:15 AM" }, { text: "9:30 AM" }, { text: "9:45 AM" },
                { text: "10:00 AM" }, { text: "10:15 AM" }, { text: "10:30 AM" }, { text: "10:45 AM" },
                { text: "11:00 AM" }, { text: "11:15 AM" }, { text: "11:30 AM" }, { text: "11:45 AM" },
                { text: "12:00 PM" }, { text: "12:15 PM" }, { text: "12:30 PM" }, { text: "12:45 PM" },
                { text: "1:00 PM" }, { text: "1:15 PM" }, { text: "1:30 PM" }, { text: "2:45 PM" },
                { text: "2:00 PM" }, { text: "2:15 PM" }, { text: "2:30 PM" }, { text: "1:45 PM" },
                { text: "3:00 PM" }, { text: "3:15 PM" }, { text: "3:30 PM" }, { text: "3:45 PM" },
                { text: "4:00 PM" }, { text: "4:15 PM" }, { text: "4:30 PM" }, { text: "4:45 PM" },
                { text: "5:00 PM" }, { text: "5:15 PM" }, { text: "5:30 PM" }, { text: "5:45 PM" },
                { text: "6:00 PM" }, { text: "6:15 PM" }, { text: "6:30 PM" }, { text: "6:45 PM" },
                { text: "7:00 PM" }, { text: "7:15 PM" }, { text: "7:30 PM" }, { text: "7:45 PM" },
                { text: "8:00 PM" }, { text: "8:15 PM" }, { text: "8:30 PM" }, { text: "8:45 PM" },
                { text: "9:00 PM" }, { text: "9:15 PM" }, { text: "9:30 PM" }, { text: "9:45 PM" },
                { text: "10:00 PM" }, { text: "10:15 PM" }, { text: "10:30 PM" }, { text: "10:45 PM" },
                { text: "11:00 PM" }, { text: "11:15 PM" }, { text: "11:30 PM" }, { text: "11:45 PM" }
            ]
        } as Components.IFormControlPropsDropdown).dropdown;

        // Append the dropdown
        elDateTime.appendChild(ddlTime.el);
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
        let dt = new Date(props.value);

        // Set the date
        jQuery(elTextbox).datepicker("setDate", dt);

        // Set the time
        let hours = dt.getHours();
        let value = (hours > 12 ? hours - 12 : hours) + ":" + ("00" + dt.getMinutes()).slice(-2) + " " + (hours > 12 ? "PM" : "AM");
        ddlTime.setValue(value);
    }

    // Return the element
    return {
        el: elDateTime,
        toggle: () => { },
        getValue: () => {
            let dtValue = elTextbox.value;

            // See if we are showing the time
            if (props.showTime) {
                // Get the selected time
                let item = ddlTime.getValue() as Components.IDropdownItem;
                dtValue += item ? " " + item.text : "";
            }

            // Return the date
            return dtValue;
        }
    };
}