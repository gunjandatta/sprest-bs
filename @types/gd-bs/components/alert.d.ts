/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // See if a alert exists
 *         var alert = document.querySelector("#demo");
 *         if(alert) {
 *             // Render the alert
 *             $REST.Components.Alert({
 *                 el: alert,
 *                 content: "This is an alert."
 *             });
 *         }
 *     });
 * </script>
 */

/**
 * ### Alert
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the alert
 * let el = document.querySelector("#alert");
 * let alert = Components.Alert({
 *     el: el,
 *     content: "This is an alert."
 * });
 * ```
 */
export const Alert: (props: IAlertProps, template?: string) => IAlert;

/**
 * Alert Types
 */
export const AlertTypes: IAlertTypes;

import { IBase, IBaseProps } from "../base";

/**
 * Alert
 */
export interface IAlert extends IBase<IAlertProps> {
    /** Closes an alert by removing it from the DOM. */
    close: () => void;

    /** Disposes the alert. */
    dispose: () => void;

    /** Updates the alert text. */
    setText: (alertText?: string) => void;

    /** Updates the alert type. */
    setType: (alertType: number) => void;
}

/**
 * Alert Properties
 */
export interface IAlertProps<T = Element> extends IBaseProps<IAlert> {
    content?: string | T;
    data?: any;
    header?: string;
    isDismissible?: boolean;
    onClose?: (props?: IAlertProps) => void;
    type?: number;
}

/**
 * Alert Types
 */
export type IAlertTypes = {
    Danger: number;
    Dark: number;
    Info: number;
    Light: number;
    Primary: number;
    Secondary: number;
    Success: number;
    Warning: number;
}