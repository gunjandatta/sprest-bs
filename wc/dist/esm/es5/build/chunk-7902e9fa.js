import { a as getProps } from './chunk-b00b75f4.js';
var Pagination = /** @class */ (function () {
    function Pagination() {
    }
    Pagination.prototype.render = function () {
        var props = getProps(this.el, {
            alignment: this.alignment,
            className: this.className,
            el: this.el,
            icon: this.icon,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            label: this.label,
            numberOfPages: this.numberOfPages
        });
        return GD.Components.Pagination(props);
    };
    Object.defineProperty(Pagination, "is", {
        get: function () { return "bs-pagination"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pagination, "properties", {
        get: function () {
            return {
                "alignment": {
                    "type": Number,
                    "attr": "alignment"
                },
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "el": {
                    "elementRef": true
                },
                "icon": {
                    "type": String,
                    "attr": "icon"
                },
                "isLarge": {
                    "type": Boolean,
                    "attr": "is-large"
                },
                "isSmall": {
                    "type": Boolean,
                    "attr": "is-small"
                },
                "label": {
                    "type": String,
                    "attr": "label"
                },
                "numberOfPages": {
                    "type": Number,
                    "attr": "number-of-pages"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return Pagination;
}());
export { Pagination as a };
