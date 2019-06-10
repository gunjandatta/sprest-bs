import { r as registerInstance, g as getElement } from './gd-sprest-bs-b92f91e9.js';
import { g as getProps } from './chunk-26c2e58d.js';
import { g as generateElement } from './chunk-9cc2a43a.js';
var WPSearch = /** @class */ (function () {
    function WPSearch(hostRef) {
        registerInstance(this, hostRef);
    }
    // Render the search webpart
    WPSearch.prototype.render = function () {
        // Ensure it hasn't been initialized
        // This seems to be an issue w/ IE & Edge
        if (this.el.hasAttribute("data-init")) {
            return;
        }
        // Get the properties
        var props = getProps(this.el, {
            camlQuery: this.camlQuery,
            cfgElementId: this.cfgElementId,
            className: this.className,
            elementId: this.elementId,
            wpClassName: this.wpClassName
        });
        // Remove the id attribute
        this.el.removeAttribute("id");
        // Generate the webpart elements
        generateElement(this.el, props.elementId);
        generateElement(this.el, props.cfgElementId, true);
        // Render the search webpart
        $REST.WebParts.WPSearch(props);
        // Set the init attribute
        // This seems to be an issue w/ IE & Edge
        this.el.setAttribute("data-init", "true");
    };
    Object.defineProperty(WPSearch.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return WPSearch;
}());
export { WPSearch as bs_webpart_search };
