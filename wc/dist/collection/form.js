export class Form {
    // Component loaded event
    componentDidLoad() {
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
        // Render the form
        return $REST.Components.Form({
            className: this.className,
            el: this.el,
            formFl: this.formFl,
            id: this.id,
            items: items,
            label: this.label,
            multi: this.multi,
            type: this.type,
            value: this.value
        });
    }
    // Render the form
    render() {
        return (h("div", { ref: el => this.el = el }));
    }
    static get is() { return "bs-form"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "formFl": {
            "type": Boolean,
            "attr": "form-fl"
        },
        "id": {
            "type": String,
            "attr": "id"
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
