/**
 * Date/Time
 */
export const DateTime: (props: IDateTimeProps) => IDateTime

/**
 * Date/Time
 */
export interface IDateTime {

}

/**
 * Date/Time Props
 */
export interface IDateTimeProps {
    /** The class name to apply to the element. */
    className?: string;

    /** The element to render the form to. */
    el?: Element;
}