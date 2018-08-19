export class Button {
    // Component loaded event
    componentDidLoad() {
        // Render the button
        return GD.Components.Button({
            className: this.className,
            el: this.el,
            id: this.id,
            isBlock: this.isBlock,
            isDisabled: this.isDisabled,
            isLarge: this.isLarge,
            isOutline: this.isOutline,
            isSmall: this.isSmall,
            //onClick: this.onClick,
            target: this.target,
            text: this.text,
            toggle: this.toggle,
            type: this.type
        });
    }
    // Render the button
    render() {
        return (h("div", { ref: el => this.el = el }));
    }
    static get is() { return "bs-button"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "id": {
            "type": String,
            "attr": "id"
        },
        "isBlock": {
            "type": Boolean,
            "attr": "is-block"
        },
        "isDisabled": {
            "type": Boolean,
            "attr": "is-disabled"
        },
        "isLarge": {
            "type": Boolean,
            "attr": "is-large"
        },
        "isOutline": {
            "type": Boolean,
            "attr": "is-outline"
        },
        "isSmall": {
            "type": Boolean,
            "attr": "is-small"
        },
        "target": {
            "type": String,
            "attr": "target"
        },
        "text": {
            "type": String,
            "attr": "text"
        },
        "toggle": {
            "type": String,
            "attr": "toggle"
        },
        "type": {
            "type": Number,
            "attr": "type"
        }
    }; }
}
