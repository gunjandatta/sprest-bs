import { h } from '../gd-sprest-bs.core.js';

import { a as getProps } from './chunk-3f966420.js';

class Spinner {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            isGrowing: this.isGrowing,
            isSmall: this.isSmall,
            text: this.text,
            type: this.type
        });
        GD.Components.Spinner(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-spinner"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "isGrowing": {
            "type": Boolean,
            "attr": "is-growing"
        },
        "isSmall": {
            "type": Boolean,
            "attr": "is-small"
        },
        "text": {
            "type": String,
            "attr": "text"
        },
        "type": {
            "type": Number,
            "attr": "type"
        }
    }; }
}

export { Spinner as BsSpinner };
