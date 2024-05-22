/* Core Libraries */
export * from "gd-bs";
export * from "gd-sprest";

// Custom icons
import { CustomIconTypes, CustomIcons } from "./icons/customIcons";
export { CustomIconTypes, CustomIcons }

/* BootStrap Components */
import * as Components from "./components/types";
import * as PropertyPane from "./propertyPane/types";
import { ThemeManager } from "./themeManager/types";
import * as WebParts from "./webparts/types";
export {
    Components,
    PropertyPane,
    ThemeManager,
    WebParts
}

/* REST Component */
import { IRESTBS } from "./rest";
export const $REST: IRESTBS;