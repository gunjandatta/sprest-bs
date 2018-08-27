export class ButtonGroup {
    // Component loaded event
    componentDidLoad() {
        // Get the buttons property
        let buttons = [];
        if (this.buttons) {
            try {
                buttons = JSON.parse(this.buttons);
            }
            catch (_a) {
                buttons = [];
            }
        }
        // Render the button group
        return $REST.Components.ButtonGroup({
            buttons: buttons,
            buttonType: this.buttonType,
            className: this.className,
            el: this.el,
            id: this.id,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            isVertical: this.isVertical,
            label: this.label
        });
    }
    // Render the button group
    render() {
        return (h("div", { ref: el => this.el = el }));
    }
    static get is() { return "bs-buttonGroup"; }
    static get properties() { return {
        "buttons": {
            "type": String,
            "attr": "buttons"
        },
        "buttonType": {
            "type": Number,
            "attr": "button-type"
        },
        "className": {
            "type": String,
            "attr": "class-name"
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
