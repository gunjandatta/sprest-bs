import { IREST } from "gd-sprest";
import * as $ from "jquery";
import * as Components from "./components/types";
import * as WebParts from "./webparts/types";

export * from "gd-sprest";
export {
    $,
    Components,
    WebParts
}

/**
 * $REST Bootstrap Library
 */
export const $REST:IRESTBS;
export interface IRESTBS extends IREST {
    $,
    Components
    WebParts
}