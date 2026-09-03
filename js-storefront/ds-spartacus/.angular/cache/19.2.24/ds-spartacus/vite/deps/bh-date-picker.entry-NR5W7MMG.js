import {
  OverlayClassMixin,
  OverlayMixin,
  PositionMixin,
  VirtualKeyboardController,
  afterNextRender,
  hideOthers,
  menuOverlay,
  overlayStyles
} from "./chunk-BI2VYPKI.js";
import {
  DateTime_1,
  addListener,
  setTouchAction
} from "./chunk-L2DOPODQ.js";
import {
  ControllerMixin,
  Debouncer,
  DelegateFocusMixin,
  DirMixin,
  ElementMixin,
  FocusMixin,
  InputConstraintsMixin,
  InputControlMixin,
  InputController,
  KeyboardMixin,
  LabelledInputController,
  PolymerElement,
  PropertyEffects,
  SlotController,
  ThemableMixin,
  TooltipController,
  dedupingMixin,
  defineCustomElement,
  generateUniqueId,
  html,
  i$3,
  inputFieldShared,
  inputFieldShared$1,
  isElementFocusable,
  isIOS,
  isKeyboardActive,
  legacyOptimizations,
  legacyWarnings,
  matches,
  microTask$1,
  registerStyles,
  strictTemplatePolicy,
  suppressTemplateNotifications,
  timeOut,
  timeOut$1,
  translate,
  useShadow,
  wrap
} from "./chunk-FPZAVM6P.js";
import {
  hooks
} from "./chunk-HFZDUW4C.js";
import {
  Host,
  createEvent,
  h,
  registerInstance
} from "./chunk-5YQC5RSE.js";
import {
  __async,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-date-picker.entry.js
var datePickerOverlay = i$3`
  [part='overlay'] {
    /*
  Width:
      date cell widths
    + month calendar side padding
    + year scroller width
  */
    /* prettier-ignore */
    width:
    calc(
        var(--lumo-size-m) * 7
      + var(--lumo-space-xs) * 2
      + 57px
    );
    height: 100%;
    max-height: calc(var(--lumo-size-m) * 14);
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
    flex-direction: column;
  }

  [part='content'] {
    padding: 0;
    height: 100%;
    overflow: hidden;
    -webkit-mask-image: none;
    mask-image: none;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }

  @media (max-width: 450px), (max-height: 450px) {
    [part='overlay'] {
      width: 100vw;
      height: 70vh;
      max-height: 70vh;
    }
  }
`;
registerStyles("vaadin-date-picker-overlay", [menuOverlay, datePickerOverlay], {
  moduleId: "lumo-date-picker-overlay"
});
registerStyles("vaadin-date-picker-year", i$3`
    :host([current]) [part='year-number'] {
      color: var(--lumo-primary-text-color);
    }

    :host(:not([current])) [part='year-number'],
    [part='year-separator'] {
      opacity: var(--_lumo-date-picker-year-opacity, 0.7);
      transition: 0.2s opacity;
    }

    [part='year-number'],
    [part='year-separator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50%;
      transform: translateY(-50%);
    }

    [part='year-separator']::after {
      color: var(--lumo-disabled-text-color);
      content: '\\2022';
    }
  `, {
  moduleId: "lumo-date-picker-year"
});
registerStyles("vaadin-date-picker-overlay-content", i$3`
    :host {
      position: relative;
      /* Background for the year scroller, placed here as we are using a mask image on the actual years part */
      background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
      background-size: 57px 100%;
      background-position: top right;
      background-repeat: no-repeat;
      cursor: default;
    }

    ::slotted([slot='months']) {
      /* Month calendar height:
              header height + margin-bottom
            + weekdays height + margin-bottom
            + date cell heights
            + small margin between month calendars
        */
      /* prettier-ignore */
      --vaadin-infinite-scroller-item-height:
          calc(
              var(--lumo-font-size-l) + var(--lumo-space-m)
            + var(--lumo-font-size-xs) + var(--lumo-space-s)
            + var(--lumo-size-m) * 6
            + var(--lumo-space-s)
          );
      --vaadin-infinite-scroller-buffer-offset: 10%;
      -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      position: relative;
      margin-right: 57px;
    }

    ::slotted([slot='years']) {
      /* TODO get rid of fixed magic number */
      --vaadin-infinite-scroller-buffer-width: 97px;
      width: 57px;
      height: auto;
      top: 0;
      bottom: 0;
      font-size: var(--lumo-font-size-s);
      box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);
      -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      cursor: var(--lumo-clickable-cursor);
    }

    ::slotted([slot='years']:hover) {
      --_lumo-date-picker-year-opacity: 1;
    }

    /* TODO unsupported selector */
    #scrollers {
      position: static;
      display: block;
    }

    /* TODO fix this in vaadin-date-picker that it adapts to the width of the year scroller */
    :host([desktop]) ::slotted([slot='months']) {
      right: auto;
    }

    /* Year scroller position indicator */
    ::slotted([slot='years'])::before {
      border: none;
      width: 1em;
      height: 1em;
      background-color: var(--lumo-base-color);
      background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
      transform: translate(-75%, -50%) rotate(45deg);
      border-top-right-radius: var(--lumo-border-radius-s);
      box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);
      z-index: 1;
    }

    [part='toolbar'] {
      padding: var(--lumo-space-s);
      border-bottom-left-radius: var(--lumo-border-radius-l);
      margin-right: 57px;
    }

    [part='toolbar'] ::slotted(vaadin-button) {
      margin: 0;
    }

    /* Narrow viewport mode (fullscreen) */

    :host([fullscreen]) [part='toolbar'] {
      order: -1;
      background-color: var(--lumo-base-color);
    }

    :host([fullscreen]) [part='overlay-header'] {
      order: -2;
      height: var(--lumo-size-m);
      padding: var(--lumo-space-s);
      position: absolute;
      left: 0;
      right: 0;
      justify-content: center;
    }

    :host([fullscreen]) [part='toggle-button'],
    :host([fullscreen]) [part='clear-button'],
    [part='overlay-header'] [part='label'] {
      display: none;
    }

    /* Very narrow screen (year scroller initially hidden) */

    [part='years-toggle-button'] {
      display: flex;
      align-items: center;
      height: var(--lumo-size-s);
      padding: 0 0.5em;
      border-radius: var(--lumo-border-radius-m);
      z-index: 3;
      color: var(--lumo-primary-text-color);
      font-weight: 500;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([years-visible]) [part='years-toggle-button'] {
      background-color: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
    }

    /* TODO magic number (same as used for media-query in vaadin-date-picker-overlay-content) */
    @media screen and (max-width: 374px) {
      :host {
        background-image: none;
      }

      [part='toolbar'],
      ::slotted([slot='months']) {
        margin-right: 0;
      }

      /* TODO make date-picker adapt to the width of the years part */
      ::slotted([slot='years']) {
        --vaadin-infinite-scroller-buffer-width: 90px;
        width: 50px;
        background-color: var(--lumo-shade-5pct);
      }

      :host([years-visible]) ::slotted([slot='months']) {
        padding-left: 50px;
      }
    }
  `, {
  moduleId: "lumo-date-picker-overlay-content"
});
registerStyles("vaadin-month-calendar", i$3`
    :host {
      -webkit-user-select: none;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      font-size: var(--lumo-font-size-m);
      color: var(--lumo-body-text-color);
      text-align: center;
      padding: 0 var(--lumo-space-xs);
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      --_selection-color: var(--vaadin-selection-color, var(--lumo-primary-color));
      --_selection-color-text: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
    }

    /* Month header */

    [part='month-header'] {
      color: var(--lumo-header-text-color);
      font-size: var(--lumo-font-size-l);
      line-height: 1;
      font-weight: 500;
      margin-bottom: var(--lumo-space-m);
    }

    /* Week days and numbers */

    [part='weekdays'],
    [part='weekday'],
    [part='week-number'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      color: var(--lumo-secondary-text-color);
    }

    [part='weekdays'] {
      margin-bottom: var(--lumo-space-s);
    }

    [part='weekday']:empty,
    [part='week-number'] {
      width: var(--lumo-size-xs);
    }

    /* Date and week number cells */

    [part~='date'],
    [part='week-number'] {
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: var(--lumo-size-m);
      position: relative;
    }

    [part~='date'] {
      transition: color 0.1s;
    }

    [part~='date']:not(:empty) {
      cursor: var(--lumo-clickable-cursor);
    }

    :host([week-numbers]) [part='weekday']:not(:empty),
    :host([week-numbers]) [part~='date'] {
      width: calc((100% - var(--lumo-size-xs)) / 7);
    }

    /* Today date */

    [part~='date'][part~='today'] {
      color: var(--_selection-color-text);
    }

    /* Focused date */

    [part~='date']::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 2em;
      min-height: 2em;
      width: 80%;
      height: 80%;
      max-height: 100%;
      max-width: 100%;
      border-radius: var(--lumo-border-radius-m);
    }

    [part~='date'][part~='focused']::before {
      box-shadow:
        0 0 0 1px var(--lumo-base-color),
        0 0 0 calc(var(--_focus-ring-width) + 1px) var(--_focus-ring-color);
    }

    :host(:not([focused])) [part~='date'][part~='focused']::before {
      animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;
    }

    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow:
          0 0 0 1px var(--lumo-base-color),
          0 0 0 calc(var(--_focus-ring-width) + 1px) transparent;
      }
    }

    [part~='date']:not(:empty):not([part~='disabled']):not([part~='selected']):hover::before {
      background-color: var(--lumo-primary-color-10pct);
    }

    [part~='date'][part~='selected'] {
      color: var(--lumo-primary-contrast-color);
    }

    [part~='date'][part~='selected']::before {
      background-color: var(--_selection-color);
    }

    [part~='date'][part~='disabled'] {
      color: var(--lumo-disabled-text-color);
    }

    @media (pointer: coarse) {
      [part~='date']:hover:not([part~='selected'])::before,
      :host(:not([focus-ring])) [part~='focused']:not([part~='selected'])::before {
        display: none;
      }

      [part~='date']:not(:empty):not([part~='disabled']):active::before {
        display: block;
      }

      :host(:not([focus-ring])) [part~='date'][part~='selected']::before {
        box-shadow: none;
      }
    }
    /* Disabled */

    :host([disabled]) * {
      color: var(--lumo-disabled-text-color) !important;
    }
  `, {
  moduleId: "lumo-month-calendar"
});
var datePicker = i$3`
  [part='toggle-button']::before {
    content: var(--lumo-icons-calendar);
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }

  @media (max-width: 450px), (max-height: 450px) {
    [part='overlay-content'] {
      height: 70vh;
    }
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`;
registerStyles("vaadin-date-picker", [inputFieldShared$1, datePicker], {
  moduleId: "lumo-date-picker"
});
var DatePickerOverlayMixin = (superClass) => class DatePickerOverlayMixin extends PositionMixin(OverlayMixin(superClass)) {
  /**
   * Override method inherited from `OverlayMixin` to not close on input click.
   * Needed to ignore date-picker's own input in the mousedown listener below.
   *
   * @param {Event} event
   * @return {boolean}
   * @protected
   */
  _shouldCloseOnOutsideClick(event) {
    const eventPath = event.composedPath();
    return !eventPath.includes(this.positionTarget);
  }
  /**
   * @protected
   * @override
   */
  _mouseDownListener(event) {
    super._mouseDownListener(event);
    if (this._shouldCloseOnOutsideClick(event) && !isElementFocusable(event.composedPath()[0])) {
      event.preventDefault();
    }
  }
};
var datePickerOverlayStyles = i$3`
  [part='overlay'] {
    display: flex;
    flex: auto;
  }

  [part~='content'] {
    flex: auto;
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 3px solid;
    }
  }
`;
registerStyles("vaadin-date-picker-overlay", [overlayStyles, datePickerOverlayStyles], {
  moduleId: "vaadin-date-picker-overlay-styles"
});
var DatePickerOverlay = class extends DatePickerOverlayMixin(DirMixin(ThemableMixin(PolymerElement))) {
  static get is() {
    return "vaadin-date-picker-overlay";
  }
  static get template() {
    return html`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
};
defineCustomElement(DatePickerOverlay);
function getISOWeekNumber(date) {
  let dayOfWeek = date.getDay();
  if (dayOfWeek === 0) {
    dayOfWeek = 7;
  }
  const nearestThursdayDiff = 4 - dayOfWeek;
  const nearestThursday = new Date(date.getTime() + nearestThursdayDiff * 24 * 3600 * 1e3);
  const firstOfJanuary = new Date(0, 0);
  firstOfJanuary.setFullYear(nearestThursday.getFullYear());
  const timeDiff = nearestThursday.getTime() - firstOfJanuary.getTime();
  const daysSinceFirstOfJanuary = Math.round(timeDiff / (24 * 3600 * 1e3));
  return Math.floor(daysSinceFirstOfJanuary / 7 + 1);
}
function normalizeDate(date) {
  const normalizedDate = new Date(date);
  normalizedDate.setHours(0, 0, 0, 0);
  return normalizedDate;
}
function dateEquals(date1, date2, normalizer = normalizeDate) {
  return date1 instanceof Date && date2 instanceof Date && normalizer(date1).getTime() === normalizer(date2).getTime();
}
function extractDateParts(date) {
  return {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear()
  };
}
function dateAllowed(date, min, max, isDateDisabled) {
  let dateIsDisabled = false;
  if (typeof isDateDisabled === "function" && !!date) {
    const dateToCheck = extractDateParts(date);
    dateIsDisabled = isDateDisabled(dateToCheck);
  }
  return (!min || date >= min) && (!max || date <= max) && !dateIsDisabled;
}
function getClosestDate(date, dates) {
  return dates.filter((date2) => date2 !== void 0).reduce((closestDate, candidate) => {
    if (!candidate) {
      return closestDate;
    }
    if (!closestDate) {
      return candidate;
    }
    const candidateDiff = Math.abs(date.getTime() - candidate.getTime());
    const closestDateDiff = Math.abs(closestDate.getTime() - date.getTime());
    return candidateDiff < closestDateDiff ? candidate : closestDate;
  });
}
function dateAfterXMonths(months) {
  const today = /* @__PURE__ */ new Date();
  const result = new Date(today);
  result.setDate(1);
  result.setMonth(parseInt(months) + today.getMonth());
  return result;
}
function getAdjustedYear(referenceDate, year, month = 0, day = 1) {
  if (year > 99) {
    throw new Error("The provided year cannot have more than 2 digits.");
  }
  if (year < 0) {
    throw new Error("The provided year cannot be negative.");
  }
  let adjustedYear = year + Math.floor(referenceDate.getFullYear() / 100) * 100;
  if (referenceDate < new Date(adjustedYear - 50, month, day)) {
    adjustedYear -= 100;
  } else if (referenceDate > new Date(adjustedYear + 50, month, day)) {
    adjustedYear += 100;
  }
  return adjustedYear;
}
function parseDate(str) {
  const parts = /^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/u.exec(str);
  if (!parts) {
    return void 0;
  }
  const date = new Date(0, 0);
  date.setFullYear(parseInt(parts[1], 10));
  date.setMonth(parseInt(parts[2], 10) - 1);
  date.setDate(parseInt(parts[3], 10));
  return date;
}
function formatISODateBase(dateParts) {
  const pad = (num, fmt = "00") => (fmt + num).substr((fmt + num).length - fmt.length);
  let yearSign = "";
  let yearFmt = "0000";
  let yearAbs = dateParts.year;
  if (yearAbs < 0) {
    yearAbs = -yearAbs;
    yearSign = "-";
    yearFmt = "000000";
  } else if (dateParts.year >= 1e4) {
    yearSign = "+";
    yearFmt = "000000";
  }
  const year = yearSign + pad(yearAbs, yearFmt);
  const month = pad(dateParts.month + 1);
  const day = pad(dateParts.day);
  return [year, month, day].join("-");
}
function formatISODate(date) {
  if (!(date instanceof Date)) {
    return "";
  }
  return formatISODateBase({
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate()
  });
}
var Debouncer2 = class _Debouncer {
  constructor() {
    this._asyncModule = null;
    this._callback = null;
    this._timer = null;
  }
  /**
   * Sets the scheduler; that is, a module with the Async interface,
   * a callback and optional arguments to be passed to the run function
   * from the async module.
   *
   * @param {!AsyncInterface} asyncModule Object with Async interface.
   * @param {function()} callback Callback to run.
   * @return {void}
   */
  setConfig(asyncModule, callback) {
    this._asyncModule = asyncModule;
    this._callback = callback;
    this._timer = this._asyncModule.run(() => {
      this._timer = null;
      debouncerQueue.delete(this);
      this._callback();
    });
  }
  /**
   * Cancels an active debouncer and returns a reference to itself.
   *
   * @return {void}
   */
  cancel() {
    if (this.isActive()) {
      this._cancelAsync();
      debouncerQueue.delete(this);
    }
  }
  /**
   * Cancels a debouncer's async callback.
   *
   * @return {void}
   */
  _cancelAsync() {
    if (this.isActive()) {
      this._asyncModule.cancel(
        /** @type {number} */
        this._timer
      );
      this._timer = null;
    }
  }
  /**
   * Flushes an active debouncer and returns a reference to itself.
   *
   * @return {void}
   */
  flush() {
    if (this.isActive()) {
      this.cancel();
      this._callback();
    }
  }
  /**
   * Returns true if the debouncer is active.
   *
   * @return {boolean} True if active.
   */
  isActive() {
    return this._timer != null;
  }
  /**
   * Creates a debouncer if no debouncer is passed as a parameter
   * or it cancels an active debouncer otherwise. The following
   * example shows how a debouncer can be called multiple times within a
   * microtask and "debounced" such that the provided callback function is
   * called once. Add this method to a custom element:
   *
   * ```js
   * import {microTask} from '@polymer/polymer/lib/utils/async.js';
   * import {Debouncer} from '@polymer/polymer/lib/utils/debounce.js';
   * // ...
   *
   * _debounceWork() {
   *   this._debounceJob = Debouncer.debounce(this._debounceJob,
   *       microTask, () => this._doWork());
   * }
   * ```
   *
   * If the `_debounceWork` method is called multiple times within the same
   * microtask, the `_doWork` function will be called only once at the next
   * microtask checkpoint.
   *
   * Note: In testing it is often convenient to avoid asynchrony. To accomplish
   * this with a debouncer, you can use `enqueueDebouncer` and
   * `flush`. For example, extend the above example by adding
   * `enqueueDebouncer(this._debounceJob)` at the end of the
   * `_debounceWork` method. Then in a test, call `flush` to ensure
   * the debouncer has completed.
   *
   * @param {Debouncer?} debouncer Debouncer object.
   * @param {!AsyncInterface} asyncModule Object with Async interface
   * @param {function()} callback Callback to run.
   * @return {!Debouncer} Returns a debouncer object.
   */
  static debounce(debouncer, asyncModule, callback) {
    if (debouncer instanceof _Debouncer) {
      debouncer._cancelAsync();
    } else {
      debouncer = new _Debouncer();
    }
    debouncer.setConfig(asyncModule, callback);
    return debouncer;
  }
};
var debouncerQueue = /* @__PURE__ */ new Set();
var enqueueDebouncer = function(debouncer) {
  debouncerQueue.add(debouncer);
};
var flushDebouncers = function() {
  const didFlush = Boolean(debouncerQueue.size);
  debouncerQueue.forEach((debouncer) => {
    try {
      debouncer.flush();
    } catch (e) {
      setTimeout(() => {
        throw e;
      });
    }
  });
  return didFlush;
};
var flush = function() {
  let shadyDOM, debouncers;
  do {
    shadyDOM = window.ShadyDOM && ShadyDOM.flush();
    if (window.ShadyCSS && window.ShadyCSS.ScopingShim) {
      window.ShadyCSS.ScopingShim.flush();
    }
    debouncers = flushDebouncers();
  } while (shadyDOM || debouncers);
};
var template = document.createElement("template");
template.innerHTML = `
  <style>
    :host {
      display: block;
      overflow: hidden;
      height: 500px;
    }

    #scroller {
      position: relative;
      height: 100%;
      overflow: auto;
      outline: none;
      margin-right: -40px;
      -webkit-overflow-scrolling: touch;
      overflow-x: hidden;
    }

    #scroller.notouchscroll {
      -webkit-overflow-scrolling: auto;
    }

    #scroller::-webkit-scrollbar {
      display: none;
    }

    .buffer {
      position: absolute;
      width: var(--vaadin-infinite-scroller-buffer-width, 100%);
      box-sizing: border-box;
      padding-right: 40px;
      top: var(--vaadin-infinite-scroller-buffer-offset, 0);
      animation: fadein 0.2s;
    }

    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  </style>

  <div id="scroller" tabindex="-1">
    <div class="buffer"></div>
    <div class="buffer"></div>
    <div id="fullHeight"></div>
  </div>
`;
var InfiniteScroller = class extends HTMLElement {
  constructor() {
    super();
    const root = this.attachShadow({
      mode: "open"
    });
    root.appendChild(template.content.cloneNode(true));
    this.bufferSize = 20;
    this._initialScroll = 5e5;
    this._initialIndex = 0;
    this._activated = false;
  }
  /**
   * @return {boolean}
   */
  get active() {
    return this._activated;
  }
  set active(active) {
    if (active && !this._activated) {
      this._createPool();
      this._activated = true;
    }
  }
  /**
   * @return {number}
   */
  get bufferOffset() {
    return this._buffers[0].offsetTop;
  }
  /**
   * @return {number}
   */
  get itemHeight() {
    if (!this._itemHeightVal) {
      const itemHeight = getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height");
      const tmpStyleProp = "background-position";
      this.$.fullHeight.style.setProperty(tmpStyleProp, itemHeight);
      const itemHeightPx = getComputedStyle(this.$.fullHeight).getPropertyValue(tmpStyleProp);
      this.$.fullHeight.style.removeProperty(tmpStyleProp);
      this._itemHeightVal = parseFloat(itemHeightPx);
    }
    return this._itemHeightVal;
  }
  /** @private */
  get _bufferHeight() {
    return this.itemHeight * this.bufferSize;
  }
  /**
   * @return {number}
   */
  get position() {
    return (this.$.scroller.scrollTop - this._buffers[0].translateY) / this.itemHeight + this._firstIndex;
  }
  /**
   * Current scroller position as index. Can be a fractional number.
   *
   * @type {number}
   */
  set position(index) {
    this._preventScrollEvent = true;
    if (index > this._firstIndex && index < this._firstIndex + this.bufferSize * 2) {
      this.$.scroller.scrollTop = this.itemHeight * (index - this._firstIndex) + this._buffers[0].translateY;
    } else {
      this._initialIndex = ~~index;
      this._reset();
      this._scrollDisabled = true;
      this.$.scroller.scrollTop += index % 1 * this.itemHeight;
      this._scrollDisabled = false;
    }
    if (this._mayHaveMomentum) {
      this.$.scroller.classList.add("notouchscroll");
      this._mayHaveMomentum = false;
      setTimeout(() => {
        this.$.scroller.classList.remove("notouchscroll");
      }, 10);
    }
  }
  /** @protected */
  connectedCallback() {
    if (!this._ready) {
      this._ready = true;
      this.$ = {};
      this.shadowRoot.querySelectorAll("[id]").forEach((node) => {
        this.$[node.id] = node;
      });
      this.$.scroller.addEventListener("scroll", () => this._scroll());
      this._buffers = [...this.shadowRoot.querySelectorAll(".buffer")];
      this.$.fullHeight.style.height = `${this._initialScroll * 2}px`;
    }
  }
  /** @protected */
  disconnectedCallback() {
    if (this._debouncerScrollFinish) {
      this._debouncerScrollFinish.cancel();
    }
    if (this._debouncerUpdateClones) {
      this._debouncerUpdateClones.cancel();
    }
    if (this.__pendingFinishInit) {
      cancelAnimationFrame(this.__pendingFinishInit);
    }
  }
  /**
   * Force the scroller to update clones after a reset, without
   * waiting for the debouncer to resolve.
   */
  forceUpdate() {
    if (this._debouncerScrollFinish) {
      this._debouncerScrollFinish.flush();
    }
    if (this._debouncerUpdateClones) {
      this._buffers[0].updated = this._buffers[1].updated = false;
      this._updateClones();
      this._debouncerUpdateClones.cancel();
    }
    flush();
  }
  /**
   * @protected
   * @override
   */
  _createElement() {
  }
  /**
   * @param {HTMLElement} _element
   * @param {number} _index
   * @protected
   * @override
   */
  _updateElement(_element, _index) {
  }
  /** @private */
  _finishInit() {
    if (!this._initDone) {
      this._buffers.forEach((buffer) => {
        [...buffer.children].forEach((slot) => {
          this._ensureStampedInstance(slot._itemWrapper);
        });
      });
      if (!this._buffers[0].translateY) {
        this._reset();
      }
      this._initDone = true;
      this.dispatchEvent(new CustomEvent("init-done"));
    }
  }
  /** @private */
  _translateBuffer(up) {
    const index = up ? 1 : 0;
    this._buffers[index].translateY = this._buffers[index ? 0 : 1].translateY + this._bufferHeight * (index ? -1 : 1);
    this._buffers[index].style.transform = `translate3d(0, ${this._buffers[index].translateY}px, 0)`;
    this._buffers[index].updated = false;
    this._buffers.reverse();
  }
  /** @private */
  _scroll() {
    if (this._scrollDisabled) {
      return;
    }
    const scrollTop = this.$.scroller.scrollTop;
    if (scrollTop < this._bufferHeight || scrollTop > this._initialScroll * 2 - this._bufferHeight) {
      this._initialIndex = ~~this.position;
      this._reset();
    }
    const offset = this.itemHeight + this.bufferOffset;
    const upperThresholdReached = scrollTop > this._buffers[1].translateY + offset;
    const lowerThresholdReached = scrollTop < this._buffers[0].translateY + offset;
    if (upperThresholdReached || lowerThresholdReached) {
      this._translateBuffer(lowerThresholdReached);
      this._updateClones();
    }
    if (!this._preventScrollEvent) {
      this.dispatchEvent(new CustomEvent("custom-scroll", {
        bubbles: false,
        composed: true
      }));
      this._mayHaveMomentum = true;
    }
    this._preventScrollEvent = false;
    this._debouncerScrollFinish = Debouncer.debounce(this._debouncerScrollFinish, timeOut.after(200), () => {
      const scrollerRect = this.$.scroller.getBoundingClientRect();
      if (!this._isVisible(this._buffers[0], scrollerRect) && !this._isVisible(this._buffers[1], scrollerRect)) {
        this.position = this.position;
      }
    });
  }
  /** @private */
  _reset() {
    this._scrollDisabled = true;
    this.$.scroller.scrollTop = this._initialScroll;
    this._buffers[0].translateY = this._initialScroll - this._bufferHeight;
    this._buffers[1].translateY = this._initialScroll;
    this._buffers.forEach((buffer) => {
      buffer.style.transform = `translate3d(0, ${buffer.translateY}px, 0)`;
    });
    this._buffers[0].updated = this._buffers[1].updated = false;
    this._updateClones(true);
    this._debouncerUpdateClones = Debouncer.debounce(this._debouncerUpdateClones, timeOut.after(200), () => {
      this._buffers[0].updated = this._buffers[1].updated = false;
      this._updateClones();
    });
    this._scrollDisabled = false;
  }
  /** @private */
  _createPool() {
    const container = this.getBoundingClientRect();
    this._buffers.forEach((buffer) => {
      for (let i = 0; i < this.bufferSize; i++) {
        const itemWrapper = document.createElement("div");
        itemWrapper.style.height = `${this.itemHeight}px`;
        itemWrapper.instance = {};
        const slotName = `vaadin-infinite-scroller-item-content-${generateUniqueId()}`;
        const slot = document.createElement("slot");
        slot.setAttribute("name", slotName);
        slot._itemWrapper = itemWrapper;
        buffer.appendChild(slot);
        itemWrapper.setAttribute("slot", slotName);
        this.appendChild(itemWrapper);
        if (this._isVisible(itemWrapper, container)) {
          this._ensureStampedInstance(itemWrapper);
        }
      }
    });
    this.__pendingFinishInit = requestAnimationFrame(() => {
      this._finishInit();
      this.__pendingFinishInit = null;
    });
  }
  /** @private */
  _ensureStampedInstance(itemWrapper) {
    if (itemWrapper.firstElementChild) {
      return;
    }
    const tmpInstance = itemWrapper.instance;
    itemWrapper.instance = this._createElement();
    itemWrapper.appendChild(itemWrapper.instance);
    Object.keys(tmpInstance).forEach((prop) => {
      itemWrapper.instance[prop] = tmpInstance[prop];
    });
  }
  /** @private */
  _updateClones(viewPortOnly) {
    this._firstIndex = Math.round((this._buffers[0].translateY - this._initialScroll) / this.itemHeight) + this._initialIndex;
    const scrollerRect = viewPortOnly ? this.$.scroller.getBoundingClientRect() : void 0;
    this._buffers.forEach((buffer, bufferIndex) => {
      if (!buffer.updated) {
        const firstIndex = this._firstIndex + this.bufferSize * bufferIndex;
        [...buffer.children].forEach((slot, index) => {
          const itemWrapper = slot._itemWrapper;
          if (!viewPortOnly || this._isVisible(itemWrapper, scrollerRect)) {
            this._updateElement(itemWrapper.instance, firstIndex + index);
          }
        });
        buffer.updated = true;
      }
    });
  }
  /** @private */
  _isVisible(element, container) {
    const rect = element.getBoundingClientRect();
    return rect.bottom > container.top && rect.top < container.bottom;
  }
};
var stylesTemplate$1 = document.createElement("template");
stylesTemplate$1.innerHTML = `
  <style>
    :host {
      --vaadin-infinite-scroller-item-height: 270px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
    }
  </style>
`;
var DatePickerMonthScroller = class extends InfiniteScroller {
  static get is() {
    return "vaadin-date-picker-month-scroller";
  }
  constructor() {
    super();
    this.bufferSize = 3;
    this.shadowRoot.appendChild(stylesTemplate$1.content.cloneNode(true));
  }
  /**
   * @protected
   * @override
   */
  _createElement() {
    return document.createElement("vaadin-month-calendar");
  }
  /**
   * @param {HTMLElement} element
   * @param {number} index
   * @protected
   * @override
   */
  _updateElement(element, index) {
    element.month = dateAfterXMonths(index);
  }
};
defineCustomElement(DatePickerMonthScroller);
var stylesTemplate = document.createElement("template");
stylesTemplate.innerHTML = `
  <style>
    :host {
      --vaadin-infinite-scroller-item-height: 80px;
      width: 50px;
      display: block;
      height: 100%;
      position: absolute;
      right: 0;
      transform: translateX(100%);
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      user-select: none;
      /* Center the year scroller position. */
      --vaadin-infinite-scroller-buffer-offset: 50%;
    }

    :host::before {
      content: '';
      display: block;
      background: transparent;
      width: 0;
      height: 0;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      border-width: 6px;
      border-style: solid;
      border-color: transparent;
      border-left-color: #000;
    }
  </style>
`;
var DatePickerYearScroller = class extends InfiniteScroller {
  static get is() {
    return "vaadin-date-picker-year-scroller";
  }
  constructor() {
    super();
    this.bufferSize = 12;
    this.shadowRoot.appendChild(stylesTemplate.content.cloneNode(true));
  }
  /**
   * @protected
   * @override
   */
  _createElement() {
    return document.createElement("vaadin-date-picker-year");
  }
  /**
   * @param {HTMLElement} element
   * @param {number} index
   * @protected
   * @override
   */
  _updateElement(element, index) {
    element.year = this._yearAfterXYears(index);
  }
  /** @private */
  _yearAfterXYears(index) {
    const today = /* @__PURE__ */ new Date();
    const result = new Date(today);
    result.setFullYear(parseInt(index) + today.getFullYear());
    return result.getFullYear();
  }
};
defineCustomElement(DatePickerYearScroller);
var DatePickerYearMixin = (superClass) => class DatePickerYearMixin extends superClass {
  static get properties() {
    return {
      year: {
        type: String,
        sync: true
      },
      selectedDate: {
        type: Object,
        sync: true
      }
    };
  }
  static get observers() {
    return ["__updateSelected(year, selectedDate)"];
  }
  /** @private */
  __updateSelected(year, selectedDate) {
    this.toggleAttribute("selected", selectedDate && selectedDate.getFullYear() === year);
    this.toggleAttribute("current", year === (/* @__PURE__ */ new Date()).getFullYear());
  }
};
var DatePickerYear = class extends ThemableMixin(DatePickerYearMixin(PolymerElement)) {
  static get is() {
    return "vaadin-date-picker-year";
  }
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          height: 100%;
        }
      </style>
      <div part="year-number">[[year]]</div>
      <div part="year-separator" aria-hidden="true"></div>
    `;
  }
};
defineCustomElement(DatePickerYear);
function mutablePropertyChange(inst, property, value, old, mutableData) {
  let isObject;
  if (mutableData) {
    isObject = typeof value === "object" && value !== null;
    if (isObject) {
      old = inst.__dataTemp[property];
    }
  }
  let shouldChange = old !== value && (old === old || value === value);
  if (isObject && shouldChange) {
    inst.__dataTemp[property] = value;
  }
  return shouldChange;
}
var MutableData = dedupingMixin((superClass) => {
  class MutableData2 extends superClass {
    /**
     * Overrides `PropertyEffects` to provide option for skipping
     * strict equality checking for Objects and Arrays.
     *
     * This method pulls the value to dirty check against from the `__dataTemp`
     * cache (rather than the normal `__data` cache) for Objects.  Since the temp
     * cache is cleared at the end of a turn, this implementation allows
     * side-effects of deep object changes to be processed by re-setting the
     * same object (using the temp cache as an in-turn backstop to prevent
     * cycles due to 2-way notification).
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     * @protected
     */
    _shouldPropertyChange(property, value, old) {
      return mutablePropertyChange(this, property, value, old, true);
    }
  }
  return MutableData2;
});
var OptionalMutableData = dedupingMixin((superClass) => {
  class OptionalMutableData2 extends superClass {
    /** @nocollapse */
    static get properties() {
      return {
        /**
         * Instance-level flag for configuring the dirty-checking strategy
         * for this element.  When true, Objects and Arrays will skip dirty
         * checking, otherwise strict equality checking will be used.
         */
        mutableData: Boolean
      };
    }
    /**
     * Overrides `PropertyEffects` to provide option for skipping
     * strict equality checking for Objects and Arrays.
     *
     * When `this.mutableData` is true on this instance, this method
     * pulls the value to dirty check against from the `__dataTemp` cache
     * (rather than the normal `__data` cache) for Objects.  Since the temp
     * cache is cleared at the end of a turn, this implementation allows
     * side-effects of deep object changes to be processed by re-setting the
     * same object (using the temp cache as an in-turn backstop to prevent
     * cycles due to 2-way notification).
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     * @protected
     */
    _shouldPropertyChange(property, value, old) {
      return mutablePropertyChange(this, property, value, old, this.mutableData);
    }
  }
  return OptionalMutableData2;
});
MutableData._mutablePropertyChange = mutablePropertyChange;
var newInstance = null;
function HTMLTemplateElementExtension() {
  return newInstance;
}
HTMLTemplateElementExtension.prototype = Object.create(HTMLTemplateElement.prototype, {
  constructor: {
    value: HTMLTemplateElementExtension,
    writable: true
  }
});
var DataTemplate = PropertyEffects(HTMLTemplateElementExtension);
var MutableDataTemplate = MutableData(DataTemplate);
function upgradeTemplate(template2, constructor) {
  newInstance = template2;
  Object.setPrototypeOf(template2, constructor.prototype);
  new constructor();
  newInstance = null;
}
var templateInstanceBase = PropertyEffects(class {
});
function showHideChildren(hide, children) {
  for (let i = 0; i < children.length; i++) {
    let n = children[i];
    if (Boolean(hide) != Boolean(n.__hideTemplateChildren__)) {
      if (n.nodeType === Node.TEXT_NODE) {
        if (hide) {
          n.__polymerTextContent__ = n.textContent;
          n.textContent = "";
        } else {
          n.textContent = n.__polymerTextContent__;
        }
      } else if (n.localName === "slot") {
        if (hide) {
          n.__polymerReplaced__ = document.createComment("hidden-slot");
          wrap(wrap(n).parentNode).replaceChild(n.__polymerReplaced__, n);
        } else {
          const replace = n.__polymerReplaced__;
          if (replace) {
            wrap(wrap(replace).parentNode).replaceChild(n, replace);
          }
        }
      } else if (n.style) {
        if (hide) {
          n.__polymerDisplay__ = n.style.display;
          n.style.display = "none";
        } else {
          n.style.display = n.__polymerDisplay__;
        }
      }
    }
    n.__hideTemplateChildren__ = hide;
    if (n._showHideChildren) {
      n._showHideChildren(hide);
    }
  }
}
var TemplateInstanceBase = class extends templateInstanceBase {
  constructor(props) {
    super();
    this._configureProperties(props);
    this.root = this._stampTemplate(this.__dataHost);
    let children = [];
    this.children = /** @type {!NodeList} */
    children;
    for (let n = this.root.firstChild; n; n = n.nextSibling) {
      children.push(n);
      n.__templatizeInstance = this;
    }
    if (this.__templatizeOwner && this.__templatizeOwner.__hideTemplateChildren__) {
      this._showHideChildren(true);
    }
    let options = this.__templatizeOptions;
    if (props && options.instanceProps || !options.instanceProps) {
      this._enableProperties();
    }
  }
  /**
   * Configure the given `props` by calling `_setPendingProperty`. Also
   * sets any properties stored in `__hostProps`.
   * @private
   * @param {Object} props Object of property name-value pairs to set.
   * @return {void}
   */
  _configureProperties(props) {
    let options = this.__templatizeOptions;
    if (options.forwardHostProp) {
      for (let hprop in this.__hostProps) {
        this._setPendingProperty(hprop, this.__dataHost["_host_" + hprop]);
      }
    }
    for (let iprop in props) {
      this._setPendingProperty(iprop, props[iprop]);
    }
  }
  /**
   * Forwards a host property to this instance.  This method should be
   * called on instances from the `options.forwardHostProp` callback
   * to propagate changes of host properties to each instance.
   *
   * Note this method enqueues the change, which are flushed as a batch.
   *
   * @param {string} prop Property or path name
   * @param {*} value Value of the property to forward
   * @return {void}
   */
  forwardHostProp(prop, value) {
    if (this._setPendingPropertyOrPath(prop, value, false, true)) {
      this.__dataHost._enqueueClient(this);
    }
  }
  /**
   * Override point for adding custom or simulated event handling.
   *
   * @override
   * @param {!Node} node Node to add event listener to
   * @param {string} eventName Name of event
   * @param {function(!Event):void} handler Listener function to add
   * @return {void}
   */
  _addEventListenerToNode(node, eventName, handler) {
    if (this._methodHost && this.__templatizeOptions.parentModel) {
      this._methodHost._addEventListenerToNode(node, eventName, (e) => {
        e.model = this;
        handler(e);
      });
    } else {
      let templateHost = this.__dataHost.__dataHost;
      if (templateHost) {
        templateHost._addEventListenerToNode(node, eventName, handler);
      }
    }
  }
  /**
   * Shows or hides the template instance top level child elements. For
   * text nodes, `textContent` is removed while "hidden" and replaced when
   * "shown."
   * @param {boolean} hide Set to true to hide the children;
   * set to false to show them.
   * @return {void}
   * @protected
   */
  _showHideChildren(hide) {
    showHideChildren(hide, this.children);
  }
  /**
   * Overrides default property-effects implementation to intercept
   * textContent bindings while children are "hidden" and cache in
   * private storage for later retrieval.
   *
   * @override
   * @param {!Node} node The node to set a property on
   * @param {string} prop The property to set
   * @param {*} value The value to set
   * @return {void}
   * @protected
   */
  _setUnmanagedPropertyToNode(node, prop, value) {
    if (node.__hideTemplateChildren__ && node.nodeType == Node.TEXT_NODE && prop == "textContent") {
      node.__polymerTextContent__ = value;
    } else {
      super._setUnmanagedPropertyToNode(node, prop, value);
    }
  }
  /**
   * Find the parent model of this template instance.  The parent model
   * is either another templatize instance that had option `parentModel: true`,
   * or else the host element.
   *
   * @return {!Polymer_PropertyEffects} The parent model of this instance
   */
  get parentModel() {
    let model = this.__parentModel;
    if (!model) {
      let options;
      model = this;
      do {
        model = model.__dataHost.__dataHost;
      } while ((options = model.__templatizeOptions) && !options.parentModel);
      this.__parentModel = model;
    }
    return model;
  }
  /**
   * Stub of HTMLElement's `dispatchEvent`, so that effects that may
   * dispatch events safely no-op.
   *
   * @param {Event} event Event to dispatch
   * @return {boolean} Always true.
   * @override
   */
  dispatchEvent(event) {
    return true;
  }
};
var MutableTemplateInstanceBase = MutableData(
  // This cast shouldn't be neccessary, but Closure doesn't understand that
  // TemplateInstanceBase is a constructor function.
  /** @type {function(new:TemplateInstanceBase)} */
  TemplateInstanceBase
);
function findMethodHost(template2) {
  let templateHost = template2.__dataHost;
  return templateHost && templateHost._methodHost || templateHost;
}
function createTemplatizerClass(template2, templateInfo, options) {
  let templatizerBase = options.mutableData ? MutableTemplateInstanceBase : TemplateInstanceBase;
  if (templatize.mixin) {
    templatizerBase = templatize.mixin(templatizerBase);
  }
  let klass = class extends templatizerBase {
  };
  klass.prototype.__templatizeOptions = options;
  klass.prototype._bindTemplate(template2);
  addNotifyEffects(klass, template2, templateInfo, options);
  return klass;
}
function addPropagateEffects(target, templateInfo, options, methodHost) {
  let userForwardHostProp = options.forwardHostProp;
  if (userForwardHostProp && templateInfo.hasHostProps) {
    const isTemplate = target.localName == "template";
    let klass = templateInfo.templatizeTemplateClass;
    if (!klass) {
      if (isTemplate) {
        let templatizedBase = options.mutableData ? MutableDataTemplate : DataTemplate;
        class TemplatizedTemplate extends templatizedBase {
        }
        klass = templateInfo.templatizeTemplateClass = TemplatizedTemplate;
      } else {
        const templatizedBase = target.constructor;
        class TemplatizedTemplateExtension extends templatizedBase {
        }
        klass = templateInfo.templatizeTemplateClass = TemplatizedTemplateExtension;
      }
      let hostProps = templateInfo.hostProps;
      for (let prop in hostProps) {
        klass.prototype._addPropertyEffect("_host_" + prop, klass.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE, {
          fn: createForwardHostPropEffect(prop, userForwardHostProp)
        });
        klass.prototype._createNotifyingProperty("_host_" + prop);
      }
      if (legacyWarnings && methodHost) {
        warnOnUndeclaredProperties(templateInfo, options, methodHost);
      }
    }
    if (target.__dataProto) {
      Object.assign(target.__data, target.__dataProto);
    }
    if (isTemplate) {
      upgradeTemplate(target, klass);
      target.__dataTemp = {};
      target.__dataPending = null;
      target.__dataOld = null;
      target._enableProperties();
    } else {
      Object.setPrototypeOf(target, klass.prototype);
      const hostProps = templateInfo.hostProps;
      for (let prop in hostProps) {
        prop = "_host_" + prop;
        if (prop in target) {
          const val = target[prop];
          delete target[prop];
          target.__data[prop] = val;
        }
      }
    }
  }
}
function createForwardHostPropEffect(hostProp, userForwardHostProp) {
  return function forwardHostProp(template2, prop, props) {
    userForwardHostProp.call(template2.__templatizeOwner, prop.substring("_host_".length), props[prop]);
  };
}
function addNotifyEffects(klass, template2, templateInfo, options) {
  let hostProps = templateInfo.hostProps || {};
  for (let iprop in options.instanceProps) {
    delete hostProps[iprop];
    let userNotifyInstanceProp = options.notifyInstanceProp;
    if (userNotifyInstanceProp) {
      klass.prototype._addPropertyEffect(iprop, klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY, {
        fn: createNotifyInstancePropEffect(iprop, userNotifyInstanceProp)
      });
    }
  }
  if (options.forwardHostProp && template2.__dataHost) {
    for (let hprop in hostProps) {
      if (!templateInfo.hasHostProps) {
        templateInfo.hasHostProps = true;
      }
      klass.prototype._addPropertyEffect(hprop, klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY, {
        fn: createNotifyHostPropEffect()
      });
    }
  }
}
function createNotifyInstancePropEffect(instProp, userNotifyInstanceProp) {
  return function notifyInstanceProp(inst, prop, props) {
    userNotifyInstanceProp.call(inst.__templatizeOwner, inst, prop, props[prop]);
  };
}
function createNotifyHostPropEffect() {
  return function notifyHostProp(inst, prop, props) {
    inst.__dataHost._setPendingPropertyOrPath("_host_" + prop, props[prop], true, true);
  };
}
function templatize(template2, owner, options) {
  if (strictTemplatePolicy && !findMethodHost(template2)) {
    throw new Error("strictTemplatePolicy: template owner not trusted");
  }
  options = /** @type {!TemplatizeOptions} */
  options || {};
  if (template2.__templatizeOwner) {
    throw new Error("A <template> can only be templatized once");
  }
  template2.__templatizeOwner = owner;
  const ctor = owner ? owner.constructor : TemplateInstanceBase;
  let templateInfo = ctor._parseTemplate(template2);
  let baseClass = templateInfo.templatizeInstanceClass;
  if (!baseClass) {
    baseClass = createTemplatizerClass(template2, templateInfo, options);
    templateInfo.templatizeInstanceClass = baseClass;
  }
  const methodHost = findMethodHost(template2);
  addPropagateEffects(template2, templateInfo, options, methodHost);
  let klass = class TemplateInstance extends baseClass {
  };
  klass.prototype._methodHost = methodHost;
  klass.prototype.__dataHost = /** @type {!DataTemplate} */
  template2;
  klass.prototype.__templatizeOwner = /** @type {!Object} */
  owner;
  klass.prototype.__hostProps = templateInfo.hostProps;
  klass = /** @type {function(new:TemplateInstanceBase)} */
  klass;
  return klass;
}
function warnOnUndeclaredProperties(templateInfo, options, methodHost) {
  const declaredProps = methodHost.constructor._properties;
  const {
    propertyEffects
  } = templateInfo;
  const {
    instanceProps
  } = options;
  for (let prop in propertyEffects) {
    if (!declaredProps[prop] && !(instanceProps && instanceProps[prop])) {
      const effects = propertyEffects[prop];
      for (let i = 0; i < effects.length; i++) {
        const {
          part
        } = effects[i].info;
        if (!(part.signature && part.signature.static)) {
          console.warn(`Property '${prop}' used in template but not declared in 'properties'; attribute will not be observed.`);
          break;
        }
      }
    }
  }
}
function modelForElement(template2, node) {
  let model;
  while (node) {
    if (model = node.__dataHost ? node : node.__templatizeInstance) {
      if (model.__dataHost != template2) {
        node = model.__dataHost;
      } else {
        return model;
      }
    } else {
      node = wrap(node).parentNode;
    }
  }
  return null;
}
var elementsHidden = false;
function hideElementsGlobally() {
  if (legacyOptimizations && !useShadow) {
    if (!elementsHidden) {
      elementsHidden = true;
      const style = document.createElement("style");
      style.textContent = "dom-bind,dom-if,dom-repeat{display:none;}";
      document.head.appendChild(style);
    }
    return true;
  }
  return false;
}
var domRepeatBase = OptionalMutableData(PolymerElement);
var DomRepeat = class extends domRepeatBase {
  // Not needed to find template; can be removed once the analyzer
  // can find the tag name from customElements.define call
  static get is() {
    return "dom-repeat";
  }
  static get template() {
    return null;
  }
  static get properties() {
    return {
      /**
       * An array containing items determining how many instances of the template
       * to stamp and that that each template instance should bind to.
       */
      items: {
        type: Array
      },
      /**
       * The name of the variable to add to the binding scope for the array
       * element associated with a given template instance.
       */
      as: {
        type: String,
        value: "item"
      },
      /**
       * The name of the variable to add to the binding scope with the index
       * of the instance in the sorted and filtered list of rendered items.
       * Note, for the index in the `this.items` array, use the value of the
       * `itemsIndexAs` property.
       */
      indexAs: {
        type: String,
        value: "index"
      },
      /**
       * The name of the variable to add to the binding scope with the index
       * of the instance in the `this.items` array. Note, for the index of
       * this instance in the sorted and filtered list of rendered items,
       * use the value of the `indexAs` property.
       */
      itemsIndexAs: {
        type: String,
        value: "itemsIndex"
      },
      /**
       * A function that should determine the sort order of the items.  This
       * property should either be provided as a string, indicating a method
       * name on the element's host, or else be an actual function.  The
       * function should match the sort function passed to `Array.sort`.
       * Using a sort function has no effect on the underlying `items` array.
       */
      sort: {
        type: Function,
        observer: "__sortChanged"
      },
      /**
       * A function that can be used to filter items out of the view.  This
       * property should either be provided as a string, indicating a method
       * name on the element's host, or else be an actual function.  The
       * function should match the sort function passed to `Array.filter`.
       * Using a filter function has no effect on the underlying `items` array.
       */
      filter: {
        type: Function,
        observer: "__filterChanged"
      },
      /**
       * When using a `filter` or `sort` function, the `observe` property
       * should be set to a space-separated list of the names of item
       * sub-fields that should trigger a re-sort or re-filter when changed.
       * These should generally be fields of `item` that the sort or filter
       * function depends on.
       */
      observe: {
        type: String,
        observer: "__observeChanged"
      },
      /**
       * When using a `filter` or `sort` function, the `delay` property
       * determines a debounce time in ms after a change to observed item
       * properties that must pass before the filter or sort is re-run.
       * This is useful in rate-limiting shuffling of the view when
       * item changes may be frequent.
       */
      delay: Number,
      /**
       * Count of currently rendered items after `filter` (if any) has been applied.
       * If "chunking mode" is enabled, `renderedItemCount` is updated each time a
       * set of template instances is rendered.
       *
       */
      renderedItemCount: {
        type: Number,
        notify: !suppressTemplateNotifications,
        readOnly: true
      },
      /**
       * When greater than zero, defines an initial count of template instances
       * to render after setting the `items` array, before the next paint, and
       * puts the `dom-repeat` into "chunking mode".  The remaining items (and
       * any future items as a result of pushing onto the array) will be created
       * and rendered incrementally at each animation frame thereof until all
       * instances have been rendered.
       */
      initialCount: {
        type: Number
      },
      /**
       * When `initialCount` is used, this property defines a frame rate (in
       * fps) to target by throttling the number of instances rendered each
       * frame to not exceed the budget for the target frame rate.  The
       * framerate is effectively the number of `requestAnimationFrame`s that
       * it tries to allow to actually fire in a given second. It does this
       * by measuring the time between `rAF`s and continuously adjusting the
       * number of items created each `rAF` to maintain the target framerate.
       * Setting this to a higher number allows lower latency and higher
       * throughput for event handlers and other tasks, but results in a
       * longer time for the remaining items to complete rendering.
       */
      targetFramerate: {
        type: Number,
        value: 20
      },
      _targetFrameTime: {
        type: Number,
        computed: "__computeFrameTime(targetFramerate)"
      },
      /**
       * When the global `suppressTemplateNotifications` setting is used, setting
       * `notifyDomChange: true` will enable firing `dom-change` events on this
       * element.
       */
      notifyDomChange: {
        type: Boolean
      },
      /**
       * When chunking is enabled via `initialCount` and the `items` array is
       * set to a new array, this flag controls whether the previously rendered
       * instances are reused or not.
       *
       * When `true`, any previously rendered template instances are updated in
       * place to their new item values synchronously in one shot, and then any
       * further items (if any) are chunked out.  When `false`, the list is
       * returned back to its `initialCount` (any instances over the initial
       * count are discarded) and the remainder of the list is chunked back in.
       * Set this to `true` to avoid re-creating the list and losing scroll
       * position, although note that when changing the list to completely
       * different data the render thread will be blocked until all existing
       * instances are updated to their new data.
       */
      reuseChunkedInstances: {
        type: Boolean
      }
    };
  }
  static get observers() {
    return ["__itemsChanged(items.*)"];
  }
  constructor() {
    super();
    this.__instances = [];
    this.__renderDebouncer = null;
    this.__itemsIdxToInstIdx = {};
    this.__chunkCount = null;
    this.__renderStartTime = null;
    this.__itemsArrayChanged = false;
    this.__shouldMeasureChunk = false;
    this.__shouldContinueChunking = false;
    this.__chunkingId = 0;
    this.__sortFn = null;
    this.__filterFn = null;
    this.__observePaths = null;
    this.__ctor = null;
    this.__isDetached = true;
    this.template = null;
  }
  /**
   * @override
   * @return {void}
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    this.__isDetached = true;
    for (let i = 0; i < this.__instances.length; i++) {
      this.__detachInstance(i);
    }
    if (this.__chunkingId) {
      cancelAnimationFrame(this.__chunkingId);
    }
  }
  /**
   * @override
   * @return {void}
   */
  connectedCallback() {
    super.connectedCallback();
    if (!hideElementsGlobally()) {
      this.style.display = "none";
    }
    if (this.__isDetached) {
      this.__isDetached = false;
      let wrappedParent = wrap(wrap(this).parentNode);
      for (let i = 0; i < this.__instances.length; i++) {
        this.__attachInstance(i, wrappedParent);
      }
      if (this.__chunkingId) {
        this.__render();
      }
    }
  }
  __ensureTemplatized() {
    if (!this.__ctor) {
      const thisAsTemplate = (
        /** @type {!HTMLTemplateElement} */
        /** @type {!HTMLElement} */
        this
      );
      let template2 = this.template = thisAsTemplate._templateInfo ? thisAsTemplate : (
        /** @type {!HTMLTemplateElement} */
        this.querySelector("template")
      );
      if (!template2) {
        let observer = new MutationObserver(() => {
          if (this.querySelector("template")) {
            observer.disconnect();
            this.__render();
          } else {
            throw new Error("dom-repeat requires a <template> child");
          }
        });
        observer.observe(this, {
          childList: true
        });
        return false;
      }
      let instanceProps = {};
      instanceProps[this.as] = true;
      instanceProps[this.indexAs] = true;
      instanceProps[this.itemsIndexAs] = true;
      this.__ctor = templatize(template2, this, {
        mutableData: this.mutableData,
        parentModel: true,
        instanceProps,
        /**
         * @this {DomRepeat}
         * @param {string} prop Property to set
         * @param {*} value Value to set property to
         */
        forwardHostProp: function(prop, value) {
          let i$ = this.__instances;
          for (let i = 0, inst; i < i$.length && (inst = i$[i]); i++) {
            inst.forwardHostProp(prop, value);
          }
        },
        /**
         * @this {DomRepeat}
         * @param {Object} inst Instance to notify
         * @param {string} prop Property to notify
         * @param {*} value Value to notify
         */
        notifyInstanceProp: function(inst, prop, value) {
          if (matches(this.as, prop)) {
            let idx = inst[this.itemsIndexAs];
            if (prop == this.as) {
              this.items[idx] = value;
            }
            let path = translate(this.as, `${JSCompiler_renameProperty("items", this)}.${idx}`, prop);
            this.notifyPath(path, value);
          }
        }
      });
    }
    return true;
  }
  __getMethodHost() {
    return this.__dataHost._methodHost || this.__dataHost;
  }
  __functionFromPropertyValue(functionOrMethodName) {
    if (typeof functionOrMethodName === "string") {
      let methodName = functionOrMethodName;
      let obj = this.__getMethodHost();
      return function() {
        return obj[methodName].apply(obj, arguments);
      };
    }
    return functionOrMethodName;
  }
  __sortChanged(sort) {
    this.__sortFn = this.__functionFromPropertyValue(sort);
    if (this.items) {
      this.__debounceRender(this.__render);
    }
  }
  __filterChanged(filter) {
    this.__filterFn = this.__functionFromPropertyValue(filter);
    if (this.items) {
      this.__debounceRender(this.__render);
    }
  }
  __computeFrameTime(rate) {
    return Math.ceil(1e3 / rate);
  }
  __observeChanged() {
    this.__observePaths = this.observe && this.observe.replace(".*", ".").split(" ");
  }
  __handleObservedPaths(path) {
    if (this.__sortFn || this.__filterFn) {
      if (!path) {
        this.__debounceRender(this.__render, this.delay);
      } else if (this.__observePaths) {
        let paths = this.__observePaths;
        for (let i = 0; i < paths.length; i++) {
          if (path.indexOf(paths[i]) === 0) {
            this.__debounceRender(this.__render, this.delay);
          }
        }
      }
    }
  }
  __itemsChanged(change) {
    if (this.items && !Array.isArray(this.items)) {
      console.warn("dom-repeat expected array for `items`, found", this.items);
    }
    if (!this.__handleItemPath(change.path, change.value)) {
      if (change.path === "items") {
        this.__itemsArrayChanged = true;
      }
      this.__debounceRender(this.__render);
    }
  }
  /**
   * @param {function(this:DomRepeat)} fn Function to debounce.
   * @param {number=} delay Delay in ms to debounce by.
   */
  __debounceRender(fn, delay = 0) {
    this.__renderDebouncer = Debouncer2.debounce(this.__renderDebouncer, delay > 0 ? timeOut$1.after(delay) : microTask$1, fn.bind(this));
    enqueueDebouncer(this.__renderDebouncer);
  }
  /**
   * Forces the element to render its content. Normally rendering is
   * asynchronous to a provoking change. This is done for efficiency so
   * that multiple changes trigger only a single render. The render method
   * should be called if, for example, template rendering is required to
   * validate application state.
   * @return {void}
   */
  render() {
    this.__debounceRender(this.__render);
    flush();
  }
  __render() {
    if (!this.__ensureTemplatized()) {
      return;
    }
    let items = this.items || [];
    const isntIdxToItemsIdx = this.__sortAndFilterItems(items);
    const limit = this.__calculateLimit(isntIdxToItemsIdx.length);
    this.__updateInstances(items, limit, isntIdxToItemsIdx);
    if (this.initialCount && (this.__shouldMeasureChunk || this.__shouldContinueChunking)) {
      cancelAnimationFrame(this.__chunkingId);
      this.__chunkingId = requestAnimationFrame(() => {
        this.__chunkingId = null;
        this.__continueChunking();
      });
    }
    this._setRenderedItemCount(this.__instances.length);
    if (!suppressTemplateNotifications || this.notifyDomChange) {
      this.dispatchEvent(new CustomEvent("dom-change", {
        bubbles: true,
        composed: true
      }));
    }
  }
  __sortAndFilterItems(items) {
    let isntIdxToItemsIdx = new Array(items.length);
    for (let i = 0; i < items.length; i++) {
      isntIdxToItemsIdx[i] = i;
    }
    if (this.__filterFn) {
      isntIdxToItemsIdx = isntIdxToItemsIdx.filter((i, idx, array) => this.__filterFn(items[i], idx, array));
    }
    if (this.__sortFn) {
      isntIdxToItemsIdx.sort((a, b) => this.__sortFn(items[a], items[b]));
    }
    return isntIdxToItemsIdx;
  }
  __calculateLimit(filteredItemCount) {
    let limit = filteredItemCount;
    const currentCount = this.__instances.length;
    if (this.initialCount) {
      let newCount;
      if (!this.__chunkCount || this.__itemsArrayChanged && !this.reuseChunkedInstances) {
        limit = Math.min(filteredItemCount, this.initialCount);
        newCount = Math.max(limit - currentCount, 0);
        this.__chunkCount = newCount || 1;
      } else {
        newCount = Math.min(Math.max(filteredItemCount - currentCount, 0), this.__chunkCount);
        limit = Math.min(currentCount + newCount, filteredItemCount);
      }
      this.__shouldMeasureChunk = newCount === this.__chunkCount;
      this.__shouldContinueChunking = limit < filteredItemCount;
      this.__renderStartTime = performance.now();
    }
    this.__itemsArrayChanged = false;
    return limit;
  }
  __continueChunking() {
    if (this.__shouldMeasureChunk) {
      const renderTime = performance.now() - this.__renderStartTime;
      const ratio = this._targetFrameTime / renderTime;
      this.__chunkCount = Math.round(this.__chunkCount * ratio) || 1;
    }
    if (this.__shouldContinueChunking) {
      this.__debounceRender(this.__render);
    }
  }
  __updateInstances(items, limit, isntIdxToItemsIdx) {
    const itemsIdxToInstIdx = this.__itemsIdxToInstIdx = {};
    let instIdx;
    for (instIdx = 0; instIdx < limit; instIdx++) {
      let inst = this.__instances[instIdx];
      let itemIdx = isntIdxToItemsIdx[instIdx];
      let item = items[itemIdx];
      itemsIdxToInstIdx[itemIdx] = instIdx;
      if (inst) {
        inst._setPendingProperty(this.as, item);
        inst._setPendingProperty(this.indexAs, instIdx);
        inst._setPendingProperty(this.itemsIndexAs, itemIdx);
        inst._flushProperties();
      } else {
        this.__insertInstance(item, instIdx, itemIdx);
      }
    }
    for (let i = this.__instances.length - 1; i >= instIdx; i--) {
      this.__detachAndRemoveInstance(i);
    }
  }
  __detachInstance(idx) {
    let inst = this.__instances[idx];
    const wrappedRoot = wrap(inst.root);
    for (let i = 0; i < inst.children.length; i++) {
      let el = inst.children[i];
      wrappedRoot.appendChild(el);
    }
    return inst;
  }
  __attachInstance(idx, parent) {
    let inst = this.__instances[idx];
    parent.insertBefore(inst.root, this);
  }
  __detachAndRemoveInstance(idx) {
    this.__detachInstance(idx);
    this.__instances.splice(idx, 1);
  }
  __stampInstance(item, instIdx, itemIdx) {
    let model = {};
    model[this.as] = item;
    model[this.indexAs] = instIdx;
    model[this.itemsIndexAs] = itemIdx;
    return new this.__ctor(model);
  }
  __insertInstance(item, instIdx, itemIdx) {
    const inst = this.__stampInstance(item, instIdx, itemIdx);
    let beforeRow = this.__instances[instIdx + 1];
    let beforeNode = beforeRow ? beforeRow.children[0] : this;
    wrap(wrap(this).parentNode).insertBefore(inst.root, beforeNode);
    this.__instances[instIdx] = inst;
    return inst;
  }
  // Implements extension point from Templatize mixin
  /**
   * Shows or hides the template instance top level child elements. For
   * text nodes, `textContent` is removed while "hidden" and replaced when
   * "shown."
   * @param {boolean} hidden Set to true to hide the children;
   * set to false to show them.
   * @return {void}
   * @protected
   */
  _showHideChildren(hidden) {
    for (let i = 0; i < this.__instances.length; i++) {
      this.__instances[i]._showHideChildren(hidden);
    }
  }
  // Called as a side effect of a host items.<key>.<path> path change,
  // responsible for notifying item.<path> changes to inst for key
  __handleItemPath(path, value) {
    let itemsPath = path.slice(6);
    let dot = itemsPath.indexOf(".");
    let itemsIdx = dot < 0 ? itemsPath : itemsPath.substring(0, dot);
    if (itemsIdx == parseInt(itemsIdx, 10)) {
      let itemSubPath = dot < 0 ? "" : itemsPath.substring(dot + 1);
      this.__handleObservedPaths(itemSubPath);
      let instIdx = this.__itemsIdxToInstIdx[itemsIdx];
      let inst = this.__instances[instIdx];
      if (inst) {
        let itemPath = this.as + (itemSubPath ? "." + itemSubPath : "");
        inst._setPendingPropertyOrPath(itemPath, value, false, true);
        inst._flushProperties();
      }
      return true;
    }
  }
  /**
   * Returns the item associated with a given element stamped by
   * this `dom-repeat`.
   *
   * Note, to modify sub-properties of the item,
   * `modelForElement(el).set('item.<sub-prop>', value)`
   * should be used.
   *
   * @param {!HTMLElement} el Element for which to return the item.
   * @return {*} Item associated with the element.
   */
  itemForElement(el) {
    let instance = this.modelForElement(el);
    return instance && instance[this.as];
  }
  /**
   * Returns the inst index for a given element stamped by this `dom-repeat`.
   * If `sort` is provided, the index will reflect the sorted order (rather
   * than the original array order).
   *
   * @param {!HTMLElement} el Element for which to return the index.
   * @return {?number} Row index associated with the element (note this may
   *   not correspond to the array index if a user `sort` is applied).
   */
  indexForElement(el) {
    let instance = this.modelForElement(el);
    return instance && instance[this.indexAs];
  }
  /**
   * Returns the template "model" associated with a given element, which
   * serves as the binding scope for the template instance the element is
   * contained in. A template model
   * should be used to manipulate data associated with this template instance.
   *
   * Example:
   *
   *   let model = modelForElement(el);
   *   if (model.index < 10) {
   *     model.set('item.checked', true);
   *   }
   *
   * @param {!HTMLElement} el Element for which to return a template model.
   * @return {TemplateInstanceBase} Model representing the binding scope for
   *   the element.
   */
  modelForElement(el) {
    return modelForElement(this.template, el);
  }
};
customElements.define(DomRepeat.is, DomRepeat);
var MonthCalendarMixin = (superClass) => class MonthCalendarMixinClass extends FocusMixin(superClass) {
  static get properties() {
    return {
      /**
       * A `Date` object defining the month to be displayed. Only year and
       * month properties are actually used.
       */
      month: {
        type: Object,
        value: /* @__PURE__ */ new Date(),
        sync: true
      },
      /**
       * A `Date` object for the currently selected date.
       */
      selectedDate: {
        type: Object,
        notify: true,
        sync: true
      },
      /**
       * A `Date` object for the currently focused date.
       */
      focusedDate: {
        type: Object
      },
      /**
       * Set true to display ISO-8601 week numbers in the calendar. Notice that
       * displaying week numbers is only supported when `i18n.firstDayOfWeek`
       * is 1 (Monday).
       */
      showWeekNumbers: {
        type: Boolean,
        value: false
      },
      i18n: {
        type: Object
      },
      /**
       * Flag stating whether taps on the component should be ignored.
       */
      ignoreTaps: {
        type: Boolean
      },
      /**
       * The earliest date that can be selected. All earlier dates will be disabled.
       */
      minDate: {
        type: Date,
        value: null,
        sync: true
      },
      /**
       * The latest date that can be selected. All later dates will be disabled.
       */
      maxDate: {
        type: Date,
        value: null,
        sync: true
      },
      /**
       * A function to be used to determine whether the user can select a given date.
       * Receives a `DatePickerDate` object of the date to be selected and should return a
       * boolean.
       * @type {Function | undefined}
       */
      isDateDisabled: {
        type: Function,
        value: () => false
      },
      enteredDate: {
        type: Date
      },
      disabled: {
        type: Boolean,
        reflectToAttribute: true,
        computed: "__computeDisabled(month, minDate, maxDate)"
      },
      /** @protected */
      _days: {
        type: Array,
        computed: "__computeDays(month, i18n, minDate, maxDate, isDateDisabled)"
      },
      /** @protected */
      _weeks: {
        type: Array,
        computed: "__computeWeeks(_days)"
      },
      /** @private */
      _notTapping: {
        type: Boolean
      },
      /** @private */
      __hasFocus: {
        type: Boolean
      }
    };
  }
  static get observers() {
    return ["__focusedDateChanged(focusedDate, _days)", "_showWeekNumbersChanged(showWeekNumbers, i18n)"];
  }
  get focusableDateElement() {
    return [...this.shadowRoot.querySelectorAll("[part~=date]")].find((datePart) => {
      return dateEquals(datePart.date, this.focusedDate);
    });
  }
  /** @protected */
  ready() {
    super.ready();
    addListener(this.$.monthGrid, "tap", this._handleTap.bind(this));
  }
  /** @override */
  _setFocused(focused) {
    super._setFocused(focused);
    this.__hasFocus = focused;
  }
  /**
   * Returns true if all the dates in the month are out of the allowed range
   * @protected
   */
  __computeDisabled(month, minDate, maxDate) {
    const firstDate = new Date(0, 0);
    firstDate.setFullYear(month.getFullYear());
    firstDate.setMonth(month.getMonth());
    firstDate.setDate(1);
    const lastDate = new Date(0, 0);
    lastDate.setFullYear(month.getFullYear());
    lastDate.setMonth(month.getMonth() + 1);
    lastDate.setDate(0);
    if (minDate && maxDate && minDate.getMonth() === maxDate.getMonth() && minDate.getMonth() === month.getMonth() && maxDate.getDate() - minDate.getDate() >= 0) {
      return false;
    }
    return !dateAllowed(firstDate, minDate, maxDate) && !dateAllowed(lastDate, minDate, maxDate);
  }
  /** @protected */
  _getTitle(month, i18n) {
    if (month === void 0 || i18n === void 0) {
      return;
    }
    return i18n.formatTitle(i18n.monthNames[month.getMonth()], month.getFullYear());
  }
  /** @protected */
  _onMonthGridTouchStart() {
    this._notTapping = false;
    setTimeout(() => {
      this._notTapping = true;
    }, 300);
  }
  /** @private */
  _dateAdd(date, delta) {
    date.setDate(date.getDate() + delta);
  }
  /** @private */
  _applyFirstDayOfWeek(weekDayNames, firstDayOfWeek) {
    if (weekDayNames === void 0 || firstDayOfWeek === void 0) {
      return;
    }
    return weekDayNames.slice(firstDayOfWeek).concat(weekDayNames.slice(0, firstDayOfWeek));
  }
  /** @protected */
  __computeWeekDayNames(i18n, showWeekNumbers) {
    if (i18n === void 0 || showWeekNumbers === void 0) {
      return [];
    }
    const {
      weekdays,
      weekdaysShort,
      firstDayOfWeek
    } = i18n;
    const weekDayNamesShort = this._applyFirstDayOfWeek(weekdaysShort, firstDayOfWeek);
    const weekDayNames = this._applyFirstDayOfWeek(weekdays, firstDayOfWeek);
    return weekDayNames.map((day, index) => {
      return {
        weekDay: day,
        weekDayShort: weekDayNamesShort[index]
      };
    }).slice(0, 7);
  }
  /** @private */
  __focusedDateChanged(focusedDate, days) {
    if (Array.isArray(days) && days.some((date) => dateEquals(date, focusedDate))) {
      this.removeAttribute("aria-hidden");
    } else {
      this.setAttribute("aria-hidden", "true");
    }
  }
  /** @protected */
  _getDate(date) {
    return date ? date.getDate() : "";
  }
  /** @protected */
  __computeShowWeekSeparator(showWeekNumbers, i18n) {
    return showWeekNumbers && i18n && i18n.firstDayOfWeek === 1;
  }
  /** @protected */
  _isToday(date) {
    return dateEquals(/* @__PURE__ */ new Date(), date);
  }
  /** @protected */
  __computeDays(month, i18n) {
    if (month === void 0 || i18n === void 0) {
      return [];
    }
    const date = new Date(0, 0);
    date.setFullYear(month.getFullYear());
    date.setMonth(month.getMonth());
    date.setDate(1);
    while (date.getDay() !== i18n.firstDayOfWeek) {
      this._dateAdd(date, -1);
    }
    const days = [];
    const startMonth = date.getMonth();
    const targetMonth = month.getMonth();
    while (date.getMonth() === targetMonth || date.getMonth() === startMonth) {
      days.push(date.getMonth() === targetMonth ? new Date(date.getTime()) : null);
      this._dateAdd(date, 1);
    }
    return days;
  }
  /** @protected */
  __computeWeeks(days) {
    return days.reduce((acc, day, i) => {
      if (i % 7 === 0) {
        acc.push([]);
      }
      acc[acc.length - 1].push(day);
      return acc;
    }, []);
  }
  /** @protected */
  _handleTap(e) {
    if (!this.ignoreTaps && !this._notTapping && e.target.date && !e.target.hasAttribute("disabled")) {
      this.selectedDate = e.target.date;
      this.dispatchEvent(new CustomEvent("date-tap", {
        detail: {
          date: e.target.date
        },
        bubbles: true,
        composed: true
      }));
    }
  }
  /** @protected */
  _preventDefault(e) {
    e.preventDefault();
  }
  /** @protected */
  __computeWeekNumber(days) {
    const date = days.reduce((acc, d) => {
      return !acc && d ? d : acc;
    });
    return getISOWeekNumber(date);
  }
  /** @protected */
  __computeDayAriaLabel(date) {
    if (!date) {
      return "";
    }
    let ariaLabel = `${this._getDate(date)} ${this.i18n.monthNames[date.getMonth()]} ${date.getFullYear()}, ${this.i18n.weekdays[date.getDay()]}`;
    if (this._isToday(date)) {
      ariaLabel += `, ${this.i18n.today}`;
    }
    return ariaLabel;
  }
  /** @private */
  _showWeekNumbersChanged(showWeekNumbers, i18n) {
    if (this.__computeShowWeekSeparator(showWeekNumbers, i18n)) {
      this.setAttribute("week-numbers", "");
    } else {
      this.removeAttribute("week-numbers");
    }
  }
  // eslint-disable-next-line @typescript-eslint/max-params
  __computeDatePart(date, focusedDate, selectedDate, minDate, maxDate, isDateDisabled, enteredDate, hasFocus) {
    const result = ["date"];
    if (this.__isDayDisabled(date, minDate, maxDate, isDateDisabled)) {
      result.push("disabled");
    }
    if (dateEquals(date, focusedDate) && (hasFocus || dateEquals(date, enteredDate))) {
      result.push("focused");
    }
    if (this.__isDaySelected(date, selectedDate)) {
      result.push("selected");
    }
    if (this._isToday(date)) {
      result.push("today");
    }
    if (date < normalizeDate(/* @__PURE__ */ new Date())) {
      result.push("past");
    }
    if (date > normalizeDate(/* @__PURE__ */ new Date())) {
      result.push("future");
    }
    return result.join(" ");
  }
  /** @private */
  __isDaySelected(date, selectedDate) {
    return dateEquals(date, selectedDate);
  }
  /** @private */
  __computeDayAriaSelected(date, selectedDate) {
    return String(this.__isDaySelected(date, selectedDate));
  }
  /** @private */
  __isDayDisabled(date, minDate, maxDate, isDateDisabled) {
    return !dateAllowed(date, minDate, maxDate, isDateDisabled);
  }
  /** @private */
  __computeDayAriaDisabled(date, min, max, isDateDisabled) {
    if (date === void 0 || min === void 0 && max === void 0 && isDateDisabled === void 0) {
      return "false";
    }
    return String(this.__isDayDisabled(date, min, max, isDateDisabled));
  }
  /** @private */
  __computeDayTabIndex(date, focusedDate) {
    return dateEquals(date, focusedDate) ? "0" : "-1";
  }
};
var monthCalendarStyles = i$3`
  :host {
    display: block;
  }

  #monthGrid {
    width: 100%;
    border-collapse: collapse;
  }

  #days-container tr,
  #weekdays-container tr {
    display: flex;
  }

  [part~='date'] {
    outline: none;
  }

  [part~='disabled'] {
    pointer-events: none;
  }

  [part='week-number'][hidden],
  [part='weekday'][hidden] {
    display: none;
  }

  [part='weekday'],
  [part~='date'] {
    width: calc(100% / 7);
    padding: 0;
    font-weight: normal;
  }

  [part='weekday']:empty,
  [part='week-number'] {
    width: 12.5%;
    flex-shrink: 0;
    padding: 0;
  }

  :host([week-numbers]) [part='weekday']:not(:empty),
  :host([week-numbers]) [part~='date'] {
    width: 12.5%;
  }

  @media (forced-colors: active) {
    [part~='date'][part~='focused'] {
      outline: 1px solid;
    }

    [part~='date'][part~='selected'] {
      outline: 3px solid;
    }
  }
`;
registerStyles("vaadin-month-calendar", monthCalendarStyles, {
  moduleId: "vaadin-month-calendar-styles"
});
var MonthCalendar = class extends MonthCalendarMixin(ThemableMixin(PolymerElement)) {
  static get template() {
    return html`
      <div part="month-header" id="month-header" aria-hidden="true">[[_getTitle(month, i18n)]]</div>
      <table
        id="monthGrid"
        role="grid"
        aria-labelledby="month-header"
        on-touchend="_preventDefault"
        on-touchstart="_onMonthGridTouchStart"
      >
        <thead id="weekdays-container">
          <tr role="row" part="weekdays">
            <th part="weekday" aria-hidden="true" hidden$="[[!__computeShowWeekSeparator(showWeekNumbers, i18n)]]"></th>
            <template is="dom-repeat" items="[[__computeWeekDayNames(i18n, showWeekNumbers)]]">
              <th role="columnheader" part="weekday" scope="col" abbr$="[[item.weekDay]]" aria-hidden="true">
                [[item.weekDayShort]]
              </th>
            </template>
          </tr>
        </thead>
        <tbody id="days-container">
          <template is="dom-repeat" items="[[_weeks]]" as="week">
            <tr role="row">
              <td
                part="week-number"
                aria-hidden="true"
                hidden$="[[!__computeShowWeekSeparator(showWeekNumbers, i18n)]]"
              >
                [[__computeWeekNumber(week)]]
              </td>
              <template is="dom-repeat" items="[[week]]">
                <td
                  role="gridcell"
                  part$="[[__computeDatePart(item, focusedDate, selectedDate, minDate, maxDate, isDateDisabled, enteredDate, __hasFocus)]]"
                  date="[[item]]"
                  tabindex$="[[__computeDayTabIndex(item, focusedDate)]]"
                  disabled$="[[__isDayDisabled(item, minDate, maxDate, isDateDisabled)]]"
                  aria-selected$="[[__computeDayAriaSelected(item, selectedDate)]]"
                  aria-disabled$="[[__computeDayAriaDisabled(item, minDate, maxDate, isDateDisabled)]]"
                  aria-label$="[[__computeDayAriaLabel(item)]]"
                  >[[_getDate(item)]]</td
                >
              </template>
            </tr>
          </template>
        </tbody>
      </table>
    `;
  }
  static get is() {
    return "vaadin-month-calendar";
  }
};
defineCustomElement(MonthCalendar);
var MediaQueryController = class {
  constructor(query, callback) {
    this.query = query;
    this.callback = callback;
    this._boundQueryHandler = this._queryHandler.bind(this);
  }
  hostConnected() {
    this._removeListener();
    this._mediaQuery = window.matchMedia(this.query);
    this._addListener();
    this._queryHandler(this._mediaQuery);
  }
  hostDisconnected() {
    this._removeListener();
  }
  /** @private */
  _addListener() {
    if (this._mediaQuery) {
      this._mediaQuery.addListener(this._boundQueryHandler);
    }
  }
  /** @private */
  _removeListener() {
    if (this._mediaQuery) {
      this._mediaQuery.removeListener(this._boundQueryHandler);
    }
    this._mediaQuery = null;
  }
  /** @private */
  _queryHandler(mediaQuery) {
    if (typeof this.callback === "function") {
      this.callback(mediaQuery.matches);
    }
  }
};
var DatePickerOverlayContentMixin = (superClass) => class DatePickerOverlayContentMixin extends superClass {
  static get properties() {
    return {
      scrollDuration: {
        type: Number,
        value: 300
      },
      /**
       * The value for this element.
       */
      selectedDate: {
        type: Object,
        value: null,
        sync: true
      },
      /**
       * Date value which is focused using keyboard.
       */
      focusedDate: {
        type: Object,
        notify: true,
        observer: "_focusedDateChanged",
        sync: true
      },
      _focusedMonthDate: Number,
      /**
       * Date which should be visible when there is no value selected.
       */
      initialPosition: {
        type: Object,
        observer: "_initialPositionChanged",
        sync: true
      },
      _originDate: {
        type: Object,
        value: /* @__PURE__ */ new Date()
      },
      _visibleMonthIndex: Number,
      _desktopMode: {
        type: Boolean,
        observer: "_desktopModeChanged"
      },
      _desktopMediaQuery: {
        type: String,
        value: "(min-width: 375px)"
      },
      _translateX: {
        observer: "_translateXChanged"
      },
      _yearScrollerWidth: {
        value: 50
      },
      i18n: {
        type: Object
      },
      showWeekNumbers: {
        type: Boolean,
        value: false
      },
      _ignoreTaps: Boolean,
      _notTapping: Boolean,
      /**
       * The earliest date that can be selected. All earlier dates will be disabled.
       */
      minDate: {
        type: Object,
        sync: true
      },
      /**
       * The latest date that can be selected. All later dates will be disabled.
       */
      maxDate: {
        type: Object,
        sync: true
      },
      /**
       * A function to be used to determine whether the user can select a given date.
       * Receives a `DatePickerDate` object of the date to be selected and should return a
       * boolean.
       *
       * @type {function(DatePickerDate): boolean | undefined}
       */
      isDateDisabled: {
        type: Function
      },
      enteredDate: {
        type: Date,
        sync: true
      },
      /**
       * Input label
       */
      label: String,
      _cancelButton: {
        type: Object
      },
      _todayButton: {
        type: Object
      },
      calendars: {
        type: Array,
        value: () => []
      },
      years: {
        type: Array,
        value: () => []
      }
    };
  }
  static get observers() {
    return ["__updateCalendars(calendars, i18n, minDate, maxDate, selectedDate, focusedDate, showWeekNumbers, _ignoreTaps, _theme, isDateDisabled, enteredDate)", "__updateCancelButton(_cancelButton, i18n)", "__updateTodayButton(_todayButton, i18n, minDate, maxDate, isDateDisabled)", "__updateYears(years, selectedDate, _theme)"];
  }
  /**
   * Whether to scroll to a sub-month position when scrolling to a date.
   * This is active if the month scroller is not large enough to fit a
   * full month. In that case we want to scroll to a position between
   * two months in order to have the focused date in the visible area.
   * @returns {boolean} whether to use sub-month scrolling
   * @private
   */
  get __useSubMonthScrolling() {
    return this._monthScroller.clientHeight < this._monthScroller.itemHeight + this._monthScroller.bufferOffset;
  }
  get focusableDateElement() {
    return this.calendars.map((calendar) => calendar.focusableDateElement).find(Boolean);
  }
  /** @protected */
  _addListeners() {
    setTouchAction(this.$.scrollers, "pan-y");
    addListener(this.$.scrollers, "track", this._track.bind(this));
    addListener(this.shadowRoot.querySelector('[part="clear-button"]'), "tap", this._clear.bind(this));
    addListener(this.shadowRoot.querySelector('[part="toggle-button"]'), "tap", this._cancel.bind(this));
    addListener(this.shadowRoot.querySelector('[part="years-toggle-button"]'), "tap", this._toggleYearScroller.bind(this));
  }
  /** @protected */
  _initControllers() {
    this.addController(new MediaQueryController(this._desktopMediaQuery, (matches2) => {
      this._desktopMode = matches2;
    }));
    this.addController(new SlotController(this, "today-button", "vaadin-button", {
      observe: false,
      initializer: (btn) => {
        btn.setAttribute("theme", "tertiary");
        btn.addEventListener("keydown", (e) => this.__onTodayButtonKeyDown(e));
        addListener(btn, "tap", this._onTodayTap.bind(this));
        this._todayButton = btn;
      }
    }));
    this.addController(new SlotController(this, "cancel-button", "vaadin-button", {
      observe: false,
      initializer: (btn) => {
        btn.setAttribute("theme", "tertiary");
        btn.addEventListener("keydown", (e) => this.__onCancelButtonKeyDown(e));
        addListener(btn, "tap", this._cancel.bind(this));
        this._cancelButton = btn;
      }
    }));
    this.__initMonthScroller();
    this.__initYearScroller();
  }
  reset() {
    this._closeYearScroller();
    this._toggleAnimateClass(true);
  }
  /**
   * Focuses the cancel button
   */
  focusCancel() {
    this._cancelButton.focus();
  }
  /**
   * Scrolls the list to the given Date.
   */
  scrollToDate(date, animate) {
    const offset = this.__useSubMonthScrolling ? this._calculateWeekScrollOffset(date) : 0;
    this._scrollToPosition(this._differenceInMonths(date, this._originDate) + offset, animate);
    this._monthScroller.forceUpdate();
  }
  /** @private */
  __initMonthScroller() {
    this.addController(new SlotController(this, "months", "vaadin-date-picker-month-scroller", {
      observe: false,
      initializer: (scroller) => {
        scroller.addEventListener("custom-scroll", () => {
          this._onMonthScroll();
        });
        scroller.addEventListener("touchstart", () => {
          this._onMonthScrollTouchStart();
        });
        scroller.addEventListener("keydown", (e) => {
          this.__onMonthCalendarKeyDown(e);
        });
        scroller.addEventListener("init-done", () => {
          const calendars = [...this.querySelectorAll("vaadin-month-calendar")];
          calendars.forEach((calendar) => {
            calendar.addEventListener("selected-date-changed", (e) => {
              this.selectedDate = e.detail.value;
            });
          });
          this.calendars = calendars;
        });
        this._monthScroller = scroller;
      }
    }));
  }
  /** @private */
  __initYearScroller() {
    this.addController(new SlotController(this, "years", "vaadin-date-picker-year-scroller", {
      observe: false,
      initializer: (scroller) => {
        scroller.setAttribute("aria-hidden", "true");
        addListener(scroller, "tap", (e) => {
          this._onYearTap(e);
        });
        scroller.addEventListener("custom-scroll", () => {
          this._onYearScroll();
        });
        scroller.addEventListener("touchstart", () => {
          this._onYearScrollTouchStart();
        });
        scroller.addEventListener("init-done", () => {
          this.years = [...this.querySelectorAll("vaadin-date-picker-year")];
        });
        this._yearScroller = scroller;
      }
    }));
  }
  /** @private */
  __updateCancelButton(cancelButton, i18n) {
    if (cancelButton) {
      cancelButton.textContent = i18n && i18n.cancel;
    }
  }
  /** @private */
  __updateTodayButton(todayButton, i18n, minDate, maxDate, isDateDisabled) {
    if (todayButton) {
      todayButton.textContent = i18n && i18n.today;
      todayButton.disabled = !this._isTodayAllowed(minDate, maxDate, isDateDisabled);
    }
  }
  // eslint-disable-next-line @typescript-eslint/max-params
  __updateCalendars(calendars, i18n, minDate, maxDate, selectedDate, focusedDate, showWeekNumbers, ignoreTaps, theme, isDateDisabled, enteredDate) {
    if (calendars && calendars.length) {
      calendars.forEach((calendar) => {
        calendar.i18n = i18n;
        calendar.minDate = minDate;
        calendar.maxDate = maxDate;
        calendar.isDateDisabled = isDateDisabled;
        calendar.focusedDate = focusedDate;
        calendar.selectedDate = selectedDate;
        calendar.showWeekNumbers = showWeekNumbers;
        calendar.ignoreTaps = ignoreTaps;
        calendar.enteredDate = enteredDate;
        if (theme) {
          calendar.setAttribute("theme", theme);
        } else {
          calendar.removeAttribute("theme");
        }
      });
    }
  }
  /** @private */
  __updateYears(years, selectedDate, theme) {
    if (years && years.length) {
      years.forEach((year) => {
        year.selectedDate = selectedDate;
        if (theme) {
          year.setAttribute("theme", theme);
        } else {
          year.removeAttribute("theme");
        }
      });
    }
  }
  /**
   * Select a date and fire event indicating user interaction.
   * @protected
   */
  _selectDate(dateToSelect) {
    if (!this._dateAllowed(dateToSelect)) {
      return false;
    }
    this.selectedDate = dateToSelect;
    this.dispatchEvent(new CustomEvent("date-selected", {
      detail: {
        date: dateToSelect
      },
      bubbles: true,
      composed: true
    }));
    return true;
  }
  /** @private */
  _desktopModeChanged(desktopMode) {
    this.toggleAttribute("desktop", desktopMode);
  }
  /** @private */
  _focusedDateChanged(focusedDate) {
    this.revealDate(focusedDate);
  }
  /**
   * Scrolls the month and year scrollers enough to reveal the given date.
   */
  revealDate(date, animate = true) {
    if (!date) {
      return;
    }
    const diff = this._differenceInMonths(date, this._originDate);
    if (this.__useSubMonthScrolling) {
      const offset = this._calculateWeekScrollOffset(date);
      this._scrollToPosition(diff + offset, animate);
      return;
    }
    const scrolledAboveViewport = this._monthScroller.position > diff;
    const visibleArea = Math.max(this._monthScroller.itemHeight, this._monthScroller.clientHeight - this._monthScroller.bufferOffset * 2);
    const visibleItems = visibleArea / this._monthScroller.itemHeight;
    const scrolledBelowViewport = this._monthScroller.position + visibleItems - 1 < diff;
    if (scrolledAboveViewport) {
      this._scrollToPosition(diff, animate);
    } else if (scrolledBelowViewport) {
      this._scrollToPosition(diff - visibleItems + 1, animate);
    }
  }
  /**
   * Calculates an offset to be added to the month scroll position
   * when using sub-month scrolling, in order ensure that the week
   * that the date is in is visible even for small scroll areas.
   * As the month scroller uses a month as minimal scroll unit
   * (a value of `1` equals one month), we can not exactly identify
   * the position of a specific week. This is a best effort
   * implementation based on manual testing.
   * @param date the date for which to calculate the offset
   * @returns {number} the offset
   * @private
   */
  _calculateWeekScrollOffset(date) {
    const temp = new Date(0, 0);
    temp.setFullYear(date.getFullYear());
    temp.setMonth(date.getMonth());
    temp.setDate(1);
    let week = 0;
    while (temp.getDate() < date.getDate()) {
      temp.setDate(temp.getDate() + 1);
      if (temp.getDay() === this.i18n.firstDayOfWeek) {
        week += 1;
      }
    }
    return week / 6;
  }
  /** @private */
  _initialPositionChanged(initialPosition) {
    if (this._monthScroller && this._yearScroller) {
      this._monthScroller.active = true;
      this._yearScroller.active = true;
    }
    this.scrollToDate(initialPosition);
  }
  /** @private */
  _repositionYearScroller() {
    const monthPosition = this._monthScroller.position;
    this._visibleMonthIndex = Math.floor(monthPosition);
    this._yearScroller.position = (monthPosition + this._originDate.getMonth()) / 12;
  }
  /** @private */
  _repositionMonthScroller() {
    this._monthScroller.position = this._yearScroller.position * 12 - this._originDate.getMonth();
    this._visibleMonthIndex = Math.floor(this._monthScroller.position);
  }
  /** @private */
  _onMonthScroll() {
    this._repositionYearScroller();
    this._doIgnoreTaps();
  }
  /** @private */
  _onYearScroll() {
    this._repositionMonthScroller();
    this._doIgnoreTaps();
  }
  /** @private */
  _onYearScrollTouchStart() {
    this._notTapping = false;
    setTimeout(() => {
      this._notTapping = true;
    }, 300);
    this._repositionMonthScroller();
  }
  /** @private */
  _onMonthScrollTouchStart() {
    this._repositionYearScroller();
  }
  /** @private */
  _doIgnoreTaps() {
    this._ignoreTaps = true;
    this._debouncer = Debouncer.debounce(this._debouncer, timeOut.after(300), () => {
      this._ignoreTaps = false;
    });
  }
  /** @protected */
  _formatDisplayed(date, i18n, label) {
    if (date && i18n && typeof i18n.formatDate === "function") {
      return i18n.formatDate(extractDateParts(date));
    }
    return label;
  }
  /** @private */
  _onTodayTap() {
    const today = this._getTodayMidnight();
    if (Math.abs(this._monthScroller.position - this._differenceInMonths(today, this._originDate)) < 1e-3) {
      this._selectDate(today);
      this._close();
    } else {
      this._scrollToCurrentMonth();
    }
  }
  /** @private */
  _scrollToCurrentMonth() {
    if (this.focusedDate) {
      this.focusedDate = /* @__PURE__ */ new Date();
    }
    this.scrollToDate(/* @__PURE__ */ new Date(), true);
  }
  /** @private */
  _onYearTap(e) {
    if (!this._ignoreTaps && !this._notTapping) {
      const scrollDelta = e.detail.y - (this._yearScroller.getBoundingClientRect().top + this._yearScroller.clientHeight / 2);
      const yearDelta = scrollDelta / this._yearScroller.itemHeight;
      this._scrollToPosition(this._monthScroller.position + yearDelta * 12, true);
    }
  }
  /** @private */
  _scrollToPosition(targetPosition, animate) {
    if (this._targetPosition !== void 0) {
      this._targetPosition = targetPosition;
      return;
    }
    if (!animate) {
      this._monthScroller.position = targetPosition;
      this._monthScroller.forceUpdate();
      this._targetPosition = void 0;
      this._repositionYearScroller();
      this.__tryFocusDate();
      return;
    }
    this._targetPosition = targetPosition;
    let revealResolve;
    this._revealPromise = new Promise((resolve) => {
      revealResolve = resolve;
    });
    const easingFunction = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) {
        return c / 2 * t * t + b;
      }
      t -= 1;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };
    let start = 0;
    const initialPosition = this._monthScroller.position;
    const smoothScroll = (timestamp) => {
      if (!start) {
        start = timestamp;
      }
      const currentTime = timestamp - start;
      if (currentTime < this.scrollDuration) {
        const currentPos = easingFunction(currentTime, initialPosition, this._targetPosition - initialPosition, this.scrollDuration);
        this._monthScroller.position = currentPos;
        window.requestAnimationFrame(smoothScroll);
      } else {
        this.dispatchEvent(new CustomEvent("scroll-animation-finished", {
          bubbles: true,
          composed: true,
          detail: {
            position: this._targetPosition,
            oldPosition: initialPosition
          }
        }));
        this._monthScroller.position = this._targetPosition;
        this._monthScroller.forceUpdate();
        this._targetPosition = void 0;
        revealResolve();
        this._revealPromise = void 0;
      }
      setTimeout(this._repositionYearScroller.bind(this), 1);
    };
    window.requestAnimationFrame(smoothScroll);
  }
  /** @private */
  _limit(value, range) {
    return Math.min(range.max, Math.max(range.min, value));
  }
  /** @private */
  _handleTrack(e) {
    if (Math.abs(e.detail.dx) < 10 || Math.abs(e.detail.ddy) > 10) {
      return;
    }
    if (Math.abs(e.detail.ddx) > this._yearScrollerWidth / 3) {
      this._toggleAnimateClass(true);
    }
    const newTranslateX = this._translateX + e.detail.ddx;
    this._translateX = this._limit(newTranslateX, {
      min: 0,
      max: this._yearScrollerWidth
    });
  }
  /** @private */
  _track(e) {
    if (this._desktopMode) {
      return;
    }
    switch (e.detail.state) {
      case "start":
        this._toggleAnimateClass(false);
        break;
      case "track":
        this._handleTrack(e);
        break;
      case "end":
        this._toggleAnimateClass(true);
        if (this._translateX >= this._yearScrollerWidth / 2) {
          this._closeYearScroller();
        } else {
          this._openYearScroller();
        }
        break;
    }
  }
  /** @private */
  _toggleAnimateClass(enable) {
    if (enable) {
      this.classList.add("animate");
    } else {
      this.classList.remove("animate");
    }
  }
  /** @private */
  _toggleYearScroller() {
    if (this._isYearScrollerVisible()) {
      this._closeYearScroller();
    } else {
      this._openYearScroller();
    }
  }
  /** @private */
  _openYearScroller() {
    this._translateX = 0;
    this.setAttribute("years-visible", "");
  }
  /** @private */
  _closeYearScroller() {
    this.removeAttribute("years-visible");
    this._translateX = this._yearScrollerWidth;
  }
  /** @private */
  _isYearScrollerVisible() {
    return this._translateX < this._yearScrollerWidth / 2;
  }
  /** @private */
  _translateXChanged(x) {
    if (!this._desktopMode) {
      this._monthScroller.style.transform = `translateX(${x - this._yearScrollerWidth}px)`;
      this._yearScroller.style.transform = `translateX(${x}px)`;
    }
  }
  /** @private */
  _yearAfterXMonths(months) {
    return dateAfterXMonths(months).getFullYear();
  }
  /** @private */
  _differenceInMonths(date1, date2) {
    const months = (date1.getFullYear() - date2.getFullYear()) * 12;
    return months - date2.getMonth() + date1.getMonth();
  }
  /** @private */
  _clear() {
    this._selectDate("");
  }
  /** @private */
  _close() {
    this.dispatchEvent(new CustomEvent("close", {
      bubbles: true,
      composed: true
    }));
  }
  /** @private */
  _cancel() {
    this.focusedDate = this.selectedDate;
    this._close();
  }
  /** @protected */
  _preventDefault(e) {
    e.preventDefault();
  }
  /** @private */
  __toggleDate(date) {
    if (dateEquals(date, this.selectedDate)) {
      this._clear();
      this.focusedDate = date;
    } else {
      this._selectDate(date);
    }
  }
  /** @private */
  __onMonthCalendarKeyDown(event) {
    let handled = false;
    switch (event.key) {
      case "ArrowDown":
        this._moveFocusByDays(7);
        handled = true;
        break;
      case "ArrowUp":
        this._moveFocusByDays(-7);
        handled = true;
        break;
      case "ArrowRight":
        this._moveFocusByDays(this.__isRTL ? -1 : 1);
        handled = true;
        break;
      case "ArrowLeft":
        this._moveFocusByDays(this.__isRTL ? 1 : -1);
        handled = true;
        break;
      case "Enter":
        if (this._selectDate(this.focusedDate)) {
          this._close();
          handled = true;
        }
        break;
      case " ":
        this.__toggleDate(this.focusedDate);
        handled = true;
        break;
      case "Home":
        this._moveFocusInsideMonth(this.focusedDate, "minDate");
        handled = true;
        break;
      case "End":
        this._moveFocusInsideMonth(this.focusedDate, "maxDate");
        handled = true;
        break;
      case "PageDown":
        this._moveFocusByMonths(event.shiftKey ? 12 : 1);
        handled = true;
        break;
      case "PageUp":
        this._moveFocusByMonths(event.shiftKey ? -12 : -1);
        handled = true;
        break;
      case "Tab":
        this._onTabKeyDown(event, "calendar");
        break;
    }
    if (handled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  /** @private */
  _onTabKeyDown(event, section) {
    event.stopPropagation();
    switch (section) {
      case "calendar":
        if (event.shiftKey) {
          event.preventDefault();
          if (this.hasAttribute("fullscreen")) {
            this.focusCancel();
          } else {
            this.__focusInput();
          }
        }
        break;
      case "today":
        if (event.shiftKey) {
          event.preventDefault();
          this.focusDateElement();
        }
        break;
      case "cancel":
        if (!event.shiftKey) {
          event.preventDefault();
          if (this.hasAttribute("fullscreen")) {
            this.focusDateElement();
          } else {
            this.__focusInput();
          }
        }
        break;
    }
  }
  /** @private */
  __onTodayButtonKeyDown(event) {
    if (event.key === "Tab") {
      this._onTabKeyDown(event, "today");
    }
  }
  /** @private */
  __onCancelButtonKeyDown(event) {
    if (event.key === "Tab") {
      this._onTabKeyDown(event, "cancel");
    }
  }
  /** @private */
  __focusInput() {
    this.dispatchEvent(new CustomEvent("focus-input", {
      bubbles: true,
      composed: true
    }));
  }
  /** @private */
  __tryFocusDate() {
    const dateToFocus = this.__pendingDateFocus;
    if (dateToFocus) {
      const dateElement = this.focusableDateElement;
      if (dateElement && dateEquals(dateElement.date, this.__pendingDateFocus)) {
        delete this.__pendingDateFocus;
        dateElement.focus();
      }
    }
  }
  focusDate(date, keepMonth) {
    return __async(this, null, function* () {
      const dateToFocus = date || this.selectedDate || this.initialPosition || /* @__PURE__ */ new Date();
      this.focusedDate = dateToFocus;
      if (!keepMonth) {
        this._focusedMonthDate = dateToFocus.getDate();
      }
      yield this.focusDateElement(false);
    });
  }
  focusDateElement(reveal = true) {
    return __async(this, null, function* () {
      this.__pendingDateFocus = this.focusedDate;
      if (!this.calendars.length) {
        yield new Promise((resolve) => {
          afterNextRender(this, () => {
            flush();
            resolve();
          });
        });
      }
      if (reveal) {
        this.revealDate(this.focusedDate);
      }
      if (this._revealPromise) {
        yield this._revealPromise;
      }
      this.__tryFocusDate();
    });
  }
  /** @private */
  _focusClosestDate(focus) {
    this.focusDate(getClosestDate(focus, [this.minDate, this.maxDate]));
  }
  /** @private */
  _focusAllowedDate(dateToFocus, diff, keepMonth) {
    if (this._dateAllowed(dateToFocus, void 0, void 0, () => false)) {
      this.focusDate(dateToFocus, keepMonth);
    } else if (this._dateAllowed(this.focusedDate)) {
      if (diff > 0) {
        this.focusDate(this.maxDate);
      } else {
        this.focusDate(this.minDate);
      }
    } else {
      this._focusClosestDate(this.focusedDate);
    }
  }
  /** @private */
  _getDateDiff(months, days) {
    const date = new Date(0, 0);
    date.setFullYear(this.focusedDate.getFullYear());
    date.setMonth(this.focusedDate.getMonth() + months);
    if (days) {
      date.setDate(this.focusedDate.getDate() + days);
    }
    return date;
  }
  /** @private */
  _moveFocusByDays(days) {
    const dateToFocus = this._getDateDiff(0, days);
    this._focusAllowedDate(dateToFocus, days, false);
  }
  /** @private */
  _moveFocusByMonths(months) {
    const dateToFocus = this._getDateDiff(months);
    const targetMonth = dateToFocus.getMonth();
    if (!this._focusedMonthDate) {
      this._focusedMonthDate = this.focusedDate.getDate();
    }
    dateToFocus.setDate(this._focusedMonthDate);
    if (dateToFocus.getMonth() !== targetMonth) {
      dateToFocus.setDate(0);
    }
    this._focusAllowedDate(dateToFocus, months, true);
  }
  /** @private */
  _moveFocusInsideMonth(focusedDate, property) {
    const dateToFocus = new Date(0, 0);
    dateToFocus.setFullYear(focusedDate.getFullYear());
    if (property === "minDate") {
      dateToFocus.setMonth(focusedDate.getMonth());
      dateToFocus.setDate(1);
    } else {
      dateToFocus.setMonth(focusedDate.getMonth() + 1);
      dateToFocus.setDate(0);
    }
    if (this._dateAllowed(dateToFocus)) {
      this.focusDate(dateToFocus);
    } else if (this._dateAllowed(focusedDate)) {
      this.focusDate(this[property]);
    } else {
      this._focusClosestDate(focusedDate);
    }
  }
  /** @private */
  _dateAllowed(date, min = this.minDate, max = this.maxDate, isDateDisabled = this.isDateDisabled) {
    return dateAllowed(date, min, max, isDateDisabled);
  }
  /** @private */
  _isTodayAllowed(min, max, isDateDisabled) {
    return this._dateAllowed(this._getTodayMidnight(), min, max, isDateDisabled);
  }
  /** @private */
  _getTodayMidnight() {
    const today = /* @__PURE__ */ new Date();
    const todayMidnight = new Date(0, 0);
    todayMidnight.setFullYear(today.getFullYear());
    todayMidnight.setMonth(today.getMonth());
    todayMidnight.setDate(today.getDate());
    return todayMidnight;
  }
  /**
   * Fired when the scroller reaches the target scrolling position.
   * @event scroll-animation-finished
   * @param {Number} detail.position new position
   * @param {Number} detail.oldPosition old position
   */
};
var overlayContentStyles = i$3`
  :host {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    outline: none;
  }

  [part='overlay-header'] {
    display: flex;
    flex-shrink: 0;
    flex-wrap: nowrap;
    align-items: center;
  }

  :host(:not([fullscreen])) [part='overlay-header'] {
    display: none;
  }

  [part='label'] {
    flex-grow: 1;
  }

  [hidden] {
    display: none !important;
  }

  [part='years-toggle-button'] {
    display: flex;
  }

  #scrollers {
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  :host([desktop]) ::slotted([slot='months']) {
    right: 50px;
    transform: none !important;
  }

  :host([desktop]) ::slotted([slot='years']) {
    transform: none !important;
  }

  :host(.animate) ::slotted([slot='months']),
  :host(.animate) ::slotted([slot='years']) {
    transition: all 200ms;
  }

  [part='toolbar'] {
    display: flex;
    justify-content: space-between;
    z-index: 2;
    flex-shrink: 0;
  }
`;
registerStyles("vaadin-date-picker-overlay-content", overlayContentStyles, {
  moduleId: "vaadin-date-picker-overlay-content-styles"
});
var DatePickerOverlayContent = class extends DatePickerOverlayContentMixin(ControllerMixin(ThemableMixin(DirMixin(PolymerElement)))) {
  static get template() {
    return html`
      <div part="overlay-header" on-touchend="_preventDefault" aria-hidden="true">
        <div part="label">[[_formatDisplayed(selectedDate, i18n, label)]]</div>
        <div part="clear-button" hidden$="[[!selectedDate]]"></div>
        <div part="toggle-button"></div>

        <div part="years-toggle-button" hidden$="[[_desktopMode]]" aria-hidden="true">
          [[_yearAfterXMonths(_visibleMonthIndex)]]
        </div>
      </div>

      <div id="scrollers">
        <slot name="months"></slot>
        <slot name="years"></slot>
      </div>

      <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
        <slot name="today-button"></slot>
        <slot name="cancel-button"></slot>
      </div>
    `;
  }
  static get is() {
    return "vaadin-date-picker-overlay-content";
  }
  /** @protected */
  ready() {
    super.ready();
    this.setAttribute("role", "dialog");
    this._addListeners();
    this._initControllers();
  }
};
defineCustomElement(DatePickerOverlayContent);
var datePickerI18nDefaults = Object.freeze({
  monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  firstDayOfWeek: 0,
  today: "Today",
  cancel: "Cancel",
  referenceDate: "",
  formatDate(d) {
    const yearStr = String(d.year).replace(/\d+/u, (y) => "0000".substr(y.length) + y);
    return [d.month + 1, d.day, yearStr].join("/");
  },
  parseDate(text) {
    const parts = text.split("/");
    const today = /* @__PURE__ */ new Date();
    let date, month = today.getMonth(), year = today.getFullYear();
    if (parts.length === 3) {
      month = parseInt(parts[0]) - 1;
      date = parseInt(parts[1]);
      year = parseInt(parts[2]);
      if (parts[2].length < 3 && year >= 0) {
        const usedReferenceDate = this.referenceDate ? parseDate(this.referenceDate) : /* @__PURE__ */ new Date();
        year = getAdjustedYear(usedReferenceDate, year, month, date);
      }
    } else if (parts.length === 2) {
      month = parseInt(parts[0]) - 1;
      date = parseInt(parts[1]);
    } else if (parts.length === 1) {
      date = parseInt(parts[0]);
    }
    if (date !== void 0) {
      return {
        day: date,
        month,
        year
      };
    }
  },
  formatTitle: (monthName, fullYear) => {
    return `${monthName} ${fullYear}`;
  }
});
var DatePickerMixin = (subclass) => class DatePickerMixinClass extends OverlayClassMixin(ControllerMixin(DelegateFocusMixin(InputConstraintsMixin(KeyboardMixin(subclass))))) {
  static get properties() {
    return {
      /**
       * The current selected date.
       * @type {Date | undefined}
       * @protected
       */
      _selectedDate: {
        type: Object,
        sync: true
      },
      /**
       * @type {Date | undefined}
       * @protected
       */
      _focusedDate: {
        type: Object,
        sync: true
      },
      /**
       * Selected date.
       *
       * Supported date formats:
       * - ISO 8601 `"YYYY-MM-DD"` (default)
       * - 6-digit extended ISO 8601 `"+YYYYYY-MM-DD"`, `"-YYYYYY-MM-DD"`
       *
       * @type {string}
       */
      value: {
        type: String,
        notify: true,
        value: "",
        sync: true
      },
      /**
       * Date which should be visible when there is no value selected.
       *
       * The same date formats as for the `value` property are supported.
       * @attr {string} initial-position
       */
      initialPosition: String,
      /**
       * Set true to open the date selector overlay.
       */
      opened: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
        observer: "_openedChanged",
        sync: true
      },
      /**
       * Set true to prevent the overlay from opening automatically.
       * @attr {boolean} auto-open-disabled
       */
      autoOpenDisabled: {
        type: Boolean,
        sync: true
      },
      /**
       * Set true to display ISO-8601 week numbers in the calendar. Notice that
       * displaying week numbers is only supported when `i18n.firstDayOfWeek`
       * is 1 (Monday).
       * @attr {boolean} show-week-numbers
       */
      showWeekNumbers: {
        type: Boolean,
        value: false,
        sync: true
      },
      /**
       * @type {boolean}
       * @protected
       */
      _fullscreen: {
        type: Boolean,
        value: false,
        sync: true
      },
      /**
       * @type {string}
       * @protected
       */
      _fullscreenMediaQuery: {
        value: "(max-width: 450px), (max-height: 450px)"
      },
      /**
       * The object used to localize this component.
       * To change the default localization, replace the entire
       * `i18n` object with a custom one.
       *
       * To update individual properties, extend the existing i18n object like so:
       * ```
       * datePicker.i18n = { ...datePicker.i18n, {
       *   formatDate: date => { ... },
       *   parseDate: value => { ... },
       * }};
       * ```
       *
       * The object has the following JSON structure and default values:
       *
       * ```
       * {
       *   // An array with the full names of months starting
       *   // with January.
       *   monthNames: [
       *     'January', 'February', 'March', 'April', 'May',
       *     'June', 'July', 'August', 'September',
       *     'October', 'November', 'December'
       *   ],
       *
       *   // An array of weekday names starting with Sunday. Used
       *   // in screen reader announcements.
       *   weekdays: [
       *     'Sunday', 'Monday', 'Tuesday', 'Wednesday',
       *     'Thursday', 'Friday', 'Saturday'
       *   ],
       *
       *   // An array of short weekday names starting with Sunday.
       *   // Displayed in the calendar.
       *   weekdaysShort: [
       *     'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
       *   ],
       *
       *   // An integer indicating the first day of the week
       *   // (0 = Sunday, 1 = Monday, etc.).
       *   firstDayOfWeek: 0,
       *
       *   // Translation of the Today shortcut button text.
       *   today: 'Today',
       *
       *   // Translation of the Cancel button text.
       *   cancel: 'Cancel',
       *
       *   // Used for adjusting the year value when parsing dates with short years.
       *   // The year values between 0 and 99 are evaluated and adjusted.
       *   // Example: for a referenceDate of 1970-10-30;
       *   //   dateToBeParsed: 40-10-30, result: 1940-10-30
       *   //   dateToBeParsed: 80-10-30, result: 1980-10-30
       *   //   dateToBeParsed: 10-10-30, result: 2010-10-30
       *   // Supported date format: ISO 8601 `"YYYY-MM-DD"` (default)
       *   // The default value is the current date.
       *   referenceDate: '',
       *
       *   // A function to format given `Object` as
       *   // date string. Object is in the format `{ day: ..., month: ..., year: ... }`
       *   // Note: The argument month is 0-based. This means that January = 0 and December = 11.
       *   formatDate: d => {
       *     // returns a string representation of the given
       *     // object in 'MM/DD/YYYY' -format
       *   },
       *
       *   // A function to parse the given text to an `Object` in the format `{ day: ..., month: ..., year: ... }`.
       *   // Must properly parse (at least) text formatted by `formatDate`.
       *   // Setting the property to null will disable keyboard input feature.
       *   // Note: The argument month is 0-based. This means that January = 0 and December = 11.
       *   parseDate: text => {
       *     // Parses a string in 'MM/DD/YY', 'MM/DD' or 'DD' -format to
       *     // an `Object` in the format `{ day: ..., month: ..., year: ... }`.
       *   }
       *
       *   // A function to format given `monthName` and
       *   // `fullYear` integer as calendar title string.
       *   formatTitle: (monthName, fullYear) => {
       *     return monthName + ' ' + fullYear;
       *   }
       * }
       * ```
       *
       * @type {!DatePickerI18n}
       * @default {English/US}
       */
      i18n: {
        type: Object,
        sync: true,
        value: () => __spreadValues({}, datePickerI18nDefaults)
      },
      /**
       * The earliest date that can be selected. All earlier dates will be disabled.
       *
       * Supported date formats:
       * - ISO 8601 `"YYYY-MM-DD"` (default)
       * - 6-digit extended ISO 8601 `"+YYYYYY-MM-DD"`, `"-YYYYYY-MM-DD"`
       *
       * @type {string | undefined}
       */
      min: {
        type: String,
        sync: true
      },
      /**
       * The latest date that can be selected. All later dates will be disabled.
       *
       * Supported date formats:
       * - ISO 8601 `"YYYY-MM-DD"` (default)
       * - 6-digit extended ISO 8601 `"+YYYYYY-MM-DD"`, `"-YYYYYY-MM-DD"`
       *
       * @type {string | undefined}
       */
      max: {
        type: String,
        sync: true
      },
      /**
       * A function to be used to determine whether the user can select a given date.
       * Receives a `DatePickerDate` object of the date to be selected and should return a
       * boolean.
       *
       * @type {function(DatePickerDate): boolean | undefined}
       */
      isDateDisabled: {
        type: Function
      },
      /**
       * The earliest date that can be selected. All earlier dates will be disabled.
       * @type {Date | undefined}
       * @protected
       */
      _minDate: {
        type: Date,
        computed: "__computeMinOrMaxDate(min)"
      },
      /**
       * The latest date that can be selected. All later dates will be disabled.
       * @type {Date | undefined}
       * @protected
       */
      _maxDate: {
        type: Date,
        computed: "__computeMinOrMaxDate(max)"
      },
      /** @private */
      _noInput: {
        type: Boolean,
        computed: "_isNoInput(inputElement, _fullscreen, _ios, i18n, opened, autoOpenDisabled)"
      },
      /** @private */
      _ios: {
        type: Boolean,
        value: isIOS
      },
      /** @private */
      _focusOverlayOnOpen: Boolean,
      /** @private */
      _overlayContent: {
        type: Object,
        sync: true
      },
      /** @private */
      __enteredDate: {
        type: Date,
        sync: true
      }
    };
  }
  static get observers() {
    return ["_selectedDateChanged(_selectedDate, i18n)", "_focusedDateChanged(_focusedDate, i18n)", "__updateOverlayContent(_overlayContent, i18n, label, _minDate, _maxDate, _focusedDate, _selectedDate, showWeekNumbers, isDateDisabled, __enteredDate)", "__updateOverlayContentTheme(_overlayContent, _theme)", "__updateOverlayContentFullScreen(_overlayContent, _fullscreen)"];
  }
  static get constraints() {
    return [...super.constraints, "min", "max"];
  }
  constructor() {
    super();
    this._boundOnClick = this._onClick.bind(this);
    this._boundOnScroll = this._onScroll.bind(this);
    this._boundOverlayRenderer = this._overlayRenderer.bind(this);
  }
  /** @override */
  get _inputElementValue() {
    return super._inputElementValue;
  }
  /** @override */
  set _inputElementValue(value) {
    super._inputElementValue = value;
    const parsedDate = this.__parseDate(value);
    this.__setEnteredDate(parsedDate);
  }
  /**
   * Override a getter from `InputControlMixin` to make it optional
   * and to prevent warning when a clear button is missing,
   * for example when using <vaadin-date-picker-light>.
   * @protected
   * @return {Element | null | undefined}
   */
  get clearElement() {
    return null;
  }
  /** @private */
  get _nativeInput() {
    if (this.inputElement) {
      return this.inputElement.focusElement || this.inputElement;
    }
    return null;
  }
  /**
   * The input element's value when it cannot be parsed as a date, and an empty string otherwise.
   *
   * @return {string}
   * @private
   */
  get __unparsableValue() {
    if (!this._inputElementValue || this.__parseDate(this._inputElementValue)) {
      return "";
    }
    return this._inputElementValue;
  }
  /**
   * Override an event listener from `DelegateFocusMixin`
   * @protected
   */
  _onFocus(event) {
    super._onFocus(event);
    if (this._noInput && !isKeyboardActive()) {
      event.target.blur();
    }
  }
  /**
   * Override an event listener from `DelegateFocusMixin`
   * @protected
   */
  _onBlur(event) {
    super._onBlur(event);
    if (!this.opened) {
      this.__commitParsedOrFocusedDate();
      if (document.hasFocus()) {
        this._requestValidation();
      }
    }
  }
  /** @protected */
  ready() {
    super.ready();
    this.addEventListener("click", this._boundOnClick);
    this.addController(new MediaQueryController(this._fullscreenMediaQuery, (matches2) => {
      this._fullscreen = matches2;
    }));
    this.addController(new VirtualKeyboardController(this));
    const overlay = this.$.overlay;
    this._overlayElement = overlay;
    overlay.renderer = this._boundOverlayRenderer;
    this.addEventListener("mousedown", () => this.__bringToFront());
    this.addEventListener("touchstart", () => this.__bringToFront());
  }
  /** @protected */
  disconnectedCallback() {
    super.disconnectedCallback();
    this.opened = false;
  }
  /**
   * Opens the dropdown.
   */
  open() {
    if (!this.disabled && !this.readonly) {
      this.opened = true;
    }
  }
  /**
   * Closes the dropdown.
   */
  close() {
    this.$.overlay.close();
  }
  /** @private */
  _overlayRenderer(root) {
    if (root.firstChild) {
      return;
    }
    const content = document.createElement("vaadin-date-picker-overlay-content");
    root.appendChild(content);
    this._overlayContent = content;
    content.addEventListener("close", () => {
      this._close();
    });
    content.addEventListener("focus-input", this._focusAndSelect.bind(this));
    content.addEventListener("date-tap", (e) => {
      this.__commitDate(e.detail.date);
      this._close();
    });
    content.addEventListener("date-selected", (e) => {
      this.__commitDate(e.detail.date);
    });
    content.addEventListener("focusin", () => {
      if (this._keyboardActive) {
        this._setFocused(true);
      }
    });
    content.addEventListener("focusout", (event) => {
      if (this._shouldRemoveFocus(event)) {
        this._setFocused(false);
      }
    });
    content.addEventListener("focused-date-changed", (e) => {
      this._focusedDate = e.detail.value;
    });
    content.addEventListener("click", (e) => e.stopPropagation());
  }
  /**
   * @param {string} dateString
   * @private
   */
  __parseDate(dateString) {
    if (!this.i18n.parseDate) {
      return;
    }
    let dateObject = this.i18n.parseDate(dateString);
    if (dateObject) {
      dateObject = parseDate(`${dateObject.year}-${dateObject.month + 1}-${dateObject.day}`);
    }
    if (dateObject && !isNaN(dateObject.getTime())) {
      return dateObject;
    }
  }
  /**
   * @param {Date} dateObject
   * @private
   */
  __formatDate(dateObject) {
    if (this.i18n.formatDate) {
      return this.i18n.formatDate(extractDateParts(dateObject));
    }
  }
  /**
   * Returns true if the current input value satisfies all constraints (if any)
   *
   * Override the `checkValidity` method for custom validations.
   *
   * @return {boolean} True if the value is valid
   */
  checkValidity() {
    const inputValue = this._inputElementValue;
    const inputValid = !inputValue || !!this._selectedDate && inputValue === this.__formatDate(this._selectedDate);
    const isDateValid = !this._selectedDate || dateAllowed(this._selectedDate, this._minDate, this._maxDate, this.isDateDisabled);
    let inputValidity = true;
    if (this.inputElement && this.inputElement.checkValidity) {
      inputValidity = this.inputElement.checkValidity();
    }
    return inputValid && isDateValid && inputValidity;
  }
  /**
   * Override method inherited from `FocusMixin`
   * to not call `_setFocused(true)` when focus
   * is restored after closing overlay on click,
   * and to avoid removing `focus-ring` attribute.
   *
   * @param {!FocusEvent} _event
   * @return {boolean}
   * @protected
   * @override
   */
  _shouldSetFocus(_event) {
    return !this._shouldKeepFocusRing;
  }
  /**
   * Override method inherited from `FocusMixin`
   * to prevent removing the `focused` attribute:
   * - when moving focus to the overlay content,
   * - when closing on date click / outside click.
   *
   * @param {FocusEvent} event
   * @return {boolean}
   * @protected
   * @override
   */
  _shouldRemoveFocus(event) {
    const {
      relatedTarget
    } = event;
    if (this.opened && relatedTarget !== null && relatedTarget !== document.body && !this.contains(relatedTarget) && !this._overlayContent.contains(relatedTarget)) {
      return true;
    }
    return !this.opened;
  }
  /**
   * Override method inherited from `FocusMixin`
   * to store the `focus-ring` state to restore
   * it later when closing on outside click.
   *
   * @param {boolean} focused
   * @protected
   * @override
   */
  _setFocused(focused) {
    super._setFocused(focused);
    this._shouldKeepFocusRing = focused && this._keyboardActive;
  }
  /**
   * Depending on the nature of the value change that has occurred since
   * the last commit attempt, triggers validation and fires an event:
   *
   * Value change             | Event
   * :------------------------|:------------------
   * empty => parsable        | change
   * empty => unparsable      | unparsable-change
   * parsable => empty        | change
   * parsable => parsable     | change
   * parsable => unparsable   | change
   * unparsable => empty      | unparsable-change
   * unparsable => parsable   | change
   * unparsable => unparsable | unparsable-change
   *
   * @private
   */
  __commitValueChange() {
    const unparsableValue = this.__unparsableValue;
    if (this.__committedValue !== this.value) {
      this._requestValidation();
      this.dispatchEvent(new CustomEvent("change", {
        bubbles: true
      }));
    } else if (this.__committedUnparsableValue !== unparsableValue) {
      this._requestValidation();
      this.dispatchEvent(new CustomEvent("unparsable-change"));
    }
    this.__committedValue = this.value;
    this.__committedUnparsableValue = unparsableValue;
  }
  /**
   * Sets the given date as the value and commits it.
   *
   * @param {Date} date
   * @private
   */
  __commitDate(date) {
    this.__keepCommittedValue = true;
    this._selectedDate = date;
    this.__keepCommittedValue = false;
    this.__commitValueChange();
  }
  /** @private */
  _close() {
    this._focus();
    this.close();
  }
  /** @private */
  __bringToFront() {
    requestAnimationFrame(() => {
      this.$.overlay.bringToFront();
    });
  }
  /** @private */
  // eslint-disable-next-line @typescript-eslint/max-params
  _isNoInput(inputElement, fullscreen, ios, i18n, opened, autoOpenDisabled) {
    const noInputOnFullscreenMode = fullscreen && (!autoOpenDisabled || opened);
    const noInputOnIos = ios && opened;
    return !inputElement || noInputOnFullscreenMode || noInputOnIos || !i18n.parseDate;
  }
  /** @private */
  _formatISO(date) {
    return formatISODate(date);
  }
  /** @protected */
  _inputElementChanged(input) {
    super._inputElementChanged(input);
    if (input) {
      input.autocomplete = "off";
      input.setAttribute("role", "combobox");
      input.setAttribute("aria-haspopup", "dialog");
      input.setAttribute("aria-expanded", !!this.opened);
      this._applyInputValue(this._selectedDate);
    }
  }
  /** @protected */
  _openedChanged(opened) {
    if (this.inputElement) {
      this.inputElement.setAttribute("aria-expanded", opened);
    }
  }
  /** @private */
  _selectedDateChanged(selectedDate, i18n) {
    if (selectedDate === void 0 || i18n === void 0) {
      return;
    }
    if (!this.__keepInputValue) {
      this._applyInputValue(selectedDate);
    }
    this.value = this._formatISO(selectedDate);
    this._ignoreFocusedDateChange = true;
    this._focusedDate = selectedDate;
    this._ignoreFocusedDateChange = false;
  }
  /** @private */
  _focusedDateChanged(focusedDate, i18n) {
    if (focusedDate === void 0 || i18n === void 0) {
      return;
    }
    if (!this._ignoreFocusedDateChange && !this._noInput) {
      this._applyInputValue(focusedDate);
    }
  }
  /**
   * Override the value observer from `InputMixin` to implement custom
   * handling of the `value` property. The date-picker doesn't forward
   * the value directly to the input like the default implementation of `InputMixin`.
   * Instead, it parses the value into a date, puts it in `_selectedDate` which
   * is then displayed in the input with respect to the specified date format.
   *
   * @param {string | undefined} value
   * @param {string | undefined} oldValue
   * @protected
   * @override
   */
  _valueChanged(value, oldValue) {
    const newDate = parseDate(value);
    if (value && !newDate) {
      this.value = oldValue;
      return;
    }
    if (value) {
      if (!dateEquals(this._selectedDate, newDate)) {
        this._selectedDate = newDate;
        if (oldValue !== void 0) {
          this._requestValidation();
        }
      }
    } else {
      this._selectedDate = null;
    }
    if (!this.__keepCommittedValue) {
      this.__committedValue = this.value;
      this.__committedUnparsableValue = "";
    }
    this._toggleHasValue(this._hasValue);
  }
  /** @private */
  // eslint-disable-next-line @typescript-eslint/max-params
  __updateOverlayContent(overlayContent, i18n, label, minDate, maxDate, focusedDate, selectedDate, showWeekNumbers, isDateDisabled, enteredDate) {
    if (overlayContent) {
      overlayContent.i18n = i18n;
      overlayContent.label = label;
      overlayContent.minDate = minDate;
      overlayContent.maxDate = maxDate;
      overlayContent.focusedDate = focusedDate;
      overlayContent.selectedDate = selectedDate;
      overlayContent.showWeekNumbers = showWeekNumbers;
      overlayContent.isDateDisabled = isDateDisabled;
      overlayContent.enteredDate = enteredDate;
    }
  }
  /** @private */
  __updateOverlayContentTheme(overlayContent, theme) {
    if (overlayContent) {
      if (theme) {
        overlayContent.setAttribute("theme", theme);
      } else {
        overlayContent.removeAttribute("theme");
      }
    }
  }
  /** @private */
  __updateOverlayContentFullScreen(overlayContent, fullscreen) {
    if (overlayContent) {
      overlayContent.toggleAttribute("fullscreen", fullscreen);
    }
  }
  /** @protected */
  _onOverlayEscapePress() {
    this._focusedDate = this._selectedDate;
    this._closedByEscape = true;
    this._close();
    this._closedByEscape = false;
  }
  /** @protected */
  _onOverlayOpened() {
    const content = this._overlayContent;
    content.reset();
    const initialPosition = this._getInitialPosition();
    content.initialPosition = initialPosition;
    const scrollFocusDate = content.focusedDate || initialPosition;
    content.scrollToDate(scrollFocusDate);
    this._ignoreFocusedDateChange = true;
    content.focusedDate = scrollFocusDate;
    this._ignoreFocusedDateChange = false;
    window.addEventListener("scroll", this._boundOnScroll, true);
    if (this._focusOverlayOnOpen) {
      content.focusDateElement();
      this._focusOverlayOnOpen = false;
    } else {
      this._focus();
    }
    const input = this._nativeInput;
    if (this._noInput && input) {
      input.blur();
      this._overlayContent.focusDateElement();
    }
    const focusables = this._noInput ? content : [input, content];
    this.__showOthers = hideOthers(focusables);
  }
  /** @private */
  _getInitialPosition() {
    const parsedInitialPosition = parseDate(this.initialPosition);
    const initialPosition = this._selectedDate || this._overlayContent.initialPosition || parsedInitialPosition || /* @__PURE__ */ new Date();
    return parsedInitialPosition || dateAllowed(initialPosition, this._minDate, this._maxDate, this.isDateDisabled) ? initialPosition : this._minDate || this._maxDate ? getClosestDate(initialPosition, [this._minDate, this._maxDate]) : /* @__PURE__ */ new Date();
  }
  /**
   * Tries to parse the input element's value as a date. If the input value
   * is parsable, commits the resulting date as the value. Otherwise, commits
   * an empty string as the value. If no i18n parser is provided, commits
   * the focused date as the value.
   *
   * @private
   */
  __commitParsedOrFocusedDate() {
    this._ignoreFocusedDateChange = true;
    if (this.i18n.parseDate) {
      const inputValue = this._inputElementValue || "";
      const parsedDate = this.__parseDate(inputValue);
      if (parsedDate) {
        this.__commitDate(parsedDate);
      } else {
        this.__keepInputValue = true;
        this.__commitDate(null);
        this.__keepInputValue = false;
      }
    } else if (this._focusedDate) {
      this.__commitDate(this._focusedDate);
    }
    this._ignoreFocusedDateChange = false;
  }
  /** @protected */
  _onOverlayClosed() {
    if (this.__showOthers) {
      this.__showOthers();
      this.__showOthers = null;
    }
    window.removeEventListener("scroll", this._boundOnScroll, true);
    if (this._closedByEscape) {
      this._applyInputValue(this._selectedDate);
    }
    this.__commitParsedOrFocusedDate();
    if (this._nativeInput && this._nativeInput.selectionStart) {
      this._nativeInput.selectionStart = this._nativeInput.selectionEnd;
    }
    if (!this.value && !this._keyboardActive) {
      this._requestValidation();
    }
  }
  /** @private */
  _onScroll(e) {
    if (e.target === window || !this._overlayContent.contains(e.target)) {
      this._overlayContent._repositionYearScroller();
    }
  }
  /** @protected */
  _focus() {
    if (!this._noInput) {
      this.inputElement.focus();
    }
  }
  /** @private */
  _focusAndSelect() {
    this._focus();
    this._setSelectionRange(0, this._inputElementValue.length);
  }
  /** @private */
  _applyInputValue(date) {
    this._inputElementValue = date ? this.__formatDate(date) : "";
  }
  /** @private */
  _setSelectionRange(a, b) {
    if (this._nativeInput && this._nativeInput.setSelectionRange) {
      this._nativeInput.setSelectionRange(a, b);
    }
  }
  /**
   * Override an event listener from `InputConstraintsMixin`
   * to have date-picker fully control when to fire a change event
   * and trigger validation.
   *
   * @protected
   */
  _onChange(event) {
    event.stopPropagation();
  }
  /**
   * @param {Event} event
   * @private
   */
  _onClick(event) {
    if (!this._isClearButton(event)) {
      this._onHostClick(event);
    }
  }
  /**
   * @param {Event} event
   * @private
   */
  _onHostClick(event) {
    if (!this.autoOpenDisabled || this._noInput) {
      event.preventDefault();
      this.open();
    }
  }
  /**
   * Override an event listener from `InputControlMixin`
   * to validate and dispatch change on clear.
   * @protected
   */
  _onClearButtonClick(event) {
    event.preventDefault();
    this.__commitDate(null);
  }
  /**
   * Override an event listener from `KeyboardMixin`.
   * @param {KeyboardEvent} e
   * @protected
   * @override
   */
  _onKeyDown(e) {
    super._onKeyDown(e);
    if (this._noInput) {
      const allowedKeys = [
        9
        // Tab
      ];
      if (allowedKeys.indexOf(e.keyCode) === -1) {
        e.preventDefault();
      }
    }
    switch (e.key) {
      case "ArrowDown":
      case "ArrowUp":
        e.preventDefault();
        if (this.opened) {
          this._overlayContent.focusDateElement();
        } else {
          this._focusOverlayOnOpen = true;
          this.open();
        }
        break;
      case "Tab":
        if (this.opened) {
          e.preventDefault();
          e.stopPropagation();
          this._setSelectionRange(0, 0);
          if (e.shiftKey) {
            this._overlayContent.focusCancel();
          } else {
            this._overlayContent.focusDateElement();
          }
        }
        break;
    }
  }
  /**
   * Override an event listener from `KeyboardMixin`.
   *
   * @param {!KeyboardEvent} _event
   * @protected
   * @override
   */
  _onEnter(_event) {
    if (this.opened) {
      this.close();
    } else {
      this.__commitParsedOrFocusedDate();
    }
  }
  /**
   * Override an event listener from `KeyboardMixin`.
   * Do not call `super` in order to override clear
   * button logic defined in `InputControlMixin`.
   *
   * @param {!KeyboardEvent} event
   * @protected
   * @override
   */
  _onEscape(event) {
    if (this.opened) {
      return;
    }
    if (this.clearButtonVisible && !!this.value && !this.readonly) {
      event.stopPropagation();
      this._onClearButtonClick(event);
      return;
    }
    if (this.inputElement.value === "") {
      this.__commitDate(null);
    } else {
      this._applyInputValue(this._selectedDate);
    }
  }
  /** @protected */
  _isClearButton(event) {
    return event.composedPath()[0] === this.clearElement;
  }
  /**
   * Override an event listener from `InputMixin`
   * @protected
   */
  _onInput() {
    if (!this.opened && this._inputElementValue && !this.autoOpenDisabled) {
      this.open();
    }
    const parsedDate = this.__parseDate(this._inputElementValue || "");
    if (parsedDate) {
      this._ignoreFocusedDateChange = true;
      if (!dateEquals(parsedDate, this._focusedDate)) {
        this._focusedDate = parsedDate;
      }
      this._ignoreFocusedDateChange = false;
    }
    this.__setEnteredDate(parsedDate);
  }
  /**
   * @param {Date} date
   * @private
   */
  __setEnteredDate(date) {
    if (date) {
      if (!dateEquals(this.__enteredDate, date)) {
        this.__enteredDate = date;
      }
    } else {
      this.__enteredDate = null;
    }
  }
  /** @private */
  __computeMinOrMaxDate(dateString) {
    return parseDate(dateString);
  }
  /**
   * Fired when the user commits a value change.
   *
   * @event change
   */
  /**
   * Fired when `value` property value changes.
   *
   * @event value-changed
   */
  /**
   * Fired when `opened` property value changes.
   *
   * @event opened-changed
   */
};
var datePickerStyles = i$3`
  :host([opened]) {
    pointer-events: auto;
  }

  :host([dir='rtl']) [part='input-field'] {
    direction: ltr;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
    direction: rtl;
    text-align: left;
  }
`;
registerStyles("vaadin-date-picker", [inputFieldShared, datePickerStyles], {
  moduleId: "vaadin-date-picker-styles"
});
var DatePicker = class extends DatePickerMixin(InputControlMixin(ThemableMixin(ElementMixin(PolymerElement)))) {
  static get is() {
    return "vaadin-date-picker";
  }
  static get template() {
    return html`
      <div class="vaadin-date-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-click="_toggle"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-date-picker-overlay
        id="overlay"
        fullscreen$="[[_fullscreen]]"
        theme$="[[_theme]]"
        opened="{{opened}}"
        on-vaadin-overlay-escape-press="_onOverlayEscapePress"
        on-vaadin-overlay-open="_onOverlayOpened"
        on-vaadin-overlay-closing="_onOverlayClosed"
        restore-focus-on-close
        restore-focus-node="[[inputElement]]"
      ></vaadin-date-picker-overlay>

      <slot name="tooltip"></slot>
    `;
  }
  /**
   * Used by `InputControlMixin` as a reference to the clear button element.
   * @protected
   * @return {!HTMLElement}
   */
  get clearElement() {
    return this.$.clearButton;
  }
  /** @protected */
  ready() {
    super.ready();
    this.addController(new InputController(this, (input) => {
      this._setInputElement(input);
      this._setFocusElement(input);
      this.stateTarget = input;
      this.ariaTarget = input;
    }, {
      // The "search" word is a trick to prevent Safari from enabling AutoFill,
      // which is causing click issues:
      // https://github.com/vaadin/web-components/issues/6817#issuecomment-2268229567
      uniqueIdPrefix: "search-input"
    }));
    this.addController(new LabelledInputController(this.inputElement, this._labelController));
    this._tooltipController = new TooltipController(this);
    this.addController(this._tooltipController);
    this._tooltipController.setPosition("top");
    this._tooltipController.setAriaTarget(this.inputElement);
    this._tooltipController.setShouldShow((target) => !target.opened);
    const toggleButton = this.shadowRoot.querySelector('[part="toggle-button"]');
    toggleButton.addEventListener("mousedown", (e) => e.preventDefault());
    this.$.overlay.addEventListener("vaadin-overlay-close", this._onVaadinOverlayClose.bind(this));
  }
  /** @private */
  _onVaadinOverlayClose(e) {
    if (e.detail.sourceEvent && e.detail.sourceEvent.composedPath().includes(this)) {
      e.preventDefault();
    }
  }
  /** @private */
  _toggle(e) {
    e.stopPropagation();
    if (this.$.overlay.opened) {
      this.close();
    } else {
      this.open();
    }
  }
  // Workaround https://github.com/vaadin/web-components/issues/2855
  /** @protected */
  _openedChanged(opened) {
    super._openedChanged(opened);
    this.$.overlay.positionTarget = this.shadowRoot.querySelector('[part="input-field"]');
    this.$.overlay.noVerticalOverlap = true;
  }
};
defineCustomElement(DatePicker);
function CreateDomModules(options) {
  const DomModuleDatePickerTextField = document.createElement("dom-module");
  DomModuleDatePickerTextField.setAttribute("theme-for", "vaadin-date-picker-text-field");
  DomModuleDatePickerTextField.setAttribute("id", `bh-date-picker__text-field-style`);
  DomModuleDatePickerTextField.innerHTML = `<template><style>
    :host([part="text-field"]) .vaadin-text-field-container,
    :host([part="text-field"]) .vaadin-text-area-container {
      width: var(--date-picker-text-field-width);
    }

    :host([part="text-field"][width="medium"]) .vaadin-text-field-container,
    :host([part="text-field"][width="medium"]) .vaadin-text-area-container {
      width: var(--date-picker-text-field-width);
    }

    :host([part="text-field"][width="small"]) .vaadin-text-field-container,
    :host([part="text-field"][width="small"]) .vaadin-text-area-container {
      width: calc(var(--date-picker-text-field-width) - 40px);
    }

    :host([part="text-field"][width="fluid"]) .vaadin-text-field-container,
    :host([part="text-field"][width="fluid"]) .vaadin-text-area-container {
      width: 100%;
    }

    :host([has-label]) {
      padding: 0px;
      -webkit-font-smoothing: auto;
    }

    :host([readonly]) [part='input-field'] {
      color: var(--color-text-common-primary);
      background-color: var(--color-fill-common-secondary);
      border: 1px solid transparent;
    }

    [part='label'] {
      font-family: var(--font-family-label-small);
      font-weight: 500;
      color: var(--color-text-common-primary);
      font-size: var(--font-size-label-small);
      transition: none;
      padding-bottom: var(--spacing-padding-xxsmall);
    }

    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--color-text-common-primary);
    }

    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--color-text-common-primary);
    }

    [part='value'] {
      font-family: var(--font-family-body-medium);
      font-weight: 500;
      color: var(--color-text-common-primary);
      font-size: var(--font-size-body-medium);

      padding: var(--datepicker-input-value-padding);
      -webkit-mask-image: none;
      mask-image: none;
    }

    :host([invalid]) [part='value'] {
      color: var(--color-text-label-error);
    }

    [part='value']::placeholder {
      color: var(--color-text-label-placeholder);
      transition: none;
      opacity: 1;
    }

    [part='input-field'] {
    	border: var(--effect-border-width-regular) solid
    		var(--color-border-form-default);
    	border-radius: var(--effect-border-radius-medium);
    	background: var(--color-fill-common-secondary);

    	height:  var(--datepicker-input-field-height);
    	padding: var(--spacing-padding-small);

      transition: all;
    	transition-timing-function: var(--motion-easing-normal);
    	transition-duration: var(--motion-duration-normal);
    }

    :host(:hover:not([readonly]):not([focused])) [part='input-field'] {
      border: var(--effect-border-width-regular) solid
        var(--color-border-form-hover);
    }

    :host([focused]:not([readonly])) [part='input-field'] {
      outline: none;
      border-color: var(--color-border-form-focused);
      box-shadow: var(--effect-drop-shadow-focus-primary);
    }

    :host([focused]:not([readonly])) [part='label'] {
      color: var(--color-text-common-primary);
    }

    [part='input-field']::after {
      background-color: none;
      transition: none;
      transform-origin: 100% 0;
    }

    :host([readonly]) [part='input-field']::after {
      border: var(--effect-border-width-regular) dashed
        var(--color-border-form-default);
    }

    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    [part='helper-text'] ::slotted(*) {
      font-family: var(--font-family-body-small);
      color: var(--color-text-common-secondary);
      font-size: var(--font-size-body-small);
      transition: none;
    }

    :host(:hover:not([readonly])) [part='helper-text'],
    :host(:hover:not([readonly])) [part='helper-text'] ::slotted(*) {
      color: var(--color-text-common-secondary);
    }

    :host([invalid]) [part='helper-text'] {
      display: none;
    }

    :host([invalid]) [part='input-field'] {
      background-color: var(--color-fill-form-error);
      border: var(--effect-border-width-regular) solid
        var(--color-border-form-error);
    }

    :host([invalid]:hover:not([readonly]):not([focused]))
      [part='input-field']::after {
      border: var(--effect-border-width-regular) solid
        var(--color-border-form-error) !important;
    }

    [part='error-message'] {
      font-family: var(--font-family-body-small);
      color: var(--color-text-label-error);
      font-size: var(--font-size-body-small);
      line-height: var(--font-line-height-body-small);

      margin-top: var(--spacing-margin-xxsmall);
      height: var(--font-line-height-body-small);
      display: flex;
      align-items: center;

      transition: none;
    }

    [part='error-message']:not(:empty)::before {
      font-family: var(--font-family-icon-small);
      font-size: var(--font-size-icon-small);
      content: 'info';
      color: var(--color-text-label-error);

      display: inline-block;
      height: auto;
      vertical-align: middle;
      margin-right: var(--spacing-margin-xxsmall);
    }

    :host([required]) [part="label"]::after,
    :host([invalid]) [part='label']::after {
      font-family: var(--font-family-label-small);
      font-size: var(--font-size-label-small);
      content: '*';
      color: var(--color-text-label-critical);

      position: static;
      opacity: 1;
    }
  </style></template>`;
  const DomModuleDatePickerInputIcon = document.createElement("dom-module");
  DomModuleDatePickerInputIcon.setAttribute("theme-for", "vaadin-date-picker");
  DomModuleDatePickerInputIcon.setAttribute("id", `bh-date-picker__input-icon-style`);
  DomModuleDatePickerInputIcon.innerHTML = `<template><style>
    :host([width="fluid"]) {
      width: 100%;
    }

    [part='toggle-button']::before {
      font-family: var(--font-family-icon-small);
      font-size: var(--font-size-icon-small);
      content: 'date_range';
      color: var(--color-text-common-primary);

      position: absolute;
      left:var(--datepicker-input-icon-position-left); 
      top: var(--datepicker-input-icon-position-top); 
    }

    :host([invalid]) [part='toggle-button']::before {
      color: var(--color-text-label-error);
    }

    [part$='button'] {
      width: auto;
      height: auto;
      font-size: var(--font-size-icon-small);
      color: var(--color-text-common-primary);
      transition: none;
    }
  </style></template>`;
  const DomModuleDatePickerOverlay = document.createElement("dom-module");
  DomModuleDatePickerOverlay.setAttribute("theme-for", "vaadin-date-picker-overlay");
  DomModuleDatePickerOverlay.setAttribute("id", `bh-date-picker__overlay-style`);
  DomModuleDatePickerOverlay.innerHTML = `<template><style>
    :host {
      z-index: 1000;
    }

    [part='backdrop'] {
      background-color: var(--color-fill-common-overlay);

      animation: none;
    }

    [part='overlay'] {
      margin-top: -20px;
      margin-bottom: -12px;
      font-weight: 500;
      border: var(--effect-border-width-regular) solid
        var(--color-border-form-default);
      border-radius: var(--effect-border-radius-medium);
      box-shadow: none;
      min-height: 400px;

      animation: none;
    }
  </style></template>`;
  const DomModuleDatePickerOverlayContent = document.createElement("dom-module");
  DomModuleDatePickerOverlayContent.setAttribute("theme-for", "vaadin-date-picker-overlay-content");
  DomModuleDatePickerOverlayContent.setAttribute("id", `bh-date-picker__overlay-content-style`);
  DomModuleDatePickerOverlayContent.innerHTML = `<template><style>
    :host {
      background-image: none;
    }

    :host([theme*='tertiary']:not([active]):hover) {
      opacity: 1;
    }

    :host #scrollers {
      background-color: var(--color-fill-common-secondary);
    }

    [part='toolbar'] {
      background-color: var(--color-fill-common-secondary);
    }

    [part='years'] {
      box-shadow: none;
      background-color: var(--color-fill-common-tertiary);
      -webkit-mask-image: none;

      font-family: var(--font-family-body-medium);
      color: var(--color-text-common-primary);
      font-weight: 400;
    }

    [part='years'] [part='year-separator']::after {
      color: var(--color-fill-control-accent);
    }

    [part='years'] [part='year-number'][current] {
      font-family: var(--font-family-body-medium);
      color: var(--color-text-common-primary);
      font-weight: 400;
    }

    [part='years']::before {
      box-shadow: none;
      background-color: var(--color-fill-common-secondary);
      background-image: none;
    }

    [part='cancel-button'],
    [part='today-button'] {
			font-family: var(--font-family-button-link-medium);
			font-size: var(--font-size-button-link-medium);
      font-weight: var(--font-weight-button-link-medium);
			color: var(--color-text-common-primary);
		}

    [part='cancel-button']::after,
		[part='today-button']::after {
			transition: none;
			filter: none;
		}

    [part='cancel-button']([theme*='tertiary']:not([active]):hover),
		[part='today-button']([theme*='tertiary']:not([active]):hover) {
			opacity: 1;
			cursor: pointer;
      background-color: var(--color-fill-cta-secondary-hover);
		}

    [part='cancel-button']([theme*='tertiary'][active]),
		[part='today-button']([theme*='tertiary'][active]) {
			opacity: 1;
      background-color: var(--color-fill-cta-secondary-pressed);
		}

		[part='label'] {
			font-family: var(--font-family-button-link-medium);
			font-size: var(--font-size-button-link-medium);
		}

    [part='years-toggle-button'] {
      font-family: var(--font-family-button-link-medium);
      font-size: var(--font-size-button-link-medium);
      color: var(--color-text-common-primary);
    }

    :host([years-visible]) [part='years-toggle-button'] {
      background-color: var(--color-fill-common-primary);
      color: var(--color-text-common-primary);
    }

    :host([invalid]) [part='toggle-button']::before {
      color: var(--color-text-label-error);
    }

    [part='year-number'],
    [part='year-separator'] {
      opacity: 1;
      transition: none;
    }
  </style></template>`;
  const DomModuleDatePickerButton = document.createElement("dom-module");
  DomModuleDatePickerButton.setAttribute("theme-for", "vaadin-button");
  DomModuleDatePickerButton.setAttribute("id", `bh-date-picker__button-style`);
  DomModuleDatePickerButton.innerHTML = `<template><style>
    :host {
			font-family: var(--font-family-button-link-medium);
			font-size: var(--font-size-button-link-medium);
			color: var(--color-text-common-primary);
		}

		:host::after {
			transition: none;
			filter: none;
		}

		:host([theme*='tertiary']:not([active]):hover) {
			opacity: 1;
			cursor: pointer;
      background-color: var(--color-fill-cta-secondary-hover);
		}

		:host([theme*='tertiary'][active]) {
			opacity: 1;
      background-color: var(--color-fill-cta-secondary-pressed);
		}

		[part='label'] {
			font-family: var(--font-family-button-link-medium);
			font-size: var(--font-size-button-link-medium);
		}
  </style></template>`;
  const DomModuleDatePickerMonthCalendar = document.createElement("dom-module");
  DomModuleDatePickerMonthCalendar.setAttribute("theme-for", "vaadin-month-calendar");
  DomModuleDatePickerMonthCalendar.setAttribute("id", `bh-date-picker__month-calendar-style`);
  DomModuleDatePickerMonthCalendar.innerHTML = `<template><style>
    :host {
			padding: 0px;
		}

		[part='month-header'] {
			font-family: var(--font-family-label-medium);
			color: var(--color-text-common-primary);
			font-size: var(--font-size-label-medium);

			margin: var(--spacing-padding-xsmall) 0;
		}

		[part='weekdays'] {
			margin-bottom: 0px;
			padding: var(--spacing-padding-xsmall) var(--spacing-padding-xxsmall);

			background: var(--color-fill-common-primary);
		}

		[part='weekdays'],
		#days {
			padding: var(--spacing-padding-xxsmall);
		}

		[part='weekday'] {
			font-family: var(--font-family-label-small);
			font-size: var(--font-size-label-small);
			color: var(--color-text-common-secondary);
		}

		:host(:not([focused])) [part='date'][focused]::before {
			animation: none;
			box-shadow: none;
		}

		[part='date'][focused]::before {
			box-shadow: none;
		}

		[part='date'] {
			font-family: var(--font-family-body-medium);
			color: var(--color-text-common-primary);
			font-size: var(--font-size-body-medium);

			transition: none;
		}

		[part='date']::before {
			border-radius: var(--effect-border-radius-medium);
			height: 100%;
			width: 100%;
		}

		[part='date'][role='button']:not([disabled]):not([selected]):hover::before {
			background-color: var(--color-fill-cta-secondary-hover);
		}

		[part='date'][today]:not([disabled]):not([selected]):hover {
			background-color: var(--color-fill-cta-secondary-hover);
		}

		[part='date'][today] {
			color: var(--color-text-common-primary);
			border: var(--effect-border-width-regular) solid
				var(--color-border-form-default);
			border-radius: var(--effect-border-radius-medium);
		}

    [part='date'][today][disabled] {
      color: var(--color-text-label-disabled-default);
    }

    [part='date'][disabled] {
      color: var(--color-text-label-disabled-default);
    }

		[part='date'][selected]::before {
			background-color: var(--color-fill-cta-primary-default);
		}

		[part='date'][selected] {
			color: var(--color-text-common-inverse-primary);
			border-radius: var(--effect-border-radius-medium);
		}

		[part='date'][selected][today] {
			border: none;
		}
  </style></template>`;
  return [DomModuleDatePickerTextField, DomModuleDatePickerInputIcon, DomModuleDatePickerOverlay, DomModuleDatePickerOverlayContent, DomModuleDatePickerButton, DomModuleDatePickerMonthCalendar];
}
var bhDatePickerCss = `vaadin-date-picker-overlay{z-index:3002}html{--lumo-primary-color:var(--color-fill-cta-primary-default);--lumo-disabled-text-color:var(--color-text-label-disabled-default);--_lumo-button-color:var(--color-text-common-primary);--lumo-primary-text-color:var(--color-text-common-primary);--lumo-primary-color-50pct:var(--color-fill-cta-primary-default);--lumo-error-color:var(--color-text-label-error)}vaadin-date-picker input:not([type='range']){font-family:var(--font-family-body-medium);font-weight:500;font-size:var(--font-size-body-medium);-webkit-mask-image:none;mask-image:none}vaadin-date-picker::part(input-field){border:var(--effect-border-width-regular) solid var(--color-border-form-default);border-radius:var(--effect-border-radius-medium);background:var(--color-fill-common-secondary);height:44px;padding:var(--spacing-padding-small);transition:all;color:var(--color-text-common-primary);transition-timing-function:var(--motion-easing-normal);transition-duration:var(--motion-duration-normal)}vaadin-date-picker{width:var(--date-picker-text-field-width)}.small vaadin-date-picker{width:calc(var(--date-picker-text-field-width) - 40px)}.fluid vaadin-date-picker{width:100%}.isSmall vaadin-date-picker::part(input-field){border:var(--effect-border-width-regular) solid var(--color-border-form-default);border-radius:var(--effect-border-radius-medium);background:var(--color-fill-common-secondary);height:36px;padding:var(--spacing-padding-small);transition:all;transition-timing-function:var(--motion-easing-normal);transition-duration:var(--motion-duration-normal);--datepicker-input-icon-position-left:8px;--datepicker-input-icon-position-top:8px;color:var(--color-text-common-primary)}vaadin-date-picker::part(label){font-family:var(--font-family-button-link-medium);font-size:var(--font-size-button-link-medium);color:var(--color-text-common-primary)}vaadin-date-picker[invalid]::part(label)::after{font-family:var(--font-family-label-small);font-size:var(--font-size-label-small);font-family:'Material Icons Outlined';content:'*';color:var(--color-text-label-critical);position:static;opacity:1}vaadin-date-picker[required]::part(required-indicator)::after{font-family:var(--font-family-label-small);font-size:var(--font-size-label-small);content:'*';color:var(--color-text-label-critical);position:static;opacity:1}vaadin-date-picker[invalid]::part(required-indicator)::after{font-family:var(--font-family-label-small);font-size:var(--font-size-label-small);content:'';color:var(--color-text-label-critical);position:static;opacity:1}vaadin-date-picker[invalid]::part(helper-text){display:none}vaadin-date-picker::part(error-message)::before{font-family:var(--font-family-icon-small);font-size:var(--font-size-icon-small);content:'info';color:var(--color-text-label-error);display:inline-block;height:auto;vertical-align:middle;margin-right:var(--spacing-margin-xxsmall)}vaadin-date-picker[invalid]::part(input-field){border:var(--effect-border-width-regular) solid var(--color-border-form-default);border-color:var(--color-text-label-error);border-radius:var(--effect-border-radius-medium);background:var(--color-fill-common-secondary);height:44px;padding:var(--spacing-padding-small);transition:all;transition-timing-function:var(--motion-easing-normal);transition-duration:var(--motion-duration-normal);background-color:var(--color-fill-form-error)}vaadin-date-picker[invalid]:hover:not([readonly]):not([focused])::part(input-field) ::after{border:var(--effect-border-width-regular) solid
        var(--color-border-form-error) !important}vaadin-date-picker[invalid]::part(input-field){color:var(--color-text-label-error)}vaadin-date-picker[invalid]::part(toggle-button)::before{color:var(--color-text-label-error)}vaadin-date-picker[focused]:not([readonly])::part(input-field){outline:none;border-color:var(--color-border-form-focused);box-shadow:var(--effect-drop-shadow-focus-primary)}vaadin-date-picker[invalid] input:not([type='range']){color:var(--color-text-label-error)}vaadin-date-picker::part(error-message){font-family:var(--font-family-body-small);color:var(--color-text-label-error);font-size:var(--font-size-body-small);line-height:var(--font-line-height-body-small);margin-top:var(--spacing-margin-xxsmall);height:var(--font-line-height-body-small);display:flex;align-items:center;transition:none}[has-label]{padding:0px;-webkit-font-smoothing:auto}vaadin-date-picker::part(toggle-button)::before{font-family:'Material Icons Outlined';content:"date_range";font-family:var(--font-family-icon-small);font-size:var(--font-size-icon-small);content:'date_range';color:var(--color-text-common-primary);position:absolute;left:var(--datepicker-input-icon-position-left);top:var(--datepicker-input-icon-position-top)}vaadin-date-picker::part(helper-text){font-family:var(--font-family-body-small);color:var(--color-text-common-secondary);font-size:var(--font-size-body-small);transition:none}vaadin-date-picker>input:placeholder-shown{color:var(--color-text-label-placeholder);transition:none;opacity:1}vaadin-date-picker-overlay::part(backdrop){background-color:var(--color-fill-common-overlay);animation:none}vaadin-date-picker-overlay::part(overlay){margin-top:-20px;margin-bottom:-12px;font-weight:500;border:var(--effect-border-width-regular) solid
      var(--color-border-form-default);border-radius:var(--effect-border-radius-medium);box-shadow:none;min-height:400px;animation:none}vaadin-date-picker-overlay-content{background-image:none}:host([theme*='tertiary']:not([active]):hover){opacity:1}vaadin-date-picker-overlay-content{background-color:var(--color-fill-common-secondary)}vaadin-date-picker-overlay-content::part(toolbar){background-color:var(--color-fill-common-secondary)}vaadin-date-picker-year{box-shadow:none;background-color:var(--color-fill-common-tertiary);-webkit-mask-image:none;font-family:var(--font-family-body-medium);color:var(--color-text-common-primary);font-weight:400}vaadin-date-picker-year::part(year-separator)::after{color:var(--color-fill-control-accent)}vaadin-date-picker-year[current]::part(year-number){font-family:var(--font-family-body-medium);color:var(--color-text-common-primary);font-weight:400}vaadin-date-picker-year::before{box-shadow:none;background-color:var(--color-fill-common-secondary);background-image:none}vaadin-date-picker-overlay-content [slot="today-button"],[slot="cancel-button"]{font-family:var(--font-family-button-link-medium);font-size:var(--font-size-button-link-medium);font-weight:var(--font-weight-button-link-medium);color:var(--color-text-common-primary)}vaadin-date-picker-overlay-content[slot="cancel-button"]::after,[slot="today-button"]::after{transition:none;filter:none}vaadin-date-picker-overlay-content[slot="cancel-button"][theme*='tertiary']:not([active]):hover,[slot="today-button"][theme*='tertiary']:not([active]):hover{opacity:1;cursor:pointer;background-color:var(--color-fill-cta-secondary-hover)}vaadin-date-picker-overlay-content[slot="cancel-button"][theme*='tertiary'][active],[slot="today-button"][theme*='tertiary'][active]{opacity:1;background-color:var(--color-fill-cta-secondary-pressed)}vaadin-date-picker-overlay-content::part(label){font-family:var(--font-family-button-link-medium);font-size:var(--font-size-button-link-medium);color:var(--color-text-common-primary)}vaadin-date-picker-overlay-content::part(years-toggle-button){font-family:var(--font-family-button-link-medium);font-size:var(--font-size-button-link-medium);color:var(--color-text-common-primary)}vaadin-date-picker-overlay-content[years-visible]::part(years-toggle-button){background-color:var(--color-fill-common-primary);color:var(--color-text-common-primary)}vaadin-date-picker-overlay-content[invalid]::part(years-toggle-button)::before{color:var(--color-text-label-error)}vaadin-date-picker-year::part(year-number),vaadin-date-picker-year::part(year-separator){opacity:1;transition:none}vaadin-month-calendar{padding:0px}vaadin-month-calendar::part(month-header){font-family:var(--font-family-label-medium);color:var(--color-text-common-primary);font-size:var(--font-size-label-medium);margin:var(--spacing-padding-xsmall) 0}vaadin-month-calendar::part(weekdays){margin-bottom:0px;padding:var(--spacing-padding-xsmall) var(--spacing-padding-xxsmall);background:var(--color-fill-common-primary)}vaadin-month-calendar::part(weekdays),#days{padding:var(--spacing-padding-xxsmall)}vaadin-month-calendar::part(weekday){font-family:var(--font-family-label-small);font-size:var(--font-size-label-small);color:var(--color-text-common-secondary)}:host(:not([focused])) [part='date'][focused]::before{animation:none;box-shadow:none}vaadin-month-calendar::part(date)[focused]::before{box-shadow:none}vaadin-month-calendar::part(date){font-family:var(--font-family-body-medium);color:var(--color-text-common-primary);font-size:var(--font-size-body-medium);transition:none}vaadin-month-calendar::part(date)::before{border-radius:var(--effect-border-radius-medium);}vaadin-month-calendar::part(date)[role='button']:not([disabled]):not([selected]):hover::before{background-color:var(--color-fill-cta-secondary-hover)}vaadin-month-calendar::part(date)[today]:not([disabled]):not([selected]):hover{background-color:var(--color-fill-cta-secondary-hover)}vaadin-month-calendar::part(date)[today]{color:var(--color-text-common-primary);border:var(--effect-border-width-regular) solid
        var(--color-border-form-default);border-radius:var(--effect-border-radius-medium)}vaadin-month-calendar::part(date)[today][disabled]{color:var(--color-text-label-disabled-default)}vaadin-month-calendar::part(date)[disabled]{color:var(--color-text-label-disabled-default)}vaadin-month-calendar::part(date)[selected]::before{background-color:var(--color-fill-cta-primary-default)}vaadin-month-calendar::part(date)[selected][today]{border:none}vaadin-date-picker-overlay-content>vaadin-button{font-family:var(--font-family-button-link-medium);font-size:var(--font-size-button-link-medium);color:var(--color-text-common-primary)}vaadin-date-picker-overlay-content>vaadin-button::after{transition:none;filter:none}vaadin-date-picker-overlay-content>vaadin-button[theme*='tertiary']:not([active]):hover{opacity:1;cursor:pointer;background-color:var(--color-fill-cta-secondary-hover)}vaadin-date-picker-overlay-content>vaadin-button[theme*='tertiary'][active]{opacity:1;background-color:var(--color-fill-cta-secondary-pressed)}vaadin-date-picker-overlay-content>vaadin-button::part(label){font-family:var(--font-family-button-link-medium);font-size:var(--font-size-button-link-medium)}vaadin-month-calendar::part(selected){color:var(--color-text-common-inverse-primary);border-radius:var(--effect-border-radius-medium)}vaadin-date-picker[disabled]::part(input-field){background-color:var(--color-fill-form-disabled);border-color:var(--color-border-form-disabled);color:var(--color-text-label-disabled-default)}vaadin-month-calendar::part(disabled){color:var(--color-text-label-disabled-default)}`;
var BhDatePickerStyle0 = bhDatePickerCss;
var BhDatePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this.bhEventOpen = createEvent(this, "bhEventOpen", 7);
    this.i18n = {
      // An array with the full names of months starting
      // with January.
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      // An array of weekday names starting with Sunday. Used
      // in screen reader announcements.
      weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      // An array of short weekday names starting with Sunday.
      // Displayed in the calendar.
      weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      // An integer indicating the first day of the week
      // (0 = Sunday, 1 = Monday, etc.).
      firstDayOfWeek: 0,
      // Used in screen reader announcements along with week
      // numbers, if they are displayed.
      week: "Week",
      // Translation of the Calendar icon button title.
      calendar: "Calendar",
      // Translation of the Today shortcut button text.
      today: `${this.todayLabel}`,
      // Translation of the Cancel button text.
      cancel: `${this.cancelLabel}`,
      // Used for adjusting the year value when parsing dates with short years.
      // The year values between 0 and 99 are evaluated and adjusted.
      // Example: for a referenceDate of 1970-10-30;
      //   dateToBeParsed: 40-10-30, result: 1940-10-30
      //   dateToBeParsed: 80-10-30, result: 1980-10-30
      //   dateToBeParsed: 10-10-30, result: 2010-10-30
      // Supported date format: ISO 8601 `"YYYY-MM-DD"` (default)
      // The default value is the current date.
      referenceDate: "",
      // A function to format given `Object` as
      // date string. Object is in the format `{ day: ..., month: ..., year: ... }`
      // Note: The argument month is 0-based. This means that January = 0 and December = 11.
      // formatDate: d => {
      //   // returns a string representation of the given
      //   // object in 'MM/DD/YYYY' -format
      // },
      formatDate: (dt) => {
        dt.month += 1;
        return hooks(DateTime_1.fromObject(dt).ts).format(this.dateFormat);
      },
      formatTitle: (monthName, fullYear) => {
        return monthName + " " + fullYear;
      }
    };
    this.i18n_parse_date = {
      // An array with the full names of months starting
      // with January.
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      // An array of weekday names starting with Sunday. Used
      // in screen reader announcements.
      weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      // An array of short weekday names starting with Sunday.
      // Displayed in the calendar.
      weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      // An integer indicating the first day of the week
      // (0 = Sunday, 1 = Monday, etc.).
      firstDayOfWeek: 0,
      // Used in screen reader announcements along with week
      // numbers, if they are displayed.
      week: "Week",
      // Translation of the Calendar icon button title.
      calendar: "Calendar",
      // Translation of the Today shortcut button text.
      today: `${this.todayLabel}`,
      // Translation of the Cancel button text.
      cancel: `${this.cancelLabel}`,
      // Used for adjusting the year value when parsing dates with short years.
      // The year values between 0 and 99 are evaluated and adjusted.
      // Example: for a referenceDate of 1970-10-30;
      //   dateToBeParsed: 40-10-30, result: 1940-10-30
      //   dateToBeParsed: 80-10-30, result: 1980-10-30
      //   dateToBeParsed: 10-10-30, result: 2010-10-30
      // Supported date format: ISO 8601 `"YYYY-MM-DD"` (default)
      // The default value is the current date.
      referenceDate: "",
      // A function to format given `Object` as
      // date string. Object is in the format `{ day: ..., month: ..., year: ... }`
      // Note: The argument month is 0-based. This means that January = 0 and December = 11.
      // formatDate: d => {
      //   // returns a string representation of the given
      //   // object in 'MM/DD/YYYY' -format
      // },
      formatDate: (dt) => {
        dt.month += 1;
        return hooks(DateTime_1.fromObject(dt).ts).format(this.dateFormat);
      },
      /**
      * A function to parse the given text to an `Object` in the format `{ day: ..., month: ..., year: ... }`.
      * Must properly parse (at least) text formatted by `formatDate`.
      * Setting the property to null will disable keyboard input feature.
      * Note: The argument month is 0-based. This means that January = 0 and December = 11.
      * @param date
      */
      parseDate: (dt) => {
        return {
          day: hooks(dt, this.dateFormat).get("D"),
          month: hooks(dt, this.dateFormat).get("months"),
          year: hooks(dt, this.dateFormat).get("years")
        };
      },
      formatTitle: (monthName, fullYear) => {
        return monthName + " " + fullYear;
      }
    };
    this.todayLabel = "Today";
    this.cancelLabel = "Cancel";
    this.disableHelper = false;
    this.allowManualValidation = false;
    this.placeholder = "MM/DD/YYYY";
    this.id = void 0;
    this.label = "Date";
    this.reset = false;
    this.customDisableDate = [];
    this.handleNegativeTimezone = false;
    this.width = void 0;
    this.value = void 0;
    this._value = void 0;
    this.minValue = void 0;
    this.maxValue = void 0;
    this.dateFormat = "MM/DD/YYYY";
    this.isInfo = "";
    this.isReadOnly = false;
    this.isInvalid = false;
    this.isRequired = false;
    this.errorMessage = "Invalid date";
    this.clearButton = false;
    this.isSmall = false;
    this.disabled = false;
    this._disabled = void 0;
    this.disableUserInput = false;
  }
  watchWidth() {
    this.updateWidth();
  }
  resetDate() {
    if (this.reset) {
      this.el__container.querySelector("vaadin-date-picker").value = null;
      this.reset = false;
    }
  }
  watchValue() {
    let dte = hooks(this.value, this.dateFormat).format("YYYY-MM-DD");
    let dt = new Date(dte);
    if (dt.getTimezoneOffset() > 0 && this.handleNegativeTimezone) {
      dt = new Date(dte.split("-"));
    }
    if (DateTime_1.fromJSDate(dt).isValid) {
      this._value = DateTime_1.fromJSDate(dt).toISODate();
    }
  }
  watchDisabled() {
    this._disabled = this.disabled;
  }
  updateWidth() {
    var _a, _b;
    const datePicker2 = this.el__container.querySelector("vaadin-date-picker");
    (_b = (_a = datePicker2.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("vaadin-date-picker-text-field")) === null || _b === void 0 ? void 0 : _b.setAttribute("width", this.width);
  }
  componentWillLoad() {
    let dte = hooks(this.value, this.dateFormat).format("YYYY-MM-DD");
    let dt = new Date(dte);
    if (dt.getTimezoneOffset() > 0 && this.handleNegativeTimezone) {
      dt = new Date(dte.split("-"));
    }
    if (DateTime_1.fromJSDate(dt).isValid) {
      this._value = DateTime_1.fromJSDate(dt).toISODate();
    }
    if (!document.getElementById("bh-date-picker__text-field-style") || !document.getElementById("bh-date-picker__input-icon-style") || !document.getElementById("bh-date-picker__overlay-style") || !document.getElementById("bh-date-picker__overlay-content-style") || !document.getElementById("bh-date-picker__button-style") || !document.getElementById("bh-date-picker__month-calendar-style")) {
      CreateDomModules().forEach((m) => {
        document.body.appendChild(m);
      });
    }
  }
  componentWillUpdate() {
    this.updateWidth();
  }
  componentDidLoad() {
    customElements.whenDefined("vaadin-date-picker").then(() => {
      const datePicker2 = this.el__container.querySelector("vaadin-date-picker");
      const slotInstance = datePicker2.shadowRoot.querySelector("vaadin-input-container").querySelector('[part="toggle-button"]');
      slotInstance.setAttribute("slot", "prefix");
      if (this.customDisableDate.length) {
        datePicker2.isDateDisabled = (dt) => {
          dt.month += 1;
          if (this.customDisableDate.indexOf(hooks(DateTime_1.fromObject(dt).ts).format(this.dateFormat)) > -1) {
            return true;
          }
        };
      }
      datePicker2.addEventListener("value-changed", (e) => {
        e.preventDefault();
        this._value = e.detail.value;
        this.bhEventChange.emit(e.detail.value);
      });
      datePicker2.addEventListener("opened-changed", (e) => {
        e.preventDefault();
        this.bhEventOpen.emit(e.detail.value);
      });
      this.updateWidth();
    });
    this._disabled = this.disabled;
  }
  render() {
    return h(Host, {
      key: "c1013196e5f30c046a4b36960a760e86413e3b22",
      ref: (el) => {
        this.el__container = el;
      },
      class: this.isSmall ? "isSmall" : `${this.width}`
    }, this.disableUserInput && h("vaadin-date-picker", {
      id: `${this.id}__vaadin-date-picker`,
      label: this.label,
      value: this._value,
      i18n: this.i18n,
      min: DateTime_1.fromISO(this.minValue).toISODate(),
      max: DateTime_1.fromISO(this.maxValue).toISODate(),
      "manual-validation": this.allowManualValidation,
      placeholder: this.placeholder,
      readonly: this.isReadOnly,
      invalid: this.isInvalid,
      required: this.isRequired,
      errorMessage: this.errorMessage,
      width: this.width,
      disabled: this._disabled,
      "clear-button-visible": this.clearButton
    }, this.disableHelper ? `` : h("span", {
      slot: "helper"
    }, this.dateFormat)), !this.disableUserInput && h("vaadin-date-picker", {
      id: `${this.id}__vaadin-date-picker`,
      label: this.label,
      value: this._value,
      i18n: this.i18n_parse_date,
      min: DateTime_1.fromISO(this.minValue).toISODate(),
      max: DateTime_1.fromISO(this.maxValue).toISODate(),
      placeholder: this.placeholder,
      readonly: this.isReadOnly,
      "manual-validation": this.allowManualValidation,
      invalid: this.isInvalid,
      required: this.isRequired,
      errorMessage: this.errorMessage,
      width: this.width,
      disabled: this._disabled,
      "clear-button-visible": this.clearButton
    }, this.disableHelper ? `` : h("span", {
      slot: "helper"
    }, this.isInfo ? this.isInfo : this.dateFormat)));
  }
  static get watchers() {
    return {
      "width": ["watchWidth"],
      "reset": ["resetDate"],
      "value": ["watchValue"],
      "disabled": ["watchDisabled"]
    };
  }
};
BhDatePicker.style = BhDatePickerStyle0;
export {
  BhDatePicker as bh_date_picker
};
/*! Bundled license information:

@bh-digital-solutions/ui-toolkit/dist/esm/bh-date-picker.entry.js:
  (**
   * @license
   * Copyright (c) 2015 - 2025 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
  (**
   * @license
   * Copyright (c) 2016 - 2025 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)
  (**
   * @license
   * Copyright (c) 2021 - 2025 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
//# sourceMappingURL=bh-date-picker.entry-NR5W7MMG.js.map
