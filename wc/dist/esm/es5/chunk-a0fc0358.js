/*! Built with http://stenciljs.com */
import { h } from "./gd-sprest-bs.core.js";
var Form = /** @class */ (function () {
    function Form() {
    }
    Form.prototype.componentDidLoad = function () { var r = []; if (this.rows)
        try {
            r = JSON.parse(this.rows);
        }
        catch (t) {
            r = [], console.log("Error parsing the JSON string."), console.log(this.rows);
        } var t = null; if (this.value)
        try {
            t = JSON.parse(this.value);
        }
        catch (r) {
            t = null, console.log("Error parsing the JSON string."), console.log(this.value);
        } return $REST.Components.Form({ el: this.el.children[0], rows: r, value: t }); };
    Form.prototype.render = function () { return h("div", null); };
    Object.defineProperty(Form, "is", {
        get: function () { return "bs-form"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Form, "properties", {
        get: function () { return { el: { elementRef: !0 }, rows: { type: String, attr: "rows" }, value: { type: String, attr: "value" } }; },
        enumerable: true,
        configurable: true
    });
    return Form;
}());
export { Form as a };
