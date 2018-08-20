import { IButtonProps, IFormControl } from "../../components/types";
import { IWebPartInfo, IWebPartProps } from "./wp";

/**
 * WebPart Configuration
 */
export const WPCfg: (cfg: IWebPartCfg, props: IWebPartProps) => {
    /** Method to render the edit form. */
    renderForm?: (formControls: Array<IFormControl>) => void;
};

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
export interface IWebPartEditForm<IWPCfg = IWebPartCfg, IWPInfo = IWebPartInfo> {
    /** The form action buttons displayed in the footer of the modal. */
    actions?: Array<IButtonProps>;

    /** The render form event. */
    onRenderForm?: (wpInfo: IWPInfo) => Array<IFormControl> | PromiseLike<Array<IFormControl>> | void;

    /** The save event. */
    onSave?: (wpCfg: IWPCfg) => IWPCfg;

    /** True to hide the save button. */
    showSaveButton?: boolean;
}
