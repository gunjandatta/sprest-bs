/*! Built with http://stenciljs.com */
import { h } from "./gd-sprest-bs.core.js";
var Breadcrumb = /** @class */ (function () {
    function Breadcrumb() {
    }
    Breadcrumb.prototype.componentDidLoad = function () { var e = []; if (this.items)
        try {
            e = JSON.parse(this.items);
        }
        catch (t) {
            e = [], console.log("Error parsing the JSON string."), console.log(this.items);
        } return $REST.Components.Breadcrumb({ className: this.className, el: this.el.children[0], items: e }); };
    Breadcrumb.prototype.render = function () { return h("div", null); };
    Object.defineProperty(Breadcrumb, "is", {
        get: function () { return "bs-breadcrumb"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Breadcrumb, "properties", {
        get: function () { return { className: { type: String, attr: "class-name" }, el: { elementRef: !0 }, items: { type: String, attr: "items" } }; },
        enumerable: true,
        configurable: true
    });
    return Breadcrumb;
}());
export { Breadcrumb as a };
