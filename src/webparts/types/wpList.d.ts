import { Types } from "gd-sprest";
import { IFormControl } from "../../components/types/form";
import { IWebPart, IWebPartInfo, IWebPartProps, IWebPartCfg, IWebPartEditForm } from "./wp";

/**
 * List WebPart
 */
export const WPList: (props: IWPListProps) => IWPList;

/**
 * List WebPart Edit Form
 */
export const WPListEditForm: (props: IWPListEditForm) => IWPListEditForm;

/**
 * List WebPart
 */
export interface IWPList<IListCfg = IWPListCfg, IListInfo = IWPListInfo> extends IWebPart<IListCfg, IListInfo> { }

/**
 * List WebPart Information
 */
export interface IWPListInfo<IListCfg = IWPListCfg> extends IWebPartInfo<IListCfg> { }

/**
 * List WebPart Properties
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

/**
 * List WebPart Configuration
 */
export interface IWPListCfg extends IWebPartCfg {
    /** The list name */
    ListName?: string;

    /** The relative web url */
    WebUrl?: string;
}

/**
 * List WebPart Edit Form
 */
export interface IWPListEditForm<IListCfg = IWPListCfg, IListInfo = IWPListInfo> extends IWebPartEditForm<IListCfg, IListInfo> {
    /** The odata list query. */
    listQuery?: Types.SP.ODataQuery;

    /** The list changed event. */
    onListChanged?: (wpInfo: IListInfo, list?: Types.SP.IListQueryResult | Types.SP.IListResult) => Array<IFormControl> | PromiseLike<Array<IFormControl>> | void;

    /** The lists rendering event. */
    onListsRendering?: (wpInfo: IListInfo, lists?: Array<Types.SP.IListQueryResult | Types.SP.IListResult>) => Array<Types.SP.IListQueryResult | Types.SP.IListResult>;

    /** The render form event. */
    onRenderForm?: (wpInfo: IListInfo, list?: Types.SP.IListQueryResult | Types.SP.IListResult) => Array<IFormControl> | PromiseLike<Array<IFormControl>> | void;
}