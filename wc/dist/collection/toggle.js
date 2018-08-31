export class Tooltip {
    // Component loaded event
    componentDidLoad() {
        // Get the button properties
        let btnProps = {};
        if (this.btnProps) {
            try {
                btnProps = JSON.parse(this.btnProps);
            }
            catch (_a) {
                btnProps = {};
                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.btnProps);
            }
        }
        // Get the tooltip options
        let options = {};
        if (this.options) {
            try {
                options = JSON.parse(this.options);
            }
            catch (_b) {
                options = {};
                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.options);
            }
        }
        // Render the tooltip
        return $REST.Components.Tooltip({
            btnProps,
            className: this.className,
            el: this.el.children[0],
            options,
            type: this.type
        });
    }
    // Render the tooltip
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-tooltip"; }
    static get properties() { return {
        "btnProps": {
            "type": String,
            "attr": "btn-props"
        },
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "options": {
            "type": String,
            "attr": "options"
        },
        "type": {
            "type": Number,
            "attr": "type"
        }
    }; }
}
