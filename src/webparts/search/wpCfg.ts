import { SPTypes, Types } from "gd-sprest";
import { IDropdownItem } from "../../components/types/dropdown";
import { FormControlTypes } from "../../components/form";
import { IFormControlDropdown } from "../../components/types/form";
import { IWPSearchCfg, IWPSearchEditForm, IWPSearchInfo } from "../types/wpSearch";

/**
 * Search WebPart Edit Form
 */
export const WPSearchEditForm = (props: IWPSearchEditForm = {}): IWPSearchEditForm => {
    let _wpInfo: IWPSearchInfo = null;

    // Method to render the fields
    let loadFields = (list: Types.SP.IListQueryResult) => {
        let formControls: Array<IFormControlDropdown> = [];
        let items: Array<IDropdownItem> = [];

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
                    addField = field.TypeAsString.startsWith("TaxonomyFieldType");
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
            type: FormControlTypes.MultiDropdown,
            onChange: (items: Array<IDropdownItem>) => {
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
    let listQuery: Types.SP.ODataQuery = props.listQuery || {};
    listQuery.Expand = listQuery.Expand || [];
    listQuery.Expand.push("Fields");

    // Return the edit panel
    return {
        actions: props.actions,
        listQuery,
        onListsRendering: props.onListsRendering,
        onRenderForm: (wpInfo, list: Types.SP.IListQueryResult) => {
            // Save the webpart information
            _wpInfo = wpInfo;

            // Load the fields
            return loadFields(list);
        },
        showSaveButton: props.showSaveButton,
        onListChanged: (wpInfo: IWPSearchInfo, list: Types.SP.IListQueryResult) => {
            // Render the fields
            return loadFields(list);
        },
        onSave: (cfg: IWPSearchCfg) => {
            // Update the configuration
            cfg.Fields = _wpInfo.cfg.Fields || [];

            // Return the configuration
            return props.onSave ? props.onSave(_wpInfo.cfg) : _wpInfo.cfg;
        }
    }
}