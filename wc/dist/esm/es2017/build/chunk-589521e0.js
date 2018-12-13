/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';

import { a as getProps } from './chunk-69297144.js';
import { a as generateElement } from './chunk-7bca89a2.js';

class WPList {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        generateElement(this.el, this.elementId);
        generateElement(this.el, this.cfgElementId, true);
        let props = getProps(this.el, {
            camlQuery: this.camlQuery,
            cfgElementId: this.cfgElementId,
            className: this.className,
            element: this.elementId,
            wpClassName: this.wpClassName
        });
        this.el.removeAttribute("id");
        $REST.WebParts.WPList(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-webpart-list"; }
    static get properties() { return {
        "camlQuery": {
            "type": String,
            "attr": "caml-query"
        },
        "cfgElementId": {
            "type": String,
            "attr": "cfg-element-id"
        },
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "elementId": {
            "type": String,
            "attr": "element-id"
        },
        "wpClassName": {
            "type": String,
            "attr": "wp-class-name"
        }
    }; }
}

export { WPList as a };
