import { r as registerInstance, g as getElement } from './gd-sprest-bs-b92f91e9.js';
import { g as getProps } from './chunk-26c2e58d.js';

class Toast {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    // Render the toast
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        let props = getProps(this.el, {
            bodyText: this.bodyText,
            className: this.className,
            closeButtonHidden: this.closeButtonHidden,
            closeButtonText: this.closeButtonText,
            el: this.el,
            headerImgClass: this.headerImgClass,
            headerImgSrc: this.headerImgSrc,
            headerText: this.headerText
        });
        // Render the toast
        GD.Components.Toast(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
    get el() { return getElement(this); }
}

export { Toast as bs_toast };
