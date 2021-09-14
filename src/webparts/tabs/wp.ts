import { Components } from "gd-bs";
import { WebPart } from "../base";
import { IWebPartInfo } from "../base/types";
import { IWPTabs, IWPTabsProps } from "./types";

/**
 * Web Part Tab Types
 */
export enum WPTabTypes {
    Pillars = 1,
    Tabs = 2
}

/**
 * Web Part Tabs
 */
export const WPTabs = (props: IWPTabsProps): IWPTabs => {
    let _elWebPart: HTMLDivElement = null;
    let _isContentZone: boolean = false;
    let _nav: Components.INav = null;

    // Method to get the webparts
    let getWebParts = (wpInfo: IWebPartInfo) => {
        let wps = [];

        // Get the webpart element and zone
        let elWebPart = document.querySelector("div[webpartid='" + wpInfo.cfg.WebPartId + "']") as HTMLDivElement;
        let elWebPartZone: HTMLElement = elWebPart ? getWebPartZone(elWebPart) : null;
        if (elWebPart && elWebPartZone) {
            // Add a class name to the webpart zone
            elWebPartZone.className += " wp-tabs"

            // Remove the empty elements
            removeEmptyElements(elWebPartZone);

            // Parse the webparts in this zone
            let webparts = elWebPartZone.querySelectorAll(".ms-webpartzone-cell[id^='MSOZoneCell_WebPart']");
            for (let i = 0; i < webparts.length; i++) {
                let webpart = webparts[i] as HTMLDivElement;

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
                let wpTitle: string = ((webpart.querySelector(".ms-webpart-titleText") || {}) as HTMLDivElement).innerText || "";
                let isHidden = webpart.firstElementChild && webpart.firstElementChild.classList.contains("ms-hide");
                isHidden = isHidden || /^\(Hidden\)/.test(wpTitle);
                if (isHidden) { continue; }

                // See if this is within a content zone
                if (_isContentZone) {
                    // Get the parent webpart box
                    while (webpart.parentNode) {
                        // See if this is the webpart box element
                        if (webpart.classList.contains("ms-rte-wpbox")) {
                            // Find the div containing the webpart id
                            let wpElement = webpart.querySelector("div[webpartid*='-']");
                            if (wpElement) {
                                // Set the webpart id attribute
                                webpart.setAttribute("wpid", wpElement.getAttribute("webpartid"));
                            }

                            // Add this webpart and break from the loop
                            wps.push(webpart);
                            break;
                        }

                        // Check the parent element
                        webpart = webpart.parentNode as HTMLDivElement;
                    }
                } else {
                    // Add the webpart
                    wps.push(webpart);
                }
            }
        }

        // Return the webparts
        return wps;
    }

    // Method to get the webpart zone
    let getWebPartZone = (el: HTMLDivElement) => {
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
            return getWebPartZone(el.parentNode as HTMLDivElement);
        }

        // Return nothing
        return null;
    }

    // Method to remove empty paragraph or new lines for webparts w/in content zones
    let removeEmptyElements = (elWebPartZone: HTMLElement) => {
        let elChildren: Array<HTMLElement> = [];

        // See if this webpart is within a layout zone or rich html field
        if (elWebPartZone.className.indexOf("ms-rte-layoutszone-inner") >= 0 ||
            elWebPartZone.className.indexOf("ms-rtestate-field") >= 0) {
            // Set the children elements
            elChildren = elWebPartZone.children as any;
        }

        // Parse the children elements
        for (let i = 0; i < elChildren.length; i++) {
            let elChild = elWebPartZone.children[i];

            // See if the last element is a new line
            let elBreakLine = elChild.children[elChild.children.length - 1];
            if (elBreakLine && elBreakLine.nodeName == "BR") {
                // Remove the element
                elChild.removeChild(elBreakLine);
            }

            // See if this is an empty paragraph tag
            if (elChild.nodeName == "P") {
                let removeElement = false;
                let content = elChild.innerHTML.trim();

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
    }

    // Method to update the visibility of the webparts
    let updateWebParts = (tab?: Components.INavLinkProps, ev?: Event) => {
        let selectedTabId = 0;

        // See if the tab exists
        if (tab) {
            // Parse the webparts
            for (let i = 0; i < _webparts.length; i++) {
                // Get the webpart
                let wpTitle = _webparts[i].querySelector(".ms-webpart-titleText") as HTMLDivElement;
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
                if (_webparts[selectedTabId].querySelector(".ms-webpart-titleText")) { break; }
            }
        }

        // Parse the webparts
        for (let i = 0; i < _webparts.length; i++) {
            let wp = _webparts[i] as HTMLElement;

            // Determine the query selector
            let selector = wp.id ? "#" + wp.id : ".ms-rte-wpbox[wpid='" + wp.getAttribute("wpid") + "']";

            // Get the webpart
            let webpart = document.querySelector(selector) as HTMLDivElement;
            if (webpart) {
                // See if we are displaying this webpart
                if (i == selectedTabId) {
                    // Display the webpart
                    webpart.className = webpart.className.replace(" is-hidden", "");

                    // See if this tab contains a calendar webpart
                    if (webpart.querySelector(".ms-acal-rootdiv")) {
                        let ev = null;

                        // Create the resize event
                        try { ev = new Event("resize"); }
                        // This will fail for IE
                        catch (e) {
                            // Create the event
                            ev = document.createEvent("Event");
                            ev.initEvent("resize", true, false);
                        }
                        finally {
                            // Call the window resize event to fix the events
                            ev ? window.dispatchEvent(ev) : null;
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
    }

    /**
     * Main
     */

    let _webparts = [];

    // Return the webpart
    let wp = WebPart({
        className: props.className,
        cfgElementId: props.cfgElementId,
        editForm: props.editForm,
        elementId: props.elementId,
        helpProps: props.helpProps,
        onPostRender: props.onPostRender,
        onRenderEdit: props.onRenderEdit,
        wpClassName: ["wp-tabs-main", props.wpClassName || ""].join(' ').trim(),
        onRenderDisplay: (wpInfo: IWebPartInfo) => {
            // Set the webparts
            _webparts = getWebParts(wpInfo);

            // Parse the webparts
            let items: Array<Components.INavLinkProps> = [];
            for (let i = 0; i < _webparts.length; i++) {
                // Ensure a title exists
                let wpTitle = _webparts[i].querySelector(".ms-webpart-titleText") as HTMLDivElement;
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
            _nav = Components.Nav({
                className: props.className,
                el: wpInfo.el,
                isPills: props.type == WPTabTypes.Pillars,
                isTabs: true,
                items
            });

            // Update the webparts
            updateWebParts();

            // See if a custom event exists
            props.onRenderDisplay ? props.onRenderDisplay(wpInfo) : null;
        }
    }) as IWPTabs;

    // Add the custom methods
    wp.getNav = () => { return _nav; }
    wp.getTabs = () => { return _webparts as any; };

    // Return the webpart
    return wp;
}