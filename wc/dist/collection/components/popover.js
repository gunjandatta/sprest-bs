export class Popover {
    componentDidLoad() {
        let btnProps = {};
        if (this.btnProps) {
            try {
                btnProps = JSON.parse(this.btnProps);
            }
            catch (_a) {
                btnProps = {};
                console.log("Error parsing the JSON string.");
                console.log(this.btnProps);
            }
        }
        let options = {};
        if (this.options) {
            try {
                options = JSON.parse(this.options);
            }
            catch (_b) {
                options = {};
                console.log("Error parsing the JSON string.");
                console.log(this.options);
            }
        }
        return GD.Components.Popover({
            btnProps,
            className: this.className,
            el: this.el.children[0],
            isDismissible: this.isDismissible,
            options,
            type: this.type
        });
    }
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-popover"; }
    static get properties() { return {
        "btnProps": {
            "type": String,
            "attr": "btn-props"
        },
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "isDismissible": {
            "type": Boolean,
            "attr": "is-dismissible"
        },
        "options": {
            "type": String,
            "attr": "options"
        },
        "type": {
            "type": Number,
            "attr": "type"
        }
    }; }
}
