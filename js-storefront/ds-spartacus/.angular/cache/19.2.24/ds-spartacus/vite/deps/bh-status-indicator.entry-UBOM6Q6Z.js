import {
  Host,
  h,
  registerInstance
} from "./chunk-5YQC5RSE.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-status-indicator.entry.js
var bhStatusIndicatorCss = ".bh-status-indicator{position:relative;display:table}.bh-status-indicator.appended-fluid{display:block}.bh-status-indicator__container{display:flex;align-items:center}.bh-status-indicator__container.appended{position:absolute;top:4px;right:0}.bh-status-indicator__container.appended.offset--none{top:0}.bh-status-indicator__container.appended.offset--small{top:4px}.bh-status-indicator__container.appended>.bh-status-indicator__badge{box-shadow:0px 0px 0px 1px var(--color-fill-common-primary)}.bh-status-indicator__badge{width:12px;height:12px;border-radius:50%}.bh-status-indicator__badge.xsmall{width:4px;height:4px}.bh-status-indicator__badge.small{width:8px;height:8px}.bh-status-indicator__badge.success{background-color:var(--color-fill-semantic-success-default)}.bh-status-indicator__badge.error{background-color:var(--color-fill-semantic-error-default)}.bh-status-indicator__badge.warning{background-color:var(--color-fill-semantic-warning-default)}.bh-status-indicator__badge.accent{background-color:var(--color-fill-semantic-accent-default)}.bh-status-indicator__label{margin-left:var(--spacing-margin-small)}";
var BhStatusIndicatorStyle0 = bhStatusIndicatorCss;
var BhStatusIndicator = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.position = "standalone";
    this.color = void 0;
    this.theme = "success";
    this.size = void 0;
    this.offset = "small";
    this.isFluid = void 0;
  }
  componentWillRender() {
    if (this.color) {
      console.warn('bh-status-indicator: Prop "color" is deprecated and will not be supported in the future releases. Please use "theme" prop instead.');
      switch (this.color) {
        case "teal":
          this.theme = "success";
          break;
        case "rose":
          this.theme = "error";
          break;
        case "purple":
          this.theme = "accent";
          break;
        case "gold":
          this.theme = "warning";
          break;
      }
    }
  }
  render() {
    return h(Host, {
      key: "9155e688c0c885cb4fe2cc10a04337582222c6be",
      class: `bh-status-indicator ${this.position === "appended" ? `${this.isFluid ? "appended-fluid" : "appended"}` : ""}`
    }, this.position === "appended" && h("slot", null), h("div", {
      key: "4d8a6764d532f1850cdad1526fbc06c3bc1155e8",
      class: `bh-status-indicator__container ${this.position} offset--${this.offset}`
    }, h("div", {
      key: "20b8d05ce2f27d470684a47760b010978d525421",
      class: `bh-status-indicator__badge ${this.size} ${this.theme === "success" || this.theme === "error" || this.theme === "warning" || this.theme === "accent" ? this.theme : ""}`,
      style: {
        backgroundColor: this.theme === "success" || this.theme === "error" || this.theme === "warning" || this.theme === "accent" ? "" : `${this.theme}`
      }
    })));
  }
};
BhStatusIndicator.style = BhStatusIndicatorStyle0;
export {
  BhStatusIndicator as bh_status_indicator
};
//# sourceMappingURL=bh-status-indicator.entry-UBOM6Q6Z.js.map
