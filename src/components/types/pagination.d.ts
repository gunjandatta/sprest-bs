/**
 * Pagination
 */
export const Pagination: (props: IPaginationProps) => IPagination | string;

/**
 * Pagination Alignment
 */
export const PaginationAlignment: IPaginationAlignment;

/**
 * Pagination
 */
export interface IPagination {
    /** The element. */
    el: Element;
}

/**
 * Pagination Properties
 */
export interface IPaginationProps {
    alignment?: number;
    className?: string;
    el?: Element | HTMLElement;
    icon?: string;
    isLarge?: boolean;
    isSmall?: boolean;
    label?: string;
    numberOfPages?: number;
    onClick?: (pageNumber?: number, ev?: Event) => void;
}

/**
 * Pagination Alignment
 */
export type IPaginationAlignment = {
    Centered: number;
    Left: number;
    Right: number;
}