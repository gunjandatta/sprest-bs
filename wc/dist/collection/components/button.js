export class Button {
    // Component loaded event
    componentDidLoad() {
        // Get the onclick attribute
        let onClick = this.el.getAttribute("onClick");
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Render the button
        return GD.Components.Button({
            badgeType: this.badgeType,
            badgeValue: this.badgeValue,
            className: this.className,
            controls: this.controls,
            el: this.el.children[0],
            id: this.id,
            isBlock: this.isBlock,
            isDisabled: this.isDisabled,
            isExpanded: this.isExpanded,
            isLarge: this.isLarge,
            isOutline: this.isOutline,
            isSmall: this.isSmall,
            target: this.target,
            text: this.text,
            toggle: this.toggle,
            type: this.type,
            onClick: (...args) => {
                // See if a click event exists
                if (onClick && window[onClick]) {
                    // Call the event
                    window[onClick].apply(this, args);
                }
            }
        });
    }
    // Render the button
    render() {
        return (h("div", null));
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
        "el": {
            "elementRef": true
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
