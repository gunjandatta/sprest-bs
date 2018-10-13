import { a as getProps } from './chunk-69297144.js';
var ButtonGroup = /** @class */ (function () {
    function ButtonGroup() {
    }
    ButtonGroup.prototype.render = function () {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
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
        GD.Components.ButtonGroup(props);
        this.el.setAttribute("data-init", "true");
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
export { ButtonGroup as a };
