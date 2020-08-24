import * as flatpickr from "flatpickr";
import { Components } from "gd-bs";
import { IDateTime, IDateTimeProps, IFormControlPropsDateTime } from "../../@types/components";

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

    // See if we are disabling the textbox
    if (props.disabled) {
        // Disable the input element
        textbox.el.querySelector("input").disabled = true;
    }

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

// Customize the form control
export const DateTimeControlType = 100;
Components.FormControlTypes["DateTime"] = DateTimeControlType;
Components.CustomControls.registerType(DateTimeControlType, (props: IFormControlPropsDateTime) => {
    let dt: IDateTime = null;

    // Set the created method
    let onRendered = props.onControlRendered;
    props.onControlRendered = ctrl => {
        // Render a date/time
        dt = DateTime({
            className: props.className,
            disabled: props.isReadonly,
            el: ctrl.el,
            options: props.options,
            showTime: props.showTime,
            value: props.value
        });

        // Call the custom render event
        onRendered ? onRendered(ctrl) : null;
    }

    let onValidate = props.onValidate;
    props.onValidate = (ctrl, result) => {
        // See if the field is required
        if (ctrl.required) {
            // Get the date field
            let elDate = dt.el.querySelector(".form-control");
            if (elDate) {
                // See if the value exists
                if (result.value) {
                    // Update the classes
                    elDate.classList.remove("is-invalid");
                    elDate.classList.add("is-valid");
                } else {
                    // Update the classes
                    elDate.classList.remove("is-valid");
                    elDate.classList.add("is-invalid");
                }
            }
        }

        // Call the onvalidate event
        let returnVal = onValidate ? onValidate(ctrl, result) : null;

        // Return the result
        return returnVal || result;
    }

    // Register a people picker
    props.onGetValue = () => {
        // Return the value
        return dt.getDate();
    };
});