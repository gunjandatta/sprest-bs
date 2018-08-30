import * as jQuery from "jquery";
import { ICollapse, ICollapseProps } from "./types/collapse";

/**
 * Collapse
 */
export const Collapse = (props: ICollapseProps): ICollapse | string => {
    // Set the class names
    let classNames = ["collapse"];
    props.className ? classNames.push(props.className) : null;
    props.isMulti ? classNames.push("multi-collapse") : null;

    // Set the attributes
    let attributes = [
        'class="' + classNames.join(' ') + '"',
        props.id ? 'id="' + props.id + '"' : ''
    ].join(' ');

    // Generate the html
    let html = [
        '<div ' + attributes + '>',
        '<div class="card card-body">',
        props.content || "",
        '</div>',
        '</div>'
    ].join('\n');

    // See if the element exists
    if (props.el) {
        // Set the class
        props.el.classList.add("bs");

        // Set the html
        props.el.innerHTML = html;

        // Return the collapse
        let collapse = jQuery(props.el.children[0]);
        return {
            dispose: () => { collapse.collapse("dispose"); },
            el: collapse,
            hide: () => { collapse.collapse("hide"); },
            show: () => { collapse.collapse("show"); },
            toggle: () => { collapse.collapse("toggle"); }
        };
    } else {
        // Return the html
        return html;
    }
}