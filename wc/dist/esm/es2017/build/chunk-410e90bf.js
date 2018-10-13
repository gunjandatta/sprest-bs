/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';

import { a as getProps } from './chunk-69297144.js';

class CardGroup {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            className: this.className,
            el: this.el
        });
        GD.Components.CardGroup(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-cardGroup"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        }
    }; }
}

export { CardGroup as a };
