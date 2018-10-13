import { a as getProps } from './chunk-69297144.js';
var Modal = /** @class */ (function () {
    function Modal() {
    }
    Modal.prototype.render = function () {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        var props = getProps(this.el, {
            body: this.body,
            className: this.className,
            disableFade: this.disableFade,
            el: this.el,
            footer: this.footer,
            hideCloseButton: this.hideCloseButton,
            id: this.id,
            isCentered: this.isCentered,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            title: this.el.getAttribute("title")
        });
        this.el.removeAttribute("id");
        GD.Components.Modal(props);
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Modal, "is", {
        get: function () { return "bs-modal"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modal, "properties", {
        get: function () {
            return {
                "body": {
                    "type": String,
                    "attr": "body"
                },
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "disableFade": {
                    "type": Boolean,
                    "attr": "disable-fade"
                },
                "el": {
                    "elementRef": true
                },
                "footer": {
                    "type": String,
                    "attr": "footer"
                },
                "hideCloseButton": {
                    "type": Boolean,
                    "attr": "hide-close-button"
                },
                "id": {
                    "type": String,
                    "attr": "id"
                },
                "isCentered": {
                    "type": Boolean,
                    "attr": "is-centered"
                },
                "isLarge": {
                    "type": Boolean,
                    "attr": "is-large"
                },
                "isSmall": {
                    "type": Boolean,
                    "attr": "is-small"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return Modal;
}());
export { Modal as a };
