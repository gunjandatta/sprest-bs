import { getProps } from "../common";
export class WPSearch {
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
        $REST.WebParts.WPSearch(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-webpart-search"; }
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
