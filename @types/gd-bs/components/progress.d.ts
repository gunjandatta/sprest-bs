/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the progress
 *         $REST.Components.Progress({
 *             el: document.querySelector("#demo"),
 *             size: 25,
 *             label: "25%"
 *         });
 *     });
 * </script>
 */

/**
 * ### Progress
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the progress
 * let el = document.querySelector("#progress");
 * let progress = Components.Progress({
 *     el: el,
 *     size: 25,
 *     label: "25%"
 * });
 * ```
 */
export const Progress: (props: IProgressProps, template?: string) => IProgress;

import { IBaseProps } from "../base";

/**
 * Progress
 */
export interface IProgress {
    /** The element. */
    el: Element;

    /** Hides the progress. */
    hide: () => void;

    /** The progress bar element */
    progressBar: HTMLDivElement;

    /** Shows the progress. */
    show: () => void;
}

/**
 * Progress Properties
 */
export interface IProgressProps extends IBaseProps<IProgress> {
    isAnimated?: boolean;
    isStriped?: boolean;
    label?: string;
    max?: number;
    min?: number;
    size?: number;
    type?: number;
}