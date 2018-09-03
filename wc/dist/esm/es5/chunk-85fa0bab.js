/*! Built with http://stenciljs.com */
import { h } from "./gd-sprest-bs.core.js";
var ButtonGroup = /** @class */ (function () {
    function ButtonGroup() {
    }
    ButtonGroup.prototype.componentDidLoad = function () { this.el.removeAttribute("id"); var t = []; if (this.buttons)
        try {
            t = JSON.parse(this.buttons);
        }
        catch (e) {
            t = [], console.log("Error parsing the JSON string."), console.log(this.buttons);
        } return GD.Components.ButtonGroup({ buttons: t, buttonType: this.buttonType, className: this.className, el: this.el.children[0], id: this.id, isLarge: this.isLarge, isSmall: this.isSmall, isVertical: this.isVertical, label: this.label }); };
    ButtonGroup.prototype.render = function () { return h("div", null); };
    Object.defineProperty(ButtonGroup, "is", {
        get: function () { return "bs-buttonGroup"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonGroup, "properties", {
        get: function () { return { buttons: { type: String, attr: "buttons" }, buttonType: { type: Number, attr: "button-type" }, className: { type: String, attr: "class-name" }, el: { elementRef: !0 }, id: { type: String, attr: "id" }, isLarge: { type: Boolean, attr: "is-large" }, isSmall: { type: Boolean, attr: "is-small" }, isVertical: { type: Boolean, attr: "is-vertical" }, label: { type: String, attr: "label" } }; },
        enumerable: true,
        configurable: true
    });
    return ButtonGroup;
}());
export { ButtonGroup as a };
