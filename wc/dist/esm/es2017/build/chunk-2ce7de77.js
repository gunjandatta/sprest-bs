/*! Built with http://stenciljs.com */
import { h } from '../gd-sprest-bs.core.js';

class Nav {
    componentDidLoad() {
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
        return GD.Components.Nav({
            className: this.className,
            el: this.el.children[0],
            enableFade: this.enableFade,
            enableFill: this.enableFill,
            id: this.id,
            items,
            isJustified: this.isJustified,
            isPills: this.isPills,
            isTabs: this.isTabs,
            isVertical: this.isVertical
        });
    }
    render() {
        return (h("div", null));
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
        },
        "items": {
            "type": String,
            "attr": "items"
        }
    }; }
}

class Navbar {
    componentDidLoad() {
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
        let searchBox = {};
        if (this.searchBox) {
            try {
                searchBox = JSON.parse(this.searchBox);
            }
            catch (_b) {
                searchBox = {};
                console.log("Error parsing the JSON string.");
                console.log(this.searchBox);
            }
            if (searchBox.onChange && window[searchBox.onChange]) {
                let event = window[searchBox.onChange];
                searchBox.onChange = (...args) => {
                    event.apply(this, args);
                };
            }
            if (searchBox.onSearch && window[searchBox.onSearch]) {
                let event = window[searchBox.onSearch];
                searchBox.onSearch = (...args) => {
                    event.apply(this, args);
                };
            }
        }
        return GD.Components.Navbar({
            brand: this.brand,
            brandUrl: this.brandUrl,
            className: this.className,
            el: this.el.children[0],
            enableSearch: this.enableSearch,
            id: this.id,
            items,
            searchBox,
            type: this.type
        });
    }
    render() {
        return (h("div", null));
    }
    static get is() { return "bs-navbar"; }
    static get properties() { return {
        "brand": {
            "type": String,
            "attr": "brand"
        },
        "brandUrl": {
            "type": String,
            "attr": "brand-url"
        },
        "className": {
            "type": String,
            "attr": "class-name"
        },
        "el": {
            "elementRef": true
        },
        "enableSearch": {
            "type": Boolean,
            "attr": "enable-search"
        },
        "id": {
            "type": String,
            "attr": "id"
        },
        "items": {
            "type": String,
            "attr": "items"
        },
        "searchBox": {
            "type": String,
            "attr": "search-box"
        },
        "type": {
            "type": Number,
            "attr": "type"
        }
    }; }
}

export { Nav as a, Navbar as b };
