import * as $ from "jquery";

/**
 * Dropdown Item
 */
export interface IDropdownItem {
    href?: string;
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
    type?: number;
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

        // Set the item attributes
        let attributes = [
            'class="dropdown-item"',
            'href="' + (item.href || '#') + '"',
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