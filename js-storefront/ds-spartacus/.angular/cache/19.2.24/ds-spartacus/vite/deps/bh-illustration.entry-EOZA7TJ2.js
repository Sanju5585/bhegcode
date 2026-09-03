import {
  Host,
  getAssetPath,
  h,
  registerInstance
} from "./chunk-5YQC5RSE.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-illustration.entry.js
var bhIllustrationCss = '.only-on-dark {\n	display: none;\n}\n\n.only-on-light {\n	display: none;\n}\n\n[data-theme="dark"] {\n	.only-on-dark {\n		display: block;\n	}\n\n	.only-on-light {\n		display: none;\n	}\n}\n\n[data-theme="light"] {\n	.only-on-dark {\n		display: none;\n	}\n\n	.only-on-light {\n		display: block;\n	}\n}\n.bh-illustration {\n	display: flex;\n	flex-direction: column;\n	justify-content: center;\n	align-items: center;\n	align-self: center;\n	max-width: 240px;\n}\n\n.bh-illustration--image {\n	margin-bottom: var(--spacing-margin-medium);\n	max-width: 220px;\n}\n\n.bh-illustration--title {\n	text-align: center;\n	color: var(--color-text-common-primary);\n	margin-bottom: 4px;\n}\n\n.bh-illustration--description {\n	text-align: center;\n	color: var(--color-text-common-secondary);\n}\n\n';
var BhIllustrationStyle0 = bhIllustrationCss;
var BhIllustration = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.imgSrc = "";
    this.darkImageSrc = "";
    this.source = void 0;
    this.title = void 0;
    this.description = void 0;
    this.htmlDescription = false;
  }
  setImgSrc() {
    this.setImage();
  }
  setImage() {
    const hasSpecialCharacters = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    this.imgSrc = !hasSpecialCharacters.test(this.source) ? getAssetPath(`./assets/${this.source}.svg`) : getAssetPath(this.source);
    this.darkImageSrc = !hasSpecialCharacters.test(this.source) ? getAssetPath(`./assets/${this.source + "Dark"}.svg`) : getAssetPath(this.source);
  }
  componentWillLoad() {
    this.setImage();
  }
  render() {
    if (document.body.getAttribute("data-theme") === null) {
      document.body.setAttribute("data-theme", "light");
    }
    return h(Host, {
      key: "e96cf2b4c081b1898ff075453800d0cf52558630",
      class: "bh-illustration"
    }, h("img", {
      key: "b9983c14354816bc1a237a0bb8e377fbe01cd15b",
      class: "bh-illustration--image only-on-dark",
      src: this.darkImageSrc
    }), h("img", {
      key: "7f335cd9affb15c7894b73ef4e89784c9ead3800",
      class: "bh-illustration--image only-on-light",
      src: this.imgSrc
    }), h("span", {
      key: "b253f59319c1c96e9240f120b8cac760ff76b5b3",
      class: "typography--subtitle-medium bh-illustration--title"
    }, this.title), !this.htmlDescription && h("span", {
      class: "typography--body-small bh-illustration--description"
    }, this.description), this.htmlDescription && h("slot", {
      name: "illustration-description"
    }));
  }
  static get assetsDirs() {
    return ["assets"];
  }
  static get watchers() {
    return {
      "source": ["setImgSrc"]
    };
  }
};
BhIllustration.style = BhIllustrationStyle0;
export {
  BhIllustration as bh_illustration
};
//# sourceMappingURL=bh-illustration.entry-EOZA7TJ2.js.map
