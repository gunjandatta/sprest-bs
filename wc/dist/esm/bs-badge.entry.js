import { r as registerInstance, g as getElement } from './gd-sprest-bs-b92f91e9.js';
import { g as getProps } from './chunk-26c2e58d.js';

class Badge {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    // Render the badge
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            content: this.content,
            el: this.el,
            header: this.header,
            href: this.href,
            isPill: this.isPill,
            type: this.type
        });
        // Render the badge
        GD.Components.Badge(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
    get el() { return getElement(this); }
}

export { Badge as bs_badge };
