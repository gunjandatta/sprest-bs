/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';
var Card = /** @class */ (function () {
    function Card() {
    }
    Card.prototype.componentDidLoad = function () {
        var body = [];
        if (this.body) {
            try {
                body = JSON.parse(this.body);
            }
            catch (_a) {
                body = [];
                console.log("Error parsing the JSON string.");
                console.log(this.body);
            }
        }
        return GD.Components.Card({
            body: body,
            className: this.className,
            el: this.el.children[0],
            footer: this.footer,
            header: this.header,
            imgBottom: this.imgBottom,
            imgTop: this.imgTop
        });
    };
    Card.prototype.render = function () {
        return (h("div", null));
    };
    Object.defineProperty(Card, "is", {
        get: function () { return "bs-card"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card, "properties", {
        get: function () {
            return {
                "body": {
                    "type": String,
                    "attr": "body"
                },
                "className": {
                    "type": String,
                    "attr": "class-name"
                },
                "el": {
                    "elementRef": true
                },
                "footer": {
                    "type": String,
                    "attr": "footer"
                },
                "header": {
                    "type": String,
                    "attr": "header"
                },
                "imgBottom": {
                    "type": "Any",
                    "attr": "img-bottom"
                },
                "imgTop": {
                    "type": "Any",
                    "attr": "img-top"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return Card;
}());
var CardGroup = /** @class */ (function () {
    function CardGroup() {
    }
    CardGroup.prototype.componentDidLoad = function () {
        var cards = [];
        if (this.cards) {
            try {
                cards = JSON.parse(this.cards);
            }
            catch (_a) {
                cards = [];
                console.log("Error parsing the JSON string.");
                console.log(this.cards);
            }
        }
        return GD.Components.CardGroup({
            cards: cards,
            className: this.className,
            el: this.el.children[0]
        });
    };
    CardGroup.prototype.render = function () {
        return (h("div", null));
    };
    Object.defineProperty(CardGroup, "is", {
        get: function () { return "bs-cardGroup"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardGroup, "properties", {
        get: function () {
            return {
                "cards": {
                    "type": String,
                    "attr": "cards"
                },
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
    return CardGroup;
}());
var Carousel = /** @class */ (function () {
    function Carousel() {
    }
    Carousel.prototype.componentDidLoad = function () {
        this.el.removeAttribute("id");
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
        var options = {};
        if (this.options) {
            try {
                options = JSON.parse(this.options);
            }
            catch (_b) {
                options = {};
                console.log("Error parsing the JSON string.");
                console.log(this.options);
            }
        }
        return GD.Components.Carousel({
            className: this.className,
            el: this.el.children[0],
            enableControls: this.enableControls,
            enableCrossfade: this.enableCrossfade,
            enableIndicators: this.enableIndicators,
            id: this.id,
            items: items,
            options: options
        });
    };
    Carousel.prototype.render = function () {
        return (h("div", null));
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
                },
                "items": {
                    "type": String,
                    "attr": "items"
                },
                "options": {
                    "type": String,
                    "attr": "options"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    return Carousel;
}());
export { Card as a, CardGroup as b, Carousel as c };
