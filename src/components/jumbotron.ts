import * as jQuery from "jquery";
import { IJumbotron, IJumbotronProps } from "./types/jumbotron";

/**
 * Jumbotron
 */
export const Jumbotron = (props: IJumbotronProps): IJumbotron | string => {
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
    ].join('\n');

    // See if the element exists
    if (props.el) {
        // Set the class
        props.el.classList.add("bs");

        // Set the html
        props.el.innerHTML = html;

        // Call the render event
        props.onRenderContent ? props.onRenderContent(props.el.children[0] as any) : null;

        // Return the jumbotron
        let jumbotron = jQuery(props.el.children[0]);
        return {
            el: jumbotron
        };
    } else {
        // Return the html
        return html;
    }
}