"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chunk_3f966420_js_1 = require("./chunk-3f966420.js");
var ButtonGroup = function () { function t() { } return t.prototype.render = function () { if (!this.el.hasAttribute("data-init")) {
    var t = chunk_3f966420_js_1.a(this.el, { buttonType: this.buttonType, className: this.className, el: this.el, id: this.id, isLarge: this.isLarge, isSmall: this.isSmall, isVertical: this.isVertical, label: this.label });
    this.el.removeAttribute("id"), GD.Components.ButtonGroup(t), this.el.setAttribute("data-init", "true");
} }, Object.defineProperty(t, "is", { get: function () { return "bs-button-group"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "properties", { get: function () { return { buttonType: { type: Number, attr: "button-type" }, className: { type: String, attr: "class-name" }, el: { elementRef: !0 }, id: { type: String, attr: "id" }, isLarge: { type: Boolean, attr: "is-large" }, isSmall: { type: Boolean, attr: "is-small" }, isVertical: { type: Boolean, attr: "is-vertical" }, label: { type: String, attr: "label" } }; }, enumerable: !0, configurable: !0 }), t; }();
exports.a = ButtonGroup;
