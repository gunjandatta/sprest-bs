/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';

const getProps = (el, elProps = {}) => {
    let props = {};
    let js = (el.innerHTML || "").trim();
    if (js.length > 0) {
        try {
            props = (new Function(js))();
            el.innerHTML = "";
        }
        catch (_a) {
            console.error("Error parsing the JS to get the properties.");
            console.error(js);
        }
    }
    for (let key in elProps) {
        if (typeof (props[key]) != "undefined") {
            continue;
        }
        props[key] = elProps[key];
    }
    return props;
};

class Accordion {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            id: this.id
        });
        this.el.removeAttribute("id");
        GD.Components.Accordion(props);
        this.el.setAttribute("data-init", "true");
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
        }
    }; }
}

class Alert {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            className: this.className,
            content: this.content,
            el: this.el,
            header: this.header,
            isDismissible: this.isDismissible,
            type: this.type
        });
        GD.Components.Alert(props);
        this.el.setAttribute("data-init", "true");
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
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            className: this.className,
            content: this.content,
            el: this.el,
            header: this.header,
            href: this.href,
            isPill: this.isPill,
            type: this.type
        });
        GD.Components.Badge(props);
        this.el.setAttribute("data-init", "true");
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
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            className: this.className,
            el: this.el
        });
        GD.Components.Breadcrumb(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-breadcrumb"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        }
    }; }
}

class Card {
    render() {
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            footer: this.footer,
            header: this.header,
            imgBottom: this.imgBottom,
            imgTop: this.imgTop
        });
        GD.Components.Card(props);
        this.el.setAttribute("data-init", "true");
    }
    static get is() { return "bs-card"; }
    static get properties() { return {
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

export { getProps as a, Accordion as b, Alert as c, Badge as d, Breadcrumb as e, Card as f };
