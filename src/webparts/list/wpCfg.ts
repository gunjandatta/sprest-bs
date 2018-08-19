import { Types, Web } from "gd-sprest";
import { Dropdown, InputGroup } from "../../components";
import { IDropdownItem } from "../../components/types";
import { IWPListCfg, IWPListEditForm, IWPListInfo } from "../types";

/**
 * List WebPart Edit Form
 */
export const WPListEditForm = (props: IWPListEditForm = {}): IWPListEditForm => {
    let _elFooter: HTMLDivElement = null;
    let _elList: HTMLDivElement = null;
    let _elWebUrl: HTMLDivElement = null;
    let _lists: Array<Types.SP.IListQueryResult | Types.SP.IListResult> = null;
    let _wpInfo: IWPListInfo = null;

    // Method to load the lists
    let loadLists = (webUrl?: string) => {
        // Set the query
        let query: Types.SP.ODataQuery = props.listQuery || {};

        // Render a loading message
        _elList.innerHTML = "Loading the lists...";

        // Get the web
        Web(webUrl)
            // Get the lists
            .Lists()
            // Include the fields
            .query(query)
            // Execute the request
            .execute(lists => {
                // Save the lists
                _lists = lists.results;

                // Call the list rendering event
                _lists = (props.onListsRendering ? props.onListsRendering(_wpInfo, _lists) : null) || _lists;

                // Render the list dropdown
                renderListDDL();
            });
    }

    // Method to render the configuration
    let renderConfiguration = (el: HTMLDivElement, wpInfo: IWPListInfo) => {
        // Render the panel contents
        el.innerHTML = [
            '<div></div>',
            '<div></div>'
        ].join('\n');
        _elWebUrl = el.children[0] as any;
        _elList = el.children[1] as any;

        // Render the web url textbox
        let webUrl = _wpInfo && _wpInfo.cfg ? _wpInfo.cfg.WebUrl : "";
        InputGroup({
            el: _elWebUrl,
            label: "Relative Web Url:",
            //description: "The web containing the list. If blank, the current web is used.",
            value: webUrl,
            /*
            onChange: (value) => {
                // Update the configuration
                _wpInfo.cfg.WebUrl = value;
            }
            */
        });

        // Load the lists
        loadLists(webUrl);
    };

    // Method to render the lists dropdown
    let renderListDDL = () => {
        let selectedList = null;
        let items: Array<IDropdownItem> = [];

        // Parse the lists
        for (let i = 0; i < _lists.length; i++) {
            let list = _lists[i];

            // Add the item
            items.push({
                text: list.Title,
                value: list.Title
            });

            // See if this is the selected list
            if (list.Title == _wpInfo.cfg.ListName) {
                // Select this list
                selectedList = list;
            }
        }

        // Render the dropdown
        let ddl = Dropdown({
            el: _elList,
            label: "List:",
            items,
            value: _wpInfo && _wpInfo.cfg ? _wpInfo.cfg.ListName : null
            /*
            onChange: (options: Array<IDropdownItem>) => {
                let option = options[0];
                if (option) {
                    // Parse the list
                    for (let i = 0; i < _lists.length; i++) {
                        let list = _lists[i];

                        // See if this is the target list
                        if (list.Title == option.text) {
                            // Update the configuration
                            _wpInfo.cfg.ListName = option.value;

                            // Call the change event
                            props.onListChanged ? props.onListChanged(_wpInfo, list) : null;
                            break;
                        }
                    }
                }
            }
            */
        });

        // Call the render footer event
        props.onRenderFooter ? props.onRenderFooter(_elFooter, _wpInfo, selectedList) : null;
    }

    /*
    // Create the menu commands
    let menuLeftCommands: Array<Fabric.Types.ICommandButtonProps> = [
        {
            icon: "Refresh",
            text: "Refresh",
            onClick: () => {
                // Load the lists
                loadLists(_wpInfo.cfg.WebUrl);
            }
        }
    ];

    // See if custom commands exist
    if (props.menuLeftCommands) {
        // Add the custom commands
        menuLeftCommands = menuLeftCommands.concat(props.menuLeftCommands);
    }
    */

    // Return the edit panel
    return {
        /*
        menuLeftCommands,
        menuRightCommands: props.menuRightCommands,
        */
        onRenderHeader: props.onRenderHeader,
        showSaveButton: props.showSaveButton,
        onRenderFooter: (el, wpInfo) => {
            // Save the webpart information
            _wpInfo = wpInfo;

            // Render the template
            el.innerHTML = "<div></div><div></div>";
            _elFooter = el.children[1] as any;

            // Render the configuration
            renderConfiguration(el.children[0] as any, wpInfo);
        },
        onSave: (cfg: IWPListCfg) => {
            // Update the configuration
            cfg.ListName = _wpInfo.cfg.ListName;
            cfg.WebUrl = _wpInfo.cfg.WebUrl;

            // Return the configuration
            return props.onSave ? props.onSave(_wpInfo.cfg) : _wpInfo.cfg;
        }
    };
}