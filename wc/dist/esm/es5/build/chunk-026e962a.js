import { a as getProps } from './chunk-69297144.js';
var Table = /** @class */ (function () {
    function Table() {
    }
    Table.prototype.render = function () {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        var props = getProps(this.el, {
            className: this.className,
            el: this.el
        });
        GD.Components.Table(props);
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(Table, "is", {
        get: function () { return "bs-table"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table, "properties", {
        get: function () {
            return {
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "el": {
                    "elementRef": true
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return Table;
}());
export { Table as a };
