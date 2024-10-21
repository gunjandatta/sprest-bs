import { Components } from "../components/core";
import { _Dropdown } from "./dropdown";
import { IDropdownButton } from "./types";

/**
 * Dropdown Button
 */
class _DropdownButton extends _Dropdown<IDropdownButton> {
    // Override the rendering method to customize the type
    protected onRendering(props: Components.IFormControlPropsDropdownButton): Components.IFormControlPropsDropdownButton {
        // Set the type and placement
        props.placeholder = this.config.placeholder;
        props.placement = this.config.placement || Components.DropdownPlacements.Left;
        props.type = Components.FormControlTypes.DropdownButton;

        // Return the props
        return props;
    }
}
export const DropdownButton = (targetProperty: string, config: IDropdownButton, context?: any) => {
    return new _DropdownButton(targetProperty, config, context);
}