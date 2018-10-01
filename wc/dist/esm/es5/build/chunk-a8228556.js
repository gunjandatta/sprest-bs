/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';
var InputGroup = /** @class */ (function () {
    function InputGroup() {
    }
    InputGroup.prototype.componentDidLoad = function () {
        var _this = this;
        var onChange = this.el.getAttribute("onChange");
        var onClear = this.el.getAttribute("onClear");
        this.el.removeAttribute("id");
        var appendedButtons = [];
        if (this.appendedButtons) {
            try {
                appendedButtons = JSON.parse(this.appendedButtons);
            }
            catch (_a) {
                appendedButtons = [];
                console.log("Error parsing the JSON string.");
                console.log(this.appendedButtons);
            }
        }
        var prependedButtons = [];
        if (this.prependedButtons) {
            try {
                prependedButtons = JSON.parse(this.prependedButtons);
            }
            catch (_b) {
                prependedButtons = [];
                console.log("Error parsing the JSON string.");
                console.log(this.prependedButtons);
            }
        }
        return GD.Components.InputGroup({
            appendedButtons: appendedButtons,
            appendedLabel: this.appendedLabel,
            className: this.className,
            description: this.description,
            el: this.el.children[0],
            id: this.id,
            isLarge: this.isLarge,
            isPlainText: this.isPlainText,
            isReadonly: this.isReadonly,
            isSmall: this.isSmall,
            label: this.label,
            placeholder: this.placeholder,
            prependedButtons: prependedButtons,
            prependedLabel: this.prependedLabel,
            rows: this.rows,
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
            },
            onClear: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (onClear && window[onClear]) {
                    window[onClear].apply(_this, args);
                }
            }
        });
    };
    InputGroup.prototype.render = function () {
        return (h("div", null));
    };
    Object.defineProperty(InputGroup, "is", {
        get: function () { return "bs-inputGroup"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputGroup, "properties", {
        get: function () {
            return {
                "appendedButtons": {
                    "type": String,
                    "attr": "appended-buttons"
                },
                "appendedLabel": {
                    "type": String,
                    "attr": "appended-label"
                },
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "description": {
                    "type": String,
                    "attr": "description"
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
                "isPlainText": {
                    "type": Boolean,
                    "attr": "is-plain-text"
                },
                "isReadonly": {
                    "type": Boolean,
                    "attr": "is-readonly"
                },
                "isSmall": {
                    "type": Boolean,
                    "attr": "is-small"
                },
                "label": {
                    "type": String,
                    "attr": "label"
                },
                "placeholder": {
                    "type": String,
                    "attr": "placeholder"
                },
                "prependedButtons": {
                    "type": String,
                    "attr": "prepended-buttons"
                },
                "prependedLabel": {
                    "type": String,
                    "attr": "prepended-label"
                },
                "rows": {
                    "type": Number,
                    "attr": "rows"
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
    return InputGroup;
}());
var Jumbotron = /** @class */ (function () {
    function Jumbotron() {
    }
    Jumbotron.prototype.componentDidLoad = function () {
        var _this = this;
        var onRenderContent = this.el.getAttribute("onRenderContent");
        return GD.Components.Jumbotron({
            className: this.className,
            content: this.content,
            el: this.el.children[0],
            isFluid: this.isFluid,
            lead: this.lead,
            title: this.el.getAttribute("title"),
            onRenderContent: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (onRenderContent && window[onRenderContent]) {
                    window[onRenderContent].apply(_this, args);
                }
            }
        });
    };
    Jumbotron.prototype.render = function () {
        return (h("div", null));
    };
    Object.defineProperty(Jumbotron, "is", {
        get: function () { return "bs-jumbotron"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Jumbotron, "properties", {
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
                "isFluid": {
                    "type": Boolean,
                    "attr": "is-fluid"
                },
                "lead": {
                    "type": String,
                    "attr": "lead"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return Jumbotron;
}());
export { InputGroup as a, Jumbotron as b };
