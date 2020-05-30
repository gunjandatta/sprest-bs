"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = require("../list");
var wpCfg_1 = require("./wpCfg");
/**
 * List Fields WebPart
 */
exports.WPListFields = function (props) {
    // Set the edit form
    props ? props.editForm = wpCfg_1.WPListFieldsEditForm(props.editForm) : null;
    // Create the webpart and return it
    return list_1.WPList(props);
};
