import { Components } from "../components/core";
import { BasePropertyPane } from "./base";
import { IMultiDropdown } from "./types";

/**
 * Multi-Dropdown
 */
export class _MultiDropdown<T = IMultiDropdown> extends BasePropertyPane<T> {
    // Internal rendering event
    protected onRendering(props: Components.IFormControlPropsMultiDropdown): Components.IFormControlPropsMultiDropdown { return props; }

    // Override the render event
    onRender(el: HTMLElement, context: any, onChange: (targetProperty: string, newValue?: string | number | boolean | undefined) => void) {
        let currentValue = this.currentValueAsObject<string[]>();
        if (currentValue) {
            let values = [];

            // Parse the values
            for (let i = 0; i < currentValue.length; i++) {
                values.push(currentValue[i]["value"] || currentValue[i]["text"]);
            }

            // Update the current value
            currentValue = values;
        }

        // Set the properties
        let config: IMultiDropdown = this.config;
        let props = {
            description: config.description,
            items: config.items,
            label: config.label,
            name: this.targetProperty,
            type: Components.FormControlTypes.MultiDropdown,
            value: currentValue,
            onChange: (items) => {
                // Convert the object as a string
                let value: string | number | boolean | undefined = undefined;
                try { value = JSON.stringify(items); }
                catch { }

                // Call the event
                value = config.onSave ? config.onSave(value) : value;

                // Update the property
                onChange(this.targetProperty, value);
            }
        } as Components.IFormControlPropsMultiDropdown;

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
export const MultiDropdown = (targetProperty: string, config: IMultiDropdown, context?: any) => {
    return new _MultiDropdown(targetProperty, config, context);
}