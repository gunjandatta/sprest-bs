/*! Built with http://stenciljs.com */
import { h } from "./gd-sprest-bs.core.js";
var CardGroup = /** @class */ (function () {
    function CardGroup() {
    }
    CardGroup.prototype.componentDidLoad = function () { var r = []; if (this.cards)
        try {
            r = JSON.parse(this.cards);
        }
        catch (s) {
            r = [], console.log("Error parsing the JSON string."), console.log(this.cards);
        } return $REST.Components.CardGroup({ cards: r, className: this.className, el: this.el.children[0] }); };
    CardGroup.prototype.render = function () { return h("div", null); };
    Object.defineProperty(CardGroup, "is", {
        get: function () { return "bs-cardGroup"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardGroup, "properties", {
        get: function () { return { cards: { type: String, attr: "cards" }, className: { type: String, attr: "class-name" }, el: { elementRef: !0 } }; },
        enumerable: true,
        configurable: true
    });
    return CardGroup;
}());
export { CardGroup as a };
