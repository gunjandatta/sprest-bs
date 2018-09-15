export class Toolbar {
    // Component loaded event
    componentDidLoad() {
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
        // Render the toolbar
        return GD.Components.Toolbar({
            className: this.className,
            el: this.el.children[0],
            items,
            spacing: this.spacing
        });
    }
    // Render the toolbar
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-toolbar"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "items": {
            "type": String,
            "attr": "items"
        },
        "spacing": {
            "type": Number,
            "attr": "spacing"
        }
    }; }
}
