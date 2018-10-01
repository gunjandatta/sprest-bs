/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';
var Pagination = /** @class */ (function () {
    function Pagination() {
    }
    Pagination.prototype.componentDidLoad = function () {
        var _this = this;
        var onClick = this.el.getAttribute("onClick");
        return GD.Components.Pagination({
            alignment: this.alignment,
            className: this.className,
            el: this.el.children[0],
            icon: this.icon,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            label: this.label,
            numberOfPages: this.numberOfPages,
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
    Pagination.prototype.render = function () {
        return (h("div", null));
    };
    Object.defineProperty(Pagination, "is", {
        get: function () { return "bs-pagination"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pagination, "properties", {
        get: function () {
            return {
                "alignment": {
                    "type": Number,
                    "attr": "alignment"
                },
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "el": {
                    "elementRef": true
                },
                "icon": {
                    "type": String,
                    "attr": "icon"
                },
                "isLarge": {
                    "type": Boolean,
                    "attr": "is-large"
                },
                "isSmall": {
                    "type": Boolean,
                    "attr": "is-small"
                },
                "label": {
                    "type": String,
                    "attr": "label"
                },
                "numberOfPages": {
                    "type": Number,
                    "attr": "number-of-pages"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return Pagination;
}());
var Popover = /** @class */ (function () {
    function Popover() {
    }
    Popover.prototype.componentDidLoad = function () {
        var btnProps = {};
        if (this.btnProps) {
            try {
                btnProps = JSON.parse(this.btnProps);
            }
            catch (_a) {
                btnProps = {};
                console.log("Error parsing the JSON string.");
                console.log(this.btnProps);
            }
        }
        var options = {};
        if (this.options) {
            try {
                options = JSON.parse(this.options);
            }
            catch (_b) {
                options = {};
                console.log("Error parsing the JSON string.");
                console.log(this.options);
            }
        }
        return GD.Components.Popover({
            btnProps: btnProps,
            className: this.className,
            el: this.el.children[0],
            isDismissible: this.isDismissible,
            options: options,
            type: this.type
        });
    };
    Popover.prototype.render = function () {
        return (h("div", null));
    };
    Object.defineProperty(Popover, "is", {
        get: function () { return "bs-popover"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Popover, "properties", {
        get: function () {
            return {
                "btnProps": {
                    "type": String,
                    "attr": "btn-props"
                },
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "el": {
                    "elementRef": true
                },
                "isDismissible": {
                    "type": Boolean,
                    "attr": "is-dismissible"
                },
                "options": {
                    "type": String,
                    "attr": "options"
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
    return Popover;
}());
var Progress = /** @class */ (function () {
    function Progress() {
    }
    Progress.prototype.componentDidLoad = function () {
        return GD.Components.Progress({
            className: this.className,
            el: this.el.children[0],
            isAnimated: this.isAnimated,
            isStriped: this.isStriped,
            label: this.label,
            max: this.max,
            min: this.min,
            size: this.size
        });
    };
    Progress.prototype.render = function () {
        return (h("div", null));
    };
    Object.defineProperty(Progress, "is", {
        get: function () { return "bs-progress"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Progress, "properties", {
        get: function () {
            return {
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "el": {
                    "elementRef": true
                },
                "isAnimated": {
                    "type": Boolean,
                    "attr": "is-animated"
                },
                "isStriped": {
                    "type": Boolean,
                    "attr": "is-striped"
                },
                "label": {
                    "type": String,
                    "attr": "label"
                },
                "max": {
                    "type": Number,
                    "attr": "max"
                },
                "min": {
                    "type": Number,
                    "attr": "min"
                },
                "size": {
                    "type": Number,
                    "attr": "size"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return Progress;
}());
export { Pagination as a, Popover as b, Progress as c };
