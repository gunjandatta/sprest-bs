export class InputGroup {
    // Component loaded event
    componentDidLoad() {
        // Get the onclick attribute
        let onChange = this.el.parentElement.getAttribute("onChange");
        // Remove the id attribute
        this.el.parentElement.removeAttribute("id");
        // Render the inputGroup
        return $REST.Components.InputGroup({
            appendedLabel: this.appendedLabel,
            className: this.className,
            description: this.description,
            el: this.el,
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
            }
        });
    }
    // Render the inputGroup
    render() {
        return (h("div", { ref: el => this.el = el }));
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
