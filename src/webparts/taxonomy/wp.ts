import { Helper } from "gd-sprest";
import { WebPart } from "../base/wp";
import { IWPTaxonomyInfo, IWPTaxonomyProps } from "./types";
import { WPTaxonomyEditForm } from "./wpCfg";

/**
 * Taxonomy WebPart
 */
export const WPTaxonomy = (props: IWPTaxonomyProps) => {
    // Create an instance of the webpart
    WebPart({
        cfgElementId: props.cfgElementId,
        className: props.className,
        editForm: WPTaxonomyEditForm(props.editForm || {}),
        elementId: props.elementId,
        helpProps: props.helpProps,
        onPostRender: props.onPostRender,
        onRenderEdit: props.onRenderEdit,
        wpClassName: props.wpClassName,
        onRenderDisplay: (wpInfo: IWPTaxonomyInfo) => {
            // See if the render term sets event exists
            if (props.onRenderTermSets && wpInfo.cfg.TermGroupName) {
                // Load the term group information
                Helper.Taxonomy.getTermSets(wpInfo.cfg.TermGroupName).then(termSets => {
                    // Call the render event
                    props.onRenderTermSets(wpInfo, termSets);
                });
            }

            // See if the term group and term set names exist
            if (wpInfo.cfg.TermGroupName && wpInfo.cfg.TermSetName) {
                // See if the render term set events exists
                if (props.onRenderTermSet || props.onRenderTermSetTerms) {
                    // Load the term set information
                    Helper.Taxonomy.getTermSetByGroupName(wpInfo.cfg.TermSetName, wpInfo.cfg.TermGroupName).then(termSet => {
                        // Call the term set render event
                        props.onRenderTermSet ? props.onRenderTermSet(wpInfo, termSet) : null;

                        // See if we are rendering term set terms
                        if (props.onRenderTermSetTerms) {
                            // See if a term set id exists
                            if (wpInfo.cfg.TermSetTermId) {
                                // Load the term set terms
                                let term = Helper.Taxonomy.findById(termSet, wpInfo.cfg.TermSetTermId);

                                // Call the term set terms render event
                                props.onRenderTermSetTerms(wpInfo, term ? Helper.Taxonomy.toArray(term) : []);
                            } else {
                                // Call the term set terms render event
                                props.onRenderTermSetTerms(wpInfo, Helper.Taxonomy.toArray(termSet));
                            }
                        }
                    });
                }
            }
        }
    });
}