/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';

class InputGroup {
    componentDidLoad() {
        let onChange = this.el.getAttribute("onChange");
        let onClear = this.el.getAttribute("onClear");
        this.el.removeAttribute("id");
        let appendedButtons = [];
        if (this.appendedButtons) {
            try {
                appendedButtons = JSON.parse(this.appendedButtons);
            }
            catch (_a) {
                appendedButtons = [];
                console.log("Error parsing the JSON string.");
                console.log(this.appendedButtons);
            }
        }
        let prependedButtons = [];
        if (this.prependedButtons) {
            try {
                prependedButtons = JSON.parse(this.prependedButtons);
            }
            catch (_b) {
                prependedButtons = [];
                console.log("Error parsing the JSON string.");
                console.log(this.prependedButtons);
            }
        }
        return GD.Components.InputGroup({
            appendedButtons,
            appendedLabel: this.appendedLabel,
            className: this.className,
            description: this.description,
            el: this.el.children[0],
            id: this.id,
            isLarge: this.isLarge,
            isPlainText: this.isPlainText,
            isReadonly: this.isReadonly,
            isSmall: this.isSmall,
            label: this.label,
            placeholder: this.placeholder,
            prependedButtons,
            prependedLabel: this.prependedLabel,
            rows: this.rows,
            type: this.type,
            value: this.value,
            onChange: (...args) => {
                if (onChange && window[onChange]) {
                    window[onChange].apply(this, args);
                }
            },
            onClear: (...args) => {
                if (onClear && window[onClear]) {
                    window[onClear].apply(this, args);
                }
            }
        });
    }
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-inputGroup"; }
    static get properties() { return {
        "appendedButtons": {
            "type": String,
            "attr": "appended-buttons"
        },
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
        "prependedButtons": {
            "type": String,
            "attr": "prepended-buttons"
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

class Jumbotron {
    componentDidLoad() {
        let onRenderContent = this.el.getAttribute("onRenderContent");
        return GD.Components.Jumbotron({
            className: this.className,
            content: this.content,
            el: this.el.children[0],
            isFluid: this.isFluid,
            lead: this.lead,
            title: this.el.getAttribute("title"),
            onRenderContent: (...args) => {
                if (onRenderContent && window[onRenderContent]) {
                    window[onRenderContent].apply(this, args);
                }
            }
        });
    }
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-jumbotron"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "content": {
            "type": String,
            "attr": "content"
        },
        "el": {
            "elementRef": true
        },
        "isFluid": {
            "type": Boolean,
            "attr": "is-fluid"
        },
        "lead": {
            "type": String,
            "attr": "lead"
        }
    }; }
}

export { InputGroup as a, Jumbotron as b };
