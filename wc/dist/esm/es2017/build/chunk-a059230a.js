/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';

class Pagination {
    componentDidLoad() {
        let onClick = this.el.getAttribute("onClick");
        return GD.Components.Pagination({
            alignment: this.alignment,
            className: this.className,
            el: this.el.children[0],
            icon: this.icon,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            label: this.label,
            numberOfPages: this.numberOfPages,
            onClick: (...args) => {
                if (onClick && window[onClick]) {
                    window[onClick].apply(this, args);
                }
            }
        });
    }
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-pagination"; }
    static get properties() { return {
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
    }; }
}

class Popover {
    componentDidLoad() {
        let btnProps = {};
        if (this.btnProps) {
            try {
                btnProps = JSON.parse(this.btnProps);
            }
            catch (_a) {
                btnProps = {};
                console.log("Error parsing the JSON string.");
                console.log(this.btnProps);
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
        return GD.Components.Popover({
            btnProps,
            className: this.className,
            el: this.el.children[0],
            isDismissible: this.isDismissible,
            options,
            type: this.type
        });
    }
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-popover"; }
    static get properties() { return {
        "btnProps": {
            "type": String,
            "attr": "btn-props"
        },
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "isDismissible": {
            "type": Boolean,
            "attr": "is-dismissible"
        },
        "options": {
            "type": String,
            "attr": "options"
        },
        "type": {
            "type": Number,
            "attr": "type"
        }
    }; }
}

class Progress {
    componentDidLoad() {
        return GD.Components.Progress({
            className: this.className,
            el: this.el.children[0],
            isAnimated: this.isAnimated,
            isStriped: this.isStriped,
            label: this.label,
            max: this.max,
            min: this.min,
            size: this.size
        });
    }
    render() {
        return (h("div", null));
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

export { Pagination as a, Popover as b, Progress as c };
