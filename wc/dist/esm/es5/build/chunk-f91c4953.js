import { a as getProps } from './chunk-69297144.js';
var Button = /** @class */ (function () {
    function Button() {
    }
    Button.prototype.render = function () {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        var props = getProps(this.el, {
            className: this.className,
            controls: this.controls,
            data: this.data,
            el: this.el,
            href: this.href,
            id: this.id,
            isBlock: this.isBlock,
            isDisabled: this.isDisabled,
            isExpanded: this.isExpanded,
            isLarge: this.isLarge,
            isLink: this.isLink,
            isOutline: this.isOutline,
            isSmall: this.isSmall,
            target: this.target,
            text: this.text,
            toggle: this.toggle,
            trigger: this.trigger,
            type: this.type
        });
        this.el.removeAttribute("id");
        GD.Components.Button(props);
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Button, "is", {
        get: function () { return "bs-button"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button, "properties", {
        get: function () {
            return {
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "controls": {
                    "type": "Any",
                    "attr": "controls"
                },
                "data": {
                    "type": "Any",
                    "attr": "data"
                },
                "el": {
                    "elementRef": true
                },
                "href": {
                    "type": String,
                    "attr": "href"
                },
                "id": {
                    "type": String,
                    "attr": "id"
                },
                "isBlock": {
                    "type": Boolean,
                    "attr": "is-block"
                },
                "isDisabled": {
                    "type": Boolean,
                    "attr": "is-disabled"
                },
                "isExpanded": {
                    "type": Boolean,
                    "attr": "is-expanded"
                },
                "isLarge": {
                    "type": Boolean,
                    "attr": "is-large"
                },
                "isLink": {
                    "type": Boolean,
                    "attr": "is-link"
                },
                "isOutline": {
                    "type": Boolean,
                    "attr": "is-outline"
                },
                "isSmall": {
                    "type": Boolean,
                    "attr": "is-small"
                },
                "target": {
                    "type": String,
                    "attr": "target"
                },
                "text": {
                    "type": String,
                    "attr": "text"
                },
                "toggle": {
                    "type": String,
                    "attr": "toggle"
                },
                "trigger": {
                    "type": String,
                    "attr": "trigger"
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
    return Button;
}());
export { Button as a };
