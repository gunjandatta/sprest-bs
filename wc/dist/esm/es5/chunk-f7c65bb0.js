/*! Built with http://stenciljs.com */
import { h } from "./gd-sprest-bs.core.js";
var ListGroup = /** @class */ (function () {
    function ListGroup() {
    }
    ListGroup.prototype.componentDidLoad = function () { var s = []; if (this.items)
        try {
            s = JSON.parse(this.items);
        }
        catch (e) {
            s = [], console.log("Error parsing the JSON string."), console.log(this.items);
        } return $REST.Components.ListGroup({ className: this.className, el: this.el.children[0], enableFade: this.enableFade, isFlush: this.isFlush, isTabs: this.isTabs, items: s }); };
    ListGroup.prototype.render = function () { return h("div", null); };
    Object.defineProperty(ListGroup, "is", {
        get: function () { return "bs-listGroup"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListGroup, "properties", {
        get: function () { return { className: { type: String, attr: "class-name" }, el: { elementRef: !0 }, enableFade: { type: Boolean, attr: "enable-fade" }, isFlush: { type: Boolean, attr: "is-flush" }, isTabs: { type: Boolean, attr: "is-tabs" }, items: { type: String, attr: "items" } }; },
        enumerable: true,
        configurable: true
    });
    return ListGroup;
}());
export { ListGroup as a };
