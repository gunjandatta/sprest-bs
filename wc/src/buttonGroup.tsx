import { Component, Element, Prop } from "@stencil/core";
declare var GD;

@Component({
    tag: "bs-buttonGroup"
})
export class ButtonGroup {
    @Element() private el: HTMLElement;

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
        // Remove the id attribute
        this.el.removeAttribute("id");

        // Get the buttons property
        let buttons = [];
        if (this.buttons) {
            try { buttons = JSON.parse(this.buttons); }
            catch {
                buttons = [];

                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.buttons);
            }
        }

        // Render the button group
        return GD.Components.ButtonGroup({
            buttons: buttons,
            buttonType: this.buttonType,
            className: this.className,
            el: this.el.children[0],
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
            <div />
        );
    }
}