import { Components } from "../components/core";
import { BasePropertyPane } from "./base";
import { IDropdown } from "./types";

/**
 * Dropdown
 */
export class _Dropdown<T = IDropdown> extends BasePropertyPane<T> {
    // Internal rendering event
    protected onRendering(props: Components.IFormControlPropsDropdown): Components.IFormControlPropsDropdown { return props; }

    // Override the render event
    onRender(el: HTMLElement, context: any, onChange: (targetProperty: string, newValue?: string | number | boolean | undefined) => void) {
        let currentValue = this.currentValueAsObject<string[]>();
        if (currentValue) {
            let values = [];

            // Parse the values
            for (let i = 0; i < currentValue.length; i++) {
                values.push(currentValue[i]["value"] || currentValue[i]["text"] || currentValue[i]["label"]);
            }

            // Update the current value
            currentValue = values;
        }

        // Set the properties
        let config: IDropdown = this.config;
        let props = {
            description: config.description,
            items: config.items,
            label: config.label,
            name: this.targetProperty,
            type: Components.FormControlTypes.Dropdown,
            value: currentValue,
            onChange: (item) => {
                // Convert the object as a string
                let value: string | number | boolean | undefined = undefined;
                try { value = JSON.stringify(item); }
                catch { }

                // Call the event
                value = config.onSave ? config.onSave(value) : value;

                // Update the property
                onChange(this.targetProperty, value);
            }
        } as Components.IFormControlPropsDropdown;

        // Call the rendering events
        props = this.onRendering(props);
        props = config.onRendering ? config.onRendering(props) : props;

        // Render the dropdown
        Components.Form({
            el,
            controls: [props],
            onControlRendered: (ctrl) => {
                // Call the event
                config.onRendered ? config.onRendered(ctrl.dropdown, ctrl.props) : null;
            }
        })
    }
}
export const Dropdown = (targetProperty: string, config: IDropdown, context?: any) => {
    return new _Dropdown(targetProperty, config, context);
}