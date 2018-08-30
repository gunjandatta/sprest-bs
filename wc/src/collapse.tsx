import { Component, Element, Prop } from "@stencil/core";
//import { $REST } from "../../src/rest.d";
declare var $REST;

@Component({
    tag: "bs-collapse"
})
export class Collapse {
    @Element() private el: HTMLElement;

    // Collapse Properties
    @Prop() className: string;
    @Prop() content: string;
    @Prop() id: string;
    @Prop() isMulti: boolean;
    @Prop() options: string;

    // Component loaded event
    componentDidLoad() {
        // Remove the id attribute
        this.el.removeAttribute("id");

        // Get the options
        let options = [];
        if (this.options) {
            try { options = JSON.parse(this.options); }
            catch {
                options = [];

                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.options);
            }
        }

        // Render the collapse
        return $REST.Components.Collapse({
            className: this.className,
            content: this.content,
            el: this.el.children[0],
            id: this.id,
            isMulti: this.isMulti,
            options
        });
    }

    // Render the collapse
    render() {
        return (
            <div />
        );
    }
}