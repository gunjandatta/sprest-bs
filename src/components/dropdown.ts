import * as $ from "jquery";

/**
 * Dropdown Item
 */
export interface IDropdownItem {
    href?: string;
    isSelected?: boolean;
    onClick?: (ev: Event) => void;
    text?: string;
    value?: any;
}

/**
 * Dropdown Properties
 */
export interface IDropdownProps {
    items?: Array<IDropdownItem>;
    className?: string;
    el?: Element | HTMLElement;
    id?: string;
    label?: string;
    multi?: boolean;
    type?: number;
    value?: any;
}

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
export const Dropdown = (props: IDropdownProps): Element | string => {
    let html = [];
    let isMulti = props.multi || false;

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
    let items = props.items || [];
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
            let values = props.value.length ? props.value : [props.value];

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

    // See if the element exists
    if (props.el) {
        // Set the class
        props.el.classList.add("bs");

        // Set the html
        props.el.innerHTML = html.join('\n');

        // Parse the items
        let elItems = props.el.querySelectorAll(".dropdown-item");
        for (let i = 0; i < elItems.length; i++) {
            let item = props.items[i];

            // Set the click event for selecting the item
            elItems[i].addEventListener("click", ev => {
                let elItem = ev.currentTarget as HTMLElement;
                let item: IDropdownItem = props.items[elItem.getAttribute("data-idx")] || {};

                // See if we are not allowing multiple selections
                if (!isMulti) {
                    // Parse the selected items
                    let selectedItems = props.el.querySelectorAll(".dropdown-item.active");
                    for (let i = 0; i < selectedItems.length; i++) {
                        let selectedItem = selectedItems[i] as HTMLElement;

                        // Skip this item
                        if (item.text == selectedItem.innerText) { continue; }

                        // Unselect the item
                        selectedItems[i].classList.remove("active")
                    }
                }

                // See if this item is selected
                if (elItem.classList.contains("active")) {
                    // Unselect this item
                    elItem.classList.remove("active");
                } else {
                    // Select this item
                    elItem.classList.add("active");
                }
            });

            // See if a click event exists
            if (item.onClick) {
                // Set the event
                elItems[i].addEventListener("click", item.onClick);
            }
        }

        // Return the element
        return $(props.el.children[0]);
    } else {
        // Return the html
        return html.join('\n');
    }
}