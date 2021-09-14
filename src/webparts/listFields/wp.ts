import { WPList } from "../list";
import { IWPListFields, IWPListFieldsProps } from "./types";
import { WPListFieldsEditForm } from "./wpCfg";

/**
 * List Fields WebPart
 */
export const WPListFields = (props: IWPListFieldsProps): IWPListFields => {
    // Set the edit form
    props ? props.editForm = WPListFieldsEditForm(props.editForm) : null;

    // Create the webpart and return it
    return WPList(props) as IWPListFields;
}