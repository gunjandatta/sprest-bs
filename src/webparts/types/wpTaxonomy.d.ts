import { Helper } from "gd-sprest";
import { IWebPart, IWebPartInfo, IWebPartProps } from "./wp";
import { IWPTaxonomyCfg, IWPTaxonomyEditForm } from "./wpTaxonomyCfg"

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