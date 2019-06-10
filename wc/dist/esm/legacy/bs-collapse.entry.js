import { r as registerInstance, g as getElement } from './gd-sprest-bs-b92f91e9.js';
import { g as getProps } from './chunk-26c2e58d.js';
var Collapse = /** @class */ (function () {
    function Collapse(hostRef) {
        registerInstance(this, hostRef);
    }
    // Render the collapse
    Collapse.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            className: this.className,
            content: this.content,
            el: this.el,
            id: this.id,
            isMulti: this.isMulti
        });
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Render the collapse
        GD.Components.Collapse(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Collapse.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return Collapse;
}());
export { Collapse as bs_collapse };
