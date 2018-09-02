import * as jQuery from "jquery";
import { IPagination, IPaginationProps } from "./types/pagination";

/**
 * Pagination Alignment
 */
export enum PaginationAlignment {
    Center = 1,
    Left = 2,
    Right = 3
}

/**
 * Pagination
 */
export const Pagination = (props: IPaginationProps): IPagination => {
    // Set the class names
    let classNames = ["pagination"];
    props.className ? classNames.push(props.className) : null;
    props.isLarge ? classNames.push("pagination-lg") : null;
    props.isSmall ? classNames.push("pagination-sm") : null;

    // Read the alignment
    switch (props.alignment) {
        // Danger
        case PaginationAlignment.Center:
            classNames.push("justify-content-center");
            break;
        // Dark
        case PaginationAlignment.Right:
            classNames.push("justify-content-end");
            break;
    }

    // Set the starting tag
    let html = [
        '<nav aria-label="' + (props.label || "") + '">',
        '<ul class="' + classNames.join(' ') + '">'
    ];

    // Render the previous button
    html.push([
        '<li class="page-item" data-idx="0">',
        '<a class="page-link" href="#"' + (props.icon ? ' aria-label="Previous"' : '') + '>',
        props.icon ? '<span aria-hidden="true">' + props.icon + '</span>' : "Previous",
        props.icon ? '<span class="sr-only">Previous</span>' : '',
        '</a>',
        '</li>'
    ].join('\n'));

    // Parse the number of pages
    let pages = props.numberOfPages || 1;
    for (let i = 1; i <= pages; i++) {
        // Add the item
        html.push([
            '<li class="page-item' + (i == 1 ? ' active' : '') + '" data-idx="' + i + '">',
            '<a class="page-link" href="#">' + i + '</a>',
            '</li>'
        ].join('\n'));
    }

    // Render the next button
    html.push([
        '<li class="page-item" data-idx="' + (pages + 1) + '">',
        '<a class="page-link" href="#"' + (props.icon ? ' aria-label="Next"' : '') + '>',
        props.icon ? '<span aria-hidden="true">' + props.icon + '</span>' : "Next",
        props.icon ? '<span class="sr-only">Next</span>' : '',
        '</a>',
        '</li>'
    ].join('\n'));

    // Set the closing tag
    html.push([
        '</ul>',
        '</nav>'
    ].join('\n'));

    // Get the element to render to
    let el = props.el || document.createElement("div");

    // Set the boostrap class
    el.classList.contains("bs") ? null : el.classList.add("bs");

    // Set the html
    el.innerHTML = html.join('\n');

    // Parse the items
    let items = el.querySelectorAll(".page-item");
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", ev => {
            ev.preventDefault();

            // Get the index
            let index = parseInt((ev.currentTarget as HTMLElement).getAttribute("data-idx"));

            // Get the current active item
            let activeItem = el.querySelector(".page-item.active");
            let activeIdx = activeItem ? parseInt(activeItem.getAttribute("data-idx")) : 1;
            let oldIdx = activeIdx;

            // Clear the active item
            activeItem ? activeItem.classList.remove("active") : null;

            // See if this is the previous button
            if (index == 0) {
                // Decrement the active index
                activeIdx > 1 ? activeIdx-- : null;
            }
            // Else, see if this is the next button
            else if (index == pages + 1) {
                // Increment the active index
                activeIdx < pages ? activeIdx++ : null;
            } else {
                // Set the active index
                activeIdx = index;
            }

            // Set the active item
            activeItem = items[activeIdx];
            if (activeItem) {
                // Make this item active
                activeItem.classList.add("active");
            }

            // Ensure the index has changed
            if (oldIdx != activeIdx) {
                // Class the click event
                props.onClick ? props.onClick(activeIdx, ev) : null;
            }
        });
    }

    // Return the pagination
    let pagination = jQuery(el.children[0]);
    return { el };
}