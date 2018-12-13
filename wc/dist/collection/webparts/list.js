import { getProps } from "../common";
import { generateElement } from "./helper";
export class WPList {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            camlQuery: this.camlQuery,
            cfgElementId: this.cfgElementId,
            className: this.className,
            elementId: this.elementId,
            wpClassName: this.wpClassName
        });
        this.el.removeAttribute("id");
        generateElement(this.el, props.elementId);
        generateElement(this.el, props.cfgElementId, true);
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
