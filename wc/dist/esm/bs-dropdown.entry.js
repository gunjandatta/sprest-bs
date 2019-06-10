import { r as registerInstance, g as getElement } from './gd-sprest-bs-b92f91e9.js';
import { g as getProps } from './chunk-26c2e58d.js';

class Dropdown {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    // Render the dropdown
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            dropLeft: this.dropLeft,
            dropRight: this.dropRight,
            dropUp: this.dropUp,
            el: this.el,
            formFl: this.formFl,
            id: this.id,
            isSplit: this.isSplit,
            label: this.label,
            menuOnly: this.menuOnly,
            multi: this.multi,
            setLabelToValue: this.setLabelToValue,
            type: this.type,
            value: this.value
        });
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Render the dropdown
        GD.Components.Dropdown(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
    get el() { return getElement(this); }
}

export { Dropdown as bs_dropdown };
