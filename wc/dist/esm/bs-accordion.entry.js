import { r as registerInstance, g as getElement } from './gd-sprest-bs-b92f91e9.js';
import { g as getProps } from './chunk-26c2e58d.js';

class Accordion {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    // Render the accordion
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            id: this.id
        });
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Render the accordion
        GD.Components.Accordion(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
    get el() { return getElement(this); }
}

export { Accordion as bs_accordion };
