import { Components } from "gd-bs";
import { Helper } from "gd-sprest";
import { Helper as WPHelper } from "../base/helper";
import { IWPTaxonomyInfo, IWPTaxonomyEditForm, IWPTaxonomyCfg } from "../types/wpTaxonomy";

/**
 * Taxonomy WebPart Edit Form
 */
export const WPTaxonomyEditForm = (props: IWPTaxonomyEditForm = {}): IWPTaxonomyEditForm => {
    let _termGroupItems: Array<Components.IDropdownItem> = [];
    let _termSetItems: Array<Components.IDropdownItem> = [];
    let _termSetTermsItems: Array<Components.IDropdownItem> = [];
    let _wpInfo: IWPTaxonomyInfo = null;

    // Method to generate the form controls
    let generateFormControls = (): Array<Components.IFormControlDropdown> => {
        let formControls: Array<Components.IFormControlDropdown> = [];

        // Add the term groups dropdown
        formControls.push({
            label: "Select the Term Group:",
            items: _termGroupItems,
            name: "TermGroupId",
            type: Components.FormControlTypes.Dropdown,
            onChange: (option: Components.IDropdownItem) => {
                // Set the configuration
                _wpInfo.cfg.TermGroupId = option ? option.value : "";
                _wpInfo.cfg.TermGroupName = option ? option.text : "";

                // Call the change event
                props.onTermGroupChanged ? props.onTermGroupChanged(_wpInfo, { id: _wpInfo.cfg.TermGroupId, name: _wpInfo.cfg.TermGroupName }) : null;

                // Load the term sets
                loadTermSets().then(() => {
                    // Render the edit form
                    WPHelper.renderEditForm(_wpInfo, generateFormControls());
                });
            }
        });

        // Ensure a term group is selected
        if (_wpInfo.cfg.TermGroupId) {
            // Add the term sets dropdown
            formControls.push({
                label: "Select a Term Set:",
                items: _termSetItems,
                name: "TermSetId",
                type: Components.FormControlTypes.Dropdown,
                onChange: (option: Components.IDropdownItem) => {
                    // Set the configuration
                    _wpInfo.cfg.TermSetId = option ? option.value : "";
                    _wpInfo.cfg.TermSetName = option ? option.text : "";

                    // Call the change event
                    props.onTermSetChanged ? props.onTermSetChanged(_wpInfo, { id: _wpInfo.cfg.TermSetId, name: _wpInfo.cfg.TermSetName }) : null;

                    // Load the term set terms
                    loadTermSetTerms().then(() => {
                        // Render the edit form
                        WPHelper.renderEditForm(_wpInfo, generateFormControls());
                    });
                }
            });

        }

        // Ensure we are rendering the term set terms and a term set is selected
        if (props.showTermSetTerms && _wpInfo.cfg.TermSetId) {
            // Add the term sets dropdown
            formControls.push({
                label: "Select a Term Set Term:",
                items: _termSetTermsItems,
                name: "TermSetTermId",
                type: Components.FormControlTypes.Dropdown,
                onChange: (option: Components.IDropdownItem) => {
                    // Set the configuration
                    _wpInfo.cfg.TermSetTermId = option ? option.value : "";
                    _wpInfo.cfg.TermSetTermName = option ? option.text : "";

                    // Call the change event
                    props.onTermSetTermChanged ? props.onTermSetTermChanged(_wpInfo, { id: _wpInfo.cfg.TermSetTermId, name: _wpInfo.cfg.TermSetTermName }) : null;
                }
            });
        }

        // Return the form controls
        return formControls;
    }

    // Method to load the term groups
    let loadTermGroups = (): PromiseLike<Array<Components.IFormControlDropdown>> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Load the term groups
            Helper.Taxonomy.getTermGroups().then(groups => {
                _termGroupItems = [{
                    text: "",
                    value: ""
                }];

                // Parse the groups
                for (let i = 0; i < groups.length; i++) {
                    // Add the item
                    _termGroupItems.push({
                        text: groups[i].name,
                        value: groups[i].id
                    });
                }

                // Load the term sets
                loadTermSets().then(() => {
                    // Resolve the promise
                    resolve(generateFormControls());
                });
            });
        });
    }

    // Method to load the term sets
    let loadTermSets = (): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // See if a term group exists
            if (_wpInfo.cfg.TermGroupName) {
                // Load the term sets
                Helper.Taxonomy.getTermSets(_wpInfo.cfg.TermGroupName).then(termSets => {
                    _termSetItems = [{
                        text: "",
                        value: ""
                    }];

                    // Parse the term sets
                    for (let i = 0; i < termSets.length; i++) {
                        // Add the item
                        _termSetItems.push({
                            text: termSets[i].name,
                            value: termSets[i].id
                        });
                    }

                    // Load the term set terms and resolve the promise
                    loadTermSetTerms().then(resolve);
                });
            } else {
                // Resolve the promise
                resolve();
            }
        });
    }

    // Method to load the term set terms
    let loadTermSetTerms = (): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Ensure we are displaying term set terms and a term set is selected
            if (props.showTermSetTerms && _wpInfo.cfg.TermSetId) {
                // Load the term set terms
                Helper.Taxonomy.getTermSetByGroupName(_wpInfo.cfg.TermSetName, _wpInfo.cfg.TermGroupName).then(termSet => {
                    _termSetTermsItems = [{
                        text: "",
                        value: ""
                    }];

                    // Get the term set terms
                    let terms = Helper.Taxonomy.toArray(termSet).sort((a, b) => {
                        if (a.name < b.name) { return -1; }
                        if (a.name > b.name) { return 1; }
                        return 0;
                    });

                    // Parse the term set terms
                    for (let i = 0; i < terms.length; i++) {
                        // Add the item
                        _termSetTermsItems.push({
                            text: terms[i].name,
                            value: terms[i].id
                        });
                    }

                    // Resolve the promise
                    resolve();
                });
            } else {
                // Resolve the promise
                resolve();
            }
        });
    }

    // Return the edit panel
    return {
        actions: props.actions,
        onRenderForm: (wpInfo) => {
            // Return a promise
            return new Promise((resolve, reject) => {
                // Save the webpart information
                _wpInfo = wpInfo;

                // Load the term groups
                loadTermGroups().then(formControls => {
                    // Call the render form event
                    let returnVal: any = props.onRenderForm ? props.onRenderForm(_wpInfo) : null;
                    if (returnVal) {
                        // See if this is a promise
                        if (returnVal.then) {
                            // Wait for the promise to complete
                            returnVal.then((controls = []) => {
                                // Add the form controls
                                formControls = formControls.concat(controls);

                                // Resolve the promise
                                resolve(formControls);
                            });
                        }
                        // Else, see if the form controls exist
                        else if (returnVal.length > 0) {
                            // Add the form controls
                            formControls = formControls.concat(returnVal);

                            // Resolve the promise
                            resolve(formControls);
                        }
                        // Else, resolve the promise
                        else { resolve(formControls); }
                    }
                    // Else, resolve the promise
                    else { resolve(formControls); }
                });
            });
        },
        onSave: (cfg: IWPTaxonomyCfg) => {
            // Update the configuration
            cfg.TermGroupId = _wpInfo.cfg.TermGroupId;
            cfg.TermGroupName = _wpInfo.cfg.TermGroupName;
            cfg.TermSetId = _wpInfo.cfg.TermSetId;
            cfg.TermSetName = _wpInfo.cfg.TermSetName;
            cfg.TermSetTermId = _wpInfo.cfg.TermSetTermId;
            cfg.TermSetTermName = _wpInfo.cfg.TermSetTermName;

            // Return the configuration
            return props.onSave ? props.onSave(_wpInfo.cfg) : _wpInfo.cfg;
        }
    };
}