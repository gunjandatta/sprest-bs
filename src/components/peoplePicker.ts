import { Components } from "gd-bs";
import { PeoplePicker as Search, SP, SPTypes } from "gd-sprest";
import { IPeoplePicker, IPeoplePickerProps } from "./types/peoplePicker";

/**
 * People Picker
 */
export const PeoplePicker = (props: IPeoplePickerProps): IPeoplePicker => {
    let _filterText: string = null;
    let _users = [];

    // Method to add a user
    let addUser = (userInfo: SP.IPeoplePickerUser | string) => {
        let user: SP.IPeoplePickerUser = typeof (userInfo) === "string" ? JSON.parse(userInfo) : userInfo;

        // Render a popover button
        let btnUser = Components.Popover({
            el: elSelectedUsers,
            isDismissible: true,
            type: Components.PopoverTypes.Bottom,
            btnProps: {
                className: "mr-1",
                isSmall: true,
                text: user.DisplayText
            },
            options: {
                html: true,
                content: Components.Button({
                    data: user,
                    isSmall: true,
                    text: "Remove",
                    type: Components.ButtonTypes.Danger,
                    onClick: (btn) => {
                        // Remove the button
                        elSelectedUsers.removeChild(btnUser.el);
                    }
                }).el
            }
        });

        // Set the data attribute
        btnUser.el.setAttribute("data-user", JSON.stringify(user));
    }

    // Method to search for the users
    let searchUsers = (el: HTMLElement, searchText: string, searchAll: boolean = true) => {
        // Ensure 3 characters exist
        if (_filterText.length > 2) {
            // Search for the user
            Search().clientPeoplePickerSearchUser({
                MaximumEntitySuggestions: 15,
                PrincipalSource: searchAll ? SPTypes.PrincipalSources.All : SPTypes.PrincipalSources.UserInfoList,
                PrincipalType: props.allowGroups ? SPTypes.PrincipalTypes.All : SPTypes.PrincipalTypes.User,
                QueryString: _filterText
            }).execute((search) => {
                //let value = getValue();

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
                        let userInfo = JSON.parse(elSelectedUsers.children[j].getAttribute("data-user")) as SP.IPeoplePickerUser;

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
                        elMenu.classList.remove("show");

                        // Clear the search text
                        elTextbox.querySelector("input").value = "";
                    });
                }
            });
        }
    }

    // Method to set the value
    let setValue = (selectedUsers: Array<string | SP.IPeoplePickerUser> = []) => {
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

    // Create the textbox
    let elTextbox = Components.InputGroup({
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

                // Show the dropdown
                if (!elMenu.classList.contains("show")) { elMenu.classList.add("show"); }

                // Wait 500ms before searching
                setTimeout(() => {
                    // Ensure the filters match
                    if (searchText == _filterText) {
                        // Search for the users
                        searchUsers(elMenu, searchText, props.searchLocal ? false : true);
                    }
                }, 500);
            } else {
                // Hide the dropdown
                if (elMenu.classList.contains("show")) { elMenu.classList.remove("show"); }
            }
        }
    }).el;
    elPeoplePicker.appendChild(elTextbox);

    // Add the dropdown menu
    let elMenu = document.createElement("div");
    elMenu.className = "dropdown-menu";
    elPeoplePicker.appendChild(elMenu);

    // Add the selected users
    let elSelectedUsers = document.createElement("div");
    elPeoplePicker.appendChild(elSelectedUsers);

    // Set the default selected users
    setValue(props.value);

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

    // Return the people picker
    return {
        el: elPeoplePicker,
        getValue: () => {
            let selectedUsers = [];

            // Parse the selected users
            for (let i = 0; i < elSelectedUsers.children.length; i++) {
                let userInfo = JSON.parse(elSelectedUsers.children[i].getAttribute("data-user")) as SP.IPeoplePickerUser;

                // Add this user
                selectedUsers.push(userInfo);
            }

            // Return the value
            return selectedUsers;
        },
        setValue
    }
}