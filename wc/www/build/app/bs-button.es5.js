/*! Built with http://stenciljs.com */
App.loadBundle('bs-button', ['exports'], function (exports) {
    var h = window.App.h;
    var Button = /** @class */ (function () {
        function Button() {
        }
        // Component loaded event
        Button.prototype.componentDidLoad = function () {
            debugger;
            // Render the button
            return GD.Components.Button({
                className: this.className,
                el: this.el,
                id: this.id,
                isBlock: this.isBlock,
                isDisabled: this.isDisabled,
                isLarge: this.isLarge,
                isOutline: this.isOutline,
                isSmall: this.isSmall,
                //onClick: this.onClick,
                target: this.target,
                text: this.text,
                toggle: this.toggle,
                type: this.type
            });
        };
        // Render the button
        Button.prototype.render = function () {
            var _this = this;
            return (h("div", { ref: function (el) { return _this.el = el; } }));
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
                    "isLarge": {
                        "type": Boolean,
                        "attr": "is-large"
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
    exports.BsButton = Button;
    Object.defineProperty(exports, '__esModule', { value: true });
});
