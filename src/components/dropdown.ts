import * as jQuery from "jquery";
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
export const Dropdown = (props: IDropdownProps): IDropdown => {
    let html = [];
    let isMulti = props.multi || false;
    let items = props.items || [];
    let menu = [];

    // See if we are rendering this in a form
    if (props.formFl) {
        // See if there is a label
        if (props.label) {
            // Add the label
            html.push("<label>" + props.label + "</label>");
        }

        // Set the attributes
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
    }
    // See if we are rendering this in a nav bar
    if (props.navFl) {
        // Set the class names
        let classNames = ["nav-item dropdown"];
        props.className ? classNames.push(props.className) : null;

        // Set the starting tag
        html.push('<li class="' + classNames.join(' ') + '">');

        // Set the attributes
        let attributes = [
            'class="nav-link dropdown-toggle"',
            'href="#"',
            'id="navbarDDL_' + (props.label || "") + '"',
            'role="button"',
            'data-toggle="dropdown"',
            'aria-haspopup="true"',
            'aria-expanded="false"'
        ];

        // Render the label
        html.push('<a ' + attributes.join(' ') + '>' + (props.label || "") + '</a>');

        // Create the menu
        menu = ['<div class="dropdown-menu" aria-labelledby="navbarDDL_' + (props.label || "") + '">']

        // Parse the items
        let items = props.items || [];
        for (let i = 0; i < items.length; i++) {
            let item = items[i];

            // See if this is a divider
            if (item.isDivider) {
                // Add the divider
                menu.push('<div class="dropdown-divider"></div>');
            } else {
                // Set the class names
                let itemClassNames = ["dropdown-item"];
                item.isHeader ? itemClassNames.push("dropdown-header") : null;

                // Add the item
                menu.push('<a class="' + itemClassNames.join(' ') + '" href="' + (item.href || '#') + '" data-idx="' + i + '">' + item.text + '</a>');
            }
        }

        // Set the ending tag
        menu.push('</div>');

        // Render the menu
        html.push(menu.join('\n'));

        // Set the ending tag
        html.push('</div>');
    } else {
        // Set the class names
        let classNames = [props.isSplit ? "btn-group" : "dropdown"];
        props.className ? classNames.push(props.className) : null;
        props.dropLeft ? classNames.push("dropleft") : null;
        props.dropRight ? classNames.push("dropright") : null;
        props.dropUp ? classNames.push("dropup") : null;

        let btnType = "";
        switch (props.type) {
            // Danger
            case DropdownTypes.Danger:
                btnType = "btn-danger";
                break;
            // Info
            case DropdownTypes.Info:
                btnType = "btn-info";
                break;
            // Secondary
            case DropdownTypes.Secondary:
                btnType = "btn-secondary";
                break;
            // Success
            case DropdownTypes.Success:
                btnType = "btn-success";
                break;
            // Warning
            case DropdownTypes.Warning:
                btnType = "btn-warning";
                break;
            // Default - Primary
            default:
                btnType = "btn-primary";
                break;
        }

        // Set the button class names
        let btnClassNames = ["btn", "dropdown-toggle", btnType];
        props.isSplit ? btnClassNames.push("dropdown-toggle-split") : null;

        // Set the starting tag
        html.push('<div class="' + classNames.join(' ') + '">');

        // See if this is a split button
        if (props.isSplit) {
            // Add a button
            html.push([
                '<button class="button ' + btnType + '">' + (props.label || "") + '</button>'
            ]);
        }

        // Add the button
        html.push([
            '<button class="' + btnClassNames.join(' ') + '" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">',
            props.isSplit ? '<span class="sr-only">Toggle Dropdown</span>' : props.label || "",
            '</button>'
        ].join('\n'));

        // Create the menu
        menu = ['<div class="dropdown-menu"' + (props.id ? 'aria-labelledby="' + props.id + '"' : '') + '>'];

        // Parse the items
        for (let i = 0; i < items.length; i++) {
            let item = items[i];

            // See if this is a divider
            if (item.isDivider) {
                // Add the divider
                menu.push('<div class="dropdown-divider"></div>');
                continue;
            }

            // Set the class names
            let classNames = ["dropdown-item"];
            item.isHeader ? classNames.push("dropdown-header") : null;

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
            menu.push('<a ' + attributes + '>' + item.text + '</a>');
        }

        // Add the menu closing tag
        menu.push("</div>");

        // Add the menu
        html.push(menu.join('\n'));

        // Add the closing tag
        html.push("</div>");
    }

    // Get the element to render to
    let el = props.el || document.createElement("div");

    // Set the boostrap class
    el.classList.contains("bs") ? null : el.classList.add("bs");

    // Set the html
    el.innerHTML = props.menuOnly ? menu.join('\n') : html.join('\n');

    // Parse the items
    let elItems = el.querySelectorAll(props.formFl ? "option" : ".dropdown-item");
    for (let i = 0; i < elItems.length; i++) {
        // Set the click event for selecting the item
        elItems[i].addEventListener("click", ev => {
            let elItem = ev.currentTarget as HTMLElement;
            let item: IDropdownItem = props.items[elItem.getAttribute("data-idx")];
            let items: Array<IDropdownItem> = [];

            // Cancel the events, if this isn't a link
            item && item.href ? null : ev.preventDefault();

            // Parse the selected items
            let elSelectedItems = el.querySelectorAll(".dropdown-item.active");
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
    let ddl = jQuery(el.children[0]);
    return {
        dispose: () => { ddl.dropdown("dispose") },
        el,
        toggle: () => {
            // See if we are only rendering a menu
            if (props.menuOnly) {
                // See if the "show" class exists
                if (ddl.classList.contains("show")) {
                    // Hide the dropdown
                    ddl.classList.remove("show");
                } else {
                    // Show the dropdown
                    ddl.classList.add("show");
                }
            } else {
                // Toggle the menu
                ddl.dropdown("toggle")
            }
        },
        update: () => { ddl.dropdown("update") }
    };
}