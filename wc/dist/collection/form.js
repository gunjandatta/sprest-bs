export class Form {
    // Component loaded event
    componentDidLoad() {
        // Get the rows
        let rows = [];
        if (this.rows) {
            try {
                rows = JSON.parse(this.rows);
            }
            catch (_a) {
                rows = [];
                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.rows);
            }
        }
        // Get the value
        let value = null;
        if (this.value) {
            try {
                value = JSON.parse(this.value);
            }
            catch (_b) {
                value = null;
                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.value);
            }
        }
        // Render the form
        return $REST.Components.Form({
            el: this.el.children[0],
            rows: rows,
            value: value
        });
    }
    // Render the form
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-form"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "rows": {
            "type": String,
            "attr": "rows"
        },
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
}
