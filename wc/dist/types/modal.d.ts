import './stencil.core';
export declare class Modal {
    private el;
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
    componentDidLoad(): any;
    render(): JSX.Element;
}
