/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';

import { a as getProps } from './chunk-b00b75f4.js';

class ProgressGroup {
    render() {
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            isMultiple: this.isMultiple
        });
        return GD.Components.ProgressGroup(props);
    }
    static get is() { return "bs-progressGroup"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "isMultiple": {
            "type": Boolean,
            "attr": "is-multiple"
        }
    }; }
}

export { ProgressGroup as a };
