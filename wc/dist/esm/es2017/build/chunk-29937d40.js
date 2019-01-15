import { h } from '../gd-sprest-bs.core.js';

import { a as getProps } from './chunk-b675a82d.js';

class Form {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            el: this.el
        });
        GD.Components.Form(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-form"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        }
    }; }
}

export { Form as a };
