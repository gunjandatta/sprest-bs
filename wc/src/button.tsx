import { Component, Prop } from "@stencil/core";
//import { $REST } from "../../src/rest.d";
declare var $REST;

@Component({
    tag: "bs-button"
})
export class Button {
    el: HTMLElement;

    // Button Properties
    @Prop() badgeType: number;
    @Prop() badgeValue: string;
    @Prop() className: string;
    @Prop() controls: Array<string>;
    @Prop() id: string;
    @Prop() isBlock: boolean;
    @Prop() isDisabled: boolean;
    @Prop() isExpanded: boolean;
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
        return $REST.Components.Button({
            badgeType: this.badgeType,
            badgeValue: this.badgeValue,
            className: this.className,
            controls: this.controls,
            el: this.el,
            id: this.id,
            isBlock: this.isBlock,
            isDisabled: this.isDisabled,
            isExpanded: this.isExpanded,
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