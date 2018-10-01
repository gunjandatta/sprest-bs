export class CardGroup {
    componentDidLoad() {
        let cards = [];
        if (this.cards) {
            try {
                cards = JSON.parse(this.cards);
            }
            catch (_a) {
                cards = [];
                console.log("Error parsing the JSON string.");
                console.log(this.cards);
            }
        }
        return GD.Components.CardGroup({
            cards: cards,
            className: this.className,
            el: this.el.children[0]
        });
    }
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
