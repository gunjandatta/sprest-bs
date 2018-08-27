import { Component, Prop } from "@stencil/core";
//import { $REST } from "../../src/rest.d";
declare var $REST;

@Component({
    tag: "bs-form"
})
export class Form {
    el: HTMLElement;

    // Form Properties
    @Prop() className: string;
    @Prop() formFl: boolean;
    @Prop() id: string;
    @Prop() items: string;
    @Prop() label: string;
    @Prop() multi: boolean;
    //@Prop() onClick: (ev: Event) => void;
    @Prop() type: number;
    @Prop() value: string;

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

        // Render the form
        return $REST.Components.Form({
            className: this.className,
            el: this.el,
            formFl: this.formFl,
            id: this.id,
            items: items,
            label: this.label,
            multi: this.multi,
            type: this.type,
            value: this.value
        });
    }

    // Render the form
    render() {
        return (
            <div ref={el => this.el = el} />
        );
    }
}