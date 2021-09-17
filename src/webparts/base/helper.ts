import { Components } from "gd-bs";
import { ContextInfo, } from "gd-sprest";
import { IHelper, IWPInstance } from "./helperTypes";
import { IWebPartCfg } from "./types";
declare var SP;

/**
 * Helper Methods
 */
export const Helper: IHelper = {
    // Method to get the webpart
    getWebPart: (wpId: string): PromiseLike<IWPInstance> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Get the current context
            let context = SP.ClientContext.get_current();

            // Get the webpart from the current page
            let page = context.get_web().getFileByServerRelativeUrl(ContextInfo.serverRequestPath);
            let wpMgr = page.getLimitedWebPartManager(SP.WebParts.PersonalizationScope.shared);
            let wpDef = wpMgr.get_webParts().getById(wpId);
            let wp = wpDef.get_webPart();
            context.load(wp, "Properties");

            // Execute the request
            context.executeQueryAsync(
                // Success
                () => {
                    // Resolve the promise
                    resolve({
                        Context: context,
                        Properties: wp.get_properties(),
                        WebPart: wp,
                        WebPartDefinition: wpDef
                    } as IWPInstance)
                },
                // Error
                (...args) => {
                    // Reject the promise
                    reject(args[1] ? args[1].get_message() : "");
                }
            );
        });
    },

    // Method to get the webpart id for a specified element
    getWebPartId: (el: HTMLElement) => {
        // Loop until we find the webpart id
        while (el) {
            // See if this element contains the webpart id
            let wpId = el.getAttribute("webpartid");
            if (wpId) {
                // Return the webpart id
                return wpId;
            }

            // Check the parent
            el = el.parentElement;
        }

        // Unable to detect
        return "";
    },

    // Method to render the edit form
    renderEditForm: (el: HTMLElement, wpCfg: IWebPartCfg, formControls: Array<Components.IFormControlProps> = []): Components.IForm => {
        let rows: Array<Components.IFormRow> = [];

        // Parse the controls
        for (let i = 0; i < formControls.length; i++) {
            // Add the control
            rows.push({ columns: [{ control: formControls[i] }] });
        }

        // Render the form
        return Components.Form({
            el,
            rows,
            value: wpCfg
        });
    },

    // Method to save the webpart configuration
    saveConfiguration: (wpId: string, cfgId?: string, wpCfg?: any): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Update the webpart content elements
            if (Helper.updateWebPartContentElements(wpId, cfgId, wpCfg)) {
                // Wiki page detected, resolve the promise and do nothing
                resolve();
                return;
            }

            // Get the target webpart
            Helper.getWebPart(wpId).then((wpInfo) => {
                // Get the content
                let content = wpInfo && wpInfo.Properties.get_fieldValues()["Content"];
                if (content) {
                    // Create an element so we can update the configuration
                    let el = document.createElement("div");
                    el.innerHTML = content;

                    // Get the configuration element and update it
                    let elCfg = el.querySelector("#" + cfgId) as HTMLDivElement;
                    elCfg ? elCfg.innerText = JSON.stringify(wpCfg) : null;

                    // Update the webpart
                    wpInfo.Properties.set_item("Content", el.innerHTML);
                    wpInfo.WebPartDefinition.saveWebPartChanges();
                    wpInfo.Context.load(wpInfo.WebPartDefinition);

                    // Execute the request
                    wpInfo.Context.executeQueryAsync(
                        // Success
                        () => {
                            // Disable the edit page warning
                            if (SP && SP.Ribbon && SP.Ribbon.PageState && SP.Ribbon.PageState.PageStateHandler) {
                                SP.Ribbon.PageState.PageStateHandler.ignoreNextUnload = true;
                            }

                            // Refresh the page
                            window.location.href = window.location.pathname + "?DisplayMode=Design";

                            // Resolve the promise
                            resolve();
                        },
                        // Error
                        (...args) => {
                            let message = args[1].get_message();

                            // Log
                            console.error("[gd-sprest] Error saving the configuration. " + message);

                            // Reject the promise
                            reject(message);
                        }
                    );
                }
            });
        });
    },

    // Method to update the configuration element
    updateConfigurationInElement: (cfgId: string, elTarget: HTMLInputElement, wpCfg) => {
        // Create an element so we can update the configuration
        let el = document.createElement("div");
        el.innerHTML = elTarget.value;

        // Get the configuration element and update it
        let cfg = el.querySelector("#" + cfgId) as HTMLDivElement;
        cfg ? cfg.innerText = JSON.stringify(wpCfg) : null;

        // Update the value
        elTarget.value = el.innerHTML;
    },

    // Method to update the webpart content elements
    updateWebPartContentElements: (wpId: string, cfgId?: string, wpCfg?: any): boolean => {
        // Get the webpart element
        let elWebPart = document.querySelector("div[webpartid='" + wpId + "']");
        if (elWebPart) {
            let wpContent = null;
            let wpPageContent = null;

            // Get the associated webpart id
            let wpId2 = elWebPart.getAttribute("webpartid2");

            // Update the configuration
            var elCfg = elWebPart.querySelector("#" + cfgId) as HTMLDivElement;
            elCfg ? elCfg.innerText = JSON.stringify(wpCfg) : null;

            // Parse the hidden elements on the page
            let hiddenElements = document.querySelectorAll("input[type='hidden']");
            for (let i = 0; i < hiddenElements.length; i++) {
                let elHidden: HTMLInputElement = hiddenElements[i] as any;

                // See if we have found the webpart content and page content hidden elements
                if (wpContent && wpPageContent) { continue; }

                // See if this is a hidden webpart content element
                if (elHidden.name && elHidden.name.indexOf("scriptcontent") == elHidden.name.length - 13) {
                    // See if it's for this webpart
                    if (elHidden.name.indexOf(wpId2) == 0) {
                        // Set the webpart content element
                        wpContent = elHidden;

                        // Update the configuration in the webpart content element
                        Helper.updateConfigurationInElement(cfgId, wpContent, wpCfg);
                    }

                    // Continue the loop
                    continue;
                }

                // Create an element and set the inner html to the value
                let el = document.createElement("div");
                el.innerHTML = elHidden.value;

                // See if this is a hidden field element
                if (el.querySelector("#" + cfgId)) {
                    // Set the webpart page content
                    wpPageContent = elHidden;

                    // Update the configuration in the webpart content element
                    Helper.updateConfigurationInElement(cfgId, wpPageContent, wpCfg);

                    // Continue the loop
                    continue;
                }
            }

            // Return true, if the page content exists
            return wpPageContent != null;
        }

        // Webpart is not in a content field
        return false;
    }
}