export class Badge {
    // Component loaded event
    componentDidLoad() {
        // Render the badge
        return GD.Components.Badge({
            className: this.className,
            content: this.content,
            el: this.el.children[0],
            header: this.header,
            href: this.href,
            isPill: this.isPill,
            type: this.type
        });
    }
    // Render the badge
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
