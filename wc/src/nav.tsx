import { Component, Element, Prop } from "@stencil/core";
declare var GD;

@Component({
    tag: "bs-nav"
})
export class Nav {
    @Element() private el: HTMLElement;

    // Navigation Properties
    @Prop() className: string;
    @Prop() enableFade: boolean;
    @Prop() enableFill: boolean;
    @Prop() id: string;
    @Prop() items: string;
    @Prop() isJustified: boolean;
    @Prop() isPills: boolean;
    @Prop() isTabs: boolean;
    @Prop() isVertical: boolean;

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

        // Render the navigation
        return GD.Components.Nav({
            className: this.className,
            el: this.el.children[0],
            enableFade: this.enableFade,
            enableFill: this.enableFill,
            id: this.id,
            items,
            isJustified: this.isJustified,
            isPills: this.isPills,
            isTabs: this.isTabs,
            isVertical: this.isVertical
        });
    }

    // Render the navigation
    render() {
        return (
            <div />
        );
    }
}