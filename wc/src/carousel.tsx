import { Component, Element, Prop } from "@stencil/core";
declare var GD;

@Component({
    tag: "bs-carousel"
})
export class Carousel {
    @Element() private el: HTMLElement;

    // Carousel Properties
    @Prop() className: string;
    @Prop() enableControls: boolean;
    @Prop() enableCrossfade: boolean;
    @Prop() enableIndicators: boolean;
    @Prop() id: string;
    @Prop() items: string;
    @Prop() options: string;

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

        // Get the options
        let options = {};
        if (this.options) {
            try { options = JSON.parse(this.options); }
            catch {
                options = {};

                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.options);
            }
        }

        // Render the carousel
        return GD.Components.Carousel({
            className: this.className,
            el: this.el.children[0],
            enableControls: this.enableControls,
            enableCrossfade: this.enableCrossfade,
            enableIndicators: this.enableIndicators,
            id: this.id,
            items,
            options
        });
    }

    // Render the carousel
    render() {
        return (
            <div />
        );
    }
}