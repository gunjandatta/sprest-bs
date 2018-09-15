import '../stencil.core';
export declare class Progress {
    private el;
    className: string;
    isAnimated: boolean;
    isStriped: boolean;
    label: string;
    max: number;
    min: number;
    size: number;
    componentDidLoad(): any;
    render(): JSX.Element;
}
