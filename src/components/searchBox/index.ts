import { Helper, Types } from "gd-sprest";
import { Components } from "../core";
import { IFormControlPropsSearchBox, ISearchBox, ISearchBoxProps } from "./types";

/**
 * Search Box
 */
export const SearchBox = (props: ISearchBoxProps): ISearchBox => {
    let _filterText: string = null;
    let _menu: Components.IPopover = null;
    let _minCharSearch: number = props.minCharSearch > 0 ? props.minCharSearch : 3;
    let _items: Components.IDropdownItem[] = [];
    let searchResults: Components.IDropdownItem[] = [];

    // Method to an item
    let addItem = (item: Components.IDropdownItem) => {
        // See if we are allowing multiple users
        let allowMultple = typeof (props.multi) == "boolean" ? props.multi : false;
        if (!allowMultple) {
            // Remove existing users
            while (elSelectedItems.firstChild) { elSelectedItems.removeChild(elSelectedItems.firstChild); }
        }

        // See if the picker is disabled or read only
        if (props.disabled || props.readOnly) {
            // Render a badge
            Components.Button({
                data: item,
                el: elSelectedItems,
                className: "me-1 mb-1",
                isSmall: true,
                text: item.text,
                type: Components.ButtonTypes.Primary
            });
        } else {
            // Render a button
            let btn = Components.Button({
                data: item,
                el: elSelectedItems,
                className: "me-1 mb-1",
                isSmall: true,
                text: item.text,
                type: Components.ButtonTypes.Primary,
                badge: {
                    className: "people-picker-x ms-2",
                    content: "&times;",
                    isPill: true,
                    type: Components.BadgeTypes.Light,
                    onClick: () => {
                        // Remove the button
                        elSelectedItems.removeChild(btn.el);

                        // Call the event
                        props.onChange ? props.onChange(obj.getValue()) : null;
                    }
                }
            });
        }

        // Call the event
        props.onChange ? props.onChange(obj.getValue()) : null;
    }

    // Method to load the items
    let loadItems = (): PromiseLike<void> => {
        // Return a promise
        return new Promise((resolve) => {
            // Default the items
            _items = props.items || [];

            // See if there is an event
            let returnVal: any = props.onItemsLoading ? props.onItemsLoading() : null;
            if (returnVal && typeof (returnVal.then) === "function") {
                // Wait for the promise to complete
                returnVal.then(items => {
                    // Set the items
                    _items = returnVal || [];

                    // Resolve the request
                    resolve();
                });
            } else {
                // Set the items
                _items = returnVal || _items;

                // Resolve the request
                resolve();
            }
        });
    }

    // Method to search for the items
    let searchItems = (el: HTMLElement, searchText: string, results?: []) => {
        // Ensure 3 characters exist
        if (_filterText.length >= _minCharSearch) {
            // Ensure the search text matches
            if (_filterText != searchText) { return; }

            // Set the menu header
            el.innerHTML = '<h6 class="dropdown-header">Search Results for "' + searchText + '"</h6>';
            el.innerHTML += '<div class="dropdown-divider"></div>';

            // See if the results exist
            if (results) {
                // Set the search results
                searchResults = results;
            } else {
                // Clear the search results
                searchResults = [];

                // Parse the items and compare it to the filter value
                let filterLowerValue = _filterText.toLowerCase();
                _items.forEach(item => {
                    let value = (item?.text || item?.value || "").toLowerCase();

                    // See if the item contains the value
                    if (value && value.indexOf(filterLowerValue) >= 0) {
                        // Add the item
                        searchResults.push(item);
                    }
                });
            }

            // See if no users were found
            if (searchResults.length == 0) {
                // Add a message
                el.innerHTML += '<h6 class="dropdown-header">No results were found...</h6>';
            } else {
                // Parse the items
                for (let i = 0; i < searchResults.length; i++) {
                    let result = searchResults[i];

                    // Create the item
                    let elItem = document.createElement("a");
                    elItem.className = "dropdown-item";
                    elItem.href = "#";
                    elItem.setAttribute("data-id", i.toString());
                    elItem.innerHTML = result.text;
                    el.appendChild(elItem);

                    // Set the click event
                    elItem.addEventListener("click", ev => {
                        let idx = (ev.currentTarget as HTMLAnchorElement).getAttribute("data-id");
                        let item = searchResults[idx];

                        // Add the item
                        addItem(item);

                        // Hide the menu
                        _menu.hide();

                        // Clear the search text
                        elTextbox.querySelector("input").value = "";
                    });

                    // Call the render event
                    props.onItemAdded ? props.onItemAdded(elItem, result) : null;
                }
            }

            // Refresh the popover
            _menu.floatingUI.refreshPosition();
        }
    }

    // Method to set the value
    let setValue = (values: Array<Components.IDropdownItem> = []) => {
        // Clear the selected users
        elSelectedItems.innerHTML = "";

        // Parse the selected users
        for (let i = 0; i < values.length; i++) {
            // Add the user
            addItem(values[i]);
        }
    }

    // Create the search box
    let elSearchBox = document.createElement("div");
    elSearchBox.className = "search-box";

    // Create the menu
    let elMenu = document.createElement("div");
    elMenu.className = "dropdown-menu border-0 mw-fit";
    elMenu.innerHTML = '<h6 class="dropdown-header">Search requires 3+ characters</h6>';

    // Add the selected items
    let elSelectedItems = document.createElement("div");
    elSelectedItems.style.position = "relative";
    elSearchBox.appendChild(elSelectedItems);

    // Create the textbox
    let elTextbox = Components.InputGroup({
        placeholder: props.placeholder == null ? "Search" : props.placeholder,
        onChange: searchText => {
            let currentHTML = elMenu.innerHTML;

            // See if a value exists
            if (searchText) {
                // Set the filter text
                _filterText = searchText;

                // Set the header
                elMenu.innerHTML = ['<h6 class="dropdown-header">',
                    _filterText.length >= _minCharSearch ? 'Searching for "' + _filterText + '"' : `Search requires ${_minCharSearch}+ characters`,
                    '</h6>'
                ].join('\n');

                // Wait 500ms before searching
                setTimeout(() => {
                    // Ensure the filters match
                    if (searchText == _filterText) {
                        // Call the event
                        let result = props.onSearchItems ? props.onSearchItems() as PromiseLike<any> : null;
                        if (result?.then) {
                            // Wait for the event to complete
                            result.then((items) => {
                                // Set the filter items
                                searchItems(elMenu, searchText, items);
                            });
                        } else {
                            // Search for the items
                            searchItems(elMenu, searchText);
                        }
                    }
                }, 500);
            } else {
                // Set the header
                elMenu.innerHTML = '<h6 class="dropdown-header">Search requires 3+ characters</h6>';
            }

            // Ensure it's visible
            _menu.show();

            // See if a refresh is required
            if (currentHTML != elMenu.innerHTML) {
                // Refresh the popover
                _menu.floatingUI.refreshPosition();
            }
        }
    }).el;
    props.disabled || props.readOnly ? elTextbox.classList.add("d-none") : null;
    elSearchBox.appendChild(elTextbox);

    // Create the popover menu
    _menu = Components.Popover({
        target: elTextbox.querySelector("input"),
        placement: Components.PopoverPlacements.BottomStart,
        options: {
            trigger: "click"
        }
    });

    // Set the content
    _menu.setContent(elMenu);

    // Set the value and ensure it's a 
    let value = [];
    if (props.value && typeof (props.value["length"]) === "number") {
        value = props.value as any;
    } else if (props.value) {
        value = [props.value];
    }
    setValue(value);

    // Create the element
    let el = document.createElement("div");
    el.appendChild(elSearchBox);

    // Load the items
    loadItems().then(() => {
        // Call the event
        props.onItemsLoaded ? props.onItemsLoaded(_items) : null;
    });

    // See if we are rendering it to an element
    if (props.el) {
        // Ensure the parent element exists
        if (props.el.parentElement && props.el.parentElement.classList) {
            // Set the bootstrap class
            props.el.parentElement.classList.contains("bs") ? null : props.el.parentElement.classList.add("bs");
        }

        // Append the elements
        while (el.children.length > 0) {
            props.el.appendChild(el.children[0]);
        }

        // Update the element
        el = props.el as any;
    } else {
        // Set the bootstrap class
        el.classList.add("bs");
    }

    // Create the object
    let obj = {
        el: elSearchBox,
        getValue: () => {
            let selectedItems = [];

            // Parse the selected users
            for (let i = 0; i < elSelectedItems.children.length; i++) {
                let userInfo = JSON.parse(elSelectedItems.children[i].getAttribute("data-user"));
                let user = Helper.parse(userInfo) as Types.SP.User | Types.SP.Group;

                // Add this user
                selectedItems.push(user);
            }

            // Return the value
            return selectedItems;
        },
        setValue
    };

    // Execute the assign to event
    props.assignTo ? props.assignTo(obj) : null;

    // Return the search box object
    return obj;
}

// Extend the form controls
export const SearchBoxControlType = 103;
Components.FormControlTypes["SearchBox"] = SearchBoxControlType;
Components.CustomControls.registerType(SearchBoxControlType, (props: IFormControlPropsSearchBox) => {
    let searchbox: ISearchBox = null;

    // Set the created method
    let onRendered = props.onControlRendered;
    props.onControlRendered = ctrl => {
        // Render a search box
        searchbox = SearchBox({
            assignTo: props.assignTo,
            className: props.className,
            disabled: props.isDisabled,
            el: ctrl.el,
            label: props.label,
            maxResults: props.maxResults,
            multi: props.multi,
            onChange: props.onChange,
            placeholder: props.placeholder,
            readOnly: props.isReadonly,
            value: props.value as any
        });

        // See if the label exists
        let elLabel: HTMLElement = ctrl["_elLabel"];
        if (elLabel) {
            // Set the id and aria properties
            elLabel ? elLabel.id = (props.id || props.name) + "_label" : null;
            searchbox.el.querySelector("input").setAttribute("aria-labelledby", elLabel.id);
        }

        // Set the control
        ctrl.setControl(searchbox);

        // Call the custom render event
        onRendered ? onRendered(ctrl) : null;
    }

    // Register a search box
    props.onGetValue = (ctrl) => {
        // Return the value
        return searchbox ? searchbox.getValue() : ctrl.value;
    };
});