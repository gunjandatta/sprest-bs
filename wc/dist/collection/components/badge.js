export class Badge {
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
