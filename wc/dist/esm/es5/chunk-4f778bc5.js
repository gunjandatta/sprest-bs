/*! Built with http://stenciljs.com */
import { h } from "./gd-sprest-bs.core.js";
var Dropdown = /** @class */ (function () {
    function Dropdown() {
    }
    Dropdown.prototype.componentDidLoad = function () {
        var _this = this;
        var t = this.el.getAttribute("onChange");
        this.el.removeAttribute("id");
        var e = [];
        if (this.items)
            try {
                e = JSON.parse(this.items);
            }
            catch (t) {
                e = [], console.log("Error parsing the JSON string."), console.log(this.items);
            }
        return $REST.Components.Dropdown({ className: this.className, dropLeft: this.dropLeft, dropRight: this.dropRight, dropUp: this.dropUp, el: this.el.children[0], formFl: this.formFl, id: this.id, isSplit: this.isSplit, items: e, label: this.label, menuOnly: this.menuOnly, multi: this.multi, type: this.type, value: this.value, onChange: function () {
                var e = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    e[_i] = arguments[_i];
                }
                t && window[t] && window[t].apply(_this, e);
            } });
    };
    Dropdown.prototype.render = function () { return h("div", null); };
    Object.defineProperty(Dropdown, "is", {
        get: function () { return "bs-dropdown"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dropdown, "properties", {
        get: function () { return { className: { type: String, attr: "class-name" }, dropLeft: { type: Boolean, attr: "drop-left" }, dropRight: { type: Boolean, attr: "drop-right" }, dropUp: { type: Boolean, attr: "drop-up" }, el: { elementRef: !0 }, formFl: { type: Boolean, attr: "form-fl" }, id: { type: String, attr: "id" }, isSplit: { type: Boolean, attr: "is-split" }, items: { type: String, attr: "items" }, label: { type: String, attr: "label" }, menuOnly: { type: Boolean, attr: "menu-only" }, multi: { type: Boolean, attr: "multi" }, type: { type: Number, attr: "type" }, value: { type: String, attr: "value" } }; },
        enumerable: true,
        configurable: true
    });
    return Dropdown;
}());
export { Dropdown as a };
