/**
 * Button
 */
export const Button: (props: IButtonProps) => Element | string;

/**
 * Button Properties
 */
export interface IButtonProps {
    className?: string;
    el?: Element | HTMLElement;
    id?: string;
    isBlock?: boolean;
    isDisabled?: boolean;
    isLarge?: boolean;
    isOutline?: boolean;
    isSmall?: boolean;
    onClick?: (ev: Event) => void;
    target?: string;
    text?: string;
    toggle?: string;
    type?: number;
}