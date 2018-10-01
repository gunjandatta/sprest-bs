export class ProgressGroup {
    componentDidLoad() {
        let progressbars = [];
        if (this.progressbars) {
            try {
                progressbars = JSON.parse(this.progressbars);
            }
            catch (_a) {
                progressbars = [];
                console.log("Error parsing the JSON string.");
                console.log(this.progressbars);
            }
        }
        return GD.Components.ProgressGroup({
            className: this.className,
            el: this.el.children[0],
            isMultiple: this.isMultiple,
            progressbars
        });
    }
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-progressGroup"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "isMultiple": {
            "type": Boolean,
            "attr": "is-multiple"
        },
        "progressbars": {
            "type": String,
            "attr": "progressbars"
        }
    }; }
}
