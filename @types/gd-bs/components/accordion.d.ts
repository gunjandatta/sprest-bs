/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Render the accordion
 *     $REST.Components.Accordion({
 *         autoCollapse: true,
 *         el: document.querySelector("#demo"),
 *         id: "demoAccordion",
 *         items: [
 *             {
 *                 btnProps: { text: "Item 1" },
 *                 content: "This is the content for item 1."
 *             },
 *             {
 *                 btnProps: { text: "Item 2" },
 *                 content: "This is the content for item 2."
 *             },
 *             {
 *                 btnProps: { text: "Item 3" },
 *                 content: "This is the content for item 3."
 *             }
 *         ]
 *     });
 * </script>
 */

/**
 * ### Accordion
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the accordion
 * let el = document.querySelector("#accordion");
 * let accordion = Components.Accordion({
 *     autoCollapse: true,
 *     el: el,
 *     id: "demoAccordion",
 *     items: [
 *         {
 *             btnProps: { text: "Item 1" },
 *             content: "This is the content for item 1."
 *         },
 *         {
 *             btnProps: { text: "Item 2" },
 *             content: "This is the content for item 2."
 *         },
 *         {
 *             btnProps: { text: "Item 3" },
 *             content: "This is the content for item 3."
 *         }
 *     ]
 * });
 * ```
 */
export const Accordion: (props: IAccordionProps, template?: string, itemTemplate?: string) => IAccordion;

import { IBase, IBaseProps } from "../base";
import { IButtonProps } from "./button";
import { ICollapseOptions } from "./collapse";

/**
 * Accordion
 */
export interface IAccordion extends IBase<IAccordionProps> { }

/**
 * Accordion Item
 */
export interface IAccordionItem<T=Element> {
    data?: any;
    content?: string | T;
    header?: string;
    onClick?: (el?: HTMLElement, item?: IAccordionItem<T>) => void;
    onRender?: (el?: HTMLElement, item?: IAccordionItem<T>) => void;
    showFl?: boolean;
}

/**
 * Accordion Options
 */
export interface IAccordionOptions extends ICollapseOptions { }

/**
 * Accordion Properties
 */
export interface IAccordionProps<T=Element> extends IBaseProps<IAccordion> {
    id?: string;
    items?: Array<IAccordionItem<T>>;
    options?: IAccordionOptions;
}