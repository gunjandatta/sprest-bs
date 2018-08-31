/*! Built with http://stenciljs.com */
import { h } from "./gd-sprest-bs.core.js";
var ProgressGroup = /** @class */ (function () {
    function ProgressGroup() {
    }
    ProgressGroup.prototype.componentDidLoad = function () { var s = []; if (this.progressbars)
        try {
            s = JSON.parse(this.progressbars);
        }
        catch (r) {
            s = [], console.log("Error parsing the JSON string."), console.log(this.progressbars);
        } for (var r = 0; r < s.length; r++)
        console.log(s[r]); return $REST.Components.ProgressGroup({ className: this.className, el: this.el.children[0], isMultiple: this.isMultiple, progressbars: s }); };
    ProgressGroup.prototype.render = function () { return h("div", null); };
    Object.defineProperty(ProgressGroup, "is", {
        get: function () { return "bs-progressGroup"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressGroup, "properties", {
        get: function () { return { className: { type: String, attr: "class-name" }, el: { elementRef: !0 }, isMultiple: { type: Boolean, attr: "is-multiple" }, progressbars: { type: String, attr: "progressbars" } }; },
        enumerable: true,
        configurable: true
    });
    return ProgressGroup;
}());
export { ProgressGroup as a };
