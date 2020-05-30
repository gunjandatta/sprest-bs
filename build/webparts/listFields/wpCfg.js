"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gd_bs_1 = require("gd-bs");
/**
 * List Fields WebPart Edit Form
 */
exports.WPListFieldsEditForm = function (props) {
    if (props === void 0) { props = {}; }
    var _ddlFields = null;
    var _ddlSelectedFields = null;
    var _selectedFields = null;
    var _tbFilter = null;
    var _wpInfo = null;
    // Adds a selected field
    var addField = function (field) {
        // Add the selected field
        _selectedFields.push({
            text: field.text,
            value: field.value,
            onRender: (function (el) {
                // Set the styling
                el.classList.add("d-flex");
                el.classList.add("justify-content-between");
                // Append an icon to remove the field
                var closeIcon = gd_bs_1.Icons(gd_bs_1.IconTypes.X, 16, 16);
                el.appendChild(closeIcon);
                // Set the click event
                el.addEventListener("click", function () {
                    // Remove this field
                    removeField(field);
                });
                // Clear the filter
                _tbFilter.setValue("");
            })
        });
        // Render the fields
        _ddlSelectedFields.setItems(_selectedFields);
    };
    // Filters the fields dropdown items
    var filterFields = function (filter) {
        // Parse the items
        var items = _ddlFields.el.querySelectorAll(".dropdown-item");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var field = (item.innerText || "").toLowerCase();
            // See if the field contains this value
            if (filter == "" || field.indexOf(filter) >= 0) {
                // Show this element
                item.classList.remove("d-none");
            }
            else {
                // Hide this element
                item.classList.add("d-none");
            }
        }
    };
    // Gets the selected field values
    var getSelectedFields = function () {
        var fields = [];
        // Get the selected fields
        for (var i = 0; i < _selectedFields.length; i++) {
            var field = _selectedFields[i];
            // Ensure this is a field
            if (field.text && field.value) {
                // Save the field
                fields.push({
                    Name: field.value,
                    Title: field.text
                });
            }
        }
        // Return the fields
        return fields;
    };
    // Removes a selected field
    var removeField = function (field) {
        // Parse the selected fields
        for (var i = 0; i < _selectedFields.length; i++) {
            var selectedField = _selectedFields[i];
            // See if this is the target field
            if (selectedField.value == field.value) {
                // Remove this field
                _selectedFields.splice(i, 1);
                // Render the items
                _ddlSelectedFields.setItems(_selectedFields);
                // Stop the loop
                break;
            }
        }
    };
    // Renders the fields control
    var renderFields = function (el, fields) {
        var filter = "";
        // Create the dropdown menu
        _ddlFields = gd_bs_1.Components.Dropdown({
            id: "calendarFields",
            menuOnly: true,
            onChange: function (item) {
                // Close the popover
                popover.hide();
                // Clear the filter
                filterFields("");
                // Add the selected field
                addField(item);
            }
        });
        // Render the textfield
        _tbFilter = gd_bs_1.Components.InputGroup({
            el: el,
            placeholder: "Select a Field...",
            onChange: function (value) {
                // Set the filter
                filter = value;
                // Wait for the user to stop typing
                setTimeout(function () {
                    // Ensure the value hasn't changed
                    if (value != filter) {
                        return;
                    }
                    // Filter the fields
                    filterFields(filter.toLowerCase());
                    // Display the popover
                    popover.show();
                }, 250);
            }
        });
        // Render the selected fields
        _ddlSelectedFields = gd_bs_1.Components.Dropdown({
            el: el,
            id: "selectedFields",
            menuOnly: true
        });
        // Add a click event to display the popover
        _tbFilter.el.addEventListener("click", function () {
            // Display the popover
            popover.show();
        });
        // Create a popover
        var popover = gd_bs_1.Components.Popover({
            el: el,
            target: _tbFilter.el,
            type: gd_bs_1.Components.PopoverTypes.Auto,
            options: {
                html: true,
                trigger: "manual",
                content: function () {
                    // Return the dropdown menu
                    return _ddlFields.el;
                }
            }
        });
    };
    // Updates the fields
    var setItems = function (fields, selectedFields) {
        if (selectedFields === void 0) { selectedFields = []; }
        // Update the dropdown
        _ddlFields.setItems(fields);
        // Parse the selected fields
        for (var i = 0; i < selectedFields.length; i++) {
            var fieldInfo = selectedFields[i];
            // Parse the fields
            for (var j = 0; j < fields.length; j++) {
                var field = fields[j];
                // See if this is the target field
                if (field.value == fieldInfo.Name) {
                    // Add this field
                    addField(field);
                    break;
                }
            }
        }
    };
    // Updates the fields dropdown in the edit panel
    var updateFieldsDDL = function (list, selectedFields) {
        if (selectedFields === void 0) { selectedFields = []; }
        var items = [];
        // Clear the dropdown
        setItems([{
                isHeader: true,
                text: list ? "Loading the Fields" : "Select a List"
            }]);
        // Ensure the list exists
        if (list) {
            // Get the fields
            list.Fields().query({ OrderBy: ["Title"] }).execute(function (fields) {
                // Parse the fields
                for (var i = 0; i < fields.results.length; i++) {
                    var field = fields.results[i];
                    // Skip the title fields
                    if (field.InternalName == "LinkTitle" || field.InternalName == "LinkTitleNoMenu") {
                        continue;
                    }
                    // Skip hidden fields
                    if (field.Hidden) {
                        continue;
                    }
                    // Set the dropdown value
                    items.push({
                        text: field.Title,
                        value: field.InternalName
                    });
                }
                // Update the dropdown values
                setItems(items, selectedFields);
            });
        }
    };
    // Return the edit panel
    return {
        actions: props.actions,
        showSaveButton: props.showSaveButton,
        onListChanged: function (wpInfo, list) {
            // Update the fields dropdown
            updateFieldsDDL(list);
        },
        onRenderForm: function (wpInfo, list) {
            // Save the webpart information
            _wpInfo = wpInfo;
            // Clear the selected fields
            _selectedFields = [];
            // Set the default control
            var controls = [
                {
                    name: "Fields",
                    label: "Fields",
                    onControlRendered: function (ctrl) {
                        // Render the fields control
                        renderFields(ctrl.el, wpInfo.cfg.Fields);
                        // Update the fields dropdown
                        updateFieldsDDL(list, wpInfo.cfg.Fields);
                    }
                }
            ];
            // Call the render form event
            var returnVal = props.onRenderForm ? props.onRenderForm(_wpInfo, list) : null;
            if (returnVal) {
                // See if this is a promise
                if (returnVal.then) {
                    // Return a promise
                    return new Promise(function (resolve, reject) {
                        // Wait for the promise to complete
                        returnVal.then(function (formControls) {
                            if (formControls === void 0) { formControls = []; }
                            // Add the form controls
                            controls = controls.concat(formControls);
                            // Resolve the promise
                            resolve(controls);
                        });
                    });
                }
                // Add the form controls
                controls = controls.concat(returnVal);
            }
            // Return the custom properties
            return controls;
        },
        onSave: function (cfg, form) {
            // Update the configuration
            cfg.Fields = getSelectedFields();
            // Return the configuration
            return props.onSave ? props.onSave(_wpInfo.cfg, form) : _wpInfo.cfg;
        }
    };
};
