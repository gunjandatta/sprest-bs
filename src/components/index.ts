import { Components } from "gd-bs";
import { Field } from "./field";
import { ListForm } from "./listForm";
import { ListFormDialog } from "./listFormDialog";
import { PeoplePicker } from "./peoplePicker";

// Extend the components
Components["Field"] = Field;
Components["ListForm"] = ListForm;
Components["ListFormDialog"] = ListFormDialog;
Components["PeoplePicker"] = PeoplePicker;

// Export the components
export { Components }