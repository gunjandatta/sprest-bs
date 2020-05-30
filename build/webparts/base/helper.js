"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gd_bs_1 = require("gd-bs");
var gd_sprest_1 = require("gd-sprest");
/**
 * Helper Methods
 */
exports.Helper = {
    // Method to get the webpart
    getWebPart: function (wpId) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Get the current context
            var context = SP.ClientContext.get_current();
            // Get the webpart from the current page
            var page = context.get_web().getFileByServerRelativeUrl(gd_sprest_1.ContextInfo.serverRequestPath);
            var wpMgr = page.getLimitedWebPartManager(SP.WebParts.PersonalizationScope.shared);
            var wpDef = wpMgr.get_webParts().getById(wpId);
            var wp = wpDef.get_webPart();
            context.load(wp, "Properties");
            // Execute the request
            context.executeQueryAsync(
            // Success
            function () {
                // Resolve the promise
                resolve({
                    Context: context,
                    Properties: wp.get_properties(),
                    WebPart: wp,
                    WebPartDefinition: wpDef
                });
            }, 
            // Error
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                // Reject the promise
                reject(args[1] ? args[1].get_message() : "");
            });
        });
    },
    // Method to get the webpart id for a specified element
    getWebPartId: function (el) {
        // Loop until we find the webpart id
        while (el) {
            // See if this element contains the webpart id
            var wpId = el.getAttribute("webpartid");
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
    renderEditForm: function (wpInfo, formControls) {
        if (formControls === void 0) { formControls = []; }
        var rows = [];
        // Parse the controls
        for (var i = 0; i < formControls.length; i++) {
            // Add the control
            rows.push({ columns: [{ control: formControls[i] }] });
        }
        // Render the form
        return gd_bs_1.Components.Form({
            el: wpInfo.el.querySelector(".wp-cfg-form"),
            rows: rows,
            value: wpInfo.cfg
        });
    },
    // Method to save the webpart configuration
    saveConfiguration: function (wpId, cfgId, wpCfg) {
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Update the webpart content elements
            if (exports.Helper.updateWebPartContentElements(wpId, cfgId, wpCfg)) {
                // Wiki page detected, resolve the promise and do nothing
                resolve();
                return;
            }
            // Get the target webpart
            exports.Helper.getWebPart(wpId).then(function (wpInfo) {
                // Get the content
                var content = wpInfo && wpInfo.Properties.get_fieldValues()["Content"];
                if (content) {
                    // Create an element so we can update the configuration
                    var el = document.createElement("div");
                    el.innerHTML = content;
                    // Get the configuration element and update it
                    var elCfg = el.querySelector("#" + cfgId);
                    elCfg ? elCfg.innerText = JSON.stringify(wpCfg) : null;
                    // Update the webpart
                    wpInfo.Properties.set_item("Content", el.innerHTML);
                    wpInfo.WebPartDefinition.saveWebPartChanges();
                    wpInfo.Context.load(wpInfo.WebPartDefinition);
                    // Execute the request
                    wpInfo.Context.executeQueryAsync(
                    // Success
                    function () {
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
                    function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var message = args[1].get_message();
                        // Log
                        console.error("[gd-sprest] Error saving the configuration. " + message);
                        // Reject the promise
                        reject(message);
                    });
                }
            });
        });
    },
    // Method to update the configuration element
    updateConfigurationInElement: function (cfgId, elTarget, wpCfg) {
        // Create an element so we can update the configuration
        var el = document.createElement("div");
        el.innerHTML = elTarget.value;
        // Get the configuration element and update it
        var cfg = el.querySelector("#" + cfgId);
        cfg ? cfg.innerText = JSON.stringify(wpCfg) : null;
        // Update the value
        elTarget.value = el.innerHTML;
    },
    // Method to update the webpart content elements
    updateWebPartContentElements: function (wpId, cfgId, wpCfg) {
        // Get the webpart element
        var elWebPart = document.querySelector("div[webpartid='" + wpId + "']");
        if (elWebPart) {
            var wpContent = null;
            var wpPageContent = null;
            // Get the associated webpart id
            var wpId2 = elWebPart.getAttribute("webpartid2");
            // Update the configuration
            var elCfg = elWebPart.querySelector("#" + cfgId);
            elCfg ? elCfg.innerText = JSON.stringify(wpCfg) : null;
            // Parse the hidden elements on the page
            var hiddenElements = document.querySelectorAll("input[type='hidden']");
            for (var i = 0; i < hiddenElements.length; i++) {
                var elHidden = hiddenElements[i];
                // See if we have found the webpart content and page content hidden elements
                if (wpContent && wpPageContent) {
                    continue;
                }
                // See if this is a hidden webpart content element
                if (elHidden.name && elHidden.name.indexOf("scriptcontent") == elHidden.name.length - 13) {
                    // See if it's for this webpart
                    if (elHidden.name.indexOf(wpId2) == 0) {
                        // Set the webpart content element
                        wpContent = elHidden;
                        // Update the configuration in the webpart content element
                        exports.Helper.updateConfigurationInElement(cfgId, wpContent, wpCfg);
                    }
                    // Continue the loop
                    continue;
                }
                // Create an element and set the inner html to the value
                var el = document.createElement("div");
                el.innerHTML = elHidden.value;
                // See if this is a hidden field element
                if (el.querySelector("#" + cfgId)) {
                    // Set the webpart page content
                    wpPageContent = elHidden;
                    // Update the configuration in the webpart content element
                    exports.Helper.updateConfigurationInElement(cfgId, wpPageContent, wpCfg);
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
};
