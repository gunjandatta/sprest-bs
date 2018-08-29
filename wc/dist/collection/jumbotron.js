export class Jumbotron {
    // Component loaded event
    componentDidLoad() {
        // Get the onRenderContent attribute
        let onRenderContent = this.el.getAttribute("onRenderContent");
        // Render the jumbotron
        return $REST.Components.Jumbotron({
            className: this.className,
            content: this.content,
            el: this.el.children[0],
            isFluid: this.isFluid,
            lead: this.lead,
            title: this.el.getAttribute("title"),
            onRenderContent: (...args) => {
                // See if a render event exists
                if (onRenderContent && window[onRenderContent]) {
                    // Call the event
                    window[onRenderContent].apply(this, args);
                }
            }
        });
    }
    // Render the jumbotron
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-jumbotron"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "content": {
            "type": String,
            "attr": "content"
        },
        "el": {
            "elementRef": true
        },
        "isFluid": {
            "type": Boolean,
            "attr": "is-fluid"
        },
        "lead": {
            "type": String,
            "attr": "lead"
        }
    }; }
}
