export class Dropdown {
    // Component loaded event
    componentDidLoad() {
        // Get the onclick attribute
        let onChange = this.el.getAttribute("onChange");
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Get the items
        let items = [];
        if (this.items) {
            try {
                items = JSON.parse(this.items);
            }
            catch (_a) {
                items = [];
                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.items);
            }
        }
        // Render the dropdown
        return $REST.Components.Dropdown({
            className: this.className,
            dropLeft: this.dropLeft,
            dropRight: this.dropRight,
            dropUp: this.dropUp,
            el: this.el.children[0],
            formFl: this.formFl,
            id: this.id,
            isSplit: this.isSplit,
            items: items,
            label: this.label,
            multi: this.multi,
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
    // Render the dropdown
    render() {
        return (h("div", null));
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
        "items": {
            "type": String,
            "attr": "items"
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
        },
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
}
