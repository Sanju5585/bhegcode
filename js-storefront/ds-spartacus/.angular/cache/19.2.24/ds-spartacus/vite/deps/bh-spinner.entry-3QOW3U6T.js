import {
  Host,
  h,
  registerInstance
} from "./chunk-5YQC5RSE.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-spinner.entry.js
var bhSpinnerCss = '.bh-spinner-container--inline{position:relative;pointer-events:none;display:table;margin-right:auto;margin-left:auto}.bh-spinner-container--float{position:fixed;z-index:5000;display:flex;align-items:center;justify-content:center;top:0;left:0;width:100vw;height:100vh;pointer-events:none;flex-direction:column}.bh-spinner-circle{width:20px;height:20px;margin:auto}.bh-spinner-circle::after{content:" ";display:block;width:16px;height:16px;border-radius:50%;border:2px solid var(--color-fill-control-selected);border-color:var(--color-fill-control-selected) transparent var(--color-fill-control-selected) transparent;animation:bh-spinner-keyframes 1.2s linear infinite}@keyframes bh-spinner-keyframes{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.bh-spinner-circle.bh-spinner-size--xlarge{width:84px;height:84px}.bh-spinner-circle.bh-spinner-size--xlarge::after{width:68px;height:68px;border-width:8px}.bh-spinner-circle.bh-spinner-size--large{width:52px;height:52px}.bh-spinner-circle.bh-spinner-size--large::after{width:42px;height:42px;border-width:5px}.bh-spinner-circle.bh-spinner-size--medium{width:20px;height:20px}.bh-spinner-circle.bh-spinner-size--medium::after{width:16px;height:16px;border-width:2px}.bh-spinner-circle.bh-spinner-size--small{width:12px;height:12px}.bh-spinner-circle.bh-spinner-size--small::after{width:10px;height:10px;border-width:1px}.text-size--xlarge{font-size:18px;font-family:Poppins;line-height:55px;letter-spacing:-0.25px;font-weight:400;text-align:center;color:var(--color-text-common-secondary)}.text-size--large{font-size:14px;font-family:Poppins;line-height:38px;letter-spacing:-0.25px;font-weight:400;text-align:center;color:var(--color-text-common-secondary)}.text-size--medium{font-size:10px;font-family:Poppins;line-height:30px;letter-spacing:0.25px;font-weight:400;text-align:center;color:var(--color-text-common-secondary)}.text-size--small{font-size:8px;font-family:Poppins;line-height:22px;letter-spacing:0.25px;font-weight:400;text-align:center;color:var(--color-text-common-secondary)}';
var BhSpinnerStyle0 = bhSpinnerCss;
var BhSpinner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.position = "inline";
    this.size = "medium";
    this.offset = {
      top: 0,
      left: 0
    };
    this._offset = void 0;
  }
  watchOffset() {
    this._offset = typeof this.offset === "string" ? JSON.parse(this.offset) : this.offset;
  }
  componentWillLoad() {
    this._offset = typeof this.offset === "string" ? JSON.parse(this.offset) : this.offset;
  }
  render() {
    return h(Host, {
      key: "b9ef13141200a48ffb4c6b4e608d6b72461ab28a",
      class: "bh-spinner"
    }, h("div", {
      key: "dd3ba157e71651ce6ac3fd0b4d38694bd0982a8b",
      class: `bh-spinner-container--${this.position}`,
      style: this.position === "float" ? {
        top: `${this._offset.top}px`,
        left: `${this._offset.left}px`
      } : {}
    }, h("div", {
      key: "987f4b0a7ca1a3835ddc7e8a8c79ae40154fb030",
      class: `bh-spinner-circle bh-spinner-size--${this.size}`
    })));
  }
  static get watchers() {
    return {
      "offset": ["watchOffset"]
    };
  }
};
BhSpinner.style = BhSpinnerStyle0;
export {
  BhSpinner as bh_spinner
};
//# sourceMappingURL=bh-spinner.entry-3QOW3U6T.js.map
