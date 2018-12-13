/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';

import { a as getProps } from './chunk-69297144.js';

class WPSearch {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            camlQuery: this.camlQuery,
            cfgElementId: this.cfgElementId,
            className: this.className,
            el: this.el,
            wpClassName: this.wpClassName
        });
        this.el.removeAttribute("id");
        $REST.WebParts.WPSearch(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-webpart-search"; }
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

export { WPSearch as a };
