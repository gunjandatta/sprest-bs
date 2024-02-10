import { Components } from "../components/core";
import { BasePropertyPane } from "./base";
import { IMultiDropdownCheckbox } from "./types";

/**
 * Multi-Dropdown Checkbox
 */
class _MultiDropdownCheckbox extends BasePropertyPane<IMultiDropdownCheckbox> {
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
        let props = {
            description: this.config.description,
            items: this.config.items,
            label: this.config.label,
            name: this.targetProperty,
            placeholder: this.config.placeholder,
            placement: this.config.placement || Components.DropdownPlacements.Left,
            type: Components.FormControlTypes.MultiDropdownCheckbox,
            value: currentValue,
            onChange: (items) => {
                // Convert the object as a string
                let value: string | number | boolean | undefined = undefined;
                try { value = JSON.stringify(items); }
                catch { }

                // Call the event
                value = this.config.onSave ? this.config.onSave(value) : value;

                // Update the property
                onChange(this.targetProperty, value);
            }
        } as Components.IFormControlPropsMultiDropdownCheckbox;

        // Call the rendering event
        props = this.config.onRendering ? this.config.onRendering(props) : props;

        // Render the dropdown
        Components.Form({
            el,
            controls: [props],
            onControlRendered: (ctrl) => {
                // Call the event
                this.config.onRendered ? this.config.onRendered(ctrl.dropdown, ctrl.props) : null;
            }
        })
    }
}
export const MultiDropdownCheckbox = (targetProperty: string, config: IMultiDropdownCheckbox, context?: any) => {
    return new _MultiDropdownCheckbox(targetProperty, config, context);
}