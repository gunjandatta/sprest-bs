/*! Built with http://stenciljs.com */
import { h } from "./gd-sprest-bs.core.js";
var Card = /** @class */ (function () {
    function Card() {
    }
    Card.prototype.componentDidLoad = function () { var t = []; if (this.body)
        try {
            t = JSON.parse(this.body);
        }
        catch (e) {
            t = [], console.log("Error parsing the JSON string."), console.log(this.body);
        } return GD.Components.Card({ body: t, className: this.className, el: this.el.children[0], footer: this.footer, header: this.header, imgBottom: this.imgBottom, imgTop: this.imgTop }); };
    Card.prototype.render = function () { return h("div", null); };
    Object.defineProperty(Card, "is", {
        get: function () { return "bs-card"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card, "properties", {
        get: function () { return { body: { type: String, attr: "body" }, className: { type: String, attr: "class-name" }, el: { elementRef: !0 }, footer: { type: String, attr: "footer" }, header: { type: String, attr: "header" }, imgBottom: { type: "Any", attr: "img-bottom" }, imgTop: { type: "Any", attr: "img-top" } }; },
        enumerable: true,
        configurable: true
    });
    return Card;
}());
export { Card as a };
