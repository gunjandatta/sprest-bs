export class Form {
    componentDidLoad() {
        let rows = [];
        if (this.rows) {
            try {
                rows = JSON.parse(this.rows);
            }
            catch (_a) {
                rows = [];
                console.log("Error parsing the JSON string.");
                console.log(this.rows);
            }
        }
        let value = null;
        if (this.value) {
            try {
                value = JSON.parse(this.value);
            }
            catch (_b) {
                value = null;
                console.log("Error parsing the JSON string.");
                console.log(this.value);
            }
        }
        return GD.Components.Form({
            el: this.el.children[0],
            rows: rows,
            value: value
        });
    }
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
