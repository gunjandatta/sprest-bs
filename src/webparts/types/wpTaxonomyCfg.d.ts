import { IWebPartCfg, IWebPartEditForm } from "./wpCfg";
import { IWPTaxonomyInfo } from "./wpTaxonomy";

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