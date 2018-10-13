/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';

import { a as getProps } from './chunk-b00b75f4.js';

class Form {
    render() {
        let props = getProps(this.el, {
            el: this.el
        });
        return GD.Components.Form(props);
    }
    static get is() { return "bs-form"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        }
    }; }
}

export { Form as a };
