/* Core Libraries */
export * from "gd-bs";
export * from "gd-sprest";

/* BootStrap Components */
import * as Components from "./components/types";
import * as WebParts from "./webparts/types";
export {
    Components,
    WebParts
}

/* REST Component */
import { IRESTBS } from "./rest";
export const $REST: IRESTBS;