export class InputGroup {
    // Component loaded event
    componentDidLoad() {
        // Get the events
        let onChange = this.el.getAttribute("onChange");
        let onClear = this.el.getAttribute("onClear");
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Render the inputGroup
        return GD.Components.InputGroup({
            appendedLabel: this.appendedLabel,
            className: this.className,
            description: this.description,
            el: this.el.children[0],
            id: this.id,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            label: this.label,
            placeholder: this.placeholder,
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
