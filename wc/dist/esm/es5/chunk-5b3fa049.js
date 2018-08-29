/*! Built with http://stenciljs.com */
import { h } from "./gd-sprest-bs.core.js";
var Modal = /** @class */ (function () {
    function Modal() {
    }
    Modal.prototype.componentDidLoad = function () {
        var _this = this;
        this.el.removeAttribute("id");
        var t = {};
        if (this.button)
            try {
                t = JSON.parse(this.button);
            }
            catch (e) {
                t = {}, console.log("Error parsing the JSON string."), console.log(this.button);
            }
        return $REST.Components.Modal({ body: this.body, button: t, className: this.className, disableFade: this.disableFade, el: this.el.children[0], footer: this.footer, hideCloseButton: this.hideCloseButton, id: this.id, isCentered: this.isCentered, isLarge: this.isLarge, isSmall: this.isSmall, title: this.el.getAttribute("title"), onRenderBody: function () {
                var t = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    t[_i] = arguments[_i];
                }
                _this.onRenderBody && window[_this.onRenderBody] && window[_this.onRenderBody].apply(_this, t);
            }, onRenderFooter: function () {
                var t = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    t[_i] = arguments[_i];
                }
                _this.onRenderFooter && window[_this.onRenderFooter] && window[_this.onRenderFooter].apply(_this, t);
            } });
    };
    Modal.prototype.render = function () { return h("div", null); };
    Object.defineProperty(Modal, "is", {
        get: function () { return "bs-modal"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal, "properties", {
        get: function () { return { body: { type: String, attr: "body" }, button: { type: String, attr: "button" }, className: { type: String, attr: "class-name" }, disableFade: { type: Boolean, attr: "disable-fade" }, el: { elementRef: !0 }, footer: { type: String, attr: "footer" }, hideCloseButton: { type: Boolean, attr: "hide-close-button" }, id: { type: String, attr: "id" }, isCentered: { type: Boolean, attr: "is-centered" }, isLarge: { type: Boolean, attr: "is-large" }, isSmall: { type: Boolean, attr: "is-small" }, onRenderBody: { type: String, attr: "on-render-body" }, onRenderFooter: { type: String, attr: "on-render-footer" } }; },
        enumerable: true,
        configurable: true
    });
    return Modal;
}());
export { Modal as a };
