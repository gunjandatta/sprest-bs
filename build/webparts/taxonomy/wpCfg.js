"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gd_bs_1 = require("gd-bs");
var gd_sprest_1 = require("gd-sprest");
/**
 * Taxonomy WebPart Edit Form
 */
exports.WPTaxonomyEditForm = function (props) {
    if (props === void 0) { props = {}; }
    var _ddlTermSet;
    var _ddlTerm;
    var _termGroupItems = [];
    var _termSetItems = [];
    var _termSetTermsItems = [];
    var _wpInfo = null;
    // Method to generate the form controls
    var generateFormControls = function () {
        var formControls = [];
        // Add the term groups dropdown
        formControls.push({
            label: "Select the Term Group:",
            items: _termGroupItems,
            name: "TermGroupId",
            type: gd_bs_1.Components.FormControlTypes.Dropdown,
            value: _wpInfo.cfg.TermGroupId,
            onChange: function (option) {
                // Clear the dropdowns
                _termSetItems = [];
                _termSetTermsItems = [];
                _ddlTermSet.setItems([]);
                _ddlTerm ? _ddlTerm.setItems([]) : null;
                // Update the configuration
                _wpInfo.cfg.TermGroupId = option ? option.value : "";
                _wpInfo.cfg.TermGroupName = option ? option.text : "";
                _wpInfo.cfg.TermSetId = "";
                _wpInfo.cfg.TermSetName = "";
                _wpInfo.cfg.TermSetTermId = "";
                _wpInfo.cfg.TermSetTermName = "";
                // Call the change event
                props.onTermGroupChanged ? props.onTermGroupChanged(_wpInfo, { id: _wpInfo.cfg.TermGroupId, name: _wpInfo.cfg.TermGroupName }) : null;
                // Load the term sets
                loadTermSets().then(function () {
                    // Render the child dropdowns
                    _ddlTermSet.setItems(_termSetItems);
                });
            }
        });
        // Add the term sets dropdown
        formControls.push({
            label: "Select a Term Set:",
            items: _termSetItems,
            name: "TermSetId",
            type: gd_bs_1.Components.FormControlTypes.Dropdown,
            value: _wpInfo.cfg.TermSetId,
            onControlRendered: function (control) {
                // Save a reference to the dropdown
                _ddlTermSet = control.dropdown;
            },
            onChange: function (option) {
                // Clear the dropdown
                _termSetTermsItems = [];
                _ddlTerm ? _ddlTerm.setItems([]) : null;
                // Update the configuration
                _wpInfo.cfg.TermSetId = option ? option.value : "";
                _wpInfo.cfg.TermSetName = option ? option.text : "";
                _wpInfo.cfg.TermSetTermId = "";
                _wpInfo.cfg.TermSetTermName = "";
                // Call the change event
                props.onTermSetChanged ? props.onTermSetChanged(_wpInfo, { id: _wpInfo.cfg.TermSetId, name: _wpInfo.cfg.TermSetName }) : null;
                // See if we are loading the terms
                if (props.showTermSetTerms) {
                    // Load the term set terms
                    loadTermSetTerms().then(function () {
                        // Render the child dropdowns
                        _ddlTerm.setItems(_termSetTermsItems);
                    });
                }
            }
        });
        // Ensure we are rendering the term set terms
        if (props.showTermSetTerms) {
            // Add the term set terms dropdown
            formControls.push({
                label: "Select a Term Set Term:",
                items: _termSetTermsItems,
                name: "TermSetTermId",
                type: gd_bs_1.Components.FormControlTypes.Dropdown,
                value: _wpInfo.cfg.TermSetTermId,
                onControlRendered: function (control) {
                    // Save a reference to the dropdown
                    _ddlTerm = control.dropdown;
                },
                onChange: function (option) {
                    // Update the configuration
                    _wpInfo.cfg.TermSetTermId = option ? option.value : "";
                    _wpInfo.cfg.TermSetTermName = option ? option.text : "";
                    // Call the change event
                    props.onTermSetTermChanged ? props.onTermSetTermChanged(_wpInfo, { id: _wpInfo.cfg.TermSetTermId, name: _wpInfo.cfg.TermSetTermName }) : null;
                }
            });
        }
        // Return the form controls
        return formControls;
    };
    // Method to load the term groups
    var loadTermGroups = function () {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Load the term groups
            gd_sprest_1.Helper.Taxonomy.getTermGroups().then(function (groups) {
                _termGroupItems = [{
                        text: "",
                        value: ""
                    }];
                // Parse the groups
                for (var i = 0; i < groups.length; i++) {
                    // Add the item
                    _termGroupItems.push({
                        text: groups[i].name,
                        value: groups[i].id
                    });
                }
                // Load the term sets
                loadTermSets().then(function () {
                    // Execute the term groups loaded event
                    _termGroupItems = props.onTermGroupsLoaded ? props.onTermGroupsLoaded(_wpInfo, _termGroupItems) : _termGroupItems;
                    // Resolve the promise
                    resolve(generateFormControls());
                });
            });
        });
    };
    // Method to load the term sets
    var loadTermSets = function () {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // See if a term group exists
            if (_wpInfo.cfg.TermGroupName) {
                // Load the term sets
                gd_sprest_1.Helper.Taxonomy.getTermSets(_wpInfo.cfg.TermGroupName).then(function (termSets) {
                    _termSetItems = [{
                            text: "",
                            value: ""
                        }];
                    // Parse the term sets
                    for (var i = 0; i < termSets.length; i++) {
                        // Add the item
                        _termSetItems.push({
                            text: termSets[i].name,
                            value: termSets[i].id
                        });
                    }
                    // Load the term set terms and resolve the promise
                    loadTermSetTerms().then(function () {
                        // Execute the term sets loaded event
                        _termSetItems = props.onTermSetsLoaded ? props.onTermSetsLoaded(_wpInfo, _termSetItems) : _termSetItems;
                        // Resolve the promise
                        resolve();
                    });
                });
            }
            else {
                // Resolve the promise
                resolve();
            }
        });
    };
    // Method to load the term set terms
    var loadTermSetTerms = function () {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Ensure we are displaying term set terms and a term set is selected
            if (props.showTermSetTerms && _wpInfo.cfg.TermSetId) {
                // Load the term set terms
                gd_sprest_1.Helper.Taxonomy.getTermSetByGroupName(_wpInfo.cfg.TermSetName, _wpInfo.cfg.TermGroupName).then(function (termSet) {
                    _termSetTermsItems = [{
                            text: "",
                            value: ""
                        }];
                    // Get the term set terms
                    var terms = gd_sprest_1.Helper.Taxonomy.toArray(termSet).sort(function (a, b) {
                        if (a.name < b.name) {
                            return -1;
                        }
                        if (a.name > b.name) {
                            return 1;
                        }
                        return 0;
                    });
                    // Parse the term set terms
                    for (var i = 0; i < terms.length; i++) {
                        // Add the item
                        _termSetTermsItems.push({
                            text: terms[i].name,
                            value: terms[i].id
                        });
                    }
                    // Execute the term sets loaded event
                    _termSetTermsItems = props.onTermSetTermsLoaded ? props.onTermSetTermsLoaded(_wpInfo, _termSetTermsItems) : _termSetTermsItems;
                    // Resolve the promise
                    resolve();
                });
            }
            else {
                // Resolve the promise
                resolve();
            }
        });
    };
    // Return the edit panel
    return {
        actions: props.actions,
        onRenderForm: function (wpInfo) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Save the webpart information
                _wpInfo = wpInfo;
                // Load the term groups
                loadTermGroups().then(function (formControls) {
                    // Call the render form event
                    var returnVal = props.onRenderForm ? props.onRenderForm(_wpInfo) : null;
                    if (returnVal) {
                        // See if this is a promise
                        if (returnVal.then) {
                            // Wait for the promise to complete
                            returnVal.then(function (controls) {
                                if (controls === void 0) { controls = []; }
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
                        else {
                            resolve(formControls);
                        }
                    }
                    // Else, resolve the promise
                    else {
                        resolve(formControls);
                    }
                });
            });
        },
        onSave: function (cfg, form) {
            // Update the configuration
            cfg.TermGroupId = _wpInfo.cfg.TermGroupId;
            cfg.TermGroupName = _wpInfo.cfg.TermGroupName;
            cfg.TermSetId = _wpInfo.cfg.TermSetId;
            cfg.TermSetName = _wpInfo.cfg.TermSetName;
            cfg.TermSetTermId = _wpInfo.cfg.TermSetTermId;
            cfg.TermSetTermName = _wpInfo.cfg.TermSetTermName;
            // Return the configuration
            return props.onSave ? props.onSave(_wpInfo.cfg, form) : _wpInfo.cfg;
        }
    };
};
