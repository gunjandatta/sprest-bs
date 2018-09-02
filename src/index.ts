import "bootstrap";
import "./styles.scss";
import { Components, jQuery, WebParts } from "./rest";
export * from "gd-sprest";
export * from "./rest";

// See if the window exists
if (window) {
    // Update the $REST global variable
    if (window["$REST"]) {
        window["$REST"].Component = Components;
        window["$REST"].jQuery = jQuery;
        window["$REST"].WebParts = WebParts;
    }

    // Notify waiting scripts
    window["SP"] ? window["SP"].SOD.notifyScriptLoadedAndExecuteWaitingJobs("gd-sprest-bs.js") : null;
}