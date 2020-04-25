import { Types } from "gd-sprest";
import { IWPList, IWPListCfg, IWPListEditForm, IWPListInfo, IWPListProps } from "./wpList";

/**
 * List Fields WebPart
 */
export const WPListFields: (props: IWPListFieldsProps) => IWPListFields;

/**
 * List Fields WebPart Edit Form
 */
export const WPListFieldsEditForm: (props: IWPListFieldsEditForm) => IWPListFieldsEditForm;

/**
 * List Fields WebPart
 */
export interface IWPListFields<IListFieldsCfg = IWPListFieldsCfg, IListFieldsInfo = IWPListFieldsInfo> extends IWPList<IListFieldsCfg, IListFieldsInfo> { }

/**
 * List Fields WebPart Information
 */
export interface IWPListFieldsInfo<IListFieldsCfg = IWPListFieldsCfg> extends IWPListInfo<IListFieldsCfg> { }

/**
 * List Fields WebPart Properties
 */
export interface IWPListFieldsProps<IListFieldsInfo = IWPListFieldsInfo, IListFieldsEditForm = IWPListFieldsEditForm> extends IWPListProps<IListFieldsInfo, IListFieldsEditForm> { }

/**
 * WebPart Configuration List Field
 */
export interface IWPListField {
    // The internal field name
    Name: string;

    // The display name of the field
    Title: string
}

/**
 * List Fields WebPart Configuration
 */
export interface IWPListFieldsCfg extends IWPListCfg {
    /** The selected fields */
    Fields: Array<IWPListField>;
}

/**
 * List Fields WebPart Edit Form
 */
export interface IWPListFieldsEditForm<IListFieldsCfg = IWPListFieldsCfg, IListFieldsInfo = IWPListFieldsInfo> extends IWPListEditForm<IListFieldsCfg, IListFieldsInfo> { }