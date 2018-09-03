export class CardGroup {
    // Component loaded event
    componentDidLoad() {
        // Get the cards property
        let cards = [];
        if (this.cards) {
            try {
                cards = JSON.parse(this.cards);
            }
            catch (_a) {
                cards = [];
                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.cards);
            }
        }
        // Render the card group
        return GD.Components.CardGroup({
            cards: cards,
            className: this.className,
            el: this.el.children[0]
        });
    }
    // Render the card group
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-cardGroup"; }
    static get properties() { return {
        "cards": {
            "type": String,
            "attr": "cards"
        },
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        }
    }; }
}
