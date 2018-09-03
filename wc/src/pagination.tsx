import { Component, Element, Prop } from "@stencil/core";
declare var GD;

@Component({
    tag: "bs-pagination"
})
export class Pagination {
    @Element() private el: HTMLElement;

    // Pagination Properties
    @Prop() alignment: number;
    @Prop() className: string;
    @Prop() icon: string;
    @Prop() isLarge: boolean;
    @Prop() isSmall: boolean;
    @Prop() label: string;
    @Prop() numberOfPages: number;

    // Component loaded event
    componentDidLoad() {
        // Get the onclick attribute
        let onClick = this.el.getAttribute("onClick");

        // Render the pagination
        return GD.Components.Pagination({
            alignment: this.alignment,
            className: this.className,
            el: this.el.children[0],
            icon: this.icon,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            label: this.label,
            numberOfPages: this.numberOfPages,
            onClick: (...args) => {
                // See if a click event exists
                if (onClick && window[onClick]) {
                    // Call the event
                    window[onClick].apply(this, args);
                }
            }
        });
    }

    // Render the pagination
    render() {
        return (
            <div />
        );
    }
}