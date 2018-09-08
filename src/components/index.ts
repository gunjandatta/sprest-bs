import { Components } from "gd-bs";
import { Field } from "./field";
import { ListForm } from "./listForm";
import { ListFormDialog } from "./listFormDialog";

// Extend the components
Components["Field"] = Field;
Components["ListForm"] = ListForm;
Components["ListFormDialog"] = ListFormDialog;

// Export the components
export { Components }