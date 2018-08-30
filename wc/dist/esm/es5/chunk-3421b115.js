/*! Built with http://stenciljs.com */
import { h } from "./gd-sprest-bs.core.js";
var Carousel = /** @class */ (function () {
    function Carousel() {
    }
    Carousel.prototype.componentDidLoad = function () { this.el.removeAttribute("id"); var e = []; if (this.items)
        try {
            e = JSON.parse(this.items);
        }
        catch (t) {
            e = [], console.log("Error parsing the JSON string."), console.log(this.items);
        } var t = {}; if (this.options)
        try {
            t = JSON.parse(this.options);
        }
        catch (e) {
            t = {}, console.log("Error parsing the JSON string."), console.log(this.options);
        } return $REST.Components.Carousel({ className: this.className, el: this.el.children[0], enableControls: this.enableControls, enableCrossfade: this.enableCrossfade, enableIndicators: this.enableIndicators, id: this.id, items: e, options: t }); };
    Carousel.prototype.render = function () { return h("div", null); };
    Object.defineProperty(Carousel, "is", {
        get: function () { return "bs-carousel"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carousel, "properties", {
        get: function () { return { className: { type: String, attr: "class-name" }, el: { elementRef: !0 }, enableControls: { type: Boolean, attr: "enable-controls" }, enableCrossfade: { type: Boolean, attr: "enable-crossfade" }, enableIndicators: { type: Boolean, attr: "enable-indicators" }, id: { type: String, attr: "id" }, items: { type: String, attr: "items" }, options: { type: String, attr: "options" } }; },
        enumerable: true,
        configurable: true
    });
    return Carousel;
}());
export { Carousel as a };
