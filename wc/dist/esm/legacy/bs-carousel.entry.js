import { r as registerInstance, g as getElement } from './gd-sprest-bs-b92f91e9.js';
import { g as getProps } from './chunk-26c2e58d.js';
var Carousel = /** @class */ (function () {
    function Carousel(hostRef) {
        registerInstance(this, hostRef);
    }
    // Render the carousel
    Carousel.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            enableControls: this.enableControls,
            enableCrossfade: this.enableCrossfade,
            enableIndicators: this.enableIndicators,
            id: this.id
        });
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Render the carousel
        GD.Components.Carousel(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Carousel.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return Carousel;
}());
export { Carousel as bs_carousel };
