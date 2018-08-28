export class Modal {
    // Component loaded event
    componentDidLoad() {
        // Render the modal
        return $REST.Components.Modal({
            className: this.className,
            disableFade: this.disableFade,
            el: this.el,
            hideCloseButton: this.hideCloseButton,
            id: this.id,
            isCentered: this.isCentered,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            title: this.title
        });
    }
    // Render the modal
    render() {
        return (h("div", { ref: el => this.el = el }));
    }
    static get is() { return "bs-modal"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "disableFade": {
            "type": Boolean,
            "attr": "disable-fade"
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
        "title": {
            "type": String,
            "attr": "title"
        }
    }; }
}
