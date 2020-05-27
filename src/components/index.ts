import { Components } from "gd-bs";
import { DateTime } from "./datetime";
import { Field } from "./field";
import { ListForm } from "./listForm";
import { ListFormDialog } from "./listFormDialog";
import { PeoplePicker } from "./peoplePicker";

// Ensure the Components reference exists
if (Components == null) {
    // Update it to the global variable
    (Components as any) = window["GD"] && window["GD"].Components;
}

// Extend the components
Components["DateTime"] = DateTime;
Components["Field"] = Field;
Components["ListForm"] = ListForm;
Components["ListFormDialog"] = ListFormDialog;
Components["PeoplePicker"] = PeoplePicker;

// Export the components
export default Components;