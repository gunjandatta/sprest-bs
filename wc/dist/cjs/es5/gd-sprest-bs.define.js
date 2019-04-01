"use strict";
// GdSprestBs: Custom Elements Define Library, ES Module/es5 Target
Object.defineProperty(exports, "__esModule", { value: true });
var gd_sprest_bs_core_js_1 = require("./gd-sprest-bs.core.js");
var gd_sprest_bs_components_js_1 = require("./gd-sprest-bs.components.js");
function defineCustomElements(win, opts) {
    return gd_sprest_bs_core_js_1.defineCustomElement(win, gd_sprest_bs_components_js_1.COMPONENTS, opts);
}
exports.defineCustomElements = defineCustomElements;
