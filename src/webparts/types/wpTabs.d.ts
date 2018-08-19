import { IWebPart, IWebPartProps } from "./wp";

/**
 * Web Part Tabs
 */
export const WPTabs: (props: IWPTabsProps) => IWPTabs;

/**
 * WebPart Tabs
 */
export interface IWPTabs extends IWebPart { }

/**
 * WebPart Tabs Properties
 */
export interface IWPTabsProps extends IWebPartProps {
    type?: number;
}

/**
 * Web Part Tab Types
 */
export const WPTabTypes: {
    Pillars: number;
    Tabs: number;
}