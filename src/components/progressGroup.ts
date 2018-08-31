import * as jQuery from "jquery";
import { IProgressGroup, IProgressGroupProps } from "./types/progressGroup";
import { Progress } from "./progress";

/**
 * Progress Group
 * @param props The progress group properties.
 */
export const ProgressGroup = (props: IProgressGroupProps): IProgressGroup | string => {
    // Set the class names
    let classNames = [];
    props.className ? classNames.push(props.className) : null;

    // Set the starting tag
    let html = ['<div class="' + classNames.join(' ') + '">'];

    // Parse the progress bars
    let progressbars = props.progressbars || [];
    for (let i = 0; i < progressbars.length; i++) {
        // Add the progress bar
        html.push(Progress(progressbars[i]) as string);
    }

    // Add the closing tag
    html.push('</div>');

    // See if the element exists
    if (props.el) {
        // Set the class
        props.el.classList.add("bs");

        // Set the html
        props.el.innerHTML = html.join('\n');

        // Return the progress group
        let progressGroup = jQuery(props.el.children[0]);
        return {
            el: progressGroup
        };
    } else {
        // Return the html
        return html.join('\n');
    }
}