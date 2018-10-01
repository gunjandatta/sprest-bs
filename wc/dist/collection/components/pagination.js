export class Pagination {
    componentDidLoad() {
        let onClick = this.el.getAttribute("onClick");
        return GD.Components.Pagination({
            alignment: this.alignment,
            className: this.className,
            el: this.el.children[0],
            icon: this.icon,
            isLarge: this.isLarge,
            isSmall: this.isSmall,
            label: this.label,
            numberOfPages: this.numberOfPages,
            onClick: (...args) => {
                if (onClick && window[onClick]) {
                    window[onClick].apply(this, args);
                }
            }
        });
    }
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-pagination"; }
    static get properties() { return {
        "alignment": {
            "type": Number,
            "attr": "alignment"
        },
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "icon": {
            "type": String,
            "attr": "icon"
        },
        "isLarge": {
            "type": Boolean,
            "attr": "is-large"
        },
        "isSmall": {
            "type": Boolean,
            "attr": "is-small"
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "numberOfPages": {
            "type": Number,
            "attr": "number-of-pages"
        }
    }; }
}
