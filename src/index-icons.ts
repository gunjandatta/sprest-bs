// Export the core library
export * from ".";

// Bootstrap icons
import { IconTypes, Icons } from "./icons";
export { Icons, IconTypes }

// Ensure the global variable exists
const $REST = window && window["$REST"];
if ($REST) {
    // Update the $REST global variable
    $REST.IconTypes = IconTypes;
    $REST.Icons = Icons;
}