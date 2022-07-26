import { IFormControlProps } from "gd-bs/src/components/form/controlTypes";

/**
 * Rich TextBox
 */
export const RichTextBox: (props: IRichTextBoxProps) => IRichTextBox

/**
 * Rich TextBox
 */
export interface IRichTextBox {
    /** The textbox element. */
    el: HTMLDivElement;

    /** The quill object. */
    quillObj: any;

    /** Method to get the value. */
    getValue: () => string;

    /** Method to set the value. */
    setValue: (string) => void;
}

/**
 * Rich TextBox Quill Options
 */
export interface IRichTextBoxOptions {
    debug?: string | boolean | undefined;
    modules?: { [key: string]: any } | undefined;
    placeholder?: string | undefined;
    readOnly?: boolean | undefined;
    theme?: string | undefined;
    formats?: string[] | undefined;
    bounds?: HTMLElement | string | undefined;
    scrollingContainer?: HTMLElement | string | undefined;
    strict?: boolean | undefined;
}

/**
 * Rich TextBox Props
 */
export interface IRichTextBoxProps {
    /** Assigns the object to the input parameter. */
    assignTo?: (obj: IRichTextBox) => void;

    /** The class name to apply to the element. */
    className?: string;

    /** The element to render the form to. */
    el?: Element;

    /** True to disable the date/time plugin */
    disabled?: boolean;

    /** The date/time label. */
    label?: string;

    /** The quill options. */
    options?: IRichTextBoxOptions;

    /** The placeholder text. */
    placeholder?: string;

    /** The date/time value. */
    value?: string;
}

/**
 * Form Control Properties - Rich TextBox
 */
export interface IFormControlPropsRichTextBox extends IFormControlProps {
    /** The quill options. */
    options?: IRichTextBoxOptions;

    /** The placeholder text. */
    placeholder?: string;

    /** The date/time value. */
    value?: string;
}