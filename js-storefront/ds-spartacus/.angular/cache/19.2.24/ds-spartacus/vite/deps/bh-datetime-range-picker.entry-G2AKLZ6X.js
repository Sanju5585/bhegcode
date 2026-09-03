import {
  hooks
} from "./chunk-HFZDUW4C.js";
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

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-datetime-range-picker.entry.js
var bhDatetimeRangePickerScss = ".bh-datetime-range-picker {\n    .bh-text-input__container {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        position: relative;\n    }\n\n    .activeInput {\n        outline: none;\n        border-color: var(--color-border-form-focused);\n        box-shadow: var(--effect-drop-shadow-focus-primary);\n        border-radius: var(--effect-border-radius-medium);\n    }\n\n    .bh-text-input__start-icon {\n        padding-left: var(--spacing-padding-small);\n        align-self: center;\n        color: inherit;\n        display: flex;\n        position: relative;\n        margin-right: -30px;\n    }\n\n    .helper-text {\n        position: absolute;\n    }\n}\n\n.bh-datetime-range-picker ::selection,\n.bh-datetime-range-picker input::selection {\n    background: #339af0;\n    color: #fff;\n}\n\n.required-asterisk {\n    color: #e53935;\n    margin-left: 2px;\n    font-size: 1em;\n    vertical-align: middle;\n}\n\n.bh-text-input__input--invalid {\n    border: 1px solid var(--color-border-form-error) !important;\n    background-color: var(--color-fill-form-error) !important;\n    text-overflow: ellipsis;\n}\n\n.bh-text-input__input--fluid {\n    max-width: unset !important;\n    min-width: unset !important;\n}\n\n.bh-text-input__input.small {\n    height: unset !important;\n    padding: calc(var(--spacing-padding-xsmall) - 1px) var(--spacing-padding-small) ;\n    font-size: var(--font-size-text-small);\n}\n.bh-vertical-menu {\n    .bh-menu__ul {\n        padding: var(--spacing-padding-xsmall);\n    }\n}\n\n.bh-text-input__input {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.bh-text-input__input--invalid::placeholder { \n  color: var(--color-text-label-error) ;\n}\n\n.bh-text-input__start-icon--invalid i {\n    color: var(--color-text-label-error);\n}\n\n.date-picker-presets .bh-menu__li  {\n    border-radius: var(--effect-border-radius-medium);   \n    padding: var(--spacing-padding-xsmall);\n    color: var(--color-text-link-primary-default);\n}\n.calendar-header__labelleft\n{\n    padding-right: var(--spacing-padding-small);\n}\n\n.calendar-header__labelright\n{\n    padding-left: var(--spacing-padding-small);\n}\n\n.hidden{\n    display: none;\n}\n/*\nadding below css to work for tabularlist\n\n*/\n  .picker-popup {\n        position: absolute;\n        z-index: 1000;\n        background: var(--color-fill-common-secondary);\n        border-radius: var(--effect-border-radius-medium);\n        border-style: solid;\n        border-width: var(--effect-border-width-regular);\n        border-color: var(--color-border-common-primary);\n        display: flex;\n        flex-direction: column;\n    }\n\n    .picker-body {\n        border-bottom: var(--effect-border-width-regular) solid var(--color-border-common-primary);\n\n        .picker-main {\n            min-width: 306px;\n            width: 100%;\n        }\n        \n    }\n\n    .disable-time-picker {\n        pointer-events: none;\n        opacity: var(--effect-base-opacity-40);\n    }\n\n    .presets {\n        display: flex;\n        flex-direction: column;\n        border-right: var(--effect-border-width-regular) solid var(--color-border-common-primary);\n        min-width: 126px;\n        button {\n            margin: var(--spacing-margin-xxsmall) 0;\n        }\n    }\n\n    .calendar-header {\n        display: flex;\n        justify-content: center;\n        padding: var(--spacing-padding-xxsmall) var(--spacing-padding-xsmall);\n        color: var(--color-text-common-primary);\n        align-items: center;\n    }\n\n    .day {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 36px;\n        //  width: 36px;\n        color: var(--color-text-common-secondary);\n        cursor: pointer;\n        text-align: center;\n\n        &.disabled {\n            color: var(--color-text-common-disabled);\n            cursor: not-allowed;\n        }\n\n        &.selectedStart:not(.selectedEnd) {\n            background-color: var(--color-fill-common-tertiary);\n            border-radius: 50% 0 0 50%;\n\n            .day-content {\n                height: 100%;\n                width: 100%;\n                align-content: center;\n                border-radius: unset;\n                border-top-left-radius: 60px;\n                border-bottom-left-radius: 60px;\n                clip-path: inset(0 0 0 0);\n                background-color: var(--color-fill-control-selected) !important;\n                color: var(--color-text-cta-primary);\n            }\n        }\n\n        &.selectedEnd:not(.selectedStart) {\n            background-color: var(--color-fill-common-tertiary);\n            border-radius: 50% 0 0 50%;\n\n            .day-content {\n                height: 100%;\n                width: 100%;\n                align-content: center;\n                border-radius: unset;\n                border-top-right-radius: 60px;\n                border-bottom-right-radius: 60px;\n                clip-path: inset(0 0 0 0);\n                background-color: var(--color-fill-control-selected) !important;\n                color: var(--color-text-cta-primary);\n            }\n        }\n\n        &.selectedEnd:not(.selectedStart) {\n            border-radius: 0 50% 50% 0;\n        }\n\n        &.selectedStart.selectedEnd,\n        &.selectedStart.selectedEnd .day-content {\n            .day-content {\n                height: 35px;\n                width: 35px;\n                align-content: center;\n                border-radius: 50%;\n                background-color: var(--color-fill-control-selected) !important;\n                color: var(--color-text-cta-primary);\n            }\n        }\n\n        &.inrange {\n            background-color: var(--color-fill-common-tertiary);\n        }\n    }\n\n    .today {\n        width: 35px;\n        height: 35px;\n        border: 1px solid var(--color-border-form-default);\n        background-color: transparent;\n        border-radius: 100px;\n        align-items: center;\n        justify-content: center;\n        display: flex\n    }\n\n    .day-headers {\n        // padding: 8px 3px 6px 3px;\n        padding: var(--spacing-padding-xsmall) var(--spacing-padding-xxsmall);\n        // background-color: var(--color-fill-common-primary);\n        color: var(--color-text-common-primary);\n        // border-top: var(--effect-border-width-regular) solid var(--color-border-common-primary);\n        // border-bottom: var(--effect-border-width-regular) solid var(--color-border-common-primary);\n        margin-bottom: var(--spacing-margin-xsmall);\n        background-color: var(--color-fill-common-primary);\n    }\n\n    .day-header {\n        display: inline-block;\n        width: 36px;\n        text-align: center;\n    }\n\n    .calendar-grid {\n        display: grid;\n        grid-template-columns: repeat(7, 1fr);\n        gap: 0px;\n        padding: var(--spacing-padding-xxsmall);\n    }\n\n    .day-container {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .month-grid,\n    .year-grid {\n        display: grid;\n        grid-template-columns: repeat(4, 1fr);\n        grid-gap: 10px;\n        color: var(--color-text-common-primary)\n    }\n\n    .month-cell,\n    .year-cell {\n        padding: var(--spacing-margin-xxsmall) var(--spacing-margin-xsmall);\n        background: var(--color-fill-common-primary);\n        cursor: pointer;\n        text-align: center;\n        color: var(--color-text-common-secondary);\n        border-radius: var(--effect-border-radius-medium);\n        height: 37px;\n        justify-content: center;\n        display: grid;\n        align-items: center;\n\n        &:hover {\n            background: var(--color-fill-control-selected-hover);\n            color:var(--color-text-common-inverse-primary);\n        }\n    }\n\n    .calendar-actions {\n        display: flex;\n        justify-content: flex-end;\n        gap: 10px;\n        padding: 8px 12px;\n        border-top: var(--effect-border-width-regular) solid var(--color-border-common-primary);\n        \n    }\n\n    .display-month {\n        display: inline-block !important;\n        background-color: var(--color-fill-common-secondary);\n        // width: 50px !important;\n        min-width: 75px;\n        text-align: center;\n        margin-right: var(--spacing-margin-small);\n        padding: var(--spacing-padding-xsmall);\n        border-radius: var(--effect-border-radius-medium);\n        color: var(--color-text-cta-secondary);\n        border: var(--effect-border-width-regular) solid var(--color-border-cta-secondary-default);\n    }\n\n    .display-year {\n        display: inline-block !important;\n        background-color: var(--color-fill-common-secondary);\n        width: 47px !important;\n        text-align: center;\n        padding: var(--spacing-padding-xsmall);\n        border-radius: var(--effect-border-radius-medium);\n        color: var(--color-text-cta-secondary);\n        border: var(--effect-border-width-regular) solid var(--color-border-cta-secondary-default);\n    }\n\n    .time-select {\n        margin-bottom: 10px;\n        display: flex;\n        justify-content: space-between;\n    }\n\n    .bh-text-input__input {\n        text-overflow: ellipsis;\n        box-sizing: border-box;\n        min-width: 219px;\n        max-width: 500px;\n        height: 44px;\n        padding: calc(var(--spacing-padding-small) - 1px) var(--spacing-padding-small);\n        margin-top: var(--spacing-margin-xxsmall);\n        margin-bottom: var(--spacing-margin-xxsmall);\n        border-radius: var(--effect-border-radius-medium);\n        border-style: solid;\n        border-width: var(--effect-border-width-regular);\n        border-color: var(--color-border-common-primary);\n        background-color: var(--color-fill-common-secondary);\n        color: var(--color-text-common-primary);\n        cursor: text;\n\n        &.rounded {\n            border-radius: 100px;\n        }\n\n        &:hover {\n            border-color: var(--color-border-form-hover);\n            cursor: text;\n        }\n\n        &:focus {\n            outline: none;\n            border-color: var(--color-border-form-focused);\n            box-shadow: var(--effect-drop-shadow-focus-primary);\n        }\n\n        &:focus:not(:focus-visible) {\n            outline: none;\n            border-color: unset;\n            box-shadow: none;\n        }\n    }\n\n    .double-arrow-left i {\n        transform: rotate(180deg);\n    }\n\n    .year-icon.left {\n        padding-right: var(--spacing-padding-small);\n    }\n\n    .year-icon.right {\n        padding-left: var(--spacing-padding-small);\n    }\n\n    .month-icon.disabled,\n    .year-icon.disabled {\n        cursor: not-allowed !important;\n    }\n\n    .navigation-icon.disabled {\n        pointer-events: none !important;\n\n        i {\n            color: var(--color-text-common-disabled);\n        }\n    }\n\n    .cursor-pointer {\n        cursor: pointer;\n    }\n\n    .date-picker-presets .bh-menu__container {\n        box-shadow: none !important;\n        width: unset !important;\n    }\n\n\n    .time-input {\n        width: 120px;\n        padding: 8px;\n        font-size: 16px;\n        border: 1px solid #ccc;\n\n        &.invalid {\n            border-color: var(--color-text-label-error)\n        }\n    }\n\n    .error-message {\n        display: flex;\n        color: var(--color-fill-control-error-supplemental);\n        font-size: var(--font-size-label-small);\n        margin-top: var(--spacing-margin-xxsmall);\n\n        bh-icon {\n            margin-right: var(--spacing-margin-xxsmall);\n        }\n    }\n\n    .picker-container {\n        width: 40px;\n        height: 180px;\n        overflow-y: scroll;\n        scrollbar-width: none;\n\n        .picker-item {\n            cursor: pointer;\n            height: 30px;\n            line-height: 30px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n\n            &.selected {\n                background-color: #4caf50 !important;\n            }\n        }\n    }\n\n    .bh-date-range-picker_start-end-label-section {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n    }\n\n    .bh-date-range-picker_start-end-label {\n        font-size: var(--font-size-text-small);\n        color: var(--color-text-common-secondary);\n        margin-right: var(--spacing-margin-xxsmall);\n        flex: 50%;\n    }\n\n    .time-picker-section {\n        padding: var(--spacing-padding-small) var(--spacing-padding-large);\n        border-top: var(--effect-border-width-regular) solid var(--color-border-common-primary);\n        display: flex;\n        justify-content: center;\n        .bh-date-range-picker_time-select {\n            display: inline-flex;\n        }\n    }\n\n    .bh-date-range-picker_start-end-label-value {\n        color: var(--color-text-common-primary);\n    }\n\n    .label-text {\n        color: var(--color-text-common-primary);\n    }";
var BhDatetimeRangePickerStyle0 = bhDatetimeRangePickerScss;
var BhDateTimeRangePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this.handleOutsideClick = (e) => {
      if (!this.host.contains(e.target)) {
        this.cancel();
      }
      this.updatePlaceholder();
      this.getSelectedPreset();
    };
    this.togglePicker = () => {
      this.showPicker = !this.showPicker;
      if (this.showPicker) {
        this.tempStart = this.selectedStart;
        this.tempEnd = this.selectedEnd;
        this.tempSelectedPreset = this.selectedPreset;
        if (this.selectedStartTimeValue) {
          this.startTimeValue = this.selectedStartTimeValue;
        } else {
          this.startTime = {
            hour: this.timeFormat === "24" ? "00" : "12",
            minute: "00",
            second: "00",
            meridiem: this.timeFormat === "24" ? "" : "AM"
          };
        }
        if (this.selectedEndTimeValue) {
          this.endTimeValue = this.selectedEndTimeValue;
        } else {
          this.endTime = {
            hour: this.timeFormat === "24" ? "23" : "11",
            minute: "59",
            second: "59",
            meridiem: this.timeFormat === "24" ? "" : "PM"
          };
        }
      }
      setTimeout(() => {
        this.styleMenu();
      }, 50);
    };
    this.minDate = void 0;
    this.maxDate = void 0;
    this.selectedRange = void 0;
    this.presets = void 0;
    this.startIcon = "date_range";
    this.label = "Label";
    this.helperText = "Helper text";
    this.placeholder = "Select date ";
    this.isDisabled = false;
    this.id = void 0;
    this.dateFormat = "DD/MM/YYYY";
    this.isSingleDatePicker = false;
    this.showSecondsInTimePicker = true;
    this.timeFormat = "12";
    this.showTimepicker = true;
    this.required = false;
    this.errorMessage = "Error message";
    this.startTimerLable = "From";
    this.fromtabularlist = false;
    this.endTimerLable = "To";
    this.isFluid = false;
    this.isSmall = false;
    this.applyLabel = "Apply";
    this.resetLabel = "Reset";
    this.showPicker = false;
    this.selectedStart = null;
    this.selectedEnd = null;
    this.tempStart = null;
    this.tempEnd = null;
    this.hoverDate = null;
    this.isInline = false;
    this.currentMonth = (/* @__PURE__ */ new Date()).getMonth();
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.currentYearGridStart = (/* @__PURE__ */ new Date()).getFullYear();
    this.showMonthGrid = false;
    this.showYearGrid = false;
    this.startTime = void 0;
    this.endTime = void 0;
    this.selectedDateValue = void 0;
    this.startTimeValue = void 0;
    this.endTimeValue = void 0;
    this.startTimeLabel = void 0;
    this.endTimeLabel = void 0;
    this.tempSelectedPreset = "";
    this.selectedPreset = "";
    this.selectedStartTimeValue = void 0;
    this.selectedEndTimeValue = void 0;
    this.touched = false;
    this.inputWidth = "219px";
    this._tooltip = false;
    this._tooltipMessage = "";
    this._custom_range_selected = false;
    this.inlineStyle = {};
  }
  /**
   * @description This will watch on currentYear value and update the calender as per the selected year.
   */
  handleYearChange(newValue) {
    this.currentYearGridStart = newValue;
  }
  /***/
  handleStartTimeChange(newValue) {
    if (newValue) {
      this.startTimeValue = newValue.hour + ":" + newValue.minute + (this.showSecondsInTimePicker ? ":" + newValue.second : "") + " " + newValue.meridiem;
    }
  }
  handleEndTimeChange(newValue) {
    if (newValue) {
      this.endTimeValue = newValue.hour + ":" + newValue.minute + (this.showSecondsInTimePicker ? ":" + newValue.second : "") + " " + newValue.meridiem;
    }
  }
  handleSelectedStartDateChange(newValue) {
    if (newValue) {
      this.startTimeLabel = `${this.startTimerLable} : ${hooks(this.tempStart).format(this.dateFormat)}`;
    } else {
      this.startTimeLabel = `${this.startTimerLable}`;
    }
  }
  handleSelectedEndDateChange(newValue) {
    if (newValue) {
      this.endTimeLabel = `${this.endTimerLable}: ${hooks(this.tempEnd).format(this.dateFormat)}`;
    } else {
      this.endTimeLabel = `${this.endTimerLable}`;
    }
  }
  handleSelectedPresetLabelChange(newValue) {
    if (newValue) {
      this.tempSelectedPreset = newValue;
    }
  }
  bhEventScroll(e) {
    var _a, _b;
    try {
      if (this.fromtabularlist) {
        this.showPicker = false;
      } else if (((_b = (_a = e.detail) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.initiator) === "tabularlist") {
        this.showPicker = false;
      } else {
        if (this.isInline) this.styleMenu();
      }
    } catch (err) {
      console.warn("Unable to locate the expected attributes. Please check the documentation and attach mandatory attributes");
    }
  }
  /**
   * @description Creates an array of preset objects from an array of config objects.
   * @param {Array<{ label: string; abbrevation: 'year' | 'month' | 'week' | 'day'; count: number }>} presetsConfig
   * @returns {Array<{ label: string; abbrevation: string; count: number; value: () => [Date, Date] }>}
   */
  createPresets(presetsConfig) {
    var _a;
    const customPreset = {
      label: "Custom range",
      abbrevation: "",
      count: 0,
      value: "custom_range",
      isSelected: false,
      timeRange: () => [null, null]
    };
    const processed = (_a = presetsConfig || []) === null || _a === void 0 ? void 0 : _a.map(({
      label,
      abbrevation,
      count
    }) => ({
      label,
      abbrevation,
      count,
      value: label.replace(/\s+/g, "").toLowerCase(),
      timeRange: () => {
        const end = /* @__PURE__ */ new Date();
        const start = /* @__PURE__ */ new Date();
        switch (abbrevation) {
          case "year":
            start.setFullYear(start.getFullYear() - count);
            break;
          case "month":
            start.setMonth(start.getMonth() - count);
            break;
          case "week":
            start.setDate(start.getDate() - 7 * count);
            break;
          case "day":
            start.setDate(start.getDate() - count);
            break;
        }
        start.setHours(0, 0, 0, 0);
        end.setHours(23, 59, 59, 999);
        return [start, end];
      }
    }));
    return [customPreset, ...processed];
  }
  /**
   * Called every time the component is connected to the DOM. When the component is first connected, this method is called before componentWillLoad.
   */
  connectedCallback() {
    document.addEventListener("click", this.handleOutsideClick);
  }
  /**
   * Called every time the component is disconnected from the DOM.
   * This method is called after the component has been removed from the DOM.
   */
  disconnectedCallback() {
    document.removeEventListener("click", this.handleOutsideClick);
    if (this.isInline && this.element__datetimerangePickerMenu && document.body.contains(this.element__datetimerangePickerMenu)) {
      document.body.removeChild(this.element__datetimerangePickerMenu);
    }
  }
  /**
   * Handles the selection of a day in the date picker.
   * - Constructs a date using the current year, current month (with optional offset), and the selected day.
   * - If the picker is in single-date mode, sets both start and end dates to the selected date.
   * - In range mode, validates the date against min/max constraints and updates the start/end dates accordingly.
   * - Ensures the selected range is ordered chronologically.
   * - Marks the selection as a custom range.
   *
   * @param {number} day - The day of the month to select.
   * @param {number} [monthOffset=0] - Optional offset to apply to the current month (e.g., for navigating months).
   */
  selectDay(day, monthOffset = 0) {
    const date = new Date(this.currentYear, this.currentMonth + monthOffset, day);
    if (this.isSingleDatePicker) {
      this.tempStart = date;
      this.tempEnd = date;
      this.tempSelectedPreset = "custom_range";
      return;
    }
    if (this.minDate && date < this.minDate || this.maxDate && date > this.maxDate) {
      return;
    }
    if (!this.tempStart || this.tempEnd) {
      this.tempStart = date;
      this.tempEnd = null;
    } else {
      if (date < this.tempStart) {
        this.tempEnd = this.tempStart;
        this.tempStart = date;
      } else {
        this.tempEnd = date;
      }
    }
    this.tempSelectedPreset = "custom_range";
    this._custom_range_selected = false;
  }
  /**
   * This method is called when the user clicks the cancel button.
   * It resets the tempStart and tempEnd states to the selectedStart and selectedEnd values,
   * effectively discarding any changes made during the current selection.
   */
  cancel() {
    this.tempStart = this.selectedStart;
    this.tempEnd = this.selectedEnd;
    this.currentMonth = this.selectedStart ? this.selectedStart.getMonth() : (/* @__PURE__ */ new Date()).getMonth();
    this.currentYear = this.selectedStart ? this.selectedStart.getFullYear() : (/* @__PURE__ */ new Date()).getFullYear();
    this.showPicker = false;
    this.showMonthGrid = false;
    this.showYearGrid = false;
  }
  /**
   * This method is called when the user clicks the reset button.
   * It resets the tempStart and tempEnd states to the selectedStart and selectedEnd values,
   * effectively discarding any changes made during the current selection.
   */
  reset() {
    this.selectedStart = null;
    this.selectedEnd = null;
    this.tempStart = null;
    this.tempEnd = null;
    this.selectedDateValue = "";
    this.startTime = {
      hour: this.timeFormat === "24" ? "00" : "12",
      minute: "00",
      second: "00",
      meridiem: this.timeFormat === "24" ? "" : "AM"
    };
    this.endTime = {
      hour: this.timeFormat === "24" ? "23" : "11",
      minute: "59",
      second: "59",
      meridiem: this.timeFormat === "24" ? "" : "PM"
    };
    this.selectedStartTimeValue = null;
    this.selectedEndTimeValue = null;
    this.tempSelectedPreset = "";
    this.selectedPreset = "";
    this.updatePlaceholder();
    this.bhEventChange.emit({
      type: "reset",
      startDate: null,
      endDate: null,
      startTime: null,
      endTime: null
    });
    this._tooltip = false;
  }
  /**
   * This method checks if a given date is within the selected range.
   * It considers the tempStart and tempEnd states to determine the range.
   * If only tempStart is set, it checks against hoverDate.
   * If both tempStart and tempEnd are set, it checks if the date falls between them.
   * @param {Date} date - The date to check.
   * @returns {boolean} - True if the date is within the range, false otherwise.
   */
  isInRange(date) {
    if (this.tempStart && !this.tempEnd && this.hoverDate) {
      const [start, end] = this.tempStart < this.hoverDate ? [this.tempStart, this.hoverDate] : [this.hoverDate, this.tempStart];
      return date > start && date <= end;
    }
    if (this.tempStart && this.tempEnd) {
      return date > this.tempStart && date < this.tempEnd;
    }
    return false;
  }
  /**
   * This method calculates the number of days in a given month of a given year.
   * It uses the Date object to determine the last day of the month.
   * @param {number} year - The year to check.
   * @param {number} month - The month to check (0-indexed, where 0 is January).
   * @returns {number} - The number of days in the specified month.
   */
  getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }
  /**
   * This method renders the day headers for the calendar.
   * It displays the days of the week from Sunday to Saturday.
   * @returns {JSX.Element} - The rendered day headers.
   */
  renderDayHeaders() {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return h("div", {
      class: "day-headers calendar-grid"
    }, daysOfWeek.map((day) => h("div", {
      class: "day-header typography--label-small"
    }, day)));
  }
  /**
   * This method renders the calendar grid for the selected month and year.
   */
  renderCalendar() {
    var _a, _b, _c, _d;
    const daysInMonth = this.getDaysInMonth(this.currentYear, this.currentMonth);
    const firstDayOfWeek = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const prevMonthDays = new Date(this.currentYear, this.currentMonth, 0).getDate();
    const cells = [];
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      cells.push(h("div", {
        class: "day disabled typography--body-medium"
      }, prevMonthDays - i));
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(this.currentYear, this.currentMonth, day);
      const dateStr = date.toDateString();
      const inRange = this.isInRange(date);
      const isOutOfBounds = this.minDate && date < this.minDate || this.maxDate && date > this.maxDate;
      cells.push(h("div", {
        class: {
          day: true,
          selectedStart: ((_a = this.tempStart) === null || _a === void 0 ? void 0 : _a.toDateString()) === dateStr || this.isSingleDatePicker && ((_b = this.tempStart) === null || _b === void 0 ? void 0 : _b.toDateString()) === dateStr,
          selectedEnd: ((_c = this.tempEnd) === null || _c === void 0 ? void 0 : _c.toDateString()) === dateStr || this.isSingleDatePicker && ((_d = this.tempStart) === null || _d === void 0 ? void 0 : _d.toDateString()) === dateStr,
          inrange: inRange,
          disabled: isOutOfBounds,
          "typography--body-medium": true
        },
        onClick: (e) => {
          e.stopPropagation();
          !isOutOfBounds && this.selectDay(day);
        },
        onTouchStart: () => this.isSingleDatePicker ? this.hoverDate = null : this.hoverDate = date,
        onMouseOver: () => this.isSingleDatePicker ? this.hoverDate = null : this.hoverDate = date
      }, h("div", {
        class: `day-content ${this.isToday(date) || ""}`
      }, day)));
    }
    for (let i = cells.length + 1; i <= 42; i++) {
      cells.push(h("div", {
        class: "day disabled typography--body-medium"
      }, i - daysInMonth - firstDayOfWeek));
    }
    return h("div", {
      class: "calendar-grid"
    }, cells);
  }
  /**
   * This method renders the month grid for selecting a month.
   * It displays all 12 months in a grid format.
   * @returns {JSX.Element} - The rendered month grid.
   */
  renderMonthGrid() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return h("div", {
      class: "month-grid"
    }, months.map((month, index) => h("div", {
      key: month,
      class: "month-cell typography--label-small",
      onClick: (e) => {
        e.stopPropagation();
        this.currentMonth = index;
        this.showMonthGrid = false;
      }
    }, month)));
  }
  /**
   * @param {boolean} prev - If true, navigates to the previous 5 years; if false, navigates to the next 5 years.
   * @returns {void}
   * @description This method is used to handle the year grid navigation.
   * It updates the currentYearGridStart state based on whether the user navigates to the previous or next 5 years.
   * If the year grid is not shown, it updates the currentYear state instead.
   */
  handleYearGrid(prev) {
    if (this.showYearGrid) {
      this.currentYearGridStart += prev ? -5 : 5;
      this.renderYearGrid();
    } else {
      this.currentYear += prev ? -1 : 1;
    }
  }
  /**
   * @param {Object} preset - The selected preset object containing a label and a value function.
   * @description This method is used to handle the click event on a preset date range.
   * It updates the tempStart and tempEnd states based on the selected preset.
   * It also updates the currentMonth and currentYear to the start date of the preset.
   */
  handlePresetClick(preset) {
    if (preset.value === "custom_range") {
      this.currentMonth = (/* @__PURE__ */ new Date()).getMonth();
      this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
      this.tempStart = /* @__PURE__ */ new Date();
      this.tempEnd = /* @__PURE__ */ new Date();
      this.tempSelectedPreset = "custom_range";
      this._custom_range_selected = true;
      return;
    }
    const [start, end] = preset.timeRange();
    this.tempStart = start;
    this.tempEnd = end;
    this.currentMonth = start.getMonth();
    this.currentYear = start.getFullYear();
    this.tempSelectedPreset = preset.value;
  }
  /**
   *  @description This method is used to render the year grid navigation.
   * @returns {JSX.Element}
   */
  renderYearGrid() {
    const years = Array.from({
      length: 12
    }, (_, i) => this.currentYearGridStart - 6 + i);
    return h("div", {
      class: "year-grid"
    }, years.map((year) => h("div", {
      class: "year-cell typography--label-medium",
      onClick: (e) => {
        this.currentYear = year;
        this.showYearGrid = false;
        e.stopPropagation();
      }
    }, year)));
  }
  /**
   * @description This method is used to set the time for the start or end date.
   * It updates the startTime or endTime state based on the selected time.
   * It will get called when the user selects a time from the time picker.
   * @param {any} time - The time object containing hour, minute, seconds, and meridiem.
   */
  setTime(time, key) {
    const isStart = key === "start";
    const targetTime = isStart ? this.startTime : this.endTime;
    targetTime.hour = time.hour.toString().padStart(2, "0");
    targetTime.minute = time.minute.toString().padStart(2, "0");
    if (this.showSecondsInTimePicker) {
      targetTime.second = time.seconds.toString().padStart(2, "0");
    } else {
      targetTime.second = "00";
    }
    if (this.timeFormat === "12") {
      targetTime.meridiem = time.meridiem;
    } else {
      targetTime.meridiem = "";
    }
    if (isStart) {
      this.startTime = {
        hour: targetTime.hour,
        minute: targetTime.minute,
        second: targetTime.second,
        meridiem: targetTime.meridiem
      };
    } else {
      this.endTime = {
        hour: targetTime.hour,
        minute: targetTime.minute,
        second: targetTime.second,
        meridiem: targetTime.meridiem
      };
    }
  }
  /**
   * This method applies the selected date and time range.
   * It updates the selectedStart and selectedEnd states with the tempStart and tempEnd values.
   * It will display the selected date and time in the input field based on the timeFormat.
   */
  apply() {
    this.selectedStart = this.tempStart;
    this.selectedEnd = this.isSingleDatePicker ? null : this.tempEnd;
    let startDate = this.selectedStart || this.tempStart || "";
    let endDate = this.selectedEnd || this.tempEnd || "";
    startDate = hooks(startDate).format(this.dateFormat);
    endDate = hooks(endDate).format(this.dateFormat);
    this.selectedPreset = this.tempSelectedPreset;
    if (this.startTime) {
      this.selectedStartTimeValue = this.startTime.hour + ":" + this.startTime.minute + (this.showSecondsInTimePicker ? ":" + this.startTime.second : "") + " " + this.startTime.meridiem;
    }
    if (this.endTime) {
      this.selectedEndTimeValue = this.endTime.hour + ":" + this.endTime.minute + (this.showSecondsInTimePicker ? ":" + this.endTime.second : "") + " " + this.endTime.meridiem;
    }
    if (this.isSingleDatePicker) {
      this.selectedDateValue = this.showTimepicker ? `${startDate} (${this.startTimeValue})` : startDate;
      this.bhEventChange.emit({
        startDate,
        endDate: null,
        startTime: this.startTimeValue,
        endTime: null
      });
    } else {
      this.selectedDateValue = this.showTimepicker ? `${startDate} (${this.startTimeValue}) to ${endDate} (${this.endTimeValue})` : `${startDate} to ${endDate}`;
      this.bhEventChange.emit({
        startDate,
        endDate,
        startTime: this.startTimeValue,
        endTime: this.endTimeValue
      });
    }
    this.showPicker = false;
  }
  /**
   * @description This method is called for calculating meridiem  in case of 12/24 hour format
   */
  // private getMeridiem(hour: number): "AM" | "PM" | "" {
  //   if (this.timeFormat === "24") {
  //     return "";
  //   }
  //   return hour >= 12 ? "PM" : "AM";
  // }
  /**
   * Checks if the given date is today's date.
   *
   * @param {Date} date - The date to compare with today's date.
   * @returns {string | undefined} - Returns "today" if the date matches today's date; otherwise, undefined.
   */
  isToday(date) {
    const today = /* @__PURE__ */ new Date();
    if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
      return "today";
    }
  }
  /**
   * Updates the placeholder text for the date input field based on the current
   * picker configuration (e.g., time picker enabled, single or range selection).
   * Also sets up a click event listener to update the placeholder dynamically
   * when the picker is shown and no date is selected.
   */
  updatePlaceholder() {
    if (this.showTimepicker) {
      this.placeholder = "Select Date & Time Range";
    } else {
      if (!this.fromtabularlist) {
        this.placeholder = "Select Date Range";
      }
    }
    let formatExample = this.getDateFormat();
    if (this.showPicker && !this.selectedDateValue) {
      if (this.isSingleDatePicker) {
        this.placeholder = `${formatExample}`;
      } else {
        this.placeholder = `${formatExample} to ${formatExample}`;
      }
    }
    this.host.addEventListener("click", () => {
      if (this.showPicker && !this.selectedDateValue) {
        if (this.isSingleDatePicker) {
          this.placeholder = `${formatExample}`;
        } else {
          this.placeholder = `${formatExample} - ${formatExample}`;
        }
      }
    });
  }
  /**
   * Constructs and returns the date format string based on the current configuration.
   * If the time picker is enabled, it appends the appropriate time format,
   * including seconds and 12/24-hour format as needed.
   *
   * @returns {string} - The formatted date/time string.
   */
  getDateFormat() {
    let formatExample = this.dateFormat;
    if (this.showTimepicker) {
      let timeFormat = "HH:MM";
      if (this.showSecondsInTimePicker) {
        timeFormat += ":SS";
      }
      if (this.timeFormat === "12") {
        timeFormat += " AM/PM";
      }
      formatExample += ` (${timeFormat})`;
    }
    return formatExample;
  }
  /**
   * Calculates and sets the width of the input box based on the placeholder text length.
   * Uses a fixed font style to measure the pixel width of the placeholder and adds padding.
   */
  calInputBoxWidth() {
    const fontStyle = "14px Noto Sans";
    const format = this.getDateFormat();
    const placeholder = this.isSingleDatePicker ? format : `${format} to ${format}`;
    const pixelLength = this.getTextWidth(placeholder, fontStyle);
    this.inputWidth = `${pixelLength + 50}px`;
  }
  /**
   * Clears the temporary selected preset if the date picker is not shown
   * and no date has been selected.
   */
  getSelectedPreset() {
    if (!this.showPicker && !this.selectedDateValue) {
      this.tempSelectedPreset = "";
    }
  }
  /**
   * @description This method is called when the component is about to be loaded.
   */
  componentWillLoad() {
    const range = this.selectedRange && typeof this.selectedRange === "string" ? JSON.parse(this.selectedRange) : this.selectedRange;
    if (this.selectedRange && Object.keys(range).length > 0) {
      this.selectedStart = new Date(range.start);
      this.selectedEnd = new Date(range.end);
      this.tempStart = this.selectedStart;
      this.tempEnd = this.selectedEnd;
      this.startTime = this.getFormattedTime(this.selectedStart);
      this.endTime = this.getFormattedTime(this.selectedEnd);
      let startDate = this.selectedStart || "";
      let endDate = this.selectedEnd || "";
      startDate = hooks(startDate).format(this.dateFormat);
      endDate = hooks(endDate).format(this.dateFormat);
      if (this.startTime) {
        this.selectedStartTimeValue = this.startTime.hour + ":" + this.startTime.minute + (this.showSecondsInTimePicker ? ":" + this.startTime.second : "") + " " + this.startTime.meridiem;
      }
      if (this.endTime) {
        this.selectedEndTimeValue = this.endTime.hour + ":" + this.endTime.minute + (this.showSecondsInTimePicker ? ":" + this.endTime.second : "") + " " + this.endTime.meridiem;
      }
      this.currentMonth = this.selectedStart ? this.selectedStart.getMonth() : (/* @__PURE__ */ new Date()).getMonth();
      this.currentYear = this.selectedStart ? this.selectedStart.getFullYear() : (/* @__PURE__ */ new Date()).getFullYear();
      if (this.isSingleDatePicker) {
        this.selectedDateValue = this.showTimepicker ? `${startDate} (${this.startTimeValue})` : startDate;
        this.bhEventChange.emit({
          startDate,
          endDate: null,
          startTime: this.startTimeValue,
          endTime: null
        });
      } else {
        this.selectedDateValue = this.showTimepicker ? `${startDate} (${this.startTimeValue}) to ${endDate} (${this.endTimeValue})` : `${startDate} to ${endDate}`;
        this.bhEventChange.emit({
          startDate,
          endDate,
          startTime: this.startTimeValue,
          endTime: this.endTimeValue
        });
      }
    } else {
      this.startTime = {
        hour: this.timeFormat === "24" ? "00" : "12",
        minute: "00",
        second: "00",
        meridiem: this.timeFormat === "24" ? "" : "AM"
      };
      this.endTime = {
        hour: this.timeFormat === "24" ? "23" : "11",
        minute: "59",
        second: "59",
        meridiem: this.timeFormat === "24" ? "" : "PM"
      };
    }
    this.calInputBoxWidth();
    const presets = this.presets && typeof this.presets === "string" ? JSON.parse(this.presets) : this.presets;
    if (Array.isArray(presets) && presets.length > 0) {
      this.presets = this.createPresets(presets);
    }
    this.updatePlaceholder();
    this.startTimeLabel = this.startTimerLable;
    this.endTimeLabel = this.endTimerLable;
    if (this.minDate && typeof this.minDate !== "object") {
      this.minDate = new Date(this.minDate);
    }
    if (this.maxDate && typeof this.maxDate !== "object") {
      this.maxDate = new Date(this.maxDate);
    }
    this.styleMenu();
  }
  componentDidLoad() {
    this.updateTooltipState();
  }
  componentDidRender() {
    this.updateTooltipState();
  }
  /**
   * @description This method formatt the time.
   */
  getFormattedTime(date) {
    const hour24 = date.getHours();
    const hour = this.timeFormat === "12" ? (hour24 % 12 || 12).toString().padStart(2, "0") : hour24.toString().padStart(2, "0");
    return {
      hour,
      minute: date.getMinutes().toString().padStart(2, "0"),
      second: date.getSeconds().toString().padStart(2, "0"),
      meridiem: this.timeFormat === "12" ? this.meridiem(hour24) : ""
    };
  }
  /**
   * @description This method meridiem for the given time.
   */
  meridiem(hour) {
    return hour >= 12 ? "PM" : "AM";
  }
  /**
   * @description This method renders the time picker component.
   * It includes single time picker for single time selection and range time picker for range time selection.
   * It also handles the display of time pickers based on the selected options.
   * @return {JSX.Element} - The rendered time picker component inside date range picker.
   */
  renderTimePicker(Components) {
    return h("div", {
      class: "bh-date-range-picker_time-select"
    }, h(Components.customTimePicker, {
      displaySeconds: this.showSecondsInTimePicker,
      format: this.timeFormat,
      onSelectedTime: (event) => this.setTime(event.detail, "start"),
      time: this.startTimeValue,
      label: this.startTimerLable,
      labelvalue: `${hooks(this.tempStart).format(this.dateFormat)}`
    }), !this.isSingleDatePicker && h(Components.customTimePicker, {
      format: this.timeFormat,
      displaySeconds: this.showSecondsInTimePicker,
      onSelectedTime: (event) => this.setTime(event.detail, "end"),
      style: {
        paddingLeft: "20px"
      },
      time: this.endTimeValue,
      label: this.endTimerLable,
      labelvalue: `${hooks(this.tempEnd).format(this.dateFormat)}`
    }));
  }
  /**
   * @description This method checks if the selected date range is valid.
   * It returns true if the range is valid, meaning start date and end date are not null.
   * If the date picker is a single date picker, it only checks if the start date is not null.
   * @param {Date} tempStart - The temporary start date selected by the user.
   * @param {Date} tempEnd - The temporary end date selected by the user.
   * @returns {boolean} - Returns true if the date range is valid, false otherwise.
   */
  checkIsValid(tempStart, tempEnd) {
    if (this.showMonthGrid || this.showYearGrid) {
      return true;
    }
    if (this.isSingleDatePicker && tempStart === null) {
      return true;
    }
    if (!this.isSingleDatePicker && (tempStart === null || tempEnd === null)) {
      return true;
    }
  }
  /**
   * @description This method sets the left padding for the input field based on whether a start icon is present.
   * If a start icon is present, it returns '34px' to accommodate the icon.
   * If no start icon is present, it returns undefined, allowing the default padding to apply.
   * @returns {string | undefined} - Returns '34px' if a start icon is present, otherwise returns undefined.
   */
  setInputLeftPadding() {
    if (this.startIcon) {
      return "34px";
    }
  }
  /**
   * @description This method renders the month and year header for the date picker.
   * It includes navigation icons for changing the month and year, and displays the current month and year.
   * It also toggles the visibility of the month and year grids when clicked.
   * @param {Object} Components - The components used for rendering icons and other elements.
   * @returns {JSX.Element} - The rendered month and year header.
   */
  renderMonthYearHeader(Components) {
    return h("div", {
      class: "calendar-header"
    }, h("span", {
      class: "calendar-header__labelleft typography--label-medium"
    }, h("span", {
      class: `year-icon left ${this.showMonthGrid ? "disabled" : "cursor-pointer"}`
    }, h(Components.icon, {
      class: `double-arrow-left navigation-icon ${this.showMonthGrid ? "disabled" : ""}`,
      icon: "keyboard_double_arrow_right",
      size: "small",
      color: "secondary",
      disabled: this.showMonthGrid,
      onClick: (e) => {
        this.handleYearGrid(true);
        e.stopPropagation();
      }
    })), h("span", {
      class: `month-icon ${this.showMonthGrid || this.showYearGrid ? "disabled" : "cursor-pointer"}`
    }, h(Components.icon, {
      class: `keyboard-arrow-left navigation-icon ${this.showMonthGrid || this.showYearGrid ? "disabled" : ""}`,
      icon: "keyboard_arrow_left",
      size: "small",
      color: "secondary",
      disabled: this.showMonthGrid || this.showYearGrid,
      onClick: (e) => {
        this.currentMonth--;
        e.stopPropagation();
      }
    }))), h("span", {
      class: "typography--label-medium"
    }, h("span", {
      class: `display-month cursor-pointer ${this.showMonthGrid && this.applyActiveStyles()}`,
      role: "button",
      onClick: (e) => {
        this.showMonthGrid = !this.showMonthGrid;
        this.showYearGrid = false;
        e.stopPropagation();
      }
    }, new Date(this.currentYear, this.currentMonth).toLocaleString("default", {
      month: "long"
    })), h("span", {
      class: `display-year cursor-pointer ${this.showYearGrid && this.applyActiveStyles()}`,
      role: "button",
      onClick: (e) => {
        this.showYearGrid = !this.showYearGrid;
        this.showMonthGrid = false;
        e.stopPropagation();
      }
    }, new Date(this.currentYear, this.currentMonth).toLocaleString("default", {
      year: "numeric"
    }))), h("span", {
      class: "calendar-header__labelright typography--label-medium"
    }, h("span", {
      class: `month-icon ${this.showMonthGrid || this.showYearGrid ? "disabled" : "cursor-pointer"}`
    }, h(Components.icon, {
      class: `keyboard-arrow-right navigation-icon ${this.showMonthGrid || this.showYearGrid ? "disabled" : ""}`,
      icon: "keyboard_arrow_right",
      size: "small",
      color: "secondary",
      onClick: (e) => {
        this.currentMonth++;
        e.stopPropagation();
      }
    })), h("span", {
      class: `year-icon right ${this.showMonthGrid ? "disabled" : "cursor-pointer"}`
    }, h(Components.icon, {
      class: `double-arrow-right navigation-icon ${this.showMonthGrid ? "disabled" : ""}`,
      icon: "keyboard_double_arrow_right",
      size: "small",
      color: "secondary",
      disabled: this.showMonthGrid,
      onClick: (e) => {
        this.handleYearGrid(false);
        e.stopPropagation();
      }
    }))));
  }
  /**
   * Returns a CSS class name to apply active styling to an input element
   * when the date picker is currently visible.
   *
   * @returns {string | undefined} - The CSS class name "activeInput" if the picker is shown; otherwise, undefined.
   */
  applyActiveStyles() {
    if (this.showPicker) {
      return "activeInput";
    }
  }
  /**
   * Determines whether the current input state is invalid.
   * @returns {boolean} - True if the input is invalid; otherwise, false.
   */
  isInvalid() {
    return this.required && !this.selectedDateValue && this.touched && !this.showPicker;
  }
  /**
   * Calculates the pixel width of a given text string when rendered
   * with a specified font style.
   * @param {string} text - The text to measure.
   * @param {string} font - The CSS font property (e.g., "16px Arial").
   * @returns {number} - The width of the text in pixels.
   */
  getTextWidth(text, font) {
    const span = document.createElement("span");
    span.style.visibility = "hidden";
    span.style.position = "absolute";
    span.style.font = font;
    span.textContent = text;
    document.body.appendChild(span);
    const width = span.offsetWidth;
    document.body.removeChild(span);
    return width;
  }
  isTextOverflowing() {
    if (!this.inputEl) return false;
    return this.inputEl.scrollWidth > this.inputEl.clientWidth;
  }
  updateTooltipState() {
    const tooltipMessage = this.selectedDateValue || this.placeholder || "";
    const hasOverflow = Boolean(tooltipMessage) && this.isTextOverflowing();
    if (this._tooltip !== hasOverflow) {
      this._tooltip = hasOverflow;
    }
    if (this._tooltipMessage !== tooltipMessage) {
      this._tooltipMessage = tooltipMessage;
    }
  }
  styleMenu() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    try {
      if (!this.isInline) return;
      try {
        const tar = this.element__host;
        const shouldFlip = ((_a = tar === null || tar === void 0 ? void 0 : tar.getBoundingClientRect()) === null || _a === void 0 ? void 0 : _a.top) + ((_b = tar === null || tar === void 0 ? void 0 : tar.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.height) + 4 + ((_d = (_c = this.element__datetimerangePickerMenuGhost) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect()) === null || _d === void 0 ? void 0 : _d.height) > window.innerHeight;
        this.inlineStyle = {
          position: "fixed",
          left: `${(_e = tar === null || tar === void 0 ? void 0 : tar.getBoundingClientRect()) === null || _e === void 0 ? void 0 : _e.left}px`,
          top: `${((_f = tar === null || tar === void 0 ? void 0 : tar.getBoundingClientRect()) === null || _f === void 0 ? void 0 : _f.top) + ((_g = tar === null || tar === void 0 ? void 0 : tar.getBoundingClientRect()) === null || _g === void 0 ? void 0 : _g.height)}px`,
          transform: `translateY(${shouldFlip ? -((_j = (_h = this.element__datetimerangePickerMenuGhost) === null || _h === void 0 ? void 0 : _h.getBoundingClientRect()) === null || _j === void 0 ? void 0 : _j.height) - ((_k = tar === null || tar === void 0 ? void 0 : tar.getBoundingClientRect()) === null || _k === void 0 ? void 0 : _k.height) - 8 : 0}px)`
        };
        this.element__datetimerangePickerMenu.id = `bh-datetime-range-picker__inline-menu__ hi`;
        document.body.appendChild(this.element__datetimerangePickerMenu);
        this.element__datetimerangePickerMenu.removeEventListener("click", () => {
        }, {
          capture: true
        });
        this.element__datetimerangePickerMenu.addEventListener("click", () => {
        }, {
          capture: true
        });
      } catch (err) {
        console.warn(err);
      }
    } catch (err) {
      console.warn("Unable to locate the expected attributes. Please check the documentation and attach mandatory attributes");
    }
  }
  renderInput(Components) {
    const inputField = h("input", {
      ref: (el) => this.inputEl = el,
      id: "myInput",
      class: `bh-text-input__input typography--body-medium motion--normal datepciker-input cursor-pointer 
							${this.isDisabled ? "bh-text-input__input--read-only" : ""} 
							${this.applyActiveStyles()} 
							${this.isInvalid() ? "bh-text-input__input--invalid" : ""}
          ${this.isFluid ? "bh-text-input__input--fluid" : ""}
          ${this.isSmall ? " small" : ""}
          `,
      readonly: true,
      onClick: (e) => {
        this.togglePicker();
        e.stopPropagation();
      },
      onMouseEnter: () => {
        this.updateTooltipState();
      },
      onFocus: () => {
        this.updateTooltipState();
      },
      onBlur: () => {
        this.touched = true;
      },
      value: this.selectedDateValue || "",
      style: {
        width: this.isFluid ? "100%" : this.inputWidth,
        paddingLeft: this.setInputLeftPadding()
      },
      disabled: this.isDisabled,
      placeholder: this.placeholder
    });
    return h(Components.tooltip, {
      message: this._tooltipMessage,
      hide: !this._tooltip,
      inline: "true"
    }, inputField);
  }
  /**
   * @description This method renders the date range picker component.
   * It includes the input field for displaying the selected date, the label, and the date picker popup.
   * It also handles the rendering of the calendar, time picker, and action buttons.
   * @returns {JSX.Element} - The rendered date range picker component.
   * @memberof components.datetimeRangePicker
   */
  render() {
    const prefix = this.host.tagName.toLowerCase().replace(components.datetimeRangePicker.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
    return h("div", {
      key: "f515615861272ec9975527140588b047a3abb2db",
      class: "bh-datetime-range-picker",
      id: this.id,
      ref: (el) => this.element__host = el
    }, this.label && h("label", {
      class: "bh-text-input__label typography--label-small label-text"
    }, this.label, this.required && h("span", {
      class: "required-asterisk"
    }, "*")), h("div", {
      key: "168bae89aaccd5c80158f48df40ab945e282a5ff",
      class: "bh-text-input__container"
    }, this.startIcon && h(Components.icon, {
      icon: this.startIcon,
      size: "small",
      class: `bh-text-input__start-icon ${this.isInvalid() ? "bh-text-input__start-icon--invalid" : ""}`,
      onClick: (e) => {
        this.togglePicker();
        e.stopPropagation();
      },
      style: {
        cursor: "pointer"
      }
    }), this.renderInput(Components)), this.isInvalid() ? h("div", {
      class: "error-message typography--body-small"
    }, h(Components.icon, {
      icon: "error_outline_15px",
      size: "small",
      color: "tertiary",
      href: "",
      target: ""
    }), this.errorMessage) : this.helperText && h(Components.formMessage, {
      class: "helper-text",
      message: this.helperText,
      isDisabled: this.isDisabled
    }), this.showPicker && h("div", {
      class: `${this.isInline ? "picker-popup" : "hidden"}`,
      style: this.inlineStyle,
      ref: (el) => {
        this.element__datetimerangePickerMenu = el;
      }
    }, h("div", {
      class: "picker-body",
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, h("div", {
      class: "picker-main-row",
      style: {
        display: "flex",
        flexDirection: "row"
      }
    }, !this.showMonthGrid && !this.showYearGrid && !this.isSingleDatePicker && this.presets && Array.isArray(this.presets) && this.presets.filter(Boolean).length > 0 && this.presets.length > 0 && h("div", {
      class: "presets"
    }, h(Components.menu, {
      class: "date-picker-presets bh-vertical-menu",
      menuItems: this.presets,
      selected: this.tempSelectedPreset,
      isMultiSelect: false,
      isSelectAll: false,
      isSearchable: false,
      onBhEventSelected: (e) => {
        this.handlePresetClick(e.detail);
        e.preventDefault();
        e.stopPropagation();
      }
    })), h("div", {
      class: "picker-main"
    }, this.renderMonthYearHeader(Components), this.showMonthGrid && this.renderMonthGrid(), this.showYearGrid && this.renderYearGrid(), !this.showMonthGrid && !this.showYearGrid && this.renderDayHeaders(), !this.showMonthGrid && !this.showYearGrid && this.renderCalendar())), this.showTimepicker && h("div", {
      class: "time-picker-section"
    }, this.renderTimePicker(Components)), h("div", {
      class: "calendar-actions"
    }, h(Components.button, {
      label: this.resetLabel,
      small: true,
      type: "secondary",
      fluid: true,
      onClick: (e) => {
        this.reset();
        e.stopPropagation();
      },
      disabled: this._custom_range_selected
    }), h(Components.button, {
      label: this.applyLabel,
      small: true,
      type: "primary",
      fluid: true,
      onClick: (e) => {
        this.apply();
        e.stopPropagation();
      },
      disabled: this.checkIsValid(this.tempStart, this.tempEnd) || this._custom_range_selected
    })))), this.showPicker && h("div", {
      style: {
        visibility: `${this.fromtabularlist ? "hidden" : ""}`,
        position: "absolute",
        left: `${this.fromtabularlist ? "-9999px" : "unset"}`
      },
      class: "picker-popup",
      ref: (el) => {
        this.element__datetimerangePickerMenuGhost = el;
      }
    }, h("div", {
      class: "picker-body",
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, h("div", {
      class: "picker-main-row",
      style: {
        display: "flex",
        flexDirection: "row"
      }
    }, !this.showMonthGrid && !this.showYearGrid && !this.isSingleDatePicker && this.presets && Array.isArray(this.presets) && this.presets.filter(Boolean).length > 0 && this.presets.length > 0 && h("div", {
      class: "presets"
    }, h(Components.menu, {
      class: "date-picker-presets bh-vertical-menu",
      menuItems: this.presets,
      selected: this.tempSelectedPreset,
      isMultiSelect: false,
      isSelectAll: false,
      isSearchable: false,
      onBhEventSelected: (e) => {
        this.handlePresetClick(e.detail);
        e.preventDefault();
        e.stopPropagation();
      }
    })), h("div", {
      class: "picker-main"
    }, this.renderMonthYearHeader(Components), this.showMonthGrid && this.renderMonthGrid(), this.showYearGrid && this.renderYearGrid(), !this.showMonthGrid && !this.showYearGrid && this.renderDayHeaders(), !this.showMonthGrid && !this.showYearGrid && this.renderCalendar())), this.showTimepicker && h("div", {
      class: "time-picker-section"
    }, this.renderTimePicker(Components)), h("div", {
      class: "calendar-actions"
    }, h(Components.button, {
      label: this.resetLabel,
      small: true,
      type: "secondary",
      fluid: true,
      onClick: (e) => {
        e.stopPropagation();
        this.reset();
      },
      disabled: this._custom_range_selected
    }), h(Components.button, {
      label: this.applyLabel,
      small: true,
      type: "primary",
      fluid: true,
      onClick: (e) => {
        e.stopPropagation();
        this.apply();
      },
      disabled: this.checkIsValid(this.tempStart, this.tempEnd) || this._custom_range_selected
    })))));
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "currentYear": ["handleYearChange"],
      "startTime": ["handleStartTimeChange"],
      "endTime": ["handleEndTimeChange"],
      "tempStart": ["handleSelectedStartDateChange"],
      "tempEnd": ["handleSelectedEndDateChange"],
      "tempSelectedPreset": ["handleSelectedPresetLabelChange"]
    };
  }
};
BhDateTimeRangePicker.style = BhDatetimeRangePickerStyle0;
export {
  BhDateTimeRangePicker as bh_datetime_range_picker
};
//# sourceMappingURL=bh-datetime-range-picker.entry-G2AKLZ6X.js.map
