"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gd_bs_1 = require("gd-bs");
var gd_sprest_1 = require("gd-sprest");
var listForm_1 = require("./listForm");
/**
 * List Form Dialog
 */
exports.ListFormDialog = function (props) {
    var form = null;
    var modalProps = props.modalProps || {};
    // Method to save the form
    var saveForm = function () {
        // Hide the form
        form.el.classList.add("d-none");
        // Hide the footer
        elFooter.classList.add("d-none");
        // Add a progress
        var progress = gd_bs_1.Components.Progress({
            el: form.el.parentElement,
            isAnimated: true,
            isStriped: true,
            size: 100
        }).el;
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Ensure the form is valid
            if (!form.isValid()) {
                // Remove the progress
                form.el.parentElement.removeChild(progress);
                // Show the form
                form.el.classList.remove("d-none");
                // Show the footer
                elFooter.classList.remove("d-none");
                // Reject the promise
                reject("Form is invalid");
                // Return
                return;
            }
            // Save the form
            form.save().then(function (item) {
                // Remove the progress
                form.el.parentElement.removeChild(progress);
                // Show the form
                form.el.classList.remove("d-none");
                // Show the footer
                elFooter.classList.remove("d-none");
                // Call the save event
                props.onSaved ? props.onSaved(item) : null;
                // Resolve the promise
                resolve(item);
            }, reject);
        });
    };
    // Update the properties
    modalProps.el = modalProps.el || props.el;
    modalProps.title = modalProps.title || props.listName;
    modalProps.body = gd_bs_1.Components.Progress({
        isAnimated: true,
        isStriped: true,
        label: "Loading the Form...",
        size: 100
    }).el.outerHTML;
    // Set the on render event
    modalProps.onRenderBody = function (el) {
        // Create an instance of the list form
        listForm_1.ListForm.create({
            excludeFields: props.excludeFields,
            fields: props.fields,
            item: props.item,
            itemId: props.itemId,
            listName: props.listName,
            loadAttachments: props.loadAttachments,
            query: props.query,
            webUrl: props.webUrl
        }).then(
        // Success
        function (info) {
            // Clear the modal body
            el.innerHTML = "";
            // Ensure the item exists, otherwise default to the new form
            var controlMode = props.item || props.itemId > 0 ? props.controlMode : gd_sprest_1.SPTypes.ControlMode.New;
            // Check the control mode
            switch (controlMode) {
                // Edit Form
                case gd_sprest_1.SPTypes.ControlMode.Edit:
                case gd_sprest_1.SPTypes.ControlMode.New:
                    // Render the list form
                    form = listForm_1.ListForm.renderEditForm({
                        controlMode: props.controlMode,
                        el: el,
                        onControlRendered: props.onControlRendered,
                        onControlRendering: props.onControlRendering,
                        onSaving: props.onSaving,
                        info: info,
                        template: props.template
                    });
                    break;
                // Default - Display Form
                default:
                    // Render the list form
                    listForm_1.ListForm.renderDisplayForm({
                        el: el,
                        info: info,
                        onControlRendered: props.onControlRendered,
                        onControlRendering: props.onControlRendering,
                        template: props.template
                    });
                    break;
            }
            // Display the actions
            elFooter.classList.remove("d-none");
        }, 
        // Error
        function () {
            // Log the error
            console.error("Error loading the list form information.");
            // Clear the modal
            el.innerHTML = "";
            // Display an error message
            gd_bs_1.Components.Alert({
                el: el,
                content: "Error loading the list form information.",
                type: gd_bs_1.Components.AlertTypes.Danger
            });
        });
    };
    // Set the render footer event
    modalProps.onRenderFooter = function (el) {
        // Parse the actions
        var actions = props.actions || null;
        if (actions == null) {
            // Default the actions based on the control mode
            switch (props.controlMode) {
                // Edit
                case (gd_sprest_1.SPTypes.ControlMode.Edit):
                    // Set the actions
                    actions = {
                        spacing: 3,
                        items: [
                            {
                                buttons: [{ text: "Close", onClick: function () { dialog.hide(); } }]
                            },
                            {
                                buttons: [{ text: "Update", onClick: saveForm }]
                            }
                        ]
                    };
                    break;
                // New
                case (gd_sprest_1.SPTypes.ControlMode.New):
                    // Set the actions
                    actions = {
                        spacing: 3,
                        items: [
                            {
                                buttons: [{ text: "Close", onClick: function () { dialog.hide(); } }]
                            },
                            {
                                buttons: [{ text: "Save", onClick: saveForm }]
                            }
                        ]
                    };
                    break;
                // Default - Display
                default:
                    actions = {
                        spacing: 3,
                        items: [
                            {
                                buttons: [{ text: "Close", onClick: function () { dialog.hide(); } }]
                            }
                        ]
                    };
                    break;
            }
        }
        // Set the element
        actions.el = el;
        // Render the toolbar
        gd_bs_1.Components.Toolbar(actions);
    };
    // Create the dialog
    var dialog = gd_bs_1.Components.Modal(modalProps);
    // Hide the actions
    var elFooter = dialog.el.querySelector(".modal-footer");
    elFooter.classList.add("d-none");
    // Add the class name
    dialog.el.classList.add("listformdialog");
    // Set the save method
    form == null ? null : dialog.saveForm = saveForm;
    // See if we are displaying it by default
    if (props.visible) {
        // Display the dialog
        dialog.show();
    }
    // Return the dialog
    return dialog;
};
