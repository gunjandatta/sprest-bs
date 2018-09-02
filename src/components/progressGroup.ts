import * as jQuery from "jquery";
import { IProgressGroup, IProgressGroupProps } from "./types/progressGroup";
import { Progress } from "./progress";

/**
 * Progress Group
 * @param props The progress group properties.
 */
export const ProgressGroup = (props: IProgressGroupProps): IProgressGroup => {
    // Set the class names
    let classNames = [];
    props.className ? classNames.push(props.className) : null;

    // Set the starting tag
    let html = ['<div class="' + classNames.join(' ') + '">'];

    // Parse the progress bars
    let progressbars = props.progressbars || [];
    for (let i = 0; i < progressbars.length; i++) {
        // Add the progress bar
        html.push(Progress(progressbars[i]).el.innerHTML);
    }

    // Add the closing tag
    html.push('</div>');

    // Get the element to render to
    let el = props.el || document.createElement("div");

    // Set the boostrap class
    el.classList.contains("bs") ? null : el.classList.add("bs");

    // Set the html
    el.innerHTML = html.join('\n');

    // Return the progress group
    let progressGroup = jQuery(el.children[0]);
    return { el };
}