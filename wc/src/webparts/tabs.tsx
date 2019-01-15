import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
import { generateElement } from "./helper";
declare var $REST;

@Component({
    tag: "bs-webpart-tabs"
})
export class WPTabs {
    @Element() private el: HTMLElement;

    // WebPart Properties
    @Prop() cfgElementId: string;
    @Prop() className: string;
    @Prop() elementId: string;
    @Prop() type: number;
    @Prop() wpClassName: string;

    // Render the webpart tabs
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) { return; }

        // Get the properties
        let props:any = getProps(this.el, {
            cfgElementId: this.cfgElementId,
            className: this.className,
            elementId: this.elementId,
            type: this.type,
            wpClassName: this.wpClassName
        });

        // Remove the id attribute
        this.el.removeAttribute("id");

        // Generate the webpart elements
        generateElement(this.el, props.elementId);
        generateElement(this.el, props.cfgElementId, true);

        // Render the webpart
        $REST.WebParts.WPTabs(props);

        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
}