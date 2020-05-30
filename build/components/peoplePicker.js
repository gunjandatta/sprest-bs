"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gd_bs_1 = require("gd-bs");
var gd_sprest_1 = require("gd-sprest");
/**
 * People Picker
 */
exports.PeoplePicker = function (props) {
    var _filterText = null;
    var _users = [];
    // Method to add a user
    var addUser = function (userInfo) {
        var user = typeof (userInfo) === "string" ? JSON.parse(userInfo) : userInfo;
        // Adds the button
        var addButton = function (userInfo) {
            // See if the picker is read only
            if (props.readOnly) {
                // Render a button
                gd_bs_1.Components.Button({
                    el: elSelectedUsers,
                    className: "mr-1 mb-1",
                    isSmall: true,
                    text: userInfo.Title
                });
            }
            else {
                // Render a popover button
                var btnUser_1 = gd_bs_1.Components.Popover({
                    el: elSelectedUsers,
                    isDismissible: true,
                    type: gd_bs_1.Components.PopoverTypes.Bottom,
                    btnProps: {
                        className: "mr-1",
                        isSmall: true,
                        text: userInfo.Title
                    },
                    options: {
                        html: true,
                        content: gd_bs_1.Components.Button({
                            data: userInfo,
                            isSmall: true,
                            text: "Remove",
                            type: gd_bs_1.Components.ButtonTypes.Danger,
                            onClick: function (btn) {
                                // Remove the button
                                elSelectedUsers.removeChild(btnUser_1.el);
                            }
                        }).el
                    }
                });
                // Set the data attribute
                btnUser_1.el.setAttribute("data-user", JSON.stringify(userInfo.stringify()));
            }
        };
        // See if we are allowing multiple users
        var allowMultple = typeof (props.multi) == "boolean" ? props.multi : false;
        if (!allowMultple) {
            // Remove existing users
            while (elSelectedUsers.firstChild) {
                elSelectedUsers.removeChild(elSelectedUsers.firstChild);
            }
        }
        // Ensure this is a user object
        if (user.EntityData) {
            // Ensure the group or user id is set
            if (user.EntityData.SPGroupID) {
                // Find the user by id
                gd_sprest_1.Web().SiteGroups(parseInt(user.EntityData.SPGroupID)).execute(function (group) {
                    // Add the button
                    addButton(group);
                });
            }
            else if (user.EntityData.SPUserID) {
                // Find the user by id
                gd_sprest_1.Web().getUserById(parseInt(user.EntityData.SPUserID)).execute(function (userInfo) {
                    // Add the button
                    addButton(userInfo);
                });
            }
            else {
                // Find the user
                gd_sprest_1.Web().ensureUser(user.Key).execute(function (userInfo) {
                    // Add the button
                    addButton(userInfo);
                }, addButton);
            }
        }
        else {
            // Find the user by id
            gd_sprest_1.Web().getUserById(user).execute(function (userInfo) {
                // Add the button
                addButton(userInfo);
            });
        }
    };
    // Method to search for the users
    var searchUsers = function (el, searchText, searchAll) {
        if (searchAll === void 0) { searchAll = true; }
        // Ensure 3 characters exist
        if (_filterText.length > 2) {
            // Search for the user
            gd_sprest_1.PeoplePicker().clientPeoplePickerSearchUser({
                MaximumEntitySuggestions: 15,
                PrincipalSource: searchAll ? gd_sprest_1.SPTypes.PrincipalSources.All : gd_sprest_1.SPTypes.PrincipalSources.UserInfoList,
                PrincipalType: props.allowGroups ? gd_sprest_1.SPTypes.PrincipalTypes.All : gd_sprest_1.SPTypes.PrincipalTypes.User,
                QueryString: _filterText
            }).execute(function (search) {
                // Ensure the search text matches
                if (_filterText != searchText) {
                    return;
                }
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
                for (var i = 0; i < search.ClientPeoplePickerSearchUser.length; i++) {
                    var exists = false;
                    var user = search.ClientPeoplePickerSearchUser[i];
                    // Save the user
                    _users.push(user);
                    // Parse the selected users
                    for (var j = 0; j < elSelectedUsers.children.length; j++) {
                        var userInfo = JSON.parse(elSelectedUsers.children[j].getAttribute("data-user"));
                        // See if this user is already selected
                        if (exists = user.Key == userInfo.Key) {
                            break;
                        }
                    }
                    // Ensure the user isn't already selected
                    if (exists) {
                        continue;
                    }
                    // Create the item
                    var elItem = document.createElement("a");
                    elItem.className = "dropdown-item";
                    elItem.href = "#";
                    elItem.innerHTML = user.DisplayText;
                    elItem.setAttribute("data-user", JSON.stringify(user));
                    el.appendChild(elItem);
                    // Set the click event
                    elItem.addEventListener("click", function (ev) {
                        var userInfo = ev.currentTarget.getAttribute("data-user");
                        // Add the user
                        addUser(userInfo);
                        // Hide the menu
                        elMenu.classList.remove("show");
                        // Clear the search text
                        elTextbox.querySelector("input").value = "";
                    });
                }
            });
        }
    };
    // Method to set the value
    var setValue = function (selectedUsers) {
        if (selectedUsers === void 0) { selectedUsers = []; }
        // Clear the selected users
        elSelectedUsers.innerHTML = "";
        // Parse the selected users
        for (var i = 0; i < selectedUsers.length; i++) {
            // Add the user
            addUser(selectedUsers[i]);
        }
    };
    // Create the people picker
    var elPeoplePicker = document.createElement("div");
    elPeoplePicker.className = "people-picker";
    // Create the textbox
    var elTextbox = gd_bs_1.Components.InputGroup({
        onChange: function (searchText) {
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
                if (!elMenu.classList.contains("show")) {
                    elMenu.classList.add("show");
                }
                // Wait 500ms before searching
                setTimeout(function () {
                    // Ensure the filters match
                    if (searchText == _filterText) {
                        // Search for the users
                        searchUsers(elMenu, searchText, props.searchLocal ? false : true);
                    }
                }, 500);
            }
            else {
                // Hide the dropdown
                if (elMenu.classList.contains("show")) {
                    elMenu.classList.remove("show");
                }
            }
        }
    }).el;
    props.readOnly ? elTextbox.classList.add("d-none") : null;
    elPeoplePicker.appendChild(elTextbox);
    // Add the dropdown menu
    var elMenu = document.createElement("div");
    elMenu.className = "dropdown-menu";
    elMenu.style.position = "relative";
    elPeoplePicker.appendChild(elMenu);
    // Add the selected users
    var elSelectedUsers = document.createElement("div");
    elSelectedUsers.style.position = "relative";
    elPeoplePicker.appendChild(elSelectedUsers);
    // Set the value and ensure it's a 
    var value = props.value || [];
    if (typeof (props.value) != "object") {
        // Set the default selected users
        setValue([value]);
    }
    else {
        // See if this is a user object
        var userValue = value;
        if (userValue.EntityData) {
            // Set the value
            value = userValue.EntityData.SPGroupID || userValue.EntityData.SPUserID;
            // Set the default selected users
            setValue([value]);
        }
        else {
            // Set the default selected users
            setValue(value);
        }
    }
    // Create the element
    var el = document.createElement("div");
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
        el = props.el;
    }
    else {
        // Set the bootstrap class
        el.classList.add("bs");
    }
    // Return the people picker
    return {
        el: elPeoplePicker,
        getValue: function () {
            var selectedUsers = [];
            // Parse the selected users
            for (var i = 0; i < elSelectedUsers.children.length; i++) {
                var userInfo = JSON.parse(elSelectedUsers.children[i].getAttribute("data-user"));
                var user = gd_sprest_1.Helper.parse(userInfo);
                // Add this user
                selectedUsers.push(user);
            }
            // Return the value
            return selectedUsers;
        },
        setValue: setValue
    };
};
// Customize the form control
exports.PeoplePickerControlType = 100;
gd_bs_1.Components.FormControlTypes["PeoplePicker"] = exports.PeoplePickerControlType;
gd_bs_1.Components.CustomControls.registerType(exports.PeoplePickerControlType, function (props) {
    var picker = null;
    // Set the created method
    var onRendered = props.onControlRendered;
    props.onControlRendered = function (ctrl) {
        // Render a people picker
        picker = exports.PeoplePicker({
            allowGroups: props.allowGroups,
            className: props.className,
            el: ctrl.el,
            label: props.label,
            multi: props.multi,
            readOnly: props.isReadonly,
            searchLocal: props.searchLocal,
            value: props.value
        });
        // Call the custom render event
        onRendered ? onRendered(ctrl) : null;
    };
    // Register a people picker
    props.onGetValue = function () {
        // Return the value
        return picker.getValue();
    };
});
