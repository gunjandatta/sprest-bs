import * as jQuery from "jquery";
import { IJumbotron, IJumbotronProps } from "./types/jumbotron";

/**
 * Jumbotron
 */
export const Jumbotron = (props: IJumbotronProps): IJumbotron => {
    // Set the class names
    let classNames = ["jumbotron"];
    props.className ? classNames.push(props.className) : null;
    props.isFluid ? classNames.push("jumbotron-fluid") : null;

    // Generate the html
    let html = [
        '<div class="' + classNames.join(' ') + '">',
        props.title ? '<h1 class="display-4">' + props.title + '</h1>' : '',
        props.lead ? '<p class="lead">' + props.lead + '</p>' : '',
        props.content || '',
        '</div>'
    ];

    // Get the element to render to
    let el = props.el || document.createElement("div");

    // Set the boostrap class
    el.classList.contains("bs") ? null : el.classList.add("bs");

    // Set the html
    el.innerHTML = html.join('\n');

    // Call the render event
    props.onRenderContent ? props.onRenderContent(el.children[0] as any) : null;

    // Return the jumbotron
    let jumbotron = jQuery(el.children[0]);
    return { el };
}