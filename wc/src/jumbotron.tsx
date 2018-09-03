import { Component, Element, Prop } from "@stencil/core";
declare var GD;

@Component({
    tag: "bs-jumbotron"
})
export class Jumbotron {
    @Element() private el: HTMLElement;

    // Jumbotron Properties
    @Prop() className: string;
    @Prop() content: string;
    @Prop() isFluid: boolean;
    @Prop() lead: string;

    // Component loaded event
    componentDidLoad() {
        // Get the onRenderContent attribute
        let onRenderContent = this.el.getAttribute("onRenderContent");

        // Render the jumbotron
        return GD.Components.Jumbotron({
            className: this.className,
            content: this.content,
            el: this.el.children[0],
            isFluid: this.isFluid,
            lead: this.lead,
            title: this.el.getAttribute("title"),
            onRenderContent: (...args) => {
                // See if a render event exists
                if (onRenderContent && window[onRenderContent]) {
                    // Call the event
                    window[onRenderContent].apply(this, args);
                }
            }
        });
    }

    // Render the jumbotron
    render() {
        return (
            <div />
        );
    }
}