import { r as registerInstance, g as getElement } from './gd-sprest-bs-b92f91e9.js';
import { g as getProps } from './chunk-26c2e58d.js';
var Toolbar = /** @class */ (function () {
    function Toolbar(hostRef) {
        registerInstance(this, hostRef);
    }
    // Render the toolbar
    Toolbar.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            spacing: this.spacing
        });
        // Render the toolbar
        GD.Components.Toolbar(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Toolbar.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return Toolbar;
}());
export { Toolbar as bs_toolbar };
