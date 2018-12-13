/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';

import { a as getProps } from './chunk-69297144.js';

class WPList {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let elTarget = document.createElement("div");
        let elCfg = document.createElement("div");
        elCfg.style.display = "none";
        let props = getProps(this.el, {
            camlQuery: this.camlQuery,
            cfgElement: elCfg,
            className: this.className,
            element: elTarget,
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
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "wpClassName": {
            "type": String,
            "attr": "wp-class-name"
        }
    }; }
}

export { WPList as a };
