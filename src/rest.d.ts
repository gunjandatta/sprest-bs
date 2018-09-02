import { IREST } from "gd-sprest";
import * as Components from "./components/types";
import * as WebParts from "./webparts/types";
export * from "gd-sprest";

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