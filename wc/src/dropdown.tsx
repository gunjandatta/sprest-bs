import { Component, Element, Prop } from "@stencil/core";
declare var GD;

@Component({
    tag: "bs-dropdown"
})
export class Dropdown {
    @Element() private el: HTMLElement;

    // Dropdown Properties
    @Prop() className: string;
    @Prop() dropLeft: boolean;
    @Prop() dropRight: boolean;
    @Prop() dropUp: boolean;
    @Prop() formFl: boolean;
    @Prop() id: string;
    @Prop() isSplit: boolean;
    @Prop() items: string;
    @Prop() label: string;
    @Prop() menuOnly: boolean;
    @Prop() multi: boolean;
    @Prop() type: number;
    @Prop() value: string;

    // Component loaded event
    componentDidLoad() {
        // Get the onclick attribute
        let onChange = this.el.getAttribute("onChange");

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

        // Render the dropdown
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
                // See if a change event exists
                if (onChange && window[onChange]) {
                    // Call the event
                    window[onChange].apply(this, args);
                }
            }
        });
    }

    // Render the dropdown
    render() {
        return (
            <div />
        );
    }
}