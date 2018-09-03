export class ProgressGroup {
    // Component loaded event
    componentDidLoad() {
        // Set the progress bars
        let progressbars = [];
        if (this.progressbars) {
            try {
                progressbars = JSON.parse(this.progressbars);
            }
            catch (_a) {
                progressbars = [];
                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.progressbars);
            }
        }
        // Render the progress group
        return GD.Components.ProgressGroup({
            className: this.className,
            el: this.el.children[0],
            isMultiple: this.isMultiple,
            progressbars
        });
    }
    // Render the progress
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
