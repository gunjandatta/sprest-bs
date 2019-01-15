import { h } from '../gd-sprest-bs.core.js';

import { a as getProps } from './chunk-b675a82d.js';

class Toolbar {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            spacing: this.spacing
        });
        GD.Components.Toolbar(props);
        this.el.setAttribute("data-init", "true");
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
