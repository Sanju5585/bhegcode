import {
  components,
  defaultPrefix,
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

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-incrementer.entry.js
var bhIncrementerCss = ".bh-incrementer{border:none;padding:var(--spacing-padding-none);margin:var(--spacing-margin-none);font:inherit;cursor:default;outline:none;-webkit-appearance:none;-moz-appearance:none;-o-appearance:none;appearance:none;position:relative;max-height:88px}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;appearance:none;margin:0}input[type='number']{-moz-appearance:textfield;appearance:textfield}.bh-unit{font-family:var(--font-family-unit) !important;font-size:var(--font-size-body-small) !important;color:var(--color-text-label-placeholder);-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.bh-incrementer__container{display:flex;flex-direction:row;position:relative;justify-content:space-between;background-color:var(--color-fill-common-secondary);padding:calc(var(--spacing-padding-small) - 1px) var(--spacing-padding-small);margin-top:var(--spacing-margin-xxsmall);margin-bottom:var(--spacing-margin-xxsmall);border-radius:var(--effect-border-radius-medium);border-style:solid;border-width:var(--effect-border-width-regular);border-color:var(--color-border-form-default)}.bh-incrementer__container-wrapper{display:table;align-items:center;position:relative}.bh-incrementer__container-wrapper--fluid{width:100%}.bh-incrementer__container:hover{border-color:var(--color-border-form-hover);cursor:text}.bh-incrementer__container:focus-within{border-color:var(--color-border-form-focused);box-shadow:var(--effect-drop-shadow-focus-primary)}.bh-incrementer__button-container{display:flex;justify-content:space-between;align-items:center;width:inherit;position:absolute;right:var(--spacing-padding-small);top:13px;}.bh-incrementer__button-container.error{color:var(--color-text-label-error);-webkit-text-fill-color:var(\n    --color-text-label-error\n  );}.bh-incrementer__button-container.error .bh-incrementer__button-container.error .bh-incrementer__increment-button:hover,.bh-incrementer__decrement-button:hover{background-color:var(--color-fill-control-error-hover)}.bh-incrementer__button-container.disabled{color:var(--color-text-label-disabled-default);-webkit-text-fill-color:var(\n    --color-text-label-disabled-default\n  );cursor:not-allowed;pointer-events:none}.bh-incrementer__button-container.readonly{pointer-events:none;color:var(--color-text-label-disabled-default);-webkit-text-fill-color:var(--color-text-label-disabled-default)}.bh-incrementer__button-container.with-label{top:32px;}.bh-incrementer__increment-button,.bh-incrementer__decrement-button{color:var(--color-text-common-secondary);position:relative;outline:none;text-align:center;border-radius:110px;width:26px;height:26px;cursor:pointer;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none;padding:var(--spacing-margin-xxsmall)}.bh-incrementer__increment-button:hover,.bh-incrementer__decrement-button:hover{color:var(--color-text-common-primary);background-color:var(--color-fill-cta-secondary-hover)}.bh-incrementer__increment-button:active,.bh-incrementer__decrement-button:active{color:var(--color-text-common-primary);background-color:var(--color-fill-cta-secondary-hover)}.bh-incrementer__increment-button.error:hover,.bh-incrementer__decrement-button.error:hover{color:var(--color-fill-control-error-supplemental);background-color:var(--color-fill-control-error-hover)}.bh-incrementer__increment-button.read-only,.bh-incrementer__decrement-button.read-only{color:var(--color-border-form-default)}.bh-incrementer__container-wrapper.disabled,.bh-incrementer__container-wrapper.disabled:hover{border-color:var(--color-border-form-disabled);background-color:var(--color-fill-form-disabled);color:var(--color-text-label-disabled-default);-webkit-text-fill-color:var(\n    --color-text-label-disabled-default\n  );cursor:not-allowed;pointer-events:none}.bh-incrementer__container-wrapper.error,.bh-incrementer__container-wrapper.error:hover,.bh-incrementer:invalid{background-color:var(--color-fill-form-error);border-color:var(--color-border-form-error);color:var(--color-text-label-error);-webkit-text-fill-color:var(\n    --color-text-label-error\n  );cursor:not-allowed;pointer-events:none}.bh-incrementer__container.error:focus-within{background-color:var(--color-fill-form-error);box-shadow:var(--effect-drop-shadow-focus-error);border-color:var(--color-border-form-error)}.bh-incrementer__container.read-only,.bh-incrementer__container.read-only:hover,.bh-incrementer__container.read-only:focus-within{border:var(--effect-border-width-regular) dashed\n    var(--color-border-form-default);box-shadow:none;cursor:default;pointer-events:none}";
var BhIncrementerStyle0 = bhIncrementerCss;
var BhIncrementer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.focus = createEvent(this, "focus", 7);
    this.blur = createEvent(this, "blur", 7);
    this.bhEventInput = createEvent(this, "bhEventInput", 7);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this.label = void 0;
    this.unit = "";
    this.placeholderNumber = 0;
    this.minValue = 0;
    this.maxValue = 20;
    this.incrementFactor = 1;
    this.value = "0";
    this.message = void 0;
    this.isReadOnly = false;
    this.isError = false;
    this.isDisabled = false;
    this.isFluid = false;
  }
  handleChange(e) {
    var el = e.target;
    e.preventDefault();
    this.value = el.value;
    this.bhEventChange.emit(this.value);
  }
  handleInput(e) {
    var _a;
    const value = (_a = e.target) === null || _a === void 0 ? void 0 : _a.value;
    e.preventDefault();
    this.bhEventInput.emit(value);
  }
  incrementValue(e) {
    let numValue = parseInt(this.value);
    e.preventDefault();
    if (isNaN(numValue)) {
      numValue = this.placeholderNumber;
    }
    if (numValue < this.maxValue) {
      numValue += this.incrementFactor;
    }
    this.value = numValue.toString();
    this.bhEventInput.emit(numValue.toString());
  }
  decrementValue(e) {
    let numValue = parseInt(this.value);
    e.preventDefault();
    if (isNaN(numValue)) {
      numValue = this.placeholderNumber;
    }
    if (numValue > this.minValue) {
      numValue -= this.incrementFactor;
    }
    this.value = numValue.toString();
    this.bhEventInput.emit(numValue.toString());
  }
  render() {
    const prefix = this.host.tagName.toLowerCase().replace(components.incrementer.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
    const containerWrapperClasses = ["bh-incrementer__container-wrapper"];
    if (this.isFluid) {
      containerWrapperClasses.push("bh-incrementer__container-wrapper--fluid");
    }
    return h(Host, {
      key: "b7803e619c181f6fd9162f8e66b2b8fe5218b05d",
      class: "bh-incrementer"
    }, h("div", {
      key: "f6be8c904c2fab0d7ded83dbafb2a874e741d611",
      class: containerWrapperClasses.join(" ")
    }, h(Components.textInput, {
      key: "4c69e19d273cd1677db7df649d63a04f3b55789f",
      placeholder: `${this.placeholderNumber}`,
      isDisabled: this.isDisabled,
      isError: this.isError,
      isFluid: this.isFluid,
      isReadOnly: this.isReadOnly,
      value: this.value,
      onFocus: this.focus,
      onBlur: this.blur,
      // unit={this.unit}
      onChange: (event) => {
        this.handleChange(event);
      },
      onInput: (event) => {
        this.handleInput(event);
      },
      label: this.label,
      message: this.message,
      type: "number"
    }), h("div", {
      key: "cb7bb1bf11e08c9a8da5f299696bd7b812c9a00a",
      class: `bh-incrementer__button-container ${this.label ? "with-label" : ""} ${this.isError ? "error" : ""} ${this.isDisabled ? "disabled" : ""} ${this.isReadOnly ? "readonly" : ""} motion--normal`
    }, this.unit && h("span", {
      class: `bh-unit`
    }, this.unit), h(Components.icon, {
      key: "f3ca32ab867ae40612fdc8257122335ce448d1ca",
      class: `bh-incrementer__decrement-button ${this.isError ? "error" : ""} motion--normal`,
      icon: "remove",
      size: "small",
      onClick: (event) => {
        this.decrementValue(event);
      }
    }), h(Components.icon, {
      key: "7884fe267d71c34b3fd8bfa4840825295bebe4b9",
      class: `bh-incrementer__increment-button ${this.isError ? "error" : ""} motion--normal`,
      icon: "add",
      size: "small",
      onClick: (event) => {
        this.incrementValue(event);
      }
    }))));
  }
  get host() {
    return getElement(this);
  }
};
BhIncrementer.style = BhIncrementerStyle0;
export {
  BhIncrementer as bh_incrementer
};
//# sourceMappingURL=bh-incrementer.entry-6MSSX6UR.js.map
