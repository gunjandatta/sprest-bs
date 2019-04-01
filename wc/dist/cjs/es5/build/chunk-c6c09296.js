"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chunk_3f966420_js_1 = require("./chunk-3f966420.js");
var Toast = function () { function t() { } return t.prototype.render = function () { if (!this.el.hasAttribute("data-init")) {
    var t = chunk_3f966420_js_1.a(this.el, { bodyText: this.bodyText, className: this.className, closeButtonHidden: this.closeButtonHidden, closeButtonText: this.closeButtonText, el: this.el, headerImgClass: this.headerImgClass, headerImgSrc: this.headerImgSrc, headerText: this.headerText });
    GD.Components.Toast(t), this.el.setAttribute("data-init", "true");
} }, Object.defineProperty(t, "is", { get: function () { return "bs-toast"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "properties", { get: function () { return { bodyText: { type: String, attr: "body-text" }, className: { type: String, attr: "class-name" }, closeButtonHidden: { type: Boolean, attr: "close-button-hidden" }, closeButtonText: { type: Boolean, attr: "close-button-text" }, el: { elementRef: !0 }, headerImgClass: { type: String, attr: "header-img-class" }, headerImgSrc: { type: String, attr: "header-img-src" }, headerText: { type: String, attr: "header-text" } }; }, enumerable: !0, configurable: !0 }), t; }();
exports.a = Toast;
