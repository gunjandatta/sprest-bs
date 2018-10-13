/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';

import { a as getProps } from './chunk-b00b75f4.js';

class Carousel {
    render() {
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            enableControls: this.enableControls,
            enableCrossfade: this.enableCrossfade,
            enableIndicators: this.enableIndicators,
            id: this.id
        });
        this.el.removeAttribute("id");
        return GD.Components.Carousel(props);
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
        }
    }; }
}

export { Carousel as a };
