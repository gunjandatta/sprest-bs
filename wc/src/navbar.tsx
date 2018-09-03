import { Component, Element, Prop } from "@stencil/core";
declare var GD;

@Component({
    tag: "bs-navbar"
})
export class Navbar {
    @Element() private el: HTMLElement;

    // Navbar Properties
    @Prop() brand: string;
    @Prop() brandUrl: string;
    @Prop() className: string;
    @Prop() id: string;
    @Prop() items: string;
    @Prop() searchBox: string;
    @Prop() type: number;

    // Component loaded event
    componentDidLoad() {
        // Remove the id attribute
        this.el.removeAttribute("id");

        // Get the items
        let items = [];
        if (this.items) {
            try { items = JSON.parse(this.items); }
            catch {
                items = [];

                // Log an error
                console.log("Error parsing the JSON string.");
                console.log(this.items);
            }
        }

        // Get the search box
        let searchBox: any = {};
        if (this.searchBox) {
            try { searchBox = JSON.parse(this.searchBox); }
            catch {
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
                }
            }

            // See if the search event exists
            if (searchBox.onSearch && window[searchBox.onSearch]) {
                let event = window[searchBox.onSearch];

                // Set the event
                searchBox.onSearch = (...args) => {
                    // Call the event
                    event.apply(this, args);
                }
            }
        }

        // Render the navbar
        return GD.Components.Navbar({
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
        return (
            <div />
        );
    }
}