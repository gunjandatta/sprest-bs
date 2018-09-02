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
export const Navbar = (props: INavbarProps): INavbar => {
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

    // Set the nav id
    let navId = props.id || "navbar_content";

    // Render the toggler
    html.push([
        '<button class="navbar-toggler" type="button" data-target="#' + navId + '" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">',
        '<span class="navbar-toggler-icon"></span>',
        '</button>'
    ].join('\n'));

    // Set the list starting tag
    html.push([
        '<div class="collapse navbar-collapse" id="' + navId + '">',
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
            }).el.innerHTML);
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
    if (props.enableSearch || props.searchBox) {
        let text = (props.searchBox ? props.searchBox.btnText : null) || "Search";

        // Render the search box
        html.push([
            '<form class="form-inline">',
            '<input class="form-control" type="search" placeholder="' + text + '" aria-label="Search"></input>',
            props.enableSearch || props.searchBox ? Button({
                text,
                type: props.searchBox ? props.searchBox.btnType : null
            }) : '',
            '</form>'
        ].join('\n'));
    }

    // Set the ending tag
    html.push([
        '</div>',
        '</nav>'
    ].join('\n'));

    // Get the element to render to
    let el = props.el || document.createElement("div");

    // Set the boostrap class
    el.classList.contains("bs") ? null : el.classList.add("bs");

    // Set the html
    el.innerHTML = html.join('\n');

    // Get the items
    let elItems = el.querySelectorAll(".nav-link");
    for (let i = 0; i < elItems.length; i++) {
        // Add a click event
        elItems[i].addEventListener("click", ev => {
            let itemId = (ev.currentTarget as HTMLElement).getAttribute('data-idx');
            let item: INavbarItem = props.items[itemId];
            if (item) {
                // See if no href exists
                if (item.href == null || item.href == "#") {
                    // Prevent the page from moving to the top
                    ev.preventDefault();
                }

                // See if a click event exists
                item.onClick ? item.onClick(item, ev) : null;
            }
        });
    }

    // See if a searchbox exists and events exist
    if (props.searchBox) {
        // Get the search box and see if a change event exists
        let elSearchBox = el.querySelector('input[type="search"]') as HTMLInputElement;
        if (props.searchBox.onChange && elSearchBox) {
            // Set the change event
            elSearchBox.addEventListener("input", ev => {
                // Call the event
                props.searchBox.onChange((ev.currentTarget as HTMLInputElement).value);
            });
        }

        // Get the search box button and see if a search event exists
        let elSearchBoxButton = elSearchBox && elSearchBox.nextElementSibling;
        if (props.searchBox.onSearch && elSearchBoxButton) {
            // Add a click event
            elSearchBoxButton.addEventListener("click", ev => {
                // Call the event
                props.searchBox.onSearch(elSearchBox.value, ev);
            });
        }
    }

    // Return the navbar
    let navbar = jQuery(el.children[0]);
    return { el };
}