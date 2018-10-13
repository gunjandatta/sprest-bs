/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';

import { a as getProps } from './chunk-b00b75f4.js';

class Collapse {
    render() {
        let props = getProps(this.el, {
            className: this.className,
            content: this.content,
            el: this.el,
            id: this.id,
            isMulti: this.isMulti
        });
        this.el.removeAttribute("id");
        return GD.Components.Collapse(props);
    }
    static get is() { return "bs-collapse"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "content": {
            "type": String,
            "attr": "content"
        },
        "el": {
            "elementRef": true
        },
        "id": {
            "type": String,
            "attr": "id"
        },
        "isMulti": {
            "type": Boolean,
            "attr": "is-multi"
        }
    }; }
}

export { Collapse as a };
