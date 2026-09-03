import {
  components,
  defaultPrefix,
  generateComponentLiteralWithPrefix
} from "./chunk-XU5S37NP.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-5YQC5RSE.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-selection-group.entry.js
var bhSelectionGroupCss = ".bh-selection-group{display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:flex-start}.bh-selection-group--type-vertical{flex-direction:column}.bh-selection-group--type-horizontal{flex-direction:row}.bh-selection-group--grid .bh-checkbox,.bh-selection-group--grid .bh-radio-button{max-width:calc(\n		var(--selection-group-column-width) - var(--spacing-padding-large)\n	);min-width:calc(\n		var(--selection-group-column-width) - var(--spacing-padding-large)\n	)}.bh-selection-group .bh-checkbox,.bh-selection-group .bh-radio-button{padding-bottom:var(--spacing-padding-small);padding-right:var(--spacing-padding-large)}";
var BhSelectionGroupStyle0 = bhSelectionGroupCss;
var BhSelectionGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.layout = void 0;
    this.isGrid = false;
    this.message = void 0;
    this.isError = false;
    this.isDisabled = false;
  }
  componentWillLoad() {
    Array.from(this.host.children).map((child) => {
      if (this.isError) child.setAttribute("error", "true");
      if (this.isDisabled) child.setAttribute("disabled", "true");
    });
  }
  render() {
    const prefix = this.host.tagName.toLowerCase().replace(components.selectionGroup.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
    const classes = ["bh-selection-group"];
    if (this.layout === "horizontal") {
      classes.push("bh-selection-group--type-horizontal");
    } else if (this.layout === "vertical") {
      classes.push("bh-selection-group--type-vertical");
    }
    if (this.isGrid) {
      classes.push("bh-selection-group--grid");
    }
    return h(Host, {
      key: "d6fe7fd2ce01343e846eba1bb8ba3c38136839ed"
    }, h("div", {
      key: "53f4fe7de9026d54bb0bd4a857478b02f49ccd98",
      class: classes.join(" ")
    }, h("slot", {
      key: "6ad4d81bf76876baac40dfc9f4f7c02c903b74e9"
    })), this.message && h(Components.formMessage, {
      message: this.message,
      isError: this.isError,
      isDisabled: this.isDisabled,
      class: "bh-selection-group__form-message"
    }));
  }
  get host() {
    return getElement(this);
  }
};
BhSelectionGroup.style = BhSelectionGroupStyle0;
export {
  BhSelectionGroup as bh_selection_group
};
//# sourceMappingURL=bh-selection-group.entry-I7BI4CJV.js.map
