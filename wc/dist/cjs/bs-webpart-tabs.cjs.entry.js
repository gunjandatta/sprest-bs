'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./gd-sprest-bs-3f7deb6f.js');
const __chunk_2 = require('./chunk-12decb9c.js');
const __chunk_3 = require('./chunk-7688d222.js');

class WPTabs {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    // Render the webpart tabs
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        let props = __chunk_2.getProps(this.el, {
            cfgElementId: this.cfgElementId,
            className: this.className,
            elementId: this.elementId,
            type: this.type,
            wpClassName: this.wpClassName
        });
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Generate the webpart elements
        __chunk_3.generateElement(this.el, props.elementId);
        __chunk_3.generateElement(this.el, props.cfgElementId, true);
        // Render the webpart
        $REST.WebParts.WPTabs(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
    get el() { return __chunk_1.getElement(this); }
}

exports.bs_webpart_tabs = WPTabs;
