/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';

import { a as getProps } from './chunk-b00b75f4.js';

class Toolbar {
    render() {
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            spacing: this.spacing
        });
        return GD.Components.Toolbar(props);
    }
    static get is() { return "bs-toolbar"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "spacing": {
            "type": Number,
            "attr": "spacing"
        }
    }; }
}

export { Toolbar as a };
