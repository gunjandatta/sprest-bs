import * as $ from "jquery";
import "bootstrap";
import "./styles.scss";
import * as Components from "./components";
import * as WebParts from "./webparts";

// Set the global variable
export {
    $,
    Components,
    WebParts
};

// See if the window exists
if (window) {
    // Set the global variable
    window["GD"] = {
        $,
        Components,
        WebParts
    };

    // Notify waiting scripts
    window["SP"] ? window["SP"].SOD.notifyScriptLoadedAndExecuteWaitingJobs("gd-sprest-bs") : null;
}