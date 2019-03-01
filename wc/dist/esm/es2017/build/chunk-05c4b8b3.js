import { h } from '../gd-sprest-bs.core.js';

import { a as getProps } from './chunk-7e340ae1.js';

class Accordion {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            id: this.id
        });
        this.el.removeAttribute("id");
        GD.Components.Accordion(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-accordion"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "id": {
            "type": String,
            "attr": "id"
        }
    }; }
}

export { Accordion as a };
