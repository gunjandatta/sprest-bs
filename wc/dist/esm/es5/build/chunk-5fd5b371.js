import { a as getProps } from './chunk-b00b75f4.js';
var Popover = /** @class */ (function () {
    function Popover() {
    }
    Popover.prototype.render = function () {
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            isDismissible: this.isDismissible,
            type: this.type
        });
        return GD.Components.Popover(props);
    };
    Object.defineProperty(Popover, "is", {
        get: function () { return "bs-popover"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Popover, "properties", {
        get: function () {
            return {
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "el": {
                    "elementRef": true
                },
                "isDismissible": {
                    "type": Boolean,
                    "attr": "is-dismissible"
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
    return Popover;
}());
export { Popover as a };
