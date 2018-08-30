import { Component, Element, Prop } from "@stencil/core";
//import { $REST } from "../../src/rest.d";
declare var $REST;

@Component({
    tag: "bs-listGroup"
})
export class ListGroup {
    @Element() private el: HTMLElement;

    // List Group Properties
    @Prop() className: string;
    @Prop() enableFade: boolean;
    @Prop() isFlush: boolean;
    @Prop() isTabs: boolean;
    @Prop() items: string;

    // Component loaded event
    componentDidLoad() {
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

        // Render the list group
        return $REST.Components.ListGroup({
            className: this.className,
            el: this.el.children[0],
            enableFade: this.enableFade,
            isFlush: this.isFlush,
            isTabs: this.isTabs,
            items
        });
    }

    // Render the list group
    render() {
        return (
            <div />
        );
    }
}