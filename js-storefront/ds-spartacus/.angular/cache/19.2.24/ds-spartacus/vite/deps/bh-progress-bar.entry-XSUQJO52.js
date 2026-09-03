import {
  Host,
  createEvent,
  h,
  registerInstance
} from "./chunk-5YQC5RSE.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-progress-bar.entry.js
var bhProgressBarCss = ".bh-progress-bar{width:100%;height:8px;position:relative;background-color:var(--color-fill-control-slider-background)}.bh-progress-bar.bh-progress-bar-size--large{height:12px}.bh-progress-bar.bh-progress-bar-size--medium{height:8px}.bh-progress-bar.bh-progress-bar-size--small{height:4px}.bh-progress-bar--indicator{height:100%;left:0;top:0;position:absolute;background-color:var(--color-fill-control-selected)}.text-size--large{font-size:14px;font-family:Poppins;line-height:38px;letter-spacing:-0.25px;font-weight:400;text-align:center;color:var(--color-text-common-secondary)}.text-size--medium{font-size:10px;font-family:Poppins;line-height:30px;letter-spacing:0.25px;font-weight:400;text-align:center;color:var(--color-text-common-secondary)}.text-size--small{font-size:8px;font-family:Poppins;line-height:22px;letter-spacing:0.25px;font-weight:400;text-align:center;color:var(--color-text-common-secondary)}";
var BhProgressBarStyle0 = bhProgressBarCss;
var BhProgressBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.progressComplete = createEvent(this, "progressComplete", 7);
    this.mode = "manual";
    this.size = "medium";
    this.progress = 0;
    this.automaticTimeout = 5e3;
    this.isInAutoProgress = false;
  }
  /**
   * Custom event to initiate the progress increment - only valid when the mode is set to "automatic"
   */
  beginIncrement() {
    if (this.mode !== "automatic") return;
    this.isInAutoProgress = true;
    this.progress = 98;
    setTimeout(() => {
      this.isInAutoProgress = false;
    }, this.automaticTimeout);
  }
  /**
   * Custom event to set the progress to 100%.
   */
  progressCompleteEvent() {
    if (this.isInAutoProgress) this.isInAutoProgress = false;
    this.progress = 100;
  }
  /**
   * Custom event to set the progress to 0%.
   */
  progressResetEvent() {
    if (this.isInAutoProgress) this.isInAutoProgress = false;
    this.progress = 0;
  }
  // Watchers
  watchProgress() {
    if (this.progress >= 100) {
      this.progressComplete.emit();
    }
  }
  render() {
    return h(Host, {
      key: "ba8038a0ec9ade1936a3f1b7ad46a19f2f3132db"
    }, h("div", {
      key: "756ab60b9e6464171f0ec1307f81d3655546d79b",
      class: `bh-progress-bar bh-progress-bar-size--${this.size}`
    }, h("div", {
      key: "71af52ddd93e802180a7911b860209a142b3534e",
      class: `bh-progress-bar--indicator motion--normal ${this.isInAutoProgress ? "in-progress" : ""}`,
      style: {
        width: `${this.progress >= 100 ? 100 : this.progress}%`,
        transitionDuration: `${this.isInAutoProgress ? `${this.automaticTimeout}ms` : ""}`
      }
    })));
  }
  static get watchers() {
    return {
      "progress": ["watchProgress"]
    };
  }
};
BhProgressBar.style = BhProgressBarStyle0;
export {
  BhProgressBar as bh_progress_bar
};
//# sourceMappingURL=bh-progress-bar.entry-XSUQJO52.js.map
