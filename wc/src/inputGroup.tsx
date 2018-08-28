import { Component, Prop } from "@stencil/core";
//import { $REST } from "../../src/rest.d";
declare var $REST;

@Component({
    tag: "bs-inputGroup"
})
export class InputGroup {
    el: HTMLElement;

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
        // Remove the id attribute
        this.el.parentElement.removeAttribute("id");

        // Render the inputGroup
        return $REST.Components.InputGroup({
            appendedLabel: this.appendedLabel,
            className: this.className,
            description: this.description,
            el: this.el,
            id: this.id,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            label: this.label,
            placeholder: this.placeholder,
            prependedLabel: this.prependedLabel,
            type: this.type,
            value: this.value
        });
    }

    // Render the inputGroup
    render() {
        return (
            <div ref={el => this.el = el} />
        );
    }
}