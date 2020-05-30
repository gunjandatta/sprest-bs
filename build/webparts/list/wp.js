"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gd_sprest_1 = require("gd-sprest");
var wp_1 = require("../base/wp");
var wpCfg_1 = require("./wpCfg");
/**
 * List WebPart
 */
exports.WPList = function (props) {
    var _wpInfo = null;
    // Method to load the items using a CAML query
    var loadCAML = function (caml) {
        if (caml === void 0) { caml = ""; }
        // Call the load caml query event
        caml = (props.onExecutingCAMLQuery ? props.onExecutingCAMLQuery(_wpInfo, caml) : null) || caml;
        // See if we are targeting a different web
        var webUrl = _wpInfo.cfg.WebUrl;
        if (webUrl) {
            // Get the context information for the destination web
            // Note - Since we are using a POST request, this would be required for cross-site collection requests
            gd_sprest_1.ContextInfo.getWeb(webUrl).execute(function (contextInfo) {
                // Get the web
                gd_sprest_1.Web(webUrl, { requestDigest: contextInfo.GetContextWebInformation.FormDigestValue })
                    // Get the list
                    .Lists(_wpInfo.cfg.ListName)
                    // Query the items
                    .getItemsByQuery(caml)
                    // Execute the request
                    .execute(function (items) {
                    // Render the items
                    props.onRenderItems ? props.onRenderItems(_wpInfo, items.results) : null;
                });
            });
        }
        else {
            // Get the web
            gd_sprest_1.Web(webUrl)
                // Get the list
                .Lists(_wpInfo.cfg.ListName)
                // Query the items
                .getItemsByQuery(caml)
                // Execute the request
                .execute(function (items) {
                // Render the items
                props.onRenderItems ? props.onRenderItems(_wpInfo, items.results) : null;
            });
        }
    };
    // Method to load the items using an ODATA query
    var loadODATA = function (query) {
        if (query === void 0) { query = {}; }
        // Call the load caml query event
        query = (props.onExecutingODATAQuery ? props.onExecutingODATAQuery(_wpInfo, query) : null) || query;
        // Get the web
        gd_sprest_1.Web(_wpInfo.cfg.WebUrl)
            // Get the list
            .Lists(_wpInfo.cfg.ListName)
            // Get the items
            .Items()
            // Query the list
            .query(query)
            // Execute the request
            .execute(function (items) {
            // Render the items
            props.onRenderItems ? props.onRenderItems(_wpInfo, items.results) : null;
        });
    };
    // Create the webpart and return it
    return wp_1.WebPart({
        cfgElementId: props.cfgElementId,
        className: props.className,
        editForm: wpCfg_1.WPListEditForm(props.editForm),
        elementId: props.elementId,
        wpClassName: props.wpClassName,
        onRenderDisplay: function (wpInfo) {
            // Save the information
            _wpInfo = wpInfo;
            // Call the render event
            props.onRenderDisplay ? props.onRenderDisplay(_wpInfo) : null;
            // See if there is a render items event and a list is defined
            if (props.onRenderItems && _wpInfo.cfg.ListName) {
                // See if we are using the CAML query
                if (props.camlQuery || props.onExecutingCAMLQuery) {
                    loadCAML(props.camlQuery);
                }
                // Else, load using the ODATA query
                else {
                    loadODATA(props.odataQuery);
                }
            }
        },
    });
};
