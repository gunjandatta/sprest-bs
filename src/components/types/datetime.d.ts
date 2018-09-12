import { Components } from "gd-bs";

/**
 * Date/Time
 */
export const DateTime: (props: IDateTimeProps) => IDateTime

/**
 * Date/Time
 */
export interface IDateTime {
    /** The date/time picker element. */
    el: HTMLDivElement;

    /** Method to get the value. */
    getValue: () => string;

    /** Method to toggle the menu. */
    toggle: () => void;
}

/**
 * Date/Time Props
 */
export interface IDateTimeProps {
    /** The class name to apply to the element. */
    className?: string;

    /** The element to render the form to. */
    el?: Element;

    /** The date/time label. */
    label?: string;

    /** The date/time value. */
    value?: string;
}