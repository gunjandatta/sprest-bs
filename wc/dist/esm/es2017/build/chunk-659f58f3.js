/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';

class Collapse {
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

class Dropdown {
    componentDidLoad() {
        let onChange = this.el.getAttribute("onChange");
        this.el.removeAttribute("id");
        let items = [];
        if (this.items) {
            try {
                items = JSON.parse(this.items);
            }
            catch (_a) {
                items = [];
                console.log("Error parsing the JSON string.");
                console.log(this.items);
            }
        }
        return GD.Components.Dropdown({
            className: this.className,
            dropLeft: this.dropLeft,
            dropRight: this.dropRight,
            dropUp: this.dropUp,
            el: this.el.children[0],
            formFl: this.formFl,
            id: this.id,
            isSplit: this.isSplit,
            items: items,
            label: this.label,
            menuOnly: this.menuOnly,
            multi: this.multi,
            type: this.type,
            value: this.value,
            onChange: (...args) => {
                if (onChange && window[onChange]) {
                    window[onChange].apply(this, args);
                }
            }
        });
    }
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-dropdown"; }
    static get properties() { return {
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "dropLeft": {
            "type": Boolean,
            "attr": "drop-left"
        },
        "dropRight": {
            "type": Boolean,
            "attr": "drop-right"
        },
        "dropUp": {
            "type": Boolean,
            "attr": "drop-up"
        },
        "el": {
            "elementRef": true
        },
        "formFl": {
            "type": Boolean,
            "attr": "form-fl"
        },
        "id": {
            "type": String,
            "attr": "id"
        },
        "isSplit": {
            "type": Boolean,
            "attr": "is-split"
        },
        "items": {
            "type": String,
            "attr": "items"
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "menuOnly": {
            "type": Boolean,
            "attr": "menu-only"
        },
        "multi": {
            "type": Boolean,
            "attr": "multi"
        },
        "type": {
            "type": Number,
            "attr": "type"
        },
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
}

class Form {
    componentDidLoad() {
        let rows = [];
        if (this.rows) {
            try {
                rows = JSON.parse(this.rows);
            }
            catch (_a) {
                rows = [];
                console.log("Error parsing the JSON string.");
                console.log(this.rows);
            }
        }
        let value = null;
        if (this.value) {
            try {
                value = JSON.parse(this.value);
            }
            catch (_b) {
                value = null;
                console.log("Error parsing the JSON string.");
                console.log(this.value);
            }
        }
        return GD.Components.Form({
            el: this.el.children[0],
            rows: rows,
            value: value
        });
    }
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-form"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "rows": {
            "type": String,
            "attr": "rows"
        },
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
}

export { Collapse as a, Dropdown as b, Form as c };
