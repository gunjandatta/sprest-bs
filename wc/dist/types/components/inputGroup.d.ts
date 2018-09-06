import '../stencil.core';
export declare class InputGroup {
    private el;
    appendedButtons: string;
    appendedLabel: string;
    className: string;
    description: string;
    id: string;
    isLarge: boolean;
    isPlainText: boolean;
    isReadonly: boolean;
    isSmall: boolean;
    label: string;
    placeholder: string;
    prependedButtons: string;
    prependedLabel: string;
    type: number;
    value: string;
    componentDidLoad(): any;
    render(): JSX.Element;
}
