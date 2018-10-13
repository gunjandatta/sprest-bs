/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';

import { a as getProps } from './chunk-b00b75f4.js';

class Jumbotron {
    render() {
        let props = getProps(this.el, {
            className: this.className,
            content: this.content,
            el: this.el,
            isFluid: this.isFluid,
            lead: this.lead,
            title: this.el.getAttribute("title")
        });
        return GD.Components.Jumbotron(props);
    }
    static get is() { return "bs-jumbotron"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "content": {
            "type": String,
            "attr": "content"
        },
        "el": {
            "elementRef": true
        },
        "isFluid": {
            "type": Boolean,
            "attr": "is-fluid"
        },
        "lead": {
            "type": String,
            "attr": "lead"
        }
    }; }
}

export { Jumbotron as a };
