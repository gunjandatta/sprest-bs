import { Types } from "gd-sprest";
import { IFormControl } from "../../components/types/form";
import { IWebPartCfg, IWebPartEditForm } from "./wpCfg";
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