import { IREST } from "gd-sprest";
import * as Components from "./components";
import * as WebParts from "./webparts";

/**
 * $REST Bootstrap Library
 */
export const $REST: IRESTBS;

/**
 * $REST Bootstrap Library
 */
export interface IRESTBS extends IREST {
    jQuery: any,
    Components
    WebParts
}