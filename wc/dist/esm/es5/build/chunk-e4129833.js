import { a as getProps } from './chunk-b00b75f4.js';
var ListGroup = /** @class */ (function () {
    function ListGroup() {
    }
    ListGroup.prototype.render = function () {
        var props = getProps(this.el, {
            className: this.className,
            colWidth: this.colWidth,
            el: this.el,
            enableFade: this.enableFade,
            isFlush: this.isFlush,
            isTabs: this.isTabs
        });
        return GD.Components.ListGroup(props);
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
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return ListGroup;
}());
export { ListGroup as a };
