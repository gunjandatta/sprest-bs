"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gd_bs_1 = require("gd-bs");
var helper_1 = require("./helper");
/**
 * WebPart Configuration
 */
exports.WPCfg = function (cfg, wp, props) {
    var _editForm = props.editForm || {};
    // Method to detect if the wiki page is being edited
    var isWikiPageInEdit = function () {
        var wikiPageMode = null;
        // Get the form
        var form = document.forms[MSOWebPartPageFormName];
        if (form) {
            // Get the wiki page mode
            wikiPageMode = form._wikiPageMode ? form._wikiPageMode.value : null;
        }
        // Determine if this wiki page is being edited
        return wikiPageMode == "Edit";
    };
    // The default render method when the page is edited
    var render = function () {
        var form = null;
        // Ensure we need to render this
        if (_editForm == null) {
            return;
        }
        // Render the template
        wp.el.innerHTML = [
            '<div></div>',
            '<div></div>'
        ].join('\n');
        // Render the button to toggle the modal
        gd_bs_1.Components.Button({
            el: wp.el.children[0],
            text: "Configure WebPart",
            type: gd_bs_1.Components.ButtonTypes.Secondary,
            onClick: function () { modal.show(); }
        });
        // Render the modal
        var modal = gd_bs_1.Components.Modal({
            el: wp.el.children[1],
            id: (wp.cfg.WebPartId || "") + "_modal",
            isCentered: true,
            isLarge: true,
            title: "Configuration Panel",
            onRenderBody: function (el) {
                var formControls = null;
                // Set the class name
                el.classList.add("wp-cfg-form");
                // See if the render form event exists
                if (_editForm.onRenderForm) {
                    // Call the event
                    formControls = _editForm.onRenderForm(wp) || [];
                }
                // See if there is a promise
                if (formControls.then) {
                    // Wait for the promise to be resolved
                    formControls.then(function (formControls) {
                        // Render the edit form
                        form = helper_1.Helper.renderEditForm(wp, formControls);
                    });
                }
                // Else, render the edit form
                else {
                    form = helper_1.Helper.renderEditForm(wp, formControls);
                }
            },
            onRenderFooter: function (el) {
                var actionButtons = [];
                // See if this is a wiki page
                var disableSaveButton = isWikiPageInEdit();
                if (disableSaveButton) {
                    // Get the webpart manager key name
                    var elWPMgrKeyName = document.getElementById("MSOSPWebPartManager_OldSelectedStorageKeyName");
                    // Set the flag
                    disableSaveButton = elWPMgrKeyName == null || elWPMgrKeyName.value.indexOf(cfg.WebPartId) < 0;
                    if (disableSaveButton) {
                        // Show a message
                        el.innerHTML = "<label>You must edit the webpart in order to save changes.</label>";
                        return;
                    }
                }
                // See if we are adding the save button
                if (_editForm.showSaveButton != false) {
                    // Add the save button
                    actionButtons.push({
                        isDisabled: disableSaveButton,
                        text: "Save",
                        onClick: function (ev) {
                            // Call the save event and set the configuration
                            var cfg = _editForm.onSave ? _editForm.onSave(wp.cfg, form) : null;
                            cfg = cfg ? cfg : wp.cfg;
                            // Save the configuration
                            helper_1.Helper.saveConfiguration(wp.wpId, props.cfgElementId, cfg).then(function () {
                                // Close the modal
                                modal.toggle();
                            });
                        }
                    });
                }
                // See if custom actions exist
                if (_editForm.actions) {
                    // Add the buttons
                    actionButtons = actionButtons.concat(_editForm.actions);
                }
                // Render the menu buttons
                gd_bs_1.Components.ButtonGroup({
                    buttons: actionButtons,
                    buttonType: gd_bs_1.Components.ButtonTypes.Secondary,
                    el: el,
                    isSmall: true
                });
            }
        });
    };
    // Render the webpart configuration
    render();
};
