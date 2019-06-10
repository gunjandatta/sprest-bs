'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./gd-sprest-bs-3f7deb6f.js');
const __chunk_2 = require('./chunk-12decb9c.js');

class CardGroup {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    // Render the card group
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        let props = __chunk_2.getProps(this.el, {
            className: this.className,
            el: this.el
        });
        // Render the card group
        GD.Components.CardGroup(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
    get el() { return __chunk_1.getElement(this); }
}

exports.bs_card_group = CardGroup;
