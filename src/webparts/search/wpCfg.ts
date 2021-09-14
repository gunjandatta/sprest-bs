import { Components } from "gd-bs";
import { SPTypes, Types } from "gd-sprest";
import { IWPSearchCfg, IWPSearchEditForm, IWPSearchInfo } from "./types";

/**
 * Search WebPart Edit Form
 */
export const WPSearchEditForm = (props: IWPSearchEditForm = {}): IWPSearchEditForm => {
    let _wpInfo: IWPSearchInfo = null;

    // Method to render the fields
    let loadFields = (list: Types.SP.IListQuery) => {
        let formControls: Array<Components.IFormControlPropsMultiDropdown> = [];
        let items: Array<Components.IDropdownItem> = [];

        // Ensure the list exists
        if (list == null) { return formControls; }

        // Parse the fields
        let fields = (list.Fields ? list.Fields.results : null) || [];
        for (let i = 0; i < fields.length; i++) {
            let addField = false;
            let field = fields[i];

            // Add the field, based on the type
            switch (field.FieldTypeKind) {
                // Searchable Fields
                case SPTypes.FieldType.Choice:
                case SPTypes.FieldType.MultiChoice:
                case SPTypes.FieldType.Lookup:
                case SPTypes.FieldType.Text:
                case SPTypes.FieldType.URL:
                case SPTypes.FieldType.User:
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
        items = items.sort((a, b) => {
            if (a.text < b.text) { return -1; }
            if (a.text > b.text) { return 1; }
            return 0;
        });

        // See if fields exist
        let value = [];
        if (_wpInfo.cfg && _wpInfo.cfg.Fields) {
            // Parse the fields
            for (let i = 0; i < _wpInfo.cfg.Fields.length; i++) {
                // Add the field
                value.push(_wpInfo.cfg.Fields[i].name);
            }
        }

        // Add the form dropdown
        formControls.push({
            label: "Filter Field(s):",
            items,
            type: Components.FormControlTypes.MultiDropdown,
            onChange: (items: Array<Components.IDropdownItem>) => {
                // Clear the fields
                _wpInfo.cfg.Fields = [];

                // Parse the options
                for (let i = 0; i < items.length; i++) {
                    let item = items[i];

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
    }

    // Set the list query
    let listQuery: Types.IODataQuery = props.listQuery || {};
    listQuery.Expand = listQuery.Expand || [];
    listQuery.Expand.push("Fields");

    // Return the edit panel
    return {
        actions: props.actions,
        listQuery,
        onListsLoaded: props.onListsLoaded,
        onRenderForm: (wpInfo, list: Types.SP.IListQuery) => {
            // Return a promise
            return new Promise((resolve, reject) => {
                // Save the webpart information
                _wpInfo = wpInfo;

                // Load the fields
                let formControls = loadFields(list);

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
        },
        showSaveButton: props.showSaveButton,
        onListChanged: (wpInfo: IWPSearchInfo, list: Types.SP.IListQuery) => {
            // Render the fields
            return loadFields(list);
        },
        onSave: (cfg: IWPSearchCfg, form) => {
            // Update the configuration
            cfg.Fields = _wpInfo.cfg.Fields || [];

            // Return the configuration
            return props.onSave ? props.onSave(_wpInfo.cfg, form) : _wpInfo.cfg;
        }
    }
}