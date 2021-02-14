/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the inputGroup
 *         $REST.Components.InputGroup({
 *             el: document.querySelector("#demo"),
 *             label: "My Name:",
 *             value: "First Last"
 *         });
 *     });
 * </script>
 */

/**
 * ### Input Group
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the inputGroup
 * let el = document.querySelector("#inputGroup");
 * let inputGroup = Components.InputGroup({
 *     el: el,
 *     label: "My Name:",
 *     value: "First Last"
 * });
 * ```
 */
export const InputGroup: (props: IInputGroupProps, template?: string) => IInputGroup;

/**
 * Input Group Types
 */
export const InputGroupTypes: IInputGroupTypes;

import { IBaseProps } from "../base";
import { IButtonProps } from "./button";

/**
 * Button Group
 */
export interface IInputGroup {
    /** The element. */
    el: HTMLElement;

    /** Method to get the value. */
    getValue: () => string;

    /** Hides the input group. */
    hide: () => void;
    
    /** Method to set the value. */
    setValue: (value: string) => void;

    /** Shows the input group. */
    show: () => void;
}

/**
 * Input Group Properties
 */
export interface IInputGroupProps extends IBaseProps<IInputGroup> {
    appendedButtons?: Array<IButtonProps>;
    appendedLabel?: string;
    formFl?: boolean;
    id?: string;
    isLarge?: boolean;
    isReadonly?: boolean;
    isSmall?: boolean;
    label?: string;
    max?: number;
    min?: number;
    onClear?: () => void;
    onChange?: (value?: string, ev?: Event) => void;
    placeholder?: string;
    prependedButtons?: Array<IButtonProps>;
    prependedLabel?: string;
    rows?: number;
    step?: number;
    title?: string;
    type?: number;
    value?: string;
}

/**
 * Input Group Types
 */
export type IInputGroupTypes = {
    ColorPicker: number;
    Email: number;
    File: number;
    Password: number;
    Range: number;
    Search: number;
    TextArea: number;
    TextField: number;
}