import { IBasePropertyPane, IBasePropertyPaneProperties, IBasePropertyPaneProps } from "./types";
import { Components } from "../components/core";

/**
 * Base Property Pane
 */
export class BasePropertyPane<IProps = IBasePropertyPaneProps> implements IBasePropertyPane {
    private _config: IBasePropertyPaneProps;
    get config(): IProps { return this._config as IProps; }
    properties: IBasePropertyPaneProperties;
    targetProperty: string;

    // Set the type (Custom = 1)
    type = 1;

    // Constructor
    constructor(targetProperty: string, config: IProps, context?: any) {
        // Save the configuration
        this._config = config;

        // Save the key
        this.targetProperty = targetProperty;

        // Set the properties
        this.properties = {
            key: this.targetProperty,
            context,
            onDispose: (el, context) => {
                // Call the events
                this.dispose(el, context);
                this.onDispose ? this.onDispose(el, context) : null;
            },
            onRender: (el, context, onChange) => {
                this.render(el, context, onChange);
                this.onRender ? this.onRender(el, context, onChange) : null;
            }
        }
    }

    // Applies the tooltip to an element
    protected applyTooltip(el: HTMLElement) {
        // Apply the tooltip
        let content = this._config.tooltip;
        if (content) {
            Components.Tooltip({
                target: el,
                content
            });
        }
    }

    // Returns the current value as a string
    get currentValue(): string | undefined {
        let properties = this._config.properties;
        return properties ? properties[this.targetProperty] : undefined;
    }

    // Returns the current value as an object
    currentValueAsObject<T>(): T | undefined {
        // Ensure a value exists
        if (this.currentValue) {
            try { return JSON.parse(this.currentValue) as T; }
            catch { }
        }

        // Return nothing
        return undefined;
    }

    // Dispose of the component
    protected onDispose(el: HTMLElement, context: any) { }
    private dispose(el: HTMLElement, context: any): void {
        // Clear the element
        while (el.firstChild) { el.removeChild(el.firstChild); }
    }

    // Renders the component
    protected onRender(el: HTMLElement, context: any, onChange: (targetProperty: string, newValue?: string | number | boolean | undefined) => void) { }
    private render(el: HTMLElement, context: any, onChange: (targetProperty: string, newValue?: string | number | boolean | undefined) => void): void {
        // Clear the component
        this.dispose(el, context);
    }
}