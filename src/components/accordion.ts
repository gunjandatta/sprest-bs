import * as jQuery from "jquery";
import { IAccordion, IAccordionProps } from "./types/accordion";
import { Button, ButtonTypes } from "./button";

/**
 * Accordion
 */
export const Accordion = (props: IAccordionProps): IAccordion | string => {
    let id = props.id || "accordion";

    // Set the class names
    let classNames = ["accordion"];
    props.className ? classNames.push(props.className) : null;

    // Add the starting tag
    let html = ['<div id="' + id + '" class="' + classNames.join(' ') + '">'];

    // Parse the items
    let items = props.items || [];
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let itemId = id + "_" + i;

        // Set the button properties
        let btnProps = item.btnProps || {};
        typeof (btnProps.type) == null ? btnProps.type = ButtonTypes.Link : null;

        //btnProps.isLink = true;
        btnProps.target = '#collapse_' + itemId;
        btnProps.toggle = "collapse";

        // Add the collapse
        html.push([
            '<div class="card">',
            '<div class="card-header" id="' + itemId + '">',
            Button(btnProps),
            '</div>',
            '<div id="' + ('collapse_' + itemId) + '" class="collapse" aria-labelledby="' + itemId + '" data-parent="#' + id + '">',
            '<div class="card-body">' + (item.content || "") + '</div>',
            '</div>',
            '</div>'
        ].join('\n'));
    }

    // Add the closing tag
    html.push('</div>');

    // See if the element exists
    if (props.el) {
        // Set the class
        props.el.classList.add("bs");

        // Set the html
        props.el.innerHTML = html.join('\n');

        // Initialize the collapse items
        jQuery(props.el.children[0].querySelectorAll(".collapse")).collapse();

        // Return the accordion
        let accordion = jQuery(props.el.children[0]);
        return {
            el: accordion
        };
    } else {
        // Return the html
        return html.join('\n');
    }
}