/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the card
 *         $REST.Components.Card({
 *             el: document.querySelector("#demo"),
 *             body: [
 *                 {
 *                     "title": "Card Title",
 *                     "text": "This is the card contents.",
 *                     "actions": [
 *                         { "text": "Card Action", "buttonType": $REST.Components.ButtonTypes.Primary }
 *                     ]
 *                 }
 *             ]
 *         });
 *     });
 * </script>
 */

/**
 * ### Card
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the card
 * let el = document.querySelector("#card");
 * let card = Components.Card({
 *     el: el,
 *     body: [
 *         {
 *             title: "Card Title",
 *             text: "This is the card contents.",
 *             actions: [
 *                 {
 *                     text: "Card Action",
 *                     buttonType: $REST.Components.ButtonTypes.Primary
 *                 }
 *             ]
 *         }
 *     ]
 * });
 * ```
 */
export const Card: (props: ICardProps, template?: string) => ICard;

import { IBaseProps } from "../base";
import { IButtonProps } from "./button";
import { INavProps } from "./nav";

/**
 * Card
 */
export interface ICard {
    /** The element. */
    el: Element;

    /** Hides the card. */
    hide: () => void;

    /** Shows the card. */
    show: () => void;
}

/**
 * Card Action
 */
export interface ICardAction {
    buttonType?: number;
    data?: any;
    onClick?: (action?: ICardAction, card?: ICardBody, ev?: Event) => void;
    href?: string;
    text?: string;
}

/**
 * Card Body
 */
export interface ICardBody<T=Element> {
    actions?: Array<ICardAction>;
    className?: string;
    content?: string | T;
    data?: any;
    onClick?: (card?: ICardProps, ev?: Event) => void;
    onRender?: (el?: HTMLElement, card?: ICardBody) => void;
    onRenderTitle?: (el?: HTMLElement, card?: ICardBody) => void;
    subTitle?: string;
    text?: string;
    title?: string | T;
}

/**
 * Card Footer
 */
export interface ICardFooter<T=Element> {
    className?: string;
    content?: string | T;
    onRender?: (el?: HTMLElement, card?: ICardFooter) => void;
}

/**
 * Card Header
 */
export interface ICardHeader<T=Element> {
    className?: string;
    content?: string | T;
    onRender?: (el?: HTMLElement, card?: ICardHeader) => void;
    nav?: INavProps;
}

/**
 * Card Properties
 */
export interface ICardProps<T=Element> extends IBaseProps<ICard> {
    body?: Array<ICardBody<T>>;
    footer?: ICardFooter<T>;
    header?: ICardHeader<T>;
    imgBottom?: {
        alt?: string;
        src?: string;
    }
    imgTop?: {
        alt?: string;
        src?: string;
    };
    onClick?: (card?: ICardBody, ev?: Event) => void;
}