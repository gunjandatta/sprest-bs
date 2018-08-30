import { IButtonProps } from "./button";

/**
 * Accordion
 */
export const Accordion: (props: IAccordionProps) => IAccordion | string;

/**
 * Accordion
 */
export interface IAccordion {
    /** The element. */
    el: Element;
}

/**
 * Accordion Item
 */
export interface IAccordionItem {
    btnProps?: IButtonProps;
    content?: string;
}

/**
 * Accordion Properties
 */
export interface IAccordionProps {
    className?: string;
    el?: Element | HTMLElement;
    id?: string;
    items?: Array<IAccordionItem>;
}