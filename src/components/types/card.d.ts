import { IButtonProps } from "./button";
import { INavProps } from "./nav";

/**
 * Card
 */
export const Card: (props: ICardProps) => ICard;

/**
 * Card
 */
export interface ICard {
    /** Destroys an element’s card. */
    dispose: () => void;

    /** The element. */
    el: Element;
}

/**
 * Card Properties
 */
export interface ICardProps {
    body?: [{
        actions?: Array<{
            buttonType?: number;
            href?: string;
            text?: string;
        }>;
        className?: string;
        content?: string;
        subTitle?: string;
        text?: string;
        title?: string;
    }];
    className?: string;
    el?: Element | HTMLElement;
    footer?: string;
    header?: {
        content?: string;
        nav?: INavProps;
    };
    imgBottom: {
        alt?: string;
        src?: string;
    }
    imgTop: {
        alt?: string;
        src?: string;
    };
}