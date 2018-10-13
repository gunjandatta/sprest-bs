import { a as getProps } from './chunk-69297144.js';
var Tooltip = /** @class */ (function () {
    function Tooltip() {
    }
    Tooltip.prototype.render = function () {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            type: this.type
        });
        GD.Components.Tooltip(props);
        this.el.setAttribute("data-init", "true");
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
