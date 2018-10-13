import { getProps } from "../common";
export class CardGroup {
    render() {
        let props = getProps(this.el, {
            className: this.className,
            el: this.el
        });
        return GD.Components.CardGroup(props);
    }
    static get is() { return "bs-cardGroup"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        }
    }; }
}
