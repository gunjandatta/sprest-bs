/*! Built with http://stenciljs.com */
import { h } from "./gd-sprest-bs.core.js";
var Toolbar = /** @class */ (function () {
    function Toolbar() {
    }
    Toolbar.prototype.componentDidLoad = function () { var t = []; if (this.items)
        try {
            t = JSON.parse(this.items);
        }
        catch (e) {
            t = [], console.log("Error parsing the JSON string."), console.log(this.items);
        } return GD.Components.Toolbar({ className: this.className, el: this.el.children[0], items: t, spacing: this.spacing }); };
    Toolbar.prototype.render = function () { return h("div", null); };
    Object.defineProperty(Toolbar, "is", {
        get: function () { return "bs-toolbar"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toolbar, "properties", {
        get: function () { return { className: { type: String, attr: "class-name" }, el: { elementRef: !0 }, items: { type: String, attr: "items" }, spacing: { type: Number, attr: "spacing" } }; },
        enumerable: true,
        configurable: true
    });
    return Toolbar;
}());
export { Toolbar as a };
