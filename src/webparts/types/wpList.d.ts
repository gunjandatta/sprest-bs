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
export interface IWPList extends IWebPart {
    /** The webpart configuration. */
    cfg: IWPListCfg;

    /** The webpart information. */
    info: IWPListInfo;
}

/**
 * WebPart List Information
 */
export interface IWPListInfo extends IWebPartInfo {
    /** The webpart information. */
    cfg: IWPListCfg;
}

/**
 * WebPart List Properties
 */
export interface IWPListProps extends IWebPartProps {
    /** The caml query. */
    camlQuery?: string;

    /** The edit form. */
    editForm?: IWPListEditForm;

    /** The odata query. */
    odataQuery?: Types.SP.ODataQuery;

    /** The executing caml query event. */
    onExecutingCAMLQuery?: (wpInfo: IWPListInfo, caml: string) => string;

    /** The executing odata query event. */
    onExecutingODATAQuery?: (wpInfo: IWPListInfo, odata: Types.SP.ODataQuery) => Types.SP.ODataQuery;

    /** The on post render event. */
    onPostRender?: (wpInfo: IWPListInfo, list?: Types.SP.IListQueryResult | Types.SP.IListResult) => void;

    /** The render event triggered when the page is in 'Display' mode */
    onRenderDisplay?: (wp: IWPListInfo) => any;

    /** The render event triggered when the page is in 'Edit' mode */
    onRenderEdit?: (wp: IWPListInfo) => any;

    /** The on render items event. */
    onRenderItems?: (wpInfo: IWPListInfo, items: Array<Types.SP.IListItemQueryResult | Types.SP.IListItemResult>) => void;

    /** The save configuration event. */
    onSave?: (cfg: IWPListCfg) => IWPListCfg;
}