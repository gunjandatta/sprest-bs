/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';

import { a as getProps } from './chunk-69297144.js';

class ListGroup {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            className: this.className,
            colWidth: this.colWidth,
            el: this.el,
            enableFade: this.enableFade,
            isFlush: this.isFlush,
            isTabs: this.isTabs
        });
        GD.Components.ListGroup(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-listGroup"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "colWidth": {
            "type": Number,
            "attr": "col-width"
        },
        "el": {
            "elementRef": true
        },
        "enableFade": {
            "type": Boolean,
            "attr": "enable-fade"
        },
        "isFlush": {
            "type": Boolean,
            "attr": "is-flush"
        },
        "isTabs": {
            "type": Boolean,
            "attr": "is-tabs"
        }
    }; }
}

export { ListGroup as a };
