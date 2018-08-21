import { Helper } from "gd-sprest";
import { IWebPart, IWebPartInfo, IWebPartProps, IWebPartCfg, IWebPartEditForm } from "./wp";

/**
 * WebPart Taxonomy
 */
export interface IWPTaxonomy extends IWebPart<IWPTaxonomyCfg, IWPTaxonomyInfo> { }

/**
 * WebPart Taxonomy Information
 */
export interface IWPTaxonomyInfo extends IWebPartInfo<IWPTaxonomyCfg> { }

/**
 * WebPart Taxonomy Properties
 */
export interface IWPTaxonomyProps extends IWebPartProps<IWPTaxonomyInfo, IWPTaxonomyEditForm> {
    /** The on render term set event. */
    onRenderTermSet?: (wpInfo: IWPTaxonomyInfo, termSet: Helper.Types.ITerm) => void;

    /** The on render term sets event. */
    onRenderTermSets?: (wpInfo: IWPTaxonomyInfo, termSets: Array<Helper.Types.ITermSetInfo>) => void;

    /** The on render term set terms event. */
    onRenderTermSetTerms?: (wpInfo: IWPTaxonomyInfo, terms: Array<Helper.Types.ITermInfo>) => void;
}
/**
 * Term Group Info
 */
interface ITermGroupInfo {
    id: string;
    name: string;
}

/**
 * Term Info
 */
interface ITermInfo {
    id: string;
    name: string;
}

/**
 * WebPart Taxonomy Configuration
 */
export interface IWPTaxonomyCfg extends IWebPartCfg {
    /** The term group id. */
    TermGroupId?: string;

    /** The term group name. */
    TermGroupName?: string;

    /** The term set id. */
    TermSetId?: string;

    /** The term set name */
    TermSetName?: string;

    /** The term set term id. */
    TermSetTermId?: string;

    /** The term set term name */
    TermSetTermName?: string;
}

/**
 * WebPart Taxonomy Edit Form
 */
export interface IWPTaxonomyEditForm extends IWebPartEditForm<IWPTaxonomyCfg, IWPTaxonomyInfo> {
    /** The term group changed event. */
    onTermGroupChanged?: (wpInfo: IWPTaxonomyInfo, termGroupInfo?: ITermGroupInfo) => void;

    /** The term set changed event. */
    onTermSetChanged?: (wpInfo: IWPTaxonomyInfo, termSetInfo?: ITermInfo) => void;

    /** The term set term changed event. */
    onTermSetTermChanged?: (wpInfo: IWPTaxonomyInfo, termInfo?: ITermInfo) => void;

    /** Flag to display the term set terms. */
    showTermSetTerms?: boolean;
}