import {
  OverlayClassMixin,
  OverlayMixin,
  PositionMixin,
  VirtualKeyboardController,
  menuOverlayCore,
  overlay,
  overlayStyles
} from "./chunk-BI2VYPKI.js";
import {
  Virtualizer,
  get,
  processTemplates
} from "./chunk-YQB53D5X.js";
import {
  ControllerMixin,
  DirMixin,
  DisabledMixin,
  ElementMixin,
  FocusMixin,
  InputConstraintsMixin,
  InputControlMixin,
  InputController,
  InputMixin,
  KeyboardMixin,
  LabelledInputController,
  PolymerElement,
  ThemableMixin,
  TooltipController,
  ValidateMixin,
  defineCustomElement,
  generateUniqueId,
  html,
  i$3,
  inputFieldShared,
  inputFieldShared$1,
  isElementFocusable,
  isElementFocused,
  isKeyboardActive,
  isTouch,
  registerStyles
} from "./chunk-FPZAVM6P.js";
import {
  Host,
  createEvent,
  h,
  registerInstance
} from "./chunk-5YQC5RSE.js";
import {
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-time-picker.entry.js
var item = i$3`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-xs);
    padding: 0.5em calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4) 0.5em
      var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
    min-height: var(--lumo-size-m);
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    --_selection-color-text: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
  }

  /* Checkmark */
  [part='checkmark']::before {
    display: var(--_lumo-item-selected-icon-display, none);
    content: var(--lumo-icons-checkmark);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    line-height: 1;
    font-weight: normal;
    width: 1em;
    height: 1em;
    margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
    color: var(--_selection-color-text);
    flex: none;
    opacity: 0;
    transition:
      transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2),
      opacity 0.1s;
  }

  :host([selected]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([active]:not([selected])) [part='checkmark']::before {
    transform: scale(0.8);
    opacity: 0;
    transition-duration: 0s;
  }

  [part='content'] {
    flex: auto;
  }

  /* Disabled */
  :host([disabled]) {
    color: var(--lumo-disabled-text-color);
    cursor: default;
    pointer-events: none;
  }

  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  @media (any-hover: hover) {
    :host(:hover:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }
  }

  :host([focus-ring]:not([disabled])) {
    box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  /* RTL specific styles */
  :host([dir='rtl']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
  }

  /* Slotted icons */
  :host ::slotted(vaadin-icon) {
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }
`;
registerStyles("vaadin-item", item, {
  moduleId: "lumo-item"
});
var comboBoxItem = i$3`
  :host {
    transition: background-color 100ms;
    overflow: hidden;
    --_lumo-item-selected-icon-display: block;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
  }

  :host([focused]:not([disabled])) {
    box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }
`;
registerStyles("vaadin-combo-box-item", [item, comboBoxItem], {
  moduleId: "lumo-combo-box-item"
});
var loader = i$3`
  [part~='loader'] {
    box-sizing: border-box;
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
    border: 2px solid transparent;
    border-color: var(--lumo-primary-color-10pct) var(--lumo-primary-color-10pct) var(--lumo-primary-color)
      var(--lumo-primary-color);
    border-radius: calc(0.5 * var(--lumo-icon-size-s));
    opacity: 0;
    pointer-events: none;
  }

  :host(:not([loading])) [part~='loader'] {
    display: none;
  }

  :host([loading]) [part~='loader'] {
    animation:
      1s linear infinite lumo-loader-rotate,
      0.3s 0.1s lumo-loader-fade-in both;
  }

  @keyframes lumo-loader-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes lumo-loader-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
var comboBoxOverlay = i$3`
  [part='content'] {
    padding: 0;
  }

  /* When items are empty, the spinner needs some room */
  :host(:not([closing])) [part~='content'] {
    min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
  }

  [part~='overlay'] {
    position: relative;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }
`;
var comboBoxLoader = i$3`
  [part~='loader'] {
    position: absolute;
    z-index: 1;
    inset-inline: var(--lumo-space-s);
    top: var(--lumo-space-s);
    margin-inline: auto 0;
  }
`;
registerStyles("vaadin-combo-box-overlay", [overlay, menuOverlayCore, comboBoxOverlay, loader, comboBoxLoader, i$3`
      :host {
        --_vaadin-combo-box-items-container-border-width: var(--lumo-space-xs);
        --_vaadin-combo-box-items-container-border-style: solid;
      }
    `], {
  moduleId: "lumo-combo-box-overlay"
});
registerStyles("vaadin-time-picker-item", [item, comboBoxItem], {
  moduleId: "lumo-time-picker-item"
});
registerStyles("vaadin-time-picker-overlay", [overlay, menuOverlayCore, comboBoxOverlay, i$3`
      :host {
        --_vaadin-time-picker-items-container-border-width: var(--lumo-space-xs);
        --_vaadin-time-picker-items-container-border-style: solid;
      }
    `], {
  moduleId: "lumo-time-picker-overlay"
});
var timePicker = i$3`
  [part~='toggle-button']::before {
    content: var(--lumo-icons-clock);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;
registerStyles("vaadin-time-picker", [inputFieldShared$1, timePicker], {
  moduleId: "lumo-time-picker"
});
var ComboBoxItemMixin = (superClass) => class ComboBoxItemMixinClass extends superClass {
  static get properties() {
    return {
      /**
       * The index of the item.
       */
      index: {
        type: Number
      },
      /**
       * The item to render.
       */
      item: {
        type: Object
      },
      /**
       * The text to render in the item.
       */
      label: {
        type: String
      },
      /**
       * True when item is selected.
       */
      selected: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * True when item is focused.
       */
      focused: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * Custom function for rendering the item content.
       */
      renderer: {
        type: Function
      }
    };
  }
  static get observers() {
    return ["__rendererOrItemChanged(renderer, index, item, selected, focused)", "__updateLabel(label, renderer)"];
  }
  static get observedAttributes() {
    return [...super.observedAttributes, "hidden"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "hidden" && newValue !== null) {
      this.index = void 0;
    } else {
      super.attributeChangedCallback(name, oldValue, newValue);
    }
  }
  /** @protected */
  connectedCallback() {
    super.connectedCallback();
    this._owner = this.parentNode.owner;
    const hostDir = this._owner.getAttribute("dir");
    if (hostDir) {
      this.setAttribute("dir", hostDir);
    }
  }
  /**
   * Requests an update for the content of the item.
   * While performing the update, it invokes the renderer passed in the `renderer` property.
   *
   * It is not guaranteed that the update happens immediately (synchronously) after it is requested.
   */
  requestContentUpdate() {
    if (!this.renderer || this.hidden) {
      return;
    }
    const model = {
      index: this.index,
      item: this.item,
      focused: this.focused,
      selected: this.selected
    };
    this.renderer(this, this._owner, model);
  }
  /** @private */
  __rendererOrItemChanged(renderer, index, item2) {
    if (item2 === void 0 || index === void 0) {
      return;
    }
    if (this._oldRenderer !== renderer) {
      this.innerHTML = "";
      delete this._$litPart$;
    }
    if (renderer) {
      this._oldRenderer = renderer;
      this.requestContentUpdate();
    }
  }
  /** @private */
  __updateLabel(label, renderer) {
    if (renderer) {
      return;
    }
    this.textContent = label;
  }
};
var TimePickerItem = class extends ComboBoxItemMixin(ThemableMixin(DirMixin(PolymerElement))) {
  static get is() {
    return "vaadin-time-picker-item";
  }
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `;
  }
};
defineCustomElement(TimePickerItem);
var ComboBoxOverlayMixin = (superClass) => class ComboBoxOverlayMixin extends PositionMixin(superClass) {
  static get observers() {
    return ["_setOverlayWidth(positionTarget, opened)"];
  }
  constructor() {
    super();
    this.requiredVerticalSpace = 200;
  }
  /** @protected */
  connectedCallback() {
    super.connectedCallback();
    const comboBox = this._comboBox;
    const hostDir = comboBox && comboBox.getAttribute("dir");
    if (hostDir) {
      this.setAttribute("dir", hostDir);
    }
  }
  /**
   * Override method inherited from `Overlay`
   * to not close on position target click.
   *
   * @param {Event} event
   * @return {boolean}
   * @protected
   */
  _shouldCloseOnOutsideClick(event) {
    const eventPath = event.composedPath();
    return !eventPath.includes(this.positionTarget) && !eventPath.includes(this);
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
  /** @protected */
  _updateOverlayWidth() {
    const propPrefix = this.localName;
    this.style.setProperty(`--_${propPrefix}-default-width`, `${this.positionTarget.clientWidth}px`);
    const customWidth = getComputedStyle(this._comboBox).getPropertyValue(`--${propPrefix}-width`);
    if (customWidth === "") {
      this.style.removeProperty(`--${propPrefix}-width`);
    } else {
      this.style.setProperty(`--${propPrefix}-width`, customWidth);
    }
  }
  /** @private */
  _setOverlayWidth(positionTarget, opened) {
    if (positionTarget && opened) {
      this._updateOverlayWidth();
      this._updatePosition();
    }
  }
};
var timePickerOverlayStyles = i$3`
  #overlay {
    width: var(--vaadin-time-picker-overlay-width, var(--_vaadin-time-picker-overlay-default-width, auto));
  }

  [part='content'] {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;
registerStyles("vaadin-time-picker-overlay", [overlayStyles, timePickerOverlayStyles], {
  moduleId: "vaadin-time-picker-overlay-styles"
});
var TimePickerOverlay = class extends ComboBoxOverlayMixin(OverlayMixin(DirMixin(ThemableMixin(PolymerElement)))) {
  static get is() {
    return "vaadin-time-picker-overlay";
  }
  static get template() {
    return html`
      <div id="backdrop" part="backdrop" hidden></div>
      <div part="overlay" id="overlay">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
};
defineCustomElement(TimePickerOverlay);
var ComboBoxPlaceholder = class ComboBoxPlaceholder2 {
  toString() {
    return "";
  }
};
var ComboBoxScrollerMixin = (superClass) => class ComboBoxScrollerMixin extends superClass {
  static get properties() {
    return {
      /**
       * A full set of items to filter the visible options from.
       * Set to an empty array when combo-box is not opened.
       */
      items: {
        type: Array,
        sync: true,
        observer: "__itemsChanged"
      },
      /**
       * Index of an item that has focus outline and is scrolled into view.
       * The actual focus still remains in the input field.
       */
      focusedIndex: {
        type: Number,
        sync: true,
        observer: "__focusedIndexChanged"
      },
      /**
       * Set to true while combo-box fetches new page from the data provider.
       */
      loading: {
        type: Boolean,
        sync: true,
        observer: "__loadingChanged"
      },
      /**
       * Whether the combo-box is currently opened or not. If set to false,
       * calling `scrollIntoView` does not have any effect.
       */
      opened: {
        type: Boolean,
        sync: true,
        observer: "__openedChanged"
      },
      /**
       * The selected item from the `items` array.
       */
      selectedItem: {
        type: Object,
        sync: true,
        observer: "__selectedItemChanged"
      },
      /**
       * A function used to generate CSS class names for dropdown
       * items based on the item. The return value should be the
       * generated class name as a string, or multiple class names
       * separated by whitespace characters.
       */
      itemClassNameGenerator: {
        type: Object,
        observer: "__itemClassNameGeneratorChanged"
      },
      /**
       * Path for the id of the item, used to detect whether the item is selected.
       */
      itemIdPath: {
        type: String
      },
      /**
       * Reference to the owner (combo-box owner), used by the item elements.
       */
      owner: {
        type: Object
      },
      /**
       * Function used to set a label for every combo-box item.
       */
      getItemLabel: {
        type: Object
      },
      /**
       * Function used to render the content of every combo-box item.
       */
      renderer: {
        type: Object,
        sync: true,
        observer: "__rendererChanged"
      },
      /**
       * Used to propagate the `theme` attribute from the host element.
       */
      theme: {
        type: String
      }
    };
  }
  constructor() {
    super();
    this.__boundOnItemClick = this.__onItemClick.bind(this);
  }
  /** @private */
  get _viewportTotalPaddingBottom() {
    if (this._cachedViewportTotalPaddingBottom === void 0) {
      const itemsStyle = window.getComputedStyle(this.$.selector);
      this._cachedViewportTotalPaddingBottom = [itemsStyle.paddingBottom, itemsStyle.borderBottomWidth].map((v) => {
        return parseInt(v, 10);
      }).reduce((sum, v) => {
        return sum + v;
      });
    }
    return this._cachedViewportTotalPaddingBottom;
  }
  /** @protected */
  ready() {
    super.ready();
    this.setAttribute("role", "listbox");
    this.id = `${this.localName}-${generateUniqueId()}`;
    this.__hostTagName = this.constructor.is.replace("-scroller", "");
    this.addEventListener("click", (e) => e.stopPropagation());
    this.__patchWheelOverScrolling();
  }
  /**
   * Updates the virtualizer's size and items.
   */
  requestContentUpdate() {
    if (!this.__virtualizer) {
      return;
    }
    if (this.items) {
      this.__virtualizer.size = this.items.length;
    }
    if (this.opened) {
      this.__virtualizer.update();
    }
  }
  /**
   * Scrolls an item at given index into view and adjusts `scrollTop`
   * so that the element gets fully visible on Arrow Down key press.
   * @param {number} index
   */
  scrollIntoView(index) {
    if (!this.__virtualizer || !(this.opened && index >= 0)) {
      return;
    }
    const visibleItemsCount = this._visibleItemsCount();
    let targetIndex = index;
    if (index > this.__virtualizer.lastVisibleIndex - 1) {
      this.__virtualizer.scrollToIndex(index);
      targetIndex = index - visibleItemsCount + 1;
    } else if (index > this.__virtualizer.firstVisibleIndex) {
      targetIndex = this.__virtualizer.firstVisibleIndex;
    }
    this.__virtualizer.scrollToIndex(Math.max(0, targetIndex));
    const lastPhysicalItem = [...this.children].find((el) => !el.hidden && el.index === this.__virtualizer.lastVisibleIndex);
    if (!lastPhysicalItem || index !== lastPhysicalItem.index) {
      return;
    }
    const lastPhysicalItemRect = lastPhysicalItem.getBoundingClientRect();
    const scrollerRect = this.getBoundingClientRect();
    const scrollTopAdjust = lastPhysicalItemRect.bottom - scrollerRect.bottom + this._viewportTotalPaddingBottom;
    if (scrollTopAdjust > 0) {
      this.scrollTop += scrollTopAdjust;
    }
  }
  /**
   * @param {string | object} item
   * @param {string | object} selectedItem
   * @param {string} itemIdPath
   * @protected
   */
  _isItemSelected(item2, selectedItem, itemIdPath) {
    if (item2 instanceof ComboBoxPlaceholder) {
      return false;
    } else if (itemIdPath && item2 !== void 0 && selectedItem !== void 0) {
      return get(itemIdPath, item2) === get(itemIdPath, selectedItem);
    }
    return item2 === selectedItem;
  }
  /** @private */
  __initVirtualizer() {
    this.__virtualizer = new Virtualizer({
      createElements: this.__createElements.bind(this),
      updateElement: this._updateElement.bind(this),
      elementsContainer: this,
      scrollTarget: this,
      scrollContainer: this.$.selector,
      reorderElements: true
    });
  }
  /** @private */
  __itemsChanged(items) {
    if (items && this.__virtualizer) {
      this.requestContentUpdate();
    }
  }
  /** @private */
  __loadingChanged() {
    this.requestContentUpdate();
  }
  /** @private */
  __openedChanged(opened) {
    if (opened) {
      if (!this.__virtualizer) {
        this.__initVirtualizer();
      }
      this.requestContentUpdate();
    }
  }
  /** @private */
  __selectedItemChanged() {
    this.requestContentUpdate();
  }
  /** @private */
  __itemClassNameGeneratorChanged(generator, oldGenerator) {
    if (generator || oldGenerator) {
      this.requestContentUpdate();
    }
  }
  /** @private */
  __focusedIndexChanged(index, oldIndex) {
    if (index !== oldIndex) {
      this.requestContentUpdate();
    }
    if (index >= 0 && !this.loading) {
      this.scrollIntoView(index);
    }
  }
  /** @private */
  __rendererChanged(renderer, oldRenderer) {
    if (renderer || oldRenderer) {
      this.requestContentUpdate();
    }
  }
  /** @private */
  __createElements(count) {
    return [...Array(count)].map(() => {
      const item2 = document.createElement(`${this.__hostTagName}-item`);
      item2.addEventListener("click", this.__boundOnItemClick);
      item2.tabIndex = "-1";
      item2.style.width = "100%";
      return item2;
    });
  }
  /**
   * @param {HTMLElement} el
   * @param {number} index
   * @protected
   */
  _updateElement(el, index) {
    const item2 = this.items[index];
    const focusedIndex = this.focusedIndex;
    const selected = this._isItemSelected(item2, this.selectedItem, this.itemIdPath);
    el.setProperties({
      item: item2,
      index,
      label: this.getItemLabel(item2),
      selected,
      renderer: this.renderer,
      focused: !this.loading && focusedIndex === index
    });
    if (typeof this.itemClassNameGenerator === "function") {
      el.className = this.itemClassNameGenerator(item2);
    } else if (el.className !== "") {
      el.className = "";
    }
    el.id = `${this.__hostTagName}-item-${index}`;
    el.setAttribute("role", index !== void 0 ? "option" : false);
    el.setAttribute("aria-selected", selected.toString());
    el.setAttribute("aria-posinset", index + 1);
    el.setAttribute("aria-setsize", this.items.length);
    if (this.theme) {
      el.setAttribute("theme", this.theme);
    } else {
      el.removeAttribute("theme");
    }
    if (item2 instanceof ComboBoxPlaceholder) {
      this.__requestItemByIndex(index);
    }
  }
  /** @private */
  __onItemClick(e) {
    this.dispatchEvent(new CustomEvent("selection-changed", {
      detail: {
        item: e.currentTarget.item
      }
    }));
  }
  /**
   * We want to prevent the kinetic scrolling energy from being transferred from the overlay contents over to the parent.
   * Further improvement ideas: after the contents have been scrolled to the top or bottom and scrolling has stopped, it could allow
   * scrolling the parent similarly to touch scrolling.
   * @private
   */
  __patchWheelOverScrolling() {
    this.$.selector.addEventListener("wheel", (e) => {
      const scrolledToTop = this.scrollTop === 0;
      const scrolledToBottom = this.scrollHeight - this.scrollTop - this.clientHeight <= 1;
      if (scrolledToTop && e.deltaY < 0) {
        e.preventDefault();
      } else if (scrolledToBottom && e.deltaY > 0) {
        e.preventDefault();
      }
    });
  }
  /**
   * Dispatches an `index-requested` event for the given index to notify
   * the data provider that it should start loading the page containing the requested index.
   *
   * The event is dispatched asynchronously to prevent an immediate page request and therefore
   * a possible infinite recursion in case the data provider implements page request cancelation logic
   * by invoking data provider page callbacks with an empty array.
   * The infinite recursion may occur otherwise since invoking a data provider page callback with an empty array
   * triggers a synchronous scroller update and, if the callback corresponds to the currently visible page,
   * the scroller will synchronously request the page again which may lead to looping in the end.
   * That was the case for the Flow counterpart:
   * https://github.com/vaadin/flow-components/issues/3553#issuecomment-1239344828
   * @private
   */
  __requestItemByIndex(index) {
    requestAnimationFrame(() => {
      this.dispatchEvent(new CustomEvent("index-requested", {
        detail: {
          index
        }
      }));
    });
  }
  /** @private */
  _visibleItemsCount() {
    this.__virtualizer.scrollToIndex(this.__virtualizer.firstVisibleIndex);
    const hasItems = this.__virtualizer.size > 0;
    return hasItems ? this.__virtualizer.lastVisibleIndex - this.__virtualizer.firstVisibleIndex + 1 : 0;
  }
};
var TimePickerScroller = class extends ComboBoxScrollerMixin(PolymerElement) {
  static get is() {
    return "vaadin-time-picker-scroller";
  }
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-time-picker-items-container-border-width);
          border-style: var(--_vaadin-time-picker-items-container-border-style);
          border-color: var(--_vaadin-time-picker-items-container-border-color, transparent);
          position: relative;
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `;
  }
};
defineCustomElement(TimePickerScroller);
function isValidValue(value) {
  return value !== void 0 && value !== null;
}
function findItemIndex(items, callback) {
  return items.findIndex((item2) => {
    if (item2 instanceof ComboBoxPlaceholder) {
      return false;
    }
    return callback(item2);
  });
}
var ComboBoxMixin = (subclass) => class ComboBoxMixinClass extends OverlayClassMixin(ControllerMixin(ValidateMixin(FocusMixin(KeyboardMixin(InputMixin(DisabledMixin(subclass))))))) {
  static get properties() {
    return {
      /**
       * True if the dropdown is open, false otherwise.
       * @type {boolean}
       */
      opened: {
        type: Boolean,
        notify: true,
        value: false,
        reflectToAttribute: true,
        sync: true,
        observer: "_openedChanged"
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
       * When present, it specifies that the field is read-only.
       * @type {boolean}
       */
      readonly: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * Custom function for rendering the content of every item.
       * Receives three arguments:
       *
       * - `root` The `<vaadin-combo-box-item>` internal container DOM element.
       * - `comboBox` The reference to the `<vaadin-combo-box>` element.
       * - `model` The object with the properties related with the rendered
       *   item, contains:
       *   - `model.index` The index of the rendered item.
       *   - `model.item` The item.
       * @type {ComboBoxRenderer | undefined}
       */
      renderer: {
        type: Object,
        sync: true
      },
      /**
       * A full set of items to filter the visible options from.
       * The items can be of either `String` or `Object` type.
       * @type {!Array<!ComboBoxItem | string> | undefined}
       */
      items: {
        type: Array,
        sync: true,
        observer: "_itemsChanged"
      },
      /**
       * If `true`, the user can input a value that is not present in the items list.
       * `value` property will be set to the input value in this case.
       * Also, when `value` is set programmatically, the input value will be set
       * to reflect that value.
       * @attr {boolean} allow-custom-value
       * @type {boolean}
       */
      allowCustomValue: {
        type: Boolean,
        value: false
      },
      /**
       * A subset of items, filtered based on the user input. Filtered items
       * can be assigned directly to omit the internal filtering functionality.
       * The items can be of either `String` or `Object` type.
       * @type {!Array<!ComboBoxItem | string> | undefined}
       */
      filteredItems: {
        type: Array,
        observer: "_filteredItemsChanged",
        sync: true
      },
      /**
       * Used to detect user value changes and fire `change` events.
       * @private
       */
      _lastCommittedValue: String,
      /**
       * When set to `true`, "loading" attribute is added to host and the overlay element.
       * @type {boolean}
       */
      loading: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        sync: true
      },
      /**
       * @type {number}
       * @protected
       */
      _focusedIndex: {
        type: Number,
        observer: "_focusedIndexChanged",
        value: -1,
        sync: true
      },
      /**
       * Filtering string the user has typed into the input field.
       * @type {string}
       */
      filter: {
        type: String,
        value: "",
        notify: true,
        sync: true
      },
      /**
       * The selected item from the `items` array.
       * @type {ComboBoxItem | string | undefined}
       */
      selectedItem: {
        type: Object,
        notify: true,
        sync: true
      },
      /**
       * A function used to generate CSS class names for dropdown
       * items based on the item. The return value should be the
       * generated class name as a string, or multiple class names
       * separated by whitespace characters.
       */
      itemClassNameGenerator: {
        type: Object
      },
      /**
       * Path for label of the item. If `items` is an array of objects, the
       * `itemLabelPath` is used to fetch the displayed string label for each
       * item.
       *
       * The item label is also used for matching items when processing user
       * input, i.e., for filtering and selecting items.
       * @attr {string} item-label-path
       * @type {string}
       */
      itemLabelPath: {
        type: String,
        value: "label",
        observer: "_itemLabelPathChanged",
        sync: true
      },
      /**
       * Path for the value of the item. If `items` is an array of objects, the
       * `itemValuePath:` is used to fetch the string value for the selected
       * item.
       *
       * The item value is used in the `value` property of the combo box,
       * to provide the form value.
       * @attr {string} item-value-path
       * @type {string}
       */
      itemValuePath: {
        type: String,
        value: "value",
        sync: true
      },
      /**
       * Path for the id of the item. If `items` is an array of objects,
       * the `itemIdPath` is used to compare and identify the same item
       * in `selectedItem` and `filteredItems` (items given by the
       * `dataProvider` callback).
       * @attr {string} item-id-path
       */
      itemIdPath: {
        type: String,
        sync: true
      },
      /**
       * @type {!HTMLElement | undefined}
       * @protected
       */
      _toggleElement: {
        type: Object,
        observer: "_toggleElementChanged"
      },
      /**
       * Set of items to be rendered in the dropdown.
       * @protected
       */
      _dropdownItems: {
        type: Array,
        sync: true
      },
      /** @private */
      _closeOnBlurIsPrevented: Boolean,
      /** @private */
      _scroller: {
        type: Object,
        sync: true
      },
      /** @private */
      _overlayOpened: {
        type: Boolean,
        sync: true,
        observer: "_overlayOpenedChanged"
      },
      /** @private */
      __keepOverlayOpened: {
        type: Boolean,
        sync: true
      }
    };
  }
  static get observers() {
    return ["_selectedItemChanged(selectedItem, itemValuePath, itemLabelPath)", "_openedOrItemsChanged(opened, _dropdownItems, loading, __keepOverlayOpened)", "_updateScroller(_scroller, _dropdownItems, opened, loading, selectedItem, itemIdPath, _focusedIndex, renderer, _theme, itemClassNameGenerator)"];
  }
  constructor() {
    super();
    this._boundOverlaySelectedItemChanged = this._overlaySelectedItemChanged.bind(this);
    this._boundOnClearButtonMouseDown = this.__onClearButtonMouseDown.bind(this);
    this._boundOnClick = this._onClick.bind(this);
    this._boundOnOverlayTouchAction = this._onOverlayTouchAction.bind(this);
    this._boundOnTouchend = this._onTouchend.bind(this);
  }
  /**
   * Tag name prefix used by scroller and items.
   * @protected
   * @return {string}
   */
  get _tagNamePrefix() {
    return "vaadin-combo-box";
  }
  /**
   * Get a reference to the native `<input>` element.
   * Override to provide a custom input.
   * @protected
   * @return {HTMLInputElement | undefined}
   */
  get _nativeInput() {
    return this.inputElement;
  }
  /**
   * Override method inherited from `InputMixin`
   * to customize the input element.
   * @protected
   * @override
   */
  _inputElementChanged(inputElement) {
    super._inputElementChanged(inputElement);
    const input = this._nativeInput;
    if (input) {
      input.autocomplete = "off";
      input.autocapitalize = "off";
      input.setAttribute("role", "combobox");
      input.setAttribute("aria-autocomplete", "list");
      input.setAttribute("aria-expanded", !!this.opened);
      input.setAttribute("spellcheck", "false");
      input.setAttribute("autocorrect", "off");
      this._revertInputValueToValue();
      if (this.clearElement) {
        this.clearElement.addEventListener("mousedown", this._boundOnClearButtonMouseDown);
      }
    }
  }
  /** @protected */
  ready() {
    super.ready();
    this._initOverlay();
    this._initScroller();
    this._lastCommittedValue = this.value;
    this.addEventListener("click", this._boundOnClick);
    this.addEventListener("touchend", this._boundOnTouchend);
    const bringToFrontListener = () => {
      requestAnimationFrame(() => {
        this._overlayElement.bringToFront();
      });
    };
    this.addEventListener("mousedown", bringToFrontListener);
    this.addEventListener("touchstart", bringToFrontListener);
    processTemplates(this);
    this.addController(new VirtualKeyboardController(this));
  }
  /** @protected */
  disconnectedCallback() {
    super.disconnectedCallback();
    this.close();
  }
  /**
   * Requests an update for the content of items.
   * While performing the update, it invokes the renderer (passed in the `renderer` property) once an item.
   *
   * It is not guaranteed that the update happens immediately (synchronously) after it is requested.
   */
  requestContentUpdate() {
    if (!this._scroller) {
      return;
    }
    this._scroller.requestContentUpdate();
    this._getItemElements().forEach((item2) => {
      item2.requestContentUpdate();
    });
  }
  /**
   * Opens the dropdown list.
   */
  open() {
    if (!this.disabled && !this.readonly) {
      this.opened = true;
    }
  }
  /**
   * Closes the dropdown list.
   */
  close() {
    this.opened = false;
  }
  /**
   * Override Polymer lifecycle callback to handle `filter` property change after
   * the observer for `opened` property is triggered. This is needed when opening
   * combo-box on user input to ensure the focused index is set correctly.
   *
   * @param {!Object} currentProps Current accessor values
   * @param {?Object} changedProps Properties changed since the last call
   * @param {?Object} oldProps Previous values for each changed property
   * @protected
   * @override
   */
  _propertiesChanged(currentProps, changedProps, oldProps) {
    super._propertiesChanged(currentProps, changedProps, oldProps);
    if (changedProps.filter !== void 0) {
      this._filterChanged(changedProps.filter);
    }
  }
  /**
   * Override LitElement lifecycle callback to handle filter property change.
   * @param {Object} props
   * @protected
   */
  updated(props) {
    super.updated(props);
    if (props.has("filter")) {
      this._filterChanged(this.filter);
    }
  }
  /** @private */
  _initOverlay() {
    const overlay2 = this.$.overlay;
    overlay2._comboBox = this;
    overlay2.addEventListener("touchend", this._boundOnOverlayTouchAction);
    overlay2.addEventListener("touchmove", this._boundOnOverlayTouchAction);
    overlay2.addEventListener("mousedown", (e) => e.preventDefault());
    overlay2.addEventListener("opened-changed", (e) => {
      this._overlayOpened = e.detail.value;
    });
    this._overlayElement = overlay2;
  }
  /**
   * Create and initialize the scroller element.
   * Override to provide custom host reference.
   *
   * @protected
   */
  _initScroller(host) {
    const scroller = document.createElement(`${this._tagNamePrefix}-scroller`);
    scroller.owner = host || this;
    scroller.getItemLabel = this._getItemLabel.bind(this);
    scroller.addEventListener("selection-changed", this._boundOverlaySelectedItemChanged);
    const overlay2 = this._overlayElement;
    overlay2.renderer = (root) => {
      if (!root.innerHTML) {
        root.appendChild(scroller);
      }
    };
    overlay2.requestContentUpdate();
    this._scroller = scroller;
  }
  /** @private */
  // eslint-disable-next-line @typescript-eslint/max-params
  _updateScroller(scroller, items, opened, loading, selectedItem, itemIdPath, focusedIndex, renderer, theme, itemClassNameGenerator) {
    if (scroller) {
      if (opened) {
        scroller.style.maxHeight = getComputedStyle(this).getPropertyValue(`--${this._tagNamePrefix}-overlay-max-height`) || "65vh";
      }
      scroller.setProperties({
        items: opened ? items : [],
        opened,
        loading,
        selectedItem,
        itemIdPath,
        focusedIndex,
        renderer,
        theme,
        itemClassNameGenerator
      });
    }
  }
  /** @private */
  _openedOrItemsChanged(opened, items, loading, keepOverlayOpened) {
    this._overlayOpened = opened && (keepOverlayOpened || loading || !!(items && items.length));
  }
  /** @private */
  _overlayOpenedChanged(opened, wasOpened) {
    if (opened) {
      this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened", {
        bubbles: true,
        composed: true
      }));
      this._onOpened();
    } else if (wasOpened && this._dropdownItems && this._dropdownItems.length) {
      this.close();
      this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed", {
        bubbles: true,
        composed: true
      }));
    }
  }
  /** @private */
  _focusedIndexChanged(index, oldIndex) {
    if (oldIndex === void 0) {
      return;
    }
    this._updateActiveDescendant(index);
  }
  /** @protected */
  _isInputFocused() {
    return this.inputElement && isElementFocused(this.inputElement);
  }
  /** @private */
  _updateActiveDescendant(index) {
    const input = this._nativeInput;
    if (!input) {
      return;
    }
    const item2 = this._getItemElements().find((el) => el.index === index);
    if (item2) {
      input.setAttribute("aria-activedescendant", item2.id);
    } else {
      input.removeAttribute("aria-activedescendant");
    }
  }
  /** @private */
  _openedChanged(opened, wasOpened) {
    if (wasOpened === void 0) {
      return;
    }
    if (opened) {
      if (!this._isInputFocused() && !isTouch) {
        if (this.inputElement) {
          this.inputElement.focus();
        }
      }
    } else {
      this._onClosed();
    }
    const input = this._nativeInput;
    if (input) {
      input.setAttribute("aria-expanded", !!opened);
      if (opened) {
        input.setAttribute("aria-controls", this._scroller.id);
      } else {
        input.removeAttribute("aria-controls");
      }
    }
  }
  /** @private */
  _onOverlayTouchAction() {
    this._closeOnBlurIsPrevented = true;
    this.inputElement.blur();
    this._closeOnBlurIsPrevented = false;
  }
  /** @protected */
  _isClearButton(event) {
    return event.composedPath()[0] === this.clearElement;
  }
  /** @private */
  __onClearButtonMouseDown(event) {
    event.preventDefault();
    this.inputElement.focus();
  }
  /**
   * @param {Event} event
   * @protected
   */
  _onClearButtonClick(event) {
    event.preventDefault();
    this._onClearAction();
    if (this.opened) {
      this.requestContentUpdate();
    }
  }
  /**
   * @param {Event} event
   * @private
   */
  _onToggleButtonClick(event) {
    event.preventDefault();
    if (this.opened) {
      this.close();
    } else {
      this.open();
    }
  }
  /**
   * @param {Event} event
   * @protected
   */
  _onHostClick(event) {
    if (!this.autoOpenDisabled) {
      event.preventDefault();
      this.open();
    }
  }
  /** @private */
  _onClick(event) {
    if (this._isClearButton(event)) {
      this._onClearButtonClick(event);
    } else if (event.composedPath().includes(this._toggleElement)) {
      this._onToggleButtonClick(event);
    } else {
      this._onHostClick(event);
    }
  }
  /**
   * Override an event listener from `KeyboardMixin`.
   *
   * @param {KeyboardEvent} e
   * @protected
   * @override
   */
  _onKeyDown(e) {
    super._onKeyDown(e);
    if (e.key === "ArrowDown") {
      this._onArrowDown();
      e.preventDefault();
    } else if (e.key === "ArrowUp") {
      this._onArrowUp();
      e.preventDefault();
    }
  }
  /** @private */
  _getItemLabel(item2) {
    let label = item2 && this.itemLabelPath ? get(this.itemLabelPath, item2) : void 0;
    if (label === void 0 || label === null) {
      label = item2 ? item2.toString() : "";
    }
    return label;
  }
  /** @private */
  _getItemValue(item2) {
    let value = item2 && this.itemValuePath ? get(this.itemValuePath, item2) : void 0;
    if (value === void 0) {
      value = item2 ? item2.toString() : "";
    }
    return value;
  }
  /** @private */
  _onArrowDown() {
    if (this.opened) {
      const items = this._dropdownItems;
      if (items) {
        this._focusedIndex = Math.min(items.length - 1, this._focusedIndex + 1);
        this._prefillFocusedItemLabel();
      }
    } else {
      this.open();
    }
  }
  /** @private */
  _onArrowUp() {
    if (this.opened) {
      if (this._focusedIndex > -1) {
        this._focusedIndex = Math.max(0, this._focusedIndex - 1);
      } else {
        const items = this._dropdownItems;
        if (items) {
          this._focusedIndex = items.length - 1;
        }
      }
      this._prefillFocusedItemLabel();
    } else {
      this.open();
    }
  }
  /** @private */
  _prefillFocusedItemLabel() {
    if (this._focusedIndex > -1) {
      const focusedItem = this._dropdownItems[this._focusedIndex];
      this._inputElementValue = this._getItemLabel(focusedItem);
      this._markAllSelectionRange();
    }
  }
  /** @private */
  _setSelectionRange(start, end) {
    if (this._isInputFocused() && this.inputElement.setSelectionRange) {
      this.inputElement.setSelectionRange(start, end);
    }
  }
  /** @private */
  _markAllSelectionRange() {
    if (this._inputElementValue !== void 0) {
      this._setSelectionRange(0, this._inputElementValue.length);
    }
  }
  /** @private */
  _clearSelectionRange() {
    if (this._inputElementValue !== void 0) {
      const pos = this._inputElementValue ? this._inputElementValue.length : 0;
      this._setSelectionRange(pos, pos);
    }
  }
  /** @private */
  _closeOrCommit() {
    if (!this.opened && !this.loading) {
      this._commitValue();
    } else {
      this.close();
    }
  }
  /**
   * Override an event listener from `KeyboardMixin`.
   *
   * @param {KeyboardEvent} e
   * @protected
   * @override
   */
  _onEnter(e) {
    if (!this._hasValidInputValue()) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    if (this.opened) {
      e.preventDefault();
      e.stopPropagation();
    }
    this._closeOrCommit();
  }
  /**
   * @protected
   */
  _hasValidInputValue() {
    const hasInvalidOption = this._focusedIndex < 0 && this._inputElementValue !== "" && this._getItemLabel(this.selectedItem) !== this._inputElementValue;
    return this.allowCustomValue || !hasInvalidOption;
  }
  /**
   * Override an event listener from `KeyboardMixin`.
   * Do not call `super` in order to override clear
   * button logic defined in `InputControlMixin`.
   *
   * @param {!KeyboardEvent} e
   * @protected
   * @override
   */
  _onEscape(e) {
    if (this.autoOpenDisabled && (this.opened || this.value !== this._inputElementValue && this._inputElementValue.length > 0)) {
      e.stopPropagation();
      this._focusedIndex = -1;
      this.cancel();
    } else if (this.opened) {
      e.stopPropagation();
      if (this._focusedIndex > -1) {
        this._focusedIndex = -1;
        this._revertInputValue();
      } else {
        this.cancel();
      }
    } else if (this.clearButtonVisible && !!this.value && !this.readonly) {
      e.stopPropagation();
      this._onClearAction();
    }
  }
  /** @private */
  _toggleElementChanged(toggleElement) {
    if (toggleElement) {
      toggleElement.addEventListener("mousedown", (e) => e.preventDefault());
      toggleElement.addEventListener("click", () => {
        if (isTouch && !this._isInputFocused()) {
          document.activeElement.blur();
        }
      });
    }
  }
  /**
   * Clears the current value.
   * @protected
   */
  _onClearAction() {
    this.selectedItem = null;
    if (this.allowCustomValue) {
      this.value = "";
    }
    this._detectAndDispatchChange();
  }
  /**
   * Clears the current filter. Should be used instead of setting the property
   * directly in order to allow overriding this in multi-select combo box.
   * @protected
   */
  _clearFilter() {
    this.filter = "";
  }
  /**
   * Reverts back to original value.
   */
  cancel() {
    this._revertInputValueToValue();
    this._lastCommittedValue = this.value;
    this._closeOrCommit();
  }
  /** @private */
  _onOpened() {
    this._lastCommittedValue = this.value;
  }
  /** @private */
  _onClosed() {
    if (!this.loading || this.allowCustomValue) {
      this._commitValue();
    }
  }
  /** @private */
  _commitValue() {
    if (this._focusedIndex > -1) {
      const focusedItem = this._dropdownItems[this._focusedIndex];
      if (this.selectedItem !== focusedItem) {
        this.selectedItem = focusedItem;
      }
      this._inputElementValue = this._getItemLabel(this.selectedItem);
      this._focusedIndex = -1;
    } else if (this._inputElementValue === "" || this._inputElementValue === void 0) {
      this.selectedItem = null;
      if (this.allowCustomValue) {
        this.value = "";
      }
    } else {
      const items = [this.selectedItem, ...this._dropdownItems || []];
      const itemMatchingInputValue = items[this.__getItemIndexByLabel(items, this._inputElementValue)];
      if (this.allowCustomValue && // To prevent a repetitive input value being saved after pressing ESC and Tab.
      !itemMatchingInputValue) {
        const customValue = this._inputElementValue;
        this._lastCustomValue = customValue;
        const e = new CustomEvent("custom-value-set", {
          detail: customValue,
          composed: true,
          cancelable: true,
          bubbles: true
        });
        this.dispatchEvent(e);
        if (!e.defaultPrevented) {
          this.value = customValue;
        }
      } else if (!this.allowCustomValue && !this.opened && itemMatchingInputValue) {
        this.value = this._getItemValue(itemMatchingInputValue);
      } else {
        this._revertInputValueToValue();
      }
    }
    this._detectAndDispatchChange();
    this._clearSelectionRange();
    this._clearFilter();
  }
  /**
   * Override an event listener from `InputMixin`.
   * @param {!Event} event
   * @protected
   * @override
   */
  _onInput(event) {
    const filter = this._inputElementValue;
    const props = {};
    if (this.filter === filter) {
      this._filterChanged(this.filter);
    } else {
      props.filter = filter;
    }
    if (!this.opened && !this._isClearButton(event) && !this.autoOpenDisabled) {
      props.opened = true;
    }
    this.setProperties(props);
  }
  /**
   * Override an event listener from `InputMixin`.
   * @param {!Event} event
   * @protected
   * @override
   */
  _onChange(event) {
    event.stopPropagation();
  }
  /** @private */
  _itemLabelPathChanged(itemLabelPath) {
    if (typeof itemLabelPath !== "string") {
      console.error("You should set itemLabelPath to a valid string");
    }
  }
  /** @private */
  _filterChanged(filter) {
    this._scrollIntoView(0);
    this._focusedIndex = -1;
    if (this.items) {
      this.filteredItems = this._filterItems(this.items, filter);
    } else {
      this._filteredItemsChanged(this.filteredItems);
    }
  }
  /** @protected */
  _revertInputValue() {
    if (this.filter !== "") {
      this._inputElementValue = this.filter;
    } else {
      this._revertInputValueToValue();
    }
    this._clearSelectionRange();
  }
  /** @private */
  _revertInputValueToValue() {
    if (this.allowCustomValue && !this.selectedItem) {
      this._inputElementValue = this.value;
    } else {
      this._inputElementValue = this._getItemLabel(this.selectedItem);
    }
  }
  /** @private */
  _selectedItemChanged(selectedItem) {
    if (selectedItem === null || selectedItem === void 0) {
      if (this.filteredItems) {
        if (!this.allowCustomValue) {
          this.value = "";
        }
        this._toggleHasValue(this._hasValue);
        this._inputElementValue = this.value;
      }
    } else {
      const value = this._getItemValue(selectedItem);
      if (this.value !== value) {
        this.value = value;
        if (this.value !== value) {
          return;
        }
      }
      this._toggleHasValue(true);
      this._inputElementValue = this._getItemLabel(selectedItem);
    }
  }
  /**
   * Override an observer from `InputMixin`.
   * @protected
   * @override
   */
  _valueChanged(value, oldVal) {
    if (value === "" && oldVal === void 0) {
      return;
    }
    if (isValidValue(value)) {
      if (this._getItemValue(this.selectedItem) !== value) {
        this._selectItemForValue(value);
      }
      if (!this.selectedItem && this.allowCustomValue) {
        this._inputElementValue = value;
      }
      this._toggleHasValue(this._hasValue);
    } else {
      this.selectedItem = null;
    }
    this._clearFilter();
    this._lastCommittedValue = void 0;
  }
  /** @private */
  _detectAndDispatchChange() {
    if (document.hasFocus()) {
      this._requestValidation();
    }
    if (this.value !== this._lastCommittedValue) {
      this.dispatchEvent(new CustomEvent("change", {
        bubbles: true
      }));
      this._lastCommittedValue = this.value;
    }
  }
  /** @private */
  _itemsChanged(items, oldItems) {
    this._ensureItemsOrDataProvider(() => {
      this.items = oldItems;
    });
    if (items) {
      this.filteredItems = items.slice(0);
    } else if (oldItems) {
      this.filteredItems = null;
    }
  }
  /** @private */
  _filteredItemsChanged(filteredItems) {
    this._setDropdownItems(filteredItems);
  }
  /** @private */
  _filterItems(arr, filter) {
    if (!arr) {
      return arr;
    }
    const filteredItems = arr.filter((item2) => {
      filter = filter ? filter.toString().toLowerCase() : "";
      return this._getItemLabel(item2).toString().toLowerCase().indexOf(filter) > -1;
    });
    return filteredItems;
  }
  /** @private */
  _selectItemForValue(value) {
    const valueIndex = this.__getItemIndexByValue(this.filteredItems, value);
    const previouslySelectedItem = this.selectedItem;
    if (valueIndex >= 0) {
      this.selectedItem = this.filteredItems[valueIndex];
    } else if (this.dataProvider && this.selectedItem === void 0) {
      this.selectedItem = void 0;
    } else {
      this.selectedItem = null;
    }
    if (this.selectedItem === null && previouslySelectedItem === null) {
      this._selectedItemChanged(this.selectedItem);
    }
  }
  /**
   * Provide items to be rendered in the dropdown.
   * Override this method to show custom items.
   *
   * @protected
   */
  _setDropdownItems(newItems) {
    const oldItems = this._dropdownItems;
    this._dropdownItems = newItems;
    const focusedItem = oldItems ? oldItems[this._focusedIndex] : null;
    const valueIndex = this.__getItemIndexByValue(newItems, this.value);
    if ((this.selectedItem === null || this.selectedItem === void 0) && valueIndex >= 0) {
      this.selectedItem = newItems[valueIndex];
    }
    const focusedItemIndex = this.__getItemIndexByValue(newItems, this._getItemValue(focusedItem));
    if (focusedItemIndex > -1) {
      this._focusedIndex = focusedItemIndex;
    } else {
      this._focusedIndex = this.__getItemIndexByLabel(newItems, this.filter);
    }
  }
  /** @private */
  _getItemElements() {
    return Array.from(this._scroller.querySelectorAll(`${this._tagNamePrefix}-item`));
  }
  /** @private */
  _scrollIntoView(index) {
    if (!this._scroller) {
      return;
    }
    this._scroller.scrollIntoView(index);
  }
  /**
   * Returns the first item that matches the provided value.
   *
   * @private
   */
  __getItemIndexByValue(items, value) {
    if (!items || !isValidValue(value)) {
      return -1;
    }
    return findItemIndex(items, (item2) => {
      return this._getItemValue(item2) === value;
    });
  }
  /**
   * Returns the first item that matches the provided label.
   * Labels are matched against each other case insensitively.
   *
   * @private
   */
  __getItemIndexByLabel(items, label) {
    if (!items || !label) {
      return -1;
    }
    return findItemIndex(items, (item2) => {
      return this._getItemLabel(item2).toString().toLowerCase() === label.toString().toLowerCase();
    });
  }
  /** @private */
  _overlaySelectedItemChanged(e) {
    e.stopPropagation();
    if (e.detail.item instanceof ComboBoxPlaceholder) {
      return;
    }
    if (this.opened) {
      this._focusedIndex = this.filteredItems.indexOf(e.detail.item);
      this.close();
    }
  }
  /**
   * Override method inherited from `FocusMixin`
   * to close the overlay on blur and commit the value.
   *
   * @param {boolean} focused
   * @protected
   * @override
   */
  _setFocused(focused) {
    super._setFocused(focused);
    if (!focused && !this.readonly && !this._closeOnBlurIsPrevented) {
      if (!this.opened && this.allowCustomValue && this._inputElementValue === this._lastCustomValue) {
        delete this._lastCustomValue;
        return;
      }
      if (isKeyboardActive()) {
        this._closeOrCommit();
        return;
      }
      if (!this.opened) {
        this._commitValue();
      } else if (!this._overlayOpened) {
        this.close();
      }
    }
  }
  /**
   * Override method inherited from `FocusMixin` to not remove focused
   * state when focus moves to the overlay.
   *
   * @param {FocusEvent} event
   * @return {boolean}
   * @protected
   * @override
   */
  _shouldRemoveFocus(event) {
    if (event.relatedTarget && event.relatedTarget.localName === `${this._tagNamePrefix}-item`) {
      return false;
    }
    if (event.relatedTarget === this._overlayElement) {
      event.composedPath()[0].focus();
      return false;
    }
    return true;
  }
  /** @private */
  _onTouchend(event) {
    if (!this.clearElement || event.composedPath()[0] !== this.clearElement) {
      return;
    }
    event.preventDefault();
    this._onClearAction();
  }
  /**
   * Fired when the value changes.
   *
   * @event value-changed
   * @param {Object} detail
   * @param {String} detail.value the combobox value
   */
  /**
   * Fired when selected item changes.
   *
   * @event selected-item-changed
   * @param {Object} detail
   * @param {Object|String} detail.value the selected item. Type is the same as the type of `items`.
   */
  /**
   * Fired when the user sets a custom value.
   * @event custom-value-set
   * @param {String} detail the custom value
   */
  /**
   * Fired when the user commits a value change.
   * @event change
   */
  /**
   * Fired after the `vaadin-combo-box-overlay` opens.
   *
   * @event vaadin-combo-box-dropdown-opened
   */
  /**
   * Fired after the `vaadin-combo-box-overlay` closes.
   *
   * @event vaadin-combo-box-dropdown-closed
   */
};
var TimePickerComboBox = class extends ComboBoxMixin(ThemableMixin(PolymerElement)) {
  static get is() {
    return "vaadin-time-picker-combo-box";
  }
  static get template() {
    return html`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-time-picker-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[positionTarget]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-time-picker-overlay>
    `;
  }
  static get properties() {
    return {
      positionTarget: {
        type: Object
      }
    };
  }
  /**
   * Tag name prefix used by scroller and items.
   * @protected
   * @return {string}
   */
  get _tagNamePrefix() {
    return "vaadin-time-picker";
  }
  /**
   * Reference to the clear button element.
   * @protected
   * @return {!HTMLElement}
   */
  get clearElement() {
    return this.querySelector('[part="clear-button"]');
  }
  /** @protected */
  ready() {
    super.ready();
    this.allowCustomValue = true;
    this._toggleElement = this.querySelector(".toggle-button");
    this.setAttribute("dir", "ltr");
  }
};
defineCustomElement(TimePickerComboBox);
var PatternMixin = (superclass) => class PatternMixinClass extends InputConstraintsMixin(superclass) {
  static get properties() {
    return {
      /**
       * A regular expression that the value is checked against.
       * The pattern must match the entire value, not just some subset.
       */
      pattern: {
        type: String
      }
    };
  }
  static get delegateAttrs() {
    return [...super.delegateAttrs, "pattern"];
  }
  static get constraints() {
    return [...super.constraints, "pattern"];
  }
};
function formatISOTime(time) {
  if (!time) {
    return "";
  }
  const pad = (num = 0, fmt = "00") => (fmt + num).substr((fmt + num).length - fmt.length);
  let timeString = `${pad(time.hours)}:${pad(time.minutes)}`;
  if (time.seconds !== void 0) {
    timeString += `:${pad(time.seconds)}`;
  }
  if (time.milliseconds !== void 0) {
    timeString += `.${pad(time.milliseconds, "000")}`;
  }
  return timeString;
}
var MATCH_HOURS = "(\\d|[0-1]\\d|2[0-3])";
var MATCH_MINUTES = "(\\d|[0-5]\\d)";
var MATCH_SECONDS = MATCH_MINUTES;
var MATCH_MILLISECONDS = "(\\d{1,3})";
var re = new RegExp(`^${MATCH_HOURS}(?::${MATCH_MINUTES}(?::${MATCH_SECONDS}(?:\\.${MATCH_MILLISECONDS})?)?)?$`, "u");
function parseISOTime(timeString) {
  const parts = re.exec(timeString);
  if (parts) {
    if (parts[4]) {
      while (parts[4].length < 3) {
        parts[4] += "0";
      }
    }
    return {
      hours: parts[1],
      minutes: parts[2],
      seconds: parts[3],
      milliseconds: parts[4]
    };
  }
}
function getStepSegment(stepValue) {
  const step = stepValue == null ? 60 : parseFloat(stepValue);
  if (step % 3600 === 0) {
    return 1;
  } else if (step % 60 === 0 || !step) {
    return 2;
  } else if (step % 1 === 0) {
    return 3;
  } else if (step < 1) {
    return 4;
  }
}
function validateTime(timeObject, step) {
  if (timeObject) {
    const stepSegment = getStepSegment(step);
    timeObject.hours = parseInt(timeObject.hours);
    timeObject.minutes = parseInt(timeObject.minutes || 0);
    timeObject.seconds = stepSegment < 3 ? void 0 : parseInt(timeObject.seconds || 0);
    timeObject.milliseconds = stepSegment < 4 ? void 0 : parseInt(timeObject.milliseconds || 0);
  }
  return timeObject;
}
var timePickerI18nDefaults = Object.freeze({
  formatTime: formatISOTime,
  parseTime: parseISOTime
});
var MIN_ALLOWED_TIME = "00:00:00.000";
var MAX_ALLOWED_TIME = "23:59:59.999";
var TimePickerMixin = (superClass) => class TimePickerMixinClass extends PatternMixin(InputControlMixin(superClass)) {
  static get properties() {
    return {
      /**
       * The time value for this element.
       *
       * Supported time formats are in ISO 8601:
       * - `hh:mm` (default)
       * - `hh:mm:ss`
       * - `hh:mm:ss.fff`
       * @type {string}
       */
      value: {
        type: String,
        notify: true,
        value: "",
        sync: true
      },
      /**
       * True if the dropdown is open, false otherwise.
       */
      opened: {
        type: Boolean,
        notify: true,
        value: false,
        reflectToAttribute: true,
        sync: true
      },
      /**
       * Minimum time allowed.
       *
       * Supported time formats are in ISO 8601:
       * - `hh:mm`
       * - `hh:mm:ss`
       * - `hh:mm:ss.fff`
       * @type {string}
       */
      min: {
        type: String,
        value: "",
        sync: true
      },
      /**
       * Maximum time allowed.
       *
       * Supported time formats are in ISO 8601:
       * - `hh:mm`
       * - `hh:mm:ss`
       * - `hh:mm:ss.fff`
       * @type {string}
       */
      max: {
        type: String,
        value: "",
        sync: true
      },
      /**
       * Defines the time interval (in seconds) between the items displayed
       * in the time selection box. The default is 1 hour (i.e. `3600`).
       *
       * It also configures the precision of the value string. By default
       * the component formats values as `hh:mm` but setting a step value
       * lower than one minute or one second, format resolution changes to
       * `hh:mm:ss` and `hh:mm:ss.fff` respectively.
       *
       * Unit must be set in seconds, and for correctly configuring intervals
       * in the dropdown, it need to evenly divide a day.
       *
       * Note: it is possible to define step that is dividing an hour in inexact
       * fragments (i.e. 5760 seconds which equals 1 hour 36 minutes), but it is
       * not recommended to use it for better UX experience.
       */
      step: {
        type: Number,
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
       * A space-delimited list of CSS class names to set on the overlay element.
       *
       * @attr {string} overlay-class
       */
      overlayClass: {
        type: String
      },
      /**
       * The object used to localize this component.
       * To change the default localization, replace the entire
       * _i18n_ object or just the property you want to modify.
       *
       * The object has the following JSON structure:
       *
       * ```
       * {
       *   // A function to format given `Object` as
       *   // time string. Object is in the format `{ hours: ..., minutes: ..., seconds: ..., milliseconds: ... }`
       *   formatTime: (time) => {
       *     // returns a string representation of the given
       *     // object in `hh` / 'hh:mm' / 'hh:mm:ss' / 'hh:mm:ss.fff' - formats
       *   },
       *
       *   // A function to parse the given text to an `Object` in the format
       *   // `{ hours: ..., minutes: ..., seconds: ..., milliseconds: ... }`.
       *   // Must properly parse (at least) text
       *   // formatted by `formatTime`.
       *   parseTime: text => {
       *     // Parses a string in object/string that can be formatted by`formatTime`.
       *   }
       * }
       * ```
       *
       * Both `formatTime` and `parseTime` need to be implemented
       * to ensure the component works properly.
       *
       * @type {!TimePickerI18n}
       */
      i18n: {
        type: Object,
        sync: true,
        value: () => __spreadValues({}, timePickerI18nDefaults)
      },
      /** @private */
      _comboBoxValue: {
        type: String,
        sync: true,
        observer: "__comboBoxValueChanged"
      },
      /** @private */
      __dropdownItems: {
        type: Array,
        sync: true
      },
      /** @private */
      _inputContainer: {
        type: Object
      }
    };
  }
  static get observers() {
    return ["__updateAriaAttributes(__dropdownItems, opened, inputElement)", "__updateDropdownItems(i18n, min, max, step)"];
  }
  static get constraints() {
    return [...super.constraints, "min", "max"];
  }
  /**
   * Used by `ClearButtonMixin` as a reference to the clear button element.
   * @protected
   * @return {!HTMLElement}
   */
  get clearElement() {
    return this.$.clearButton;
  }
  /**
   * The input element's value when it cannot be parsed as a time, and an empty string otherwise.
   *
   * @private
   * @return {string}
   */
  get __unparsableValue() {
    if (this._inputElementValue && !this.i18n.parseTime(this._inputElementValue)) {
      return this._inputElementValue;
    }
    return "";
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
    this._inputContainer = this.shadowRoot.querySelector('[part~="input-field"]');
    this._tooltipController = new TooltipController(this);
    this._tooltipController.setShouldShow((timePicker2) => !timePicker2.opened);
    this._tooltipController.setPosition("top");
    this._tooltipController.setAriaTarget(this.inputElement);
    this.addController(this._tooltipController);
  }
  /**
   * Override method inherited from `InputMixin` to forward the input to combo-box.
   * @protected
   * @override
   */
  _inputElementChanged(input) {
    super._inputElementChanged(input);
    if (input) {
      this.$.comboBox._setInputElement(input);
    }
  }
  /**
   * Opens the dropdown list.
   */
  open() {
    if (!this.disabled && !this.readonly) {
      this.opened = true;
    }
  }
  /**
   * Closes the dropdown list.
   */
  close() {
    this.opened = false;
  }
  /**
   * Returns true if the current input value satisfies all constraints (if any).
   * You can override this method for custom validations.
   *
   * @return {boolean} True if the value is valid
   */
  checkValidity() {
    return !!(this.inputElement.checkValidity() && (!this.value || this._timeAllowed(this.i18n.parseTime(this.value))) && (!this._comboBoxValue || this.i18n.parseTime(this._comboBoxValue)));
  }
  /**
   * @param {boolean} focused
   * @override
   * @protected
   */
  _setFocused(focused) {
    super._setFocused(focused);
    if (!focused) {
      if (document.hasFocus()) {
        this._requestValidation();
      }
    }
  }
  /** @private */
  __validDayDivisor(step) {
    return !step || 24 * 3600 % step === 0 || step < 1 && step % 1 * 1e3 % 1 === 0;
  }
  /**
   * Override an event listener from `KeyboardMixin`.
   * @param {!KeyboardEvent} e
   * @protected
   */
  _onKeyDown(e) {
    super._onKeyDown(e);
    if (this.readonly || this.disabled || this.__dropdownItems.length) {
      return;
    }
    const stepResolution = this.__validDayDivisor(this.step) && this.step || 60;
    if (e.keyCode === 40) {
      this.__onArrowPressWithStep(-stepResolution);
    } else if (e.keyCode === 38) {
      this.__onArrowPressWithStep(stepResolution);
    }
  }
  /**
   * Override an event listener from `KeyboardMixin`.
   * Do not call `super` in order to override clear
   * button logic defined in `InputControlMixin`.
   * @param {Event} event
   * @protected
   */
  _onEscape() {
  }
  /** @private */
  __onArrowPressWithStep(step) {
    const objWithStep = this.__addStep(this.__getMsec(this.__memoValue), step, true);
    this.__memoValue = objWithStep;
    this.__useMemo = true;
    this._comboBoxValue = this.i18n.formatTime(objWithStep);
    this.__useMemo = false;
    this.__commitValueChange();
  }
  /**
   * Depending on the nature of the value change that has occurred since
   * the last commit attempt, triggers validation and fires an event:
   *
   * Value change             | Event
   * -------------------------|-------------------
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
   * Returning milliseconds from Object in the format `{ hours: ..., minutes: ..., seconds: ..., milliseconds: ... }`
   * @private
   */
  __getMsec(obj) {
    let result = (obj && obj.hours || 0) * 60 * 60 * 1e3;
    result += (obj && obj.minutes || 0) * 60 * 1e3;
    result += (obj && obj.seconds || 0) * 1e3;
    result += obj && parseInt(obj.milliseconds) || 0;
    return result;
  }
  /**
   * Returning seconds from Object in the format `{ hours: ..., minutes: ..., seconds: ..., milliseconds: ... }`
   * @private
   */
  __getSec(obj) {
    let result = (obj && obj.hours || 0) * 60 * 60;
    result += (obj && obj.minutes || 0) * 60;
    result += obj && obj.seconds || 0;
    result += obj && obj.milliseconds / 1e3 || 0;
    return result;
  }
  /**
   * Returning Object in the format `{ hours: ..., minutes: ..., seconds: ..., milliseconds: ... }`
   * from the result of adding step value in milliseconds to the milliseconds amount.
   * With `precision` parameter rounding the value to the closest step valid interval.
   * @private
   */
  __addStep(msec, step, precision) {
    if (msec === 0 && step < 0) {
      msec = 24 * 60 * 60 * 1e3;
    }
    const stepMsec = step * 1e3;
    const diffToNext = msec % stepMsec;
    if (stepMsec < 0 && diffToNext && precision) {
      msec -= diffToNext;
    } else if (stepMsec > 0 && diffToNext && precision) {
      msec -= diffToNext - stepMsec;
    } else {
      msec += stepMsec;
    }
    const hh = Math.floor(msec / 1e3 / 60 / 60);
    msec -= hh * 1e3 * 60 * 60;
    const mm = Math.floor(msec / 1e3 / 60);
    msec -= mm * 1e3 * 60;
    const ss = Math.floor(msec / 1e3);
    msec -= ss * 1e3;
    return {
      hours: hh < 24 ? hh : 0,
      minutes: mm,
      seconds: ss,
      milliseconds: msec
    };
  }
  /** @private */
  __updateDropdownItems(i18n, min, max, step) {
    const minTimeObj = validateTime(parseISOTime(min || MIN_ALLOWED_TIME), step);
    const minSec = this.__getSec(minTimeObj);
    const maxTimeObj = validateTime(parseISOTime(max || MAX_ALLOWED_TIME), step);
    const maxSec = this.__getSec(maxTimeObj);
    this.__dropdownItems = this.__generateDropdownList(minSec, maxSec, step);
    if (step !== this.__oldStep) {
      this.__oldStep = step;
      const parsedObj = validateTime(parseISOTime(this.value), step);
      this.__updateValue(parsedObj);
    }
    if (this.value) {
      this._comboBoxValue = i18n.formatTime(i18n.parseTime(this.value));
    }
  }
  /** @private */
  __updateAriaAttributes(items, opened, input) {
    if (items === void 0 || input === void 0) {
      return;
    }
    if (items.length === 0) {
      input.removeAttribute("role");
      input.removeAttribute("aria-expanded");
    } else {
      input.setAttribute("role", "combobox");
      input.setAttribute("aria-expanded", !!opened);
    }
  }
  /** @private */
  __generateDropdownList(minSec, maxSec, step) {
    if (step < 15 * 60 || !this.__validDayDivisor(step)) {
      return [];
    }
    const generatedList = [];
    if (!step) {
      step = 3600;
    }
    let time = -step + minSec;
    while (time + step >= minSec && time + step <= maxSec) {
      const timeObj = validateTime(this.__addStep(time * 1e3, step), step);
      time += step;
      const formatted = this.i18n.formatTime(timeObj);
      generatedList.push({
        label: formatted,
        value: formatted
      });
    }
    return generatedList;
  }
  /**
   * Override an observer from `InputMixin`.
   * @protected
   * @override
   */
  _valueChanged(value, oldValue) {
    const parsedObj = this.__memoValue = parseISOTime(value);
    const newValue = formatISOTime(parsedObj) || "";
    if (!this.__keepCommittedValue) {
      this.__committedValue = value;
      this.__committedUnparsableValue = "";
    }
    if (value !== "" && value !== null && !parsedObj) {
      this.value = oldValue === void 0 ? "" : oldValue;
    } else if (value !== newValue) {
      this.value = newValue;
    } else if (this.__keepInvalidInput) {
      delete this.__keepInvalidInput;
    } else {
      this.__updateInputValue(parsedObj);
    }
    this._toggleHasValue(this._hasValue);
  }
  /** @private */
  __comboBoxValueChanged(value, oldValue) {
    if (value === "" && oldValue === void 0) {
      return;
    }
    const parsedObj = this.__useMemo ? this.__memoValue : this.i18n.parseTime(value);
    const newValue = this.i18n.formatTime(parsedObj) || "";
    if (parsedObj) {
      if (value !== newValue) {
        this._comboBoxValue = newValue;
      } else {
        this.__keepCommittedValue = true;
        this.__updateValue(parsedObj);
        this.__keepCommittedValue = false;
      }
    } else {
      if (this.value !== "" && value !== "") {
        this.__keepInvalidInput = true;
      }
      this.__keepCommittedValue = true;
      this.value = "";
      this.__keepCommittedValue = false;
    }
  }
  /** @private */
  __onComboBoxChange(event) {
    event.stopPropagation();
    this.__commitValueChange();
  }
  /** @private */
  __updateValue(obj) {
    const timeString = formatISOTime(validateTime(obj, this.step)) || "";
    this.value = timeString;
    this.__updateInputValue(obj);
  }
  /** @private */
  __updateInputValue(obj) {
    const timeString = this.i18n.formatTime(validateTime(obj, this.step)) || "";
    this._comboBoxValue = timeString;
  }
  /**
   * Returns true if `time` satisfies the `min` and `max` constraints (if any).
   *
   * @param {!TimePickerTime} time Value to check against constraints
   * @return {boolean} True if `time` satisfies the constraints
   * @protected
   */
  _timeAllowed(time) {
    const parsedMin = this.i18n.parseTime(this.min || MIN_ALLOWED_TIME);
    const parsedMax = this.i18n.parseTime(this.max || MAX_ALLOWED_TIME);
    return (!this.__getMsec(parsedMin) || this.__getMsec(time) >= this.__getMsec(parsedMin)) && (!this.__getMsec(parsedMax) || this.__getMsec(time) <= this.__getMsec(parsedMax));
  }
  /**
   * Override method inherited from `InputControlMixin`.
   * @protected
   */
  _onClearButtonClick() {
  }
  /**
   * Override method inherited from `InputConstraintsMixin`.
   * @protected
   */
  _onChange() {
  }
  /**
   * Override method inherited from `InputMixin`.
   * @protected
   */
  _onInput() {
  }
  /**
   * Fired when the user commits a value change.
   *
   * @event change
   */
};
registerStyles("vaadin-time-picker", inputFieldShared, {
  moduleId: "vaadin-time-picker-styles"
});
var TimePicker = class extends TimePickerMixin(ThemableMixin(ElementMixin(PolymerElement))) {
  static get is() {
    return "vaadin-time-picker";
  }
  static get template() {
    return html`
      <style>
        /* See https://github.com/vaadin/vaadin-time-picker/issues/145 */
        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }

        :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
          direction: rtl;
          text-align: left;
        }

        [part~='toggle-button'] {
          cursor: pointer;
        }
      </style>

      <div class="vaadin-time-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-time-picker-combo-box
          id="comboBox"
          filtered-items="[[__dropdownItems]]"
          value="{{_comboBoxValue}}"
          opened="{{opened}}"
          disabled="[[disabled]]"
          readonly="[[readonly]]"
          clear-button-visible="[[clearButtonVisible]]"
          auto-open-disabled="[[autoOpenDisabled]]"
          overlay-class="[[overlayClass]]"
          position-target="[[_inputContainer]]"
          theme$="[[_theme]]"
          on-change="__onComboBoxChange"
        >
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
            <div id="toggleButton" class="toggle-button" part="toggle-button" slot="suffix" aria-hidden="true"></div>
          </vaadin-input-container>
        </vaadin-time-picker-combo-box>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `;
  }
};
defineCustomElement(TimePicker);
function CreateDomModules(options) {
  const DomModuleTimePickerTextField = document.createElement("dom-module");
  DomModuleTimePickerTextField.setAttribute("theme-for", "vaadin-time-picker-text-field");
  DomModuleTimePickerTextField.setAttribute("id", `bh-time-picker__text-field-style`);
  DomModuleTimePickerTextField.innerHTML = `<template><style>
    // :host() .vaadin-text-field-container, 
    // :host() .vaadin-text-area-container {
    //   width: 280px;
    // }

    :host([width="medium"]) .vaadin-text-field-container, 
    :host([width="medium"]) .vaadin-text-area-container {
      width: 280px;
    }

    :host([width="small"]) .vaadin-text-field-container, 
    :host([width="small"]) .vaadin-text-area-container {
      width: 240px;
    }

    :host([width="fluid"]) .vaadin-text-field-container, 
    :host([width="fluid"]) .vaadin-text-area-container {
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

	:host([focused]:not([readonly])) [part='label'] {
		color: var(--color-text-common-primary);
	}

	[part='value'] {
		font-family: var(--font-family-body-medium);
		font-weight: 500;
		color: var(--color-text-common-primary);
		font-size: var(--font-size-body-medium);

		padding: 0px 0px 0px 26px;
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

	.isSmall [part='input-field'] {
		border: var(--effect-border-width-regular) solid
			var(--color-border-form-default);
		border-radius: var(--effect-border-radius-medium);
		background: var(--color-fill-common-secondary);

		height: 36px;
		padding: var(--spacing-padding-small);

		transition: all;
    	transition-timing-function: var(--motion-easing-normal);
    	transition-duration: var(--motion-duration-normal);
	}

	[part='input-field'] {
		border: var(--effect-border-width-regular) solid
			var(--color-border-form-default);
		border-radius: var(--effect-border-radius-medium);
		background: var(--color-fill-common-secondary);

		height: 44px;
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

    // .vaadin-text-field-container, .vaadin-text-area-container {
    //   width: 280px;
    // }
  </style></template>`;
  const DomModuleTimePickerInputIcon = document.createElement("dom-module");
  DomModuleTimePickerInputIcon.setAttribute("theme-for", "vaadin-time-picker");
  DomModuleTimePickerInputIcon.setAttribute("id", `bh-time-picker__input-icon-style`);
  DomModuleTimePickerInputIcon.innerHTML = `<template><style>
		:host([width="fluid"]) {
			width: 100%;
		}
			
	[part='toggle-button']::before {
      font-family: var(--font-family-icon-small);
      font-size: var(--font-size-icon-small);
      content: 'schedule';
      color: var(--color-text-common-primary);

      position: absolute;
      left: 12px;
      top: 12px;
    }

	.isSmall [part='toggle-button']::before {
      font-family: var(--font-family-icon-small);
      font-size: var(--font-size-icon-small);
      content: 'schedule';
      color: var(--color-text-common-primary);

      position: absolute;
      left: 8px;
      top: 8px;
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
  const DomModuleTimePickerOverlay = document.createElement("dom-module");
  DomModuleTimePickerOverlay.setAttribute("theme-for", "vaadin-combo-box-overlay");
  DomModuleTimePickerOverlay.setAttribute("id", `bh-time-picker__overlay-style`);
  DomModuleTimePickerOverlay.innerHTML = `<template><style>
    :host {
      --iron-list-items-container_-_border-width: 0;
      --iron-list-items-container_-_border-style: none;
      --iron-list-items-container_-_border-color: transparent;

      width: 280px;
    }

    [part='overlay'] {
      min-height: 400px;
      margin-top: -20px;
      padding: var(--spacing-padding-xsmall) 0;
      font-weight: 500;
      border: none;
      background-color: var(--color-fill-common-secondary);
      border-radius: var(--effect-border-radius-medium);
      box-shadow: var(--effect-drop-shadow-elevation-medium);
    }
  </style></template>`;
  const DomModuleTimePickerOverlayContent = document.createElement("dom-module");
  DomModuleTimePickerOverlayContent.setAttribute("theme-for", "vaadin-combo-box-item");
  DomModuleTimePickerOverlayContent.setAttribute("id", `bh-time-picker__overlay-item-style`);
  DomModuleTimePickerOverlayContent.innerHTML = `<template><style>
    :host {
			font-family: var(--font-family-body-medium);
			font-weight: 500;
			color: var(--color-text-common-secondary);
			font-size: var(--font-size-body-medium);

			padding: var(--spacing-padding-small);
			border-radius: 0;
		}

		:host(:hover) {
			color: var(--color-text-common-primary);
			background-color: var(--color-fill-menu-highlighted);
			cursor: pointer;
		}

		:host([focused]:not([disabled])) {
			box-shadow: none;
			background-color: var(--color-fill-menu-selected);
		}

		[part='content'] {
			margin-left: var(--spacing-padding-small);
		}

		:host([tabindex])::before {
			font-family: var(--font-family-icon-small);
			font-size: var(--font-size-icon-small);
			color: var(--color-text-common-primary);
			content: 'check';
		}
  </style></template>`;
  return [DomModuleTimePickerTextField, DomModuleTimePickerInputIcon, DomModuleTimePickerOverlay, DomModuleTimePickerOverlayContent];
}
var bhTimePickerCss = `.bh-time-picker__container{display:flex;flex-direction:column}.bh-time-picker__icon{position:absolute;margin:17px 0 0 12px}.bh-time-picker__help-text{color:var(--color-text-common-secondary)}html{--lumo-primary-color:var(--color-fill-cta-primary-default);--_lumo-button-color:var(--color-text-common-primary);--lumo-primary-text-color:var(--color-text-common-primary);--lumo-primary-color-50pct:var(--color-fill-cta-primary-default);--lumo-error-color:var(--color-text-label-error)}vaadin-time-picker input:not([type='range']){font-family:var(--font-family-body-medium);font-weight:500;color:var(--color-text-common-primary);font-size:var(--font-size-body-medium);-webkit-mask-image:none;mask-image:none}vaadin-time-picker>input:placeholder-shown{color:var(--color-text-label-placeholder)}vaadin-time-picker>[slot="helper"]{color:var(--color-text-common-secondary)}vaadin-time-picker>label{color:var(--color-text-common-primary)}vaadin-time-picker::part(toggle-button){color:var(--color-text-common-primary)}vaadin-time-picker::part(input-field){border:var(--effect-border-width-regular) solid var(--color-border-form-default);border-radius:var(--effect-border-radius-medium);background:var(--color-fill-common-secondary);height:44px;padding:var(--spacing-padding-small);transition:all;transition-timing-function:var(--motion-easing-normal);transition-duration:var(--motion-duration-normal)}vaadin-time-picker[invalid]::part(input-field){border:var(--effect-border-width-regular) solid var(--color-border-form-default);border-radius:var(--effect-border-radius-medium);border-color:var(--color-text-label-error);background:var(--color-fill-common-secondary);height:44px;padding:var(--spacing-padding-small);transition:all;transition-timing-function:var(--motion-easing-normal);transition-duration:var(--motion-duration-normal);background-color:var(--color-fill-form-error)}vaadin-time-picker[invalid]::part(input-field){color:var(--color-text-label-error)}vaadin-time-picker[invalid]::part(toggle-button)::before{color:var(--color-text-label-error)}vaadin-time-picker[focused]::part(input-field){outline:none;border-color:var(--color-border-form-focused);box-shadow:var(--effect-drop-shadow-focus-primary)}vaadin-time-picker[invalid] input:not([type='range']){color:var(--color-text-label-error)}vaadin-time-picker[invalid]::part(helper-text){display:none}vaadin-time-picker[invalid]::part(required-indicator)::after{font-family:var(--font-family-label-small);font-size:var(--font-size-label-small);content:'*';color:var(--color-text-label-critical);position:static;opacity:1}vaadin-time-picker[required]::part(required-indicator)::after{font-family:var(--font-family-label-small);font-size:var(--font-size-label-small);content:'*';color:var(--color-text-label-critical);position:static;opacity:1}vaadin-time-picker::part(error-message){font-family:var(--font-family-body-small);color:var(--color-text-label-error);font-size:var(--font-size-body-small);line-height:var(--font-line-height-body-small);margin-top:var(--spacing-margin-xxsmall);height:var(--font-line-height-body-small);display:flex;align-items:center;transition:none}`;
var BhTimePickerStyle0 = bhTimePickerCss;
var BhTimePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this.bhEventInput = createEvent(this, "bhEventInput", 7);
    this.id = void 0;
    this.label = "Time";
    this.width = void 0;
    this.format = void 0;
    this.isSmall = false;
    this.isDisabled = false;
    this.value = void 0;
    this._value = void 0;
    this.isReadOnly = false;
    this.isInvalid = false;
    this.isRequired = false;
    this.errorMessage = "Invalid time";
    this.disableHelper = false;
    this._isDisabled = void 0;
    this._isSmall = void 0;
  }
  watchWidth() {
    this.updateWidth();
  }
  watchValue() {
    this._value = this.value;
  }
  watchDisabled() {
    this._isDisabled = this.isDisabled;
  }
  watchSmall() {
    this._isSmall = this.isSmall;
  }
  updateWidth() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const timePicker2 = this.el__container.querySelector("vaadin-time-picker");
    (_b = (_a = timePicker2.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("vaadin-time-picker-text-field")) === null || _b === void 0 ? void 0 : _b.setAttribute("width", this.width);
    if (this.isSmall) {
      (_d = (_c = timePicker2.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector("vaadin-time-picker-text-field")) === null || _d === void 0 ? void 0 : _d.classList.add("isSmall");
      (_h = (_g = (_f = (_e = timePicker2.shadowRoot) === null || _e === void 0 ? void 0 : _e.querySelector("vaadin-time-picker-text-field")) === null || _f === void 0 ? void 0 : _f.shadowRoot) === null || _g === void 0 ? void 0 : _g.querySelector(".vaadin-text-field-container")) === null || _h === void 0 ? void 0 : _h.classList.add("isSmall");
    }
  }
  componentWillLoad() {
    if (!document.getElementById("bh-time-picker__text-field-style") || !document.getElementById("bh-time-picker__input-icon-style") || !document.getElementById("bh-time-picker__overlay-style") || !document.getElementById("bh-time-picker__overlay-item-style")) {
      CreateDomModules().forEach((m) => {
        document.body.appendChild(m);
      });
    }
    this._isDisabled = this.isDisabled;
    this._isSmall = this.isSmall;
    this._value = this.value;
  }
  componentWillUpdate() {
    this.updateWidth();
  }
  componentDidLoad() {
    customElements.whenDefined("vaadin-time-picker").then(() => {
      const timePicker2 = this.el__container.querySelector("vaadin-time-picker");
      const slotInstance = timePicker2.shadowRoot.querySelector("vaadin-input-container").querySelector('[part="toggle-button"]');
      slotInstance.setAttribute("slot", "prefix");
      switch (this.format) {
        case "hh:mm:ss":
          timePicker2.step = 1;
          break;
        case "hh:mm":
          timePicker2.step = 60;
          break;
        case "hh:00":
          timePicker2.step = 3600;
          break;
        default:
          timePicker2.step = 3600;
          break;
      }
      timePicker2.addEventListener("change", (e) => {
        e.preventDefault();
        this._value = e.target.value;
        this.value = this._value;
        this.bhEventChange.emit(e.target.value);
        this.bhEventInput.emit({
          "inValid": e.target["invalid"]
        });
      });
      this.updateWidth();
    });
  }
  render() {
    return h(Host, {
      key: "ba7c4637abb670e55fc7b6b4bf5ac52ad5e80d08"
    }, h("div", {
      key: "1f3652ac6ec15699f5173ca4b8f9487875e359b3",
      ref: (el) => {
        this.el__container = el;
      }
    }, h("vaadin-time-picker", {
      key: "17baa2d5206134f6df30226e7a5053f41e15c4f1",
      id: `${this.id}__vaadin-time-picker`,
      label: this.label,
      value: this._value,
      placeholder: `${this.format.toUpperCase()}`,
      readonly: this.isReadOnly,
      invalid: this.isInvalid,
      step: 1,
      required: this.isRequired,
      errorMessage: this.errorMessage,
      width: this.width,
      disabled: this._isDisabled,
      "auto-open-disabled": true
    }, this.disableHelper ? `` : h("span", {
      slot: "helper"
    }, this.format.toUpperCase()))));
  }
  static get watchers() {
    return {
      "width": ["watchWidth"],
      "value": ["watchValue"],
      "isDisabled": ["watchDisabled"],
      "isSmall": ["watchSmall"]
    };
  }
};
BhTimePicker.style = BhTimePickerStyle0;
export {
  BhTimePicker as bh_time_picker
};
/*! Bundled license information:

@bh-digital-solutions/ui-toolkit/dist/esm/bh-time-picker.entry.js:
  (**
   * @license
   * Copyright (c) 2022 - 2025 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
  (**
   * @license
   * Copyright (c) 2018 - 2025 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
  (**
   * @license
   * Copyright (c) 2015 - 2025 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
  (**
   * @license
   * Copyright (c) 2021 - 2025 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
//# sourceMappingURL=bh-time-picker.entry-B5CSAP34.js.map
