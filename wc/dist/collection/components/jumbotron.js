export class Jumbotron {
    componentDidLoad() {
        let onRenderContent = this.el.getAttribute("onRenderContent");
        return GD.Components.Jumbotron({
            className: this.className,
            content: this.content,
            el: this.el.children[0],
            isFluid: this.isFluid,
            lead: this.lead,
            title: this.el.getAttribute("title"),
            onRenderContent: (...args) => {
                if (onRenderContent && window[onRenderContent]) {
                    window[onRenderContent].apply(this, args);
                }
            }
        });
    }
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
