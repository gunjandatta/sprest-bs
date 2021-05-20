/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // See if a navigation exists
 *         var navigation = document.querySelector("#demo");
 *         if(navigation) {
 *             // Render the navigation
 *             $REST.Components.Nav({
 *                 el: navigation,
 *                 isPills: true,
 *                 items: [
 *                     { title: "Nav 1", isActive: true },
 *                     { title: "Nav 2" },
 *                     { title: "Nav 3" },
 *                     { title: "Nav 4" },
 *                     { title: "Nav 5" }
 *                 ]
 *             });
 *         }
 *     });
 * </script>
 */

/**
 * ### Navigation
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";

 * // Create the navigation
 * let el = document.querySelector("#navigation");
 * let nav = Components.Nav({
 *     el: el,
 *     isPills: true,
 *     items: [
 *         { title: "Nav 1", isActive: true },
 *         { title: "Nav 2" },
 *         { title: "Nav 3" },
 *         { title: "Nav 4" },
 *         { title: "Nav 5" }
 *     ]
 * });
 * ```
 */
export const Nav: (props: INavProps, template?: string, itemTemplate?: string) => INav;

import { IBaseProps } from "../base";

/**
 * Navigation
 */
export interface INav {
    /** The element. */
    el: HTMLUListElement;

    /** Hides the navigation. */
    hide: () => void;

    /**
     * Shows the navigation or selects the given tab and shows its associated pane. Any other tab that was previously selected becomes unselected and its associated pane is hidden.
     * @prop selector - The query selector.
     */
    show: (selector?: string) => void;
}

/**
 * Navigation Properties
 */
export interface INavProps<T = Element> extends IBaseProps<INav> {
    data?: any;
    enableFill?: boolean;
    fadeTabs?: boolean;
    id?: string;
    items?: Array<INavLink<T>>;
    isJustified?: boolean;
    isPills?: boolean;
    isTabs?: boolean;
    isVertical?: boolean;
}

/**
 * Navigation Links
 */
export interface INavLink<T = Element> {
    isActive?: boolean;
    isDisabled?: boolean;
    className?: string;
    data?: any;
    href?: string;
    onClick?: (item?: INavLink, ev?: Event) => void;
    onRenderTab?: (item?: INavLink, el?: HTMLDivElement) => void;
    tabContent?: string | T;
    title?: string;
}