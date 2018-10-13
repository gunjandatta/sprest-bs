import { getProps } from "../common";
export class Form {
    render() {
        let props = getProps(this.el, {
            el: this.el
        });
        return GD.Components.Form(props);
    }
    static get is() { return "bs-form"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        }
    }; }
}
