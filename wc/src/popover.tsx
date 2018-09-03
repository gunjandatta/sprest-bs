import { Component, Element, Prop } from "@stencil/core";
declare var GD;

@Component({
    tag: "bs-popover"
})
export class Popover {
    @Element() private el: HTMLElement;

    // Popover Properties
    @Prop() btnProps: string;
    @Prop() className: string;
    @Prop() isDismissible: boolean;
    @Prop() options: string;
    @Prop() type: number;

    // Component loaded event
    componentDidLoad() {
        // Get the button properties
        let btnProps = {};
        if (this.btnProps) {
            try { btnProps = JSON.parse(this.btnProps); }
            catch {
                btnProps = {};

                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.btnProps);
            }
        }

        // Get the popover options
        let options = {};
        if (this.options) {
            try { options = JSON.parse(this.options); }
            catch {
                options = {};

                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.options);
            }
        }

        // Render the popover
        return GD.Components.Popover({
            btnProps,
            className: this.className,
            el: this.el.children[0],
            isDismissible: this.isDismissible,
            options,
            type: this.type
        });
    }

    // Render the popover
    render() {
        return (
            <div />
        );
    }
}