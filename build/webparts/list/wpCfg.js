"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gd_bs_1 = require("gd-bs");
var gd_sprest_1 = require("gd-sprest");
/**
 * List WebPart Edit Form
 */
exports.WPListEditForm = function (props) {
    if (props === void 0) { props = {}; }
    var _ddlList = null;
    var _lists = null;
    var _loadingMessage = null;
    var _wpInfo = null;
    // Method to load the lists
    var loadLists = function (webUrl) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Set the query
            var query = props.listQuery || {};
            // Get the web
            gd_sprest_1.Web(webUrl)
                // Get the lists
                .Lists()
                // Include the fields
                .query(query)
                // Execute the request
                .execute(function (lists) {
                var items = [{
                        text: "",
                        value: ""
                    }];
                // Call the list loaded event
                _lists = (props.onListsLoaded ? props.onListsLoaded(_wpInfo, lists.results) : null) || lists.results;
                // Parse the lists
                for (var i = 0; i < _lists.length; i++) {
                    var list = _lists[i];
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
    };
    // Method to render the form controls
    var renderFormControls = function (items, webUrl) {
        var controls = [];
        // Add the web url
        controls.push({
            label: "Relative Web Url:",
            description: "The web containing the list. If blank, the current web is used.",
            name: "WebUrl",
            type: gd_bs_1.Components.FormControlTypes.TextField,
            value: webUrl,
            onChange: function (value) {
                // Update the configuration
                _wpInfo.cfg.WebUrl = value;
            }
        });
        // Add the dropdown
        controls.push({
            label: "List:",
            name: "ListName",
            items: items,
            type: gd_bs_1.Components.FormControlTypes.Dropdown,
            value: _wpInfo && _wpInfo.cfg ? _wpInfo.cfg.ListName : null,
            onControlRendered: function (control) {
                // Save a reference to the dropdown list
                _ddlList = control.dropdown;
            },
            onChange: function (item) {
                if (item) {
                    // See if this is a blank item
                    if (item.text == "") {
                        // Call the change event
                        props.onListChanged ? props.onListChanged(_wpInfo) : null;
                        return;
                    }
                    // Parse the list
                    for (var i = 0; i < _lists.length; i++) {
                        var list = _lists[i];
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
        });
        // Return the controls
        return controls;
    };
    // Create the form action buttons
    var actionButtons = [
        {
            text: "Refresh",
            onClick: function () {
                // Clear the dropdown
                _ddlList.setItems([{ isHeader: true, text: "Loading the Lists", isSelected: true }]);
                // Load the lists
                loadLists(_wpInfo.cfg.WebUrl).then(function (items) {
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
        onRenderForm: function (wpInfo) {
            // Save the webpart information
            _wpInfo = wpInfo;
            // Render a loading message
            _loadingMessage = gd_bs_1.Components.Progress({
                el: _wpInfo.el,
                isAnimated: true,
                isStriped: true,
                label: "Loading the List Information",
                size: 100
            }).el;
            // Return a promise
            return new Promise(function (resolve, reject) {
                // Load the lists
                loadLists(_wpInfo && _wpInfo.cfg ? _wpInfo.cfg.WebUrl : "").then(function (items) {
                    // Render the form controls
                    var controls = renderFormControls(items);
                    // Parse the lists
                    var selectedList = null;
                    for (var i = 0; i < _lists.length; i++) {
                        var list = _lists[i];
                        // See if this is the selected list
                        if (list.Title == _wpInfo.cfg.ListName) {
                            // Select this list
                            selectedList = list;
                        }
                    }
                    // Call the render form event
                    var returnVal = props.onRenderForm ? props.onRenderForm(_wpInfo, selectedList) : null;
                    if (returnVal) {
                        // See if this is a promise
                        if (returnVal.then) {
                            // Wait for the promise to complete
                            returnVal.then(function (formControls) {
                                if (formControls === void 0) { formControls = []; }
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
                        else {
                            resolve(controls);
                        }
                    }
                    // Else, resolve the promise
                    else {
                        resolve(controls);
                    }
                    // Remove the loading message
                    _wpInfo.el.removeChild(_loadingMessage);
                });
            });
        },
        onSave: function (cfg, form) {
            // Update the configuration
            cfg.ListName = _wpInfo.cfg.ListName;
            cfg.WebUrl = _wpInfo.cfg.WebUrl;
            // Return the configuration
            return props.onSave ? props.onSave(_wpInfo.cfg, form) : _wpInfo.cfg;
        }
    };
};
