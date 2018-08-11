import { Component, Prop } from "@stencil/core";

@Component({
    tag: "gd-textbox",
    host: {
        theme: "bs"
    }
})
export class Textbox {
    @Prop() multi?: boolean;

    render() {
        return (
            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="textbox">Small</span>
                </div>
                <input type="text" aria-label="input" aria-describedby="textbox" />
            </div>
        );
    }
}