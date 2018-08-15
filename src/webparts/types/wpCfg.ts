/**
 * WebPart Configuration
 */
export interface IWPCfg {
    /**
     * Method to get the webpart
     * @param wpId - The webpart id.
     */
    getWebPart(wpId: string): PromiseLike<IWPInstance>;

    /**
     * Method to get the webpart id for a specified element
     * @param el - The target element.
     */
    getWebPartId(el: HTMLElement): string;

    /**
     * Method to save the webpart configuration.
     * This method may execute a postback, based on the page type.
     * @param wpId - The webpart id.
     * @param cfgId: The configuration element id.
     * @param wpCfg - The webpart configuration.
     */
    saveConfiguration(wpId: string, cfgId?: string, wpCfg?: any): PromiseLike<void>;

    /**
     * Method to update the configuration element
     * @param cfgId: The configuration element id.
     * @param elTarget - The target element.
     * @param wpCfg - The webpart configuration.
     */
    updateConfigurationInElement(cfgId: string, elTarget: HTMLInputElement, wpCfg);

    /**
     * Method to update the webpart content elements
     * @param wpId - The webpart id.
     * @param cfgId: The configuration element id.
     * @param wpCfg - The webpart configuration.
     */
    updateWebPartContentElements(wpId: string, cfgId?: string, wpCfg?: any): boolean;
}

/**
 * WebPart Information
 */
export interface IWPInstance {
    Context: any;
    Properties: any;
    WebPart: any;
    WebPartDefinition: any;
}
