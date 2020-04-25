import { INav } from "gd-bs/components/nav";
import { IWebPart, IWebPartProps } from "./wp";

/**
 * WebPart Tabs
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