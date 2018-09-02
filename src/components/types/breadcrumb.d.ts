/**
 * Breadcrumb
 */
export const Breadcrumb: (props: IBreadcrumbProps) => IBreadcrumb;

/**
 * Breadcrumb
 */
export interface IBreadcrumb {
    /** The element. */
    el: Element;
}

/**
 * Breadcrumb Item
 */
export interface IBreadcrumbItem {
    href?: string;
    text?: string;
}

/**
 * Breadcrumb Properties
 */
export interface IBreadcrumbProps {
    className?: string;
    el?: Element | HTMLElement;
    items?: Array<IBreadcrumbItem>
}