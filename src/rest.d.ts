import { IconTypes, Icons } from "gd-bs";
import { IREST } from "gd-sprest";
import { Components } from "./components/types";
import { CustomIconTypes, CustomIcons } from "./icons/customIcons";
import * as WebParts from "./webparts/types";

/**
 * $REST Bootstrap Library
 */
export interface IRESTBS extends IREST {
    Components,
    CustomIconTypes, CustomIcons,
    Icons, IconTypes,
    WebParts
}