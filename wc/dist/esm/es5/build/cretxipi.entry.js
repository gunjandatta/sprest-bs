import { a as getProps } from './chunk-69297144.js';
var Panel = /** @class */ (function () {
    function Panel() {
    }
    Panel.prototype.render = function () {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            type: this.type
        });
        GD.Components.Panel(props);
        this.el.setAttribute("data-init", "true");
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
