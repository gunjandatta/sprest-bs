/*! Built with http://stenciljs.com */
import { h } from "./gd-sprest-bs.core.js";
var Tooltip = /** @class */ (function () {
    function Tooltip() {
    }
    Tooltip.prototype.componentDidLoad = function () { var t = {}; if (this.btnProps)
        try {
            t = JSON.parse(this.btnProps);
        }
        catch (s) {
            t = {}, console.log("Error parsing the JSON string."), console.log(this.btnProps);
        } var s = {}; if (this.options)
        try {
            s = JSON.parse(this.options);
        }
        catch (t) {
            s = {}, console.log("Error parsing the JSON string."), console.log(this.options);
        } return GD.Components.Tooltip({ btnProps: t, className: this.className, el: this.el.children[0], options: s, type: this.type }); };
    Tooltip.prototype.render = function () { return h("div", null); };
    Object.defineProperty(Tooltip, "is", {
        get: function () { return "bs-tooltip"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tooltip, "properties", {
        get: function () { return { btnProps: { type: String, attr: "btn-props" }, className: { type: String, attr: "class-name" }, el: { elementRef: !0 }, options: { type: String, attr: "options" }, type: { type: Number, attr: "type" } }; },
        enumerable: true,
        configurable: true
    });
    return Tooltip;
}());
export { Tooltip as a };
