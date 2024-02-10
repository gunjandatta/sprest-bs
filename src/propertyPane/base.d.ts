/**
 * Base Property Pane Properties
 */
export interface IBasePropertyPaneProps<IComponent, IComponentProps> {
    description?: string;
    label?: string;
    onRendered?: (component?: IComponent, props?: IComponentProps) => void;
    onRendering?: (props?: IComponentProps) => IComponentProps;
    placeholder?: string;
    properties?: { [key: string]: string }
    tooltip?: string;
}

/**
 * Base Property Pane
 */
export interface IBasePropertyPane {
    /**
     * Type of the PropertyPane field.
     */
    type: number;

    /**
     * Target property from the web part's property bag.
     */
    targetProperty: string;

    /**
     * Whether this control should be focused.
     */
    shouldFocus?: boolean;

    /**
     * Strongly typed properties object. Specific to each field type.
     */
    properties: IBasePropertyPaneProperties;
}

/**
 * Property Pane Base Properties
 */
export interface IBasePropertyPaneProperties {
    /**
     * This API will be called once the custom field is mounted on the host element.
     */
    onRender: (domElement: HTMLElement, context?: any, changeCallback?: (targetProperty?: string, newValue?: any) => void) => void;

    /**
     * An UNIQUE key indicates the identity of this control.
     */
    key: string;

    /**
     * This API is called when the component is unmounted from the host element.
     */
    onDispose?: (domElement: HTMLElement, context?: any) => void;

    /**
     * Instance specific context. This context is passed back to the web part in the
     * onRender and onDispose APIs. The web part can use this context to manage state
     * information.
     */
    context?: any;
}