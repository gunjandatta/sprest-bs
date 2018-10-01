/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';
var Collapse = /** @class */ (function () {
    function Collapse() {
    }
    Collapse.prototype.componentDidLoad = function () {
        var _this = this;
        var onRender = this.el.getAttribute("onRender");
        this.el.removeAttribute("id");
        var options = [];
        if (this.options) {
            try {
                options = JSON.parse(this.options);
            }
            catch (_a) {
                options = [];
                console.log("Error parsing the JSON string.");
                console.log(this.options);
            }
        }
        return GD.Components.Collapse({
            className: this.className,
            content: this.content,
            el: this.el.children[0],
            id: this.id,
            isMulti: this.isMulti,
            options: options,
            onRender: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (onRender && window[onRender]) {
                    window[onRender].apply(_this, args);
                }
            }
        });
    };
    Collapse.prototype.render = function () {
        return (h("div", null));
    };
    Object.defineProperty(Collapse, "is", {
        get: function () { return "bs-collapse"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collapse, "properties", {
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
                "id": {
                    "type": String,
                    "attr": "id"
                },
                "isMulti": {
                    "type": Boolean,
                    "attr": "is-multi"
                },
                "options": {
                    "type": String,
                    "attr": "options"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return Collapse;
}());
var Dropdown = /** @class */ (function () {
    function Dropdown() {
    }
    Dropdown.prototype.componentDidLoad = function () {
        var _this = this;
        var onChange = this.el.getAttribute("onChange");
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
        return GD.Components.Dropdown({
            className: this.className,
            dropLeft: this.dropLeft,
            dropRight: this.dropRight,
            dropUp: this.dropUp,
            el: this.el.children[0],
            formFl: this.formFl,
            id: this.id,
            isSplit: this.isSplit,
            items: items,
            label: this.label,
            menuOnly: this.menuOnly,
            multi: this.multi,
            type: this.type,
            value: this.value,
            onChange: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (onChange && window[onChange]) {
                    window[onChange].apply(_this, args);
                }
            }
        });
    };
    Dropdown.prototype.render = function () {
        return (h("div", null));
    };
    Object.defineProperty(Dropdown, "is", {
        get: function () { return "bs-dropdown"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dropdown, "properties", {
        get: function () {
            return {
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "dropLeft": {
                    "type": Boolean,
                    "attr": "drop-left"
                },
                "dropRight": {
                    "type": Boolean,
                    "attr": "drop-right"
                },
                "dropUp": {
                    "type": Boolean,
                    "attr": "drop-up"
                },
                "el": {
                    "elementRef": true
                },
                "formFl": {
                    "type": Boolean,
                    "attr": "form-fl"
                },
                "id": {
                    "type": String,
                    "attr": "id"
                },
                "isSplit": {
                    "type": Boolean,
                    "attr": "is-split"
                },
                "items": {
                    "type": String,
                    "attr": "items"
                },
                "label": {
                    "type": String,
                    "attr": "label"
                },
                "menuOnly": {
                    "type": Boolean,
                    "attr": "menu-only"
                },
                "multi": {
                    "type": Boolean,
                    "attr": "multi"
                },
                "type": {
                    "type": Number,
                    "attr": "type"
                },
                "value": {
                    "type": String,
                    "attr": "value"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return Dropdown;
}());
var Form = /** @class */ (function () {
    function Form() {
    }
    Form.prototype.componentDidLoad = function () {
        var rows = [];
        if (this.rows) {
            try {
                rows = JSON.parse(this.rows);
            }
            catch (_a) {
                rows = [];
                console.log("Error parsing the JSON string.");
                console.log(this.rows);
            }
        }
        var value = null;
        if (this.value) {
            try {
                value = JSON.parse(this.value);
            }
            catch (_b) {
                value = null;
                console.log("Error parsing the JSON string.");
                console.log(this.value);
            }
        }
        return GD.Components.Form({
            el: this.el.children[0],
            rows: rows,
            value: value
        });
    };
    Form.prototype.render = function () {
        return (h("div", null));
    };
    Object.defineProperty(Form, "is", {
        get: function () { return "bs-form"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Form, "properties", {
        get: function () {
            return {
                "el": {
                    "elementRef": true
                },
                "rows": {
                    "type": String,
                    "attr": "rows"
                },
                "value": {
                    "type": String,
                    "attr": "value"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return Form;
}());
export { Collapse as a, Dropdown as b, Form as c };
