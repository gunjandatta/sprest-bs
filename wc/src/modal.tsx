import { Component, Prop } from "@stencil/core";
//import { $REST } from "../../src/rest.d";
declare var $REST;

@Component({
    tag: "bs-modal"
})
export class Modal {
    el: HTMLElement;

    // Modal Properties
    @Prop() className: string;
    @Prop() disableFade: boolean;
    @Prop() hideCloseButton: boolean;
    @Prop() id: string;
    @Prop() isCentered: boolean;
    @Prop() isLarge: boolean;
    @Prop() isSmall: boolean;
    //@Prop() onRenderBody: (el:Element) => void;
    //@Prop() onRenderFooter: (el:Element) => void;
    @Prop() title: string;

    // Component loaded event
    componentDidLoad() {
        // Render the modal
        return $REST.Components.Modal({
            className: this.className,
            disableFade: this.disableFade,
            el: this.el,
            hideCloseButton: this.hideCloseButton,
            id: this.id,
            isCentered: this.isCentered,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            title: this.title
        });
    }

    // Render the modal
    render() {
        return (
            <div ref={el => this.el = el} />
        );
    }
}