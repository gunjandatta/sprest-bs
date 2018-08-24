import { $REST as CoreLib } from "gd-sprest";
import * as jQuery from "jquery";
import * as Components from "./components";
import * as WebParts from "./webparts";
import { IRESTBS } from "./rest.d";

export * from "gd-sprest";
export {
    jQuery,
    Components,
    WebParts
};

// Update the global $REST variable
export const $REST: IRESTBS = CoreLib as any;
$REST.jQuery = jQuery;
$REST.Components = Components;
$REST.WebParts = WebParts;