import { h } from '../gd-sprest-bs.core.js';

import { a as getProps } from './chunk-3f966420.js';

class Alert {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            className: this.className,
            content: this.content,
            el: this.el,
            header: this.header,
            isDismissible: this.isDismissible,
            type: this.type
        });
        GD.Components.Alert(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-alert"; }
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
        "header": {
            "type": String,
            "attr": "header"
        },
        "isDismissible": {
            "type": Boolean,
            "attr": "is-dismissible"
        },
        "type": {
            "type": Number,
            "attr": "type"
        }
    }; }
}

export { Alert as a };
