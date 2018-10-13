import { a as getProps } from './chunk-69297144.js';
var Popover = /** @class */ (function () {
    function Popover() {
    }
    Popover.prototype.render = function () {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            isDismissible: this.isDismissible,
            type: this.type
        });
        GD.Components.Popover(props);
        this.el.setAttribute("data-init", "true");
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
