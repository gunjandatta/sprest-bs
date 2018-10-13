import { a as getProps } from './chunk-b00b75f4.js';
var Progress = /** @class */ (function () {
    function Progress() {
    }
    Progress.prototype.render = function () {
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            isAnimated: this.isAnimated,
            isStriped: this.isStriped,
            label: this.label,
            max: this.max,
            min: this.min,
            size: this.size
        });
        return GD.Components.Progress(props);
    };
    Object.defineProperty(Progress, "is", {
        get: function () { return "bs-progress"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Progress, "properties", {
        get: function () {
            return {
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "el": {
                    "elementRef": true
                },
                "isAnimated": {
                    "type": Boolean,
                    "attr": "is-animated"
                },
                "isStriped": {
                    "type": Boolean,
                    "attr": "is-striped"
                },
                "label": {
                    "type": String,
                    "attr": "label"
                },
                "max": {
                    "type": Number,
                    "attr": "max"
                },
                "min": {
                    "type": Number,
                    "attr": "min"
                },
                "size": {
                    "type": Number,
                    "attr": "size"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return Progress;
}());
export { Progress as a };
