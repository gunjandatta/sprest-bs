// Export the core library
export * from ".";

// Bootstrap icons
import { IconTypes, Icons } from "./icons";
export { Icons, IconTypes }

// Custom icons
import { CustomIconTypes, CustomIcons } from "./icons/customIcons";
export { CustomIconTypes, CustomIcons }

// Ensure the global variable exists
const $REST = window && window["$REST"];
if ($REST) {
    // Update the $REST global variable
    $REST.CustomIconTypes = CustomIconTypes;
    $REST.CustomIcons = CustomIcons;
    $REST.IconTypes = IconTypes;
    $REST.Icons = Icons;
}