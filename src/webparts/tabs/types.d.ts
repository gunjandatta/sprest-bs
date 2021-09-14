import { INav } from "gd-bs/src/components/nav/types";
import { IWebPart, IWebPartProps } from "../base/types";

/**
 * ### WebPart Tabs
 * 
 * The webpart tabs will generate tabs for each visible webpart in its zone.
 * 
 * ```ts
 * import { WebParts } from "gd-sprest-bs";
 * 
 * // Create the webpart
 * WebParts.WPTabs({ elementId: "my-tabs" });
 * ```
 */
export const WPTabs: (props: IWPTabsProps) => IWPTabs;

/**
 * WebPart Tab Types
 */
export const WPTabTypes: IWPTabTypes;

/**
 * WebPart Tabs
 */
export interface IWPTabs extends IWebPart {
    getNav(): INav;
    getTabs(): Array<HTMLElement>;
}

/**
 * WebPart Tabs Properties
 */
export interface IWPTabsProps extends IWebPartProps {
    onClick?: (el?: HTMLElement) => void;
    type?: number;
}

/**
 * WebPart Tab Types
 */
export type IWPTabTypes = {
    Pillars: number;
    Tabs: number;
}