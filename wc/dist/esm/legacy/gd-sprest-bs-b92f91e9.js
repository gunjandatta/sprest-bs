var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var BUILD = { "allRenderFn": true, "cmpDidLoad": false, "cmpDidUnload": false, "cmpDidUpdate": false, "cmpDidRender": false, "cmpWillLoad": false, "cmpWillUpdate": false, "cmpWillRender": false, "connectedCallback": false, "disconnectedCallback": false, "element": false, "event": false, "hasRenderFn": true, "lifecycle": false, "hostListener": false, "hostListenerTargetWindow": false, "hostListenerTargetDocument": false, "hostListenerTargetBody": false, "hostListenerTargetParent": false, "hostListenerTarget": false, "member": true, "method": false, "mode": false, "noVdomRender": true, "observeAttribute": true, "prop": true, "propBoolean": true, "propNumber": true, "propString": true, "propMutable": false, "reflect": false, "scoped": false, "shadowDom": false, "slot": false, "slotRelocation": false, "state": false, "style": false, "svg": false, "updatable": true, "vdomAttribute": true, "vdomClass": true, "vdomFunctional": true, "vdomKey": true, "vdomListener": true, "vdomRef": true, "vdomRender": false, "vdomStyle": true, "vdomText": true, "watchCallback": false, "taskQueue": true, "lazyLoad": true, "hydrateServerSide": false, "cssVarShim": true, "hydrateClientSide": false, "isDebug": false, "isDev": false, "lifecycleDOMEvents": false, "profile": false, "hotModuleReplacement": false, "constructableCSS": true, "cssAnnotations": true };
var NAMESPACE = 'gd-sprest-bs';
var win = window;
var doc = document;
var plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    raf: function (h) { return requestAnimationFrame(h); },
    ael: function (el, eventName, listener, opts) { return el.addEventListener(eventName, listener, opts); },
    rel: function (el, eventName, listener, opts) { return el.removeEventListener(eventName, listener, opts); },
};
var hostRefs = new WeakMap();
var getHostRef = function (ref) { return hostRefs.get(ref); };
var registerInstance = function (lazyInstance, hostRef) { return hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef); };
var registerHost = function (elm) {
    {
        var hostRef_1 = {
            $flags$: 0,
            $hostElement$: elm,
            $instanceValues$: new Map()
        };
        hostRef_1.$onReadyPromise$ = new Promise(function (r) { return hostRef_1.$onReadyResolve$ = r; });
        return hostRefs.set(elm, hostRef_1);
    }
};
var consoleError = function (e) { return console.error(e); };
var loadModule = function (cmpMeta, hostRef, hmrVersionId) {
    // loadModuleImport
    var bundleId = cmpMeta.$lazyBundleIds$;
    return import(
    /* webpackInclude: /\.entry\.js$/ */
    /* webpackExclude: /\.(system|cjs)\.entry\.js$/ */
    /* webpackMode: "lazy" */
    "./" + bundleId + ".entry.js" + '').then(function (importedModule) { return importedModule[cmpMeta.$tagName$.replace(/-/g, '_')]; }, consoleError);
};
var cssVarShim = win.__stencil_cssshim;
var queueCongestion = 0;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueDomWritesLow = [];
var queueTask = function (queue) { return function (cb) {
    // queue dom reads
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        plt.raf(flush);
    }
}; };
var consume = function (queue) {
    for (var i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
var consumeTimeout = function (queue, timeout) {
    var i = 0;
    var ts = 0;
    while (i < queue.length && (ts = performance.now()) < timeout) {
        try {
            queue[i++](ts);
        }
        catch (e) {
            consoleError(e);
        }
    }
    if (i === queue.length) {
        queue.length = 0;
    }
    else if (i !== 0) {
        queue.splice(0, i);
    }
};
var flush = function () {
    queueCongestion++;
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    var timeout = (plt.$flags$ & 6 /* queueMask */) === 2 /* appLoaded */
        ? performance.now() + (7 * Math.ceil(queueCongestion * (1.0 / 22.0)))
        : Infinity;
    // DOM WRITES!!!
    consumeTimeout(queueDomWrites, timeout);
    consumeTimeout(queueDomWritesLow, timeout);
    if (queueDomWrites.length > 0) {
        queueDomWritesLow.push.apply(queueDomWritesLow, queueDomWrites);
        queueDomWrites.length = 0;
    }
    if (queuePending = ((queueDomReads.length + queueDomWrites.length + queueDomWritesLow.length) > 0)) {
        // still more to do yet, but we've run out of time
        // let's let this thing cool off and try again in the next tick
        plt.raf(flush);
    }
    else {
        queueCongestion = 0;
    }
};
var writeTask = /*@__PURE__*/ queueTask(queueDomWrites);
var isComplexType = function (o) { return ['object', 'function'].includes(typeof o); };
function getDynamicImportFunction(namespace) {
    return "__sc_import_" + namespace.replace(/\s|-/g, '_');
}
var patchEsm = function () {
    // @ts-ignore
    if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return import('./css-shim-f7ddb189-f7ddb189.js');
    }
    return Promise.resolve();
};
var patchBrowser = function () { return __awaiter(_this, void 0, void 0, function () {
    var importMeta, scriptElm, resourcesUrl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                importMeta = "";
                if (!(importMeta !== '')) return [3 /*break*/, 1];
                return [2 /*return*/, Promise.resolve(new URL('.', importMeta).href)];
            case 1:
                scriptElm = Array.from(doc.querySelectorAll('script')).find(function (s) { return (s.src.includes("/" + NAMESPACE + ".esm.js") ||
                    s.getAttribute('data-namespace') === NAMESPACE); });
                resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href));
                patchDynamicImport(resourcesUrl.href);
                if (!!window.customElements) return [3 /*break*/, 3];
                // @ts-ignore
                return [4 /*yield*/, import('./dom-a0c82e31-a0c82e31.js')];
            case 2:
                // @ts-ignore
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/, resourcesUrl.href];
        }
    });
}); };
var patchDynamicImport = function (base) {
    var importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        win[importFunctionName] = new Function('w', 'return import(w);');
    }
    catch (e) {
        var moduleMap_1 = new Map();
        win[importFunctionName] = function (src) {
            var url = new URL(src, base).href;
            var mod = moduleMap_1.get(url);
            if (!mod) {
                var script_1 = doc.createElement('script');
                script_1.type = 'module';
                script_1.src = URL.createObjectURL(new Blob(["import * as m from '" + url + "'; window." + importFunctionName + ".m = m;"], { type: 'application/javascript' }));
                mod = new Promise(function (resolve) {
                    script_1.onload = function () {
                        resolve(win[importFunctionName].m);
                        script_1.remove();
                    };
                });
                moduleMap_1.set(url, mod);
                doc.head.appendChild(script_1);
            }
            return mod;
        };
    }
};
var HYDRATED_CLASS = 'hydrated';
var scheduleUpdate = function (elm, hostRef, cmpMeta, isInitialLoad) { return __awaiter(_this, void 0, void 0, function () {
    var instance;
    return __generator(this, function (_a) {
        {
            hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
        }
        instance = hostRef.$lazyInstance$;
        // there is no ancestorc omponent or the ancestor component
        // has already fired off its lifecycle update then
        // fire off the initial update
        {
            writeTask(function () { return updateComponent(elm, hostRef, cmpMeta, instance); });
        }
        return [2 /*return*/];
    });
}); };
var updateComponent = function (elm, hostRef, cmpMeta, instance, isInitialLoad) {
    // updateComponent
    {
        hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
    }
    {
        {
            elm.textContent = instance.render();
        }
    }
    if (cssVarShim) {
        cssVarShim.updateHost(elm);
    }
    {
        hostRef.$flags$ |= 2 /* hasRendered */;
    }
    postUpdateComponent(elm, hostRef);
};
var postUpdateComponent = function (elm, hostRef, ancestorsActivelyLoadingChildren) {
    if (!elm['s-al']) {
        var instance = hostRef.$lazyInstance$;
        var ancestorComponent = hostRef.$ancestorComponent$;
        if (!(hostRef.$flags$ & 512 /* hasLoadedComponent */)) {
            hostRef.$flags$ |= 512 /* hasLoadedComponent */;
            {
                // DOM WRITE!
                // add the css class that this element has officially hydrated
                elm.classList.add(HYDRATED_CLASS);
            }
            {
                hostRef.$onReadyResolve$(elm);
            }
            if (!ancestorComponent) {
                // on appload
                // we have finish the first big initial render
                doc.documentElement.classList.add(HYDRATED_CLASS);
                {
                    setTimeout(function () { return plt.$flags$ |= 2; } /* appLoaded */, 999);
                }
            }
        }
        // ( •_•)
        // ( •_•)>⌐■-■
        // (⌐■_■)
    }
};
var disconnectedCallback = function (elm) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        var hostRef = getHostRef(elm);
        // clear CSS var-shim tracking
        if (cssVarShim) {
            cssVarShim.removeHost(elm);
        }
        var instance = hostRef.$lazyInstance$;
    }
};
var parsePropertyValue = function (propValue, propType) {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if (propType & 4 /* Boolean */) {
            // per the HTML spec, any string value means it is a boolean true value
            // but we'll cheat here and say that the string "false" is the boolean false
            return (propValue === 'false' ? false : propValue === '' || !!propValue);
        }
        if (propType & 2 /* Number */) {
            // force it to be a number
            return parseFloat(propValue);
        }
        if (propType & 1 /* String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
var getValue = function (ref, propName) { return getHostRef(ref).$instanceValues$.get(propName); };
var setValue = function (ref, propName, newVal, cmpMeta) {
    // check our new property value against our internal value
    var hostRef = getHostRef(ref);
    var elm = hostRef.$hostElement$;
    var oldVal = hostRef.$instanceValues$.get(propName);
    var flags = hostRef.$flags$;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    if (newVal !== oldVal && (!(flags & 8 /* isConstructingInstance */) || oldVal === undefined)) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (hostRef.$lazyInstance$) {
            if ((flags & (4 /* isActiveRender */ | 2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(elm, hostRef, cmpMeta);
            }
        }
    }
};
var proxyComponent = function (Cstr, cmpMeta, flags) {
    if (cmpMeta.$members$) {
        // It's better to have a const than two Object.entries()
        var members = Object.entries(cmpMeta.$members$);
        var prototype_1 = Cstr.prototype;
        members.forEach(function (_a) {
            var memberName = _a[0], memberFlags = _a[1][0];
            if ((memberFlags & 31) || (BUILD.state)) {
                // proxyComponent - prop
                Object.defineProperty(prototype_1, memberName, {
                    get: function () {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set: function (newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true
                });
            }
        });
        if (flags & 1) {
            var attrNameToPropName_1 = new Map();
            prototype_1.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                var propName = attrNameToPropName_1.get(attrName);
                this[propName] = newValue === null && typeof this[propName] === 'boolean'
                    ? false
                    : newValue;
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(function (_a) {
                var _ = _a[0], m = _a[1];
                return m[0] & 15;
            } /* HasAttribute */) // filter to only keep props that should match attributes
                .map(function (_a) {
                var propName = _a[0], m = _a[1];
                var attrName = m[1] || propName;
                attrNameToPropName_1.set(attrName, propName);
                return attrName;
            });
        }
    }
    return Cstr;
};
var initializeComponent = function (elm, hostRef, cmpMeta, hmrVersionId, Cstr) { return __awaiter(_this, void 0, void 0, function () {
    var ancestorComponent;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!((hostRef.$flags$ & 256 /* hasInitializedComponent */) === 0)) return [3 /*break*/, 2];
                // we haven't initialized this element yet
                hostRef.$flags$ |= 256 /* hasInitializedComponent */;
                return [4 /*yield*/, loadModule(cmpMeta)];
            case 1:
                // lazy loaded components
                // request the component's implementation to be
                // wired up with the host element
                Cstr = _a.sent();
                if (!Cstr.isProxied) {
                    proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
                    Cstr.isProxied = true;
                }
                // ok, time to construct the instance
                // but let's keep track of when we start and stop
                // so that the getters/setters don't incorrectly step on data
                {
                    hostRef.$flags$ |= 8 /* isConstructingInstance */;
                }
                // construct the lazy-loaded component implementation
                // passing the hostRef is very important during
                // construction in order to directly wire together the
                // host element and the lazy-loaded instance
                try {
                    new Cstr(hostRef);
                }
                catch (e) {
                    consoleError(e);
                }
                {
                    hostRef.$flags$ &= ~8 /* isConstructingInstance */;
                }
                fireConnectedCallback();
                _a.label = 2;
            case 2:
                ancestorComponent = hostRef.$ancestorComponent$;
                {
                    scheduleUpdate(elm, hostRef, cmpMeta);
                }
                return [2 /*return*/];
        }
    });
}); };
var fireConnectedCallback = function (instance) {
};
var connectedCallback = function (elm, cmpMeta) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        // connectedCallback
        var hostRef = getHostRef(elm);
        if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* hasConnected */;
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).forEach(function (_a) {
                    var memberName = _a[0], memberFlags = _a[1][0];
                    if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
                        var value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                initializeComponent(elm, hostRef, cmpMeta);
            }
        }
        fireConnectedCallback();
    }
};
var bootstrapLazy = function (lazyBundles, options) {
    if (options === void 0) { options = {}; }
    var cmpTags = [];
    var exclude = options.exclude || [];
    var head = doc.head;
    var customElements = win.customElements;
    var y = /*@__PURE__*/ head.querySelector('meta[charset]');
    var visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || '/', win.location.href).href;
    if (options.syncQueue) {
        plt.$flags$ |= 4 /* queueSync */;
    }
    lazyBundles.forEach(function (lazyBundle) { return lazyBundle[1].forEach(function (compactMeta) {
        var cmpMeta = {
            $flags$: compactMeta[0],
            $tagName$: compactMeta[1],
            $members$: compactMeta[2],
            $listeners$: compactMeta[3],
        };
        var tagName = cmpMeta.$tagName$;
        var HostElement = /** @class */ (function (_super) {
            __extends(class_1, _super);
            // StencilLazyHost
            function class_1(self) {
                var _this = 
                // @ts-ignore
                _super.call(this, self) || this;
                self = _this;
                registerHost(self);
                return _this;
            }
            class_1.prototype.connectedCallback = function () {
                connectedCallback(this, cmpMeta);
            };
            class_1.prototype.disconnectedCallback = function () {
                disconnectedCallback(this);
            };
            class_1.prototype['s-init'] = function () {
                var hostRef = getHostRef(this);
                if (hostRef.$lazyInstance$) {
                    postUpdateComponent(this, hostRef);
                }
            };
            class_1.prototype['s-hmr'] = function (hmrVersionId) {
            };
            class_1.prototype.forceUpdate = function () {
                {
                    var hostRef = getHostRef(this);
                    scheduleUpdate(this, hostRef, cmpMeta);
                }
            };
            class_1.prototype.componentOnReady = function () {
                return getHostRef(this).$onReadyPromise$;
            };
            return class_1;
        }(HTMLElement));
        cmpMeta.$lazyBundleIds$ = lazyBundle[0];
        if (!exclude.includes(tagName) && !customElements.get(tagName)) {
            cmpTags.push(tagName);
            customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */));
        }
    }); });
    // visibilityStyle.innerHTML = cmpTags.map(t => `${t}:not(.hydrated)`) + '{display:none}';
    visibilityStyle.innerHTML = cmpTags + '{visibility:hidden}.hydrated{visibility:inherit}';
    visibilityStyle.setAttribute('data-styles', '');
    head.insertBefore(visibilityStyle, y ? y.nextSibling : head.firstChild);
};
var getElement = function (ref) { return getHostRef(ref).$hostElement$; };
export { patchEsm as a, bootstrapLazy as b, getElement as g, patchBrowser as p, registerInstance as r };
