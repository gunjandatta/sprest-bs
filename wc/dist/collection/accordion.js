export class Accordion {
    // Component loaded event
    componentDidLoad() {
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
        // Render the accordion
        return $REST.Components.Accordion({
            className: this.className,
            el: this.el.children[0],
            id: this.id,
            items
        });
    }
    // Render the accordion
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-accordion"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "id": {
            "type": String,
            "attr": "id"
        },
        "items": {
            "type": String,
            "attr": "items"
        }
    }; }
}
