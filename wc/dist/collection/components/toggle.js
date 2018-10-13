import { getProps } from "../common";
export class Tooltip {
    render() {
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            type: this.type
        });
        return GD.Components.Tooltip(props);
    }
    static get is() { return "bs-tooltip"; }
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
