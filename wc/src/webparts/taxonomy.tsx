import { Component, Element, Prop } from "@stencil/core";
import { getProps } from "../common";
declare var $REST;

@Component({
    tag: "bs-webpart-taxonomy"
})
export class WPTaxonomy {
    @Element() private el: HTMLElement;

    // WebPart Properties
    @Prop() className: string;
    @Prop() wpClassName: string;

    // Render the taxonomy webpart
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) { return; }

        // Create the target element
        let elTarget = document.createElement("div");

        // Create the configuration element
        let elCfg = document.createElement("div");
        elCfg.style.display = "none";

        // Get the properties
        let props = getProps(this.el, {
            cfgElement: elCfg,
            className: this.className,
            element: elTarget,
            wpClassName: this.wpClassName
        });

        // Append the elements
        this.el.appendChild(elTarget);
        this.el.appendChild(elCfg);

        // Remove the id attribute
        this.el.removeAttribute("id");

        // Render the webpart
        $REST.WebParts.WPTaxonomy(props);

        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
}