import { a as getProps } from './chunk-69297144.js';
var Jumbotron = /** @class */ (function () {
    function Jumbotron() {
    }
    Jumbotron.prototype.render = function () {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        var props = getProps(this.el, {
            className: this.className,
            content: this.content,
            el: this.el,
            isFluid: this.isFluid,
            lead: this.lead,
            title: this.el.getAttribute("title")
        });
        GD.Components.Jumbotron(props);
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Jumbotron, "is", {
        get: function () { return "bs-jumbotron"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Jumbotron, "properties", {
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
                "isFluid": {
                    "type": Boolean,
                    "attr": "is-fluid"
                },
                "lead": {
                    "type": String,
                    "attr": "lead"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return Jumbotron;
}());
export { Jumbotron as a };
