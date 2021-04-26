/**
 * <style>
 * .carouselDemo { max-width: 400px; }
 * </style>
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the carousel
 *         $REST.Components.Carousel({
 *             el: document.querySelector("#demo"),
 *             enableControls: true,
 *             enableIndicators: true,
 *             id: "carouselDemo",
 *             items: [
 *                 {
 *                     captions: "<h5>First Slide</h5>",
 *                     imageUrl: "https://via.placeholder.com/400x200",
 *                     imageAlt: "First Slide",
 *                     isActive: true
 *                 },
 *                 {
 *                     captions: "<h5>Second Slide</h5>",
 *                     imageUrl: "https://via.placeholder.com/400x200",
 *                     imageAlt: "Second Slide"
 *                 },
 *                 {
 *                     captions: "<h5>Third Slide</h5>",
 *                     imageUrl: "https://via.placeholder.com/400x200",
 *                     imageAlt: "Third Slide"
 *                 }
 *             ]
 *         });
 *     });
 * </script>
 */

/**
 * ### Carousel
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the carousel
 * let el = document.querySelector("#carousel");
 * let carousel = Components.Carousel({
 *     el: el,
 *     enableControls: true,
 *     enableIndicators: true,
 *     id: "carouselDemo",
 *     items: [
 *         {
 *             captions: "<h5>First Slide</h5>",
 *             imageUrl: "https://via.placeholder.com/400x200",
 *             imageAlt: "First Slide",
 *             isActive: true
 *         },
 *         {
 *             captions: "<h5>Second Slide</h5>",
 *             imageUrl: "https://via.placeholder.com/400x200",
 *             imageAlt: "Second Slide"
 *         },
 *         {
 *             captions: "<h5>Third Slide</h5>",
 *             imageUrl: "https://via.placeholder.com/400x200",
 *             imageAlt: "Third Slide"
 *         }
 *     ]
 * });
 * ```
 */
export const Carousel: (props: ICarouselProps, template?: string, slideTemplate?: string) => ICarousel;

import { IBaseProps } from "../base";

/**
 * Carousel
 */
export interface ICarousel {
    /**
     * Cycles through the carousel items from left to right.
     */
    cycle: () => void;

    /** The element. */
    el: Element;

    /** Hides the carousel. */
    hide: () => void;

    /**
     * Cycles to the next item.
     */
    next: () => void;

    /**
     * Stops the carousel from cycling through items.
     */
    pause: () => void;

    /**
     * Cycles to the previous item.
     */
    previous: () => void;

    /** Enables/Disables the dark theme. */
    setTheme: (isDark: boolean) => void;

    /** Shows the carousel. */
    show: () => void;

    /** Unpauses the carousel. */
    unpause: () => void;
}

/**
 * Carousel Item
 */
export interface ICarouselItem<T = Element> {
    captions?: string;
    className?: string;
    content?: string | T;
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
    pause?: boolean;
    slide?: number;
    wrap?: boolean;
}

/**
 * Carousel Properties
 */
export interface ICarouselProps<T = Element> extends IBaseProps<ICarousel> {
    enableControls?: boolean;
    enableCrossfade?: boolean;
    enableIndicators?: boolean;
    id?: string;
    isDark?: boolean;
    items?: Array<ICarouselItem<T>>;
    options?: ICarouselOptions;
}