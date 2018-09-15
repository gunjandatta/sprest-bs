/*! Built with http://stenciljs.com */
import { h } from "./gd-sprest-bs.core.js";
var Badge = /** @class */ (function () {
    function Badge() {
    }
    Badge.prototype.componentDidLoad = function () {
        var _this = this;
        var t = this.el.getAttribute("onClick");
        return GD.Components.Badge({ className: this.className, content: this.content, el: this.el.children[0], header: this.header, href: this.href, isPill: this.isPill, type: this.type, onClick: function () {
                var e = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    e[_i] = arguments[_i];
                }
                t && window[t] && window[t].apply(_this, e);
            } });
    };
    Badge.prototype.render = function () { return h("div", null); };
    Object.defineProperty(Badge, "is", {
        get: function () { return "bs-badge"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Badge, "properties", {
        get: function () { return { className: { type: String, attr: "class-name" }, content: { type: String, attr: "content" }, el: { elementRef: !0 }, header: { type: String, attr: "header" }, href: { type: String, attr: "href" }, isPill: { type: Boolean, attr: "is-pill" }, type: { type: Number, attr: "type" } }; },
        enumerable: true,
        configurable: true
    });
    return Badge;
}());
export { Badge as a };
