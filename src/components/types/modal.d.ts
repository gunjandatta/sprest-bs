/**
 * Modal
 */
export const Modal: (props: IModalProps) => Element | string;

/**
 * Modal Properties
 */
export interface IModalProps {
    className?: string;
    el?: Element | HTMLElement;
    disableFade?: boolean;
    hideCloseButton?: boolean;
    id?: string;
    isCentered?: boolean;
    isLarge?: boolean;
    isSmall?: boolean;
    onRenderBody?: (el: HTMLDivElement) => void;
    onRenderFooter?: (el: HTMLDivElement) => void;
    title?: string;
}