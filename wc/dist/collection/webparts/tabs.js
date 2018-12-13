import { getProps } from "../common";
export class WPTabs {
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
            type: this.type,
            wpClassName: this.wpClassName
        });
        this.el.removeAttribute("id");
        $REST.WebParts.WPTabs(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-webpart-tabs"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
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
