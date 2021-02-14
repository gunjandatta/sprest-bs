/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the jumbotron
 *         $REST.Components.Jumbotron({
 *             el: document.querySelector("#demo"),
 *             title: "My Jumbotron",
 *             lead: "This is a jumbotron"
 *         });
 *     });
 * </script>
 */

/**
 * ### Jumbotron
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the jumbotron
 * let el = document.querySelector("#jumbotron");
 * let jumbotron = Components.Jumbotron({
 *     el: el,
 *     title: "My Jumbotron",
 *     lead: "This is a jumbotron"
 * });
 * ```
 */
export const Jumbotron: (props: IJumbotronProps, template?: string) => IJumbotron;

import { IBaseProps } from "../base";

/**
 * Jumbotron
 */
export interface IJumbotron {
    /** The element. */
    el: Element;

    /** Hides the jumbotron. */
    hide: () => void;

    /** Shows the jumbotron. */
    show: () => void;
}

/**
 * Jumbotron Properties
 */
export interface IJumbotronProps<T=Element> extends IBaseProps<IJumbotron> {
    content?: string | T;
    isFluid?: boolean;
    lead?: string;
    onRenderContent?: (el?: HTMLElement) => void;
    title?: string;
}