import { h } from '../gd-sprest-bs.core.js';

import { a as getProps } from './chunk-7e340ae1.js';

class Toast {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            bodyText: this.bodyText,
            className: this.className,
            closeButtonHidden: this.closeButtonHidden,
            closeButtonText: this.closeButtonText,
            el: this.el,
            headerImgClass: this.headerImgClass,
            headerImgSrc: this.headerImgSrc,
            headerText: this.headerText
        });
        GD.Components.Toast(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-toast"; }
    static get properties() { return {
        "bodyText": {
            "type": String,
            "attr": "body-text"
        },
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "closeButtonHidden": {
            "type": Boolean,
            "attr": "close-button-hidden"
        },
        "closeButtonText": {
            "type": Boolean,
            "attr": "close-button-text"
        },
        "el": {
            "elementRef": true
        },
        "headerImgClass": {
            "type": String,
            "attr": "header-img-class"
        },
        "headerImgSrc": {
            "type": String,
            "attr": "header-img-src"
        },
        "headerText": {
            "type": String,
            "attr": "header-text"
        }
    }; }
}

export { Toast as a };
