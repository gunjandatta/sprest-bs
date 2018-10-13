import { a as getProps } from './chunk-b00b75f4.js';
var Jumbotron = /** @class */ (function () {
    function Jumbotron() {
    }
    Jumbotron.prototype.render = function () {
        var props = getProps(this.el, {
            className: this.className,
            content: this.content,
            el: this.el,
            isFluid: this.isFluid,
            lead: this.lead,
            title: this.el.getAttribute("title")
        });
        return GD.Components.Jumbotron(props);
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
