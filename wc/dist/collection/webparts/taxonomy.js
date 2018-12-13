import { getProps } from "../common";
export class WPTaxonomy {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let elTarget = document.createElement("div");
        let elCfg = document.createElement("div");
        elCfg.style.display = "none";
        let props = getProps(this.el, {
            cfgElement: elCfg,
            className: this.className,
            element: elTarget,
            wpClassName: this.wpClassName
        });
        this.el.removeAttribute("id");
        $REST.WebParts.WPTaxonomy(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-webpart-taxonomy"; }
    static get properties() { return {
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
