export class Accordion {
    componentDidLoad() {
        this.el.removeAttribute("id");
        let items = [];
        if (this.items) {
            try {
                items = JSON.parse(this.items);
            }
            catch (_a) {
                items = [];
                console.log("Error parsing the JSON string.");
                console.log(this.items);
            }
        }
        return GD.Components.Accordion({
            className: this.className,
            el: this.el.children[0],
            id: this.id,
            items
        });
    }
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
