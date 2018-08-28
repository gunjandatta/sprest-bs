export class Navigation {
    // Component loaded event
    componentDidLoad() {
        let items = [];
        if (this.items) {
            try {
                items = JSON.parse(this.items);
            }
            catch (_a) {
                items = [];
                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.items);
            }
        }
        // Render the navigation
        return $REST.Components.Navigation({
            className: this.className,
            el: this.el,
            enableFade: this.enableFade,
            enableFill: this.enableFill,
            id: this.id,
            items: items,
            isJustified: this.isJustified,
            isPill: this.isPill,
            isTabs: this.isTabs,
            isVertical: this.isVertical
        });
    }
    // Render the navigation
    render() {
        return (h("div", { ref: el => this.el = el }));
    }
    static get is() { return "bs-navigation"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "enableFade": {
            "type": Boolean,
            "attr": "enable-fade"
        },
        "enableFill": {
            "type": Boolean,
            "attr": "enable-fill"
        },
        "id": {
            "type": String,
            "attr": "id"
        },
        "isJustified": {
            "type": String,
            "attr": "is-justified"
        },
        "isPill": {
            "type": Boolean,
            "attr": "is-pill"
        },
        "isTabs": {
            "type": Boolean,
            "attr": "is-tabs"
        },
        "isVertical": {
            "type": Boolean,
            "attr": "is-vertical"
        },
        "items": {
            "type": String,
            "attr": "items"
        }
    }; }
}
