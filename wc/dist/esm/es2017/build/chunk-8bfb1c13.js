/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';

class Card {
    componentDidLoad() {
        let body = [];
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
    }
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-card"; }
    static get properties() { return {
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
    }; }
}

class CardGroup {
    componentDidLoad() {
        let cards = [];
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
    }
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-cardGroup"; }
    static get properties() { return {
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
    }; }
}

class Carousel {
    componentDidLoad() {
        this.el.removeAttribute("id");
        let items = [];
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
        let options = {};
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
            items,
            options
        });
    }
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-carousel"; }
    static get properties() { return {
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
    }; }
}

export { Card as a, CardGroup as b, Carousel as c };
