import { Component, Element, Prop } from "@stencil/core";
//import { $REST } from "../../src/rest.d";
declare var $REST;

@Component({
    tag: "bs-cardGroup"
})
export class CardGroup {
    @Element() private el: HTMLElement;

    // Card Group Properties
    @Prop() cards: string;
    @Prop() className: string;

    // Component loaded event
    componentDidLoad() {
        // Get the cards property
        let cards = [];
        if (this.cards) {
            try { cards = JSON.parse(this.cards); }
            catch {
                cards = [];

                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.cards);
            }
        }

        // Render the card group
        return $REST.Components.CardGroup({
            cards: cards,
            className: this.className,
            el: this.el.children[0]
        });
    }

    // Render the card group
    render() {
        return (
            <div />
        );
    }
}