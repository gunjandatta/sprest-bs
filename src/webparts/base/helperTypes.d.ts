import { IFormControlProps } from "gd-bs/src/components/form/controlTypes";
import { IForm } from "gd-bs/src/components/form/formTypes";
import { IWebPartInfo } from "./types";

/**
 * Helper Methods
 */
export const Helper: IHelper;

/**
 * Helper Methods
 */
export interface IHelper {
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
     * Method to render the edit form.
     * @param el - The element to render the form to.
     * @param wpCfg - The webpart configuration information.
     * @param formControls - The form controls to render.
     */
    renderEditForm: (el: HTMLElement, wpCfg: IWebPartCfg, formControls: Array<IFormControlProps>) => IForm;

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
