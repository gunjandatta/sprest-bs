import { getProps } from "../common";
export class InputGroup {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            appendedLabel: this.appendedLabel,
            className: this.className,
            description: this.description,
            el: this.el,
            id: this.id,
            isLarge: this.isLarge,
            isPlainText: this.isPlainText,
            isReadonly: this.isReadonly,
            isSmall: this.isSmall,
            label: this.label,
            placeholder: this.placeholder,
            prependedLabel: this.prependedLabel,
            rows: this.rows,
            type: this.type,
            value: this.value
        });
        this.el.removeAttribute("id");
        GD.Components.InputGroup(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-input-group"; }
    static get properties() { return {
        "appendedLabel": {
            "type": String,
            "attr": "appended-label"
        },
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "description": {
            "type": String,
            "attr": "description"
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
        "isPlainText": {
            "type": Boolean,
            "attr": "is-plain-text"
        },
        "isReadonly": {
            "type": Boolean,
            "attr": "is-readonly"
        },
        "isSmall": {
            "type": Boolean,
            "attr": "is-small"
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder"
        },
        "prependedLabel": {
            "type": String,
            "attr": "prepended-label"
        },
        "rows": {
            "type": Number,
            "attr": "rows"
        },
        "type": {
            "type": Number,
            "attr": "type"
        },
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
}
