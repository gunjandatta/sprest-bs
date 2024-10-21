import { Components } from "../components/core";
import { _Dropdown } from "./dropdown";
import { IDropdownCheckbox } from "./types";

/**
 * Dropdown Checkbox
 */
class _DropdownCheckbox extends _Dropdown<IDropdownCheckbox> {
    // Override the rendering method to customize the type
    protected onRendering(props: Components.IFormControlPropsDropdownCheckbox): Components.IFormControlPropsDropdownCheckbox {
        // Set the type and placement
        props.placeholder = this.config.placeholder;
        props.placement = this.config.placement || Components.DropdownPlacements.Left;
        props.type = Components.FormControlTypes.DropdownCheckbox;

        // Return the props
        return props;
    }
}
export const DropdownCheckbox = (targetProperty: string, config: IDropdownCheckbox, context?: any) => {
    return new _DropdownCheckbox(targetProperty, config, context);
}