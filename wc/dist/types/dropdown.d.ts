import './stencil.core';
export declare class Dropdown {
    private el;
    className: string;
    dropLeft: boolean;
    dropRight: boolean;
    dropUp: boolean;
    formFl: boolean;
    id: string;
    isSplit: boolean;
    items: string;
    label: string;
    menuOnly: boolean;
    multi: boolean;
    type: number;
    value: string;
    componentDidLoad(): any;
    render(): JSX.Element;
}
