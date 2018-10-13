import { getProps } from "../common";
export class ButtonGroup {
    render() {
        let props = getProps(this.el, {
            buttonType: this.buttonType,
            className: this.className,
            el: this.el,
            id: this.id,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            isVertical: this.isVertical,
            label: this.label
        });
        this.el.removeAttribute("id");
        return GD.Components.ButtonGroup(props);
    }
    static get is() { return "bs-buttonGroup"; }
    static get properties() { return {
        "buttonType": {
            "type": Number,
            "attr": "button-type"
        },
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "id": {
            "type": String,
            "attr": "id"
        },
        "isLarge": {
            "type": Boolean,
            "attr": "is-large"
        },
        "isSmall": {
            "type": Boolean,
            "attr": "is-small"
        },
        "isVertical": {
            "type": Boolean,
            "attr": "is-vertical"
        },
        "label": {
            "type": String,
            "attr": "label"
        }
    }; }
}
