import * as jQuery from "jquery";
import { ICollapse, ICollapseProps } from "./types/collapse";

/**
 * Collapse
 */
export const Collapse = (props: ICollapseProps): ICollapse => {
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
    ];

    // Get the element to render to
    let el = props.el || document.createElement("div");

    // Set the boostrap class
    el.classList.contains("bs") ? null : el.classList.add("bs");

    // Set the html
    el.innerHTML = html.join('\n');

    // Return the collapse
    let collapse = jQuery(el.children[0]);
    return {
        dispose: () => { collapse.collapse("dispose"); },
        el,
        hide: () => { collapse.collapse("hide"); },
        show: () => { collapse.collapse("show"); },
        toggle: () => { collapse.collapse("toggle"); }
    };
}