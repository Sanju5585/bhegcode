import {
  components,
  defaultPrefix,
  generateComponentLiteralWithPrefix
} from "./chunk-XU5S37NP.js";
import {
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-5YQC5RSE.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-custom-time-picker.entry.js
var bhCustomTimePickerScss = ".time-picker{\n    position: relative;\n    color:  var(--color-text-common-primary);\n\n    .lable{\n        padding-bottom: 2px;\n    }\n\n    .input-container {\n        border: 1px solid var(--color-border-form-default);\n        border-radius: 4px;\n        padding: 0 10px;\n        max-width: 132px;\n        min-width: 112px;\n    \n        &.input-container-active {\n            border-color: var(--color-border-form-focused) !important;\n            box-shadow: var(--effect-drop-shadow-focus-primary);\n        }\n\n        .custom-time-input {\n            width: 20px;\n            height: 30px;\n            border: none;\n            outline: none;\n            -moz-appearance: textfield;\n            appearance: textfield;\n            text-align: center;\n            background-color: transparent;\n            color: var(--color-text-common-primary) !important;\n        \n            &:focus {\n                color: transparent;\n                text-shadow: 0 0 0 rgba(3, 27, 78, 1);\n            }\n        \n            &::-webkit-outer-spin-button,\n            &::-webkit-inner-spin-button {\n                -webkit-appearance: none;\n                margin: 0;\n            }\n        \n            &::-moz-selection,\n            &::selection {\n                background: transparent;\n            }\n        }\n        \n        .time-icon {\n            cursor: pointer;\n            display: inline-flex;\n            justify-content: center;\n            align-items: center;\n            top: 4px;\n            position: relative;\n            padding-left: 4px;\n        }\n    }\n\n    .dropdown {\n        position: absolute;\n        top: 100%;\n        left: 0;\n        margin-top: 4px;\n        display: flex;\n        background:var(--color-fill-common-primary);\n        border: 1px solid #ccc;\n        padding: 6px;\n        z-index: 100;\n        max-height: 180px;\n\n        .time-picker-container {\n            width: 40px;\n            height: 180px;\n            overflow-y: scroll;\n            scrollbar-width: none;\n        \n            .time-picker-item {\n                cursor: pointer;\n                height: 30px;\n                font-size: 14px;\n                font-weight: 400;\n                line-height: 30px;\n                color: var(--color-text-common-secondary);\n                display: flex;\n                align-items: center;\n                justify-content: center;\n        \n                &.selected {\n                    background-color: var(--color-fill-menu-selected) !important;\n                    color: var(--color-text-common-primary) !important;\n                }\n            }\n        }\n    \n        select {\n            font-size: 16px;\n            padding: 4px;\n        }\n    }\n}\n.bh-timepicker-label {\n    color: var(--color-text-common-primary);\n}\n.bh-timepicker-label-value {\n    color: var(--color-text-common-secondary);\n}\n";
var BhCustomTimePickerStyle0 = bhCustomTimePickerScss;
var BhCustomTimePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selectedTime = createEvent(this, "selectedTime", 7);
    this.itemHeight = 30;
    this.realHours = Array.from({
      length: 12
    }, (_, i) => (i + 1).toString().padStart(2, "0"));
    this.realMinsSeconds = Array.from({
      length: 60
    }, (_, i) => i.toString().padStart(2, "0"));
    this.handleClickOutside = (event) => {
      if (!this.host.contains(event.target) && this.isOpen) {
        this.isOpen = false;
        this.selectedTime.emit({
          hour: this.hour,
          minute: this.minute,
          seconds: this.seconds,
          meridiem: this.format === "12" ? this.meridiem : "",
          formattedTime: this.format === "12" ? `${this.hour.toString().padStart(2, "0")}:${this.minute.toString().padStart(2, "0")}:${this.seconds.toString().padStart(2, "0")} ${this.meridiem}` : `${this.hour.toString().padStart(2, "0")}:${this.minute.toString().padStart(2, "0")}:${this.seconds.toString().padStart(2, "0")}`
        });
      }
    };
    this.toggleDropdown = () => {
      this.isOpen = !this.isOpen;
      setTimeout(() => {
        this.setView();
      }, 0);
    };
    this.setView = () => {
      if (this.scrollHourContainer) {
        const hourIndex = this.hours.findIndex((hr) => this.hour === parseInt(hr));
        this.scrollHourContainer.scrollTop = hourIndex * this.itemHeight;
      }
      if (this.scrollMinuteContainer) {
        const minIndex = this.minsSeconds.findIndex((min) => this.minute === parseInt(min));
        this.scrollMinuteContainer.scrollTop = minIndex * this.itemHeight;
      }
      if (this.scrollSecondsContainer) {
        const secondsIndex = this.minsSeconds.findIndex((seconds) => this.seconds === parseInt(seconds));
        this.scrollSecondsContainer.scrollTop = secondsIndex * this.itemHeight;
      }
    };
    this.setHour = (value) => {
      this.hour = parseInt(value);
      this.parseInput();
    };
    this.setMinute = (value) => {
      this.minute = parseInt(value);
      this.parseInput();
    };
    this.setSeconds = (value) => {
      this.seconds = parseInt(value);
      this.parseInput();
    };
    this.setmeridiem = (value) => {
      this.meridiem = value;
      this.parseInput();
    };
    this.parseInput = () => {
      const format = this.format === "12" ? ` ${this.meridiem}` : "";
      let val = `${this.hour}:${this.minute}:${this.seconds}${format}`;
      const match24 = /^([01]?\d|2[0-3]):([0-5]?\d):([0-5]?\d)$/;
      const match12 = /^([01]?\d|1[0-2]):([0-5]?\d):([0-5]?\d)\s*(AM|PM)$/i;
      let isValid = true;
      if (this.format === "12" && match12.test(val)) {
        const [, h2, m, s, ap] = val.match(match12);
        this.hour = parseInt(h2);
        this.minute = parseInt(m);
        this.seconds = parseInt(s);
        this.meridiem = ap.toUpperCase();
      } else if (this.format === "24" && match24.test(val)) {
        const [, h2, m, s] = val.match(match24);
        this.hour = parseInt(h2);
        this.minute = parseInt(m);
        this.seconds = parseInt(s);
      } else {
        isValid = false;
      }
      this.isValid = isValid;
    };
    this.handleTimeScroll = (element, arr) => {
      const scrollTop = (element === null || element === void 0 ? void 0 : element.scrollTop) || 0;
      const maxScroll = (arr.length + 4) * this.itemHeight;
      const minScroll = 0;
      if (scrollTop >= maxScroll) {
        element.scrollTop = 6 * this.itemHeight;
      } else if (scrollTop <= minScroll) {
        element.scrollTop = (arr.length + 6) * this.itemHeight;
      }
    };
    this.onHourInputKeyDown = (e) => {
      if (this.format === "12") {
        this.handleHourInput(e, 12, 1);
      } else if (this.format === "24") {
        this.handleHourInput(e, 23, 2);
      } else {
        this.handleOtherEvents(e, "hour", 12);
      }
    };
    this.onMinSecKeydown = (e, timeKey, inputElement) => {
      this.handleMinSecInput(e, timeKey, inputElement);
    };
    this.handleOtherEvents = (e, timeKey, limit) => {
      if (e.key === "ArrowDown") {
        this[timeKey] = this[timeKey] === 0 ? limit : this[timeKey] - 1;
        this.setView();
        return;
      }
      if (e.key === "ArrowUp") {
        this[timeKey] = this[timeKey] === limit ? 0 : this[timeKey] + 1;
        this.setView();
        return;
      }
      if (e.key !== "Tab") {
        e.preventDefault();
      }
    };
    this.format = "12";
    this.isOpen = false;
    this.time = "00:00:00";
    this.displaySeconds = void 0;
    this.label = void 0;
    this.labelvalue = void 0;
    this.hour = 1;
    this.minute = 0;
    this.seconds = 0;
    this.meridiem = "AM";
    this.isValid = true;
    this.hours = [];
    this.minsSeconds = [];
  }
  /**
   * An event that is emitted when the time prop changes.
   * It updates the hour, minute, seconds, and meridiem based on the new time value.
   */
  timeChanged(newValue) {
    if (newValue instanceof Date) {
      this.hour = newValue.getHours();
      if (this.format === "12") {
        this.hour = this.hour > 12 ? this.hour - 12 : this.hour;
      }
      this.minute = newValue.getMinutes();
      this.seconds = newValue.getSeconds();
      this.meridiem = newValue.getHours() >= 12 ? "PM" : "AM";
    } else if (typeof newValue === "string") {
      const [time, meridiem] = newValue.split(" ");
      const [h2, m, s] = time.split(":");
      this.hour = parseInt(h2);
      this.minute = parseInt(m);
      this.seconds = parseInt(s);
      this.meridiem = meridiem ? meridiem.toUpperCase() : "";
    }
    if (!this.displaySeconds) {
      this.seconds = 0;
    }
  }
  /**
   * Handles keyboard input events.
   * It also emits the given time input.
   */
  handleKeyboardEvents(e) {
    if (this.host.contains(e.target)) {
      this.selectedTime.emit({
        hour: this.hour,
        minute: this.minute,
        seconds: this.seconds,
        meridiem: this.format === "12" ? this.meridiem : "",
        formattedTime: this.format === "12" ? `${this.hour.toString().padStart(2, "0")}:${this.minute.toString().padStart(2, "0")}:${this.seconds.toString().padStart(2, "0")} ${this.meridiem}` : `${this.hour.toString().padStart(2, "0")}:${this.minute.toString().padStart(2, "0")}:${this.seconds.toString().padStart(2, "0")}`
      });
    }
  }
  /**
   * Lifecycle method that sets up the event listener for clicks outside the component.
   * It also sets the initial view of the time picker based on the selected time.
   */
  connectedCallback() {
    document.addEventListener("click", this.handleClickOutside);
  }
  /**
   * Lifecycle method that removes the event listener for clicks outside the component.
   * This is called when the component is disconnected from the DOM.
   * This helps prevent memory leaks and ensures that the event listener is not active when the component is no longer in use.
   * @returns {void}
   */
  disconnectedCallback() {
    document.removeEventListener("click", this.handleClickOutside);
  }
  /**
   * Lifecycle method that initializes the component.
   * It sets up the hours and minutes/seconds arrays based on the selected format (12 or 24-hour).
   * This method is called when the component is about to be loaded into the DOM.
   * It prepares the time picker by generating the lists of hours and minutes/seconds based on the selected format.
   * 	* @returns {void}
   * @memberof BhCustomTimePicker
   * @method componentWillLoad
   * This method is called before the component is rendered.
   * It initializes the hours and minutes/seconds arrays based on the selected format (12 or 24-hour).
   * It also sets the initial time based on the provided time prop.
   * @private
   */
  componentWillLoad() {
    if (+this.format === 24) {
      this.realHours = Array.from({
        length: +this.format
      }, (_, i) => i.toString().padStart(2, "0"));
    }
    this.hours = [...this.realHours.slice(-6), ...this.realHours, ...this.realHours.slice(0, 6)];
    this.minsSeconds = [...this.realMinsSeconds.slice(-6), ...this.realMinsSeconds, ...this.realMinsSeconds.slice(0, 6)];
    this.timeChanged(this.time);
  }
  /**
   * Handles the keydown event for the hour input field.
   * It allows numeric input and handles arrow keys for incrementing or decrementing the hour value.
   * This method is called when the user presses a key while focused on the hour input field.
   * It checks if the pressed key is a number and updates the hour value accordingly.
   * It also handles arrow keys for incrementing or decrementing the hour value.
   * @param {KeyboardEvent} e - The keyboard event triggered by the user.
   * @param {number} maxHour - The maximum hour value allowed (12 for 12-hour format, 23 for 24-hour format).
   * @param {number} minFocusValue - The minimum value to focus on the next input (1 for 12-hour format, 2 for 24-hour format).
   * @return {void}
   * @private
   */
  handleHourInput(e, maxHour, minFocusValue) {
    if (!isNaN(Number(e.key)) && !["ArrowDown", "ArrowUp", "Tab"].includes(e.key)) {
      const input = e.target;
      const value = +(input.value + e.key);
      e.preventDefault();
      if (value > maxHour) {
        this.hour = +e.key;
      } else {
        this.hour = value;
      }
      this.parseInput();
      this.setView();
      if (this.hour > minFocusValue) {
        this.minuteInputElement.focus();
      }
      return;
    }
    this.handleOtherEvents(e, "hour", maxHour);
  }
  /**
   * Handles the keydown event for the minute and seconds input fields.
   * It allows numeric input and handles arrow keys for incrementing or decrementing the minute or seconds value.
   * This method is called when the user presses a key while focused on the minute or seconds input field.
   * It checks if the pressed key is a number and updates the minute or seconds value accordingly.
   * It also handles arrow keys for incrementing or decrementing the minute or seconds value.
   * @param {KeyboardEvent} e - The keyboard event triggered by the user.
   * @param {string} timeKey - The key representing the time value to be updated ('minute' or 'seconds').
   * @param {string} inputElement - The name of the input element to be focused after updating the time value.
   * @return {void}
   * @private
   */
  handleMinSecInput(e, timeKey, inputElement) {
    var _a;
    if (!isNaN(Number(e.key)) && !["ArrowDown", "ArrowUp", "Tab"].includes(e.key)) {
      const input = e.target;
      const value = +(input.value + e.key);
      e.preventDefault();
      if (value > 59) {
        this[timeKey] = +e.key;
      } else {
        this[timeKey] = value;
      }
      this.parseInput();
      this.setView();
      if (this[timeKey] > 5) {
        (_a = this.formatInputElement) === null || _a === void 0 ? void 0 : _a.focus();
        this[inputElement].blur();
      }
      return;
    }
    this.handleOtherEvents(e, timeKey, 59);
  }
  /**
   * Renders the custom time picker component.
   * It includes input fields for hour, minute, seconds (if enabled), and meridiem (if 12-hour format).
   * It also includes a dropdown for selecting time values and handles user interactions.
   * @returns {JSX.Element} The rendered JSX for the custom time picker component.
   * @private
   * @memberof BhCustomTimePicker
   * This method is responsible for rendering the component's UI.
   * It creates the input fields for hour, minute, seconds, and meridiem (if applicable).
   * It also generates the dropdown for selecting time values and handles user interactions such as clicks and key presses.
   * @method render
   * @returns {JSX.Element} The rendered JSX for the custom time picker component.
   */
  render() {
    const prefix = this.host.tagName.toLowerCase().replace(components.customTimePicker.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
    return h("div", {
      key: "8dc92e3e5a424d892be46fa4efa3d84ba9c8478a",
      class: "time-picker"
    }, h("div", {
      key: "41776a1b6d3904b3e31ef2fb9fc673c044946953",
      class: "typography--label-small lable"
    }, h("span", {
      key: "d242e8217da515b2b85d06817d525bee05dcb169",
      class: "typography--label-small bh-timepicker-label"
    }, this.label, ": ", h("span", {
      key: "0303b2307b8e908768de185f6d8cf3056458df18",
      class: "bh-timepicker-label-value"
    }, this.labelvalue))), h("div", {
      key: "6145b10569ab84b5041b6d47764756cf10af39ec",
      class: `input-container ${this.isOpen ? "input-container-active" : ""}`
    }, h(Components.icon, {
      key: "fca948c748470f60c2d31425fb484879eb19710b",
      class: "time-icon",
      icon: "access_time",
      size: "small",
      onClick: this.toggleDropdown
    }), h("input", {
      key: "a681a248e10639bc0a01ef7c4704262eb353d759",
      class: "custom-time-input",
      ref: (el) => this.maxInputElement = el,
      type: "text",
      inputMode: "numeric",
      pattern: "\\d*",
      value: this.hour.toString().padStart(2, "0"),
      onFocus: () => {
        this.maxInputElement.setSelectionRange(0, 2);
      },
      onKeyDown: (e) => {
        this.onHourInputKeyDown(e);
        this.handleKeyboardEvents(e);
      }
    }), ":", h("input", {
      key: "ce8698877decfcea8d7e9173dd2f2393df315758",
      ref: (el) => this.minuteInputElement = el,
      class: "custom-time-input",
      type: "text",
      inputmode: "numeric",
      pattern: "\\d*",
      value: this.minute.toString().padStart(2, "0"),
      onFocus: () => {
        this.minuteInputElement.setSelectionRange(0, 2);
      },
      onKeyDown: (e) => {
        this.onMinSecKeydown(e, "minute", "minuteInputElement");
        this.handleKeyboardEvents(e);
      }
    }), " ", this.displaySeconds && h("span", null, ":", h("input", {
      ref: (el) => this.secondsInputElement = el,
      class: "custom-time-input",
      type: "text",
      inputmode: "numeric",
      pattern: "\\d*",
      value: this.seconds.toString().padStart(2, "0"),
      onFocus: () => {
        this.secondsInputElement.setSelectionRange(0, 2);
      },
      onKeyDown: (e) => {
        this.onMinSecKeydown(e, "seconds", "secondsInputElement");
        this.handleKeyboardEvents(e);
      }
    })), this.format === "12" && h("input", {
      ref: (el) => this.formatInputElement = el,
      class: "custom-time-input",
      type: "text",
      readonly: true,
      value: this.meridiem,
      onKeyDown: (e) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          this.meridiem = this.meridiem === "AM" ? "PM" : "AM";
          this.parseInput();
          this.handleKeyboardEvents(e);
        }
      }
    })), !this.isValid && h("div", {
      class: "error-message"
    }, "Invalid time format"), this.isOpen && h("div", {
      class: "dropdown typography--body-medium"
    }, h("div", {
      class: "time-picker-container hour-column",
      ref: (el) => this.scrollHourContainer = el,
      onScroll: () => this.handleTimeScroll(this.scrollHourContainer, this.realHours)
    }, this.hours.map((hour) => h("div", {
      onClick: (e) => {
        this.setHour(hour);
        this.handleKeyboardEvents(e);
      },
      class: this.hour === parseInt(hour) ? "time-picker-item selected" : "time-picker-item"
    }, hour))), h("div", {
      class: "time-picker-container minute-column",
      ref: (el) => this.scrollMinuteContainer = el,
      onScroll: () => this.handleTimeScroll(this.scrollMinuteContainer, this.realMinsSeconds)
    }, this.minsSeconds.map((min) => h("div", {
      class: this.minute === parseInt(min) ? "time-picker-item selected" : "time-picker-item",
      onClick: (e) => {
        this.setMinute(min);
        this.handleKeyboardEvents(e);
      }
    }, min))), this.displaySeconds && h("div", {
      class: "time-picker-container seconds-column",
      ref: (el) => this.scrollSecondsContainer = el,
      onScroll: () => this.handleTimeScroll(this.scrollSecondsContainer, this.realMinsSeconds)
    }, this.minsSeconds.map((seconds) => h("div", {
      class: this.seconds === parseInt(seconds) ? "time-picker-item selected" : "time-picker-item",
      onClick: (e) => {
        this.setSeconds(seconds);
        this.handleKeyboardEvents(e);
      }
    }, seconds))), this.format === "12" && h("div", {
      class: "time-picker-container meridiem-column"
    }, h("div", {
      class: this.meridiem === "AM" ? "time-picker-item selected" : "time-picker-item",
      onClick: (e) => {
        this.setmeridiem("AM");
        this.handleKeyboardEvents(e);
      }
    }, "AM"), h("div", {
      class: this.meridiem === "PM" ? "time-picker-item selected" : "time-picker-item",
      onClick: (e) => {
        this.setmeridiem("PM");
        this.handleKeyboardEvents(e);
      }
    }, "PM"))));
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "time": ["timeChanged"]
    };
  }
};
BhCustomTimePicker.style = BhCustomTimePickerStyle0;
export {
  BhCustomTimePicker as bh_custom_time_picker
};
//# sourceMappingURL=bh-custom-time-picker.entry-AWEKS53M.js.map
