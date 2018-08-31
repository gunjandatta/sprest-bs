/*! Built with http://stenciljs.com */
import { h } from "./gd-sprest-bs.core.js";
var Nav = /** @class */ (function () {
    function Nav() {
    }
    Nav.prototype.componentDidLoad = function () { this.el.removeAttribute("id"); var e = []; if (this.items)
        try {
            e = JSON.parse(this.items);
        }
        catch (t) {
            e = [], console.log("Error parsing the JSON string."), console.log(this.items);
        } return $REST.Components.Nav({ className: this.className, el: this.el.children[0], enableFade: this.enableFade, enableFill: this.enableFill, id: this.id, items: e, isJustified: this.isJustified, isPills: this.isPills, isTabs: this.isTabs, isVertical: this.isVertical }); };
    Nav.prototype.render = function () { return h("div", null); };
    Object.defineProperty(Nav, "is", {
        get: function () { return "bs-nav"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Nav, "properties", {
        get: function () { return { className: { type: String, attr: "class-name" }, el: { elementRef: !0 }, enableFade: { type: Boolean, attr: "enable-fade" }, enableFill: { type: Boolean, attr: "enable-fill" }, id: { type: String, attr: "id" }, isJustified: { type: Boolean, attr: "is-justified" }, isPills: { type: Boolean, attr: "is-pills" }, isTabs: { type: Boolean, attr: "is-tabs" }, isVertical: { type: Boolean, attr: "is-vertical" }, items: { type: String, attr: "items" } }; },
        enumerable: true,
        configurable: true
    });
    return Nav;
}());
export { Nav as a };
