import * as $ from "jquery";
import { IModalProps } from "./types/modal";

/**
 * Modal
 * @param props The modal properties.
 */
export const Modal = (props: IModalProps): Element | string => {
    // Set the class names
    let classNames = ["modal"];
    props.className ? classNames.push(props.className) : null;
    props.disableFade ? null : classNames.push("fade");

    // Set the attributes
    let attributes = [
        'role="dialog"',
        'class="' + classNames.join(' ') + '"',
        props.id ? 'id="' + props.id + '"' : null
    ].join(' ').replace(/  /g, " ");

    // Set the dialog class names
    let dialogClassNames = ["modal-dialog"];
    props.isCentered ? dialogClassNames.push("modal-dialog-centered") : null;
    props.isLarge ? dialogClassNames.push("modal-lg") : null;
    props.isSmall ? dialogClassNames.push("modal-sm") : null;

    // Generate the html
    let html = [
        '<div ' + attributes + '>',
        '<div class="' + dialogClassNames.join(' ') + '" role="document">',
        '<div class="modal-content">',
        '<div class="modal-header">',
        '<div class="modal-title">' + (props.title || "") + '</div>',
        props.hideCloseButton ? '' : [
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close">',
            '<span aria-hidden="true">&times;</span>',
            '</button>'
        ].join('\n'),
        '</div>',
        '<div class="modal-body"></div>',
        '<div class="modal-footer"></div>',
        '</div>',
        '</div>',
        '</div>'
    ].join('\n')

    // See if the element exists
    if (props.el) {
        // Set the class
        props.el.classList.add("bs");

        // Set the html
        props.el.innerHTML = html;

        // Execute the events
        props.onRenderBody ? props.onRenderBody(props.el.querySelector(".modal-body")) : null;
        props.onRenderFooter ? props.onRenderFooter(props.el.querySelector(".modal-footer")) : null;

        // Return the element
        return $(props.el.children[0]);
    } else {
        // Return the html
        return html;
    }
}