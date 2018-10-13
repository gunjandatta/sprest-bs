import { a as getProps } from './chunk-b00b75f4.js';
var Form = /** @class */ (function () {
    function Form() {
    }
    Form.prototype.render = function () {
        var props = getProps(this.el, {
            el: this.el
        });
        return GD.Components.Form(props);
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
