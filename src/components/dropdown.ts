import * as $ from "jquery";
import { IDropdown, IDropdownItem, IDropdownProps } from "./types/dropdown";

/**
 * Dropdown Types
 */
export enum DropdownTypes {
    Danger = 1,
    Info = 2,
    Primary = 3,
    Secondary = 4,
    Success = 5,
    Warning = 6
}

/**
 * Dropdown
 * @property props - The dropdown properties.
 */
export const Dropdown = (props: IDropdownProps): IDropdown | string => {
    let html = [];
    let isMulti = props.multi || false;
    let items = props.items || [];

    // See if we are rendering this in a form
    if (props.formFl) {
        // See if there is a label
        if (props.label) {
            // Add the label
            html.push("<label>" + props.label + "</label>");
        }

        // Set the attirbutes
        let attributes = [
            'class="form-control"',
            props.multi ? "multiple" : ""
        ];

        // Add the select starting tag
        html.push('<select ' + attributes.join(' ') + '>');

        // Parse the items
        for (let i = 0; i < items.length; i++) {
            let item = items[i];

            // Set the attributes
            let attributes = [
                'data-idx="' + i + '"',
                item.value ? 'data-value="' + JSON.stringify(item.value) + '"' : ''
            ];

            // See if the item is selected
            if (item.isSelected) {
                // Add the selected attribute
                attributes.push("selected");
            }
            // Else, see if a value exists
            else if (props.value) {
                // Ensure it's an array
                let values = props.value.length && typeof (props.value) !== "string" ? props.value : [props.value];

                // Parse the values
                for (let j = 0; j < values.length; j++) {
                    // See if this item is selected
                    if (item.value == values[j]) {
                        // Add the selected attribute
                        attributes.push("selected");
                        break;
                    }
                }
            }

            // Add the option
            html.push("<option " + attributes.join(' ') + ">" + item.text + "</option>");
        }

        // Add the select ending tag
        html.push("</select>");
    } else {
        // Set the class names
        let classNames = ["dropdown"];
        props.className ? classNames.push(props.className) : null;

        // Set the button class names
        let btnClassNames = ["btn", "dropdown-toggle"];
        switch (props.type) {
            // Danger
            case DropdownTypes.Danger:
                btnClassNames.push("btn-danger");
                break;
            // Info
            case DropdownTypes.Info:
                btnClassNames.push("btn-info");
                break;
            // Secondary
            case DropdownTypes.Secondary:
                btnClassNames.push("btn-secondary");
                break;
            // Success
            case DropdownTypes.Success:
                btnClassNames.push("btn-success");
                break;
            // Warning
            case DropdownTypes.Warning:
                btnClassNames.push("btn-warning");
                break;
            // Default - Primary
            default:
                btnClassNames.push("btn-primary");
                break;
        }

        // Set the starting tag
        html.push('<div class="' + classNames.join(' ') + '">');

        // Add the button
        html.push([
            '<button class="' + btnClassNames.join(' ') + '" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">',
            props.label || "",
            '</button>'
        ].join('\n'));

        // Add the menu
        html.push('<div class="dropdown-menu"' + (props.id ? 'aria-labelledby="' + props.id + '"' : '') + '>')

        // Parse the items
        for (let i = 0; i < items.length; i++) {
            let item = items[i];

            // Set the class names
            let classNames = ["dropdown-item"];

            // See if this item is selected
            if (item.isSelected) {
                // Select the item
                classNames.push("active");
            }
            // Else, see if a value exists
            else if (props.value) {
                // Ensure it's an array
                let values = props.value.length && typeof (props.value) !== "string" ? props.value : [props.value];

                // Parse the values
                for (let j = 0; j < values.length; j++) {
                    // See if this item is selected
                    if (item.value == values[j]) {
                        // Select this item
                        classNames.push("active");
                        break;
                    }
                }
            }

            // Set the item attributes
            let attributes = [
                'class="' + classNames.join(' ') + '"',
                'href="' + (item.href || '#') + '"',
                'data-idx="' + i + '"',
                item.value ? 'data-value="' + JSON.stringify(item.value) + '"' : ''
            ].join(' ');

            // Add the button html
            html.push('<a ' + attributes + '>' + item.text + '</a>');
        }

        // Add the menu closing tag
        html.push("</div>");

        // Add the closing tag
        html.push("</div>");
    }

    // See if the element exists
    if (props.el) {
        // Set the class
        props.el.classList.add("bs");

        // Set the html
        props.el.innerHTML = html.join('\n');

        // Parse the items
        let elItems = props.el.querySelectorAll(props.formFl ? "option" : ".dropdown-item");
        for (let i = 0; i < elItems.length; i++) {
            let item = props.items[i];

            // Set the click event for selecting the item
            elItems[i].addEventListener("click", ev => {
                let elItem = ev.currentTarget as HTMLElement;
                let item: IDropdownItem = props.items[elItem.getAttribute("data-idx")];
                let items: Array<IDropdownItem> = [];

                // Parse the selected items
                let elSelectedItems = props.el.querySelectorAll(".dropdown-item.active");
                for (let i = 0; i < elSelectedItems.length; i++) {
                    let elSelectedItem = elSelectedItems[i] as HTMLElement;
                    let selectedItem = props.items[elSelectedItem.getAttribute("data-idx")];

                    // Skip this item
                    if (item.text == selectedItem.text) { continue; }

                    // See if this is a multi-select
                    if (isMulti) {
                        // Add the item
                        items.push(selectedItem);
                    } else {
                        // Unselect the item
                        elSelectedItem.classList.remove("active")
                    }
                }

                // See if this item is selected
                if (elItem.classList.contains("active")) {
                    // Unselect this item
                    elItem.classList.remove("active");
                } else {
                    // Select this item
                    elItem.classList.add("active");

                    // Add the item
                    items.push(item);
                }

                // Sort the items
                items = items.sort((a, b) => {
                    if (a.text < b.text) { return -1; }
                    if (a.text > b.text) { return 1; }
                    return 0;
                });

                // See if a change event exists
                if (item.onChange) {
                    // Call the change event
                    item.onChange(isMulti ? items : items[0], ev);
                }

                // See if a global change event exists
                if (props.onChange) {
                    // Call the change event
                    props.onChange(isMulti ? items : items[0], ev);
                }
            });
        }

        // Return the dropdown
        let ddl = $(props.el.children[0]);
        return {
            dispose: () => { ddl.dropdown("dispose") },
            el: ddl,
            toggle: () => { ddl.dropdown("toggle") },
            update: () => { ddl.dropdown("update") }
        };
    } else {
        // Return the html
        return html.join('\n');
    }
}