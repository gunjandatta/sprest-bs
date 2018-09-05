/*! Built with http://stenciljs.com */
import { h } from "./gd-sprest-bs.core.js";
var InputGroup = /** @class */ (function () {
    function InputGroup() {
    }
    InputGroup.prototype.componentDidLoad = function () {
        var _this = this;
        var e = this.el.getAttribute("onChange"), t = this.el.getAttribute("onClear");
        return this.el.removeAttribute("id"), GD.Components.InputGroup({ appendedLabel: this.appendedLabel, className: this.className, description: this.description, el: this.el.children[0], id: this.id, isLarge: this.isLarge, isPlainText: this.isPlainText, isSmall: this.isSmall, label: this.label, placeholder: this.placeholder, prependedLabel: this.prependedLabel, type: this.type, value: this.value, onChange: function () {
                var t = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    t[_i] = arguments[_i];
                }
                e && window[e] && window[e].apply(_this, t);
            }, onClear: function () {
                var e = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    e[_i] = arguments[_i];
                }
                t && window[t] && window[t].apply(_this, e);
            } });
    };
    InputGroup.prototype.render = function () { return h("div", null); };
    Object.defineProperty(InputGroup, "is", {
        get: function () { return "bs-inputGroup"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputGroup, "properties", {
        get: function () { return { appendedLabel: { type: String, attr: "appended-label" }, className: { type: String, attr: "class-name" }, description: { type: String, attr: "description" }, el: { elementRef: !0 }, id: { type: String, attr: "id" }, isLarge: { type: Boolean, attr: "is-large" }, isPlainText: { type: Boolean, attr: "is-plain-text" }, isSmall: { type: Boolean, attr: "is-small" }, label: { type: String, attr: "label" }, placeholder: { type: String, attr: "placeholder" }, prependedLabel: { type: String, attr: "prepended-label" }, type: { type: Number, attr: "type" }, value: { type: String, attr: "value" } }; },
        enumerable: true,
        configurable: true
    });
    return InputGroup;
}());
export { InputGroup as a };
