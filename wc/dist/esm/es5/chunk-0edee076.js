/*! Built with http://stenciljs.com */
import { h } from "./gd-sprest-bs.core.js";
var Navbar = /** @class */ (function () {
    function Navbar() {
    }
    Navbar.prototype.componentDidLoad = function () {
        var _this = this;
        this.el.removeAttribute("id");
        var t = [];
        if (this.items)
            try {
                t = JSON.parse(this.items);
            }
            catch (e) {
                t = [], console.log("Error parsing the JSON string."), console.log(this.items);
            }
        var e = {};
        if (this.searchBox) {
            try {
                e = JSON.parse(this.searchBox);
            }
            catch (t) {
                e = {}, console.log("Error parsing the JSON string."), console.log(this.searchBox);
            }
            if (e.onChange && window[e.onChange]) {
                var t_1 = window[e.onChange];
                e.onChange = (function () {
                    var e = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        e[_i] = arguments[_i];
                    }
                    t_1.apply(_this, e);
                });
            }
            if (e.onSearch && window[e.onSearch]) {
                var t_2 = window[e.onSearch];
                e.onSearch = (function () {
                    var e = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        e[_i] = arguments[_i];
                    }
                    t_2.apply(_this, e);
                });
            }
        }
        return $REST.Components.Navbar({ brand: this.brand, brandUrl: this.brandUrl, className: this.className, el: this.el.children[0], id: this.id, items: t, searchBox: e, type: this.type });
    };
    Navbar.prototype.render = function () { return h("div", null); };
    Object.defineProperty(Navbar, "is", {
        get: function () { return "bs-navbar"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Navbar, "properties", {
        get: function () { return { brand: { type: String, attr: "brand" }, brandUrl: { type: String, attr: "brand-url" }, className: { type: String, attr: "class-name" }, el: { elementRef: !0 }, id: { type: String, attr: "id" }, items: { type: String, attr: "items" }, searchBox: { type: String, attr: "search-box" }, type: { type: Number, attr: "type" } }; },
        enumerable: true,
        configurable: true
    });
    return Navbar;
}());
export { Navbar as a };
