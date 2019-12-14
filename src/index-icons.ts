export * from "gd-bs";
export * from "gd-sprest";

import { Components, Icons, WebParts } from "./rest";
export { Components, Icons, WebParts }

import "./styles.scss";
declare var GD;

// See if the window exists
if (window) {
    // Ensure the global variable exists
    if (window["$REST"]) {
        // Update the $REST global variable
        window["$REST"].Components = Components;
        window["$REST"].Icons = Icons;
        window["$REST"].jQuery = GD.jQuery;
        window["$REST"].WebParts = WebParts;
    }

    // Notify waiting scripts
    window["SP"] ? window["SP"].SOD.notifyScriptLoadedAndExecuteWaitingJobs("gd-sprest-bs") : null;
    window["SP"] ? window["SP"].SOD.notifyScriptLoadedAndExecuteWaitingJobs("gd-sprest-bs.js") : null;
}