export class Card {
    // Component loaded event
    componentDidLoad() {
        // Get the body property
        let body = [];
        if (this.body) {
            try {
                body = JSON.parse(this.body);
            }
            catch (_a) {
                body = [];
                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.body);
            }
        }
        console.log("Body Property: " + this.body);
        // Render the card
        return $REST.Components.Card({
            body: body,
            className: this.className,
            el: this.el,
            footer: this.footer,
            header: this.header,
            imgBottom: this.imgBottom,
            imgTop: this.imgTop
        });
    }
    // Render the card
    render() {
        return (h("div", { ref: el => this.el = el }));
    }
    static get is() { return "bs-card"; }
    static get properties() { return {
        "body": {
            "type": String,
            "attr": "body"
        },
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "footer": {
            "type": String,
            "attr": "footer"
        },
        "header": {
            "type": String,
            "attr": "header"
        },
        "imgBottom": {
            "type": "Any",
            "attr": "img-bottom"
        },
        "imgTop": {
            "type": "Any",
            "attr": "img-top"
        }
    }; }
}
