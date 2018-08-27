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
            el: this.el,
            rows: rows,
            value: value
        });
    }
    // Render the form
    render() {
        return (h("div", { ref: el => this.el = el }));
    }
    static get is() { return "bs-form"; }
    static get properties() { return {
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
