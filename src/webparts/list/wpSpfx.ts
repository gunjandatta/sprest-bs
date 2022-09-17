import { Components } from "gd-bs";
import { Web } from "gd-sprest";
import { SPFxWebPart } from "../base";
import { ISPFxListWebPart, ISPFxListWebPartProps } from "./types";

/**
 * SPFx List WebPart
 */
export const WPSPFxList = (props: ISPFxListWebPartProps): ISPFxListWebPart => {
    let _ddl: Components.IDropdown = null;
    let _loadFl = false;

    // Load the lists
    let loadLists = () => {
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
                    value: list.Id
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
                    description: "The relative url to the site containing the target list."
                },
                {
                    name: "ListId",
                    label: "List",
                    type: Components.FormControlTypes.Dropdown,
                    required: true,
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
                    onClick: loadLists
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
                loadLists();
            }
        }
    };

    // Return the webpart
    let wp = SPFxWebPart({ ...props, ...baseProps });
    return wp;
}