/**
 * Button Properties
 */
export interface IButtonProps {
    el: Element | HTMLElement;
    target?: string;
    text?: string;
    toggle?: string;
}

/**
 * Button
 * @param props The button properties.
 */
export const Button = (props: IButtonProps) => {
    // Set the attributes
    let attributes = [
        'class="btn btn-primary"',
        'type="button"',
        props.target ? 'data-target="' + props.target + '"' : "",
        props.toggle ? 'data-toggle="' + props.toggle + '"' : ""
    ].join(' ').replace(/  /g, " ");

    // Set the class
    props.el.classList.add("bs");

    // Render the element
    props.el.innerHTML = [
        '<button ' + attributes + '>',
        props.text || "",
        '</button>'
    ].join('\n');
}