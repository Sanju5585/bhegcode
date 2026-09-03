import {
  Host,
  createEvent,
  h,
  registerInstance
} from "./chunk-5YQC5RSE.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-toggle.entry.js
var bhToggleCss = ".bh-toggle{display:flex;flex-direction:row;align-items:flex-start;-webkit-touch-callout:none;-moz-tap-highlight-color:transparent;-webkit-tap-highlight-color:transparent}.bh-toggle__input-container{height:var(--toggle-container-height);display:flex;align-items:center;justify-content:center;position:relative}.bh-toggle__input{outline:none;-webkit-appearance:none;-moz-appearance:none;-o-appearance:none;appearance:none;padding:0;margin:0;background-color:var(--color-fill-control-unselected-supplemental);border-color:var(--color-fill-control-unselected-supplemental);width:var(--toggle-switch-width);height:var(--toggle-switch-height);border-radius:var(--toggle-switch-height);transition:inherit;border:none}@media (hover: hover){.bh-toggle__input,.bh-toggle__input-container{cursor:pointer}.bh-toggle__input-container--disabled,.bh-toggle__input--disabled{cursor:not-allowed}}.bh-toggle__slider{pointer-events:none;display:flex;align-items:center;justify-content:center;transition:inherit}.bh-toggle__slider::before{position:absolute;left:0px;content:'';height:var(--toggle-slider-height);width:var(--toggle-slider-width);border-radius:100%;background-color:var(--color-fill-common-secondary);transition:inherit;border-style:solid;border-color:var(--color-fill-control-unselected-supplemental);border-width:calc(\n		(var(--toggle-switch-height) - var(--toggle-slider-height)) / 2\n	)}.bh-toggle__input:checked+.bh-toggle__slider::before{left:20px;border-color:var(--color-border-control-selected);background-color:var(--color-fill-common-secondary)}.bh-toggle__input--error+.bh-toggle__slider::before,.bh-toggle__input--error:checked+.bh-toggle__slider::before{background-color:var(--color-fill-common-secondary);border-color:var(--color-fill-control-error-supplemental)}.bh-toggle__input--disabled+.bh-toggle__slider::before,.bh-toggle__input--disabled.bh-toggle__input:checked+.bh-toggle__slider::before{background-color:var(--color-fill-control-disabled);border-color:var(--color-fill-control-disabled-supplemental)}.bh-toggle__input:checked{background-color:var(--color-fill-control-selected)}.bh-toggle__input--error,.bh-toggle__input--error:checked{background-color:var(--color-fill-control-error-supplemental)}.bh-toggle__input--disabled,.bh-toggle__input--disabled.bh-toggle__input:checked{background-color:var(--color-fill-control-disabled-supplemental);opacity:1}.bh-toggle__input:focus,.bh-toggle__input:checked.bh-toggle__input:focus{box-shadow:var(--effect-drop-shadow-focus-primary)}.bh-toggle__input:focus:not(:focus-visible),.bh-toggle__input:checked.bh-toggle__input:focus:not(:focus-visible){box-shadow:none}.bh-toggle__input--error:focus,.bh-toggle__input--error:focus.bh-toggle__input--error:checked{box-shadow:var(--effect-drop-shadow-focus-error)}.bh-toggle__input--error:focus:not(:focus-visible),.bh-toggle__input--error:focus:not(:focus-visible).bh-toggle__input--error:checked{box-shadow:none}.bh-toggle__label{display:flex;align-items:center;min-height:var(--toggle-container-height);color:var(--color-text-label-default)}.bh-toggle__label--disabled{color:var(--color-text-label-disabled-default)}.bh-toggle__label{margin-left:var(--spacing-margin-medium)}";
var BhToggleStyle0 = bhToggleCss;
var BhToggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this.value = void 0;
    this.label = void 0;
    this.name = void 0;
    this.isChecked = false;
    this.isDisabled = false;
    this.isError = false;
  }
  checkUpdate(value) {
    this.bhEventChange.emit(value);
  }
  render() {
    const containerClasses = ["bh-toggle__input-container motion--fast"];
    if (this.isDisabled) {
      containerClasses.push("bh-toggle__input-container--disabled");
    }
    const inputClasses = ["bh-toggle__input"];
    if (this.isDisabled) {
      inputClasses.push("bh-toggle__input--disabled");
    }
    if (this.isError) {
      inputClasses.push("bh-toggle__input--error");
    }
    const labelClasses = ["bh-toggle__label", "typography--body-medium"];
    if (this.isDisabled) {
      labelClasses.push("bh-toggle__label--disabled");
    } else if (this.isError) {
      labelClasses.push("bh-toggle__label--error");
    } else {
      labelClasses.push("typography--color-secondary");
    }
    return h(Host, {
      key: "df2f68ab3e23f613dd5c1358f252351213e23234",
      class: "bh-toggle"
    }, h("label", {
      key: "1f9133ad69b892177e157fb4e8a86cceb1923c92",
      class: containerClasses.join(" ")
    }, h("input", {
      key: "02290f2bbb58c64910d57c33cee91933bb2f2dc0",
      class: inputClasses.join(" "),
      type: "checkbox",
      value: this.value,
      name: this.name,
      checked: this.isChecked,
      disabled: this.isDisabled,
      onChange: (event) => {
        this.checkUpdate(event.target.checked);
      }
    }), h("span", {
      key: "bca8806aed17ff8781596feb7a9c9d36a540cb5e",
      class: "bh-toggle__slider"
    }), this.label && h("span", {
      class: labelClasses.join(" ")
    }, this.label)));
  }
};
BhToggle.style = BhToggleStyle0;
export {
  BhToggle as bh_toggle
};
//# sourceMappingURL=bh-toggle.entry-35AURWS7.js.map
