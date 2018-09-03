import { Component, Element, Prop } from "@stencil/core";
declare var GD;

@Component({
    tag: "bs-tooltip"
})
export class Tooltip {
    @Element() private el: HTMLElement;

    // Tooltip Properties
    @Prop() btnProps: string;
    @Prop() className: string;
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

        // Get the tooltip options
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

        // Render the tooltip
        return GD.Components.Tooltip({
            btnProps,
            className: this.className,
            el: this.el.children[0],
            options,
            type: this.type
        });
    }

    // Render the tooltip
    render() {
        return (
            <div />
        );
    }
}