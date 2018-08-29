/*! Built with http://stenciljs.com */
import { h } from "./gd-sprest-bs.core.js";
var Alert = /** @class */ (function () {
    function Alert() {
    }
    Alert.prototype.componentDidLoad = function () { return $REST.Components.Alert({ className: this.className, content: this.content, el: this.el.children[0], header: this.header, isDismissible: this.isDismissible, type: this.type }); };
    Alert.prototype.render = function () { return h("div", null); };
    Object.defineProperty(Alert, "is", {
        get: function () { return "bs-alert"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alert, "properties", {
        get: function () { return { className: { type: String, attr: "class-name" }, content: { type: String, attr: "content" }, el: { elementRef: !0 }, header: { type: String, attr: "header" }, isDismissible: { type: Boolean, attr: "is-dismissible" }, type: { type: Number, attr: "type" } }; },
        enumerable: true,
        configurable: true
    });
    return Alert;
}());
export { Alert as a };
