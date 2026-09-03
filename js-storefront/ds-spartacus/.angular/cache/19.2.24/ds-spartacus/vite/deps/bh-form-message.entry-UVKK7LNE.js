import {
  h,
  registerInstance
} from "./chunk-5YQC5RSE.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-form-message.entry.js
var bhFormMessageCss = ".bh-form-message{display:flex;cursor:default;color:var(--color-text-common-secondary)}.bh-form-message--error{color:var(--color-text-label-error)}.bh-form-message--disabled{color:var(--color-text-label-disabled-default)}.bh-form-message .bh-form-message__icon{margin-right:var(--spacing-margin-xxsmall);line-height:inherit;color:inherit}";
var BhFormMessageStyle0 = bhFormMessageCss;
var BhFormMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.message = void 0;
    this.isError = false;
    this.isDisabled = false;
  }
  render() {
    const messageClasses = ["bh-form-message typography--body-small"];
    if (this.isError) {
      messageClasses.push("bh-form-message--error");
    }
    if (this.isDisabled) {
      messageClasses.push("bh-form-message--disabled");
    }
    if (this.message) {
      return h("div", {
        class: messageClasses.join(" ")
      }, this.isError && h("i", {
        class: "typography--icon-small bh-form-message__icon"
      }, "error_outline"), this.message);
    } else {
      return;
    }
  }
};
BhFormMessage.style = BhFormMessageStyle0;
export {
  BhFormMessage as bh_form_message
};
//# sourceMappingURL=bh-form-message.entry-UVKK7LNE.js.map
