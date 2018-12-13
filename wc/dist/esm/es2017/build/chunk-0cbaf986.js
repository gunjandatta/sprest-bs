/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';

import { a as getProps } from './chunk-69297144.js';

class WPTabs {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            cfgElementId: this.cfgElementId,
            className: this.className,
            el: this.el,
            type: this.type,
            wpClassName: this.wpClassName
        });
        this.el.removeAttribute("id");
        $REST.WebParts.WPTabs(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-webpart-tabs"; }
    static get properties() { return {
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
        "type": {
            "type": Number,
            "attr": "type"
        },
        "wpClassName": {
            "type": String,
            "attr": "wp-class-name"
        }
    }; }
}

export { WPTabs as a };
