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
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            id: this.id
        });
        this.el.removeAttribute("id");
        return GD.Components.Accordion(props);
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
        var props = getProps(this.el, {
            className: this.className,
            content: this.content,
            el: this.el,
            header: this.header,
            isDismissible: this.isDismissible,
            type: this.type
        });
        return GD.Components.Alert(props);
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
        var props = getProps(this.el, {
            className: this.className,
            content: this.content,
            el: this.el,
            header: this.header,
            href: this.href,
            isPill: this.isPill,
            type: this.type
        });
        return GD.Components.Badge(props);
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
        var props = getProps(this.el, {
            className: this.className,
            el: this.el
        });
        return GD.Components.Breadcrumb(props);
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
var ButtonGroup = /** @class */ (function () {
    function ButtonGroup() {
    }
    ButtonGroup.prototype.render = function () {
        var props = getProps(this.el, {
            buttonType: this.buttonType,
            className: this.className,
            el: this.el,
            id: this.id,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            isVertical: this.isVertical,
            label: this.label
        });
        this.el.removeAttribute("id");
        return GD.Components.ButtonGroup(props);
    };
    Object.defineProperty(ButtonGroup, "is", {
        get: function () { return "bs-buttonGroup"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonGroup, "properties", {
        get: function () {
            return {
                "buttonType": {
                    "type": Number,
                    "attr": "button-type"
                },
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
                "isLarge": {
                    "type": Boolean,
                    "attr": "is-large"
                },
                "isSmall": {
                    "type": Boolean,
                    "attr": "is-small"
                },
                "isVertical": {
                    "type": Boolean,
                    "attr": "is-vertical"
                },
                "label": {
                    "type": String,
                    "attr": "label"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return ButtonGroup;
}());
var CardGroup = /** @class */ (function () {
    function CardGroup() {
    }
    CardGroup.prototype.render = function () {
        var props = getProps(this.el, {
            className: this.className,
            el: this.el
        });
        return GD.Components.CardGroup(props);
    };
    Object.defineProperty(CardGroup, "is", {
        get: function () { return "bs-cardGroup"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardGroup, "properties", {
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
    return CardGroup;
}());
export { getProps as a, Accordion as b, Alert as c, Badge as d, Breadcrumb as e, ButtonGroup as f, CardGroup as g };
