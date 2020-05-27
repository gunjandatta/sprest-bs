export * from "./core";

import { Icons, IconTypes } from "gd-bs";
export { Icons, IconTypes }

// Ensure the global variable exists
if (window && window["$REST"]) {
    // Update the $REST global variable
    window["$REST"].IconTypes = IconTypes;
    window["$REST"].Icons = Icons;
}

if (window["SP"] && window["SP"].SOD) {
    // Notify waiting scripts
    window["SP"] ? window["SP"].SOD.notifyScriptLoadedAndExecuteWaitingJobs("gd-sprest-bs") : null;
    window["SP"] ? window["SP"].SOD.notifyScriptLoadedAndExecuteWaitingJobs("gd-sprest-bs.js") : null;
}