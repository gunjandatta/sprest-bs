"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gd_bs_1 = require("gd-bs");
/**
 * Date/Time
 */
exports.DateTime = function (props) {
    // Create the date/time element
    var elDateTime = document.createElement("div");
    elDateTime.className = "date-time";
    // Create the textbox
    var textbox = gd_bs_1.Components.InputGroup({
        label: props.label
    });
    // Append the textbox
    var elTextbox = textbox.el.querySelector("input");
    elDateTime.appendChild(textbox.el);
    // See if we are displaying the time
    var ddlTime = null;
    if (props.showTime) {
        // Render the time form
        ddlTime = gd_bs_1.Components.FormControl({
            type: gd_bs_1.Components.FormControlTypes.Dropdown,
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
        }).dropdown;
        // Append the dropdown
        elDateTime.appendChild(ddlTime.el);
    }
    // Create the element
    var el = document.createElement("div");
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
        el = props.el;
    }
    else {
        // Set the bootstrap class
        el.classList.add("bs");
    }
    // Initialize the date/time picker
    gd_bs_1.jQuery(elTextbox).datepicker();
    // See if a value exists
    if (props.value) {
        var dt = new Date(props.value);
        // Set the date
        gd_bs_1.jQuery(elTextbox).datepicker("setDate", dt);
        // See if we are showing the time
        if (props.showTime) {
            // Set the time
            var hours = dt.getHours();
            hours = hours == 0 ? 12 : hours > 12 ? hours - 12 : hours;
            var value = hours + ":" + ("00" + dt.getMinutes()).slice(-2) + " " + (hours > 11 ? "PM" : "AM");
            ddlTime.setValue(value);
        }
    }
    // Return the element
    return {
        el: elDateTime,
        toggle: function () { },
        getValue: function () {
            var dtValue = elTextbox.value;
            // See if we are showing the time
            if (props.showTime) {
                // Get the selected time
                var item = ddlTime.getValue();
                dtValue += item ? " " + item.text : "";
            }
            // Return the date
            return dtValue;
        }
    };
};
