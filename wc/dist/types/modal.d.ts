import './stencil.core';
export declare class Modal {
    el: HTMLElement;
    body: string;
    button: string;
    className: string;
    disableFade: boolean;
    footer: string;
    hideCloseButton: boolean;
    id: string;
    isCentered: boolean;
    isLarge: boolean;
    isSmall: boolean;
    onRenderBody: string;
    onRenderFooter: string;
    title: string;
    componentDidLoad(): any;
    render(): JSX.Element;
}
