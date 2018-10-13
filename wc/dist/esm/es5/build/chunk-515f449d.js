import { a as getProps } from './chunk-69297144.js';
var Toolbar = /** @class */ (function () {
    function Toolbar() {
    }
    Toolbar.prototype.render = function () {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            spacing: this.spacing
        });
        GD.Components.Toolbar(props);
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Toolbar, "is", {
        get: function () { return "bs-toolbar"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toolbar, "properties", {
        get: function () {
            return {
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "el": {
                    "elementRef": true
                },
                "spacing": {
                    "type": Number,
                    "attr": "spacing"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return Toolbar;
}());
export { Toolbar as a };
