/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the navbar
 *         $REST.Components.Navbar({
 *             el: document.querySelector("#demo"),
 *             brand: "Navbar",
 *             items: [
 *                 {
 *                     text: "Home",
 *                     isActive: true
 *                 },
 *                 {
 *                     text: "Link"
 *                 },
 *                 {
 *                     text: "Disabled Link",
 *                     isDisabled: true
 *                 },
 *                 {
 *                     text: "Dropdown Link",
 *                     items: [
 *                         { text: "Link 1" },
 *                         { text: "Link 2" },
 *                         { text: "Link 3" },
 *                         { text: "Link 4" },
 *                         { text: "Link 5" }
 *                     ]
 *                 }
 *             ]
 *         });
 *     });
 * </script>
 */

/**
 * ### Navbar
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the navbar
 * let el = document.querySelector("#navbar");
 * let navbar = Components.Navbar({
 *     el: el,
 *     brand: "Navbar",
 *     searchBox: {
 *         onChange: (value) => {
 *             // Log the value
 *             console.log("The search value is: " + value);
 *         },
 *         onSearch: (value) => {
 *             // Log the value
 *             console.log("The search value is: " + value);
 *         }
 *     },
 *     items: [
 *         {
 *             text: "Home",
 *             isActive: true
 *         },
 *         {
 *             text: "Link"
 *         },
 *         {
 *             text: "Disabled Link",
 *             isDisabled: true
 *         },
 *         {
 *             text: "Dropdown Link",
 *             items: [
 *                 { text: "Link 1" },
 *                 { text: "Link 2" },
 *                 { text: "Link 3" },
 *                 { text: "Link 4" },
 *                 { text: "Link 5" }
 *             ]
 *         }
 *     ]
 * });
 * ```
 */
export const Navbar: (props: INavbarProps, template?: string, itemTemplate?: string) => INavbar;

/**
 * Navbar Types
 */
export const NavbarTypes: INavbarTypes;

import { IBaseProps } from "../base";
import { IDropdownItem } from "./dropdown";
import { IPopoverProps } from "./popover";

/**
 * Navbar
 */
export interface INavbar {
    /** The element. */
    el: HTMLBaseElement;

    /** Hides the nav bar. */
    hide: () => void;

    /** Updates the navbar type. */
    setType: (navbarType: number) => void;

    /** Shows the nav bar. */
    show: () => void;
}

/**
 * Navbar Item
 */
export interface INavbarItem {
    className?: string;
    classNameItem?: string;
    data?: any;
    href?: string;
    iconSize?: number;
    iconType?: Function;
    isActive?: boolean;
    isButton?: boolean;
    isDisabled?: boolean;
    items?: Array<IDropdownItem>;
    onClick?: (item?: INavbarItem, ev?: Event) => void;
    onMenuRendering?: (props: IPopoverProps) => IPopoverProps;
    onRender?: (el?: HTMLElement, item?: INavbarItem) => void;
    target?: string;
    text?: string;
    toggle?: string;
    toggleObj?: any;
}

/**
 * Navbar Properties
 */
export interface INavbarProps<T = Element> extends IBaseProps<INavbar> {
    brand?: string | T;
    brandUrl?: string;
    enableScrolling?: boolean;
    enableSearch?: boolean;
    id?: string;
    items?: Array<INavbarItem>;
    itemsEnd?: Array<INavbarItem>;
    onClick?: (item?: INavbarItem, ev?: Event) => void;
    onItemRendered?: (el?: HTMLElement, item?: INavbarItem) => void;
    searchBox?: INavbarSearchBox;
    type?: number;
}

/**
 * Navbar Types
 */
export type INavbarTypes = {
    Dark: number;
    Light: number;
    Primary: number;
}

/**
 * Navbar Search Box
 */
export interface INavbarSearchBox {
    btnType?: number;
    btnText?: string;
    hideButton?: boolean;
    onChange?: (value?: string, ev?: Event) => void;
    onSearch?: (value?: string, ev?: Event) => void;
    placeholder?: string;
    value?: string;
}