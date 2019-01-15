import { h } from '../gd-sprest-bs.core.js';

import { a as getProps } from './chunk-b675a82d.js';

class Dropdown {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            className: this.className,
            dropLeft: this.dropLeft,
            dropRight: this.dropRight,
            dropUp: this.dropUp,
            el: this.el,
            formFl: this.formFl,
            id: this.id,
            isSplit: this.isSplit,
            label: this.label,
            menuOnly: this.menuOnly,
            multi: this.multi,
            type: this.type,
            value: this.value
        });
        this.el.removeAttribute("id");
        GD.Components.Dropdown(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-dropdown"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "dropLeft": {
            "type": Boolean,
            "attr": "drop-left"
        },
        "dropRight": {
            "type": Boolean,
            "attr": "drop-right"
        },
        "dropUp": {
            "type": Boolean,
            "attr": "drop-up"
        },
        "el": {
            "elementRef": true
        },
        "formFl": {
            "type": Boolean,
            "attr": "form-fl"
        },
        "id": {
            "type": String,
            "attr": "id"
        },
        "isSplit": {
            "type": Boolean,
            "attr": "is-split"
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "menuOnly": {
            "type": Boolean,
            "attr": "menu-only"
        },
        "multi": {
            "type": Boolean,
            "attr": "multi"
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

export { Dropdown as a };
