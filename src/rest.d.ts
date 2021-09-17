import { IconTypes, Icons } from "gd-bs";
import { IREST } from "gd-sprest";
import { Components } from "./components/types";
import * as WebParts from "./webparts/types";

/**
 * $REST Bootstrap Library
 */
export interface IRESTBS extends IREST {
    Components,
    Icons, IconTypes,
    WebParts
}