import './stencil.core';
export declare class Button {
    el: HTMLElement;
    className: string;
    id: string;
    isBlock: boolean;
    isDisabled: boolean;
    isLarge: boolean;
    isOutline: boolean;
    isSmall: boolean;
    target: string;
    text: string;
    toggle: string;
    type: number;
    componentDidLoad(): any;
    render(): JSX.Element;
}
