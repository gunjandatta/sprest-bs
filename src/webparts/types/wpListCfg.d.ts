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
export interface IWPListEditForm extends IWebPartEditForm<IWPListCfg, IWPListInfo> {
    /** The odata list query. */
    listQuery?: Types.SP.ODataQuery;

    /** The list changed event. */
    onListChanged?: (wpInfo: IWPListInfo, list?: Types.SP.IListQueryResult | Types.SP.IListResult) => Array<IFormControl> | PromiseLike<Array<IFormControl>> | void;

    /** The lists rendering event. */
    onListsRendering?: (wpInfo: IWPListInfo, lists?: Array<Types.SP.IListQueryResult | Types.SP.IListResult>) => Array<Types.SP.IListQueryResult | Types.SP.IListResult>;

    /** The render form event. */
    onRenderForm?: (wpInfo: IWPListInfo, list?: Types.SP.IListQueryResult | Types.SP.IListResult) => Array<IFormControl> | PromiseLike<Array<IFormControl>> | void;
}