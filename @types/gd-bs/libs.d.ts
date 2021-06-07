export interface ITippyProps {
    allowHTML?: boolean;
    animateFill?: boolean;
    animation?: string | boolean;
    arrow?: boolean | string | SVGElement | DocumentFragment;
    content?: string | Element;
    delay?: number | [number | null, number | null];
    duration?: number | [number | null, number | null];
    followCursor?: boolean | 'horizontal' | 'vertical' | 'initial';
    hideOnClick?: boolean | 'toggle';
    inertia?: boolean;
    interactive?: boolean;
    maxWidth?: number | string;
    placement?: string;
    role?: string;
    showOnCreate?: boolean;
    sticky?: boolean | 'reference' | 'popper';
    theme?: string;
    touch?: boolean | 'hold' | ['hold', number];
    trigger?: string;
    triggerTarget?: Element | Element[] | null;
    zIndex?: number;
}