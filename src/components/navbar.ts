import * as jQuery from "jquery";
import { Button } from "./button";
import { Dropdown } from "./dropdown";
import { INavbar, INavbarProps, INavbarItem } from "./types/navbar";

/**
 * Navbar Types
 */
export enum NavbarTypes {
    Dark = 1,
    Light = 2,
    Primary = 3
}

/**
 * Navbar
 */
export const Navbar = (props: INavbarProps): INavbar | string => {
    // Set the class name
    let classNames = ["navbar navbar-expand-lg"]
    props.className ? classNames.push(props.className) : null;

    // Check the type
    switch (props.type) {
        // Dark
        case NavbarTypes.Dark:
            // Add the class
            classNames.push("navbar-dark bg-dark");
            break;
        // Primary
        case NavbarTypes.Primary:
            // Add the class
            classNames.push("navbar-primary bg-primary");
            break;
        // Default - Light
        default:
            // Add the class
            classNames.push("navbar-light bg-light");
            break;
    }

    // Set the starting tag
    let html = ['<nav class="' + classNames.join(' ') + '">'];

    // See if there is a brand
    if (props.brand) {
        // Add the brand
        html.push('<a class="navbar-brand"' + (props.brandUrl ? ' href="' + props.brandUrl + '"' : '') + '>' + props.brand + '</a>');
    }

    // Render the toggler
    html.push([
        '<button data-target="#navbarnav" class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">',
        '<span class="navbar-toggler-icon"></span>',
        '</button>'
    ].join('\n'));

    // Set the list starting tag
    html.push([
        '<div id="navbarnav" class="collapse navbar-collapse">',
        '<ul class="navbar-nav">'
    ].join('\n'));

    // Parse the items
    let items = props.items || [];
    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        // See if this is a dropdown
        if (item.items) {
            // Render a dropdown
            html.push(Dropdown({
                items: item.items,
                label: item.text,
                navFl: true
            }) as string);
        }
        // Else, ensure there is text
        else if (item.text) {
            // Set the class names
            let classNames = ["nav-link"];
            item.isActive ? classNames.push("active") : null;
            item.isDisabled ? classNames.push("disabled") : null;

            // Render the item
            html.push([
                '<li class="nav-item">',
                '<a class="' + classNames.join(' ') + '" href="' + (item.href ? item.href : '#') + '">',
                item.text,
                item.isActive ? '<span class="sr-only">(current)</span>' : '',
                '</a>',
                '</li>'
            ].join('\n'));
        }
    }

    // Set the ending tag
    html.push('</ul>');

    // See if we are rendering a search box
    if (props.searchBox) {
        // Render the search box
        html.push([
            '<form class="form-inline">',
            '<input class="form-control" type="search" placeholder="' + (props.searchBox.placeholder || 'Search') + '" aria-label="Search"></input>',
            props.searchBox.btnProps ? Button(props.searchBox.btnProps) : '',
            '</form>'
        ].join('\n'));
    }

    // Set the ending tag
    html.push([
        '</div>',
        '</nav>'
    ].join('\n'));

    // See if the element exists
    if (props.el) {
        // Set the class
        props.el.classList.add("bs");

        // Set the html
        props.el.innerHTML = html.join('\n');

        // Create the navbar
        let navbar = jQuery(props.el.children[0]);

        // Return the navbar
        return {
            el: navbar
        };
    } else {
        // Return the html
        return html.join('\n');
    }
}