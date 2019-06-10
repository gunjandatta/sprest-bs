'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./gd-sprest-bs-3f7deb6f.js');
const __chunk_2 = require('./chunk-12decb9c.js');

class Pagination {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    // Render the pagination
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        let props = __chunk_2.getProps(this.el, {
            alignment: this.alignment,
            className: this.className,
            el: this.el,
            icon: this.icon,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            label: this.label,
            numberOfPages: this.numberOfPages
        });
        // Render the pagination
        GD.Components.Pagination(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
    get el() { return __chunk_1.getElement(this); }
}

exports.bs_pagination = Pagination;
