/*! Built with http://stenciljs.com */
import { h } from "./gd-sprest-bs.core.js";
var Collapse = /** @class */ (function () {
    function Collapse() {
    }
    Collapse.prototype.componentDidLoad = function () { this.el.removeAttribute("id"); var t = []; if (this.options)
        try {
            t = JSON.parse(this.options);
        }
        catch (e) {
            t = [], console.log("Error parsing the JSON string."), console.log(this.options);
        } return GD.Components.Collapse({ className: this.className, content: this.content, el: this.el.children[0], id: this.id, isMulti: this.isMulti, options: t }); };
    Collapse.prototype.render = function () { return h("div", null); };
    Object.defineProperty(Collapse, "is", {
        get: function () { return "bs-collapse"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collapse, "properties", {
        get: function () { return { className: { type: String, attr: "class-name" }, content: { type: String, attr: "content" }, el: { elementRef: !0 }, id: { type: String, attr: "id" }, isMulti: { type: Boolean, attr: "is-multi" }, options: { type: String, attr: "options" } }; },
        enumerable: true,
        configurable: true
    });
    return Collapse;
}());
export { Collapse as a };
