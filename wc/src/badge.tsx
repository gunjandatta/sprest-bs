import { Component, Element, Prop } from "@stencil/core";
declare var GD;

@Component({
    tag: "bs-badge"
})
export class Badge {
    @Element() private el: HTMLElement;

    // Badge Properties
    @Prop() className: string;
    @Prop() content: string;
    @Prop() header: string;
    @Prop() href: string;
    @Prop() isPill: boolean;
    @Prop() type: number;

    // Component loaded event
    componentDidLoad() {
        // Render the badge
        return GD.Components.Badge({
            className: this.className,
            content: this.content,
            el: this.el.children[0],
            header: this.header,
            href: this.href,
            isPill: this.isPill,
            type: this.type
        });
    }

    // Render the badge
    render() {
        return (
            <div />
        );
    }
}