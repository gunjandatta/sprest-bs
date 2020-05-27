// Core Libraries
export * from "gd-bs";
export * from "gd-sprest";

// SharePoint Components/WebParts
import { jQuery } from "gd-bs";
import Components from "./components";
import * as WebParts from "./webparts";
export { Components, WebParts }

// Styling
import "./styles.scss";

// Ensure the global variable exists
const $REST = window && window["$REST"];
if ($REST) {
    // Update the $REST global variable
    $REST.Components = Components;
    $REST.jQuery = jQuery;
    $REST.WebParts = WebParts;
}