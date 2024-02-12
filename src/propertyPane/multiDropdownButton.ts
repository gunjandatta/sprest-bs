import { Components } from "../components/core";
import { _MultiDropdown } from "./multiDropdown";
import { IMultiDropdownButton } from "./types";

/**
 * Multi-Dropdown Button
 */
class _MultiDropdownButton extends _MultiDropdown<IMultiDropdownButton> {
    // Override the rendering method to customize the type
    protected onRendering(props: Components.IFormControlPropsMultiDropdownButton): Components.IFormControlPropsMultiDropdownButton {
        // Set the type and placement
        props.placeholder = this.config.placeholder;
        props.placement = this.config.placement || Components.DropdownPlacements.Left;
        props.type = Components.FormControlTypes.MultiDropdownButton;

        // Return the props
        return props;
    }
}
export const MultiDropdownButton = (targetProperty: string, config: IMultiDropdownButton, context?: any) => {
    return new _MultiDropdownButton(targetProperty, config, context);
}