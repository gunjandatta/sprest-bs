/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';

class ListGroup {
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
        return GD.Components.ListGroup({
            className: this.className,
            colWidth: this.colWidth,
            el: this.el.children[0],
            enableFade: this.enableFade,
            isFlush: this.isFlush,
            isTabs: this.isTabs,
            items
        });
    }
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-listGroup"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "colWidth": {
            "type": Number,
            "attr": "col-width"
        },
        "el": {
            "elementRef": true
        },
        "enableFade": {
            "type": Boolean,
            "attr": "enable-fade"
        },
        "isFlush": {
            "type": Boolean,
            "attr": "is-flush"
        },
        "isTabs": {
            "type": Boolean,
            "attr": "is-tabs"
        },
        "items": {
            "type": String,
            "attr": "items"
        }
    }; }
}

class Modal {
    componentDidLoad() {
        let onClose = this.el.getAttribute("onClose");
        let onRenderBody = this.el.getAttribute("onRenderBody");
        let onRenderFooter = this.el.getAttribute("onRenderFooter");
        this.el.removeAttribute("id");
        let buttonProps = {};
        if (this.button) {
            try {
                buttonProps = JSON.parse(this.button);
            }
            catch (_a) {
                buttonProps = {};
                console.log("Error parsing the JSON string.");
                console.log(this.button);
            }
        }
        return GD.Components.Modal({
            body: this.body,
            button: buttonProps,
            className: this.className,
            disableFade: this.disableFade,
            el: this.el.children[0],
            footer: this.footer,
            hideCloseButton: this.hideCloseButton,
            id: this.id,
            isCentered: this.isCentered,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            title: this.el.getAttribute("title"),
            onClose: (...args) => {
                if (onClose && window[onClose]) {
                    window[onClose].apply(this, args);
                }
            },
            onRenderBody: (...args) => {
                if (onRenderBody && window[onRenderBody]) {
                    window[onRenderBody].apply(this, args);
                }
            },
            onRenderFooter: (...args) => {
                if (onRenderFooter && window[onRenderFooter]) {
                    window[onRenderFooter].apply(this, args);
                }
            }
        });
    }
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-modal"; }
    static get properties() { return {
        "body": {
            "type": String,
            "attr": "body"
        },
        "button": {
            "type": String,
            "attr": "button"
        },
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "disableFade": {
            "type": Boolean,
            "attr": "disable-fade"
        },
        "el": {
            "elementRef": true
        },
        "footer": {
            "type": String,
            "attr": "footer"
        },
        "hideCloseButton": {
            "type": Boolean,
            "attr": "hide-close-button"
        },
        "id": {
            "type": String,
            "attr": "id"
        },
        "isCentered": {
            "type": Boolean,
            "attr": "is-centered"
        },
        "isLarge": {
            "type": Boolean,
            "attr": "is-large"
        },
        "isSmall": {
            "type": Boolean,
            "attr": "is-small"
        }
    }; }
}

export { ListGroup as a, Modal as b };
