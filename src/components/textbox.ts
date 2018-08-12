/**
 * Textbox Properties
 */
export interface ITextboxProps {
    el: Element | HTMLElement;
    multi?: boolean;
    value?: string;
}

/**
 * Textbox
 * @param props The textbox properties.
 */
export const Textbox = (props: ITextboxProps) => {
    // Set the class
    props.el.classList.add("bs");

    // Render the element
    props.el.innerHTML = [
        '<div class="input-group input-group-sm mb-3">',
        '<div class="input-group-prepend">',
        '<span class="input-group-text" id ="textbox">Small</span>',
        '</div>',
        '<input type="text" aria-label="input" aria-describedby="textbox" />',
        '</div>'
    ].join('\n');
}