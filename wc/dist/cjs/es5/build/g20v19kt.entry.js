"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chunk_3f966420_js_1 = require("./chunk-3f966420.js");
var Spinner = function () { function t() { } return t.prototype.render = function () { if (!this.el.hasAttribute("data-init")) {
    var t = chunk_3f966420_js_1.a(this.el, { className: this.className, el: this.el, isGrowing: this.isGrowing, isSmall: this.isSmall, text: this.text, type: this.type });
    GD.Components.Spinner(t), this.el.setAttribute("data-init", "true");
} }, Object.defineProperty(t, "is", { get: function () { return "bs-spinner"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "properties", { get: function () { return { className: { type: String, attr: "class-name" }, el: { elementRef: !0 }, isGrowing: { type: Boolean, attr: "is-growing" }, isSmall: { type: Boolean, attr: "is-small" }, text: { type: String, attr: "text" }, type: { type: Number, attr: "type" } }; }, enumerable: !0, configurable: !0 }), t; }();
exports.BsSpinner = Spinner;
