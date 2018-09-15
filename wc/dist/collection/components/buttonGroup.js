export class ButtonGroup {
    // Component loaded event
    componentDidLoad() {
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Get the buttons property
        let buttons = [];
        if (this.buttons) {
            try {
                buttons = JSON.parse(this.buttons);
            }
            catch (_a) {
                buttons = [];
                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.buttons);
            }
        }
        // Render the button group
        return GD.Components.ButtonGroup({
            buttons: buttons,
            buttonType: this.buttonType,
            className: this.className,
            el: this.el.children[0],
            id: this.id,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            isVertical: this.isVertical,
            label: this.label
        });
    }
    // Render the button group
    render() {
        return (h("div", null));
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
