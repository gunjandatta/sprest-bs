// The bootstrap library
export * from "gd-bs";

// The SharePoint library
export * from "gd-sprest";

// SharePoint bootstrap components/webparts
import { Icons, IconTypes } from "gd-bs";
import Components from "./components";
import * as WebParts from "./webparts";
export { Components, Icons, IconTypes, WebParts }

// Styling
import "./styles";

// Ensure the global variable exists
const $REST = window && window["$REST"];
if ($REST) {
    // Update the $REST global variable
    $REST.Components = Components;
    $REST.IconTypes = IconTypes;
    $REST.Icons = Icons;
    $REST.WebParts = WebParts;
}

// Ensure the SP library exists
if (window["SP"] && window["SP"].SOD) {
    // Notify waiting scripts
    window["SP"] ? window["SP"].SOD.notifyScriptLoadedAndExecuteWaitingJobs("gd-sprest-bs") : null;
    window["SP"] ? window["SP"].SOD.notifyScriptLoadedAndExecuteWaitingJobs("gd-sprest-bs.js") : null;
}