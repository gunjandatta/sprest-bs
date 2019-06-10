import { r as registerInstance, g as getElement } from './gd-sprest-bs-b92f91e9.js';
import { g as getProps } from './chunk-26c2e58d.js';
import { g as generateElement } from './chunk-9cc2a43a.js';

class WPTabs {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    // Render the webpart tabs
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        let props = getProps(this.el, {
            cfgElementId: this.cfgElementId,
            className: this.className,
            elementId: this.elementId,
            type: this.type,
            wpClassName: this.wpClassName
        });
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Generate the webpart elements
        generateElement(this.el, props.elementId);
        generateElement(this.el, props.cfgElementId, true);
        // Render the webpart
        $REST.WebParts.WPTabs(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
    get el() { return getElement(this); }
}

export { WPTabs as bs_webpart_tabs };
