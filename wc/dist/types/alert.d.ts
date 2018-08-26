import './stencil.core';
export declare class Alert {
    el: HTMLElement;
    className: string;
    content: string;
    header: string;
    isDismissible: boolean;
    type: number;
    componentDidLoad(): any;
    render(): JSX.Element;
}
