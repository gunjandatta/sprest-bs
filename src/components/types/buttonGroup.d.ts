import { IButtonProps } from ".";

/**
 * Button Group
 */
export const ButtonGroup: (props: IButtonGroupProps) => Element | string;

/**
 * Button Group Properties
 */
export interface IButtonGroupProps {
    buttons?: Array<IButtonProps>;
    buttonType?: number;
    className?: string;
    el?: Element | HTMLElement;
    id?: string;
    isLarge?: boolean;
    isSmall?: boolean;
    isVertical?: boolean;
    label?: string;
}