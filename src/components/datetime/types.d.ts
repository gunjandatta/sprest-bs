import { IFormControlProps } from "gd-bs/src/components/form/controlTypes";

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

    /** The flatpickr object. */
    flatpickrObj: any;

    /** Returns the date as a Date/Time object. */
    getDate: () => Date;

    /** Method to get the value. */
    getValue: () => string;

    /** Method to set the value. */
    setValue: (dt: string | Date, dtFormat?: string) => void;
}

/**
 * Date/Time Props
 */
export interface IDateTimeProps {
    /** Assigns the object to the input parameter. */
    assignTo?: (obj: IDateTime) => void;

    /** The class name to apply to the element. */
    className?: string;

    /** The element to render the form to. */
    el?: Element;

    /** True to disable the date/time plugin */
    disabled?: boolean;

    /** The date/time label. */
    label?: string;

    /** The flatpickr options. */
    options?: any;

    /** Flag to display the time. */
    showTime?: boolean;

    /** The date/time value. */
    value?: string;
}

/**
 * Form Control Properties - DateTime
 */
export interface IFormControlPropsDateTime extends IFormControlProps {
    /** The flatpickr options. */
    options?: any;

    /** Flag to display the time. */
    showTime?: boolean;

    /** The date/time value. */
    value?: string;
}
