import { h } from '../gd-sprest-bs.core.js';

import { a as getProps } from './chunk-b675a82d.js';

class Navbar {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            brand: this.brand,
            brandUrl: this.brandUrl,
            className: this.className,
            el: this.el,
            enableSearch: this.enableSearch,
            id: this.id,
            type: this.type
        });
        this.el.removeAttribute("id");
        GD.Components.Navbar(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-navbar"; }
    static get properties() { return {
        "brand": {
            "type": String,
            "attr": "brand"
        },
        "brandUrl": {
            "type": String,
            "attr": "brand-url"
        },
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "enableSearch": {
            "type": Boolean,
            "attr": "enable-search"
        },
        "id": {
            "type": String,
            "attr": "id"
        },
        "type": {
            "type": Number,
            "attr": "type"
        }
    }; }
}

export { Navbar as a };
