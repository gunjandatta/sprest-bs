/*! Built with http://stenciljs.com */
import { h } from "./gd-sprest-bs.core.js";
var Popover = /** @class */ (function () {
    function Popover() {
    }
    Popover.prototype.componentDidLoad = function () { var t = {}; if (this.btnProps)
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
        } return GD.Components.Popover({ btnProps: t, className: this.className, el: this.el.children[0], isDismissible: this.isDismissible, options: s, type: this.type }); };
    Popover.prototype.render = function () { return h("div", null); };
    Object.defineProperty(Popover, "is", {
        get: function () { return "bs-popover"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Popover, "properties", {
        get: function () { return { btnProps: { type: String, attr: "btn-props" }, className: { type: String, attr: "class-name" }, el: { elementRef: !0 }, isDismissible: { type: Boolean, attr: "is-dismissible" }, options: { type: String, attr: "options" }, type: { type: Number, attr: "type" } }; },
        enumerable: true,
        configurable: true
    });
    return Popover;
}());
export { Popover as a };
