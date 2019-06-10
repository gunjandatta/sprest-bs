"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chunk_3f966420_js_1 = require("./chunk-3f966420.js");
var chunk_4fbd7d04_js_1 = require("./chunk-4fbd7d04.js");
var WPList = function () { function e() { } return e.prototype.render = function () { if (!this.el.hasAttribute("data-init")) {
    var e = chunk_3f966420_js_1.a(this.el, { camlQuery: this.camlQuery, cfgElementId: this.cfgElementId, className: this.className, elementId: this.elementId, wpClassName: this.wpClassName });
    this.el.removeAttribute("id"), chunk_4fbd7d04_js_1.a(this.el, e.elementId), chunk_4fbd7d04_js_1.a(this.el, e.cfgElementId, !0), $REST.WebParts.WPList(e), this.el.setAttribute("data-init", "true");
} }, Object.defineProperty(e, "is", { get: function () { return "bs-webpart-list"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { camlQuery: { type: String, attr: "caml-query" }, cfgElementId: { type: String, attr: "cfg-element-id" }, className: { type: String, attr: "class-name" }, el: { elementRef: !0 }, elementId: { type: String, attr: "element-id" }, wpClassName: { type: String, attr: "wp-class-name" } }; }, enumerable: !0, configurable: !0 }), e; }();
exports.a = WPList;
