import "bootstrap";
import "./styles.scss";
import * as Lib from "./rest";
import { IRESTBS } from "./rest.d";

export * from "./rest";
export const $REST: IRESTBS = Lib as any;

// See if the window exists
if (window) {
    // Set the global variable
    window["$REST"] = $REST;

    // Notify waiting scripts
    window["SP"] ? window["SP"].SOD.notifyScriptLoadedAndExecuteWaitingJobs("gd-sprest-bs.js") : null;
}