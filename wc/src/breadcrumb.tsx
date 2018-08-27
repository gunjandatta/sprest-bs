import { Component, Prop } from "@stencil/core";
//import { $REST } from "../../src/rest.d";
declare var $REST;

@Component({
    tag: "bs-breadcrumb"
})
export class Breadcrumb {
    el: HTMLElement;

    // Breadcrumb Properties
    @Prop() className: string;
    @Prop() items: string;

    // Component loaded event
    componentDidLoad() {
        // Get the items property
        let items = [];
        if (this.items) {
            try { items = JSON.parse(this.items); }
            catch{ items = []; }
        }

        // Render the breadcrumb
        return $REST.Components.Breadcrumb({
            className: this.className,
            el: this.el,
            items: items
        });
    }

    // Render the breadcrumb
    render() {
        return (
            <div ref={el => this.el = el} />
        );
    }
}