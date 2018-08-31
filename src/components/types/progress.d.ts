/**
 * Progress
 */
export const Progress: (props: IProgressProps) => IProgress | string;

/**
 * Progress
 */
export interface IProgress {
    /** The element. */
    el: Element;
}

/**
 * Progress Properties
 */
export interface IProgressProps {
    className?: string;
    el?: Element | HTMLElement;
    isAnimated?: boolean;
    isStriped?: boolean;
    label?: string;
    max?: number;
    min?: number;
    size?: number;
}