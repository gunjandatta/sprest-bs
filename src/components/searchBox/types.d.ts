/**
 * ![Search Box](/assets/images/people-picker.png)
 */

/**
 * ### Search Box
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
 *                 type: Components.FormControlTypes.SearchBox
 *                 value: ContextInfo.userId // Default to the current user
 *             } as Components.IFormControlPropsSearchBox
 *         }
 *     ]
 * });
 * ```
 */
export const SearchBox: (props: ISearchBoxProps) => ISearchBox;

import { IDropdownItem } from "gd-bs/src/components/dropdown/types";
import { IFormControlProps } from "gd-bs/src/components/form/controlTypes";

/**
 * Search Box
 */
export interface ISearchBox<T = IDropdownItem> {
    /** The search box element. */
    el: HTMLElement;

    /** Returns the selected users. */
    getValue: () => Array<T>;

    /** Sets the selected users by id or search box user object. */
    setValue: (items: Array<T>) => void;
}

/**
 * Search Box Properties
 */
export interface ISearchBoxProps<T = IDropdownItem> {
    /** Assigns the object to the input parameter. */
    assignTo?: (obj: ISearchBox) => void;

    /** The class name to apply to the element. */
    className?: string;

    /** True to disable the component. */
    disabled?: boolean;

    /** The element to render the form to. */
    el?: HTMLElement;

    /** The items for the search box. */
    items?: Array<T>;

    /** The label. */
    label?: string;

    /** Limits the results to a maximum number. */
    maxResults?: number;

    /** The minimum number of characters to enter before search occurs. */
    minCharSearch?: number;

    /** True to allow multiple users to be selected. */
    multi?: boolean;

    /** The change event. */
    onChange?: (obj: Array<T>) => void;

    /** The render event when an item is added. */
    onItemAdded?: (el: HTMLElement, item: T) => void;

    /** The event called after the items are loaded. */
    onItemsLoaded?: (items?: Array<T>) => void;

    /** Use this event to set the items dynamically. */
    onItemsLoading?: () => Array<T> | PromiseLike<Array<T>>;

    /** The search event. */
    onSearchItems?: (filter?: string) => Array<T> | PromiseLike<Array<T>>;

    /** The placeholder text. (Default value is "Search") */
    placeholder?: string;

    /** True to make the component read-only. */
    readOnly?: boolean;

    /** The selected users. */
    value?: string | number | Array<string | number>;
}

/**
 * Form Control Properties - Search Box
 */
export interface IFormControlPropsSearchBox<T = IDropdownItem> extends IFormControlProps {
    maxResults?: number;
    minCharSearch?: number;
    multi?: boolean;
    onChange?: (obj: Array<Types.ISearchBoxUser>) => void;
    onItemAdded?: (el: HTMLElement, item: T) => void;
    onItemsLoaded?: (items?: Array<T>) => void;
    onItemsLoading?: () => Array<T> | PromiseLike<Array<T>>;
    onSearchItems?: (filter?: string) => Array<T> | PromiseLike<Array<T>>;
    placeholder?: string;
    value?: T | Array<T>;
}
