// The bootstrap library
export * from "gd-bs";

// The SharePoint library
export * from "gd-sprest";

// SharePoint bootstrap components/webparts
import { Components } from "./components";
import * as WebParts from "./webparts";
export { Components, WebParts }

// Styling
import "./styles";

// Ensure the global variable exists
const $REST = window && window["$REST"];
if ($REST) {
    // Update the $REST global variable
    $REST.Components = Components;
    $REST.WebParts = WebParts;
}

// Ensure the SP library exists
if (window["SP"] && window["SP"].SOD) {
    // This can fail if MDS is enabled
    try {
        // Notify waiting scripts
        window["SP"] ? window["SP"].SOD.notifyScriptLoadedAndExecuteWaitingJobs("gd-sprest-bs") : null;
        window["SP"] ? window["SP"].SOD.notifyScriptLoadedAndExecuteWaitingJobs("gd-sprest-bs.js") : null;
    }
    catch{ }
}