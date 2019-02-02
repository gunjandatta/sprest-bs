import { Components } from "gd-bs";
import { IODataQuery, SP } from "gd-sprest";
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
    odataQuery?: IODataQuery;

    /** The executing caml query event. */
    onExecutingCAMLQuery?: (wpInfo: IListInfo, caml: string) => string;

    /** The executing odata query event. */
    onExecutingODATAQuery?: (wpInfo: IListInfo, odata: IODataQuery) => IODataQuery;

    /** The on render items event. */
    onRenderItems?: (wpInfo: IListInfo, items: Array<SP.IListItemQuery | SP.ListItem>) => void;
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
    listQuery?: IODataQuery;

    /** The list changed event. */
    onListChanged?: (wpInfo: IListInfo, list?: SP.IListQuery | SP.List) => Array<Components.IFormControlProps> | PromiseLike<Array<Components.IFormControlProps>> | void;

    /** The lists loaded event. */
    onListsLoaded?: (wpInfo: IListInfo, lists?: Array<SP.IListQuery | SP.List>) => Array<SP.IListQuery | SP.List>;

    /** The render form event. */
    onRenderForm?: (wpInfo: IListInfo, list?: SP.IListQuery | SP.List) => Array<Components.IFormControlProps> | PromiseLike<Array<Components.IFormControlProps>> | void;
}