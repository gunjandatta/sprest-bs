import { Types } from "gd-sprest";
import { IWPList, IWPListInfo, IWPListProps } from "./wpList";
import { IWPSearchCfg, IWPSearchEditForm } from "./wpSearchCfg";

/**
 * Search WebPart
 */
export const WPSearch: (props: IWPListProps) => IWPSearch;

/**
 * WebPart Search
 */
export interface IWPSearch extends IWPList<IWPSearchCfg, IWPSearchInfo> {
    /** The filter items method. */
    filterItems: (filterText: string) => Array<Types.SP.IListItemQueryResult | Types.SP.IListItemResult>;
}

/**
 * WebPart Search Information
 */
export interface IWPSearchInfo extends IWPListInfo<IWPSearchCfg> { }

/**
 * WebPart Search Properties
 */
export interface IWPSearchProps extends IWPListProps<IWPSearchInfo, IWPSearchEditForm> {
    /** The internal field names to be used for search. These will be appended to the configuration fields. */
    searchFields?: Array<{ name: string, type: string }>;
}