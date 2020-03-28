import { IFormControlProps } from "gd-bs/components/formControl";
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

    /** Returns the selected users. */
    getValue: () => Array<Types.SP.User | Types.SP.Group>;

    /** Sets the selected users by id or people picker user object. */
    setValue: (selectedUsers: Array<string | number | Types.IPeoplePickerUser>) => void;
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

    /** True to allow multiple users to be selected. */
    multi?: boolean;

    /** True to search the local users first. */
    searchLocal?: boolean;

    /** The selected users. */
    value?: string | number | Types.IPeoplePickerUser | Array<string | number | Types.IPeoplePickerUser>;
}

/**
 * Form Control Properties - People Picker
 */
export interface IFormControlPropsPeoplePicker extends IFormControlProps {
    allowGroups?: boolean;
    multi?: boolean;
    searchLocal?: boolean;
    value?: string | number | Types.IPeoplePickerUser | Array<string | number | Types.IPeoplePickerUser>;
}
