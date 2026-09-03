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

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-text-area.entry.js
var bhTextAreaCss = ".bh-text-area{border:none;padding:var(--spacing-padding-none);margin:var(--spacing-margin-none);font:inherit;cursor:default;outline:none;-webkit-appearance:none;-moz-appearance:none;-o-appearance:none;appearance:none;display:flex;flex-direction:column;align-items:flex-start}textarea{resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;overflow-y:overlay}.bh-text-area::-webkit-scrollbar{width:12px;opacity:0.8;-webkit-overflow-scrolling:auto}.bh-text-area::-webkit-scrollbar-thumb{background-color:rgba(206, 215, 212, 0.8);border-radius:20px;border:4px solid var(--color-fill-common-secondary)}.bh-text-area::-webkit-scrollbar-thumb:hover{background-color:rgba(173, 189, 185, 0.8);border-radius:20px;border:4px solid var(--color-fill-common-secondary)}.bh-text-area{scrollbar-width:thin;scrollbar-color:var(--color-border-common-primary) transparent}textarea::placeholder{color:var(--color-text-label-placeholder)}textarea::-webkit-input-placeholder{color:var(--color-text-label-placeholder)}textarea::-moz-placeholder{color:var(--color-text-label-placeholder)}textarea:-ms-input-placeholder{color:var(--color-text-label-placeholder)}textarea:-moz-placeholder{color:var(--color-text-label-placeholder)}textarea::-moz-placeholder{opacity:1}.bh-text-textarea__textarea--read-only,.bh-text-textarea__textarea--read-only:hover,.bh-text-textarea__textarea--read-only:focus{border:var(--effect-border-width-regular) dashed\n    var(--color-border-form-default);box-shadow:none;cursor:default}.bh-text-textarea__textarea--read-only:focus:not(:focus-visible){border:var(--effect-border-width-regular) dashed\n    var(--color-border-form-default);box-shadow:none;cursor:default}.bh-text-area__label{color:var(--color-text-common-primary)}.bh-text-area__label--disabled{color:var(--color-text-label-disabled-default)}.bh-text-area__input{width:254px;height:162px;padding:var(--spacing-padding-small);margin-top:var(--spacing-margin-xxsmall);margin-bottom:var(--spacing-margin-xxsmall);border-radius:var(--effect-border-radius-medium);border-style:solid;border-width:var(--effect-border-width-regular);border-color:var(--color-border-form-default);background-color:var(--color-fill-common-secondary);color:var(--color-text-common-primary);cursor:text}.bh-text-area__input--fluid-horizontal{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:100%}.bh-text-area__input--fluid-vertical{height:-moz-calc(100vh - var(--spacing-margin-xxlarge));height:-webkit-calc(100vh - var(--spacing-margin-xxlarge));height:-o-calc(100vh - var(--spacing-margin-xxlarge));height:calc(100vh - var(--spacing-margin-xxlarge))}.bh-text-area__required:after{color:var(--color-text-label-critical);content:' *'}.bh-text-area__input:hover{border-color:var(--color-border-form-hover)}.bh-text-area__input:focus{outline:none;border-color:var(--color-border-form-focused);box-shadow:var(--effect-drop-shadow-focus-primary)}.bh-text-area__input:focus:not(:focus-visible){border-color:unset;box-shadow:none}.bh-text-area__input--disabled,.bh-text-area__input--disabled:hover{border-color:var(--color-border-form-default);background-color:var(--color-fill-form-disabled);color:var(--color-text-label-disabled-default);cursor:not-allowed}.bh-text-area__input--disabled::placeholder{color:var(--color-text-label-disabled)}.bh-text-area__input--disabled::-webkit-input-placeholder{color:var(--color-text-label-disabled)}.bh-text-area__input--disabled::-moz-placeholder{color:var(--color-text-label-disabled)}.bh-text-area__input--disabled:-ms-input-placeholder{color:var(--color-text-label-disabled)}.bh-text-area__input--disabled:-moz-placeholder{color:var(--color-text-label-disabled)}.bh-text-area__input--disabled::-webkit-scrollbar-thumb{background-color:var(--color-border-form-default);border-radius:20px;border:4px solid var(--color-fill-form-disabled)}.bh-text-area__input--error,.bh-text-area:invalid{background-color:var(--color-fill-form-error);border-color:var(--color-border-form-error);scrollbar-width:thin;scrollbar-color:var(--color-text-label-error) transparent}.bh-text-area__input--error::placeholder{border-color:var(--color-border-form-error);color:var(--color-text-label-error)}.bh-text-area__input--error:hover{border-color:var(--color-border-form-error-hover);scrollbar-width:thin;scrollbar-color:var(--color-text-label-error) transparent}.bh-text-area__input--error:focus{box-shadow:var(--effect-drop-shadow-focus-error);border-color:var(--color-border-form-error)}.bh-text-area__input--error:focus:not(:focus-visible){border-color:unset;box-shadow:none}.bh-text-area__input--error::-webkit-scrollbar-thumb{background-color:rgba(236, 151, 155, 0.8);border-radius:20px;border:4px solid var(--color-fill-form-error)}.bh-text-area__input--error::-webkit-scrollbar-thumb:hover{background-color:rgba(225, 110, 117, 0.8);border-radius:20px;border:4px solid var(--color-fill-form-error)}.bh-text-area__input--disabled.bh-text-area__input--error::-webkit-scrollbar-thumb{background-color:var(--color-border-form-default);border-radius:20px;border:4px solid var(--color-fill-form-disabled)}.bh-text-textarea__textarea--read-only.bh-text-textarea__textarea--inline-editing{transition:none !important;border:var(--effect-border-width-regular) solid var(--color-Fill-Control-Disabled);background-color:transparent}.bh-text-textarea__textarea--read-only.bh-text-textarea__textarea--inline-editing:hover{border:var(--effect-border-width-regular) solid var(--color-border-form-hover);background-color:var(--color-Fill-Menu-Highlighted);cursor:pointer}";
var BhTextAreaStyle0 = bhTextAreaCss;
var BhTextArea = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.changed = createEvent(this, "changed", 7);
    this.bhEventInput = createEvent(this, "bhEventInput", 7);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this.label = void 0;
    this.placeholder = void 0;
    this.messageType = void 0;
    this.messageText = void 0;
    this.fluidHorz = false;
    this.fluidVert = false;
    this.isError = false;
    this.isDisabled = false;
    this.maxChar = 300;
    this.isReadOnly = false;
    this.value = void 0;
    this.isRequired = false;
    this.isInlineEditing = false;
    this.helpText = "Characters";
    this.valueCount = 0;
    this.countString = "0/" + this.maxChar + " " + this.helpText;
    this.isInitializedAsReadOnly = void 0;
  }
  componentWillLoad() {
    this.isInitializedAsReadOnly = this.isReadOnly;
  }
  handleInput(ev) {
    if (!this.maxChar) {
      this.maxChar = 0;
    }
    this.value = ev.target ? ev.target.value : null;
    if (this.value) {
      this.valueCount = this.value.length;
      this.countString = String(this.valueCount) + "/" + this.maxChar + " " + this.helpText;
    }
    if (this.messageType == "count" && this.countString) {
      this.messageText = this.countString;
    } else {
      this.messageText = this.messageText;
    }
    this.changed.emit(this.value);
    this.bhEventInput.emit(this.value);
  }
  handleChange(e) {
    var _a;
    const value = (_a = e.target) === null || _a === void 0 ? void 0 : _a.value;
    this.bhEventChange.emit(value);
  }
  editTextArea(e, readonly) {
    e.preventDefault();
    e.stopPropagation();
    if (this.isInlineEditing && this.isInitializedAsReadOnly) {
      this.isReadOnly = readonly;
    }
  }
  render() {
    var _a;
    const prefix = this.host.tagName.toLowerCase().replace(components.textArea.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
    const labelClasses = ["bh-text-area__label", "typography--label-small"];
    if (this.isDisabled) {
      labelClasses.push("bh-text-area__label--disabled");
    }
    if (this.isRequired) {
      labelClasses.push("bh-text-area__required");
    }
    const inputClasses = ["bh-text-area__input", "typography--body-medium", "motion--normal"];
    if (this.fluidHorz) inputClasses.push("bh-text-area__input--fluid-horizontal");
    if (this.fluidVert) inputClasses.push("bh-text-area__input--fluid-vertical");
    if (this.isDisabled) {
      inputClasses.push("bh-text-area__input--disabled");
    }
    if (this.isError) {
      inputClasses.push("bh-text-area__input--error");
    }
    if (!this.maxChar) {
      this.maxChar = 0;
    }
    if (this.messageType == "count") {
      this.value = this.value.slice(0, this.maxChar);
    }
    this.valueCount = ((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) || 0;
    this.countString = String(this.valueCount) + "/" + this.maxChar + " " + this.helpText;
    if (this.messageType == "count") {
      this.messageText = this.countString;
    } else {
      this.messageText = this.messageText;
    }
    if (this.isReadOnly) {
      inputClasses.push("bh-text-textarea__textarea--read-only");
    }
    if (this.isInlineEditing) {
      inputClasses.push("bh-text-textarea__textarea--inline-editing");
    }
    return h(Host, {
      key: "28fd9692dc355ebe7167f8285ec540f07033f70b",
      class: "bh-text-area"
    }, this.label && h("label", {
      class: labelClasses.join(" ")
    }, this.label), h("textarea", {
      key: "cdc613b0fe60d45567462770ba2969b434c5e2c7",
      class: inputClasses.join(" "),
      placeholder: this.placeholder,
      disabled: this.isDisabled,
      maxlength: this.maxChar,
      value: this.value,
      onInput: (ev) => this.handleInput(ev),
      readonly: this.isReadOnly,
      onChange: (event) => {
        this.handleChange(event);
      },
      onClick: (event) => {
        this.editTextArea(event, false);
      },
      onBlur: (event) => {
        this.editTextArea(event, true);
      }
    }), this.messageText && h(Components.formMessage, {
      message: this.messageText,
      isError: this.isError,
      isDisabled: this.isDisabled
    }));
  }
  get host() {
    return getElement(this);
  }
};
BhTextArea.style = BhTextAreaStyle0;
export {
  BhTextArea as bh_text_area
};
//# sourceMappingURL=bh-text-area.entry-4XBMQIRQ.js.map
