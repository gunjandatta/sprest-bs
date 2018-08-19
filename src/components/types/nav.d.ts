/**
 * Navigation
 */
export const Navigation: (props: INavProps) => Element | string;

/**
 * Navigation Properties
 */
export interface INavProps {
    className?: string;
    el?: Element | HTMLElement;
    enableFade?: boolean;
    enableFill?: boolean;
    id?: string;
    items?: Array<INavLink>;
    isJustified?: boolean;
    isPills?: boolean;
    isTabs?: boolean;
    isVertical?: boolean;
}

/**
 * Navigation Links
 */
export interface INavLink {
    isActive?: boolean;
    isDisabled?: boolean;
    href?: string;
    onClick?: (item: INavLink, ev?: Event) => void;
    onRenderTab?: (el: HTMLDivElement) => void;
    tabContent?: string;
    title?: string;
}