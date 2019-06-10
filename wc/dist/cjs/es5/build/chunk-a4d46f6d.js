"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chunk_3f966420_js_1 = require("./chunk-3f966420.js");
var Jumbotron = function () { function t() { } return t.prototype.render = function () { if (!this.el.hasAttribute("data-init")) {
    var t = chunk_3f966420_js_1.a(this.el, { className: this.className, content: this.content, el: this.el, isFluid: this.isFluid, lead: this.lead, title: this.el.getAttribute("title") });
    GD.Components.Jumbotron(t), this.el.setAttribute("data-init", "true");
} }, Object.defineProperty(t, "is", { get: function () { return "bs-jumbotron"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "properties", { get: function () { return { className: { type: String, attr: "class-name" }, content: { type: String, attr: "content" }, el: { elementRef: !0 }, isFluid: { type: Boolean, attr: "is-fluid" }, lead: { type: String, attr: "lead" } }; }, enumerable: !0, configurable: !0 }), t; }();
exports.a = Jumbotron;
