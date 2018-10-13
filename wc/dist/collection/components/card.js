import { getProps } from "../common";
export class Card {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            footer: this.footer,
            header: this.header,
            imgBottom: this.imgBottom,
            imgTop: this.imgTop
        });
        GD.Components.Card(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-card"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "footer": {
            "type": String,
            "attr": "footer"
        },
        "header": {
            "type": String,
            "attr": "header"
        },
        "imgBottom": {
            "type": "Any",
            "attr": "img-bottom"
        },
        "imgTop": {
            "type": "Any",
            "attr": "img-top"
        }
    }; }
}
