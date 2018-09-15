import '../stencil.core';
export declare class Alert {
    private el;
    className: string;
    content: string;
    header: string;
    isDismissible: boolean;
    type: number;
    componentDidLoad(): any;
    render(): JSX.Element;
}
