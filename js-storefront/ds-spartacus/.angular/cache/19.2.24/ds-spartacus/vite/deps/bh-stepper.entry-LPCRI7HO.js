import {
  getBreakpoint
} from "./chunk-2XYHRBAQ.js";
import "./chunk-XGCW5RY7.js";
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

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-stepper.entry.js
var bhStepperCss = ".bh-stepper--container.vertical{display:table}.bh-stepper--container.horizontal{display:flex;flex-wrap:wrap;margin-bottom:calc(-1 * var(--spacing-margin-small))}.bh-stepper--wrapper::-webkit-scrollbar{height:0;display:none}.bh-stepper--container.vertical .bh-stepper--stepper-item:not(:last-child){margin-bottom:var(--spacing-margin-small)}.bh-stepper--container.horizontal .bh-stepper--stepper-item:not(:last-child){margin-right:var(--spacing-margin-large)}.bh-stepper--stepper-item{display:flex;align-items:flex-start;outline:none}.bh-stepper--stepper-item:focus{box-shadow:var(--effect-drop-shadow-focus-primary)}.bh-stepper--stepper-item:focus:not(:focus-visible){box-shadow:none}.bh-stepper--container.horizontal .bh-stepper--stepper-item{margin-bottom:var(--spacing-margin-small)}.bh-stepper--stepper-label{padding-top:2px;padding-bottom:2px;margin-left:var(--spacing-margin-small);color:var(--color-text-common-secondary)}.bh-stepper--container.horizontal .bh-stepper--stepper-label{white-space:pre-wrap;max-width:250px}.bh-stepper--stepper-label.is-current-step{color:var(--color-text-common-primary)}.bh-stepper--stepper-label.is-selectable{cursor:pointer}.bh-stepper--stepper-label.is-selectable:hover,.bh-stepper--stepper-label.is-selectable:active{color:var(--color-text-common-primary)}@media (max-width: 599px){.bh-stepper--wrapper{width:100%;overflow-x:auto;scrollbar-width:none;margin:-2px -12px;padding:2px var(--spacing-padding-small)}.bh-stepper--container.horizontal{flex-wrap:nowrap;margin-bottom:0}.bh-stepper--container.horizontal .bh-stepper--stepper-item{margin-bottom:0}.bh-stepper--container.horizontal .bh-stepper--stepper-label{max-width:320px;white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis}.bh-stepper--stepper-item:last-child{width:100%}}";
var BhStepperStyle0 = bhStepperCss;
var BhStepper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this.stepClick = createEvent(this, "stepClick", 7);
    this.complete = createEvent(this, "complete", 7);
    this.mobileOuterGutter = 12;
    this.steps = void 0;
    this._steps = void 0;
    this.layout = "horizontal";
    this.current = 0;
    this.completedStep = -1;
    this.breakpoint = void 0;
    this.isReadyToEmitComplete = false;
  }
  watchSteps() {
    if (typeof this.steps === "string") {
      try {
        this._steps = JSON.parse(this.steps);
      } catch (_a) {
      }
    } else {
      this._steps = this.steps;
    }
  }
  updateCurrent(newValue, oldValue) {
    if (this.completedStep + 1 < this.current) {
      this.completedStep = this.current - 1;
    }
    if (this.breakpoint === "small" && this.current < this._steps.length) {
      const target = this.element__wrapper.querySelector(`.bh-stepper--stepper-item[data-key="${this._steps[this.current].key}"]`);
      SmoothHorizontalScrolling(this.element__wrapper, 200, target.offsetLeft - this.mobileOuterGutter - this.element__wrapper.scrollLeft, this.element__wrapper.scrollLeft);
    }
    if (newValue === this._steps.length) {
      this.isReadyToEmitComplete = true;
    }
    if (newValue < 0 || newValue > this._steps.length) {
      console.warn("Stepper current step input of " + newValue + " is not valid.");
      this.current = oldValue;
    }
    this.bhEventChange.emit({
      current: this.current,
      completed: this.completedStep
    });
    function SmoothHorizontalScrolling(e, time, amount, start) {
      var eAmt = amount / 100;
      var curTime = 0;
      var scrollCounter = 0;
      while (curTime <= time) {
        window.setTimeout(SHS_B, curTime, e, scrollCounter, eAmt, start);
        curTime += time / 100;
        scrollCounter++;
      }
    }
    function SHS_B(e, sc, eAmt, start) {
      e.scrollLeft = eAmt * sc + start;
    }
  }
  resetListener(event) {
    this.handleReset(event);
  }
  handleResize() {
    this.setBreakpoint();
  }
  setBreakpoint() {
    this.breakpoint = getBreakpoint();
    this.adjustLastItemPadding();
  }
  adjustLastItemPadding() {
    var _a, _b, _c;
    if (this._steps && ((_a = this._steps) === null || _a === void 0 ? void 0 : _a.length) <= 0) return;
    const target = (_b = this.element__wrapper) === null || _b === void 0 ? void 0 : _b.querySelector(`.bh-stepper--stepper-item[data-key="${this._steps && this._steps.length > 1 && this._steps[this._steps.length - 1] ? (_c = this._steps[this._steps.length - 1]) === null || _c === void 0 ? void 0 : _c.key : ""}"]`);
    if (target) target.style.paddingRight = this.breakpoint === "small" ? `${this.element__wrapper.clientWidth - parseInt(window.getComputedStyle(target, null).getPropertyValue("width").replace("px", "")) - this.mobileOuterGutter}px` : "0px";
  }
  handleStepperItemClick(index) {
    this.current = index;
    this.stepClick.emit(this.current);
  }
  handleReset(event) {
    this.current = event.detail ? event.detail : 0;
    this.completedStep = event.detail ? event.detail - 1 : -1;
  }
  componentWillLoad() {
    if (typeof this.steps === "string") {
      try {
        this._steps = JSON.parse(this.steps);
      } catch (_a) {
      }
    } else {
      this._steps = this.steps;
    }
  }
  componentDidRender() {
    this.setBreakpoint();
    if (this.isReadyToEmitComplete) {
      setTimeout(() => this.complete.emit());
      this.isReadyToEmitComplete = false;
    }
  }
  render() {
    const prefix = this.host.tagName.toLowerCase().replace(components.stepper.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix);
    return h(Host, {
      key: "f0f2fa9c5b52ce8d051d3713e39eb0affcd2efd8",
      class: "bh-stepper"
    }, h("div", {
      key: "4a73b84b33b209ccf3fd695a7f9c83a12188a467",
      class: "bh-stepper--wrapper",
      ref: (el) => this.element__wrapper = el
    }, this._steps && h("div", {
      class: `bh-stepper--container ${this.breakpoint === "small" ? "horizontal" : this.layout}`
    }, this._steps.map((step, index) => {
      return h("div", {
        class: "bh-stepper--stepper-item",
        "data-key": step.key,
        onClick: () => {
          if (index <= this.completedStep + 1) {
            this.handleStepperItemClick(index);
          }
        },
        onKeyDown: (event) => {
          if ((event.code === "Enter" || event.code === "Space") && index <= this.completedStep + 1) {
            this.handleStepperItemClick(index);
          }
        },
        tabIndex: index <= this.completedStep + 1 ? 0 : -1
      }, h(Components.badge, {
        position: "standalone",
        label: `${index + 1}`,
        theme: index <= this.completedStep + 1 ? "success" : "neutral",
        icon: `${index <= this.completedStep ? "check" : ""}`,
        type: `${index <= this.completedStep ? "solid" : "outlined"}`
      }), h("span", {
        class: `bh-stepper--stepper-label typography--subtitle-small motion--normal ${index === this.current || index === this._steps.length - 1 && this.current >= this._steps.length - 1 ? "is-current-step" : ""} ${index <= this.completedStep + 1 ? "is-selectable" : ""}`
      }, step.label));
    }))));
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "steps": ["watchSteps"],
      "current": ["updateCurrent"]
    };
  }
};
BhStepper.style = BhStepperStyle0;
export {
  BhStepper as bh_stepper
};
//# sourceMappingURL=bh-stepper.entry-LPCRI7HO.js.map
