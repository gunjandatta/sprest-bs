export class Collapse {
    componentDidLoad() {
        let onRender = this.el.getAttribute("onRender");
        this.el.removeAttribute("id");
        let options = [];
        if (this.options) {
            try {
                options = JSON.parse(this.options);
            }
            catch (_a) {
                options = [];
                console.log("Error parsing the JSON string.");
                console.log(this.options);
            }
        }
        return GD.Components.Collapse({
            className: this.className,
            content: this.content,
            el: this.el.children[0],
            id: this.id,
            isMulti: this.isMulti,
            options,
            onRender: (...args) => {
                if (onRender && window[onRender]) {
                    window[onRender].apply(this, args);
                }
            }
        });
    }
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-collapse"; }
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
        "id": {
            "type": String,
            "attr": "id"
        },
        "isMulti": {
            "type": Boolean,
            "attr": "is-multi"
        },
        "options": {
            "type": String,
            "attr": "options"
        }
    }; }
}
