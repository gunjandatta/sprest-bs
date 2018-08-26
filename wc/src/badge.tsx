import { Component, Prop } from "@stencil/core";
//import { $REST } from "../../src/rest.d";
declare var $REST;

@Component({
    tag: "bs-badge"
})
export class Badge {
    el: HTMLElement;

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
        return $REST.Components.Badge({
            className: this.className,
            content: this.content,
            el: this.el,
            header: this.header,
            href: this.href,
            isPill: this.isPill,
            type: this.type
        });
    }

    // Render the badge
    render() {
        return (
            <div ref={el => this.el = el} />
        );
    }
}