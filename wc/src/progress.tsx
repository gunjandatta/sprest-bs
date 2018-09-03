import { Component, Element, Prop } from "@stencil/core";
declare var GD;

@Component({
    tag: "bs-progress"
})
export class Progress {
    @Element() private el: HTMLElement;

    // Progress Properties
    @Prop() className: string;
    @Prop() isAnimated: boolean;
    @Prop() isStriped: boolean;
    @Prop() label: string;
    @Prop() max: number;
    @Prop() min: number;
    @Prop() size: number;

    // Component loaded event
    componentDidLoad() {
        // Render the progress
        return GD.Components.Progress({
            className: this.className,
            el: this.el.children[0],
            isAnimated: this.isAnimated,
            isStriped: this.isStriped,
            label: this.label,
            max: this.max,
            min: this.min,
            size: this.size
        });
    }

    // Render the progress
    render() {
        return (
            <div />
        );
    }
}