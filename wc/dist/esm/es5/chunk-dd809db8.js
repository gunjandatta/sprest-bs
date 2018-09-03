/*! Built with http://stenciljs.com */
import { h } from "./gd-sprest-bs.core.js";
var Accordion = /** @class */ (function () {
    function Accordion() {
    }
    Accordion.prototype.componentDidLoad = function () { this.el.removeAttribute("id"); var t = []; if (this.items)
        try {
            t = JSON.parse(this.items);
        }
        catch (e) {
            t = [], console.log("Error parsing the JSON string."), console.log(this.items);
        } return GD.Components.Accordion({ className: this.className, el: this.el.children[0], id: this.id, items: t }); };
    Accordion.prototype.render = function () { return h("div", null); };
    Object.defineProperty(Accordion, "is", {
        get: function () { return "bs-accordion"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Accordion, "properties", {
        get: function () { return { className: { type: String, attr: "class-name" }, el: { elementRef: !0 }, id: { type: String, attr: "id" }, items: { type: String, attr: "items" } }; },
        enumerable: true,
        configurable: true
    });
    return Accordion;
}());
export { Accordion as a };
