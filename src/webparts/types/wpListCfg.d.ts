import { Types } from "gd-sprest";
import { IWebPartCfg, IWebPartEditForm } from "./wp";
import { IWPListInfo } from "./wpList";

/**
 * List WebPart Edit Form
 */
export const WPListEditForm: (props: IWPListEditForm) => IWPListEditForm;

/**
 * WebPart List Configuration
 */
export interface IWPListCfg extends IWebPartCfg {
    /** The list name */
    ListName?: string;

    /** The relative web url */
    WebUrl?: string;
}

/**
 * WebPart List Edit Form
 */
export interface IWPListEditForm extends IWebPartEditForm {
    /** The odata list query. */
    listQuery?: Types.SP.ODataQuery;

    /** The list changed event. */
    onListChanged?: (wpInfo: IWPListInfo, list?: Types.SP.IListQueryResult | Types.SP.IListResult) => void;

    /** The lists rendering event. */
    onListsRendering?: (wpInfo: IWPListInfo, lists?: Array<Types.SP.IListQueryResult | Types.SP.IListResult>) => Array<Types.SP.IListQueryResult | Types.SP.IListResult>;

    /** The render footer event. */
    onRenderFooter?: (el: HTMLDivElement, wpInfo: IWPListInfo, list?: Types.SP.IListQueryResult | Types.SP.IListResult) => void;

    /** The render header event. */
    onRenderHeader?: (el: HTMLDivElement, wpInfo: IWPListInfo, list?: Types.SP.IListQueryResult | Types.SP.IListResult) => void;

    /** The save event. */
    onSave?: (wpCfg: IWPListCfg) => IWebPartCfg;
}