import { Components } from "./core";
import { DateTime } from "./datetime";
import { Field } from "./field";
import { ListForm } from "./listForm";
import { ListFormDialog } from "./listFormDialog";
import { PeoplePicker } from "./peoplePicker";

// Extend the core components
Components["DateTime"] = DateTime;
Components["Field"] = Field;
Components["ListForm"] = ListForm;
Components["ListFormDialog"] = ListFormDialog;
Components["PeoplePicker"] = PeoplePicker;

// Export the components
export default Components;