import { Components } from "gd-bs";

/**
 * Web Part
 */
export const WebPart: (props: IWebPartProps) => IWebPart;

/**
 * WebPart
 */
export interface IWebPart<IWPCfg = IWebPartCfg, IWPInfo = IWebPartInfo> {
    /** The webpart configuration. */
    cfg: IWPCfg;

    /** The webpart information. */
    info: IWPInfo;

    /** Method to update the edit form. */
    updateEditForm?: (formControls: Array<Components.IFormControl>) => void;
}

/**
 * WebPart Information
 */
export interface IWebPartInfo<IWPCfg = IWebPartCfg> {
    /** The configuration */
    cfg: IWPCfg;

    /** The element to render the webpart to */
    el: HTMLElement;

    /** The webpart id */
    wpId: string;
}

/**
 * WebPart Object
 */
export interface IWebPartObject {
    /** The JSOM context object */
    Context: any;

    /** The webpart properties object */
    Properties: any;

    /** The webpart id */
    WebPartId: string;

    /** The webpart html element */
    WebPart: HTMLElement;

    /** The webpart definition object */
    WebPartDefinition: any;
}

/**
 * WebPart Properties
 */
export interface IWebPartProps<IWPInfo = IWebPartInfo, IWPEditForm = IWebPartEditForm> {
    /** The optional configuration element */
    cfgElementId?: string;

    /** The class name. */
    className?: string;

    /** The target element id to render the webpart to */
    elementId?: string;

    /** The edit form */
    editForm?: IWPEditForm;

    /** The optional help link properties */
    helpProps?: {
        /** The link title */
        title?: string;

        /** The link url */
        url: string;
    };

    /** The post render event */
    onPostRender?: (wp: IWPInfo, ...args) => void;

    /** The render event triggered when the page is in 'Display' mode */
    onRenderDisplay?: (wp: IWPInfo) => any;

    /** The render event triggered when the page is in 'Edit' mode */
    onRenderEdit?: (wp: IWPInfo) => any;

    /** The webpart class name */
    wpClassName?: string;
}

/**
 * WebPart Configuration
 */
export const WPCfg: (cfg: IWebPartCfg, props: IWebPartProps) => {
    /** Method to render the edit form. */
    renderForm?: (formControls: Array<Components.IFormControl>) => void;
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
    actions?: Array<Components.IButtonProps>;

    /** The render form event. */
    onRenderForm?: (wpInfo?: IWPInfo) => Array<Components.IFormControlProps> | PromiseLike<Array<Components.IFormControlProps>> | void;

    /** The save event. */
    onSave?: (wpCfg?: IWPCfg, form?: Components.IForm) => IWPCfg;

    /** True to hide the save button. */
    showSaveButton?: boolean;
}
