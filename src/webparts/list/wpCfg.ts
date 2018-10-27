import { Components } from "gd-bs";
import { Types, Web } from "gd-sprest";
import { IWPListCfg, IWPListEditForm, IWPListInfo } from "../types/wpList";

/**
 * List WebPart Edit Form
 */
export const WPListEditForm = (props: IWPListEditForm = {}): IWPListEditForm => {
    let _loadingMessage: HTMLElement = null;
    let _wpInfo: IWPListInfo = null;

    // Method to load the lists
    let loadLists = (webUrl?: string): PromiseLike<Array<Components.IFormControlProps>> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Set the query
            let query: Types.SP.ODataQuery = props.listQuery || {};

            // Get the web
            Web(webUrl)
                // Get the lists
                .Lists()
                // Include the fields
                .query(query)
                // Execute the request
                .execute(lists => {
                    let controls: Array<Components.IFormControlProps> = [];
                    let items: Array<Components.IDropdownItem> = [{
                        text: "",
                        value: ""
                    }];

                    // Remove the loading message
                    _wpInfo.el.removeChild(_loadingMessage);

                    // Call the list loaded event
                    let listValues: Array<any> = (props.onListsLoaded ? props.onListsLoaded(_wpInfo, lists.results) as any : null) || lists.results;

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

                    // Parse the lists
                    let selectedList = null;
                    for (let i = 0; i < listValues.length; i++) {
                        let list = listValues[i];

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

                    // Add the dropdown
                    controls.push({
                        label: "List:",
                        name: "ListName",
                        items,
                        type: Components.FormControlTypes.Dropdown,
                        value: _wpInfo && _wpInfo.cfg ? _wpInfo.cfg.ListName : null,
                        onChange: (item: Components.IDropdownItem) => {
                            if (item) {
                                // See if this is a blank item
                                if (item.text == "") {
                                    // Call the change event
                                    props.onListChanged ? props.onListChanged(_wpInfo) : null;
                                    return;
                                }

                                // Parse the list
                                for (let i = 0; i < listValues.length; i++) {
                                    let list = listValues[i];

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
                });
        });
    }

    // Create the form action buttons
    let actionButtons: Array<Components.IButtonProps> = [
        {
            text: "Refresh",
            onClick: () => {
                // Load the lists
                loadLists(_wpInfo.cfg.WebUrl);
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

            // Load the lists
            return loadLists(_wpInfo && _wpInfo.cfg ? _wpInfo.cfg.WebUrl : "");
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