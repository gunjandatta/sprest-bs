import { a as getProps } from './chunk-b00b75f4.js';
var Nav = /** @class */ (function () {
    function Nav() {
    }
    Nav.prototype.render = function () {
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            enableFade: this.enableFade,
            enableFill: this.enableFill,
            id: this.id,
            isJustified: this.isJustified,
            isPills: this.isPills,
            isTabs: this.isTabs,
            isVertical: this.isVertical
        });
        this.el.removeAttribute("id");
        return GD.Components.Nav(props);
    };
    Object.defineProperty(Nav, "is", {
        get: function () { return "bs-nav"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Nav, "properties", {
        get: function () {
            return {
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "el": {
                    "elementRef": true
                },
                "enableFade": {
                    "type": Boolean,
                    "attr": "enable-fade"
                },
                "enableFill": {
                    "type": Boolean,
                    "attr": "enable-fill"
                },
                "id": {
                    "type": String,
                    "attr": "id"
                },
                "isJustified": {
                    "type": Boolean,
                    "attr": "is-justified"
                },
                "isPills": {
                    "type": Boolean,
                    "attr": "is-pills"
                },
                "isTabs": {
                    "type": Boolean,
                    "attr": "is-tabs"
                },
                "isVertical": {
                    "type": Boolean,
                    "attr": "is-vertical"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return Nav;
}());
export { Nav as a };
