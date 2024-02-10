import { IBasePropertyPaneProps } from "./base.d";
import { IDropdown, IDropdownItem } from "gd-bs/src/components/dropdown/types";
import { IFormControlPropsMultiDropdownCheckbox } from "gd-bs/src/components/form/controlTypes";

export interface IMultiDropdownCheckbox extends IBasePropertyPaneProps<IDropdown, IFormControlPropsMultiDropdownCheckbox> {
    items?: IDropdownItem[];
    placement?: number;
}