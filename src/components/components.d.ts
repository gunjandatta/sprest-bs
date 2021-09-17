export * from "gd-bs/src/components/components";
export * from "./datetime/types";
export * from "./field/types";
export * from "./listForm/types";
export * from "./listFormDialog/types";
export * from "./peoplePicker/types";

// Customize the form control types
import { IFormControlTypes as Parent } from "gd-bs/src/components/form/controlTypes";
export interface IFormControlTypes extends Parent {
    DateTime: number;
    PeoplePicker: number;
}
export const FormControlTypes: IFormControlTypes;