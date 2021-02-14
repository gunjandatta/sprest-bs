/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the pagination
 *         $REST.Components.Pagination({
 *             el: document.querySelector("#demo"),
 *             numberOfPages: 5
 *         });
 *     });
 * </script>
 */

/**
 * ### Pagination
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the pagination
 * let el = document.querySelector("#pagination");
 * let pagination = Components.Pagination({
 *     el: el,
 *     numberOfPages: 5,
 *     onClick: (index, ev) => {
 *         // Log the index
 *         console.log("The page number selected is: " + index);
 *     }
 * });
 * ```
 */
export const Pagination: (props: IPaginationProps, template?: string, itemTemplate?: string) => IPagination;

import { IBaseProps } from "../base";

/**
 * Pagination Alignment
 */
export const PaginationAlignment: IPaginationAlignment;

/**
 * Pagination
 */
export interface IPagination {
    /** The element. */
    el: HTMLBaseElement;

    /** Hides the pagination. */
    hide: () => void;

    /** Shows the pagination. */
    show: () => void;
}

/**
 * Pagination Properties
 */
export interface IPaginationProps extends IBaseProps<IPagination> {
    alignment?: number;
    isLarge?: boolean;
    isSmall?: boolean;
    label?: string;
    numberOfPages?: number;
    onClick?: (pageNumber?: number, ev?: Event) => void;
}

/**
 * Pagination Alignment
 */
export type IPaginationAlignment = {
    Centered: number;
    Left: number;
    Right: number;
}