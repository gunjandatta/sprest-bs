import { ContextInfo, Types, Web } from "gd-sprest";
import { WebPart } from "../base/wp";
import { IWPList, IWPListInfo, IWPListProps } from "./types";
import { WPListEditForm } from "./wpCfg";

/**
 * List WebPart
 */
export const WPList = (props: IWPListProps): IWPList => {
    let _wpInfo: IWPListInfo = null;

    // Method to load the items using a CAML query
    let loadCAML = (caml: string = "") => {
        // Call the load caml query event
        caml = (props.onExecutingCAMLQuery ? props.onExecutingCAMLQuery(_wpInfo, caml) : null) || caml;

        // See if we are targeting a different web
        let webUrl = _wpInfo.cfg.WebUrl;
        if (webUrl) {
            // Get the context information for the destination web
            // Note - Since we are using a POST request, this would be required for cross-site collection requests
            ContextInfo.getWeb(webUrl).execute((contextInfo) => {
                // Get the web
                Web(webUrl, { requestDigest: contextInfo.GetContextWebInformation.FormDigestValue })
                    // Get the list
                    .Lists(_wpInfo.cfg.ListName)
                    // Query the items
                    .getItemsByQuery(caml)
                    // Execute the request
                    .execute(items => {
                        // Render the items
                        props.onRenderItems ? props.onRenderItems(_wpInfo, items.results) : null;
                    });
            });
        } else {
            // Get the web
            Web(webUrl)
                // Get the list
                .Lists(_wpInfo.cfg.ListName)
                // Query the items
                .getItemsByQuery(caml)
                // Execute the request
                .execute(items => {
                    // Render the items
                    props.onRenderItems ? props.onRenderItems(_wpInfo, items.results) : null;
                });
        }
    }

    // Method to load the items using an ODATA query
    let loadODATA = (query: Types.IODataQuery = {}) => {
        // Call the load caml query event
        query = (props.onExecutingODATAQuery ? props.onExecutingODATAQuery(_wpInfo, query) : null) || query;

        // Get the web
        Web(_wpInfo.cfg.WebUrl)
            // Get the list
            .Lists(_wpInfo.cfg.ListName)
            // Get the items
            .Items()
            // Query the list
            .query(query)
            // Execute the request
            .execute((items) => {
                // Render the items
                props.onRenderItems ? props.onRenderItems(_wpInfo, items.results) : null;
            });
    }

    // Create the webpart and return it
    return WebPart({
        cfgElementId: props.cfgElementId,
        className: props.className,
        editForm: WPListEditForm(props.editForm),
        elementId: props.elementId,
        wpClassName: props.wpClassName,
        onRenderDisplay: (wpInfo: IWPListInfo) => {
            // Save the information
            _wpInfo = wpInfo;

            // Call the render event
            props.onRenderDisplay ? props.onRenderDisplay(_wpInfo) : null;

            // See if there is a render items event and a list is defined
            if (props.onRenderItems && _wpInfo.cfg.ListName) {
                // See if we are using the CAML query
                if (props.camlQuery || props.onExecutingCAMLQuery) { loadCAML(props.camlQuery); }
                // Else, load using the ODATA query
                else { loadODATA(props.odataQuery); }
            }
        },
    });
}