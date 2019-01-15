import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
import { generateElement } from "./helper";
declare var $REST;

@Component({
    tag: "bs-webpart-taxonomy"
})
export class WPTaxonomy {
    @Element() private el: HTMLElement;

    // WebPart Properties
    @Prop() cfgElementId: string;
    @Prop() className: string;
    @Prop() elementId: string;
    @Prop() wpClassName: string;

    // Render the taxonomy webpart
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) { return; }

        // Get the properties
        let props:any = getProps(this.el, {
            cfgElementId: this.cfgElementId,
            className: this.className,
            elementId: this.elementId,
            wpClassName: this.wpClassName
        });

        // Remove the id attribute
        this.el.removeAttribute("id");

        // Generate the webpart elements
        generateElement(this.el, props.elementId);
        generateElement(this.el, props.cfgElementId, true);

        // Render the webpart
        $REST.WebParts.WPTaxonomy(props);

        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
}