import { getProps } from "../common";
export class Breadcrumb {
    render() {
        let props = getProps(this.el, {
            className: this.className,
            el: this.el
        });
        return GD.Components.Breadcrumb(props);
    }
    static get is() { return "bs-breadcrumb"; }
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
