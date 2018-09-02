/**
 * Carousel
 */
export const Carousel: (props: ICarouselProps) => ICarousel;

/**
 * Carousel
 */
export interface ICarousel {
    /**
     * Cycles through the carousel items from left to right.
     */
    cycle: () => void;

    /** Destroys an element’s tab. */
    dispose: () => void;

    /** The element. */
    el: Element;

    /**
     * Cycles to the next item.
     */
    next: () => void;

    /**
     * Cycles the carousel to a particular frame.
     * @prop value - The frame number.
     */
    number: (value:number) => void;

    /**
     * Stops the carousel from cycling through items.
     */
    pause: () => void;

    /**
     * Cycles to the previous item.
     */
    previous: () => void;
}

/**
 * Carousel Properties
 */
export interface ICarouselProps {
    className?: string;
    el?: Element | HTMLElement;
    enableControls?: boolean;
    enableCrossfade?: boolean;
    enableIndicators?: boolean;
    id?: string;
    items?: Array<ICarouselItem>;
    options?: ICarouselOptions;
}

/**
 * Carousel Item
 */
export interface ICarouselItem {
    captions?: string;
    className?: string;
    content?: string;
    imageAlt?: string;
    imageUrl?: string;
    isActive?: boolean;
}

/**
 * Carousel Options
 */
export interface ICarouselOptions {
    interval?: number;
    keyboard?: boolean;
    pause?: string | boolean;
    ride?: string;
    wrap?: boolean;
}