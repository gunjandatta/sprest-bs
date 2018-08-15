import * as $ from "jquery";
import "bootstrap";
import "./styles.scss";
import * as Components from "./components";
import * as WebParts from "./webparts";

// Set the global variable
let GD = {
    $,
    Components,
    WebParts
};

// See if the window exists
if (window) {
    // Set the global variable
    window["GD"] = GD;

    // Notify waiting scripts
    window["SP"] ? window["SP"].SOD.notifyScriptLoadedAndExecuteWaitingJobs("gd-sprest-bs") : null;
}

// Set the default export
export default GD;