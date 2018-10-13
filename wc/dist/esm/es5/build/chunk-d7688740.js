import { a as getProps } from './chunk-b00b75f4.js';
var Modal = /** @class */ (function () {
    function Modal() {
    }
    Modal.prototype.render = function () {
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
        return GD.Components.Modal(props);
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
