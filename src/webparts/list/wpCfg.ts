import { Components } from "gd-bs";
import { Types, Web } from "gd-sprest";
import { IWPListCfg, IWPListEditForm, IWPListInfo } from "./types";

/**
 * List WebPart Edit Form
 */
export const WPListEditForm = (props: IWPListEditForm = {}): IWPListEditForm => {
    let _ddlList: Components.IDropdown = null;
    let _lists: Array<Types.SP.IListQuery> = null;
    let _loadingMessage: HTMLElement = null;
    let _wpInfo: IWPListInfo = null;

    // Method to load the lists
    let loadLists = (webUrl?: string): PromiseLike<Array<Components.IDropdownItem>> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Set the query
            let query: Types.IODataQuery = props.listQuery || {};

            // Get the web
            Web(webUrl)
                // Get the lists
                .Lists()
                // Include the fields
                .query(query)
                // Execute the request
                .execute(lists => {
                    let items: Array<Components.IDropdownItem> = [{
                        text: "",
                        value: ""
                    }];

                    // Call the list loaded event
                    _lists = (props.onListsLoaded ? props.onListsLoaded(_wpInfo, lists.results) as any : null) || lists.results;

                    // Parse the lists
                    for (let i = 0; i < _lists.length; i++) {
                        let list = _lists[i];

                        // Add the item
                        items.push({
                            text: list.Title,
                            value: list.Title
                        });
                    }

                    // Resolve the promise
                    resolve(items);
                }, reject);
        });
    }

    // Method to render the form controls
    let renderFormControls = (items: Array<Components.IDropdownItem>, webUrl?: string): Array<Components.IFormControlProps> => {
        let controls: Array<Components.IFormControlProps> = [];

        // Add the web url
        controls.push({
            label: "Relative Web Url:",
            description: "The web containing the list. If blank, the current web is used.",
            name: "WebUrl",
            type: Components.FormControlTypes.TextField,
            value: webUrl,
            onChange: (value) => {
                // Update the configuration
                _wpInfo.cfg.WebUrl = value;
            }
        } as Components.IFormControlPropsTextField);

        // Add the dropdown
        controls.push({
            label: "List:",
            name: "ListName",
            items,
            type: Components.FormControlTypes.Dropdown,
            value: _wpInfo && _wpInfo.cfg ? _wpInfo.cfg.ListName : null,
            onControlRendered: control => {
                // Save a reference to the dropdown list
                _ddlList = control.dropdown;
            },
            onChange: (item: Components.IDropdownItem) => {
                if (item) {
                    // See if this is a blank item
                    if (item.text == "") {
                        // Call the change event
                        props.onListChanged ? props.onListChanged(_wpInfo) : null;
                        return;
                    }

                    // Parse the list
                    for (let i = 0; i < _lists.length; i++) {
                        let list = _lists[i];

                        // See if this is the target list
                        if (list.Title == item.text) {
                            // Update the configuration
                            _wpInfo.cfg.ListName = item.value;

                            // Call the change event
                            props.onListChanged ? props.onListChanged(_wpInfo, list) : null;
                            break;
                        }
                    }
                }
            }
        } as Components.IFormControlPropsDropdown);

        // Return the controls
        return controls;
    }

    // Create the form action buttons
    let actionButtons: Array<Components.IButtonProps> = [
        {
            text: "Refresh",
            onClick: () => {
                // Clear the dropdown
                _ddlList.setItems([{ isHeader: true, text: "Loading the Lists", isSelected: true }]);

                // Load the lists
                loadLists(_wpInfo.cfg.WebUrl).then(items => {
                    // Set the dropdown items
                    _ddlList.setItems(items);
                });
            }
        }
    ];

    // See if custom actions exist
    if (props.actions) {
        // Add the custom commands
        actionButtons = actionButtons.concat(props.actions);
    }

    // Return the edit panel
    return {
        actions: actionButtons,
        showSaveButton: props.showSaveButton,
        onRenderForm: (wpInfo) => {
            // Save the webpart information
            _wpInfo = wpInfo;

            // Render a loading message
            _loadingMessage = Components.Progress({
                el: _wpInfo.el,
                isAnimated: true,
                isStriped: true,
                label: "Loading the List Information",
                size: 100
            }).el as any;

            // Return a promise
            return new Promise((resolve, reject) => {
                // Load the lists
                loadLists(_wpInfo && _wpInfo.cfg ? _wpInfo.cfg.WebUrl : "").then(items => {
                    // Render the form controls
                    let controls = renderFormControls(items)

                    // Parse the lists
                    let selectedList = null;
                    for (let i = 0; i < _lists.length; i++) {
                        let list = _lists[i];

                        // See if this is the selected list
                        if (list.Title == _wpInfo.cfg.ListName) {
                            // Select this list
                            selectedList = list;
                        }
                    }

                    // Call the render form event
                    let returnVal: any = props.onRenderForm ? props.onRenderForm(_wpInfo, selectedList) : null;
                    if (returnVal) {
                        // See if this is a promise
                        if (returnVal.then) {
                            // Wait for the promise to complete
                            returnVal.then((formControls = []) => {
                                // Add the form controls
                                controls = controls.concat(formControls);

                                // Resolve the promise
                                resolve(controls);
                            });
                        }
                        // Else, see if the form controls exist
                        else if (returnVal.length > 0) {
                            // Add the form controls
                            controls = controls.concat(returnVal);

                            // Resolve the promise
                            resolve(controls);
                        }
                        // Else, resolve the promise
                        else { resolve(controls); }
                    }
                    // Else, resolve the promise
                    else { resolve(controls); }

                    // Remove the loading message
                    _wpInfo.el.removeChild(_loadingMessage);
                });
            });
        },
        onSave: (cfg: IWPListCfg, form) => {
            // Update the configuration
            cfg.ListName = _wpInfo.cfg.ListName;
            cfg.WebUrl = _wpInfo.cfg.WebUrl;

            // Return the configuration
            return props.onSave ? props.onSave(_wpInfo.cfg, form) : _wpInfo.cfg;
        }
    };
}