import { r as registerInstance, g as getElement } from './gd-sprest-bs-b92f91e9.js';
import { g as getProps } from './chunk-26c2e58d.js';

class CheckboxGroup {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    // Render the checkbox group
    render() {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        let props = getProps(this.el, {
            className: this.className,
            colSize: this.colSize,
            hideLabel: this.hideLabel,
            label: this.label,
            multi: this.multi,
            el: this.el,
            type: this.type
        });
        // Render the checkbox group
        GD.Components.CheckboxGroup(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    }
    get el() { return getElement(this); }
}

export { CheckboxGroup as bs_checkbox_group };
