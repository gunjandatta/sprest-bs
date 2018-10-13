import { getProps } from "../common";
export class Nav {
    render() {
        let props = getProps(this.el, {
            className: this.className,
            el: this.el,
            enableFade: this.enableFade,
            enableFill: this.enableFill,
            id: this.id,
            isJustified: this.isJustified,
            isPills: this.isPills,
            isTabs: this.isTabs,
            isVertical: this.isVertical
        });
        this.el.removeAttribute("id");
        return GD.Components.Nav(props);
    }
    static get is() { return "bs-nav"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
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
            "type": Boolean,
            "attr": "is-justified"
        },
        "isPills": {
            "type": Boolean,
            "attr": "is-pills"
        },
        "isTabs": {
            "type": Boolean,
            "attr": "is-tabs"
        },
        "isVertical": {
            "type": Boolean,
            "attr": "is-vertical"
        }
    }; }
}
