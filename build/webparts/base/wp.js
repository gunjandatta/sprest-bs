"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gd_sprest_1 = require("gd-sprest");
var wpCfg_1 = require("./wpCfg");
/**
 * Web Part
 */
exports.WebPart = function (props) {
    var _cfg = {};
    var _wp = null;
    /**
     * Method to add the help link to a script part editor.
     * @wpId - The webpart id.
     */
    var addHelpLink = function () {
        // Ensure the help properties exist
        if (props.helpProps) {
            // Get the webpart's "Snippet"
            var link = document.querySelector("div[webpartid='" + _wp.wpId + "'] a[title='Edit Snippet']");
            if (link) {
                // Create the help link
                var helpLink = document.createElement("a");
                helpLink.href = props.helpProps.url || "#";
                helpLink.style.paddingLeft = "10px";
                helpLink.setAttribute("role", "button");
                helpLink.title = props.helpProps.title || "Help";
                helpLink.innerHTML = "<span class='ms-metadata'>" + helpLink.title + "</span>";
                helpLink.target = "_blank";
                // Append the link
                link.parentElement.appendChild(helpLink);
            }
        }
    };
    /**
     * Method to get the webpart id for a specified element
     * @param el - The target element.
     */
    var getWebPartId = function (el) {
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
    };
    /**
     * Method to get the webpart information
     */
    var getWebPartInfo = function () {
        var targetInfo = {
            cfg: null,
            el: null,
            wpId: null
        };
        // Ensure the element id exists
        if (props.elementId) {
            // Get the webpart elements
            var elements = document.querySelectorAll("#" + props.elementId);
            for (var i = 0; i < elements.length; i++) {
                var elWebPart = elements[i];
                // See if we have already configured this element
                if (elWebPart.getAttribute("data-isConfigured")) {
                    continue;
                }
                // Get the webpart id
                var wpId = getWebPartId(elWebPart);
                if (wpId) {
                    // See if the configuration element exists
                    var elCfg = elWebPart.parentElement.querySelector("#" + props.cfgElementId);
                    if (elCfg) {
                        try {
                            // Parse the configuration
                            var data = elCfg.innerText.trim();
                            var cfg = data.length > 0 ? JSON.parse(data) : null;
                            // See if the webaprt id exists
                            if (cfg && cfg.WebPartId) {
                                // See if it's for this webpart
                                if (cfg.WebPartId == wpId) {
                                    // Set the target information
                                    targetInfo = {
                                        cfg: cfg,
                                        el: elWebPart,
                                        wpId: wpId
                                    };
                                    break;
                                }
                            }
                            else {
                                // Set the target information
                                targetInfo = {
                                    cfg: {
                                        WebPartId: wpId
                                    },
                                    el: elWebPart,
                                    wpId: wpId
                                };
                                break;
                            }
                        }
                        catch (ex) {
                            // Set the target information
                            targetInfo = {
                                cfg: {
                                    WebPartId: wpId
                                },
                                el: elWebPart,
                                wpId: wpId
                            };
                            // Log
                            console.log("[bs-webpart] Error parsing the configuration for the webpart element '" + props.cfgElementId + "'.");
                        }
                        // Break from the loop
                        break;
                    }
                    else {
                        // Set the target information
                        targetInfo = {
                            cfg: {
                                WebPartId: wpId
                            },
                            el: elWebPart,
                            wpId: wpId
                        };
                        break;
                    }
                }
            }
            // Ensure elements were found
            if (elements.length == 0) {
                // Log
                console.log("[bs-webpart] Error - Unable to find the webpart element with id '" + props.elementId + "'.");
            }
        }
        else {
            // Log
            console.log("[bs-webpart] The target element id is not defined.");
        }
        // Ensure the target element exists
        if (targetInfo.el) {
            // Set the configuration flag
            targetInfo.el.setAttribute("data-isConfigured", "true");
        }
        // Return the target information
        return targetInfo;
    };
    /**
     * Method to render the webpart
     */
    var render = function () {
        // Get the webpart information
        _wp = getWebPartInfo();
        if (_wp == null || _wp.el == null) {
            // Log
            console.log("[bs-webpart] The target webpart element '" + props.elementId + "' was not found.");
            return;
        }
        // Set the configuration
        _cfg = _wp.cfg;
        // Get the webpart element
        var elWebPart = _wp.wpId ? document.querySelector("div[webpartid='" + _wp.wpId + "']") : null;
        if (elWebPart) {
            // Add the default bootstrap class name
            elWebPart.className += " bs " + (props.wpClassName || "");
        }
        // See if a class name exists
        if (props.className && _wp.el.className.indexOf(props.className) < 0) {
            // Set the class name
            _wp.el.className += " " + props.className;
        }
        // See if the page is being edited
        var returnVal = null;
        if (gd_sprest_1.Helper.WebPart.isEditMode()) {
            // Add the help link
            addHelpLink();
            // Add the edit class name
            _wp.el.classList.add("is-edit");
            // Call the render event
            if (props.onRenderEdit) {
                // Execute the render edit event
                returnVal = props.onRenderEdit(_wp);
            }
            // See if we are displaying the default edit form
            else if (props.editForm) {
                // Display the edit form
                wpCfg_1.WPCfg(_cfg, _wp, props);
            }
        }
        else {
            // See if the configuration is defined, but has no value
            if (_wp.cfg || (props.cfgElementId || "").length == 0) {
                // Execute the render edit event
                returnVal = props.onRenderDisplay(_wp);
            }
            else {
                // Render a message
                _wp.el.innerHTML = '<h3>Please edit the page and configure the webpart.</h3>';
            }
        }
        // See if a promise was returned
        if (returnVal && returnVal.then) {
            // Wait for the request to complete
            returnVal.then(function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                // Execute the post render event
                props.onPostRender ? props.onPostRender(_wp) : null;
            });
        }
        else {
            // Execute the post render event
            props.onPostRender ? props.onPostRender(_wp) : null;
        }
    };
    // Add a load event
    window.addEventListener("load", function () {
        // Render the component
        render();
    });
    // Return the webpart
    return {
        cfg: _cfg,
        info: _wp
    };
};
