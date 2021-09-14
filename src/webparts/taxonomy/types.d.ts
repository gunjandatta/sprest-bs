import { IDropdownItem } from "gd-bs/src/components/dropdown/types"
import { Helper } from "gd-sprest";
import { IWebPart, IWebPartInfo, IWebPartProps, IWebPartCfg, IWebPartEditForm } from "../base/types";

/**
 * ### Taxonomy WebPart
 * 
 * The taxonomy webpart should be used when targeting the term store as a datasource.
 * 
 * ```ts
 * import { WebParts } from "gd-sprest-bs";
 * 
 * // Create the webpart
 * WebParts.WPTaxonomy({
 *     elementId: "my-wpTaxonomy",
 *     cfgElementId: "my-wpTaxonomy-cfg",
 *     onRenderTermSetTerms: (wpInfo, terms) => {
 *         // Render the display element
 *         wpInfo.el.innerHTML = [
 *             '<h1>Term Set: ' + wpInfo.TermSetName + '</h1>',
 *             '<h5>Terms: ' + terms.length + '</h5>'
 *         ].join('\n');
 *     }
 * });
 * ```
 */
export const WPTaxonomy: (props: IWPTaxonomyProps) => IWPTaxonomy;

/**
 * Taxonomy WebPart Edit Form
 */
export const WPTaxonomyEditForm: (props: IWPTaxonomyEditForm) => IWPTaxonomyEditForm;

/**
 * Taxonomy WebPart
 */
export interface IWPTaxonomy extends IWebPart<IWPTaxonomyCfg, IWPTaxonomyInfo> { }

/**
 * Taxonomy WebPart Information
 */
export interface IWPTaxonomyInfo extends IWebPartInfo<IWPTaxonomyCfg> { }

/**
 * Taxonomy WebPart Properties
 */
export interface IWPTaxonomyProps extends IWebPartProps<IWPTaxonomyInfo, IWPTaxonomyEditForm> {
    /** The on render term set event. */
    onRenderTermSet?: (wpInfo: IWPTaxonomyInfo, termSet: Helper.ITerm) => void;

    /** The on render term sets event. */
    onRenderTermSets?: (wpInfo: IWPTaxonomyInfo, termSets: Array<Helper.ITermSetInfo>) => void;

    /** The on render term set terms event. */
    onRenderTermSetTerms?: (wpInfo: IWPTaxonomyInfo, terms: Array<Helper.ITermInfo>) => void;
}

/**
 * Taxonomy WebPart Configuration
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
 * Taxonomy WebPart Edit Form
 */
export interface IWPTaxonomyEditForm extends IWebPartEditForm<IWPTaxonomyCfg, IWPTaxonomyInfo> {
    /** The term group changed event. */
    onTermGroupChanged?: (wpInfo: IWPTaxonomyInfo, termGroupInfo?: ITermGroupInfo) => void;

    /** The term group loaded event. */
    onTermGroupsLoaded?: (wpInfo: IWPTaxonomyInfo, termGroups: Array<IDropdownItem>) => Array<IDropdownItem>;

    /** The term set changed event. */
    onTermSetChanged?: (wpInfo: IWPTaxonomyInfo, termSetInfo?: ITermInfo) => void;

    /** The term set loaded event. */
    onTermSetsLoaded?: (wpInfo: IWPTaxonomyInfo, termSets?: Array<IDropdownItem>) => Array<IDropdownItem>;

    /** The term set term changed event. */
    onTermSetTermChanged?: (wpInfo: IWPTaxonomyInfo, termInfo?: ITermInfo) => void;

    /** The term set terms loaded event. */
    onTermSetTermsLoaded?: (wpInfo: IWPTaxonomyInfo, terms?: Array<IDropdownItem>) => Array<IDropdownItem>;

    /** Flag to display the term set terms. */
    showTermSetTerms?: boolean;
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