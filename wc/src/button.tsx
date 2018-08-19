import { Component, Prop } from "@stencil/core";
declare var GD;

@Component({
    tag: "bs-button"
})
export class Button {
    el: HTMLElement;

    // Button Properties
    @Prop() className: string;
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

    // Component loaded event
    componentDidLoad() {
        // Render the button
        return GD.Components.Button({
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

    // Render the button
    render() {
        return (
            <div ref={el => this.el = el} />
        );
    }
}