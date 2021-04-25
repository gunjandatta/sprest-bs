/**
 * Base
 */
export interface IBase<IProps = IBaseProps> {
    /** Internal method to configure the parent element. */
    configureParent(): Element;

    /** The component HTML element */
    el: Element | HTMLElement;

    /** Hides the component. */
    hide(): void;

    /** The component properties */
    props: IProps;

    /** Shows the component. */
    show(): void;
}

/**
 * Base Properties
 */
export interface IBaseProps<IBaseObj = any> {
    /** Assigns the object to the input parameter. */
    assignTo?: (obj: IBaseObj) => void;

    /** Custom class names. */
    className?: string;

    /** The element to render the component to. */
    el?: Element | HTMLElement;
}