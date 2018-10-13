import { a as getProps } from './chunk-69297144.js';
var CardGroup = /** @class */ (function () {
    function CardGroup() {
    }
    CardGroup.prototype.render = function () {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        var props = getProps(this.el, {
            className: this.className,
            el: this.el
        });
        GD.Components.CardGroup(props);
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(CardGroup, "is", {
        get: function () { return "bs-cardGroup"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardGroup, "properties", {
        get: function () {
            return {
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "el": {
                    "elementRef": true
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return CardGroup;
}());
export { CardGroup as a };
