import { Components, jQuery, WebParts } from "./rest";
export * from "gd-bs";
export * from "gd-sprest";
export * from "./rest";
//import "./styles.scss";

// See if the window exists
if (window) {
    // Update the $REST global variable
    if (window["$REST"]) {
        window["$REST"].Components = Components;
        window["$REST"].jQuery = jQuery;
        window["$REST"].WebParts = WebParts;
    }

    // Notify waiting scripts
    window["SP"] ? window["SP"].SOD.notifyScriptLoadedAndExecuteWaitingJobs("gd-sprest-bs.js") : null;
}