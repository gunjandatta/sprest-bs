/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';

import { a as getProps } from './chunk-69297144.js';

class Popover {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            isDismissible: this.isDismissible,
            type: this.type
        });
        GD.Components.Popover(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-popover"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "isDismissible": {
            "type": Boolean,
            "attr": "is-dismissible"
        },
        "type": {
            "type": Number,
            "attr": "type"
        }
    }; }
}

export { Popover as a };
