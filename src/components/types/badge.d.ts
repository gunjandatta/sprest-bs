/**
 * Badge
 */
export const Badge: (props: IBadgeProps) => IBadge;

/**
 * Badge Types
 */
export const BadgeTypes: IBadgeTypes;

/**
 * Badge
 */
export interface IBadge {
    /** The element. */
    el: Element;
}

/**
 * Badge Properties
 */
export interface IBadgeProps {
    className?: string;
    content?: string;
    el?: Element | HTMLElement;
    header?: string;
    href?: string;
    isPill?: boolean;
    type?: number;
}

/**
 * Badge Types
 */
export type IBadgeTypes = {
    Danger: number;
    Dark: number;
    Info: number;
    Light: number;
    Primary: number;
    Secondary: number;
    Success: number;
    Warning: number;
}