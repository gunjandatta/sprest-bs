"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gd_bs_1 = require("gd-bs");
var base_1 = require("../base");
/**
 * Web Part Tab Types
 */
var WPTabTypes;
(function (WPTabTypes) {
    WPTabTypes[WPTabTypes["Pillars"] = 1] = "Pillars";
    WPTabTypes[WPTabTypes["Tabs"] = 2] = "Tabs";
})(WPTabTypes = exports.WPTabTypes || (exports.WPTabTypes = {}));
/**
 * Web Part Tabs
 */
exports.WPTabs = function (props) {
    var _elWebPart = null;
    var _isContentZone = false;
    var _nav = null;
    // Method to get the webparts
    var getWebParts = function (wpInfo) {
        var wps = [];
        // Get the webpart element and zone
        var elWebPart = document.querySelector("div[webpartid='" + wpInfo.cfg.WebPartId + "']");
        var elWebPartZone = elWebPart ? getWebPartZone(elWebPart) : null;
        if (elWebPart && elWebPartZone) {
            // Add a class name to the webpart zone
            elWebPartZone.className += " wp-tabs";
            // Remove the empty elements
            removeEmptyElements(elWebPartZone);
            // Parse the webparts in this zone
            var webparts = elWebPartZone.querySelectorAll(".ms-webpartzone-cell[id^='MSOZoneCell_WebPart']");
            for (var i = 0; i < webparts.length; i++) {
                var webpart = webparts[i];
                // See if it's this webpart
                if (webpart.querySelector("div[webpartid='" + wpInfo.cfg.WebPartId + "']")) {
                    // Save a reference
                    _elWebPart = webpart;
                    // Set the class
                    _elWebPart.className += " wp-tab";
                    // Skip this webpart
                    continue;
                }
                // Skip hidden webparts
                var wpTitle = (webpart.querySelector(".ms-webpart-titleText") || {}).innerText || "";
                var isHidden = webpart.firstElementChild && webpart.firstElementChild.classList.contains("ms-hide");
                isHidden = isHidden || /^\(Hidden\)/.test(wpTitle);
                if (isHidden) {
                    continue;
                }
                // See if this is within a content zone
                if (_isContentZone) {
                    // Get the parent webpart box
                    while (webpart.parentNode) {
                        // See if this is the webpart box element
                        if (webpart.classList.contains("ms-rte-wpbox")) {
                            // Find the div containing the webpart id
                            var wpElement = webpart.querySelector("div[webpartid*='-']");
                            if (wpElement) {
                                // Set the webpart id attribute
                                webpart.setAttribute("wpid", wpElement.getAttribute("webpartid"));
                            }
                            // Add this webpart and break from the loop
                            wps.push(webpart);
                            break;
                        }
                        // Check the parent element
                        webpart = webpart.parentNode;
                    }
                }
                else {
                    // Add the webpart
                    wps.push(webpart);
                }
            }
        }
        // Return the webparts
        return wps;
    };
    // Method to get the webpart zone
    var getWebPartZone = function (el) {
        // Ensure the element exists
        if (el && el.classList) {
            // See if this is the webpart zone element
            if (el.classList.contains("ms-webpart-zone")) {
                // Return it
                return el;
            }
            // See if this is the inner page zone
            if (el.classList.contains("ms-rte-layoutszone-inner") || el.classList.contains("ms-rtestate-field")) {
                // Set the flag
                _isContentZone = true;
                // Return it
                return el;
            }
            // Check the parent element
            return getWebPartZone(el.parentNode);
        }
        // Return nothing
        return null;
    };
    // Method to remove empty paragraph or new lines for webparts w/in content zones
    var removeEmptyElements = function (elWebPartZone) {
        var elChildren = [];
        // See if this webpart is within a layout zone or rich html field
        if (elWebPartZone.className.indexOf("ms-rte-layoutszone-inner") >= 0 ||
            elWebPartZone.className.indexOf("ms-rtestate-field") >= 0) {
            // Set the children elements
            elChildren = elWebPartZone.children;
        }
        // Parse the children elements
        for (var i = 0; i < elChildren.length; i++) {
            var elChild = elWebPartZone.children[i];
            // See if the last element is a new line
            var elBreakLine = elChild.children[elChild.children.length - 1];
            if (elBreakLine && elBreakLine.nodeName == "BR") {
                // Remove the element
                elChild.removeChild(elBreakLine);
            }
            // See if this is an empty paragraph tag
            if (elChild.nodeName == "P") {
                var removeElement = false;
                var content = elChild.innerHTML.trim();
                // See if this is an empty element
                if (content.length == 0) {
                    // Set the flag
                    removeElement = true;
                }
                // Else, see if this is a line break
                else if (content.length == 1 && content.charCodeAt(0) == 8203) {
                    // Set the flag
                    removeElement = true;
                }
                // Remove the element
                removeElement ? elWebPartZone.removeChild(elChild) : null;
            }
        }
    };
    // Method to update the visibility of the webparts
    var updateWebParts = function (tab, ev) {
        var selectedTabId = 0;
        // See if the tab exists
        if (tab) {
            // Parse the webparts
            for (var i = 0; i < _webparts.length; i++) {
                // Get the webpart
                var wpTitle = _webparts[i].querySelector(".ms-webpart-titleText");
                if (wpTitle && wpTitle.innerText == tab.title) {
                    // Update the selected tab id
                    selectedTabId = i;
                    break;
                }
            }
        }
        // Else, default the selected tab to the first visible webpart
        else {
            // Parse the webparts
            for (selectedTabId = 0; selectedTabId < _webparts.length; selectedTabId++) {
                // Break if this webpart has a title
                if (_webparts[selectedTabId].querySelector(".ms-webpart-titleText")) {
                    break;
                }
            }
        }
        // Parse the webparts
        for (var i = 0; i < _webparts.length; i++) {
            var wp_1 = _webparts[i];
            // Determine the query selector
            var selector = wp_1.id ? "#" + wp_1.id : ".ms-rte-wpbox[wpid='" + wp_1.getAttribute("wpid") + "']";
            // Get the webpart
            var webpart = document.querySelector(selector);
            if (webpart) {
                // See if we are displaying this webpart
                if (i == selectedTabId) {
                    // Display the webpart
                    webpart.className = webpart.className.replace(" is-hidden", "");
                    // See if this tab contains a calendar webpart
                    if (webpart.querySelector(".ms-acal-rootdiv")) {
                        var ev_1 = null;
                        // Create the resize event
                        try {
                            ev_1 = new Event("resize");
                        }
                        // This will fail for IE
                        catch (e) {
                            // Create the event
                            ev_1 = document.createEvent("Event");
                            ev_1.initEvent("resize", true, false);
                        }
                        finally {
                            // Call the window resize event to fix the events
                            ev_1 ? window.dispatchEvent(ev_1) : null;
                        }
                    }
                    // Call the click if it exists
                    props.onClick ? props.onClick(webpart) : null;
                }
                // Ensure the webpart is hidden
                else if (webpart.classList.contains("is-hidden") == false) {
                    // Hide the webpart
                    webpart.classList.add("is-hidden");
                }
            }
        }
    };
    /**
     * Main
     */
    var _webparts = [];
    // Return the webpart
    var wp = base_1.WebPart({
        className: props.className,
        cfgElementId: props.cfgElementId,
        editForm: props.editForm,
        elementId: props.elementId,
        helpProps: props.helpProps,
        onPostRender: props.onPostRender,
        onRenderEdit: props.onRenderEdit,
        wpClassName: ["wp-tabs-main", props.wpClassName || ""].join(' ').trim(),
        onRenderDisplay: function (wpInfo) {
            // Set the webparts
            _webparts = getWebParts(wpInfo);
            // Parse the webparts
            var items = [];
            for (var i = 0; i < _webparts.length; i++) {
                // Ensure a title exists
                var wpTitle = _webparts[i].querySelector(".ms-webpart-titleText");
                if (wpTitle) {
                    // Add the tab
                    items.push({
                        isActive: i == 0,
                        title: wpTitle.innerText,
                        onClick: updateWebParts
                    });
                }
            }
            // Render the navigation
            _nav = gd_bs_1.Components.Nav({
                className: props.className,
                el: wpInfo.el,
                isPills: props.type == WPTabTypes.Pillars,
                isTabs: props.type != WPTabTypes.Pillars,
                items: items
            });
            // Update the webparts
            updateWebParts();
            // See if a custom event exists
            props.onRenderDisplay ? props.onRenderDisplay(wpInfo) : null;
        }
    });
    // Add the custom methods
    wp.getNav = function () { return _nav; };
    wp.getTabs = function () { return _webparts; };
    // Return the webpart
    return wp;
};
