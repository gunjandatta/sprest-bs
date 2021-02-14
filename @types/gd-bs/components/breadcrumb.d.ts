/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the breadcrumb
 *         $REST.Components.Breadcrumb({
 *             el: document.querySelector("#demo"),
 *             items: [
 *                 { text: "Root", href: "/" },
 *                 { text: "Web 1", href: "/web" },
 *                 { text: "Web 1-1", href: "/web/1" }
 *             ]
 *         });
 *     });
 * </script>
 */

/**
 * ### Breadcrumb
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the breadcrumb
 * let el = document.querySelector("#breadcrumb");
 * let breadcrumb = Components.Breadcrumb({
 *     el: el,
 *     items: [
 *         { text: "Root", href: "/" },
 *         { text: "Web 1", href: "/web" },
 *         { text: "Web 1-1", href: "/web/1" }
 *     ]
 * });
 * ```
 */
export const Breadcrumb: (props: IBreadcrumbProps, template?: string) => IBreadcrumb;

import { IBaseProps } from "../base";

/**
 * Breadcrumb
 */
export interface IBreadcrumb {
    /** The element. */
    el: Element;

    /** Hides the breadcrumb. */
    hide: () => void;

    /** Shows the breadcrumb. */
    show: () => void;
}

/**
 * Breadcrumb Item
 */
export interface IBreadcrumbItem {
    /** The breadcrumb link */
    href?: string;

    /** Internal flag set by the component */
    isActive?: boolean;

    /** Click event for the link */
    onClick?: (item?: IBreadcrumbItem, ev?: Event) => void;

    /** The link text */
    text?: string;
}

/**
 * Breadcrumb Properties
 */
export interface IBreadcrumbProps extends IBaseProps {
    /** The breadcrumb items */
    items?: Array<IBreadcrumbItem>

    /** Click event for the link */
    onClick?: (item?: IBreadcrumbItem, ev?: Event) => void;
}