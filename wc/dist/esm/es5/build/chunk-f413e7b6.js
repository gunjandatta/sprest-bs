import { a as getProps } from './chunk-b00b75f4.js';
var Tooltip = /** @class */ (function () {
    function Tooltip() {
    }
    Tooltip.prototype.render = function () {
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            type: this.type
        });
        return GD.Components.Tooltip(props);
    };
    Object.defineProperty(Tooltip, "is", {
        get: function () { return "bs-tooltip"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tooltip, "properties", {
        get: function () {
            return {
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "el": {
                    "elementRef": true
                },
                "type": {
                    "type": Number,
                    "attr": "type"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return Tooltip;
}());
export { Tooltip as a };
