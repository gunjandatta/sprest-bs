export * from "gd-bs/@types/components";
export * from "./datetime";
export * from "./field";
export * from "./listForm";
export * from "./listFormDialog";
export * from "./peoplePicker";

// Customize the form control types
import { IFormControlTypes as Parent } from "gd-bs/@types/components/formControl";
export interface IFormControlTypes extends Parent {
    DateTime: number;
    PeoplePicker: number;
}
export const FormControlTypes: IFormControlTypes;