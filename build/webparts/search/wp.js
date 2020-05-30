"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wp_1 = require("../list/wp");
var wpCfg_1 = require("./wpCfg");
/**
 * Search WebPart
 */
exports.WPSearch = function (props) {
    var _items = [];
    var _wpInfo;
    // Create the webpart and return it
    var _wp = wp_1.WPList({
        camlQuery: props.camlQuery,
        cfgElementId: props.cfgElementId,
        className: props.className,
        editForm: wpCfg_1.WPSearchEditForm(props.editForm),
        elementId: props.elementId,
        helpProps: props.helpProps,
        odataQuery: props.odataQuery,
        wpClassName: props.wpClassName,
        onExecutingODATAQuery: function (wpInfo, query) {
            // Default the query
            query = (props.onExecutingODATAQuery ? props.onExecutingODATAQuery(wpInfo, query) : query) || {};
            query.Expand = query.Expand || [];
            query.Select = query.Select || ["*"];
            // Ensure the configuration exists
            if (wpInfo.cfg) {
                var hasTaxonomyField = false;
                // Parse the fields
                var fields = (wpInfo.cfg.Fields || []).concat(props.searchFields || []);
                for (var i = 0; i < fields.length; i++) {
                    var field = fields[i];
                    // Add the field, based on the type
                    switch (field.type) {
                        // Lookup
                        case "Lookup":
                        case "LookupMulti":
                            // Add the field
                            query.Expand.push(field.name);
                            query.Select.push(field.name + "/Title");
                            break;
                        // Taxonomy
                        case "TaxonomyFieldType":
                        case "TaxonomyFieldTypeMulti":
                            // Set the flag
                            hasTaxonomyField = true;
                            // Add the field
                            query.Select.push(field.name);
                            break;
                        // User
                        case "User":
                            // Add the field
                            query.Expand.push(field.name);
                            query.Select.push(field.name + "/Title");
                            break;
                        // Default
                        default:
                            query.Select.push(field.name);
                            break;
                    }
                }
                // See if there is a taxonomy field
                if (hasTaxonomyField) {
                    // Get the taxonomy field values
                    query.Expand.push("TaxCatchAll");
                    query.Select.push("TaxCatchAll/ID", "TaxCatchAll/Term");
                }
            }
            // Return the query
            return query;
        },
        onRenderItems: function (wpInfo, items) {
            // Save the wpinfo and items
            _wpInfo = wpInfo;
            _items = items;
            // Call the custom event
            props.onRenderItems ? props.onRenderItems(wpInfo, items) : null;
        }
    });
    // Set the filter method
    _wp.filterItems = function (filterText) {
        var results = [];
        // Ensure the filter exists
        if (filterText && filterText.length > 0) {
            // Update the filter
            filterText = filterText.toLowerCase();
            var fields = ((_wpInfo.cfg ? _wpInfo.cfg.Fields : null) || []).concat(props.searchFields || []);
            // Parse the items
            for (var i = 0; i < _items.length; i++) {
                var item = _items[i];
                var addToResults = false;
                // Set the taxonomy mapper
                var mapper = item["TaxCatchAll"];
                mapper = (mapper ? mapper.results : null) || [];
                // Parse the fields
                for (var j = 0; j < fields.length; j++) {
                    var field = fields[j];
                    // Get the field value(s)
                    var fieldValues = item[field.name];
                    if (fieldValues) {
                        fieldValues = fieldValues.results ? fieldValues.results : [fieldValues];
                        // Parse the field values
                        for (var k = 0; k < fieldValues.length; k++) {
                            var fieldValue = fieldValues[k];
                            // Ensure the field value exists
                            if (fieldValue) {
                                // Update the value, based on the type
                                switch (field.type) {
                                    // Lookup
                                    case "Lookup":
                                    case "LookupMulti":
                                        // Set the value
                                        fieldValue = fieldValue.Title;
                                        break;
                                    // Taxonomy
                                    case "TaxonomyFieldType":
                                    case "TaxonomyFieldTypeMulti":
                                        // Parse the mapper
                                        for (var i_1 = 0; i_1 < mapper.length; i_1++) {
                                            // See if this is the target id
                                            if (mapper[i_1].ID == fieldValue.WssId) {
                                                // Set the value
                                                fieldValue = mapper[i_1].Term;
                                            }
                                        }
                                        break;
                                    // URL
                                    case "URL":
                                        // Set the value
                                        fieldValue = fieldValue.Description;
                                        break;
                                    // User
                                    case "User":
                                        // Set the value
                                        fieldValue = fieldValue.Title;
                                        break;
                                }
                                // See if the item contains the filter
                                if (fieldValue && fieldValue.toLowerCase().indexOf(filterText) >= 0) {
                                    // Set the flag
                                    addToResults = true;
                                    break;
                                }
                            }
                        }
                        // See if we are adding this item to the results
                        if (addToResults) {
                            // Add the item
                            results.push(item);
                            // Break from the loop
                            break;
                        }
                    }
                }
            }
        }
        else {
            // Copy the items
            results = _items;
        }
        // Return the results
        return results;
    };
    // Return the webpart
    return _wp;
};
