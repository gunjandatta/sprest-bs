import { Component, Element, Prop } from "@stencil/core";
//import { $REST } from "../../src/rest.d";
declare var $REST;

@Component({
    tag: "bs-accordion"
})
export class Accordion {
    @Element() private el: HTMLElement;

    // Accordion Properties
    @Prop() className: string;
    @Prop() id: string;
    @Prop() items: string;

    // Component loaded event
    componentDidLoad() {
        // Remove the id attribute
        this.el.removeAttribute("id");

        // Get the items
        let items = [];
        if (this.items) {
            try { items = JSON.parse(this.items); }
            catch {
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
        return (
            <div />
        );
    }
}