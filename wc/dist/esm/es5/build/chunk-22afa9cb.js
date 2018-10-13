import { a as getProps } from './chunk-b00b75f4.js';
var Carousel = /** @class */ (function () {
    function Carousel() {
    }
    Carousel.prototype.render = function () {
        var props = getProps(this.el, {
            className: this.className,
            el: this.el,
            enableControls: this.enableControls,
            enableCrossfade: this.enableCrossfade,
            enableIndicators: this.enableIndicators,
            id: this.id
        });
        this.el.removeAttribute("id");
        return GD.Components.Carousel(props);
    };
    Object.defineProperty(Carousel, "is", {
        get: function () { return "bs-carousel"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carousel, "properties", {
        get: function () {
            return {
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "el": {
                    "elementRef": true
                },
                "enableControls": {
                    "type": Boolean,
                    "attr": "enable-controls"
                },
                "enableCrossfade": {
                    "type": Boolean,
                    "attr": "enable-crossfade"
                },
                "enableIndicators": {
                    "type": Boolean,
                    "attr": "enable-indicators"
                },
                "id": {
                    "type": String,
                    "attr": "id"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return Carousel;
}());
export { Carousel as a };
