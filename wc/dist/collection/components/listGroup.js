export class ListGroup {
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
