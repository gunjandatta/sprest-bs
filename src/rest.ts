import { $REST as CoreLib } from "gd-sprest";
import * as $ from "jquery";
import * as Components from "./components";
import * as WebParts from "./webparts";
import { IRESTBS } from "./rest.d";

// Set the bootstrap library
export const $REST: IRESTBS = CoreLib;
$REST.BS = {
    $,
    Components,
    WebParts
};

// Set the global variable
export {
    $,
    Components,
    WebParts
};