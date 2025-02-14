/**
 * ![People Picker](/assets/images/people-picker.png)
 */

/**
 * ### People Picker
 * 
 * ```ts
 * import { ContextInfo, Components } from "gd-sprest-bs";
 * 
 * // Create the panel
 * let el = document.querySelector("#people-picker");
 * let form = Components.Form({
 *     el: el,
 *     rows: [
 *         // Other controls go here
 *         {
 *             control: {
 *                 allowGroups: false,
 *                 label: "Select User:",
 *                 multi: true,
 *                 name: "User",
 *                 type: Components.FormControlTypes.PeoplePicker
 *                 value: ContextInfo.userId // Default to the current user
 *             } as Components.IFormControlPropsPeoplePicker
 *         }
 *     ]
 * });
 * ```
 */
export const PeoplePicker: (props: IPeoplePickerProps) => IPeoplePicker;

import { IFormControlProps } from "gd-bs/src/components/form/controlTypes";
import { Types } from "gd-sprest";

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

    /** Assigns the object to the input parameter. */
    assignTo?: (obj: IPeoplePicker) => void;

    /** The class name to apply to the element. */
    className?: string;

    /** True to disable the component. */
    disabled?: boolean;

    /** The element to render the form to. */
    el?: HTMLElement;

    /** The specific SharePoint group id to search within. */
    groupId?: number;

    /** The label. */
    label?: string;

    /** Limits the results to a maximum number. */
    maxResults?: number;

    /** The minimum number of characters to enter before search occurs. */
    minCharSearch?: number;

    /** True to allow multiple users to be selected. */
    multi?: boolean;

    /** The change event. */
    onChange?: (obj: Array<Types.IPeoplePickerUser>) => void;

    /** The placeholder text. (Default value is "Search") */
    placeholder?: string;

    /** True to make the component read-only. */
    readOnly?: boolean;

    /** True to search the local users first. */
    searchLocal?: boolean;

    /** The url to search for for users. */
    searchUrl?: string;

    /** The selected users. */
    value?: string | number | Types.IPeoplePickerUser | Array<string | number | Types.IPeoplePickerUser>;
}

/**
 * Form Control Properties - People Picker
 */
export interface IFormControlPropsPeoplePicker extends IFormControlProps {
    allowGroups?: boolean;
    groupId?: number;
    maxResults?: number;
    multi?: boolean;
    onChange?: (obj: Array<Types.IPeoplePickerUser>) => void;
    placeholder?: string;
    searchLocal?: boolean;
    searchUrl?: string;
    value?: string | number | Types.IPeoplePickerUser | Array<string | number | Types.IPeoplePickerUser>;
}
