import { IButtonProps, IFormControl } from "../../components/types";
import { IWebPartInfo, IWebPartProps } from "./wp";

/**
 * WebPart Configuration
 */
export const WPCfg: (cfg: IWebPartCfg, props: IWebPartProps) => void;

/**
 * WebPart Configuration
 */
export interface IWebPartCfg {
    /** The webpart id */
    WebPartId?: string;
}

/**
 * WebPart Edit Form
 */
export interface IWebPartEditForm {
    /** The form action buttons displayed in the footer of the modal. */
    actions?: Array<IButtonProps>;

    /** The render form event. */
    onRenderForm?: (wpInfo: IWebPartInfo) => Array<IFormControl> | PromiseLike<Array<IFormControl>> | void;

    /** The save event. */
    onSave?: (wpCfg: IWebPartCfg) => IWebPartCfg;

    /** True to hide the save button. */
    showSaveButton?: boolean;
}
