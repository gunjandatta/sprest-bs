import { ContextInfo } from "gd-sprest";
import { ISPFxWebPartProps } from "./types";

/**
 * SPFx WebPart Base Class
 */
export class SPFxWebPart {
    private _props: ISPFxWebPartProps = null;

    // Constructor
    constructor(props: ISPFxWebPartProps) {
        // Save the properties
        this._props = props;

        // Set the context
        this._props.context ? ContextInfo.setPageContext(this._props.context) : null;
    }
}