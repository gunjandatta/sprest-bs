import { h } from '../gd-sprest-bs.core.js';

import { a as getProps } from './chunk-7e340ae1.js';

class Pagination {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            alignment: this.alignment,
            className: this.className,
            el: this.el,
            icon: this.icon,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            label: this.label,
            numberOfPages: this.numberOfPages
        });
        GD.Components.Pagination(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-pagination"; }
    static get properties() { return {
        "alignment": {
            "type": Number,
            "attr": "alignment"
        },
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "icon": {
            "type": String,
            "attr": "icon"
        },
        "isLarge": {
            "type": Boolean,
            "attr": "is-large"
        },
        "isSmall": {
            "type": Boolean,
            "attr": "is-small"
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "numberOfPages": {
            "type": Number,
            "attr": "number-of-pages"
        }
    }; }
}

export { Pagination as a };
