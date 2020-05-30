"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gd_sprest_1 = require("gd-sprest");
var wp_1 = require("../base/wp");
var wpCfg_1 = require("./wpCfg");
/**
 * Taxonomy WebPart
 */
exports.WPTaxonomy = function (props) {
    // Create an instance of the webpart
    wp_1.WebPart({
        cfgElementId: props.cfgElementId,
        className: props.className,
        editForm: wpCfg_1.WPTaxonomyEditForm(props.editForm || {}),
        elementId: props.elementId,
        helpProps: props.helpProps,
        onPostRender: props.onPostRender,
        onRenderEdit: props.onRenderEdit,
        wpClassName: props.wpClassName,
        onRenderDisplay: function (wpInfo) {
            // See if the render term sets event exists
            if (props.onRenderTermSets && wpInfo.cfg.TermGroupName) {
                // Load the term group information
                gd_sprest_1.Helper.Taxonomy.getTermSets(wpInfo.cfg.TermGroupName).then(function (termSets) {
                    // Call the render event
                    props.onRenderTermSets(wpInfo, termSets);
                });
            }
            // See if the term group and term set names exist
            if (wpInfo.cfg.TermGroupName && wpInfo.cfg.TermSetName) {
                // See if the render term set events exists
                if (props.onRenderTermSet || props.onRenderTermSetTerms) {
                    // Load the term set information
                    gd_sprest_1.Helper.Taxonomy.getTermSetByGroupName(wpInfo.cfg.TermSetName, wpInfo.cfg.TermGroupName).then(function (termSet) {
                        // Call the term set render event
                        props.onRenderTermSet ? props.onRenderTermSet(wpInfo, termSet) : null;
                        // See if we are rendering term set terms
                        if (props.onRenderTermSetTerms) {
                            // See if a term set id exists
                            if (wpInfo.cfg.TermSetTermId) {
                                // Load the term set terms
                                var term = gd_sprest_1.Helper.Taxonomy.findById(termSet, wpInfo.cfg.TermSetTermId);
                                // Call the term set terms render event
                                props.onRenderTermSetTerms(wpInfo, term ? gd_sprest_1.Helper.Taxonomy.toArray(term) : []);
                            }
                            else {
                                // Call the term set terms render event
                                props.onRenderTermSetTerms(wpInfo, gd_sprest_1.Helper.Taxonomy.toArray(termSet));
                            }
                        }
                    });
                }
            }
        }
    });
};
