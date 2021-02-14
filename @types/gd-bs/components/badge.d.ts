/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // See if a badge exists
 *         var badge = document.querySelector("#demo");
 *         if(badge) {
 *             // Render the badge
 *             $REST.Components.Badge({
 *                 el: badge,
 *                 content: "Badge"
 *             });
 *         }
 *     });
 * </script>
 */

/**
 * ### Badge
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the badge
 * let el = document.querySelector("#badge");
 * let badge = Components.Badge({
 *     el: el,
 *     content: "Badge"
 * });
 * ```
 */
export const Badge: (props: IBadgeProps, template?: string) => IBadge;

/**
 * Badge Types
 */
export const BadgeTypes: IBadgeTypes;

import { IBase, IBaseProps } from '../base';

/**
 * Badge
 */
export interface IBadge extends IBase<IBadgeProps> {
    /** The element. */
    el: HTMLAnchorElement | HTMLSpanElement;
}

/**
 * Badge Properties
 */
export interface IBadgeProps<T=Element> extends IBaseProps<IBadge> {
    content?: string | T;
    data?: any;
    header?: string;
    href?: string;
    isPill?: boolean;
    onClick?: (badge?: IBadgeProps, ev?: Event) => void;
    type?: number;
}

/**
 * Badge Types
 */
export type IBadgeTypes = {
    Danger: number;
    Dark: number;
    Info: number;
    Light: number;
    Primary: number;
    Secondary: number;
    Success: number;
    Warning: number;
}