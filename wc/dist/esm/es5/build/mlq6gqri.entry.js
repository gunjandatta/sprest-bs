import { a as getProps } from './chunk-b00b75f4.js';
var Panel = /** @class */ (function () {
    function Panel() {
    }
    Panel.prototype.render = function () {
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            type: this.type
        });
        return GD.Components.Panel(props);
    };
    Object.defineProperty(Panel, "is", {
        get: function () { return "bs-panel"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Panel, "properties", {
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
    return Panel;
}());
export { Panel as BsPanel };
