import {
  components,
  defaultPrefix,
  generateComponentLiteralWithPrefix
} from "./chunk-XU5S37NP.js";
import {
  Host,
  createEvent,
  getAssetPath,
  getElement,
  h,
  registerInstance
} from "./chunk-5YQC5RSE.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-error.entry.js
var bhErrorCss = ".bh-error{display:flex;flex-direction:column;justify-content:center;align-items:center;align-self:center;max-width:370px;margin:12px}.bh-error--image{margin-bottom:var(--spacing-margin-medium);max-width:220px}.bh-error--errorNumber{color:var(--color-text-common-primary);margin-bottom:var(--spacing-margin-xxsmall)}.bh-error--title{text-align:center;color:var(--color-text-common-secondary);margin-bottom:var(--spacing-margin-xsmall)}.bh-error--description{text-align:center;color:var(--color-text-common-secondary);margin-bottom:var(--spacing-margin-medium)}.bh-error--ctas{width:201px}";
var BhErrorStyle0 = bhErrorCss;
var BhError = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventCtaClick = createEvent(this, "bhEventCtaClick", 7);
    this.ctaClick = createEvent(this, "ctaClick", 3);
    this.source = void 0;
    this.errorNumber = void 0;
    this.title = void 0;
    this.description = void 0;
    this.ctas = void 0;
    this._ctas = void 0;
  }
  watchCtas() {
    console.log();
    this.parseData();
  }
  parseData() {
    this._ctas = typeof this.ctas === "string" ? JSON.parse(this.ctas) : this.ctas;
  }
  onCtaClick(key) {
    this.ctaClick.emit(key);
    this.bhEventCtaClick.emit(key);
  }
  componentWillLoad() {
    this.parseData();
  }
  render() {
    var _a, _b;
    const prefix = this.host.tagName.toLowerCase().replace(components.error.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
    const hasSpecialCharacters = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    const imgSrc = !hasSpecialCharacters.test(this.source) ? getAssetPath(`./assets/${this.source}.svg`) : getAssetPath(this.source);
    return h(Host, {
      key: "422e2b1f87f77f3fba8d46b6501d1f9603d76656",
      class: "bh-error"
    }, h("img", {
      key: "25739df0ae462806d6de049220c7f15476dcc226",
      class: "bh-error--image",
      src: imgSrc
    }), h("span", {
      key: "29329e159096ded8d3f0be1a2b809d3a8209a76d",
      class: "typography--headline-small bh-error--errorNumber"
    }, "Error ", this.errorNumber, "!"), h("span", {
      key: "7dfe87a62b195f94eff9a3821de9f69cd6f4f502",
      class: "typography--subtitle-large bh-error--title"
    }, this.title), h("span", {
      key: "1a52ee494d22238e86cdb235630ee392c0ddad95",
      class: "typography--body-large bh-error--description"
    }, this.description), h("div", {
      key: "e836867a63c60950b98216a133bdb738516c13f3",
      class: "bh-error--ctas"
    }, this._ctas && ((_b = (_a = this._ctas) === null || _a === void 0 ? void 0 : _a.slice(0, 1)) === null || _b === void 0 ? void 0 : _b.map((cta) => h(Components.button, {
      "data-key": cta.key,
      isSmall: cta.size === "small" ? true : false,
      type: cta.type,
      label: cta.label,
      isFluid: true,
      isDisabled: cta.isDisabled,
      isLoading: cta.isLoading,
      leftIcon: cta.leftIcon,
      rightIcon: cta.rightIcon,
      onClick: () => {
        if (cta.isDisabled) return;
        this.onCtaClick(cta.key);
      }
    })))));
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "ctas": ["watchCtas"]
    };
  }
};
BhError.style = BhErrorStyle0;
export {
  BhError as bh_error
};
//# sourceMappingURL=bh-error.entry-7CPS5224.js.map
