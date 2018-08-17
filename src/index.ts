import "bootstrap";
import "./styles.scss";
import * as GD from "./gd";
export * from "./gd";

// See if the window exists
if (window) {
    // Set the global variable
    window["GD"] = GD;

    // Notify waiting scripts
    window["SP"] ? window["SP"].SOD.notifyScriptLoadedAndExecuteWaitingJobs("gd-sprest-bs") : null;
}