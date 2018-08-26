import { Component, Prop } from "@stencil/core";
//import { $REST } from "../../src/rest.d";
declare var $REST;

@Component({
    tag: "bs-alert"
})
export class Alert {
    el: HTMLElement;

    // Alert Properties
    @Prop() className: string;
    @Prop() content: string;
    @Prop() header: string;
    @Prop() isDismissible: boolean;
    @Prop() type: number;

    // Component loaded event
    componentDidLoad() {
        // Render the button
        return $REST.Components.Alert({
            className: this.className,
            content: this.content,
            header: this.header,
            isDismissible: this.isDismissible,
            type: this.type
        });
    }

    // Render the button
    render() {
        return (
            <div ref={el => this.el = el} />
        );
    }
}