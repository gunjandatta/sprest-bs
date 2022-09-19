import { Components } from "gd-bs";
import { Web } from "gd-sprest";
import { SPFxWebPart } from "../base";
import { ISPFxListWebPart, ISPFxListWebPartProps, ISPFxListWebPartCfg } from "./types";

/**
 * SPFx List WebPart
 */
export const SPFxListWebPart = (wpProps: ISPFxListWebPartProps): ISPFxListWebPart => {
    let _ddl: Components.IDropdown = null;
    let _loadFl = false;

    // Load the lists
    let loadLists = (listId?: string) => {
        // Disable the dropdown
        _ddl.disable();

        // Get the web url
        let webUrl = wp.Form.getValues()["WebUrl"];

        // Load the lists
        Web(webUrl).Lists().query({
            OrderBy: ["Title"]
        }).execute(items => {
            let lists: Components.IDropdownItem[] = [];

            // Set the flag
            _loadFl = true;

            // Parse the lists
            for (let i = 0; i < items.results.length; i++) {
                let list = items.results[i];

                // Add the item
                lists.push({
                    data: list,
                    text: list.Title,
                    value: list.Id,
                    isSelected: listId == list.Id
                });
            }

            // Set the dropdown
            _ddl.setItems(lists);

            // Enable the dropdown
            _ddl.enable();
        });
    }


    // Define the properties
    let baseProps: ISPFxListWebPartProps = {
        // Set the form properties
        onEditFormRendering: props => {
            // Set the controls
            props.controls = [
                {
                    name: "WebUrl",
                    label: "Web Url",
                    type: Components.FormControlTypes.TextField,
                    description: "The relative url to the site containing the target list.",
                    value: wp.Configuration ? (wp.Configuration as ISPFxListWebPartCfg).WebUrl : null
                },
                {
                    name: "List",
                    label: "List",
                    type: Components.FormControlTypes.Dropdown,
                    required: true,
                    value: wp.Configuration ? (wp.Configuration as ISPFxListWebPartCfg).ListId : null,
                    onControlRendered: ctrl => {
                        // Set the dropdown
                        _ddl = ctrl.dropdown;
                    }
                }
            ]

            // Return the properties
            return props;
        },

        // Footer rendering event
        onEditFormFooterRendering: props => {
            // Add a load lists button
            props.tooltips.push({
                content: "Loads the lists.",
                btnProps: {
                    text: "Load Lists",
                    type: Components.ButtonTypes.OutlinePrimary,
                    onClick: () => { loadLists(); }
                }
            });

            // Return the properties
            return props;
        },

        // Modal displaying event
        onEditFormDisplaying: () => {
            // See if the lists haven't been loaded
            if (_loadFl == false) {
                // Load the lists
                loadLists(wp.Configuration ? (wp.Configuration as ISPFxListWebPartCfg).ListId : null);
            }
        },

        // The configuration saving event
        onConfigSaving: (cfg: ISPFxListWebPartCfg) => {
            // Get the form values
            let values = wp.Form.getValues();

            // Set the configuration
            let listItem: Components.IDropdownItem = values["List"];
            cfg.ListId = listItem ? listItem.value : null;
            cfg.ListName = listItem ? listItem.text : null;
            cfg.WebUrl = values["WebUrl"];

            // Return the configuration
            return cfg;
        }
    };

    // Return the webpart
    let wp = SPFxWebPart({ ...wpProps, ...baseProps });
    return wp;
}