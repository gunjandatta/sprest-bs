import { r as registerInstance, g as getElement } from './gd-sprest-bs-b92f91e9.js';
import { g as getProps } from './chunk-26c2e58d.js';
import { g as generateElement } from './chunk-9cc2a43a.js';

class WPList {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    // Render the list webpart
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        let props = getProps(this.el, {
            camlQuery: this.camlQuery,
            cfgElementId: this.cfgElementId,
            className: this.className,
            elementId: this.elementId,
            wpClassName: this.wpClassName
        });
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Generate the webpart elements
        generateElement(this.el, props.elementId);
        generateElement(this.el, props.cfgElementId, true);
        // Render the list webpart
        $REST.WebParts.WPList(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
    get el() { return getElement(this); }
}

export { WPList as bs_webpart_list };
