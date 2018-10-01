/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';
var Accordion = /** @class */ (function () {
    function Accordion() {
    }
    Accordion.prototype.componentDidLoad = function () {
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
        return GD.Components.Accordion({
            className: this.className,
            el: this.el.children[0],
            id: this.id,
            items: items
        });
    };
    Accordion.prototype.render = function () {
        return (h("div", null));
    };
    Object.defineProperty(Accordion, "is", {
        get: function () { return "bs-accordion"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Accordion, "properties", {
        get: function () {
            return {
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "el": {
                    "elementRef": true
                },
                "id": {
                    "type": String,
                    "attr": "id"
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
    return Accordion;
}());
var Alert = /** @class */ (function () {
    function Alert() {
    }
    Alert.prototype.componentDidLoad = function () {
        return GD.Components.Alert({
            className: this.className,
            content: this.content,
            el: this.el,
            header: this.header,
            isDismissible: this.isDismissible,
            type: this.type
        });
    };
    Alert.prototype.render = function () {
        return (h("div", null));
    };
    Object.defineProperty(Alert, "is", {
        get: function () { return "bs-alert"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alert, "properties", {
        get: function () {
            return {
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "content": {
                    "type": String,
                    "attr": "content"
                },
                "el": {
                    "elementRef": true
                },
                "header": {
                    "type": String,
                    "attr": "header"
                },
                "isDismissible": {
                    "type": Boolean,
                    "attr": "is-dismissible"
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
    return Alert;
}());
var Badge = /** @class */ (function () {
    function Badge() {
    }
    Badge.prototype.componentDidLoad = function () {
        var _this = this;
        var onClick = this.el.getAttribute("onClick");
        return GD.Components.Badge({
            className: this.className,
            content: this.content,
            el: this.el.children[0],
            header: this.header,
            href: this.href,
            isPill: this.isPill,
            type: this.type,
            onClick: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (onClick && window[onClick]) {
                    window[onClick].apply(_this, args);
                }
            }
        });
    };
    Badge.prototype.render = function () {
        return (h("div", null));
    };
    Object.defineProperty(Badge, "is", {
        get: function () { return "bs-badge"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Badge, "properties", {
        get: function () {
            return {
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "content": {
                    "type": String,
                    "attr": "content"
                },
                "el": {
                    "elementRef": true
                },
                "header": {
                    "type": String,
                    "attr": "header"
                },
                "href": {
                    "type": String,
                    "attr": "href"
                },
                "isPill": {
                    "type": Boolean,
                    "attr": "is-pill"
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
    return Badge;
}());
var Breadcrumb = /** @class */ (function () {
    function Breadcrumb() {
    }
    Breadcrumb.prototype.componentDidLoad = function () {
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
        return GD.Components.Breadcrumb({
            className: this.className,
            el: this.el.children[0],
            items: items
        });
    };
    Breadcrumb.prototype.render = function () {
        return (h("div", null));
    };
    Object.defineProperty(Breadcrumb, "is", {
        get: function () { return "bs-breadcrumb"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Breadcrumb, "properties", {
        get: function () {
            return {
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "el": {
                    "elementRef": true
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
    return Breadcrumb;
}());
export { Accordion as a, Alert as b, Badge as c, Breadcrumb as d };
