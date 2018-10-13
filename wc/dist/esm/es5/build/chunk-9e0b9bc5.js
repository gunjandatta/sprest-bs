import { a as getProps } from './chunk-69297144.js';
var Form = /** @class */ (function () {
    function Form() {
    }
    Form.prototype.render = function () {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        var props = getProps(this.el, {
            el: this.el
        });
        GD.Components.Form(props);
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Form, "is", {
        get: function () { return "bs-form"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Form, "properties", {
        get: function () {
            return {
                "el": {
                    "elementRef": true
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return Form;
}());
export { Form as a };
