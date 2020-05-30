"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gd_bs_1 = require("gd-bs");
var datetime_1 = require("./datetime");
var field_1 = require("./field");
var listForm_1 = require("./listForm");
var listFormDialog_1 = require("./listFormDialog");
var peoplePicker_1 = require("./peoplePicker");
// Extend the components
gd_bs_1.Components["DateTime"] = datetime_1.DateTime;
gd_bs_1.Components["Field"] = field_1.Field;
gd_bs_1.Components["ListForm"] = listForm_1.ListForm;
gd_bs_1.Components["ListFormDialog"] = listFormDialog_1.ListFormDialog;
gd_bs_1.Components["PeoplePicker"] = peoplePicker_1.PeoplePicker;
// Export the components
exports.default = gd_bs_1.Components;
