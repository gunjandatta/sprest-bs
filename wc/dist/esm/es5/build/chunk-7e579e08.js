/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';
var ProgressGroup = /** @class */ (function () {
    function ProgressGroup() {
    }
    ProgressGroup.prototype.componentDidLoad = function () {
        var progressbars = [];
        if (this.progressbars) {
            try {
                progressbars = JSON.parse(this.progressbars);
            }
            catch (_a) {
                progressbars = [];
                console.log("Error parsing the JSON string.");
                console.log(this.progressbars);
            }
        }
        return GD.Components.ProgressGroup({
            className: this.className,
            el: this.el.children[0],
            isMultiple: this.isMultiple,
            progressbars: progressbars
        });
    };
    ProgressGroup.prototype.render = function () {
        return (h("div", null));
    };
    Object.defineProperty(ProgressGroup, "is", {
        get: function () { return "bs-progressGroup"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressGroup, "properties", {
        get: function () {
            return {
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "el": {
                    "elementRef": true
                },
                "isMultiple": {
                    "type": Boolean,
                    "attr": "is-multiple"
                },
                "progressbars": {
                    "type": String,
                    "attr": "progressbars"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return ProgressGroup;
}());
var Tooltip = /** @class */ (function () {
    function Tooltip() {
    }
    Tooltip.prototype.componentDidLoad = function () {
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
        return GD.Components.Tooltip({
            btnProps: btnProps,
            className: this.className,
            el: this.el.children[0],
            options: options,
            type: this.type
        });
    };
    Tooltip.prototype.render = function () {
        return (h("div", null));
    };
    Object.defineProperty(Tooltip, "is", {
        get: function () { return "bs-tooltip"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tooltip, "properties", {
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
    return Tooltip;
}());
var Toolbar = /** @class */ (function () {
    function Toolbar() {
    }
    Toolbar.prototype.componentDidLoad = function () {
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
        return GD.Components.Toolbar({
            className: this.className,
            el: this.el.children[0],
            items: items,
            spacing: this.spacing
        });
    };
    Toolbar.prototype.render = function () {
        return (h("div", null));
    };
    Object.defineProperty(Toolbar, "is", {
        get: function () { return "bs-toolbar"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toolbar, "properties", {
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
                },
                "spacing": {
                    "type": Number,
                    "attr": "spacing"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return Toolbar;
}());
export { ProgressGroup as a, Tooltip as b, Toolbar as c };
