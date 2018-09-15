/*! Built with http://stenciljs.com */
import { h } from "./gd-sprest-bs.core.js";
var Pagination = /** @class */ (function () {
    function Pagination() {
    }
    Pagination.prototype.componentDidLoad = function () {
        var _this = this;
        var t = this.el.getAttribute("onClick");
        return GD.Components.Pagination({ alignment: this.alignment, className: this.className, el: this.el.children[0], icon: this.icon, isLarge: this.isLarge, isSmall: this.isSmall, label: this.label, numberOfPages: this.numberOfPages, onClick: function () {
                var e = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    e[_i] = arguments[_i];
                }
                t && window[t] && window[t].apply(_this, e);
            } });
    };
    Pagination.prototype.render = function () { return h("div", null); };
    Object.defineProperty(Pagination, "is", {
        get: function () { return "bs-pagination"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pagination, "properties", {
        get: function () { return { alignment: { type: Number, attr: "alignment" }, className: { type: String, attr: "class-name" }, el: { elementRef: !0 }, icon: { type: String, attr: "icon" }, isLarge: { type: Boolean, attr: "is-large" }, isSmall: { type: Boolean, attr: "is-small" }, label: { type: String, attr: "label" }, numberOfPages: { type: Number, attr: "number-of-pages" } }; },
        enumerable: true,
        configurable: true
    });
    return Pagination;
}());
export { Pagination as a };
