import {
  Host,
  h,
  registerInstance
} from "./chunk-5YQC5RSE.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-list.entry.js
var bhListCss = ".bh-list-wrapper{display:flex;justify-content:space-between;border-bottom:var(--effect-border-width-regular) solid var(--color-border-common-primary);padding:var(--spacing-padding-small) 0}.bh-list-wrapper.padding--large{padding:var(--spacing-padding-small) 0}.bh-list-wrapper.padding--medium{padding:var(--spacing-padding-xsmall) 0}.bh-list-wrapper.padding--small{padding:var(--spacing-padding-xxsmall) 0}.bh-list-container--left>*:not(:last-child){margin-right:var(--spacing-margin-xsmall)}.bh-list-container--right>*:not(:first-child){margin-left:var(--spacing-margin-xsmall)}.bh-list-container{display:flex;align-items:center}";
var BhListStyle0 = bhListCss;
var BhList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.padding = "medium";
  }
  render() {
    return h(Host, {
      key: "8b1a7b1f27389c61ed248442a5b8f886a1be4d51",
      class: "bh-list"
    }, h("div", {
      key: "5e23596d1bd51715e4b3522ec9c81322d3f3e26f",
      class: `bh-list-wrapper padding--${this.padding}`
    }, h("div", {
      key: "de9473c7e6638c616ab6a63a47033ade107c53ea",
      class: "bh-list-container bh-list-container--left"
    }, h("slot", {
      key: "fc5ccebca63c654f5cab9af07ae3ea9a830ebf36",
      name: "left--first"
    }), h("slot", {
      key: "405ef9f9ab66268d6c8b0a19568d8bc1d1fa4a6b",
      name: "left--second"
    })), h("div", {
      key: "a48ce6a0a0e2c548aba4fb6f3e94de6152157d83",
      class: "bh-list-container bh-list-container--right"
    }, h("slot", {
      key: "37e292f5d85bf6927ccb2cd337eb87a7ba97189c",
      name: "right--first"
    }), h("slot", {
      key: "31c7f6f3ebcf9e3e56ed32a02c0434044c2825d8",
      name: "right--second"
    }))));
  }
};
BhList.style = BhListStyle0;
export {
  BhList as bh_list
};
//# sourceMappingURL=bh-list.entry-RJQH4ZWJ.js.map
