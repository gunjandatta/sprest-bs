export class Navbar {
    // Component loaded event
    componentDidLoad() {
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Get the items
        let items = [];
        if (this.items) {
            try {
                items = JSON.parse(this.items);
            }
            catch (_a) {
                items = [];
                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.items);
            }
        }
        // Get the search box
        let searchBox = {};
        if (this.searchBox) {
            try {
                searchBox = JSON.parse(this.searchBox);
            }
            catch (_b) {
                searchBox = {};
                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.searchBox);
            }
            // See if the change event exists
            if (searchBox.onChange && window[searchBox.onChange]) {
                let event = window[searchBox.onChange];
                // Set the event
                searchBox.onChange = (...args) => {
                    // Call the event
                    event.apply(this, args);
                };
            }
            // See if the search event exists
            if (searchBox.onSearch && window[searchBox.onSearch]) {
                let event = window[searchBox.onSearch];
                // Set the event
                searchBox.onSearch = (...args) => {
                    // Call the event
                    event.apply(this, args);
                };
            }
        }
        // Render the navbar
        return $REST.Components.Navbar({
            brand: this.brand,
            brandUrl: this.brandUrl,
            className: this.className,
            el: this.el.children[0],
            id: this.id,
            items,
            searchBox,
            type: this.type
        });
    }
    // Render the navbar
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
