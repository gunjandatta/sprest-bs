import { a as getProps } from './chunk-69297144.js';
var CheckboxGroup = /** @class */ (function () {
    function CheckboxGroup() {
    }
    CheckboxGroup.prototype.render = function () {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        var props = getProps(this.el, {
            className: this.className,
            colSize: this.colSize,
            hideLabel: this.hideLabel,
            label: this.label,
            multi: this.multi,
            el: this.el,
            type: this.type
        });
        GD.Components.CheckboxGroup(props);
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(CheckboxGroup, "is", {
        get: function () { return "bs-checkboxGroup"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxGroup, "properties", {
        get: function () {
            return {
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "colSize": {
                    "type": Number,
                    "attr": "col-size"
                },
                "el": {
                    "elementRef": true
                },
                "hideLabel": {
                    "type": Boolean,
                    "attr": "hide-label"
                },
                "label": {
                    "type": String,
                    "attr": "label"
                },
                "multi": {
                    "type": Boolean,
                    "attr": "multi"
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
    return CheckboxGroup;
}());
export { CheckboxGroup as BsCheckboxgroup };
