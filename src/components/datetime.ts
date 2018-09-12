import { IDateTime, IDateTimeProps } from "./types/datetime";
import { jQuery } from "gd-bs";

/**
 * Date/Time
 */
export const DateTime = (props: IDateTimeProps) => {
    // Return 
    let el = props.el || document.createElement("input");
    el.setAttribute("type", "text");

    jQuery(el).datepicker();
    return el;
}