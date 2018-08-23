/**
 * Navigation
 */
export const Navigation: (props: INavProps) => INavigation | string;

/**
 * Navigation
 */
export interface INavigation {
    /** Destroys an element’s tab. */
    dispose: () => void;

    /** The element. */
    el: Element;

    /**
     * Selects the given tab and shows its associated pane. Any other tab that was previously selected becomes unselected and its associated pane is hidden.
     * @prop selector - The query selector.
     */
    show: (selector: string) => void;
}

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
    onClick?: (item?: INavLink, ev?: Event) => void;
    onRenderTab?: (el: HTMLDivElement) => void;
    tabContent?: string;
    title?: string;
}