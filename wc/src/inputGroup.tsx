import { Component, Element, Prop } from "@stencil/core";
//import { $REST } from "../../src/rest.d";
declare var $REST;

@Component({
    tag: "bs-inputGroup"
})
export class InputGroup {
    @Element() private el: HTMLElement;

    // InputGroup Properties
    @Prop() appendedLabel: string;
    @Prop() className: string;
    @Prop() description: string;
    @Prop() id: string;
    @Prop() isLarge: boolean;
    @Prop() isSmall: boolean;
    @Prop() label: string;
    @Prop() placeholder: string;
    @Prop() prependedLabel: string;
    @Prop() type: number;
    @Prop() value: string;

    // Component loaded event
    componentDidLoad() {
        // Get the onclick attribute
        let onChange = this.el.getAttribute("onChange");

        // Remove the id attribute
        this.el.removeAttribute("id");

        // Render the inputGroup
        return $REST.Components.InputGroup({
            appendedLabel: this.appendedLabel,
            className: this.className,
            description: this.description,
            el: this.el.children[0],
            id: this.id,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            label: this.label,
            placeholder: this.placeholder,
            prependedLabel: this.prependedLabel,
            type: this.type,
            value: this.value,
            onChange: (...args) => {
                // See if a change event exists
                if (onChange && window[onChange]) {
                    // Call the event
                    window[onChange].apply(this, args);
                }
            }
        });
    }

    // Render the inputGroup
    render() {
        return (
            <div />
        );
    }
}