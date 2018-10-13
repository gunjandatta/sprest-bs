import { getProps } from "../common";
export class Modal {
    render() {
        let props = getProps(this.el, {
            body: this.body,
            className: this.className,
            disableFade: this.disableFade,
            el: this.el,
            footer: this.footer,
            hideCloseButton: this.hideCloseButton,
            id: this.id,
            isCentered: this.isCentered,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            title: this.el.getAttribute("title")
        });
        this.el.removeAttribute("id");
        return GD.Components.Modal(props);
    }
    static get is() { return "bs-modal"; }
    static get properties() { return {
        "body": {
            "type": String,
            "attr": "body"
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
        }
    }; }
}
