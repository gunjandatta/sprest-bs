import { a as getProps } from './chunk-69297144.js';
var Pagination = /** @class */ (function () {
    function Pagination() {
    }
    Pagination.prototype.render = function () {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
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
        GD.Components.Pagination(props);
        this.el.setAttribute("data-init", "true");
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
