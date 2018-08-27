import { Component, Prop } from "@stencil/core";
//import { $REST } from "../../src/rest.d";
declare var $REST;

@Component({
    tag: "bs-buttonGroup"
})
export class ButtonGroup {
    el: HTMLElement;

    // Button Group Properties
    @Prop() buttons: string;
    @Prop() buttonType: number;
    @Prop() className: string;
    @Prop() id: string;
    @Prop() isLarge: boolean;
    @Prop() isSmall: boolean;
    @Prop() isVertical: boolean;
    @Prop() label: string;

    // Component loaded event
    componentDidLoad() {
        // Get the buttons property
        let buttons = [];
        if (this.buttons) {
            try { buttons = JSON.parse(this.buttons); }
            catch{ buttons = []; }
        }

        // Render the button group
        return $REST.Components.ButtonGroup({
            buttons: buttons,
            buttonType: this.buttonType,
            className: this.className,
            el: this.el,
            id: this.id,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            isVertical: this.isVertical,
            label: this.label
        });
    }

    // Render the button group
    render() {
        return (
            <div ref={el => this.el = el} />
        );
    }
}