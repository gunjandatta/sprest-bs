export class Modal {
    // Component loaded event
    componentDidLoad() {
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Get the button properties
        let buttonProps = {};
        if (this.button) {
            try {
                buttonProps = JSON.parse(this.button);
            }
            catch (_a) {
                buttonProps = {};
                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.button);
            }
        }
        // Render the modal
        return GD.Components.Modal({
            body: this.body,
            button: buttonProps,
            className: this.className,
            disableFade: this.disableFade,
            el: this.el.children[0],
            footer: this.footer,
            hideCloseButton: this.hideCloseButton,
            id: this.id,
            isCentered: this.isCentered,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            title: this.el.getAttribute("title"),
            onRenderBody: (...args) => {
                // See if a render body event exists
                if (this.onRenderBody && window[this.onRenderBody]) {
                    // Call the event
                    window[this.onRenderBody].apply(this, args);
                }
            },
            onRenderFooter: (...args) => {
                // See if a render footer event exists
                if (this.onRenderFooter && window[this.onRenderFooter]) {
                    // Call the event
                    window[this.onRenderFooter].apply(this, args);
                }
            }
        });
    }
    // Render the modal
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-modal"; }
    static get properties() { return {
        "body": {
            "type": String,
            "attr": "body"
        },
        "button": {
            "type": String,
            "attr": "button"
        },
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "disableFade": {
            "type": Boolean,
            "attr": "disable-fade"
        },
        "el": {
            "elementRef": true
        },
        "footer": {
            "type": String,
            "attr": "footer"
        },
        "hideCloseButton": {
            "type": Boolean,
            "attr": "hide-close-button"
        },
        "id": {
            "type": String,
            "attr": "id"
        },
        "isCentered": {
            "type": Boolean,
            "attr": "is-centered"
        },
        "isLarge": {
            "type": Boolean,
            "attr": "is-large"
        },
        "isSmall": {
            "type": Boolean,
            "attr": "is-small"
        },
        "onRenderBody": {
            "type": String,
            "attr": "on-render-body"
        },
        "onRenderFooter": {
            "type": String,
            "attr": "on-render-footer"
        }
    }; }
}
