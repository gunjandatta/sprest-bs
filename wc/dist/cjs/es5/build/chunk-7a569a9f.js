"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chunk_3f966420_js_1 = require("./chunk-3f966420.js");
var ListGroup = function () { function e() { } return e.prototype.render = function () { if (!this.el.hasAttribute("data-init")) {
    var e = chunk_3f966420_js_1.a(this.el, { className: this.className, colWidth: this.colWidth, el: this.el, enableFade: this.enableFade, isFlush: this.isFlush, isTabs: this.isTabs });
    GD.Components.ListGroup(e), this.el.setAttribute("data-init", "true");
} }, Object.defineProperty(e, "is", { get: function () { return "bs-list-group"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { className: { type: String, attr: "class-name" }, colWidth: { type: Number, attr: "col-width" }, el: { elementRef: !0 }, enableFade: { type: Boolean, attr: "enable-fade" }, isFlush: { type: Boolean, attr: "is-flush" }, isTabs: { type: Boolean, attr: "is-tabs" } }; }, enumerable: !0, configurable: !0 }), e; }();
exports.a = ListGroup;
