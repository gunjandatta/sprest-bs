/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';

class ProgressGroup {
    componentDidLoad() {
        let progressbars = [];
        if (this.progressbars) {
            try {
                progressbars = JSON.parse(this.progressbars);
            }
            catch (_a) {
                progressbars = [];
                console.log("Error parsing the JSON string.");
                console.log(this.progressbars);
            }
        }
        return GD.Components.ProgressGroup({
            className: this.className,
            el: this.el.children[0],
            isMultiple: this.isMultiple,
            progressbars
        });
    }
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-progressGroup"; }
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
        },
        "progressbars": {
            "type": String,
            "attr": "progressbars"
        }
    }; }
}

class Tooltip {
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
        return GD.Components.Tooltip({
            btnProps,
            className: this.className,
            el: this.el.children[0],
            options,
            type: this.type
        });
    }
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-tooltip"; }
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

class Toolbar {
    componentDidLoad() {
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
        return GD.Components.Toolbar({
            className: this.className,
            el: this.el.children[0],
            items,
            spacing: this.spacing
        });
    }
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-toolbar"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "items": {
            "type": String,
            "attr": "items"
        },
        "spacing": {
            "type": Number,
            "attr": "spacing"
        }
    }; }
}

export { ProgressGroup as a, Tooltip as b, Toolbar as c };
