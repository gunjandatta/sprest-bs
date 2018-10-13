import { getProps } from "../common";
export class Badge {
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
