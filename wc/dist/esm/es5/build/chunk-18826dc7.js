import { a as getProps } from './chunk-69297144.js';
var Collapse = /** @class */ (function () {
    function Collapse() {
    }
    Collapse.prototype.render = function () {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        var props = getProps(this.el, {
            className: this.className,
            content: this.content,
            el: this.el,
            id: this.id,
            isMulti: this.isMulti
        });
        this.el.removeAttribute("id");
        GD.Components.Collapse(props);
        this.el.setAttribute("data-init", "true");
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
