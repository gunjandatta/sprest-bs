import { Component, Element, Prop } from "@stencil/core";
declare var GD;

@Component({
    tag: "bs-progressGroup"
})
export class ProgressGroup {
    @Element() private el: HTMLElement;

    // Progress Properties
    @Prop() className: string;
    @Prop() isMultiple: boolean;
    @Prop() progressbars: string;

    // Component loaded event
    componentDidLoad() {
        // Set the progress bars
        let progressbars = [];
        if (this.progressbars) {
            try { progressbars = JSON.parse(this.progressbars); }
            catch {
                progressbars = [];

                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.progressbars);
            }
        }

        // Render the progress group
        return GD.Components.ProgressGroup({
            className: this.className,
            el: this.el.children[0],
            isMultiple: this.isMultiple,
            progressbars
        });
    }

    // Render the progress
    render() {
        return (
            <div />
        );
    }
}