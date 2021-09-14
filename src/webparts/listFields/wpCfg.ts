import { Components } from "gd-bs";
import { Types } from "gd-sprest";
import { x as CloseIcon } from "../../icons/svgs/x";
import { IWPListField, IWPListFieldsCfg, IWPListFieldsEditForm, IWPListFieldsInfo } from "./types";

/**
 * List Fields WebPart Edit Form
 */
export const WPListFieldsEditForm = (props: IWPListFieldsEditForm = {}): IWPListFieldsEditForm => {
    let _ddlFields: Components.IDropdown = null;
    let _ddlSelectedFields: Components.IDropdown = null;
    let _selectedFields: Array<Components.IDropdownItem> = null;
    let _tbFilter: Components.IInputGroup = null;
    let _wpInfo: IWPListFieldsInfo = null;

    // Adds a selected field
    let addField = (field: Components.IDropdownItem) => {
        // Add the selected field
        _selectedFields.push({
            text: field.text,
            value: field.value,
            onRender: (el => {
                // Set the styling
                el.classList.add("d-flex");
                el.classList.add("justify-content-between");

                // Append an icon to remove the field
                el.appendChild(CloseIcon(16, 16));

                // Set the click event
                el.addEventListener("click", () => {
                    // Remove this field
                    removeField(field);
                });

                // Clear the filter
                _tbFilter.setValue("");
            })
        });

        // Render the fields
        _ddlSelectedFields.setItems(_selectedFields);
    }

    // Filters the fields dropdown items
    let filterFields = (filter: string) => {
        // Parse the items
        let items = _ddlFields.el.querySelectorAll(".dropdown-item");
        for (let i = 0; i < items.length; i++) {
            let item = items[i] as HTMLAnchorElement;
            let field = (item.innerText || "").toLowerCase();

            // See if the field contains this value
            if (filter == "" || field.indexOf(filter) >= 0) {
                // Show this element
                item.classList.remove("d-none");
            } else {
                // Hide this element
                item.classList.add("d-none");
            }
        }
    }

    // Gets the selected field values
    let getSelectedFields = () => {
        let fields: Array<IWPListField> = [];

        // Get the selected fields
        for (let i = 0; i < _selectedFields.length; i++) {
            let field = _selectedFields[i];

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
    }

    // Removes a selected field
    let removeField = (field: Components.IDropdownItem) => {
        // Parse the selected fields
        for (let i = 0; i < _selectedFields.length; i++) {
            let selectedField = _selectedFields[i];

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
    }

    // Renders the fields control
    let renderFields = (el: HTMLElement, fields: Array<IWPListField>) => {
        let filter = "";

        // Create the dropdown menu
        _ddlFields = Components.Dropdown({
            id: "calendarFields",
            menuOnly: true,
            onChange: item => {
                // Close the popover
                popover.hide();

                // Clear the filter
                filterFields("");

                // Add the selected field
                addField(item as any);
            }
        });

        // Render the textfield
        _tbFilter = Components.InputGroup({
            el,
            placeholder: "Select a Field...",
            onChange: value => {
                // Set the filter
                filter = value;

                // Wait for the user to stop typing
                setTimeout(() => {
                    // Ensure the value hasn't changed
                    if (value != filter) { return; }

                    // Filter the fields
                    filterFields(filter.toLowerCase());

                    // Display the popover
                    popover.show();
                }, 250);
            }
        });

        // Render the selected fields
        _ddlSelectedFields = Components.Dropdown({
            el,
            id: "selectedFields",
            menuOnly: true
        });

        // Add a click event to display the popover
        _tbFilter.el.addEventListener("click", () => {
            // Display the popover
            popover.show();
        });

        // Create a popover
        let popover = Components.Popover({
            el,
            target: _tbFilter.el,
            type: Components.PopoverPlacements.Auto,
            options: {
                trigger: "click",
                content: _ddlFields.el
            }
        });
    }

    // Updates the fields
    let setItems = (fields: Array<Components.IDropdownItem>, selectedFields: Array<IWPListField> = []) => {
        // Update the dropdown
        _ddlFields.setItems(fields);

        // Parse the selected fields
        for (let i = 0; i < selectedFields.length; i++) {
            let fieldInfo = selectedFields[i];

            // Parse the fields
            for (let j = 0; j < fields.length; j++) {
                let field = fields[j];

                // See if this is the target field
                if (field.value == fieldInfo.Name) {
                    // Add this field
                    addField(field);
                    break;
                }
            }
        }
    }

    // Updates the fields dropdown in the edit panel
    let updateFieldsDDL = (list: Types.SP.List, selectedFields: Array<IWPListField> = []) => {
        let items: Array<Components.IDropdownItem> = [];

        // Clear the dropdown
        setItems([{
            isHeader: true,
            text: list ? "Loading the Fields" : "Select a List"
        }]);

        // Ensure the list exists
        if (list) {
            // Get the fields
            list.Fields().query({ OrderBy: ["Title"] }).execute(fields => {
                // Parse the fields
                for (let i = 0; i < fields.results.length; i++) {
                    let field = fields.results[i];

                    // Skip the title fields
                    if (field.InternalName == "LinkTitle" || field.InternalName == "LinkTitleNoMenu") { continue; }

                    // Skip hidden fields
                    if (field.Hidden) { continue; }

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
    }

    // Return the edit panel
    return {
        actions: props.actions,
        showSaveButton: props.showSaveButton,
        onListChanged: (wpInfo, list) => {
            // Update the fields dropdown
            updateFieldsDDL(list as any);
        },
        onRenderForm: (wpInfo, list) => {
            // Save the webpart information
            _wpInfo = wpInfo;

            // Clear the selected fields
            _selectedFields = [];

            // Set the default control
            let controls: Array<Components.IFormControlProps> = [
                {
                    name: "Fields",
                    label: "Fields",
                    onControlRendered: ctrl => {
                        // Render the fields control
                        renderFields(ctrl.el, wpInfo.cfg.Fields);

                        // Update the fields dropdown
                        updateFieldsDDL(list as any, wpInfo.cfg.Fields);
                    }
                }
            ];

            // Call the render form event
            let returnVal: any = props.onRenderForm ? props.onRenderForm(_wpInfo, list) : null;
            if (returnVal) {
                // See if this is a promise
                if (returnVal.then) {
                    // Return a promise
                    return new Promise((resolve, reject) => {
                        // Wait for the promise to complete
                        returnVal.then((formControls = []) => {
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
        onSave: (cfg: IWPListFieldsCfg, form) => {
            // Update the configuration
            cfg.Fields = getSelectedFields();

            // Return the configuration
            return props.onSave ? props.onSave(_wpInfo.cfg, form) : _wpInfo.cfg;
        }
    };
}