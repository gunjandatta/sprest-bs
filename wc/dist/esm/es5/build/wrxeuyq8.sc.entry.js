/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';
var Panel = /** @class */ (function () {
    function Panel() {
    }
    Panel.prototype.componentDidLoad = function () {
        var modalProps = {};
        if (this.modalProps) {
            try {
                modalProps = JSON.parse(this.modalProps);
            }
            catch (_a) {
                modalProps = {};
                console.log("Error parsing the JSON string.");
                console.log(this.modalProps);
            }
        }
        return GD.Components.Panel({
            className: this.className,
            el: this.el.children[0],
            modalProps: modalProps,
            type: this.type
        });
    };
    Panel.prototype.render = function () {
        return (h("div", null));
    };
    Object.defineProperty(Panel, "is", {
        get: function () { return "bs-panel"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Panel, "properties", {
        get: function () {
            return {
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "el": {
                    "elementRef": true
                },
                "modalProps": {
                    "type": String,
                    "attr": "modal-props"
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
    return Panel;
}());
export { Panel as BsPanel };
