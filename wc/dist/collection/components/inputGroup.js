export class InputGroup {
    // Component loaded event
    componentDidLoad() {
        // Get the events
        let onChange = this.el.getAttribute("onChange");
        let onClear = this.el.getAttribute("onClear");
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Get the appended buttons
        let appendedButtons = [];
        if (this.appendedButtons) {
            try {
                appendedButtons = JSON.parse(this.appendedButtons);
            }
            catch (_a) {
                appendedButtons = [];
                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.appendedButtons);
            }
        }
        // Get the prepended buttons
        let prependedButtons = [];
        if (this.prependedButtons) {
            try {
                prependedButtons = JSON.parse(this.prependedButtons);
            }
            catch (_b) {
                prependedButtons = [];
                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.prependedButtons);
            }
        }
        // Render the inputGroup
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
            type: this.type,
            value: this.value,
            onChange: (...args) => {
                // See if a change event exists
                if (onChange && window[onChange]) {
                    // Call the event
                    window[onChange].apply(this, args);
                }
            },
            onClear: (...args) => {
                // See if a clear event exists
                if (onClear && window[onClear]) {
                    // Call the event
                    window[onClear].apply(this, args);
                }
            }
        });
    }
    // Render the inputGroup
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
