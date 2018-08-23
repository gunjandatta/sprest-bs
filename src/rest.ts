import { $REST as CoreLib } from "gd-sprest";
import * as $ from "jquery";
import * as Components from "./components";
import * as WebParts from "./webparts";
import { IRESTBS } from "./rest.d";

export * from "gd-sprest";
export {
    $,
    Components,
    WebParts
};

// Update the global $REST variable
export const $REST: IRESTBS = CoreLib as any;
$REST.$ = $;
$REST.Components = Components;
$REST.WebParts = WebParts;