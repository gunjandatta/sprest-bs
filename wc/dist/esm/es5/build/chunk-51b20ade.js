import { a as getProps } from './chunk-b00b75f4.js';
var Card = /** @class */ (function () {
    function Card() {
    }
    Card.prototype.render = function () {
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            footer: this.footer,
            header: this.header,
            imgBottom: this.imgBottom,
            imgTop: this.imgTop
        });
        return GD.Components.Card(props);
    };
    Object.defineProperty(Card, "is", {
        get: function () { return "bs-card"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card, "properties", {
        get: function () {
            return {
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "el": {
                    "elementRef": true
                },
                "footer": {
                    "type": String,
                    "attr": "footer"
                },
                "header": {
                    "type": String,
                    "attr": "header"
                },
                "imgBottom": {
                    "type": "Any",
                    "attr": "img-bottom"
                },
                "imgTop": {
                    "type": "Any",
                    "attr": "img-top"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return Card;
}());
export { Card as a };
