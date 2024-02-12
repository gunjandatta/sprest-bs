import { IDropdown, IDropdownItem } from "gd-bs/src/components/dropdown/types";
import { IFormControlPropsMultiDropdown, IFormControlPropsMultiDropdownButton, IFormControlPropsMultiDropdownCheckbox } from "gd-bs/src/components/form/controlTypes";

/**
 * Base Property Pane Properties
 */
export interface IBasePropertyPaneProps<IComponent = any, IComponentProps = any> {
    description?: string;
    label?: string;
    onRendered?: (component?: IComponent, props?: IComponentProps) => void;
    onRendering?: (props?: IComponentProps) => IComponentProps;
    onSave?: (value: string | number | boolean | undefined) => string | number | boolean | undefined;
    placeholder?: string;
    properties?: object;
    tooltip?: string;
}

/**
 * Base Property Pane
 */
export interface IBasePropertyPane {
    /**
     * Type of the PropertyPane field.
     */
    type: number;

    /**
     * Target property from the web part's property bag.
     */
    targetProperty: string;

    /**
     * Whether this control should be focused.
     */
    shouldFocus?: boolean;

    /**
     * Strongly typed properties object. Specific to each field type.
     */
    properties: IBasePropertyPaneProperties;
}
export const BasePropertyPane = (targetProperty: string, config: IProps, context?: any) => IBasePropertyPane;

/**
 * Property Pane Base Properties
 */
export interface IBasePropertyPaneProperties {
    /**
     * This API will be called once the custom field is mounted on the host element.
     */
    onRender: (domElement: HTMLElement, context: any, changeCallback: (targetProperty: string, newValue?: string | number | boolean | undefined) => void) => void;

    /**
     * An UNIQUE key indicates the identity of this control.
     */
    key: string;

    /**
     * This API is called when the component is unmounted from the host element.
     */
    onDispose?: (domElement: HTMLElement, context: any) => void;

    /**
     * Instance specific context. This context is passed back to the web part in the
     * onRender and onDispose APIs. The web part can use this context to manage state
     * information.
     */
    context?: any;
}

/**
 * Multi-Dropdown
 */
export interface IMultiDropdown extends IBasePropertyPaneProps<IDropdown, IFormControlPropsMultiDropdown> {
    items?: IDropdownItem[];
}
export const MultiDropdown = (targetProperty: string, config: IMultiDropdown, context?: any) => IBasePropertyPane;

/**
 * Multi-Dropdown Button
 */
export interface IMultiDropdownButton extends IBasePropertyPaneProps<IDropdown, IFormControlPropsMultiDropdownButton> {
    items?: IDropdownItem[];
    placement?: number;
}
export const MultiDropdownButton = (targetProperty: string, config: IMultiDropdownButton, context?: any) => IBasePropertyPane;

/**
 * Multi-Dropdown Checkbox
 */
export interface IMultiDropdownCheckbox extends IBasePropertyPaneProps<IDropdown, IFormControlPropsMultiDropdownCheckbox> {
    items?: IDropdownItem[];
    placement?: number;
}
export const MultiDropdownCheckbox = (targetProperty: string, config: IMultiDropdownCheckbox, context?: any) => IBasePropertyPane;
