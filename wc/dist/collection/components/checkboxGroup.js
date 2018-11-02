import { getProps } from "../common";
export class CheckboxGroup {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            className: this.className,
            colSize: this.colSize,
            hideLabel: this.hideLabel,
            label: this.label,
            multi: this.multi,
            el: this.el,
            type: this.type
        });
        GD.Components.CheckboxGroup(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-checkboxGroup"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "colSize": {
            "type": Number,
            "attr": "col-size"
        },
        "el": {
            "elementRef": true
        },
        "hideLabel": {
            "type": Boolean,
            "attr": "hide-label"
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "multi": {
            "type": Boolean,
            "attr": "multi"
        },
        "type": {
            "type": Number,
            "attr": "type"
        }
    }; }
}
