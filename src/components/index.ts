import { Components } from "gd-bs";
import { FieldInfo } from "./fieldInfo";
import { ListForm } from "./listForm";
import { ListFormDialog } from "./listFormDialog";

// Extend the components
Components["FieldInfo"] = FieldInfo;
Components["ListForm"] = ListForm;
Components["ListFormDialog"] = ListFormDialog;

// Export the components
export { Components }