import { IFormControlProps } from "gd-bs/src/components/form/controlTypes";

/**
 * Rich TextBox
 */
export const RichTextBox: (props: IRichTextBoxProps) => IRichTextBox

/**
 * Rich TextBox
 */
export interface IRichTextBox {
    /** The quill root element. */
    el: HTMLDivElement;

    /** The div element containing the textbox content. */
    elContents: HTMLDivElement;

    /** The quill object. */
    quillObj: any;

    /** Method to get the contents as html. */
    getHtml: () => string;

    /** Method to get the contents as text. */
    getText: () => string;

    /** Method to set the content's html. */
    setHtml: (string) => void;
}

/**
 * Rich TextBox Quill Options
 */
export interface IRichTextBoxOptions {
    bounds?: HTMLElement | string | undefined;
    debug?: string | boolean | undefined;
    formats?: string[] | undefined;
    modules?: { [key: string]: any } | undefined;
    placeholder?: string | undefined;
    readOnly?: boolean | undefined;
    scrollingContainer?: HTMLElement | string | undefined;
    strict?: boolean | undefined;
    theme?: string | undefined;
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
    el?: HTMLElement;

    /** True to disable the date/time plugin */
    disabled?: boolean;

    /** The date/time label. */
    label?: string;

    /** The quill options. */
    options?: IRichTextBoxOptions;

    /** The placeholder text. */
    placeholder?: string;

    /** The # of rows to display. */
    rows?: number;

    /** The type of toolbar to display. */
    toolbarType?: number;

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

    /** The # of rows to display. */
    rows?: number;

    /** The type of toolbar to display. */
    toolbarType?: number;

    /** The date/time value. */
    value?: string;
}

/**
 * Rich TextBox Types
 */
export type IRichTextBoxTypes = {
    None: number;
    Basic: number;
    Full: number;
}