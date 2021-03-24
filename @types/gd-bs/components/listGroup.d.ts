/**
 * <div id="demo"></div>
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the listGroup
 *         $REST.Components.ListGroup({
 *             el: document.querySelector("#demo"),
 *             colWidth: 4,
 *             isTabs: true,
 *             items: [
 *                 { tabName: "Tab 1", content: "This is the content for tab 1.", isActive: true },
 *                 { tabName: "Tab 2", content: "This is the content for tab 2.", badge: { content: "10", type: 4 } },
 *                 { tabName: "Tab 3", content: "This is the content for tab 3." },
 *                 { tabName: "Tab 4", content: "This is the content for tab 4." },
 *                 { tabName: "Tab 5", content: "This is the content for tab 5." }
 *             ]
 *         });
 *     });
 * </script>
 */

/**
 * ### List Group
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the listGroup
 * let el = document.querySelector("#listGroup");
 * let listGroup = Components.listGroup({
 *     el: el,
 *     colWidth: 4,
 *     isTabs: true,
 *     items: [
 *         { tabName: "Tab 1", content: "This is the content for tab 1.", isActive: true },
 *         { tabName: "Tab 2", content: "This is the content for tab 2.", badge: { content: "10", type: 4 } },
 *         { tabName: "Tab 3", content: "This is the content for tab 3." },
 *         { tabName: "Tab 4", content: "This is the content for tab 4." },
 *         { tabName: "Tab 5", content: "This is the content for tab 5." }
 *     ]
 * });
 * ```
 */
export const ListGroup: (props: IListGroupProps, template?: string, itemTemplate?: string) => IListGroup;

/**
 * List Group Item Types
 */
export const ListGroupItemTypes: IListGroupItemTypes;

import { IBaseProps } from "../base";
import { IBadgeProps } from "./badge";

/**
 * List Group
 */
export interface IListGroup {
    /** The element. */
    el: Element;

    /** Hides the list group. */
    hide: () => void;

    /**
     * Shows the list group, or specified tab content.
     * @prop elId - The tab id.
     */
    show: (tabId?: string) => void;
}

/**
 * List Group Item
 */
export interface IListGroupItem<T=Element> {
    badge?: IBadgeProps;
    className?: string;
    content?: string | T;
    data?: any;
    href?: string;
    isActive?: boolean;
    isDisabled?: boolean;
    onClick?: (el?: HTMLElement, item?: IListGroupItem) => void;
    onRender?: (el?: HTMLElement, item?: IListGroupItem) => void;
    tabName?: string;
    type?: number;
}

/**
 * List Group Properties
 */
export interface IListGroupProps<T=Element> extends IBaseProps<IListGroup> {
    colWidth?: number;
    fadeTabs?: boolean;
    isFlush?: boolean;
    isHorizontal?: boolean;
    isNumbered?: boolean;
    isTabs?: boolean;
    items?: Array<IListGroupItem<T>>;
}

/**
 * List Group Item Types
 */
export type IListGroupItemTypes = {
    Danger: number;
    Dark: number;
    Info: number;
    Light: number;
    Primary: number;
    Secondary: number;
    Success: number;
    Warning: number;
}