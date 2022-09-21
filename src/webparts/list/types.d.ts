import { IFormControlProps } from "gd-bs/src/components/form/controlTypes";
import { Helper, Types } from "gd-sprest";
import { IWebPart, IWebPartInfo, IWebPartProps, IWebPartCfg, IWebPartEditForm, ISPFxWebPart, ISPFxWebPartCfg, ISPFxWebPartProps } from "../base/types";
import { IListFormDisplay, IListFormDisplayProps, IListFormEdit, IListFormEditProps } from "../../components/listForm/types";

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
export interface IWPListProps<IListInfo = IWPListInfo, IListEditForm = IWPListEditForm> extends IWebPartProps<IListInfo, IListEditForm> {
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

/**
 * SPFx List WebPart
 */
export const SPFxListWebPart: (props: ISPFxListWebPartProps) => ISPFxListWebPart;

/**
 * SPFx List WebPart
 */
export interface ISPFxListWebPart extends ISPFxWebPart {
    /** The webpart configuration object. */
    Configuration: ISPFxListWebPartCfg;
}

/**
 * SPFx List WebPart Configuration
 */
export interface ISPFxListWebPartCfg extends ISPFxWebPartCfg {
    /** The list id */
    ListId?: string;

    /** The list name */
    ListName?: string;

    /** The relative web url */
    WebUrl?: string;
}

/**
 * SPFx List WebPart Properties
 */
export interface ISPFxListWebPartProps extends ISPFxWebPartProps {
    /** The odata list query. */
    listQuery?: Types.IODataQuery;

    /** The event called prior to saving the webpart configuration. */
    onConfigSaving?: (wpCfg: ISPFxListWebPartCfg) => ISPFxListWebPartCfg;

    /** The event called after the webpart configuration is saved. */
    onConfigSaved?: (wpCfg?: ISPFxListWebPartCfg) => void;

    /** The list changed event. */
    onListsChanged?: (wpInfo: IListInfo, list?: Types.SP.IListQuery | Types.SP.List) => Array<IFormControlProps> | PromiseLike<Array<IFormControlProps>> | void;

    /** The lists loaded event. */
    onListsLoaded?: (wpInfo: IListInfo, lists?: Array<Types.SP.IListQuery | Types.SP.List>) => Array<Types.SP.IListQuery | Types.SP.List>;

    /** The render event for the webpart. */
    render?: (el?: HTMLElement, cfg?: ISPFxListWebPartCfg) => void;

    /** The render event for the webpart when the page is in edit mode. */
    renderEdit?: (el?: HTMLElement, cfg?: ISPFxListWebPartCfg) => void;
}

/**
 * SPFx List Form WebPart
 */
export const SPFxListFormWebPart: (props: ISPFxListFormWebPartProps) => ISPFxListFormWebPart;

/**
 * SPFx List Form WebPart
 */
export interface ISPFxListFormWebPart extends ISPFxListWebPart {
    /** The display form. */
    DisplayForm?: IListFormDisplay;

    /** The edit/new form. */
    EditForm?: IListFormEdit;
}

/**
 * SPFx List Form WebPart Properties
 */
export interface ISPFxListFormWebPartProps extends ISPFxListWebPartProps {
    /** The form component id to use for the edit configuration webpart. */
    componentId?: string;

    /** The form component properties to use for the edit configuration webpart. */
    componentProps?: string;

    /** The list information properties. */
    onGetListInfo?: (props: Helper.IListFormProps) => Helper.IListFormProps;

    /** The display form rendering event. */
    onDisplayFormRendering?: (props: IListFormDisplayProps) => IListFormDisplayProps;

    /** The display form rendered event. */
    onDisplayFormRendered?: (form?: IListDisplayForm) => void;

    /** The footer rendering. */
    onEditFooterRendering?: (props: ITooltipGroupProps) => ITooltipGroupProps;

    /** The edit form rendering event. */
    onEditFormRendering?: (props: IListFormEditProps) => IListFormEditProps;

    /** The edit form rendered event. */
    onEditFormRendered?: (form?: IListEditForm) => void;

    /** The saving event. */
    onSaving?: (values: any) => any;

    /** The saved event */
    onSaved?: (item: any) => void;
}