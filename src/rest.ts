import { $REST as CoreLib, IREST } from "gd-sprest";
import * as $ from "jquery";
import * as Components from "./components";
import * as WebParts from "./webparts";

// Extend the REST library
export interface IRESTBS extends IREST {
    BS: {
        $,
        Components,
        WebParts
    }
}

// Set the bootstrap library
export const $REST: IRESTBS = CoreLib as any;
$REST.BS = {
    $,
    Components,
    WebParts
} as any;

// Set the global variable
export {
    $,
    Components,
    WebParts
};