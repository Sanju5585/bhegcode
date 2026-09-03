import {
  Host,
  h,
  registerInstance
} from "./chunk-5YQC5RSE.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-badge.entry.js
var bhBadgeCss = ".bh-badge.appended{display:table;position:relative}.bh-badge.appended-fluid{display:block;position:relative}.bh-badge__container{display:table}.bh-badge__label{display:flex;min-width:24px;height:24px;background-color:var(--color-fill-semantic-success-default);border:1px solid var(--color-fill-semantic-success-default);border-radius:12px;color:var(--color-text-common-inverse-primary);align-content:center;align-items:center;box-sizing:border-box;flex-wrap:wrap;flex-direction:row;justify-content:center;padding:0 calc(var(--spacing-padding-xsmall) - 1px);position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.bh-badge__label.hidden{display:none}.bh-badge__label.appended{right:var(--badge-count-position-right);top:var(--badge-count-position-top)}.bh-badge__label.appended.offset--medium{right:var(--badge-count-position-right);top:var(--badge-count-position-top)}.bh-badge__label.appended.offset--small{right:-6px;top:-6px}.bh-badge__icon{position:absolute;top:2px}.bh-badge__label.appended{position:absolute}.bh-badge__label.success.solid{background-color:var(--color-fill-semantic-success-default);border-color:var(--color-fill-semantic-success-default);color:var(--color-text-common-inverse-primary)}.bh-badge__label.neutral.solid{background-color:var(--color-fill-semantic-neutral-default);border-color:var(--color-fill-semantic-neutral-default);color:var(--color-text-common-primary)}.bh-badge__label.error.solid{background-color:var(--color-fill-semantic-error-default);border-color:var(--color-fill-semantic-error-default);color:var(--color-text-common-inverse-primary)}.bh-badge__label.accent.solid{background-color:var(--color-fill-semantic-accent-default);border-color:var(--color-fill-semantic-accent-default);color:var(--color-text-common-inverse-primary)}.bh-badge__label.success.outlined{background-color:transparent;border-color:var(--color-fill-semantic-success-default);color:var(--color-text-common-primary)}.bh-badge__label.neutral.outlined{background-color:transparent;border-color:var(--color-fill-semantic-neutral-default);color:var(--color-text-common-primary)}.bh-badge__label.error.outlined{background-color:transparent;border-color:var(--color-fill-semantic-error-default);color:var(--color-text-common-primary)}.bh-badge__label.accent.outlined{background-color:transparent;border-color:var(--color-fill-semantic-accent-default);color:var(--color-text-common-primary)}";
var BhBadgeStyle0 = bhBadgeCss;
var BhBadge = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.position = "standalone";
    this.label = "";
    this.color = void 0;
    this.theme = void 0;
    this.type = "solid";
    this.icon = void 0;
    this.offset = void 0;
    this.isFluid = void 0;
  }
  componentWillRender() {
    if (this.color) {
      console.warn('bh-badge: Prop "color" is deprecated and will not be supported in the future releases. Please use "theme" prop instead.');
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
        case "earth":
          this.theme = "neutral";
          break;
      }
    }
  }
  render() {
    return h(Host, {
      key: "5366b163f790f2c9bfc63dbd9ddb4efff61a93d2",
      class: `bh-badge ${this.position === "appended" ? `${this.isFluid ? "appended-fluid" : "appended"}` : ""}`
    }, this.position === "appended" && h("slot", null), h("div", {
      key: "63d05a8af6a976ae5d3a908a75f45570eb8c58d9",
      class: "bh-badge__container"
    }, h("span", {
      key: "de9e29536230e7c3bec601cb665d7c595c77883a",
      class: `bh-badge__label typography--body-small-semi-bold ${this.theme === "success" || this.theme === "error" || this.theme === "neutral" || this.theme === "accent" ? this.theme : ""} ${this.position === "appended" ? "solid" : this.type} ${this.position === "appended" ? `appended ${this.offset ? `offset--${this.offset}` : "medium"}` : ""} ${!this.icon && !this.label ? "hidden" : ""}`
    }, !this.icon && this.label && this.label, this.icon && h("i", {
      class: "material-icons material-icons-outlined typography--icon-small bh-badge__icon"
    }, this.icon))));
  }
};
BhBadge.style = BhBadgeStyle0;
export {
  BhBadge as bh_badge
};
//# sourceMappingURL=bh-badge.entry-ONOF7POM.js.map
