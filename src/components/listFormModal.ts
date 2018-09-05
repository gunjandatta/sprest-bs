import { SPTypes, Types, Web } from "gd-sprest";
import { Button, CommandBar, Dialog, Panel, PanelTypes, Templates, Spinner } from "../fabric";
import { Fabric, ICommandButtonProps, IDropdown, IDropdownOption, IPanel } from "../fabric/types";
import { Field, ListForm } from ".";
import {
    IField, IListFormDisplay, IListFormEdit,
    IListFormPanel, IListFormPanelProps
} from "./types";

/**
 * Item Form
 */
export const ListFormPanel = (props: IListFormPanelProps): IListFormPanel => {
    let _formDisplay: IListFormDisplay = null;
    let _formEdit: IListFormEdit = null;
    let _formInfo: Types.Helper.IListFormResult = null;

    /**
     * Methods
     */

    // Add the menu click events
    let addMenuClickEvents = () => {
        let buttons: any = null;

        // Cancel buttons
        buttons = _panel.get()._panel.querySelectorAll(".ms-CommandButton-attachments");
        for (let i = 0; i < buttons.length; i++) {
            // Add a click event
            buttons[i].addEventListener("click", (ev: MouseEvent) => {
                // Disable postback
                ev ? ev.preventDefault() : null;

                // Display the attachments
                _dialog.open();
            });
        }

        // Cancel buttons
        buttons = _panel.get()._panel.querySelectorAll(".ms-CommandButton-cancel");
        for (let i = 0; i < buttons.length; i++) {
            // Add a click event
            buttons[i].addEventListener("click", (ev: MouseEvent) => {
                // Disable postback
                ev ? ev.preventDefault() : null;

                // Render the form
                renderForm(SPTypes.ControlMode.Display);
            });
        }

        // Close buttons
        buttons = _panel.get()._panel.querySelectorAll(".ms-CommandButton-close");
        for (let i = 0; i < buttons.length; i++) {
            // Add a click event
            buttons[i].addEventListener("click", (ev: MouseEvent) => {
                // Disable postback
                ev ? ev.preventDefault() : null;

                // Close the panel
                _panel.hide();
            });
        }

        // Set the edit button click event
        buttons = _panel.get()._panel.querySelectorAll(".ms-CommandButton-edit");
        for (let i = 0; i < buttons.length; i++) {
            // Add a click event
            buttons[i].addEventListener("click", (ev: MouseEvent) => {
                // Disable postback
                ev ? ev.preventDefault() : null;

                // Render the form
                renderForm(SPTypes.ControlMode.Edit);
            });
        }

        // Set the save button click event
        buttons = _panel.get()._panel.querySelectorAll(".ms-CommandButton-save");
        for (let i = 0; i < buttons.length; i++) {
            // Add a click event
            buttons[i].addEventListener("click", (ev: MouseEvent) => {
                // Disable postback
                ev ? ev.preventDefault() : null;

                // Validate the form
                if (validate() == false) {
                    // Display an error message
                    let errorMessage = _panel.get()._panel.querySelector(".form-error");
                    if (errorMessage) {
                        // Set the error message
                        errorMessage.innerHTML = "The form contains errors.";
                    }

                    // Return
                    return;
                }

                // Render a saving message
                let content = _panel.updateContent("");
                Spinner({
                    el: content,
                    text: "Saving the item..."
                });

                // Get the form values
                _formEdit.getValues().then(formValues => {
                    // Save the item
                    ListForm.saveItem(_formInfo, formValues).then(formInfo => {
                        // Update the form info
                        _formInfo = formInfo;

                        // Render the form
                        renderForm(SPTypes.ControlMode.Display);
                    });
                });
            });
        }
    }

    // Render the form
    let renderForm = (controlMode: number = SPTypes.ControlMode.Display) => {
        // Clear the form references
        _formDisplay = null;
        _formEdit = null;

        // Render the menu
        renderMenu(controlMode);

        // Update the panel content
        let content = _panel.updateContent([
            '<div class="ms-ListForm">',
            '<label class="ms-Label ms-fontColor-redDark form-error error"></label>',
            '<div></div>',
            '</div>'
        ].join('\n'));

        // Get the form element
        let elForm = content.children[0].children[1];

        // See if this is a new/edit form
        if (controlMode == SPTypes.ControlMode.Edit || controlMode == SPTypes.ControlMode.New) {
            // Render the edit form
            _formEdit = ListForm.renderEditForm({
                el: elForm,
                info: _formInfo,
            });
        } else {
            // Render the display form
            _formDisplay = ListForm.renderDisplayForm({
                el: elForm,
                info: _formInfo
            });
        }

        // Add the menu click event
        addMenuClickEvents();
    }

    // Render the menu
    let renderMenu = (controlMode: number) => {
        // Determine the main commands
        let mainCommands: Array<ICommandButtonProps> = null;
        switch (controlMode) {
            // Display
            case SPTypes.ControlMode.Display:
                mainCommands = [
                    {
                        className: "ms-CommandButton-edit",
                        icon: "Edit",
                        text: "Edit"
                    },
                    {
                        className: "ms-CommandButton-close",
                        icon: "Cancel",
                        text: "Close"
                    }
                ];

                // See if we are loading attachments
                if (props.loadAttachments) {
                    // Add the attachments button
                    mainCommands.push({
                        className: "ms-CommandButton-attachments",
                        icon: "Attach",
                        text: "Attachments"
                    });
                }
                break;

            // Edit
            case SPTypes.ControlMode.Edit:
                mainCommands = [
                    {
                        className: "ms-CommandButton-cancel",
                        icon: "Back",
                        text: "Cancel"
                    },
                    {
                        className: "ms-CommandButton-save",
                        icon: "Save",
                        text: "Update"
                    }
                ];
                break;

            // New
            case SPTypes.ControlMode.New:
                mainCommands = [
                    {
                        className: "ms-CommandButton-save",
                        icon: "Save",
                        text: "Save"
                    },
                    {
                        className: "ms-CommandButton-close",
                        icon: "Cancel",
                        text: "Close"
                    }
                ];
                break;
        }

        // Render the menu
        CommandBar({
            className: "ms-CommandBar--navBar",
            el: _panel.get()._panel.querySelector(".ms-Panel-header"),
            mainCommands,
            sideCommands: [
                {
                    className: "ms-CommandButton-close",
                    icon: "Cancel"
                }
            ]
        });
    }

    // Method to validate the form
    let validate = () => {
        // Get the fields
        let fields = _panel.get()._panel.querySelectorAll(".ms-ListForm > div");
        for (let i = 0; i < fields.length; i++) {
            // See if there is an error message
            let errorMessage = fields[i].querySelector(".ms-Label.error") as HTMLLabelElement;
            if (errorMessage && errorMessage.innerText) {
                // Form contains error
                return false;
            }
        }

        // Form is valid
        return true;
    }

    /**
     * Main
     */

    // Render the template
    props.el.innerHTML = "<div></div><div></div>";

    // Create the attachments dialog
    let _dialog = Dialog({
        el: props.el.children[0],
        showCloseButton: true,
        title: "Attachments"
    });

    // Create the panel
    let _panel = Panel({
        className: props.className,
        el: props.el.children[1],
        headerText: props.panelTitle,
        isBlocking: props.panelIsBlocking,
        panelType: typeof (props.panelType) === "number" ? props.panelType : PanelTypes.Large,
        showCloseButton: false
    });

    // Create an instance of the list form
    ListForm.create({
        cacheKey: props.cacheKey,
        excludeFields: props.excludeFields,
        fields: props.fields,
        item: props.item,
        itemId: props.itemId,
        listName: props.listName,
        loadAttachments: props.loadAttachments,
        query: props.query,
        webUrl: props.webUrl
    }).then(formInfo => {
        // Save the form information
        _formInfo = formInfo;

        // See if we are loading the attachments
        if (props.loadAttachments) {
            // Render the attachments view
            ListForm.renderAttachmentsView({
                el: _dialog.getContent(),
                info: _formInfo
            });
        }

        // See if the panel is open
        if (_panel.isOpen()) {
            // Render the panel
            renderForm(props.controlMode);
        }
    });

    // Return the panel
    return {
        getForm: () => { return _formDisplay || _formEdit; },
        show: (controlMode: number = SPTypes.ControlMode.Display) => {
            // See if the panel is open
            if (_panel.isOpen()) { return; }

            // See if the list info exists
            if (_formInfo) {
                // Show the form
                _panel.show();

                // Render the form
                renderForm(props.controlMode);
            } else {
                // Show the panel
                let content = _panel.show(_formInfo ? "" : "<div class='spinner'></div>");

                // Render a spinner
                Spinner({ el: content.querySelector(".spinner"), text: "Loading..." });
            }
        }
    }
}