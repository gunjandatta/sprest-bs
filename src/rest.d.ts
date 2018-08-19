import { IREST } from "gd-sprest";
import * as Components from "./components/types";
import * as WebParts from "./webparts/types";

// $REST Global Variable
export interface IRESTBS extends IREST {
    BS: {
        $: any,
        Components,
        WebParts
    }
}

// $REST Global Variable
export var $REST: IRESTBS;