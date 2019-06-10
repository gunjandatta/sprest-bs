import { r as registerInstance, g as getElement } from './gd-sprest-bs-b92f91e9.js';
import { g as getProps } from './chunk-26c2e58d.js';

class Modal {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    // Render the modal
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        let props = getProps(this.el, {
            body: this.body,
            className: this.className,
            disableFade: this.disableFade,
            el: this.el,
            footer: this.footer,
            hideCloseButton: this.hideCloseButton,
            id: this.id,
            isCentered: this.isCentered,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            title: this.el.getAttribute("title")
        });
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Render the modal
        GD.Components.Modal(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
    get el() { return getElement(this); }
}

export { Modal as bs_modal };
