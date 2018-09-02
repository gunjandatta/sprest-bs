import { IProgressProps } from "./progress";

/**
 * Progress Group
 */
export const ProgressGroup: (props: IProgressGroupProps) => IProgressGroup;

/**
 * Progress Group
 */
export interface IProgressGroup {
    /** The element. */
    el: Element;
}

/**
 * Progress Group Properties
 */
export interface IProgressGroupProps {
    className?: string;
    el?: Element | HTMLElement;
    isMultiple?: boolean;
    progressbars?: Array<IProgressProps>;
}