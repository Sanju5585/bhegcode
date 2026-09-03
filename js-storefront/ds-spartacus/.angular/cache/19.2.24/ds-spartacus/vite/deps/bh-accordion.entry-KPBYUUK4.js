import {
  components,
  generateComponentLiteralWithPrefix
} from "./chunk-XU5S37NP.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-5YQC5RSE.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-accordion.entry.js
var bhAccordionCss = ".bh-accordion{position:relative;display:flex;flex-direction:column;background-color:var(--color-fill-common-secondary)}.bh-accordion--header{background-color:var(--color-fill-common-secondary);border:none;display:flex;align-items:center;cursor:pointer;transition:background-color var(--motion-duration-normal)}.bh-accordion--header:hover{background-color:var(--color-fill-menu-highlighted);transition:background-color var(--motion-duration-normal)}.bh-accordion--header.large:focus,.bh-accordion--header.medium:focus,.bh-accordion--header.small:focus{outline:2px solid var(--color-border-common-focused);z-index:1;}.bh-accordion--header.large:focus:not(:focus-visible),.bh-accordion--header.medium:focus:not(:focus-visible),.bh-accordion--header.small:focus:not(:focus-visible){outline:none;z-index:unset}.bh-accordion--header.small{padding:7px var(--spacing-padding-xsmall)}.bh-accordion--header.medium{padding:10px var(--spacing-padding-xsmall)}.bh-accordion--header.large{padding:14px var(--spacing-padding-xsmall)}.bh-accordion--header.left{justify-content:flex-start}.bh-accordion--header.right{justify-content:space-between}.bh-accordion--icon-left{margin-right:var(--spacing-margin-xsmall)}.bh-accordion--title{color:var(--color-text-common-secondary)}.bh-accordion--content{max-height:0px;overflow:auto;border-bottom:1px solid var(--color-border-common-primary);transition:max-height var(--motion-duration-normal)\n    var(--motion-easing-normal)}.bh-accordion--content.open{max-height:1000px}.bh-accordion--container{min-height:20px;display:flex;flex-direction:column;justify-content:flex-start;padding:var(--spacing-padding-xsmall);color:var(--color-text-common-secondary)}.bh-accordion--container.left-padding{padding:var(--spacing-padding-xsmall) var(--spacing-padding-xsmall)\n    var(--spacing-padding-xsmall) 34px}@media (max-width: 599px){.bh-accordion--header.large,.bh-accordion--header.medium,.bh-accordion--header.small{background-color:var(--color-fill-common-secondary)}}.bh-card--subtext-small-view{display:none !important}.bh-card__subtext-copy{color:var(--color-text-common-secondary);margin-left:12px}";
var BhAccordionStyle0 = bhAccordionCss;
var BhAccordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventOpen = createEvent(this, "bhEventOpen", 7);
    this.bhEventClose = createEvent(this, "bhEventClose", 7);
    this.subtextClasses = [];
    this.header = void 0;
    this.isOpen = false;
    this.viewport = void 0;
    this.subtext = void 0;
    this.size = "medium";
    this.iconOrientation = "right";
  }
  watchIsOpen() {
    if (this.isOpen) {
      this.bhEventOpen.emit({
        type: "accordion"
      });
    } else {
      this.bhEventClose.emit({
        type: "accordion"
      });
    }
  }
  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  render() {
    const prefix = this.host.tagName.toLowerCase().replace(components.accordion.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix);
    const icon = this.isOpen ? "expand_less" : "expand_more";
    this.subtextClasses.push(this.viewport === "small" ? "typography--body-small bh-card--subtext-small-view" : "typography--body-small bh-card__subtext-copy");
    return h(Host, {
      key: "a71e5c3f1e3c9e4aa040983a76165079030022b4",
      class: `bh-accordion`
    }, h("button", {
      key: "a3e50efeb5f542b0d1738c119ef5683e9a53cf46",
      class: `bh-accordion--header ${this.isOpen ? "open" : ""}  ${this.size}  ${this.iconOrientation}`,
      onClick: () => this.toggleOpen(),
      type: "button"
    }, this.iconOrientation === "left" && h(Components.icon, {
      class: `bh-accordion--icon-left`,
      icon,
      size: "small"
    }), h("span", {
      key: "5bdf3ce962bbb9aa0b86ff7bed6fd3ab6a2e7725",
      class: `bh-accordion--title typography--body-${this.size === "small" ? "small" : "medium"}`
    }, this.header, this.subtext && h("span", {
      class: this.subtextClasses.join(" ")
    }, this.subtext)), this.iconOrientation === "right" && h(Components.icon, {
      icon,
      size: "small"
    })), h("div", {
      key: "4952da250e1b88b4ac7b89c2383fb3d07fa96eb5",
      class: `bh-accordion--content ${this.isOpen ? "open" : ""}`
    }, h("div", {
      key: "8fdac325bdc1ddbd929db5428b02a6a736023fe2",
      class: `bh-accordion--container ${this.iconOrientation === "left" ? "left-padding" : ""}`
    }, h("slot", {
      key: "9802d8fd76e7de2ffafb29ee6af271d658395b82"
    }))));
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "isOpen": ["watchIsOpen"]
    };
  }
};
BhAccordion.style = BhAccordionStyle0;
export {
  BhAccordion as bh_accordion
};
//# sourceMappingURL=bh-accordion.entry-KPBYUUK4.js.map
