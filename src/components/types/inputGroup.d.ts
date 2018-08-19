/**
 * Input Group
 */
export const InputGroup: (props: IInputGroupProps) => Element | string;

/**
 * Input Group Properties
 */
export interface IInputGroupProps {
    appendedLabel?: string;
    className?: string;
    description?: string;
    el?: Element | HTMLElement;
    id?: string;
    isLarge?: boolean;
    isSmall?: boolean;
    label?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    prependedLabel?: string;
    type?: number;
    value?: string;
}