import { ICardProps } from ".";

/**
 * Card Group
 */
export const CardGroup: (props: ICardGroupProps) => ICardGroup | string;

/**
 * Card Group
 */
export interface ICardGroup {
    /** The element. */
    el: Element;
}

/**
 * Card Group Properties
 */
export interface ICardGroupProps {
    cards?: Array<ICardProps>;
    className?: string;
    el?: Element | HTMLElement;
}