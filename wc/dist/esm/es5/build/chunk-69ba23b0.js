import { a as getProps } from './chunk-b00b75f4.js';
var ProgressGroup = /** @class */ (function () {
    function ProgressGroup() {
    }
    ProgressGroup.prototype.render = function () {
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            isMultiple: this.isMultiple
        });
        return GD.Components.ProgressGroup(props);
    };
    Object.defineProperty(ProgressGroup, "is", {
        get: function () { return "bs-progressGroup"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressGroup, "properties", {
        get: function () {
            return {
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "el": {
                    "elementRef": true
                },
                "isMultiple": {
                    "type": Boolean,
                    "attr": "is-multiple"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return ProgressGroup;
}());
export { ProgressGroup as a };
