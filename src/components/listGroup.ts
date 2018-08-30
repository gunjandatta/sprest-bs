import * as jQuery from "jquery";
import { IListGroup, IListGroupProps } from "./types/listGroup";
import { Badge } from "./badge";

/**
 * List Group Item Types
 */
export enum ListGroupItemTypes {
    Danger = 1,
    Dark = 2,
    Info = 3,
    Light = 4,
    Primary = 5,
    Secondary = 6,
    Success = 7,
    Warning = 8
}

/**
 * List Group
 * @param props The list group properties.
 */
export const ListGroup = (props: IListGroupProps): IListGroup | string => {
    let html = [];

    // See if we the column width is defined
    let renderColumns = false;
    if (props.colWidth) {
        // Validate the value
        if (props.colWidth > 0 && props.colWidth < 12) {
            // Set the flag
            renderColumns = true;
        } else {
            // Log
            console.log("The column width value must be between 1-11");
        }
    }

    // See if we are rendering columns
    if (renderColumns) {
        html.push([
            '<div class="row">',
            '<div class="col-' + props.colWidth + '">'
        ].join('\n'));
    }

    // Set the class names
    let classNames = ["list-group"];
    props.className ? classNames.push(props.className) : null;
    props.isFlush ? classNames.push("list-group-flush") : null;

    // Set the attributes
    let attributes = [
        'class="' + classNames.join(' ') + '"',
        props.isTabs ? 'role="tablist"' : ''
    ].join(' ');

    // Set the list group starting tag
    html.push('<div "' + attributes + '>');

    // Parse the items
    let items = props.items || [];
    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        // Set the item class names
        let itemClassNames = ["list-group-item"];
        item.className ? itemClassNames.push(item.className) : null;
        item.badge ? itemClassNames.push("d-flex justify-content-between") : null;
        item.isActive ? itemClassNames.push("active") : null;
        item.isDisabled ? itemClassNames.push("disabled") : null;

        // Add the class, based on the item type
        switch (item.type) {
            case ListGroupItemTypes.Danger:
                itemClassNames.push("list-group-item-primary");
                break;
            case ListGroupItemTypes.Dark:
                itemClassNames.push("list-group-item-dark");
                break;
            case ListGroupItemTypes.Info:
                itemClassNames.push("list-group-item-info");
                break;
            case ListGroupItemTypes.Light:
                itemClassNames.push("list-group-item-light");
                break;
            case ListGroupItemTypes.Primary:
                itemClassNames.push("list-group-item-primary");
                break;
            case ListGroupItemTypes.Secondary:
                itemClassNames.push("list-group-item-secondary");
                break;
            case ListGroupItemTypes.Success:
                itemClassNames.push("list-group-item-success");
                break;
            case ListGroupItemTypes.Warning:
                itemClassNames.push("list-group-item-warning");
                break;
        }

        // Set the href
        let href = item.tabName ? "#" + item.tabName.replace(/[^a-zA-Z0-9]/, "") : item.href;

        // See if this is a link
        if (href) {
            // Set the attributes
            let attributes = [
                'class="' + itemClassNames.join(' ') + '"',
                'href="' + href + '"',
                item.tabName ? 'data-toggle="list" aria-controls="' + item.tabName + '"' : ''
            ].join(' ');

            // Add the link
            html.push([
                '<a ' + attributes + '>',
                item.content || "",
                item.badge ? Badge(item.badge) : "",
                '</a>'
            ].join('\n'));
        } else {
            // Add the button
            html.push([
                '<button'
            ].join('\n'));
        }
    }

    // Add the list group closing tag
    html.push("</div>");

    // Render the closing column tag
    renderColumns ? html.push("</div>") : null;

    // See if we are rendering tabs
    if (props.isTabs) {
        // See if we are rendering columns
        renderColumns ? html.push('<div class="col-' + (12 - props.colWidth) + '">') : null;

        // Add the tab pane starting tag
        html.push('<div class="tab-content">');

        // Parse the items
        for (let i = 0; i < items.length; i++) {
            let item = items[i];

            // Set the attributes
            let attributes = [
                'class="tab-pane' + (item.isActive ? ' active' : '') + (props.enableFade ? ' fade' : '') + '"',
                'id="' + item.tabName.replace(/[^a-zA-Z0-9]/, "") + '"',
                'role="tabpanel"'
            ].join(' ');

            // Add the tab content
            html.push([
                '<div ' + attributes + '>',
                item.content || "",
                '</div>'
            ].join('\n'));
        }

        // Add the tab pane closing tag
        html.push("</div>");

        // Render the closing column tag
        renderColumns ? html.push("</div>") : null;
    }

    // See if the element exists
    if (props.el) {
        // Set the class
        props.el.classList.add("bs");

        // Set the html
        props.el.innerHTML = html.join('\n');

        // Create the list group
        let listGroup = jQuery(props.el.children[0]);

        // See if we are rendering tabs
        if (props.isTabs) {
            // Get the tabs
            let tabs = props.el.querySelectorAll(".list-group-item");
            for (let i = 0; i < tabs.length; i++) {
                // Add the click event
                tabs[i].addEventListener("click", ev => {
                    // Get the active items
                    let activeItems = props.el.querySelectorAll(".active");
                    for (let i = 0; i < activeItems.length; i++) {
                        // Remove the class
                        activeItems[i].classList.remove("active");
                    }

                    // Set this tab to be active
                    (ev.currentTarget as HTMLElement).classList.add("active");

                    // Get the tab content and make it active
                    let elTab = props.el.querySelector((ev.currentTarget as HTMLElement).getAttribute("href"));
                    elTab ? elTab.classList.add("active") : null;
                });
            }
        }

        // Return the list group
        return {
            el: listGroup,
            show: (tabId: string) => {
                // Show the tab
                listGroup.querySelector("#" + tabId).tab("show");
            }
        };
    } else {
        // Return the html
        return html.join('\n');
    }
}