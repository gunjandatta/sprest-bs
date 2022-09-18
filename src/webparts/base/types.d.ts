import { IButtonProps } from "gd-bs/src/components/button/types";
import { IFormControl, IFormControlProps } from "gd-bs/src/components/form/controlTypes";
import { IForm, IFormProps } from "gd-bs/src/components/form/formTypes";
import { IModal, IModalProps } from "gd-bs/src/components/modal/types";
import { ITooltipGroupProps } from "gd-bs/src/components/tooltipGroup/types";

/**
 * ### Web Part
 * 
 * The client-side webpart component can be used to control what is displayed when a page is being edited and displayed. An optional hidden configuration element can be utilized to store a custom configuration.
 * 
 * ```ts
 * import { WebParts } from "gd-sprest-bs";
 * 
 * // Create the webpart
 * WebParts.WebPart({
 *     elementId: "my-wp",
 *     cfgElementId: "my-wp-cfg",
 *     onRenderDisplay: (wpInfo) => {
 *         // Render the display element
 *         wpInfo.el.innerHTML = '<h1>Hello Display Mode</h1>';
 *     },
 *     onRenderEdit: (wpInfo) => {
 *         // Render the edit element
 *         wpInfo.el.innerHTML = '<h1>Hello Edit Mode</h1>';
 *     }
 * });
 * ```
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
    updateEditForm?: (formControls: Array<IFormControl>) => void;
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

    /** The render form event triggered when the form is created */
    onRenderForm?: (form: IForm, wp?: IWPInfo) => any;

    /** The webpart class name */
    wpClassName?: string;
}

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
    onRenderForm?: (wpInfo?: IWPInfo) => Array<IFormControlProps> | PromiseLike<Array<IFormControlProps>> | void;

    /** The save event. */
    onSave?: (wpCfg?: IWPCfg, form?: IForm) => IWPCfg;

    /** True to hide the save button. */
    showSaveButton?: boolean;
}

/**
 * SPFx WebPart
 */
export const SPFxWebPart: (props: ISPFxWebPartProps) => ISPFxWebPart;

/**
 * SPFx WebPart
 */
export interface ISPFxWebPart {
    /** The webpart configuration form. */
    Form: IForm;

    /** The webpart configuration modal. */
    Modal: IModal;

    /** Shows the webpart configuration form in a modal. */
    showEditModal: () => void;
}

/**
 * SPFx WebPart Configuration
 */
export interface ISPFxWebPartCfg { }

/**
 * SPFx WebPart Properties
 */
export interface ISPFxWebPartProps {
    /** The environment type. */
    envType?: number;

    /** The event called prior to saving the webpart configuration. */
    onConfigSaving?: (wpCfg: ISPFxWebPartCfg) => ISPFxWebPartCfg;

    /** The event called after the webpart configuration is saved. */
    onConfigSaved?: (wpCfg?: ISPFxWebPartCfg) => void;

    /** The event called when the modal is being displayed. */
    onEditFormDisplaying?: () => void;

    /** The webpart configuration modal footer button properties. */
    onEditFormFooterRendering?: (props: ITooltipGroupProps) => ITooltipGroupProps;

    /** The webpart configuration modal form properties. */
    onEditFormRendering?: (props: IFormProps) => IFormProps;

    /** The webpart configuration modal form object. */
    onEditFormRendered?: (form: IForm) => void;

    /** The webpart configuration modal properties. */
    onModalRendering?: (props: IModalProps) => IModalProps;

    /** The webpart configuration modal properties. */
    onModalRendered?: (modal: IModal) => void;

    /** The render event for the webpart. */
    render?: (el?: HTMLElement, cfg?: ISPFxWebPartCfg) => void;

    /** The spfx properties. */
    spfx?: {
        context: {
            domElement: HTMLElement;
            graphHttpClient: any;
            host: any;
            httpClient: any;
            instanceId: string;
            manifest: any;
            pageContext: any;
            propertyPane: any;
            serviceScope: any;
            spHttpClient: any;
            statusRenderer: any;
            webPartTag: string;
        };
        dataVersion: any;
        description: string;
        displayMode: number;
        domElement: HTMLElement;
        instanceId: string;
        isRenderAsync: boolean;
        previewImageUrl: string;
        properties: any;
        propertiesMetadata: any;
        title: string;
        width: number;
    };

    /** A reference to the SPFx's save method for the webpart's configuration. */
    spfxSaveConfig?: (wpCfg: string) => void;

    /** The webpart configuration property. */
    wpCfg?: string;
}