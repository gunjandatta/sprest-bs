import * as flatpickr from "flatpickr";
import { Components } from "gd-bs";
import { IDateTime, IDateTimeProps } from "../../@types/components";

/**
 * Date/Time
 */
export const DateTime = (props: IDateTimeProps): IDateTime => {
    // Create the date/time element
    let elDateTime = document.createElement("div");
    elDateTime.className = "date-time";

    // Create the textbox
    let textbox = Components.InputGroup({
        el: elDateTime,
        label: props.label
    });

    // Get the options and default the values
    let options = props.options || {};
    options.enableTime = props.showTime;
    options.defaultDate = props.value ? new Date(props.value) : null;
    options.dateFormat = options.dateFormat || ("m-d-Y" + (props.showTime ? " H:i K" : ""));

    // Apply the plugin
    let datetime = (flatpickr as any)(textbox.el.querySelector("input"), options);

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

    // Return the element
    return {
        el: elDateTime,
        flatpickrObj: datetime,
        getDate: () => { return datetime.selectedDates[0]; },
        getValue: () => { return textbox.getValue(); },
        setValue: (dt: string | Date, dtFormat?: string) => {
            // Default the format
            dtFormat = dtFormat || (props.options ? props.options.dateFormat : null);

            // Set the date/time
            datetime.setDate(dt, true, dtFormat);
        }
    };
}