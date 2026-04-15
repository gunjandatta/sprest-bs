import { Components as CoreComponents } from "./core";
import { DateTime } from "./datetime";
import { Field } from "./field";
import { ListForm } from "./listForm";
import { ListFormDialog } from "./listFormDialog";
import { PeoplePicker } from "./peoplePicker";
import { RichTextBox, RichTextBoxTypes } from "./richTextBox";
import { SearchBox, SearchBoxControlType } from "./searchBox";

// Extend the core components
const Components = CoreComponents;
Components["DateTime"] = DateTime;
Components["Field"] = Field;
Components["ListForm"] = ListForm;
Components["ListFormDialog"] = ListFormDialog;
Components["PeoplePicker"] = PeoplePicker;
Components["RichTextBox"] = RichTextBox;
Components["RichTextBoxTypes"] = RichTextBoxTypes;
Components["SearchBox"] = SearchBox;
Components["SearchBoxControlType"] = SearchBoxControlType;

// Export the components
export { Components }