import { getProps } from "../common";
import { generateElement } from "./helper";
export class WPTaxonomy {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        generateElement(this.el, this.elementId);
        generateElement(this.el, this.cfgElementId, true);
        let props = getProps(this.el, {
            cfgElementId: this.cfgElementId,
            className: this.className,
            element: this.elementId,
            wpClassName: this.wpClassName
        });
        this.el.removeAttribute("id");
        $REST.WebParts.WPTaxonomy(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-webpart-taxonomy"; }
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
        "wpClassName": {
            "type": String,
            "attr": "wp-class-name"
        }
    }; }
}
