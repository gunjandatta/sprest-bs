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
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            id: this.id
        });
        this.el.removeAttribute("id");
        return GD.Components.Accordion(props);
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
        let props = getProps(this.el, {
            className: this.className,
            content: this.content,
            el: this.el,
            header: this.header,
            isDismissible: this.isDismissible,
            type: this.type
        });
        return GD.Components.Alert(props);
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
        let props = getProps(this.el, {
            className: this.className,
            content: this.content,
            el: this.el,
            header: this.header,
            href: this.href,
            isPill: this.isPill,
            type: this.type
        });
        return GD.Components.Badge(props);
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
        let props = getProps(this.el, {
            className: this.className,
            el: this.el
        });
        return GD.Components.Breadcrumb(props);
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

class ButtonGroup {
    render() {
        let props = getProps(this.el, {
            buttonType: this.buttonType,
            className: this.className,
            el: this.el,
            id: this.id,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            isVertical: this.isVertical,
            label: this.label
        });
        this.el.removeAttribute("id");
        return GD.Components.ButtonGroup(props);
    }
    static get is() { return "bs-buttonGroup"; }
    static get properties() { return {
        "buttonType": {
            "type": Number,
            "attr": "button-type"
        },
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
        "isLarge": {
            "type": Boolean,
            "attr": "is-large"
        },
        "isSmall": {
            "type": Boolean,
            "attr": "is-small"
        },
        "isVertical": {
            "type": Boolean,
            "attr": "is-vertical"
        },
        "label": {
            "type": String,
            "attr": "label"
        }
    }; }
}

class CardGroup {
    render() {
        let props = getProps(this.el, {
            className: this.className,
            el: this.el
        });
        return GD.Components.CardGroup(props);
    }
    static get is() { return "bs-cardGroup"; }
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

export { getProps as a, Accordion as b, Alert as c, Badge as d, Breadcrumb as e, ButtonGroup as f, CardGroup as g };
