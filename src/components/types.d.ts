// Components
export * from "./components";

// Customize the form control types
import { IFormControlTypes as Parent } from "gd-bs/src/components/form/controlTypes";
export interface IFormControlTypes extends Parent {
    DateTime: number;
    PeoplePicker: number;
}
export const FormControlTypes: IFormControlTypes;