export class Button {
    // Component loaded event
    componentDidLoad() {
        // Remove the id attribute
        this.el.parentElement.removeAttribute("id");
        // Render the button
        return $REST.Components.Button({
            badgeType: this.badgeType,
            badgeValue: this.badgeValue,
            className: this.className,
            controls: this.controls,
            el: this.el,
            id: this.id,
            isBlock: this.isBlock,
            isDisabled: this.isDisabled,
            isExpanded: this.isExpanded,
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
        "badgeType": {
            "type": Number,
            "attr": "badge-type"
        },
        "badgeValue": {
            "type": String,
            "attr": "badge-value"
        },
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "controls": {
            "type": "Any",
            "attr": "controls"
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
        "isExpanded": {
            "type": Boolean,
            "attr": "is-expanded"
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
