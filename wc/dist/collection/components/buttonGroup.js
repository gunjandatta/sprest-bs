export class ButtonGroup {
    componentDidLoad() {
        this.el.removeAttribute("id");
        let buttons = [];
        if (this.buttons) {
            try {
                buttons = JSON.parse(this.buttons);
            }
            catch (_a) {
                buttons = [];
                console.log("Error parsing the JSON string.");
                console.log(this.buttons);
            }
        }
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
