/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';

import { a as getProps } from './chunk-b00b75f4.js';

class Popover {
    render() {
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            isDismissible: this.isDismissible,
            type: this.type
        });
        return GD.Components.Popover(props);
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
