import * as jQuery from "jquery";
import { IProgress, IProgressProps } from "./types/progress";

/**
 * Progress
 */
export const Progress = (props: IProgressProps): IProgress | string => {
    let maxValue = typeof (props.max) === "number" ? props.max : 100;
    let minValue = typeof (props.min) === "number" ? props.min : 0;
    let size = typeof (props.size) === "number" ? props.size : 0;

    // Set the class names
    let classNames = ["progress"];
    props.className ? classNames.push(props.className) : null;

    // Set the bar class names
    let barClassNames = ["progress-bar"];
    props.isAnimated ? barClassNames.push("progress-bar-animated") : null;
    props.isStriped ? barClassNames.push("progress-bar-striped") : null;

    // Set the attributes
    let attributes = [
        'class="' + barClassNames.join(' ') + '"',
        'role="progressbar"',
        'style="width: ' + size + '%"',
        'aria-valuenow="' + size + '"',
        'aria-valuemin="' + minValue + '"',
        'aria-valuemax="' + maxValue + '"'
    ].join(' ');

    // Set the starting tag
    let html = [
        '<div class="' + classNames.join(' ') + '">',
        '<div ' + attributes + '>' + (props.label || '') + '</div>',
        '</div>'
    ].join('\n');

    // See if the element exists
    if (props.el) {
        // Set the class
        props.el.classList.add("bs");

        // Set the html
        props.el.innerHTML = html;

        // Return the progress
        let progress = jQuery(props.el.children[0]);
        return {
            el: progress
        };
    } else {
        // Return the html
        return html;
    }
}