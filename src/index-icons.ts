// Export the core library
export * from ".";

// Fluent UI Icon
import { FluentIcon } from "./fluent-icon";
export { FluentIcon }

// SharePoint bootstrap components/webparts
import { IconTypes, Icons } from "./icons";
export { Icons, IconTypes }

// Ensure the global variable exists
const $REST = window && window["$REST"];
if ($REST) {
    // Update the $REST global variable
    $REST.IconTypes = IconTypes;
    $REST.Icons = Icons;
}