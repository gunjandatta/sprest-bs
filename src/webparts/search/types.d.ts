import { Types } from "gd-sprest";
import { IWPList, IWPListInfo, IWPListProps, IWPListCfg, IWPListEditForm } from "../list/types";

/**
 * ### Search WebPart
 * 
 * The search webpart extends the list webpart, and includes a filterItems method to return items based on the inputed filter text.
 * 
 * ```ts
 * import { WebParts } from "gd-sprest-bs";
 * 
 * // Create the webpart
 * let wp = WebParts.WebPart({
 *     elementId: "my-wpSearch",
 *     cfgElementId: "my-wpSearch-cfg",
 *     onRenderItems: (wpInfo, items) => {
 *         // Render the display element
 *         wpInfo.el.innerHTML = [
 *             '<h1>List: ' + wpInfo.ListName + '</h1>',
 *             '<h5>List Items: ' + items.length + '</h5>'
 *         ].join('\n');
 *     }
 * });
 * ```
 */
export const WPSearch: (props: IWPListProps) => IWPSearch;

/**
 * Search WebPart Edit Form
 */
export const WPSearchEditForm: (props: IWPSearchEditForm) => IWPSearchEditForm;

/**
 * Search WebPart
 */
export interface IWPSearch extends IWPList<IWPSearchCfg, IWPSearchInfo> {
    /** The filter items method. */
    filterItems: (filterText: string) => Array<Types.SP.IListItemQuery | Types.SP.ListItem>;
}

/**
 * Search WebPart Information
 */
export interface IWPSearchInfo extends IWPListInfo<IWPSearchCfg> { }

/**
 * Search WebPart Properties
 */
export interface IWPSearchProps extends IWPListProps<IWPSearchInfo, IWPSearchEditForm> {
    /** The internal field names to be used for search. These will be appended to the configuration fields. */
    searchFields?: Array<{ name: string, type: string }>;
}

/**
 * Search WebPart Configuration
 */
export interface IWPSearchCfg extends IWPListCfg {
    /** The searchable fields. */
    Fields: Array<{ name: string, type: string }>;
}

/**
 * Search WebPart Edit Form
 */
export interface IWPSearchEditForm extends IWPListEditForm<IWPSearchCfg, IWPSearchInfo> { }