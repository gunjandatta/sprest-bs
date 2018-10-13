import { a as getProps } from './chunk-69297144.js';
var Navbar = /** @class */ (function () {
    function Navbar() {
    }
    Navbar.prototype.render = function () {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        var props = getProps(this.el, {
            brand: this.brand,
            brandUrl: this.brandUrl,
            className: this.className,
            el: this.el,
            enableSearch: this.enableSearch,
            id: this.id,
            type: this.type
        });
        this.el.removeAttribute("id");
        GD.Components.Navbar(props);
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Navbar, "is", {
        get: function () { return "bs-navbar"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Navbar, "properties", {
        get: function () {
            return {
                "brand": {
                    "type": String,
                    "attr": "brand"
                },
                "brandUrl": {
                    "type": String,
                    "attr": "brand-url"
                },
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "el": {
                    "elementRef": true
                },
                "enableSearch": {
                    "type": Boolean,
                    "attr": "enable-search"
                },
                "id": {
                    "type": String,
                    "attr": "id"
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
    return Navbar;
}());
export { Navbar as a };
