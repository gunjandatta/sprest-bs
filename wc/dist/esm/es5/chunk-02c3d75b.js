/*! Built with http://stenciljs.com */
import { h } from "./gd-sprest-bs.core.js";
var Collapse = /** @class */ (function () {
    function Collapse() {
    }
    Collapse.prototype.componentDidLoad = function () {
        var _this = this;
        var t = this.el.getAttribute("onRender");
        this.el.removeAttribute("id");
        var e = [];
        if (this.options)
            try {
                e = JSON.parse(this.options);
            }
            catch (t) {
                e = [], console.log("Error parsing the JSON string."), console.log(this.options);
            }
        return GD.Components.Collapse({ className: this.className, content: this.content, el: this.el.children[0], id: this.id, isMulti: this.isMulti, options: e, onRender: function () {
                var e = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    e[_i] = arguments[_i];
                }
                t && window[t] && window[t].apply(_this, e);
            } });
    };
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
