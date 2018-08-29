import { Component, Prop } from "@stencil/core";
//import { $REST } from "../../src/rest.d";
declare var $REST;

@Component({
    tag: "bs-dropdown"
})
export class Dropdown {
    el: HTMLElement;

    // Dropdown Properties
    @Prop() className: string;
    @Prop() formFl: boolean;
    @Prop() id: string;
    @Prop() items: string;
    @Prop() label: string;
    @Prop() multi: boolean;
    @Prop() type: number;
    @Prop() value: string;

    // Component loaded event
    componentDidLoad() {
        // Get the onclick attribute
        let onChange = this.el.parentElement.getAttribute("onChange");

        // Remove the id attribute
        this.el.parentElement.removeAttribute("id");

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

        // Render the dropdown
        return $REST.Components.Dropdown({
            className: this.className,
            el: this.el,
            formFl: this.formFl,
            id: this.id,
            items: items,
            label: this.label,
            multi: this.multi,
            type: this.type,
            value: this.value,
            onChange: (...args) => {
                // See if a change event exists
                if(onChange && window[onChange]) {
                    // Call the event
                    window[onChange].apply(this, args);
                }
            }
        });
    }

    // Render the dropdown
    render() {
        return (
            <div ref={el => this.el = el} />
        );
    }
}