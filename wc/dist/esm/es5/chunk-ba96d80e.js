/*! Built with http://stenciljs.com */
import { h } from "./gd-sprest-bs.core.js";
var Jumbotron = /** @class */ (function () {
    function Jumbotron() {
    }
    Jumbotron.prototype.componentDidLoad = function () {
        var _this = this;
        var t = this.el.getAttribute("onRenderContent");
        return GD.Components.Jumbotron({ className: this.className, content: this.content, el: this.el.children[0], isFluid: this.isFluid, lead: this.lead, title: this.el.getAttribute("title"), onRenderContent: function () {
                var e = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    e[_i] = arguments[_i];
                }
                t && window[t] && window[t].apply(_this, e);
            } });
    };
    Jumbotron.prototype.render = function () { return h("div", null); };
    Object.defineProperty(Jumbotron, "is", {
        get: function () { return "bs-jumbotron"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Jumbotron, "properties", {
        get: function () { return { className: { type: String, attr: "class-name" }, content: { type: String, attr: "content" }, el: { elementRef: !0 }, isFluid: { type: Boolean, attr: "is-fluid" }, lead: { type: String, attr: "lead" } }; },
        enumerable: true,
        configurable: true
    });
    return Jumbotron;
}());
export { Jumbotron as a };
