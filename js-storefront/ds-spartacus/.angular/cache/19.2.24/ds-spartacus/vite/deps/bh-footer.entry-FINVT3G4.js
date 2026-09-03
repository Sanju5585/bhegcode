import {
  components,
  generateComponentLiteralWithPrefix
} from "./chunk-XU5S37NP.js";
import {
  Host,
  getAssetPath,
  getElement,
  h,
  registerInstance
} from "./chunk-5YQC5RSE.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-footer.entry.js
var bhFooterCss = '.bh-footer {\n	/* reset */\n	outline: none;\n	-webkit-appearance: none;\n	-moz-appearance: none;\n	-o-appearance: none;\n	appearance: none;\n\n	width: 100%;\n\n	color: var(--color-text-common-secondary);\n}\n.bh-footer__logo {\n	max-width: 170px;\n	max-height: 48px;\n	object-fit: cover;\n	background-size: cover;\n	padding-left: .5vw;\n  }\n.bh-footer__content {\n	width: 100%;\n	margin-bottom: var(--spacing-margin-small);\n	display: flex;\n	flex-direction: row;\n}\n\n.bh-footer__copyright {\n	margin-left: var(--spacing-margin-large);\n	align-self: flex-start;\n	flex-grow: 4;\n	margin-top: .45%;\n}\n.bh-footer__terms {\n	margin-left: var(--spacing-margin-medium);\n	margin-right: var(--spacing-margin-large);\n	align-self: flex-end;\n\n}\n.bh-footer__privacy {\n	margin-left: var(--spacing-margin-medium);\n	margin-right: var(--spacing-margin-large);\n	align-self: flex-end;\n}\n\n.bh-footer__cookies {\n	margin-left: var(--spacing-margin-medium);\n	margin-right: var(--spacing-margin-large);\n	align-self: flex-end;\n}\n\n\n@media screen and (max-width: 1023px) {\n	.bh-footer__content {\n		width: 100%;\n		/* padding-bottom: var(--spacing-margin-small); */\n	}\n\n	.bh-footer__copyright {\n		margin-left: var(--spacing-margin-medium);\n		align-self: flex-start;\n		flex-grow: 4;\n	}\n\n	.bh-footer__privacy {\n		margin-left: var(--spacing-margin-medium);\n		margin-right: var(--spacing-margin-medium);\n		align-self: flex-end;\n	}\n}\n\n@media screen and (max-width: 599px) {\n	.bh-footer__content {\n		width: 100%;\n		display: block;\n		text-align: center;\n		/* padding-bottom: var(--spacing-margin-small); */\n	}\n\n	.bh-footer__copyright {\n		margin-left: var(--spacing-margin-none);\n		margin-bottom: var(--spacing-margin-xsmall);\n	}\n\n	.bh-footer__terms {\n		margin-left: var(--spacing-margin-medium);\n		margin-right: var(--spacing-margin-large);\n		align-self: flex-end;\n	}\n\n	.bh-footer__privacy {\n		margin-left: var(--spacing-margin-none);\n		margin-right: var(--spacing-margin-none);\n		align-self: flex-end;\n	}\n\n	.bh-footer__cookies {\n		margin-left: var(--spacing-margin-none);\n		margin-right: var(--spacing-margin-none);\n	}\n}\n.only-on-dark {\n	display: none;\n}\n\n.only-on-light {\n	display: none;\n}\n\n[data-theme="dark"] {\n	.only-on-dark {\n		display: block;\n	}\n\n	.only-on-light {\n		display: none;\n	}\n}\n\n[data-theme="light"] {\n	.only-on-dark {\n		display: none;\n	}\n\n	.only-on-light {\n		display: block;\n	}\n}';
var BhFooterStyle0 = bhFooterCss;
var BhFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.imgSrc = "";
    this.darkImageSrc = "";
    this.marginTop = "xxlarge";
    this.termsText = "Terms";
    this.theme = "light";
    this.showLogo = false;
    this.logo = "";
    this.termsHREF = "https://www.bakerhughes.com/terms";
    this.privacyText = "Privacy Notice";
    this.privacyHREF = "https://www.bakerhughes.com/privacy";
    this.cookiesText = "Cookies";
    this.cookiesHREF = "https://www.bakerhughes.com/privacy/cookie-notice";
  }
  componentWillLoad() {
    if (this.showLogo) {
      if (this.logo === "" || this.logo === void 0) {
        this.imgSrc = getAssetPath(`./assets/bakerhughes_logo_light.svg`);
        this.darkImageSrc = getAssetPath(`./assets/bakerhughes_logo_dark.png`);
      }
    }
  }
  render() {
    const prefix = this.host.tagName.toLowerCase().replace(components.footer.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix);
    const footerClasses = ["bh-footer", "typography--decorative-small"];
    if (document.body.getAttribute("data-theme") === null) {
      document.body.setAttribute("data-theme", "light");
    }
    return h(Host, {
      key: "c9aae2363e5d0a1f52bd4d344f5984dc4572acc2",
      class: footerClasses.join(" ")
    }, h(Components.divider, {
      key: "33ac5db8e4b7e7e800cb4762e881640064a28408",
      type: "primary",
      marginTop: this.marginTop,
      marginBottom: "small"
    }), h("div", {
      key: "94bafe0c28a195944dcb0bbed3e1fa63b5cd4089",
      class: "bh-footer__content"
    }, this.showLogo && h("span", null, h("img", {
      class: "bh-footer__logo only-on-dark",
      src: this.darkImageSrc
    }), h("img", {
      class: "bh-footer__logo only-on-light",
      src: this.imgSrc
    })), h("div", {
      key: "356199ce7ec59ab345b08dbf826f0e5594d043fb",
      class: "bh-footer__copyright"
    }, "©", (/* @__PURE__ */ new Date()).getFullYear(), " Baker Hughes Company"), h(Components.a, {
      key: "90301b886905933dd66c88b7118114b5c394a42a",
      class: "bh-footer__cookies",
      type: "tertiary",
      target: "_blank",
      isFooter: "true",
      href: this.cookiesHREF,
      text: this.cookiesText,
      noUnderline: true
    }), h(Components.a, {
      key: "015e51313e00ed66f7ad916a25bb6bf9b459c5a2",
      class: "bh-footer__terms",
      type: "tertiary",
      target: "_blank",
      isFooter: "true",
      href: this.termsHREF,
      text: this.termsText,
      noUnderline: true
    }), h(Components.a, {
      key: "bd1aad502a195693e071e5d8ca598bdd97008ac1",
      class: "bh-footer__privacy",
      type: "tertiary",
      target: "_blank",
      isFooter: "true",
      href: this.privacyHREF,
      text: this.privacyText,
      noUnderline: true
    })));
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get host() {
    return getElement(this);
  }
};
BhFooter.style = BhFooterStyle0;
export {
  BhFooter as bh_footer
};
//# sourceMappingURL=bh-footer.entry-FINVT3G4.js.map
