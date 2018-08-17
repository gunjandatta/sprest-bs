import { Component, Prop } from "@stencil/core";
import { Components } from "../../src";

@Component({
    tag: "bs-button"
})
export class Button {
    // Button Properties
    @Prop() className: string;
    @Prop() el: Element | HTMLElement;
    @Prop() id: string;
    @Prop() isBlock: boolean;
    @Prop() isDisabled: boolean;
    @Prop() isLarge: boolean;
    @Prop() isOutline: boolean;
    @Prop() isSmall: boolean;
    //@Prop() onClick: (ev: Event) => void;
    @Prop() target: string;
    @Prop() text: string;
    @Prop() toggle: string;
    @Prop() type: number;

    // Render the button
    render() {
        // Return the button
        return Components.Button({
            className: this.className,
            el: this.el,
            id: this.id,
            isBlock: this.isBlock,
            isDisabled: this.isDisabled,
            isLarge: this.isLarge,
            isOutline: this.isOutline,
            isSmall: this.isSmall,
            //onClick: this.onClick,
            target: this.target,
            text: this.text,
            toggle: this.toggle,
            type: this.type
        });
    }
}