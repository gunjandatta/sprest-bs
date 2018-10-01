/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';

class Accordion {
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
        return GD.Components.Accordion({
            className: this.className,
            el: this.el.children[0],
            id: this.id,
            items
        });
    }
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-accordion"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "id": {
            "type": String,
            "attr": "id"
        },
        "items": {
            "type": String,
            "attr": "items"
        }
    }; }
}

class Alert {
    componentDidLoad() {
        return GD.Components.Alert({
            className: this.className,
            content: this.content,
            el: this.el,
            header: this.header,
            isDismissible: this.isDismissible,
            type: this.type
        });
    }
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-alert"; }
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
        "header": {
            "type": String,
            "attr": "header"
        },
        "isDismissible": {
            "type": Boolean,
            "attr": "is-dismissible"
        },
        "type": {
            "type": Number,
            "attr": "type"
        }
    }; }
}

class Badge {
    componentDidLoad() {
        let onClick = this.el.getAttribute("onClick");
        return GD.Components.Badge({
            className: this.className,
            content: this.content,
            el: this.el.children[0],
            header: this.header,
            href: this.href,
            isPill: this.isPill,
            type: this.type,
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
    static get is() { return "bs-badge"; }
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
        "header": {
            "type": String,
            "attr": "header"
        },
        "href": {
            "type": String,
            "attr": "href"
        },
        "isPill": {
            "type": Boolean,
            "attr": "is-pill"
        },
        "type": {
            "type": Number,
            "attr": "type"
        }
    }; }
}

class Breadcrumb {
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
        return GD.Components.Breadcrumb({
            className: this.className,
            el: this.el.children[0],
            items: items
        });
    }
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-breadcrumb"; }
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
        }
    }; }
}

export { Accordion as a, Alert as b, Badge as c, Breadcrumb as d };
