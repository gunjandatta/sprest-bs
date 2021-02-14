/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the table
 *         $REST.Components.Table({
 *             el: document.querySelector("#demo"),
 *             className: "table-sm is-striped",
 *             columns: [
 *                 { name: "a0", title: "Actions", isHidden: true },
 *                 { name: "a1", title: "Col 1" },
 *                 { name: "a2", title: "Col 2" },
 *                 { name: "a3", title: "Col 3" }
 *             ],
 *             rows: [
 *                 { a0: "1", a1: "1.1", a2: "1.2", a3: "1.3" },
 *                 { a0: "2", a1: "2.1", a2: "2.2", a3: "2.3" },
 *                 { a0: "3", a1: "3.1", a2: "3.2", a3: "3.3" },
 *                 { a0: "4", a1: "4.1", a2: "4.2", a3: "4.3" },
 *                 { a0: "5", a1: "5.1", a2: "5.2", a3: "5.3" },
 *                 { a0: "6", a1: "6.1", a2: "6.2", a3: "6.3" },
 *                 { a0: "7", a1: "7.1", a2: "7.2", a3: "7.3" },
 *                 { a0: "8", a1: "8.1", a2: "8.2", a3: "8.3" },
 *                 { a0: "9", a1: "9.1", a2: "9.2", a3: "9.3" }
 *             ]
 *         });
 *     });
 * </script>
 */

/**
 * ### Table
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the table
 * let el = document.querySelector("#table");
 * let table = Components.Table({
 *     el: el,
 *     className: "table-sm is-striped",
 *     columns: [
 *         { name: "a0", title: "Actions", isHidden: true },
 *         { name: "a1", title: "Col 1" },
 *         { name: "a2", title: "Col 2" },
 *         { name: "a3", title: "Col 3" }
 *     ],
 *     rows: [
 *         { a0: "1", a1: "1.1", a2: "1.2", a3: "1.3" },
 *         { a0: "2", a1: "2.1", a2: "2.2", a3: "2.3" },
 *         { a0: "3", a1: "3.1", a2: "3.2", a3: "3.3" },
 *         { a0: "4", a1: "4.1", a2: "4.2", a3: "4.3" },
 *         { a0: "5", a1: "5.1", a2: "5.2", a3: "5.3" },
 *         { a0: "6", a1: "6.1", a2: "6.2", a3: "6.3" },
 *         { a0: "7", a1: "7.1", a2: "7.2", a3: "7.3" },
 *         { a0: "8", a1: "8.1", a2: "8.2", a3: "8.3" },
 *         { a0: "9", a1: "9.1", a2: "9.2", a3: "9.3" }
 *     ]
 * });
 * ```
 */
export const Table: (props: ITableProps, template?: string) => ITable

import { IBaseProps } from "../base";

/**
 * Table
 */
export interface ITable {
    addRows: (rows: Array<any>) => void;

    el: HTMLTableElement;

    /** Hides the table. */
    hide: () => void;

    /** Shows the table. */
    show: () => void;
}

/**
 * Table Properties
 */
export interface ITableProps extends IBaseProps<ITable> {
    columns?: Array<ITableColumn>;
    onClickCell?: (el: HTMLTableDataCellElement, column?: ITableColumn, data?: any) => void;
    onClickHeader?: (el: HTMLTableHeaderCellElement, column?: ITableColumn) => void;
    onRenderCell?: (el?: HTMLTableDataCellElement, column?: ITableColumn, data?: any) => void;
    onRenderHeaderCell?: (el?: HTMLTableDataCellElement, column?: ITableColumn) => void;
    onRenderHeaderRow?: (el?: HTMLTableRowElement) => void;
    onRenderRow?: (el?: HTMLTableRowElement, data?: any) => void;
    rows?: Array<any>;
}

/**
 * Table Column
 */
export interface ITableColumn {
    className?: string;
    data?: any;
    isHidden?: boolean;
    name: string;
    onClickCell?: (el: HTMLTableDataCellElement, column?: ITableColumn, data?: any) => void;
    onClickHeader?: (el: HTMLTableHeaderCellElement, column?: ITableColumn) => void;
    onRenderCell?: (el: HTMLTableDataCellElement, column?: ITableColumn, data?: any) => void;
    onRenderHeader?: (el?: HTMLTableDataCellElement, column?: ITableColumn) => void;
    scope?: string;
    title?: string;
}