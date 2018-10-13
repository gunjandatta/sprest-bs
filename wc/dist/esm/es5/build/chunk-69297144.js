var getProps = function (el, elProps) {
    if (elProps === void 0) { elProps = {}; }
    var props = {};
    var js = (el.innerHTML || "").trim();
    if (js.length > 0) {
        try {
            props = (new Function(js))();
            el.innerHTML = "";
        }
        catch (_a) {
            console.error("Error parsing the JS to get the properties.");
            console.error(js);
        }
    }
    for (var key in elProps) {
        if (typeof (props[key]) != "undefined") {
            continue;
        }
        props[key] = elProps[key];
    }
    return props;
};
var Accordion = /** @class */ (function () {
    function Accordion() {
    }
    Accordion.prototype.render = function () {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            id: this.id
        });
        this.el.removeAttribute("id");
        GD.Components.Accordion(props);
        this.el.setAttribute("data-init", "true");
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
    Alert.prototype.render = function () {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        var props = getProps(this.el, {
            className: this.className,
            content: this.content,
            el: this.el,
            header: this.header,
            isDismissible: this.isDismissible,
            type: this.type
        });
        GD.Components.Alert(props);
        this.el.setAttribute("data-init", "true");
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
    Badge.prototype.render = function () {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        var props = getProps(this.el, {
            className: this.className,
            content: this.content,
            el: this.el,
            header: this.header,
            href: this.href,
            isPill: this.isPill,
            type: this.type
        });
        GD.Components.Badge(props);
        this.el.setAttribute("data-init", "true");
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
    Breadcrumb.prototype.render = function () {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        var props = getProps(this.el, {
            className: this.className,
            el: this.el
        });
        GD.Components.Breadcrumb(props);
        this.el.setAttribute("data-init", "true");
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
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return Breadcrumb;
}());
var Card = /** @class */ (function () {
    function Card() {
    }
    Card.prototype.render = function () {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            footer: this.footer,
            header: this.header,
            imgBottom: this.imgBottom,
            imgTop: this.imgTop
        });
        GD.Components.Card(props);
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Card, "is", {
        get: function () { return "bs-card"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card, "properties", {
        get: function () {
            return {
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "el": {
                    "elementRef": true
                },
                "footer": {
                    "type": String,
                    "attr": "footer"
                },
                "header": {
                    "type": String,
                    "attr": "header"
                },
                "imgBottom": {
                    "type": "Any",
                    "attr": "img-bottom"
                },
                "imgTop": {
                    "type": "Any",
                    "attr": "img-top"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return Card;
}());
export { getProps as a, Accordion as b, Alert as c, Badge as d, Breadcrumb as e, Card as f };
