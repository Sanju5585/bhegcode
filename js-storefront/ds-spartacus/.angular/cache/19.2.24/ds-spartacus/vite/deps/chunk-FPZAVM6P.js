import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/input-control-mixin-f18ab077.js
window.Vaadin ||= {};
window.Vaadin.featureFlags ||= {};
function dashToCamelCase$1(dash) {
  return dash.replace(/-[a-z]/gu, (m2) => m2[1].toUpperCase());
}
var experimentalMap = {};
function defineCustomElement(CustomElement, version2 = "24.7.12") {
  Object.defineProperty(CustomElement, "version", {
    get() {
      return version2;
    }
  });
  if (CustomElement.experimental) {
    const featureFlagKey = typeof CustomElement.experimental === "string" ? CustomElement.experimental : `${dashToCamelCase$1(CustomElement.is.split("-").slice(1).join("-"))}Component`;
    if (!window.Vaadin.featureFlags[featureFlagKey] && !experimentalMap[featureFlagKey]) {
      experimentalMap[featureFlagKey] = /* @__PURE__ */ new Set();
      experimentalMap[featureFlagKey].add(CustomElement);
      Object.defineProperty(window.Vaadin.featureFlags, featureFlagKey, {
        get() {
          return experimentalMap[featureFlagKey].size === 0;
        },
        set(value) {
          if (!!value && experimentalMap[featureFlagKey].size > 0) {
            experimentalMap[featureFlagKey].forEach((elementClass) => {
              customElements.define(elementClass.is, elementClass);
            });
            experimentalMap[featureFlagKey].clear();
          }
        }
      });
      return;
    } else if (experimentalMap[featureFlagKey]) {
      experimentalMap[featureFlagKey].add(CustomElement);
      return;
    }
  }
  const defined = customElements.get(CustomElement.is);
  if (!defined) {
    customElements.define(CustomElement.is, CustomElement);
  } else {
    const definedVersion = defined.version;
    if (definedVersion && CustomElement.version && definedVersion === CustomElement.version) {
      console.warn(`The component ${CustomElement.is} has been loaded twice`);
    } else {
      console.error(`Tried to define ${CustomElement.is} version ${CustomElement.version} when version ${defined.version} is already in use. Something will probably break.`);
    }
  }
}
var Lumo = class extends HTMLElement {
  static get is() {
    return "vaadin-lumo-styles";
  }
};
defineCustomElement(Lumo);
var t$1 = globalThis;
var e$2 = t$1.ShadowRoot && (void 0 === t$1.ShadyCSS || t$1.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s$2 = Symbol();
var o$3 = /* @__PURE__ */ new WeakMap();
var n$2 = class {
  constructor(t2, e2, o2) {
    if (this._$cssResult$ = true, o2 !== s$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2, this.t = e2;
  }
  get styleSheet() {
    let t2 = this.o;
    const s2 = this.t;
    if (e$2 && void 0 === t2) {
      const e2 = void 0 !== s2 && 1 === s2.length;
      e2 && (t2 = o$3.get(s2)), void 0 === t2 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e2 && o$3.set(s2, t2));
    }
    return t2;
  }
  toString() {
    return this.cssText;
  }
};
var r$2 = (t2) => new n$2("string" == typeof t2 ? t2 : t2 + "", void 0, s$2);
var i$3 = (t2, ...e2) => {
  const o2 = 1 === t2.length ? t2[0] : e2.reduce((e3, s2, o3) => e3 + ((t3) => {
    if (true === t3._$cssResult$) return t3.cssText;
    if ("number" == typeof t3) return t3;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s2) + t2[o3 + 1], t2[0]);
  return new n$2(o2, t2, s$2);
};
var S$1 = (s2, o2) => {
  if (e$2) s2.adoptedStyleSheets = o2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet);
  else for (const e2 of o2) {
    const o3 = document.createElement("style"), n2 = t$1.litNonce;
    void 0 !== n2 && o3.setAttribute("nonce", n2), o3.textContent = e2.cssText, s2.appendChild(o3);
  }
};
var c$2 = e$2 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const s2 of t3.cssRules) e2 += s2.cssText;
  return r$2(e2);
})(t2) : t2;
var {
  is: i$2,
  defineProperty: e$1,
  getOwnPropertyDescriptor: h$1,
  getOwnPropertyNames: r$1,
  getOwnPropertySymbols: o$2,
  getPrototypeOf: n$1
} = Object;
var a$1 = globalThis;
var c$1 = a$1.trustedTypes;
var l$1 = c$1 ? c$1.emptyScript : "";
var p$1 = a$1.reactiveElementPolyfillSupport;
var d$1 = (t2, s2) => t2;
var u$1 = {
  toAttribute(t2, s2) {
    switch (s2) {
      case Boolean:
        t2 = t2 ? l$1 : null;
        break;
      case Object:
      case Array:
        t2 = null == t2 ? t2 : JSON.stringify(t2);
    }
    return t2;
  },
  fromAttribute(t2, s2) {
    let i2 = t2;
    switch (s2) {
      case Boolean:
        i2 = null !== t2;
        break;
      case Number:
        i2 = null === t2 ? null : Number(t2);
        break;
      case Object:
      case Array:
        try {
          i2 = JSON.parse(t2);
        } catch (t3) {
          i2 = null;
        }
    }
    return i2;
  }
};
var f$1 = (t2, s2) => !i$2(t2, s2);
var b$1 = {
  attribute: true,
  type: String,
  converter: u$1,
  reflect: false,
  useDefault: false,
  hasChanged: f$1
};
Symbol.metadata ??= Symbol("metadata"), a$1.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var y$1 = class extends HTMLElement {
  static addInitializer(t2) {
    this._$Ei(), (this.l ??= []).push(t2);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t2, s2 = b$1) {
    if (s2.state && (s2.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t2) && ((s2 = Object.create(s2)).wrapped = true), this.elementProperties.set(t2, s2), !s2.noAccessor) {
      const i2 = Symbol(), h2 = this.getPropertyDescriptor(t2, i2, s2);
      void 0 !== h2 && e$1(this.prototype, t2, h2);
    }
  }
  static getPropertyDescriptor(t2, s2, i2) {
    const {
      get: e2,
      set: r2
    } = h$1(this.prototype, t2) ?? {
      get() {
        return this[s2];
      },
      set(t3) {
        this[s2] = t3;
      }
    };
    return {
      get: e2,
      set(s3) {
        const h2 = e2?.call(this);
        r2?.call(this, s3), this.requestUpdate(t2, h2, i2);
      },
      configurable: true,
      enumerable: true
    };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) ?? b$1;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d$1("elementProperties"))) return;
    const t2 = n$1(this);
    t2.finalize(), void 0 !== t2.l && (this.l = [...t2.l]), this.elementProperties = new Map(t2.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d$1("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
      const t3 = this.properties, s2 = [...r$1(t3), ...o$2(t3)];
      for (const i2 of s2) this.createProperty(i2, t3[i2]);
    }
    const t2 = this[Symbol.metadata];
    if (null !== t2) {
      const s2 = litPropertyMetadata.get(t2);
      if (void 0 !== s2) for (const [t3, i2] of s2) this.elementProperties.set(t3, i2);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t3, s2] of this.elementProperties) {
      const i2 = this._$Eu(t3, s2);
      void 0 !== i2 && this._$Eh.set(i2, t3);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s2) {
    const i2 = [];
    if (Array.isArray(s2)) {
      const e2 = new Set(s2.flat(1 / 0).reverse());
      for (const s3 of e2) i2.unshift(c$2(s3));
    } else void 0 !== s2 && i2.push(c$2(s2));
    return i2;
  }
  static _$Eu(t2, s2) {
    const i2 = s2.attribute;
    return false === i2 ? void 0 : "string" == typeof i2 ? i2 : "string" == typeof t2 ? t2.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t2) => this.enableUpdating = t2), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t2) => t2(this));
  }
  addController(t2) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t2), void 0 !== this.renderRoot && this.isConnected && t2.hostConnected?.();
  }
  removeController(t2) {
    this._$EO?.delete(t2);
  }
  _$E_() {
    const t2 = /* @__PURE__ */ new Map(), s2 = this.constructor.elementProperties;
    for (const i2 of s2.keys()) this.hasOwnProperty(i2) && (t2.set(i2, this[i2]), delete this[i2]);
    t2.size > 0 && (this._$Ep = t2);
  }
  createRenderRoot() {
    const t2 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S$1(t2, this.constructor.elementStyles), t2;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t2) => t2.hostConnected?.());
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t2) => t2.hostDisconnected?.());
  }
  attributeChangedCallback(t2, s2, i2) {
    this._$AK(t2, i2);
  }
  _$ET(t2, s2) {
    const i2 = this.constructor.elementProperties.get(t2), e2 = this.constructor._$Eu(t2, i2);
    if (void 0 !== e2 && true === i2.reflect) {
      const h2 = (void 0 !== i2.converter?.toAttribute ? i2.converter : u$1).toAttribute(s2, i2.type);
      this._$Em = t2, null == h2 ? this.removeAttribute(e2) : this.setAttribute(e2, h2), this._$Em = null;
    }
  }
  _$AK(t2, s2) {
    const i2 = this.constructor, e2 = i2._$Eh.get(t2);
    if (void 0 !== e2 && this._$Em !== e2) {
      const t3 = i2.getPropertyOptions(e2), h2 = "function" == typeof t3.converter ? {
        fromAttribute: t3.converter
      } : void 0 !== t3.converter?.fromAttribute ? t3.converter : u$1;
      this._$Em = e2;
      const r2 = h2.fromAttribute(s2, t3.type);
      this[e2] = r2 ?? this._$Ej?.get(e2) ?? r2, this._$Em = null;
    }
  }
  requestUpdate(t2, s2, i2, e2 = false, h2) {
    if (void 0 !== t2) {
      const r2 = this.constructor;
      if (false === e2 && (h2 = this[t2]), i2 ??= r2.getPropertyOptions(t2), !((i2.hasChanged ?? f$1)(h2, s2) || i2.useDefault && i2.reflect && h2 === this._$Ej?.get(t2) && !this.hasAttribute(r2._$Eu(t2, i2)))) return;
      this.C(t2, s2, i2);
    }
    false === this.isUpdatePending && (this._$ES = this._$EP());
  }
  C(t2, s2, {
    useDefault: i2,
    reflect: e2,
    wrapped: h2
  }, r2) {
    i2 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t2) && (this._$Ej.set(t2, r2 ?? s2 ?? this[t2]), true !== h2 || void 0 !== r2) || (this._$AL.has(t2) || (this.hasUpdated || i2 || (s2 = void 0), this._$AL.set(t2, s2)), true === e2 && this._$Em !== t2 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t2));
  }
  _$EP() {
    return __async(this, null, function* () {
      this.isUpdatePending = true;
      try {
        yield this._$ES;
      } catch (t3) {
        Promise.reject(t3);
      }
      const t2 = this.scheduleUpdate();
      return null != t2 && (yield t2), !this.isUpdatePending;
    });
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [t4, s3] of this._$Ep) this[t4] = s3;
        this._$Ep = void 0;
      }
      const t3 = this.constructor.elementProperties;
      if (t3.size > 0) for (const [s3, i2] of t3) {
        const {
          wrapped: t4
        } = i2, e2 = this[s3];
        true !== t4 || this._$AL.has(s3) || void 0 === e2 || this.C(s3, void 0, i2, e2);
      }
    }
    let t2 = false;
    const s2 = this._$AL;
    try {
      t2 = this.shouldUpdate(s2), t2 ? (this.willUpdate(s2), this._$EO?.forEach((t3) => t3.hostUpdate?.()), this.update(s2)) : this._$EM();
    } catch (s3) {
      throw t2 = false, this._$EM(), s3;
    }
    t2 && this._$AE(s2);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    this._$EO?.forEach((t3) => t3.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    this._$Eq &&= this._$Eq.forEach((t3) => this._$ET(t3, this[t3])), this._$EM();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
};
y$1.elementStyles = [], y$1.shadowRootOptions = {
  mode: "open"
}, y$1[d$1("elementProperties")] = /* @__PURE__ */ new Map(), y$1[d$1("finalized")] = /* @__PURE__ */ new Map(), p$1?.({
  ReactiveElement: y$1
}), (a$1.reactiveElementVersions ??= []).push("2.1.2");
var t = globalThis;
var i$1 = (t2) => t2;
var s$1 = t.trustedTypes;
var e = s$1 ? s$1.createPolicy("lit-html", {
  createHTML: (t2) => t2
}) : void 0;
var h = "$lit$";
var o$1 = `lit$${Math.random().toFixed(9).slice(2)}$`;
var n = "?" + o$1;
var r = `<${n}>`;
var l = document;
var c = () => l.createComment("");
var a = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2;
var u = Array.isArray;
var d = (t2) => u(t2) || "function" == typeof t2?.[Symbol.iterator];
var f = "[ 	\n\f\r]";
var v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var _ = /-->/g;
var m = />/g;
var p = RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var g = /'/g;
var $ = /"/g;
var y = /^(?:script|style|textarea|title)$/i;
var x = (t2) => (i2, ...s2) => ({
  _$litType$: t2,
  strings: i2,
  values: s2
});
var b = x(1);
var E = Symbol.for("lit-noChange");
var A = Symbol.for("lit-nothing");
var C = /* @__PURE__ */ new WeakMap();
var P = l.createTreeWalker(l, 129);
function V(t2, i2) {
  if (!u(t2) || !t2.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e ? e.createHTML(i2) : i2;
}
var N = (t2, i2) => {
  const s2 = t2.length - 1, e2 = [];
  let n2, l2 = 2 === i2 ? "<svg>" : 3 === i2 ? "<math>" : "", c2 = v;
  for (let i3 = 0; i3 < s2; i3++) {
    const s3 = t2[i3];
    let a2, u2, d2 = -1, f2 = 0;
    for (; f2 < s3.length && (c2.lastIndex = f2, u2 = c2.exec(s3), null !== u2); ) f2 = c2.lastIndex, c2 === v ? "!--" === u2[1] ? c2 = _ : void 0 !== u2[1] ? c2 = m : void 0 !== u2[2] ? (y.test(u2[2]) && (n2 = RegExp("</" + u2[2], "g")), c2 = p) : void 0 !== u2[3] && (c2 = p) : c2 === p ? ">" === u2[0] ? (c2 = n2 ?? v, d2 = -1) : void 0 === u2[1] ? d2 = -2 : (d2 = c2.lastIndex - u2[2].length, a2 = u2[1], c2 = void 0 === u2[3] ? p : '"' === u2[3] ? $ : g) : c2 === $ || c2 === g ? c2 = p : c2 === _ || c2 === m ? c2 = v : (c2 = p, n2 = void 0);
    const x2 = c2 === p && t2[i3 + 1].startsWith("/>") ? " " : "";
    l2 += c2 === v ? s3 + r : d2 >= 0 ? (e2.push(a2), s3.slice(0, d2) + h + s3.slice(d2) + o$1 + x2) : s3 + o$1 + (-2 === d2 ? i3 : x2);
  }
  return [V(t2, l2 + (t2[s2] || "<?>") + (2 === i2 ? "</svg>" : 3 === i2 ? "</math>" : "")), e2];
};
var S = class _S {
  constructor({
    strings: t2,
    _$litType$: i2
  }, e2) {
    let r2;
    this.parts = [];
    let l2 = 0, a2 = 0;
    const u2 = t2.length - 1, d2 = this.parts, [f2, v2] = N(t2, i2);
    if (this.el = _S.createElement(f2, e2), P.currentNode = this.el.content, 2 === i2 || 3 === i2) {
      const t3 = this.el.content.firstChild;
      t3.replaceWith(...t3.childNodes);
    }
    for (; null !== (r2 = P.nextNode()) && d2.length < u2; ) {
      if (1 === r2.nodeType) {
        if (r2.hasAttributes()) for (const t3 of r2.getAttributeNames()) if (t3.endsWith(h)) {
          const i3 = v2[a2++], s2 = r2.getAttribute(t3).split(o$1), e3 = /([.?@])?(.*)/.exec(i3);
          d2.push({
            type: 1,
            index: l2,
            name: e3[2],
            strings: s2,
            ctor: "." === e3[1] ? I : "?" === e3[1] ? L : "@" === e3[1] ? z : H
          }), r2.removeAttribute(t3);
        } else t3.startsWith(o$1) && (d2.push({
          type: 6,
          index: l2
        }), r2.removeAttribute(t3));
        if (y.test(r2.tagName)) {
          const t3 = r2.textContent.split(o$1), i3 = t3.length - 1;
          if (i3 > 0) {
            r2.textContent = s$1 ? s$1.emptyScript : "";
            for (let s2 = 0; s2 < i3; s2++) r2.append(t3[s2], c()), P.nextNode(), d2.push({
              type: 2,
              index: ++l2
            });
            r2.append(t3[i3], c());
          }
        }
      } else if (8 === r2.nodeType) if (r2.data === n) d2.push({
        type: 2,
        index: l2
      });
      else {
        let t3 = -1;
        for (; -1 !== (t3 = r2.data.indexOf(o$1, t3 + 1)); ) d2.push({
          type: 7,
          index: l2
        }), t3 += o$1.length - 1;
      }
      l2++;
    }
  }
  static createElement(t2, i2) {
    const s2 = l.createElement("template");
    return s2.innerHTML = t2, s2;
  }
};
function M(t2, i2, s2 = t2, e2) {
  if (i2 === E) return i2;
  let h2 = void 0 !== e2 ? s2._$Co?.[e2] : s2._$Cl;
  const o2 = a(i2) ? void 0 : i2._$litDirective$;
  return h2?.constructor !== o2 && (h2?._$AO?.(false), void 0 === o2 ? h2 = void 0 : (h2 = new o2(t2), h2._$AT(t2, s2, e2)), void 0 !== e2 ? (s2._$Co ??= [])[e2] = h2 : s2._$Cl = h2), void 0 !== h2 && (i2 = M(t2, h2._$AS(t2, i2.values), h2, e2)), i2;
}
var R = class {
  constructor(t2, i2) {
    this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i2;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t2) {
    const {
      el: {
        content: i2
      },
      parts: s2
    } = this._$AD, e2 = (t2?.creationScope ?? l).importNode(i2, true);
    P.currentNode = e2;
    let h2 = P.nextNode(), o2 = 0, n2 = 0, r2 = s2[0];
    for (; void 0 !== r2; ) {
      if (o2 === r2.index) {
        let i3;
        2 === r2.type ? i3 = new k(h2, h2.nextSibling, this, t2) : 1 === r2.type ? i3 = new r2.ctor(h2, r2.name, r2.strings, this, t2) : 6 === r2.type && (i3 = new Z(h2, this, t2)), this._$AV.push(i3), r2 = s2[++n2];
      }
      o2 !== r2?.index && (h2 = P.nextNode(), o2++);
    }
    return P.currentNode = l, e2;
  }
  p(t2) {
    let i2 = 0;
    for (const s2 of this._$AV) void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t2, s2, i2), i2 += s2.strings.length - 2) : s2._$AI(t2[i2])), i2++;
  }
};
var k = class _k {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t2, i2, s2, e2) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t2, this._$AB = i2, this._$AM = s2, this.options = e2, this._$Cv = e2?.isConnected ?? true;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i2 = this._$AM;
    return void 0 !== i2 && 11 === t2?.nodeType && (t2 = i2.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i2 = this) {
    t2 = M(this, t2, i2), a(t2) ? t2 === A || null == t2 || "" === t2 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t2 !== this._$AH && t2 !== E && this._(t2) : void 0 !== t2._$litType$ ? this.$(t2) : void 0 !== t2.nodeType ? this.T(t2) : d(t2) ? this.k(t2) : this._(t2);
  }
  O(t2) {
    return this._$AA.parentNode.insertBefore(t2, this._$AB);
  }
  T(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.O(t2));
  }
  _(t2) {
    this._$AH !== A && a(this._$AH) ? this._$AA.nextSibling.data = t2 : this.T(l.createTextNode(t2)), this._$AH = t2;
  }
  $(t2) {
    const {
      values: i2,
      _$litType$: s2
    } = t2, e2 = "number" == typeof s2 ? this._$AC(t2) : (void 0 === s2.el && (s2.el = S.createElement(V(s2.h, s2.h[0]), this.options)), s2);
    if (this._$AH?._$AD === e2) this._$AH.p(i2);
    else {
      const t3 = new R(e2, this), s3 = t3.u(this.options);
      t3.p(i2), this.T(s3), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i2 = C.get(t2.strings);
    return void 0 === i2 && C.set(t2.strings, i2 = new S(t2)), i2;
  }
  k(t2) {
    u(this._$AH) || (this._$AH = [], this._$AR());
    const i2 = this._$AH;
    let s2, e2 = 0;
    for (const h2 of t2) e2 === i2.length ? i2.push(s2 = new _k(this.O(c()), this.O(c()), this, this.options)) : s2 = i2[e2], s2._$AI(h2), e2++;
    e2 < i2.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i2.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, s2) {
    for (this._$AP?.(false, true, s2); t2 !== this._$AB; ) {
      const s3 = i$1(t2).nextSibling;
      i$1(t2).remove(), t2 = s3;
    }
  }
  setConnected(t2) {
    void 0 === this._$AM && (this._$Cv = t2, this._$AP?.(t2));
  }
};
var H = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t2, i2, s2, e2, h2) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t2, this.name = i2, this._$AM = e2, this.options = h2, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = A;
  }
  _$AI(t2, i2 = this, s2, e2) {
    const h2 = this.strings;
    let o2 = false;
    if (void 0 === h2) t2 = M(this, t2, i2, 0), o2 = !a(t2) || t2 !== this._$AH && t2 !== E, o2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let n2, r2;
      for (t2 = h2[0], n2 = 0; n2 < h2.length - 1; n2++) r2 = M(this, e3[s2 + n2], i2, n2), r2 === E && (r2 = this._$AH[n2]), o2 ||= !a(r2) || r2 !== this._$AH[n2], r2 === A ? t2 = A : t2 !== A && (t2 += (r2 ?? "") + h2[n2 + 1]), this._$AH[n2] = r2;
    }
    o2 && !e2 && this.j(t2);
  }
  j(t2) {
    t2 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 ?? "");
  }
};
var I = class extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t2) {
    this.element[this.name] = t2 === A ? void 0 : t2;
  }
};
var L = class extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t2) {
    this.element.toggleAttribute(this.name, !!t2 && t2 !== A);
  }
};
var z = class extends H {
  constructor(t2, i2, s2, e2, h2) {
    super(t2, i2, s2, e2, h2), this.type = 5;
  }
  _$AI(t2, i2 = this) {
    if ((t2 = M(this, t2, i2, 0) ?? A) === E) return;
    const s2 = this._$AH, e2 = t2 === A && s2 !== A || t2.capture !== s2.capture || t2.once !== s2.once || t2.passive !== s2.passive, h2 = t2 !== A && (s2 === A || e2);
    e2 && this.element.removeEventListener(this.name, this, s2), h2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t2) : this._$AH.handleEvent(t2);
  }
};
var Z = class {
  constructor(t2, i2, s2) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    M(this, t2);
  }
};
var B = t.litHtmlPolyfillSupport;
B?.(S, k), (t.litHtmlVersions ??= []).push("3.3.2");
var D = (t2, i2, s2) => {
  const e2 = s2?.renderBefore ?? i2;
  let h2 = e2._$litPart$;
  if (void 0 === h2) {
    const t3 = s2?.renderBefore ?? null;
    e2._$litPart$ = h2 = new k(i2.insertBefore(c(), t3), t3, void 0, s2 ?? {});
  }
  return h2._$AI(t2), h2;
};
var s = globalThis;
var i = class extends y$1 {
  constructor() {
    super(...arguments), this.renderOptions = {
      host: this
    }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t2 = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t2.firstChild, t2;
  }
  update(t2) {
    const r2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = D(r2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return E;
  }
};
i._$litElement$ = true, i["finalized"] = true, s.litElementHydrateSupport?.({
  LitElement: i
});
var o = s.litElementPolyfillSupport;
o?.({
  LitElement: i
});
(s.litElementVersions ??= []).push("4.2.2");
var ThemePropertyMixin = (superClass) => class VaadinThemePropertyMixin extends superClass {
  static get properties() {
    return {
      /**
       * Helper property with theme attribute value facilitating propagation
       * in shadow DOM.
       *
       * Enables the component implementation to propagate the `theme`
       * attribute value to the sub-components in Shadow DOM by binding
       * the sub-component's "theme" attribute to the `theme` property of
       * the host.
       *
       * **NOTE:** Extending the mixin only provides the property for binding,
       * and does not make the propagation alone.
       *
       * See [Styling Components: Sub-components](https://vaadin.com/docs/latest/styling/styling-components/#sub-components).
       * page for more information.
       *
       * @protected
       */
      _theme: {
        type: String,
        readOnly: true
      }
    };
  }
  static get observedAttributes() {
    return [...super.observedAttributes, "theme"];
  }
  /** @protected */
  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (name === "theme") {
      this._set_theme(newValue);
    }
  }
};
var themeRegistry = [];
var themableInstances = /* @__PURE__ */ new Set();
var themableTagNames = /* @__PURE__ */ new Set();
function classHasThemes(elementClass) {
  return elementClass && Object.prototype.hasOwnProperty.call(elementClass, "__themes");
}
function hasThemes(tagName) {
  return classHasThemes(customElements.get(tagName));
}
function flattenStyles(styles = []) {
  return [styles].flat(Infinity).filter((style2) => {
    if (style2 instanceof n$2) {
      return true;
    }
    console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`.");
    return false;
  });
}
function matchesThemeFor(themeFor, tagName) {
  return (themeFor || "").split(" ").some((themeForToken) => {
    return new RegExp(`^${themeForToken.split("*").join(".*")}$`, "u").test(tagName);
  });
}
function getCssText(styles) {
  return styles.map((style2) => style2.cssText).join("\n");
}
var STYLE_ID = "vaadin-themable-mixin-style";
function addStylesToTemplate(styles, template) {
  const styleEl = document.createElement("style");
  styleEl.id = STYLE_ID;
  styleEl.textContent = getCssText(styles);
  template.content.appendChild(styleEl);
}
function updateInstanceStyles(instance) {
  if (!instance.shadowRoot) {
    return;
  }
  const componentClass = instance.constructor;
  if (instance instanceof i) {
    [...instance.shadowRoot.querySelectorAll("style")].forEach((style2) => style2.remove());
    S$1(instance.shadowRoot, componentClass.elementStyles);
  } else {
    const style2 = instance.shadowRoot.getElementById(STYLE_ID);
    const template = componentClass.prototype._template;
    style2.textContent = template.content.getElementById(STYLE_ID).textContent;
  }
}
function updateInstanceStylesOfType(componentClass) {
  themableInstances.forEach((ref) => {
    const instance = ref.deref();
    if (instance instanceof componentClass) {
      updateInstanceStyles(instance);
    } else if (!instance) {
      themableInstances.delete(ref);
    }
  });
}
function updateComponentStyles(componentClass) {
  if (componentClass.prototype instanceof i) {
    componentClass.elementStyles = componentClass.finalizeStyles(componentClass.styles);
  } else {
    const template = componentClass.prototype._template;
    template.content.getElementById(STYLE_ID).textContent = getCssText(componentClass.getStylesForThis());
  }
  themableTagNames.forEach((inheritingTagName) => {
    const inheritingClass = customElements.get(inheritingTagName);
    if (inheritingClass !== componentClass && inheritingClass.prototype instanceof componentClass) {
      updateComponentStyles(inheritingClass);
    }
  });
}
function hasMatchingStyle(componentClass, styles) {
  const themes = componentClass.__themes;
  if (!themes || !styles) {
    return false;
  }
  return themes.some((theme) => theme.styles.some((themeStyle) => styles.some((style2) => style2.cssText === themeStyle.cssText)));
}
function registerStyles(themeFor, styles, options = {}) {
  styles = flattenStyles(styles);
  if (window.Vaadin && window.Vaadin.styleModules) {
    window.Vaadin.styleModules.registerStyles(themeFor, styles, options);
  } else {
    themeRegistry.push({
      themeFor,
      styles,
      include: options.include,
      moduleId: options.moduleId
    });
  }
  if (themeFor) {
    themableTagNames.forEach((tagName) => {
      if (matchesThemeFor(themeFor, tagName) && hasThemes(tagName)) {
        const componentClass = customElements.get(tagName);
        if (hasMatchingStyle(componentClass, styles)) {
          console.warn(`Registering styles that already exist for ${tagName}`);
        } else if (!window.Vaadin || !window.Vaadin.suppressPostFinalizeStylesWarning) {
          console.warn(`The custom element definition for "${tagName}" was finalized before a style module was registered. Ideally, import component specific style modules before importing the corresponding custom element. This warning can be suppressed by setting "window.Vaadin.suppressPostFinalizeStylesWarning = true".`);
        }
        updateComponentStyles(componentClass);
        updateInstanceStylesOfType(componentClass);
      }
    });
  }
}
function getAllThemes() {
  if (window.Vaadin && window.Vaadin.styleModules) {
    return window.Vaadin.styleModules.getAllThemes();
  }
  return themeRegistry;
}
function getIncludePriority(moduleName = "") {
  let includePriority = 0;
  if (moduleName.startsWith("lumo-") || moduleName.startsWith("material-")) {
    includePriority = 1;
  } else if (moduleName.startsWith("vaadin-")) {
    includePriority = 2;
  }
  return includePriority;
}
function getIncludedStyles(theme) {
  const includedStyles = [];
  if (theme.include) {
    [].concat(theme.include).forEach((includeModuleId) => {
      const includedTheme = getAllThemes().find((s2) => s2.moduleId === includeModuleId);
      if (includedTheme) {
        includedStyles.push(...getIncludedStyles(includedTheme), ...includedTheme.styles);
      } else {
        console.warn(`Included moduleId ${includeModuleId} not found in style registry`);
      }
    }, theme.styles);
  }
  return includedStyles;
}
function getThemes(tagName) {
  const defaultModuleName = `${tagName}-default-theme`;
  const themes = getAllThemes().filter((theme) => theme.moduleId !== defaultModuleName && matchesThemeFor(theme.themeFor, tagName)).map((theme) => __spreadProps(__spreadValues({}, theme), {
    // Prepend styles from included themes
    styles: [...getIncludedStyles(theme), ...theme.styles],
    // Map moduleId to includePriority
    includePriority: getIncludePriority(theme.moduleId)
  })).sort((themeA, themeB) => themeB.includePriority - themeA.includePriority);
  if (themes.length > 0) {
    return themes;
  }
  return getAllThemes().filter((theme) => theme.moduleId === defaultModuleName);
}
var ThemableMixin = (superClass) => class VaadinThemableMixin extends ThemePropertyMixin(superClass) {
  constructor() {
    super();
    themableInstances.add(new WeakRef(this));
  }
  /**
   * Covers PolymerElement based component styling
   * @protected
   */
  static finalize() {
    super.finalize();
    if (this.is) {
      themableTagNames.add(this.is);
    }
    if (this.elementStyles) {
      return;
    }
    const template = this.prototype._template;
    if (!template || classHasThemes(this)) {
      return;
    }
    addStylesToTemplate(this.getStylesForThis(), template);
  }
  /**
   * Covers LitElement based component styling
   *
   * @protected
   */
  static finalizeStyles(styles) {
    const themeStyles = this.getStylesForThis();
    return styles ? [...[styles].flat(Infinity), ...themeStyles] : themeStyles;
  }
  /**
   * Get styles for the component type
   *
   * @private
   */
  static getStylesForThis() {
    const superClassThemes = superClass.__themes || [];
    const parent = Object.getPrototypeOf(this.prototype);
    const inheritedThemes = (parent ? parent.constructor.__themes : []) || [];
    this.__themes = [...superClassThemes, ...inheritedThemes, ...getThemes(this.is)];
    const themeStyles = this.__themes.flatMap((theme) => theme.styles);
    return themeStyles.filter((style2, index) => index === themeStyles.lastIndexOf(style2));
  }
};
var addGlobalThemeStyles = (id, ...styles) => {
  const styleTag = document.createElement("style");
  styleTag.id = id;
  styleTag.textContent = styles.map((style2) => style2.toString()).join("\n").replace(":host", "html");
  document.head.insertAdjacentElement("afterbegin", styleTag);
};
var addLumoGlobalStyles = (id, ...styles) => {
  addGlobalThemeStyles(`lumo-${id}`, styles);
};
var colorBase = i$3`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`;
addLumoGlobalStyles("color-props", colorBase);
var color = i$3`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
  pre code {
    background: transparent;
  }
`;
registerStyles("", color, {
  moduleId: "lumo-color"
});
var fontIcons = i$3`
  @font-face {
    font-family: 'lumo-icons';
    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABHAAAsAAAAAI6AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuNY21hcAAAAYgAAAD+AAADymne8hxnbHlmAAACiAAAC+gAABioIzlOlWhlYWQAAA5wAAAAMAAAADZa/6SsaGhlYQAADqAAAAAdAAAAJAbpA4BobXR4AAAOwAAAABAAAAC0q+AAAGxvY2EAAA7QAAAAXAAAAFyF7o1GbWF4cAAADywAAAAfAAAAIAFMAXBuYW1lAAAPTAAAATEAAAIuUUJZCHBvc3QAABCAAAABPQAAAgfdkltveJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+xDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mEO+p/FEMUcxDANKMwIkgMABvgMMAB4nO3SV26EMABF0UsZpjG9d6Y3FpgF5StLYxMTP16WEUvHV1gGIQzQAJKgDFKIfojQ+A6rUb2e0KnXU77qPanWq/LzCXOkOVyn9RyHvWl4YkaTFu1wX5ecHn0GDBkxZsKUGXMWLFmxZsOWHXsOFBw5cebClRt3Hjx58dZ7RRn/I9cUF39Xpb691acRG2piOtUqNZ1P1TCdeJUZatNQW4baNtSO6U+ouoaam96u6hlq31AHhjo01JGhjg11YqhTQ50Z6txQF4a6NNSVoa4NdWOoW0PdGereUA+GWhjq0VBPhno21IuhXg31Zqh3Q30Y6tNQX4b6NtTSKH8BOIRpQQAAeJy1WH1sW9UVv+fG9vPz+7Bf/N6zHcd2/J04jbP6s0lap4kDpB9JWzUUCqxNgaHxpTI6hNhUNLVr17HSISb2D2iAJrWb6FTWahNQdQxRvmHamAR0qibE1E18CG3QaVNFvJ17n+3YIf1AiMQ679x77j3v3HPPPed3H7ER/OsYpw8TmQRIiuQJ8RZK+WjO1B3xaCzla21orY10a+OQ6aHTHtP0zB31mBs1GZ6RNU2uXc7oPL+xdRS9R9X1oK4fVfijdsBqvqF6vd1eLzPrYrYZ57WteF7bPDIc5+ZcJnta+S9i2Vfhs4MaMwZNQmO0Vv7gF/MZcNsCcJp4sJFSwYyAmRuFCmTBDRBUkwGqnlViyjmVBpLqaXhNpt0J5V1JOqMkuqn8WkMHvZX+iOlImiqkBiFVYDrCqINulmkwKb8ry2fkZBBn7FcTlk4ZdfpRZ9MOesLSAakKt0N3g4p2jAL8eIEOOqom/U0lgQRXUl8LtXM7HFkojUIpF0ErVBhcZC1vtyjtpsqr83a8RVcSH+ool8LgcIMjNohmVCACuDs506BdO6WIQeXjUsh1XKZGRNpp9piv3+Givoh00OU6KEV81HUHTLtN093Q+YGlE3wLHWRtMNy9XWqdLm2HKbaNsGzhu+41eswFOjE6WKSk2/1Wpt+qHeM6phbohmVmj3GvpdcVkiy9zbXfzHVqKuDB0IR2P6ZpF+D7dy6YC/9svGmBE5hKB9+X2+hh4iYRMkhGyTqyFc9APmeGQHf043tWQKHkizmwaY5AroTNVJzJDc2SFzUu92kOLsdmKu77vByb8/IjtxmhkMFISRBFISO4XMLJlj4XgGuRXtaHw2FLyHifdSOpisIhJjgkiPBAyJh7lfXTkhEadwk1mUngrOC6MazX7mASeEAPV1FyjEumBOaEDu4DP/ogRDKkiLEV1woVyMeLLKJCEM+FwdCwL4XLcRgdbfkhbzS8BNvXDKzNQiAWgOzagTXF1Eyq+Ci6/TPm/JrNY/59p1epKN4jQFGe0fx+LTMwNVCrAU2VSqnaKYzIiGmWe2Rvp9KDJhncrjLaFce8VCUbyQ1kB9lNfkJ+To6R58mfyd/Ip9ABXohDHqqwEW7A2Mij1ehntLu+h8xMtocjUJcYwoLdtYafv/1Vjy8vjLaLtBfOt3/B931Rexa24e5zstgnyqvZHs69zuhq3vFgRpQVJyN7FuE++RLSeW4xMi+t6Zeo5sIK6S5dlGVRD2hWnGoB3j7OV3lesvNLic8tOnLRSRfRdOna63VJp/1WbYs5dFZjy1AqpGICQEWKmNI+CZNoVTJ7pNop+IZkRrBHgnEmqr3TrEsfw1Gi8LqE+S1aV0SNNwXVVVvuUoU3ld6TLwmditIpvKTU50zSzWwO1h0rL8awnulwTXMYrGDT4aQ1fb4GPkyv5vMEh5Vec6yw0AMXnfcx1l/rfVZaKLDi0W4j/HfeyGZuHOf1IUGW1udizU2leXY0OmLpVDpVKJfKpZzPRKHgEBzpXAUKWYipoIeBdl3JfLZVBizEqWun1i4ZGFiyduq3DebayXsmJ+95gBG4+Urm1a2SdpKV57lP2wZyZqI+FAlfUtO+NCmgdWhMOS1gDY+jHWnBhwjBQLMEXxmLbx6t9JXTWDLtsSxgisfErqvQMbbBoywZmeyLeWe8OWNydFDxzMx4lMGRtX0xN3YFJkeW+O0bascGNwwObtjCCOzrzAVWjSwN2K9cpyn9o5cZOXMmkAuM85EbNHnJyHhfLLCnPhxJYw9eoIMkyC3l+4ZuY5ig7lW2oYUynDgg+Xrk+++Xe3zSgRYetnyuy+KbfjiB+GAAtZ8HHXmtijZfFFgrujhmOs2qkXvuSV6WqA1WLYqhPHOfsa26rklKFqbAGL2dOIlGurB6LWFVFd/KoBBaYTFYVBs93hZRFlrG5Ex4NVFIJguJVvqnBW2kNNvFGx90YUcSEvyZSMDeZjc0xYlEYy8+hHcWx9YrZOaPPyCGepP5Q34aXnGBr8d1QhSf4yjtiebZqNJfEYl4SY6dDRb8WSguLZW9ZQtBpoW4hX0QMyB2KmsYcOh8HMQxBn288oZ6BXV0GOq/ClKsC6T8g9X3OFKZNkJrYkOx2lEk+KNDy953+wGHXuGGzhGZ+uLK8FVrQkbtKBv+9EztU2sgTCNpvXMdJjqJ4tkdw+x00dPKkZ1QR254x7GQoFmvfakSnL3gCc5nREly2mN2pyTLMacMipNT7YInGU7JzlN2p9N+yinXTirOKEvPUafSWMNDmCf9pIQYaG19DSxKGqvAQ+xg60iabEm5MheUU2n+HxO4TDDbjnw6xxK8QzfhbHXq8pWVqanKysun9s6ztdt7sivGqruqYyuyPS6Hw9XehGt6q+l0dT0jvaFMZjiTuTHo7+vdtHJTb58/2ML+IxHt9/n9vv5owiWKrrbWD+sakKxhKoYzxF5f7y9INxki42QNuYrVFDPfvqxyY83xWNMV+ZxPSMWb62W+wPSCJwkDDl1WZOGW84nAEo4A7HjB/uWmOdayRFnKjazi668u/ajJlUd87aPk048Crlu4j1Oh9gxdL3Z1inNPIt2xvKNlsU4hn54Z5Y6YbTDu9hHOvkcFAb35fU6hNovKOrtQmcvbNV9/Ntfv5xf4atDWOOTX6CSHZ08xujhPs51+f9zvf1YLIGoPPKvxVh0TSLAXzzUBFiXs7GJVB7vH5/PAXznd4+vx4a95h3qI/oYIpIdMkA1kC7kVLS3GhWI5bwj1fIaVKG/Ei5gXWOjhtcJbzFthaMQrwIcIRj0ppvO6yV95icu9j/YPDNySWp7w+kOr95R1RfGpfVlDVhS/2geJ5Umv2mn0rkxBvzvgdisndJXaVF1X5z5jdHGe2n/QnYo8+b2uaMivhowgjYcLnVqnrEpQezsieyVZ6ooETbdJO6ip+cORLpes6BL82/qg8VHbo45B/vch/YQeJX28QvEANR3sQhxh+TcMCEd4l8BKF7uID7KM05tRYlIHHXY63YIi2fXQyj5XSBbcMeewKLpttkJ2Syz33YJfDdJdSYkqHbYb3VHRJgTV8c0TAy67YHeK7htwOKWax5co7Do8Pfh1tKdx1g5j9o6TZeQyMo27FuW3vbYsbY/Op3AG06DMKionRlpgHzCEeMmLU5opRrCyS670RzppZeW5p/iT3jL3lB4O63QS6dzzh8SAtOqwGJK3bv+lGJTWbr++471wsVKMRJCEK5H+cLg/Qp+IDsdqs7HhKD7hMXyyrD/Li8RjRqimHhI7HP2vSDZn9brplySb0L9dgpURSwmSiBFhilrwB8OA9gZ29NkRO/669parW9e7XZDxwvgRu+SE7zgl+xG5p/HtRqJ3cdwSZwsbwTA1WT3jEdyPN0sWxvDGy+xovIzHosnwc9LePf9tywun0fMkWaFYZbB4oovRq8VyKYUBkMVXqVhBHSylQ0wanvla3+rQ1XbR8ZzstYOo2Mf7vjk8ftcGDWxdSdXx0cAVveHg1TZFtEOn8ntBBFs11V++vuLUQ5qz+U6d/oUjpGIdNjOQhJXNqn5YCS1Yy5PofLGEs6Js2yOKe2yyOLxtaGjbt7cNIURCEDdWfaQ6lurtRYbePCuItv1iUNxvE4Vdw2zQ0LZhdv2fxjHp5uAmdlBpopHXoJGU8e6BRc0yi+PztkaHTRRrW1m2hcfFLlEUzzD+DGczjEVCg9jEQZhFcdAL2DjD+DPiSWQzjM2I89g5RXdxfECS+CIWy1hTGmFs6EIbkv/pbtkfU3aPrZ+4c2Lizn07qufym/L5TTdtyuU2/We3HPeDsjtb3bGPSSfW31aX3LQpX/d9sL7fWYpRJPBbCJavYjrFjj0rT2GWCZjf6Ytffr8beXl/HYeyGwJiIK8FLDHbfo65xGz7YCSRqCQSkbbHI5eUU5X4sjj+zrU9aHnRlEnrd7YGptd0x2Jf/RbH9PAiovadckSnEsJ661OgPFuH9B4O6e202vIN0h9xHXSJh1wRP5Vqv1uI6Wn9Gxmrwzqrii1gqhEscJanuAlGas+s2/uzvetgS72NpHZ6aHbZstmh/wPq1seEeJxjYGRgYADi31ySEvH8Nl8ZuJlfAEUYalQ3NCLo/6+ZpzLdAnI5GJhAogAiBgraeJxjYGRgYA76nwUkXzAAAfNUBkYGVKALAFb4A3EAAAB4nGNgYGBgfjG0MAAMzihlAAAAAABOAJoA6AEKASwBTgFwAZoBxAHuAhoCnALoBJoEvATWBPIFDgUqBXoF0AX+BkQGlga4BwgHagfiCGoIpAi8CVAJmAoQCiwKVgqQCtYLGAtOC4gL6AwuDFR4nGNgZGBg0GVMYRBlAAEmIOYCQgaG/2A+AwAYygG+AHicbZE9TsMwGIbf9A/RSggEYmHxAgtq+jN2ZGj3Dt3T1GlTOXHkuBW9AyfgEByCgTNwCA7BW/NJlVBtyd/jx+8XKwmAa3whwnFE6Ib1OBq44O6Pm6Qb4Rb5QbiNHh6FO/RD4S6eMRHu4RaaT4halzR3eBVu4Apvwk36d+EW+UO4jXt8Cnfov4W7WOBHuIen6MXsCtvPU1vWc73emcSdxIkW2tW5LdUoHp7kTJfaJV6v1PKg6v167H2mMmcLNbWl18ZYVTm71amPN95Xk8EgEx+ntoDBDgUs+siRspaoMef7rukNEriziXNuwS7Hmoe9wggxv+e55IzJMqQTeNYV00scuNbY8+YxrUfGfcaMZb/CNPQe04bT0lThbEuT0sfYhK6K/23Amf3Lx+H24hcj4GScAAAAeJxtjuduwzAMhH2NnTqOk+6993TfSZFY24giGZTVon36eiRFf5SAiO/A05HBWtBXEvxfGdYwQIgIQ6wjxggJxkgxwRQb2MQWtrGDXexhHwc4xBGOcYJTnOEcF7jEFa5xg1vc4R4PeMQTnvGCV2R4C1Khy9xkkkxNnPRC03s97pHLvKgTYXJNmbKfZom9o8POEffsq0Qw28+ltcPe2uHS2rGvRjPBmSwE1+GMtI6l0GSU4JEsSM4XgudpQx9sTRf3K9rAyUr0962UryKprZwPpM0jyda5uP2qrVBjxSLPCmGUplixrdpBSKqsI2oO4gF9Udq8TJVOzDSpcEHGR4vSeJdaVsSkMl26OqoKa6jttQ0rLb6a5l3YjO2QqV01YXLlNy2XDR0JlkXojbJTb/5GDX3V+kPviIPgB9AUks0AAAA=)
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --lumo-icons-align-center: '\\ea01';
    --lumo-icons-align-left: '\\ea02';
    --lumo-icons-align-right: '\\ea03';
    --lumo-icons-angle-down: '\\ea04';
    --lumo-icons-angle-left: '\\ea05';
    --lumo-icons-angle-right: '\\ea06';
    --lumo-icons-angle-up: '\\ea07';
    --lumo-icons-arrow-down: '\\ea08';
    --lumo-icons-arrow-left: '\\ea09';
    --lumo-icons-arrow-right: '\\ea0a';
    --lumo-icons-arrow-up: '\\ea0b';
    --lumo-icons-bar-chart: '\\ea0c';
    --lumo-icons-bell: '\\ea0d';
    --lumo-icons-calendar: '\\ea0e';
    --lumo-icons-checkmark: '\\ea0f';
    --lumo-icons-chevron-down: '\\ea10';
    --lumo-icons-chevron-left: '\\ea11';
    --lumo-icons-chevron-right: '\\ea12';
    --lumo-icons-chevron-up: '\\ea13';
    --lumo-icons-clock: '\\ea14';
    --lumo-icons-cog: '\\ea15';
    --lumo-icons-cross: '\\ea16';
    --lumo-icons-download: '\\ea17';
    --lumo-icons-drag-handle: '\\ea18';
    --lumo-icons-dropdown: '\\ea19';
    --lumo-icons-edit: '\\ea1a';
    --lumo-icons-error: '\\ea1b';
    --lumo-icons-eye: '\\ea1c';
    --lumo-icons-eye-disabled: '\\ea1d';
    --lumo-icons-menu: '\\ea1e';
    --lumo-icons-minus: '\\ea1f';
    --lumo-icons-ordered-list: '\\ea20';
    --lumo-icons-phone: '\\ea21';
    --lumo-icons-photo: '\\ea22';
    --lumo-icons-play: '\\ea23';
    --lumo-icons-plus: '\\ea24';
    --lumo-icons-redo: '\\ea25';
    --lumo-icons-reload: '\\ea26';
    --lumo-icons-resize-handle: '\\ea27';
    --lumo-icons-search: '\\ea28';
    --lumo-icons-undo: '\\ea29';
    --lumo-icons-unordered-list: '\\ea2a';
    --lumo-icons-upload: '\\ea2b';
    --lumo-icons-user: '\\ea2c';
  }
`;
addLumoGlobalStyles("font-icons", fontIcons);
var sizing = i$3`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`;
addLumoGlobalStyles("sizing-props", sizing);
var spacing = i$3`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`;
addLumoGlobalStyles("spacing-props", spacing);
var style = i$3`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;
i$3`
  html {
    /* Button */
    --vaadin-button-background: var(--lumo-contrast-5pct);
    --vaadin-button-border: none;
    --vaadin-button-border-radius: var(--lumo-border-radius-m);
    --vaadin-button-font-size: var(--lumo-font-size-m);
    --vaadin-button-font-weight: 500;
    --vaadin-button-height: var(--lumo-size-m);
    --vaadin-button-margin: var(--lumo-space-xs) 0;
    --vaadin-button-min-width: calc(var(--vaadin-button-height) * 2);
    --vaadin-button-padding: 0 calc(var(--vaadin-button-height) / 3 + var(--lumo-border-radius-m) / 2);
    --vaadin-button-text-color: var(--lumo-primary-text-color);
    --vaadin-button-primary-background: var(--lumo-primary-color);
    --vaadin-button-primary-border: none;
    --vaadin-button-primary-font-weight: 600;
    --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    --vaadin-button-tertiary-background: transparent !important;
    --vaadin-button-tertiary-text-color: var(--lumo-primary-text-color);
    --vaadin-button-tertiary-font-weight: 500;
    --vaadin-button-tertiary-padding: 0 calc(var(--vaadin-button-height) / 6);
    /* Checkbox */
    --vaadin-checkbox-background: var(--lumo-contrast-20pct);
    --vaadin-checkbox-background-hover: var(--lumo-contrast-30pct);
    --vaadin-checkbox-border-radius: var(--lumo-border-radius-s);
    --vaadin-checkbox-checkmark-char: var(--lumo-icons-checkmark);
    --vaadin-checkbox-checkmark-char-indeterminate: '';
    --vaadin-checkbox-checkmark-color: var(--lumo-primary-contrast-color);
    --vaadin-checkbox-checkmark-size: calc(var(--vaadin-checkbox-size) + 2px);
    --vaadin-checkbox-label-color: var(--lumo-body-text-color);
    --vaadin-checkbox-label-font-size: var(--lumo-font-size-m);
    --vaadin-checkbox-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    --vaadin-checkbox-disabled-checkmark-color: var(--lumo-contrast-30pct);
    --vaadin-checkbox-disabled-background: var(--lumo-contrast-10pct);
    /* Radio button */
    --vaadin-radio-button-background: var(--lumo-contrast-20pct);
    --vaadin-radio-button-background-hover: var(--lumo-contrast-30pct);
    --vaadin-radio-button-dot-color: var(--lumo-primary-contrast-color);
    --vaadin-radio-button-dot-size: 3px;
    --vaadin-radio-button-label-color: var(--lumo-body-text-color);
    --vaadin-radio-button-label-font-size: var(--lumo-font-size-m);
    --vaadin-radio-button-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs)
      var(--lumo-space-xs);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-radio-button-disabled-background: var(--lumo-contrast-10pct);
    --vaadin-radio-button-disabled-dot-color: var(--lumo-contrast-30pct);
    --vaadin-selection-color: var(--lumo-primary-color);
    --vaadin-selection-color-text: var(--lumo-primary-text-color);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
    --vaadin-focus-ring-color: var(--lumo-primary-color-50pct);
    --vaadin-focus-ring-width: 2px;
    /* Label */
    --vaadin-input-field-label-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-focused-label-color: var(--lumo-primary-text-color);
    --vaadin-input-field-hovered-label-color: var(--lumo-body-text-color);
    --vaadin-input-field-label-font-size: var(--lumo-font-size-s);
    --vaadin-input-field-label-font-weight: 500;
    /* Helper */
    --vaadin-input-field-helper-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-helper-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-helper-font-weight: 400;
    --vaadin-input-field-helper-spacing: 0.4em;
    /* Error message */
    --vaadin-input-field-error-color: var(--lumo-error-text-color);
    --vaadin-input-field-error-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-error-font-weight: 400;
    /* Input field */
    --vaadin-input-field-background: var(--lumo-contrast-10pct);
    --vaadin-input-field-icon-color: var(--lumo-contrast-60pct);
    --vaadin-input-field-icon-size: var(--lumo-icon-size-m);
    --vaadin-input-field-invalid-background: var(--lumo-error-color-10pct);
    --vaadin-input-field-invalid-hover-highlight: var(--lumo-error-color-50pct);
    --vaadin-input-field-disabled-background: var(--lumo-contrast-5pct);
    --vaadin-input-field-disabled-value-color: var(--lumo-disabled-text-color);
    --vaadin-input-field-height: var(--lumo-size-m);
    --vaadin-input-field-hover-highlight: var(--lumo-contrast-50pct);
    --vaadin-input-field-placeholder-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-readonly-border: 1px dashed var(--lumo-contrast-30pct);
    --vaadin-input-field-value-color: var(--lumo-body-text-color);
    --vaadin-input-field-value-font-size: var(--lumo-font-size-m);
    --vaadin-input-field-value-font-weight: 500;
  }
`;
addLumoGlobalStyles("style-props", style);
var font = i$3`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`;
var typography = i$3`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;
registerStyles("", typography, {
  moduleId: "lumo-typography"
});
addLumoGlobalStyles("typography-props", font);
window.JSCompiler_renameProperty = function(prop, obj) {
  return prop;
};
var CSS_URL_RX = /(url\()([^)]*)(\))/g;
var ABS_URL = /(^\/[^\/])|(^#)|(^[\w-\d]*:)/;
var workingURL;
var resolveDoc;
function resolveUrl(url, baseURI) {
  if (url && ABS_URL.test(url)) {
    return url;
  }
  if (url === "//") {
    return url;
  }
  if (workingURL === void 0) {
    workingURL = false;
    try {
      const u2 = new URL("b", "http://a");
      u2.pathname = "c%20d";
      workingURL = u2.href === "http://a/c%20d";
    } catch (e2) {
    }
  }
  if (!baseURI) {
    baseURI = document.baseURI || window.location.href;
  }
  if (workingURL) {
    try {
      return new URL(url, baseURI).href;
    } catch (e2) {
      return url;
    }
  }
  if (!resolveDoc) {
    resolveDoc = document.implementation.createHTMLDocument("temp");
    resolveDoc.base = resolveDoc.createElement("base");
    resolveDoc.head.appendChild(resolveDoc.base);
    resolveDoc.anchor = resolveDoc.createElement("a");
    resolveDoc.body.appendChild(resolveDoc.anchor);
  }
  resolveDoc.base.href = baseURI;
  resolveDoc.anchor.href = url;
  return resolveDoc.anchor.href || url;
}
function resolveCss(cssText, baseURI) {
  return cssText.replace(CSS_URL_RX, function(m2, pre, url, post) {
    return pre + "'" + resolveUrl(url.replace(/["']/g, ""), baseURI) + "'" + post;
  });
}
function pathFromUrl(url) {
  return url.substring(0, url.lastIndexOf("/") + 1);
}
var useShadow = !window.ShadyDOM || !window.ShadyDOM.inUse;
var supportsAdoptingStyleSheets$1 = useShadow && "adoptedStyleSheets" in Document.prototype && "replaceSync" in CSSStyleSheet.prototype && // Since spec may change, feature detect exact API we need
(() => {
  try {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync("");
    const host = document.createElement("div");
    host.attachShadow({
      mode: "open"
    });
    host.shadowRoot.adoptedStyleSheets = [sheet];
    return host.shadowRoot.adoptedStyleSheets[0] === sheet;
  } catch (e2) {
    return false;
  }
})();
var rootPath = window.Polymer && window.Polymer.rootPath || pathFromUrl(document.baseURI || window.location.href);
var sanitizeDOMValue = window.Polymer && window.Polymer.sanitizeDOMValue || void 0;
var strictTemplatePolicy = window.Polymer && window.Polymer.strictTemplatePolicy || false;
var allowTemplateFromDomModule = window.Polymer && window.Polymer.allowTemplateFromDomModule || false;
var legacyOptimizations = window.Polymer && window.Polymer.legacyOptimizations || false;
var legacyWarnings = window.Polymer && window.Polymer.legacyWarnings || false;
var syncInitialRender = window.Polymer && window.Polymer.syncInitialRender || false;
var legacyUndefined = window.Polymer && window.Polymer.legacyUndefined || false;
var orderedComputed = window.Polymer && window.Polymer.orderedComputed || false;
var removeNestedTemplates = window.Polymer && window.Polymer.removeNestedTemplates || false;
var fastDomIf = window.Polymer && window.Polymer.fastDomIf || false;
var suppressTemplateNotifications = window.Polymer && window.Polymer.suppressTemplateNotifications || false;
var useAdoptedStyleSheetsWithBuiltCSS = window.Polymer && window.Polymer.useAdoptedStyleSheetsWithBuiltCSS || false;
var dedupeId$1 = 0;
var dedupingMixin = function(mixin) {
  let mixinApplications = (
    /** @type {!MixinFunction} */
    mixin.__mixinApplications
  );
  if (!mixinApplications) {
    mixinApplications = /* @__PURE__ */ new WeakMap();
    mixin.__mixinApplications = mixinApplications;
  }
  let mixinDedupeId = dedupeId$1++;
  function dedupingMixin2(base) {
    let baseSet = (
      /** @type {!MixinFunction} */
      base.__mixinSet
    );
    if (baseSet && baseSet[mixinDedupeId]) {
      return base;
    }
    let map = mixinApplications;
    let extended = map.get(base);
    if (!extended) {
      extended = /** @type {!Function} */
      mixin(base);
      map.set(base, extended);
      let mixinSet = Object.create(
        /** @type {!MixinFunction} */
        extended.__mixinSet || baseSet || null
      );
      mixinSet[mixinDedupeId] = true;
      extended.__mixinSet = mixinSet;
    }
    return extended;
  }
  return dedupingMixin2;
};
var modules = {};
var lcModules = {};
function setModule(id, module) {
  modules[id] = lcModules[id.toLowerCase()] = module;
}
function findModule(id) {
  return modules[id] || lcModules[id.toLowerCase()];
}
function styleOutsideTemplateCheck(inst) {
  if (inst.querySelector("style")) {
    console.warn("dom-module %s has style outside template", inst.id);
  }
}
var DomModule = class extends HTMLElement {
  /** @override */
  static get observedAttributes() {
    return ["id"];
  }
  /**
   * Retrieves the element specified by the css `selector` in the module
   * registered by `id`. For example, this.import('foo', 'img');
   * @param {string} id The id of the dom-module in which to search.
   * @param {string=} selector The css selector by which to find the element.
   * @return {Element} Returns the element which matches `selector` in the
   * module registered at the specified `id`.
   *
   * @export
   * @nocollapse Referred to indirectly in style-gather.js
   */
  static import(id, selector) {
    if (id) {
      let m2 = findModule(id);
      if (m2 && selector) {
        return m2.querySelector(selector);
      }
      return m2;
    }
    return null;
  }
  /* eslint-disable no-unused-vars */
  /**
   * @param {string} name Name of attribute.
   * @param {?string} old Old value of attribute.
   * @param {?string} value Current value of attribute.
   * @param {?string} namespace Attribute namespace.
   * @return {void}
   * @override
   */
  attributeChangedCallback(name, old, value, namespace) {
    if (old !== value) {
      this.register();
    }
  }
  /* eslint-enable no-unused-args */
  /**
   * The absolute URL of the original location of this `dom-module`.
   *
   * This value will differ from this element's `ownerDocument` in the
   * following ways:
   * - Takes into account any `assetpath` attribute added during bundling
   *   to indicate the original location relative to the bundled location
   * - Uses the HTMLImports polyfill's `importForElement` API to ensure
   *   the path is relative to the import document's location since
   *   `ownerDocument` is not currently polyfilled
   */
  get assetpath() {
    if (!this.__assetpath) {
      const owner = window.HTMLImports && HTMLImports.importForElement ? HTMLImports.importForElement(this) || document : this.ownerDocument;
      const url = resolveUrl(this.getAttribute("assetpath") || "", owner.baseURI);
      this.__assetpath = pathFromUrl(url);
    }
    return this.__assetpath;
  }
  /**
   * Registers the dom-module at a given id. This method should only be called
   * when a dom-module is imperatively created. For
   * example, `document.createElement('dom-module').register('foo')`.
   * @param {string=} id The id at which to register the dom-module.
   * @return {void}
   */
  register(id) {
    id = id || this.id;
    if (id) {
      if (strictTemplatePolicy && findModule(id) !== void 0) {
        setModule(id, null);
        throw new Error(`strictTemplatePolicy: dom-module ${id} re-registered`);
      }
      this.id = id;
      setModule(id, this);
      styleOutsideTemplateCheck(this);
    }
  }
};
DomModule.prototype["modules"] = modules;
customElements.define("dom-module", DomModule);
var MODULE_STYLE_LINK_SELECTOR = "link[rel=import][type~=css]";
var INCLUDE_ATTR = "include";
var SHADY_UNSCOPED_ATTR = "shady-unscoped";
function importModule(moduleId) {
  return (
    /** @type {?DomModule} */
    DomModule.import(moduleId)
  );
}
function styleForImport(importDoc) {
  let container = importDoc.body ? importDoc.body : importDoc;
  const importCss = resolveCss(container.textContent, importDoc.baseURI);
  const style2 = document.createElement("style");
  style2.textContent = importCss;
  return style2;
}
function stylesFromModules(moduleIds) {
  const modules2 = moduleIds.trim().split(/\s+/);
  const styles = [];
  for (let i2 = 0; i2 < modules2.length; i2++) {
    styles.push(...stylesFromModule(modules2[i2]));
  }
  return styles;
}
function stylesFromModule(moduleId) {
  const m2 = importModule(moduleId);
  if (!m2) {
    console.warn("Could not find style data in module named", moduleId);
    return [];
  }
  if (m2._styles === void 0) {
    const styles = [];
    styles.push(..._stylesFromModuleImports(m2));
    const template = (
      /** @type {?HTMLTemplateElement} */
      m2.querySelector("template")
    );
    if (template) {
      styles.push(...stylesFromTemplate(
        template,
        /** @type {templateWithAssetPath} */
        m2.assetpath
      ));
    }
    m2._styles = styles;
  }
  return m2._styles;
}
function stylesFromTemplate(template, baseURI) {
  if (!template._styles) {
    const styles = [];
    const e$ = template.content.querySelectorAll("style");
    for (let i2 = 0; i2 < e$.length; i2++) {
      let e2 = e$[i2];
      let include = e2.getAttribute(INCLUDE_ATTR);
      if (include) {
        styles.push(...stylesFromModules(include).filter(function(item, index, self) {
          return self.indexOf(item) === index;
        }));
      }
      if (baseURI) {
        e2.textContent = resolveCss(
          e2.textContent,
          /** @type {string} */
          baseURI
        );
      }
      styles.push(e2);
    }
    template._styles = styles;
  }
  return template._styles;
}
function stylesFromModuleImports(moduleId) {
  let m2 = importModule(moduleId);
  return m2 ? _stylesFromModuleImports(m2) : [];
}
function _stylesFromModuleImports(module) {
  const styles = [];
  const p$ = module.querySelectorAll(MODULE_STYLE_LINK_SELECTOR);
  for (let i2 = 0; i2 < p$.length; i2++) {
    let p2 = p$[i2];
    if (p2.import) {
      const importDoc = p2.import;
      const unscoped = p2.hasAttribute(SHADY_UNSCOPED_ATTR);
      if (unscoped && !importDoc._unscopedStyle) {
        const style2 = styleForImport(importDoc);
        style2.setAttribute(SHADY_UNSCOPED_ATTR, "");
        importDoc._unscopedStyle = style2;
      } else if (!importDoc._style) {
        importDoc._style = styleForImport(importDoc);
      }
      styles.push(unscoped ? importDoc._unscopedStyle : importDoc._style);
    }
  }
  return styles;
}
var wrap = window["ShadyDOM"] && window["ShadyDOM"]["noPatch"] && window["ShadyDOM"]["wrap"] ? window["ShadyDOM"]["wrap"] : window["ShadyDOM"] ? (n2) => ShadyDOM["patch"](n2) : (n2) => n2;
function isPath(path) {
  return path.indexOf(".") >= 0;
}
function root(path) {
  let dotIndex = path.indexOf(".");
  if (dotIndex === -1) {
    return path;
  }
  return path.slice(0, dotIndex);
}
function isAncestor(base, path) {
  return base.indexOf(path + ".") === 0;
}
function isDescendant(base, path) {
  return path.indexOf(base + ".") === 0;
}
function translate(base, newBase, path) {
  return newBase + path.slice(base.length);
}
function matches(base, path) {
  return base === path || isAncestor(base, path) || isDescendant(base, path);
}
function normalize(path) {
  if (Array.isArray(path)) {
    let parts = [];
    for (let i2 = 0; i2 < path.length; i2++) {
      let args = path[i2].toString().split(".");
      for (let j = 0; j < args.length; j++) {
        parts.push(args[j]);
      }
    }
    return parts.join(".");
  } else {
    return path;
  }
}
function split(path) {
  if (Array.isArray(path)) {
    return normalize(path).split(".");
  }
  return path.toString().split(".");
}
function get(root2, path, info) {
  let prop = root2;
  let parts = split(path);
  for (let i2 = 0; i2 < parts.length; i2++) {
    if (!prop) {
      return;
    }
    let part = parts[i2];
    prop = prop[part];
  }
  if (info) {
    info.path = parts.join(".");
  }
  return prop;
}
function set(root2, path, value) {
  let prop = root2;
  let parts = split(path);
  let last = parts[parts.length - 1];
  if (parts.length > 1) {
    for (let i2 = 0; i2 < parts.length - 1; i2++) {
      let part = parts[i2];
      prop = prop[part];
      if (!prop) {
        return;
      }
    }
    prop[last] = value;
  } else {
    prop[path] = value;
  }
  return parts.join(".");
}
var caseMap = {};
var DASH_TO_CAMEL = /-[a-z]/g;
var CAMEL_TO_DASH = /([A-Z])/g;
function dashToCamelCase(dash) {
  return caseMap[dash] || (caseMap[dash] = dash.indexOf("-") < 0 ? dash : dash.replace(DASH_TO_CAMEL, (m2) => m2[1].toUpperCase()));
}
function camelToDashCase(camel) {
  return caseMap[camel] || (caseMap[camel] = camel.replace(CAMEL_TO_DASH, "-$1").toLowerCase());
}
var microtaskCurrHandle$1 = 0;
var microtaskLastHandle$1 = 0;
var microtaskCallbacks$1 = [];
var microtaskNodeContent = 0;
var microtaskScheduled$1 = false;
var microtaskNode = document.createTextNode("");
new window.MutationObserver(microtaskFlush$1).observe(microtaskNode, {
  characterData: true
});
function microtaskFlush$1() {
  microtaskScheduled$1 = false;
  const len = microtaskCallbacks$1.length;
  for (let i2 = 0; i2 < len; i2++) {
    let cb = microtaskCallbacks$1[i2];
    if (cb) {
      try {
        cb();
      } catch (e2) {
        setTimeout(() => {
          throw e2;
        });
      }
    }
  }
  microtaskCallbacks$1.splice(0, len);
  microtaskLastHandle$1 += len;
}
var timeOut$1 = {
  /**
   * Returns a sub-module with the async interface providing the provided
   * delay.
   *
   * @memberof timeOut
   * @param {number=} delay Time to wait before calling callbacks in ms
   * @return {!AsyncInterface} An async timeout interface
   */
  after(delay) {
    return {
      run(fn) {
        return window.setTimeout(fn, delay);
      },
      cancel(handle) {
        window.clearTimeout(handle);
      }
    };
  },
  /**
   * Enqueues a function called in the next task.
   *
   * @memberof timeOut
   * @param {!Function} fn Callback to run
   * @param {number=} delay Delay in milliseconds
   * @return {number} Handle used for canceling task
   */
  run(fn, delay) {
    return window.setTimeout(fn, delay);
  },
  /**
   * Cancels a previously enqueued `timeOut` callback.
   *
   * @memberof timeOut
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */
  cancel(handle) {
    window.clearTimeout(handle);
  }
};
var microTask$1 = {
  /**
   * Enqueues a function called at microtask timing.
   *
   * @memberof microTask
   * @param {!Function=} callback Callback to run
   * @return {number} Handle used for canceling task
   */
  run(callback) {
    if (!microtaskScheduled$1) {
      microtaskScheduled$1 = true;
      microtaskNode.textContent = microtaskNodeContent++;
    }
    microtaskCallbacks$1.push(callback);
    return microtaskCurrHandle$1++;
  },
  /**
   * Cancels a previously enqueued `microTask` callback.
   *
   * @memberof microTask
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */
  cancel(handle) {
    const idx = handle - microtaskLastHandle$1;
    if (idx >= 0) {
      if (!microtaskCallbacks$1[idx]) {
        throw new Error("invalid async handle: " + handle);
      }
      microtaskCallbacks$1[idx] = null;
    }
  }
};
var microtask = microTask$1;
var PropertiesChanged = dedupingMixin(
  /**
   * @template T
   * @param {function(new:T)} superClass Class to apply mixin to.
   * @return {function(new:T)} superClass with mixin applied.
   */
  (superClass) => {
    class PropertiesChanged2 extends superClass {
      /**
       * Creates property accessors for the given property names.
       * @param {!Object} props Object whose keys are names of accessors.
       * @return {void}
       * @protected
       * @nocollapse
       */
      static createProperties(props) {
        const proto2 = this.prototype;
        for (let prop in props) {
          if (!(prop in proto2)) {
            proto2._createPropertyAccessor(prop);
          }
        }
      }
      /**
       * Returns an attribute name that corresponds to the given property.
       * The attribute name is the lowercased property name. Override to
       * customize this mapping.
       * @param {string} property Property to convert
       * @return {string} Attribute name corresponding to the given property.
       *
       * @protected
       * @nocollapse
       */
      static attributeNameForProperty(property) {
        return property.toLowerCase();
      }
      /**
       * Override point to provide a type to which to deserialize a value to
       * a given property.
       * @param {string} name Name of property
       *
       * @protected
       * @nocollapse
       */
      static typeForProperty(name) {
      }
      //eslint-disable-line no-unused-vars
      /**
       * Creates a setter/getter pair for the named property with its own
       * local storage.  The getter returns the value in the local storage,
       * and the setter calls `_setProperty`, which updates the local storage
       * for the property and enqueues a `_propertiesChanged` callback.
       *
       * This method may be called on a prototype or an instance.  Calling
       * this method may overwrite a property value that already exists on
       * the prototype/instance by creating the accessor.
       *
       * @param {string} property Name of the property
       * @param {boolean=} readOnly When true, no setter is created; the
       *   protected `_setProperty` function must be used to set the property
       * @return {void}
       * @protected
       * @override
       */
      _createPropertyAccessor(property, readOnly) {
        this._addPropertyToAttributeMap(property);
        if (!this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor", this))) {
          this.__dataHasAccessor = Object.assign({}, this.__dataHasAccessor);
        }
        if (!this.__dataHasAccessor[property]) {
          this.__dataHasAccessor[property] = true;
          this._definePropertyAccessor(property, readOnly);
        }
      }
      /**
       * Adds the given `property` to a map matching attribute names
       * to property names, using `attributeNameForProperty`. This map is
       * used when deserializing attribute values to properties.
       *
       * @param {string} property Name of the property
       * @override
       */
      _addPropertyToAttributeMap(property) {
        if (!this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes", this))) {
          this.__dataAttributes = Object.assign({}, this.__dataAttributes);
        }
        let attr = this.__dataAttributes[property];
        if (!attr) {
          attr = this.constructor.attributeNameForProperty(property);
          this.__dataAttributes[attr] = property;
        }
        return attr;
      }
      /**
       * Defines a property accessor for the given property.
       * @param {string} property Name of the property
       * @param {boolean=} readOnly When true, no setter is created
       * @return {void}
       * @override
       */
      _definePropertyAccessor(property, readOnly) {
        Object.defineProperty(this, property, {
          /* eslint-disable valid-jsdoc */
          /** @this {PropertiesChanged} */
          get() {
            return this.__data[property];
          },
          /** @this {PropertiesChanged} */
          set: readOnly ? function() {
          } : function(value) {
            if (this._setPendingProperty(property, value, true)) {
              this._invalidateProperties();
            }
          }
          /* eslint-enable */
        });
      }
      constructor() {
        super();
        this.__dataEnabled = false;
        this.__dataReady = false;
        this.__dataInvalid = false;
        this.__data = {};
        this.__dataPending = null;
        this.__dataOld = null;
        this.__dataInstanceProps = null;
        this.__dataCounter = 0;
        this.__serializing = false;
        this._initializeProperties();
      }
      /**
       * Lifecycle callback called when properties are enabled via
       * `_enableProperties`.
       *
       * Users may override this function to implement behavior that is
       * dependent on the element having its property data initialized, e.g.
       * from defaults (initialized from `constructor`, `_initializeProperties`),
       * `attributeChangedCallback`, or values propagated from host e.g. via
       * bindings.  `super.ready()` must be called to ensure the data system
       * becomes enabled.
       *
       * @return {void}
       * @public
       * @override
       */
      ready() {
        this.__dataReady = true;
        this._flushProperties();
      }
      /**
       * Initializes the local storage for property accessors.
       *
       * Provided as an override point for performing any setup work prior
       * to initializing the property accessor system.
       *
       * @return {void}
       * @protected
       * @override
       */
      _initializeProperties() {
        for (let p2 in this.__dataHasAccessor) {
          if (this.hasOwnProperty(p2)) {
            this.__dataInstanceProps = this.__dataInstanceProps || {};
            this.__dataInstanceProps[p2] = this[p2];
            delete this[p2];
          }
        }
      }
      /**
       * Called at ready time with bag of instance properties that overwrote
       * accessors when the element upgraded.
       *
       * The default implementation sets these properties back into the
       * setter at ready time.  This method is provided as an override
       * point for customizing or providing more efficient initialization.
       *
       * @param {Object} props Bag of property values that were overwritten
       *   when creating property accessors.
       * @return {void}
       * @protected
       * @override
       */
      _initializeInstanceProperties(props) {
        Object.assign(this, props);
      }
      /**
       * Updates the local storage for a property (via `_setPendingProperty`)
       * and enqueues a `_proeprtiesChanged` callback.
       *
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @return {void}
       * @protected
       * @override
       */
      _setProperty(property, value) {
        if (this._setPendingProperty(property, value)) {
          this._invalidateProperties();
        }
      }
      /**
       * Returns the value for the given property.
       * @param {string} property Name of property
       * @return {*} Value for the given property
       * @protected
       * @override
       */
      _getProperty(property) {
        return this.__data[property];
      }
      /* eslint-disable no-unused-vars */
      /**
       * Updates the local storage for a property, records the previous value,
       * and adds it to the set of "pending changes" that will be passed to the
       * `_propertiesChanged` callback.  This method does not enqueue the
       * `_propertiesChanged` callback.
       *
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @param {boolean=} ext Not used here; affordance for closure
       * @return {boolean} Returns true if the property changed
       * @protected
       * @override
       */
      _setPendingProperty(property, value, ext) {
        let old = this.__data[property];
        let changed = this._shouldPropertyChange(property, value, old);
        if (changed) {
          if (!this.__dataPending) {
            this.__dataPending = {};
            this.__dataOld = {};
          }
          if (this.__dataOld && !(property in this.__dataOld)) {
            this.__dataOld[property] = old;
          }
          this.__data[property] = value;
          this.__dataPending[property] = value;
        }
        return changed;
      }
      /* eslint-enable */
      /**
       * @param {string} property Name of the property
       * @return {boolean} Returns true if the property is pending.
       */
      _isPropertyPending(property) {
        return !!(this.__dataPending && this.__dataPending.hasOwnProperty(property));
      }
      /**
       * Marks the properties as invalid, and enqueues an async
       * `_propertiesChanged` callback.
       *
       * @return {void}
       * @protected
       * @override
       */
      _invalidateProperties() {
        if (!this.__dataInvalid && this.__dataReady) {
          this.__dataInvalid = true;
          microtask.run(() => {
            if (this.__dataInvalid) {
              this.__dataInvalid = false;
              this._flushProperties();
            }
          });
        }
      }
      /**
       * Call to enable property accessor processing. Before this method is
       * called accessor values will be set but side effects are
       * queued. When called, any pending side effects occur immediately.
       * For elements, generally `connectedCallback` is a normal spot to do so.
       * It is safe to call this method multiple times as it only turns on
       * property accessors once.
       *
       * @return {void}
       * @protected
       * @override
       */
      _enableProperties() {
        if (!this.__dataEnabled) {
          this.__dataEnabled = true;
          if (this.__dataInstanceProps) {
            this._initializeInstanceProperties(this.__dataInstanceProps);
            this.__dataInstanceProps = null;
          }
          this.ready();
        }
      }
      /**
       * Calls the `_propertiesChanged` callback with the current set of
       * pending changes (and old values recorded when pending changes were
       * set), and resets the pending set of changes. Generally, this method
       * should not be called in user code.
       *
       * @return {void}
       * @protected
       * @override
       */
      _flushProperties() {
        this.__dataCounter++;
        const props = this.__data;
        const changedProps = this.__dataPending;
        const old = this.__dataOld;
        if (this._shouldPropertiesChange(props, changedProps, old)) {
          this.__dataPending = null;
          this.__dataOld = null;
          this._propertiesChanged(props, changedProps, old);
        }
        this.__dataCounter--;
      }
      /**
       * Called in `_flushProperties` to determine if `_propertiesChanged`
       * should be called. The default implementation returns true if
       * properties are pending. Override to customize when
       * `_propertiesChanged` is called.
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {boolean} true if changedProps is truthy
       * @override
       */
      _shouldPropertiesChange(currentProps, changedProps, oldProps) {
        return Boolean(changedProps);
      }
      /**
       * Callback called when any properties with accessors created via
       * `_createPropertyAccessor` have been set.
       *
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {void}
       * @protected
       * @override
       */
      _propertiesChanged(currentProps, changedProps, oldProps) {
      }
      /**
       * Method called to determine whether a property value should be
       * considered as a change and cause the `_propertiesChanged` callback
       * to be enqueued.
       *
       * The default implementation returns `true` if a strict equality
       * check fails. The method always returns false for `NaN`.
       *
       * Override this method to e.g. provide stricter checking for
       * Objects/Arrays when using immutable patterns.
       *
       * @param {string} property Property name
       * @param {*} value New property value
       * @param {*} old Previous property value
       * @return {boolean} Whether the property should be considered a change
       *   and enqueue a `_proeprtiesChanged` callback
       * @protected
       * @override
       */
      _shouldPropertyChange(property, value, old) {
        return (
          // Strict equality check
          old !== value && // This ensures (old==NaN, value==NaN) always returns false
          (old === old || value === value)
        );
      }
      /**
       * Implements native Custom Elements `attributeChangedCallback` to
       * set an attribute value to a property via `_attributeToProperty`.
       *
       * @param {string} name Name of attribute that changed
       * @param {?string} old Old attribute value
       * @param {?string} value New attribute value
       * @param {?string} namespace Attribute namespace.
       * @return {void}
       * @suppress {missingProperties} Super may or may not implement the callback
       * @override
       */
      attributeChangedCallback(name, old, value, namespace) {
        if (old !== value) {
          this._attributeToProperty(name, value);
        }
        if (super.attributeChangedCallback) {
          super.attributeChangedCallback(name, old, value, namespace);
        }
      }
      /**
       * Deserializes an attribute to its associated property.
       *
       * This method calls the `_deserializeValue` method to convert the string to
       * a typed value.
       *
       * @param {string} attribute Name of attribute to deserialize.
       * @param {?string} value of the attribute.
       * @param {*=} type type to deserialize to, defaults to the value
       * returned from `typeForProperty`
       * @return {void}
       * @override
       */
      _attributeToProperty(attribute, value, type) {
        if (!this.__serializing) {
          const map = this.__dataAttributes;
          const property = map && map[attribute] || attribute;
          this[property] = this._deserializeValue(value, type || this.constructor.typeForProperty(property));
        }
      }
      /**
       * Serializes a property to its associated attribute.
       *
       * @suppress {invalidCasts} Closure can't figure out `this` is an element.
       *
       * @param {string} property Property name to reflect.
       * @param {string=} attribute Attribute name to reflect to.
       * @param {*=} value Property value to refect.
       * @return {void}
       * @override
       */
      _propertyToAttribute(property, attribute, value) {
        this.__serializing = true;
        value = arguments.length < 3 ? this[property] : value;
        this._valueToNodeAttribute(
          /** @type {!HTMLElement} */
          this,
          value,
          attribute || this.constructor.attributeNameForProperty(property)
        );
        this.__serializing = false;
      }
      /**
       * Sets a typed value to an HTML attribute on a node.
       *
       * This method calls the `_serializeValue` method to convert the typed
       * value to a string.  If the `_serializeValue` method returns `undefined`,
       * the attribute will be removed (this is the default for boolean
       * type `false`).
       *
       * @param {Element} node Element to set attribute to.
       * @param {*} value Value to serialize.
       * @param {string} attribute Attribute name to serialize to.
       * @return {void}
       * @override
       */
      _valueToNodeAttribute(node, value, attribute) {
        const str = this._serializeValue(value);
        if (attribute === "class" || attribute === "name" || attribute === "slot") {
          node = /** @type {?Element} */
          wrap(node);
        }
        if (str === void 0) {
          node.removeAttribute(attribute);
        } else {
          node.setAttribute(
            attribute,
            // Closure's type for `setAttribute`'s second parameter incorrectly
            // excludes `TrustedScript`.
            str === "" && window.trustedTypes ? (
              /** @type {?} */
              window.trustedTypes.emptyScript
            ) : str
          );
        }
      }
      /**
       * Converts a typed JavaScript value to a string.
       *
       * This method is called when setting JS property values to
       * HTML attributes.  Users may override this method to provide
       * serialization for custom types.
       *
       * @param {*} value Property value to serialize.
       * @return {string | undefined} String serialized from the provided
       * property  value.
       * @override
       */
      _serializeValue(value) {
        switch (typeof value) {
          case "boolean":
            return value ? "" : void 0;
          default:
            return value != null ? value.toString() : void 0;
        }
      }
      /**
       * Converts a string to a typed JavaScript value.
       *
       * This method is called when reading HTML attribute values to
       * JS properties.  Users may override this method to provide
       * deserialization for custom `type`s. Types for `Boolean`, `String`,
       * and `Number` convert attributes to the expected types.
       *
       * @param {?string} value Value to deserialize.
       * @param {*=} type Type to deserialize the string to.
       * @return {*} Typed value deserialized from the provided string.
       * @override
       */
      _deserializeValue(value, type) {
        switch (type) {
          case Boolean:
            return value !== null;
          case Number:
            return Number(value);
          default:
            return value;
        }
      }
    }
    return PropertiesChanged2;
  }
);
var nativeProperties = {};
var proto = HTMLElement.prototype;
while (proto) {
  let props = Object.getOwnPropertyNames(proto);
  for (let i2 = 0; i2 < props.length; i2++) {
    nativeProperties[props[i2]] = true;
  }
  proto = Object.getPrototypeOf(proto);
}
var isTrustedType = (() => {
  if (!window.trustedTypes) {
    return () => false;
  }
  return (val) => trustedTypes.isHTML(val) || trustedTypes.isScript(val) || trustedTypes.isScriptURL(val);
})();
function saveAccessorValue(model, property) {
  if (!nativeProperties[property]) {
    let value = model[property];
    if (value !== void 0) {
      if (model.__data) {
        model._setPendingProperty(property, value);
      } else {
        if (!model.__dataProto) {
          model.__dataProto = {};
        } else if (!model.hasOwnProperty(JSCompiler_renameProperty("__dataProto", model))) {
          model.__dataProto = Object.create(model.__dataProto);
        }
        model.__dataProto[property] = value;
      }
    }
  }
}
var PropertyAccessors = dedupingMixin((superClass) => {
  const base = PropertiesChanged(superClass);
  class PropertyAccessors2 extends base {
    /**
     * Generates property accessors for all attributes in the standard
     * static `observedAttributes` array.
     *
     * Attribute names are mapped to property names using the `dash-case` to
     * `camelCase` convention
     *
     * @return {void}
     * @nocollapse
     */
    static createPropertiesForAttributes() {
      let a$ = (
        /** @type {?} */
        this.observedAttributes
      );
      for (let i2 = 0; i2 < a$.length; i2++) {
        this.prototype._createPropertyAccessor(dashToCamelCase(a$[i2]));
      }
    }
    /**
     * Returns an attribute name that corresponds to the given property.
     * By default, converts camel to dash case, e.g. `fooBar` to `foo-bar`.
     * @param {string} property Property to convert
     * @return {string} Attribute name corresponding to the given property.
     *
     * @protected
     * @nocollapse
     */
    static attributeNameForProperty(property) {
      return camelToDashCase(property);
    }
    /**
     * Overrides PropertiesChanged implementation to initialize values for
     * accessors created for values that already existed on the element
     * prototype.
     *
     * @return {void}
     * @protected
     * @override
     */
    _initializeProperties() {
      if (this.__dataProto) {
        this._initializeProtoProperties(this.__dataProto);
        this.__dataProto = null;
      }
      super._initializeProperties();
    }
    /**
     * Called at instance time with bag of properties that were overwritten
     * by accessors on the prototype when accessors were created.
     *
     * The default implementation sets these properties back into the
     * setter at instance time.  This method is provided as an override
     * point for customizing or providing more efficient initialization.
     *
     * @param {Object} props Bag of property values that were overwritten
     *   when creating property accessors.
     * @return {void}
     * @protected
     * @override
     */
    _initializeProtoProperties(props) {
      for (let p2 in props) {
        this._setProperty(p2, props[p2]);
      }
    }
    /**
     * Ensures the element has the given attribute. If it does not,
     * assigns the given value to the attribute.
     *
     * @suppress {invalidCasts} Closure can't figure out `this` is infact an
     *     element
     *
     * @param {string} attribute Name of attribute to ensure is set.
     * @param {string} value of the attribute.
     * @return {void}
     * @override
     */
    _ensureAttribute(attribute, value) {
      const el = (
        /** @type {!HTMLElement} */
        this
      );
      if (!el.hasAttribute(attribute)) {
        this._valueToNodeAttribute(el, value, attribute);
      }
    }
    /**
     * Overrides PropertiesChanged implemention to serialize objects as JSON.
     *
     * @param {*} value Property value to serialize.
     * @return {string | undefined} String serialized from the provided property
     *     value.
     * @override
     */
    _serializeValue(value) {
      switch (typeof value) {
        case "object":
          if (value instanceof Date) {
            return value.toString();
          } else if (value) {
            if (isTrustedType(value)) {
              return (
                /** @type {?} */
                value
              );
            }
            try {
              return JSON.stringify(value);
            } catch (x2) {
              return "";
            }
          }
        default:
          return super._serializeValue(value);
      }
    }
    /**
     * Converts a string to a typed JavaScript value.
     *
     * This method is called by Polymer when reading HTML attribute values to
     * JS properties.  Users may override this method on Polymer element
     * prototypes to provide deserialization for custom `type`s.  Note,
     * the `type` argument is the value of the `type` field provided in the
     * `properties` configuration object for a given property, and is
     * by convention the constructor for the type to deserialize.
     *
     *
     * @param {?string} value Attribute value to deserialize.
     * @param {*=} type Type to deserialize the string to.
     * @return {*} Typed value deserialized from the provided string.
     * @override
     */
    _deserializeValue(value, type) {
      let outValue;
      switch (type) {
        case Object:
          try {
            outValue = JSON.parse(
              /** @type {string} */
              value
            );
          } catch (x2) {
            outValue = value;
          }
          break;
        case Array:
          try {
            outValue = JSON.parse(
              /** @type {string} */
              value
            );
          } catch (x2) {
            outValue = null;
            console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${value}`);
          }
          break;
        case Date:
          outValue = isNaN(value) ? String(value) : Number(value);
          outValue = new Date(outValue);
          break;
        default:
          outValue = super._deserializeValue(value, type);
          break;
      }
      return outValue;
    }
    /* eslint-enable no-fallthrough */
    /**
     * Overrides PropertiesChanged implementation to save existing prototype
     * property value so that it can be reset.
     * @param {string} property Name of the property
     * @param {boolean=} readOnly When true, no setter is created
     *
     * When calling on a prototype, any overwritten values are saved in
     * `__dataProto`, and it is up to the subclasser to decide how/when
     * to set those properties back into the accessor.  When calling on an
     * instance, the overwritten value is set via `_setPendingProperty`,
     * and the user should call `_invalidateProperties` or `_flushProperties`
     * for the values to take effect.
     * @protected
     * @return {void}
     * @override
     */
    _definePropertyAccessor(property, readOnly) {
      saveAccessorValue(this, property);
      super._definePropertyAccessor(property, readOnly);
    }
    /**
     * Returns true if this library created an accessor for the given property.
     *
     * @param {string} property Property name
     * @return {boolean} True if an accessor was created
     * @override
     */
    _hasAccessor(property) {
      return this.__dataHasAccessor && this.__dataHasAccessor[property];
    }
    /**
     * Returns true if the specified property has a pending change.
     *
     * @param {string} prop Property name
     * @return {boolean} True if property has a pending change
     * @protected
     * @override
     */
    _isPropertyPending(prop) {
      return Boolean(this.__dataPending && prop in this.__dataPending);
    }
  }
  return PropertyAccessors2;
});
var templateExtensions = {
  "dom-if": true,
  "dom-repeat": true
};
var placeholderBugDetect = false;
var placeholderBug = false;
function hasPlaceholderBug() {
  if (!placeholderBugDetect) {
    placeholderBugDetect = true;
    const t2 = document.createElement("textarea");
    t2.placeholder = "a";
    placeholderBug = t2.placeholder === t2.textContent;
  }
  return placeholderBug;
}
function fixPlaceholder(node) {
  if (hasPlaceholderBug() && node.localName === "textarea" && node.placeholder && node.placeholder === node.textContent) {
    node.textContent = null;
  }
}
var copyAttributeWithTemplateEventPolicy = (() => {
  const polymerTemplateEventAttributePolicy = window.trustedTypes && window.trustedTypes.createPolicy("polymer-template-event-attribute-policy", {
    createScript: (x2) => x2
  });
  return (dest, src, name) => {
    const value = src.getAttribute(name);
    if (polymerTemplateEventAttributePolicy && name.startsWith("on-")) {
      dest.setAttribute(name, polymerTemplateEventAttributePolicy.createScript(value, name));
      return;
    }
    dest.setAttribute(name, value);
  };
})();
function wrapTemplateExtension(node) {
  let is = node.getAttribute("is");
  if (is && templateExtensions[is]) {
    let t2 = node;
    t2.removeAttribute("is");
    node = t2.ownerDocument.createElement(is);
    t2.parentNode.replaceChild(node, t2);
    node.appendChild(t2);
    while (t2.attributes.length) {
      const {
        name
      } = t2.attributes[0];
      copyAttributeWithTemplateEventPolicy(node, t2, name);
      t2.removeAttribute(name);
    }
  }
  return node;
}
function findTemplateNode(root2, nodeInfo) {
  let parent = nodeInfo.parentInfo && findTemplateNode(root2, nodeInfo.parentInfo);
  if (parent) {
    for (let n2 = parent.firstChild, i2 = 0; n2; n2 = n2.nextSibling) {
      if (nodeInfo.parentIndex === i2++) {
        return n2;
      }
    }
  } else {
    return root2;
  }
}
function applyIdToMap(inst, map, node, nodeInfo) {
  if (nodeInfo.id) {
    map[nodeInfo.id] = node;
  }
}
function applyEventListener(inst, node, nodeInfo) {
  if (nodeInfo.events && nodeInfo.events.length) {
    for (let j = 0, e$ = nodeInfo.events, e2; j < e$.length && (e2 = e$[j]); j++) {
      inst._addMethodEventListenerToNode(node, e2.name, e2.value, inst);
    }
  }
}
function applyTemplateInfo(inst, node, nodeInfo, parentTemplateInfo) {
  if (nodeInfo.templateInfo) {
    node._templateInfo = nodeInfo.templateInfo;
    node._parentTemplateInfo = parentTemplateInfo;
  }
}
function createNodeEventHandler(context, eventName, methodName) {
  context = context._methodHost || context;
  let handler = function(e2) {
    if (context[methodName]) {
      context[methodName](e2, e2.detail);
    } else {
      console.warn("listener method `" + methodName + "` not defined");
    }
  };
  return handler;
}
var TemplateStamp = dedupingMixin(
  /**
   * @template T
   * @param {function(new:T)} superClass Class to apply mixin to.
   * @return {function(new:T)} superClass with mixin applied.
   */
  (superClass) => {
    class TemplateStamp2 extends superClass {
      /**
       * Scans a template to produce template metadata.
       *
       * Template-specific metadata are stored in the object returned, and node-
       * specific metadata are stored in objects in its flattened `nodeInfoList`
       * array.  Only nodes in the template that were parsed as nodes of
       * interest contain an object in `nodeInfoList`.  Each `nodeInfo` object
       * contains an `index` (`childNodes` index in parent) and optionally
       * `parent`, which points to node info of its parent (including its index).
       *
       * The template metadata object returned from this method has the following
       * structure (many fields optional):
       *
       * ```js
       *   {
       *     // Flattened list of node metadata (for nodes that generated metadata)
       *     nodeInfoList: [
       *       {
       *         // `id` attribute for any nodes with id's for generating `$` map
       *         id: {string},
       *         // `on-event="handler"` metadata
       *         events: [
       *           {
       *             name: {string},   // event name
       *             value: {string},  // handler method name
       *           }, ...
       *         ],
       *         // Notes when the template contained a `<slot>` for shady DOM
       *         // optimization purposes
       *         hasInsertionPoint: {boolean},
       *         // For nested `<template>`` nodes, nested template metadata
       *         templateInfo: {object}, // nested template metadata
       *         // Metadata to allow efficient retrieval of instanced node
       *         // corresponding to this metadata
       *         parentInfo: {number},   // reference to parent nodeInfo>
       *         parentIndex: {number},  // index in parent's `childNodes` collection
       *         infoIndex: {number},    // index of this `nodeInfo` in `templateInfo.nodeInfoList`
       *       },
       *       ...
       *     ],
       *     // When true, the template had the `strip-whitespace` attribute
       *     // or was nested in a template with that setting
       *     stripWhitespace: {boolean},
       *     // For nested templates, nested template content is moved into
       *     // a document fragment stored here; this is an optimization to
       *     // avoid the cost of nested template cloning
       *     content: {DocumentFragment}
       *   }
       * ```
       *
       * This method kicks off a recursive treewalk as follows:
       *
       * ```
       *    _parseTemplate <---------------------+
       *      _parseTemplateContent              |
       *        _parseTemplateNode  <------------|--+
       *          _parseTemplateNestedTemplate --+  |
       *          _parseTemplateChildNodes ---------+
       *          _parseTemplateNodeAttributes
       *            _parseTemplateNodeAttribute
       *
       * ```
       *
       * These methods may be overridden to add custom metadata about templates
       * to either `templateInfo` or `nodeInfo`.
       *
       * Note that this method may be destructive to the template, in that
       * e.g. event annotations may be removed after being noted in the
       * template metadata.
       *
       * @param {!HTMLTemplateElement} template Template to parse
       * @param {TemplateInfo=} outerTemplateInfo Template metadata from the outer
       *   template, for parsing nested templates
       * @return {!TemplateInfo} Parsed template metadata
       * @nocollapse
       */
      static _parseTemplate(template, outerTemplateInfo) {
        if (!template._templateInfo) {
          let templateInfo = template._templateInfo = {};
          templateInfo.nodeInfoList = [];
          templateInfo.nestedTemplate = Boolean(outerTemplateInfo);
          templateInfo.stripWhiteSpace = outerTemplateInfo && outerTemplateInfo.stripWhiteSpace || template.hasAttribute && template.hasAttribute("strip-whitespace");
          this._parseTemplateContent(
            template,
            templateInfo,
            /** @type {?} */
            {
              parent: null
            }
          );
        }
        return template._templateInfo;
      }
      /**
       * See docs for _parseTemplateNode.
       *
       * @param {!HTMLTemplateElement} template .
       * @param {!TemplateInfo} templateInfo .
       * @param {!NodeInfo} nodeInfo .
       * @return {boolean} .
       * @nocollapse
       */
      static _parseTemplateContent(template, templateInfo, nodeInfo) {
        return this._parseTemplateNode(template.content, templateInfo, nodeInfo);
      }
      /**
       * Parses template node and adds template and node metadata based on
       * the current node, and its `childNodes` and `attributes`.
       *
       * This method may be overridden to add custom node or template specific
       * metadata based on this node.
       *
       * @param {Node} node Node to parse
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @nocollapse
       */
      static _parseTemplateNode(node, templateInfo, nodeInfo) {
        let noted = false;
        let element = (
          /** @type {!HTMLTemplateElement} */
          node
        );
        if (element.localName == "template" && !element.hasAttribute("preserve-content")) {
          noted = this._parseTemplateNestedTemplate(element, templateInfo, nodeInfo) || noted;
        } else if (element.localName === "slot") {
          templateInfo.hasInsertionPoint = true;
        }
        fixPlaceholder(element);
        if (element.firstChild) {
          this._parseTemplateChildNodes(element, templateInfo, nodeInfo);
        }
        if (element.hasAttributes && element.hasAttributes()) {
          noted = this._parseTemplateNodeAttributes(element, templateInfo, nodeInfo) || noted;
        }
        return noted || nodeInfo.noted;
      }
      /**
       * Parses template child nodes for the given root node.
       *
       * This method also wraps whitelisted legacy template extensions
       * (`is="dom-if"` and `is="dom-repeat"`) with their equivalent element
       * wrappers, collapses text nodes, and strips whitespace from the template
       * if the `templateInfo.stripWhitespace` setting was provided.
       *
       * @param {Node} root Root node whose `childNodes` will be parsed
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {void}
       */
      static _parseTemplateChildNodes(root2, templateInfo, nodeInfo) {
        if (root2.localName === "script" || root2.localName === "style") {
          return;
        }
        for (let node = root2.firstChild, parentIndex = 0, next; node; node = next) {
          if (node.localName == "template") {
            node = wrapTemplateExtension(node);
          }
          next = node.nextSibling;
          if (node.nodeType === Node.TEXT_NODE) {
            let n2 = next;
            while (n2 && n2.nodeType === Node.TEXT_NODE) {
              node.textContent += n2.textContent;
              next = n2.nextSibling;
              root2.removeChild(n2);
              n2 = next;
            }
            if (templateInfo.stripWhiteSpace && !node.textContent.trim()) {
              root2.removeChild(node);
              continue;
            }
          }
          let childInfo = (
            /** @type {!NodeInfo} */
            {
              parentIndex,
              parentInfo: nodeInfo
            }
          );
          if (this._parseTemplateNode(node, templateInfo, childInfo)) {
            childInfo.infoIndex = templateInfo.nodeInfoList.push(childInfo) - 1;
          }
          if (node.parentNode) {
            parentIndex++;
          }
        }
      }
      /**
       * Parses template content for the given nested `<template>`.
       *
       * Nested template info is stored as `templateInfo` in the current node's
       * `nodeInfo`. `template.content` is removed and stored in `templateInfo`.
       * It will then be the responsibility of the host to set it back to the
       * template and for users stamping nested templates to use the
       * `_contentForTemplate` method to retrieve the content for this template
       * (an optimization to avoid the cost of cloning nested template content).
       *
       * @param {HTMLTemplateElement} node Node to parse (a <template>)
       * @param {TemplateInfo} outerTemplateInfo Template metadata for current template
       *   that includes the template `node`
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @nocollapse
       */
      static _parseTemplateNestedTemplate(node, outerTemplateInfo, nodeInfo) {
        let element = (
          /** @type {!HTMLTemplateElement} */
          node
        );
        let templateInfo = this._parseTemplate(element, outerTemplateInfo);
        let content = templateInfo.content = element.content.ownerDocument.createDocumentFragment();
        content.appendChild(element.content);
        nodeInfo.templateInfo = templateInfo;
        return true;
      }
      /**
       * Parses template node attributes and adds node metadata to `nodeInfo`
       * for nodes of interest.
       *
       * @param {Element} node Node to parse
       * @param {!TemplateInfo} templateInfo Template metadata for current
       *     template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @nocollapse
       */
      static _parseTemplateNodeAttributes(node, templateInfo, nodeInfo) {
        let noted = false;
        let attrs = Array.from(node.attributes);
        for (let i2 = attrs.length - 1, a2; a2 = attrs[i2]; i2--) {
          noted = this._parseTemplateNodeAttribute(node, templateInfo, nodeInfo, a2.name, a2.value) || noted;
        }
        return noted;
      }
      /**
       * Parses a single template node attribute and adds node metadata to
       * `nodeInfo` for attributes of interest.
       *
       * This implementation adds metadata for `on-event="handler"` attributes
       * and `id` attributes.
       *
       * @param {Element} node Node to parse
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @param {string} name Attribute name
       * @param {string} value Attribute value
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @nocollapse
       */
      static _parseTemplateNodeAttribute(node, templateInfo, nodeInfo, name, value) {
        if (name.slice(0, 3) === "on-") {
          node.removeAttribute(name);
          nodeInfo.events = nodeInfo.events || [];
          nodeInfo.events.push({
            name: name.slice(3),
            value
          });
          return true;
        } else if (name === "id") {
          nodeInfo.id = value;
          return true;
        }
        return false;
      }
      /**
       * Returns the `content` document fragment for a given template.
       *
       * For nested templates, Polymer performs an optimization to cache nested
       * template content to avoid the cost of cloning deeply nested templates.
       * This method retrieves the cached content for a given template.
       *
       * @param {HTMLTemplateElement} template Template to retrieve `content` for
       * @return {DocumentFragment} Content fragment
       * @nocollapse
       */
      static _contentForTemplate(template) {
        let templateInfo = (
          /** @type {HTMLTemplateElementWithInfo} */
          template._templateInfo
        );
        return templateInfo && templateInfo.content || template.content;
      }
      /**
       * Clones the provided template content and returns a document fragment
       * containing the cloned dom.
       *
       * The template is parsed (once and memoized) using this library's
       * template parsing features, and provides the following value-added
       * features:
       * * Adds declarative event listeners for `on-event="handler"` attributes
       * * Generates an "id map" for all nodes with id's under `$` on returned
       *   document fragment
       * * Passes template info including `content` back to templates as
       *   `_templateInfo` (a performance optimization to avoid deep template
       *   cloning)
       *
       * Note that the memoized template parsing process is destructive to the
       * template: attributes for bindings and declarative event listeners are
       * removed after being noted in notes, and any nested `<template>.content`
       * is removed and stored in notes as well.
       *
       * @param {!HTMLTemplateElement} template Template to stamp
       * @param {TemplateInfo=} templateInfo Optional template info associated
       *   with the template to be stamped; if omitted the template will be
       *   automatically parsed.
       * @return {!StampedTemplate} Cloned template content
       * @override
       */
      _stampTemplate(template, templateInfo) {
        if (template && !template.content && window.HTMLTemplateElement && HTMLTemplateElement.decorate) {
          HTMLTemplateElement.decorate(template);
        }
        templateInfo = templateInfo || this.constructor._parseTemplate(template);
        let nodeInfo = templateInfo.nodeInfoList;
        let content = templateInfo.content || template.content;
        let dom = (
          /** @type {DocumentFragment} */
          document.importNode(content, true)
        );
        dom.__noInsertionPoint = !templateInfo.hasInsertionPoint;
        let nodes = dom.nodeList = new Array(nodeInfo.length);
        dom.$ = {};
        for (let i2 = 0, l2 = nodeInfo.length, info; i2 < l2 && (info = nodeInfo[i2]); i2++) {
          let node = nodes[i2] = findTemplateNode(dom, info);
          applyIdToMap(this, dom.$, node, info);
          applyTemplateInfo(this, node, info, templateInfo);
          applyEventListener(this, node, info);
        }
        dom = /** @type {!StampedTemplate} */
        dom;
        return dom;
      }
      /**
       * Adds an event listener by method name for the event provided.
       *
       * This method generates a handler function that looks up the method
       * name at handling time.
       *
       * @param {!EventTarget} node Node to add listener on
       * @param {string} eventName Name of event
       * @param {string} methodName Name of method
       * @param {*=} context Context the method will be called on (defaults
       *   to `node`)
       * @return {Function} Generated handler function
       * @override
       */
      _addMethodEventListenerToNode(node, eventName, methodName, context) {
        context = context || node;
        let handler = createNodeEventHandler(context, eventName, methodName);
        this._addEventListenerToNode(node, eventName, handler);
        return handler;
      }
      /**
       * Override point for adding custom or simulated event handling.
       *
       * @param {!EventTarget} node Node to add event listener to
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to add
       * @return {void}
       * @override
       */
      _addEventListenerToNode(node, eventName, handler) {
        node.addEventListener(eventName, handler);
      }
      /**
       * Override point for adding custom or simulated event handling.
       *
       * @param {!EventTarget} node Node to remove event listener from
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to remove
       * @return {void}
       * @override
       */
      _removeEventListenerFromNode(node, eventName, handler) {
        node.removeEventListener(eventName, handler);
      }
    }
    return TemplateStamp2;
  }
);
var dedupeId = 0;
var NOOP = [];
var TYPES = {
  COMPUTE: "__computeEffects",
  REFLECT: "__reflectEffects",
  NOTIFY: "__notifyEffects",
  PROPAGATE: "__propagateEffects",
  OBSERVE: "__observeEffects",
  READ_ONLY: "__readOnly"
};
var COMPUTE_INFO = "__computeInfo";
var capitalAttributeRegex = /[A-Z]/;
function ensureOwnEffectMap(model, type, cloneArrays) {
  let effects = model[type];
  if (!effects) {
    effects = model[type] = {};
  } else if (!model.hasOwnProperty(type)) {
    effects = model[type] = Object.create(model[type]);
    if (cloneArrays) {
      for (let p2 in effects) {
        let protoFx = effects[p2];
        let instFx = effects[p2] = Array(protoFx.length);
        for (let i2 = 0; i2 < protoFx.length; i2++) {
          instFx[i2] = protoFx[i2];
        }
      }
    }
  }
  return effects;
}
function runEffects(inst, effects, props, oldProps, hasPaths, extraArgs) {
  if (effects) {
    let ran = false;
    const id = dedupeId++;
    for (let prop in props) {
      let rootProperty = hasPaths ? root(prop) : prop;
      let fxs = effects[rootProperty];
      if (fxs) {
        for (let i2 = 0, l2 = fxs.length, fx; i2 < l2 && (fx = fxs[i2]); i2++) {
          if ((!fx.info || fx.info.lastRun !== id) && (!hasPaths || pathMatchesTrigger(prop, fx.trigger))) {
            if (fx.info) {
              fx.info.lastRun = id;
            }
            fx.fn(inst, prop, props, oldProps, fx.info, hasPaths, extraArgs);
            ran = true;
          }
        }
      }
    }
    return ran;
  }
  return false;
}
function runEffectsForProperty(inst, effects, dedupeId2, prop, props, oldProps, hasPaths, extraArgs) {
  let ran = false;
  let rootProperty = hasPaths ? root(prop) : prop;
  let fxs = effects[rootProperty];
  if (fxs) {
    for (let i2 = 0, l2 = fxs.length, fx; i2 < l2 && (fx = fxs[i2]); i2++) {
      if ((!fx.info || fx.info.lastRun !== dedupeId2) && (!hasPaths || pathMatchesTrigger(prop, fx.trigger))) {
        if (fx.info) {
          fx.info.lastRun = dedupeId2;
        }
        fx.fn(inst, prop, props, oldProps, fx.info, hasPaths, extraArgs);
        ran = true;
      }
    }
  }
  return ran;
}
function pathMatchesTrigger(path, trigger) {
  if (trigger) {
    let triggerPath = (
      /** @type {string} */
      trigger.name
    );
    return triggerPath == path || !!(trigger.structured && isAncestor(triggerPath, path)) || !!(trigger.wildcard && isDescendant(triggerPath, path));
  } else {
    return true;
  }
}
function runObserverEffect(inst, property, props, oldProps, info) {
  let fn = typeof info.method === "string" ? inst[info.method] : info.method;
  let changedProp = info.property;
  if (fn) {
    fn.call(inst, inst.__data[changedProp], oldProps[changedProp]);
  } else if (!info.dynamicFn) {
    console.warn("observer method `" + info.method + "` not defined");
  }
}
function runNotifyEffects(inst, notifyProps, props, oldProps, hasPaths) {
  let fxs = inst[TYPES.NOTIFY];
  let notified;
  let id = dedupeId++;
  for (let prop in notifyProps) {
    if (notifyProps[prop]) {
      if (fxs && runEffectsForProperty(inst, fxs, id, prop, props, oldProps, hasPaths)) {
        notified = true;
      } else if (hasPaths && notifyPath(inst, prop, props)) {
        notified = true;
      }
    }
  }
  let host;
  if (notified && (host = inst.__dataHost) && host._invalidateProperties) {
    host._invalidateProperties();
  }
}
function notifyPath(inst, path, props) {
  let rootProperty = root(path);
  if (rootProperty !== path) {
    let eventName = camelToDashCase(rootProperty) + "-changed";
    dispatchNotifyEvent(inst, eventName, props[path], path);
    return true;
  }
  return false;
}
function dispatchNotifyEvent(inst, eventName, value, path) {
  let detail = {
    value,
    queueProperty: true
  };
  if (path) {
    detail.path = path;
  }
  wrap(
    /** @type {!HTMLElement} */
    inst
  ).dispatchEvent(new CustomEvent(eventName, {
    detail
  }));
}
function runNotifyEffect(inst, property, props, oldProps, info, hasPaths) {
  let rootProperty = hasPaths ? root(property) : property;
  let path = rootProperty != property ? property : null;
  let value = path ? get(inst, path) : inst.__data[property];
  if (path && value === void 0) {
    value = props[property];
  }
  dispatchNotifyEvent(inst, info.eventName, value, path);
}
function handleNotification(event, inst, fromProp, toPath, negate) {
  let value;
  let detail = (
    /** @type {Object} */
    event.detail
  );
  let fromPath = detail && detail.path;
  if (fromPath) {
    toPath = translate(fromProp, toPath, fromPath);
    value = detail && detail.value;
  } else {
    value = event.currentTarget[fromProp];
  }
  value = negate ? !value : value;
  if (!inst[TYPES.READ_ONLY] || !inst[TYPES.READ_ONLY][toPath]) {
    if (inst._setPendingPropertyOrPath(toPath, value, true, Boolean(fromPath)) && (!detail || !detail.queueProperty)) {
      inst._invalidateProperties();
    }
  }
}
function runReflectEffect(inst, property, props, oldProps, info) {
  let value = inst.__data[property];
  if (sanitizeDOMValue) {
    value = sanitizeDOMValue(
      value,
      info.attrName,
      "attribute",
      /** @type {Node} */
      inst
    );
  }
  inst._propertyToAttribute(property, info.attrName, value);
}
function runComputedEffects(inst, changedProps, oldProps, hasPaths) {
  let computeEffects = inst[TYPES.COMPUTE];
  if (computeEffects) {
    if (orderedComputed) {
      dedupeId++;
      const order = getComputedOrder(inst);
      const queue = [];
      for (let p2 in changedProps) {
        enqueueEffectsFor(p2, computeEffects, queue, order, hasPaths);
      }
      let info;
      while (info = queue.shift()) {
        if (runComputedEffect(inst, "", changedProps, oldProps, info)) {
          enqueueEffectsFor(info.methodInfo, computeEffects, queue, order, hasPaths);
        }
      }
      Object.assign(
        /** @type {!Object} */
        oldProps,
        inst.__dataOld
      );
      Object.assign(
        /** @type {!Object} */
        changedProps,
        inst.__dataPending
      );
      inst.__dataPending = null;
    } else {
      let inputProps = changedProps;
      while (runEffects(inst, computeEffects, inputProps, oldProps, hasPaths)) {
        Object.assign(
          /** @type {!Object} */
          oldProps,
          inst.__dataOld
        );
        Object.assign(
          /** @type {!Object} */
          changedProps,
          inst.__dataPending
        );
        inputProps = inst.__dataPending;
        inst.__dataPending = null;
      }
    }
  }
}
var insertEffect = (info, queue, order) => {
  let start = 0;
  let end = queue.length - 1;
  let idx = -1;
  while (start <= end) {
    const mid = start + end >> 1;
    const cmp = order.get(queue[mid].methodInfo) - order.get(info.methodInfo);
    if (cmp < 0) {
      start = mid + 1;
    } else if (cmp > 0) {
      end = mid - 1;
    } else {
      idx = mid;
      break;
    }
  }
  if (idx < 0) {
    idx = end + 1;
  }
  queue.splice(idx, 0, info);
};
var enqueueEffectsFor = (prop, computeEffects, queue, order, hasPaths) => {
  const rootProperty = hasPaths ? root(prop) : prop;
  const fxs = computeEffects[rootProperty];
  if (fxs) {
    for (let i2 = 0; i2 < fxs.length; i2++) {
      const fx = fxs[i2];
      if (fx.info.lastRun !== dedupeId && (!hasPaths || pathMatchesTrigger(prop, fx.trigger))) {
        fx.info.lastRun = dedupeId;
        insertEffect(fx.info, queue, order);
      }
    }
  }
};
function getComputedOrder(inst) {
  let ordered = inst.constructor.__orderedComputedDeps;
  if (!ordered) {
    ordered = /* @__PURE__ */ new Map();
    const effects = inst[TYPES.COMPUTE];
    let {
      counts,
      ready,
      total
    } = dependencyCounts(inst);
    let curr;
    while (curr = ready.shift()) {
      ordered.set(curr, ordered.size);
      const computedByCurr = effects[curr];
      if (computedByCurr) {
        computedByCurr.forEach((fx) => {
          const computedProp = fx.info.methodInfo;
          --total;
          if (--counts[computedProp] === 0) {
            ready.push(computedProp);
          }
        });
      }
    }
    if (total !== 0) {
      const el = (
        /** @type {HTMLElement} */
        inst
      );
      console.warn(`Computed graph for ${el.localName} incomplete; circular?`);
    }
    inst.constructor.__orderedComputedDeps = ordered;
  }
  return ordered;
}
function dependencyCounts(inst) {
  const infoForComputed = inst[COMPUTE_INFO];
  const counts = {};
  const computedDeps = inst[TYPES.COMPUTE];
  const ready = [];
  let total = 0;
  for (let p2 in infoForComputed) {
    const info = infoForComputed[p2];
    total += counts[p2] = info.args.filter((a2) => !a2.literal).length + (info.dynamicFn ? 1 : 0);
  }
  for (let p2 in computedDeps) {
    if (!infoForComputed[p2]) {
      ready.push(p2);
    }
  }
  return {
    counts,
    ready,
    total
  };
}
function runComputedEffect(inst, property, changedProps, oldProps, info) {
  let result = runMethodEffect(inst, property, changedProps, oldProps, info);
  if (result === NOOP) {
    return false;
  }
  let computedProp = info.methodInfo;
  if (inst.__dataHasAccessor && inst.__dataHasAccessor[computedProp]) {
    return inst._setPendingProperty(computedProp, result, true);
  } else {
    inst[computedProp] = result;
    return false;
  }
}
function computeLinkedPaths(inst, path, value) {
  let links = inst.__dataLinkedPaths;
  if (links) {
    let link;
    for (let a2 in links) {
      let b2 = links[a2];
      if (isDescendant(a2, path)) {
        link = translate(a2, b2, path);
        inst._setPendingPropertyOrPath(link, value, true, true);
      } else if (isDescendant(b2, path)) {
        link = translate(b2, a2, path);
        inst._setPendingPropertyOrPath(link, value, true, true);
      }
    }
  }
}
function addBinding(constructor, templateInfo, nodeInfo, kind, target, parts, literal) {
  nodeInfo.bindings = nodeInfo.bindings || [];
  let binding = {
    kind,
    target,
    parts,
    literal,
    isCompound: parts.length !== 1
  };
  nodeInfo.bindings.push(binding);
  if (shouldAddListener(binding)) {
    let {
      event,
      negate
    } = binding.parts[0];
    binding.listenerEvent = event || camelToDashCase(target) + "-changed";
    binding.listenerNegate = negate;
  }
  let index = templateInfo.nodeInfoList.length;
  for (let i2 = 0; i2 < binding.parts.length; i2++) {
    let part = binding.parts[i2];
    part.compoundIndex = i2;
    addEffectForBindingPart(constructor, templateInfo, binding, part, index);
  }
}
function addEffectForBindingPart(constructor, templateInfo, binding, part, index) {
  if (!part.literal) {
    if (binding.kind === "attribute" && binding.target[0] === "-") {
      console.warn("Cannot set attribute " + binding.target + ' because "-" is not a valid attribute starting character');
    } else {
      let dependencies = part.dependencies;
      let info = {
        index,
        binding,
        part,
        evaluator: constructor
      };
      for (let j = 0; j < dependencies.length; j++) {
        let trigger = dependencies[j];
        if (typeof trigger == "string") {
          trigger = parseArg(trigger);
          trigger.wildcard = true;
        }
        constructor._addTemplatePropertyEffect(templateInfo, trigger.rootProperty, {
          fn: runBindingEffect,
          info,
          trigger
        });
      }
    }
  }
}
function runBindingEffect(inst, path, props, oldProps, info, hasPaths, nodeList) {
  let node = nodeList[info.index];
  let binding = info.binding;
  let part = info.part;
  if (hasPaths && part.source && path.length > part.source.length && binding.kind == "property" && !binding.isCompound && node.__isPropertyEffectsClient && node.__dataHasAccessor && node.__dataHasAccessor[binding.target]) {
    let value = props[path];
    path = translate(part.source, binding.target, path);
    if (node._setPendingPropertyOrPath(path, value, false, true)) {
      inst._enqueueClient(node);
    }
  } else {
    let value = info.evaluator._evaluateBinding(inst, part, path, props, oldProps, hasPaths);
    if (value !== NOOP) {
      applyBindingValue(inst, node, binding, part, value);
    }
  }
}
function applyBindingValue(inst, node, binding, part, value) {
  value = computeBindingValue(node, value, binding, part);
  if (sanitizeDOMValue) {
    value = sanitizeDOMValue(value, binding.target, binding.kind, node);
  }
  if (binding.kind == "attribute") {
    inst._valueToNodeAttribute(
      /** @type {Element} */
      node,
      value,
      binding.target
    );
  } else {
    let prop = binding.target;
    if (node.__isPropertyEffectsClient && node.__dataHasAccessor && node.__dataHasAccessor[prop]) {
      if (!node[TYPES.READ_ONLY] || !node[TYPES.READ_ONLY][prop]) {
        if (node._setPendingProperty(prop, value)) {
          inst._enqueueClient(node);
        }
      }
    } else {
      inst._setUnmanagedPropertyToNode(node, prop, value);
    }
  }
}
function computeBindingValue(node, value, binding, part) {
  if (binding.isCompound) {
    let storage = node.__dataCompoundStorage[binding.target];
    storage[part.compoundIndex] = value;
    value = storage.join("");
  }
  if (binding.kind !== "attribute") {
    if (binding.target === "textContent" || binding.target === "value" && (node.localName === "input" || node.localName === "textarea")) {
      value = value == void 0 ? "" : value;
    }
  }
  return value;
}
function shouldAddListener(binding) {
  return Boolean(binding.target) && binding.kind != "attribute" && binding.kind != "text" && !binding.isCompound && binding.parts[0].mode === "{";
}
function setupBindings(inst, templateInfo) {
  let {
    nodeList,
    nodeInfoList
  } = templateInfo;
  if (nodeInfoList.length) {
    for (let i2 = 0; i2 < nodeInfoList.length; i2++) {
      let info = nodeInfoList[i2];
      let node = nodeList[i2];
      let bindings = info.bindings;
      if (bindings) {
        for (let i3 = 0; i3 < bindings.length; i3++) {
          let binding = bindings[i3];
          setupCompoundStorage(node, binding);
          addNotifyListener(node, inst, binding);
        }
      }
      node.__dataHost = inst;
    }
  }
}
function setupCompoundStorage(node, binding) {
  if (binding.isCompound) {
    let storage = node.__dataCompoundStorage || (node.__dataCompoundStorage = {});
    let parts = binding.parts;
    let literals = new Array(parts.length);
    for (let j = 0; j < parts.length; j++) {
      literals[j] = parts[j].literal;
    }
    let target = binding.target;
    storage[target] = literals;
    if (binding.literal && binding.kind == "property") {
      if (target === "className") {
        node = wrap(node);
      }
      node[target] = binding.literal;
    }
  }
}
function addNotifyListener(node, inst, binding) {
  if (binding.listenerEvent) {
    let part = binding.parts[0];
    node.addEventListener(binding.listenerEvent, function(e2) {
      handleNotification(e2, inst, binding.target, part.source, part.negate);
    });
  }
}
function createMethodEffect(model, sig, type, effectFn, methodInfo, dynamicFn) {
  dynamicFn = sig.static || dynamicFn && (typeof dynamicFn !== "object" || dynamicFn[sig.methodName]);
  let info = {
    methodName: sig.methodName,
    args: sig.args,
    methodInfo,
    dynamicFn
  };
  for (let i2 = 0, arg; i2 < sig.args.length && (arg = sig.args[i2]); i2++) {
    if (!arg.literal) {
      model._addPropertyEffect(arg.rootProperty, type, {
        fn: effectFn,
        info,
        trigger: arg
      });
    }
  }
  if (dynamicFn) {
    model._addPropertyEffect(sig.methodName, type, {
      fn: effectFn,
      info
    });
  }
  return info;
}
function runMethodEffect(inst, property, props, oldProps, info) {
  let context = inst._methodHost || inst;
  let fn = context[info.methodName];
  if (fn) {
    let args = inst._marshalArgs(info.args, property, props);
    return args === NOOP ? NOOP : fn.apply(context, args);
  } else if (!info.dynamicFn) {
    console.warn("method `" + info.methodName + "` not defined");
  }
}
var emptyArray = [];
var IDENT = "(?:[a-zA-Z_$][\\w.:$\\-*]*)";
var NUMBER = "(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)";
var SQUOTE_STRING = "(?:'(?:[^'\\\\]|\\\\.)*')";
var DQUOTE_STRING = '(?:"(?:[^"\\\\]|\\\\.)*")';
var STRING = "(?:" + SQUOTE_STRING + "|" + DQUOTE_STRING + ")";
var ARGUMENT = "(?:(" + IDENT + "|" + NUMBER + "|" + STRING + ")\\s*)";
var ARGUMENTS = "(?:" + ARGUMENT + "(?:,\\s*" + ARGUMENT + ")*)";
var ARGUMENT_LIST = "(?:\\(\\s*(?:" + ARGUMENTS + "?)\\)\\s*)";
var BINDING = "(" + IDENT + "\\s*" + ARGUMENT_LIST + "?)";
var OPEN_BRACKET = "(\\[\\[|{{)\\s*";
var CLOSE_BRACKET = "(?:]]|}})";
var NEGATE = "(?:(!)\\s*)?";
var EXPRESSION = OPEN_BRACKET + NEGATE + BINDING + CLOSE_BRACKET;
var bindingRegex = new RegExp(EXPRESSION, "g");
function literalFromParts(parts) {
  let s2 = "";
  for (let i2 = 0; i2 < parts.length; i2++) {
    let literal = parts[i2].literal;
    s2 += literal || "";
  }
  return s2;
}
function parseMethod(expression) {
  let m2 = expression.match(/([^\s]+?)\(([\s\S]*)\)/);
  if (m2) {
    let methodName = m2[1];
    let sig = {
      methodName,
      static: true,
      args: emptyArray
    };
    if (m2[2].trim()) {
      let args = m2[2].replace(/\\,/g, "&comma;").split(",");
      return parseArgs(args, sig);
    } else {
      return sig;
    }
  }
  return null;
}
function parseArgs(argList, sig) {
  sig.args = argList.map(function(rawArg) {
    let arg = parseArg(rawArg);
    if (!arg.literal) {
      sig.static = false;
    }
    return arg;
  }, this);
  return sig;
}
function parseArg(rawArg) {
  let arg = rawArg.trim().replace(/&comma;/g, ",").replace(/\\(.)/g, "$1");
  let a2 = {
    name: arg,
    value: "",
    literal: false
  };
  let fc = arg[0];
  if (fc === "-") {
    fc = arg[1];
  }
  if (fc >= "0" && fc <= "9") {
    fc = "#";
  }
  switch (fc) {
    case "'":
    case '"':
      a2.value = arg.slice(1, -1);
      a2.literal = true;
      break;
    case "#":
      a2.value = Number(arg);
      a2.literal = true;
      break;
  }
  if (!a2.literal) {
    a2.rootProperty = root(arg);
    a2.structured = isPath(arg);
    if (a2.structured) {
      a2.wildcard = arg.slice(-2) == ".*";
      if (a2.wildcard) {
        a2.name = arg.slice(0, -2);
      }
    }
  }
  return a2;
}
function getArgValue(data, props, path) {
  let value = get(data, path);
  if (value === void 0) {
    value = props[path];
  }
  return value;
}
function notifySplices(inst, array, path, splices) {
  const splicesData = {
    indexSplices: splices
  };
  if (legacyUndefined && !inst._overrideLegacyUndefined) {
    array.splices = splicesData;
  }
  inst.notifyPath(path + ".splices", splicesData);
  inst.notifyPath(path + ".length", array.length);
  if (legacyUndefined && !inst._overrideLegacyUndefined) {
    splicesData.indexSplices = [];
  }
}
function notifySplice(inst, array, path, index, addedCount, removed) {
  notifySplices(inst, array, path, [{
    index,
    addedCount,
    removed,
    object: array,
    type: "splice"
  }]);
}
function upper(name) {
  return name[0].toUpperCase() + name.substring(1);
}
var PropertyEffects = dedupingMixin((superClass) => {
  const propertyEffectsBase = TemplateStamp(PropertyAccessors(superClass));
  class PropertyEffects2 extends propertyEffectsBase {
    constructor() {
      super();
      this.__isPropertyEffectsClient = true;
    }
    get PROPERTY_EFFECT_TYPES() {
      return TYPES;
    }
    /**
     * @override
     * @return {void}
     */
    _initializeProperties() {
      super._initializeProperties();
      this._registerHost();
      this.__dataClientsReady = false;
      this.__dataPendingClients = null;
      this.__dataToNotify = null;
      this.__dataLinkedPaths = null;
      this.__dataHasPaths = false;
      this.__dataCompoundStorage = this.__dataCompoundStorage || null;
      this.__dataHost = this.__dataHost || null;
      this.__dataTemp = {};
      this.__dataClientsInitialized = false;
    }
    _registerHost() {
      if (hostStack.length) {
        let host = hostStack[hostStack.length - 1];
        host._enqueueClient(this);
        this.__dataHost = host;
      }
    }
    /**
     * Overrides `PropertyAccessors` implementation to provide a
     * more efficient implementation of initializing properties from
     * the prototype on the instance.
     *
     * @override
     * @param {Object} props Properties to initialize on the prototype
     * @return {void}
     */
    _initializeProtoProperties(props) {
      this.__data = Object.create(props);
      this.__dataPending = Object.create(props);
      this.__dataOld = {};
    }
    /**
     * Overrides `PropertyAccessors` implementation to avoid setting
     * `_setProperty`'s `shouldNotify: true`.
     *
     * @override
     * @param {Object} props Properties to initialize on the instance
     * @return {void}
     */
    _initializeInstanceProperties(props) {
      let readOnly = this[TYPES.READ_ONLY];
      for (let prop in props) {
        if (!readOnly || !readOnly[prop]) {
          this.__dataPending = this.__dataPending || {};
          this.__dataOld = this.__dataOld || {};
          this.__data[prop] = this.__dataPending[prop] = props[prop];
        }
      }
    }
    // Prototype setup ----------------------------------------
    /**
     * Equivalent to static `addPropertyEffect` API but can be called on
     * an instance to add effects at runtime.  See that method for
     * full API docs.
     *
     * @override
     * @param {string} property Property that should trigger the effect
     * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
     * @param {Object=} effect Effect metadata object
     * @return {void}
     * @protected
     */
    _addPropertyEffect(property, type, effect) {
      this._createPropertyAccessor(property, type == TYPES.READ_ONLY);
      let effects = ensureOwnEffectMap(this, type, true)[property];
      if (!effects) {
        effects = this[type][property] = [];
      }
      effects.push(effect);
    }
    /**
     * Removes the given property effect.
     *
     * @override
     * @param {string} property Property the effect was associated with
     * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
     * @param {Object=} effect Effect metadata object to remove
     * @return {void}
     */
    _removePropertyEffect(property, type, effect) {
      let effects = ensureOwnEffectMap(this, type, true)[property];
      let idx = effects.indexOf(effect);
      if (idx >= 0) {
        effects.splice(idx, 1);
      }
    }
    /**
     * Returns whether the current prototype/instance has a property effect
     * of a certain type.
     *
     * @override
     * @param {string} property Property name
     * @param {string=} type Effect type, from this.PROPERTY_EFFECT_TYPES
     * @return {boolean} True if the prototype/instance has an effect of this
     *     type
     * @protected
     */
    _hasPropertyEffect(property, type) {
      let effects = this[type];
      return Boolean(effects && effects[property]);
    }
    /**
     * Returns whether the current prototype/instance has a "read only"
     * accessor for the given property.
     *
     * @override
     * @param {string} property Property name
     * @return {boolean} True if the prototype/instance has an effect of this
     *     type
     * @protected
     */
    _hasReadOnlyEffect(property) {
      return this._hasPropertyEffect(property, TYPES.READ_ONLY);
    }
    /**
     * Returns whether the current prototype/instance has a "notify"
     * property effect for the given property.
     *
     * @override
     * @param {string} property Property name
     * @return {boolean} True if the prototype/instance has an effect of this
     *     type
     * @protected
     */
    _hasNotifyEffect(property) {
      return this._hasPropertyEffect(property, TYPES.NOTIFY);
    }
    /**
     * Returns whether the current prototype/instance has a "reflect to
     * attribute" property effect for the given property.
     *
     * @override
     * @param {string} property Property name
     * @return {boolean} True if the prototype/instance has an effect of this
     *     type
     * @protected
     */
    _hasReflectEffect(property) {
      return this._hasPropertyEffect(property, TYPES.REFLECT);
    }
    /**
     * Returns whether the current prototype/instance has a "computed"
     * property effect for the given property.
     *
     * @override
     * @param {string} property Property name
     * @return {boolean} True if the prototype/instance has an effect of this
     *     type
     * @protected
     */
    _hasComputedEffect(property) {
      return this._hasPropertyEffect(property, TYPES.COMPUTE);
    }
    // Runtime ----------------------------------------
    /**
     * Sets a pending property or path.  If the root property of the path in
     * question had no accessor, the path is set, otherwise it is enqueued
     * via `_setPendingProperty`.
     *
     * This function isolates relatively expensive functionality necessary
     * for the public API (`set`, `setProperties`, `notifyPath`, and property
     * change listeners via {{...}} bindings), such that it is only done
     * when paths enter the system, and not at every propagation step.  It
     * also sets a `__dataHasPaths` flag on the instance which is used to
     * fast-path slower path-matching code in the property effects host paths.
     *
     * `path` can be a path string or array of path parts as accepted by the
     * public API.
     *
     * @override
     * @param {string | !Array<number|string>} path Path to set
     * @param {*} value Value to set
     * @param {boolean=} shouldNotify Set to true if this change should
     *  cause a property notification event dispatch
     * @param {boolean=} isPathNotification If the path being set is a path
     *   notification of an already changed value, as opposed to a request
     *   to set and notify the change.  In the latter `false` case, a dirty
     *   check is performed and then the value is set to the path before
     *   enqueuing the pending property change.
     * @return {boolean} Returns true if the property/path was enqueued in
     *   the pending changes bag.
     * @protected
     */
    _setPendingPropertyOrPath(path, value, shouldNotify, isPathNotification) {
      if (isPathNotification || root(Array.isArray(path) ? path[0] : path) !== path) {
        if (!isPathNotification) {
          let old = get(this, path);
          path = /** @type {string} */
          set(this, path, value);
          if (!path || !super._shouldPropertyChange(path, value, old)) {
            return false;
          }
        }
        this.__dataHasPaths = true;
        if (this._setPendingProperty(
          /**@type{string}*/
          path,
          value,
          shouldNotify
        )) {
          computeLinkedPaths(
            this,
            /**@type{string}*/
            path,
            value
          );
          return true;
        }
      } else {
        if (this.__dataHasAccessor && this.__dataHasAccessor[path]) {
          return this._setPendingProperty(
            /**@type{string}*/
            path,
            value,
            shouldNotify
          );
        } else {
          this[path] = value;
        }
      }
      return false;
    }
    /**
     * Applies a value to a non-Polymer element/node's property.
     *
     * The implementation makes a best-effort at binding interop:
     * Some native element properties have side-effects when
     * re-setting the same value (e.g. setting `<input>.value` resets the
     * cursor position), so we do a dirty-check before setting the value.
     * However, for better interop with non-Polymer custom elements that
     * accept objects, we explicitly re-set object changes coming from the
     * Polymer world (which may include deep object changes without the
     * top reference changing), erring on the side of providing more
     * information.
     *
     * Users may override this method to provide alternate approaches.
     *
     * @override
     * @param {!Node} node The node to set a property on
     * @param {string} prop The property to set
     * @param {*} value The value to set
     * @return {void}
     * @protected
     */
    _setUnmanagedPropertyToNode(node, prop, value) {
      if (value !== node[prop] || typeof value == "object") {
        if (prop === "className") {
          node = /** @type {!Node} */
          wrap(node);
        }
        node[prop] = value;
      }
    }
    /**
     * Overrides the `PropertiesChanged` implementation to introduce special
     * dirty check logic depending on the property & value being set:
     *
     * 1. Any value set to a path (e.g. 'obj.prop': 42 or 'obj.prop': {...})
     *    Stored in `__dataTemp`, dirty checked against `__dataTemp`
     * 2. Object set to simple property (e.g. 'prop': {...})
     *    Stored in `__dataTemp` and `__data`, dirty checked against
     *    `__dataTemp` by default implementation of `_shouldPropertyChange`
     * 3. Primitive value set to simple property (e.g. 'prop': 42)
     *    Stored in `__data`, dirty checked against `__data`
     *
     * The dirty-check is important to prevent cycles due to two-way
     * notification, but paths and objects are only dirty checked against any
     * previous value set during this turn via a "temporary cache" that is
     * cleared when the last `_propertiesChanged` exits. This is so:
     * a. any cached array paths (e.g. 'array.3.prop') may be invalidated
     *    due to array mutations like shift/unshift/splice; this is fine
     *    since path changes are dirty-checked at user entry points like `set`
     * b. dirty-checking for objects only lasts one turn to allow the user
     *    to mutate the object in-place and re-set it with the same identity
     *    and have all sub-properties re-propagated in a subsequent turn.
     *
     * The temp cache is not necessarily sufficient to prevent invalid array
     * paths, since a splice can happen during the same turn (with pathological
     * user code); we could introduce a "fixup" for temporarily cached array
     * paths if needed: https://github.com/Polymer/polymer/issues/4227
     *
     * @override
     * @param {string} property Name of the property
     * @param {*} value Value to set
     * @param {boolean=} shouldNotify True if property should fire notification
     *   event (applies only for `notify: true` properties)
     * @return {boolean} Returns true if the property changed
     */
    _setPendingProperty(property, value, shouldNotify) {
      let propIsPath = this.__dataHasPaths && isPath(property);
      let prevProps = propIsPath ? this.__dataTemp : this.__data;
      if (this._shouldPropertyChange(property, value, prevProps[property])) {
        if (!this.__dataPending) {
          this.__dataPending = {};
          this.__dataOld = {};
        }
        if (!(property in this.__dataOld)) {
          this.__dataOld[property] = this.__data[property];
        }
        if (propIsPath) {
          this.__dataTemp[property] = value;
        } else {
          this.__data[property] = value;
        }
        this.__dataPending[property] = value;
        if (propIsPath || this[TYPES.NOTIFY] && this[TYPES.NOTIFY][property]) {
          this.__dataToNotify = this.__dataToNotify || {};
          this.__dataToNotify[property] = shouldNotify;
        }
        return true;
      }
      return false;
    }
    /**
     * Overrides base implementation to ensure all accessors set `shouldNotify`
     * to true, for per-property notification tracking.
     *
     * @override
     * @param {string} property Name of the property
     * @param {*} value Value to set
     * @return {void}
     */
    _setProperty(property, value) {
      if (this._setPendingProperty(property, value, true)) {
        this._invalidateProperties();
      }
    }
    /**
     * Overrides `PropertyAccessor`'s default async queuing of
     * `_propertiesChanged`: if `__dataReady` is false (has not yet been
     * manually flushed), the function no-ops; otherwise flushes
     * `_propertiesChanged` synchronously.
     *
     * @override
     * @return {void}
     */
    _invalidateProperties() {
      if (this.__dataReady) {
        this._flushProperties();
      }
    }
    /**
     * Enqueues the given client on a list of pending clients, whose
     * pending property changes can later be flushed via a call to
     * `_flushClients`.
     *
     * @override
     * @param {Object} client PropertyEffects client to enqueue
     * @return {void}
     * @protected
     */
    _enqueueClient(client) {
      this.__dataPendingClients = this.__dataPendingClients || [];
      if (client !== this) {
        this.__dataPendingClients.push(client);
      }
    }
    /**
     * Flushes any clients previously enqueued via `_enqueueClient`, causing
     * their `_flushProperties` method to run.
     *
     * @override
     * @return {void}
     * @protected
     */
    _flushClients() {
      if (!this.__dataClientsReady) {
        this.__dataClientsReady = true;
        this._readyClients();
        this.__dataReady = true;
      } else {
        this.__enableOrFlushClients();
      }
    }
    // NOTE: We ensure clients either enable or flush as appropriate. This
    // handles two corner cases:
    // (1) clients flush properly when connected/enabled before the host
    // enables; e.g.
    //   (a) Templatize stamps with no properties and does not flush and
    //   (b) the instance is inserted into dom and
    //   (c) then the instance flushes.
    // (2) clients enable properly when not connected/enabled when the host
    // flushes; e.g.
    //   (a) a template is runtime stamped and not yet connected/enabled
    //   (b) a host sets a property, causing stamped dom to flush
    //   (c) the stamped dom enables.
    __enableOrFlushClients() {
      let clients = this.__dataPendingClients;
      if (clients) {
        this.__dataPendingClients = null;
        for (let i2 = 0; i2 < clients.length; i2++) {
          let client = clients[i2];
          if (!client.__dataEnabled) {
            client._enableProperties();
          } else if (client.__dataPending) {
            client._flushProperties();
          }
        }
      }
    }
    /**
     * Perform any initial setup on client dom. Called before the first
     * `_flushProperties` call on client dom and before any element
     * observers are called.
     *
     * @override
     * @return {void}
     * @protected
     */
    _readyClients() {
      this.__enableOrFlushClients();
    }
    /**
     * Sets a bag of property changes to this instance, and
     * synchronously processes all effects of the properties as a batch.
     *
     * Property names must be simple properties, not paths.  Batched
     * path propagation is not supported.
     *
     * @override
     * @param {Object} props Bag of one or more key-value pairs whose key is
     *   a property and value is the new value to set for that property.
     * @param {boolean=} setReadOnly When true, any private values set in
     *   `props` will be set. By default, `setProperties` will not set
     *   `readOnly: true` root properties.
     * @return {void}
     * @public
     */
    setProperties(props, setReadOnly) {
      for (let path in props) {
        if (setReadOnly || !this[TYPES.READ_ONLY] || !this[TYPES.READ_ONLY][path]) {
          this._setPendingPropertyOrPath(path, props[path], true);
        }
      }
      this._invalidateProperties();
    }
    /**
     * Overrides `PropertyAccessors` so that property accessor
     * side effects are not enabled until after client dom is fully ready.
     * Also calls `_flushClients` callback to ensure client dom is enabled
     * that was not enabled as a result of flushing properties.
     *
     * @override
     * @return {void}
     */
    ready() {
      this._flushProperties();
      if (!this.__dataClientsReady) {
        this._flushClients();
      }
      if (this.__dataPending) {
        this._flushProperties();
      }
    }
    /**
     * Implements `PropertyAccessors`'s properties changed callback.
     *
     * Runs each class of effects for the batch of changed properties in
     * a specific order (compute, propagate, reflect, observe, notify).
     *
     * @override
     * @param {!Object} currentProps Bag of all current accessor values
     * @param {?Object} changedProps Bag of properties changed since the last
     *   call to `_propertiesChanged`
     * @param {?Object} oldProps Bag of previous values for each property
     *   in `changedProps`
     * @return {void}
     */
    _propertiesChanged(currentProps, changedProps, oldProps) {
      let hasPaths = this.__dataHasPaths;
      this.__dataHasPaths = false;
      let notifyProps;
      runComputedEffects(this, changedProps, oldProps, hasPaths);
      notifyProps = this.__dataToNotify;
      this.__dataToNotify = null;
      this._propagatePropertyChanges(changedProps, oldProps, hasPaths);
      this._flushClients();
      runEffects(this, this[TYPES.REFLECT], changedProps, oldProps, hasPaths);
      runEffects(this, this[TYPES.OBSERVE], changedProps, oldProps, hasPaths);
      if (notifyProps) {
        runNotifyEffects(this, notifyProps, changedProps, oldProps, hasPaths);
      }
      if (this.__dataCounter == 1) {
        this.__dataTemp = {};
      }
    }
    /**
     * Called to propagate any property changes to stamped template nodes
     * managed by this element.
     *
     * @override
     * @param {Object} changedProps Bag of changed properties
     * @param {Object} oldProps Bag of previous values for changed properties
     * @param {boolean} hasPaths True with `props` contains one or more paths
     * @return {void}
     * @protected
     */
    _propagatePropertyChanges(changedProps, oldProps, hasPaths) {
      if (this[TYPES.PROPAGATE]) {
        runEffects(this, this[TYPES.PROPAGATE], changedProps, oldProps, hasPaths);
      }
      if (this.__templateInfo) {
        this._runEffectsForTemplate(this.__templateInfo, changedProps, oldProps, hasPaths);
      }
    }
    _runEffectsForTemplate(templateInfo, changedProps, oldProps, hasPaths) {
      const baseRunEffects = (changedProps2, hasPaths2) => {
        runEffects(this, templateInfo.propertyEffects, changedProps2, oldProps, hasPaths2, templateInfo.nodeList);
        for (let info = templateInfo.firstChild; info; info = info.nextSibling) {
          this._runEffectsForTemplate(info, changedProps2, oldProps, hasPaths2);
        }
      };
      if (templateInfo.runEffects) {
        templateInfo.runEffects(baseRunEffects, changedProps, hasPaths);
      } else {
        baseRunEffects(changedProps, hasPaths);
      }
    }
    /**
     * Aliases one data path as another, such that path notifications from one
     * are routed to the other.
     *
     * @override
     * @param {string | !Array<string|number>} to Target path to link.
     * @param {string | !Array<string|number>} from Source path to link.
     * @return {void}
     * @public
     */
    linkPaths(to, from) {
      to = normalize(to);
      from = normalize(from);
      this.__dataLinkedPaths = this.__dataLinkedPaths || {};
      this.__dataLinkedPaths[to] = from;
    }
    /**
     * Removes a data path alias previously established with `_linkPaths`.
     *
     * Note, the path to unlink should be the target (`to`) used when
     * linking the paths.
     *
     * @override
     * @param {string | !Array<string|number>} path Target path to unlink.
     * @return {void}
     * @public
     */
    unlinkPaths(path) {
      path = normalize(path);
      if (this.__dataLinkedPaths) {
        delete this.__dataLinkedPaths[path];
      }
    }
    /**
     * Notify that an array has changed.
     *
     * Example:
     *
     *     this.items = [ {name: 'Jim'}, {name: 'Todd'}, {name: 'Bill'} ];
     *     ...
     *     this.items.splice(1, 1, {name: 'Sam'});
     *     this.items.push({name: 'Bob'});
     *     this.notifySplices('items', [
     *       { index: 1, removed: [{name: 'Todd'}], addedCount: 1,
     *         object: this.items, type: 'splice' },
     *       { index: 3, removed: [], addedCount: 1,
     *         object: this.items, type: 'splice'}
     *     ]);
     *
     * @param {string} path Path that should be notified.
     * @param {Array} splices Array of splice records indicating ordered
     *   changes that occurred to the array. Each record should have the
     *   following fields:
     *    * index: index at which the change occurred
     *    * removed: array of items that were removed from this index
     *    * addedCount: number of new items added at this index
     *    * object: a reference to the array in question
     *    * type: the string literal 'splice'
     *
     *   Note that splice records _must_ be normalized such that they are
     *   reported in index order (raw results from `Object.observe` are not
     *   ordered and must be normalized/merged before notifying).
     *
     * @override
     * @return {void}
     * @public
     */
    notifySplices(path, splices) {
      let info = {
        path: ""
      };
      let array = (
        /** @type {Array} */
        get(this, path, info)
      );
      notifySplices(this, array, info.path, splices);
    }
    /**
     * Convenience method for reading a value from a path.
     *
     * Note, if any part in the path is undefined, this method returns
     * `undefined` (this method does not throw when dereferencing undefined
     * paths).
     *
     * @override
     * @param {(string|!Array<(string|number)>)} path Path to the value
     *   to read.  The path may be specified as a string (e.g. `foo.bar.baz`)
     *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
     *   bracketed expressions are not supported; string-based path parts
     *   *must* be separated by dots.  Note that when dereferencing array
     *   indices, the index may be used as a dotted part directly
     *   (e.g. `users.12.name` or `['users', 12, 'name']`).
     * @param {Object=} root Root object from which the path is evaluated.
     * @return {*} Value at the path, or `undefined` if any part of the path
     *   is undefined.
     * @public
     */
    get(path, root2) {
      return get(root2 || this, path);
    }
    /**
     * Convenience method for setting a value to a path and notifying any
     * elements bound to the same path.
     *
     * Note, if any part in the path except for the last is undefined,
     * this method does nothing (this method does not throw when
     * dereferencing undefined paths).
     *
     * @override
     * @param {(string|!Array<(string|number)>)} path Path to the value
     *   to write.  The path may be specified as a string (e.g. `'foo.bar.baz'`)
     *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
     *   bracketed expressions are not supported; string-based path parts
     *   *must* be separated by dots.  Note that when dereferencing array
     *   indices, the index may be used as a dotted part directly
     *   (e.g. `'users.12.name'` or `['users', 12, 'name']`).
     * @param {*} value Value to set at the specified path.
     * @param {Object=} root Root object from which the path is evaluated.
     *   When specified, no notification will occur.
     * @return {void}
     * @public
     */
    set(path, value, root2) {
      if (root2) {
        set(root2, path, value);
      } else {
        if (!this[TYPES.READ_ONLY] || !this[TYPES.READ_ONLY][
          /** @type {string} */
          path
        ]) {
          if (this._setPendingPropertyOrPath(path, value, true)) {
            this._invalidateProperties();
          }
        }
      }
    }
    /**
     * Adds items onto the end of the array at the path specified.
     *
     * The arguments after `path` and return value match that of
     * `Array.prototype.push`.
     *
     * This method notifies other paths to the same array that a
     * splice occurred to the array.
     *
     * @override
     * @param {string | !Array<string|number>} path Path to array.
     * @param {...*} items Items to push onto array
     * @return {number} New length of the array.
     * @public
     */
    push(path, ...items) {
      let info = {
        path: ""
      };
      let array = (
        /** @type {Array}*/
        get(this, path, info)
      );
      let len = array.length;
      let ret = array.push(...items);
      if (items.length) {
        notifySplice(this, array, info.path, len, items.length, []);
      }
      return ret;
    }
    /**
     * Removes an item from the end of array at the path specified.
     *
     * The arguments after `path` and return value match that of
     * `Array.prototype.pop`.
     *
     * This method notifies other paths to the same array that a
     * splice occurred to the array.
     *
     * @override
     * @param {string | !Array<string|number>} path Path to array.
     * @return {*} Item that was removed.
     * @public
     */
    pop(path) {
      let info = {
        path: ""
      };
      let array = (
        /** @type {Array} */
        get(this, path, info)
      );
      let hadLength = Boolean(array.length);
      let ret = array.pop();
      if (hadLength) {
        notifySplice(this, array, info.path, array.length, 0, [ret]);
      }
      return ret;
    }
    /**
     * Starting from the start index specified, removes 0 or more items
     * from the array and inserts 0 or more new items in their place.
     *
     * The arguments after `path` and return value match that of
     * `Array.prototype.splice`.
     *
     * This method notifies other paths to the same array that a
     * splice occurred to the array.
     *
     * @override
     * @param {string | !Array<string|number>} path Path to array.
     * @param {number} start Index from which to start removing/inserting.
     * @param {number=} deleteCount Number of items to remove.
     * @param {...*} items Items to insert into array.
     * @return {!Array} Array of removed items.
     * @public
     */
    splice(path, start, deleteCount, ...items) {
      let info = {
        path: ""
      };
      let array = (
        /** @type {Array} */
        get(this, path, info)
      );
      if (start < 0) {
        start = array.length - Math.floor(-start);
      } else if (start) {
        start = Math.floor(start);
      }
      let ret;
      if (arguments.length === 2) {
        ret = array.splice(start);
      } else {
        ret = array.splice(start, deleteCount, ...items);
      }
      if (items.length || ret.length) {
        notifySplice(this, array, info.path, start, items.length, ret);
      }
      return ret;
    }
    /**
     * Removes an item from the beginning of array at the path specified.
     *
     * The arguments after `path` and return value match that of
     * `Array.prototype.pop`.
     *
     * This method notifies other paths to the same array that a
     * splice occurred to the array.
     *
     * @override
     * @param {string | !Array<string|number>} path Path to array.
     * @return {*} Item that was removed.
     * @public
     */
    shift(path) {
      let info = {
        path: ""
      };
      let array = (
        /** @type {Array} */
        get(this, path, info)
      );
      let hadLength = Boolean(array.length);
      let ret = array.shift();
      if (hadLength) {
        notifySplice(this, array, info.path, 0, 0, [ret]);
      }
      return ret;
    }
    /**
     * Adds items onto the beginning of the array at the path specified.
     *
     * The arguments after `path` and return value match that of
     * `Array.prototype.push`.
     *
     * This method notifies other paths to the same array that a
     * splice occurred to the array.
     *
     * @override
     * @param {string | !Array<string|number>} path Path to array.
     * @param {...*} items Items to insert info array
     * @return {number} New length of the array.
     * @public
     */
    unshift(path, ...items) {
      let info = {
        path: ""
      };
      let array = (
        /** @type {Array} */
        get(this, path, info)
      );
      let ret = array.unshift(...items);
      if (items.length) {
        notifySplice(this, array, info.path, 0, items.length, []);
      }
      return ret;
    }
    /**
     * Notify that a path has changed.
     *
     * Example:
     *
     *     this.item.user.name = 'Bob';
     *     this.notifyPath('item.user.name');
     *
     * @override
     * @param {string} path Path that should be notified.
     * @param {*=} value Value at the path (optional).
     * @return {void}
     * @public
     */
    notifyPath(path, value) {
      let propPath;
      if (arguments.length == 1) {
        let info = {
          path: ""
        };
        value = get(this, path, info);
        propPath = info.path;
      } else if (Array.isArray(path)) {
        propPath = normalize(path);
      } else {
        propPath = /** @type{string} */
        path;
      }
      if (this._setPendingPropertyOrPath(propPath, value, true, true)) {
        this._invalidateProperties();
      }
    }
    /**
     * Equivalent to static `createReadOnlyProperty` API but can be called on
     * an instance to add effects at runtime.  See that method for
     * full API docs.
     *
     * @override
     * @param {string} property Property name
     * @param {boolean=} protectedSetter Creates a custom protected setter
     *   when `true`.
     * @return {void}
     * @protected
     */
    _createReadOnlyProperty(property, protectedSetter) {
      this._addPropertyEffect(property, TYPES.READ_ONLY);
      if (protectedSetter) {
        this["_set" + upper(property)] = /** @this {PropertyEffects} */
        function(value) {
          this._setProperty(property, value);
        };
      }
    }
    /**
     * Equivalent to static `createPropertyObserver` API but can be called on
     * an instance to add effects at runtime.  See that method for
     * full API docs.
     *
     * @override
     * @param {string} property Property name
     * @param {string|function(*,*)} method Function or name of observer method
     *     to call
     * @param {boolean=} dynamicFn Whether the method name should be included as
     *   a dependency to the effect.
     * @return {void}
     * @protected
     */
    _createPropertyObserver(property, method, dynamicFn) {
      let info = {
        property,
        method,
        dynamicFn: Boolean(dynamicFn)
      };
      this._addPropertyEffect(property, TYPES.OBSERVE, {
        fn: runObserverEffect,
        info,
        trigger: {
          name: property
        }
      });
      if (dynamicFn) {
        this._addPropertyEffect(
          /** @type {string} */
          method,
          TYPES.OBSERVE,
          {
            fn: runObserverEffect,
            info,
            trigger: {
              name: method
            }
          }
        );
      }
    }
    /**
     * Equivalent to static `createMethodObserver` API but can be called on
     * an instance to add effects at runtime.  See that method for
     * full API docs.
     *
     * @override
     * @param {string} expression Method expression
     * @param {boolean|Object=} dynamicFn Boolean or object map indicating
     *   whether method names should be included as a dependency to the effect.
     * @return {void}
     * @protected
     */
    _createMethodObserver(expression, dynamicFn) {
      let sig = parseMethod(expression);
      if (!sig) {
        throw new Error("Malformed observer expression '" + expression + "'");
      }
      createMethodEffect(this, sig, TYPES.OBSERVE, runMethodEffect, null, dynamicFn);
    }
    /**
     * Equivalent to static `createNotifyingProperty` API but can be called on
     * an instance to add effects at runtime.  See that method for
     * full API docs.
     *
     * @override
     * @param {string} property Property name
     * @return {void}
     * @protected
     */
    _createNotifyingProperty(property) {
      this._addPropertyEffect(property, TYPES.NOTIFY, {
        fn: runNotifyEffect,
        info: {
          eventName: camelToDashCase(property) + "-changed",
          property
        }
      });
    }
    /**
     * Equivalent to static `createReflectedProperty` API but can be called on
     * an instance to add effects at runtime.  See that method for
     * full API docs.
     *
     * @override
     * @param {string} property Property name
     * @return {void}
     * @protected
     * @suppress {missingProperties} go/missingfnprops
     */
    _createReflectedProperty(property) {
      let attr = this.constructor.attributeNameForProperty(property);
      if (attr[0] === "-") {
        console.warn("Property " + property + " cannot be reflected to attribute " + attr + ' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.');
      } else {
        this._addPropertyEffect(property, TYPES.REFLECT, {
          fn: runReflectEffect,
          info: {
            attrName: attr
          }
        });
      }
    }
    /**
     * Equivalent to static `createComputedProperty` API but can be called on
     * an instance to add effects at runtime.  See that method for
     * full API docs.
     *
     * @override
     * @param {string} property Name of computed property to set
     * @param {string} expression Method expression
     * @param {boolean|Object=} dynamicFn Boolean or object map indicating
     *   whether method names should be included as a dependency to the effect.
     * @return {void}
     * @protected
     */
    _createComputedProperty(property, expression, dynamicFn) {
      let sig = parseMethod(expression);
      if (!sig) {
        throw new Error("Malformed computed expression '" + expression + "'");
      }
      const info = createMethodEffect(this, sig, TYPES.COMPUTE, runComputedEffect, property, dynamicFn);
      ensureOwnEffectMap(this, COMPUTE_INFO)[property] = info;
    }
    /**
     * Gather the argument values for a method specified in the provided array
     * of argument metadata.
     *
     * The `path` and `value` arguments are used to fill in wildcard descriptor
     * when the method is being called as a result of a path notification.
     *
     * @param {!Array<!MethodArg>} args Array of argument metadata
     * @param {string} path Property/path name that triggered the method effect
     * @param {Object} props Bag of current property changes
     * @return {!Array<*>} Array of argument values
     * @private
     */
    _marshalArgs(args, path, props) {
      const data = this.__data;
      const values = [];
      for (let i2 = 0, l2 = args.length; i2 < l2; i2++) {
        let {
          name,
          structured,
          wildcard,
          value,
          literal
        } = args[i2];
        if (!literal) {
          if (wildcard) {
            const matches2 = isDescendant(name, path);
            const pathValue = getArgValue(data, props, matches2 ? path : name);
            value = {
              path: matches2 ? path : name,
              value: pathValue,
              base: matches2 ? get(data, name) : pathValue
            };
          } else {
            value = structured ? getArgValue(data, props, name) : data[name];
          }
        }
        if (legacyUndefined && !this._overrideLegacyUndefined && value === void 0 && args.length > 1) {
          return NOOP;
        }
        values[i2] = value;
      }
      return values;
    }
    // -- static class methods ------------
    /**
     * Ensures an accessor exists for the specified property, and adds
     * to a list of "property effects" that will run when the accessor for
     * the specified property is set.  Effects are grouped by "type", which
     * roughly corresponds to a phase in effect processing.  The effect
     * metadata should be in the following form:
     *
     *     {
     *       fn: effectFunction, // Reference to function to call to perform effect
     *       info: { ... }       // Effect metadata passed to function
     *       trigger: {          // Optional triggering metadata; if not provided
     *         name: string      // the property is treated as a wildcard
     *         structured: boolean
     *         wildcard: boolean
     *       }
     *     }
     *
     * Effects are called from `_propertiesChanged` in the following order by
     * type:
     *
     * 1. COMPUTE
     * 2. PROPAGATE
     * 3. REFLECT
     * 4. OBSERVE
     * 5. NOTIFY
     *
     * Effect functions are called with the following signature:
     *
     *     effectFunction(inst, path, props, oldProps, info, hasPaths)
     *
     * @param {string} property Property that should trigger the effect
     * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
     * @param {Object=} effect Effect metadata object
     * @return {void}
     * @protected
     * @nocollapse
     */
    static addPropertyEffect(property, type, effect) {
      this.prototype._addPropertyEffect(property, type, effect);
    }
    /**
     * Creates a single-property observer for the given property.
     *
     * @param {string} property Property name
     * @param {string|function(*,*)} method Function or name of observer method to call
     * @param {boolean=} dynamicFn Whether the method name should be included as
     *   a dependency to the effect.
     * @return {void}
     * @protected
     * @nocollapse
     */
    static createPropertyObserver(property, method, dynamicFn) {
      this.prototype._createPropertyObserver(property, method, dynamicFn);
    }
    /**
     * Creates a multi-property "method observer" based on the provided
     * expression, which should be a string in the form of a normal JavaScript
     * function signature: `'methodName(arg1, [..., argn])'`.  Each argument
     * should correspond to a property or path in the context of this
     * prototype (or instance), or may be a literal string or number.
     *
     * @param {string} expression Method expression
     * @param {boolean|Object=} dynamicFn Boolean or object map indicating
     * @return {void}
     *   whether method names should be included as a dependency to the effect.
     * @protected
     * @nocollapse
     */
    static createMethodObserver(expression, dynamicFn) {
      this.prototype._createMethodObserver(expression, dynamicFn);
    }
    /**
     * Causes the setter for the given property to dispatch `<property>-changed`
     * events to notify of changes to the property.
     *
     * @param {string} property Property name
     * @return {void}
     * @protected
     * @nocollapse
     */
    static createNotifyingProperty(property) {
      this.prototype._createNotifyingProperty(property);
    }
    /**
     * Creates a read-only accessor for the given property.
     *
     * To set the property, use the protected `_setProperty` API.
     * To create a custom protected setter (e.g. `_setMyProp()` for
     * property `myProp`), pass `true` for `protectedSetter`.
     *
     * Note, if the property will have other property effects, this method
     * should be called first, before adding other effects.
     *
     * @param {string} property Property name
     * @param {boolean=} protectedSetter Creates a custom protected setter
     *   when `true`.
     * @return {void}
     * @protected
     * @nocollapse
     */
    static createReadOnlyProperty(property, protectedSetter) {
      this.prototype._createReadOnlyProperty(property, protectedSetter);
    }
    /**
     * Causes the setter for the given property to reflect the property value
     * to a (dash-cased) attribute of the same name.
     *
     * @param {string} property Property name
     * @return {void}
     * @protected
     * @nocollapse
     */
    static createReflectedProperty(property) {
      this.prototype._createReflectedProperty(property);
    }
    /**
     * Creates a computed property whose value is set to the result of the
     * method described by the given `expression` each time one or more
     * arguments to the method changes.  The expression should be a string
     * in the form of a normal JavaScript function signature:
     * `'methodName(arg1, [..., argn])'`
     *
     * @param {string} property Name of computed property to set
     * @param {string} expression Method expression
     * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
     *   method names should be included as a dependency to the effect.
     * @return {void}
     * @protected
     * @nocollapse
     */
    static createComputedProperty(property, expression, dynamicFn) {
      this.prototype._createComputedProperty(property, expression, dynamicFn);
    }
    /**
     * Parses the provided template to ensure binding effects are created
     * for them, and then ensures property accessors are created for any
     * dependent properties in the template.  Binding effects for bound
     * templates are stored in a linked list on the instance so that
     * templates can be efficiently stamped and unstamped.
     *
     * @param {!HTMLTemplateElement} template Template containing binding
     *   bindings
     * @return {!TemplateInfo} Template metadata object
     * @protected
     * @nocollapse
     */
    static bindTemplate(template) {
      return this.prototype._bindTemplate(template);
    }
    // -- binding ----------------------------------------------
    /*
     * Overview of binding flow:
     *
     * During finalization (`instanceBinding==false`, `wasPreBound==false`):
     *  `_bindTemplate(t, false)` called directly during finalization - parses
     *  the template (for the first time), and then assigns that _prototypical_
     *  template info to `__preboundTemplateInfo` _on the prototype_; note in
     *  this case `wasPreBound` is false; this is the first time we're binding
     *  it, thus we create accessors.
     *
     * During first stamping (`instanceBinding==true`, `wasPreBound==true`):
     *   `_stampTemplate` calls `_bindTemplate(t, true)`: the `templateInfo`
     *   returned matches the prebound one, and so this is `wasPreBound == true`
     *   state; thus we _skip_ creating accessors, but _do_ create an instance
     *   of the template info to serve as the start of our linked list (needs to
     *   be an instance, not the prototypical one, so that we can add `nodeList`
     *   to it to contain the `nodeInfo`-ordered list of instance nodes for
     *   bindings, and so we can chain runtime-stamped template infos off of
     *   it). At this point, the call to `_stampTemplate` calls
     *   `applyTemplateInfo` for each nested `<template>` found during parsing
     *   to hand prototypical `_templateInfo` to them; we also pass the _parent_
     *   `templateInfo` to the `<template>` so that we have the instance-time
     *   parent to link the `templateInfo` under in the case it was
     *   runtime-stamped.
     *
     * During subsequent runtime stamping (`instanceBinding==true`,
     *   `wasPreBound==false`): `_stampTemplate` calls `_bindTemplate(t, true)`
     *   - here `templateInfo` is guaranteed to _not_ match the prebound one,
     *   because it was either a different template altogether, or even if it
     *   was the same template, the step above created a instance of the info;
     *   in this case `wasPreBound == false`, so we _do_ create accessors, _and_
     *   link a instance into the linked list.
     */
    /**
     * Equivalent to static `bindTemplate` API but can be called on an instance
     * to add effects at runtime.  See that method for full API docs.
     *
     * This method may be called on the prototype (for prototypical template
     * binding, to avoid creating accessors every instance) once per prototype,
     * and will be called with `runtimeBinding: true` by `_stampTemplate` to
     * create and link an instance of the template metadata associated with a
     * particular stamping.
     *
     * @override
     * @param {!HTMLTemplateElement} template Template containing binding
     * bindings
     * @param {boolean=} instanceBinding When false (default), performs
     * "prototypical" binding of the template and overwrites any previously
     * bound template for the class. When true (as passed from
     * `_stampTemplate`), the template info is instanced and linked into the
     * list of bound templates.
     * @return {!TemplateInfo} Template metadata object; for `runtimeBinding`,
     * this is an instance of the prototypical template info
     * @protected
     * @suppress {missingProperties} go/missingfnprops
     */
    _bindTemplate(template, instanceBinding) {
      let templateInfo = this.constructor._parseTemplate(template);
      let wasPreBound = this.__preBoundTemplateInfo == templateInfo;
      if (!wasPreBound) {
        for (let prop in templateInfo.propertyEffects) {
          this._createPropertyAccessor(prop);
        }
      }
      if (instanceBinding) {
        templateInfo = /** @type {!TemplateInfo} */
        Object.create(templateInfo);
        templateInfo.wasPreBound = wasPreBound;
        if (!this.__templateInfo) {
          this.__templateInfo = templateInfo;
        } else {
          const parent = template._parentTemplateInfo || this.__templateInfo;
          const previous = parent.lastChild;
          templateInfo.parent = parent;
          parent.lastChild = templateInfo;
          templateInfo.previousSibling = previous;
          if (previous) {
            previous.nextSibling = templateInfo;
          } else {
            parent.firstChild = templateInfo;
          }
        }
      } else {
        this.__preBoundTemplateInfo = templateInfo;
      }
      return templateInfo;
    }
    /**
     * Adds a property effect to the given template metadata, which is run
     * at the "propagate" stage of `_propertiesChanged` when the template
     * has been bound to the element via `_bindTemplate`.
     *
     * The `effect` object should match the format in `_addPropertyEffect`.
     *
     * @param {Object} templateInfo Template metadata to add effect to
     * @param {string} prop Property that should trigger the effect
     * @param {Object=} effect Effect metadata object
     * @return {void}
     * @protected
     * @nocollapse
     */
    static _addTemplatePropertyEffect(templateInfo, prop, effect) {
      let hostProps = templateInfo.hostProps = templateInfo.hostProps || {};
      hostProps[prop] = true;
      let effects = templateInfo.propertyEffects = templateInfo.propertyEffects || {};
      let propEffects = effects[prop] = effects[prop] || [];
      propEffects.push(effect);
    }
    /**
     * Stamps the provided template and performs instance-time setup for
     * Polymer template features, including data bindings, declarative event
     * listeners, and the `this.$` map of `id`'s to nodes.  A document fragment
     * is returned containing the stamped DOM, ready for insertion into the
     * DOM.
     *
     * This method may be called more than once; however note that due to
     * `shadycss` polyfill limitations, only styles from templates prepared
     * using `ShadyCSS.prepareTemplate` will be correctly polyfilled (scoped
     * to the shadow root and support CSS custom properties), and note that
     * `ShadyCSS.prepareTemplate` may only be called once per element. As such,
     * any styles required by in runtime-stamped templates must be included
     * in the main element template.
     *
     * @param {!HTMLTemplateElement} template Template to stamp
     * @param {TemplateInfo=} templateInfo Optional bound template info associated
     *   with the template to be stamped; if omitted the template will be
     *   automatically bound.
     * @return {!StampedTemplate} Cloned template content
     * @override
     * @protected
     */
    _stampTemplate(template, templateInfo) {
      templateInfo = templateInfo || /** @type {!TemplateInfo} */
      this._bindTemplate(template, true);
      hostStack.push(this);
      let dom = super._stampTemplate(template, templateInfo);
      hostStack.pop();
      templateInfo.nodeList = dom.nodeList;
      if (!templateInfo.wasPreBound) {
        let nodes = templateInfo.childNodes = [];
        for (let n2 = dom.firstChild; n2; n2 = n2.nextSibling) {
          nodes.push(n2);
        }
      }
      dom.templateInfo = templateInfo;
      setupBindings(this, templateInfo);
      if (this.__dataClientsReady) {
        this._runEffectsForTemplate(templateInfo, this.__data, null, false);
        this._flushClients();
      }
      return dom;
    }
    /**
     * Removes and unbinds the nodes previously contained in the provided
     * DocumentFragment returned from `_stampTemplate`.
     *
     * @override
     * @param {!StampedTemplate} dom DocumentFragment previously returned
     *   from `_stampTemplate` associated with the nodes to be removed
     * @return {void}
     * @protected
     */
    _removeBoundDom(dom) {
      const templateInfo = dom.templateInfo;
      const {
        previousSibling,
        nextSibling,
        parent
      } = templateInfo;
      if (previousSibling) {
        previousSibling.nextSibling = nextSibling;
      } else if (parent) {
        parent.firstChild = nextSibling;
      }
      if (nextSibling) {
        nextSibling.previousSibling = previousSibling;
      } else if (parent) {
        parent.lastChild = previousSibling;
      }
      templateInfo.nextSibling = templateInfo.previousSibling = null;
      let nodes = templateInfo.childNodes;
      for (let i2 = 0; i2 < nodes.length; i2++) {
        let node = nodes[i2];
        wrap(wrap(node).parentNode).removeChild(node);
      }
    }
    /**
     * Overrides default `TemplateStamp` implementation to add support for
     * parsing bindings from `TextNode`'s' `textContent`.  A `bindings`
     * array is added to `nodeInfo` and populated with binding metadata
     * with information capturing the binding target, and a `parts` array
     * with one or more metadata objects capturing the source(s) of the
     * binding.
     *
     * @param {Node} node Node to parse
     * @param {TemplateInfo} templateInfo Template metadata for current template
     * @param {NodeInfo} nodeInfo Node metadata for current template node
     * @return {boolean} `true` if the visited node added node-specific
     *   metadata to `nodeInfo`
     * @protected
     * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
     * @nocollapse
     */
    static _parseTemplateNode(node, templateInfo, nodeInfo) {
      let noted = propertyEffectsBase._parseTemplateNode.call(this, node, templateInfo, nodeInfo);
      if (node.nodeType === Node.TEXT_NODE) {
        let parts = this._parseBindings(node.textContent, templateInfo);
        if (parts) {
          node.textContent = literalFromParts(parts) || " ";
          addBinding(this, templateInfo, nodeInfo, "text", "textContent", parts);
          noted = true;
        }
      }
      return noted;
    }
    /**
     * Overrides default `TemplateStamp` implementation to add support for
     * parsing bindings from attributes.  A `bindings`
     * array is added to `nodeInfo` and populated with binding metadata
     * with information capturing the binding target, and a `parts` array
     * with one or more metadata objects capturing the source(s) of the
     * binding.
     *
     * @param {Element} node Node to parse
     * @param {TemplateInfo} templateInfo Template metadata for current template
     * @param {NodeInfo} nodeInfo Node metadata for current template node
     * @param {string} name Attribute name
     * @param {string} value Attribute value
     * @return {boolean} `true` if the visited node added node-specific
     *   metadata to `nodeInfo`
     * @protected
     * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
     * @nocollapse
     */
    static _parseTemplateNodeAttribute(node, templateInfo, nodeInfo, name, value) {
      let parts = this._parseBindings(value, templateInfo);
      if (parts) {
        let origName = name;
        let kind = "property";
        if (capitalAttributeRegex.test(name)) {
          kind = "attribute";
        } else if (name[name.length - 1] == "$") {
          name = name.slice(0, -1);
          kind = "attribute";
        }
        let literal = literalFromParts(parts);
        if (literal && kind == "attribute") {
          if (name == "class" && node.hasAttribute("class")) {
            literal += " " + node.getAttribute(name);
          }
          node.setAttribute(name, literal);
        }
        if (kind == "attribute" && origName == "disable-upgrade$") {
          node.setAttribute(name, "");
        }
        if (node.localName === "input" && origName === "value") {
          node.setAttribute(origName, "");
        }
        node.removeAttribute(origName);
        if (kind === "property") {
          name = dashToCamelCase(name);
        }
        addBinding(this, templateInfo, nodeInfo, kind, name, parts, literal);
        return true;
      } else {
        return propertyEffectsBase._parseTemplateNodeAttribute.call(this, node, templateInfo, nodeInfo, name, value);
      }
    }
    /**
     * Overrides default `TemplateStamp` implementation to add support for
     * binding the properties that a nested template depends on to the template
     * as `_host_<property>`.
     *
     * @param {Node} node Node to parse
     * @param {TemplateInfo} templateInfo Template metadata for current template
     * @param {NodeInfo} nodeInfo Node metadata for current template node
     * @return {boolean} `true` if the visited node added node-specific
     *   metadata to `nodeInfo`
     * @protected
     * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
     * @nocollapse
     */
    static _parseTemplateNestedTemplate(node, templateInfo, nodeInfo) {
      let noted = propertyEffectsBase._parseTemplateNestedTemplate.call(this, node, templateInfo, nodeInfo);
      const parent = node.parentNode;
      const nestedTemplateInfo = nodeInfo.templateInfo;
      const isDomIf = parent.localName === "dom-if";
      const isDomRepeat = parent.localName === "dom-repeat";
      if (removeNestedTemplates && (isDomIf || isDomRepeat)) {
        parent.removeChild(node);
        nodeInfo = nodeInfo.parentInfo;
        nodeInfo.templateInfo = nestedTemplateInfo;
        nodeInfo.noted = true;
        noted = false;
      }
      let hostProps = nestedTemplateInfo.hostProps;
      if (fastDomIf && isDomIf) {
        if (hostProps) {
          templateInfo.hostProps = Object.assign(templateInfo.hostProps || {}, hostProps);
          if (!removeNestedTemplates) {
            nodeInfo.parentInfo.noted = true;
          }
        }
      } else {
        let mode = "{";
        for (let source in hostProps) {
          let parts = [{
            mode,
            source,
            dependencies: [source],
            hostProp: true
          }];
          addBinding(this, templateInfo, nodeInfo, "property", "_host_" + source, parts);
        }
      }
      return noted;
    }
    /**
     * Called to parse text in a template (either attribute values or
     * textContent) into binding metadata.
     *
     * Any overrides of this method should return an array of binding part
     * metadata  representing one or more bindings found in the provided text
     * and any "literal" text in between.  Any non-literal parts will be passed
     * to `_evaluateBinding` when any dependencies change.  The only required
     * fields of each "part" in the returned array are as follows:
     *
     * - `dependencies` - Array containing trigger metadata for each property
     *   that should trigger the binding to update
     * - `literal` - String containing text if the part represents a literal;
     *   in this case no `dependencies` are needed
     *
     * Additional metadata for use by `_evaluateBinding` may be provided in
     * each part object as needed.
     *
     * The default implementation handles the following types of bindings
     * (one or more may be intermixed with literal strings):
     * - Property binding: `[[prop]]`
     * - Path binding: `[[object.prop]]`
     * - Negated property or path bindings: `[[!prop]]` or `[[!object.prop]]`
     * - Two-way property or path bindings (supports negation):
     *   `{{prop}}`, `{{object.prop}}`, `{{!prop}}` or `{{!object.prop}}`
     * - Inline computed method (supports negation):
     *   `[[compute(a, 'literal', b)]]`, `[[!compute(a, 'literal', b)]]`
     *
     * The default implementation uses a regular expression for best
     * performance. However, the regular expression uses a white-list of
     * allowed characters in a data-binding, which causes problems for
     * data-bindings that do use characters not in this white-list.
     *
     * Instead of updating the white-list with all allowed characters,
     * there is a StrictBindingParser (see lib/mixins/strict-binding-parser)
     * that uses a state machine instead. This state machine is able to handle
     * all characters. However, it is slightly less performant, therefore we
     * extracted it into a separate optional mixin.
     *
     * @param {string} text Text to parse from attribute or textContent
     * @param {Object} templateInfo Current template metadata
     * @return {Array<!BindingPart>} Array of binding part metadata
     * @protected
     * @nocollapse
     */
    static _parseBindings(text, templateInfo) {
      let parts = [];
      let lastIndex = 0;
      let m2;
      while ((m2 = bindingRegex.exec(text)) !== null) {
        if (m2.index > lastIndex) {
          parts.push({
            literal: text.slice(lastIndex, m2.index)
          });
        }
        let mode = m2[1][0];
        let negate = Boolean(m2[2]);
        let source = m2[3].trim();
        let customEvent = false, notifyEvent = "", colon = -1;
        if (mode == "{" && (colon = source.indexOf("::")) > 0) {
          notifyEvent = source.substring(colon + 2);
          source = source.substring(0, colon);
          customEvent = true;
        }
        let signature = parseMethod(source);
        let dependencies = [];
        if (signature) {
          let {
            args,
            methodName
          } = signature;
          for (let i2 = 0; i2 < args.length; i2++) {
            let arg = args[i2];
            if (!arg.literal) {
              dependencies.push(arg);
            }
          }
          let dynamicFns = templateInfo.dynamicFns;
          if (dynamicFns && dynamicFns[methodName] || signature.static) {
            dependencies.push(methodName);
            signature.dynamicFn = true;
          }
        } else {
          dependencies.push(source);
        }
        parts.push({
          source,
          mode,
          negate,
          customEvent,
          signature,
          dependencies,
          event: notifyEvent
        });
        lastIndex = bindingRegex.lastIndex;
      }
      if (lastIndex && lastIndex < text.length) {
        let literal = text.substring(lastIndex);
        if (literal) {
          parts.push({
            literal
          });
        }
      }
      if (parts.length) {
        return parts;
      } else {
        return null;
      }
    }
    /**
     * Called to evaluate a previously parsed binding part based on a set of
     * one or more changed dependencies.
     *
     * @param {!Polymer_PropertyEffects} inst Element that should be used as
     *     scope for binding dependencies
     * @param {BindingPart} part Binding part metadata
     * @param {string} path Property/path that triggered this effect
     * @param {Object} props Bag of current property changes
     * @param {Object} oldProps Bag of previous values for changed properties
     * @param {boolean} hasPaths True with `props` contains one or more paths
     * @return {*} Value the binding part evaluated to
     * @protected
     * @nocollapse
     */
    static _evaluateBinding(inst, part, path, props, oldProps, hasPaths) {
      let value;
      if (part.signature) {
        value = runMethodEffect(inst, path, props, oldProps, part.signature);
      } else if (path != part.source) {
        value = get(inst, part.source);
      } else {
        if (hasPaths && isPath(path)) {
          value = get(inst, path);
        } else {
          value = inst.__data[path];
        }
      }
      if (part.negate) {
        value = !value;
      }
      return value;
    }
  }
  return PropertyEffects2;
});
var hostStack = [];
function normalizeProperties(props) {
  const output = {};
  for (let p2 in props) {
    const o2 = props[p2];
    output[p2] = typeof o2 === "function" ? {
      type: o2
    } : o2;
  }
  return output;
}
var PropertiesMixin = dedupingMixin((superClass) => {
  const base = PropertiesChanged(superClass);
  function superPropertiesClass(constructor) {
    const superCtor = Object.getPrototypeOf(constructor);
    return superCtor.prototype instanceof PropertiesMixin2 ? (
      /** @type {!PropertiesMixinConstructor} */
      superCtor
    ) : null;
  }
  function ownProperties(constructor) {
    if (!constructor.hasOwnProperty(JSCompiler_renameProperty("__ownProperties", constructor))) {
      let props = null;
      if (constructor.hasOwnProperty(JSCompiler_renameProperty("properties", constructor))) {
        const properties = constructor.properties;
        if (properties) {
          props = normalizeProperties(properties);
        }
      }
      constructor.__ownProperties = props;
    }
    return constructor.__ownProperties;
  }
  class PropertiesMixin2 extends base {
    /**
     * Implements standard custom elements getter to observes the attributes
     * listed in `properties`.
     * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
     * @nocollapse
     */
    static get observedAttributes() {
      if (!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes", this))) {
        const props = this._properties;
        this.__observedAttributes = props ? Object.keys(props).map((p2) => this.prototype._addPropertyToAttributeMap(p2)) : [];
      }
      return this.__observedAttributes;
    }
    /**
     * Finalizes an element definition, including ensuring any super classes
     * are also finalized. This includes ensuring property
     * accessors exist on the element prototype. This method calls
     * `_finalizeClass` to finalize each constructor in the prototype chain.
     * @return {void}
     * @nocollapse
     */
    static finalize() {
      if (!this.hasOwnProperty(JSCompiler_renameProperty("__finalized", this))) {
        const superCtor = superPropertiesClass(
          /** @type {!PropertiesMixinConstructor} */
          this
        );
        if (superCtor) {
          superCtor.finalize();
        }
        this.__finalized = true;
        this._finalizeClass();
      }
    }
    /**
     * Finalize an element class. This includes ensuring property
     * accessors exist on the element prototype. This method is called by
     * `finalize` and finalizes the class constructor.
     *
     * @protected
     * @nocollapse
     */
    static _finalizeClass() {
      const props = ownProperties(
        /** @type {!PropertiesMixinConstructor} */
        this
      );
      if (props) {
        this.createProperties(props);
      }
    }
    /**
     * Returns a memoized version of all properties, including those inherited
     * from super classes. Properties not in object format are converted to
     * at least {type}.
     *
     * @return {Object} Object containing properties for this class
     * @protected
     * @nocollapse
     */
    static get _properties() {
      if (!this.hasOwnProperty(JSCompiler_renameProperty("__properties", this))) {
        const superCtor = superPropertiesClass(
          /** @type {!PropertiesMixinConstructor} */
          this
        );
        this.__properties = Object.assign({}, superCtor && superCtor._properties, ownProperties(
          /** @type {PropertiesMixinConstructor} */
          this
        ));
      }
      return this.__properties;
    }
    /**
     * Overrides `PropertiesChanged` method to return type specified in the
     * static `properties` object for the given property.
     * @param {string} name Name of property
     * @return {*} Type to which to deserialize attribute
     *
     * @protected
     * @nocollapse
     */
    static typeForProperty(name) {
      const info = this._properties[name];
      return info && info.type;
    }
    /**
     * Overrides `PropertiesChanged` method and adds a call to
     * `finalize` which lazily configures the element's property accessors.
     * @override
     * @return {void}
     */
    _initializeProperties() {
      this.constructor.finalize();
      super._initializeProperties();
    }
    /**
     * Called when the element is added to a document.
     * Calls `_enableProperties` to turn on property system from
     * `PropertiesChanged`.
     * @suppress {missingProperties} Super may or may not implement the callback
     * @return {void}
     * @override
     */
    connectedCallback() {
      if (super.connectedCallback) {
        super.connectedCallback();
      }
      this._enableProperties();
    }
    /**
     * Called when the element is removed from a document
     * @suppress {missingProperties} Super may or may not implement the callback
     * @return {void}
     * @override
     */
    disconnectedCallback() {
      if (super.disconnectedCallback) {
        super.disconnectedCallback();
      }
    }
  }
  return PropertiesMixin2;
});
var version = "3.5.2";
var builtCSS = window.ShadyCSS && window.ShadyCSS["cssBuild"];
var ElementMixin$1 = dedupingMixin((base) => {
  const polymerElementBase = PropertiesMixin(PropertyEffects(base));
  function propertyDefaults(constructor) {
    if (!constructor.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults", constructor))) {
      constructor.__propertyDefaults = null;
      let props = constructor._properties;
      for (let p2 in props) {
        let info = props[p2];
        if ("value" in info) {
          constructor.__propertyDefaults = constructor.__propertyDefaults || {};
          constructor.__propertyDefaults[p2] = info;
        }
      }
    }
    return constructor.__propertyDefaults;
  }
  function ownObservers(constructor) {
    if (!constructor.hasOwnProperty(JSCompiler_renameProperty("__ownObservers", constructor))) {
      constructor.__ownObservers = constructor.hasOwnProperty(JSCompiler_renameProperty("observers", constructor)) ? (
        /** @type {PolymerElementConstructor} */
        constructor.observers
      ) : null;
    }
    return constructor.__ownObservers;
  }
  function createPropertyFromConfig(proto2, name, info, allProps) {
    if (info.computed) {
      info.readOnly = true;
    }
    if (info.computed) {
      if (proto2._hasReadOnlyEffect(name)) {
        console.warn(`Cannot redefine computed property '${name}'.`);
      } else {
        proto2._createComputedProperty(name, info.computed, allProps);
      }
    }
    if (info.readOnly && !proto2._hasReadOnlyEffect(name)) {
      proto2._createReadOnlyProperty(name, !info.computed);
    } else if (info.readOnly === false && proto2._hasReadOnlyEffect(name)) {
      console.warn(`Cannot make readOnly property '${name}' non-readOnly.`);
    }
    if (info.reflectToAttribute && !proto2._hasReflectEffect(name)) {
      proto2._createReflectedProperty(name);
    } else if (info.reflectToAttribute === false && proto2._hasReflectEffect(name)) {
      console.warn(`Cannot make reflected property '${name}' non-reflected.`);
    }
    if (info.notify && !proto2._hasNotifyEffect(name)) {
      proto2._createNotifyingProperty(name);
    } else if (info.notify === false && proto2._hasNotifyEffect(name)) {
      console.warn(`Cannot make notify property '${name}' non-notify.`);
    }
    if (info.observer) {
      proto2._createPropertyObserver(name, info.observer, allProps[info.observer]);
    }
    proto2._addPropertyToAttributeMap(name);
  }
  function processElementStyles(klass, template, is, baseURI) {
    if (!builtCSS) {
      const templateStyles = template.content.querySelectorAll("style");
      const stylesWithImports = stylesFromTemplate(template);
      const linkedStyles = stylesFromModuleImports(is);
      const firstTemplateChild = template.content.firstElementChild;
      for (let idx = 0; idx < linkedStyles.length; idx++) {
        let s2 = linkedStyles[idx];
        s2.textContent = klass._processStyleText(s2.textContent, baseURI);
        template.content.insertBefore(s2, firstTemplateChild);
      }
      let templateStyleIndex = 0;
      for (let i2 = 0; i2 < stylesWithImports.length; i2++) {
        let s2 = stylesWithImports[i2];
        let templateStyle = templateStyles[templateStyleIndex];
        if (templateStyle !== s2) {
          s2 = s2.cloneNode(true);
          templateStyle.parentNode.insertBefore(s2, templateStyle);
        } else {
          templateStyleIndex++;
        }
        s2.textContent = klass._processStyleText(s2.textContent, baseURI);
      }
    }
    if (window.ShadyCSS) {
      window.ShadyCSS.prepareTemplate(template, is);
    }
    if (useAdoptedStyleSheetsWithBuiltCSS && builtCSS && supportsAdoptingStyleSheets$1) {
      const styles = template.content.querySelectorAll("style");
      if (styles) {
        let css = "";
        Array.from(styles).forEach((s2) => {
          css += s2.textContent;
          s2.parentNode.removeChild(s2);
        });
        klass._styleSheet = new CSSStyleSheet();
        klass._styleSheet.replaceSync(css);
      }
    }
  }
  function getTemplateFromDomModule(is) {
    let template = null;
    if (is && (!strictTemplatePolicy || allowTemplateFromDomModule)) {
      template = /** @type {?HTMLTemplateElement} */
      DomModule.import(is, "template");
      if (strictTemplatePolicy && !template) {
        throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${is}`);
      }
    }
    return template;
  }
  class PolymerElement2 extends polymerElementBase {
    /**
     * Current Polymer version in Semver notation.
     * @type {string} Semver notation of the current version of Polymer.
     * @nocollapse
     */
    static get polymerElementVersion() {
      return version;
    }
    /**
     * Override of PropertiesMixin _finalizeClass to create observers and
     * find the template.
     * @return {void}
     * @protected
     * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
     * @nocollapse
     */
    static _finalizeClass() {
      polymerElementBase._finalizeClass.call(this);
      const observers = ownObservers(this);
      if (observers) {
        this.createObservers(observers, this._properties);
      }
      this._prepareTemplate();
    }
    /** @nocollapse */
    static _prepareTemplate() {
      let template = (
        /** @type {PolymerElementConstructor} */
        this.template
      );
      if (template) {
        if (typeof template === "string") {
          console.error("template getter must return HTMLTemplateElement");
          template = null;
        } else if (!legacyOptimizations) {
          template = template.cloneNode(true);
        }
      }
      this.prototype._template = template;
    }
    /**
     * Override of PropertiesChanged createProperties to create accessors
     * and property effects for all of the properties.
     * @param {!Object} props .
     * @return {void}
     * @protected
     * @nocollapse
     */
    static createProperties(props) {
      for (let p2 in props) {
        createPropertyFromConfig(
          /** @type {?} */
          this.prototype,
          p2,
          props[p2],
          props
        );
      }
    }
    /**
     * Creates observers for the given `observers` array.
     * Leverages `PropertyEffects` to create observers.
     * @param {Object} observers Array of observer descriptors for
     *   this class
     * @param {Object} dynamicFns Object containing keys for any properties
     *   that are functions and should trigger the effect when the function
     *   reference is changed
     * @return {void}
     * @protected
     * @nocollapse
     */
    static createObservers(observers, dynamicFns) {
      const proto2 = this.prototype;
      for (let i2 = 0; i2 < observers.length; i2++) {
        proto2._createMethodObserver(observers[i2], dynamicFns);
      }
    }
    /**
     * Returns the template that will be stamped into this element's shadow root.
     *
     * If a `static get is()` getter is defined, the default implementation will
     * return the first `<template>` in a `dom-module` whose `id` matches this
     * element's `is` (note that a `_template` property on the class prototype
     * takes precedence over the `dom-module` template, to maintain legacy
     * element semantics; a subclass will subsequently fall back to its super
     * class template if neither a `prototype._template` or a `dom-module` for
     * the class's `is` was found).
     *
     * Users may override this getter to return an arbitrary template
     * (in which case the `is` getter is unnecessary). The template returned
     * must be an `HTMLTemplateElement`.
     *
     * Note that when subclassing, if the super class overrode the default
     * implementation and the subclass would like to provide an alternate
     * template via a `dom-module`, it should override this getter and
     * return `DomModule.import(this.is, 'template')`.
     *
     * If a subclass would like to modify the super class template, it should
     * clone it rather than modify it in place.  If the getter does expensive
     * work such as cloning/modifying a template, it should memoize the
     * template for maximum performance:
     *
     *   let memoizedTemplate;
     *   class MySubClass extends MySuperClass {
     *     static get template() {
     *       if (!memoizedTemplate) {
     *         memoizedTemplate = super.template.cloneNode(true);
     *         let subContent = document.createElement('div');
     *         subContent.textContent = 'This came from MySubClass';
     *         memoizedTemplate.content.appendChild(subContent);
     *       }
     *       return memoizedTemplate;
     *     }
     *   }
     *
     * @return {!HTMLTemplateElement|string} Template to be stamped
     * @nocollapse
     */
    static get template() {
      if (!this.hasOwnProperty(JSCompiler_renameProperty("_template", this))) {
        let protoTemplate = this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template", this.prototype)) ? this.prototype._template : void 0;
        if (typeof protoTemplate === "function") {
          protoTemplate = protoTemplate();
        }
        this._template = // If user has put template on prototype (e.g. in legacy via registered
        // callback or info object), prefer that first. Note that `null` is
        // used as a sentinel to indicate "no template" and can be used to
        // override a super template, whereas `undefined` is used as a
        // sentinel to mean "fall-back to default template lookup" via
        // dom-module and/or super.template.
        protoTemplate !== void 0 ? protoTemplate : (
          // Look in dom-module associated with this element's is
          this.hasOwnProperty(JSCompiler_renameProperty("is", this)) && getTemplateFromDomModule(
            /** @type {PolymerElementConstructor}*/
            this.is
          ) || // Next look for superclass template (call the super impl this
          // way so that `this` points to the superclass)
          Object.getPrototypeOf(
            /** @type {PolymerElementConstructor}*/
            this.prototype
          ).constructor.template
        );
      }
      return this._template;
    }
    /**
     * Set the template.
     *
     * @param {!HTMLTemplateElement|string} value Template to set.
     * @nocollapse
     */
    static set template(value) {
      this._template = value;
    }
    /**
     * Path matching the url from which the element was imported.
     *
     * This path is used to resolve url's in template style cssText.
     * The `importPath` property is also set on element instances and can be
     * used to create bindings relative to the import path.
     *
     * For elements defined in ES modules, users should implement
     * `static get importMeta() { return import.meta; }`, and the default
     * implementation of `importPath` will  return `import.meta.url`'s path.
     * For elements defined in HTML imports, this getter will return the path
     * to the document containing a `dom-module` element matching this
     * element's static `is` property.
     *
     * Note, this path should contain a trailing `/`.
     *
     * @return {string} The import path for this element class
     * @suppress {missingProperties}
     * @nocollapse
     */
    static get importPath() {
      if (!this.hasOwnProperty(JSCompiler_renameProperty("_importPath", this))) {
        const meta = this.importMeta;
        if (meta) {
          this._importPath = pathFromUrl(meta.url);
        } else {
          const module = DomModule.import(
            /** @type {PolymerElementConstructor} */
            this.is
          );
          this._importPath = module && module.assetpath || Object.getPrototypeOf(
            /** @type {PolymerElementConstructor}*/
            this.prototype
          ).constructor.importPath;
        }
      }
      return this._importPath;
    }
    constructor() {
      super();
    }
    /**
     * Overrides the default `PropertyAccessors` to ensure class
     * metaprogramming related to property accessors and effects has
     * completed (calls `finalize`).
     *
     * It also initializes any property defaults provided via `value` in
     * `properties` metadata.
     *
     * @return {void}
     * @override
     * @suppress {invalidCasts,missingProperties} go/missingfnprops
     */
    _initializeProperties() {
      this.constructor.finalize();
      this.constructor._finalizeTemplate(
        /** @type {!HTMLElement} */
        this.localName
      );
      super._initializeProperties();
      this.rootPath = rootPath;
      this.importPath = this.constructor.importPath;
      let p$ = propertyDefaults(this.constructor);
      if (!p$) {
        return;
      }
      for (let p2 in p$) {
        let info = p$[p2];
        if (this._canApplyPropertyDefault(p2)) {
          let value = typeof info.value == "function" ? info.value.call(this) : info.value;
          if (this._hasAccessor(p2)) {
            this._setPendingProperty(p2, value, true);
          } else {
            this[p2] = value;
          }
        }
      }
    }
    /**
     * Determines if a property dfeault can be applied. For example, this
     * prevents a default from being applied when a property that has no
     * accessor is overridden by its host before upgrade (e.g. via a binding).
     * @override
     * @param {string} property Name of the property
     * @return {boolean} Returns true if the property default can be applied.
     */
    _canApplyPropertyDefault(property) {
      return !this.hasOwnProperty(property);
    }
    /**
     * Gather style text for a style element in the template.
     *
     * @param {string} cssText Text containing styling to process
     * @param {string} baseURI Base URI to rebase CSS paths against
     * @return {string} The processed CSS text
     * @protected
     * @nocollapse
     */
    static _processStyleText(cssText, baseURI) {
      return resolveCss(cssText, baseURI);
    }
    /**
    * Configures an element `proto` to function with a given `template`.
    * The element name `is` and extends `ext` must be specified for ShadyCSS
    * style scoping.
    *
    * @param {string} is Tag name (or type extension name) for this element
    * @return {void}
    * @protected
    * @nocollapse
    */
    static _finalizeTemplate(is) {
      const template = this.prototype._template;
      if (template && !template.__polymerFinalized) {
        template.__polymerFinalized = true;
        const importPath = this.importPath;
        const baseURI = importPath ? resolveUrl(importPath) : "";
        processElementStyles(this, template, is, baseURI);
        this.prototype._bindTemplate(template);
      }
    }
    /**
     * Provides a default implementation of the standard Custom Elements
     * `connectedCallback`.
     *
     * The default implementation enables the property effects system and
     * flushes any pending properties, and updates shimmed CSS properties
     * when using the ShadyCSS scoping/custom properties polyfill.
     *
     * @override
     * @suppress {missingProperties, invalidCasts} Super may or may not
     *     implement the callback
     * @return {void}
     */
    connectedCallback() {
      if (window.ShadyCSS && this._template) {
        window.ShadyCSS.styleElement(
          /** @type {!HTMLElement} */
          this
        );
      }
      super.connectedCallback();
    }
    /**
     * Stamps the element template.
     *
     * @return {void}
     * @override
     */
    ready() {
      if (this._template) {
        this.root = this._stampTemplate(this._template);
        this.$ = this.root.$;
      }
      super.ready();
    }
    /**
     * Implements `PropertyEffects`'s `_readyClients` call. Attaches
     * element dom by calling `_attachDom` with the dom stamped from the
     * element's template via `_stampTemplate`. Note that this allows
     * client dom to be attached to the element prior to any observers
     * running.
     *
     * @return {void}
     * @override
     */
    _readyClients() {
      if (this._template) {
        this.root = this._attachDom(
          /** @type {StampedTemplate} */
          this.root
        );
      }
      super._readyClients();
    }
    /**
     * Attaches an element's stamped dom to itself. By default,
     * this method creates a `shadowRoot` and adds the dom to it.
     * However, this method may be overridden to allow an element
     * to put its dom in another location.
     *
     * @override
     * @throws {Error}
     * @suppress {missingReturn}
     * @param {StampedTemplate} dom to attach to the element.
     * @return {ShadowRoot} node to which the dom has been attached.
     */
    _attachDom(dom) {
      const n2 = wrap(this);
      if (n2.attachShadow) {
        if (dom) {
          if (!n2.shadowRoot) {
            n2.attachShadow({
              mode: "open",
              shadyUpgradeFragment: dom
            });
            n2.shadowRoot.appendChild(dom);
            if (this.constructor._styleSheet) {
              n2.shadowRoot.adoptedStyleSheets = [this.constructor._styleSheet];
            }
          }
          if (syncInitialRender && window.ShadyDOM) {
            window.ShadyDOM.flushInitial(n2.shadowRoot);
          }
          return n2.shadowRoot;
        }
        return null;
      } else {
        throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.");
      }
    }
    /**
     * When using the ShadyCSS scoping and custom property shim, causes all
     * shimmed styles in this element (and its subtree) to be updated
     * based on current custom property values.
     *
     * The optional parameter overrides inline custom property styles with an
     * object of properties where the keys are CSS properties, and the values
     * are strings.
     *
     * Example: `this.updateStyles({'--color': 'blue'})`
     *
     * These properties are retained unless a value of `null` is set.
     *
     * Note: This function does not support updating CSS mixins.
     * You can not dynamically change the value of an `@apply`.
     *
     * @override
     * @param {Object=} properties Bag of custom property key/values to
     *   apply to this element.
     * @return {void}
     * @suppress {invalidCasts}
     */
    updateStyles(properties) {
      if (window.ShadyCSS) {
        window.ShadyCSS.styleSubtree(
          /** @type {!HTMLElement} */
          this,
          properties
        );
      }
    }
    /**
     * Rewrites a given URL relative to a base URL. The base URL defaults to
     * the original location of the document containing the `dom-module` for
     * this element. This method will return the same URL before and after
     * bundling.
     *
     * Note that this function performs no resolution for URLs that start
     * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
     * URL resolution, use `window.URL`.
     *
     * @override
     * @param {string} url URL to resolve.
     * @param {string=} base Optional base URL to resolve against, defaults
     * to the element's `importPath`
     * @return {string} Rewritten URL relative to base
     */
    resolveUrl(url, base2) {
      if (!base2 && this.importPath) {
        base2 = resolveUrl(this.importPath);
      }
      return resolveUrl(url, base2);
    }
    /**
     * Overrides `PropertyEffects` to add map of dynamic functions on
     * template info, for consumption by `PropertyEffects` template binding
     * code. This map determines which method templates should have accessors
     * created for them.
     *
     * @param {!HTMLTemplateElement} template Template
     * @param {!TemplateInfo} templateInfo Template metadata for current template
     * @param {!NodeInfo} nodeInfo Node metadata for current template.
     * @return {boolean} .
     * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
     * @nocollapse
     */
    static _parseTemplateContent(template, templateInfo, nodeInfo) {
      templateInfo.dynamicFns = templateInfo.dynamicFns || this._properties;
      return polymerElementBase._parseTemplateContent.call(this, template, templateInfo, nodeInfo);
    }
    /**
     * Overrides `PropertyEffects` to warn on use of undeclared properties in
     * template.
     *
     * @param {Object} templateInfo Template metadata to add effect to
     * @param {string} prop Property that should trigger the effect
     * @param {Object=} effect Effect metadata object
     * @return {void}
     * @protected
     * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
     * @nocollapse
     */
    static _addTemplatePropertyEffect(templateInfo, prop, effect) {
      if (legacyWarnings && !(prop in this._properties) && // Methods used in templates with no dependencies (or only literal
      // dependencies) become accessors with template effects; ignore these
      !(effect.info.part.signature && effect.info.part.signature.static) && // Warnings for bindings added to nested templates are handled by
      // templatizer so ignore both the host-to-template bindings
      // (`hostProp`) and TemplateInstance-to-child bindings
      // (`nestedTemplate`)
      !effect.info.part.hostProp && !templateInfo.nestedTemplate) {
        console.warn(`Property '${prop}' used in template but not declared in 'properties'; attribute will not be observed.`);
      }
      return polymerElementBase._addTemplatePropertyEffect.call(this, templateInfo, prop, effect);
    }
  }
  return PolymerElement2;
});
var policy = window.trustedTypes && trustedTypes.createPolicy("polymer-html-literal", {
  createHTML: (s2) => s2
});
var LiteralString = class {
  /**
   * @param {!ITemplateArray} strings Constant parts of tagged template literal
   * @param {!Array<*>} values Variable parts of tagged template literal
   */
  constructor(strings, values) {
    assertValidTemplateStringParameters(strings, values);
    const string = values.reduce((acc, v2, idx) => acc + literalValue(v2) + strings[idx + 1], strings[0]);
    this.value = string.toString();
  }
  /**
   * @return {string} LiteralString string value
   * @override
   */
  toString() {
    return this.value;
  }
};
function literalValue(value) {
  if (value instanceof LiteralString) {
    return (
      /** @type {!LiteralString} */
      value.value
    );
  } else {
    throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${value}`);
  }
}
function htmlValue(value) {
  if (value instanceof HTMLTemplateElement) {
    return (
      /** @type {!HTMLTemplateElement } */
      value.innerHTML
    );
  } else if (value instanceof LiteralString) {
    return literalValue(value);
  } else {
    throw new Error(`non-template value passed to Polymer's html function: ${value}`);
  }
}
var html = function html2(strings, ...values) {
  assertValidTemplateStringParameters(strings, values);
  const template = (
    /** @type {!HTMLTemplateElement} */
    document.createElement("template")
  );
  let value = values.reduce((acc, v2, idx) => acc + htmlValue(v2) + strings[idx + 1], strings[0]);
  if (policy) {
    value = policy.createHTML(value);
  }
  template.innerHTML = value;
  return template;
};
var assertValidTemplateStringParameters = (strings, values) => {
  if (!Array.isArray(strings) || !Array.isArray(strings.raw) || values.length !== strings.length - 1) {
    throw new TypeError("Invalid call to the html template tag");
  }
};
var PolymerElement = ElementMixin$1(HTMLElement);
var microtaskCurrHandle = 0;
var microtaskLastHandle = 0;
var microtaskCallbacks = [];
var microtaskScheduled = false;
function microtaskFlush() {
  microtaskScheduled = false;
  const len = microtaskCallbacks.length;
  for (let i2 = 0; i2 < len; i2++) {
    const cb = microtaskCallbacks[i2];
    if (cb) {
      try {
        cb();
      } catch (e2) {
        setTimeout(() => {
          throw e2;
        });
      }
    }
  }
  microtaskCallbacks.splice(0, len);
  microtaskLastHandle += len;
}
var timeOut = {
  /**
   * Returns a sub-module with the async interface providing the provided
   * delay.
   *
   * @memberof timeOut
   * @param {number=} delay Time to wait before calling callbacks in ms
   * @return {!AsyncInterface} An async timeout interface
   */
  after(delay) {
    return {
      run(fn) {
        return window.setTimeout(fn, delay);
      },
      cancel(handle) {
        window.clearTimeout(handle);
      }
    };
  },
  /**
   * Enqueues a function called in the next task.
   *
   * @memberof timeOut
   * @param {!Function} fn Callback to run
   * @param {number=} delay Delay in milliseconds
   * @return {number} Handle used for canceling task
   */
  run(fn, delay) {
    return window.setTimeout(fn, delay);
  },
  /**
   * Cancels a previously enqueued `timeOut` callback.
   *
   * @memberof timeOut
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */
  cancel(handle) {
    window.clearTimeout(handle);
  }
};
var animationFrame = {
  /**
   * Enqueues a function called at `requestAnimationFrame` timing.
   *
   * @memberof animationFrame
   * @param {function(number):void} fn Callback to run
   * @return {number} Handle used for canceling task
   */
  run(fn) {
    return window.requestAnimationFrame(fn);
  },
  /**
   * Cancels a previously enqueued `animationFrame` callback.
   *
   * @memberof animationFrame
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */
  cancel(handle) {
    window.cancelAnimationFrame(handle);
  }
};
var idlePeriod = {
  /**
   * Enqueues a function called at `requestIdleCallback` timing.
   *
   * @memberof idlePeriod
   * @param {function(!IdleDeadline):void} fn Callback to run
   * @return {number} Handle used for canceling task
   */
  run(fn) {
    return window.requestIdleCallback ? window.requestIdleCallback(fn) : window.setTimeout(fn, 16);
  },
  /**
   * Cancels a previously enqueued `idlePeriod` callback.
   *
   * @memberof idlePeriod
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */
  cancel(handle) {
    if (window.cancelIdleCallback) {
      window.cancelIdleCallback(handle);
    } else {
      window.clearTimeout(handle);
    }
  }
};
var microTask = {
  /**
   * Enqueues a function called at microtask timing.
   *
   * @memberof microTask
   * @param {!Function=} callback Callback to run
   * @return {number} Handle used for canceling task
   */
  run(callback) {
    if (!microtaskScheduled) {
      microtaskScheduled = true;
      queueMicrotask(() => microtaskFlush());
    }
    microtaskCallbacks.push(callback);
    const result = microtaskCurrHandle;
    microtaskCurrHandle += 1;
    return result;
  },
  /**
   * Cancels a previously enqueued `microTask` callback.
   *
   * @memberof microTask
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */
  cancel(handle) {
    const idx = handle - microtaskLastHandle;
    if (idx >= 0) {
      if (!microtaskCallbacks[idx]) {
        throw new Error(`invalid async handle: ${handle}`);
      }
      microtaskCallbacks[idx] = null;
    }
  }
};
var debouncerQueue = /* @__PURE__ */ new Set();
var Debouncer = class _Debouncer {
  /**
   * Creates a debouncer if no debouncer is passed as a parameter
   * or it cancels an active debouncer otherwise. The following
   * example shows how a debouncer can be called multiple times within a
   * microtask and "debounced" such that the provided callback function is
   * called once. Add this method to a custom element:
   *
   * ```js
   * import {microTask} from '@vaadin/component-base/src/async.js';
   * import {Debouncer} from '@vaadin/component-base/src/debounce.js';
   * // ...
   *
   * _debounceWork() {
   *   this._debounceJob = Debouncer.debounce(this._debounceJob,
   *       microTask, () => this._doWork());
   * }
   * ```
   *
   * If the `_debounceWork` method is called multiple times within the same
   * microtask, the `_doWork` function will be called only once at the next
   * microtask checkpoint.
   *
   * Note: In testing it is often convenient to avoid asynchrony. To accomplish
   * this with a debouncer, you can use `enqueueDebouncer` and
   * `flush`. For example, extend the above example by adding
   * `enqueueDebouncer(this._debounceJob)` at the end of the
   * `_debounceWork` method. Then in a test, call `flush` to ensure
   * the debouncer has completed.
   *
   * @param {Debouncer?} debouncer Debouncer object.
   * @param {!AsyncInterface} asyncModule Object with Async interface
   * @param {function()} callback Callback to run.
   * @return {!Debouncer} Returns a debouncer object.
   */
  static debounce(debouncer, asyncModule, callback) {
    if (debouncer instanceof _Debouncer) {
      debouncer._cancelAsync();
    } else {
      debouncer = new _Debouncer();
    }
    debouncer.setConfig(asyncModule, callback);
    return debouncer;
  }
  constructor() {
    this._asyncModule = null;
    this._callback = null;
    this._timer = null;
  }
  /**
   * Sets the scheduler; that is, a module with the Async interface,
   * a callback and optional arguments to be passed to the run function
   * from the async module.
   *
   * @param {!AsyncInterface} asyncModule Object with Async interface.
   * @param {function()} callback Callback to run.
   * @return {void}
   */
  setConfig(asyncModule, callback) {
    this._asyncModule = asyncModule;
    this._callback = callback;
    this._timer = this._asyncModule.run(() => {
      this._timer = null;
      debouncerQueue.delete(this);
      this._callback();
    });
  }
  /**
   * Cancels an active debouncer and returns a reference to itself.
   *
   * @return {void}
   */
  cancel() {
    if (this.isActive()) {
      this._cancelAsync();
      debouncerQueue.delete(this);
    }
  }
  /**
   * Cancels a debouncer's async callback.
   *
   * @return {void}
   */
  _cancelAsync() {
    if (this.isActive()) {
      this._asyncModule.cancel(
        /** @type {number} */
        this._timer
      );
      this._timer = null;
    }
  }
  /**
   * Flushes an active debouncer and returns a reference to itself.
   *
   * @return {void}
   */
  flush() {
    if (this.isActive()) {
      this.cancel();
      this._callback();
    }
  }
  /**
   * Returns true if the debouncer is active.
   *
   * @return {boolean} True if active.
   */
  isActive() {
    return this._timer != null;
  }
};
function enqueueDebouncer(debouncer) {
  debouncerQueue.add(debouncer);
}
function flushDebouncers() {
  const didFlush = Boolean(debouncerQueue.size);
  debouncerQueue.forEach((debouncer) => {
    try {
      debouncer.flush();
    } catch (e2) {
      setTimeout(() => {
        throw e2;
      });
    }
  });
  return didFlush;
}
var flush = () => {
  let debouncers;
  do {
    debouncers = flushDebouncers();
  } while (debouncers);
};
var directionSubscribers = [];
function alignDirs(element, documentDir, elementDir = element.getAttribute("dir")) {
  if (documentDir) {
    element.setAttribute("dir", documentDir);
  } else if (elementDir != null) {
    element.removeAttribute("dir");
  }
}
function getDocumentDir() {
  return document.documentElement.getAttribute("dir");
}
function directionUpdater() {
  const documentDir = getDocumentDir();
  directionSubscribers.forEach((element) => {
    alignDirs(element, documentDir);
  });
}
var directionObserver = new MutationObserver(directionUpdater);
directionObserver.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["dir"]
});
var DirMixin = (superClass) => class VaadinDirMixin extends superClass {
  static get properties() {
    return {
      /**
       * @protected
       */
      dir: {
        type: String,
        value: "",
        reflectToAttribute: true,
        converter: {
          fromAttribute: (attr) => {
            return !attr ? "" : attr;
          },
          toAttribute: (prop) => {
            return prop === "" ? null : prop;
          }
        }
      }
    };
  }
  /**
   * @return {boolean}
   * @protected
   */
  get __isRTL() {
    return this.getAttribute("dir") === "rtl";
  }
  /** @protected */
  connectedCallback() {
    super.connectedCallback();
    if (!this.hasAttribute("dir") || this.__restoreSubscription) {
      this.__subscribe();
      alignDirs(this, getDocumentDir(), null);
    }
  }
  /** @protected */
  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (name !== "dir") {
      return;
    }
    const documentDir = getDocumentDir();
    const newValueEqlDocDir = newValue === documentDir && directionSubscribers.indexOf(this) === -1;
    const newValueEmptied = !newValue && oldValue && directionSubscribers.indexOf(this) === -1;
    const newDiffValue = newValue !== documentDir && oldValue === documentDir;
    if (newValueEqlDocDir || newValueEmptied) {
      this.__subscribe();
      alignDirs(this, documentDir, newValue);
    } else if (newDiffValue) {
      this.__unsubscribe();
    }
  }
  /** @protected */
  disconnectedCallback() {
    super.disconnectedCallback();
    this.__restoreSubscription = directionSubscribers.includes(this);
    this.__unsubscribe();
  }
  /** @protected */
  _valueToNodeAttribute(node, value, attribute) {
    if (attribute === "dir" && value === "" && !node.hasAttribute("dir")) {
      return;
    }
    super._valueToNodeAttribute(node, value, attribute);
  }
  /** @protected */
  _attributeToProperty(attribute, value, type) {
    if (attribute === "dir" && !value) {
      this.dir = "";
    } else {
      super._attributeToProperty(attribute, value, type);
    }
  }
  /** @private */
  __subscribe() {
    if (!directionSubscribers.includes(this)) {
      directionSubscribers.push(this);
    }
  }
  /** @private */
  __unsubscribe() {
    if (directionSubscribers.includes(this)) {
      directionSubscribers.splice(directionSubscribers.indexOf(this), 1);
    }
  }
};
function getAncestorRootNodes(node) {
  const result = [];
  while (node) {
    if (node.nodeType === Node.DOCUMENT_NODE) {
      result.push(node);
      break;
    }
    if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      result.push(node);
      node = node.host;
      continue;
    }
    if (node.assignedSlot) {
      node = node.assignedSlot;
      continue;
    }
    node = node.parentNode;
  }
  return result;
}
function getClosestElement(selector, node) {
  if (!node) {
    return null;
  }
  return node.closest(selector) || getClosestElement(selector, node.getRootNode().host);
}
function deserializeAttributeValue(value) {
  if (!value) {
    return /* @__PURE__ */ new Set();
  }
  return new Set(value.split(" "));
}
function serializeAttributeValue(values) {
  return values ? [...values].join(" ") : "";
}
function addValueToAttribute(element, attr, value) {
  const values = deserializeAttributeValue(element.getAttribute(attr));
  values.add(value);
  element.setAttribute(attr, serializeAttributeValue(values));
}
function removeValueFromAttribute(element, attr, value) {
  const values = deserializeAttributeValue(element.getAttribute(attr));
  values.delete(value);
  if (values.size === 0) {
    element.removeAttribute(attr);
    return;
  }
  element.setAttribute(attr, serializeAttributeValue(values));
}
function isEmptyTextNode(node) {
  return node.nodeType === Node.TEXT_NODE && node.textContent.trim() === "";
}
var ControllerMixin = dedupingMixin((superClass) => {
  if (typeof superClass.prototype.addController === "function") {
    return superClass;
  }
  return class ControllerMixinClass extends superClass {
    constructor() {
      super();
      this.__controllers = /* @__PURE__ */ new Set();
    }
    /** @protected */
    connectedCallback() {
      super.connectedCallback();
      this.__controllers.forEach((c2) => {
        if (c2.hostConnected) {
          c2.hostConnected();
        }
      });
    }
    /** @protected */
    disconnectedCallback() {
      super.disconnectedCallback();
      this.__controllers.forEach((c2) => {
        if (c2.hostDisconnected) {
          c2.hostDisconnected();
        }
      });
    }
    /**
     * Registers a controller to participate in the element update cycle.
     *
     * @param {ReactiveController} controller
     * @protected
     */
    addController(controller) {
      this.__controllers.add(controller);
      if (this.$ !== void 0 && this.isConnected && controller.hostConnected) {
        controller.hostConnected();
      }
    }
    /**
     * Removes a controller from the element.
     *
     * @param {ReactiveController} controller
     * @protected
     */
    removeController(controller) {
      this.__controllers.delete(controller);
    }
  };
});
var DEV_MODE_CODE_REGEXP = /\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;
var FlowClients = window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients;
function isMinified() {
  function test() {
    return true;
  }
  return uncommentAndRun(test);
}
function isDevelopmentMode() {
  try {
    if (isForcedDevelopmentMode()) {
      return true;
    }
    if (!isLocalhost()) {
      return false;
    }
    if (FlowClients) {
      return !isFlowProductionMode();
    }
    return !isMinified();
  } catch (e2) {
    return false;
  }
}
function isForcedDevelopmentMode() {
  return localStorage.getItem("vaadin.developmentmode.force");
}
function isLocalhost() {
  return ["localhost", "127.0.0.1"].indexOf(window.location.hostname) >= 0;
}
function isFlowProductionMode() {
  if (FlowClients) {
    const productionModeApps = Object.keys(FlowClients).map((key) => FlowClients[key]).filter((client) => client.productionMode);
    if (productionModeApps.length > 0) {
      return true;
    }
  }
  return false;
}
function uncommentAndRun(callback, args) {
  if (typeof callback !== "function") {
    return;
  }
  const match = DEV_MODE_CODE_REGEXP.exec(callback.toString());
  if (match) {
    try {
      callback = new Function(match[1]);
    } catch (e2) {
      console.log("vaadin-development-mode-detector: uncommentAndRun() failed", e2);
    }
  }
  return callback(args);
}
window["Vaadin"] = window["Vaadin"] || {};
var runIfDevelopmentMode = function(callback, args) {
  if (window.Vaadin.developmentMode) {
    return uncommentAndRun(callback, args);
  }
};
if (window.Vaadin.developmentMode === void 0) {
  window.Vaadin.developmentMode = isDevelopmentMode();
}
function maybeGatherAndSendStats() {
}
var usageStatistics = function() {
  if (typeof runIfDevelopmentMode === "function") {
    return runIfDevelopmentMode(maybeGatherAndSendStats);
  }
};
if (!window.Vaadin) {
  window.Vaadin = {};
}
if (!window.Vaadin.registrations) {
  window.Vaadin.registrations = [];
}
if (!window.Vaadin.developmentModeCallback) {
  window.Vaadin.developmentModeCallback = {};
}
window.Vaadin.developmentModeCallback["vaadin-usage-statistics"] = function() {
  usageStatistics();
};
var statsJob;
var registered = /* @__PURE__ */ new Set();
var ElementMixin = (superClass) => class VaadinElementMixin extends DirMixin(superClass) {
  /** @protected */
  static finalize() {
    super.finalize();
    const {
      is
    } = this;
    if (is && !registered.has(is)) {
      window.Vaadin.registrations.push(this);
      registered.add(is);
      if (window.Vaadin.developmentModeCallback) {
        statsJob = Debouncer.debounce(statsJob, idlePeriod, () => {
          window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]();
        });
        enqueueDebouncer(statsJob);
      }
    }
  }
  constructor() {
    super();
    if (document.doctype === null) {
      console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.');
    }
  }
};
var DisabledMixin = dedupingMixin((superclass) => class DisabledMixinClass extends superclass {
  static get properties() {
    return {
      /**
       * If true, the user cannot interact with this element.
       */
      disabled: {
        type: Boolean,
        value: false,
        observer: "_disabledChanged",
        reflectToAttribute: true,
        sync: true
      }
    };
  }
  /**
   * @param {boolean} disabled
   * @protected
   */
  _disabledChanged(disabled) {
    this._setAriaDisabled(disabled);
  }
  /**
   * @param {boolean} disabled
   * @protected
   */
  _setAriaDisabled(disabled) {
    if (disabled) {
      this.setAttribute("aria-disabled", "true");
    } else {
      this.removeAttribute("aria-disabled");
    }
  }
  /**
   * Overrides the default element `click` method in order to prevent
   * firing the `click` event when the element is disabled.
   * @protected
   * @override
   */
  click() {
    if (!this.disabled) {
      super.click();
    }
  }
});
var TabindexMixin = (superclass) => class TabindexMixinClass extends DisabledMixin(superclass) {
  static get properties() {
    return {
      /**
       * Indicates whether the element can be focused and where it participates in sequential keyboard navigation.
       *
       * @protected
       */
      tabindex: {
        type: Number,
        reflectToAttribute: true,
        observer: "_tabindexChanged"
      },
      /**
       * Stores the last known tabindex since the element has been disabled.
       *
       * @protected
       */
      _lastTabIndex: {
        type: Number
      }
    };
  }
  /**
   * When the element gets disabled, the observer saves the last known tabindex
   * and makes the element not focusable by setting tabindex to -1.
   * As soon as the element gets enabled, the observer restores the last known tabindex
   * so that the element can be focusable again.
   *
   * @protected
   * @override
   */
  _disabledChanged(disabled, oldDisabled) {
    super._disabledChanged(disabled, oldDisabled);
    if (this.__shouldAllowFocusWhenDisabled()) {
      return;
    }
    if (disabled) {
      if (this.tabindex !== void 0) {
        this._lastTabIndex = this.tabindex;
      }
      this.tabindex = -1;
    } else if (oldDisabled) {
      this.tabindex = this._lastTabIndex;
    }
  }
  /**
   * When the user has changed tabindex while the element is disabled,
   * the observer reverts tabindex to -1 and rather saves the new tabindex value to apply it later.
   * The new value will be applied as soon as the element becomes enabled.
   *
   * @protected
   */
  _tabindexChanged(tabindex) {
    if (this.__shouldAllowFocusWhenDisabled()) {
      return;
    }
    if (this.disabled && tabindex !== -1) {
      this._lastTabIndex = tabindex;
      this.tabindex = -1;
    }
  }
  /**
   * Overrides the native `focus` method in order to prevent
   * focusing the element when it is disabled. Note, setting
   * `tabindex` to -1 does not prevent the element from being
   * programmatically focusable.
   *
   * @protected
   * @override
   */
  focus() {
    if (!this.disabled || this.__shouldAllowFocusWhenDisabled()) {
      super.focus();
    }
  }
  /**
   * Returns whether the component should be focusable when disabled.
   * Returns false by default.
   *
   * @private
   * @return {boolean}
   */
  __shouldAllowFocusWhenDisabled() {
    return false;
  }
};
var testUserAgent = (regexp) => regexp.test(navigator.userAgent);
var testPlatform = (regexp) => regexp.test(navigator.platform);
var testVendor = (regexp) => regexp.test(navigator.vendor);
var isAndroid = testUserAgent(/Android/u);
var isChrome = testUserAgent(/Chrome/u) && testVendor(/Google Inc/u);
var isFirefox = testUserAgent(/Firefox/u);
var isIPad = testPlatform(/^iPad/u) || testPlatform(/^Mac/u) && navigator.maxTouchPoints > 1;
var isIPhone = testPlatform(/^iPhone/u);
var isIOS = isIPhone || isIPad;
var isSafari = testUserAgent(/^((?!chrome|android).)*safari/iu);
var isTouch = (() => {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (_2) {
    return false;
  }
})();
var supportsAdoptingStyleSheets = window.ShadowRoot && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var SlotObserver = class {
  constructor(slot, callback) {
    this.slot = slot;
    this.callback = callback;
    this._storedNodes = [];
    this._connected = false;
    this._scheduled = false;
    this._boundSchedule = () => {
      this._schedule();
    };
    this.connect();
    this._schedule();
  }
  /**
   * Activates an observer. This method is automatically called when
   * a `SlotObserver` is created. It should only be called to  re-activate
   * an observer that has been deactivated via the `disconnect` method.
   */
  connect() {
    this.slot.addEventListener("slotchange", this._boundSchedule);
    this._connected = true;
  }
  /**
   * Deactivates the observer. After calling this method the observer callback
   * will not be called when changes to slotted nodes occur. The `connect` method
   * may be subsequently called to reactivate the observer.
   */
  disconnect() {
    this.slot.removeEventListener("slotchange", this._boundSchedule);
    this._connected = false;
  }
  /** @private */
  _schedule() {
    if (!this._scheduled) {
      this._scheduled = true;
      queueMicrotask(() => {
        this.flush();
      });
    }
  }
  /**
   * Run the observer callback synchronously.
   */
  flush() {
    if (!this._connected) {
      return;
    }
    this._scheduled = false;
    this._processNodes();
  }
  /** @private */
  _processNodes() {
    const currentNodes = this.slot.assignedNodes({
      flatten: true
    });
    let addedNodes = [];
    const removedNodes = [];
    const movedNodes = [];
    if (currentNodes.length) {
      addedNodes = currentNodes.filter((node) => !this._storedNodes.includes(node));
    }
    if (this._storedNodes.length) {
      this._storedNodes.forEach((node, index) => {
        const idx = currentNodes.indexOf(node);
        if (idx === -1) {
          removedNodes.push(node);
        } else if (idx !== index) {
          movedNodes.push(node);
        }
      });
    }
    if (addedNodes.length || removedNodes.length || movedNodes.length) {
      this.callback({
        addedNodes,
        currentNodes,
        movedNodes,
        removedNodes
      });
    }
    this._storedNodes = currentNodes;
  }
};
var uniqueId = 0;
function generateUniqueId() {
  return uniqueId++;
}
var SlotController = class extends EventTarget {
  /**
   * Ensure that every instance has unique ID.
   *
   * @param {HTMLElement} host
   * @param {string} slotName
   * @return {string}
   * @protected
   */
  static generateId(host, prefix = "default") {
    return `${prefix}-${host.localName}-${generateUniqueId()}`;
  }
  constructor(host, slotName, tagName, config = {}) {
    super();
    const {
      initializer,
      multiple,
      observe,
      useUniqueId,
      uniqueIdPrefix
    } = config;
    this.host = host;
    this.slotName = slotName;
    this.tagName = tagName;
    this.observe = typeof observe === "boolean" ? observe : true;
    this.multiple = typeof multiple === "boolean" ? multiple : false;
    this.slotInitializer = initializer;
    if (multiple) {
      this.nodes = [];
    }
    if (useUniqueId) {
      this.defaultId = this.constructor.generateId(host, uniqueIdPrefix || slotName);
    }
  }
  hostConnected() {
    if (!this.initialized) {
      if (this.multiple) {
        this.initMultiple();
      } else {
        this.initSingle();
      }
      if (this.observe) {
        this.observeSlot();
      }
      this.initialized = true;
    }
  }
  /** @protected */
  initSingle() {
    let node = this.getSlotChild();
    if (!node) {
      node = this.attachDefaultNode();
      this.initNode(node);
    } else {
      this.node = node;
      this.initAddedNode(node);
    }
  }
  /** @protected */
  initMultiple() {
    const children = this.getSlotChildren();
    if (children.length === 0) {
      const defaultNode = this.attachDefaultNode();
      if (defaultNode) {
        this.nodes = [defaultNode];
        this.initNode(defaultNode);
      }
    } else {
      this.nodes = children;
      children.forEach((node) => {
        this.initAddedNode(node);
      });
    }
  }
  /**
   * Create and attach default node using the provided tag name, if any.
   * @return {Node | undefined}
   * @protected
   */
  attachDefaultNode() {
    const {
      host,
      slotName,
      tagName
    } = this;
    let node = this.defaultNode;
    if (!node && tagName) {
      node = document.createElement(tagName);
      if (node instanceof Element) {
        if (slotName !== "") {
          node.setAttribute("slot", slotName);
        }
        this.defaultNode = node;
      }
    }
    if (node) {
      this.node = node;
      host.appendChild(node);
    }
    return node;
  }
  /**
   * Return the list of nodes matching the slot managed by the controller.
   * @return {Node}
   */
  getSlotChildren() {
    const {
      slotName
    } = this;
    return Array.from(this.host.childNodes).filter((node) => {
      return node.nodeType === Node.ELEMENT_NODE && node.slot === slotName || node.nodeType === Node.TEXT_NODE && node.textContent.trim() && slotName === "";
    });
  }
  /**
   * Return a reference to the node managed by the controller.
   * @return {Node}
   */
  getSlotChild() {
    return this.getSlotChildren()[0];
  }
  /**
   * Run `slotInitializer` for the node managed by the controller.
   *
   * @param {Node} node
   * @protected
   */
  initNode(node) {
    const {
      slotInitializer
    } = this;
    if (slotInitializer) {
      slotInitializer(node, this.host);
    }
  }
  /**
   * Override to initialize the newly added custom node.
   *
   * @param {Node} _node
   * @protected
   */
  initCustomNode(_node) {
  }
  /**
   * Override to teardown slotted node when it's removed.
   *
   * @param {Node} _node
   * @protected
   */
  teardownNode(_node) {
  }
  /**
   * Run both `initCustomNode` and `initNode` for a custom slotted node.
   *
   * @param {Node} node
   * @protected
   */
  initAddedNode(node) {
    if (node !== this.defaultNode) {
      this.initCustomNode(node);
      this.initNode(node);
    }
  }
  /**
   * Setup the observer to manage slot content changes.
   * @protected
   */
  observeSlot() {
    const {
      slotName
    } = this;
    const selector = slotName === "" ? "slot:not([name])" : `slot[name=${slotName}]`;
    const slot = this.host.shadowRoot.querySelector(selector);
    this.__slotObserver = new SlotObserver(slot, ({
      addedNodes,
      removedNodes
    }) => {
      const current = this.multiple ? this.nodes : [this.node];
      const newNodes = addedNodes.filter((node) => !isEmptyTextNode(node) && !current.includes(node));
      if (removedNodes.length) {
        this.nodes = current.filter((node) => !removedNodes.includes(node));
        removedNodes.forEach((node) => {
          this.teardownNode(node);
        });
      }
      if (newNodes && newNodes.length > 0) {
        if (this.multiple) {
          if (this.defaultNode) {
            this.defaultNode.remove();
          }
          this.nodes = [...current, ...newNodes].filter((node) => node !== this.defaultNode);
          newNodes.forEach((node) => {
            this.initAddedNode(node);
          });
        } else {
          if (this.node) {
            this.node.remove();
          }
          this.node = newNodes[0];
          this.initAddedNode(this.node);
        }
      }
    });
  }
};
var TooltipController = class extends SlotController {
  constructor(host) {
    super(host, "tooltip");
    this.setTarget(host);
  }
  /**
   * Override to initialize the newly added custom tooltip.
   *
   * @param {Node} tooltipNode
   * @protected
   * @override
   */
  initCustomNode(tooltipNode) {
    tooltipNode.target = this.target;
    if (this.ariaTarget !== void 0) {
      tooltipNode.ariaTarget = this.ariaTarget;
    }
    if (this.context !== void 0) {
      tooltipNode.context = this.context;
    }
    if (this.manual !== void 0) {
      tooltipNode.manual = this.manual;
    }
    if (this.opened !== void 0) {
      tooltipNode.opened = this.opened;
    }
    if (this.position !== void 0) {
      tooltipNode._position = this.position;
    }
    if (this.shouldShow !== void 0) {
      tooltipNode.shouldShow = this.shouldShow;
    }
    this.__notifyChange();
  }
  /**
   * Override to notify the host when the tooltip is removed.
   *
   * @param {Node} tooltipNode
   * @protected
   * @override
   */
  teardownNode() {
    this.__notifyChange();
  }
  /**
   * Set an HTML element for linking with the tooltip overlay
   * via `aria-describedby` attribute used by screen readers.
   * @param {HTMLElement} ariaTarget
   */
  setAriaTarget(ariaTarget) {
    this.ariaTarget = ariaTarget;
    const tooltipNode = this.node;
    if (tooltipNode) {
      tooltipNode.ariaTarget = ariaTarget;
    }
  }
  /**
   * Set a context object to be used by generator.
   * @param {object} context
   */
  setContext(context) {
    this.context = context;
    const tooltipNode = this.node;
    if (tooltipNode) {
      tooltipNode.context = context;
    }
  }
  /**
   * Toggle manual state on the slotted tooltip.
   * @param {boolean} manual
   */
  setManual(manual) {
    this.manual = manual;
    const tooltipNode = this.node;
    if (tooltipNode) {
      tooltipNode.manual = manual;
    }
  }
  /**
   * Toggle opened state on the slotted tooltip.
   * @param {boolean} opened
   */
  setOpened(opened) {
    this.opened = opened;
    const tooltipNode = this.node;
    if (tooltipNode) {
      tooltipNode.opened = opened;
    }
  }
  /**
   * Set default position for the slotted tooltip.
   * This can be overridden by setting the position
   * using corresponding property or attribute.
   * @param {string} position
   */
  setPosition(position) {
    this.position = position;
    const tooltipNode = this.node;
    if (tooltipNode) {
      tooltipNode._position = position;
    }
  }
  /**
   * Set function used to detect whether to show
   * the tooltip based on a condition.
   * @param {Function} shouldShow
   */
  setShouldShow(shouldShow) {
    this.shouldShow = shouldShow;
    const tooltipNode = this.node;
    if (tooltipNode) {
      tooltipNode.shouldShow = shouldShow;
    }
  }
  /**
   * Set an HTML element to attach the tooltip to.
   * @param {HTMLElement} target
   */
  setTarget(target) {
    this.target = target;
    const tooltipNode = this.node;
    if (tooltipNode) {
      tooltipNode.target = target;
    }
  }
  /** @private */
  __notifyChange() {
    this.dispatchEvent(new CustomEvent("tooltip-changed", {
      detail: {
        node: this.node
      }
    }));
  }
};
var keyboardActive = false;
window.addEventListener("keydown", () => {
  keyboardActive = true;
}, {
  capture: true
});
window.addEventListener("mousedown", () => {
  keyboardActive = false;
}, {
  capture: true
});
function getDeepActiveElement() {
  let host = document.activeElement || document.body;
  while (host.shadowRoot && host.shadowRoot.activeElement) {
    host = host.shadowRoot.activeElement;
  }
  return host;
}
function isKeyboardActive() {
  return keyboardActive;
}
function isElementHiddenDirectly(element) {
  const style2 = element.style;
  if (style2.visibility === "hidden" || style2.display === "none") {
    return true;
  }
  const computedStyle = window.getComputedStyle(element);
  if (computedStyle.visibility === "hidden" || computedStyle.display === "none") {
    return true;
  }
  return false;
}
function hasLowerTabOrder(a2, b2) {
  const ati = Math.max(a2.tabIndex, 0);
  const bti = Math.max(b2.tabIndex, 0);
  return ati === 0 || bti === 0 ? bti > ati : ati > bti;
}
function mergeSortByTabIndex(left, right) {
  const result = [];
  while (left.length > 0 && right.length > 0) {
    if (hasLowerTabOrder(left[0], right[0])) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }
  return result.concat(left, right);
}
function sortElementsByTabIndex(elements) {
  const len = elements.length;
  if (len < 2) {
    return elements;
  }
  const pivot = Math.ceil(len / 2);
  const left = sortElementsByTabIndex(elements.slice(0, pivot));
  const right = sortElementsByTabIndex(elements.slice(pivot));
  return mergeSortByTabIndex(left, right);
}
function isElementHidden(element) {
  if (element.checkVisibility) {
    return !element.checkVisibility({
      visibilityProperty: true
    });
  }
  if (element.offsetParent === null && element.clientWidth === 0 && element.clientHeight === 0) {
    return true;
  }
  return isElementHiddenDirectly(element);
}
function isElementFocusable(element) {
  if (element.matches('[tabindex="-1"]')) {
    return false;
  }
  if (element.matches("input, select, textarea, button, object")) {
    return element.matches(":not([disabled])");
  }
  return element.matches("a[href], area[href], iframe, [tabindex], [contentEditable]");
}
function isElementFocused(element) {
  return element.getRootNode().activeElement === element;
}
function normalizeTabIndex(element) {
  if (!isElementFocusable(element)) {
    return -1;
  }
  const tabIndex = element.getAttribute("tabindex") || 0;
  return Number(tabIndex);
}
function collectFocusableNodes(node, result) {
  if (node.nodeType !== Node.ELEMENT_NODE || isElementHiddenDirectly(node)) {
    return false;
  }
  const element = (
    /** @type {HTMLElement} */
    node
  );
  const tabIndex = normalizeTabIndex(element);
  let needsSort = tabIndex > 0;
  if (tabIndex >= 0) {
    result.push(element);
  }
  let children = [];
  if (element.localName === "slot") {
    children = element.assignedNodes({
      flatten: true
    });
  } else {
    children = (element.shadowRoot || element).children;
  }
  [...children].forEach((child) => {
    needsSort = collectFocusableNodes(child, result) || needsSort;
  });
  return needsSort;
}
function getFocusableElements(element) {
  const focusableElements = [];
  const needsSortByTabIndex = collectFocusableNodes(element, focusableElements);
  if (needsSortByTabIndex) {
    return sortElementsByTabIndex(focusableElements);
  }
  return focusableElements;
}
var region = document.createElement("div");
region.style.position = "fixed";
region.style.clip = "rect(0px, 0px, 0px, 0px)";
region.setAttribute("aria-live", "polite");
document.body.appendChild(region);
var alertDebouncer;
function announce(text, options = {}) {
  const mode = options.mode || "polite";
  const timeout = options.timeout === void 0 ? 150 : options.timeout;
  if (mode === "alert") {
    region.removeAttribute("aria-live");
    region.removeAttribute("role");
    alertDebouncer = Debouncer.debounce(alertDebouncer, animationFrame, () => {
      region.setAttribute("role", "alert");
    });
  } else {
    if (alertDebouncer) {
      alertDebouncer.cancel();
    }
    region.removeAttribute("role");
    region.setAttribute("aria-live", mode);
  }
  region.textContent = "";
  setTimeout(() => {
    region.textContent = text;
  }, timeout);
}
var KeyboardMixin = dedupingMixin((superclass) => class KeyboardMixinClass extends superclass {
  /** @protected */
  ready() {
    super.ready();
    this.addEventListener("keydown", (event) => {
      this._onKeyDown(event);
    });
    this.addEventListener("keyup", (event) => {
      this._onKeyUp(event);
    });
  }
  /**
   * A handler for the `keydown` event. By default, it calls
   * separate methods for handling "Enter" and "Escape" keys.
   * Override the method to implement your own behavior.
   *
   * @param {KeyboardEvent} event
   * @protected
   */
  _onKeyDown(event) {
    switch (event.key) {
      case "Enter":
        this._onEnter(event);
        break;
      case "Escape":
        this._onEscape(event);
        break;
    }
  }
  /**
   * A handler for the `keyup` event. By default, it does nothing.
   * Override the method to implement your own behavior.
   *
   * @param {KeyboardEvent} _event
   * @protected
   */
  _onKeyUp(_event) {
  }
  /**
   * A handler for the "Enter" key. By default, it does nothing.
   * Override the method to implement your own behavior.
   *
   * @param {KeyboardEvent} _event
   * @protected
   */
  _onEnter(_event) {
  }
  /**
   * A handler for the "Escape" key. By default, it does nothing.
   * Override the method to implement your own behavior.
   *
   * @param {KeyboardEvent} _event
   * @protected
   */
  _onEscape(_event) {
  }
});
var FocusMixin = dedupingMixin((superclass) => class FocusMixinClass extends superclass {
  /**
   * @protected
   * @return {boolean}
   */
  get _keyboardActive() {
    return isKeyboardActive();
  }
  /** @protected */
  ready() {
    this.addEventListener("focusin", (e2) => {
      if (this._shouldSetFocus(e2)) {
        this._setFocused(true);
      }
    });
    this.addEventListener("focusout", (e2) => {
      if (this._shouldRemoveFocus(e2)) {
        this._setFocused(false);
      }
    });
    super.ready();
  }
  /** @protected */
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.hasAttribute("focused")) {
      this._setFocused(false);
    }
  }
  /**
   * Override to change how focused and focus-ring attributes are set.
   *
   * @param {boolean} focused
   * @protected
   */
  _setFocused(focused) {
    this.toggleAttribute("focused", focused);
    this.toggleAttribute("focus-ring", focused && this._keyboardActive);
  }
  /**
   * Override to define if the field receives focus based on the event.
   *
   * @param {FocusEvent} _event
   * @return {boolean}
   * @protected
   */
  _shouldSetFocus(_event) {
    return true;
  }
  /**
   * Override to define if the field loses focus based on the event.
   *
   * @param {FocusEvent} _event
   * @return {boolean}
   * @protected
   */
  _shouldRemoveFocus(_event) {
    return true;
  }
});
var DelegateFocusMixin = dedupingMixin((superclass) => class DelegateFocusMixinClass extends FocusMixin(TabindexMixin(superclass)) {
  static get properties() {
    return {
      /**
       * Specify that this control should have input focus when the page loads.
       */
      autofocus: {
        type: Boolean
      },
      /**
       * A reference to the focusable element controlled by the mixin.
       * It can be an input, textarea, button or any element with tabindex > -1.
       *
       * Any component implementing this mixin is expected to provide it
       * by using `this._setFocusElement(input)` Polymer API.
       *
       * Toggling `tabindex` attribute on the host element propagates its value to `focusElement`.
       *
       * @protected
       * @type {!HTMLElement}
       */
      focusElement: {
        type: Object,
        readOnly: true,
        observer: "_focusElementChanged"
      },
      /**
       * Override the property from `TabIndexMixin`
       * to ensure the `tabindex` attribute of the focus element
       * will be restored to `0` after re-enabling the element.
       *
       * @protected
       * @override
       */
      _lastTabIndex: {
        value: 0
      }
    };
  }
  constructor() {
    super();
    this._boundOnBlur = this._onBlur.bind(this);
    this._boundOnFocus = this._onFocus.bind(this);
  }
  /** @protected */
  ready() {
    super.ready();
    if (this.autofocus && !this.disabled) {
      requestAnimationFrame(() => {
        this.focus();
        this.setAttribute("focus-ring", "");
      });
    }
  }
  /**
   * @protected
   * @override
   */
  focus() {
    if (this.focusElement && !this.disabled) {
      this.focusElement.focus();
    }
  }
  /**
   * @protected
   * @override
   */
  blur() {
    if (this.focusElement) {
      this.focusElement.blur();
    }
  }
  /**
   * @protected
   * @override
   */
  click() {
    if (this.focusElement && !this.disabled) {
      this.focusElement.click();
    }
  }
  /** @protected */
  _focusElementChanged(element, oldElement) {
    if (element) {
      element.disabled = this.disabled;
      this._addFocusListeners(element);
      this.__forwardTabIndex(this.tabindex);
    } else if (oldElement) {
      this._removeFocusListeners(oldElement);
    }
  }
  /**
   * @param {HTMLElement} element
   * @protected
   */
  _addFocusListeners(element) {
    element.addEventListener("blur", this._boundOnBlur);
    element.addEventListener("focus", this._boundOnFocus);
  }
  /**
   * @param {HTMLElement} element
   * @protected
   */
  _removeFocusListeners(element) {
    element.removeEventListener("blur", this._boundOnBlur);
    element.removeEventListener("focus", this._boundOnFocus);
  }
  /**
   * Focus event does not bubble, so we dispatch it manually
   * on the host element to support adding focus listeners
   * when the focusable element is placed in light DOM.
   * @param {FocusEvent} event
   * @protected
   */
  _onFocus(event) {
    event.stopPropagation();
    this.dispatchEvent(new Event("focus"));
  }
  /**
   * Blur event does not bubble, so we dispatch it manually
   * on the host element to support adding blur listeners
   * when the focusable element is placed in light DOM.
   * @param {FocusEvent} event
   * @protected
   */
  _onBlur(event) {
    event.stopPropagation();
    this.dispatchEvent(new Event("blur"));
  }
  /**
   * @param {FocusEvent} event
   * @return {boolean}
   * @protected
   * @override
   */
  _shouldSetFocus(event) {
    return event.target === this.focusElement;
  }
  /**
   * @param {FocusEvent} event
   * @return {boolean}
   * @protected
   * @override
   */
  _shouldRemoveFocus(event) {
    return event.target === this.focusElement;
  }
  /**
   * @param {boolean} disabled
   * @param {boolean} oldDisabled
   * @protected
   * @override
   */
  _disabledChanged(disabled, oldDisabled) {
    super._disabledChanged(disabled, oldDisabled);
    if (this.focusElement) {
      this.focusElement.disabled = disabled;
    }
    if (disabled) {
      this.blur();
    }
  }
  /**
   * Override an observer from `TabindexMixin`.
   * Do not call super to remove tabindex attribute
   * from the host after it has been forwarded.
   * @param {string} tabindex
   * @protected
   * @override
   */
  _tabindexChanged(tabindex) {
    this.__forwardTabIndex(tabindex);
  }
  /** @private */
  __forwardTabIndex(tabindex) {
    if (tabindex !== void 0 && this.focusElement) {
      this.focusElement.tabIndex = tabindex;
      if (tabindex !== -1) {
        this.tabindex = void 0;
      }
    }
    if (this.disabled && tabindex) {
      if (tabindex !== -1) {
        this._lastTabIndex = tabindex;
      }
      this.tabindex = void 0;
    }
  }
});
var attributeToTargets = /* @__PURE__ */ new Map();
function getAttrMap(attr) {
  if (!attributeToTargets.has(attr)) {
    attributeToTargets.set(attr, /* @__PURE__ */ new WeakMap());
  }
  return attributeToTargets.get(attr);
}
function cleanAriaIDReference(target, attr) {
  if (!target) {
    return;
  }
  target.removeAttribute(attr);
}
function storeAriaIDReference(target, attr) {
  if (!target || !attr) {
    return;
  }
  const attributeMap = getAttrMap(attr);
  if (attributeMap.has(target)) {
    return;
  }
  const values = deserializeAttributeValue(target.getAttribute(attr));
  attributeMap.set(target, new Set(values));
}
function restoreGeneratedAriaIDReference(target, attr) {
  if (!target || !attr) {
    return;
  }
  const attributeMap = getAttrMap(attr);
  const values = attributeMap.get(target);
  if (!values || values.size === 0) {
    target.removeAttribute(attr);
  } else {
    addValueToAttribute(target, attr, serializeAttributeValue(values));
  }
  attributeMap.delete(target);
}
function setAriaIDReference(target, attr, config = {
  newId: null,
  oldId: null,
  fromUser: false
}) {
  if (!target || !attr) {
    return;
  }
  const {
    newId,
    oldId,
    fromUser
  } = config;
  const attributeMap = getAttrMap(attr);
  const storedValues = attributeMap.get(target);
  if (!fromUser && !!storedValues) {
    oldId && storedValues.delete(oldId);
    newId && storedValues.add(newId);
    return;
  }
  if (fromUser) {
    if (!storedValues) {
      storeAriaIDReference(target, attr);
    } else if (!newId) {
      attributeMap.delete(target);
    }
    cleanAriaIDReference(target, attr);
  }
  removeValueFromAttribute(target, attr, oldId);
  const attributeValue = !newId ? serializeAttributeValue(storedValues) : newId;
  if (attributeValue) {
    addValueToAttribute(target, attr, attributeValue);
  }
}
function removeAriaIDReference(target, attr) {
  storeAriaIDReference(target, attr);
  cleanAriaIDReference(target, attr);
}
var FieldAriaController = class {
  constructor(host) {
    this.host = host;
    this.__required = false;
  }
  /**
   * Sets a target element to which ARIA attributes are added.
   *
   * @param {HTMLElement} target
   */
  setTarget(target) {
    this.__target = target;
    this.__setAriaRequiredAttribute(this.__required);
    this.__setLabelIdToAriaAttribute(this.__labelId, this.__labelId);
    if (this.__labelIdFromUser != null) {
      this.__setLabelIdToAriaAttribute(this.__labelIdFromUser, this.__labelIdFromUser, true);
    }
    this.__setErrorIdToAriaAttribute(this.__errorId);
    this.__setHelperIdToAriaAttribute(this.__helperId);
    this.setAriaLabel(this.__label);
  }
  /**
   * Toggles the `aria-required` attribute on the target element
   * if the target is the host component (e.g. a field group).
   * Otherwise, it does nothing.
   *
   * @param {boolean} required
   */
  setRequired(required) {
    this.__setAriaRequiredAttribute(required);
    this.__required = required;
  }
  /**
   * Defines the `aria-label` attribute of the target element.
   *
   * To remove the attribute, pass `null` as `label`.
   *
   * @param {string | null | undefined} label
   */
  setAriaLabel(label) {
    this.__setAriaLabelToAttribute(label);
    this.__label = label;
  }
  /**
   * Links the target element with a slotted label element
   * via the target's attribute `aria-labelledby`.
   *
   * To unlink the previous slotted label element, pass `null` as `labelId`.
   *
   * @param {string | null} labelId
   */
  setLabelId(labelId, fromUser = false) {
    const oldLabelId = fromUser ? this.__labelIdFromUser : this.__labelId;
    this.__setLabelIdToAriaAttribute(labelId, oldLabelId, fromUser);
    if (fromUser) {
      this.__labelIdFromUser = labelId;
    } else {
      this.__labelId = labelId;
    }
  }
  /**
   * Links the target element with a slotted error element via the target's attribute:
   * - `aria-labelledby` if the target is the host component (e.g a field group).
   * - `aria-describedby` otherwise.
   *
   * To unlink the previous slotted error element, pass `null` as `errorId`.
   *
   * @param {string | null} errorId
   */
  setErrorId(errorId) {
    this.__setErrorIdToAriaAttribute(errorId, this.__errorId);
    this.__errorId = errorId;
  }
  /**
   * Links the target element with a slotted helper element via the target's attribute:
   * - `aria-labelledby` if the target is the host component (e.g a field group).
   * - `aria-describedby` otherwise.
   *
   * To unlink the previous slotted helper element, pass `null` as `helperId`.
   *
   * @param {string | null} helperId
   */
  setHelperId(helperId) {
    this.__setHelperIdToAriaAttribute(helperId, this.__helperId);
    this.__helperId = helperId;
  }
  /**
   * @param {string | null | undefined} label
   * @private
   * */
  __setAriaLabelToAttribute(label) {
    if (!this.__target) {
      return;
    }
    if (label) {
      removeAriaIDReference(this.__target, "aria-labelledby");
      this.__target.setAttribute("aria-label", label);
    } else if (this.__label) {
      restoreGeneratedAriaIDReference(this.__target, "aria-labelledby");
      this.__target.removeAttribute("aria-label");
    }
  }
  /**
   * @param {string | null | undefined} labelId
   * @param {string | null | undefined} oldLabelId
   * @param {boolean | null | undefined} fromUser
   * @private
   */
  __setLabelIdToAriaAttribute(labelId, oldLabelId, fromUser) {
    setAriaIDReference(this.__target, "aria-labelledby", {
      newId: labelId,
      oldId: oldLabelId,
      fromUser
    });
  }
  /**
   * @param {string | null | undefined} errorId
   * @param {string | null | undefined} oldErrorId
   * @private
   */
  __setErrorIdToAriaAttribute(errorId, oldErrorId) {
    setAriaIDReference(this.__target, "aria-describedby", {
      newId: errorId,
      oldId: oldErrorId,
      fromUser: false
    });
  }
  /**
   * @param {string | null | undefined} helperId
   * @param {string | null | undefined} oldHelperId
   * @private
   */
  __setHelperIdToAriaAttribute(helperId, oldHelperId) {
    setAriaIDReference(this.__target, "aria-describedby", {
      newId: helperId,
      oldId: oldHelperId,
      fromUser: false
    });
  }
  /**
   * @param {boolean} required
   * @private
   */
  __setAriaRequiredAttribute(required) {
    if (!this.__target) {
      return;
    }
    if (["input", "textarea"].includes(this.__target.localName)) {
      return;
    }
    if (required) {
      this.__target.setAttribute("aria-required", "true");
    } else {
      this.__target.removeAttribute("aria-required");
    }
  }
};
var stylesMap = /* @__PURE__ */ new WeakMap();
function getRootStyles(root2) {
  if (!stylesMap.has(root2)) {
    stylesMap.set(root2, /* @__PURE__ */ new Set());
  }
  return stylesMap.get(root2);
}
function insertStyles(styles, root2) {
  const style2 = document.createElement("style");
  style2.textContent = styles;
  if (root2 === document) {
    document.head.appendChild(style2);
  } else {
    root2.insertBefore(style2, root2.firstChild);
  }
}
var SlotStylesMixin = dedupingMixin((superclass) => class SlotStylesMixinClass extends superclass {
  /**
   * List of styles to insert into root.
   * @protected
   */
  get slotStyles() {
    return [];
  }
  /** @protected */
  connectedCallback() {
    super.connectedCallback();
    this.__applySlotStyles();
  }
  /** @private */
  __applySlotStyles() {
    const root2 = this.getRootNode();
    const rootStyles = getRootStyles(root2);
    this.slotStyles.forEach((styles) => {
      if (!rootStyles.has(styles)) {
        insertStyles(styles, root2);
        rootStyles.add(styles);
      }
    });
  }
});
var DelegateStateMixin = dedupingMixin((superclass) => class DelegateStateMixinClass extends superclass {
  static get properties() {
    return {
      /**
       * A target element to which attributes and properties are delegated.
       * @protected
       */
      stateTarget: {
        type: Object,
        observer: "_stateTargetChanged"
      }
    };
  }
  /**
   * An array of the host attributes to delegate to the target element.
   */
  static get delegateAttrs() {
    return [];
  }
  /**
   * An array of the host properties to delegate to the target element.
   */
  static get delegateProps() {
    return [];
  }
  /** @protected */
  ready() {
    super.ready();
    this._createDelegateAttrsObserver();
    this._createDelegatePropsObserver();
  }
  /** @protected */
  _stateTargetChanged(target) {
    if (target) {
      this._ensureAttrsDelegated();
      this._ensurePropsDelegated();
    }
  }
  /** @protected */
  _createDelegateAttrsObserver() {
    this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`);
  }
  /** @protected */
  _createDelegatePropsObserver() {
    this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`);
  }
  /** @protected */
  _ensureAttrsDelegated() {
    this.constructor.delegateAttrs.forEach((name) => {
      this._delegateAttribute(name, this[name]);
    });
  }
  /** @protected */
  _ensurePropsDelegated() {
    this.constructor.delegateProps.forEach((name) => {
      this._delegateProperty(name, this[name]);
    });
  }
  /** @protected */
  _delegateAttrsChanged(...values) {
    this.constructor.delegateAttrs.forEach((name, index) => {
      this._delegateAttribute(name, values[index]);
    });
  }
  /** @protected */
  _delegatePropsChanged(...values) {
    this.constructor.delegateProps.forEach((name, index) => {
      this._delegateProperty(name, values[index]);
    });
  }
  /** @protected */
  _delegateAttribute(name, value) {
    if (!this.stateTarget) {
      return;
    }
    if (name === "invalid") {
      this._delegateAttribute("aria-invalid", value ? "true" : false);
    }
    if (typeof value === "boolean") {
      this.stateTarget.toggleAttribute(name, value);
    } else if (value) {
      this.stateTarget.setAttribute(name, value);
    } else {
      this.stateTarget.removeAttribute(name);
    }
  }
  /** @protected */
  _delegateProperty(name, value) {
    if (!this.stateTarget) {
      return;
    }
    this.stateTarget[name] = value;
  }
});
var InputMixin = dedupingMixin((superclass) => class InputMixinClass extends superclass {
  static get properties() {
    return {
      /**
       * A reference to the input element controlled by the mixin.
       * Any component implementing this mixin is expected to provide it
       * by using `this._setInputElement(input)` Polymer API.
       *
       * A typical case is using `InputController` that does this automatically.
       * However, the input element does not have to always be native <input>:
       * as an example, <vaadin-combo-box-light> accepts other components.
       *
       * @protected
       * @type {!HTMLElement}
       */
      inputElement: {
        type: Object,
        readOnly: true,
        observer: "_inputElementChanged",
        sync: true
      },
      /**
       * String used to define input type.
       * @protected
       */
      type: {
        type: String,
        readOnly: true
      },
      /**
       * The value of the field.
       */
      value: {
        type: String,
        value: "",
        observer: "_valueChanged",
        notify: true,
        sync: true
      }
    };
  }
  constructor() {
    super();
    this._boundOnInput = this._onInput.bind(this);
    this._boundOnChange = this._onChange.bind(this);
  }
  /**
   * Indicates whether the value is different from the default one.
   * Override if the `value` property has a type other than `string`.
   *
   * @protected
   */
  get _hasValue() {
    return this.value != null && this.value !== "";
  }
  /**
   * A property for accessing the input element's value.
   *
   * Override this getter if the property is different from the default `value` one.
   *
   * @protected
   * @return {string}
   */
  get _inputElementValueProperty() {
    return "value";
  }
  /**
   * The input element's value.
   *
   * @protected
   * @return {string}
   */
  get _inputElementValue() {
    return this.inputElement ? this.inputElement[this._inputElementValueProperty] : void 0;
  }
  /**
   * The input element's value.
   *
   * @protected
   */
  set _inputElementValue(value) {
    if (this.inputElement) {
      this.inputElement[this._inputElementValueProperty] = value;
    }
  }
  /**
   * Clear the value of the field.
   */
  clear() {
    this.value = "";
    this._inputElementValue = "";
  }
  /**
   * Add event listeners to the input element instance.
   * Override this method to add custom listeners.
   * @param {!HTMLElement} input
   * @protected
   */
  _addInputListeners(input) {
    input.addEventListener("input", this._boundOnInput);
    input.addEventListener("change", this._boundOnChange);
  }
  /**
   * Remove event listeners from the input element instance.
   * @param {!HTMLElement} input
   * @protected
   */
  _removeInputListeners(input) {
    input.removeEventListener("input", this._boundOnInput);
    input.removeEventListener("change", this._boundOnChange);
  }
  /**
   * A method to forward the value property set on the field
   * programmatically back to the input element value.
   * Override this method to perform additional checks,
   * for example to skip this in certain conditions.
   * @param {string} value
   * @protected
   */
  _forwardInputValue(value) {
    if (!this.inputElement) {
      return;
    }
    this._inputElementValue = value != null ? value : "";
  }
  /**
   * @param {HTMLElement | undefined} input
   * @param {HTMLElement | undefined} oldInput
   * @protected
   */
  _inputElementChanged(input, oldInput) {
    if (input) {
      this._addInputListeners(input);
    } else if (oldInput) {
      this._removeInputListeners(oldInput);
    }
  }
  /**
   * An input event listener used to update the field value.
   *
   * @param {Event} event
   * @protected
   */
  _onInput(event) {
    const target = event.composedPath()[0];
    this.__userInput = event.isTrusted;
    this.value = target.value;
    this.__userInput = false;
  }
  /**
   * A change event listener.
   * Override this method with an actual implementation.
   * @param {Event} _event
   * @protected
   */
  _onChange(_event) {
  }
  /**
   * Toggle the has-value attribute based on the value property.
   *
   * @param {boolean} hasValue
   * @protected
   */
  _toggleHasValue(hasValue) {
    this.toggleAttribute("has-value", hasValue);
  }
  /**
   * Observer called when a value property changes.
   * @param {string | undefined} newVal
   * @param {string | undefined} oldVal
   * @protected
   */
  _valueChanged(newVal, oldVal) {
    this._toggleHasValue(this._hasValue);
    if (newVal === "" && oldVal === void 0) {
      return;
    }
    if (this.__userInput) {
      return;
    }
    this._forwardInputValue(newVal);
  }
});
var SlotChildObserveController = class extends SlotController {
  constructor(host, slot, tagName, config = {}) {
    super(host, slot, tagName, __spreadProps(__spreadValues({}, config), {
      useUniqueId: true
    }));
  }
  /**
   * Override to initialize the newly added custom node.
   *
   * @param {Node} node
   * @protected
   * @override
   */
  initCustomNode(node) {
    this.__updateNodeId(node);
    this.__notifyChange(node);
  }
  /**
   * Override to notify the controller host about removal of
   * the custom node, and to apply the default one if needed.
   *
   * @param {Node} _node
   * @protected
   * @override
   */
  teardownNode(_node) {
    const node = this.getSlotChild();
    if (node && node !== this.defaultNode) {
      this.__notifyChange(node);
    } else {
      this.restoreDefaultNode();
      this.updateDefaultNode(this.node);
    }
  }
  /**
   * Override method inherited from `SlotMixin`
   * to set ID attribute on the default node.
   *
   * @return {Node}
   * @protected
   * @override
   */
  attachDefaultNode() {
    const node = super.attachDefaultNode();
    if (node) {
      this.__updateNodeId(node);
    }
    return node;
  }
  /**
   * Override to restore default node when a custom one is removed.
   *
   * @protected
   */
  restoreDefaultNode() {
  }
  /**
   * Override to update default node text on property change.
   *
   * @param {Node} node
   * @protected
   */
  updateDefaultNode(node) {
    this.__notifyChange(node);
  }
  /**
   * Setup the mutation observer on the node to update ID and notify host.
   * Node doesn't get observed automatically until this method is called.
   *
   * @param {Node} node
   * @protected
   */
  observeNode(node) {
    if (this.__nodeObserver) {
      this.__nodeObserver.disconnect();
    }
    this.__nodeObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const target = mutation.target;
        const isCurrentNodeMutation = target === this.node;
        if (mutation.type === "attributes") {
          if (isCurrentNodeMutation) {
            this.__updateNodeId(target);
          }
        } else if (isCurrentNodeMutation || target.parentElement === this.node) {
          this.__notifyChange(this.node);
        }
      });
    });
    this.__nodeObserver.observe(node, {
      attributes: true,
      attributeFilter: ["id"],
      childList: true,
      subtree: true,
      characterData: true
    });
  }
  /**
   * Returns true if a node is an HTML element with children,
   * or is a defined custom element, or has non-empty text.
   *
   * @param {Node} node
   * @return {boolean}
   * @private
   */
  __hasContent(node) {
    if (!node) {
      return false;
    }
    return node.nodeType === Node.ELEMENT_NODE && (customElements.get(node.localName) || node.children.length > 0) || node.textContent && node.textContent.trim() !== "";
  }
  /**
   * Fire an event to notify the controller host about node changes.
   *
   * @param {Node} node
   * @private
   */
  __notifyChange(node) {
    this.dispatchEvent(new CustomEvent("slot-content-changed", {
      detail: {
        hasContent: this.__hasContent(node),
        node
      }
    }));
  }
  /**
   * Set default ID on the node in case it is an HTML element.
   *
   * @param {Node} node
   * @private
   */
  __updateNodeId(node) {
    const isFirstNode = !this.nodes || node === this.nodes[0];
    if (node.nodeType === Node.ELEMENT_NODE && (!this.multiple || isFirstNode) && !node.id) {
      node.id = this.defaultId;
    }
  }
};
var ErrorController = class extends SlotChildObserveController {
  constructor(host) {
    super(host, "error-message", "div");
  }
  /**
   * Set the error message element text content.
   *
   * @param {string} errorMessage
   */
  setErrorMessage(errorMessage) {
    this.errorMessage = errorMessage;
    this.updateDefaultNode(this.node);
  }
  /**
   * Set invalid state for detecting whether to show error message.
   *
   * @param {boolean} invalid
   */
  setInvalid(invalid) {
    this.invalid = invalid;
    this.updateDefaultNode(this.node);
  }
  /**
   * Override method inherited from `SlotController` to not run
   * initializer on the custom slotted node unnecessarily.
   *
   * @param {Node} node
   * @protected
   * @override
   */
  initAddedNode(node) {
    if (node !== this.defaultNode) {
      this.initCustomNode(node);
    }
  }
  /**
   * Override to initialize the newly added default error message.
   *
   * @param {Node} errorNode
   * @protected
   * @override
   */
  initNode(errorNode) {
    this.updateDefaultNode(errorNode);
  }
  /**
   * Override to initialize the newly added custom error message.
   *
   * @param {Node} errorNode
   * @protected
   * @override
   */
  initCustomNode(errorNode) {
    if (errorNode.textContent && !this.errorMessage) {
      this.errorMessage = errorNode.textContent.trim();
    }
    super.initCustomNode(errorNode);
  }
  /**
   * Override method inherited from `SlotChildObserveController`
   * to restore the default error message element.
   *
   * @protected
   * @override
   */
  restoreDefaultNode() {
    this.attachDefaultNode();
  }
  /**
   * Override method inherited from `SlotChildObserveController`
   * to update the error message text and hidden state.
   *
   * Note: unlike with other controllers, this method is
   * called for both default and custom error message.
   *
   * @param {Node | undefined} node
   * @protected
   * @override
   */
  updateDefaultNode(errorNode) {
    const {
      errorMessage,
      invalid
    } = this;
    const hasError = Boolean(invalid && errorMessage && errorMessage.trim() !== "");
    if (errorNode) {
      errorNode.textContent = hasError ? errorMessage : "";
      errorNode.hidden = !hasError;
      if (hasError) {
        announce(errorMessage, {
          mode: "assertive"
        });
      }
    }
    super.updateDefaultNode(errorNode);
  }
};
var HelperController = class extends SlotChildObserveController {
  constructor(host) {
    super(host, "helper", null);
  }
  /**
   * Set helper text based on corresponding host property.
   *
   * @param {string} helperText
   */
  setHelperText(helperText) {
    this.helperText = helperText;
    const helperNode = this.getSlotChild();
    if (!helperNode) {
      this.restoreDefaultNode();
    }
    if (this.node === this.defaultNode) {
      this.updateDefaultNode(this.node);
    }
  }
  /**
   * Override method inherited from `SlotChildObserveController`
   * to create the default helper element lazily as needed.
   *
   * @param {Node | undefined} node
   * @protected
   * @override
   */
  restoreDefaultNode() {
    const {
      helperText
    } = this;
    if (helperText && helperText.trim() !== "") {
      this.tagName = "div";
      const helperNode = this.attachDefaultNode();
      this.observeNode(helperNode);
    }
  }
  /**
   * Override method inherited from `SlotChildObserveController`
   * to update the default helper element text content.
   *
   * @param {Node | undefined} node
   * @protected
   * @override
   */
  updateDefaultNode(node) {
    if (node) {
      node.textContent = this.helperText;
    }
    super.updateDefaultNode(node);
  }
  /**
   * Override to observe the newly added custom node.
   *
   * @param {Node} node
   * @protected
   * @override
   */
  initCustomNode(node) {
    super.initCustomNode(node);
    this.observeNode(node);
  }
};
var LabelController = class extends SlotChildObserveController {
  constructor(host) {
    super(host, "label", "label");
  }
  /**
   * Set label based on corresponding host property.
   *
   * @param {string} label
   */
  setLabel(label) {
    this.label = label;
    const labelNode = this.getSlotChild();
    if (!labelNode) {
      this.restoreDefaultNode();
    }
    if (this.node === this.defaultNode) {
      this.updateDefaultNode(this.node);
    }
  }
  /**
   * Override method inherited from `SlotChildObserveController`
   * to restore and observe the default label element.
   *
   * @protected
   * @override
   */
  restoreDefaultNode() {
    const {
      label
    } = this;
    if (label && label.trim() !== "") {
      const labelNode = this.attachDefaultNode();
      this.observeNode(labelNode);
    }
  }
  /**
   * Override method inherited from `SlotChildObserveController`
   * to update the default label element text content.
   *
   * @param {Node | undefined} node
   * @protected
   * @override
   */
  updateDefaultNode(node) {
    if (node) {
      node.textContent = this.label;
    }
    super.updateDefaultNode(node);
  }
  /**
   * Override to observe the newly added custom node.
   *
   * @param {Node} node
   * @protected
   * @override
   */
  initCustomNode(node) {
    super.initCustomNode(node);
    this.observeNode(node);
  }
};
var LabelMixin = dedupingMixin((superclass) => class LabelMixinClass extends ControllerMixin(superclass) {
  static get properties() {
    return {
      /**
       * The label text for the input node.
       * When no light dom defined via [slot=label], this value will be used.
       */
      label: {
        type: String,
        observer: "_labelChanged"
      }
    };
  }
  constructor() {
    super();
    this._labelController = new LabelController(this);
    this._labelController.addEventListener("slot-content-changed", (event) => {
      this.toggleAttribute("has-label", event.detail.hasContent);
    });
  }
  /** @protected */
  get _labelId() {
    const node = this._labelNode;
    return node && node.id;
  }
  /** @protected */
  get _labelNode() {
    return this._labelController.node;
  }
  /** @protected */
  ready() {
    super.ready();
    this.addController(this._labelController);
  }
  /** @protected */
  _labelChanged(label) {
    this._labelController.setLabel(label);
  }
});
var ValidateMixin = dedupingMixin((superclass) => class ValidateMixinClass extends superclass {
  static get properties() {
    return {
      /**
       * Set to true when the field is invalid.
       */
      invalid: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
        value: false,
        sync: true
      },
      /**
       * Set to true to enable manual validation mode. This mode disables automatic
       * constraint validation, allowing you to control the validation process yourself.
       * You can still trigger constraint validation manually with the `validate()` method
       * or use `checkValidity()` to assess the component's validity without affecting
       * the invalid state. In manual validation mode, you can also manipulate
       * the `invalid` property directly through your application logic without conflicts
       * with the component's internal validation.
       *
       * @attr {boolean} manual-validation
       */
      manualValidation: {
        type: Boolean,
        value: false
      },
      /**
       * Specifies that the user must fill in a value.
       */
      required: {
        type: Boolean,
        reflectToAttribute: true,
        sync: true
      }
    };
  }
  /**
   * Validates the field and sets the `invalid` property based on the result.
   *
   * The method fires a `validated` event with the result of the validation.
   *
   * @return {boolean} True if the value is valid.
   */
  validate() {
    const isValid = this.checkValidity();
    this._setInvalid(!isValid);
    this.dispatchEvent(new CustomEvent("validated", {
      detail: {
        valid: isValid
      }
    }));
    return isValid;
  }
  /**
   * Returns true if the field value satisfies all constraints (if any).
   *
   * @return {boolean}
   */
  checkValidity() {
    return !this.required || !!this.value;
  }
  /**
   * @param {boolean} invalid
   * @protected
   */
  _setInvalid(invalid) {
    if (this._shouldSetInvalid(invalid)) {
      this.invalid = invalid;
    }
  }
  /**
   * Override this method to define whether the given `invalid` state should be set.
   *
   * @param {boolean} _invalid
   * @return {boolean}
   * @protected
   */
  _shouldSetInvalid(_invalid) {
    return true;
  }
  /** @protected */
  _requestValidation() {
    if (!this.manualValidation) {
      this.validate();
    }
  }
  /**
   * Fired whenever the field is validated.
   *
   * @event validated
   * @param {Object} detail
   * @param {boolean} detail.valid the result of the validation.
   */
});
var FieldMixin = (superclass) => class FieldMixinClass extends ValidateMixin(LabelMixin(ControllerMixin(superclass))) {
  static get properties() {
    return {
      /**
       * A target element to which ARIA attributes are set.
       * @protected
       */
      ariaTarget: {
        type: Object,
        observer: "_ariaTargetChanged"
      },
      /**
       * Error to show when the field is invalid.
       *
       * @attr {string} error-message
       */
      errorMessage: {
        type: String,
        observer: "_errorMessageChanged"
      },
      /**
       * String used for the helper text.
       * @attr {string} helper-text
       */
      helperText: {
        type: String,
        observer: "_helperTextChanged"
      },
      /**
       * String used to label the component to screen reader users.
       * @attr {string} accessible-name
       */
      accessibleName: {
        type: String,
        observer: "_accessibleNameChanged"
      },
      /**
       * Id of the element used as label of the component to screen reader users.
       * @attr {string} accessible-name-ref
       */
      accessibleNameRef: {
        type: String,
        observer: "_accessibleNameRefChanged"
      }
    };
  }
  static get observers() {
    return ["_invalidChanged(invalid)", "_requiredChanged(required)"];
  }
  constructor() {
    super();
    this._fieldAriaController = new FieldAriaController(this);
    this._helperController = new HelperController(this);
    this._errorController = new ErrorController(this);
    this._errorController.addEventListener("slot-content-changed", (event) => {
      this.toggleAttribute("has-error-message", event.detail.hasContent);
    });
    this._labelController.addEventListener("slot-content-changed", (event) => {
      const {
        hasContent,
        node
      } = event.detail;
      this.__labelChanged(hasContent, node);
    });
    this._helperController.addEventListener("slot-content-changed", (event) => {
      const {
        hasContent,
        node
      } = event.detail;
      this.toggleAttribute("has-helper", hasContent);
      this.__helperChanged(hasContent, node);
    });
  }
  /**
   * @protected
   * @return {HTMLElement}
   */
  get _errorNode() {
    return this._errorController.node;
  }
  /**
   * @protected
   * @return {HTMLElement}
   */
  get _helperNode() {
    return this._helperController.node;
  }
  /** @protected */
  ready() {
    super.ready();
    this.addController(this._fieldAriaController);
    this.addController(this._helperController);
    this.addController(this._errorController);
  }
  /** @private */
  __helperChanged(hasHelper, helperNode) {
    if (hasHelper) {
      this._fieldAriaController.setHelperId(helperNode.id);
    } else {
      this._fieldAriaController.setHelperId(null);
    }
  }
  /** @protected */
  _accessibleNameChanged(accessibleName) {
    this._fieldAriaController.setAriaLabel(accessibleName);
  }
  /** @protected */
  _accessibleNameRefChanged(accessibleNameRef) {
    this._fieldAriaController.setLabelId(accessibleNameRef, true);
  }
  /** @private */
  __labelChanged(hasLabel, labelNode) {
    if (hasLabel) {
      this._fieldAriaController.setLabelId(labelNode.id);
    } else {
      this._fieldAriaController.setLabelId(null);
    }
  }
  /**
   * @param {string | null | undefined} errorMessage
   * @protected
   */
  _errorMessageChanged(errorMessage) {
    this._errorController.setErrorMessage(errorMessage);
  }
  /**
   * @param {string} helperText
   * @protected
   */
  _helperTextChanged(helperText) {
    this._helperController.setHelperText(helperText);
  }
  /**
   * @param {HTMLElement | null | undefined} target
   * @protected
   */
  _ariaTargetChanged(target) {
    if (target) {
      this._fieldAriaController.setTarget(target);
    }
  }
  /**
   * @param {boolean} required
   * @protected
   */
  _requiredChanged(required) {
    this._fieldAriaController.setRequired(required);
  }
  /**
   * @param {boolean} invalid
   * @protected
   */
  _invalidChanged(invalid) {
    this._errorController.setInvalid(invalid);
    setTimeout(() => {
      if (invalid) {
        const node = this._errorNode;
        this._fieldAriaController.setErrorId(node && node.id);
      } else {
        this._fieldAriaController.setErrorId(null);
      }
    });
  }
};
var InputController = class extends SlotController {
  constructor(host, callback, options = {}) {
    const {
      uniqueIdPrefix
    } = options;
    super(host, "input", "input", {
      initializer: (node, host2) => {
        if (host2.value) {
          node.value = host2.value;
        }
        if (host2.type) {
          node.setAttribute("type", host2.type);
        }
        node.id = this.defaultId;
        if (typeof callback === "function") {
          callback(node);
        }
      },
      useUniqueId: true,
      uniqueIdPrefix
    });
  }
};
var LabelledInputController = class {
  constructor(input, labelController) {
    this.input = input;
    this.__preventDuplicateLabelClick = this.__preventDuplicateLabelClick.bind(this);
    labelController.addEventListener("slot-content-changed", (event) => {
      this.__initLabel(event.detail.node);
    });
    this.__initLabel(labelController.node);
  }
  /**
   * @param {HTMLElement} label
   * @private
   */
  __initLabel(label) {
    if (label) {
      label.addEventListener("click", this.__preventDuplicateLabelClick);
      if (this.input) {
        label.setAttribute("for", this.input.id);
      }
    }
  }
  /**
   * The native platform fires an event for both the click on the label, and also
   * the subsequent click on the native input element caused by label click.
   * This results in two click events arriving at the host, but we only want one.
   * This method prevents the duplicate click and ensures the correct isTrusted event
   * with the correct event.target arrives at the host.
   * @private
   */
  __preventDuplicateLabelClick() {
    const inputClickHandler = (e2) => {
      e2.stopImmediatePropagation();
      this.input.removeEventListener("click", inputClickHandler);
    };
    this.input.addEventListener("click", inputClickHandler);
  }
};
registerStyles("vaadin-input-container", i$3`
    :host {
      background: var(--_background);
      padding: 0 calc(0.375em + var(--_input-container-radius) / 4 - 1px);
      font-weight: var(--vaadin-input-field-value-font-weight, 500);
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
      border-radius:
        /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius#syntax */
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius));
      /* Fallback */
      --_input-container-radius: var(--vaadin-input-field-border-radius, var(--lumo-border-radius-m));
      --_input-height: var(--lumo-text-field-size, var(--lumo-size-m));
      /* Default values */
      --_background: var(--vaadin-input-field-background, var(--lumo-contrast-10pct));
      --_hover-highlight: var(--vaadin-input-field-hover-highlight, var(--lumo-contrast-50pct));
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
      --_icon-color: var(--vaadin-input-field-icon-color, var(--lumo-contrast-60pct));
      --_icon-size: var(--vaadin-input-field-icon-size, var(--lumo-icon-size-m));
      --_invalid-background: var(--vaadin-input-field-invalid-background, var(--lumo-error-color-10pct));
      --_invalid-hover-highlight: var(--vaadin-input-field-invalid-hover-highlight, var(--lumo-error-color-50pct));
      --_disabled-background: var(--vaadin-input-field-disabled-background, var(--lumo-contrast-5pct));
      --_disabled-value-color: var(--vaadin-input-field-disabled-value-color, var(--lumo-disabled-text-color));
    }

    :host([dir='rtl']) {
      border-radius:
        /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius));
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
      background: var(--_hover-highlight);
      opacity: 0;
      transition:
        transform 0.15s,
        opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--vaadin-input-field-height, var(--_input-height));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: var(--vaadin-input-field-readonly-border, 1px dashed var(--lumo-contrast-30pct));
    }

    /* Disabled */
    :host([disabled]) {
      background: var(--_disabled-background);
    }

    :host([disabled]) ::slotted(:not([slot$='fix'])) {
      -webkit-text-fill-color: var(--_disabled-value-color);
      color: var(--_disabled-value-color);
    }

    /* Invalid */
    :host([invalid]) {
      background: var(--_invalid-background);
    }

    :host([invalid]:not([readonly]))::after {
      background: var(--_invalid-hover-highlight);
    }

    /* Slotted icons */
    ::slotted(vaadin-icon) {
      color: var(--_icon-color);
      width: var(--_icon-size);
      height: var(--_icon-size);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `, {
  moduleId: "lumo-input-container"
});
var fieldButton = i$3`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;
registerStyles("", fieldButton, {
  moduleId: "lumo-field-button"
});
var helper = i$3`
  :host {
    --_helper-spacing: var(--vaadin-input-field-helper-spacing, 0.4em);
  }

  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: var(--_helper-spacing);
  }

  [part='helper-text'] {
    display: block;
    color: var(--vaadin-input-field-helper-color, var(--lumo-secondary-text-color));
    font-size: var(--vaadin-input-field-helper-font-size, var(--lumo-font-size-xs));
    line-height: var(--lumo-line-height-xs);
    font-weight: var(--vaadin-input-field-helper-font-weight, 400);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: var(--_helper-spacing);
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: var(--_helper-spacing);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`;
var requiredField = i$3`
  [part='label'] {
    align-self: flex-start;
    color: var(--vaadin-input-field-label-color, var(--lumo-secondary-text-color));
    font-weight: var(--vaadin-input-field-label-font-weight, 500);
    font-size: var(--vaadin-input-field-label-font-size, var(--lumo-font-size-s));
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    /* As a workaround for diacritics being cut off, add a top padding and a
    negative margin to compensate */
    padding-top: 0.25em;
    margin-top: -0.25em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--vaadin-input-field-focused-label-color, var(--lumo-primary-text-color));
  }

  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--vaadin-input-field-hovered-label-color, var(--lumo-body-text-color));
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--vaadin-input-field-label-color, var(--lumo-secondary-text-color));
    }
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([has-label]) ::slotted([slot='tooltip']) {
    --vaadin-tooltip-offset-bottom: calc((var(--lumo-space-m) - var(--lumo-space-xs)) * -1);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '\\2022');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--vaadin-input-field-error-font-size, var(--lumo-font-size-xs));
    line-height: var(--lumo-line-height-xs);
    font-weight: var(--vaadin-input-field-error-font-weight, 400);
    color: var(--vaadin-input-field-error-color, var(--lumo-error-text-color));
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;
registerStyles("", requiredField, {
  moduleId: "lumo-required-field"
});
var inputField = i$3`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--vaadin-input-field-value-color, var(--lumo-body-text-color));
    font-size: var(--vaadin-input-field-value-font-size, var(--lumo-font-size-m));
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    --_input-height: var(--vaadin-input-field-height, var(--lumo-text-field-size));
    --_disabled-value-color: var(--vaadin-input-field-disabled-value-color, var(--lumo-disabled-text-color));
  }

  :host::before {
    height: var(--_input-height);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--vaadin-input-field-placeholder-color, var(--lumo-secondary-text-color));
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused]):not([disabled])) [part='input-field']::after {
    opacity: var(--vaadin-input-field-hover-highlight-opacity, 0.1);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused]):not([disabled])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused]):not([disabled])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Opt-in focus-ring when using pointer devices */
  /* This applies a focus-ring as box-shadow when the element is focused, but
     the ring is only visible / has a width when the respective CSS property is
     "enabled" using a value of 1 */
  :host([focused]) [part='input-field'] {
    /* Borders are implemented using box-shadows as well. To avoid overriding 
       the border on focus, even if the pointer focus-ring is disabled, we need to:
       - Duplicate the border box shadow for this rule
       - Remove the border (by using width of 0) when the focus-ring is visible,
         which is the same behavior as for the keyboard focus-ring below
       - Apply the border when the focus ring is not visible
    */
    --_pointer-focus-visible: clamp(0, var(--lumo-input-field-pointer-focus-visible, 0), 1);
    --_conditional-border-width: calc(calc(1 - var(--_pointer-focus-visible)) * var(--_input-border-width));
    --_conditional-focus-ring-width: calc(var(--_pointer-focus-visible) * var(--_focus-ring-width));
    box-shadow:
      inset 0 0 0 var(--_conditional-border-width) var(--_input-border-color),
      0 0 0 var(--_conditional-focus-ring-width) var(--_focus-ring-color);
  }

  /* Focus-ring when using keyboard navigation */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Read-only style */
  :host([readonly]) {
    --vaadin-input-field-border-color: transparent;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
    --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted([slot$='fix']) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([disabled]) [part='input-field'] ::slotted(:not([slot$='fix'])) {
    color: var(--_disabled-value-color);
    -webkit-text-fill-color: var(--_disabled-value-color);
  }

  /* Invalid style */
  :host([invalid]) {
    --vaadin-input-field-border-color: var(--lumo-error-color);
    --_focus-ring-color: var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`;
var inputFieldShared$1 = [requiredField, fieldButton, helper, inputField];
registerStyles("", inputFieldShared$1, {
  moduleId: "lumo-input-field-shared-styles"
});
var InputContainerMixin = (superClass) => class InputContainerMixinClass extends superClass {
  static get properties() {
    return {
      /**
       * If true, the user cannot interact with this element.
       */
      disabled: {
        type: Boolean,
        reflectToAttribute: true
      },
      /**
       * Set to true to make this element read-only.
       */
      readonly: {
        type: Boolean,
        reflectToAttribute: true
      },
      /**
       * Set to true when the element is invalid.
       */
      invalid: {
        type: Boolean,
        reflectToAttribute: true
      }
    };
  }
  /** @protected */
  ready() {
    super.ready();
    this.addEventListener("pointerdown", (event) => {
      if (event.target === this) {
        event.preventDefault();
      }
    });
    this.addEventListener("click", (event) => {
      if (event.target === this) {
        this.shadowRoot.querySelector("slot:not([name])").assignedNodes({
          flatten: true
        }).forEach((node) => node.focus && node.focus());
      }
    });
  }
};
var inputContainerStyles = i$3`
  :host {
    display: flex;
    align-items: center;
    flex: 0 1 auto;
    border-radius:
            /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius */
      var(--vaadin-input-field-top-start-radius, var(--__border-radius))
      var(--vaadin-input-field-top-end-radius, var(--__border-radius))
      var(--vaadin-input-field-bottom-end-radius, var(--__border-radius))
      var(--vaadin-input-field-bottom-start-radius, var(--__border-radius));
    --_border-radius: var(--vaadin-input-field-border-radius, 0);
    --_input-border-width: var(--vaadin-input-field-border-width, 0px);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    /* stylelint-disable-next-line length-zero-no-unit */
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  :host([dir='rtl']) {
    border-radius:
            /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
      var(--vaadin-input-field-top-end-radius, var(--_border-radius))
      var(--vaadin-input-field-top-start-radius, var(--_border-radius))
      var(--vaadin-input-field-bottom-start-radius, var(--_border-radius))
      var(--vaadin-input-field-bottom-end-radius, var(--_border-radius));
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Reset the native input styles */
  ::slotted(input) {
    -webkit-appearance: none;
    -moz-appearance: none;
    flex: auto;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    height: 100%;
    outline: none;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    min-width: 0;
    font: inherit;
    line-height: normal;
    color: inherit;
    background-color: transparent;
    /* Disable default invalid style in Firefox */
    box-shadow: none;
  }

  ::slotted(*) {
    flex: none;
  }

  ::slotted(:is(input, textarea))::placeholder {
    /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
    /* because ::slotted(...)::placeholder does not work in Safari. */
    font: inherit;
    color: inherit;
    /* Override default opacity in Firefox */
    opacity: 1;
  }
`;
registerStyles("vaadin-input-container", inputContainerStyles, {
  moduleId: "vaadin-input-container-styles"
});
var InputContainer = class extends InputContainerMixin(ThemableMixin(DirMixin(PolymerElement))) {
  static get is() {
    return "vaadin-input-container";
  }
  static get template() {
    return html`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `;
  }
};
defineCustomElement(InputContainer);
var clearButton = i$3`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '\\2715';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;
var fieldShared = i$3`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }

  @media (forced-colors: active) {
    :host(:not([readonly])) [part='input-field'] {
      outline: 1px solid;
      outline-offset: -1px;
    }
    :host([focused]) [part='input-field'] {
      outline-width: 2px;
    }
    :host([disabled]) [part='input-field'] {
      outline-color: GrayText;
    }
  }
`;
var inputFieldContainer = i$3`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`;
var inputFieldShared = [fieldShared, inputFieldContainer, clearButton];
var ClearButtonMixin = (superclass) => class ClearButtonMixinClass extends InputMixin(KeyboardMixin(superclass)) {
  static get properties() {
    return {
      /**
       * Set to true to display the clear icon which clears the input.
       *
       * It is up to the component to choose where to place the clear icon:
       * in the Shadow DOM or in the light DOM. In any way, a reference to
       * the clear icon element should be provided via the `clearElement` getter.
       *
       * @attr {boolean} clear-button-visible
       */
      clearButtonVisible: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      }
    };
  }
  /**
   * Any element extending this mixin is required to implement this getter.
   * It returns the reference to the clear button element.
   *
   * @protected
   * @return {Element | null | undefined}
   */
  get clearElement() {
    console.warn(`Please implement the 'clearElement' property in <${this.localName}>`);
    return null;
  }
  /** @protected */
  ready() {
    super.ready();
    if (this.clearElement) {
      this.clearElement.addEventListener("mousedown", (event) => this._onClearButtonMouseDown(event));
      this.clearElement.addEventListener("click", (event) => this._onClearButtonClick(event));
    }
  }
  /**
   * @param {Event} event
   * @protected
   */
  _onClearButtonClick(event) {
    event.preventDefault();
    this._onClearAction();
  }
  /**
   * @param {MouseEvent} event
   * @protected
   */
  _onClearButtonMouseDown(event) {
    event.preventDefault();
    if (!isTouch) {
      this.inputElement.focus();
    }
  }
  /**
   * Override an event listener inherited from `KeydownMixin` to clear on Esc.
   * Components that extend this mixin can prevent this behavior by overriding
   * this method without calling `super._onEscape` to provide custom logic.
   *
   * @param {KeyboardEvent} event
   * @protected
   * @override
   */
  _onEscape(event) {
    super._onEscape(event);
    if (this.clearButtonVisible && !!this.value && !this.readonly) {
      event.stopPropagation();
      this._onClearAction();
    }
  }
  /**
   * Clears the value and dispatches `input` and `change` events
   * on the input element. This method should be called
   * when the clear action originates from the user.
   *
   * @protected
   */
  _onClearAction() {
    this._inputElementValue = "";
    this.inputElement.dispatchEvent(new Event("input", {
      bubbles: true,
      composed: true
    }));
    this.inputElement.dispatchEvent(new Event("change", {
      bubbles: true
    }));
  }
};
var InputConstraintsMixin = dedupingMixin((superclass) => class InputConstraintsMixinClass extends DelegateStateMixin(ValidateMixin(InputMixin(superclass))) {
  /**
   * An array of attributes which participate in the input validation.
   * Changing these attributes will cause the input to re-validate.
   *
   * IMPORTANT: The attributes should be properly delegated to the input element
   * from the host using `delegateAttrs` getter (see `DelegateStateMixin`).
   * The `required` attribute is already delegated.
   */
  static get constraints() {
    return ["required"];
  }
  static get delegateAttrs() {
    return [...super.delegateAttrs, "required"];
  }
  /** @protected */
  ready() {
    super.ready();
    this._createConstraintsObserver();
  }
  /**
   * Returns true if the current input value satisfies all constraints (if any).
   * @return {boolean}
   */
  checkValidity() {
    if (this.inputElement && this._hasValidConstraints(this.constructor.constraints.map((c2) => this[c2]))) {
      return this.inputElement.checkValidity();
    }
    return !this.invalid;
  }
  /**
   * Returns true if some of the provided set of constraints are valid.
   * @param {Array} constraints
   * @return {boolean}
   * @protected
   */
  _hasValidConstraints(constraints) {
    return constraints.some((c2) => this.__isValidConstraint(c2));
  }
  /**
   * Override this method to customize setting up constraints observer.
   * @protected
   */
  _createConstraintsObserver() {
    this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`);
  }
  /**
   * Override this method to implement custom validation constraints.
   * @param {HTMLElement | undefined} stateTarget
   * @param {unknown[]} constraints
   * @protected
   */
  _constraintsChanged(stateTarget, ...constraints) {
    if (!stateTarget) {
      return;
    }
    const hasConstraints = this._hasValidConstraints(constraints);
    const isLastConstraintRemoved = this.__previousHasConstraints && !hasConstraints;
    if ((this._hasValue || this.invalid) && hasConstraints) {
      this._requestValidation();
    } else if (isLastConstraintRemoved && !this.manualValidation) {
      this._setInvalid(false);
    }
    this.__previousHasConstraints = hasConstraints;
  }
  /**
   * Override an event listener inherited from `InputMixin`
   * to capture native `change` event and make sure that
   * a new one is dispatched after validation runs.
   * @param {Event} event
   * @protected
   * @override
   */
  _onChange(event) {
    event.stopPropagation();
    this._requestValidation();
    this.dispatchEvent(new CustomEvent("change", {
      detail: {
        sourceEvent: event
      },
      bubbles: event.bubbles,
      cancelable: event.cancelable
    }));
  }
  /** @private */
  __isValidConstraint(constraint) {
    return Boolean(constraint) || constraint === 0;
  }
});
var InputControlMixin = (superclass) => class InputControlMixinClass extends SlotStylesMixin(DelegateFocusMixin(InputConstraintsMixin(FieldMixin(ClearButtonMixin(KeyboardMixin(superclass)))))) {
  static get properties() {
    return {
      /**
       * A pattern matched against individual characters the user inputs.
       *
       * When set, the field will prevent:
       * - `keydown` events if the entered key doesn't match `/^allowedCharPattern$/`
       * - `paste` events if the pasted text doesn't match `/^allowedCharPattern*$/`
       * - `drop` events if the dropped text doesn't match `/^allowedCharPattern*$/`
       *
       * For example, to allow entering only numbers and minus signs, use:
       * `allowedCharPattern = "[\\d-]"`
       * @attr {string} allowed-char-pattern
       */
      allowedCharPattern: {
        type: String,
        observer: "_allowedCharPatternChanged"
      },
      /**
       * If true, the input text gets fully selected when the field is focused using click or touch / tap.
       */
      autoselect: {
        type: Boolean,
        value: false
      },
      /**
       * The name of this field.
       */
      name: {
        type: String,
        reflectToAttribute: true
      },
      /**
       * A hint to the user of what can be entered in the field.
       */
      placeholder: {
        type: String,
        reflectToAttribute: true
      },
      /**
       * When present, it specifies that the field is read-only.
       */
      readonly: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * The text usually displayed in a tooltip popup when the mouse is over the field.
       */
      title: {
        type: String,
        reflectToAttribute: true
      }
    };
  }
  static get delegateAttrs() {
    return [...super.delegateAttrs, "name", "type", "placeholder", "readonly", "invalid", "title"];
  }
  constructor() {
    super();
    this._boundOnPaste = this._onPaste.bind(this);
    this._boundOnDrop = this._onDrop.bind(this);
    this._boundOnBeforeInput = this._onBeforeInput.bind(this);
  }
  /** @protected */
  get slotStyles() {
    return [`
          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
            font: inherit;
            color: inherit;
          }
        `];
  }
  /**
   * Override an event listener from `DelegateFocusMixin`.
   * @param {FocusEvent} event
   * @protected
   * @override
   */
  _onFocus(event) {
    super._onFocus(event);
    if (this.autoselect && this.inputElement) {
      this.inputElement.select();
    }
  }
  /**
   * Override a method from `InputMixin`.
   * @param {!HTMLElement} input
   * @protected
   * @override
   */
  _addInputListeners(input) {
    super._addInputListeners(input);
    input.addEventListener("paste", this._boundOnPaste);
    input.addEventListener("drop", this._boundOnDrop);
    input.addEventListener("beforeinput", this._boundOnBeforeInput);
  }
  /**
   * Override a method from `InputMixin`.
   * @param {!HTMLElement} input
   * @protected
   * @override
   */
  _removeInputListeners(input) {
    super._removeInputListeners(input);
    input.removeEventListener("paste", this._boundOnPaste);
    input.removeEventListener("drop", this._boundOnDrop);
    input.removeEventListener("beforeinput", this._boundOnBeforeInput);
  }
  /**
   * Override an event listener from `KeyboardMixin`.
   * @param {!KeyboardEvent} event
   * @protected
   * @override
   */
  _onKeyDown(event) {
    super._onKeyDown(event);
    if (this.allowedCharPattern && !this.__shouldAcceptKey(event) && event.target === this.inputElement) {
      event.preventDefault();
      this._markInputPrevented();
    }
  }
  /** @protected */
  _markInputPrevented() {
    this.setAttribute("input-prevented", "");
    this._preventInputDebouncer = Debouncer.debounce(this._preventInputDebouncer, timeOut.after(200), () => {
      this.removeAttribute("input-prevented");
    });
  }
  /** @private */
  __shouldAcceptKey(event) {
    return event.metaKey || event.ctrlKey || !event.key || // Allow typing anything if event.key is not supported
    event.key.length !== 1 || // Allow "Backspace", "ArrowLeft" etc.
    this.__allowedCharRegExp.test(event.key);
  }
  /** @private */
  _onPaste(e2) {
    if (this.allowedCharPattern) {
      const pastedText = e2.clipboardData.getData("text");
      if (!this.__allowedTextRegExp.test(pastedText)) {
        e2.preventDefault();
        this._markInputPrevented();
      }
    }
  }
  /** @private */
  _onDrop(e2) {
    if (this.allowedCharPattern) {
      const draggedText = e2.dataTransfer.getData("text");
      if (!this.__allowedTextRegExp.test(draggedText)) {
        e2.preventDefault();
        this._markInputPrevented();
      }
    }
  }
  /** @private */
  _onBeforeInput(e2) {
    if (this.allowedCharPattern && e2.data && !this.__allowedTextRegExp.test(e2.data)) {
      e2.preventDefault();
      this._markInputPrevented();
    }
  }
  /** @private */
  _allowedCharPatternChanged(charPattern) {
    if (charPattern) {
      try {
        this.__allowedCharRegExp = new RegExp(`^${charPattern}$`, "u");
        this.__allowedTextRegExp = new RegExp(`^${charPattern}*$`, "u");
      } catch (e2) {
        console.error(e2);
      }
    }
  }
  /**
   * Fired when the user commits a value change.
   *
   * @event change
   */
  /**
   * Fired when the value is changed by the user: on every typing keystroke,
   * and the value is cleared using the clear button.
   *
   * @event input
   */
};

export {
  defineCustomElement,
  r$2,
  i$3,
  b,
  D,
  registerStyles,
  ThemableMixin,
  useShadow,
  strictTemplatePolicy,
  legacyOptimizations,
  legacyWarnings,
  suppressTemplateNotifications,
  dedupingMixin,
  wrap,
  translate,
  matches,
  timeOut$1,
  microTask$1,
  PropertyEffects,
  html,
  PolymerElement,
  timeOut,
  animationFrame,
  idlePeriod,
  microTask,
  Debouncer,
  enqueueDebouncer,
  flush,
  DirMixin,
  getAncestorRootNodes,
  getClosestElement,
  addValueToAttribute,
  removeValueFromAttribute,
  ControllerMixin,
  ElementMixin,
  DisabledMixin,
  TabindexMixin,
  isAndroid,
  isChrome,
  isFirefox,
  isIOS,
  isSafari,
  isTouch,
  supportsAdoptingStyleSheets,
  SlotObserver,
  generateUniqueId,
  SlotController,
  TooltipController,
  getDeepActiveElement,
  isKeyboardActive,
  isElementHidden,
  isElementFocusable,
  isElementFocused,
  getFocusableElements,
  announce,
  KeyboardMixin,
  FocusMixin,
  DelegateFocusMixin,
  SlotStylesMixin,
  DelegateStateMixin,
  InputMixin,
  ValidateMixin,
  FieldMixin,
  InputController,
  LabelledInputController,
  fieldButton,
  inputFieldShared$1,
  inputFieldShared,
  InputConstraintsMixin,
  InputControlMixin
};
/*! Bundled license information:

@bh-digital-solutions/ui-toolkit/dist/esm/input-control-mixin-f18ab077.js:
  (**
   * @license
   * Copyright (c) 2021 - 2025 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
  (**
   * @license
   * Copyright (c) 2017 - 2025 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)
  (**
   * @fileoverview
   * @suppress {checkPrototypalTypes}
   * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
   * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
   * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
   * Google as part of the polymer project is also subject to an additional IP
   * rights grant found at http://polymer.github.io/PATENTS.txt
   *)
  (**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   *)
  (*! vaadin-dev-mode:start
  (function () {
  'use strict';
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
  } : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
  };
  var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
   return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
  }();
  var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
  };
  var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);
     this.now = new Date().getTime();
    this.logger = logger;
  }
   createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }
           jQuery.toString = function () {
            return _jQuery.toString();
          };
           return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];
       types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });
       var previousStats = JSON.stringify(storedStats);
       this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);
       var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });
       var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
  }();
  var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);
     this.key = key;
  }
   createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });
       return empty;
    }
  }]);
  return StatisticsStorage;
  }();
  var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);
     this.url = url;
    this.logger = logger;
  }
   createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;
       if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);
       var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
  }();
  var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);
     this.id = id;
  }
   createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
  }();
  var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);
     this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;
     this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }
   createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;
       if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));
       if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }
       if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }
       this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);
       // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.2';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
  }();
  try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
  } catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
  }
  }());
   vaadin-dev-mode:end **)
  (**
   * @license
   * Copyright (c) 2023 - 2025 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
  (**
   * @license
   * Copyright (c) 2022 - 2025 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
//# sourceMappingURL=chunk-FPZAVM6P.js.map
