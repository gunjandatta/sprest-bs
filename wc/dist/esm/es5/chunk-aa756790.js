/*! Built with http://stenciljs.com */
import { h } from "./gd-sprest-bs.core.js";
var InputGroup = /** @class */ (function () {
    function InputGroup() {
    }
    InputGroup.prototype.componentDidLoad = function () {
        var _this = this;
        var e = this.el.getAttribute("onChange"), t = this.el.getAttribute("onClear");
        this.el.removeAttribute("id");
        var n = [];
        if (this.appendedButtons)
            try {
                n = JSON.parse(this.appendedButtons);
            }
            catch (e) {
                n = [], console.log("Error parsing the JSON string."), console.log(this.appendedButtons);
            }
        var a = [];
        if (this.prependedButtons)
            try {
                a = JSON.parse(this.prependedButtons);
            }
            catch (e) {
                a = [], console.log("Error parsing the JSON string."), console.log(this.prependedButtons);
            }
        return GD.Components.InputGroup({ appendedButtons: n, appendedLabel: this.appendedLabel, className: this.className, description: this.description, el: this.el.children[0], id: this.id, isLarge: this.isLarge, isPlainText: this.isPlainText, isReadonly: this.isReadonly, isSmall: this.isSmall, label: this.label, placeholder: this.placeholder, prependedButtons: a, prependedLabel: this.prependedLabel, type: this.type, value: this.value, onChange: function () {
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
        get: function () { return { appendedButtons: { type: String, attr: "appended-buttons" }, appendedLabel: { type: String, attr: "appended-label" }, className: { type: String, attr: "class-name" }, description: { type: String, attr: "description" }, el: { elementRef: !0 }, id: { type: String, attr: "id" }, isLarge: { type: Boolean, attr: "is-large" }, isPlainText: { type: Boolean, attr: "is-plain-text" }, isReadonly: { type: Boolean, attr: "is-readonly" }, isSmall: { type: Boolean, attr: "is-small" }, label: { type: String, attr: "label" }, placeholder: { type: String, attr: "placeholder" }, prependedButtons: { type: String, attr: "prepended-buttons" }, prependedLabel: { type: String, attr: "prepended-label" }, type: { type: Number, attr: "type" }, value: { type: String, attr: "value" } }; },
        enumerable: true,
        configurable: true
    });
    return InputGroup;
}());
export { InputGroup as a };
