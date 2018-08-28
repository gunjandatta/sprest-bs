import { Component, Prop } from "@stencil/core";
//import { $REST } from "../../src/rest.d";
declare var $REST;

@Component({
    tag: "bs-navigation"
})
export class Navigation {
    el: HTMLElement;

    // Navigation Properties
    @Prop() className: string;
    @Prop() enableFade: boolean;
    @Prop() enableFill: boolean;
    @Prop() id: string;
    @Prop() items: string;
    @Prop() isJustified: string;
    @Prop() isPill: boolean;
    @Prop() isTabs: boolean;
    @Prop() isVertical: boolean;

    // Component loaded event
    componentDidLoad() {
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
        return $REST.Components.Navigation({
            className: this.className,
            el: this.el,
            enableFade: this.enableFade,
            enableFill: this.enableFill,
            id: this.id,
            items: items,
            isJustified: this.isJustified,
            isPill: this.isPill,
            isTabs: this.isTabs,
            isVertical: this.isVertical
        });
    }

    // Render the navigation
    render() {
        return (
            <div ref={el => this.el = el} />
        );
    }
}