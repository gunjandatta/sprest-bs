import { IWPListCfg, IWPListEditForm } from "./wpListCfg";
import { IWPSearchInfo } from "./wpSearch";

/**
 * WebPart Search Configuration
 */
export interface IWPSearchCfg extends IWPListCfg {
    /** The searchable fields. */
    Fields: Array<{ name: string, type: string }>;
}

/**
 * WebPart Search Edit Form
 */
export interface IWPSearchEditForm extends IWPListEditForm<IWPSearchCfg, IWPSearchInfo> { }
