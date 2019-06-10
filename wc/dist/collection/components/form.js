import { getProps } from "../common";
export class Form {
    // Render the form
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        let props = getProps(this.el, {
            el: this.el
        });
        // Render the form
        GD.Components.Form(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-form"; }
    static get elementRef() { return "el"; }
}
