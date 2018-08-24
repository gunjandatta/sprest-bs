import { IButtonProps } from "./button";
import { INavProps } from "./nav";

/**
 * Card
 */
export const Card: (props: ICardProps) => ICard | string;

/**
 * Card
 */
export interface ICard {
    /** Destroys an element’s button. */
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
    footer?: string;
    className?: string;
    header?: {
        content?: string;
        nav?: INavProps;
    };
    el?: Element | HTMLElement;
    imgBottom: {
        alt?: string;
        src?: string;
    }
    imgTop: {
        alt?: string;
        src?: string;
    };
}