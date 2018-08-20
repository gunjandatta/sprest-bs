import { Types } from "gd-sprest";
import { IWebPart, IWebPartInfo, IWebPartProps } from "./wp";
import { IWPListCfg, IWPListEditForm } from "./wpListCfg";

/**
 * List WebPart
 */
export const WPList: (props: IWPListProps) => IWPList;

/**
 * WebPart List
 */
export interface IWPList extends IWebPart<IWPListCfg, IWPListInfo> { }

/**
 * WebPart List Information
 */
export interface IWPListInfo extends IWebPartInfo<IWPListCfg> { }

/**
 * WebPart List Properties
 */
export interface IWPListProps extends IWebPartProps<IWPListInfo, IWPListEditForm> {
    /** The caml query. */
    camlQuery?: string;

    /** The odata query. */
    odataQuery?: Types.SP.ODataQuery;

    /** The executing caml query event. */
    onExecutingCAMLQuery?: (wpInfo: IWPListInfo, caml: string) => string;

    /** The executing odata query event. */
    onExecutingODATAQuery?: (wpInfo: IWPListInfo, odata: Types.SP.ODataQuery) => Types.SP.ODataQuery;

    /** The on render items event. */
    onRenderItems?: (wpInfo: IWPListInfo, items: Array<Types.SP.IListItemQueryResult | Types.SP.IListItemResult>) => void;
}