import { Helper, PeoplePicker as Search, SPTypes, Types, Web } from "gd-sprest";
import { Components } from "../core";
import { IFormControlPropsPeoplePicker, IPeoplePicker, IPeoplePickerProps } from "./types";

/**
 * People Picker
 */
export const PeoplePicker = (props: IPeoplePickerProps): IPeoplePicker => {
    let _filterText: string = null;
    let _menu: Components.IPopover = null;
    let _users = [];

    // Method to add a user
    let addUser = (userInfo: Types.IPeoplePickerUser | string) => {
        let user: Types.IPeoplePickerUser = typeof (userInfo) === "string" ? JSON.parse(userInfo) : userInfo;

        // Adds the button
        let addButton = (userInfo?: Types.SP.User | Types.SP.Group) => {
            // See if the picker is read only
            if (props.readOnly) {
                // Render a button
                Components.Button({
                    el: elSelectedUsers,
                    className: "mr-1 mb-1",
                    isSmall: true,
                    text: userInfo.Title
                });
            } else {
                // Render a button
                let btn = Components.Button({
                    data: userInfo,
                    el: elSelectedUsers,
                    className: "mr-1 mb-1",
                    isSmall: true,
                    text: userInfo.Title,
                    badge: {
                        className: "ml-2",
                        content: "&times;",
                        isPill: true,
                        type: Components.BadgeTypes.Light,
                        onClick: () => {
                            // Remove the button
                            elSelectedUsers.removeChild(btn.el);

                            // Call the event
                            props.onChange ? props.onChange(obj.getValue()) : null;
                        }
                    }
                });

                // Set the data attribute
                btn.el.setAttribute("data-user", JSON.stringify(userInfo.stringify()));
            }

            // Call the event
            props.onChange ? props.onChange(obj.getValue()) : null;
        }

        // See if we are allowing multiple users
        let allowMultple = typeof (props.multi) == "boolean" ? props.multi : false;
        if (!allowMultple) {
            // Remove existing users
            while (elSelectedUsers.firstChild) { elSelectedUsers.removeChild(elSelectedUsers.firstChild); }
        }

        // Ensure this is a user object
        if (user.EntityData) {
            // Ensure the group or user id is set
            if (user.EntityData.SPGroupID) {
                // Find the user by id
                Web().SiteGroups(parseInt(user.EntityData.SPGroupID)).execute(group => {
                    // Add the button
                    addButton(group);
                });
            } else if (user.EntityData.SPUserID) {
                // Find the user by id
                Web().getUserById(parseInt(user.EntityData.SPUserID)).execute(userInfo => {
                    // Add the button
                    addButton(userInfo);
                });
            } else {
                // Find the user
                Web().ensureUser(user.Key).execute(userInfo => {
                    // Add the button
                    addButton(userInfo);
                }, addButton);
            }
        } else {
            // Find the user by id
            Web().getUserById(user as any).execute(userInfo => {
                // Add the button
                addButton(userInfo);
            });
        }
    }

    // Method to search for the users
    let searchUsers = (el: HTMLElement, searchText: string, searchAll: boolean = true, spGroupId?: number) => {
        // Ensure 3 characters exist
        if (_filterText.length > 2) {
            // Search for the user
            Search().clientPeoplePickerSearchUser({
                MaximumEntitySuggestions: props.maxResults || 25,
                PrincipalSource: searchAll ? SPTypes.PrincipalSources.All : SPTypes.PrincipalSources.UserInfoList,
                PrincipalType: props.allowGroups ? SPTypes.PrincipalTypes.All : SPTypes.PrincipalTypes.User,
                QueryString: _filterText,
                SharePointGroupID: spGroupId
            }).execute((search) => {
                // Ensure the search text matches
                if (_filterText != searchText) { return; }

                // Clear the users results
                _users = [];

                // Set the menu header
                el.innerHTML = '<h6 class="dropdown-header">Search Results for "' + searchText + '"</h6>';
                el.innerHTML += '<div class="dropdown-divider"></div>';

                // See if no users were found
                if (search.ClientPeoplePickerSearchUser.length == 0) {
                    // Add a message
                    el.innerHTML += '<h6 class="dropdown-header">No results were found...</h6>';
                    return;
                }

                // Parse the users
                for (let i = 0; i < search.ClientPeoplePickerSearchUser.length; i++) {
                    let exists = false;
                    let user = search.ClientPeoplePickerSearchUser[i];

                    // Save the user
                    _users.push(user);

                    // Parse the selected users
                    for (let j = 0; j < elSelectedUsers.children.length; j++) {
                        let userInfo = JSON.parse(elSelectedUsers.children[j].getAttribute("data-user")) as Types.IPeoplePickerUser;

                        // See if this user is already selected
                        if (exists = user.Key == userInfo.Key) { break; }
                    }

                    // Ensure the user isn't already selected
                    if (exists) { continue; }

                    // Create the item
                    let elItem = document.createElement("a");
                    elItem.className = "dropdown-item";
                    elItem.href = "#";
                    elItem.innerHTML = user.DisplayText;
                    elItem.setAttribute("data-user", JSON.stringify(user));
                    el.appendChild(elItem);

                    // Set the click event
                    elItem.addEventListener("click", ev => {
                        let userInfo = (ev.currentTarget as HTMLAnchorElement).getAttribute("data-user");

                        // Add the user
                        addUser(userInfo)

                        // Hide the menu
                        _menu.hide();

                        // Clear the search text
                        elTextbox.querySelector("input").value = "";
                    });
                }
            });
        }
    }

    // Method to set the value
    let setValue = (selectedUsers: Array<string | Types.IPeoplePickerUser> = []) => {
        // Clear the selected users
        elSelectedUsers.innerHTML = "";

        // Parse the selected users
        for (let i = 0; i < selectedUsers.length; i++) {
            // Add the user
            addUser(selectedUsers[i]);
        }
    }

    // Create the people picker
    let elPeoplePicker = document.createElement("div");
    elPeoplePicker.className = "people-picker";

    // Create the menu
    let elMenu = document.createElement("div");
    elMenu.className = "dropdown-menu";
    elMenu.innerHTML = '<h6 class="dropdown-header">Search requires 3+ characters</h6>';

    // Add the selected users
    let elSelectedUsers = document.createElement("div");
    elSelectedUsers.style.position = "relative";
    elPeoplePicker.appendChild(elSelectedUsers);

    // Create the textbox
    let elTextbox = Components.InputGroup({
        placeholder: props.placeholder == null ? "Search" : props.placeholder,
        onChange: searchText => {
            // See if a value exists
            if (searchText) {
                // Set the filter text
                _filterText = searchText;

                // Set the header
                elMenu.innerHTML = ['<h6 class="dropdown-header">',
                    _filterText.length > 2 ? 'Searching for "' + _filterText + '"' : 'Search requires 3+ characters',
                    '</h6>'
                ].join('\n');

                // Wait 500ms before searching
                setTimeout(() => {
                    // Ensure the filters match
                    if (searchText == _filterText) {
                        // Search for the users
                        searchUsers(elMenu, searchText, props.searchLocal ? false : true, props.groupId);
                    }
                }, 500);
            } else {
                // Set the header
                elMenu.innerHTML = '<h6 class="dropdown-header">Search requires 3+ characters</h6>';
            }
        }
    }).el;
    props.readOnly ? elTextbox.classList.add("d-none") : null;
    elPeoplePicker.appendChild(elTextbox);

    // Create the popover menu
    _menu = Components.Popover({
        target: elTextbox.querySelector("input"),
        placement: Components.PopoverPlacements.BottomStart,
        options: {
            content: elMenu,
            trigger: "focus"
        }
    });

    // Set the value and ensure it's a 
    let value: any = props.value || [];
    if (typeof (props.value) != "object") {
        // Set the default selected users
        setValue([value]);
    } else {
        // See if this is a user object
        let userValue = value as Types.IPeoplePickerUser;
        if (userValue.EntityData) {
            // Set the value
            value = userValue.EntityData.SPGroupID || userValue.EntityData.SPUserID;

            // Set the default selected users
            setValue([value]);
        }
        // Else, see if the results exist
        else if (value.results) {
            let userIds = [];

            // Parse the results
            for (let i = 0; i < value.results.length; i++) {
                // Add the user id
                userIds.push(value.results[i].Id);
            }

            // Set the default selected users
            setValue(userIds);
        }
        else {
            // Set the default selected users
            setValue(value);
        }
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(elPeoplePicker);

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
        el: elPeoplePicker,
        getValue: () => {
            let selectedUsers = [];

            // Parse the selected users
            for (let i = 0; i < elSelectedUsers.children.length; i++) {
                let userInfo = JSON.parse(elSelectedUsers.children[i].getAttribute("data-user"));
                let user = Helper.parse(userInfo) as Types.SP.User | Types.SP.Group;

                // Add this user
                selectedUsers.push(user);
            }

            // Return the value
            return selectedUsers;
        },
        setValue
    };

    // Execute the assign to event
    props.assignTo ? props.assignTo(obj) : null;

    // Return the people picker object
    return obj;
}

// Extend the form controls
export const PeoplePickerControlType = 101;
Components.FormControlTypes["PeoplePicker"] = PeoplePickerControlType;
Components.CustomControls.registerType(PeoplePickerControlType, (props: IFormControlPropsPeoplePicker) => {
    let picker: IPeoplePicker = null;

    // Set the created method
    let onRendered = props.onControlRendered;
    props.onControlRendered = ctrl => {
        // Render a people picker
        picker = PeoplePicker({
            allowGroups: props.allowGroups,
            className: props.className,
            el: ctrl.el,
            groupId: props.groupId,
            label: props.label,
            maxResults: props.maxResults,
            multi: props.multi,
            placeholder: props.placeholder,
            readOnly: props.isReadonly,
            searchLocal: props.searchLocal,
            value: props.value
        });

        // See if the label exists
        let elLabel: HTMLElement = ctrl["_elLabel"];
        if (elLabel) {
            // Set the id and aria properties
            elLabel ? elLabel.id = (props.id || props.name) + "_label" : null;
            picker.el.querySelector("input").setAttribute("aria-labelledby", elLabel.id);
        }

        // Set the control
        ctrl.setControl(picker);

        // Call the custom render event
        onRendered ? onRendered(ctrl) : null;
    }

    // Register a people picker
    props.onGetValue = (ctrl) => {
        // Return the value
        return picker ? picker.getValue() : ctrl.value;
    };
});