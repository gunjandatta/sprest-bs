"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getProps = function (r, e) { void 0 === e && (e = {}); var n = {}, o = (r.innerHTML || "").trim(); if (o.length > 0)
    try {
        n = new Function(o)(), r.innerHTML = "";
    }
    catch (r) {
        console.error("Error parsing the JS to get the properties."), console.error(o);
    } for (var t in e)
    null == n[t] && (n[t] = e[t]); return n; };
exports.a = getProps;
