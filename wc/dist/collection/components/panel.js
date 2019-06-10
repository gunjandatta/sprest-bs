import { getProps } from "../common";
export class Panel {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            type: this.type
        });
        GD.Components.Panel(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-panel"; }
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
        }
    }; }
}
