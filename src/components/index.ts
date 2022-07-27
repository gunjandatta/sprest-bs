import { DateTime } from "./datetime";
import { Field } from "./field";
import { ListForm } from "./listForm";
import { ListFormDialog } from "./listFormDialog";
import { PeoplePicker } from "./peoplePicker";
import { RichTextBox, RichTextBoxTypes } from "./richTextBox";

// Extend the core components
import { Components } from "./core";
Components["DateTime"] = DateTime;
Components["Field"] = Field;
Components["ListForm"] = ListForm;
Components["ListFormDialog"] = ListFormDialog;
Components["PeoplePicker"] = PeoplePicker;
Components["RichTextBox"] = RichTextBox;
Components["RichTextBoxTypes"] = RichTextBoxTypes;

// Export the components
export { Components } from "./core";