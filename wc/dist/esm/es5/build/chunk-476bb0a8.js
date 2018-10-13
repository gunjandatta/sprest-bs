import { a as getProps } from './chunk-b00b75f4.js';
var Toolbar = /** @class */ (function () {
    function Toolbar() {
    }
    Toolbar.prototype.render = function () {
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            spacing: this.spacing
        });
        return GD.Components.Toolbar(props);
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
