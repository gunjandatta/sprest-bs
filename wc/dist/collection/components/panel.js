import { getProps } from "../common";
export class Panel {
    render() {
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            type: this.type
        });
        return GD.Components.Panel(props);
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
