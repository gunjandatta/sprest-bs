import { a as getProps } from './chunk-b00b75f4.js';
var Navbar = /** @class */ (function () {
    function Navbar() {
    }
    Navbar.prototype.render = function () {
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
        return GD.Components.Navbar(props);
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
