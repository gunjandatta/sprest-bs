/*! Built with http://stenciljs.com */
import { h } from "./gd-sprest-bs.core.js";
var Progress = /** @class */ (function () {
    function Progress() {
    }
    Progress.prototype.componentDidLoad = function () { return GD.Components.Progress({ className: this.className, el: this.el.children[0], isAnimated: this.isAnimated, isStriped: this.isStriped, label: this.label, max: this.max, min: this.min, size: this.size }); };
    Progress.prototype.render = function () { return h("div", null); };
    Object.defineProperty(Progress, "is", {
        get: function () { return "bs-progress"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Progress, "properties", {
        get: function () { return { className: { type: String, attr: "class-name" }, el: { elementRef: !0 }, isAnimated: { type: Boolean, attr: "is-animated" }, isStriped: { type: Boolean, attr: "is-striped" }, label: { type: String, attr: "label" }, max: { type: Number, attr: "max" }, min: { type: Number, attr: "min" }, size: { type: Number, attr: "size" } }; },
        enumerable: true,
        configurable: true
    });
    return Progress;
}());
export { Progress as a };
