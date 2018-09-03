import { Component, Element, Prop } from "@stencil/core";
declare var GD;

@Component({
    tag: "bs-listGroup"
})
export class ListGroup {
    @Element() private el: HTMLElement;

    // List Group Properties
    @Prop() className: string;
    @Prop() colWidth: number;
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
        return GD.Components.ListGroup({
            className: this.className,
            colWidth: this.colWidth,
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