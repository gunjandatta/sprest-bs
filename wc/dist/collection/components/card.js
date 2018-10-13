import { getProps } from "../common";
export class Card {
    render() {
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            footer: this.footer,
            header: this.header,
            imgBottom: this.imgBottom,
            imgTop: this.imgTop
        });
        return GD.Components.Card(props);
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
