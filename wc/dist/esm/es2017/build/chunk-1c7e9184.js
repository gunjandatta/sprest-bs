/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';

import { a as getProps } from './chunk-b00b75f4.js';

class Progress {
    render() {
        let props = getProps(this.el, {
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
    }
    static get is() { return "bs-progress"; }
    static get properties() { return {
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
    }; }
}

export { Progress as a };
