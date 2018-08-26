export class Alert {
    // Component loaded event
    componentDidLoad() {
        // Render the button
        return $REST.Components.Alert({
            className: this.className,
            content: this.content,
            header: this.header,
            isDismissible: this.isDismissible,
            type: this.type
        });
    }
    // Render the button
    render() {
        return (h("div", { ref: el => this.el = el }));
    }
    static get is() { return "bs-alert"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "content": {
            "type": String,
            "attr": "content"
        },
        "header": {
            "type": String,
            "attr": "header"
        },
        "isDismissible": {
            "type": Boolean,
            "attr": "is-dismissible"
        },
        "type": {
            "type": Number,
            "attr": "type"
        }
    }; }
}
