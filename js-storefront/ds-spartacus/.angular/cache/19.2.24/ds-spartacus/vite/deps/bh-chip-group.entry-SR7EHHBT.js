import {
  Host,
  h,
  registerInstance
} from "./chunk-5YQC5RSE.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-chip-group.entry.js
var bhChipGroupCss = ".bh-chip-group{display:flex;align-items:flex-start;flex-wrap:wrap}.bh-chip-group::-webkit-scrollbar{height:0;display:none}.bh-chip-group.overflow{flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;scrollbar-width:none}.bh-chip-group>*{margin:0 var(--spacing-margin-small) var(--spacing-margin-small) 0}.bh-chip-group>*:last-child{margin-right:0px}@media (max-width: 599px){.bh-chip-group.overflow{padding:0 var(--spacing-padding-small);margin:0 calc(-1 * var(--spacing-margin-small))}.bh-chip-group.overflow>*:last-child{padding-right:var(--spacing-padding-small)}}";
var BhChipGroupStyle0 = bhChipGroupCss;
var BhChipGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isOverflow = void 0;
  }
  render() {
    return h(Host, {
      key: "2f5de0ad20927f3f05d9d591b15dd65fce480a77",
      class: `bh-chip-group ${this.isOverflow ? "overflow" : ""}`
    }, h("slot", {
      key: "14785c3c3fc46b974da77c7eb26fd3255776e164"
    }));
  }
};
BhChipGroup.style = BhChipGroupStyle0;
export {
  BhChipGroup as bh_chip_group
};
//# sourceMappingURL=bh-chip-group.entry-SR7EHHBT.js.map
