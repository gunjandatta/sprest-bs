/*! Built with http://stenciljs.com */
import { h } from "./gd-sprest-bs.core.js";
var Badge = /** @class */ (function () {
    function Badge() {
    }
    Badge.prototype.componentDidLoad = function () { return $REST.Components.Badge({ className: this.className, content: this.content, el: this.el.children[0], header: this.header, href: this.href, isPill: this.isPill, type: this.type }); };
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
