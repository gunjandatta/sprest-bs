/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';
var ListGroup = /** @class */ (function () {
    function ListGroup() {
    }
    ListGroup.prototype.componentDidLoad = function () {
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
        return GD.Components.ListGroup({
            className: this.className,
            colWidth: this.colWidth,
            el: this.el.children[0],
            enableFade: this.enableFade,
            isFlush: this.isFlush,
            isTabs: this.isTabs,
            items: items
        });
    };
    ListGroup.prototype.render = function () {
        return (h("div", null));
    };
    Object.defineProperty(ListGroup, "is", {
        get: function () { return "bs-listGroup"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListGroup, "properties", {
        get: function () {
            return {
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "colWidth": {
                    "type": Number,
                    "attr": "col-width"
                },
                "el": {
                    "elementRef": true
                },
                "enableFade": {
                    "type": Boolean,
                    "attr": "enable-fade"
                },
                "isFlush": {
                    "type": Boolean,
                    "attr": "is-flush"
                },
                "isTabs": {
                    "type": Boolean,
                    "attr": "is-tabs"
                },
                "items": {
                    "type": String,
                    "attr": "items"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return ListGroup;
}());
var Modal = /** @class */ (function () {
    function Modal() {
    }
    Modal.prototype.componentDidLoad = function () {
        var _this = this;
        var onClose = this.el.getAttribute("onClose");
        var onRenderBody = this.el.getAttribute("onRenderBody");
        var onRenderFooter = this.el.getAttribute("onRenderFooter");
        this.el.removeAttribute("id");
        var buttonProps = {};
        if (this.button) {
            try {
                buttonProps = JSON.parse(this.button);
            }
            catch (_a) {
                buttonProps = {};
                console.log("Error parsing the JSON string.");
                console.log(this.button);
            }
        }
        return GD.Components.Modal({
            body: this.body,
            button: buttonProps,
            className: this.className,
            disableFade: this.disableFade,
            el: this.el.children[0],
            footer: this.footer,
            hideCloseButton: this.hideCloseButton,
            id: this.id,
            isCentered: this.isCentered,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            title: this.el.getAttribute("title"),
            onClose: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (onClose && window[onClose]) {
                    window[onClose].apply(_this, args);
                }
            },
            onRenderBody: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (onRenderBody && window[onRenderBody]) {
                    window[onRenderBody].apply(_this, args);
                }
            },
            onRenderFooter: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (onRenderFooter && window[onRenderFooter]) {
                    window[onRenderFooter].apply(_this, args);
                }
            }
        });
    };
    Modal.prototype.render = function () {
        return (h("div", null));
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
                "button": {
                    "type": String,
                    "attr": "button"
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
export { ListGroup as a, Modal as b };
