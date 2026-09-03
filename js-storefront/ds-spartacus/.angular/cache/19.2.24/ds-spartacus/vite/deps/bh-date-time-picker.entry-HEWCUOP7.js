import {
  getBreakpoint
} from "./chunk-2XYHRBAQ.js";
import "./chunk-XGCW5RY7.js";
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

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-date-time-picker.entry.js
var bhDateTimePickerCss = '.bh-date-time-picker__container{display:flex}bh-date-time-picker[width="fluid"] .bh-date-time-picker__container{flex-direction:row}bh-date-time-picker[width="fluid"] .bh-date-time-picker__container .bh-date-time-picker__date-picker,bh-date-time-picker[width="fluid"] .bh-date-time-picker__container .bh-date-time-picker__time-picker{flex:1}.bh-date-time-picker__date-picker{margin-right:var(--spacing-margin-xxsmall)}.bh-date-time-picker__time-picker{margin-left:var(--spacing-margin-xxsmall)}@media (max-width: 599px){.bh-date-time-picker__date-picker{width:50%}.bh-date-time-picker__time-picker{width:50%}}';
var BhDateTimePickerStyle0 = bhDateTimePickerCss;
var BhDateTimePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this.timeValue = "";
    this.id = void 0;
    this.dateLabel = "Date";
    this.timeLabel = "Time";
    this.handleNegativeTimezone = false;
    this.width = "medium";
    this.disableHelper = false;
    this.value = void 0;
    this._value = void 0;
    this.timeFormat = void 0;
    this.isReadOnly = false;
    this.minValue = void 0;
    this.maxValue = void 0;
    this.isInvalid = false;
    this.isRequired = false;
    this.dateErrorMessage = "Invalid date";
    this.timeErrorMessage = "Invalid time";
    this.reset = false;
    this.viewport = void 0;
  }
  watchValue() {
    this.parseDateTime();
  }
  resetnewDate() {
    if (this.reset) {
      this.value = this._value;
      this.value.date = "";
      this.value.time = "";
      this._value = typeof this.value === "string" ? JSON.parse(this.value) : this.value;
      this.timeValue = "";
    } else {
      this._value = typeof this.value === "string" ? JSON.parse(this.value) : this.value;
      this.timeValue = this._value.time;
    }
  }
  handleResize() {
    this.setViewport();
  }
  setViewport() {
    const bp = getBreakpoint();
    if (this.viewport !== bp) {
      this.viewport = bp;
    }
  }
  componentWillLoad() {
    this.setViewport();
    this.parseDateTime();
  }
  parseDateTime() {
    if (this.value) {
      this._value = typeof this.value === "string" ? JSON.parse(this.value) : this.value;
    }
  }
  componentDidLoad() {
    customElements.whenDefined("vaadin-date-picker").then(() => {
      const datePicker = this.el__container.querySelector(".bh-date-time-picker__date-picker");
      datePicker.addEventListener("value-change", (e) => {
        this.value = Object.assign({}, this._value);
        if (e.target.value) {
          this._value.date = new Date(e.target.value);
          this.value.date = new Date(e.target.value);
        } else {
          this._value.date = e.target.value;
          this.value.date = e.target.value;
        }
        this.bhEventChange.emit(this.value);
      });
    });
    customElements.whenDefined("vaadin-time-picker").then(() => {
      const timePicker = this.el__container.querySelector(".bh-date-time-picker__time-picker");
      timePicker.addEventListener("change", (e) => {
        this.value = Object.assign({}, this._value);
        this._value.time = e.target.value;
        this.value.time = e.target.value;
        this.bhEventChange.emit(this._value);
      });
    });
  }
  render() {
    var _a, _b;
    const prefix = this.host.tagName.toLowerCase().replace(components.dateTimePicker.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
    return h(Host, {
      key: "74f5791d63a75148f26feb646076d9a065fefa88",
      id: this.id
    }, h("div", {
      key: "fd95d95acaa68a4c1d0a5ffad9bb33e10d9977c9",
      ref: (el) => {
        this.el__container = el;
      },
      class: "bh-date-time-picker__container"
    }, h(Components.datePicker, {
      key: "cff1dd25e9f3fe5e3ff4e34957cd27a7233acb3e",
      id: `${this.id}`,
      value: (_a = this._value) === null || _a === void 0 ? void 0 : _a.date,
      class: "bh-date-time-picker__date-picker",
      label: this.dateLabel,
      width: this.width,
      isReadOnly: this.isReadOnly,
      handleNegativeTimezone: this.handleNegativeTimezone,
      isInvalid: this.isInvalid,
      isRequired: this.isRequired,
      minValue: this.minValue,
      maxValue: this.maxValue,
      reset: this.reset,
      "disable-helper": this.disableHelper
    }), h(Components.timePicker, {
      key: "8f834f6691d080548244ae3adf48478f31df1f81",
      id: `${this.id}`,
      value: (_b = this._value) === null || _b === void 0 ? void 0 : _b.time,
      class: "bh-date-time-picker__time-picker",
      label: this.timeLabel,
      width: this.width,
      format: this.timeFormat,
      isReadOnly: this.isReadOnly,
      isInvalid: this.isInvalid,
      isRequired: this.isRequired,
      "disable-helper": this.disableHelper
    })));
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "value": ["watchValue"],
      "reset": ["resetnewDate"]
    };
  }
};
BhDateTimePicker.style = BhDateTimePickerStyle0;
export {
  BhDateTimePicker as bh_date_time_picker
};
//# sourceMappingURL=bh-date-time-picker.entry-HEWCUOP7.js.map
