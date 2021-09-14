import { IFormControlProps } from "gd-bs/src/components/form/controlTypes";
import { Types } from "gd-sprest";
import { IWebPart, IWebPartInfo, IWebPartProps, IWebPartCfg, IWebPartEditForm } from "../base/types";

/**
 * ### List WebPart
 * 
 * The list webpart should be used when targeting a list as a datasource.
 * 
 * ```ts
 * import { WebParts } from "gd-sprest-bs";
 * 
 * // Create the webpart
 * WebParts.WebPart({
 *     elementId: "my-wpList",
 *     cfgElementId: "my-wpList-cfg",
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
    odataQuery?: Types.IODataQuery;

    /** The executing caml query event. */
    onExecutingCAMLQuery?: (wpInfo: IListInfo, caml: string) => string;

    /** The executing odata query event. */
    onExecutingODATAQuery?: (wpInfo: IListInfo, odata: Types.IODataQuery) => Types.IODataQuery;

    /** The on render items event. */
    onRenderItems?: (wpInfo: IListInfo, items: Array<Types.SP.IListItemQuery | Types.SP.ListItem>) => void;
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
    listQuery?: Types.IODataQuery;

    /** The list changed event. */
    onListChanged?: (wpInfo: IListInfo, list?: Types.SP.IListQuery | Types.SP.List) => Array<IFormControlProps> | PromiseLike<Array<IFormControlProps>> | void;

    /** The lists loaded event. */
    onListsLoaded?: (wpInfo: IListInfo, lists?: Array<Types.SP.IListQuery | Types.SP.List>) => Array<Types.SP.IListQuery | Types.SP.List>;

    /** The render form event. */
    onRenderForm?: (wpInfo: IListInfo, list?: Types.SP.IListQuery | Types.SP.List) => Array<IFormControlProps> | PromiseLike<Array<IFormControlProps>> | void;
}