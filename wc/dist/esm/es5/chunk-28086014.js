/*! Built with http://stenciljs.com */
import { h } from "./gd-sprest-bs.core.js";
var Navbar = /** @class */ (function () {
    function Navbar() {
    }
    Navbar.prototype.componentDidLoad = function () {
        var _this = this;
        this.el.removeAttribute("id");
        var e = [];
        if (this.items)
            try {
                e = JSON.parse(this.items);
            }
            catch (t) {
                e = [], console.log("Error parsing the JSON string."), console.log(this.items);
            }
        var t = {};
        if (this.searchBox) {
            try {
                t = JSON.parse(this.searchBox);
            }
            catch (e) {
                t = {}, console.log("Error parsing the JSON string."), console.log(this.searchBox);
            }
            if (t.onChange && window[t.onChange]) {
                var e_1 = window[t.onChange];
                t.onChange = (function () {
                    var t = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        t[_i] = arguments[_i];
                    }
                    e_1.apply(_this, t);
                });
            }
            if (t.onSearch && window[t.onSearch]) {
                var e_2 = window[t.onSearch];
                t.onSearch = (function () {
                    var t = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        t[_i] = arguments[_i];
                    }
                    e_2.apply(_this, t);
                });
            }
        }
        return GD.Components.Navbar({ brand: this.brand, brandUrl: this.brandUrl, className: this.className, el: this.el.children[0], enableSearch: this.enableSearch, id: this.id, items: e, searchBox: t, type: this.type });
    };
    Navbar.prototype.render = function () { return h("div", null); };
    Object.defineProperty(Navbar, "is", {
        get: function () { return "bs-navbar"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Navbar, "properties", {
        get: function () { return { brand: { type: String, attr: "brand" }, brandUrl: { type: String, attr: "brand-url" }, className: { type: String, attr: "class-name" }, el: { elementRef: !0 }, enableSearch: { type: Boolean, attr: "enable-search" }, id: { type: String, attr: "id" }, items: { type: String, attr: "items" }, searchBox: { type: String, attr: "search-box" }, type: { type: Number, attr: "type" } }; },
        enumerable: true,
        configurable: true
    });
    return Navbar;
}());
export { Navbar as a };
