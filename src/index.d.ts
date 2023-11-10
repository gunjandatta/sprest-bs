/* Core Libraries */
export * from "gd-bs";
export * from "gd-sprest";

/* BootStrap Components */
import * as Components from "./components/types";
import { ThemeManager } from "./themeManager/types";
import * as WebParts from "./webparts/types";
export {
    Components,
    ThemeManager,
    WebParts
}

/* REST Component */
import { IRESTBS } from "./rest";
export const $REST: IRESTBS;