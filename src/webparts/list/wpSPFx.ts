import { Components } from "gd-bs";
import { Types, Web } from "gd-sprest";
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
        onConfigFormRendering: props => {
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
                } as Components.IFormControlPropsDropdown
            ];

            // Call the base event
            props = wpProps.onConfigFormRendering ? wpProps.onConfigFormRendering(props) : props;

            // Return the properties
            return props;
        },

        // Footer rendering event
        onConfigFormFooterRendering: props => {
            // Add a load lists button
            props.tooltips.push({
                content: "Loads the lists.",
                btnProps: {
                    text: "Load Lists",
                    type: Components.ButtonTypes.OutlinePrimary,
                    onClick: () => { loadLists(); }
                }
            });

            // Call the base event
            props = wpProps.onConfigFormFooterRendering ? wpProps.onConfigFormFooterRendering(props) : props;

            // Return the properties
            return props;
        },

        // Modal displaying event
        onConfigFormDisplaying: () => {
            // See if the lists haven't been loaded
            if (_loadFl == false) {
                // Load the lists
                loadLists(wp.Configuration ? (wp.Configuration as ISPFxListWebPartCfg).ListId : null);
            }

            // Call the base event
            wpProps.onConfigFormDisplaying ? wpProps.onConfigFormDisplaying() : null;
        },

        // The configuration saving event
        onConfigSaving: (cfg: ISPFxListWebPartCfg) => {
            // Get the form values
            let values = wp.Form.getValues();

            // Set the configuration
            let listItem: Components.IDropdownItem = values["List"];
            cfg = {
                ListId: listItem ? listItem.value : null,
                ListName: listItem ? listItem.text : null,
                WebUrl: values["WebUrl"]
            }

            // Call the base event
            cfg = wpProps.onConfigSaving ? wpProps.onConfigSaving(cfg) : cfg;

            // Return the configuration
            return cfg;
        },

        // The render items event
        renderItems: (el, cfg) => {
            // See if a render event exists
            if (wpProps.renderItems == null) { return; }

            // Set the list
            let list = Web(cfg.WebUrl).Lists().getById(cfg.ListId);

            // Ensure the list exists
            if (cfg.ListId) {
                // See if we are doing a caml query
                if (wpProps.onListItemCAMLQuery) {
                    // Set the CAML query
                    let camlQuery = wpProps.onListItemCAMLQuery(cfg, "");

                    // Get the list items
                    list.getItemsByQuery(camlQuery).execute(
                        // Success
                        items => {
                            // Call the event
                            wpProps.renderItems(el, cfg, items.results);
                        },

                        err => {
                            // Call the event
                            wpProps.renderItems(el, cfg, []);
                        }
                    )
                } else {
                    // Set the ODATA query
                    let odata: Types.IODataQuery = wpProps.onListItemODataQuery ? wpProps.onListItemODataQuery(cfg, {}) : null;

                    // See if we are making an ODATA query
                    if (odata) {
                        // Get the list items
                        list.Items().query(odata).execute(
                            // Success
                            items => {
                                // Call the event
                                wpProps.renderItems(el, cfg, items.results);
                            },

                            // Error
                            err => {
                                // Call the event
                                wpProps.renderItems(el, cfg, []);
                            }
                        );
                    } else {
                        // Get the list items
                        list.Items().execute(
                            // Success
                            items => {
                                // Call the event
                                wpProps.renderItems(el, cfg, items.results);
                            },

                            // Error
                            err => {
                                // Call the event
                                wpProps.renderItems(el, cfg, []);
                            }
                        )
                    }
                }
            }
        }
    };

    // Return the webpart
    let wp = SPFxWebPart({ ...wpProps, ...baseProps });
    return wp;
}