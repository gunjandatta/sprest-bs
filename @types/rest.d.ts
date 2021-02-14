import { IconTypes, Icons } from "./gd-bs";
import { IREST } from "./gd-sprest";
import * as Components from "./components";
import * as WebParts from "./webparts";

/**
 * $REST Bootstrap Library
 */
export interface IRESTBS extends IREST {
    Components,
    Icons, IconTypes,
    WebParts
}