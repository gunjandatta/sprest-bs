import { h } from '../gd-sprest-bs.core.js';

import { a as getProps } from './chunk-7e340ae1.js';

class ProgressGroup {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            isMultiple: this.isMultiple
        });
        GD.Components.ProgressGroup(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-progress-group"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "isMultiple": {
            "type": Boolean,
            "attr": "is-multiple"
        }
    }; }
}

export { ProgressGroup as a };
