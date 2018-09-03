import { Component, Element, Prop } from "@stencil/core";
declare var GD;

@Component({
    tag: "bs-form"
})
export class Form {
    @Element() private el: HTMLElement;

    // Form Properties
    @Prop() rows: string;
    @Prop() value: string;

    // Component loaded event
    componentDidLoad() {
        // Get the rows
        let rows = [];
        if (this.rows) {
            try { rows = JSON.parse(this.rows); }
            catch {
                rows = [];

                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.rows);
            }
        }

        // Get the value
        let value = null;
        if (this.value) {
            try { value = JSON.parse(this.value); }
            catch {
                value = null;

                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.value);
            }
        }

        // Render the form
        return GD.Components.Form({
            el: this.el.children[0],
            rows: rows,
            value: value
        });
    }

    // Render the form
    render() {
        return (
            <div />
        );
    }
}