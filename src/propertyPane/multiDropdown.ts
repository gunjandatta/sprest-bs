import { Components } from "../components/core";
import { BasePropertyPane } from "./base";
import { IMultiDropdownCheckbox } from "./multiDropdown.d";

/**
 * Multi-Dropdown Checkbox
 */
export class MultiDropdownCheckbox extends BasePropertyPane<IMultiDropdownCheckbox> {
    // Override the render event
    onRender(el: HTMLElement, context?: any, onChange?: (targetProperty: string, newValue?: string) => void) {
        // Set the properties
        let props = {
            description: this.config.description,
            items: this.config.items,
            label: this.config.label,
            name: this.targetProperty,
            placeholder: this.config.placeholder,
            placement: this.config.placement,
            type: Components.FormControlTypes.MultiDropdownCheckbox,
            value: this.currentValueAsObject<string[]>(),
            onChange: (items) => {
                // Save the value as a string
                onChange(this.targetProperty, JSON.stringify(items));
            }
        } as Components.IFormControlPropsMultiDropdownCheckbox;

        // Call the rendering event
        props = this.config.onRendering ? this.config.onRendering(props) : props;

        // Render the dropdown
        Components.Form({
            el,
            controls: [],
            onControlRendered: (ctrl) => {
                // Call the event
                this.config.onRendered ? this.config.onRendered(ctrl.dropdown, ctrl.props) : null;
            }
        })
    }
}