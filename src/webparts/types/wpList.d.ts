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
export interface IWPList<IListCfg = IWPListCfg, IListInfo = IWPListInfo> extends IWebPart<IListCfg, IListInfo> { }

/**
 * WebPart List Information
 */
export interface IWPListInfo<IListCfg = IWPListCfg> extends IWebPartInfo<IListCfg> { }

/**
 * WebPart List Properties
 */
export interface IWPListProps<IListInfo=IWPListInfo, IListEditForm=IWPListEditForm> extends IWebPartProps<IListInfo, IListEditForm> {
    /** The caml query. */
    camlQuery?: string;

    /** The odata query. */
    odataQuery?: Types.SP.ODataQuery;

    /** The executing caml query event. */
    onExecutingCAMLQuery?: (wpInfo: IListInfo, caml: string) => string;

    /** The executing odata query event. */
    onExecutingODATAQuery?: (wpInfo: IListInfo, odata: Types.SP.ODataQuery) => Types.SP.ODataQuery;

    /** The on render items event. */
    onRenderItems?: (wpInfo: IListInfo, items: Array<Types.SP.IListItemQueryResult | Types.SP.IListItemResult>) => void;
}