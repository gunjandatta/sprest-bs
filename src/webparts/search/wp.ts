import { Types } from "gd-sprest";
import { WPList } from "../list/wp";
import { IWPSearch, IWPSearchInfo, IWPSearchProps } from "./types";
import { WPSearchEditForm } from "./wpCfg";

/**
 * Search WebPart
 */
export const WPSearch = (props: IWPSearchProps): IWPSearch => {
    let _items: Array<Types.SP.IListItemQuery | Types.SP.ListItem> = [];
    let _wpInfo: IWPSearchInfo;

    // Create the webpart and return it
    let _wp: IWPSearch = WPList({
        camlQuery: props.camlQuery,
        cfgElementId: props.cfgElementId,
        className: props.className,
        editForm: WPSearchEditForm(props.editForm),
        elementId: props.elementId,
        helpProps: props.helpProps,
        odataQuery: props.odataQuery,
        wpClassName: props.wpClassName,
        onExecutingODATAQuery: (wpInfo: IWPSearchInfo, query) => {
            // Default the query
            query = (props.onExecutingODATAQuery ? props.onExecutingODATAQuery(wpInfo, query) : query) || {};
            query.Expand = query.Expand || [];
            query.Select = query.Select || ["*"];

            // Ensure the configuration exists
            if (wpInfo.cfg) {
                let hasTaxonomyField = false;

                // Parse the fields
                let fields = (wpInfo.cfg.Fields || []).concat(props.searchFields || []);
                for (let i = 0; i < fields.length; i++) {
                    let field = fields[i];

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
        onRenderItems: (wpInfo: IWPSearchInfo, items) => {
            // Save the wpinfo and items
            _wpInfo = wpInfo;
            _items = items;

            // Call the custom event
            props.onRenderItems ? props.onRenderItems(wpInfo, items) : null;
        }
    }) as any;

    // Set the filter method
    _wp.filterItems = (filterText: string): Array<Types.SP.IListItemQuery | Types.SP.ListItem> => {
        let results: Array<Types.SP.IListItemQuery | Types.SP.ListItem> = [];

        // Ensure the filter exists
        if (filterText && filterText.length > 0) {
            // Update the filter
            filterText = filterText.toLowerCase();

            let fields = ((_wpInfo.cfg ? _wpInfo.cfg.Fields : null) || []).concat(props.searchFields || []);

            // Parse the items
            for (let i = 0; i < _items.length; i++) {
                let item = _items[i];
                let addToResults = false;

                // Set the taxonomy mapper
                let mapper = item["TaxCatchAll"];
                mapper = (mapper ? mapper.results : null) || [];

                // Parse the fields
                for (let j = 0; j < fields.length; j++) {
                    let field = fields[j];

                    // Get the field value(s)
                    let fieldValues = item[field.name];
                    if (fieldValues) {
                        fieldValues = fieldValues.results ? fieldValues.results : [fieldValues];

                        // Parse the field values
                        for (let k = 0; k < fieldValues.length; k++) {
                            let fieldValue = fieldValues[k];

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
                                        for (let i = 0; i < mapper.length; i++) {
                                            // See if this is the target id
                                            if (mapper[i].ID == fieldValue.WssId) {
                                                // Set the value
                                                fieldValue = mapper[i].Term;
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
        } else {
            // Copy the items
            results = _items;
        }

        // Return the results
        return results;
    }

    // Return the webpart
    return _wp;
}