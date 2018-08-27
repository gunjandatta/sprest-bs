import { Component, Prop } from "@stencil/core";
//import { $REST } from "../../src/rest.d";
declare var $REST;

@Component({
    tag: "bs-card"
})
export class Card {
    el: HTMLElement;

    // Card Properties
    @Prop() body: string;
    @Prop() className: string;
    @Prop() footer: string;
    @Prop() header: string;
    @Prop() imgBottom: object;
    @Prop() imgTop: object;

    // Component loaded event
    componentDidLoad() {
        // Get the body property
        let body = [];
        if (this.body) {
            try { body = JSON.parse(this.body); }
            catch {
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
        return (
            <div ref={el => this.el = el} />
        );
    }
}