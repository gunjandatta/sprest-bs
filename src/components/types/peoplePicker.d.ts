import { Types } from "gd-sprest";
/**
 * People Picker
 */
export const PeoplePicker: (props: IPeoplePickerProps) => IPeoplePicker;

/**
 * People Picker
 */
export interface IPeoplePicker {
    /** The people picker element. */
    el: HTMLElement;

    /** Returns the value. */
    getValue: () => Array<Types.SP.IPeoplePickerUser>;
}

/**
 * People Picker Properties
 */
export interface IPeoplePickerProps {
    /** True, to include groups in the results. */
    allowGroups?: boolean;

    /** The class name to apply to the element. */
    className?: string;

    /** The element to render the form to. */
    el?: Element;

    /** The label. */
    label?: string;

    /** True to search the local users first. */
    searchLocal?: boolean;

    /** The selected users. */
    value?: Array<Types.SP.IPeoplePickerUser>;
}