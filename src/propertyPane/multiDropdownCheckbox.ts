import { Components } from "../components/core";
import { _MultiDropdown } from "./multiDropdown";
import { IMultiDropdownCheckbox } from "./types";

/**
 * Multi-Dropdown Checkbox
 */
class _MultiDropdownCheckbox extends _MultiDropdown<IMultiDropdownCheckbox> {
    // Override the rendering method to customize the type
    protected onRendering(props: Components.IFormControlPropsMultiDropdownCheckbox): Components.IFormControlPropsMultiDropdownCheckbox {
        // Set the type and placement
        props.placeholder = this.config.placeholder;
        props.placement = this.config.placement || Components.DropdownPlacements.Left;
        props.type = Components.FormControlTypes.MultiDropdownCheckbox;

        // Return the props
        return props;
    }
}
export const MultiDropdownCheckbox = (targetProperty: string, config: IMultiDropdownCheckbox, context?: any) => {
    return new _MultiDropdownCheckbox(targetProperty, config, context);
}