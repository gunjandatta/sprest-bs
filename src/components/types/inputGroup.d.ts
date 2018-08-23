/**
 * Input Group
 */
export const InputGroup: (props: IInputGroupProps) => Element | string;

/**
 * Input Group Types
 */
export const InputGroupTypes: IInputGroupTypes;

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
    onChange?: (value?: string, ev?: Event) => void;
    placeholder?: string;
    prependedLabel?: string;
    type?: number;
    value?: string;
}

/**
 * Input Group Types
 */
export type IInputGroupTypes = {
    Email: number;
    File: number;
    Password: number;
    TextArea: number;
    TextField: number;
}