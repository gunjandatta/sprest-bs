/* Core Libraries */
export * from "gd-bs";
export * from "gd-sprest";

/* BootStrap Components */
import { Components } from "./components";
import * as WebParts from "./webparts";
export {
    Components,
    WebParts
}

/* REST Component */
import { IRESTBS } from "./rest";
export const $REST: IRESTBS;