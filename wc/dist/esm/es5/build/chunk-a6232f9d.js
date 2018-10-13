import { a as getProps } from './chunk-b00b75f4.js';
var Collapse = /** @class */ (function () {
    function Collapse() {
    }
    Collapse.prototype.render = function () {
        var props = getProps(this.el, {
            className: this.className,
            content: this.content,
            el: this.el,
            id: this.id,
            isMulti: this.isMulti
        });
        this.el.removeAttribute("id");
        return GD.Components.Collapse(props);
    };
    Object.defineProperty(Collapse, "is", {
        get: function () { return "bs-collapse"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collapse, "properties", {
        get: function () {
            return {
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "content": {
                    "type": String,
                    "attr": "content"
                },
                "el": {
                    "elementRef": true
                },
                "id": {
                    "type": String,
                    "attr": "id"
                },
                "isMulti": {
                    "type": Boolean,
                    "attr": "is-multi"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return Collapse;
}());
export { Collapse as a };
