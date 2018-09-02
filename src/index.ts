import "bootstrap";
import "./styles.scss";
import * as $REST from "./rest";
export * from "./rest";

// See if the window exists
if (window) {
    // Set the global variable
    window["$REST"] = $REST;

    // Notify waiting scripts
    window["SP"] ? window["SP"].SOD.notifyScriptLoadedAndExecuteWaitingJobs("gd-sprest-bs.js") : null;
}