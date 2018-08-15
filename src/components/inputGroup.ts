/**
 * Input Group Properties
 */
export interface IInputGroupProps {
    appendedLabel?: string;
    className?: string;
    el?: Element | HTMLElement;
    id?: string;
    isLarge?: boolean;
    isMultiLine?: boolean;
    isSmall?: boolean;
    label?: string;
    prependedLabel?: string;
    value?: string;
}

/**
 * Input Group
 * @param props The input group properties.
 */
export const InputGroup = (props: IInputGroupProps) => {
    let html = [];

    // Set the class names
    let classNames = ["input-group"];
    props.className ? classNames.push(props.className) : null;
    props.isLarge ? classNames.push("input-group-lg") : null;
    props.isSmall ? classNames.push("input-group-sm") : null;

    // See if a label exists
    if (props.label) {
        html.push([
            '<label' + (props.id ? ' for="' + props.id + '"' : '') + '>',
            props.label,
            '</label>'
        ].join(''));
    }

    // Set the starting tag
    html.push('<div class="input-group">');

    // See if we are pre-pending a label
    if (props.prependedLabel) {
        // Add the label
        html.push([
            '<div class="input-group-prepend">',
            '<span class="input-group-text">' + props.prependedLabel + '</span>',
            '</div>'
        ].join('\n'));
    }

    // Add the textbox
    html.push(props.isMultiLine ?
        '<textarea class="form-control">' + (props.value || "") + '</textarea>'
        :
        '<input type="text" class="form-control"' + (props.id ? ' id="' + props.id + '"' : '') + '>' + (props.value || '') + '</input>'
    );

    // See if we are appending a label
    if (props.appendedLabel) {
        // Add the label
        html.push([
            '<div class="input-group-append">',
            '<span class="input-group-text">' + props.prependedLabel + '</span>',
            '</div>'
        ].join('\n'));
    }

    // See if the element exists
    if (props.el) {
        // Set the class
        props.el.classList.add("bs");

        // Set the html
        props.el.innerHTML = html.join('\n');
    } else {
        // Return the html
        return html.join('\n');
    }
}