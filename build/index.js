"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// The bootstrap library
__export(require("gd-bs"));
// The SharePoint library
__export(require("gd-sprest"));
// SharePoint bootstrap components/webparts
var gd_bs_1 = require("gd-bs");
exports.Icons = gd_bs_1.Icons;
exports.IconTypes = gd_bs_1.IconTypes;
var components_1 = require("./components");
exports.Components = components_1.default;
var WebParts = require("./webparts");
exports.WebParts = WebParts;
// Styling
require("./styles");
// Ensure the global variable exists
var $REST = window && window["$REST"];
if ($REST) {
    // Update the $REST global variable
    $REST.Components = components_1.default;
    $REST.jQuery = gd_bs_1.jQuery;
    $REST.IconTypes = gd_bs_1.IconTypes;
    $REST.Icons = gd_bs_1.Icons;
    $REST.WebParts = WebParts;
}
// Ensure the SP library exists
if (window["SP"] && window["SP"].SOD) {
    // Notify waiting scripts
    window["SP"] ? window["SP"].SOD.notifyScriptLoadedAndExecuteWaitingJobs("gd-sprest-bs") : null;
    window["SP"] ? window["SP"].SOD.notifyScriptLoadedAndExecuteWaitingJobs("gd-sprest-bs.js") : null;
}
