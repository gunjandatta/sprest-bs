import { Components } from "gd-bs";
import * as Quill from "quill";
import * as Toolbars from "./toolbar";
import { IRichTextBox, IRichTextBoxProps, IFormControlPropsRichTextBox } from "./types";

/**
 * Toolbar Types
 */
export enum RichTextBoxTypes {
    None = 0,
    Basic = 1,
    Full = 2
}

/**
 * Rich TextBox
 */
export const RichTextBox = (props: IRichTextBoxProps): IRichTextBox => {
    // Create the editor element
    let elRichTextBox = document.createElement("div");
    elRichTextBox.classList.add("rich-textbox");

    // Create the toolbar element
    let elToolbar = document.createElement("div");
    elToolbar.classList.add("toolbar-container");
    elRichTextBox.appendChild(elToolbar);

    // Create the editor element
    let elEditor = document.createElement("div");
    elEditor.classList.add("editor-container");
    elRichTextBox.appendChild(elEditor);

    // Get the options and default the values
    let options = props.options || {};
    options.modules = options.modules || {};
    options.placeholder ? options.placeholder = props.placeholder : null;
    options.readOnly == null && typeof (props.disabled) === "boolean" ? options.readOnly = props.disabled : null;

    // See if are setting the default toolbar options
    let showToolbar = true;
    if (options.modules.toolbar == null) {
        // Set the toolbar options
        switch (props.toolbarType) {
            // None
            case RichTextBoxTypes.None:
                elToolbar.innerHTML = "";
                showToolbar = false;
                break;

            // Basic
            case RichTextBoxTypes.Basic:
                elToolbar.innerHTML = Toolbars.BasicToolbar;
                break;

            // Default - Full
            default:
                elToolbar.innerHTML = Toolbars.FullToolbar;
                break;
        }

        // Set the toolbar
        options.modules.toolbar = elToolbar;
    } else {
        // Set the toolbar container
        options.modules.toolbar.container = elToolbar;
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(elRichTextBox);

    // See if we are rendering it to an element
    if (props.el) {
        // Ensure the parent element exists
        if (props.el.parentElement && props.el.parentElement.classList) {
            // Set the bootstrap class
            props.el.parentElement.classList.contains("bs") ? null : props.el.parentElement.classList.add("bs");
        }

        // Append the elements
        while (el.children.length > 0) {
            props.el.appendChild(el.children[0]);
        }

        // Update the element
        el = props.el as any;
    } else {
        // Set the bootstrap class
        el.classList.add("bs");
    }

    // Apply the plugin
    let quillObj = new Quill(elEditor, options);

    // See if we are hiding the toolbar
    if (!showToolbar) {
        // Remove the snow class
        elToolbar.classList.remove("ql-snow");
    }

    // Create the object
    let obj = {
        el: elRichTextBox,
        elContents: quillObj.root,
        quillObj,
        getHtml: () => { return quillObj.root.innerHTML; },
        getText: () => { return quillObj.getText(); },
        setHtml: (value: string) => { quillObj.root.innerHTML = value || ""; }
    };

    // Set the value
    props.value ? obj.setHtml(props.value) : null;

    // Execute the assign to event
    props.assignTo ? props.assignTo(obj) : null;

    // Return the object
    return obj;
}

// Customize the form control
export const RichTextBoxControlType = 102;
Components.FormControlTypes["RichTextBox"] = RichTextBoxControlType;
Components.CustomControls.registerType(RichTextBoxControlType, (props: IFormControlPropsRichTextBox) => {
    let rtb: IRichTextBox = null;

    // Set the created method
    let onRendered = props.onControlRendered;
    props.onControlRendered = ctrl => {
        // Render a date/time
        rtb = RichTextBox({
            className: props.className,
            disabled: props.isDisabled || props.isReadonly,
            el: ctrl.el,
            options: props.options,
            rows: props.rows,
            toolbarType: props.toolbarType,
            placeholder: props.placeholder,
            value: props.value
        });

        // See if the label exists
        let elLabel: HTMLElement = ctrl["_elLabel"];
        if (elLabel) {
            // Set the id and aria properties
            elLabel ? elLabel.id = (props.id || props.name) + "_label" : null;
            //rtb.el.querySelector("input").setAttribute("aria-labelledby", elLabel.id);
        }

        // Set the control
        ctrl.setControl(rtb);

        // Call the custom render event
        onRendered ? onRendered(ctrl) : null;
    }

    // Register a people picker
    props.onGetValue = (ctrl) => {
        // Return the value
        return rtb ? rtb.getHtml() : ctrl.value;
    };
});