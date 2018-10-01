/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';
var Nav = /** @class */ (function () {
    function Nav() {
    }
    Nav.prototype.componentDidLoad = function () {
        this.el.removeAttribute("id");
        var items = [];
        if (this.items) {
            try {
                items = JSON.parse(this.items);
            }
            catch (_a) {
                items = [];
                console.log("Error parsing the JSON string.");
                console.log(this.items);
            }
        }
        return GD.Components.Nav({
            className: this.className,
            el: this.el.children[0],
            enableFade: this.enableFade,
            enableFill: this.enableFill,
            id: this.id,
            items: items,
            isJustified: this.isJustified,
            isPills: this.isPills,
            isTabs: this.isTabs,
            isVertical: this.isVertical
        });
    };
    Nav.prototype.render = function () {
        return (h("div", null));
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
                },
                "items": {
                    "type": String,
                    "attr": "items"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return Nav;
}());
var Navbar = /** @class */ (function () {
    function Navbar() {
    }
    Navbar.prototype.componentDidLoad = function () {
        var _this = this;
        this.el.removeAttribute("id");
        var items = [];
        if (this.items) {
            try {
                items = JSON.parse(this.items);
            }
            catch (_a) {
                items = [];
                console.log("Error parsing the JSON string.");
                console.log(this.items);
            }
        }
        var searchBox = {};
        if (this.searchBox) {
            try {
                searchBox = JSON.parse(this.searchBox);
            }
            catch (_b) {
                searchBox = {};
                console.log("Error parsing the JSON string.");
                console.log(this.searchBox);
            }
            if (searchBox.onChange && window[searchBox.onChange]) {
                var event_1 = window[searchBox.onChange];
                searchBox.onChange = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    event_1.apply(_this, args);
                };
            }
            if (searchBox.onSearch && window[searchBox.onSearch]) {
                var event_2 = window[searchBox.onSearch];
                searchBox.onSearch = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    event_2.apply(_this, args);
                };
            }
        }
        return GD.Components.Navbar({
            brand: this.brand,
            brandUrl: this.brandUrl,
            className: this.className,
            el: this.el.children[0],
            enableSearch: this.enableSearch,
            id: this.id,
            items: items,
            searchBox: searchBox,
            type: this.type
        });
    };
    Navbar.prototype.render = function () {
        return (h("div", null));
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
                "items": {
                    "type": String,
                    "attr": "items"
                },
                "searchBox": {
                    "type": String,
                    "attr": "search-box"
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
export { Nav as a, Navbar as b };
