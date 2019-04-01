"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chunk_3f966420_js_1 = require("./chunk-3f966420.js");
var Tooltip = function () { function t() { } return t.prototype.render = function () { if (!this.el.hasAttribute("data-init")) {
    var t = chunk_3f966420_js_1.a(this.el, { className: this.className, el: this.el, type: this.type });
    GD.Components.Tooltip(t), this.el.setAttribute("data-init", "true");
} }, Object.defineProperty(t, "is", { get: function () { return "bs-tooltip"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "properties", { get: function () { return { className: { type: String, attr: "class-name" }, el: { elementRef: !0 }, type: { type: Number, attr: "type" } }; }, enumerable: !0, configurable: !0 }), t; }();
exports.a = Tooltip;
