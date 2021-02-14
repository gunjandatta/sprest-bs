/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the form
 *         $REST.Components.Form({
 *             el: document.querySelector("#demo"),
 *             rows: [
 *                 {
 *                   columns: [
 *                       {
 *                           control: {
 *                               label: "First Name:",
 *                               name: "FName",
 *                               type: $REST.Components.FormControlTypes.TextField
 *                           }
 *                       },
 *                       {
 *                           control: {
 *                               label: "Last Name:",
 *                               name: "LName",
 *                               type: $REST.Components.FormControlTypes.TextField
 *                           }
 *                       },
 *                       {
 *                           control: {
 *                               label: "Choices:",
 *                               name: "Choice",
 *                               type: $REST.Components.FormControlTypes.Dropdown,
 *                               items: [
 *                                   { text: "Choice 1", value: "1" },
 *                                   { text: "Choice 2", value: "2" },
 *                                   { text: "Choice 3", value: "3" },
 *                                   { text: "Choice 4", value: "4" },
 *                                   { text: "Choice 5", value: "5" }
 *                               ]
 *                           }
 *                       }
 *                   ]
 *                 }
 *             ],
 *             value: {
 *                 FName: "Gunjan",
 *                 LName: "Datta",
 *                 Choice: "3"
 *             }
 *         });
 *     });
 * </script>
 */

/**
 * ### Form
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the form
 * let el = document.querySelector("#myForm");
 * let form = Components.Form({
 *     el: el,
 *     rows: [
 *         {
 *             control: {
 *                 label: "First Name:",
 *                 name: "FName",
 *                 type: Components.FormControlTypes.TextField
 *             }
 *         },
 *         {
 *             control: {
 *                 label: "Last Name:",
 *                 name: "LName",
 *                 type: Components.FormControlTypes.TextField
 *             }
 *         },
 *         {
 *             control: {
 *                 label: "Choices:",
 *                 name: "Choice",
 *                 type: Components.FormControlTypes.Dropdown,
 *                 items: [
 *                     { text: "Choice 1", value: "1" },
 *                     { text: "Choice 2", value: "2" },
 *                     { text: "Choice 3", value: "3" },
 *                     { text: "Choice 4", value: "4" },
 *                     { text: "Choice 5", value: "5" }
 *                 ]
 *             }
 *         }
 *     ],
 *     value: {
 *         FName: "Gunjan",
 *         LName: "Datta",
 *         Choice: "3"
 *     }
 * });
 * ```
 */
export const Form: (props: IFormProps) => IForm;

import { IBaseProps } from "../base";
import { IFormControl, IFormControlProps, IFormControlTypes } from "./formControl";

/**
 * Form Validation Types
 */
export const FormValidationTypes: IFormValidationTypes;

/**
 * Form
 */
export interface IForm {
    /** Appends controls to the form */
    appendControls: (controls: Array<IFormControlProps>) => void;

    /** Appends rows to the form */
    appendRows: (rows: Array<IFormRow>) => void;

    /** The form controls */
    controls: Array<IFormControl>;

    /** The form element */
    el: HTMLFormElement;

    /** Gets a control by its name */
    getControl: (name: string) => IFormControl;

    /** Returns the form values */
    getValues: () => { [key: string]: any };

    /** Hides the form. */
    hide: () => void;

    /** Validates the form */
    isValid: () => boolean;

    /** Shows the form. */
    show: () => void;
}

/**
 * Form Column
 */
export interface IFormColumn {
    className?: string;
    control: IFormControlProps;
    isAutoSized?: boolean;
    size?: number;
}

/**
 * Form Properties
 */
export interface IFormProps extends IBaseProps<IForm> {
    controls?: Array<IFormControlProps>;
    groupClassName?: string;
    isFloating?: boolean;
    rowClassName?: string;
    rows?: Array<IFormRow>;
    onControlRendering?: (control: IFormControlProps) => void | PromiseLike<IFormControlProps>;
    onControlRendered?: (control: IFormControl) => void | PromiseLike<IFormControl>;
    onRendered?: (controls: Array<IFormControl>) => void;
    validationType?: number;
    value?: any;
}

/**
 * Form Row
 */
export interface IFormRow {
    className?: string;
    isAutoSized?: boolean;
    isCentered?: boolean;
    columns?: Array<IFormColumn>;
}

/**
 * Form Validation Types
 */
export type IFormValidationTypes = {
    Default: number;
    Tooltip: number;
}