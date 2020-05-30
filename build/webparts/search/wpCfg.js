"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gd_bs_1 = require("gd-bs");
var gd_sprest_1 = require("gd-sprest");
/**
 * Search WebPart Edit Form
 */
exports.WPSearchEditForm = function (props) {
    if (props === void 0) { props = {}; }
    var _wpInfo = null;
    // Method to render the fields
    var loadFields = function (list) {
        var formControls = [];
        var items = [];
        // Ensure the list exists
        if (list == null) {
            return formControls;
        }
        // Parse the fields
        var fields = (list.Fields ? list.Fields.results : null) || [];
        for (var i = 0; i < fields.length; i++) {
            var addField = false;
            var field = fields[i];
            // Add the field, based on the type
            switch (field.FieldTypeKind) {
                // Searchable Fields
                case gd_sprest_1.SPTypes.FieldType.Choice:
                case gd_sprest_1.SPTypes.FieldType.MultiChoice:
                case gd_sprest_1.SPTypes.FieldType.Lookup:
                case gd_sprest_1.SPTypes.FieldType.Text:
                case gd_sprest_1.SPTypes.FieldType.URL:
                case gd_sprest_1.SPTypes.FieldType.User:
                    addField = true;
                    break;
                default:
                    // Allow managed metadata fields
                    addField = /^TaxonomyFieldType/.test(field.TypeAsString);
                    break;
            }
            // See if we are adding the field
            if (addField) {
                items.push({
                    data: field.TypeAsString,
                    text: field.Title + " [" + field.InternalName + "]",
                    value: field.InternalName
                });
            }
        }
        // Sort the options
        items = items.sort(function (a, b) {
            if (a.text < b.text) {
                return -1;
            }
            if (a.text > b.text) {
                return 1;
            }
            return 0;
        });
        // See if fields exist
        var value = [];
        if (_wpInfo.cfg && _wpInfo.cfg.Fields) {
            // Parse the fields
            for (var i = 0; i < _wpInfo.cfg.Fields.length; i++) {
                // Add the field
                value.push(_wpInfo.cfg.Fields[i].name);
            }
        }
        // Add the form dropdown
        formControls.push({
            label: "Filter Field(s):",
            items: items,
            type: gd_bs_1.Components.FormControlTypes.MultiDropdown,
            onChange: function (items) {
                // Clear the fields
                _wpInfo.cfg.Fields = [];
                // Parse the options
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    // Add the field
                    _wpInfo.cfg.Fields.push({
                        name: item.value,
                        type: item.data
                    });
                }
            }
        });
        // Return the form controls
        return formControls;
    };
    // Set the list query
    var listQuery = props.listQuery || {};
    listQuery.Expand = listQuery.Expand || [];
    listQuery.Expand.push("Fields");
    // Return the edit panel
    return {
        actions: props.actions,
        listQuery: listQuery,
        onListsLoaded: props.onListsLoaded,
        onRenderForm: function (wpInfo, list) {
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Save the webpart information
                _wpInfo = wpInfo;
                // Load the fields
                var formControls = loadFields(list);
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
        },
        showSaveButton: props.showSaveButton,
        onListChanged: function (wpInfo, list) {
            // Render the fields
            return loadFields(list);
        },
        onSave: function (cfg, form) {
            // Update the configuration
            cfg.Fields = _wpInfo.cfg.Fields || [];
            // Return the configuration
            return props.onSave ? props.onSave(_wpInfo.cfg, form) : _wpInfo.cfg;
        }
    };
};
