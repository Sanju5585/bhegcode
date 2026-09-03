import {
  Virtualizer,
  get,
  processTemplates
} from "./chunk-YQB53D5X.js";
import {
  _
} from "./chunk-2U6ZSFHE.js";
import {
  ActiveMixin,
  DateTime_1,
  addListener
} from "./chunk-L2DOPODQ.js";
import {
  ControllerMixin,
  D,
  Debouncer,
  DelegateFocusMixin,
  DelegateStateMixin,
  DirMixin,
  DisabledMixin,
  ElementMixin,
  FieldMixin,
  FocusMixin,
  InputControlMixin,
  InputController,
  InputMixin,
  LabelledInputController,
  PolymerElement,
  SlotController,
  SlotObserver,
  SlotStylesMixin,
  TabindexMixin,
  ThemableMixin,
  TooltipController,
  addValueToAttribute,
  animationFrame,
  announce,
  b,
  dedupingMixin,
  defineCustomElement,
  fieldButton,
  getClosestElement,
  html,
  i$3,
  inputFieldShared,
  inputFieldShared$1,
  isAndroid,
  isChrome,
  isElementFocusable,
  isElementHidden,
  isFirefox,
  isIOS,
  isKeyboardActive,
  isSafari,
  isTouch,
  microTask,
  r$2,
  registerStyles,
  removeValueFromAttribute,
  supportsAdoptingStyleSheets,
  timeOut
} from "./chunk-FPZAVM6P.js";
import {
  hooks
} from "./chunk-HFZDUW4C.js";
import {
  Chart,
  getChartColor
} from "./chunk-LPGPO5UA.js";
import "./chunk-TG4QHA7A.js";
import {
  ERROR_MESSAGE,
  listOfMaterialIconTypes
} from "./chunk-LKFGSGYB.js";
import {
  v4
} from "./chunk-3LWXUT7V.js";
import {
  getBreakpoint
} from "./chunk-2XYHRBAQ.js";
import {
  DesignTokens
} from "./chunk-XGCW5RY7.js";
import {
  components,
  defaultPrefix,
  generateComponentLiteralWithPrefix
} from "./chunk-XU5S37NP.js";
import "./chunk-RW74KZYS.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-5YQC5RSE.js";
import {
  __async,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@bh-digital-solutions/ui-toolkit/dist/esm/bh-a_26.entry.js
var bhACss = "a{-o-transition:var(--motion-duration-fast);-ms-transition:var(--motion-duration-fast);-moz-transition:var(--motion-duration-fast);-webkit-transition:var(--motion-duration-fast);transition:var(--motion-duration-fast)}.bh-tabular-list__tooltip{position:absolute;top:0;background-color:var(--color-text-common-primary);color:var(--color-fill-common-secondary);display:block;width:fit-content;padding:var(--spacing-padding-xsmall) var(--spacing-padding-small);font-size:xx-small;border-radius:var(--effect-border-radius-medium);pointer-events:none;opacity:0;white-space:initial;overflow:hidden;transition:opacity var(--motion-duration-fast) var(--motion-easing-fast)}.bh-tabular-list__tooltip.shown{opacity:1}.bh-tabular-list__tooltip__ghost-element{visibility:hidden;pointer-events:none;display:table;padding:0;height:0;position:absolute;max-width:30px;font-size:xx-small;word-break:normal}.bh-a{display:flex;flex-direction:row;font:inherit;cursor:pointer;outline:none;-webkit-appearance:none;-moz-appearance:none;-o-appearance:none;appearance:none;-webkit-tap-highlight-color:transparent;-moz-tap-highlight-color:transparent}.bh-a--tag{text-decoration:none}.bh-a--text{text-decoration:underline;display:block;overflow:hidden;width:fit-content;text-overflow:ellipsis;white-space:nowrap}.bh-a--text.no-border{text-decoration:none}.bh-a:focus{box-shadow:var(--effect-drop-shadow-focus-primary)}.bh-a:focus:not(:focus-visible){box-shadow:none}.bh-a__type-primary:link,.bh-a__type-primary:visited{color:var(--color-text-link-primary-default)}.bh-a__type-secondary:link,.bh-a__type-secondary:visited{color:var(--color-text-link-secondary-default)}.bh-a__type-tertiary:link,.bh-a__type-tertiary:visited{color:var(--color-text-link-tertiary-default)}.bh-a__type-primary:hover,.bh-a__type-secondary:hover,.bh-a__type-tertiary:hover{color:var(--color-text-link-hover)}.bh-a__type-primary:active,.bh-a__type-secondary:active,.bh-a__type-tertiary:active{color:var(--color-text-link-pressed)}.bh-a__type-disabled{color:var(--color-text-link-disabled);cursor:not-allowed;pointer-events:none}.bh-a__type-inverse:link,.bh-a__type-inverse:visited{color:var(--color-text-link-inverse-default)}.bh-a__type-inverse:hover,.bh-a__type-inverse:active{color:var(--color-text-link-inverse-hover)}.bh-a__type-inverse-disabled{color:var(--color-text-link-inverse-disabled);cursor:not-allowed;pointer-events:none}.bh-a__no-underline{text-decoration:none}.bh-a--icon{font-family:var(--font-family-icon-medium);font-style:normal;vertical-align:middle;text-decoration:none !important}.bh-a--icon-left{padding-right:var(--spacing-margin-xxsmall)}.bh-a--icon-right{padding-left:var(--spacing-margin-xxsmall)}.external-link{display:inline-block;transform:rotate(-45deg);padding-top:3px}";
var BhAStyle0 = bhACss;
var BhA = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isTruncated = false;
    this.type = "primary";
    this.font = "typography--body-medium";
    this.href = void 0;
    this.target = "_self";
    this.text = "default";
    this.isDisabled = false;
    this.noUnderline = false;
    this.externalLink = false;
    this.leftIcon = void 0;
    this.isFooter = false;
    this.textLimit = 30;
    this.tabularwidth = void 0;
    this.rightIcon = void 0;
  }
  componentWillLoad() {
    var _a, _b;
    this.oldText = this.text;
    this.textToShow = this.text;
    if (this.tabularwidth == void 0) {
      if (((_a = this.textToShow) === null || _a === void 0 ? void 0 : _a.length) <= this.textLimit) ;
      else {
        this.textToShow = ((_b = this.textToShow) === null || _b === void 0 ? void 0 : _b.substring(0, this.textLimit)) + "...";
        this.isTruncated = true;
      }
    }
  }
  mouseOverEvent() {
    try {
      if (!this.isFooter) {
        this.el__tooltipGhostElement.innerHTML = null;
        this.el__tooltipGhostElement.innerHTML = this.oldText;
        if (this.isTruncated) {
          this.el__tooltip.classList.add("shown");
          this.el__tooltipMessage.innerHTML = this.oldText;
          this.el__tooltip.style.right = "auto";
          this.el__tooltip.style.top = "auto";
        }
      }
    } catch (err) {
      console.warn("ERROR_MESSAGE");
    }
  }
  mouseLeaveEvent() {
    try {
      this.el__tooltipGhostElement.innerHTML = null;
      this.el__tooltip.classList.remove("shown");
    } catch (err) {
      console.warn("ERROR_MESSAGE");
    }
  }
  render() {
    const linkClasses = ["bh-a", "motion--fast"];
    const rightIconClasses = ["bh-a--icon bh-a--icon-right material-icons material-icons-outlined"];
    if (this.isDisabled && this.type === "inverse") {
      linkClasses.push("bh-a__type-inverse-disabled");
    } else if (this.isDisabled) {
      linkClasses.push("bh-a__type-disabled");
    } else {
      linkClasses.push(`bh-a__type-${this.type}`);
    }
    if (this.isDisabled) {
      this.href = "";
    }
    if (this.noUnderline) {
      linkClasses.push("bh-a__no-underline");
    }
    if (this.externalLink) {
      rightIconClasses.push("external-link bh-a--icon bh-a--icon-right material-icons material-icons-outlined");
    }
    if (!this.href) {
      return h(Host, {
        class: `bh-a bh-a--container   ${this.font}`,
        ref: (el) => {
          this.element__host = el;
        }
      }, h("span", {
        class: `${linkClasses.join(" ")} bh-a--text ${this.noUnderline ? "no-border" : ""}`
      }, this.leftIcon && h("i", {
        class: `bh-a--icon bh-a--icon-left material-icons material-icons-outlined`
      }, this.leftIcon), this.textToShow, this.rightIcon && h("i", {
        class: rightIconClasses.join(" ")
      }, this.rightIcon), this.externalLink && h("i", {
        class: rightIconClasses.join(" ")
      }, "arrow_forward")));
    }
    return h(Host, {
      class: `bh-a bh-a--container ${this.font}`,
      ref: (el) => {
        this.element__host = el;
      }
    }, h("a", {
      class: `bh-a--tag ${linkClasses.join(" ")}`,
      href: this.href,
      target: this.target
    }, this.leftIcon && h("i", {
      class: `bh-a--icon bh-a--icon-left material-icons material-icons-outlined`
    }, this.leftIcon), h("span", {
      class: `bh-a--text ${this.noUnderline ? "no-border" : ""}`,
      onMouseOver: () => {
        this.mouseOverEvent();
      },
      onMouseLeave: () => {
        this.mouseLeaveEvent();
      }
    }, this.textToShow, h("div", {
      class: `bh-tabular-list__tooltip`,
      ref: (el) => {
        this.el__tooltip = el;
      }
    }, h("span", {
      class: "typography--body-small-semi-bold",
      ref: (el) => {
        this.el__tooltipMessage = el;
      }
    })), h("div", {
      class: "bh-tabular-list__tooltip__ghost-element typography--body-medium",
      ref: (el) => {
        this.el__tooltipGhostElement = el;
      }
    })), this.rightIcon && h("i", {
      class: rightIconClasses.join(" ")
    }, this.rightIcon), this.externalLink && h("i", {
      class: rightIconClasses.join(" ")
    }, "arrow_forward")));
  }
};
BhA.style = BhAStyle0;
var bhActionBarCss = ".bh-action-bar{background-color:var(--color-fill-common-secondary);border-top:1px solid var(--color-border-common-primary);position:var(--position-bh-action-bar);left:58px;right:0;bottom:0;width:calc(100% - 58px);height:52px;z-index:500;display:flex}.bh-action-bar--slot{display:flex;align-items:center;padding:0 var(--spacing-padding-medium);width:50%}.bh-action-bar--footer-actions{min-width:0;width:50%;display:flex;justify-content:flex-end;align-items:center;padding:0 var(--spacing-padding-medium)}.bh-action-bar--footer-actions>*{display:flex;min-width:0;margin-left:var(--spacing-margin-small)}.bh-action-bar--footer-actions>*:first-child{margin-left:0px}@media only screen and (max-width: 1023px){.bh-action-bar{left:0;width:100%}}@media only screen and (max-width: 599px){.bh-action-bar{height:auto;max-height:120px;flex-direction:column;padding:var(--spacing-padding-xsmall) 0}.bh-action-bar>*:first-child{margin-bottom:var(--spacing-margin-small)}.bh-action-bar--slot{padding:0 var(--spacing-padding-small);width:100%}.bh-action-bar--footer-actions>*{flex:1;min-width:0}.bh-action-bar--footer-actions{width:100%;max-width:calc(100% - 24px);justify-content:flex-start;align-items:center;padding:0 var(--spacing-padding-small)}}";
var BhActionBarStyle0 = bhActionBarCss;
var BhActionBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ctaClick = createEvent(this, "ctaClick", 7);
    this.bhEventCtaClick = createEvent(this, "bhEventCtaClick", 7);
    this.buttonDropdownFooterAction = void 0;
    this._buttonDropdownFooterAction = void 0;
    this.footerActions = void 0;
    this._footerActions = void 0;
    this.viewport = void 0;
  }
  WatchButtonDropdownFooterAction() {
    this._buttonDropdownFooterAction = typeof this.buttonDropdownFooterAction === "string" ? JSON.parse(this.buttonDropdownFooterAction) : this.buttonDropdownFooterAction;
  }
  watchFooterActions() {
    this._footerActions = typeof this.footerActions === "string" ? JSON.parse(this.footerActions) : this.footerActions;
  }
  handleResize() {
    const bp = getBreakpoint();
    if (this.viewport !== bp) this.viewport = bp;
  }
  componentWillLoad() {
    this.viewport = getBreakpoint();
    this._footerActions = typeof this.footerActions === "string" ? JSON.parse(this.footerActions) : this.footerActions;
    this._buttonDropdownFooterAction = typeof this.buttonDropdownFooterAction === "string" ? JSON.parse(this.buttonDropdownFooterAction) : this.buttonDropdownFooterAction;
  }
  render() {
    const prefix = this.host.tagName.toLowerCase().replace(components.actionBar.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix);
    return h(Host, {
      key: "27570402e73b01a2b3e260ec288b2d9361d28bd0",
      class: "bh-action-bar"
    }, h("div", {
      key: "73896fec93b3c7054741f87041f16a4be5fc3977",
      class: "bh-action-bar--slot"
    }, h("slot", {
      key: "baee2178cfe55ffe304f4c47bac7599ad967ae85"
    })), h("div", {
      key: "2e62256012f26833c62149e9598a3f1cd83842d2",
      class: "bh-action-bar--footer-actions"
    }, this._footerActions && this._footerActions.slice(0, 3).map((button) => h(Components.button, {
      isSmall: button.size === "medium" ? false : true,
      type: button.type,
      label: button.label,
      leftIcon: button.leftIcon,
      rightIcon: button.rightIcon,
      isDisabled: button.isDisabled,
      isLoading: button.isLoading,
      isFluid: !!(this.viewport === "small"),
      onClick: () => {
        if (button.isDisabled) return;
        this.ctaClick.emit(button.key);
        this.bhEventCtaClick.emit(button.key ? button.key : "");
      }
    })), this._buttonDropdownFooterAction && h(Components.buttonDropdown, {
      type: this._buttonDropdownFooterAction.type,
      label: this._buttonDropdownFooterAction.label,
      isFluid: false,
      isDisabled: false,
      isLoading: false,
      menuItems: this._buttonDropdownFooterAction.menuItems,
      menuWidth: "medium",
      flipVertical: true,
      isMultiSelect: false,
      isSelectAll: false,
      isSearchable: false,
      isUnselectable: false,
      isSmall: this._buttonDropdownFooterAction.isSmall,
      flipOffset: "null"
    })));
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "buttonDropdownFooterAction": ["WatchButtonDropdownFooterAction"],
      "footerActions": ["watchFooterActions"]
    };
  }
};
BhActionBar.style = BhActionBarStyle0;
var bhActionMenuCss = ".bh-action-menu{position:relative;display:table}.bh-action-menu__menu-container{position:absolute;z-index:10;top:48px;right:0;visibility:visible}.bh-action-menu__menu-container.small{top:40px}.bh-action-menu__menu-container.flip--vertical{bottom:48px;top:unset}.bh-action-menu__menu-container.small.flip--vertical{bottom:40px;top:unset}.bh-action-menu__menu-container.flip--horizontal{left:0;right:unset}.bh-action-menu__menu-container.open{visibility:visible;opacity:1}.bh-action-menu__menu-container.closed{visibility:hidden;opacity:0;position:fixed}.bh-action-menu__menu-container.inline.open{visibility:hidden}.bh-action-menu__menu-container.inline.open.inline-style-set{visibility:visible}.bh-action-menu__menu-container.inline.closed{display:none}.bh-title-wrapper__cta--action-menu--desktop{display:block}.bh-title-wrapper__cta--action-menu--mobile{display:none}@media (max-width: 599px){.bh-title-wrapper__cta--action-menu--desktop{display:none}.bh-title-wrapper__cta--action-menu--mobile{display:block}}.enableActionMenuOpenClass{-webkit-animation:slide-in-top 800ms cubic-bezier(0.175, 0.885, 0.320, 1.275) both;animation:slide-in-top 800ms cubic-bezier(0.175, 0.885, 0.320, 1.275) both}@-webkit-keyframes slide-in-top{0%{-webkit-transform:translateY(-32px);transform:translateY(-32px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slide-in-top{0%{-webkit-transform:translateY(-32px);transform:translateY(-32px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}";
var BhActionMenuStyle0 = bhActionMenuCss;
var BhActionMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.opened = createEvent(this, "opened", 7);
    this.bhEventOpen = createEvent(this, "bhEventOpen", 3);
    this.bhEventClose = createEvent(this, "bhEventClose", 3);
    this.bhEventSelected = createEvent(this, "bhEventSelected", 7);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this.bhEventCtaClick = createEvent(this, "bhEventCtaClick", 7);
    this.actionMenuOpenclass = "open";
    this.menuItems = void 0;
    this.disableTooltip = false;
    this.selectedValue = void 0;
    this.additionalMenuItems = void 0;
    this.menuWidth = "medium";
    this.isMultiSelect = void 0;
    this.flipHorizontal = false;
    this.isSelectAll = void 0;
    this.isSearchable = void 0;
    this.isUnselectable = void 0;
    this.placeholder = void 0;
    this.isSmall = false;
    this.iconOverride = void 0;
    this.keyboardFocused = false;
    this.isReadyToStyle = false;
    this.isOpen = false;
    this.flipOffset = {
      x: 72,
      y: 72
    };
    this.isEllipsis = void 0;
    this.inlineAnchorId = "";
    this.tooltipLeftPadding = 0;
    this.tooltipIsInline = true;
    this.tooltipPlacement = "top";
    this.isInline = false;
    this.badgeLabel = "";
    this._flipOffset = void 0;
    this.filpped = {
      x: false,
      y: false
    };
    this.inlineStyle = {};
    this.isInlineStyleSet = void 0;
    this.inlineUuid = void 0;
    this.interval = void 0;
    this.enableMicroInteraction = true;
  }
  handleResize() {
    this.setMenuPosition();
    if (this.inlineAnchorId || this.isInline) this.styleMenu();
  }
  bhEventScroll(e) {
    var _a, _b;
    if (((_b = (_a = e.detail) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.initiator) === "tabularlist") {
      this.closeMenu();
    } else {
      if (this.inlineAnchorId || this.isInline) this.styleMenu();
    }
  }
  isOpenChange() {
    if (this.isOpen) {
      this.bhEventOpen.emit({
        "open": this.isOpen
      });
    } else {
      this.bhEventClose.emit({
        "open": this.isOpen
      });
      setTimeout(() => {
        this.element__toggle.querySelector(".bh-button").focus();
      });
    }
    this.opened.emit({
      isOpen: this.isOpen,
      inlineAnchorId: this.inlineAnchorId
    });
    const userAgent = window.navigator.userAgent;
    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
      if (this.isOpen) {
        this.interval = setInterval(() => {
          this.setMenuPosition();
        }, 30);
      } else {
        clearInterval(this.interval);
      }
    }
    if (this.inlineAnchorId || this.isInline) {
      if (this.isOpen) {
        setTimeout(() => {
          this.isInlineStyleSet = true;
          this.styleMenuOverride();
        }, 50);
      } else {
        this.isInlineStyleSet = false;
        document.body.removeChild(document.getElementById(`bh-action-menu__inline-menu__${this.inlineUuid}`));
      }
    }
  }
  preventDefault(event) {
    event.preventDefault();
  }
  // call this to Disable
  disableScroll() {
    window.addEventListener("DOMMouseScroll", this.preventDefault, false);
    window.addEventListener(this.wheelEvent, this.preventDefault, this.wheelOpt);
    window.addEventListener("touchmove", this.preventDefault, this.wheelOpt);
  }
  // call this to Enable
  enableScroll() {
    window.removeEventListener("DOMMouseScroll", this.preventDefault, false);
    window.removeEventListener(this.wheelEvent, this.preventDefault, this.wheelOpt);
    window.removeEventListener("touchmove", this.preventDefault, this.wheelOpt);
  }
  styleMenu() {
    var _a, _b, _c, _d, _e, _f;
    try {
      if (!this.inlineAnchorId && !this.isInline) return;
      const tar = this.inlineAnchorId ? document.body.querySelector(`[inline-anchor-id="${this.inlineAnchorId}"]`) : this.element__host;
      this.inlineStyle = {
        position: "fixed",
        left: `${((_a = tar.getBoundingClientRect()) === null || _a === void 0 ? void 0 : _a.left) + ((_b = tar.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.width) - ((_c = this.element__menu) === null || _c === void 0 ? void 0 : _c.clientWidth)}px`,
        top: `${((_d = tar.getBoundingClientRect()) === null || _d === void 0 ? void 0 : _d.top) + ((_e = tar.getBoundingClientRect()) === null || _e === void 0 ? void 0 : _e.height) + 4}px`,
        width: `${(_f = this.element__menu) === null || _f === void 0 ? void 0 : _f.clientWidth}px`,
        zIndex: 100
      };
      this.element__menu.id = `bh-action-menu__inline-menu__${this.inlineUuid}`;
      document.body.appendChild(this.element__menu);
    } catch (e) {
      console.log(e);
    }
  }
  styleMenuOverride() {
    var _a, _b;
    if (!this.inlineAnchorId && !this.isInline) return;
    const tar = this.inlineAnchorId ? document.body.querySelector(`[inline-anchor-id="${this.inlineAnchorId}"]`) : this.element__host;
    this.inlineStyle = {
      position: "fixed",
      left: `${tar.getBoundingClientRect().left + tar.getBoundingClientRect().width - ((_a = this.element__menu.querySelector(".bh-menu__container")) === null || _a === void 0 ? void 0 : _a.clientWidth)}px`,
      top: `${tar.getBoundingClientRect().top + tar.getBoundingClientRect().height + 4}px`,
      width: `${(_b = this.element__menu.querySelector(".bh-menu__container")) === null || _b === void 0 ? void 0 : _b.clientWidth}px`,
      zIndex: 100
    };
  }
  onMultiselectChange(event) {
    if (this.isMultiSelect) {
      const checkedItem = event.detail.checkedItem;
      this.badgeLabel = (checkedItem === null || checkedItem === void 0 ? void 0 : checkedItem.length) ? checkedItem === null || checkedItem === void 0 ? void 0 : checkedItem.length : "";
      this.bhEventSelected.emit(checkedItem);
      this.bhEventChange.emit(checkedItem);
    }
  }
  setMenuPosition() {
    var _a, _b, _c, _d;
    if (this.inlineAnchorId || this.isInline) return;
    this.filpped = {
      x: false,
      y: ((_b = (_a = this.element__toggle) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.top) + ((_c = this.element__menu) === null || _c === void 0 ? void 0 : _c.clientHeight) + ((_d = this._flipOffset) === null || _d === void 0 ? void 0 : _d.y) > window.innerHeight
    };
  }
  actionMenuClickEvent(event) {
    var _a, _b;
    if (!((_a = this.element__toggle) === null || _a === void 0 ? void 0 : _a.contains(event.target)) && !((_b = this.element__menu) === null || _b === void 0 ? void 0 : _b.contains(event.target))) this.closeMenu();
  }
  closeMenu() {
    this.isOpen = false;
    if (this.inlineAnchorId || this.isInline) {
      this.enableScroll();
    }
  }
  toggleOpen(e) {
    this.bhEventSelected.emit("action-menu-button-click");
    this.isOpen = !this.isOpen;
    if (this.inlineAnchorId || this.isInline) {
      if (this.isOpen) {
        this.isReadyToStyle = true;
        this.disableScroll();
      } else {
        this.enableScroll();
      }
    }
  }
  onCtaClick(event) {
    this.bhEventCtaClick.emit(event.detail);
  }
  onSelect(item) {
    this.bhEventSelected.emit(item);
    this.bhEventChange.emit(item);
    this.closeMenu();
  }
  onUnselect() {
    this.closeMenu();
    if (this.isMultiSelect) {
      this.badgeLabel = "";
    }
    this.bhEventSelected.emit();
    this.bhEventChange.emit();
  }
  disconnectedCallback() {
    window.removeEventListener("click", (event) => this.actionMenuClickEvent(event));
    window.removeEventListener("mousewheel", () => this.setMenuPosition());
  }
  componentWillLoad() {
    if (this.iconOverride && !(this.iconOverride in listOfMaterialIconTypes)) {
      console.warn("Icon type is not supported in the iconography set");
    }
    this._flipOffset = typeof this.flipOffset === "string" ? JSON.parse(this.flipOffset) : this.flipOffset;
    if (this.inlineAnchorId || this.isInline) {
      let supportsPassive = false;
      this.inlineUuid = v4();
      try {
        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
          get: function() {
            supportsPassive = true;
          }
        }));
      } catch (e) {
      }
      this.wheelOpt = supportsPassive ? {
        passive: false
      } : false;
      this.wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
    }
    if (this.enableMicroInteraction) {
      this.actionMenuOpenclass = "open enableActionMenuOpenClass";
    }
  }
  componentDidLoad() {
    window.addEventListener("click", (event) => {
      this.actionMenuClickEvent(event);
    });
    window.addEventListener("mousewheel", () => this.setMenuPosition());
  }
  componentDidRender() {
    if (this.isReadyToStyle && (this.inlineAnchorId || this.isInline)) {
      this.styleMenu();
      this.isReadyToStyle = false;
    }
  }
  mergeMenuItems(menuItems, additionalMenuItems) {
    const _menuItemsJson = typeof menuItems === "string" ? JSON.parse(menuItems) : menuItems;
    let _additionalMenuItemsJson;
    if (typeof additionalMenuItems === "string") {
      try {
        _additionalMenuItemsJson = JSON.parse(additionalMenuItems);
      } catch (_a) {
        _additionalMenuItemsJson = [additionalMenuItems];
      }
    } else {
      _additionalMenuItemsJson = additionalMenuItems;
    }
    let output;
    if (Array.isArray(_menuItemsJson)) {
      const firstItem = _menuItemsJson[0];
      if (typeof firstItem === "string") {
        if (Array.isArray(_additionalMenuItemsJson)) {
          const firstItem2 = _additionalMenuItemsJson[0];
          if (typeof firstItem2 === "string") {
            output = {
              itemGroups: [{
                items: _additionalMenuItemsJson.map((item) => {
                  return {
                    label: item,
                    value: item
                  };
                })
              }, {
                items: _menuItemsJson.map((item) => {
                  return {
                    label: item,
                    value: item
                  };
                })
              }]
            };
          } else {
            output = {
              itemGroups: [{
                items: _additionalMenuItemsJson
              }, {
                items: _menuItemsJson.map((item) => {
                  return {
                    label: item,
                    value: item
                  };
                })
              }]
            };
          }
        } else {
          output = {
            itemGroups: [{
              items: [_additionalMenuItemsJson]
            }, {
              items: _menuItemsJson.map((item) => {
                return {
                  label: item,
                  value: item
                };
              })
            }]
          };
        }
      } else {
        if (Array.isArray(_additionalMenuItemsJson)) {
          const firstItem2 = _additionalMenuItemsJson[0];
          if (typeof firstItem2 === "string") {
            output = {
              itemGroups: [{
                items: _additionalMenuItemsJson.map((item) => {
                  return {
                    label: item,
                    value: item
                  };
                })
              }, {
                items: _menuItemsJson
              }]
            };
          } else {
            output = {
              itemGroups: [{
                items: _additionalMenuItemsJson
              }, {
                items: _menuItemsJson
              }]
            };
          }
        } else {
          output = {
            itemGroups: [{
              items: [_additionalMenuItemsJson]
            }, {
              items: _menuItemsJson
            }]
          };
        }
      }
    } else {
      if (Array.isArray(_additionalMenuItemsJson)) {
        const firstItem = _additionalMenuItemsJson[0];
        if (typeof firstItem === "string") {
          output = {
            itemGroups: [{
              items: _additionalMenuItemsJson.map((item) => {
                return {
                  label: item,
                  value: item
                };
              })
            }, ..._menuItemsJson.itemGroups],
            ctas: (_menuItemsJson === null || _menuItemsJson === void 0 ? void 0 : _menuItemsJson.ctas) ? _menuItemsJson === null || _menuItemsJson === void 0 ? void 0 : _menuItemsJson.ctas : null
          };
        } else {
          output = {
            itemGroups: [{
              items: _additionalMenuItemsJson
            }, ..._menuItemsJson.itemGroups],
            ctas: (_menuItemsJson === null || _menuItemsJson === void 0 ? void 0 : _menuItemsJson.ctas) ? _menuItemsJson === null || _menuItemsJson === void 0 ? void 0 : _menuItemsJson.ctas : null
          };
        }
      } else {
        output = {
          itemGroups: [{
            items: [_additionalMenuItemsJson]
          }, ..._menuItemsJson.itemGroups],
          ctas: (_menuItemsJson === null || _menuItemsJson === void 0 ? void 0 : _menuItemsJson.ctas) ? _menuItemsJson === null || _menuItemsJson === void 0 ? void 0 : _menuItemsJson.ctas : null
        };
      }
    }
    return output;
  }
  render() {
    if (!this.menuItems) return;
    const _menuItems = this.additionalMenuItems ? this.mergeMenuItems(this.menuItems, this.additionalMenuItems) : this.menuItems;
    const prefix = this.host.tagName.toLowerCase().replace(components.actionMenu.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix);
    return h(Host, {
      ref: (el) => {
        this.element__host = el;
      },
      class: "bh-action-menu"
    }, h(Components.badge, {
      position: "appended",
      offset: "small",
      label: this.isMultiSelect ? this.badgeLabel : ""
    }, h(Components.button, {
      class: "bh-action-menu__toggle",
      ref: (el) => this.element__toggle = el,
      type: "ghost",
      label: "",
      disableTooltip: this.disableTooltip,
      leftIcon: this.iconOverride ? this.iconOverride : "more_horiz",
      isSmall: this.isSmall,
      onClick: (e) => this.toggleOpen(e)
    }), h("div", {
      class: `${this.flipHorizontal ? "bh-action-menu__menu-container flip--horizontal" : "bh-action-menu__menu-container"} ${this.isOpen ? this.actionMenuOpenclass : "closed"} ${(this.inlineAnchorId || this.isInline) && this.isInlineStyleSet ? "inline-style-set" : ""} ${this.filpped.y ? "flip--vertical" : ""} ${this.filpped.x ? "flip--horizontal" : ""} ${this.isSmall ? "small" : ""} ${this.inlineAnchorId || this.isInline ? "inline" : ""}`,
      style: this.inlineAnchorId || this.isInline ? this.inlineStyle : {},
      ref: (el) => this.element__menu = el
    }, h(Components.menu, {
      menuItems: _menuItems,
      menuWidth: this.menuWidth,
      menuHeight: this.isSmall ? "small" : "medium",
      placeholder: this.placeholder,
      isFocused: this.isOpen,
      keyboardFocused: this.keyboardFocused,
      selected: this.selectedValue,
      isMultiSelect: this.isMultiSelect,
      isSelectAll: this.isSelectAll,
      isSearchable: this.isSearchable,
      isUnselectable: this.isMultiSelect ? false : this.isUnselectable,
      isItemPaddingRight: this.menuWidth === "fluid",
      isEllipsis: this.isEllipsis,
      tooltipLeftPadding: this.tooltipLeftPadding,
      tooltipPlacement: this.tooltipPlacement,
      tooltipIsInline: this.tooltipIsInline,
      // onSelect={(event) => {
      // }}
      onMultiselectChange: (event) => {
        this.onMultiselectChange(event);
      },
      onUnselect: () => {
        this.onUnselect();
      },
      onBhEventChange: (event) => {
        event.preventDefault();
        event.stopPropagation();
      },
      onBhEventSelected: (event) => {
        this.onSelect(event.detail);
        event.preventDefault();
        event.stopPropagation();
      },
      onBhEventCtaClick: (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.onCtaClick(event);
      },
      onClose: () => {
        this.isOpen = false;
      }
    }))));
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "isOpen": ["isOpenChange"]
    };
  }
};
BhActionMenu.style = BhActionMenuStyle0;
var bhAppShellCss = ':root{--color-border-common-primary:#ced7d4;--table-background-color:#ffffff;--color-border-common-secondary:#b8b8b8;--color-border-cta-secondary-default:#adbdb9;--color-border-cta-secondary-hover:#8ca39d;--color-border-cta-secondary-pressed:#748e88;--color-border-cta-secondary-focused:#adbdb9;--color-border-control-unselected:#a0a0a0;--color-border-control-selected:#02a783;--color-border-control-disabled:#adbdb9;--color-border-control-error:#e16e75;--color-border-form-default:#ced7d4;--color-border-form-hover:#adbdb9;--color-border-form-focused:#02a783;--color-border-form-disabled:#adbdb9;--color-border-form-error:#e16e75;--color-border-form-error-hover:#f0373a;--color-border-data-viz-comparison-secondary:#b8b8b8;--color-border-data-viz-comparison-primary:#666eb4;--color-border-data-viz-default-1:#666eb4;--color-border-data-viz-default-2:#4ca2a8;--color-border-data-viz-default-3:#af74b9;--color-border-data-viz-default-4:#b49566;--color-border-data-viz-default-5:#dd887c;--color-border-data-viz-default-6:#e6b056;--color-border-data-viz-default-7:#dd7cc2;--color-border-data-viz-default-8:#b0cd5d;--color-border-common-focused:#2cb0bc;--color-border-common-error:#ec979b;--color-border-semantic-success:#05322b;--color-border-semantic-error:#e12d39;--color-border-semantic-neutral:#adbdb9;--color-border-semantic-warning:#e87516;--color-border-semantic-info:#1f6362;--color-fill-data-viz-comparison-secondary:#d0d0d0;--color-fill-data-viz-comparison-primary:#666eb4;--color-fill-data-viz-default-1:#666eb4;--color-fill-semantic-error-hover:#fdcbd3;--color-fill-semantic-neutral-pressed:#8ca39d;--color-fill-semantic-error-selected:#e12d39;--color-fill-data-viz-default-2:#4ca2a8;--color-fill-data-viz-default-3:#af74b9;--color-fill-data-viz-default-4:#b49566;--color-fill-data-viz-default-5:#dd887c;--color-fill-data-viz-default-6:#e6b056;--color-fill-data-viz-default-7:#dd7cc2;--color-fill-data-viz-default-8:#b0cd5d;--color-fill-control-error-hover:#fdcbd3;--color-fill-common-primary:#f8faf9;--color-fill-common-secondary:#ffffff;--color-fill-common-brand:#05322b;--color-fill-common-tertiary:#ebefee;--color-fill-cta-primary-default:#147d64;--color-fill-cta-primary-hover:#0c6b58;--color-fill-cta-primary-pressed:#014d40;--color-fill-cta-primary-focused:#147d64;--color-fill-cta-secondary-default:rgba(255, 255, 255, 0);--color-fill-cta-secondary-hover:#ebefee;--color-fill-cta-secondary-pressed:#adbdb9;--color-fill-cta-secondary-focused:rgba(255, 255, 255, 0);--color-fill-cta-critical-default:#e12d39;--color-fill-cta-critical-hover:#cf2333;--color-fill-cta-critical-pressed:#c21a2c;--color-fill-control-error-supplemental:#e16e75;--color-fill-cta-critical-focused:#e12d39;--color-fill-cta-disabled:#ebefee;--color-fill-control-unselected:rgba(255, 255, 255, 0);--color-fill-control-unselected-supplemental:#a0a0a0;--color-fill-control-unselected-hover:#f3f3f3;--color-fill-control-selected:#02a783;--color-fill-control-disabled:#ebefee;--color-fill-control-disabled-supplemental:#ced7d4;--color-fill-control-error:#feeaee;--color-fill-menu-unselected:#ffffff;--color-fill-menu-highlighted:#ebefee;--color-fill-menu-selected:#c6f7e2;--color-fill-menu-selected-supplemental:#effcf6;--color-fill-form-disabled:#ebefee;--color-fill-form-error:#feeaee;--color-fill-avatar-primary:#147d64;--color-fill-avatar-secondary:#653cad;--color-fill-avatar-tertiary:#ced7d4;--color-fill-avatar-circumference:#02a783;--color-fill-common-overlay:rgba(18, 18, 18, 0.8);--color-fill-control-accent:#a0a0a0;--color-fill-control-selected-hover:#147d64;--color-fill-control-slider-disabled:#ced7d4;--color-fill-control-slider-background:#e7e7e7;--color-fill-semantic-success-default:#147d64;--color-fill-semantic-success-supplemental:#199473;--color-fill-semantic-error-supplemental:#cf2333;--color-fill-semantic-error-default:#cf2333;--color-fill-semantic-info-default:#299ba3;--color-fill-semantic-info-supplemental:#299ba3;--color-fill-semantic-info-highlight:#e1f8f9;--color-fill-semantic-warning-default:#e87516;--color-fill-semantic-warning-supplemental:#e87516;--color-fill-cta-secondary-hover-supplemental:#ced7d4;--color-fill-semantic-error-highlight:#feeaee;--color-fill-semantic-warning-hover:#fcf5c1;--color-fill-semantic-warning-highlight:#fefbe6;--color-fill-semantic-error-status-background:#feeaee;--color-fill-semantic-warning-status-background:#fefbe6;--color-fill-semantic-neutral-hover:#adbdb9;--color-fill-semantic-neutral-selected:#5c7b74;--color-fill-semantic-neutral-default:#ced7d4;--color-fill-semantic-accent-default:#5d37a7;--color-fill-semantic-accent-supplemental:#452996;--color-fill-semantic-accent-highlight:#ece7f5;--color-fill-cta-primary-hover-supplemental:#014d40;--color-fill-semantic-success-pressed:#65d6ad;--color-fill-semantic-error-pressed:#e16e75;--color-fill-semantic-success-hover:#8eedc7;--color-fill-semantic-success-highlight:#effcf6;--color-fill-semantic-success-status-background:#effcf6;--color-fill-semantic-neutral-disabled:#ebefee;--color-fill-semantic-neutral-highlight:#ebefee;--color-fill-semantic-neutral-status-background:#ebefee;--color-text-cta-primary:#ffffff;--color-text-common-primary:#121212;--kpi-sub-color:#121212;--kpi-sup-color:#121212;--color-text-common-secondary:#595959;--color-text-common-disabled:#adbdb9;--color-text-common-brand:#05322b;--color-text-common-inverse-primary:#ffffff;--color-text-common-inverse-secondary:rgba(255, 255, 255, 0.6);--color-text-link-primary-default:#02a783;--color-text-link-secondary-default:#1a2321;--color-text-link-tertiary-default:#595959;--color-text-link-hover:#147d64;--color-text-link-pressed:#014d40;--color-text-link-disabled:#d0d0d0;--color-text-link-inverse-default:#ffffff;--color-text-link-inverse-hover:#02a783;--color-text-link-inverse-disabled:#2a2a2a;--color-text-label-default:#595959;--color-text-label-placeholder:#717171;--color-text-label-disabled-default:#adbdb9;--color-text-label-disabled-highlighted:#adbdb9;--color-text-label-error:#e16e75;--color-text-label-critical:#c21a2c;--color-text-label-brand:#05322b;--color-text-label-success:#02a783;--color-text-label-warning:#e87516;--color-text-cta-disabled:#adbdb9;--color-text-cta-secondary:#121212;--font-family-headline-xlarge:"Poppins", sans-serif;--font-family-headline-large:"Poppins", sans-serif;--font-family-headline-medium:"Poppins", sans-serif;--font-family-headline-small:"Poppins", sans-serif;--font-family-title-medium:"Poppins", sans-serif;--font-family-title-small:"Poppins", sans-serif;--font-family-subtitle-large:"Poppins", sans-serif;--font-family-subtitle-medium:"Poppins", sans-serif;--font-family-subtitle-small:"Poppins", sans-serif;--font-family-body-large:"Noto Sans", sans-serif;--font-family-body-medium:"Noto Sans", sans-serif;--font-family-body-medium-semi-bold:"Noto Sans", sans-serif;--font-family-body-small:"Noto Sans", sans-serif;--font-family-body-small-semi-bold:"Noto Sans", sans-serif;--font-family-decorative-large:"Poppins", sans-serif;--font-family-decorative-medium:"Poppins", sans-serif;--font-family-decorative-small:"Poppins", sans-serif;--font-family-label-medium:"Poppins", sans-serif;--font-family-label-small:"Poppins", sans-serif;--font-family-menu-link-medium:"Poppins", sans-serif;--font-family-button-link-medium:"Poppins", sans-serif;--font-family-button-link-small:"Poppins", sans-serif;--font-family-avatar-large:"Poppins", sans-serif;--font-family-avatar-medium:"Poppins", sans-serif;--font-family-avatar-small:"Poppins", sans-serif;--font-family-icon-medium:"Material Icons Outlined";--font-family-icon-small:"Material Icons Outlined";--font-family-title-medium-mobile:"Poppins", sans-serif;--font-family-title-small-mobile:"Poppins", sans-serif;--font-weight-headline-xlarge:600;--font-weight-headline-large:600;--font-weight-headline-medium:600;--font-weight-headline-small:600;--font-weight-title-medium:600;--font-weight-title-small:600;--font-weight-subtitle-large:600;--font-weight-subtitle-medium:600;--font-weight-subtitle-small:600;--font-weight-body-large:400;--font-weight-body-medium:400;--font-weight-body-medium-semi-bold:600;--font-weight-body-small:400;--font-weight-body-small-semi-bold:600;--font-weight-decorative-large:400;--font-weight-decorative-medium:400;--font-weight-decorative-small:400;--font-weight-label-medium:500;--font-weight-label-small:500;--font-weight-menu-link-medium:500;--font-weight-button-link-medium:600;--font-weight-button-link-small:600;--font-weight-avatar-large:600;--font-weight-avatar-medium:600;--font-weight-avatar-small:600;--font-weight-title-medium-mobile:600;--font-weight-title-small-mobile:600;--font-size-headline-xlarge:56px;--font-size-headline-large:48px;--font-size-headline-medium:40px;--font-size-headline-small:32px;--font-size-title-medium:24px;--font-size-title-small:20px;--font-size-subtitle-large:18px;--font-size-subtitle-medium:16px;--font-size-subtitle-small:14px;--font-size-body-large:16px;--font-size-body-medium:14px;--font-size-body-medium-semi-bold:14px;--font-size-body-small:12px;--font-size-body-small-semi-bold:12px;--font-size-decorative-large:16px;--font-size-decorative-medium:14px;--font-size-decorative-small:12px;--font-size-label-medium:14px;--font-size-label-small:12px;--font-size-menu-link-medium:14px;--font-size-button-link-medium:14px;--font-size-button-link-small:12px;--font-size-avatar-large:20px;--font-size-avatar-medium:14px;--font-size-avatar-small:12px;--font-size-icon-medium:24px;--font-size-icon-small:18px;--font-size-title-medium-mobile:20px;--font-size-title-small-mobile:18px;--font-line-height-headline-xlarge:62px;--font-line-height-headline-large:58px;--font-line-height-headline-medium:52px;--font-line-height-headline-small:40px;--font-line-height-title-medium:28px;--font-line-height-title-small:24px;--font-line-height-subtitle-large:24px;--font-line-height-subtitle-medium:22px;--font-line-height-subtitle-small:20px;--font-line-height-body-large:22px;--font-line-height-body-medium:20px;--font-line-height-body-medium-semi-bold:20px;--font-line-height-body-small:18px;--font-line-height-body-small-semi-bold:18px;--font-line-height-decorative-large:22px;--font-line-height-decorative-medium:20px;--font-line-height-decorative-small:18px;--font-line-height-label-medium:20px;--font-line-height-label-small:18px;--font-line-height-menu-link-medium:20px;--font-line-height-button-link-medium:20px;--font-line-height-button-link-small:18px;--font-line-height-avatar-large:28px;--font-line-height-avatar-medium:20px;--font-line-height-avatar-small:18px;--kpi-sub-font-size:12px;--kpi-sup-font-size:12px;--font-line-height-title-small-mobile:24px;--font-letter-spacing-headline-xlarge:-1.5px;--font-letter-spacing-headline-large:-1px;--font-letter-spacing-headline-medium:-1px;--font-letter-spacing-headline-small:-0.5px;--font-letter-spacing-title-medium:-0.5px;--font-letter-spacing-title-small:-0.5px;--font-letter-spacing-subtitle-large:-0.25px;--font-letter-spacing-subtitle-medium:-0.25px;--font-letter-spacing-subtitle-small:-0.25px;--font-letter-spacing-body-large:0px;--font-letter-spacing-body-medium:0px;--font-letter-spacing-body-medium-semi-bold:0px;--font-letter-spacing-body-small:0px;--font-letter-spacing-body-small-semi-bold:0px;--font-letter-spacing-decorative-large:0px;--font-letter-spacing-decorative-medium:0px;--font-letter-spacing-decorative-small:0px;--font-letter-spacing-label-medium:-0.25px;--font-letter-spacing-label-small:-0.25px;--font-letter-spacing-menu-link-medium:-0.25px;--font-letter-spacing-button-link-medium:0px;--font-letter-spacing-button-link-small:0px;--font-letter-spacing-avatar-large:0px;--font-letter-spacing-avatar-medium:0px;--font-letter-spacing-avatar-small:0px;--font-letter-spacing-title-medium-mobile:-0.5px;--font-letter-spacing-title-small-mobile:-0.25px;--effect-border-radius-light:2px;--effect-border-radius-medium:4px;--effect-border-width-regular:1px;--effect-border-width-thick:2px;--effect-drop-shadow-focus-primary:0px 0px 0px 2px #8eedc7ff;--effect-drop-shadow-focus-error:0px 0px 0px 2px #fdcbd3ff;--effect-drop-shadow-elevation-low:0px 2px 6px 0px #00000014;--effect-drop-shadow-elevation-medium:0px 2px 6px 0px #0000001f;--effect-drop-shadow-elevation-high:0px 2px 8px 0px #00000029;--effect-drop-shadow-elevation-extra-high:0px 6px 16px 0px #00000033;--layout-media-query-small:0px;--layout-media-query-medium:600px;--layout-media-query-large:1024px;--layout-grid-columns-small:4;--layout-grid-columns-medium:8;--layout-grid-columns-large:12;--motion-easing-fast:cubic-bezier(0.42,0,0.58,1);--motion-easing-normal:cubic-bezier(0.42,0,0.58,1);--motion-easing-slow:cubic-bezier(0.42,0,0.58,1);--motion-duration-slow:300ms;--motion-duration-normal:200ms;--motion-duration-fast:100ms;--spacing-padding-xxsmall:4px;--spacing-padding-xsmall:8px;--spacing-padding-small:12px;--spacing-padding-medium:20px;--spacing-padding-large:30px;--spacing-padding-xlarge:52px;--spacing-padding-xxlarge:84px;--spacing-margin-large:32px;--spacing-margin-xlarge:52px;--spacing-margin-xxlarge:84px;--spacing-margin-xxsmall:4px;--spacing-margin-xsmall:8px;--spacing-margin-small:12px;--spacing-margin-medium:20px;--color-base-teal-950:#05322b;--color-base-teal-900:#014d40;--color-base-teal-800:#0c6b58;--color-base-teal-700:#147d64;--color-base-teal-600:#199473;--color-base-teal-500:#02a783;--color-base-teal-400:#3ebd93;--color-base-teal-300:#65d6ad;--color-base-teal-200:#8eedc7;--color-base-teal-100:#c6f7e2;--color-base-teal-050:#effcf6;--color-base-gray-900:#121212;--color-base-translucent-gray:rgba(18, 18, 18, 0.8);--color-base-gray-800:#2a2a2a;--color-base-gray-700:#414141;--color-base-gray-600:#595959;--color-base-gray-500:#717171;--color-base-gray-400:#888888;--color-base-gray-300:#a0a0a0;--color-base-gray-200:#b8b8b8;--color-base-gray-100:#d0d0d0;--color-base-gray-075:#e7e7e7;--color-base-gray-050:#f3f3f3;--color-base-gray-025:#f9f9f9;--color-base-rose-900:#b30920;--color-base-rose-800:#c21a2c;--color-base-rose-700:#cf2333;--color-base-rose-600:#e12d39;--color-base-rose-500:#f0373a;--color-base-rose-400:#eb4b53;--color-base-rose-300:#e16e75;--color-base-rose-200:#ec979b;--color-base-rose-100:#fdcbd3;--color-base-rose-050:#feeaee;--color-base-gold-900:#e87516;--color-base-gold-800:#ed9d22;--color-base-gold-700:#f0b529;--color-base-gold-600:#f3cc30;--color-base-gold-500:#f4dd33;--color-base-gold-400:#f6e252;--color-base-gold-300:#f8e771;--color-base-gold-200:#faee99;--color-base-gold-100:#fcf5c1;--color-base-gold-050:#fefbe6;--color-base-cyan-900:#1f6362;--color-base-cyan-800:#26868b;--color-base-cyan-700:#299ba3;--color-base-cyan-600:#2cb0bc;--color-base-cyan-500:#2fc0cf;--color-base-cyan-400:#3ecad4;--color-base-cyan-300:#5ad3db;--color-base-cyan-200:#86e1e5;--color-base-cyan-100:#b5edef;--color-base-cyan-050:#e1f8f9;--color-base-purple-900:#341e86;--color-base-purple-800:#452996;--color-base-purple-700:#512f9e;--color-base-purple-600:#5d37a7;--color-base-purple-500:#653cad;--color-base-purple-400:#7c58b9;--color-base-purple-300:#9376c6;--color-base-purple-200:#b19dd6;--color-base-purple-100:#d0c4e6;--color-base-purple-050:#ece7f5;--color-base-white-100:#ffffff;--color-base-white-060:rgba(255, 255, 255, 0.6);--color-base-data-viz-100:#666eb4;--color-base-data-viz-200:#4ca2a8;--color-base-data-viz-300:#af74b9;--color-base-data-viz-400:#b49566;--color-base-data-viz-500:#dd887c;--color-base-data-viz-600:#e6b056;--color-base-data-viz-700:#dd7cc2;--color-base-data-viz-800:#b0cd5d;--color-base-transparent:rgba(255, 255, 255, 0);--color-base-earth-950:#1a2321;--color-base-earth-900:#22302d;--color-base-earth-800:#334541;--color-base-earth-700:#415853;--color-base-earth-600:#506c65;--color-base-earth-500:#5c7b74;--color-base-earth-400:#748e88;--color-base-earth-300:#8ca39d;--color-base-earth-200:#adbdb9;--color-base-earth-100:#ced7d4;--color-base-earth-050:#ebefee;--color-base-earth-025:#f8faf9;--font-base-font-family-decorative:"Poppins", sans-serif;--font-base-font-family-body:"Noto Sans", sans-serif;--font-base-font-family-icon:"Material Icons Outlined";--font-base-font-weight-regular:400;--font-base-font-weight-medium:500;--font-base-font-weight-semibold:600;--font-base-text-transform-uppercase:uppercase;--font-base-text-transform-capitalize:capitalize;--font-base-text-transform-lowercase:lowercase;--font-base-text-decoration-line-through:line-through;--font-base-text-decoration-underline:underline;--font-base-font-size-56:56px;--font-base-font-size-48:48px;--font-base-font-size-40:40px;--font-base-font-size-32:32px;--font-base-font-size-24:24px;--font-base-font-size-20:20px;--font-base-font-size-18:18px;--font-base-font-size-16:16px;--font-base-font-size-14:14px;--font-base-font-size-12:12px;--font-base-font-size-10:10px;--font-base-line-height-16:16px;--font-base-line-height-62:62px;--font-base-line-height-58:58px;--font-base-line-height-52:52px;--font-base-line-height-40:40px;--font-base-line-height-28:28px;--font-base-line-height-24:24px;--font-base-line-height-22:22px;--font-base-line-height-20:20px;--font-base-line-height-18:18px;--font-base-letter-spacing-1-5:-1.5px;--font-base-letter-spacing-1:-1px;--font-base-letter-spacing-0-5:-0.5px;--font-base-letter-spacing-0-25:-0.25px;--font-base-letter-spacing-0:0px;--effect-base-border-radius-8:8px;--effect-base-border-radius-12:8px;--effect-base-opacity-95:0.95;--effect-base-opacity-90:0.9;--effect-base-opacity-85:0.85;--effect-base-opacity-80:0.8;--effect-base-opacity-70:0.7;--effect-base-opacity-60:0.6;--effect-base-opacity-50:0.4;--effect-base-opacity-40:0.4;--effect-base-opacity-30:0.3;--effect-base-opacity-20:0.2;--effect-base-opacity-10:0.1;--effect-base-drop-shadow-rose:0px 0px 0px 2px #fdcbd3ff;--effect-base-drop-shadow-teal:0px 0px 0px 2px #8eedc7ff;--effect-base-drop-shadow-small:0px 2px 6px 0px #00000014;--effect-base-drop-shadow-medium:0px 2px 6px 0px #0000001f;--effect-base-drop-shadow-large:0px 2px 8px 0px #00000029;--effect-base-drop-shadow-xlarge:0px 6px 16px 0px #00000033;--effect-base-border-width-1:1px;--effect-base-border-width-2:2px;--effect-base-border-radius-2:2px;--effect-base-border-radius-4:4px;--effect-base-transition-duration-100-ms:100ms;--effect-base-transition-duration-200-ms:200ms;--effect-base-transition-duration-300-ms:300ms;--effect-base-transition-timing-ease-in-ease-out:cubic-bezier(0.42,0,0.58,1);--size-base-space-0:0px;--size-base-space-4:4px;--size-base-space-8:8px;--size-base-space-12:12px;--size-base-space-20:20px;--size-base-space-32:32px;--size-base-space-52:52px;--size-base-space-84:84px;--size-base-mq-0-599:0px;--size-base-mq-600-1023:600px;--size-base-mq-1024:1024px;--size-base-columns-12:12;--size-base-columns-8:8;--size-base-columns-4:4;--badge-count-position-right:-12px;--badge-count-position-top:-12px;--tabularlist-header-cell-min-width:auto;--tabulatlist-header-cell-overflow:hidden;--tabulatlist-header-cell-textoverflow:ellipsis;--tabulatlist-header-cell-margin:0;--tabulatlist-header-cell-padding:12px;--tabularlist-default-height:491px;--position-bh-action-bar:fixed;--datepicker-input-field-height:44px;--datepicker-input-icon-position-left:12px;--datepicker-input-icon-position-top:12px;--datepicker-input-value-padding:0px 0px 0px 26px;--date-picker-text-field-width:280px}.typography--headline-xlarge{font-family:var(--font-family-headline-xlarge);font-size:var(--font-size-headline-xlarge);font-weight:var(--font-weight-headline-xlarge);line-height:var(--font-line-height-headline-xlarge);letter-spacing:var(--font-letter-spacing-headline-xlarge)}.typography--headline-large{font-family:var(--font-family-headline-large);font-size:var(--font-size-headline-large);font-weight:var(--font-weight-headline-large);line-height:var(--font-line-height-headline-large);letter-spacing:var(--font-letter-spacing-headline-large)}.typography--headline-medium{font-family:var(--font-family-headline-medium);font-size:var(--font-size-headline-medium);font-weight:var(--font-weight-headline-medium);line-height:var(--font-line-height-headline-medium);letter-spacing:var(--font-letter-spacing-headline-medium)}.typography--headline-small{font-family:var(--font-family-headline-small);font-size:var(--font-size-headline-small);font-weight:var(--font-weight-headline-small);line-height:var(--font-line-height-headline-small);letter-spacing:var(--font-letter-spacing-headline-small)}.typography--title-medium{font-family:var(--font-family-title-medium);font-size:var(--font-size-title-medium);font-weight:var(--font-weight-title-medium);line-height:var(--font-line-height-title-medium);letter-spacing:var(--font-letter-spacing-title-medium)}.typography--title-small{font-family:var(--font-family-title-small);font-size:var(--font-size-title-small);font-weight:var(--font-weight-title-small);line-height:var(--font-line-height-title-small);letter-spacing:var(--font-letter-spacing-title-small)}.typography--subtitle-large{font-family:var(--font-family-subtitle-large);font-size:var(--font-size-subtitle-large);font-weight:var(--font-weight-subtitle-large);line-height:var(--font-line-height-subtitle-large);letter-spacing:var(--font-letter-spacing-subtitle-large)}.typography--subtitle-medium{font-family:var(--font-family-subtitle-medium);font-size:var(--font-size-subtitle-medium);font-weight:var(--font-weight-subtitle-medium);line-height:var(--font-line-height-subtitle-medium);letter-spacing:var(--font-letter-spacing-subtitle-medium)}.typography--subtitle-small{font-family:var(--font-family-subtitle-small);font-size:var(--font-size-subtitle-small);font-weight:var(--font-weight-subtitle-small);line-height:var(--font-line-height-subtitle-small);letter-spacing:var(--font-letter-spacing-subtitle-small)}.typography--body-large{font-family:var(--font-family-body-large);font-size:var(--font-size-body-large);font-weight:var(--font-weight-body-large);line-height:var(--font-line-height-body-large);letter-spacing:var(--font-letter-spacing-body-large)}.typography--body-medium{font-family:var(--font-family-body-medium);font-size:var(--font-size-body-medium);font-weight:var(--font-weight-body-medium);line-height:var(--font-line-height-body-medium);letter-spacing:var(--font-letter-spacing-body-medium)}.typography--body-medium-semi-bold{font-family:var(--font-family-body-medium-semi-bold);font-size:var(--font-size-body-medium-semi-bold);font-weight:var(--font-weight-body-medium-semi-bold);line-height:var(--font-line-height-body-medium-semi-bold);letter-spacing:var(--font-letter-spacing-body-medium-semi-bold)}.typography--body-small{font-family:var(--font-family-body-small);font-size:var(--font-size-body-small);font-weight:var(--font-weight-body-small);line-height:var(--font-line-height-body-small);letter-spacing:var(--font-letter-spacing-body-small)}.typography--body-small-semi-bold{font-family:var(--font-family-body-small-semi-bold);font-size:var(--font-size-body-small-semi-bold);font-weight:var(--font-weight-body-small-semi-bold);line-height:var(--font-line-height-body-small-semi-bold);letter-spacing:var(--font-letter-spacing-body-small-semi-bold)}.typography--decorative-large{font-family:var(--font-family-decorative-large);font-size:var(--font-size-decorative-large);font-weight:var(--font-weight-decorative-large);line-height:var(--font-line-height-decorative-large);letter-spacing:var(--font-letter-spacing-decorative-large)}.typography--decorative-medium{font-family:var(--font-family-decorative-medium);font-size:var(--font-size-decorative-medium);font-weight:var(--font-weight-decorative-medium);line-height:var(--font-line-height-decorative-medium);letter-spacing:var(--font-letter-spacing-decorative-medium)}.typography--decorative-small{font-family:var(--font-family-decorative-small);font-size:var(--font-size-decorative-small);font-weight:var(--font-weight-decorative-small);line-height:var(--font-line-height-decorative-small);letter-spacing:var(--font-letter-spacing-decorative-small)}.typography--label-medium{font-family:var(--font-family-label-medium);font-size:var(--font-size-label-medium);font-weight:var(--font-weight-label-medium);line-height:var(--font-line-height-label-medium);letter-spacing:var(--font-letter-spacing-label-medium)}.typography--label-small{font-family:var(--font-family-label-small);font-size:var(--font-size-label-small);font-weight:var(--font-weight-label-small);line-height:var(--font-line-height-label-small);letter-spacing:var(--font-letter-spacing-label-small)}.typography--menu-link-medium{font-family:var(--font-family-menu-link-medium);font-size:var(--font-size-menu-link-medium);font-weight:var(--font-weight-menu-link-medium);line-height:var(--font-line-height-menu-link-medium);letter-spacing:var(--font-letter-spacing-menu-link-medium)}.typography--button-link-medium{font-family:var(--font-family-button-link-medium);font-size:var(--font-size-button-link-medium);font-weight:var(--font-weight-button-link-medium);line-height:var(--font-line-height-button-link-medium);letter-spacing:var(--font-letter-spacing-button-link-medium)}.typography--button-link-small{font-family:var(--font-family-button-link-small);font-size:var(--font-size-button-link-small);font-weight:var(--font-weight-button-link-small);line-height:var(--font-line-height-button-link-small);letter-spacing:var(--font-letter-spacing-button-link-small)}.typography--avatar-xsmall{font-family:var(--font-family-avatar-xsmall);font-size:var(--font-size-avatar-xsmall);font-weight:var(--font-weight-avatar-xsmall);line-height:var(--font-line-height-avatar-xsmall);letter-spacing:var(--font-letter-spacing-avatar-xsmall)}.typography--avatar-small{font-family:var(--font-family-avatar-small);font-size:var(--font-size-avatar-small);font-weight:var(--font-weight-avatar-small);line-height:var(--font-line-height-avatar-small);letter-spacing:var(--font-letter-spacing-avatar-small)}.typography--avatar-medium{font-family:var(--font-family-avatar-medium);font-size:var(--font-size-avatar-medium);font-weight:var(--font-weight-avatar-medium);line-height:var(--font-line-height-avatar-medium);letter-spacing:var(--font-letter-spacing-avatar-medium)}.typography--avatar-large{font-family:var(--font-family-avatar-large);font-size:var(--font-size-avatar-large);font-weight:var(--font-weight-avatar-large);line-height:var(--font-line-height-avatar-large);letter-spacing:var(--font-letter-spacing-avatar-large)}.typography--icon-xsmall,.typography--icon-small,.typography--icon-medium{font-weight:normal;font-style:normal;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-moz-font-feature-settings:"liga";font-feature-settings:"liga";-webkit-font-smoothing:antialiased;font-display:block}.typography--icon-xsmall{font-family:var(--font-family-icon-xsmall);font-size:var(--font-size-icon-xsmall)}.typography--icon-small{font-family:var(--font-family-icon-small) !important;font-size:var(--font-size-icon-small) !important}.typography--icon-medium{font-family:var(--font-family-icon-medium);font-size:var(--font-size-icon-medium)}.bh-icon-size--medium{width:var(--font-size-icon-medium);height:var(--font-size-icon-medium)}.bh-icon-size--small{width:var(--font-size-icon-small);height:var(--font-size-icon-small)}@media only screen and (max-width: 600px){.typography--title-medium{font-family:var(--font-family-title-medium-mobile);font-size:var(--font-size-title-medium-mobile);font-weight:var(--font-weight-title-medium-mobile);line-height:var(--font-line-height-title-medium-mobile);letter-spacing:var(--font-letter-spacing-title-medium-mobile)}.typography--title-small{font-family:var(--font-family-title-small-mobile);font-size:var(--font-size-title-small-mobile);font-weight:var(--font-weight-title-small-mobile);line-height:var(--font-line-height-title-small-mobile);letter-spacing:var(--font-letter-spacing-title-small-mobile)}}.typography--color-primary{color:var(--color-text-common-primary)}.typography--color-inverse-primary{color:var(--color-text-common-inverse-primary)}.typography--color-secondary{color:var(--color-text-common-secondary)}.typography--color-tertiary{color:var(--color-text-common-tertiary)}.typography--line-through{text-decoration:line-through}.motion--slow{transition:all;transition-timing-function:var(--motion-easing-slow);transition-duration:var(--motion-duration-slow)}.motion--normal{transition:all;transition-timing-function:var(--motion-easing-normal);transition-duration:var(--motion-duration-normal)}.motion--fast{transition:all;transition-timing-function:var(--motion-easing-fast);transition-duration:var(--motion-duration-fast)}:host{display:block;overflow:hidden}.bh-app-shell{position:fixed;top:0;bottom:0;left:0;right:0;overflow:hidden}.bh-app-shell--wrapper{height:calc(100vh - 72px);margin-top:72px;position:relative;overflow-y:auto;}.bh-app-shell--hidden{display:none}.bh-app-shell__side-menu{position:fixed;left:0px;padding-top:104px;top:0px;bottom:0px;width:58px;background-color:var(--color-fill-common-secondary);transition:top none;z-index:600;border-right:1px solid var(--color-border-common-primary);transition:width;transition-timing-function:var(--motion-easing-normal);transition-duration:var(--motion-duration-normal);transition-delay:var(--motion-duration-normal)}.bh-app-shell__side-menu:hover,.bh-app-shell__side-menu--open{width:var(--side-menu-open-desktop-width);visibility:visible;transition-delay:0s}.bh-app-shell__side-menu:hover .bh-app-shell__side-menu{width:var(--side-menu-open-desktop-width)}.bh-app-shell__spacing--breadcrumbs{margin-top:45px}.bh-app-shell__bh-breadcrumbs{--side-menu-open-desktop-width:250px;--side-menu-closed-desktop-width:58px;transition:width left;transition-timing-function:var(--motion-easing-normal);transition-duration:var(--motion-duration-normal);position:fixed;z-index:400;left:var(--side-menu-closed-desktop-width);width:calc(100% - var(--side-menu-closed-desktop-width))}.bh-app-shell__bh-progress-bar{--side-menu-open-desktop-width:250px;--side-menu-closed-desktop-width:58px;transition:left;transition-timing-function:var(--motion-easing-normal);transition-duration:var(--motion-duration-normal);position:fixed;z-index:400;left:var(--side-menu-closed-desktop-width);width:calc(100% - var(--side-menu-closed-desktop-width))}.bh-app-shell__bh-breadcrumbs.secondary,.bh-app-shell__bh-progress-bar.secondary{left:0;width:100%}.bh-app-shell__bh-breadcrumbs.open,.bh-app-shell__bh-progress-bar.open{width:100%}.bh-app-shell__side-menu--open{overflow-y:auto;overflow-x:hidden}@media only screen and (max-width: 1023px){.bh-app-shell__side-menu{width:0px;opacity:0;pointer-events:none;transition:width, opacity;transition-timing-function:var(--motion-easing-normal);transition-duration:var(--motion-duration-normal);transition-delay:var(--motion-duration-normal)}.bh-app-shell__side-menu--open{width:var(--side-menu-open-desktop-width);opacity:1;pointer-events:initial;transition:width, opacity;transition-timing-function:var(--motion-easing-normal);transition-duration:var(--motion-duration-normal);transition-delay:0s}.bh-app-shell__side-menu:hover{width:0px}.bh-app-shell__side-menu--open,.bh-app-shell__side-menu--open:hover{width:var(--side-menu-open-desktop-width)}.bh-app-shell__bh-breadcrumbs,.bh-app-shell__bh-progress-bar,.bh-app-shell__bh-breadcrumbs.open,.bh-app-shell__bh-progress-bar.open{left:0;width:100%}}@media only screen and (max-width: 599px){.bh-app-shell--wrapper{height:calc(100vh - 60px);margin-top:60px}@supports (-webkit-touch-callout: none){.bh-app-shell--wrapper{height:calc(calc(var(--vh, 1vh) * 100) - 60px);overflow-y:visible;overflow-x:hidden}}}.bh-app-shell__side-menu{position:fixed;left:0px;padding-top:104px;top:0px;bottom:0px;width:58px;background-color:var(--color-fill-common-secondary);transition:top none;z-index:600;border-right:1px solid var(--color-border-common-primary);transition:width;transition-timing-function:var(--motion-easing-normal);transition-duration:var(--motion-duration-normal);transition-delay:var(--motion-duration-normal)}.bh-app-shell__side-menu:hover,.bh-app-shell__side-menu--open{width:var(--side-menu-open-desktop-width);visibility:visible;transition-delay:0s}.bh-app-shell__side-menu-item{position:relative}.bh-app-shell__side-menu-item__sub-menu{position:absolute;left:58px;top:0;padding-left:8px;transition:opacity var(--motion-duration-fast) var(--motion-easing-fast)}.bh-app-shell__side-menu-item__sub-menu.shown{visibility:visible;opacity:1}.bh-app-shell__side-menu-item__sub-menu.hidden{visibility:hidden;opacity:0}.bh-app-shell__settings-menu{position:fixed;right:36px;top:62px;z-index:3000;visibility:hidden;opacity:0}.bh-app-shell__settings-menu--open{visibility:visible;opacity:1}.bh-app-shell__avatar{outline:none}.bh-app-shell__avatar:focus{box-shadow:var(--effect-drop-shadow-focus-primary)}.bh-app-shell__avatar:focus:not(:focus-visible){box-shadow:none}';
var BhAppShellStyle0 = bhAppShellCss;
var BhAppShell = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isSettingsMenuOpenUpdate = createEvent(this, "isSettingsMenuOpenUpdate", 7);
    this.bhEventSelected = createEvent(this, "bhEventSelected", 7);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this.bhEventScroll = createEvent(this, "bhEventScroll", 7);
    this.navMenuStaggerAnimation = false;
    this.viewport = void 0;
    this.isMobileMenuOpen = false;
    this.isSettingsMenuOpen = false;
    this.isMenuOpen = void 0;
    this.isSideMenuOpen = false;
    this.sideMenuHovered = false;
    this.renderMobile = window.innerWidth < 600;
    this.type = "primary";
    this.applogo = void 0;
    this.appname = void 0;
    this.headerLimit = 30;
    this.userfirstname = void 0;
    this.userlastname = void 0;
    this.userimage = void 0;
    this.useremail = void 0;
    this.mobileViewLabel = true;
    this.iconLinks = void 0;
    this.navigation = void 0;
    this.navigationSelected = void 0;
    this.settings = void 0;
    this.settingsSelected = void 0;
    this._navigation = void 0;
    this._navigationSelected = void 0;
    this._settings = void 0;
    this._settingsSelected = void 0;
    this._iconLinks = void 0;
    this.progressBarSize = void 0;
    this.enableAppShellMenuMicroInteraction = true;
  }
  handleResize() {
    if (window.innerWidth < 600) {
      this.renderMobile = true;
    } else {
      this.renderMobile = false;
    }
    const bp = getBreakpoint();
    if (bp !== this.viewport) this.viewport = bp;
  }
  watchIsSettingsMenuOpen() {
    this.isSettingsMenuOpenUpdate.emit(this.isSettingsMenuOpen);
  }
  watchIsMenuOpen() {
    if (this.renderMobile) {
      if (this.isMenuOpen) {
        this.isMobileMenuOpen = true;
        this.isSideMenuOpen = true;
      } else {
        this.isMobileMenuOpen = false;
        this.isSideMenuOpen = false;
      }
      this.bhEventChange.emit({
        type: "isMenuOpen",
        payload: this.isMenuOpen
      });
    }
  }
  watchIconLinks() {
    this._iconLinks = typeof this.iconLinks === "string" ? JSON.parse(this.iconLinks) : this.iconLinks;
  }
  watchNavigation() {
    if (typeof this.navigation === "string") {
      try {
        this._navigation = JSON.parse(this.navigation);
      } catch (_a) {
      }
    } else {
      this._navigation = this.navigation;
    }
  }
  watchNavigationSelected() {
    this._navigationSelected = typeof this.navigationSelected === "string" ? JSON.parse(this.navigationSelected) : this.navigationSelected;
  }
  watchSettings() {
    if (typeof this.settings === "string") {
      try {
        this._settings = JSON.parse(this.settings);
      } catch (_a) {
        console.log(JSON.parse(this.settings), "JSON.parse(this.settings)");
      }
    } else {
      this._settings = this.settings;
    }
  }
  watchSettingsSelected() {
    if (typeof this.settingsSelected === "string") {
      try {
        this._settingsSelected = JSON.parse(this.settingsSelected);
      } catch (_a) {
      }
    } else {
      this._settingsSelected = this.settingsSelected;
    }
  }
  navSubMenuOpenedHandler() {
    console.log("Nav Menu Opened");
    this.navMenuStaggerAnimation = true;
  }
  navSubMenuClosedHandler() {
    console.log("Nav Menu Closed");
    this.navMenuStaggerAnimation = false;
  }
  onAppShellWrapperScroll(e) {
    this.bhEventScroll.emit({
      type: "scroll",
      payload: e
    });
  }
  handleNavigationItemUpdate(navigationSelected) {
    this._navigationSelected = {
      item: navigationSelected.item,
      submenuItem: navigationSelected.submenuItem || ""
    };
    this.bhEventSelected.emit({
      type: "navigation",
      keys: this._navigationSelected
    });
  }
  handleSettingsItemUpdate(settingsSelected) {
    if (settingsSelected.submenuItem) {
      this._settingsSelected = [...this._settingsSelected.filter((setting) => {
        return setting.item !== settingsSelected.item;
      }), {
        item: settingsSelected.item,
        submenuItem: settingsSelected.submenuItem || ""
      }];
    } else {
      this.isSettingsMenuOpen = false;
    }
    this.bhEventSelected.emit({
      type: "settings",
      keys: {
        selected: this._settingsSelected,
        clicked: settingsSelected
      }
    });
  }
  handleClickMenuToggle() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.isSideMenuOpen = !this.isSideMenuOpen;
    this.bhEventChange.emit({
      type: "isMenuOpen",
      payload: this.isMobileMenuOpen || this.isSideMenuOpen
    });
  }
  componentWillLoad() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    this._iconLinks = typeof this.iconLinks === "string" ? JSON.parse(this.iconLinks) : this.iconLinks;
    this.viewport = getBreakpoint();
    this._navigationSelected = typeof this.navigationSelected === "string" ? JSON.parse(this.navigationSelected) : this.navigationSelected;
    if (typeof this.settingsSelected === "string") {
      try {
        this._settingsSelected = JSON.parse(this.settingsSelected);
      } catch (_a) {
      }
    } else {
      this._settingsSelected = this.settingsSelected;
    }
    if (typeof this.navigation === "string") {
      try {
        this._navigation = JSON.parse(this.navigation);
      } catch (_b) {
      }
    } else {
      this._navigation = this.navigation;
    }
    if (typeof this.settings === "string") {
      try {
        this._settings = JSON.parse(this.settings);
      } catch (_c) {
      }
    } else {
      this._settings = this.settings;
    }
  }
  render() {
    const prefix = this.host.tagName.toLowerCase().replace(components.appShell.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix);
    let withBreadcrumbs = false;
    if (this.renderMobile) {
      if ((this.isSideMenuOpen || this.isMobileMenuOpen) && !this.isMenuOpen) this.isMenuOpen = true;
      if (!(this.isSideMenuOpen || this.isMobileMenuOpen) && this.isMenuOpen) this.isMenuOpen = false;
    }
    Array.from(this.host.children).map((child) => {
      if (child.nodeName === Components.settingsMenu.toUpperCase()) {
        child.setAttribute("userfirstname", this.userfirstname);
        child.setAttribute("userlastname", this.userlastname);
        child.setAttribute("userimage", this.userimage);
        child.setAttribute("useremail", this.useremail);
        this.renderMobile ? child.setAttribute("mobile", "") : child.removeAttribute("mobile");
        this.isSettingsMenuOpen ? child.setAttribute("open", "") : child.removeAttribute("open");
      }
      if (child.nodeName === Components.navMenu.toUpperCase()) {
        if (this.renderMobile) {
          child.setAttribute("type", "mobile");
        } else if (this.type === "secondary") {
          child.setAttribute("type", "header");
        } else if (this.type === "primary" && (this.isSideMenuOpen || this.sideMenuHovered)) {
          child.setAttribute("type", "side-nav-open");
        } else {
          child.setAttribute("type", "side-nav");
        }
      }
      if (child.nodeName === Components.content.toUpperCase()) {
        this.isSideMenuOpen || this.sideMenuHovered ? child.setAttribute("sideMenuOpen", "") : child.removeAttribute("sideMenuOpen");
      }
      if (child.nodeName === Components.appShellMenu.toUpperCase()) ;
      if (child.nodeName === Components.breadcrumbs.toUpperCase()) {
        withBreadcrumbs = true;
      }
      if (child.nodeName === Components.progressBar.toUpperCase()) {
        this.progressBarSize = child.getAttribute("size") || "medium";
      }
    });
    const shellClasses = ["bh-app-shell"];
    shellClasses.push(`bh-app-shell--${this.type}`);
    const hamburgerClasses = ["bh-header__hamburger motion--fast"];
    if (this.isSideMenuOpen || this.isMobileMenuOpen) hamburgerClasses.push("bh-header__hamburger--open");
    return h(Host, {
      key: "010f678d2ab243f7f2b35d01201f990d2dd6e5c8",
      class: shellClasses.join(" ")
    }, h("div", {
      key: "bb2d471729fffa5ab741c8a675e0ea19a1cb03a7",
      class: "bh-app-shell--wrapper",
      onScroll: (event) => {
        this.onAppShellWrapperScroll(event);
      }
    }, h(Components.header, {
      key: "43f34ec2b4ce76c3883572c901d745366335b9c9",
      type: this.type,
      appname: this.appname,
      headerLimit: this.headerLimit,
      logo: this.applogo,
      closeSettingsMenu: () => {
        this.isSettingsMenuOpen = false;
      },
      iconLinks: this._iconLinks,
      onBhEventCtaClick: (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.bhEventSelected.emit(event.detail);
      }
    }, h("div", {
      key: "db38b22ae843c57d97fe7263c53e896acda45555",
      slot: "bh-header__menu-toggle",
      class: hamburgerClasses.join(" "),
      tabIndex: 0,
      onClick: () => {
        this.handleClickMenuToggle();
      },
      onKeyDown: (event) => {
        if (event.code === "Enter") this.handleClickMenuToggle();
      }
    }, h("span", {
      key: "04b0120e1cfa00d84044488c5e5179073c31ec28",
      class: "bh-header__hamburger-icon motion--fast"
    })), h("div", {
      key: "40b9a91f4f7bb1163ee937db4c072459c70a48b8",
      slot: "bh-header__spacer",
      class: "bh-header__spacer"
    }, h("slot", {
      key: "3e495ea7d586904bfd845ffdccd03b2e79d13868",
      name: "bh-header__spacer"
    })), !(this.navigation && this.settings) && !this.renderMobile && this.type === "secondary" && h("div", {
      slot: "bh-header__nav-menu"
    }, h("slot", {
      name: "bh-nav-menu"
    })), this.navigation && this.settings && this.type === "secondary" && this.viewport !== "small" && h(Components.navMenu, {
      type: "header",
      slot: "bh-header__nav-menu"
    }, this._navigation.map((item) => {
      return h(Components.menuItem, {
        type: "header",
        label: item.label,
        icon: item.icon,
        isSelected: item.key === this._navigationSelected.item,
        onClick: () => {
          this.handleNavigationItemUpdate({
            item: item.key,
            submenuItem: ""
          });
        },
        onKeyDown: (event) => {
          if (event.code === "Enter") {
            this.handleNavigationItemUpdate({
              item: item.key,
              submenuItem: ""
            });
          }
        }
      });
    })), h(Components.avatar, {
      key: "489bed4d802682d5076e9e698a795ef102f9b2c4",
      class: "bh-app-shell__avatar",
      firstname: this.userfirstname,
      lastname: this.userlastname,
      image: this.userimage,
      size: "medium",
      isRing: true,
      isActive: this.isSettingsMenuOpen,
      slot: "bh-header__avatar",
      onClick: () => {
        this.isSettingsMenuOpen = !this.isSettingsMenuOpen;
      },
      tabIndex: 0,
      onKeyDown: (event) => {
        if (event.code === "Enter") this.isSettingsMenuOpen = !this.isSettingsMenuOpen;
      }
    })), (this.navigation || this.settings) && h(Components.appShellMenu, {
      type: this.type,
      "enable-micro-interaction": this.enableAppShellMenuMicroInteraction,
      mobileViewLabel: this.mobileViewLabel,
      navigation: this._navigation,
      settings: this._settings,
      navigationSelected: this._navigationSelected,
      isSideMenuOpen: this.isSideMenuOpen,
      isSettingsMenuOpen: this.isSettingsMenuOpen,
      isMobileMenuOpen: this.isMobileMenuOpen,
      userInfo: {
        firstname: this.userfirstname,
        lastname: this.userlastname,
        image: this.userimage,
        email: this.useremail
      },
      settingsSelected: this._settingsSelected,
      onBhEventSelected: (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.isSideMenuOpen = false;
        const keys = event.detail.keys;
        const type = event.detail.type;
        if (!keys || !type) return;
        switch (type) {
          case "navigation":
            this.handleNavigationItemUpdate(keys);
            break;
          case "settings":
            this.handleSettingsItemUpdate(keys);
            break;
        }
      }
    }), h("div", {
      key: "bf66259d4e8c00c6de646f30a88f0f43e4e5ca8d",
      class: `bh-app-shell__bh-breadcrumbs ${this.isSideMenuOpen ? "open" : ""} ${this.type}`
    }, h("slot", {
      key: "31d333cd63b7e3291ef18aed1d24d098d137c401",
      name: "bh-breadcrumbs"
    })), withBreadcrumbs && h("div", {
      class: "bh-app-shell__spacing--breadcrumbs"
    }), h("div", {
      key: "e5c368f0b0a664492bf6a95ab5893c8da09046fd",
      class: `bh-app-shell__bh-panel ${this.isSideMenuOpen ? "open" : ""} ${this.type}`
    }, h("slot", {
      key: "b03208a4510f19a98206b45e08b71d2afe383717",
      name: "bh-panel"
    })), h("div", {
      key: "94ebff95beb44ff2b9c7693f0d3d2dac9838167d",
      class: `bh-app-shell__bh-progress-bar ${this.isSideMenuOpen ? "open" : ""} ${this.type}`
    }, h("slot", {
      key: "91dd231c0690bea6932830b87781131749818638",
      name: "bh-progress-bar"
    })), h("div", {
      key: "77ce605303d61caffad7eca323d2b30947869b1a",
      class: `bh-app-shell__bh-content-container ${withBreadcrumbs ? "with-breadcrumbs" : ""}`,
      onClick: () => {
        this.isSettingsMenuOpen = false;
      }
    }, h("slot", {
      key: "e80547adcfdf9e4b69f141fa976a7b2214796ddb",
      name: "bh-content"
    }))));
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "isSettingsMenuOpen": ["watchIsSettingsMenuOpen"],
      "isMenuOpen": ["watchIsMenuOpen"],
      "iconLinks": ["watchIconLinks"],
      "navigation": ["watchNavigation"],
      "navigationSelected": ["watchNavigationSelected"],
      "settings": ["watchSettings"],
      "settingsSelected": ["watchSettingsSelected"]
    };
  }
};
BhAppShell.style = BhAppShellStyle0;
var bhBreadcrumbsCss = ".bh-breadcrumbs--container{background-color:var(--color-fill-common-secondary);height:44px;display:flex;align-items:center;padding:0 var(--spacing-padding-large);position:relative;-moz-tap-highlight-color:transparent;-webkit-tap-highlight-color:transparent}.bh-breadcrumbs--container.border{border-bottom:1px solid var(--color-border-common-primary)}.bh-breadcrumbs--label-block{display:flex;align-items:center;position:relative}.bh-breadcrumbs--truncation-wrapper{display:flex}.bh-breadcrumbs--truncation-wrapper.hidden{visibility:hidden}.bh-breadcrumbs--trucation-icon{color:var(--color-text-common-secondary);cursor:pointer}.bh-breadcrumbs--trucation-icon:hover,.bh-breadcrumbs--trucation-icon:active{color:var(--color-text-common-primary)}.bh-breadcrumbs--label-block.truncated{position:fixed;opacity:0;visibility:hidden;pointer-events:none}.bh-breadcrumbs--label{color:var(--color-text-common-secondary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;max-width:220px;white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis}.bh-breadcrumbs--label:hover,.bh-breadcrumbs--label:active{color:var(--color-text-common-primary);text-decoration:underline}.bh-breadcrumbs--label.noUnderline:hover,.bh-breadcrumbs--label.noUnderline:active{text-decoration:none}.bh-breadcrumbs--label.selected{color:var(--color-text-common-primary)}.bh-breadcrumbs--label.disabled{pointer-events:none;color:var(--color-text-label-disabled-default)}.bh-breadcrumbs--icon{color:var(--color-text-common-secondary);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.bh-breadcrumbs--icon:hover,.bh-breadcrumbs--icon:active{color:var(--color-text-common-primary)}.bh-breadcrumbs--chevron-down{cursor:pointer;padding-left:var(--spacing-padding-xxsmall)}.bh-breadcrumbs--menu-container{position:absolute;top:26px;z-index:100}.bh-breadcrumbs--menu-container.flipped{right:0}.bh-breadcrumbs--slash{width:24px;height:24px;position:relative;margin:0 var(--spacing-margin-xsmall)}.bh-breadcrumbs--slash::before{display:block;content:' ';width:1px;height:16px;background-color:var(--color-text-common-secondary);position:relative;top:4px;left:12px;transform:rotate(15deg)}@media (max-width: 1023px){.bh-breadcrumbs--container{padding:0 var(--spacing-padding-medium)}}@media (max-width: 599px){.bh-breadcrumbs--container{padding:0 var(--spacing-padding-small)}.bh-breadcrumbs--label{max-width:120px}}.bh-tabular-list__tooltip{position:absolute;left:50px;top:0;background-color:var(--color-text-common-primary);color:var(--color-fill-common-secondary);display:table;padding:var(--spacing-padding-xsmall) var(--spacing-padding-small);border-radius:var(--effect-border-radius-medium);pointer-events:none;opacity:0;transition:opacity var(--motion-duration-fast) var(--motion-easing-fast)}.bh-breadcrumbs--menu-container.hidden{display:none}.bh-tabular-list__tooltip.shown{opacity:1}.bh-tabular-list__tooltip__ghost-element{visibility:hidden;pointer-events:none;display:table;padding:0 var(--spacing-padding-small);height:0;position:absolute;max-width:300px}.icon_label{display:flex;flex-direction:row;padding-top:7px}";
var BhBreadcrumbsStyle0 = bhBreadcrumbsCss;
var BhBreadcrumbs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.opened = createEvent(this, "opened", 7);
    this.itemSelectedUpdate = createEvent(this, "itemSelectedUpdate", 7);
    this.bhEventOpen = createEvent(this, "bhEventOpen", 7);
    this.bhEventClose = createEvent(this, "bhEventClose", 7);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this.bhEventSelected = createEvent(this, "bhEventSelected", 7);
    this._items = void 0;
    this.inlineStyle = {};
    this.isInlineStyleSet = void 0;
    this._searchable = false;
    this.inlineUuid = void 0;
    this.items = void 0;
    this.isBorder = true;
    this.inlineAnchorId = "";
    this.isInline = false;
    this.menuWidth = "medium";
    this.selectedItem = void 0;
    this.isOptionMenuOpen = false;
    this.isOptionMenuHorizontallyFlipped = false;
    this.isTruncationMenuOpen = false;
    this.viewport = void 0;
    this.truncateIndex = -1;
  }
  watchItems() {
    this.bhEventChange.emit(this._items);
  }
  changeItems() {
    if (typeof this.items === "string") {
      try {
        this._items = JSON.parse(this.items);
      } catch (_a) {
      }
    } else {
      this._items = this.items;
    }
    this.handleTruncation();
  }
  watchIsTruncationMenuOpen() {
    if (this.isTruncationMenuOpen) {
      this.bhEventOpen.emit();
    } else {
      this.bhEventClose.emit();
    }
    this.handleInlineProperty();
  }
  watchIsOptionMenuOpen() {
    if (this.isOptionMenuOpen) {
      this.bhEventOpen.emit();
    } else {
      this.bhEventClose.emit();
    }
    this.handleInlineProperty();
  }
  handleResize() {
    this.handleTruncation();
    this.setOptionMenuPosition();
    this.viewport = getBreakpoint();
    if (this.inlineAnchorId || this.isInline) this.styleMenu();
  }
  addItem(event) {
    if (event.detail && event.detail.label && event.detail.key) this._items = [...this._items, event.detail];
    this._searchable = event.detail.searchable;
  }
  handleItemSelection(item, index) {
    var _a;
    this.selectedItem = item.key;
    if (index < this._items.length - 1) {
      this.items = this._items.slice(0, index + 1);
      this.itemSelectedUpdate.emit({
        item,
        type: "item"
      });
      this.bhEventSelected.emit({
        item,
        type: "item"
      });
    } else if (index === this._items.length - 1 && ((_a = this._items[index].options) === null || _a === void 0 ? void 0 : _a.length) > 0) {
      this.isOptionMenuOpen = !this.isOptionMenuOpen;
    }
  }
  handleInlineProperty() {
    if (this.inlineAnchorId || this.isInline) {
      this.opened.emit({
        isOpen: this.isOptionMenuOpen,
        inlineAnchorId: this.inlineAnchorId
      });
      if (this.isOptionMenuOpen) {
        setTimeout(() => {
          this.styleMenu();
        }, 50);
        this.disableScroll();
      } else {
        this.enableScroll();
        this.isInlineStyleSet = false;
        document.body.removeChild(document.getElementById(`bh-breadcrumbs--menu-container__${this.inlineUuid}`));
      }
    }
  }
  styleMenu() {
    var _a, _b;
    try {
      if (!this.inlineAnchorId && !this.isInline) return;
      const tar = this.inlineAnchorId ? document.body.querySelector(`[inline-anchor-id="${this.inlineAnchorId}"]`) : this.element__menu__option;
      this.inlineStyle = {
        position: "fixed",
        left: `${(_a = tar === null || tar === void 0 ? void 0 : tar.getBoundingClientRect()) === null || _a === void 0 ? void 0 : _a.left}px`,
        top: `${(_b = tar === null || tar === void 0 ? void 0 : tar.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.top}px`
      };
      this.isInlineStyleSet = true;
      if (this.element__menu__option) {
        this.element__menu__option.id = `bh-breadcrumbs--menu-container__${this.inlineUuid}`;
        document.body.appendChild(this.element__menu__option);
      }
    } catch (e) {
      console.log(e);
    }
  }
  // call this to Disable
  disableScroll() {
    window.addEventListener("DOMMouseScroll", this.preventDefault, false);
    window.addEventListener(this.wheelEvent, this.preventDefault, this.wheelOpt);
    window.addEventListener("touchmove", this.preventDefault, this.wheelOpt);
  }
  // call this to Enable
  enableScroll() {
    window.removeEventListener("DOMMouseScroll", this.preventDefault, false);
    window.removeEventListener(this.wheelEvent, this.preventDefault, this.wheelOpt);
    window.removeEventListener("touchmove", this.preventDefault, this.wheelOpt);
  }
  preventDefault(event) {
    event.preventDefault();
  }
  setOptionMenuPosition() {
    var _a, _b, _c, _d;
    this.isOptionMenuHorizontallyFlipped = ((_b = (_a = this.element__label) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()[0]) === null || _b === void 0 ? void 0 : _b.left) + ((_d = (_c = this.element__menu__option) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect()[0]) === null || _d === void 0 ? void 0 : _d.width) > window.innerWidth - 32;
  }
  handleOptionSelection(event) {
    var _a, _b, _c, _d;
    if (event.detail && ((_a = event.detail) === null || _a === void 0 ? void 0 : _a.label) && ((_b = event.detail) === null || _b === void 0 ? void 0 : _b.value)) {
      this._items[this._items.length - 1] = Object.assign(Object.assign({}, this._items[this._items.length - 1]), {
        label: (_c = event.detail) === null || _c === void 0 ? void 0 : _c.label,
        key: (_d = event.detail) === null || _d === void 0 ? void 0 : _d.value
      });
    }
    this.itemSelectedUpdate.emit({
      item: this._items[this._items.length - 1],
      type: "option"
    });
    this.bhEventSelected.emit({
      item: this._items[this._items.length - 1],
      type: "option"
    });
    this.isOptionMenuOpen = false;
  }
  handleTruncation() {
    var _a, _b, _c;
    const items = (_a = this.element__container) === null || _a === void 0 ? void 0 : _a.querySelectorAll(".bh-breadcrumbs--label-block");
    const padding = this.element__container ? parseInt(window.getComputedStyle(this.element__container, null).getPropertyValue("padding-right").replace("px", "")) + 12 : 32;
    const firstItemWidth = this.truncateIndex > -1 ? 64 : 24;
    if (items && Array.from(items).slice(1).reduce((acc, item) => {
      return acc + item.clientWidth;
    }, firstItemWidth) > this.element__container.clientWidth - ((_b = items[0]) === null || _b === void 0 ? void 0 : _b.clientWidth) + padding * 2) {
      let i = items.length - 1;
      while (i > 0) {
        if (items && Array.from(items).slice(i, items.length).reduce((acc, item) => {
          return acc + item.clientWidth;
        }, 0) > this.element__container.clientWidth - (((_c = items[0]) === null || _c === void 0 ? void 0 : _c.clientWidth) + padding * 2)) {
          break;
        } else {
          i--;
        }
      }
      if (i === 1 && items && Array.from(items).slice(1).reduce((acc, item) => {
        return acc + item.clientWidth;
      }, 24) <= this.element__container.clientWidth - padding * 2) {
        this.truncateIndex = -1;
      } else {
        this.truncateIndex = i;
      }
    } else {
      if (items && Array.from(items).slice(1).reduce((acc, item) => {
        return acc + item.clientWidth;
      }, 24) > this.element__container.clientWidth - padding * 2) {
        this.truncateIndex = 1;
      } else {
        this.truncateIndex = -1;
      }
    }
  }
  handleTruncationSelection(event) {
    var _a;
    if (event.detail && ((_a = event.detail) === null || _a === void 0 ? void 0 : _a.value)) {
      const index = this._items.findIndex((item) => item.key === event.detail.value);
      this.handleItemSelection(this._items[index], index);
      this.handleTruncation();
    }
    this.isTruncationMenuOpen = false;
  }
  breadcrumbsGlobalClickEvent(event) {
    var _a, _b, _c, _d;
    if (!((_a = this.element__label) === null || _a === void 0 ? void 0 : _a.contains(event.target)) && !((_b = this.element__menu__option) === null || _b === void 0 ? void 0 : _b.contains(event.target))) this.isOptionMenuOpen = false;
    if (!((_c = this.element__truncation) === null || _c === void 0 ? void 0 : _c.contains(event.target)) && !((_d = this.element__menu__truncation) === null || _d === void 0 ? void 0 : _d.contains(event.target))) this.isTruncationMenuOpen = false;
  }
  componentWillLoad() {
    if (typeof this.items === "string") {
      try {
        this._items = JSON.parse(this.items);
      } catch (_a) {
      }
    } else {
      this._items = this.items;
    }
    this.viewport = getBreakpoint();
    if (this.inlineAnchorId || this.isInline) {
      this.inlineUuid = v4();
    }
  }
  componentDidLoad() {
    window.addEventListener("click", (event) => this.breadcrumbsGlobalClickEvent(event));
    this.handleTruncation();
  }
  componentDidUpdate() {
    this.handleTruncation();
    this.setOptionMenuPosition();
  }
  disconnectedCallback() {
    window.removeEventListener("click", (event) => this.breadcrumbsGlobalClickEvent(event));
  }
  mouseOverEvent(event) {
    try {
      const root = event.target;
      const innerContent = root.innerHTML;
      this.el__tooltipGhostElement.innerHTML = null;
      this.el__tooltipGhostElement.innerHTML = innerContent;
      if (this.el__tooltipGhostElement.clientWidth + 1 > root.clientWidth && root.clientWidth > 219) {
        this.el__tooltip.classList.add("shown");
        this.el__tooltipMessage.innerHTML = innerContent;
        const eventTargetRect = event.target.getClientRects()[0];
        if (this.el__tooltipGhostElement.clientWidth > document.body.clientWidth - eventTargetRect.left) {
          this.el__tooltip.style.left = "-" + (this.el__tooltipGhostElement.getClientRects()[0].left - eventTargetRect.left + (this.el__tooltipGhostElement.clientWidth + eventTargetRect.left - document.body.clientWidth)) + "px";
          this.el__tooltip.style.top = `${eventTargetRect.top > 200 ? "-" + 2 * eventTargetRect.height : eventTargetRect.height + 8}px`;
        } else {
          this.el__tooltip.style.left = "-" + (this.el__tooltipGhostElement.getClientRects()[0].left - eventTargetRect.left) + "px";
          this.el__tooltip.style.top = `${eventTargetRect.top > 200 ? "-" + 2 * eventTargetRect.height : eventTargetRect.height + 8}px`;
        }
      }
    } catch (err) {
      console.warn("ERROR_MESSAGE");
    }
  }
  mouseLeaveEvent() {
    try {
      this.el__tooltipGhostElement.innerHTML = null;
      this.el__tooltipMessage.innerHTML = null;
      this.el__tooltip.classList.remove("shown");
    } catch (err) {
      console.warn("ERROR_MESSAGE");
    }
  }
  render() {
    var _a;
    const prefix = this.host.tagName.toLowerCase().replace(components.breadcrumbs.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix);
    return h(Host, {
      key: "17d9d15e7201a0caffda1fe53e2188bd85d40068",
      class: "bh-breadcrumbs"
    }, h("div", {
      key: "bb5e91db81a63a39506accb73289ba786060dd89",
      class: `bh-breadcrumbs--container ${this.isBorder ? "border" : ""}`,
      ref: (el) => {
        this.element__container = el;
      }
    }, (_a = this._items) === null || _a === void 0 ? void 0 : _a.map((item, index) => {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _j;
      return h("div", {
        class: `bh-breadcrumbs--label-block ${index <= this.truncateIndex && index > 0 ? "truncated" : ""}`,
        ref: (el) => {
          if (!!el) {
            if (index === this._items.length - 1) {
              this.element__label = el;
            }
          }
        }
      }, item.label && !item.icon && h("span", {
        class: `bh-breadcrumbs--label typography--label-small motion--fast ${item.isDisabled === true ? " disabled" : ""} ${index === this._items.length - 1 ? "noUnderline" : ""} ${index === this._items.length - 1 ? "selected" : ""}`,
        onClick: () => {
          this.handleItemSelection(item, index);
        },
        onMouseOver: ($event) => {
          this.mouseOverEvent($event);
        },
        onMouseLeave: () => {
          this.mouseLeaveEvent();
        }
      }, item.label, h("div", {
        class: `bh-tabular-list__tooltip`,
        ref: (el) => {
          if (!!el) {
            this.el__tooltip = el;
          }
        }
      }, h("span", {
        class: "typography--body-small-semi-bold",
        ref: (el) => {
          if (!!el) {
            this.el__tooltipMessage = el;
          }
        }
      })), h("div", {
        class: "bh-tabular-list__tooltip__ghost-element typography--body-medium",
        ref: (el) => {
          if (el) {
            this.el__tooltipGhostElement = el;
          }
        }
      })), item.label && item.icon && h("span", {
        class: `bh-breadcrumbs--label icon_label typography--label-small motion--fast ${item.isDisabled === true ? "disabled" : ""} ${index === this._items.length - 1 ? "noUnderline" : ""} ${index === this._items.length - 1 ? "selected" : ""}`,
        onClick: () => {
          this.handleItemSelection(item, index);
        },
        onMouseOver: ($event) => {
          this.mouseOverEvent($event);
        },
        onMouseLeave: () => {
          this.mouseLeaveEvent();
        }
      }, h("span", {
        class: "bh-breadcrumbs--icon motion--fast material-icons material-icons-outlined typography--icon-small bh-icon-size--medium",
        onClick: () => {
          this.handleItemSelection(item, index);
        }
      }, item.icon), item.label, h("div", {
        class: `bh-tabular-list__tooltip`,
        ref: (el) => {
          if (!!el) {
            this.el__tooltip = el;
          }
        }
      }, h("span", {
        class: "typography--body-small-semi-bold",
        ref: (el) => {
          if (!!el) {
            this.el__tooltipMessage = el;
          }
        }
      })), h("div", {
        class: "bh-tabular-list__tooltip__ghost-element typography--body-medium",
        ref: (el) => {
          if (el) {
            this.el__tooltipGhostElement = el;
          }
        }
      })), !item.label && item.icon && h("i", {
        class: "bh-breadcrumbs--icon motion--fast material-icons material-icons-outlined typography--icon-medium bh-icon-size--medium",
        onClick: () => {
          this.handleItemSelection(item, index);
        }
      }, item.icon), index === this._items.length - 1 && ((_b = (_a2 = this._items[index]) === null || _a2 === void 0 ? void 0 : _a2.options) === null || _b === void 0 ? void 0 : _b.length) > 0 && h("i", {
        class: "bh-breadcrumbs--chevron-down material-icons material-icons-outlined typography--icon-small typography--color-primary bh-icon-size--small",
        onClick: () => {
          this.handleItemSelection(item, index);
        }
      }, "expand_more"), index === this._items.length - 1 && ((_d = (_c = this._items[index]) === null || _c === void 0 ? void 0 : _c.options) === null || _d === void 0 ? void 0 : _d.length) > 0 && h("div", {
        class: `bh-breadcrumbs--menu-container ${this.isOptionMenuOpen ? "shown" : "hidden"} ${this.isOptionMenuHorizontallyFlipped ? "flipped" : ""}`,
        style: this.inlineAnchorId || this.isInline ? this.inlineStyle : {},
        ref: (el) => this.element__menu__option = el
      }, h(Components.menu, {
        menuItems: {
          itemGroups: [{
            items: (_f = (_e = this._items[index]) === null || _e === void 0 ? void 0 : _e.options) === null || _f === void 0 ? void 0 : _f.map((opt) => {
              return {
                label: opt.label,
                value: opt.key
              };
            })
          }]
        },
        isSearchable: this._searchable,
        selected: this.selectedItem,
        menuWidth: this.viewport === "small" ? this.menuWidth === "small" ? "small" : "medium" : this.menuWidth,
        menuHeight: "small",
        // onSelect={(event: CustomEvent) => {
        //   this.handleOptionSelection(event);
        // }}
        onBhEventSelected: (event) => {
          this.handleOptionSelection(event);
        }
      })), index < this._items.length - 1 ? h("div", {
        class: "bh-breadcrumbs--slash"
      }) : "", this.truncateIndex > 0 && index === 0 && h("div", {
        class: "bh-breadcrumbs--truncation-wrapper"
      }, h("i", {
        ref: (el) => {
          this.element__truncation = el;
        },
        class: "bh-breadcrumbs--trucation-icon material-icons material-icons-outlined typography--icon-medium bh-icon-size--medium",
        onClick: () => {
          this.isTruncationMenuOpen = !this.isTruncationMenuOpen;
        }
      }, "more_horiz"), this.isTruncationMenuOpen && h("div", {
        class: `bh-breadcrumbs--menu-container ${((_h = (_g = this.element__menu__option) === null || _g === void 0 ? void 0 : _g.getBoundingClientRect()[0]) === null || _h === void 0 ? void 0 : _h.right) > window.innerWidth - 40 ? "flipped" : ""}`,
        ref: (el) => this.element__menu__truncation = el
      }, h(Components.menu, {
        class: "bh-breadcrumbs--truncation-menu",
        isSearchable: this._searchable,
        menuItems: {
          itemGroups: [{
            items: (_j = this._items.slice(1, this.truncateIndex + 1)) === null || _j === void 0 ? void 0 : _j.map((item2) => {
              return {
                label: item2.label,
                value: item2.key,
                icon: item2.icon
              };
            })
          }]
        },
        menuWidth: this.viewport === "small" ? this.menuWidth === "small" ? "small" : "medium" : this.menuWidth,
        menuHeight: "small",
        onBhEventSelected: (event) => {
          this.handleTruncationSelection(event);
        }
      })), h("div", {
        class: "bh-breadcrumbs--slash"
      })));
    })));
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "_items": ["watchItems"],
      "items": ["changeItems"],
      "isTruncationMenuOpen": ["watchIsTruncationMenuOpen"],
      "isOptionMenuOpen": ["watchIsOptionMenuOpen"]
    };
  }
};
BhBreadcrumbs.style = BhBreadcrumbsStyle0;
var bhButtonCss = ".bh-button{border:12px;border-color:black;padding:0;font:inherit;outline:inherit;display:flex;justify-content:center;align-items:center;border-radius:var(--effect-border-radius-medium);box-shadow:none;padding:0 var(--spacing-padding-medium);background-color:var(--color-fill-cta-primary-default);color:var(--color-text-common-inverse-primary);height:var(--button-medium-height);min-width:var(--button-medium-width);-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}@media (hover: hover){.bh-button{cursor:pointer}.bh-button:hover{background-color:var(--color-fill-cta-primary-hover);border-color:var(--color-border-cta-primary-hover)}.bh-button--type-secondary:hover{background-color:var(--color-fill-cta-secondary-hover);border-color:var(--color-border-cta-secondary-hover)}.bh-button--type-ghost:hover{background-color:var(--color-fill-cta-secondary-hover)}.bh-button--type-critical:hover{background-color:var(--color-fill-cta-critical-hover)}}.bh-button:active{background-color:var(--color-fill-cta-primary-pressed)}.bh-button:focus:not(:active):not(:hover){box-shadow:var(--effect-drop-shadow-focus-primary)}.bh-button:focus:not(:focus-visible):not(:active):not(:hover){box-shadow:none}.bh-button--type-critical:focus:not(:active):not(:hover){box-shadow:var(--effect-drop-shadow-focus-error)}.bh-button--type-critical:focus:not(:focus-visible):not(:active):not(:hover){box-shadow:none}.bh-button--type-secondary{color:var(--color-text-common-primary);background-color:var(--color-fill-cta-secondary-default);border-width:var(--effect-border-width-regular);border-color:var(--color-border-cta-secondary-default);border-style:solid}.bh-button--type-secondary:active{background-color:var(--color-fill-cta-secondary-pressed);border-color:var(--color-border-cta-secondary-pressed)}.bh-button--secondary--disabled,.bh-button--secondary--disabled:hover,.bh-button--secondary--disabled:active{cursor:not-allowed;border-width:var(--effect-border-width-regular);border-color:var(--color-border-control-disabled);border-style:solid;background-color:var(--color-fill-cta-disabled);color:var(--color-text-common-disabled)}.bh-button--type-ghost{color:var(--color-text-common-primary);background-color:var(--color-fill-cta-secondary-default)}.bh-button--type-ghost:active{background-color:var(--color-fill-cta-secondary-pressed)}.bh-button--ghost--disabled,.bh-button--ghost--disabled:hover,.bh-button--ghost--disabled:active{cursor:not-allowed;background-color:var(--color-fill-cta-disabled);color:var(--color-text-common-disabled)}.bh-button--type-critical{background-color:var(--color-fill-cta-critical-default)}.bh-button--type-critical:active{background-color:var(--color-fill-cta-critical-pressed)}.bh-button--fluid{width:100%}.bh-button--icon{width:var(--button-medium-height);height:var(--button-medium-height);min-width:initial;padding:var(--spacing-padding-none);border-radius:100%}.bh-button--small{min-width:var(--button-small-width);height:var(--button-small-height)}.bh-button--small.bh-button--icon{width:var(--button-small-height);height:var(--button-small-height);min-width:initial}.bh-button__left-icon{margin-right:var(--spacing-margin-xsmall)}.bh-button__right-icon{margin-left:var(--spacing-margin-xsmall)}.bh-button--small .bh-button__left-icon{margin-right:var(--spacing-margin-xxsmall)}.bh-button--small .bh-button__right-icon{margin-left:var(--spacing-margin-xxsmall)}.bh-button__label{min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.bh-button--disabled,.bh-button--disabled:hover,.bh-button--disabled:active{cursor:not-allowed;background-color:var(--color-fill-cta-disabled);color:var(--color-text-common-disabled)}.bh-button__loading-indicator{--indicator-border-width:2px}.bh-button__loading-indicator{display:inline-block;width:calc(var(--font-size-icon-medium) - 2 * var(--indicator-border-width));height:calc(\n    var(--font-size-icon-medium) - 2 * var(--indicator-border-width)\n  );margin-left:var(--spacing-margin-xsmall);margin-top:calc(-2 * var(--indicator-border-width))}.bh-button__loading-indicator:after{content:' ';display:block;width:calc(var(--font-size-icon-medium) - 2 * var(--indicator-border-width));height:calc(\n    var(--font-size-icon-medium) - 2 * var(--indicator-border-width)\n  );border-radius:calc(\n    var(--font-size-icon-medium) - 2 * var(--indicator-border-width)\n  );border:var(--indicator-border-width) solid transparent;border-color:var(--color-text-common-inverse-primary) transparent\n    var(--color-text-common-inverse-primary) transparent;animation:loading-indicator 1.5s linear infinite}.bh-button--small .bh-button__loading-indicator{display:inline-block;width:calc(var(--font-size-icon-small) - 2 * var(--indicator-border-width));height:calc(var(--font-size-icon-small) - 2 * var(--indicator-border-width));margin-left:var(--spacing-margin-xsmall);margin-top:calc(-2 * var(--indicator-border-width))}.bh-button--small .bh-button__loading-indicator:after{content:' ';display:block;width:calc(var(--font-size-icon-small) - 2 * var(--indicator-border-width));height:calc(var(--font-size-icon-small) - 2 * var(--indicator-border-width));border-radius:calc(\n    var(--font-size-icon-small) - 2 * var(--indicator-border-width)\n  );border:var(--indicator-border-width) solid transparent;border-color:var(--color-text-common-inverse-primary) transparent\n    var(--color-text-common-inverse-primary) transparent;animation:loading-indicator 1.5s linear infinite}.bh-button--type-primary .bh-button__loading-indicator:after{border-color:var(--color-text-common-inverse-primary) transparent\n    var(--color-text-common-inverse-primary) transparent}.bh-button--type-secondary .bh-button__loading-indicator:after{border-color:var(--color-text-common-primary) transparent\n    var(--color-text-common-primary) transparent}.bh-button--type-critical .bh-button__loading-indicator:after{border-color:var(--color-text-common-inverse-primary) transparent\n    var(--color-text-common-inverse-primary) transparent}.bh-button--type-ghost .bh-button__loading-indicator:after{border-color:var(--color-text-common-primary) transparent\n    var(--color-text-common-primary) transparent}.bh-button--disabled .bh-button__loading-indicator:after{border-color:var(--color-text-common-disabled) transparent\n    var(--color-text-common-disabled) transparent}.bh-button__loading-indicator--icon,.bh-button--small .bh-button__loading-indicator--icon{width:initial;margin-left:initial}@keyframes loading-indicator{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
var BhButtonStyle0 = bhButtonCss;
var BhButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = "primary";
    this.disableTooltip = false;
    this.label = void 0;
    this.leftIcon = void 0;
    this.rightIcon = void 0;
    this.tooltipMessage = void 0;
    this.disabledTooltipMessage = "";
    this.isDisabled = false;
    this.isFluid = false;
    this.isSmall = false;
    this.isLoading = false;
    this.disableTooltipPlacement = "auto-start";
    this.normalTooltipPlacement = "top";
    this.disablePointerEvent = false;
  }
  /**
   * Get the appropriate tooltip message based on button state
   */
  getTooltipMessage() {
    if (this.isDisabled && this.disabledTooltipMessage.length) {
      return this.disabledTooltipMessage;
    }
    return this.tooltipMessage;
  }
  /**
   * Determine if tooltip should be hidden
   */
  shouldHideTooltip(isIconOnly) {
    if (this.disableTooltip) return true;
    if (isIconOnly) {
      return !this.getTooltipMessage();
    }
    if (this.isDisabled && this.disabledTooltipMessage.length) {
      return false;
    }
    if (!this.isDisabled && this.tooltipMessage) {
      return false;
    }
    return true;
  }
  render() {
    let isIconOnly = false;
    const containerClasses = ["bh-button__container"];
    if (this.isSmall) containerClasses.push("bh-button__container--small");
    const buttonClasses = ["bh-button motion--normal"];
    if (this.isDisabled && this.type === "secondary") {
      buttonClasses.push("bh-button--secondary--disabled");
    } else if (this.isDisabled && this.type === "ghost") {
      buttonClasses.push("bh-button--ghost--disabled");
    } else if (this.isDisabled) {
      buttonClasses.push("bh-button--disabled");
    } else {
      buttonClasses.push(`bh-button--type-${this.type}`);
    }
    if (this.isFluid) buttonClasses.push("bh-button--fluid");
    if (this.isSmall) buttonClasses.push("bh-button--small");
    if (this.leftIcon && this.label === void 0 || this.label === "") {
      buttonClasses.push("bh-button--icon");
      isIconOnly = true;
    }
    const labelClasses = ["bh-button__label"];
    if (this.isSmall) {
      labelClasses.push("typography--button-link-small");
    } else {
      labelClasses.push("typography--button-link-medium");
    }
    const iconClasses = ["bh-button__icon"];
    if (this.leftIcon && !isIconOnly) {
      iconClasses.push("bh-button__left-icon");
    } else if (this.rightIcon) {
      iconClasses.push("bh-button__right-icon");
    }
    const prefix = this.host.tagName.toLowerCase().replace(components.button.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix);
    const hideTooltip = this.shouldHideTooltip(isIconOnly);
    const tooltipMessage = this.getTooltipMessage();
    let leftIconTemplate = null;
    if (this.leftIcon && !(isIconOnly && this.isLoading)) {
      const iconElement = h(Components.icon, {
        key: "20ecc1f01dbbf8af2b7e7b9dc3af23c82bfba023",
        class: iconClasses.join(" "),
        icon: this.leftIcon,
        size: this.isSmall ? "small" : "medium",
        color: this.isDisabled ? "var(--color-text-label-disabled-default)" : this.type === "primary" || this.type === "critical" ? "inverse_primary" : "primary",
        onClick: (event) => {
          if (this.isDisabled) event.stopPropagation();
          event.preventDefault();
        }
      });
      if (this.disableTooltip || hideTooltip) {
        leftIconTemplate = iconElement;
      } else {
        leftIconTemplate = h(Components.tooltip, {
          key: "e147a6f3a2d0dff063b9fee1f6327a1018f17a60",
          message: tooltipMessage,
          placement: this.normalTooltipPlacement,
          hide: hideTooltip
        }, iconElement);
      }
    }
    const buttonContent = h("button", {
      key: "559e391bdb7fa0fc19d87f72235b94b05f50c0c0",
      class: buttonClasses.join(" "),
      disabled: this.isDisabled
    }, leftIconTemplate, this.label && h("span", {
      class: labelClasses.join(" ")
    }, this.label), this.rightIcon && h(Components.icon, {
      class: iconClasses.join(" "),
      icon: this.rightIcon,
      size: this.isSmall ? "small" : "medium",
      color: this.isDisabled ? "var(--color-text-label-disabled-default)" : this.type === "primary" || this.type === "critical" ? "inverse_primary" : "primary"
    }), this.isLoading && !isIconOnly && h("span", {
      class: "bh-button__loading-indicator"
    }), this.isLoading && isIconOnly && h("span", {
      class: "bh-button__loading-indicator bh-button__loading-indicator--icon"
    }));
    const shouldWrapButtonInTooltip = this.isDisabled && this.disabledTooltipMessage.length && !this.disableTooltip && !isIconOnly;
    return h(Host, {
      key: "0f7fb113ff89643757acb81f71c613a7e7bcdc70",
      class: containerClasses.join(" "),
      style: {
        // Only disable pointer events for interactions, not for tooltips
        pointerEvents: !this.isDisabled && this.disablePointerEvent ? "none" : void 0
      }
    }, shouldWrapButtonInTooltip ? h(Components.tooltip, {
      message: this.disabledTooltipMessage,
      placement: this.disableTooltipPlacement
    }, h("div", {
      style: {
        display: "inline-block",
        pointerEvents: "none"
      }
    }, buttonContent)) : buttonContent);
  }
  get host() {
    return getElement(this);
  }
};
BhButton.style = BhButtonStyle0;
var bhButtonTabsCss = '.bh-button-tabs--wrapper{width:100%;-moz-tap-highlight-color:transparent;-webkit-tap-highlight-color:transparent}.bh-button-tabs--container{height:44px;display:inline-flex;align-items:center;position:relative;background-color:var(--color-fill-common-tertiary);border-radius:var(--effect-border-radius-medium);padding:0 var(--spacing-padding-xxsmall);z-index:1;outline:none}.bh-button-tabs--item .bh-tooltip__message-container{width:max-content}.bh-button-tabs--container.small{height:36px}.bh-button-tabs--container.border{border-bottom:1px solid var(--color-border-common-primary)}.bh-button-tabs--item{white-space:nowrap;display:flex;align-items:center;padding:0 var(--spacing-padding-medium);color:var(--color-text-common-secondary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;height:36px;border-radius:5px;position:relative;z-index:3;margin-right:var(--spacing-margin-xxsmall)}.bh-button-tabs--item.small{height:28px;padding:0 var(--spacing-padding-small)}.bh-button-tabs--item-label{overflow-x:hidden;text-overflow:ellipsis}.bh-button-tabs--item:not(.active):hover,.bh-button-tabs--item.selected:not(.active){color:var(--color-text-common-primary);background-color:var(--color-fill-common-secondary);box-shadow:inset 0px 0px 0px 1px var(--color-border-common-primary)}.bh-button-tabs--item.truncated{visibility:hidden;position:fixed;pointer-events:none}.bh-button-tabs--truncation-menu{display:flex;align-items:center;position:relative;z-index:2;padding:0 var(--spacing-padding-medium);color:var(--color-text-common-secondary);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;height:36px;border-radius:var(--effect-border-radius-medium)}.bh-button-tabs--truncation-menu.hidden{display:none}.bh-button-tabs--truncation-menu.small{padding:0 var(--spacing-padding-small);height:28px}.bh-button-tabs--truncation-menu:hover,.bh-button-tabs--truncation-menu.selected{background-color:var(--color-fill-cta-secondary-hover-supplemental)}.bh-button-tabs--truncation-menu--container{position:absolute;top:48px;right:0;z-index:10}.bh-button-tabs--truncation-menu--container.hidden{visibility:hidden;position:fixed}.bh-button-tabs--truncation-menu--container.small{top:40px}.bh-button-tabs--item.active{color:var(--color-text-link-primary-default);background-color:var(--color-fill-common-secondary);box-shadow:inset 0px 0px 0px 1px var(--color-border-common-primary)}.bh-button-tabs--item:last-child{margin-right:0}.bh-button-tabs--item__icon{margin-right:var(--spacing-margin-xsmall)}.bh-button-tabs--active-highlight{position:absolute;height:36px;bottom:4px;pointer-events:none;background-color:var(--color-fill-common-secondary);border-radius:var(--effect-border-radius-medium);z-index:2;box-shadow:inset 0px 0px 0px 1px var(--color-border-common-primary)}.bh-button-tabs--active-highlight.small{height:28px}.bh-button-tabs--label-block{display:flex;align-items:center;position:relative}.bh-button-tabs--truncation-wrapper{display:flex}.bh-button-tabs--trucation-icon{color:var(--color-text-common-secondary);cursor:pointer}.bh-button-tabs--trucation-icon:hover,.bh-button-tabs--trucation-icon:active{color:var(--color-text-common-primary)}.bh-button-tabs--label-block.truncated{position:fixed;opacity:0;visibility:hidden;pointer-events:none}.bh-button-tabs--label{color:var(--color-text-common-secondary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;max-width:220px;white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis}.bh-button-tabs--label:hover,.bh-button-tabs--label:active,.bh-button-tabs--label.selected{color:var(--color-text-common-primary);text-decoration:underline}.bh-button-tabs--label.selected{color:var(--color-text-common-primary)}.bh-button-tabs--icon{color:var(--color-text-common-secondary);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.bh-button-tabs--icon:hover,.bh-button-tabs--icon:active .bh-button-tabs--icon.selected{color:var(--color-text-common-primary)}.bh-button-tabs--chevron-down{cursor:pointer;padding-left:var(--spacing-padding-xxsmall)}.bh-button-tabs--menu-container{position:absolute;top:26px;z-index:100}.bh-button-tabs--menu-container.flipped{right:0}@media (max-width: 599px){.bh-button-tabs--label{max-width:120px}}.bh-button-tabs--item[aria-disabled="true"]{pointer-events:none;cursor:not-allowed;color:var(--color-text-label-disabled-default)}';
var BhButtonTabsStyle0 = bhButtonTabsCss;
var TRUNCATION_MENU = "truncation-menu";
var BhButtonTabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.activeTabUpdate = createEvent(this, "activeTabUpdate", 7);
    this.bhEventOpen = createEvent(this, "bhEventOpen", 7);
    this.bhEventClose = createEvent(this, "bhEventClose", 3);
    this.bhEventSelected = createEvent(this, "bhEventSelected", 7);
    this.ellipsisTextLimit = 26;
    this._ellipsisTextLimit = void 0;
    this.items = void 0;
    this.hideToolip = false;
    this._items = void 0;
    this.activeKey = void 0;
    this.selectedKey = void 0;
    this.isSmall = false;
    this.tooltipMessage = "Secondary Options";
    this.menuWidth = "fluid";
    this.isTruncationMenuOpen = false;
    this.truncateIndex = -1;
    this.truncateIndexPrev = -1;
    this.viewport = void 0;
    this.isInUpdate = false;
    this.firstItemWidth = void 0;
  }
  changeEllipsisTextLimit() {
    this._ellipsisTextLimit = this.ellipsisTextLimit;
  }
  changeItems() {
    if (this.items) {
      if (typeof this.items === "string") {
        try {
          this._items = JSON.parse(this.items);
        } catch (_a) {
        }
      } else {
        this._items = this.items;
      }
      this._ellipsisTextLimit = this.ellipsisTextLimit;
      this._items = this._items.map((item) => {
        return {
          label: item.label.length > this._ellipsisTextLimit ? `${item.label.substring(0, this._ellipsisTextLimit)}...` : item.label,
          key: item.key,
          icon: item.icon,
          fullText: item.label,
          showTooltip: item.label.length > this._ellipsisTextLimit ? true : false,
          isDisabled: item.isDisabled ? item.isDisabled : false
        };
      });
      this.handleTruncation();
    } else {
      console.warn("Undefined passed to button tabs");
    }
  }
  watchActiveKey() {
    this.setActiveKey(this.activeKey, true);
  }
  // Listeners
  handleResize() {
    this.viewport = getBreakpoint();
    this.handleTruncation();
    setTimeout(() => {
      this.setActiveKey(this.activeKey, true);
    });
  }
  setActiveTab(event) {
    if (!event.detail || !event.detail.key) return;
    const key = event.detail.key;
    this.setActiveKey(key);
  }
  watchIsTruncationMenuOpen() {
    if (this.isTruncationMenuOpen) {
      this.bhEventOpen.emit({
        "open": true
      });
    } else {
      this.bhEventClose.emit({
        "open": false
      });
      this.element__container.focus();
    }
  }
  toggleTrucateMenu() {
    this.isTruncationMenuOpen = !this.isTruncationMenuOpen;
  }
  handleTruncation() {
    var _a;
    if (!this._items || this._items.length < 1) return;
    this.truncateIndexPrev = this.truncateIndex;
    const tars = (_a = this.element__container) === null || _a === void 0 ? void 0 : _a.querySelectorAll(".bh-button-tabs--item");
    const idx = this._items.findIndex((item, index) => {
      if (tars) {
        return Array.from(tars).slice(0, index + 1).reduce((acc, tar) => {
          return acc + tar.clientWidth + 4;
        }, 0) > this.element__wrapper.clientWidth - 72;
      } else {
        return false;
      }
    });
    if (idx > 0) {
      this.truncateIndex = Array.from(tars).reduce((acc, tar) => {
        return acc + tar.clientWidth + 4;
      }, 0) < this.element__wrapper.clientWidth ? -1 : idx;
    } else {
      this.truncateIndex = -1;
    }
    if (this.truncateIndex === -1) {
      this.isTruncationMenuOpen = false;
    }
    if (this.truncateIndex !== this.truncateIndexPrev && this.isTruncationMenuOpen) {
      this.isInUpdate = true;
      this.isTruncationMenuOpen = false;
      this.setActiveKey(this.activeKey);
    }
    const currentIndex = this.selectedKey === TRUNCATION_MENU ? TRUNCATION_MENU : this._items.findIndex((item) => {
      return item.key === this.selectedKey;
    });
    if (currentIndex !== TRUNCATION_MENU && currentIndex > 0 && this.truncateIndex > -1 && currentIndex > this.truncateIndex) {
      this.selectedKey = TRUNCATION_MENU;
    }
  }
  handleTruncationSelection(event) {
    if (event.detail && event.detail.value) {
      this.setActiveKey(event.detail.value);
    }
    this.isTruncationMenuOpen = false;
    setTimeout(() => {
      this.selectedKey = TRUNCATION_MENU;
    });
  }
  setActiveKey(key, preventEventEmission = false) {
    try {
      this.activeKey = key;
      this.selectedKey = key;
      if (this.element__active_highlight && this.element__container) {
        const tar = this.element__container.querySelector(`[data-key="${key}"]`);
        if (tar) {
          if (tar.classList.contains("truncated")) {
            const truncate = this.element__container.querySelector(".bh-button-tabs--truncation-menu");
            this.element__active_highlight.style.width = `${truncate.offsetWidth}px`;
            this.element__active_highlight.style.left = `${truncate.offsetLeft}px`;
          } else {
            this.element__active_highlight.style.width = `${tar.getBoundingClientRect().width}px`;
            this.element__active_highlight.style.left = `${tar.offsetLeft}px`;
          }
        }
      }
      if (!preventEventEmission) {
        this.activeTabUpdate.emit(this._items.find((item) => item.key === this.activeKey));
        this.bhEventSelected.emit(this._items.find((item) => item.key === this.activeKey));
      }
    } catch (e) {
      console.log(e);
    }
  }
  tabsGlobalClickEvent(event) {
    var _a, _b;
    if (!((_a = this.element__truncation) === null || _a === void 0 ? void 0 : _a.contains(event.target)) && !((_b = this.element__menu__truncation) === null || _b === void 0 ? void 0 : _b.contains(event.target))) this.isTruncationMenuOpen = false;
  }
  preventDefaultForScrollKeys(event) {
    if (event.code === "ArrowUp" || event.code === "ArrowDown" || event.code === "ArrowRight" || event.code === "ArrowLeft" || event.code === "Space") {
      event.preventDefault();
      return false;
    }
  }
  componentWillLoad() {
    this.changeItems();
    this._ellipsisTextLimit = this.ellipsisTextLimit;
    this.viewport = getBreakpoint();
  }
  componentDidLoad() {
    window.addEventListener("click", (event) => this.tabsGlobalClickEvent(event));
    setTimeout(() => {
      var _a, _b, _c;
      if (this._items && !this.activeKey) {
        this.setActiveKey((_a = this._items[0]) === null || _a === void 0 ? void 0 : _a.key, true);
        this.handleTruncation();
        const tar = (_c = this.element__container.querySelector(`[data-key="${(_b = this._items[0]) === null || _b === void 0 ? void 0 : _b.key}"]`)) === null || _c === void 0 ? void 0 : _c.querySelector(".bh-button-tabs--item__icon");
        if (tar) {
          let _timeout;
          const _interval = setInterval(() => {
            var _a2;
            if (tar.clientWidth <= 24) {
              this.setActiveKey((_a2 = this._items[0]) === null || _a2 === void 0 ? void 0 : _a2.key, true);
              this.handleTruncation();
              clearTimeout(_timeout);
              clearInterval(_interval);
            }
          }, 25);
          _timeout = setTimeout(() => {
            clearInterval(_interval);
          }, 5e3);
        }
      }
    });
    if (this.activeKey) {
      this.setActiveKey(this.activeKey, true);
    }
    const that = this;
    window.addEventListener("keydown", (event) => {
      var _a;
      if ((_a = that.element__container) === null || _a === void 0 ? void 0 : _a.contains(event.target)) {
        const currentIndex = that.selectedKey === TRUNCATION_MENU ? TRUNCATION_MENU : that._items.findIndex((item) => {
          return item.key === that.selectedKey;
        });
        switch (event.code) {
          case "ArrowRight":
            if (that.isTruncationMenuOpen) that.isTruncationMenuOpen = false;
            if (currentIndex === TRUNCATION_MENU) {
              that.selectedKey = TRUNCATION_MENU;
            } else {
              if (currentIndex === that.truncateIndex - 1 && that.truncateIndex > -1) {
                that.selectedKey = TRUNCATION_MENU;
              } else {
                if (currentIndex < that._items.length - 1) that.selectedKey = that._items[currentIndex + 1].key;
              }
            }
            break;
          case "ArrowLeft":
            if (that.isTruncationMenuOpen) that.isTruncationMenuOpen = false;
            if (currentIndex === TRUNCATION_MENU) {
              that.selectedKey = that._items[that.truncateIndex - 1].key;
            } else {
              if (currentIndex > that.truncateIndex && that.truncateIndex > -1) {
                if (currentIndex > 0) that.selectedKey = that._items[that.truncateIndex - 1].key;
              } else {
                if (currentIndex > 0) that.selectedKey = that._items[currentIndex - 1].key;
              }
            }
            break;
          case "Space":
            if (that.selectedKey === TRUNCATION_MENU) {
              that.toggleTrucateMenu();
            } else if (that.selectedKey !== that.activeKey) {
              that.setActiveKey(that.selectedKey, false);
            }
            break;
          case "Enter":
            if (that.selectedKey === TRUNCATION_MENU) {
              that.toggleTrucateMenu();
            } else if (that.selectedKey !== that.activeKey) {
              that.setActiveKey(that.selectedKey, false);
            }
            break;
        }
      }
    }, false);
    const parent = this.host.parentElement;
    if (parent) {
      this.mutationObserver = new ResizeObserver(() => {
        this.handleResize();
      });
      this.mutationObserver.observe(parent);
    }
  }
  componentDidRender() {
    var _a, _b;
    const items = (_a = this.element__container) === null || _a === void 0 ? void 0 : _a.querySelectorAll(".bh-button-tabs--item");
    if (this.firstItemWidth !== ((_b = Array.from(items)[0]) === null || _b === void 0 ? void 0 : _b.clientWidth) || !this.firstItemWidth) {
      setTimeout(() => {
        var _a2;
        this.firstItemWidth = (_a2 = Array.from(items)[0]) === null || _a2 === void 0 ? void 0 : _a2.clientWidth;
      }, 0);
    }
  }
  componentDidUpdate() {
    var _a, _b, _c;
    this.handleTruncation();
    const items = (_a = this.element__container) === null || _a === void 0 ? void 0 : _a.querySelectorAll(".bh-button-tabs--item");
    if (this.firstItemWidth !== ((_b = Array.from(items)[0]) === null || _b === void 0 ? void 0 : _b.clientWidth) || !this.firstItemWidth) {
      this.firstItemWidth = (_c = Array.from(items)[0]) === null || _c === void 0 ? void 0 : _c.clientWidth;
    }
    setTimeout(() => {
      this.hideToolip = true;
    }, 100);
  }
  disconnectedCallback() {
    var _a;
    window.removeEventListener("click", (event) => this.tabsGlobalClickEvent(event));
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  getHideTooltip(item) {
    if (item.icon !== void 0 && (!item.hasOwnProperty("label") || item.label === "")) {
      return false;
    }
    return true;
  }
  render() {
    var _a;
    const prefix = this.host.tagName.toLowerCase().replace(components.buttonTabs.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix);
    if (this.isInUpdate) {
      setTimeout(() => {
        this.isInUpdate = false;
        this.isTruncationMenuOpen = true;
      });
    }
    return h(Host, {
      key: "d1be4231c4e33d0a09b80816858bca3de9944210",
      class: "bh-button-tabs"
    }, h("div", {
      key: "22fea2d98ce00680917248d44f025349dc25f919",
      class: "bh-button-tabs--wrapper",
      ref: (el) => {
        this.element__wrapper = el;
      }
    }, h("div", {
      key: "ed18524695d0fad4948f9fc5871262de58ea2b43",
      class: `bh-button-tabs--container ${this.isSmall ? "small" : ""}`,
      ref: (el) => {
        this.element__container = el;
      },
      tabIndex: 0,
      onKeyDown: this.preventDefaultForScrollKeys
    }, h("div", {
      key: "a41e74ad74871fb1ebff6481ba6616d54c0fd223",
      ref: (el) => {
        this.element__active_highlight = el;
      },
      class: `motion--fast bh-button-tabs--active-highlight ${this.isSmall ? "small" : ""}`
    }), this._items && this._items.map((item, index) => {
      return h("div", {
        class: `bh-button-tabs--item motion--fast ${this.isSmall ? "small" : ""} ${item.key === this.selectedKey ? "selected" : ""} ${item.key === this.activeKey ? "active" : ""} ${index >= this.truncateIndex && this.truncateIndex > -1 ? "truncated" : ""}`,
        onClick: () => {
          if (!item.isDisabled) this.setActiveKey(item.key);
        },
        "data-key": item.key,
        "aria-disabled": item.isDisabled ? "true" : "false"
      }, item.icon && h("i", {
        class: `material-icons material-icons-outlined ${this.isSmall ? "typography--icon-small" : "typography--icon-medium"} bh-button-tabs--item__icon ${this.selectedKey === item.key ? "selected" : ""}`
      }, h(Components.tooltip, {
        message: this.tooltipMessage,
        placement: "top",
        hide: this.getHideTooltip(item)
      }, item.icon)), h("span", {
        class: `bh-button-tabs--item-label ${this.isSmall ? "typography--label-small" : "typography--label-medium"} ${this.selectedKey === item.key ? "selected" : ""}`
      }, h(Components.tooltip, {
        message: item.showTooltip ? item.fullText : "",
        placement: "top"
      }, item.label)));
    }), h("div", {
      key: "7c11732cdd33151296c7012f00a5de5ac6d9c9b4",
      class: `bh-button-tabs--truncation-menu motion--fast ${this.isSmall ? "small" : ""} ${this.truncateIndex > -1 ? "" : "hidden"} ${this.selectedKey === TRUNCATION_MENU ? "selected" : ""}`
    }, h(Components.tooltip, {
      key: "5a6fc934c127adb757a824c2bed9f7fa27efbdba",
      message: this.tooltipMessage,
      placement: "top"
    }, h("i", {
      key: "09d229e7b77b3933dfef80c8695dd2ce5bb2541e",
      class: `material-icons material-icons-outlined ${this.isSmall ? "typography--icon-small" : "typography--icon-medium"}`,
      ref: (el) => {
        this.element__truncation = el;
      },
      onClick: () => {
        this.toggleTrucateMenu();
      }
    }, "more_horiz")), h("div", {
      key: "976abdc5b5fa0454949d3cf36c3b226a5e1c0017",
      class: `bh-button-tabs--truncation-menu--container ${this.isSmall ? "small" : ""} ${this.isTruncationMenuOpen ? "" : "hidden"}`,
      ref: (el) => {
        this.element__menu__truncation = el;
      }
    }, h(Components.menu, {
      key: "c391789b70b3b871ba8192c9fe233e875dbf346c",
      menuItems: {
        itemGroups: [{
          items: (_a = this._items.slice(this.truncateIndex)) === null || _a === void 0 ? void 0 : _a.map((opt) => {
            return {
              label: opt.label,
              value: opt.key,
              isDisabled: opt.isDisabled ? opt.isDisabled : false
            };
          })
        }]
      },
      isFocused: this.isTruncationMenuOpen,
      menuWidth: this.viewport === "small" ? "small" : this.menuWidth ? this.menuWidth : "fluid",
      menuHeight: "small",
      selected: this.activeKey,
      onBhEventSelected: (event) => {
        this.handleTruncationSelection(event);
        event.preventDefault();
        event.stopPropagation();
      }
    }))))));
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "ellipsisTextLimit": ["changeEllipsisTextLimit"],
      "items": ["changeItems"],
      "activeKey": ["watchActiveKey"],
      "isTruncationMenuOpen": ["watchIsTruncationMenuOpen"]
    };
  }
};
BhButtonTabs.style = BhButtonTabsStyle0;
var bhCardCss = ".bh-card{display:block;background-color:var(--color-fill-common-secondary);border:1px solid var(--color-border-common-primary);border-radius:var(--effect-border-radius-medium)}.bh-card--content{height:100%}.bh-card--content.with-header-actions{height:calc(100% - 60px)}.bh-card--content.with-footer-actions{height:calc(100% - 61px)}.bh-card--content.with-header-actions.with-footer-actions{height:calc(100% - 121px)}.bh-card--content.expandable{max-height:0px;overflow:hidden;transition:all var(--motion-duration-normal)\n    var(--motion-easing-normal)}.bh-card--content.expandable.open{overflow:hidden;max-height:1000px}.bh-card.focusable{transition:all;transition-timing-function:var(--motion-easing-fast);transition-duration:var(--motion-duration-fast)}.bh-card.focusable:hover{cursor:pointer;border-radius:var(--effect-border-radius-medium);border:1px solid var(--color-border-form-hover)}.bh-card.focusable:focus{cursor:pointer;border-color:var(--color-border-form-focused);box-shadow:var(--effect-drop-shadow-focus-primary);border-radius:var(--effect-border-radius-medium);outline:none}.bh-card.focusable:focus:not(:focus-visible){cursor:auto;border-color:none;box-shadow:none;outline:none}.bh-card--contained-content{min-height:20px;display:flex;flex-direction:column;justify-content:flex-start;padding:var(--spacing-padding-small)}.bh-card--contained-content.border{border-top:1px solid var(--color-border-common-primary)}.bh-card--header{height:60px;padding:0 var(--spacing-padding-small);display:flex;justify-content:space-between;align-items:center}.bh-card--header.expandable{cursor:pointer}.bh-card--heading{color:var(--color-text-common-primary)}.bh-card--header-right-container{display:flex}.bh-card--header-right-container>*{margin-left:var(--spacing-margin-small)}.bh-card--header-right-container>*:first-child{margin-left:0px}.bh-card__subtext-copy{color:var(--color-text-common-secondary);margin-left:12px}.bh-card--header-left-container{display:flex;align-items:center}.bh-card--icon{margin-left:12px;margin-right:10.5px}.bh-card--subtext-small-view{display:none !important}.bh-card--footer{display:flex;justify-content:flex-end;align-items:center;border-top:1px solid var(--color-border-common-primary);padding:var(--spacing-padding-small);min-width:0}.bh-card--footer>*{display:flex;min-width:0;margin-left:var(--spacing-margin-small)}.bh-card--footer>*:first-child{margin-left:0px}.bh-card--header--action-wrapper--bh-button{margin-left:var(--spacing-margin-small)}.bh-card--header--action-wrapper--desktop{display:flex}.bh-card--header--action-wrapper--mobile{display:none}@media only screen and (max-width: 599px){.bh-card--footer>*{flex:1;min-width:0}.bh-card--header--action-wrapper--desktop{display:none}.bh-card--header--action-wrapper--mobile{display:flex}.bh-card--header--action-wrapper--mobile .bh-card--header--action-wrapper--bh-button{margin-right:var(--spacing-margin-xsmall)}.bh-card--header-right-container .bh-action-menu .bh-action-menu__menu-container{right:-4px}}.bh-card__title-extension__slot-container{display:flex}.bh-card__header-actions__slot-container{display:flex;align-items:center}.bh-card__footer-actions__slot-container{display:flex;justify-content:flex-end;padding:var(--spacing-padding-small);border-top:1px solid var(--color-border-common-primary)}.bh-card__header-actions__slot-container bh-button-group,.bh-card__footer-actions__slot-container bh-button-group{justify-content:flex-end;align-items:center}.bh-card__header-actions__slot-container bh-action-menu{display:block;height:36px}@media only screen and (max-width: 599px){.bh-card__header-actions__slot-container,.bh-card__footer-actions__slot-container{justify-content:space-between}.bh-card__header-actions__slot-container bh-button,.bh-card__header-actions__slot-container bh-button-group,.bh-card__footer-actions__slot-container bh-button,.bh-card__footer-actions__slot-container bh-button-group{width:100%}}";
var BhCardStyle0 = bhCardCss;
var BhCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ctaClick = createEvent(this, "ctaClick", 7);
    this.bhEventCtaClick = createEvent(this, "bhEventCtaClick", 7);
    this.bhEventOpen = createEvent(this, "bhEventOpen", 7);
    this.bhEventClose = createEvent(this, "bhEventClose", 7);
    this.heading = void 0;
    this.tooltipText = "";
    this.border = void 0;
    this.headerActions = void 0;
    this.subtext = void 0;
    this.icon = void 0;
    this.isFocusable = void 0;
    this._headerActions = void 0;
    this.footerActions = void 0;
    this._footerActions = void 0;
    this.withHeaderActionSlot = void 0;
    this.withFooterActionSlot = void 0;
    this.withTitleExtensionSlot = void 0;
    this.actionMenu = void 0;
    this._actionMenu = void 0;
    this.viewport = void 0;
    this.stopBubble = false;
    this.isExpandable = false;
    this.expandableOpen = false;
    this.isOpen = false;
  }
  watchHeaderActions() {
    this.parseHeaderActionsData();
  }
  watchFooterActions() {
    this.parseFooterActionsData();
  }
  watchActionMenu() {
    this._actionMenu = typeof this.actionMenu === "string" ? JSON.parse(this.actionMenu) : this.actionMenu;
  }
  watchIsOpen() {
    if (this.isOpen) {
      this.bhEventOpen.emit();
    } else {
      this.bhEventClose.emit();
    }
  }
  // Event Listeners
  handleResize() {
    this.setViewport();
  }
  setViewport() {
    const bp = getBreakpoint();
    if (this.viewport !== bp) {
      this.viewport = bp;
    }
  }
  parseHeaderActionsData() {
    let headerActionsRaw;
    if (typeof this.headerActions === "string") {
      try {
        headerActionsRaw = JSON.parse(this.headerActions);
      } catch (_a) {
      }
    } else {
      headerActionsRaw = this.headerActions;
    }
    if (!Array.isArray(headerActionsRaw) || headerActionsRaw.length < 1) return;
    const firstHeaderCtaItem = headerActionsRaw[0];
    if (firstHeaderCtaItem.buttonType) {
      this._headerActions = headerActionsRaw.map((headerActionsRawItem) => {
        return {
          label: headerActionsRawItem.buttonLabel,
          type: headerActionsRawItem.buttonType,
          key: headerActionsRawItem.buttonKey,
          leftIcon: headerActionsRawItem.buttonIcon,
          isDisabled: headerActionsRawItem.buttonDisable
        };
      });
    } else if (firstHeaderCtaItem.type) {
      this._headerActions = headerActionsRaw;
    }
  }
  parseFooterActionsData() {
    let footerActionsRaw;
    if (typeof this.footerActions === "string") {
      try {
        footerActionsRaw = JSON.parse(this.footerActions);
      } catch (_a) {
      }
    } else {
      footerActionsRaw = this.footerActions;
    }
    if (!Array.isArray(footerActionsRaw) || footerActionsRaw.length < 1) return;
    const firstFooterCtaItem = footerActionsRaw[0];
    if (firstFooterCtaItem.buttonType) {
      this._footerActions = footerActionsRaw.map((footerActionsRawItem) => {
        return {
          label: footerActionsRawItem.buttonLabel,
          type: footerActionsRawItem.buttonType,
          key: footerActionsRawItem.buttonKey,
          leftIcon: footerActionsRawItem.buttonIcon,
          isDisabled: footerActionsRawItem.buttonDisable
        };
      });
    } else if (firstFooterCtaItem.type) {
      this._footerActions = footerActionsRaw;
    }
  }
  parseData() {
    this.parseHeaderActionsData();
    this.parseFooterActionsData();
    this._actionMenu = typeof this.actionMenu === "string" ? JSON.parse(this.actionMenu) : this.actionMenu;
  }
  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  componentWillLoad() {
    this.setViewport();
    this.parseData();
    if (this.isExpandable) {
      this.isOpen = this.expandableOpen;
    }
  }
  componentWillRender() {
    var _a, _b;
    const prefix = this.host.tagName.toLowerCase().replace(components.card.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
    const headerActionsSlot = (_a = this.host) === null || _a === void 0 ? void 0 : _a.querySelector('[slot="bh-card__header-actions"]');
    this.withHeaderActionSlot = headerActionsSlot ? true : false;
    if (this.withHeaderActionSlot) {
      if ((headerActionsSlot === null || headerActionsSlot === void 0 ? void 0 : headerActionsSlot.querySelector(Components.actionMenu)) && (headerActionsSlot === null || headerActionsSlot === void 0 ? void 0 : headerActionsSlot.querySelector(Components.button))) {
        const element__actionMenu = headerActionsSlot.querySelector(Components.actionMenu);
        const element__button = headerActionsSlot.querySelector(Components.button);
        if (this.viewport === "small") {
          element__actionMenu.setAttribute("additional-menu-items", element__button.getAttribute("label"));
          element__button.style.display = "none";
        } else {
          element__actionMenu.removeAttribute("additional-menu-items");
          element__button.style.display = "block";
        }
      }
    }
    const footerActionsSlot = (_b = this.host) === null || _b === void 0 ? void 0 : _b.querySelector('[slot="bh-card__footer-actions"]');
    this.withFooterActionSlot = footerActionsSlot ? true : false;
    if (this.withFooterActionSlot) {
      if (footerActionsSlot.nodeName === Components.button.toUpperCase()) {
        this.viewport === "small" ? footerActionsSlot.setAttribute("fluid", "") : footerActionsSlot.removeAttribute("fluid");
      } else if (footerActionsSlot.nodeName === Components.buttonGroup.toUpperCase()) {
        const buttons = footerActionsSlot.querySelectorAll(Components.button);
        buttons.forEach((b2) => {
          this.viewport === "small" ? b2.setAttribute("fluid", "") : b2.removeAttribute("fluid");
        });
      }
    }
  }
  stopBubbling(event) {
    if (this.stopBubble) {
      event.cancelBubble = true;
      event.stopPropagation();
    }
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
    const headerClasses = ["bh-card--header"];
    const prefix = this.host.tagName.toLowerCase().replace(components.card.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
    const headingClasses = ["bh-card--heading"];
    headingClasses.push(this.viewport === "small" ? "typography--subtitle-small" : "typography--subtitle-medium");
    const subtextClasses = ["typography--body-small bh-card__subtext-copy"];
    subtextClasses.push(this.viewport === "small" ? "typography--body-small bh-card--subtext-small-view" : "typography--body-small bh-card__subtext-copy");
    if (this.isExpandable) {
      headerClasses.push("expandable");
    }
    if (this.tooltipText.length) {
      headerClasses.push("expandable");
    }
    const headerCtaProps = [];
    (_a = this._headerActions) === null || _a === void 0 ? void 0 : _a.slice(0, 3).forEach((prop) => {
      if (prop.label) headerCtaProps.push({
        label: prop.label,
        value: prop.key ? prop.key : prop.label
      });
    });
    return h(Host, {
      key: "4da1b763dbd8e2e2e792645ff04f56610df87f4a",
      class: `bh-card ${this.isFocusable ? "focusable" : ""}`,
      tabindex: this.isFocusable ? "0" : "-1"
    }, this.heading && h("div", {
      class: headerClasses.join(" "),
      onClick: () => {
        this.toggleOpen();
      }
    }, h("div", {
      class: "bh-card--header-left-container"
    }, this.icon && h(Components.icon, {
      class: "bh-card--icon",
      icon: this.icon,
      size: "small",
      color: "primary",
      onClick: (event) => {
        event.preventDefault();
      }
    }), h("span", {
      class: headingClasses.join(" ")
    }, this.tooltipText.length > 0 && h(Components.tooltip, {
      message: this.tooltipText
    }, this.heading), this.tooltipText.length === 0 && h("span", null, " ", this.heading)), this.subtext && h("span", {
      class: subtextClasses.join(" ")
    }, this.subtext)), (this.headerActions || this._actionMenu || this.isExpandable) && h("div", {
      class: "bh-card--header-right-container"
    }, this._actionMenu && !this._headerActions && h(Components.actionMenu, {
      menuItems: this._actionMenu.menuItems,
      menuWidth: this._actionMenu.menuWidth ? this._actionMenu.menuWidth : "medium",
      isMultiSelect: this._actionMenu.isMultiSelect,
      isSearchable: this._actionMenu.isSearchable,
      isUnselectable: this._actionMenu.isUnselectable,
      placeholder: this._actionMenu.placeholder,
      isSmall: true,
      iconOverride: this._actionMenu.iconOverride,
      onClick: (event) => {
        event.preventDefault();
        event.stopPropagation();
      }
    }), !this._actionMenu && this._headerActions && ((_b = this._headerActions) === null || _b === void 0 ? void 0 : _b.slice(0, 3).map((action) => h(Components.button, {
      isSmall: action.size === "medium" ? false : true,
      type: action.type,
      label: action.label,
      leftIcon: action.leftIcon,
      rightIcon: action.rightIcon,
      tooltipMessage: action.tooltipMessage,
      isDisabled: action.isDisabled,
      isLoading: action.isLoading,
      onClick: (event) => {
        this.stopBubbling(event);
        if (action.isDisabled) return;
        this.ctaClick.emit(action.key);
        this.bhEventCtaClick.emit(action.key ? action.key : "");
      }
    }))), this._actionMenu && this._headerActions && h("div", null, h("div", {
      class: "bh-card--header--action-wrapper bh-card--header--action-wrapper--desktop"
    }, (_c = this._headerActions) === null || _c === void 0 ? void 0 : _c.slice(0, 3).map((action) => h(Components.button, {
      class: "bh-card--header--action-wrapper--bh-button",
      isSmall: action.size === "medium" ? false : true,
      type: action.type,
      label: action.label,
      leftIcon: action.leftIcon,
      tooltipMessage: action.tooltipMessage,
      rightIcon: action.rightIcon,
      isDisabled: action.isDisabled,
      isLoading: action.isLoading,
      onClick: () => {
        if (action.isDisabled) return;
        this.ctaClick.emit(action.key);
        this.bhEventCtaClick.emit(action.key ? action.key : "");
      }
    })), h(Components.actionMenu, {
      style: {
        marginLeft: "8px"
      },
      menuItems: this._actionMenu.menuItems,
      menuWidth: this._actionMenu.menuWidth ? this._actionMenu.menuWidth : "medium",
      isMultiSelect: this._actionMenu.isMultiSelect,
      isSearchable: this._actionMenu.isSearchable,
      isUnselectable: this._actionMenu.isUnselectable,
      placeholder: this._actionMenu.placeholder,
      isSmall: true,
      iconOverride: this._actionMenu.iconOverride,
      onClick: (event) => {
        event.preventDefault();
        event.stopPropagation();
      }
    })), h("div", {
      class: "bh-card--header--action-wrapper bh-card--header--action-wrapper--mobile"
    }, (_d = this._headerActions) === null || _d === void 0 ? void 0 : _d.slice(0, 3).filter((action) => action.leftIcon).map((action) => h(Components.button, {
      class: "bh-card--header--action-wrapper--bh-button",
      isSmall: action.size === "medium" ? false : true,
      type: action.type,
      label: action.label,
      leftIcon: action.leftIcon,
      tooltipMessage: action.tooltipMessage,
      rightIcon: action.rightIcon,
      isDisabled: action.isDisabled,
      isLoading: action.isLoading,
      onClick: () => {
        if (action.isDisabled) return;
        this.ctaClick.emit(action.key);
        this.bhEventCtaClick.emit(action.key ? action.key : "");
      }
    })), h(Components.actionMenu, {
      menuItems: {
        itemGroups: headerCtaProps.length > 0 ? [{
          items: headerCtaProps,
          divider: false
        }, ...(_f = (_e = this._actionMenu) === null || _e === void 0 ? void 0 : _e.menuItems) === null || _f === void 0 ? void 0 : _f.itemGroups] : (_h = (_g = this._actionMenu) === null || _g === void 0 ? void 0 : _g.menuItems) === null || _h === void 0 ? void 0 : _h.itemGroups,
        ctas: (_k = (_j = this._actionMenu) === null || _j === void 0 ? void 0 : _j.menuItems) === null || _k === void 0 ? void 0 : _k.ctas
      },
      menuWidth: ((_l = this._actionMenu) === null || _l === void 0 ? void 0 : _l.menuWidth) ? (_m = this._actionMenu) === null || _m === void 0 ? void 0 : _m.menuWidth : "medium",
      isMultiSelect: (_o = this._actionMenu) === null || _o === void 0 ? void 0 : _o.isMultiSelect,
      isSearchable: (_p = this._actionMenu) === null || _p === void 0 ? void 0 : _p.isSearchable,
      isUnselectable: (_q = this._actionMenu) === null || _q === void 0 ? void 0 : _q.isUnselectable,
      placeholder: (_r = this._actionMenu) === null || _r === void 0 ? void 0 : _r.placeholder,
      isSmall: true,
      iconOverride: (_s = this._actionMenu) === null || _s === void 0 ? void 0 : _s.iconOverride,
      onClick: (event) => {
        event.preventDefault();
        event.stopPropagation();
      }
    }))), this.isExpandable && h(Components.button, {
      leftIcon: this.isOpen ? "expand_less" : "expand_more",
      isSmall: true,
      type: "ghost",
      onClick: (event) => {
        this.toggleOpen();
        event.stopPropagation();
        event.preventDefault();
      }
    })), this.withHeaderActionSlot && h("div", {
      class: "bh-card__header-actions__slot-container"
    }, h("slot", {
      name: "bh-card__header-actions"
    }))), h("div", {
      key: "41220ea87c28da8af2592497fd943221fe67ef64",
      class: `bh-card--content ${this.isExpandable ? "expandable" : ""} ${this.isOpen ? "open" : "close"} ${this.heading ? "with-header-actions" : ""} ${this.withFooterActionSlot || this.footerActions ? "with-footer-actions" : ""}`
    }, h("div", {
      key: "0ecba733d8231ed207134218d8687913b816fd44",
      class: `bh-card--contained-content ${this.border ? "border" : ""}`
    }, h("slot", {
      key: "68a5c411326cb994ff3663db9d67b49162960c77"
    }))), this._footerActions && h("div", {
      class: "bh-card--footer"
    }, this._footerActions.slice(0, 3).map((action) => h(Components.button, {
      isSmall: action.size === "medium" ? false : true,
      type: action.type,
      label: action.label,
      leftIcon: action.leftIcon,
      tooltipMessage: action.tooltipMessage,
      rightIcon: action.rightIcon,
      isDisabled: action.isDisabled,
      isLoading: action.isLoading,
      isFluid: !!(this.viewport === "small"),
      onClick: () => {
        if (action.isDisabled) return;
        this.ctaClick.emit(action.key);
        this.bhEventCtaClick.emit(action.key ? action.key : "");
      }
    }))), this.withFooterActionSlot && h("div", {
      class: "bh-card__footer-actions__slot-container"
    }, h("slot", {
      name: "bh-card__footer-actions"
    })));
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "headerActions": ["watchHeaderActions"],
      "footerActions": ["watchFooterActions"],
      "actionMenu": ["watchActionMenu"],
      "isOpen": ["watchIsOpen"]
    };
  }
};
BhCard.style = BhCardStyle0;
var bhCheckboxCss = `.bh-checkbox{display:flex;flex-direction:row;align-items:flex-start;-webkit-touch-callout:none;-moz-tap-highlight-color:transparent;-webkit-tap-highlight-color:transparent}.bh-checkbox__input-container{display:flex;align-items:flex-start;justify-content:center}.bh-checkbox__input{outline:none;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;-o-appearance:none;appearance:none;opacity:0;padding:0;margin:0;cursor:default;position:absolute}@media (hover: hover){.bh-checkbox__input-container{cursor:pointer}.bh-checkbox__input-container--disabled,.bh-checkbox__input--disabled{cursor:not-allowed}}.bh-checkbox__input-icon{min-width:var(--checkbox-width);height:var(--checkbox-height);border-radius:var(--effect-border-radius-light);border-style:solid;border-width:var(--effect-border-width-thick);border-color:var(--color-border-control-unselected);background-color:var(--color-fill-control-unselected);margin:3px 0;box-sizing:border-box;display:inline-block;pointer-events:none;background-position:center;background-repeat:no-repeat}.bh-checkbox__input:checked+.bh-checkbox__input-icon,.bh-checkbox__input:indeterminate+.bh-checkbox__input-icon{background-color:var(--color-fill-control-selected);border-color:var(--color-border-control-selected)}.bh-checkbox__input--error.bh-checkbox__input:checked+.bh-checkbox__input-icon,.bh-checkbox__input--error.bh-checkbox__input:indeterminate+.bh-checkbox__input-icon{background-color:var(--color-fill-control-error-supplemental);border-color:var(--color-border-control-error)}.bh-checkbox__input:checked+.bh-checkbox__input-icon{background-image:url("data:image/svg+xml; utf8, <svg width='14' height='10' viewbox='0 0 14 10' fill='none' xmlns='http://www.w3.org/2000/svg' version='1.1'><path d='M5 10L0 5.19231L1.4 3.84615L5 7.30769L12.6 0L14 1.34615L5 10Z' fill='white'/></svg>")}.bh-checkbox__input:indeterminate+.bh-checkbox__input-icon{background-image:url("data:image/svg+xml; utf8, <svg width='10' height='2'  viewbox='0 0 10 2' fill='none' xmlns='http://www.w3.org/2000/svg' version='1.1'><rect width='10' height='2' fill='white'/></svg>")}.bh-checkbox[indeterminate]:not([checked]) .bh-checkbox__input-icon{background-color:var(--color-fill-control-selected);border-color:var(--color-border-control-selected);background-image:url("data:image/svg+xml; utf8, <svg width='10' height='2'  viewbox='0 0 10 2' fill='none' xmlns='http://www.w3.org/2000/svg' version='1.1'><rect width='10' height='2' fill='white'/></svg>")}.bh-checkbox__input:focus+.bh-checkbox__input-icon{box-shadow:var(--effect-drop-shadow-focus-primary)}.bh-checkbox__input:focus:not(:focus-visible)+.bh-checkbox__input-icon{box-shadow:none}.bh-checkbox__input:focus.bh-checkbox__input--error+.bh-checkbox__input-icon{box-shadow:var(--effect-drop-shadow-focus-error)}.bh-checkbox__input:focus:not(:focus-visible).bh-checkbox__input--error+.bh-checkbox__input-icon{box-shadow:none}.bh-checkbox__input--error+.bh-checkbox__input-icon{background-color:var(--color-fill-control-error);border-color:var(--color-border-control-error)}.bh-checkbox__input--disabled+.bh-checkbox__input-icon{border-color:var(--color-base-transparent);background-color:var(--color-fill-control-disabled-supplemental)}.bh-checkbox__input--disabled.bh-checkbox__input:checked+.bh-checkbox__input-icon,.bh-checkbox__input--disabled.bh-checkbox__input:indeterminate+.bh-checkbox__input-icon{background-color:var(--color-fill-cta-disabled);border-color:var(--color-base-transparent)}.bh-checkbox__label{display:flex;align-items:center;min-height:var(--checkbox-container-height);color:var(--color-text-label-default)}.bh-checkbox__label--disabled{color:var(--color-text-label-disabled-default)}.bh-checkbox__label{margin-left:var(--spacing-margin-xsmall)}`;
var BhCheckboxStyle0 = bhCheckboxCss;
var BhCheckbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this.value = void 0;
    this.label = void 0;
    this.name = void 0;
    this.isChecked = false;
    this.isDisabled = false;
    this.isIndeterminate = false;
    this.isError = false;
    this.isUnfocusable = false;
    this.message = void 0;
  }
  render() {
    const prefix = this.host.tagName.toLowerCase().replace(components.checkbox.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
    const containerClasses = ["bh-checkbox__input-container"];
    if (this.isDisabled) {
      containerClasses.push("bh-checkbox__input-container--disabled");
    }
    const inputClasses = ["bh-checkbox__input"];
    if (this.isDisabled) {
      inputClasses.push("bh-checkbox__input--disabled");
    }
    if (this.isError) {
      inputClasses.push("bh-checkbox__input--error");
    }
    const labelClasses = ["bh-checkbox__label", "typography--body-medium"];
    if (this.isDisabled) {
      labelClasses.push("bh-checkbox__label--disabled");
    } else if (this.isError) {
      labelClasses.push("bh-checkbox__label--error");
    } else {
      labelClasses.push("typography--color-secondary");
    }
    return h(Host, {
      key: "df6ced18d2a81b4829d7f06e104897b42cd62124"
    }, h("div", {
      key: "bd074a45ff29e6709a05467119a2488177af82a9",
      class: "bh-checkbox"
    }, h("label", {
      key: "674ee3acda843fd2fac31fca2f839b39cbfb2526",
      class: containerClasses.join(" ")
    }, h("input", {
      key: "69d400f5750249d275f776cf0627ca6e87b80e04",
      tabIndex: this.isUnfocusable ? -1 : 0,
      class: inputClasses.join(" "),
      type: "checkbox",
      value: this.value,
      name: this.name,
      checked: this.isChecked,
      indeterminate: this.isIndeterminate,
      disabled: this.isDisabled,
      onChange: (event) => {
        this.isChecked = event.target.checked;
        this.bhEventChange.emit(this.isChecked);
      }
    }), h("span", {
      key: "fefc4b92d6c780549ee4b3eceb6b2bc674a127bd",
      class: "bh-checkbox__input-icon motion--fast"
    }), this.label && h("span", {
      class: labelClasses.join(" ")
    }, this.label))), this.message && h(Components.formMessage, {
      message: this.message,
      isError: this.isError,
      isDisabled: this.isDisabled
    }));
  }
  get host() {
    return getElement(this);
  }
};
BhCheckbox.style = BhCheckboxStyle0;
var bhChipCss = ".bh-chip{display:inline-flex;flex-shrink:0;justify-content:center;align-items:center;max-width:240px;border-radius:30px;padding:0 var(--spacing-padding-medium);box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.bh-chip.link{color:var(--color-text-label-default);text-decoration:none;cursor:pointer}.bh-chip.medium{height:var(--spacing-padding-large)}.bh-chip.small{height:24px;padding:0 var(--spacing-padding-small)}.bh-chip.dismissible{padding:0 var(--spacing-padding-xxsmall) 0 var(--spacing-padding-small);cursor:pointer}.bh-chip.small.dismissible{padding:0 var(--spacing-padding-xxsmall) 0 var(--spacing-padding-small)}.bh-chip__dismissible{margin-left:var(--spacing-padding-small)}.bh-chip.icon-container{padding:0 var(--spacing-padding-medium) 0 var(--spacing-padding-small)}.bh-chip.small.icon-container{padding:0 var(--spacing-padding-small) 0 var(--spacing-padding-xsmall)}.bh-chip__icon{margin-right:var(--spacing-padding-xxsmall)}.bh-chip__label{vertical-align:middle;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.bh-chip.neutral.solid:hover,.bh-chip.neutral.solid.selected:active{background-color:var(--color-fill-semantic-neutral-hover)}.bh-chip.neutral.solid:active,.bh-chip.neutral.solid.selected:hover{background-color:var(--color-fill-semantic-neutral-pressed)}.bh-chip.neutral.solid.selected{background-color:var(--color-fill-semantic-neutral-selected)}.bh-chip.neutral.selected>.bh-chip__label,.bh-chip.neutral.selected>.bh-chip__dismissible,.bh-chip.neutral.selected>.bh-chip__icon{color:var(--color-text-common-inverse-primary)}.bh-chip.neutral.solid,.bh-chip.neutral.solid.plain{background-color:var(--color-fill-semantic-neutral-default)}.bh-chip.neutral.outlined:hover,.bh-chip.neutral.outlined.selected:active{background-color:var(--color-fill-semantic-neutral-default)}.bh-chip.neutral.outlined:active,.bh-chip.neutral.outlined.selected:hover{background-color:var(--color-fill-semantic-neutral-hover)}.bh-chip.neutral.outlined.selected{background-color:var(--color-fill-semantic-neutral-selected)}.bh-chip.neutral.outlined{border:1px solid var(--color-border-semantic-neutral)}.bh-chip.neutral>.bh-chip__label,.bh-chip.neutral>.bh-chip__dismissible,.bh-chip.neutral>.bh-chip__icon{color:var(--color-text-label-default)}.bh-chip.success.solid:hover,.bh-chip.success.solid.selected:active{background-color:var(--color-fill-semantic-success-hover)}.bh-chip.success.solid:active,.bh-chip.success.solid.selected:hover{background-color:var(--color-fill-semantic-success-pressed)}.bh-chip.success.solid.selected{background-color:var(--color-fill-semantic-success-supplemental)}.bh-chip.success.selected>.bh-chip__label,.bh-chip.success.selected>.bh-chip__dismissible,.bh-chip.success.selected>.bh-chip__icon{color:var(--color-text-common-inverse-primary)}.bh-chip.success.outlined:hover,.bh-chip.success.outlined.selected:active{background-color:var(--color-fill-semantic-success-hover)}.bh-chip.success.outlined:active,.bh-chip.success.outlined.selected:hover{background-color:var(--color-fill-semantic-success-pressed)}.bh-chip.success.outlined.selected{background-color:var(--color-fill-semantic-success-supplemental)}.bh-chip.success>.bh-chip__label,.bh-chip.success>.bh-chip__dismissible,.bh-chip.success>.bh-chip__icon{color:var(--color-text-label-success)}.bh-chip.success.outlined{border:1px solid var(--color-border-semantic-success)}.bh-chip.success.outlined:hover,.bh-chip.success.outlined:active{background-color:var(--color-fill-semantic-success-status-background)}.bh-chip.success.solid,.bh-chip.success.solid.plain{background-color:var(--color-fill-semantic-success-status-background)}.bh-chip.error.solid:hover,.bh-chip.error.solid.selected:active{background-color:var(--color-fill-semantic-error-hover)}.bh-chip.error.solid:active,.bh-chip.error.solid.selected:hover{background-color:var(--color-fill-semantic-error-pressed)}.bh-chip.error.solid.selected{background-color:var(--color-fill-semantic-error-selected)}.bh-chip.error.selected>.bh-chip__label,.bh-chip.error.selected>.bh-chip__dismissible,.bh-chip.error.selected>.bh-chip__icon{color:var(--color-text-common-inverse-primary)}.bh-chip.error.solid,.bh-chip.error.solid.plain{background-color:var(--color-fill-semantic-error-status-background)}.bh-chip.error>.bh-chip__label,.bh-chip.error>.bh-chip__dismissible,.bh-chip.error>.bh-chip__icon{color:var(--color-text-label-critical)}.bh-chip.error.outlined{border:1px solid var(--color-border-semantic-error)}.bh-chip.error.outlined:hover,.bh-chip.error.outlined.selected:active{background-color:var(--color-fill-semantic-error-hover)}.bh-chip.error.outlined:active,.bh-chip.error.outlined.selected:hover{background-color:var(--color-fill-semantic-error-pressed)}.bh-chip.error.outlined.selected{background-color:var(--color-fill-semantic-error-selected)}.bh-chip.neutral.outlined.plain,.bh-chip.success.outlined.plain,.bh-chip.error.outlined.plain{background-color:transparent}.bh-chip.disabled>.bh-chip__icon,.bh-chip.disabled>.bh-chip__dismissible,.bh-chip.disabled>.bh-chip__label{color:var(--color-text-label-disabled-default)}.bh-chip.neutral.solid.disabled,.bh-chip.neutral.solid.disabled:hover,.bh-chip.success.solid.disabled,.bh-chip.success.solid.disabled:hover,.bh-chip.error.solid.disabled,.bh-chip.error.solid.disabled:hover,.bh-chip.neutral.outlined.disabled,.bh-chip.neutral.outlined.disabled:hover,.bh-chip.success.outlined.disabled,.bh-chip.success.outlined.disabled:hover,.bh-chip.error.outlined.disabled,.bh-chip.error.outlined.disabled:hover{cursor:not-allowed;background-color:var(--color-fill-control-disabled)}.bh-chip.neutral.outlined.disabled,.bh-chip.neutral.outlined.disabled:hover,.bh-chip.success.outlined.disabled,.bh-chip.success.outlined.disabled:hover,.bh-chip.error.outlined.disabled,.bh-chip.error.outlined.disabled:hover{cursor:not-allowed;border:none}.bh-chip.cursor{cursor:pointer}.bh-chip--dismissed{margin:0}.bh-chip--disable-event:active{pointer-events:none}.bh-chip--mobile-tap{-moz-tap-highlight-color:transparent;-webkit-tap-highlight-color:transparent}";
var BhChipStyle0 = bhChipCss;
var BhChip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventClose = createEvent(this, "bhEventClose", 7);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this.size = "medium";
    this.color = void 0;
    this.theme = "neutral";
    this.preSelect = false;
    this.selected = void 0;
    this.type = "solid";
    this.isDisabled = void 0;
    this.dismissible = void 0;
    this.dismissed = void 0;
    this.icon = void 0;
    this.link = void 0;
    this.label = void 0;
    this.selectedColor = void 0;
    this.selectedTheme = void 0;
    this.selectable = false;
    this.plain = void 0;
  }
  watchPreSelect() {
    this.selected = this.preSelect;
  }
  toggleSelected() {
    if (this.selectable) {
      this.selected = !this.selected;
      this.bhEventChange.emit(this.selected);
    }
  }
  componentWillRender() {
    if (this.preSelect) this.selected = true;
    if (this.selectedColor || this.selectedTheme) this.selectable = true;
    if (this.color) {
      console.warn('bh-chip: Prop "color" is deprecated and will not be supported in the future releases. Please use "theme" prop instead.');
      switch (this.color) {
        case "teal":
          this.theme = "success";
          break;
        case "rose":
          this.theme = "error";
          break;
        case "earth":
          this.theme = "neutral";
          break;
      }
    }
    if (this.selectedColor) {
      console.warn('bh-chip: Prop "selectedColor" is deprecated and will not be supported in the future releases. Please use "selectedTheme" prop instead.');
      switch (this.selectedColor) {
        case "teal":
          this.selectedTheme = "success";
          break;
        case "rose":
          this.selectedTheme = "error";
          break;
        case "earth":
          this.selectedTheme = "neutral";
          break;
      }
    }
  }
  componentDidLoad() {
    this.chipEl = this.chipElement.querySelector(".bh-chip");
  }
  removeChip(e) {
    e.preventDefault();
    this.chipEl.style.display = "none";
    this.dismissed = true;
    this.bhEventClose.emit();
  }
  render() {
    if (this.link) {
      return h(Host, {
        class: `${this.isDisabled ? "bh-chip--disable-event" : ""}`
      }, h("a", {
        ref: (el) => {
          this.chipEl = el;
        },
        href: `${this.link}`,
        target: "_blank",
        rel: "noopener noreferrer",
        class: `bh-chip motion--normal noselect
              ${this.size} 
			  ${this.theme === "success" || this.theme === "error" || this.theme === "neutral" ? this.theme : ""}
              ${this.type}
              ${this.link ? "link" : ""}
              ${this.icon ? "icon-container" : ""}
              ${this.isDisabled ? "disabled" : ""} 
          `
      }, this.icon && !this.dismissible && h("i", {
        class: `bh-chip__icon typography--icon-${this.size}`
      }, this.icon), h("span", {
        title: this.label,
        class: `bh-chip__label typography--body-${this.size}`
      }, this.label)));
    }
    return h(Host, {
      class: `${this.plain ? "bh-chip--mobile-tap" : ""} ${this.isDisabled ? "bh-chip--disable-event" : ""} ${this.dismissed ? "bh-chip--dismissed" : ""}`
    }, h("div", {
      ref: (el) => {
        this.chipEl = el;
      },
      class: `bh-chip motion--normal noselect
              ${this.size} 
              ${this.theme === "success" || this.theme === "error" || this.theme === "neutral" ? this.selectedTheme && this.selected ? this.selectedTheme : this.theme : ""}
              ${this.type} 
              ${this.plain ? "plain" : ""}
              ${this.selectable ? "cursor" : ""}
              ${this.dismissible ? "dismissible" : ""} 
              ${this.icon ? "icon-container" : ""}
              ${this.isDisabled ? "disabled" : ""}
              ${this.selected ? "selected" : ""}
        `
    }, this.icon && !this.dismissible && h("i", {
      class: `bh-chip__icon typography--icon-${this.size}`
    }, this.icon), h("span", {
      title: this.label,
      class: `bh-chip__label typography--body-${this.size}`
    }, this.label), this.dismissible && !this.icon && h("i", {
      onClick: (e) => this.removeChip(e),
      class: `bh-chip__dismissible typography--icon-${this.size}`
    }, "close")));
  }
  get chipElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "preSelect": ["watchPreSelect"]
    };
  }
};
BhChip.style = BhChipStyle0;
var bhContentCss = ":host{display:block}.bh-content{position:absolute;background-color:blue;border:0px;padding-top:32px;padding-bottom:127px;min-height:calc(\n		100vh - 231px\n	);background-color:var(--color-fill-common-primary)}.bh-content.no-padding{padding-top:0;padding-bottom:0;min-height:calc(100vh - 72px)}.bh-content--progress-bar{width:inherit;position:fixed;z-index:2000;top:72px}.bh-app-shell--primary .bh-content{left:var(--side-menu-closed-desktop-width);transition:left;transition-timing-function:var(--motion-easing-normal);transition-duration:var(--motion-duration-normal);transition-delay:var(--motion-duration-normal);width:calc(100% - 58px);}.bh-app-shell--primary .bh-content--side-menu-open{left:var(--side-menu-open-desktop-width);transition-delay:0s;width:calc(100% - 267px);}.bh-app-shell--secondary .bh-content{left:0px;width:100%}.bh-content .bh-footer{position:absolute;bottom:0}@supports (-webkit-touch-callout: none){.bh-content .bh-footer{}}@media only screen and (max-width: 1023px){.bh-app-shell--primary .bh-content,.bh-app-shell--secondary .bh-content{left:0px;width:100%;padding-bottom:0px}.bh-content .bh-footer{position:relative}.bh-app-shell--primary .bh-content--side-menu-open,.bh-app-shell--secondary{left:0px}.bh-app-shell--primary .bh-content__overlay{position:fixed;top:var(--header-tablet-height);z-index:2000;bottom:0px;left:0px;right:0px;background-color:black;opacity:0;visibility:hidden;pointer-events:initial;transition:width, opacity, visibility;transition-timing-function:var(--motion-easing-normal);transition-duration:var(--motion-duration-normal);transition-delay:0s}.bh-app-shell--primary .bh-content__overlay--activated{position:fixed;top:var(--header-tablet-height);z-index:2000;bottom:0px;left:0px;right:0px;background-color:black;opacity:0.6;visibility:visible;pointer-events:initial;transition:width, opacity, visibility;transition-timing-function:var(--motion-easing-normal);transition-duration:var(--motion-duration-normal);transition-delay:var(--motion-duration-normal)}}@media only screen and (max-width: 599px){.bh-app-shell--primary .bh-content,.bh-app-shell--secondary .bh-content{left:0px;transition:unset;padding-top:20px;padding-bottom:0px;min-height:calc(\n			100vh - 201px\n		);width:100%;}.bh-content .bh-footer{position:relative}}";
var BhContentStyle0 = bhContentCss;
var BhContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isSideMenuOpen = void 0;
    this.termsText = "Terms";
    this.termsHREF = "https://www.bakerhughes.com/terms";
    this.privacyText = "Privacy Notice";
    this.privacyHREF = "https://www.bakerhughes.com/privacy";
    this.cookiesText = "Cookies";
    this.cookiesHREF = "https://www.bakerhughes.com/cookies";
    this.progressBarMode = "manual";
    this.contentPush = false;
    this.progress = void 0;
    this.showProgressBar = false;
    this.theme = "light";
    this.showLogo = false;
    this.isNoPadding = false;
    this.backgroundColor = void 0;
    this._backgroundColor = void 0;
    this.breakpoint = void 0;
  }
  watchBackgroundColor() {
    this._backgroundColor = this.backgroundColor === "primary" || this.backgroundColor === "secondary" || this.backgroundColor === "tertiary" || this.backgroundColor === "brand" ? `var(--color-fill-common-${this.backgroundColor})` : this.backgroundColor;
  }
  handleResize() {
    if (window.innerWidth >= 1024) {
      this.breakpoint = "large";
    } else if (window.innerWidth >= 600 && window.innerWidth < 1024) {
      this.breakpoint = "medium";
    } else {
      this.breakpoint = "small";
    }
  }
  componentWillLoad() {
    if (window.innerWidth >= 1024) {
      this.breakpoint = "large";
    } else if (window.innerWidth >= 600 && window.innerWidth < 1024) {
      this.breakpoint = "medium";
    } else {
      this.breakpoint = "small";
    }
    this._backgroundColor = this.backgroundColor === "primary" || this.backgroundColor === "secondary" || this.backgroundColor === "tertiary" || this.backgroundColor === "brand" ? `var(--color-fill-common-${this.backgroundColor})` : this.backgroundColor;
  }
  render() {
    const prefix = this.host.tagName.toLowerCase().replace(components.content.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix);
    const contentClasses = ["bh-content"];
    if (this.isSideMenuOpen && this.contentPush) contentClasses.push("bh-content--side-menu-open");
    if (this.isNoPadding) contentClasses.push("no-padding");
    const overlayClasses = ["bh-content__overlay"];
    if (this.isSideMenuOpen) overlayClasses.push("bh-content__overlay--activated");
    return h(Host, {
      key: "2c6a645a9e1b01f060359d4faea488fbe7df3397",
      class: contentClasses.join(" "),
      style: {
        backgroundColor: this._backgroundColor
      }
    }, this.showProgressBar && h("div", {
      class: "bh-content--progress-bar"
    }, h(Components.progressBar, {
      mode: this.progressBarMode,
      size: "large",
      progress: this.progress
    })), h("slot", {
      key: "026ab19de482786ea5b3194d1fcf54fd6195bd4d"
    }), h("div", {
      key: "07acb94aebb2aeead1fa9756c2de4fd3c34d2879",
      class: overlayClasses.join(" ")
    }), h(Components.footer, {
      key: "970760616de23e17a3f14a78d1fc9a5bace375fb",
      termsText: this.termsText,
      termsHREF: this.termsHREF,
      privacyText: this.privacyText,
      privacyHREF: this.privacyHREF,
      cookiesText: this.cookiesText,
      cookiesHREF: this.cookiesHREF,
      theme: this.theme,
      "show-logo": this.showLogo,
      marginTop: this.breakpoint === "small" ? "xlarge" : "xxlarge"
    }));
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "backgroundColor": ["watchBackgroundColor"]
    };
  }
};
BhContent.style = BhContentStyle0;
var bhDateRangePickerCss = ".bh-date-range-picker__container{display:flex;align-items:center}.bh-date-range-picker__divider{margin:-8px var(--spacing-margin-xsmall) 0 var(--spacing-margin-xsmall)}";
var BhDateRangePickerStyle0 = bhDateRangePickerCss;
var BhDateRangePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this.getDaysArray = (start2, end2) => {
      for (var arr = [], dt = new Date(start2); dt <= end2; dt.setDate(dt.getDate() + 1)) {
        arr.push(new Date(dt));
      }
      return arr;
    };
    this.id = void 0;
    this.startDateLabel = "Start";
    this.isReset = false;
    this.reset = false;
    this.endDateLabel = "End";
    this.width = void 0;
    this.value = void 0;
    this.startValue = void 0;
    this.endValue = void 0;
    this.isReadOnly = false;
    this.isInvalid = false;
    this.isRequired = false;
    this.errorMessage = "Invalid date";
    this.disableHelper = false;
    this.disableUserInput = false;
    this.handleNegativeTimezone = false;
    this.viewport = void 0;
    this.dateFormat = "MM/DD/YYYY";
  }
  handleResize() {
    this.setViewport();
  }
  resetDate() {
    this.reset = this.isReset;
    const emptyDt = DateTime_1.fromISO("");
    this.endValue = emptyDt;
    this.startValue = emptyDt;
    this.value = [];
    setTimeout(() => {
      this.isReset = false;
    }, 300);
  }
  setViewport() {
    const bp = getBreakpoint();
    if (this.viewport !== bp) {
      this.viewport = bp;
    }
  }
  componentShouldUpdate() {
  }
  componentWillLoad() {
    this.setViewport();
  }
  componentDidLoad() {
    customElements.whenDefined(`vaadin-date-picker`).then(() => {
      const startDatePicker = this.el__container.querySelector(`.bh-date-range-picker__start-date-picker`);
      const endDatePicker = this.el__container.querySelector(`.bh-date-range-picker__end-date-picker`);
      if (this.value !== void 0) {
        const startDt = new Date(this.value[0]);
        this.startValue = DateTime_1.fromJSDate(startDt);
        const endDt = new Date(this.value[this.value.length - 1]);
        this.endValue = DateTime_1.fromJSDate(endDt);
      }
      startDatePicker.addEventListener("change", (e) => {
        const startDt = DateTime_1.fromISO(e.target.value);
        this.startValue = startDt;
        this.bhEventChange.emit({
          start: this.startValue,
          end: this.endValue
        });
      });
      endDatePicker.addEventListener("change", (e) => {
        const endDt = DateTime_1.fromISO(e.target.value);
        this.endValue = endDt;
        this.bhEventChange.emit({
          start: this.startValue,
          end: this.endValue
        });
        if (this.startValue && this.endValue) {
          let daylist = this.getDaysArray(this.startValue, this.endValue).map((v) => v.toISOString().slice(0, 13));
          this.value = daylist;
        }
      });
    });
  }
  render() {
    const width = this.viewport === "small" ? "fluid" : "small";
    const prefix = this.host.tagName.toLowerCase().replace(components.dateRangePicker.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
    return h(Host, {
      key: "445f72a84576e65cf3d9263ddabaa7f774df6455"
    }, h("div", {
      key: "3aeadae3edd7c1d07ff2f19fb7837b503b69c850",
      ref: (el) => {
        this.el__container = el;
      },
      class: "bh-date-range-picker__container"
    }, h(Components.datePicker, {
      key: "7dba7cca4d9b357a40254c0f211497fcce8a731f",
      class: "bh-date-range-picker__start-date-picker",
      value: this.value && this.value[0],
      width,
      label: this.startDateLabel,
      isReadOnly: this.isReadOnly,
      dateFormat: this.dateFormat,
      isInvalid: this.isInvalid,
      handleNegativeTimezone: this.handleNegativeTimezone,
      isRequired: this.isRequired,
      errorMessage: this.errorMessage,
      id: this.id,
      reset: this.reset,
      "disable-helper": this.disableHelper,
      "disable-user-input": this.disableUserInput
    }), h("p", {
      key: "88dae98ab3ba32db35f132b43485c581bdef4fad",
      class: "typography--body-medium bh-date-range-picker__divider"
    }, "-"), h(Components.datePicker, {
      key: "87c7a449be855dd53e7e9ae42c02cfe48888c12f",
      ref: (el) => {
        this.el__endpicker = el;
      },
      class: "bh-date-range-picker__end-date-picker",
      value: this.value && this.value[this.value.length - 1],
      width,
      label: this.endDateLabel,
      dateFormat: this.dateFormat,
      minValue: this.startValue,
      isReadOnly: this.isReadOnly,
      isInvalid: this.isInvalid,
      handleNegativeTimezone: this.handleNegativeTimezone,
      isRequired: this.isRequired,
      errorMessage: this.errorMessage,
      id: this.id,
      reset: this.reset,
      "disable-helper": this.disableHelper,
      "disable-user-input": this.disableUserInput
    })));
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "isReset": ["resetDate"]
    };
  }
};
BhDateRangePicker.style = BhDateRangePickerStyle0;
var bhDonutChartCss = ".bh-donut-chart{display:block}.bh-donut-chart.horizontal{display:flex}.bh-donut-chart.horizontal .bh-donut-chart-wrapper{}.bh-donut-chart-wrapper{position:relative}.bh-donut-chart-wrapper.horizontal{display:flex;justify-content:center;width:50%}.bh-donut-chart--legend{list-style-type:none;margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:0;padding-inline-start:0;display:flex;flex-wrap:wrap;justify-content:center;margin-top:calc(var(--spacing-margin-medium) - var(--spacing-margin-xxsmall))}.bh-donut-chart--legend-li{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-top:var(--spacing-margin-xxsmall)}.bh-donut-chart--legend-li.hidden{opacity:0.2}.bh-donut-chart--legend-item{display:flex;align-items:center;}.bh-donut-chart--legend-item--dot{width:8px;height:8px;border-radius:50%;display:block;margin-right:var(--spacing-margin-xsmall)}.bh-donut-chart--horizontal-layout-legend-group{width:50%;display:flex;justify-content:center}.bh-donut-chart--horizontal-layout-legend-group .bh-donut-chart--legend{display:table;margin-top:0}.bh-donut-chart--vertical-layout-legend-group .bh-donut-chart--legend{display:table;margin:var(--spacing-margin-medium) auto 0}.bh-donut-chart--vertical-layout-legend-group .bh-donut-chart--legend-li{margin-right:0}.bh-donut-chart--label{position:absolute;top:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.bh-donut-chart--label--wrapper{text-align:center}.bh-donut-chart--label--wrapper.with-subheader{margin-top:12px}.bh-donut-chart--label--copy{display:block}.bh-donut-chart--tooltip-title{margin-bottom:var(--spacing-margin-xxsmall)}";
var BhDonutChartStyle0 = bhDonutChartCss;
var BhDonutChart = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this.defaultPalette = [DesignTokens.colorFill.dataVizDefault_1, DesignTokens.colorFill.dataVizDefault_2, DesignTokens.colorFill.dataVizDefault_3, DesignTokens.colorFill.dataVizDefault_4, DesignTokens.colorFill.dataVizDefault_5, DesignTokens.colorFill.dataVizDefault_6, DesignTokens.colorFill.dataVizDefault_7, DesignTokens.colorFill.dataVizDefault_8];
    this.comparisonPalette = [DesignTokens.colorFill.dataVizComparisonPrimary, DesignTokens.colorFill.dataVizComparisonSecondary];
    this.data = void 0;
    this._data = void 0;
    this.option = void 0;
    this._option = void 0;
    this.height = 400;
    this.label = void 0;
    this._label = void 0;
    this.legendLayout = "vertical";
    this.chartOptionOverride = void 0;
    this._chartOptionOverride = void 0;
    this._chartOption = void 0;
    this.theme = void 0;
    this._theme = void 0;
    this.disabledDatasetIndex = [];
    this.isMaxedOut = false;
    this.toMax = 0;
    this.dataToRender = [];
  }
  watchData() {
    var _a;
    this._data = typeof this.data === "string" ? JSON.parse(this.data) : this.data;
    this.originalDataStr = JSON.stringify((_a = this._data) === null || _a === void 0 ? void 0 : _a.datasets[0].data);
    this.componentDidLoad();
  }
  watchOption() {
    this._option = typeof this.option === "string" ? JSON.parse(this.option) : this.option;
    this.componentDidLoad();
  }
  watchLabel() {
    this._label = typeof this.label === "string" ? JSON.parse(this.label) : this.label;
    this.componentDidLoad();
  }
  watchChartOptionOverride() {
    this._chartOptionOverride = typeof this.chartOptionOverride === "string" ? JSON.parse(this.chartOptionOverride) : this.chartOptionOverride;
    this.componentDidLoad();
  }
  watchTheme() {
    this._theme = typeof this.theme === "string" ? JSON.parse(this.theme) : this.theme;
  }
  componentWillLoad() {
    var _a;
    this._chartOptionOverride = typeof this.chartOptionOverride === "string" ? JSON.parse(this.chartOptionOverride) : this.chartOptionOverride;
    this._data = typeof this.data === "string" ? JSON.parse(this.data) : this.data;
    this._option = typeof this.option === "string" ? JSON.parse(this.option) : this.option;
    this._label = typeof this.label === "string" ? JSON.parse(this.label) : this.label;
    this._theme = typeof this.theme === "string" ? JSON.parse(this.theme) : this.theme;
    this.originalDataStr = JSON.stringify((_a = this._data) === null || _a === void 0 ? void 0 : _a.datasets[0].data);
  }
  componentDidLoad() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
    const that = this;
    const ctx = (_a = this.element__canvas) === null || _a === void 0 ? void 0 : _a.getContext("2d");
    const _DesignTokens = this.theme || DesignTokens;
    if (this.theme) {
      this.defaultPalette = [_DesignTokens.colorFill.dataVizDefault_1, _DesignTokens.colorFill.dataVizDefault_2, _DesignTokens.colorFill.dataVizDefault_3, _DesignTokens.colorFill.dataVizDefault_4, _DesignTokens.colorFill.dataVizDefault_5, _DesignTokens.colorFill.dataVizDefault_6, _DesignTokens.colorFill.dataVizDefault_7, _DesignTokens.colorFill.dataVizDefault_8];
      this.comparisonPalette = [_DesignTokens.colorFill.dataVizComparisonPrimary, _DesignTokens.colorFill.dataVizComparisonSecondary];
    }
    Chart.defaults.DoughnutWithDecoration = Chart.defaults.doughnut;
    Chart.controllers.DoughnutWithDecoration = Chart.controllers.doughnut.extend({
      draw: function(ease) {
        const ratio = that._chart.canvas.width / that._chart.canvas.height >= 1 ? 1 : that._chart.canvas.width / that._chart.canvas.height;
        const thickness = (140 - 114) / 140 * that.height / 2;
        ctx.save();
        ctx.beginPath();
        ctx.arc(that._chart.width / 2, that.height / 2, ratio * that.height / 2 - ratio * (thickness / 2) - 1, 0, 2 * Math.PI);
        ctx.lineWidth = thickness;
        ctx.strokeStyle = _DesignTokens.colors.base.gray_050;
        ctx.stroke();
        ctx.restore();
        Chart.controllers.doughnut.prototype.draw.call(this, ease);
      }
    });
    const getDefaultDonutColor = () => {
      var _a2, _b2;
      if (((_a2 = that._option) === null || _a2 === void 0 ? void 0 : _a2.mode) === "comparison") {
        return that.comparisonPalette;
      } else if (this.isMaxedOut) {
        return that.defaultPalette.slice(0, (_b2 = this._data) === null || _b2 === void 0 ? void 0 : _b2.datasets[0].data.length);
      } else {
        return [...that.defaultPalette.slice(0, this._data.datasets[0].data.length), _DesignTokens.colors.base.gray_050];
      }
    };
    this.isMaxedOut = !(((_c = (_b = this._data) === null || _b === void 0 ? void 0 : _b.datasets[0]) === null || _c === void 0 ? void 0 : _c.maxValue) && ((_e = (_d = this._data) === null || _d === void 0 ? void 0 : _d.datasets[0]) === null || _e === void 0 ? void 0 : _e.maxValue) > ((_f = this._data) === null || _f === void 0 ? void 0 : _f.datasets[0].data.reduce((a, c) => {
      return a + c;
    }, 0)));
    this.toMax = ((_h = (_g = this._data) === null || _g === void 0 ? void 0 : _g.datasets[0]) === null || _h === void 0 ? void 0 : _h.maxValue) - ((_j = this._data) === null || _j === void 0 ? void 0 : _j.datasets[0].data.reduce((a, c) => {
      return a + c;
    }, 0));
    this._chartOption = this.chartOptionOverride ? this.chartOptionOverride : {
      type: "DoughnutWithDecoration",
      data: {
        backgroundColor: _DesignTokens.colorFill.commonSecondary,
        labels: (_k = this._data) === null || _k === void 0 ? void 0 : _k.labels,
        datasets: [{
          data: this.isMaxedOut ? (_m = (_l = this._data) === null || _l === void 0 ? void 0 : _l.datasets[0]) === null || _m === void 0 ? void 0 : _m.data : [...(_p = (_o = this._data) === null || _o === void 0 ? void 0 : _o.datasets[0]) === null || _p === void 0 ? void 0 : _p.data, this.toMax],
          lineTension: 0.05,
          borderWidth: 0,
          borderColor: _DesignTokens.colors.base.white_100,
          hoverBorderColor: _DesignTokens.colors.base.white_100,
          hoverBorderWidth: 1,
          backgroundColor: ((_q = this._option) === null || _q === void 0 ? void 0 : _q.styleOverride) && ((_s = (_r = this._option) === null || _r === void 0 ? void 0 : _r.styleOverride[0]) === null || _s === void 0 ? void 0 : _s.color) ? this._option.styleOverride.map((style) => style.color) : getDefaultDonutColor(),
          hoverBackgroundColor: ((_t = this._option) === null || _t === void 0 ? void 0 : _t.styleOverride) && ((_v = (_u = this._option) === null || _u === void 0 ? void 0 : _u.styleOverride[0]) === null || _v === void 0 ? void 0 : _v.color) ? this._option.styleOverride.map((style) => style.color) : getDefaultDonutColor(),
          pointRadius: 0,
          pointHoverRadius: 4,
          pointHitRadius: 12
        }]
      },
      options: {
        cutoutPercentage: 100 * (114 / 140),
        responsive: true,
        tooltips: {
          enabled: false,
          intersect: false,
          mode: "nearest",
          caretSize: 0,
          caretPadding: parseInt(_DesignTokens.spacing.paddingXsmall.replace("px", "")),
          titleFontFamily: _DesignTokens.fontFamily.bodySmall,
          bodyFontFamily: _DesignTokens.fontFamily.bodySmall,
          titleSpacing: parseInt(_DesignTokens.spacing.paddingXxsmall.replace("px", "")),
          bodySpacing: 0,
          cornerRadius: _DesignTokens.effectBorderRadius.medium.replace("px", ""),
          xPadding: parseInt(_DesignTokens.spacing.paddingXsmall.replace("px", "")),
          yPadding: parseInt(_DesignTokens.spacing.paddingXxsmall.replace("px", "")),
          custom: ((_x = (_w = this._option) === null || _w === void 0 ? void 0 : _w.tooltipSetting) === null || _x === void 0 ? void 0 : _x.isDisabled) ? () => {
          } : customChartTooltip
        },
        maintainAspectRatio: false,
        legend: {
          position: "bottom",
          display: false
        },
        legendCallback: customChartLegend
      }
    };
    function customChartLegend(chart) {
      const renderLabels = (chart2) => {
        const {
          data
        } = chart2;
        return `${data.datasets.map((dataset) => `${data.labels.reduce((acc, label, index) => {
          return acc + `<li class="bh-donut-chart--legend-li  bh-donut-chart--legend-item">
                <span class="bh-donut-chart--legend-item--dot" style="background-color: ${dataset.backgroundColor[index]}"></span>
                <span class="typography--label-small typography--color-primary">${label}</span>
              </li>`;
        }, "")}`)}`;
      };
      return `<ul class="bh-donut-chart--legend">
          ${renderLabels(chart)}
        </ul>`;
    }
    function customChartTooltip(tooltipModel) {
      var _a2;
      var tooltipEl = that.element__tooltip;
      if (tooltipModel.opacity === 0) {
        tooltipEl.style.opacity = "0";
        return;
      }
      tooltipEl.classList.remove("above", "below", "no-transform");
      if (tooltipModel.yAlign) {
        tooltipEl.classList.add(tooltipModel.yAlign);
      } else {
        tooltipEl.classList.add("no-transform");
      }
      function getBody(bodyItem) {
        return bodyItem.lines;
      }
      if (tooltipModel.body) {
        var titleLines = tooltipModel.title || [];
        var bodyLines = tooltipModel.body.map(getBody);
        var innerHtml = "<thead>";
        if (!that.disabledDatasetIndex.includes(tooltipModel.dataPoints[0].index)) {
          titleLines.forEach(function(title) {
            innerHtml += "<tr><th>" + title + "</th></tr>";
          });
          innerHtml += "</thead>";
          if ((_a2 = that._option.tooltipSetting) === null || _a2 === void 0 ? void 0 : _a2.title) {
            innerHtml += `<span class="typography--body-small-semi-bold bh-donut-chart--tooltip-title">${that._option.tooltipSetting.title}</span>`;
          }
          innerHtml += "<tbody>";
          bodyLines.forEach(function(body, i) {
            var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
            var colors = tooltipModel.labelColors[i];
            var style = "background:" + colors.backgroundColor;
            style += "; border-color:" + colors.backgroundColor;
            style += "; border-width: " + _DesignTokens.effectBorderWidth.thick;
            var decorator = '<div style="background-color: ' + colors.backgroundColor + `; width: ${_DesignTokens.spacing.marginXsmall}; height: ${_DesignTokens.spacing.marginXsmall}; border-radius: 50%; margin-right: ${_DesignTokens.spacing.marginXsmall};"></div>`;
            var span = '<span style="' + style + '"></span>';
            const data = `${body[0].slice(0, body[0].indexOf(":") + 2)}${((_b2 = (_a3 = that._option.tooltipSetting) === null || _a3 === void 0 ? void 0 : _a3.unit) === null || _b2 === void 0 ? void 0 : _b2.prefix) ? (_d2 = (_c2 = that._option.tooltipSetting) === null || _c2 === void 0 ? void 0 : _c2.unit) === null || _d2 === void 0 ? void 0 : _d2.prefix : ""}${that.getNumberToDisplay(parseFloat(body[0].slice(body[0].indexOf(": ") + 2)))}${((_f2 = (_e2 = that._option.tooltipSetting) === null || _e2 === void 0 ? void 0 : _e2.unit) === null || _f2 === void 0 ? void 0 : _f2.suffix) ? (_h2 = (_g2 = that._option.tooltipSetting) === null || _g2 === void 0 ? void 0 : _g2.unit) === null || _h2 === void 0 ? void 0 : _h2.suffix : ""}`;
            innerHtml += '<tr><td><div style="display: flex; align-items: center;">' + decorator + span + data + "</div></td></tr>";
          });
          innerHtml += "</tbody>";
          var tableRoot = tooltipEl.querySelector("table");
          tableRoot.innerHTML = innerHtml;
        }
      }
      var position = this._chart.canvas.getBoundingClientRect();
      tooltipEl.style.opacity = tooltipModel.dataPoints[0].index < that._data.datasets[0].data.length ? "1" : "0";
      tooltipEl.style.textAlign = "left";
      tooltipEl.style.position = "absolute";
      const canvasWidth = that.legendLayout === "horizontal" ? position.width * 2 : position.width;
      if (tooltipModel.caretX + tooltipModel.width > canvasWidth * 0.75) {
        const leftPos = tooltipModel.caretX - tooltipModel.width * 0.75 - parseInt(_DesignTokens.spacing.marginXsmall.replace("px", ""));
        tooltipEl.style.left = (leftPos < 0 ? 0 : leftPos) + "px";
      } else {
        const leftPos = tooltipModel.caretX + parseInt(_DesignTokens.spacing.marginXsmall.replace("px", ""));
        tooltipEl.style.left = (leftPos > position.width ? position.width : leftPos) + "px";
      }
      if (that._data.datasets[0].data.length === that.disabledDatasetIndex.length) {
        tooltipEl.style.left = "-9999px";
      }
      tooltipEl.style.top = tooltipModel.caretY + tooltipModel.height + "px";
      tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
      tooltipEl.style.fontSize = tooltipModel.bodyFontSize + "px";
      tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
      tooltipEl.style.padding = tooltipModel.yPadding + "px " + tooltipModel.xPadding + "px";
      tooltipEl.style.pointerEvents = "none";
      tooltipEl.style.transition = `opacity ${_DesignTokens.motionDuration.normal} ${_DesignTokens.motionEasing.normal}`;
      tooltipEl.style.color = tooltipModel.dataPoints[0].index < that._data.datasets[0].data.length ? _DesignTokens.colorText.commonInversePrimary : _DesignTokens.colorFill.controlUnselected;
      tooltipEl.style.borderRadius = _DesignTokens.effectBorderRadius.medium;
      tooltipEl.style.backgroundColor = tooltipModel.dataPoints[0].index < that._data.datasets[0].data.length ? _DesignTokens.colorFill.commonOverlay : _DesignTokens.colorFill.controlUnselected;
      tooltipEl.style.zIndex = "30";
    }
    if (ctx) {
      this._chart = new Chart(ctx, this._chartOption);
    }
    if (!((_y = this._option) === null || _y === void 0 ? void 0 : _y.disableLegend)) {
      if (this._chart) {
        this.element__legends.innerHTML = this._chart.generateLegend();
        this.bindLegendClickEvent();
      }
    }
  }
  bindLegendClickEvent() {
    const legendItems = this.element__legends.querySelectorAll(".bh-donut-chart--legend-li");
    legendItems.forEach((item, i) => {
      item.addEventListener("click", () => {
        var _a, _b;
        this.disabledDatasetIndex = this.disabledDatasetIndex.find((idx) => idx === i) > -1 ? this.disabledDatasetIndex.filter((idx) => idx !== i) : [...this.disabledDatasetIndex, i];
        this.disabledDatasetIndex.find((idx) => idx === i) > -1 ? legendItems[i].classList.add("hidden") : legendItems[i].classList.remove("hidden");
        const baseHexColor = getChartColor(this._option.mode, i);
        const defaultColor = this.disabledDatasetIndex.find((idx) => idx === i) > -1 ? `${baseHexColor}` : baseHexColor;
        if ((_a = this._option) === null || _a === void 0 ? void 0 : _a.styleOverride) {
          const isStyleOverride = (_b = this._option) === null || _b === void 0 ? void 0 : _b.styleOverride[0].color;
          const overrideColor = this.disabledDatasetIndex.find((idx) => idx === i) > -1 ? `${this._option.styleOverride[i].color}` : this._option.styleOverride[i].color;
          this._chart.data.datasets[0].backgroundColor[i] = isStyleOverride ? overrideColor : defaultColor;
          this._chart.data.datasets[0].hoverBackgroundColor[i] = isStyleOverride ? overrideColor : defaultColor;
        }
        this._chart.data.datasets[0].data[i] = this.disabledDatasetIndex.find((idx) => idx === i) > -1 ? 0 : JSON.parse(this.originalDataStr)[i];
        this._chart.update();
        this.bhEventChange.emit({
          disabledDatasetIndex: this.disabledDatasetIndex
        });
      });
    });
  }
  // TODO: Consider refactoring it into the util
  getNumberToDisplay(raw) {
    var _a, _b;
    if (!raw) return "0";
    if ((_b = (_a = this._label) === null || _a === void 0 ? void 0 : _a.unit) === null || _b === void 0 ? void 0 : _b.isShortScale) {
      if (raw > 1e12) {
        return `${(raw / 1e12).toFixed(2) * 100 / 100}t`;
      } else if (raw > 1e9) {
        return `${(raw / 1e9).toFixed(2) * 100 / 100}b`;
      } else if (raw > 1e6) {
        return `${(raw / 1e6).toFixed(2) * 100 / 100}m`;
      } else if (raw > 1e3) {
        return `${(raw / 1e3).toFixed(2) * 100 / 100}k`;
      } else {
        return `${raw.toFixed(2) * 100 / 100}`;
      }
    } else {
      return `${raw.toFixed(2) * 100 / 100}`;
    }
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
    const sum = this.getNumberToDisplay(((_b = (_a = this._data) === null || _a === void 0 ? void 0 : _a.datasets[0]) === null || _b === void 0 ? void 0 : _b.maxValue) && !this.isMaxedOut ? ((_f = (_e = (_d = (_c = this._chart) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.datasets[0]) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.reduce((a, c) => {
      return a + c;
    }, 0)) - this.toMax : (_k = (_j = (_h = (_g = this._chart) === null || _g === void 0 ? void 0 : _g.data) === null || _h === void 0 ? void 0 : _h.datasets[0]) === null || _j === void 0 ? void 0 : _j.data) === null || _k === void 0 ? void 0 : _k.reduce((a, c) => {
      return a + c;
    }, 0));
    return h(Host, {
      class: `bh-donut-chart ${this.legendLayout === "horizontal" ? "horizontal" : ""}`
    }, h("div", {
      class: `bh-donut-chart-wrapper ${this.legendLayout === "horizontal" ? "horizontal" : ""}`,
      style: {
        height: `${this.height}px`
      }
    }, h("canvas", {
      width: this.legendLayout === "horizontal" ? this.height : "",
      height: this.legendLayout === "horizontal" ? this.height : "",
      ref: (el) => {
        this.element__canvas = el;
      }
    }), h("div", {
      class: "bh-donut-chart--label"
    }, h("div", {
      class: `bh-donut-chart--label--wrapper ${((_l = this._label) === null || _l === void 0 ? void 0 : _l.subheader) ? "with-subheader" : ""}`
    }, h("span", {
      class: "bh-donut-chart--label--copy typography--title-small typography--color-primary"
    }, ((_o = (_m = this._label) === null || _m === void 0 ? void 0 : _m.unit) === null || _o === void 0 ? void 0 : _o.prefix) ? (_q = (_p = this._label) === null || _p === void 0 ? void 0 : _p.unit) === null || _q === void 0 ? void 0 : _q.prefix : "", ((_r = this._label) === null || _r === void 0 ? void 0 : _r.header) ? this._label.header : sum, ((_t = (_s = this._label) === null || _s === void 0 ? void 0 : _s.unit) === null || _t === void 0 ? void 0 : _t.suffix) ? (_v = (_u = this._label) === null || _u === void 0 ? void 0 : _u.unit) === null || _v === void 0 ? void 0 : _v.suffix : ""), ((_w = this._label) === null || _w === void 0 ? void 0 : _w.subheader) && h("span", {
      class: "bh-donut-chart--label--copy typography--label-small typography--color-secondary"
    }, this._label.subheader)))), h("div", {
      class: this.legendLayout === "horizontal" ? "bh-donut-chart--horizontal-layout-legend-group" : "bh-donut-chart--vertical-layout-legend-group",
      ref: (el) => {
        this.element__legends = el;
      }
    }), h("div", {
      ref: (el) => {
        this.element__tooltip = el;
      }
    }, h("table", {
      class: "bink-calc__tooltip"
    })));
  }
  static get watchers() {
    return {
      "data": ["watchData"],
      "option": ["watchOption"],
      "label": ["watchLabel"],
      "chartOptionOverride": ["watchChartOptionOverride"],
      "theme": ["watchTheme"]
    };
  }
};
BhDonutChart.style = BhDonutChartStyle0;
var bhDropdownCss = ".bh-dropdown{border:none;padding:var(--spacing-padding-none);margin:var(--spacing-margin-none);font:inherit;cursor:default;outline:none;-webkit-appearance:none;-moz-appearance:none;-o-appearance:none;appearance:none;display:flex;flex-direction:column;align-items:flex-start;position:relative;width:280px}.bh-dropdown.small{width:140px}.bh-dropdown.fluid,.bh-dropdown.fluid.small{width:100%}input:not([type='range']){overflow:hidden}input[type='text']{-webkit-appearance:none;-moz-appearance:none;appearance:none}input::placeholder{color:var(--color-text-label-placeholder)}input::-webkit-input-placeholder{color:var(--color-text-label-placeholder)}input::-moz-placeholder{color:var(--color-text-label-placeholder)}input:-ms-input-placeholder{color:var(--color-text-label-placeholder)}input:-moz-placeholder{color:var(--color-text-label-placeholder)}input::-moz-placeholder{opacity:1}.bh-dropdown__container{display:flex;flex-direction:row;width:100%}.bh-dropdown__label{color:var(--color-text-common-primary)}.bh-dropdown__required:after{color:var(--color-text-label-critical);content:' *'}.bh-dropdown__label--disabled{color:var(--color-text-label-disabled-default)}.bh-dropdown__icon{padding-left:var(--spacing-padding-small);align-self:center;color:var(--color-text-common-secondary);position:absolute;right:var(--spacing-padding-small);pointer-events:none;}.bh-dropdown__icon.focused{color:var(--color-text-common-primary)}.bh-dropdown__icon--error{color:var(--color-text-label-error)}.bh-dropdown__icon--disabled{color:var(--color-text-label-disabled-default)}.bh-dropdown__input{width:224px;height:18px;padding:var(--spacing-padding-small)\n    calc(30px + var(--spacing-padding-small)) var(--spacing-padding-small)\n    var(--spacing-padding-small);margin-top:var(--spacing-margin-xxsmall);margin-bottom:var(--spacing-margin-xxsmall);border-radius:var(--effect-border-radius-medium);border-style:solid;border-width:var(--effect-border-width-regular);border-color:var(--color-border-form-default);background-color:var(--color-fill-common-secondary);color:transparent;cursor:pointer;-moz-tap-highlight-color:transparent;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.bh-dropdown__value{position:absolute;width:85%;margin:var(--spacing-margin-xxsmall) 0;padding:var(--spacing-padding-small)\n    calc(30px + var(--spacing-padding-small)) var(--spacing-padding-small)\n    var(--spacing-padding-small);pointer-events:none;overflow:hidden;display:flex;align-items:center;gap:6px}.bh-dropdown__value.small{width:inherit;padding:var(--spacing-padding-xsmall)\n    calc(var(--spacing-padding-small) + 30px) var(--spacing-padding-xsmall)\n    var(--spacing-padding-small)}.bh-dropdown__value.placeholder{color:var(--color-text-label-placeholder)}.bh-dropdown__value.disabled{color:var(--color-text-label-disabled-default)}.bh-dropdown__value.error{color:var(--color-text-label-error)}.bh-dropdown__selected-icon{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:18px;height:18px;line-height:18px}.bh-dropdown__selected-icon i{display:inline-flex;align-items:center;justify-content:center}.bh-dropdown__selected-icon bh-icon{display:inline-flex;align-items:center;justify-content:center}.bh-dropdown__value-text{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.bh-dropdown__input::selection{background:transparent}.bh-dropdown__input::-moz-selection{background:transparent}.bh-dropdown__input::placeholder{color:transparent}.bh-dropdown__input.bh-dropdown__input-small{width:84px;padding:var(--spacing-padding-xsmall)\n    calc(var(--spacing-padding-small) + 30px) var(--spacing-padding-xsmall)\n    var(--spacing-padding-small)}.bh-dropdown__input--fluid.bh-dropdown__input-small{width:100%}.bh-dropdown__input:hover{border-color:var(--color-border-form-hover);cursor:pointer}.bh-dropdown__input:focus{outline:none;border-color:var(--color-border-form-focused);box-shadow:var(--effect-drop-shadow-focus-primary)}.bh-dropdown__input:focus:not(:focus-visible){outline:none;border-color:none;box-shadow:none}.bh-dropdown__input--fluid{width:100%}.bh-dropdown__input--disabled,.bh-dropdown__input--disabled:hover{border-color:var(--color-text-label-disabled-default);background-color:var(--color-fill-form-disabled);cursor:not-allowed}.bh-dropdown__input--error,.bh-dropdown:invalid{background-color:var(--color-fill-form-error);border-color:var(--color-border-form-error)}.bh-dropdown__input--error::placeholder{border-color:var(--color-border-form-error);color:transparent}.bh-dropdown__input--error:hover{border-color:var(--color-border-form-error-hover)}.bh-dropdown__input--error:focus{box-shadow:var(--effect-drop-shadow-focus-error);border-color:var(--color-border-form-error)}.bh-dropdown__input--error:focus:not(:focus-visible){outline:none;border-color:none;box-shadow:none}.bh-dropdown__menu-container{position:absolute;z-index:1000;top:52px;width:100%}.bh-dropdown__menu-container.fit-content{display:table}.bh-dropdown__menu-container.small{top:44px;width:140px}.bh-dropdown__menu-container.with-label.small{top:62px}.bh-dropdown__menu-container.with-label{top:70px}.bh-dropdown__menu-container.flipped{top:unset;bottom:52px}.bh-dropdown__menu-container.flipped.with-message{top:unset;bottom:70px}.bh-dropdown__menu-container.small.flipped{top:unset;bottom:44px}.bh-dropdown__menu-container.small.flipped.with-message{top:unset;bottom:62px}.bh-dropdown__menu-container.hidden{display:none}.bh-dropdown_Input_open{outline:none;border-color:var(--color-border-form-focused);box-shadow:var(--effect-drop-shadow-focus-primary)}.bh-tabular-list__tooltip{position:absolute;top:0;background-color:var(--color-text-common-primary);color:var(--color-fill-common-secondary);display:block;width:fit-content;padding:var(--spacing-padding-xsmall) var(--spacing-padding-small);font-size:xx-small;border-radius:var(--effect-border-radius-medium);pointer-events:none;opacity:0;white-space:initial;overflow:hidden;transition:opacity var(--motion-duration-fast) var(--motion-easing-fast)}.bh-tabular-list__tooltip.shown{opacity:1}.bh-tabular-list__tooltip__ghost-element{visibility:hidden;pointer-events:none;display:table;padding:0;height:0;position:absolute;font-size:xx-small;word-break:normal}span.initialtooltiptext>span.bh-menu-item__label{white-space:initial}.enabledropdownMicroInteraction{-webkit-animation:slide-in-top 800ms cubic-bezier(0.175, 0.885, 0.320, 1.275) both;animation:slide-in-top 800ms cubic-bezier(0.175, 0.885, 0.320, 1.275) both}@-webkit-keyframes slide-in-top{0%{-webkit-transform:translateY(-32px);transform:translateY(-32px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slide-in-top{0%{-webkit-transform:translateY(-32px);transform:translateY(-32px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}";
var BhDropdownStyle0 = bhDropdownCss;
var BhDropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventOpen = createEvent(this, "bhEventOpen", 3);
    this.bhEventClose = createEvent(this, "bhEventClose", 3);
    this.bhEventCtaClick = createEvent(this, "bhEventCtaClick", 3);
    this.bhEventSelected = createEvent(this, "bhEventSelected", 7);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this.selected = createEvent(this, "selected", 7);
    this.opened = createEvent(this, "opened", 7);
    this.dropdownOpenclass = "shown";
    this.clearSearchText = false;
    this.handlerCtaClick = (e) => {
      this.bhEventCtaClick.emit(e.detail);
    };
    this.menuItems = void 0;
    this.menuWidth = void 0;
    this.isSearchable = void 0;
    this.isMultiSelect = void 0;
    this.isSelectAll = void 0;
    this.label = void 0;
    this.noOptionAvailableText = "No options available";
    this.isRequired = false;
    this.isUnselectable = void 0;
    this.placeholder = void 0;
    this.searchablePlaceholder = void 0;
    this.message = void 0;
    this.isFluid = false;
    this.isError = false;
    this.isDisabled = false;
    this.showAllLabel = "all";
    this.value = void 0;
    this.isSmall = false;
    this.inlineAnchorId = "";
    this.isInline = void 0;
    this.isEllipsis = void 0;
    this.isItemPaddingRight = void 0;
    this.interval = void 0;
    this.fromtabularlist = false;
    this.enableMicroInteraction = true;
    this.closeDropdownOnScroll = false;
    this.isOpen = false;
    this.flipOffset = 50;
    this.selectedValue = void 0;
    this.keySelected = void 0;
    this.selectedIcon = void 0;
    this.selectedCustomIcon = void 0;
    this.selectedCustomIconAlt = void 0;
    this.isFlipped = false;
    this.inlineStyle = {};
    this.isInlineStyleSet = void 0;
    this.inlineUuid = void 0;
    this.searchMode = "contains";
    this.keyboardFocused = false;
    this.isOverflowHidden = false;
  }
  isOpenChange() {
    if (this.isOpen) {
      this.bhEventOpen.emit();
    } else {
      this.bhEventClose.emit();
      this.clearSearchText = true;
      setTimeout(() => {
        this.element__dropdownInput.focus();
      });
      setTimeout(() => {
        this.clearSearchText = false;
      }, 500);
    }
    this.opened.emit({
      isOpen: this.isOpen,
      inlineAnchorId: this.inlineAnchorId
    });
    const userAgent = window.navigator.userAgent;
    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
      if (this.isOpen) {
        this.interval = setInterval(() => {
          this.setIsFlipped();
        }, 30);
      } else {
        clearInterval(this.interval);
      }
    }
    if (this.inlineAnchorId || this.isInline) {
      if (this.isOpen) {
        setTimeout(() => {
          this.styleMenu();
        }, 50);
        this.disableScroll();
      } else {
        this.enableScroll();
        this.isInlineStyleSet = false;
        document.body.removeChild(document.getElementById(`bh-dropdown__inline-menu__${this.inlineUuid}`));
      }
    }
  }
  handleResize() {
    this.setIsFlipped();
    if (this.inlineAnchorId || this.isInline) this.styleMenu();
  }
  bhEventScroll(e) {
    var _a, _b;
    try {
      if (this.fromtabularlist) {
        this.closeMenu();
      } else if (((_b = (_a = e.detail) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.initiator) === "tabularlist") {
        this.closeMenu();
      } else {
        if (this.inlineAnchorId || this.isInline) this.styleMenu();
      }
      if (this.closeDropdownOnScroll) {
        this.closeMenu();
      }
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  closeMenu() {
    this.isOpen = false;
  }
  onSelect(item) {
    try {
      this.value = item.label;
      this.selectedValue = item.value;
      this.keySelected = item.label;
      this.selectedIcon = item.icon;
      this.selectedCustomIcon = item.customIcon;
      this.selectedCustomIconAlt = item.customIconAlt || "icon";
      this.selected.emit(item);
      this.bhEventChange.emit(this.selectedValue);
      this.bhEventSelected.emit(this.selectedValue);
      this.closeMenu();
      if (this.inlineAnchorId || this.isInline) {
        this.enableScroll();
      }
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  onUnselect() {
    try {
      this.value = "";
      this.selectedValue = "";
      this.keySelected = "";
      this.selectedIcon = void 0;
      this.selectedCustomIcon = void 0;
      this.selectedCustomIconAlt = void 0;
      this.bhEventChange.emit(this.selectedValue);
      this.bhEventSelected.emit(this.selectedValue);
      this.closeMenu();
      if (this.inlineAnchorId || this.isInline) {
        this.enableScroll();
      }
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  onMultiselectChange(event) {
    try {
      if (this.isMultiSelect) {
        const checkedItem = event.detail.checkedItem;
        const isSelectedAll = event.detail.isSelectedAll;
        this.value = isSelectedAll && this.showAllLabel == "all" ? checkedItem.length == 0 ? "" : "All" : checkedItem.reduce((label, selection) => {
          return label ? label + ", " + selection.label : label + selection.label;
        }, "");
        this.bhEventSelected.emit(checkedItem);
        this.bhEventChange.emit(checkedItem);
      }
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  bindDropdownClickEvent(event) {
    try {
      if (!this.element__dropdownInput.contains(event.target) && !this.element__dropdownMenu.contains(event.target)) this.isOpen = false;
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  componentWillLoad() {
    try {
      if (this.inlineAnchorId || this.isInline) {
        this.inlineUuid = v4();
        let supportsPassive = false;
        try {
          window.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: function() {
              supportsPassive = true;
            }
          }));
        } catch (e) {
        }
        this.wheelOpt = supportsPassive ? {
          passive: false
        } : false;
        this.wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
      }
      if (this.enableMicroInteraction) {
        this.dropdownOpenclass = "shown enabledropdownMicroInteraction";
      }
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  componentDidLoad() {
    try {
      window.addEventListener("click", (event) => this.bindDropdownClickEvent(event));
      window.addEventListener("mousewheel", () => this.setIsFlipped());
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  disconnectedCallback() {
    try {
      window.removeEventListener("click", (event) => this.bindDropdownClickEvent(event));
      window.removeEventListener("mousewheel", () => this.setIsFlipped());
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  setIsFlipped() {
    var _a, _b, _c, _d, _e, _f;
    try {
      if (this.inlineAnchorId || this.isInline) return;
      this.isFlipped = ((_b = (_a = this.element__dropdownInput) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.top) >= 0 && ((_d = (_c = this.element__dropdownInput) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect()) === null || _d === void 0 ? void 0 : _d.bottom) + ((_f = (_e = this.element__dropdownInput) === null || _e === void 0 ? void 0 : _e.getBoundingClientRect()) === null || _f === void 0 ? void 0 : _f.height) - window.innerHeight > -this.flipOffset && window.innerHeight > 500;
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  styleMenu() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    try {
      if (!this.inlineAnchorId && !this.isInline) return;
      try {
        const tar = this.inlineAnchorId ? document.body.querySelector(`[inline-anchor-id="${this.inlineAnchorId}"]`) : this.element__host;
        const shouldFlip = ((_a = tar === null || tar === void 0 ? void 0 : tar.getBoundingClientRect()) === null || _a === void 0 ? void 0 : _a.top) + ((_b = tar === null || tar === void 0 ? void 0 : tar.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.height) + 4 + ((_d = (_c = this.element__dropdownMenuGhost) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect()) === null || _d === void 0 ? void 0 : _d.height) > window.innerHeight;
        this.inlineStyle = {
          position: "fixed",
          left: `${(_e = tar === null || tar === void 0 ? void 0 : tar.getBoundingClientRect()) === null || _e === void 0 ? void 0 : _e.left}px`,
          top: `${((_f = tar === null || tar === void 0 ? void 0 : tar.getBoundingClientRect()) === null || _f === void 0 ? void 0 : _f.top) + ((_g = tar === null || tar === void 0 ? void 0 : tar.getBoundingClientRect()) === null || _g === void 0 ? void 0 : _g.height)}px`,
          width: `${(_h = tar === null || tar === void 0 ? void 0 : tar.getBoundingClientRect()) === null || _h === void 0 ? void 0 : _h.width}px`,
          transform: `translateY(${shouldFlip ? -((_k = (_j = this.element__dropdownMenuGhost) === null || _j === void 0 ? void 0 : _j.getBoundingClientRect()) === null || _k === void 0 ? void 0 : _k.height) - ((_l = tar === null || tar === void 0 ? void 0 : tar.getBoundingClientRect()) === null || _l === void 0 ? void 0 : _l.height) - 8 : 0}px)`,
          zIndex: "9999"
        };
        this.isInlineStyleSet = true;
        this.element__dropdownMenu.id = `bh-dropdown__inline-menu__${this.inlineUuid}`;
        document.body.appendChild(this.element__dropdownMenu);
        if (this.element__dropdownMenu.id) {
          this.element__dropdownMenu.removeEventListener("bhEventCtaClick", this.handlerCtaClick);
          this.element__dropdownMenu.addEventListener("bhEventCtaClick", this.handlerCtaClick);
        }
      } catch (err) {
        console.warn(err);
      }
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  preventDefault(event) {
    event.preventDefault();
  }
  // call this to Disable
  disableScroll() {
    try {
      window.addEventListener("DOMMouseScroll", this.preventDefault, false);
      window.addEventListener(this.wheelEvent, this.preventDefault, this.wheelOpt);
      window.addEventListener("touchmove", this.preventDefault, this.wheelOpt);
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  // call this to Enable
  enableScroll() {
    try {
      window.removeEventListener("DOMMouseScroll", this.preventDefault, false);
      window.removeEventListener(this.wheelEvent, this.preventDefault, this.wheelOpt);
      window.removeEventListener("touchmove", this.preventDefault, this.wheelOpt);
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  handleClick() {
    this.isOpen = !this.isOpen;
  }
  mouseOverEvent(event) {
    try {
      const root = event.target;
      this.el__tooltipGhostElement.innerHTML = null;
      this.el__tooltipGhostElement.innerHTML = this.value ? this.value : this.placeholder;
      if (root.offsetWidth < root.scrollWidth) {
        this.el__tooltip.classList.add("shown");
        this.el__tooltipMessage.innerHTML = this.value ? this.value : this.placeholder;
        this.el__tooltip.style.left = ".5vw";
        if (!this.isOverflowHidden) {
          this.el__tooltip.style.top = `${-this.el__tooltipGhostElement.clientHeight}px`;
        }
      }
    } catch (err) {
      console.warn("ERROR_MESSAGE");
    }
  }
  mouseLeaveEvent() {
    try {
      this.el__tooltipGhostElement.innerHTML = null;
      this.el__tooltip.classList.remove("shown");
    } catch (err) {
      console.warn("ERROR_MESSAGE");
    }
  }
  render() {
    try {
      const prefix = this.host.tagName.toLowerCase().replace(components.dropdown.tagNameBase, "");
      const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
      const labelClasses = ["bh-dropdown__label", "typography--label-small"];
      const iconClasses = ["bh-dropdown__icon", "typography--icon-small", "motion--normal"];
      const inputClasses = ["bh-dropdown__input", "typography--body-medium", "motion--normal"];
      if (this.isRequired) {
        labelClasses.push("bh-dropdown__required");
      }
      if (this.isFluid) inputClasses.push("bh-dropdown__input--fluid");
      if (this.selectedIcon || this.selectedCustomIcon) inputClasses.push("bh-dropdown__input--with-icon");
      if (this.isDisabled) {
        labelClasses.push("bh-dropdown__label--disabled");
      }
      if (this.isDisabled) {
        inputClasses.push("bh-dropdown__input--disabled");
      }
      if (this.isDisabled) {
        iconClasses.push("bh-dropdown__icon--disabled");
      }
      if (this.isError) {
        inputClasses.push("bh-dropdown__input--error");
      }
      if (this.isError) {
        iconClasses.push("bh-dropdown__icon--error");
      }
      if (this.isSmall) {
        inputClasses.push("bh-dropdown__input-small");
      }
      if (this.isOpen) {
        inputClasses.push("bh-dropdown_Input_open");
      }
      if (!this.isOpen) {
        if (inputClasses.includes("bh-dropdown_Input_open")) {
          inputClasses.splice(inputClasses.indexOf("bh-dropdown_Input_open"), 1);
        }
      }
      if (this.selectedIcon || this.selectedCustomIcon) {
        inputClasses.push("bh-dropdown__input--with-icon");
      }
      this.setIsFlipped();
      const getMenuWidth = () => {
        if (this.isFluid) {
          return "fluid";
        } else if (this.menuWidth) {
          if (this.menuWidth === "large") return "large";
          if (this.menuWidth === "medium") return "medium";
          if (this.menuWidth === "small") return "small";
          if (this.menuWidth === "inherit" || this.menuWidth === "fluid") return "fluid";
        } else {
          return "fluid";
        }
      };
      return h(Host, {
        class: `bh-dropdown ${this.isSmall ? "small" : ""} ${this.isFluid ? "fluid" : ""}`
      }, this.label && h("label", {
        class: labelClasses.join(" ")
      }, this.label), h("div", {
        class: "bh-dropdown__container"
      }, h("div", {
        class: "bh-dropdown__container",
        ref: (el) => {
          this.element__host = el;
        },
        onMouseOver: ($event) => {
          this.mouseOverEvent($event);
        },
        onMouseLeave: () => {
          this.mouseLeaveEvent();
        }
      }, h("div", {
        class: `bh-tabular-list__tooltip`,
        ref: (el) => {
          this.el__tooltip = el;
        }
      }, h("span", {
        class: "typography--body-small-semi-bold initialtooltiptext",
        ref: (el) => {
          this.el__tooltipMessage = el;
        }
      })), h("div", {
        class: "bh-tabular-list__tooltip__ghost-element typography--body-medium",
        ref: (el) => {
          this.el__tooltipGhostElement = el;
        }
      }), h("input", {
        type: "text",
        class: inputClasses.join(" "),
        placeholder: this.placeholder ? this.placeholder : "Select",
        disabled: this.isDisabled,
        value: this.value,
        readonly: true,
        onClick: () => this.handleClick(),
        onKeyDown: (event) => {
          if (event.code === "Enter") {
            this.handleClick();
          }
        },
        onFocus: () => {
          var _a, _b;
          (_b = (_a = this.element__dropdownInput.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector(".bh-dropdown__icon")) === null || _b === void 0 ? void 0 : _b.classList.add("focused");
        },
        onBlur: () => {
          var _a, _b;
          (_b = (_a = this.element__dropdownInput.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector(".bh-dropdown__icon")) === null || _b === void 0 ? void 0 : _b.classList.remove("focused");
          this.enableScroll();
        },
        ref: (el) => this.element__dropdownInput = el
      })), (this.selectedIcon || this.selectedCustomIcon) && h("span", {
        class: `bh-dropdown__value typography--body-medium typography--color-primary ${this.isSmall ? "small" : ""} ${this.isFluid ? "fluid" : ""} ${this.isError ? "error" : ""} ${this.isDisabled ? "disabled" : ""} ${this.value ? "" : "placeholder"}`
      }, h("span", {
        class: "bh-dropdown__selected-icon"
      }, this.selectedCustomIcon ? h(Components.icon, {
        "custom-icon": this.selectedCustomIcon,
        "custom-icon-alt": this.selectedCustomIconAlt,
        size: "small"
      }) : h("i", {
        class: "material-icons material-icons-outlined typography--icon-small"
      }, this.selectedIcon)), h("span", {
        class: "bh-dropdown__value-text"
      }, this.value ? this.value : this.placeholder)), !this.selectedIcon && !this.selectedCustomIcon && h("span", {
        class: `bh-dropdown__value typography--body-medium typography--color-primary ${this.isSmall ? "small" : ""} ${this.isFluid ? "fluid" : ""} ${this.isError ? "error" : ""} ${this.isDisabled ? "disabled" : ""} ${this.value ? "" : "placeholder"}`
      }, h("span", {
        class: "bh-dropdown__value-text"
      }, this.value ? this.value : this.placeholder)), h("i", {
        class: iconClasses.join(" ")
      }, "expand_more"), h("div", {
        class: `bh-dropdown__menu-container ${this.inlineAnchorId || this.isInline ? this.isOpen && this.isInlineStyleSet ? this.dropdownOpenclass : "hidden" : this.isOpen ? this.dropdownOpenclass : "hidden"}
						  ${this.isSmall ? "small" : ""} ${this.label ? "with-label" : ""} ${this.message ? "with-message" : ""} ${this.isFluid ? "fluid" : ""} ${this.isFlipped ? "flipped" : ""} ${this.menuWidth === "fluid" ? "fit-content" : ""}`,
        style: this.inlineAnchorId || this.isInline ? this.inlineStyle : {},
        ref: (el) => this.element__dropdownMenu = el
      }, h(Components.menu, {
        selected: this.selectedValue,
        keyboardFocused: this.keyboardFocused,
        menuItems: this.menuItems,
        menuWidth: getMenuWidth(),
        menuHeight: this.isSmall ? "small" : "medium",
        isFocused: this.isOpen,
        noOptionAvailableText: this.noOptionAvailableText,
        isDropDownMenu: true,
        isMultiSelect: this.isMultiSelect,
        isSelectAll: this.isSelectAll,
        isSearchable: this.isSearchable,
        searchMode: this.searchMode,
        clearSearchText: this.clearSearchText,
        isUnselectable: this.isMultiSelect ? false : this.isUnselectable,
        placeholder: this.searchablePlaceholder ? this.searchablePlaceholder : "Select",
        isEllipsis: this.isEllipsis,
        onMultiselectChange: (event) => {
          this.onMultiselectChange(event);
        },
        onUnselect: () => {
          this.onUnselect();
        },
        isItemPaddingRight: this.isItemPaddingRight,
        onBhEventChange: (e) => {
          e.preventDefault();
          e.stopPropagation();
        },
        onBhEventSelected: (e) => {
          this.onSelect(e.detail);
          e.preventDefault();
          e.stopPropagation();
        },
        onClose: () => {
          this.isOpen = false;
        }
      })), (this.isInline || this.inlineAnchorId) && h("div", {
        style: {
          visibility: "hidden",
          position: "absolute",
          left: "-99999px"
        },
        ref: (el) => {
          this.element__dropdownMenuGhost = el;
        }
      }, h(Components.menu, {
        selected: this.selectedValue,
        menuItems: this.menuItems,
        menuWidth: getMenuWidth(),
        menuHeight: this.isSmall ? "small" : "medium",
        isFocused: this.isOpen,
        noOptionAvailableText: this.noOptionAvailableText,
        isMultiSelect: this.isMultiSelect,
        isSelectAll: this.isSelectAll,
        isSearchable: this.isSearchable,
        clearSearchText: this.clearSearchText,
        isUnselectable: this.isMultiSelect ? false : this.isUnselectable,
        placeholder: this.placeholder ? this.placeholder : "Select",
        isEllipsis: this.isEllipsis,
        onMultiselectChange: (event) => {
          this.onMultiselectChange(event);
        },
        onUnselect: () => {
          this.onUnselect();
        },
        isItemPaddingRight: this.isItemPaddingRight,
        onBhEventChange: (e) => {
          e.preventDefault();
          e.stopPropagation();
        },
        onBhEventSelected: (e) => {
          this.onSelect(e.detail);
          e.preventDefault();
          e.stopPropagation();
        },
        onClose: () => {
          this.isOpen = false;
        }
      }))), this.message && h(Components.formMessage, {
        message: this.message,
        isError: this.isError,
        isDisabled: this.isDisabled
      }));
    } catch (err) {
      console.warn(ERROR_MESSAGE);
    }
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "isOpen": ["isOpenChange"]
    };
  }
};
BhDropdown.style = BhDropdownStyle0;
var BhIconColorList = ["primary", "secondary", "tertiary", "inverse_primary", "inverse_secondary", "teal", "rose", "cyan", "gold"];
var bhIconCss = ".bh-icon{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.bh-icon.bh-icon-size--small{width:18px;height:18px}.bh-icon.bh-icon-size--medium{width:24px;height:24px}.bh-icon-link{cursor:pointer}.bh-icon-color--primary{color:var(--color-text-common-primary)}.bh-icon-color--secondary{color:var(--color-text-common-secondary)}.bh-icon-color--tertiary{color:var(--color-text-common-tertiary)}.bh-icon-color--inverse_primary{color:var(--color-text-common-inverse-primary)}.bh-icon-color--inverse_secondary{color:var(--color-text-common-inverse-secondary)}.bh-icon-color--teal{color:var(--color-fill-semantic-success-default)}.bh-icon-color--rose{color:var(--color-fill-semantic-error-default)}.bh-icon-color--cyan{color:var(--color-fill-semantic-info-default)}.bh-icon-color--gold{color:var(--color-fill-semantic-warning-default)}";
var BhIconStyle0 = bhIconCss;
var BhIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventClick = createEvent(this, "bhEventClick", 7);
    this.bhEventOnMouseHover = createEvent(this, "bhEventOnMouseHover", 7);
    this.size = "medium";
    this.icon = "";
    this.color = "primary";
    this.href = void 0;
    this.target = "_self";
    this.customIcon = void 0;
    this.customIconAlt = "icon";
  }
  render() {
    const sizeClass = this.size === "small" ? "typography--icon-small" : "typography--icon-medium";
    const imgSizePx = this.size === "small" ? "18px" : "24px";
    const customIconEl = h("img", {
      key: "2b59af9c0093d919bca18f8941929a7913501a07",
      src: this.customIcon,
      alt: this.customIconAlt,
      style: {
        width: imgSizePx,
        height: imgSizePx,
        display: "block"
      },
      class: `bh-icon__custom-img ${sizeClass}`,
      onClick: (el) => {
        this.bhEventClick.emit(el);
      },
      onMouseOver: (el) => {
        this.bhEventOnMouseHover.emit(el);
      }
    });
    const materialIconEl = h("i", {
      key: "7e713e356049c00911c3b3aa16036a89e8f1ce0b",
      style: BhIconColorList.find((c) => c === this.color) ? {} : {
        color: this.color
      },
      class: `material-icons material-icons-outlined ${sizeClass} ${BhIconColorList.find((c) => c === this.color) ? `bh-icon-color--${this.color}` : ""}`,
      onClick: (el) => {
        this.bhEventClick.emit(el);
      },
      onMouseOver: (el) => {
        this.bhEventOnMouseHover.emit(el);
      }
    }, this.icon);
    const iconContent = this.customIcon ? customIconEl : materialIconEl;
    return h(Host, {
      key: "fd971c129358229ca79cc89d9b2b96ecec0b89fd",
      class: `bh-icon ${this.size === "small" ? "bh-icon-size--small" : "bh-icon-size--medium"}`
    }, this.href ? h("a", {
      class: "bh-icon-link",
      href: this.href,
      target: this.target
    }, this.customIcon ? h("img", {
      src: this.customIcon,
      alt: this.customIconAlt,
      style: {
        width: imgSizePx,
        height: imgSizePx,
        display: "block"
      },
      class: `bh-icon__custom-img ${sizeClass}`
    }) : h("i", {
      style: BhIconColorList.find((c) => c === this.color) ? {
        color: ""
      } : {
        color: this.color
      },
      class: `material-icons material-icons-outlined ${sizeClass} ${BhIconColorList.find((c) => c === this.color) ? `bh-icon-color--${this.color}` : ""}`
    }, this.icon)) : iconContent);
  }
};
BhIcon.style = BhIconStyle0;
var bhModalCss = ".bh-modal__wrapper.close{visibility:hidden;opacity:0}.bh-modal__wrapper.open{visibility:visible;opacity:1}.bh-modal__container{width:800px;border-radius:var(--effect-border-radius-medium);box-shadow:var(--effect-drop-shadow-elevation-low);overflow:hidden;position:fixed;z-index:3001;top:var(--spacing-padding-large);left:calc(50vw - 400px);opacity:0;transition:opacity var(--motion-duration-fast) var(--motion-easing-fast)}.bh-modal__container.open{opacity:1;transition:opacity var(--motion-duration-normal) var(--motion-easing-normal)}.bh-modal__header{overflow:hidden;padding:var(--spacing-padding-medium);background-color:var(--color-fill-common-tertiary);border-bottom:var(--effect-border-width-regular) solid var(--color-border-common-primary);display:flex;justify-content:space-between;align-items:center}.bh-modal__header-copy--header{margin:0;color:var(--color-text-common-primary)}.bh-modal__header-copy--subheader{color:var(--color-text-common-secondary);display:block;white-space:nowrap;max-width:calc(100% - 40px);overflow:hidden;text-overflow:ellipsis}.bh--modal__header-dismiss{cursor:pointer;color:var(--color-text-common-primary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:box-shadow;transition-timing-function:var(--motion-easing-fast);transition-duration:var(--motion-duration-fast);outline:none}.bh--modal__header-dismiss:focus{box-shadow:var(--effect-drop-shadow-focus-primary)}.bh--modal__header-dismiss:focus:not(:focus-visible){box-shadow:none}.bh-modal__body{background-color:var(--color-fill-common-secondary);padding:var(--spacing-padding-medium);max-height:484px;overflow-y:auto}.bh-modal__footer{background-color:var(--color-fill-common-tertiary);border-top:var(--effect-border-width-regular) solid var(--color-border-common-primary);padding:var(--spacing-padding-medium)}.bh-modal__footer--ctas{display:flex;justify-content:flex-end}.bh-modal__footer--cta{margin:0 calc(var(--spacing-margin-small) / 2)}.bh-modal__footer--cta:first-child{margin-left:0}.bh-modal__footer--cta:last-child{margin-right:0}.bh-modal__backdrop{width:100vw;height:100vh;position:fixed;background-color:var(--color-fill-common-overlay);opacity:0;top:0;left:0;z-index:3000;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);transition:opacity var(--motion-duration-fast) var(--motion-easing-fast)}.bh-modal__backdrop.open{opacity:1;transition:opacity var(--motion-duration-normal) var(--motion-easing-normal)}@media (max-width: 599px){.bh-modal__header{padding:var(--spacing-padding-medium) var(--spacing-padding-small)}.bh-modal__body{padding:var(--spacing-padding-medium) var(--spacing-padding-small)}.bh-modal__footer{padding:var(--spacing-padding-medium) var(--spacing-padding-small)}}.enablemodalMicroInteraction{-webkit-animation:slide-in-top 800ms cubic-bezier(0.175, 0.885, 0.320, 1.275) both;animation:slide-in-top 800ms cubic-bezier(0.175, 0.885, 0.320, 1.275) both}@-webkit-keyframes slide-in-top{0%{-webkit-transform:translateY(-32px);transform:translateY(-32px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slide-in-top{0%{-webkit-transform:translateY(-32px);transform:translateY(-32px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}";
var BhModalStyle0 = bhModalCss;
var BhModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventOpen = createEvent(this, "bhEventOpen", 7);
    this.bhEventClose = createEvent(this, "bhEventClose", 7);
    this.bhEventCtaClick = createEvent(this, "bhEventCtaClick", 7);
    this.bhEventScroll = createEvent(this, "bhEventScroll", 7);
    this.ctaClick = createEvent(this, "ctaClick", 3);
    this.bhEventClick = createEvent(this, "bhEventClick", 7);
    this.modalOpenclass = "open";
    this.header = void 0;
    this.subheader = void 0;
    this.width = "medium";
    this.isOpen = false;
    this.wrapperIsOpen = false;
    this.ctas = void 0;
    this._ctas = void 0;
    this.isDismissible = true;
    this.outsideModalClick = false;
    this.customizeClickEvent = false;
    this.containerStyle = void 0;
    this.subheaderStyle = void 0;
    this.viewport = void 0;
    this.enableMicroInteraction = true;
  }
  watchIsOpen() {
    const that = this;
    if (this.isOpen) {
      this.wrapperIsOpen = true;
      this.bhEventOpen.emit({
        type: "modal"
      });
      setTimeout(() => {
        const focusableContents = that.element__container.querySelectorAll('button, [href], input, textarea, [tabindex]:not([tabindex="-1"])');
        const firstFocusableElement = focusableContents[0];
        firstFocusableElement.focus();
      }, 100);
    } else {
      setTimeout(() => {
        this.wrapperIsOpen = false;
        this.bhEventClose.emit({
          type: "modal"
        });
      }, 100);
    }
  }
  watchCtas() {
    this.parseData();
  }
  /**
   * open
   * Custom event for opening the modal through custom event
   * Event Name: open
   */
  openModalEvent() {
    this.isOpen = true;
  }
  /**
   * close
   * Custom event for closing the modal through custom event
   * Event Name: close
   */
  closeModalEvent() {
    this.isOpen = false;
  }
  watchOpen() {
    this.setStyle();
  }
  handleResize() {
    this.viewport = getBreakpoint();
    this.setStyle();
  }
  setStyle() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    const modalMaxWidth = () => {
      switch (this.width) {
        case "large":
          return 960;
        case "medium":
          return 800;
        case "small":
          return 640;
      }
    };
    const padding = () => {
      switch (this.viewport) {
        case "large":
          return 20;
        case "medium":
          return 20;
        case "small":
          return 0;
      }
    };
    this.containerStyle = this.viewport === "small" ? {
      width: "100vw",
      top: "0",
      left: "0"
    } : {
      width: `${window.innerWidth - padding() * 2 > modalMaxWidth() ? modalMaxWidth() : window.innerWidth - padding() * 2}px`,
      top: `52px`,
      left: `${window.innerWidth - padding() * 2 > modalMaxWidth() ? window.innerWidth / 2 - modalMaxWidth() / 2 : window.innerWidth / 2 - (window.innerWidth - padding() * 2) / 2}px`
    };
    this.subheaderStyle = {
      // Small 12px(left padding) + 12px (padding between copy + x) + 12px padding (left) + x icon (24px) = 60px
      maxWidth: `${((_a = this.element__container) === null || _a === void 0 ? void 0 : _a.clientWidth) - (this.viewport === "small" ? 60 : 84)}px`
    };
    const modalBody = (_b = this.element__container) === null || _b === void 0 ? void 0 : _b.querySelector(".bh-modal__body");
    if (modalBody) {
      if (this.viewport === "small") {
        modalBody.style.maxHeight = "unset";
        modalBody.style.height = ((_d = (_c = this.element__container) === null || _c === void 0 ? void 0 : _c.querySelector(".bh-modal__footer")) === null || _d === void 0 ? void 0 : _d.clientHeight) && ((_f = (_e = this.element__container) === null || _e === void 0 ? void 0 : _e.querySelector(".bh-modal__header")) === null || _f === void 0 ? void 0 : _f.clientHeight) ? `${window.innerHeight - (((_h = (_g = this.element__container) === null || _g === void 0 ? void 0 : _g.querySelector(".bh-modal__header")) === null || _h === void 0 ? void 0 : _h.clientHeight) + ((_k = (_j = this.element__container) === null || _j === void 0 ? void 0 : _j.querySelector(".bh-modal__footer")) === null || _k === void 0 ? void 0 : _k.clientHeight) + 120)}px` : `${window.innerHeight - (((_m = (_l = this.element__container) === null || _l === void 0 ? void 0 : _l.querySelector(".bh-modal__header")) === null || _m === void 0 ? void 0 : _m.clientHeight) + 80)}px`;
      } else {
        modalBody.style.maxHeight = ((_p = (_o = this.element__container) === null || _o === void 0 ? void 0 : _o.querySelector(".bh-modal__footer")) === null || _p === void 0 ? void 0 : _p.clientHeight) && ((_r = (_q = this.element__container) === null || _q === void 0 ? void 0 : _q.querySelector(".bh-modal__header")) === null || _r === void 0 ? void 0 : _r.clientHeight) ? `${window.innerHeight - (((_t = (_s = this.element__container) === null || _s === void 0 ? void 0 : _s.querySelector(".bh-modal__header")) === null || _t === void 0 ? void 0 : _t.clientHeight) + ((_v = (_u = this.element__container) === null || _u === void 0 ? void 0 : _u.querySelector(".bh-modal__footer")) === null || _v === void 0 ? void 0 : _v.clientHeight) + 120 + 52)}px` : `${window.innerHeight - (((_x = (_w = this.element__container) === null || _w === void 0 ? void 0 : _w.querySelector(".bh-modal__header")) === null || _x === void 0 ? void 0 : _x.clientHeight) + 80 + 52)}px`;
        modalBody.style.height = "auto";
      }
    }
  }
  closeModal() {
    this.isOpen = false;
  }
  onCtaClick(key) {
    this.ctaClick.emit(key);
    this.bhEventCtaClick.emit(key);
  }
  parseData() {
    this._ctas = typeof this.ctas === "string" ? JSON.parse(this.ctas) : this.ctas;
  }
  modalBodyScroll(e) {
    this.bhEventScroll.emit({
      type: "scroll",
      payload: e
    });
  }
  componentWillLoad() {
    this.wrapperIsOpen = this.isOpen;
    this.viewport = getBreakpoint();
    this.parseData();
    this.setStyle();
    if (this.enableMicroInteraction) {
      this.modalOpenclass = "open enablemodalMicroInteraction";
    }
  }
  componentDidLoad() {
    const that = this;
    window.addEventListener("keydown", (event) => {
      if (!that.isOpen || event.key !== "Tab") return;
      const focusableContents = that.element__container.querySelectorAll('button, [href], input, textarea, [tabindex]:not([tabindex="-1"])');
      const firstFocusableElement = focusableContents[0];
      const lastFocusableElement = focusableContents[focusableContents.length - 1];
      if (event.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          event.preventDefault();
        }
      }
    }, false);
  }
  render() {
    var _a, _b;
    const prefix = this.host.tagName.toLowerCase().replace(components.modal.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix);
    return h(Host, {
      key: "821ae62448aebd5a48ba023a74aca951594d5b3b",
      class: "bh-modal"
    }, h("div", {
      key: "86bd7742c0421448aea4c23fbe0c5b28a82a40db",
      class: `bh-modal__wrapper ${this.wrapperIsOpen ? "open" : "close"}`
    }, h("div", {
      key: "a7f630210f83cfcb1389c8f5fe0b71a6525e02ba",
      class: `bh-modal__container ${this.isOpen ? this.modalOpenclass : "close"}`,
      style: this.containerStyle,
      ref: (el) => {
        this.element__container = el;
      }
    }, h("div", {
      key: "39aad422e555a92f1564df0871750a60cfbe4a80",
      class: "bh-modal__header"
    }, h("div", {
      key: "03dc2865a4377bfcaf2df691419383e20864407f",
      class: "bh-modal__header--copy-wrapper"
    }, h("h3", {
      key: "a25b0bebbb58ceeb731e7437288e385f0a87bcc5",
      class: "typography--subtitle-large bh-modal__header-copy--header"
    }, this.header), this.subheader && h("span", {
      class: "typography--decorative-small bh-modal__header-copy--subheader",
      style: this.subheaderStyle
    }, this.subheader)), this.isDismissible && h("i", {
      tabIndex: 0,
      class: "material-icons material-icons-outlined typography--icon-medium bh--modal__header-dismiss",
      onClick: () => {
        if (this.customizeClickEvent) this.bhEventClick.emit({
          type: "close"
        });
        else this.closeModal();
      },
      onKeyDown: (event) => {
        if (event.key === "Enter") {
          if (this.customizeClickEvent) this.bhEventClick.emit({
            type: "close"
          });
          else this.closeModal();
        }
      }
    }, "close")), h("div", {
      key: "3e712b7e6c95b869828102128ce90f634a4657cd",
      class: "bh-modal__body",
      onScroll: (event) => {
        this.modalBodyScroll(event);
      }
    }, h("slot", {
      key: "d804b02fc85d66a8b7d6b97240c7e29490cb4647"
    })), this._ctas && h("div", {
      class: "bh-modal__footer"
    }, h("div", {
      class: "bh-modal__footer--ctas"
    }, (_b = (_a = this._ctas) === null || _a === void 0 ? void 0 : _a.slice(0, 3)) === null || _b === void 0 ? void 0 : _b.map((cta) => {
      var _a2, _b2;
      return h("div", {
        class: "bh-modal__footer--cta",
        style: this.viewport === "small" ? {
          width: `${100 / ((_b2 = (_a2 = this._ctas) === null || _a2 === void 0 ? void 0 : _a2.slice(0, 3)) === null || _b2 === void 0 ? void 0 : _b2.length)}%`
        } : {}
      }, h(Components.button, {
        "data-key": cta.key,
        isSmall: cta.size === "medium" ? false : true,
        type: cta.type,
        label: cta.label,
        isFluid: this.viewport === "small",
        isDisabled: cta.isDisabled,
        isLoading: cta.isLoading,
        leftIcon: cta.leftIcon,
        rightIcon: cta.rightIcon,
        onClick: () => {
          if (cta.isDisabled) return;
          this.onCtaClick(cta.key);
        }
      }));
    })))), h("div", {
      key: "72f32cffb37923f2904f07cd304fe2df4d0e634d",
      class: `bh-modal__backdrop ${this.isOpen ? "open" : "close"}`,
      onClick: () => {
        if (this.isDismissible && this.outsideModalClick && !this.customizeClickEvent) {
          this.closeModal();
        }
      }
    })));
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "isOpen": ["watchIsOpen", "watchOpen"],
      "ctas": ["watchCtas"]
    };
  }
};
BhModal.style = BhModalStyle0;
var bhRadioButtonCss = ".bh-radio-button{display:flex;flex-direction:row;align-items:flex-start;-webkit-touch-callout:none;-moz-tap-highlight-color:transparent;-webkit-tap-highlight-color:transparent}.bh-radio-button__input-container{display:flex;align-items:flex-start;justify-content:center}.bh-radio-button__input{outline:none;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;-o-appearance:none;appearance:none;opacity:0;padding:var(--spacing-padding-none);margin:var(--spacing-margin-none);cursor:default;position:absolute}@media (hover: hover){.bh-radio-button__input-container{cursor:pointer}.bh-radio-button__input-container--disabled,.bh-radio-button__input--disabled{cursor:not-allowed}}.bh-radio-button__input-icon{min-width:var(--radio-button-outer-circle-width);height:var(--radio-button-outer-circle-height);border-radius:var(--radio-button-outer-circle-width);border-style:solid;border-width:var(--effect-border-width-thick);border-color:var(--color-border-control-unselected);background-color:var(--color-fill-control-unselected);background-color:radial-gradient(\n		var(--color-border-control-selected) 100,\n		var(--color-fill-control-unselected) calc(var(--radio-button-width) / 4)\n	);margin:2px 0;box-sizing:border-box;display:flex;align-items:center;justify-content:center}.bh-radio-button__input+.bh-radio-button__input-icon::before{height:var(--radio-button-inner-circle-height);width:var(--radio-button-inner-circle-width);border-radius:100%;display:flex;content:' ';transition:inherit;background-color:transparent}.bh-radio-button__input:checked+.bh-radio-button__input-icon{border-color:var(--color-border-control-selected);background-color:initial}.bh-radio-button__input:checked+.bh-radio-button__input-icon::before{background-color:var(--color-fill-control-selected);height:100%;width:100%;transform:scale(0.6);}.bh-radio-button__input--error+.bh-radio-button__input-icon{background-color:var(--color-fill-control-error);border-color:var(--color-border-form-error)}.bh-radio-button__input--error+.bh-radio-button__input-icon::before{background-color:var(--color-fill-control-unselected)}.bh-radio-button__input:checked.bh-radio-button__input--error+.bh-radio-button__input-icon{background-color:var(--color-fill-control-error);border-color:var(--color-border-form-error)}.bh-radio-button__input:checked.bh-radio-button__input--error+.bh-radio-button__input-icon::before{background-color:var(--color-border-control-error)}.bh-radio-button__input--disabled+.bh-radio-button__input-icon,.bh-radio-button__input--disabled.bh-radio-button__input:checked+.bh-radio-button__input-icon{background-color:var(--color-fill-control-unselected);border-color:var(--color-border-control-disabled)}.bh-radio-button__input--disabled.bh-radio-button__input:checked+.bh-radio-button__input-icon::before{background-color:var(--color-border-control-disabled)}.bh-radio-button__input:focus+.bh-radio-button__input-icon{box-shadow:var(--effect-drop-shadow-focus-primary)}.bh-radio-button__input:focus:not(:focus-visible)+.bh-radio-button__input-icon{box-shadow:none}.bh-radio-button__input:focus.bh-radio-button__input--error+.bh-radio-button__input-icon{box-shadow:var(--effect-drop-shadow-focus-error)}.bh-radio-button__input:focus:not(:focus-visible).bh-radio-button__input--error+.bh-radio-button__input-icon{box-shadow:none}.bh-radio-button__label{display:flex;align-items:center;min-height:var(--radio-button-container-height);color:var(--color-text-label-default)}.bh-radio-button__label--disabled{color:var(--color-text-label-disabled-default)}.bh-radio-button__label{margin-left:var(--spacing-margin-xsmall)}";
var BhRadioButtonStyle0 = bhRadioButtonCss;
var BhRadioButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this.value = void 0;
    this.label = void 0;
    this.name = void 0;
    this.isChecked = false;
    this.isDisabled = false;
    this.isError = false;
  }
  handleChange(event) {
    var _a;
    const value = (_a = event.target) === null || _a === void 0 ? void 0 : _a.checked;
    this.bhEventChange.emit(value);
  }
  render() {
    const containerClasses = ["bh-radio-button__input-container"];
    if (this.isDisabled) {
      containerClasses.push("bh-radio-button__input-container--disabled");
    }
    const inputClasses = ["bh-radio-button__input"];
    if (this.isDisabled) {
      inputClasses.push("bh-radio-button__input--disabled");
    }
    if (this.isError) {
      inputClasses.push("bh-radio-button__input--error");
    }
    const labelClasses = ["bh-radio-button__label", "typography--body-medium"];
    if (this.isDisabled) {
      labelClasses.push("bh-radio-button__label--disabled");
    } else if (this.isError) {
      labelClasses.push("bh-radio-button__label--error");
    } else {
      labelClasses.push("typography--color-secondary");
    }
    return h(Host, {
      key: "f372e2553027cb540fbfcfaf00eef8b12f99abc2",
      class: "bh-radio-button"
    }, h("label", {
      key: "4d6c97aabcdae13b13ce91273de48874ae0fe2df",
      class: containerClasses.join(" ")
    }, h("input", {
      key: "f4aa8640dd16852ca858b57343820e753cb0c4b3",
      class: inputClasses.join(" "),
      type: "radio",
      name: this.name,
      value: this.value,
      checked: this.isChecked,
      disabled: this.isDisabled,
      onChange: (event) => {
        this.handleChange(event);
      }
    }), h("span", {
      key: "0c1085ac2abfa4e81a08ec62df48b5bff7839e85",
      class: "bh-radio-button__input-icon motion--fast"
    }), this.label && h("span", {
      class: labelClasses.join(" ")
    }, this.label)));
  }
};
BhRadioButton.style = BhRadioButtonStyle0;
var Helper = class _Helper {
  static getDescendantProperty(object, path, list = []) {
    let firstSegment;
    let remaining;
    let dotIndex;
    let value;
    let index;
    let length;
    if (path) {
      dotIndex = path.indexOf(".");
      if (dotIndex === -1) {
        firstSegment = path;
      } else {
        firstSegment = path.slice(0, dotIndex);
        remaining = path.slice(dotIndex + 1);
      }
      value = object[firstSegment];
      if (value !== null && typeof value !== "undefined") {
        if (!remaining && (typeof value === "string" || typeof value === "number")) {
          list.push(value);
        } else if (Object.prototype.toString.call(value) === "[object Array]") {
          for (index = 0, length = value.length; index < length; index++) {
            _Helper.getDescendantProperty(value[index], remaining, list);
          }
        } else if (remaining) {
          _Helper.getDescendantProperty(value, remaining, list);
        }
      }
    } else {
      list.push(object);
    }
    return list;
  }
};
var FuzzySearch = class _FuzzySearch {
  constructor(haystack = [], keys = [], options = {}) {
    if (!Array.isArray(keys)) {
      options = keys;
      keys = [];
    }
    this.haystack = haystack;
    this.keys = keys;
    this.options = Object.assign({
      caseSensitive: false,
      sort: false
    }, options);
  }
  search(query = "") {
    if (query === "") {
      return this.haystack;
    }
    const results = [];
    for (let i = 0; i < this.haystack.length; i++) {
      const item = this.haystack[i];
      if (this.keys.length === 0) {
        const score = _FuzzySearch.isMatch(item, query, this.options.caseSensitive);
        if (score) {
          results.push({
            item,
            score
          });
        }
      } else {
        for (let y = 0; y < this.keys.length; y++) {
          const propertyValues = Helper.getDescendantProperty(item, this.keys[y]);
          let found = false;
          for (let z = 0; z < propertyValues.length; z++) {
            const score = _FuzzySearch.isMatch(propertyValues[z], query, this.options.caseSensitive);
            if (score) {
              found = true;
              results.push({
                item,
                score
              });
              break;
            }
          }
          if (found) {
            break;
          }
        }
      }
    }
    if (this.options.sort) {
      results.sort((a, b2) => a.score - b2.score);
    }
    return results.map((result) => result.item);
  }
  static isMatch(item, query, caseSensitive) {
    item = String(item);
    query = String(query);
    if (!caseSensitive) {
      item = item.toLocaleLowerCase();
      query = query.toLocaleLowerCase();
    }
    const indexes = _FuzzySearch.nearestIndexesFor(item, query);
    if (!indexes) {
      return false;
    }
    if (item === query) {
      return 1;
    }
    if (indexes.length > 1) {
      return 2 + (indexes[indexes.length - 1] - indexes[0]);
    }
    return 2 + indexes[0];
  }
  static nearestIndexesFor(item, query) {
    const letters = query.split("");
    let indexes = [];
    const indexesOfFirstLetter = _FuzzySearch.indexesOfFirstLetter(item, query);
    indexesOfFirstLetter.forEach((startingIndex, loopingIndex) => {
      let index = startingIndex + 1;
      indexes[loopingIndex] = [startingIndex];
      for (let i = 1; i < letters.length; i++) {
        const letter = letters[i];
        index = item.indexOf(letter, index);
        if (index === -1) {
          indexes[loopingIndex] = false;
          break;
        }
        indexes[loopingIndex].push(index);
        index++;
      }
    });
    indexes = indexes.filter((letterIndexes) => letterIndexes !== false);
    if (!indexes.length) {
      return false;
    }
    return indexes.sort((a, b2) => {
      if (a.length === 1) {
        return a[0] - b2[0];
      }
      a = a[a.length - 1] - a[0];
      b2 = b2[b2.length - 1] - b2[0];
      return a - b2;
    })[0];
  }
  static indexesOfFirstLetter(item, query) {
    const match = query[0];
    return item.split("").map((letter, index) => {
      if (letter !== match) {
        return false;
      }
      return index;
    }).filter((index) => index !== false);
  }
};
var bhSearchCss = '.bh-search{--effect-border-radius-medium:25px}.bh-search[type="date-picker"] .search-button-cta{margin-top:-4px}.bh-search__container-wrapper{display:flex !important;align-items:center;position:relative}.bh-search__container-wrapper .bh-text-input__container .bh-text-input__input{padding-right:50px}.bh-search__container-wrapper .bh-text-input__input--disabled,.bh-text-input__input--disabled:hover{background-color:var(--color-fill-cta-disabled) !important}.text-input{position:relative}.text-input--fluid{width:100%}.search-button-cta{cursor:pointer;outline:none;margin-left:-44px;z-index:1}.search-button-cta--small{cursor:pointer;outline:none;margin-left:-36px;z-index:1}.search-button-cta--fluid{cursor:pointer;outline:none;position:absolute;right:0}.search-button-cta .bh-button:focus:not(:active):not(:hover){box-shadow:none !important}.search-button-cta .bh-button:focus:not(:active):not(:hover){box-shadow:none !important}.search-button-cta .bh-button--type-ghost:hover{background-color:var(--color-fill-cta-secondary-default)}.search-button-cta .bh-button--type-active:hover{background-color:var(--color-fill-cta-secondary-default)}.search-button-cta .bh-button--disabled,.bh-button--disabled:hover,.bh-button--disabled:active{background-color:transparent}.bh-search-multi-chip{flex:1 1 auto}';
var BhSearchStyle0 = bhSearchCss;
var BhSearch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.query = createEvent(this, "query", 7);
    this.results = createEvent(this, "results", 7);
    this.ctaClick = createEvent(this, "ctaClick", 7);
    this.bhEventCtaClick = createEvent(this, "bhEventCtaClick", 7);
    this.data = void 0;
    this.type = "text";
    this._data = void 0;
    this.search = void 0;
    this._searchBtn = void 0;
    this.searchParams = void 0;
    this._searchParams = void 0;
    this.maxLength = 40;
    this.value = void 0;
    this.placeholder = void 0;
    this.isFluid = false;
    this.isSmall = false;
    this.isDisabled = false;
    this.disableFuzzySearch = false;
    this.disablePointerEvent = false;
    this.isError = false;
    this.isRounded = true;
    this.onFocus = void 0;
    this.onBlur = void 0;
    this.shouldTrim = false;
    this.isButtonSearch = void 0;
    this.filterQuery = "";
    this.searchResults = void 0;
    this.focusOnSearch = false;
  }
  watchData() {
    if (typeof this.data === "string") {
      try {
        this._data = JSON.parse(this.data);
      } catch (_a) {
      }
    } else {
      this._data = this.data;
    }
  }
  watchSearch() {
    this.parseData();
  }
  parseData() {
    this._searchBtn = typeof this.search === "string" ? JSON.parse(this.search) : this.search;
  }
  watchSearchParams() {
    if (typeof this.searchParams === "string") {
      try {
        this._searchParams = JSON.parse(this.searchParams);
      } catch (_a) {
      }
    } else {
      this._searchParams = this.searchParams;
    }
  }
  componentWillLoad() {
    if (typeof this.data === "string") {
      try {
        this._data = JSON.parse(this.data);
      } catch (_a) {
      }
    } else {
      this._data = this.data;
    }
    if (typeof this.searchParams === "string") {
      try {
        this._searchParams = JSON.parse(this.searchParams);
      } catch (_b) {
      }
    } else {
      this._searchParams = this.searchParams;
    }
    this.parseData();
  }
  onInputChange(e) {
    let type = this.type;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      var _a;
      this.value = type === "text" ? e.target.value : e.detail;
      if (this.shouldTrim) {
        if (type === "text") {
          e.target.value = e.target.value.trim();
        } else {
          e.detail = e.detail.trim();
        }
      }
      const params = this._searchParams || (this._data[0] !== void 0 ? Object.keys(this._data[0]) : null);
      if (this.disableFuzzySearch || type === "date-picker") {
        this.searchResults = (_a = this._data) === null || _a === void 0 ? void 0 : _a.filter(function(item) {
          for (let key of params) {
            if (type == "date-picker") {
              if (String(item[key]).indexOf(e.detail) >= 0) return true;
            }
            if (type === "text") {
              if (String(item[key]).toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0) return true;
            }
          }
        });
      } else {
        let searcher = new FuzzySearch(this._data, params);
        this.searchResults = searcher.search(e.detail);
      }
      if (!this.isButtonSearch) {
        this.query.emit(e.target.value);
        this.results.emit(this.searchResults);
      }
      if (e.keyCode === 13) {
        this.onSearchClick(e, {
          key: ""
        });
      }
    }, 500);
  }
  onSearchClick(e, button) {
    e.preventDefault();
    this.filterQuery = this.value;
    this.results.emit(this.searchResults);
    this.ctaClick.emit({
      key: button.key,
      value: this.value
    });
    this.bhEventCtaClick.emit({
      key: button.key,
      value: this.value
    });
  }
  getButtonType(buttonType) {
    if (this.isError) {
      return "critical";
    } else if (this.isDisabled) {
      return "disabled";
    } else {
      return buttonType;
    }
  }
  render() {
    var _a, _b;
    const prefix = this.host.tagName.toLowerCase().replace(components.search.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
    const containerWrapperClasses = ["bh-search__container-wrapper"];
    const textInputClasses = ["text-input"];
    const searchButtonClasses = ["search-button-cta"];
    if (this.isFluid) {
      textInputClasses.push("text-input--fluid");
      searchButtonClasses.push("search-button-cta--fluid");
    }
    if (this.isSmall) {
      searchButtonClasses.push("search-button-cta--small");
    }
    return h(Host, {
      key: "e82328548fa050899d9526abe6d98d9b280c7409",
      class: `bh-search ${this.type === "multi-chip" ? "bh-search-multi-chip" : ""}`
    }, h("div", {
      key: "d35e16c3a6f38cb0053a92565121a45a802232e6",
      class: `${containerWrapperClasses.join(" ")} ${this.type === "multi-chip" ? "bh-search-multi-chip" : ""}`
    }, h("span", {
      key: "f5622c9aae283ad065c2548738baf72cca8d65b1",
      class: `${textInputClasses.join(" ")} ${this.type === "multi-chip" ? "bh-search-multi-chip" : ""}`
    }, this.type === "date-picker" ? h(Components.datePicker, {
      placeholder: this.placeholder,
      value: this.value,
      onKeyUp: (e) => {
        this.onInputChange(e);
      },
      onBhEventChange: (e) => {
        this.onInputChange(e);
      },
      isInvalid: this.isError,
      errorMessage: "",
      label: "",
      disableHelper: true,
      onFocus: this.onFocus && !this.isError,
      onBlur: this.onBlur,
      isSmall: this.isSmall,
      width: this.isFluid ? "fluid" : "medium",
      isRounded: this.isRounded,
      isReadOnly: this.isDisabled
    }) : h(Components.textInput, {
      "is-multi-chip-serach": this.type === "multi-chip" ? true : false,
      placeholder: this.placeholder,
      value: this.value,
      onBhEventInput: (e) => {
        this.onInputChange(e);
      },
      focusOnInput: this.focusOnSearch,
      stopClickPropagation: false,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      isSmall: this.isSmall,
      isFluid: this.isFluid,
      isRounded: this.isRounded,
      isError: this.isError,
      isDisabled: this.isDisabled,
      maxLength: this.maxLength
    })), h("span", {
      key: "c4296fb1a799766f0b5f0aac22a73985de7143db",
      class: searchButtonClasses.join(" ")
    }, this._searchBtn && ((_b = (_a = this._searchBtn) === null || _a === void 0 ? void 0 : _a.slice(0, 1)) === null || _b === void 0 ? void 0 : _b.map((button) => h(Components.button, {
      key: button.key,
      label: "",
      type: this.getButtonType(button.type),
      leftIcon: "search",
      isSmall: this.isSmall,
      isDisabled: this.isDisabled,
      disablePointerEvent: this.disablePointerEvent,
      isLoading: button.isLoading,
      onClick: (e) => {
        if (button.isDisabled) return;
        this.onSearchClick(e, button);
      }
    }))))), this.isButtonSearch && h(Components.button, {
      label: "Search",
      leftIcon: "search",
      isSmall: this.isSmall,
      style: {
        marginLeft: this.isRounded && !this.isSmall ? "-20px" : "-10px"
      },
      onClick: (e) => this.onSearchClick(e, {
        key: ""
      })
    }));
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "data": ["watchData"],
      "search": ["watchSearch"],
      "searchParams": ["watchSearchParams"]
    };
  }
};
BhSearch.style = BhSearchStyle0;
registerStyles("vaadin-grid", i$3`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--vaadin-grid-cell-background, var(--lumo-base-color));
      cursor: default;
      --_cell-padding: var(--vaadin-grid-cell-padding, var(--_cell-default-padding));
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: inherit;
      padding: var(--_cell-padding);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='focused-cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='focused-cell']:focus::before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Empty state */
    [part~='empty-state'] {
      padding: var(--lumo-space-m);
      color: var(--lumo-secondary-text-color);
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      inset: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='last-row'][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    #scroller [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'],
    [part~='footer-cell'],
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] {
      font-weight: 400;
    }

    [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    /* Hide header row top border if previous row is hidden */
    [part~='row'][hidden] + [part~='row'] [part~='header-cell'] {
      border-top: 0;
    }

    [part~='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part~='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      --_resize-handle-width: 3px;
      width: var(--_resize-handle-width);
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    [part='resize-handle']::before {
      transform: translateX(calc(-50% + var(--_resize-handle-width) / 2));
      width: var(--lumo-size-s);
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    [first-frozen-to-end] {
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='even-row'] [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='even-row'] [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    :host([theme~='compact']) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    :host([theme~='compact']) [part~='empty-state'] {
      padding: var(--lumo-space-s);
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl']) [first-frozen-to-end] {
      border-left: none;
      border-right: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    :host([dir='rtl'][overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }
  `, {
  moduleId: "lumo-grid"
});
function getBodyRowCells(row) {
  return row.__cells || Array.from(row.querySelectorAll('[part~="cell"]:not([part~="details-cell"])'));
}
function iterateChildren(container, callback) {
  [...container.children].forEach(callback);
}
function iterateRowCells(row, callback) {
  getBodyRowCells(row).forEach(callback);
  if (row.__detailsCell) {
    callback(row.__detailsCell);
  }
}
function updateColumnOrders(columns, scope, baseOrder) {
  let c = 1;
  columns.forEach((column) => {
    if (c % 10 === 0) {
      c += 1;
    }
    column._order = baseOrder + c * scope;
    c += 1;
  });
}
function updateState(element, attribute, value) {
  switch (typeof value) {
    case "boolean":
      element.toggleAttribute(attribute, value);
      break;
    case "string":
      element.setAttribute(attribute, value);
      break;
    default:
      element.removeAttribute(attribute);
      break;
  }
}
function updatePart(element, value, part) {
  if (value || value === "") {
    addValueToAttribute(element, "part", part);
  } else {
    removeValueFromAttribute(element, "part", part);
  }
}
function updateCellsPart(cells, part, value) {
  cells.forEach((cell) => {
    updatePart(cell, value, part);
  });
}
function updateBooleanRowStates(row, states) {
  const cells = getBodyRowCells(row);
  Object.entries(states).forEach(([state, value]) => {
    updateState(row, state, value);
    const rowPart = `${state}-row`;
    updatePart(row, value, rowPart);
    updateCellsPart(cells, `${rowPart}-cell`, value);
  });
}
function updateStringRowStates(row, states) {
  const cells = getBodyRowCells(row);
  Object.entries(states).forEach(([state, value]) => {
    const prevValue = row.getAttribute(state);
    updateState(row, state, value);
    if (prevValue) {
      const prevRowPart = `${state}-${prevValue}-row`;
      updatePart(row, false, prevRowPart);
      updateCellsPart(cells, `${prevRowPart}-cell`, false);
    }
    if (value) {
      const rowPart = `${state}-${value}-row`;
      updatePart(row, value, rowPart);
      updateCellsPart(cells, `${rowPart}-cell`, value);
    }
  });
}
function updateCellState(cell, attribute, value, part, oldPart) {
  updateState(cell, attribute, value);
  if (oldPart) {
    updatePart(cell, false, oldPart);
  }
  updatePart(cell, value, part || `${attribute}-cell`);
}
var ColumnObserver = class _ColumnObserver {
  constructor(host, callback) {
    this.__host = host;
    this.__callback = callback;
    this.__currentSlots = [];
    this.__onMutation = this.__onMutation.bind(this);
    this.__observer = new MutationObserver(this.__onMutation);
    this.__observer.observe(host, {
      childList: true
    });
    this.__initialCallDebouncer = Debouncer.debounce(this.__initialCallDebouncer, microTask, () => this.__onMutation());
  }
  disconnect() {
    this.__observer.disconnect();
    this.__initialCallDebouncer.cancel();
    this.__toggleSlotChangeListeners(false);
  }
  flush() {
    this.__onMutation();
  }
  __toggleSlotChangeListeners(add) {
    this.__currentSlots.forEach((slot) => {
      if (add) {
        slot.addEventListener("slotchange", this.__onMutation);
      } else {
        slot.removeEventListener("slotchange", this.__onMutation);
      }
    });
  }
  __onMutation() {
    const initialCall = !this.__currentColumns;
    this.__currentColumns = this.__currentColumns || [];
    const columns = _ColumnObserver.getColumns(this.__host);
    const addedColumns = columns.filter((column) => !this.__currentColumns.includes(column));
    const removedColumns = this.__currentColumns.filter((column) => !columns.includes(column));
    const orderChanged = this.__currentColumns.some((column, index) => column !== columns[index]);
    this.__currentColumns = columns;
    this.__toggleSlotChangeListeners(false);
    this.__currentSlots = [...this.__host.children].filter((child) => child instanceof HTMLSlotElement);
    this.__toggleSlotChangeListeners(true);
    const invokeCallback = initialCall || addedColumns.length || removedColumns.length || orderChanged;
    if (invokeCallback) {
      this.__callback(addedColumns, removedColumns);
    }
  }
  /**
   * Default filter for column elements.
   */
  static __isColumnElement(node) {
    return node.nodeType === Node.ELEMENT_NODE && /\bcolumn\b/u.test(node.localName);
  }
  static getColumns(host) {
    const columns = [];
    const isColumnElement = host._isColumnElement || _ColumnObserver.__isColumnElement;
    [...host.children].forEach((child) => {
      if (isColumnElement(child)) {
        columns.push(child);
      } else if (child instanceof HTMLSlotElement) {
        [...child.assignedElements({
          flatten: true
        })].filter((assignedElement) => isColumnElement(assignedElement)).forEach((assignedElement) => columns.push(assignedElement));
      }
    });
    return columns;
  }
};
var ColumnBaseMixin = (superClass) => class ColumnBaseMixin extends superClass {
  static get properties() {
    return {
      /**
       * When set to true, the column is user-resizable.
       * @default false
       */
      resizable: {
        type: Boolean,
        sync: true,
        value() {
          if (this.localName === "vaadin-grid-column-group") {
            return;
          }
          const parent = this.parentNode;
          if (parent && parent.localName === "vaadin-grid-column-group") {
            return parent.resizable || false;
          }
          return false;
        }
      },
      /**
       * When true, the column is frozen. When a column inside of a column group is frozen,
       * all of the sibling columns inside the group will get frozen also.
       * @type {boolean}
       */
      frozen: {
        type: Boolean,
        value: false,
        sync: true
      },
      /**
       * When true, the column is frozen to end of grid.
       *
       * When a column inside of a column group is frozen to end, all of the sibling columns
       * inside the group will get frozen to end also.
       *
       * Column can not be set as `frozen` and `frozenToEnd` at the same time.
       * @attr {boolean} frozen-to-end
       * @type {boolean}
       */
      frozenToEnd: {
        type: Boolean,
        value: false,
        sync: true
      },
      /**
       * When true, the cells for this column will be rendered with the `role` attribute
       * set as `rowheader`, instead of the `gridcell` role value used by default.
       *
       * When a column is set as row header, its cells will be announced by screen readers
       * while navigating to help user identify the current row as uniquely as possible.
       *
       * @attr {boolean} row-header
       * @type {boolean}
       */
      rowHeader: {
        type: Boolean,
        value: false,
        sync: true
      },
      /**
       * When set to true, the cells for this column are hidden.
       */
      hidden: {
        type: Boolean,
        value: false,
        sync: true
      },
      /**
       * Text content to display in the header cell of the column.
       */
      header: {
        type: String,
        sync: true
      },
      /**
       * Aligns the columns cell content horizontally.
       * Supported values: "start", "center" and "end".
       * @attr {start|center|end} text-align
       * @type {GridColumnTextAlign | null | undefined}
       */
      textAlign: {
        type: String,
        sync: true
      },
      /**
       * Custom part name for the header cell.
       *
       * @attr {string} header-part-name
       */
      headerPartName: {
        type: String,
        sync: true
      },
      /**
       * Custom part name for the footer cell.
       *
       * @attr {string} footer-part-name
       */
      footerPartName: {
        type: String,
        sync: true
      },
      /**
       * @type {boolean}
       * @protected
       */
      _lastFrozen: {
        type: Boolean,
        value: false,
        sync: true
      },
      /**
       * @type {boolean}
       * @protected
       */
      _bodyContentHidden: {
        type: Boolean,
        value: false,
        sync: true
      },
      /**
       * @type {boolean}
       * @protected
       */
      _firstFrozenToEnd: {
        type: Boolean,
        value: false,
        sync: true
      },
      /** @protected */
      _order: {
        type: Number,
        sync: true
      },
      /** @private */
      _reorderStatus: {
        type: Boolean,
        sync: true
      },
      /**
       * @type {Array<!HTMLElement>}
       * @protected
       */
      _emptyCells: Array,
      /** @private */
      _headerCell: {
        type: Object,
        sync: true
      },
      /** @private */
      _footerCell: {
        type: Object,
        sync: true
      },
      /** @protected */
      _grid: Object,
      /**
       * By default, the Polymer doesn't invoke the observer
       * during initialization if all of its dependencies are `undefined`.
       * This internal property can be used to force initial invocation of an observer
       * even the other dependencies of the observer are `undefined`.
       *
       * @private
       */
      __initialized: {
        type: Boolean,
        value: true
      },
      /**
       * Custom function for rendering the header content.
       * Receives two arguments:
       *
       * - `root` The header cell content DOM element. Append your content to it.
       * - `column` The `<vaadin-grid-column>` element.
       *
       * @type {GridHeaderFooterRenderer | null | undefined}
       */
      headerRenderer: {
        type: Function,
        sync: true
      },
      /**
       * Represents the final header renderer computed on the set of observable arguments.
       * It is supposed to be used internally when rendering the header cell content.
       *
       * @protected
       * @type {GridHeaderFooterRenderer | undefined}
       */
      _headerRenderer: {
        type: Function,
        computed: "_computeHeaderRenderer(headerRenderer, header, __initialized)"
      },
      /**
       * Custom function for rendering the footer content.
       * Receives two arguments:
       *
       * - `root` The footer cell content DOM element. Append your content to it.
       * - `column` The `<vaadin-grid-column>` element.
       *
       * @type {GridHeaderFooterRenderer | null | undefined}
       */
      footerRenderer: {
        type: Function,
        sync: true
      },
      /**
       * Represents the final footer renderer computed on the set of observable arguments.
       * It is supposed to be used internally when rendering the footer cell content.
       *
       * @protected
       * @type {GridHeaderFooterRenderer | undefined}
       */
      _footerRenderer: {
        type: Function,
        computed: "_computeFooterRenderer(footerRenderer, __initialized)"
      },
      /**
       * An internal property that is mainly used by `vaadin-template-renderer`
       * to identify grid column elements.
       *
       * @private
       */
      __gridColumnElement: {
        type: Boolean,
        value: true
      }
    };
  }
  static get observers() {
    return ["_widthChanged(width, _headerCell, _footerCell, _cells)", "_frozenChanged(frozen, _headerCell, _footerCell, _cells)", "_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells)", "_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells)", "_textAlignChanged(textAlign, _cells, _headerCell, _footerCell)", "_orderChanged(_order, _headerCell, _footerCell, _cells)", "_lastFrozenChanged(_lastFrozen)", "_firstFrozenToEndChanged(_firstFrozenToEnd)", "_onRendererOrBindingChanged(_renderer, _cells, _bodyContentHidden, path)", "_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)", "_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)", "_resizableChanged(resizable, _headerCell)", "_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells)", "_hiddenChanged(hidden, _headerCell, _footerCell, _cells)", "_rowHeaderChanged(rowHeader, _cells)", "__headerFooterPartNameChanged(_headerCell, _footerCell, headerPartName, footerPartName)"];
  }
  /**
   * @return {!Grid | undefined}
   * @protected
   */
  get _grid() {
    if (!this._gridValue) {
      this._gridValue = this._findHostGrid();
    }
    return this._gridValue;
  }
  /**
   * @return {!Array<!HTMLElement>}
   * @protected
   */
  get _allCells() {
    return [].concat(this._cells || []).concat(this._emptyCells || []).concat(this._headerCell).concat(this._footerCell).filter((cell) => cell);
  }
  /** @protected */
  connectedCallback() {
    super.connectedCallback();
    requestAnimationFrame(() => {
      if (!this._grid) {
        return;
      }
      this._allCells.forEach((cell) => {
        if (!cell._content.parentNode) {
          this._grid.appendChild(cell._content);
        }
      });
    });
  }
  /** @protected */
  disconnectedCallback() {
    super.disconnectedCallback();
    requestAnimationFrame(() => {
      if (this._grid) {
        return;
      }
      this._allCells.forEach((cell) => {
        if (cell._content.parentNode) {
          cell._content.parentNode.removeChild(cell._content);
        }
      });
    });
    this._gridValue = void 0;
  }
  /** @protected */
  ready() {
    super.ready();
    processTemplates(this);
  }
  /**
   * @return {!Grid | undefined}
   * @protected
   */
  _findHostGrid() {
    let el = this;
    while (el && !/^vaadin.*grid(-pro)?$/u.test(el.localName)) {
      el = el.assignedSlot ? el.assignedSlot.parentNode : el.parentNode;
    }
    return el || void 0;
  }
  /** @protected */
  _renderHeaderAndFooter() {
    this._renderHeaderCellContent(this._headerRenderer, this._headerCell);
    this._renderFooterCellContent(this._footerRenderer, this._footerCell);
  }
  /** @private */
  _flexGrowChanged(flexGrow) {
    if (this.parentElement && this.parentElement._columnPropChanged) {
      this.parentElement._columnPropChanged("flexGrow");
    }
    this._allCells.forEach((cell) => {
      cell.style.flexGrow = flexGrow;
    });
  }
  /** @private */
  _orderChanged(order2) {
    this._allCells.forEach((cell) => {
      cell.style.order = order2;
    });
  }
  /** @private */
  _widthChanged(width) {
    if (this.parentElement && this.parentElement._columnPropChanged) {
      this.parentElement._columnPropChanged("width");
    }
    this._allCells.forEach((cell) => {
      cell.style.width = width;
    });
  }
  /** @private */
  _frozenChanged(frozen) {
    if (this.parentElement && this.parentElement._columnPropChanged) {
      this.parentElement._columnPropChanged("frozen", frozen);
    }
    this._allCells.forEach((cell) => {
      updateCellState(cell, "frozen", frozen);
    });
    if (this._grid && this._grid._frozenCellsChanged) {
      this._grid._frozenCellsChanged();
    }
  }
  /** @private */
  _frozenToEndChanged(frozenToEnd) {
    if (this.parentElement && this.parentElement._columnPropChanged) {
      this.parentElement._columnPropChanged("frozenToEnd", frozenToEnd);
    }
    this._allCells.forEach((cell) => {
      if (this._grid && cell.parentElement === this._grid.$.sizer) {
        return;
      }
      updateCellState(cell, "frozen-to-end", frozenToEnd);
    });
    if (this._grid && this._grid._frozenCellsChanged) {
      this._grid._frozenCellsChanged();
    }
  }
  /** @private */
  _lastFrozenChanged(lastFrozen) {
    this._allCells.forEach((cell) => {
      updateCellState(cell, "last-frozen", lastFrozen);
    });
    if (this.parentElement && this.parentElement._columnPropChanged) {
      this.parentElement._lastFrozen = lastFrozen;
    }
  }
  /** @private */
  _firstFrozenToEndChanged(firstFrozenToEnd) {
    this._allCells.forEach((cell) => {
      if (this._grid && cell.parentElement === this._grid.$.sizer) {
        return;
      }
      updateCellState(cell, "first-frozen-to-end", firstFrozenToEnd);
    });
    if (this.parentElement && this.parentElement._columnPropChanged) {
      this.parentElement._firstFrozenToEnd = firstFrozenToEnd;
    }
  }
  /** @private */
  _rowHeaderChanged(rowHeader, cells) {
    if (!cells) {
      return;
    }
    cells.forEach((cell) => {
      cell.setAttribute("role", rowHeader ? "rowheader" : "gridcell");
    });
  }
  /**
   * @param {string} path
   * @return {string}
   * @protected
   */
  _generateHeader(path) {
    return path.substr(path.lastIndexOf(".") + 1).replace(/([A-Z])/gu, "-$1").toLowerCase().replace(/-/gu, " ").replace(/^./u, (match) => match.toUpperCase());
  }
  /** @private */
  _reorderStatusChanged(reorderStatus) {
    const prevStatus = this.__previousReorderStatus;
    const oldPart = prevStatus ? `reorder-${prevStatus}-cell` : "";
    const newPart = `reorder-${reorderStatus}-cell`;
    this._allCells.forEach((cell) => {
      updateCellState(cell, "reorder-status", reorderStatus, newPart, oldPart);
    });
    this.__previousReorderStatus = reorderStatus;
  }
  /** @private */
  _resizableChanged(resizable, headerCell) {
    if (resizable === void 0 || headerCell === void 0) {
      return;
    }
    if (headerCell) {
      [headerCell].concat(this._emptyCells).forEach((cell) => {
        if (cell) {
          const existingHandle = cell.querySelector('[part~="resize-handle"]');
          if (existingHandle) {
            cell.removeChild(existingHandle);
          }
          if (resizable) {
            const handle = document.createElement("div");
            handle.setAttribute("part", "resize-handle");
            cell.appendChild(handle);
          }
        }
      });
    }
  }
  /** @private */
  _textAlignChanged(textAlign) {
    if (textAlign === void 0 || this._grid === void 0) {
      return;
    }
    if (["start", "end", "center"].indexOf(textAlign) === -1) {
      console.warn('textAlign can only be set as "start", "end" or "center"');
      return;
    }
    let textAlignFallback;
    if (getComputedStyle(this._grid).direction === "ltr") {
      if (textAlign === "start") {
        textAlignFallback = "left";
      } else if (textAlign === "end") {
        textAlignFallback = "right";
      }
    } else if (textAlign === "start") {
      textAlignFallback = "right";
    } else if (textAlign === "end") {
      textAlignFallback = "left";
    }
    this._allCells.forEach((cell) => {
      cell._content.style.textAlign = textAlign;
      if (getComputedStyle(cell._content).textAlign !== textAlign) {
        cell._content.style.textAlign = textAlignFallback;
      }
    });
  }
  /** @private */
  _hiddenChanged(hidden) {
    if (this.parentElement && this.parentElement._columnPropChanged) {
      this.parentElement._columnPropChanged("hidden", hidden);
    }
    if (!!hidden !== !!this._previousHidden && this._grid) {
      if (hidden === true) {
        this._allCells.forEach((cell) => {
          if (cell._content.parentNode) {
            cell._content.parentNode.removeChild(cell._content);
          }
        });
      }
      this._grid._debouncerHiddenChanged = Debouncer.debounce(this._grid._debouncerHiddenChanged, animationFrame, () => {
        if (this._grid && this._grid._renderColumnTree) {
          this._grid._renderColumnTree(this._grid._columnTree);
        }
      });
      if (this._grid._debounceUpdateFrozenColumn) {
        this._grid._debounceUpdateFrozenColumn();
      }
      if (this._grid._resetKeyboardNavigation) {
        this._grid._resetKeyboardNavigation();
      }
    }
    this._previousHidden = hidden;
  }
  /** @protected */
  _runRenderer(renderer, cell, model) {
    const isVisibleBodyCell = model && model.item && !cell.parentElement.hidden;
    const shouldRender = isVisibleBodyCell || renderer === this._headerRenderer || renderer === this._footerRenderer;
    if (!shouldRender) {
      return;
    }
    const args = [cell._content, this];
    if (isVisibleBodyCell) {
      args.push(model);
    }
    renderer.apply(this, args);
  }
  /**
   * Renders the content to the given cells using a renderer.
   *
   * @private
   */
  __renderCellsContent(renderer, cells) {
    if (this.hidden || !this._grid) {
      return;
    }
    cells.forEach((cell) => {
      if (!cell.parentElement) {
        return;
      }
      const model = this._grid.__getRowModel(cell.parentElement);
      if (!renderer) {
        return;
      }
      if (cell._renderer !== renderer) {
        this._clearCellContent(cell);
      }
      cell._renderer = renderer;
      this._runRenderer(renderer, cell, model);
    });
  }
  /**
   * Clears the content of a cell.
   *
   * @protected
   */
  _clearCellContent(cell) {
    cell._content.innerHTML = "";
    delete cell._content._$litPart$;
  }
  /**
   * Renders the header cell content using a renderer,
   * and then updates the visibility of the parent row depending on
   * whether all its children cells are empty or not.
   *
   * @protected
   */
  _renderHeaderCellContent(headerRenderer, headerCell) {
    if (!headerCell || !headerRenderer) {
      return;
    }
    this.__renderCellsContent(headerRenderer, [headerCell]);
    if (this._grid && headerCell.parentElement) {
      this._grid.__debounceUpdateHeaderFooterRowVisibility(headerCell.parentElement);
    }
  }
  /** @protected */
  _onHeaderRendererOrBindingChanged(headerRenderer, headerCell, ..._bindings) {
    this._renderHeaderCellContent(headerRenderer, headerCell);
  }
  /** @private */
  __headerFooterPartNameChanged(headerCell, footerCell, headerPartName, footerPartName) {
    [{
      cell: headerCell,
      partName: headerPartName
    }, {
      cell: footerCell,
      partName: footerPartName
    }].forEach(({
      cell,
      partName
    }) => {
      if (cell) {
        const customParts = cell.__customParts || [];
        cell.part.remove(...customParts);
        cell.__customParts = partName ? partName.trim().split(" ") : [];
        cell.part.add(...cell.__customParts);
      }
    });
  }
  /**
   * Renders the content of body cells using a renderer.
   *
   * @protected
   */
  _renderBodyCellsContent(renderer, cells) {
    if (!cells || !renderer) {
      return;
    }
    this.__renderCellsContent(renderer, cells);
  }
  /** @protected */
  _onRendererOrBindingChanged(renderer, cells, ..._bindings) {
    this._renderBodyCellsContent(renderer, cells);
  }
  /**
   * Renders the footer cell content using a renderer
   * and then updates the visibility of the parent row depending on
   * whether all its children cells are empty or not.
   *
   * @protected
   */
  _renderFooterCellContent(footerRenderer, footerCell) {
    if (!footerCell || !footerRenderer) {
      return;
    }
    this.__renderCellsContent(footerRenderer, [footerCell]);
    if (this._grid && footerCell.parentElement) {
      this._grid.__debounceUpdateHeaderFooterRowVisibility(footerCell.parentElement);
    }
  }
  /** @protected */
  _onFooterRendererOrBindingChanged(footerRenderer, footerCell) {
    this._renderFooterCellContent(footerRenderer, footerCell);
  }
  /** @private */
  __setTextContent(node, textContent) {
    if (node.textContent !== textContent) {
      node.textContent = textContent;
    }
  }
  /**
   * Renders the text header to the header cell.
   *
   * @private
   */
  __textHeaderRenderer() {
    this.__setTextContent(this._headerCell._content, this.header);
  }
  /**
   * Computes the property name based on the path and renders it to the header cell.
   * If the path is not defined, then nothing is rendered.
   *
   * @protected
   */
  _defaultHeaderRenderer() {
    if (!this.path) {
      return;
    }
    this.__setTextContent(this._headerCell._content, this._generateHeader(this.path));
  }
  /**
   * Computes the item property value based on the path and renders it to the body cell.
   * If the path is not defined, then nothing is rendered.
   *
   * @protected
   */
  _defaultRenderer(root, _owner, {
    item
  }) {
    if (!this.path) {
      return;
    }
    this.__setTextContent(root, get(this.path, item));
  }
  /**
   * By default, nothing is rendered to the footer cell.
   *
   * @protected
   */
  _defaultFooterRenderer() {
  }
  /**
   * Computes the final header renderer for the `_headerRenderer` computed property.
   * All the arguments are observable by the Polymer, it re-calls the method
   * once an argument is changed to update the property value.
   *
   * @protected
   * @return {GridHeaderFooterRenderer | undefined}
   */
  _computeHeaderRenderer(headerRenderer, header) {
    if (headerRenderer) {
      return headerRenderer;
    }
    if (header !== void 0 && header !== null) {
      return this.__textHeaderRenderer;
    }
    return this._defaultHeaderRenderer;
  }
  /**
   * Computes the final renderer for the `_renderer` property.
   * All the arguments are observable by the Polymer, it re-calls the method
   * once an argument is changed to update the property value.
   *
   * @protected
   * @return {GridBodyRenderer | undefined}
   */
  _computeRenderer(renderer) {
    if (renderer) {
      return renderer;
    }
    return this._defaultRenderer;
  }
  /**
   * Computes the final footer renderer for the `_footerRenderer` property.
   * All the arguments are observable by the Polymer, it re-calls the method
   * once an argument is changed to update the property value.
   *
   * @protected
   * @return {GridHeaderFooterRenderer | undefined}
   */
  _computeFooterRenderer(footerRenderer) {
    if (footerRenderer) {
      return footerRenderer;
    }
    return this._defaultFooterRenderer;
  }
};
var GridColumnMixin = (superClass) => class extends ColumnBaseMixin(DirMixin(superClass)) {
  static get properties() {
    return {
      /**
       * Width of the cells for this column.
       *
       * Please note that using the `em` length unit is discouraged as
       * it might lead to misalignment issues if the header, body, and footer
       * cells have different font sizes. Instead, use `rem` if you need
       * a length unit relative to the font size.
       */
      width: {
        type: String,
        value: "100px",
        sync: true
      },
      /**
       * Flex grow ratio for the cell widths. When set to 0, cell width is fixed.
       * @attr {number} flex-grow
       * @type {number}
       */
      flexGrow: {
        type: Number,
        value: 1,
        sync: true
      },
      /**
       * Custom function for rendering the cell content.
       * Receives three arguments:
       *
       * - `root` The cell content DOM element. Append your content to it.
       * - `column` The `<vaadin-grid-column>` element.
       * - `model` The object with the properties related with
       *   the rendered item, contains:
       *   - `model.index` The index of the item.
       *   - `model.item` The item.
       *   - `model.expanded` Sublevel toggle state.
       *   - `model.level` Level of the tree represented with a horizontal offset of the toggle button.
       *   - `model.selected` Selected state.
       *   - `model.detailsOpened` Details opened state.
       *
       * @type {GridBodyRenderer | null | undefined}
       */
      renderer: {
        type: Function,
        sync: true
      },
      /**
       * Represents the final renderer computed on the set of observable arguments.
       * It is supposed to be used internally when rendering the content of a body cell.
       *
       * @protected
       * @type {GridBodyRenderer | undefined}
       */
      _renderer: {
        type: Function,
        computed: "_computeRenderer(renderer, __initialized)"
      },
      /**
       * Path to an item sub-property whose value gets displayed in the column body cells.
       * The property name is also shown in the column header if an explicit header or renderer isn't defined.
       */
      path: {
        type: String,
        sync: true
      },
      /**
       * Automatically sets the width of the column based on the column contents when this is set to `true`.
       *
       * For performance reasons the column width is calculated automatically only once when the grid items
       * are rendered for the first time and the calculation only considers the rows which are currently
       * rendered in DOM (a bit more than what is currently visible). If the grid is scrolled, or the cell
       * content changes, the column width might not match the contents anymore.
       *
       * Hidden columns are ignored in the calculation and their widths are not automatically updated when
       * you show a column that was initially hidden.
       *
       * You can manually trigger the auto sizing behavior again by calling `grid.recalculateColumnWidths()`.
       *
       * The column width may still grow larger when `flexGrow` is not 0.
       * @attr {boolean} auto-width
       * @type {boolean}
       */
      autoWidth: {
        type: Boolean,
        value: false
      },
      /**
       * When true, wraps the cell's slot into an element with role="button", and sets
       * the tabindex attribute on the button element, instead of the cell itself.
       * This is needed to keep focus in sync with VoiceOver cursor when navigating
       * with Control + Option + arrow keys: focusing the `<td>` element does not fire
       * a focus event, but focusing an element with role="button" inside a cell fires it.
       * @protected
       */
      _focusButtonMode: {
        type: Boolean,
        value: false
      },
      /**
       * @type {Array<!HTMLElement>}
       * @protected
       */
      _cells: {
        type: Array,
        sync: true
      }
    };
  }
};
var GridColumn = class extends GridColumnMixin(PolymerElement) {
  static get is() {
    return "vaadin-grid-column";
  }
};
defineCustomElement(GridColumn);
var A11yMixin = (superClass) => class A11yMixin extends superClass {
  static get properties() {
    return {
      /**
       * String used to label the grid to screen reader users.
       * @attr {string} accessible-name
       */
      accessibleName: {
        type: String
      }
    };
  }
  static get observers() {
    return ["_a11yUpdateGridSize(size, _columnTree)"];
  }
  /** @private */
  _a11yGetHeaderRowCount(_columnTree) {
    return _columnTree.filter((level) => level.some((col) => col.headerRenderer || col.path && col.header !== null || col.header)).length;
  }
  /** @private */
  _a11yGetFooterRowCount(_columnTree) {
    return _columnTree.filter((level) => level.some((col) => col.headerRenderer)).length;
  }
  /** @private */
  _a11yUpdateGridSize(size, _columnTree) {
    if (size === void 0 || _columnTree === void 0) {
      return;
    }
    const bodyColumns = _columnTree[_columnTree.length - 1];
    this.$.table.setAttribute("aria-rowcount", size + this._a11yGetHeaderRowCount(_columnTree) + this._a11yGetFooterRowCount(_columnTree));
    this.$.table.setAttribute("aria-colcount", bodyColumns && bodyColumns.length || 0);
    this._a11yUpdateHeaderRows();
    this._a11yUpdateFooterRows();
  }
  /** @protected */
  _a11yUpdateHeaderRows() {
    iterateChildren(this.$.header, (headerRow, index) => {
      headerRow.setAttribute("aria-rowindex", index + 1);
    });
  }
  /** @protected */
  _a11yUpdateFooterRows() {
    iterateChildren(this.$.footer, (footerRow, index) => {
      footerRow.setAttribute("aria-rowindex", this._a11yGetHeaderRowCount(this._columnTree) + this.size + index + 1);
    });
  }
  /**
   * @param {!HTMLElement} row
   * @param {number} index
   * @protected
   */
  _a11yUpdateRowRowindex(row, index) {
    row.setAttribute("aria-rowindex", index + this._a11yGetHeaderRowCount(this._columnTree) + 1);
  }
  /**
   * @param {!HTMLElement} row
   * @param {boolean} selected
   * @protected
   */
  _a11yUpdateRowSelected(row, selected) {
    row.setAttribute("aria-selected", Boolean(selected));
    iterateRowCells(row, (cell) => {
      cell.setAttribute("aria-selected", Boolean(selected));
    });
  }
  /**
   * @param {!HTMLElement} row
   * @protected
   */
  _a11yUpdateRowExpanded(row) {
    if (this.__isRowExpandable(row)) {
      row.setAttribute("aria-expanded", "false");
    } else if (this.__isRowCollapsible(row)) {
      row.setAttribute("aria-expanded", "true");
    } else {
      row.removeAttribute("aria-expanded");
    }
  }
  /**
   * @param {!HTMLElement} row
   * @param {number} level
   * @protected
   */
  _a11yUpdateRowLevel(row, level) {
    if (level > 0 || this.__isRowCollapsible(row) || this.__isRowExpandable(row)) {
      row.setAttribute("aria-level", level + 1);
    } else {
      row.removeAttribute("aria-level");
    }
  }
  /**
   * @param {!HTMLElement} row
   * @param {!HTMLElement} detailsCell
   * @protected
   */
  _a11ySetRowDetailsCell(row, detailsCell) {
    iterateRowCells(row, (cell) => {
      if (cell !== detailsCell) {
        cell.setAttribute("aria-controls", detailsCell.id);
      }
    });
  }
  /**
   * @param {!HTMLElement} row
   * @param {number} colspan
   * @protected
   */
  _a11yUpdateCellColspan(cell, colspan) {
    cell.setAttribute("aria-colspan", Number(colspan));
  }
  /** @protected */
  _a11yUpdateSorters() {
    Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach((sorter) => {
      let cellContent = sorter.parentNode;
      while (cellContent && cellContent.localName !== "vaadin-grid-cell-content") {
        cellContent = cellContent.parentNode;
      }
      if (cellContent && cellContent.assignedSlot) {
        const cell = cellContent.assignedSlot.parentNode;
        cell.setAttribute("aria-sort", {
          asc: "ascending",
          desc: "descending"
        }[String(sorter.direction)] || "none");
      }
    });
  }
};
var isFocusable = (target) => {
  return target.offsetParent && !target.part.contains("body-cell") && isElementFocusable(target) && getComputedStyle(target).visibility !== "hidden";
};
var ActiveItemMixin = (superClass) => class ActiveItemMixin extends superClass {
  static get properties() {
    return {
      /**
       * The item user has last interacted with. Turns to `null` after user deactivates
       * the item by re-interacting with the currently active item.
       * @type {GridItem}
       */
      activeItem: {
        type: Object,
        notify: true,
        value: null,
        sync: true
      }
    };
  }
  /** @protected */
  ready() {
    super.ready();
    this.$.scroller.addEventListener("click", this._onClick.bind(this));
    this.addEventListener("cell-activate", this._activateItem.bind(this));
    this.addEventListener("row-activate", this._activateItem.bind(this));
  }
  /** @private */
  _activateItem(e) {
    const model = e.detail.model;
    const clickedItem = model ? model.item : null;
    if (clickedItem) {
      this.activeItem = !this._itemsEqual(this.activeItem, clickedItem) ? clickedItem : null;
    }
  }
  /**
   * Checks whether the click event should not activate the cell on which it occurred.
   *
   * @protected
   */
  _shouldPreventCellActivationOnClick(e) {
    const {
      cell
    } = this._getGridEventLocation(e);
    return (
      // Something has handled this click already, e. g., <vaadin-grid-sorter>
      e.defaultPrevented || // No clicked cell available
      !cell || // Cell is a details cell
      cell.getAttribute("part").includes("details-cell") || // Cell is the empty state cell
      cell === this.$.emptystatecell || // Cell content is focused
      cell._content.contains(this.getRootNode().activeElement) || // Clicked on a focusable element
      this._isFocusable(e.target) || // Clicked on a label element
      e.target instanceof HTMLLabelElement
    );
  }
  /**
   * @param {!MouseEvent} e
   * @protected
   */
  _onClick(e) {
    if (this._shouldPreventCellActivationOnClick(e)) {
      return;
    }
    const {
      cell
    } = this._getGridEventLocation(e);
    if (cell) {
      this.dispatchEvent(new CustomEvent("cell-activate", {
        detail: {
          model: this.__getRowModel(cell.parentElement)
        }
      }));
    }
  }
  /**
   * @param {!Element} target
   * @return {boolean}
   * @protected
   */
  _isFocusable(target) {
    return isFocusable(target);
  }
  /**
   * Fired when the `activeItem` property changes.
   *
   * @event active-item-changed
   */
  /**
   * Fired when the cell is activated with click or keyboard.
   *
   * @event cell-activate
   */
};
function get2(path, object) {
  return path.split(".").reduce((obj, property) => obj[property], object);
}
function checkPaths(arrayToCheck, action, items) {
  if (items.length === 0) {
    return false;
  }
  let result = true;
  arrayToCheck.forEach(({
    path
  }) => {
    if (!path || path.indexOf(".") === -1) {
      return;
    }
    const parentProperty = path.replace(/\.[^.]*$/u, "");
    if (get2(parentProperty, items[0]) === void 0) {
      console.warn(`Path "${path}" used for ${action} does not exist in all of the items, ${action} is disabled.`);
      result = false;
    }
  });
  return result;
}
function normalizeEmptyValue(value) {
  if ([void 0, null].indexOf(value) >= 0) {
    return "";
  } else if (isNaN(value)) {
    return value.toString();
  }
  return value;
}
function compare(a, b2) {
  a = normalizeEmptyValue(a);
  b2 = normalizeEmptyValue(b2);
  if (a < b2) {
    return -1;
  }
  if (a > b2) {
    return 1;
  }
  return 0;
}
function multiSort(items, sortOrders) {
  return items.sort((a, b2) => {
    return sortOrders.map((sortOrder) => {
      if (sortOrder.direction === "asc") {
        return compare(get2(sortOrder.path, a), get2(sortOrder.path, b2));
      } else if (sortOrder.direction === "desc") {
        return compare(get2(sortOrder.path, b2), get2(sortOrder.path, a));
      }
      return 0;
    }).reduce((p, n) => {
      return p !== 0 ? p : n;
    }, 0);
  });
}
function filter(items, filters) {
  return items.filter((item) => {
    return filters.every((filter2) => {
      const value = normalizeEmptyValue(get2(filter2.path, item));
      const filterValueLowercase = normalizeEmptyValue(filter2.value).toString().toLowerCase();
      return value.toString().toLowerCase().includes(filterValueLowercase);
    });
  });
}
var createArrayDataProvider = (allItems) => {
  return (params, callback) => {
    let items = allItems ? [...allItems] : [];
    if (params.filters && checkPaths(params.filters, "filtering", items)) {
      items = filter(items, params.filters);
    }
    if (Array.isArray(params.sortOrders) && params.sortOrders.length && checkPaths(params.sortOrders, "sorting", items)) {
      items = multiSort(items, params.sortOrders);
    }
    const count = Math.min(items.length, params.pageSize);
    const start2 = params.page * count;
    const end2 = start2 + count;
    const slice = items.slice(start2, end2);
    callback(slice, items.length);
  };
};
var ArrayDataProviderMixin = (superClass) => class ArrayDataProviderMixin extends superClass {
  static get properties() {
    return {
      /**
       * An array containing the items which will be passed to renderer functions.
       *
       * @type {Array<!GridItem> | undefined}
       */
      items: {
        type: Array,
        sync: true
      }
    };
  }
  static get observers() {
    return ["__dataProviderOrItemsChanged(dataProvider, items, isAttached, items.*)"];
  }
  /** @private */
  __setArrayDataProvider(items) {
    const arrayDataProvider = createArrayDataProvider(this.items);
    arrayDataProvider.__items = items;
    this._arrayDataProvider = arrayDataProvider;
    this.size = items.length;
    this.dataProvider = arrayDataProvider;
  }
  /**
   * @override
   * @protected
   */
  _onDataProviderPageReceived() {
    super._onDataProviderPageReceived();
    if (this._arrayDataProvider) {
      this.size = this._flatSize;
    }
  }
  /** @private */
  __dataProviderOrItemsChanged(dataProvider, items, isAttached) {
    if (!isAttached) {
      return;
    }
    if (this._arrayDataProvider) {
      if (dataProvider !== this._arrayDataProvider) {
        this._arrayDataProvider = void 0;
        this.items = void 0;
      } else if (!items) {
        this._arrayDataProvider = void 0;
        this.dataProvider = void 0;
        this.size = 0;
        this.clearCache();
      } else if (this._arrayDataProvider.__items === items) {
        this.clearCache();
      } else {
        this.__setArrayDataProvider(items);
      }
    } else if (items) {
      this.__setArrayDataProvider(items);
    }
  }
};
var ColumnAutoWidthMixin = (superClass) => class extends superClass {
  static get properties() {
    return {
      /** @private */
      __pendingRecalculateColumnWidths: {
        type: Boolean,
        value: true
      }
    };
  }
  static get observers() {
    return ["__dataProviderChangedAutoWidth(dataProvider)", "__columnTreeChangedAutoWidth(_columnTree)", "__flatSizeChangedAutoWidth(_flatSize)"];
  }
  constructor() {
    super();
    this.addEventListener("animationend", this.__onAnimationEndAutoWidth);
  }
  /** @private */
  __onAnimationEndAutoWidth(e) {
    if (e.animationName.indexOf("vaadin-grid-appear") === 0) {
      this.__tryToRecalculateColumnWidthsIfPending();
    }
  }
  /** @private */
  __dataProviderChangedAutoWidth(_dataProvider) {
    if (this.__hasHadRenderedRowsForColumnWidthCalculation) {
      return;
    }
    this.recalculateColumnWidths();
  }
  /** @private */
  __columnTreeChangedAutoWidth(_columnTree) {
    queueMicrotask(() => this.recalculateColumnWidths());
  }
  /** @private */
  __flatSizeChangedAutoWidth() {
    requestAnimationFrame(() => this.__tryToRecalculateColumnWidthsIfPending());
  }
  /**
   * @protected
   * @override
   */
  _onDataProviderPageLoaded() {
    super._onDataProviderPageLoaded();
    this.__tryToRecalculateColumnWidthsIfPending();
  }
  /**
   * @protected
   * @override
   */
  _updateFrozenColumn() {
    super._updateFrozenColumn();
    this.__tryToRecalculateColumnWidthsIfPending();
  }
  /** @private */
  __getIntrinsicWidth(col) {
    if (!this.__intrinsicWidthCache.has(col)) {
      this.__calculateAndCacheIntrinsicWidths([col]);
    }
    return this.__intrinsicWidthCache.get(col);
  }
  /** @private */
  __getDistributedWidth(col, innerColumn) {
    if (col == null || col === this) {
      return 0;
    }
    const columnWidth = Math.max(this.__getIntrinsicWidth(col), this.__getDistributedWidth((col.assignedSlot || col).parentElement, col));
    if (!innerColumn) {
      return columnWidth;
    }
    const columnGroup = col;
    const columnGroupWidth = columnWidth;
    const sumOfWidthOfAllChildColumns = columnGroup._visibleChildColumns.map((col2) => this.__getIntrinsicWidth(col2)).reduce((sum, curr) => sum + curr, 0);
    const extraNecessarySpaceForGridColumnGroup = Math.max(0, columnGroupWidth - sumOfWidthOfAllChildColumns);
    const proportionOfExtraSpace = this.__getIntrinsicWidth(innerColumn) / sumOfWidthOfAllChildColumns;
    const shareOfInnerColumnFromNecessaryExtraSpace = proportionOfExtraSpace * extraNecessarySpaceForGridColumnGroup;
    return this.__getIntrinsicWidth(innerColumn) + shareOfInnerColumnFromNecessaryExtraSpace;
  }
  /**
   * @param {!Array<!GridColumn>} cols the columns to auto size based on their content width
   * @private
   */
  _recalculateColumnWidths() {
    this.__virtualizer.flush();
    [...this.$.header.children, ...this.$.footer.children].forEach((row) => {
      if (row.__debounceUpdateHeaderFooterRowVisibility) {
        row.__debounceUpdateHeaderFooterRowVisibility.flush();
      }
    });
    this.__hasHadRenderedRowsForColumnWidthCalculation = this.__hasHadRenderedRowsForColumnWidthCalculation || this._getRenderedRows().length > 0;
    this.__intrinsicWidthCache = /* @__PURE__ */ new Map();
    const fvi = this._firstVisibleIndex;
    const lvi = this._lastVisibleIndex;
    this.__viewportRowsCache = this._getRenderedRows().filter((row) => row.index >= fvi && row.index <= lvi);
    const cols = this.__getAutoWidthColumns();
    this.__calculateAndCacheIntrinsicWidths(cols);
    cols.forEach((col) => {
      col.width = `${this.__getDistributedWidth(col)}px`;
    });
  }
  /**
   * Toggles the cell content for the given column to use or not use auto width.
   *
   * While content for all the column cells uses auto width (instead of the default 100%),
   * their offsetWidth can be used to calculate the collective intrinsic width of the column.
   *
   * @private
   */
  __setVisibleCellContentAutoWidth(col, autoWidth) {
    col._allCells.filter((cell) => {
      if (this.$.items.contains(cell)) {
        return this.__viewportRowsCache.includes(cell.parentElement);
      }
      return true;
    }).forEach((cell) => {
      cell.__measuringAutoWidth = autoWidth;
      if (cell.__measuringAutoWidth) {
        cell.__originalWidth = cell.style.width;
        cell.style.width = "auto";
        cell.style.position = "absolute";
      } else {
        cell.style.width = cell.__originalWidth;
        delete cell.__originalWidth;
        cell.style.position = "";
      }
    });
    if (autoWidth) {
      this.$.scroller.setAttribute("measuring-auto-width", "");
    } else {
      this.$.scroller.removeAttribute("measuring-auto-width");
    }
  }
  /**
   * Returns the maximum intrinsic width of the cell content in the given column.
   * Only cells which are marked for measuring auto width are considered.
   *
   * @private
   */
  __getAutoWidthCellsMaxWidth(col) {
    return col._allCells.reduce((width, cell) => {
      return cell.__measuringAutoWidth ? Math.max(width, cell.offsetWidth + 1) : width;
    }, 0);
  }
  /**
   * Calculates and caches the intrinsic width of each given column.
   *
   * @private
   */
  __calculateAndCacheIntrinsicWidths(cols) {
    cols.forEach((col) => this.__setVisibleCellContentAutoWidth(col, true));
    cols.forEach((col) => {
      const width = this.__getAutoWidthCellsMaxWidth(col);
      this.__intrinsicWidthCache.set(col, width);
    });
    cols.forEach((col) => this.__setVisibleCellContentAutoWidth(col, false));
  }
  /**
   * Updates the `width` of all columns which have `autoWidth` set to `true`.
   */
  recalculateColumnWidths() {
    if (!this.__isReadyForColumnWidthCalculation()) {
      this.__pendingRecalculateColumnWidths = true;
      return;
    }
    this._recalculateColumnWidths();
  }
  /**
   * This internal method should be called whenever a condition that may have prevented
   * previous column width calculation is resolved.
   * @private
   */
  __tryToRecalculateColumnWidthsIfPending() {
    if (!this.__pendingRecalculateColumnWidths) {
      return;
    }
    this.__pendingRecalculateColumnWidths = false;
    this.recalculateColumnWidths();
  }
  /** @private */
  __getAutoWidthColumns() {
    return this._getColumns().filter((col) => !col.hidden && col.autoWidth);
  }
  /**
   * Returns true if the grid is ready for column width calculation, false otherwise.
   * @private
   */
  __isReadyForColumnWidthCalculation() {
    if (!this._columnTree) {
      return false;
    }
    const undefinedCols = this.__getAutoWidthColumns().filter((col) => !customElements.get(col.localName));
    if (undefinedCols.length) {
      Promise.all(undefinedCols.map((col) => customElements.whenDefined(col.localName))).then(() => {
        this.__tryToRecalculateColumnWidthsIfPending();
      });
      return false;
    }
    const hasRowsWithUndefinedIndex = [...this.$.items.children].some((row) => row.index === void 0);
    const debouncingHiddenChanged = this._debouncerHiddenChanged && this._debouncerHiddenChanged.isActive();
    const debouncingUpdateFrozenColumn = this.__debounceUpdateFrozenColumn && this.__debounceUpdateFrozenColumn.isActive();
    const hasHeight = this.clientHeight > 0;
    return !this._dataProviderController.isLoading() && !hasRowsWithUndefinedIndex && !isElementHidden(this) && !debouncingHiddenChanged && !debouncingUpdateFrozenColumn && hasHeight;
  }
};
var ColumnReorderingMixin = (superClass) => class ColumnReorderingMixin extends superClass {
  static get properties() {
    return {
      /**
       * Set to true to allow column reordering.
       * @attr {boolean} column-reordering-allowed
       * @type {boolean}
       */
      columnReorderingAllowed: {
        type: Boolean,
        value: false
      },
      /** @private */
      _orderBaseScope: {
        type: Number,
        value: 1e7
      }
    };
  }
  static get observers() {
    return ["_updateOrders(_columnTree)"];
  }
  /** @protected */
  ready() {
    super.ready();
    addListener(this, "track", this._onTrackEvent);
    this._reorderGhost = this.shadowRoot.querySelector('[part="reorder-ghost"]');
    this.addEventListener("touchstart", this._onTouchStart.bind(this));
    this.addEventListener("touchmove", this._onTouchMove.bind(this));
    this.addEventListener("touchend", this._onTouchEnd.bind(this));
    this.addEventListener("contextmenu", this._onContextMenu.bind(this));
  }
  /** @private */
  _onContextMenu(e) {
    if (this.hasAttribute("reordering")) {
      e.preventDefault();
      if (!isTouch) {
        this._onTrackEnd();
      }
    }
  }
  /** @private */
  _onTouchStart(e) {
    this._startTouchReorderTimeout = setTimeout(() => {
      this._onTrackStart({
        detail: {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        }
      });
    }, 100);
  }
  /** @private */
  _onTouchMove(e) {
    if (this._draggedColumn) {
      e.preventDefault();
    }
    clearTimeout(this._startTouchReorderTimeout);
  }
  /** @private */
  _onTouchEnd() {
    clearTimeout(this._startTouchReorderTimeout);
    this._onTrackEnd();
  }
  /** @private */
  _onTrackEvent(e) {
    if (e.detail.state === "start") {
      const path = e.composedPath();
      const headerCell = path[path.indexOf(this.$.header) - 2];
      if (!headerCell || !headerCell._content) {
        return;
      }
      if (headerCell._content.contains(this.getRootNode().activeElement)) {
        return;
      }
      if (this.$.scroller.hasAttribute("column-resizing")) {
        return;
      }
      if (!this._touchDevice) {
        this._onTrackStart(e);
      }
    } else if (e.detail.state === "track") {
      this._onTrack(e);
    } else if (e.detail.state === "end") {
      this._onTrackEnd(e);
    }
  }
  /** @private */
  _onTrackStart(e) {
    if (!this.columnReorderingAllowed) {
      return;
    }
    const path = e.composedPath && e.composedPath();
    if (path && path.some((node) => node.hasAttribute && node.hasAttribute("draggable"))) {
      return;
    }
    const headerCell = this._cellFromPoint(e.detail.x, e.detail.y);
    if (!headerCell || !headerCell.getAttribute("part").includes("header-cell")) {
      return;
    }
    this.toggleAttribute("reordering", true);
    this._draggedColumn = headerCell._column;
    while (this._draggedColumn.parentElement.childElementCount === 1) {
      this._draggedColumn = this._draggedColumn.parentElement;
    }
    this._setSiblingsReorderStatus(this._draggedColumn, "allowed");
    this._draggedColumn._reorderStatus = "dragging";
    this._updateGhost(headerCell);
    this._reorderGhost.style.visibility = "visible";
    this._updateGhostPosition(e.detail.x, this._touchDevice ? e.detail.y - 50 : e.detail.y);
    this._autoScroller();
  }
  /** @private */
  _onTrack(e) {
    if (!this._draggedColumn) {
      return;
    }
    const targetCell = this._cellFromPoint(e.detail.x, e.detail.y);
    if (!targetCell) {
      return;
    }
    const targetColumn = this._getTargetColumn(targetCell, this._draggedColumn);
    if (this._isSwapAllowed(this._draggedColumn, targetColumn) && this._isSwappableByPosition(targetColumn, e.detail.x)) {
      const columnTreeLevel = this._columnTree.findIndex((level) => level.includes(targetColumn));
      const levelColumnsInOrder = this._getColumnsInOrder(columnTreeLevel);
      const startIndex = levelColumnsInOrder.indexOf(this._draggedColumn);
      const endIndex = levelColumnsInOrder.indexOf(targetColumn);
      const direction = startIndex < endIndex ? 1 : -1;
      for (let i = startIndex; i !== endIndex; i += direction) {
        this._swapColumnOrders(this._draggedColumn, levelColumnsInOrder[i + direction]);
      }
    }
    this._updateGhostPosition(e.detail.x, this._touchDevice ? e.detail.y - 50 : e.detail.y);
    this._lastDragClientX = e.detail.x;
  }
  /** @private */
  _onTrackEnd() {
    if (!this._draggedColumn) {
      return;
    }
    this.toggleAttribute("reordering", false);
    this._draggedColumn._reorderStatus = "";
    this._setSiblingsReorderStatus(this._draggedColumn, "");
    this._draggedColumn = null;
    this._lastDragClientX = null;
    this._reorderGhost.style.visibility = "hidden";
    this.dispatchEvent(new CustomEvent("column-reorder", {
      detail: {
        columns: this._getColumnsInOrder()
      }
    }));
  }
  /**
   * Returns the columns (or column groups) on the specified header level in visual order.
   * By default, the bottom level is used.
   *
   * @return {!Array<!GridColumn>}
   * @protected
   */
  _getColumnsInOrder(headerLevel = this._columnTree.length - 1) {
    return this._columnTree[headerLevel].filter((c) => !c.hidden).sort((b2, a) => b2._order - a._order);
  }
  /**
   * @param {number} x
   * @param {number} y
   * @return {HTMLElement | undefined}
   * @protected
   */
  _cellFromPoint(x = 0, y = 0) {
    if (!this._draggedColumn) {
      this.$.scroller.toggleAttribute("no-content-pointer-events", true);
    }
    const elementFromPoint = this.shadowRoot.elementFromPoint(x, y);
    this.$.scroller.toggleAttribute("no-content-pointer-events", false);
    return this._getCellFromElement(elementFromPoint);
  }
  /** @private */
  _getCellFromElement(element) {
    if (element) {
      if (element._column) {
        return element;
      }
      const {
        parentElement
      } = element;
      if (parentElement && parentElement._focusButton === element) {
        return parentElement;
      }
    }
    return null;
  }
  /**
   * @param {number} eventClientX
   * @param {number} eventClientY
   * @protected
   */
  _updateGhostPosition(eventClientX, eventClientY) {
    const ghostRect = this._reorderGhost.getBoundingClientRect();
    const targetLeft = eventClientX - ghostRect.width / 2;
    const targetTop = eventClientY - ghostRect.height / 2;
    const _left = parseInt(this._reorderGhost._left || 0);
    const _top = parseInt(this._reorderGhost._top || 0);
    this._reorderGhost._left = _left - (ghostRect.left - targetLeft);
    this._reorderGhost._top = _top - (ghostRect.top - targetTop);
    this._reorderGhost.style.transform = `translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`;
  }
  /**
   * @param {!HTMLElement} cell
   * @return {!HTMLElement}
   * @protected
   */
  _updateGhost(cell) {
    const ghost = this._reorderGhost;
    ghost.textContent = cell._content.innerText;
    const style = window.getComputedStyle(cell);
    ["boxSizing", "display", "width", "height", "background", "alignItems", "padding", "border", "flex-direction", "overflow"].forEach((propertyName) => {
      ghost.style[propertyName] = style[propertyName];
    });
    return ghost;
  }
  /** @private */
  _updateOrders(columnTree) {
    if (columnTree === void 0) {
      return;
    }
    columnTree[0].forEach((column) => {
      column._order = 0;
    });
    updateColumnOrders(columnTree[0], this._orderBaseScope, 0);
  }
  /**
   * @param {!GridColumn} column
   * @param {string} status
   * @protected
   */
  _setSiblingsReorderStatus(column, status) {
    iterateChildren(column.parentNode, (sibling) => {
      if (/column/u.test(sibling.localName) && this._isSwapAllowed(sibling, column)) {
        sibling._reorderStatus = status;
      }
    });
  }
  /** @protected */
  _autoScroller() {
    if (this._lastDragClientX) {
      const rightDiff = this._lastDragClientX - this.getBoundingClientRect().right + 50;
      const leftDiff = this.getBoundingClientRect().left - this._lastDragClientX + 50;
      if (rightDiff > 0) {
        this.$.table.scrollLeft += rightDiff / 10;
      } else if (leftDiff > 0) {
        this.$.table.scrollLeft -= leftDiff / 10;
      }
    }
    if (this._draggedColumn) {
      setTimeout(() => this._autoScroller(), 10);
    }
  }
  /**
   * @param {GridColumn | undefined} column1
   * @param {GridColumn | undefined} column2
   * @return {boolean | undefined}
   * @protected
   */
  _isSwapAllowed(column1, column2) {
    if (column1 && column2) {
      const differentColumns = column1 !== column2;
      const sameParent = column1.parentElement === column2.parentElement;
      const sameFrozen = column1.frozen && column2.frozen || // Both columns are frozen
      column1.frozenToEnd && column2.frozenToEnd || // Both columns are frozen to end
      !column1.frozen && !column1.frozenToEnd && !column2.frozen && !column2.frozenToEnd;
      return differentColumns && sameParent && sameFrozen;
    }
  }
  /**
   * @param {!GridColumn} targetColumn
   * @param {number} clientX
   * @return {boolean}
   * @protected
   */
  _isSwappableByPosition(targetColumn, clientX) {
    const targetCell = Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).find((cell) => targetColumn.contains(cell._column));
    const sourceCellRect = this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect();
    const targetRect = targetCell.getBoundingClientRect();
    if (targetRect.left > sourceCellRect.left) {
      return clientX > targetRect.right - sourceCellRect.width;
    }
    return clientX < targetRect.left + sourceCellRect.width;
  }
  /**
   * @param {!GridColumn} column1
   * @param {!GridColumn} column2
   * @protected
   */
  _swapColumnOrders(column1, column2) {
    [column1._order, column2._order] = [column2._order, column1._order];
    this._debounceUpdateFrozenColumn();
    this._updateFirstAndLastColumn();
  }
  /**
   * @param {HTMLElement | undefined} targetCell
   * @param {GridColumn} draggedColumn
   * @return {GridColumn | undefined}
   * @protected
   */
  _getTargetColumn(targetCell, draggedColumn) {
    if (targetCell && draggedColumn) {
      let candidate = targetCell._column;
      while (candidate.parentElement !== draggedColumn.parentElement && candidate !== this) {
        candidate = candidate.parentElement;
      }
      if (candidate.parentElement === draggedColumn.parentElement) {
        return candidate;
      }
      return targetCell._column;
    }
  }
  /**
   * Fired when the columns in the grid are reordered.
   *
   * @event column-reorder
   * @param {Object} detail
   * @param {Object} detail.columns the columns in the new order
   */
};
var ColumnResizingMixin = (superClass) => class ColumnResizingMixin extends superClass {
  /** @protected */
  ready() {
    super.ready();
    const scroller = this.$.scroller;
    addListener(scroller, "track", this._onHeaderTrack.bind(this));
    scroller.addEventListener("touchmove", (e) => scroller.hasAttribute("column-resizing") && e.preventDefault());
    scroller.addEventListener("contextmenu", (e) => e.target.getAttribute("part") === "resize-handle" && e.preventDefault());
    scroller.addEventListener("mousedown", (e) => e.target.getAttribute("part") === "resize-handle" && e.preventDefault());
  }
  /** @private */
  _onHeaderTrack(e) {
    const handle = e.target;
    if (handle.getAttribute("part") === "resize-handle") {
      const cell = handle.parentElement;
      let column = cell._column;
      this.$.scroller.toggleAttribute("column-resizing", true);
      while (column.localName === "vaadin-grid-column-group") {
        column = column._childColumns.slice(0).sort((a, b2) => a._order - b2._order).filter((column2) => !column2.hidden).pop();
      }
      const isRTL = this.__isRTL;
      const eventX = e.detail.x;
      const columnRowCells = Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]'));
      const targetCell = columnRowCells.find((cell2) => cell2._column === column);
      if (targetCell.offsetWidth) {
        const style = getComputedStyle(targetCell._content);
        const minWidth = 10 + parseInt(style.paddingLeft) + parseInt(style.paddingRight) + parseInt(style.borderLeftWidth) + parseInt(style.borderRightWidth) + parseInt(style.marginLeft) + parseInt(style.marginRight);
        let maxWidth;
        const cellWidth = targetCell.offsetWidth;
        const cellRect = targetCell.getBoundingClientRect();
        if (targetCell.hasAttribute("frozen-to-end")) {
          maxWidth = cellWidth + (isRTL ? eventX - cellRect.right : cellRect.left - eventX);
        } else {
          maxWidth = cellWidth + (isRTL ? cellRect.left - eventX : eventX - cellRect.right);
        }
        column.width = `${Math.max(minWidth, maxWidth)}px`;
        column.flexGrow = 0;
      }
      columnRowCells.sort((a, b2) => a._column._order - b2._column._order).forEach((cell2, index, array) => {
        if (index < array.indexOf(targetCell)) {
          cell2._column.width = `${cell2.offsetWidth}px`;
          cell2._column.flexGrow = 0;
        }
      });
      const cellFrozenToEnd = this._frozenToEndCells[0];
      if (cellFrozenToEnd && this.$.table.scrollWidth > this.$.table.offsetWidth) {
        const frozenRect = cellFrozenToEnd.getBoundingClientRect();
        const offset2 = eventX - (isRTL ? frozenRect.right : frozenRect.left);
        if (isRTL && offset2 <= 0 || !isRTL && offset2 >= 0) {
          this.$.table.scrollLeft += offset2;
        }
      }
      if (e.detail.state === "end") {
        this.$.scroller.toggleAttribute("column-resizing", false);
        this.dispatchEvent(new CustomEvent("column-resize", {
          detail: {
            resizedColumn: column
          }
        }));
      }
      this._resizeHandler();
    }
  }
  /**
   * Fired when a column in the grid is resized by the user.
   *
   * @event column-resize
   * @param {Object} detail
   * @param {Object} detail.resizedColumn the column that was resized
   */
};
function getFlatIndexContext(cache, flatIndex, level = 0) {
  let levelIndex = flatIndex;
  for (const subCache of cache.subCaches) {
    const index = subCache.parentCacheIndex;
    if (levelIndex <= index) {
      break;
    } else if (levelIndex <= index + subCache.flatSize) {
      return getFlatIndexContext(subCache, levelIndex - index - 1, level + 1);
    }
    levelIndex -= subCache.flatSize;
  }
  return {
    cache,
    item: cache.items[levelIndex],
    index: levelIndex,
    page: Math.floor(levelIndex / cache.pageSize),
    level
  };
}
function getItemContext({
  getItemId
}, cache, targetItem, level = 0, levelFlatIndex = 0) {
  for (let index = 0; index < cache.items.length; index++) {
    const item = cache.items[index];
    if (!!item && getItemId(item) === getItemId(targetItem)) {
      return {
        cache,
        level,
        item,
        index,
        page: Math.floor(index / cache.pageSize),
        subCache: cache.getSubCache(index),
        flatIndex: levelFlatIndex + cache.getFlatIndex(index)
      };
    }
  }
  for (const subCache of cache.subCaches) {
    const parentItemFlatIndex = levelFlatIndex + cache.getFlatIndex(subCache.parentCacheIndex);
    const result = getItemContext({
      getItemId
    }, subCache, targetItem, level + 1, parentItemFlatIndex + 1);
    if (result) {
      return result;
    }
  }
}
function getFlatIndexByPath(cache, [levelIndex, ...subIndexes], flatIndex = 0) {
  if (levelIndex === Infinity) {
    levelIndex = cache.size - 1;
  }
  const flatIndexOnLevel = cache.getFlatIndex(levelIndex);
  const subCache = cache.getSubCache(levelIndex);
  if (subCache && subCache.flatSize > 0 && subIndexes.length) {
    return getFlatIndexByPath(subCache, subIndexes, flatIndex + flatIndexOnLevel + 1);
  }
  return flatIndex + flatIndexOnLevel;
}
var Cache = class _Cache {
  /**
   * A context object.
   *
   * @type {{ isExpanded: (item: unknown) => boolean }}
   */
  context;
  /**
   * The number of items to display per page.
   *
   * @type {number}
   */
  pageSize;
  /**
   * An array of cached items.
   *
   * @type {object[]}
   */
  items = [];
  /**
   * A map where the key is a requested page and the value is a callback
   * that will be called with data once the request is complete.
   *
   * @type {Record<number, Function>}
   */
  pendingRequests = {};
  /**
   * A map where the key is the index of an item in the `items` array
   * and the value is a sub-cache associated with that item.
   *
   * Note, it's intentionally defined as an object instead of a Map
   * to ensure that Object.entries() returns an array with keys sorted
   * in alphabetical order, rather than the order they were added.
   *
   * @type {Record<number, Cache>}
   * @private
   */
  __subCacheByIndex = {};
  /**
   * The number of items.
   *
   * @type {number}
   * @private
   */
  __size = 0;
  /**
   * The total number of items, including items from expanded sub-caches.
   *
   * @type {number}
   * @private
   */
  __flatSize = 0;
  /**
   * @param {Cache['context']} context
   * @param {number} pageSize
   * @param {number | undefined} size
   * @param {Cache | undefined} parentCache
   * @param {number | undefined} parentCacheIndex
   */
  constructor(context, pageSize, size, parentCache, parentCacheIndex) {
    this.context = context;
    this.pageSize = pageSize;
    this.size = size;
    this.parentCache = parentCache;
    this.parentCacheIndex = parentCacheIndex;
    this.__flatSize = size || 0;
  }
  /**
   * An item in the parent cache that the current cache is associated with.
   *
   * @return {object | undefined}
   */
  get parentItem() {
    return this.parentCache && this.parentCache.items[this.parentCacheIndex];
  }
  /**
   * An array of sub-caches sorted in the same order as their associated items
   * appear in the `items` array.
   *
   * @return {Cache[]}
   */
  get subCaches() {
    return Object.values(this.__subCacheByIndex);
  }
  /**
   * Whether the cache or any of its descendant caches have pending requests.
   *
   * @return {boolean}
   */
  get isLoading() {
    if (Object.keys(this.pendingRequests).length > 0) {
      return true;
    }
    return this.subCaches.some((subCache) => subCache.isLoading);
  }
  /**
   * The total number of items, including items from expanded sub-caches.
   *
   * @return {number}
   */
  get flatSize() {
    return this.__flatSize;
  }
  /**
   * The total number of items, including items from expanded sub-caches.
   *
   * @protected
   * @deprecated since 24.3 and will be removed in Vaadin 25.
   */
  get effectiveSize() {
    console.warn("<vaadin-grid> The `effectiveSize` property of ItemCache is deprecated and will be removed in Vaadin 25.");
    return this.flatSize;
  }
  /**
   * The number of items.
   *
   * @return {number}
   */
  get size() {
    return this.__size;
  }
  /**
   * Sets the number of items.
   *
   * @param {number} size
   */
  set size(size) {
    const oldSize = this.__size;
    if (oldSize === size) {
      return;
    }
    this.__size = size;
    if (this.context.placeholder !== void 0) {
      this.items.length = size || 0;
      for (let i = 0; i < size || 0; i++) {
        this.items[i] ||= this.context.placeholder;
      }
    }
    Object.keys(this.pendingRequests).forEach((page) => {
      const startIndex = parseInt(page) * this.pageSize;
      if (startIndex >= this.size || 0) {
        delete this.pendingRequests[page];
      }
    });
  }
  /**
   * Recalculates the flattened size for the cache and its descendant caches recursively.
   */
  recalculateFlatSize() {
    this.__flatSize = !this.parentItem || this.context.isExpanded(this.parentItem) ? this.size + this.subCaches.reduce((total, subCache) => {
      subCache.recalculateFlatSize();
      return total + subCache.flatSize;
    }, 0) : 0;
  }
  /**
   * Adds an array of items corresponding to the given page
   * to the `items` array.
   *
   * @param {number} page
   * @param {object[]} items
   */
  setPage(page, items) {
    const startIndex = page * this.pageSize;
    items.forEach((item, i) => {
      const itemIndex = startIndex + i;
      if (this.size === void 0 || itemIndex < this.size) {
        this.items[itemIndex] = item;
      }
    });
  }
  /**
   * Retrieves the sub-cache associated with the item at the given index
   * in the `items` array.
   *
   * @param {number} index
   * @return {Cache | undefined}
   */
  getSubCache(index) {
    return this.__subCacheByIndex[index];
  }
  /**
   * Removes the sub-cache associated with the item at the given index
   * in the `items` array.
   *
   * @param {number} index
   */
  removeSubCache(index) {
    delete this.__subCacheByIndex[index];
  }
  /**
   * Removes all sub-caches.
   */
  removeSubCaches() {
    this.__subCacheByIndex = {};
  }
  /**
   * Creates and associates a sub-cache for the item at the given index
   * in the `items` array.
   *
   * @param {number} index
   * @return {Cache}
   */
  createSubCache(index) {
    const subCache = new _Cache(this.context, this.pageSize, 0, this, index);
    this.__subCacheByIndex[index] = subCache;
    return subCache;
  }
  /**
   * Retrieves the flattened index corresponding to the given index
   * of an item in the `items` array.
   *
   * @param {number} index
   * @return {number}
   */
  getFlatIndex(index) {
    const clampedIndex = Math.max(0, Math.min(this.size - 1, index));
    return this.subCaches.reduce((prev, subCache) => {
      const index2 = subCache.parentCacheIndex;
      return clampedIndex > index2 ? prev + subCache.flatSize : prev;
    }, clampedIndex);
  }
  /**
   * @deprecated since 24.3 and will be removed in Vaadin 25.
   */
  getItemForIndex(index) {
    console.warn("<vaadin-grid> The `getItemForIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");
    const {
      item
    } = getFlatIndexContext(this, index);
    return item;
  }
  /**
   * @deprecated since 24.3 and will be removed in Vaadin 25.
   */
  getCacheAndIndex(index) {
    console.warn("<vaadin-grid> The `getCacheAndIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");
    const {
      cache,
      index: scaledIndex
    } = getFlatIndexContext(this, index);
    return {
      cache,
      scaledIndex
    };
  }
  /**
   * @deprecated since 24.3 and will be removed in Vaadin 25.
   */
  updateSize() {
    console.warn("<vaadin-grid> The `updateSize` method of ItemCache is deprecated and will be removed in Vaadin 25.");
    this.recalculateFlatSize();
  }
  /**
   * @deprecated since 24.3 and will be removed in Vaadin 25.
   */
  ensureSubCacheForScaledIndex(scaledIndex) {
    console.warn("<vaadin-grid> The `ensureSubCacheForScaledIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");
    if (!this.getSubCache(scaledIndex)) {
      const subCache = this.createSubCache(scaledIndex);
      this.context.__controller.__loadCachePage(subCache, 0);
    }
  }
  /**
   * @deprecated since 24.3 and will be removed in Vaadin 25.
   */
  get grid() {
    console.warn("<vaadin-grid> The `grid` property of ItemCache is deprecated and will be removed in Vaadin 25.");
    return this.context.__controller.host;
  }
  /**
   * @deprecated since 24.3 and will be removed in Vaadin 25.
   */
  get itemCaches() {
    console.warn("<vaadin-grid> The `itemCaches` property of ItemCache is deprecated and will be removed in Vaadin 25.");
    return this.__subCacheByIndex;
  }
};
var DataProviderController = class extends EventTarget {
  /**
   * The controller host element.
   *
   * @param {HTMLElement}
   */
  host;
  /**
   * A callback that returns data based on the passed params such as
   * `page`, `pageSize`, `parentItem`, etc.
   */
  dataProvider;
  /**
   * A callback that returns additional params that need to be passed
   * to the data provider callback with every request.
   */
  dataProviderParams;
  /**
   * A number of items to display per page.
   *
   * @type {number}
   */
  pageSize;
  /**
   * A callback that returns whether the given item is expanded.
   *
   * @type {(item: unknown) => boolean}
   */
  isExpanded;
  /**
   * A callback that returns the id for the given item and that
   * is used when checking object items for equality.
   *
   * @type { (item: unknown) => unknown}
   */
  getItemId;
  /**
   * A reference to the root cache instance.
   *
   * @param {Cache}
   */
  rootCache;
  /**
   * A placeholder item that is used to indicate that the item is not loaded yet.
   *
   * @type {unknown}
   */
  placeholder;
  /**
   * A callback that returns whether the given item is a placeholder.
   *
   * @type {(item: unknown) => boolean}
   */
  isPlaceholder;
  constructor(host, {
    size,
    pageSize,
    isExpanded,
    getItemId,
    isPlaceholder,
    placeholder,
    dataProvider,
    dataProviderParams
  }) {
    super();
    this.host = host;
    this.pageSize = pageSize;
    this.getItemId = getItemId;
    this.isExpanded = isExpanded;
    this.placeholder = placeholder;
    this.isPlaceholder = isPlaceholder;
    this.dataProvider = dataProvider;
    this.dataProviderParams = dataProviderParams;
    this.rootCache = this.__createRootCache(size);
  }
  /**
   * The total number of items, including items from expanded sub-caches.
   */
  get flatSize() {
    return this.rootCache.flatSize;
  }
  /** @private */
  get __cacheContext() {
    return {
      isExpanded: this.isExpanded,
      placeholder: this.placeholder,
      // The controller instance is needed to ensure deprecated cache methods work.
      __controller: this
    };
  }
  /**
   * Whether the root cache or any of its decendant caches have pending requests.
   *
   * @return {boolean}
   */
  isLoading() {
    return this.rootCache.isLoading;
  }
  /**
   * Sets the page size and clears the cache.
   *
   * @param {number} pageSize
   */
  setPageSize(pageSize) {
    this.pageSize = pageSize;
    this.clearCache();
  }
  /**
   * Sets the data provider callback and clears the cache.
   *
   * @type {Function}
   */
  setDataProvider(dataProvider) {
    this.dataProvider = dataProvider;
    this.clearCache();
  }
  /**
   * Recalculates the flattened size.
   */
  recalculateFlatSize() {
    this.rootCache.recalculateFlatSize();
  }
  /**
   * Clears the cache.
   */
  clearCache() {
    this.rootCache = this.__createRootCache(this.rootCache.size);
  }
  /**
   * Returns context for the given flattened index, including:
   * - the corresponding cache
   * - the cache level
   * - the corresponding item (if loaded)
   * - the item's index in the cache's items array
   * - the page containing the item
   *
   * @param {number} flatIndex
   */
  getFlatIndexContext(flatIndex) {
    return getFlatIndexContext(this.rootCache, flatIndex);
  }
  /**
   * Returns context for the given item, including:
   * - the cache containing the item
   * - the cache level
   * - the item
   * - the item's index in the cache's items array
   * - the item's flattened index
   * - the item's sub-cache (if exists)
   * - the page containing the item
   *
   * If the item isn't found, the method returns undefined.
   */
  getItemContext(item) {
    return getItemContext({
      getItemId: this.getItemId
    }, this.rootCache, item);
  }
  /**
   * Returns the flattened index for the item that the given indexes point to.
   * Each index in the path array points to a sub-item of the previous index.
   * Using `Infinity` as an index will point to the last item on the level.
   *
   * @param {number[]} path
   * @return {number}
   */
  getFlatIndexByPath(path) {
    return getFlatIndexByPath(this.rootCache, path);
  }
  /**
   * Requests the data provider to load the page with the item corresponding
   * to the given flattened index. If the item is already loaded, the method
   * returns immediatelly.
   *
   * @param {number} flatIndex
   */
  ensureFlatIndexLoaded(flatIndex) {
    const {
      cache,
      page,
      item
    } = this.getFlatIndexContext(flatIndex);
    if (!this.__isItemLoaded(item)) {
      this.__loadCachePage(cache, page);
    }
  }
  /**
   * Creates a sub-cache for the item corresponding to the given flattened index and
   * requests the data provider to load the first page into the created sub-cache.
   * If the sub-cache already exists, the method returns immediatelly.
   *
   * @param {number} flatIndex
   */
  ensureFlatIndexHierarchy(flatIndex) {
    const {
      cache,
      item,
      index
    } = this.getFlatIndexContext(flatIndex);
    if (this.__isItemLoaded(item) && this.isExpanded(item) && !cache.getSubCache(index)) {
      const subCache = cache.createSubCache(index);
      this.__loadCachePage(subCache, 0);
    }
  }
  /**
   * Loads the first page into the root cache.
   */
  loadFirstPage() {
    this.__loadCachePage(this.rootCache, 0);
  }
  /** @private */
  __createRootCache(size) {
    return new Cache(this.__cacheContext, this.pageSize, size);
  }
  /** @private */
  __loadCachePage(cache, page) {
    if (!this.dataProvider || cache.pendingRequests[page]) {
      return;
    }
    let params = {
      page,
      pageSize: this.pageSize,
      parentItem: cache.parentItem
    };
    if (this.dataProviderParams) {
      params = __spreadValues(__spreadValues({}, params), this.dataProviderParams());
    }
    const callback = (items, size) => {
      if (cache.pendingRequests[page] !== callback) {
        return;
      }
      if (size !== void 0) {
        cache.size = size;
      } else if (params.parentItem) {
        cache.size = items.length;
      }
      cache.setPage(page, items);
      this.recalculateFlatSize();
      this.dispatchEvent(new CustomEvent("page-received"));
      delete cache.pendingRequests[page];
      this.dispatchEvent(new CustomEvent("page-loaded"));
    };
    cache.pendingRequests[page] = callback;
    this.dispatchEvent(new CustomEvent("page-requested"));
    this.dataProvider(params, callback);
  }
  /** @private */
  __isItemLoaded(item) {
    if (this.isPlaceholder) {
      return !this.isPlaceholder(item);
    } else if (this.placeholder) {
      return item !== this.placeholder;
    }
    return !!item;
  }
};
var DataProviderMixin = (superClass) => class DataProviderMixin extends superClass {
  static get properties() {
    return {
      /**
       * The number of root-level items in the grid.
       * @attr {number} size
       * @type {number}
       */
      size: {
        type: Number,
        notify: true,
        sync: true
      },
      /**
       * @type {number}
       * @protected
       */
      _flatSize: {
        type: Number,
        sync: true
      },
      /**
       * Number of items fetched at a time from the dataprovider.
       * @attr {number} page-size
       * @type {number}
       */
      pageSize: {
        type: Number,
        value: 50,
        observer: "_pageSizeChanged",
        sync: true
      },
      /**
       * Function that provides items lazily. Receives arguments `params`, `callback`
       *
       * `params.page` Requested page index
       *
       * `params.pageSize` Current page size
       *
       * `params.filters` Currently applied filters
       *
       * `params.sortOrders` Currently applied sorting orders
       *
       * `params.parentItem` When tree is used, and sublevel items
       * are requested, reference to parent item of the requested sublevel.
       * Otherwise `undefined`.
       *
       * `callback(items, size)` Callback function with arguments:
       *   - `items` Current page of items
       *   - `size` Total number of items. When tree sublevel items
       *     are requested, total number of items in the requested sublevel.
       *     Optional when tree is not used, required for tree.
       *
       * @type {GridDataProvider | null | undefined}
       */
      dataProvider: {
        type: Object,
        notify: true,
        observer: "_dataProviderChanged",
        sync: true
      },
      /**
       * `true` while data is being requested from the data provider.
       */
      loading: {
        type: Boolean,
        notify: true,
        readOnly: true,
        reflectToAttribute: true
      },
      /**
       * @protected
       */
      _hasData: {
        type: Boolean,
        value: false,
        sync: true
      },
      /**
       * Path to an item sub-property that indicates whether the item has child items.
       * @attr {string} item-has-children-path
       */
      itemHasChildrenPath: {
        type: String,
        value: "children",
        observer: "__itemHasChildrenPathChanged",
        sync: true
      },
      /**
       * Path to an item sub-property that identifies the item.
       * @attr {string} item-id-path
       */
      itemIdPath: {
        type: String,
        value: null,
        sync: true
      },
      /**
       * An array that contains the expanded items.
       * @type {!Array<!GridItem>}
       */
      expandedItems: {
        type: Object,
        notify: true,
        value: () => [],
        sync: true
      },
      /**
       * @private
       */
      __expandedKeys: {
        type: Object,
        computed: "__computeExpandedKeys(itemIdPath, expandedItems)"
      }
    };
  }
  static get observers() {
    return ["_sizeChanged(size)", "_expandedItemsChanged(expandedItems)"];
  }
  constructor() {
    super();
    this._dataProviderController = new DataProviderController(this, {
      size: this.size || 0,
      pageSize: this.pageSize,
      getItemId: this.getItemId.bind(this),
      isExpanded: this._isExpanded.bind(this),
      dataProvider: this.dataProvider ? this.dataProvider.bind(this) : null,
      dataProviderParams: () => {
        return {
          sortOrders: this._mapSorters(),
          filters: this._mapFilters()
        };
      }
    });
    this._dataProviderController.addEventListener("page-requested", this._onDataProviderPageRequested.bind(this));
    this._dataProviderController.addEventListener("page-received", this._onDataProviderPageReceived.bind(this));
    this._dataProviderController.addEventListener("page-loaded", this._onDataProviderPageLoaded.bind(this));
  }
  /**
   * @protected
   * @deprecated since 24.3 and will be removed in Vaadin 25.
   */
  get _cache() {
    console.warn("<vaadin-grid> The `_cache` property is deprecated and will be removed in Vaadin 25.");
    return this._dataProviderController.rootCache;
  }
  /**
   * @protected
   * @deprecated since 24.3 and will be removed in Vaadin 25.
   */
  get _effectiveSize() {
    console.warn("<vaadin-grid> The `_effectiveSize` property is deprecated and will be removed in Vaadin 25.");
    return this._flatSize;
  }
  /** @private */
  _sizeChanged(size) {
    this._dataProviderController.rootCache.size = size;
    this._dataProviderController.recalculateFlatSize();
    this._flatSize = this._dataProviderController.flatSize;
  }
  /** @private */
  __itemHasChildrenPathChanged(value, oldValue) {
    if (!oldValue && value === "children") {
      return;
    }
    this.requestContentUpdate();
  }
  /**
   * @param {number} index
   * @param {HTMLElement} el
   * @protected
   */
  _getItem(index, el) {
    el.index = index;
    const {
      item
    } = this._dataProviderController.getFlatIndexContext(index);
    if (item) {
      this.__updateLoading(el, false);
      this._updateItem(el, item);
      if (this._isExpanded(item)) {
        this._dataProviderController.ensureFlatIndexHierarchy(index);
      }
    } else {
      this.__updateLoading(el, true);
      this._dataProviderController.ensureFlatIndexLoaded(index);
    }
  }
  /**
   * @param {!HTMLElement} row
   * @param {boolean} loading
   * @private
   */
  __updateLoading(row, loading) {
    const cells = getBodyRowCells(row);
    updateState(row, "loading", loading);
    updateCellsPart(cells, "loading-row-cell", loading);
    if (loading) {
      this._generateCellClassNames(row);
      this._generateCellPartNames(row);
    }
  }
  /**
   * Returns a value that identifies the item. Uses `itemIdPath` if available.
   * Can be customized by overriding.
   * @param {!GridItem} item
   * @return {!GridItem | !unknown}
   */
  getItemId(item) {
    return this.itemIdPath ? get(this.itemIdPath, item) : item;
  }
  /**
   * @param {!GridItem} item
   * @return {boolean}
   * @protected
   */
  _isExpanded(item) {
    return this.__expandedKeys && this.__expandedKeys.has(this.getItemId(item));
  }
  /** @private */
  _expandedItemsChanged() {
    this._dataProviderController.recalculateFlatSize();
    this._flatSize = this._dataProviderController.flatSize;
    this.__updateVisibleRows();
  }
  /** @private */
  __computeExpandedKeys(_itemIdPath, expandedItems) {
    const expanded = expandedItems || [];
    const expandedKeys = /* @__PURE__ */ new Set();
    expanded.forEach((item) => {
      expandedKeys.add(this.getItemId(item));
    });
    return expandedKeys;
  }
  /**
   * Expands the given item tree.
   * @param {!GridItem} item
   */
  expandItem(item) {
    if (!this._isExpanded(item)) {
      this.expandedItems = [...this.expandedItems, item];
    }
  }
  /**
   * Collapses the given item tree.
   * @param {!GridItem} item
   */
  collapseItem(item) {
    if (this._isExpanded(item)) {
      this.expandedItems = this.expandedItems.filter((i) => !this._itemsEqual(i, item));
    }
  }
  /**
   * @param {number} index
   * @return {number}
   * @protected
   */
  _getIndexLevel(index = 0) {
    const {
      level
    } = this._dataProviderController.getFlatIndexContext(index);
    return level;
  }
  /**
   * @param {number} page
   * @param {ItemCache} cache
   * @protected
   * @deprecated since 24.3 and will be removed in Vaadin 25.
   */
  _loadPage(page, cache) {
    console.warn("<vaadin-grid> The `_loadPage` method is deprecated and will be removed in Vaadin 25.");
    this._dataProviderController.__loadCachePage(cache, page);
  }
  /** @protected */
  _onDataProviderPageRequested() {
    this._setLoading(true);
  }
  /** @protected */
  _onDataProviderPageReceived() {
    if (this._flatSize !== this._dataProviderController.flatSize) {
      this._shouldUpdateAllRenderedRowsAfterPageLoad = true;
      this._flatSize = this._dataProviderController.flatSize;
    }
    this._getRenderedRows().forEach((row) => {
      this._dataProviderController.ensureFlatIndexHierarchy(row.index);
    });
    this._hasData = true;
  }
  /** @protected */
  _onDataProviderPageLoaded() {
    this._debouncerApplyCachedData = Debouncer.debounce(this._debouncerApplyCachedData, timeOut.after(0), () => {
      this._setLoading(false);
      const shouldUpdateAllRenderedRowsAfterPageLoad = this._shouldUpdateAllRenderedRowsAfterPageLoad;
      this._shouldUpdateAllRenderedRowsAfterPageLoad = false;
      this._getRenderedRows().forEach((row) => {
        const {
          item
        } = this._dataProviderController.getFlatIndexContext(row.index);
        if (item || shouldUpdateAllRenderedRowsAfterPageLoad) {
          this._getItem(row.index, row);
        }
      });
      this.__scrollToPendingIndexes();
      this.__dispatchPendingBodyCellFocus();
    });
    if (!this._dataProviderController.isLoading()) {
      this._debouncerApplyCachedData.flush();
    }
  }
  /** @private */
  __debounceClearCache() {
    this.__clearCacheDebouncer = Debouncer.debounce(this.__clearCacheDebouncer, microTask, () => this.clearCache());
  }
  /**
   * Clears the cached pages and reloads data from dataprovider when needed.
   */
  clearCache() {
    this._dataProviderController.clearCache();
    this._dataProviderController.rootCache.size = this.size || 0;
    this._dataProviderController.recalculateFlatSize();
    this._hasData = false;
    this.__updateVisibleRows();
    if (!this.__virtualizer || !this.__virtualizer.size) {
      this._dataProviderController.loadFirstPage();
    }
  }
  /** @private */
  _pageSizeChanged(pageSize, oldPageSize) {
    this._dataProviderController.setPageSize(pageSize);
    if (oldPageSize !== void 0 && pageSize !== oldPageSize) {
      this.clearCache();
    }
  }
  /** @protected */
  _checkSize() {
    if (this.size === void 0 && this._flatSize === 0) {
      console.warn("The <vaadin-grid> needs the total number of items in order to display rows, which you can specify either by setting the `size` property, or by providing it to the second argument of the `dataProvider` function `callback` call.");
    }
  }
  /** @private */
  _dataProviderChanged(dataProvider, oldDataProvider) {
    this._dataProviderController.setDataProvider(dataProvider ? dataProvider.bind(this) : null);
    if (oldDataProvider !== void 0) {
      this.clearCache();
    }
    this._ensureFirstPageLoaded();
    this._debouncerCheckSize = Debouncer.debounce(this._debouncerCheckSize, timeOut.after(2e3), this._checkSize.bind(this));
  }
  /** @protected */
  _ensureFirstPageLoaded() {
    if (!this._hasData) {
      this._dataProviderController.loadFirstPage();
    }
  }
  /**
   * @param {!GridItem} item1
   * @param {!GridItem} item2
   * @return {boolean}
   * @protected
   */
  _itemsEqual(item1, item2) {
    return this.getItemId(item1) === this.getItemId(item2);
  }
  /**
   * @param {!GridItem} item
   * @param {!Array<!GridItem>} array
   * @return {number}
   * @protected
   */
  _getItemIndexInArray(item, array) {
    let result = -1;
    array.forEach((i, idx) => {
      if (this._itemsEqual(i, item)) {
        result = idx;
      }
    });
    return result;
  }
  /**
   * Scroll to a specific row index in the virtual list. Note that the row index is
   * not always the same for any particular item. For example, sorting or filtering
   * items can affect the row index related to an item.
   *
   * The `indexes` parameter can be either a single number or multiple numbers.
   * The grid will first try to scroll to the item at the first index on the top level.
   * In case the item at the first index is expanded, the grid will then try scroll to the
   * item at the second index within the children of the expanded first item, and so on.
   * Each given index points to a child of the item at the previous index.
   *
   * Using `Infinity` as an index will point to the last item on the level.
   *
   * @param indexes {...number} Row indexes to scroll to
   */
  scrollToIndex(...indexes) {
    if (!this.__virtualizer || !this.clientHeight || !this._columnTree) {
      this.__pendingScrollToIndexes = indexes;
      return;
    }
    let targetIndex;
    while (targetIndex !== (targetIndex = this._dataProviderController.getFlatIndexByPath(indexes))) {
      this._scrollToFlatIndex(targetIndex);
    }
    if (this._dataProviderController.isLoading()) {
      this.__pendingScrollToIndexes = indexes;
    }
  }
  /** @private */
  __scrollToPendingIndexes() {
    if (this.__pendingScrollToIndexes && this.$.items.children.length) {
      const indexes = this.__pendingScrollToIndexes;
      delete this.__pendingScrollToIndexes;
      this.scrollToIndex(...indexes);
    }
  }
  /**
   * Fired when the `expandedItems` property changes.
   *
   * @event expanded-items-changed
   */
  /**
   * Fired when the `loading` property changes.
   *
   * @event loading-changed
   */
};
var DropMode = {
  BETWEEN: "between",
  ON_TOP: "on-top",
  ON_TOP_OR_BETWEEN: "on-top-or-between",
  ON_GRID: "on-grid"
};
var DropLocation = {
  ON_TOP: "on-top",
  ABOVE: "above",
  BELOW: "below",
  EMPTY: "empty"
};
var DragAndDropMixin = (superClass) => class DragAndDropMixin extends superClass {
  static get properties() {
    return {
      /**
       * Defines the locations within the Grid row where an element can be dropped.
       *
       * Possible values are:
       * - `between`: The drop event can happen between Grid rows.
       * - `on-top`: The drop event can happen on top of Grid rows.
       * - `on-top-or-between`: The drop event can happen either on top of or between Grid rows.
       * - `on-grid`: The drop event will not happen on any specific row, it will show the drop target outline around the whole grid.
       * @attr {between|on-top|on-top-or-between|on-grid} drop-mode
       * @type {GridDropMode | null | undefined}
       */
      dropMode: {
        type: String,
        sync: true
      },
      /**
       * Marks the grid's rows to be available for dragging.
       * @attr {boolean} rows-draggable
       */
      rowsDraggable: {
        type: Boolean,
        sync: true
      },
      /**
       * A function that filters dragging of specific grid rows. The return value should be false
       * if dragging of the row should be disabled.
       *
       * Receives one argument:
       * - `model` The object with the properties related with
       *   the rendered item, contains:
       *   - `model.index` The index of the item.
       *   - `model.item` The item.
       *   - `model.expanded` Sublevel toggle state.
       *   - `model.level` Level of the tree represented with a horizontal offset of the toggle button.
       *   - `model.selected` Selected state.
       *
       * @type {GridDragAndDropFilter | null | undefined}
       */
      dragFilter: {
        type: Function,
        sync: true
      },
      /**
       * A function that filters dropping on specific grid rows. The return value should be false
       * if dropping on the row should be disabled.
       *
       * Receives one argument:
       * - `model` The object with the properties related with
       *   the rendered item, contains:
       *   - `model.index` The index of the item.
       *   - `model.item` The item.
       *   - `model.expanded` Sublevel toggle state.
       *   - `model.level` Level of the tree represented with a horizontal offset of the toggle button.
       *   - `model.selected` Selected state.
       *
       * @type {GridDragAndDropFilter | null | undefined}
       */
      dropFilter: {
        type: Function,
        sync: true
      },
      /** @private */
      __dndAutoScrollThreshold: {
        value: 50
      },
      /** @private  */
      __draggedItems: {
        value: () => []
      }
    };
  }
  static get observers() {
    return ["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"];
  }
  constructor() {
    super();
    this.__onDocumentDragStart = this.__onDocumentDragStart.bind(this);
  }
  /** @protected */
  ready() {
    super.ready();
    this.$.table.addEventListener("dragstart", this._onDragStart.bind(this));
    this.$.table.addEventListener("dragend", this._onDragEnd.bind(this));
    this.$.table.addEventListener("dragover", this._onDragOver.bind(this));
    this.$.table.addEventListener("dragleave", this._onDragLeave.bind(this));
    this.$.table.addEventListener("drop", this._onDrop.bind(this));
    this.$.table.addEventListener("dragenter", (e) => {
      if (this.dropMode) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
  }
  /** @protected */
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("dragstart", this.__onDocumentDragStart, {
      capture: true
    });
  }
  /** @protected */
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("dragstart", this.__onDocumentDragStart, {
      capture: true
    });
  }
  /** @private */
  _onDragStart(e) {
    if (this.rowsDraggable) {
      let row = e.target;
      if (row.localName === "vaadin-grid-cell-content") {
        row = row.assignedSlot.parentNode.parentNode;
      }
      if (row.parentNode !== this.$.items) {
        return;
      }
      e.stopPropagation();
      this.toggleAttribute("dragging-rows", true);
      if (this._safari) {
        const transform = row.style.transform;
        row.style.top = /translateY\((.*)\)/u.exec(transform)[1];
        row.style.transform = "none";
        requestAnimationFrame(() => {
          row.style.top = "";
          row.style.transform = transform;
        });
      }
      const rowRect = row.getBoundingClientRect();
      e.dataTransfer.setDragImage(row, e.clientX - rowRect.left, e.clientY - rowRect.top);
      let rows = [row];
      if (this._isSelected(row._item)) {
        rows = this.__getViewportRows().filter((row2) => this._isSelected(row2._item)).filter((row2) => !this.dragFilter || this.dragFilter(this.__getRowModel(row2)));
      }
      this.__draggedItems = rows.map((row2) => row2._item);
      e.dataTransfer.setData("text", this.__formatDefaultTransferData(rows));
      updateBooleanRowStates(row, {
        dragstart: rows.length > 1 ? `${rows.length}` : ""
      });
      this.style.setProperty("--_grid-drag-start-x", `${e.clientX - rowRect.left + 20}px`);
      this.style.setProperty("--_grid-drag-start-y", `${e.clientY - rowRect.top + 10}px`);
      requestAnimationFrame(() => {
        updateBooleanRowStates(row, {
          dragstart: false
        });
        this.style.setProperty("--_grid-drag-start-x", "");
        this.style.setProperty("--_grid-drag-start-y", "");
        this.requestContentUpdate();
      });
      const event = new CustomEvent("grid-dragstart", {
        detail: {
          draggedItems: [...this.__draggedItems],
          setDragData: (type, data) => e.dataTransfer.setData(type, data),
          setDraggedItemsCount: (count) => row.setAttribute("dragstart", count)
        }
      });
      event.originalEvent = e;
      this.dispatchEvent(event);
    }
  }
  /** @private */
  _onDragEnd(e) {
    this.toggleAttribute("dragging-rows", false);
    e.stopPropagation();
    const event = new CustomEvent("grid-dragend");
    event.originalEvent = e;
    this.dispatchEvent(event);
    this.__draggedItems = [];
    this.requestContentUpdate();
  }
  /** @private */
  _onDragLeave(e) {
    if (!this.dropMode) {
      return;
    }
    e.stopPropagation();
    this._clearDragStyles();
  }
  /** @private */
  _onDragOver(e) {
    if (this.dropMode) {
      this._dropLocation = void 0;
      this._dragOverItem = void 0;
      if (this.__dndAutoScroll(e.clientY)) {
        this._clearDragStyles();
        return;
      }
      let row = e.composedPath().find((node) => node.localName === "tr");
      if (!this._flatSize || this.dropMode === DropMode.ON_GRID) {
        this._dropLocation = DropLocation.EMPTY;
      } else if (!row || row.parentNode !== this.$.items) {
        if (row) {
          return;
        } else if (this.dropMode === DropMode.BETWEEN || this.dropMode === DropMode.ON_TOP_OR_BETWEEN) {
          row = Array.from(this.$.items.children).filter((row2) => !row2.hidden).pop();
          this._dropLocation = DropLocation.BELOW;
        } else {
          return;
        }
      } else {
        const rowRect = row.getBoundingClientRect();
        this._dropLocation = DropLocation.ON_TOP;
        if (this.dropMode === DropMode.BETWEEN) {
          const dropAbove = e.clientY - rowRect.top < rowRect.bottom - e.clientY;
          this._dropLocation = dropAbove ? DropLocation.ABOVE : DropLocation.BELOW;
        } else if (this.dropMode === DropMode.ON_TOP_OR_BETWEEN) {
          if (e.clientY - rowRect.top < rowRect.height / 3) {
            this._dropLocation = DropLocation.ABOVE;
          } else if (e.clientY - rowRect.top > rowRect.height / 3 * 2) {
            this._dropLocation = DropLocation.BELOW;
          }
        }
      }
      if (row && row.hasAttribute("drop-disabled")) {
        this._dropLocation = void 0;
        return;
      }
      e.stopPropagation();
      e.preventDefault();
      if (this._dropLocation === DropLocation.EMPTY) {
        this.toggleAttribute("dragover", true);
      } else if (row) {
        this._dragOverItem = row._item;
        if (row.getAttribute("dragover") !== this._dropLocation) {
          updateStringRowStates(row, {
            dragover: this._dropLocation
          });
        }
      } else {
        this._clearDragStyles();
      }
    }
  }
  /**
   * Webkit-based browsers have issues with generating drag images
   * for elements that have children with massive heights. Chromium
   * browsers crash, while Safari experiences significant performance
   * issues. To mitigate these issues, we hide the scroller element
   * when drag starts to remove it from the drag image.
   *
   * Grids with fewer rows also have issues on Chromium and Safari
   * where the drag image is not properly clipped and may include
   * content outside the grid. Temporary inline styles are applied
   * to mitigate this issue.
   *
   * Related issues:
   * - https://github.com/vaadin/web-components/issues/7985
   * - https://issues.chromium.org/issues/383356871
   * - https://github.com/vaadin/web-components/issues/8386
   *
   * @private
   */
  __onDocumentDragStart(e) {
    if (e.target.contains(this)) {
      const elements = [e.target, this.$.items, this.$.scroller];
      const originalInlineStyles = elements.map((element) => element.style.cssText);
      if (this.$.table.scrollHeight > 2e4) {
        this.$.scroller.style.display = "none";
      }
      if (isChrome) {
        e.target.style.willChange = "transform";
      }
      if (isSafari) {
        this.$.items.style.flexShrink = 1;
      }
      requestAnimationFrame(() => {
        elements.forEach((element, index) => {
          element.style.cssText = originalInlineStyles[index];
        });
      });
    }
  }
  /** @private */
  __dndAutoScroll(clientY) {
    if (this.__dndAutoScrolling) {
      return true;
    }
    const headerBottom = this.$.header.getBoundingClientRect().bottom;
    const footerTop = this.$.footer.getBoundingClientRect().top;
    const topDiff = headerBottom - clientY + this.__dndAutoScrollThreshold;
    const bottomDiff = clientY - footerTop + this.__dndAutoScrollThreshold;
    let scrollTopDelta = 0;
    if (bottomDiff > 0) {
      scrollTopDelta = bottomDiff * 2;
    } else if (topDiff > 0) {
      scrollTopDelta = -topDiff * 2;
    }
    if (scrollTopDelta) {
      const scrollTop = this.$.table.scrollTop;
      this.$.table.scrollTop += scrollTopDelta;
      const scrollTopChanged = scrollTop !== this.$.table.scrollTop;
      if (scrollTopChanged) {
        this.__dndAutoScrolling = true;
        setTimeout(() => {
          this.__dndAutoScrolling = false;
        }, 20);
        return true;
      }
    }
  }
  /** @private */
  __getViewportRows() {
    const headerBottom = this.$.header.getBoundingClientRect().bottom;
    const footerTop = this.$.footer.getBoundingClientRect().top;
    return Array.from(this.$.items.children).filter((row) => {
      const rowRect = row.getBoundingClientRect();
      return rowRect.bottom > headerBottom && rowRect.top < footerTop;
    });
  }
  /** @protected */
  _clearDragStyles() {
    this.removeAttribute("dragover");
    iterateChildren(this.$.items, (row) => {
      updateStringRowStates(row, {
        dragover: null
      });
    });
  }
  /** @private */
  __updateDragSourceParts(row, model) {
    updateBooleanRowStates(row, {
      "drag-source": this.__draggedItems.includes(model.item)
    });
  }
  /** @private */
  _onDrop(e) {
    if (this.dropMode) {
      e.stopPropagation();
      e.preventDefault();
      const dragData = e.dataTransfer.types && Array.from(e.dataTransfer.types).map((type) => {
        return {
          type,
          data: e.dataTransfer.getData(type)
        };
      });
      this._clearDragStyles();
      const event = new CustomEvent("grid-drop", {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        detail: {
          dropTargetItem: this._dragOverItem,
          dropLocation: this._dropLocation,
          dragData
        }
      });
      event.originalEvent = e;
      this.dispatchEvent(event);
    }
  }
  /** @private */
  __formatDefaultTransferData(rows) {
    return rows.map((row) => {
      return Array.from(row.children).filter((cell) => !cell.hidden && cell.getAttribute("part").indexOf("details-cell") === -1).sort((a, b2) => {
        return a._column._order > b2._column._order ? 1 : -1;
      }).map((cell) => cell._content.textContent.trim()).filter((content) => content).join("	");
    }).join("\n");
  }
  /** @private */
  _dragDropAccessChanged() {
    this.filterDragAndDrop();
  }
  /**
   * Runs the `dragFilter` and `dropFilter` hooks for the visible cells.
   * If the filter depends on varying conditions, you may need to
   * call this function manually in order to update the draggability when
   * the conditions change.
   */
  filterDragAndDrop() {
    iterateChildren(this.$.items, (row) => {
      if (!row.hidden) {
        this._filterDragAndDrop(row, this.__getRowModel(row));
      }
    });
  }
  /**
   * @param {!HTMLElement} row
   * @param {!GridItemModel} model
   * @protected
   */
  _filterDragAndDrop(row, model) {
    const loading = this.loading || row.hasAttribute("loading");
    const dragDisabled = !this.rowsDraggable || loading || this.dragFilter && !this.dragFilter(model);
    const dropDisabled = !this.dropMode || loading || this.dropFilter && !this.dropFilter(model);
    iterateRowCells(row, (cell) => {
      if (dragDisabled) {
        cell._content.removeAttribute("draggable");
      } else {
        cell._content.setAttribute("draggable", true);
      }
    });
    updateBooleanRowStates(row, {
      "drag-disabled": !!dragDisabled,
      "drop-disabled": !!dropDisabled
    });
  }
  /**
   * Fired when starting to drag grid rows.
   *
   * @event grid-dragstart
   * @param {Object} originalEvent The native dragstart event
   * @param {Object} detail
   * @param {Object} detail.draggedItems the items in the visible viewport that are dragged
   * @param {Function} detail.setDraggedItemsCount Overrides the default number shown in the drag image on multi row drag.
   * Parameter is of type number.
   * @param {Function} detail.setDragData Sets dataTransfer data for the drag operation.
   * Note that "text" is the only data type supported by all the browsers the grid currently supports (including IE11).
   * The function takes two parameters:
   * - type:string The type of the data
   * - data:string The data
   */
  /**
   * Fired when the dragging of the rows ends.
   *
   * @event grid-dragend
   * @param {Object} originalEvent The native dragend event
   */
  /**
   * Fired when a drop occurs on top of the grid.
   *
   * @event grid-drop
   * @param {Object} originalEvent The native drop event
   * @param {Object} detail
   * @param {Object} detail.dropTargetItem The item of the grid row on which the drop occurred.
   * @param {string} detail.dropLocation The position at which the drop event took place relative to a row.
   * Depending on the dropMode value, the drop location can be one of the following
   * - `on-top`: when the drop occurred on top of the row
   * - `above`: when the drop occurred above the row
   * - `below`: when the drop occurred below the row
   * - `empty`: when the drop occurred over the grid, not relative to any specific row
   * @param {string} detail.dragData An array of items with the payload as a string representation as the
   * `data` property and the type of the data as `type` property.
   */
};
function arrayEquals(arr1, arr2) {
  if (!arr1 || !arr2 || arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0, l = arr1.length; i < l; i++) {
    if (arr1[i] instanceof Array && arr2[i] instanceof Array) {
      if (!arrayEquals(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
var DynamicColumnsMixin = (superClass) => class DynamicColumnsMixin extends superClass {
  static get properties() {
    return {
      /**
       * @protected
       */
      _columnTree: {
        type: Object,
        sync: true
      }
    };
  }
  /** @protected */
  ready() {
    super.ready();
    this._addNodeObserver();
  }
  /** @private */
  _hasColumnGroups(columns) {
    return columns.some((column) => column.localName === "vaadin-grid-column-group");
  }
  /**
   * @param {!GridColumnGroup} el
   * @return {!Array<!GridColumn>}
   * @protected
   */
  _getChildColumns(el) {
    return ColumnObserver.getColumns(el);
  }
  /** @private */
  _flattenColumnGroups(columns) {
    return columns.map((col) => {
      if (col.localName === "vaadin-grid-column-group") {
        return this._getChildColumns(col);
      }
      return [col];
    }).reduce((prev, curr) => {
      return prev.concat(curr);
    }, []);
  }
  /** @private */
  _getColumnTree() {
    const rootColumns = ColumnObserver.getColumns(this);
    const columnTree = [rootColumns];
    let c = rootColumns;
    while (this._hasColumnGroups(c)) {
      c = this._flattenColumnGroups(c);
      columnTree.push(c);
    }
    return columnTree;
  }
  /** @protected */
  _debounceUpdateColumnTree() {
    this.__updateColumnTreeDebouncer = Debouncer.debounce(this.__updateColumnTreeDebouncer, microTask, () => this._updateColumnTree());
  }
  /** @protected */
  _updateColumnTree() {
    const columnTree = this._getColumnTree();
    if (!arrayEquals(columnTree, this._columnTree)) {
      this._columnTree = columnTree;
    }
  }
  /** @private */
  _addNodeObserver() {
    this._observer = new ColumnObserver(this, (_addedColumns, removedColumns) => {
      const allRemovedCells = removedColumns.flatMap((c) => c._allCells);
      const filterNotConnected = (element) => allRemovedCells.filter((cell) => cell && cell._content.contains(element)).length;
      this.__removeSorters(this._sorters.filter(filterNotConnected));
      this.__removeFilters(this._filters.filter(filterNotConnected));
      this._debounceUpdateColumnTree();
      this._debouncerCheckImports = Debouncer.debounce(this._debouncerCheckImports, timeOut.after(2e3), this._checkImports.bind(this));
      this._ensureFirstPageLoaded();
    });
  }
  /** @protected */
  _checkImports() {
    ["vaadin-grid-column-group", "vaadin-grid-filter", "vaadin-grid-filter-column", "vaadin-grid-tree-toggle", "vaadin-grid-selection-column", "vaadin-grid-sort-column", "vaadin-grid-sorter"].forEach((elementName) => {
      const element = this.querySelector(elementName);
      if (element && !customElements.get(elementName)) {
        console.warn(`Make sure you have imported the required module for <${elementName}> element.`);
      }
    });
  }
  /** @protected */
  _updateFirstAndLastColumn() {
    Array.from(this.shadowRoot.querySelectorAll("tr")).forEach((row) => this._updateFirstAndLastColumnForRow(row));
  }
  /**
   * @param {!HTMLElement} row
   * @protected
   */
  _updateFirstAndLastColumnForRow(row) {
    Array.from(row.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((a, b2) => {
      return a._column._order - b2._column._order;
    }).forEach((cell, cellIndex, children) => {
      updateCellState(cell, "first-column", cellIndex === 0);
      updateCellState(cell, "last-column", cellIndex === children.length - 1);
    });
  }
  /**
   * @param {!Node} node
   * @return {boolean}
   * @protected
   */
  _isColumnElement(node) {
    return node.nodeType === Node.ELEMENT_NODE && /\bcolumn\b/u.test(node.localName);
  }
};
var EventContextMixin = (superClass) => class EventContextMixin extends superClass {
  /**
   * Returns an object with context information about the event target:
   * - `item`: the data object corresponding to the targeted row (not specified when targeting header or footer)
   * - `column`: the column element corresponding to the targeted cell (not specified when targeting row details)
   * - `section`: whether the event targeted the body, header, footer or details of the grid
   *
   * These additional properties are included when `item` is specified:
   * - `index`: the index of the item
   * - `selected`: the selected state of the item
   * - `detailsOpened`: whether the row details are open for the item
   * - `expanded`: the expanded state of the tree toggle
   * - `level`: the tree hierarchy level
   *
   * The returned object is populated only when a grid cell, header, footer or row details is found in `event.composedPath()`.
   * This means mostly mouse and keyboard events. If such a grid part is not found in the path, an empty object is returned.
   * This may be the case eg. if the event is fired on the `<vaadin-grid>` element and not any deeper in the DOM, or if
   * the event targets the empty part of the grid body.
   *
   * @param {!Event} event
   * @return {GridEventContext}
   */
  getEventContext(event) {
    const context = {};
    const {
      cell
    } = this._getGridEventLocation(event);
    if (!cell) {
      return context;
    }
    context.section = ["body", "header", "footer", "details"].find((section) => cell.getAttribute("part").indexOf(section) > -1);
    if (cell._column) {
      context.column = cell._column;
    }
    if (context.section === "body" || context.section === "details") {
      Object.assign(context, this.__getRowModel(cell.parentElement));
    }
    return context;
  }
};
var FilterMixin = (superClass) => class FilterMixin extends superClass {
  static get properties() {
    return {
      /** @private */
      _filters: {
        type: Array,
        value: () => []
      }
    };
  }
  constructor() {
    super();
    this._filterChanged = this._filterChanged.bind(this);
    this.addEventListener("filter-changed", this._filterChanged);
  }
  /** @private */
  _filterChanged(e) {
    e.stopPropagation();
    this.__addFilter(e.target);
    this.__applyFilters();
  }
  /** @private */
  __removeFilters(filtersToRemove) {
    if (filtersToRemove.length === 0) {
      return;
    }
    this._filters = this._filters.filter((filter2) => filtersToRemove.indexOf(filter2) < 0);
    this.__applyFilters();
  }
  /** @private */
  __addFilter(filter2) {
    const filterIndex = this._filters.indexOf(filter2);
    if (filterIndex === -1) {
      this._filters.push(filter2);
    }
  }
  /** @private */
  __applyFilters() {
    if (this.dataProvider && this.isAttached) {
      this.clearCache();
    }
  }
  /**
   * @return {!Array<!GridFilterDefinition>}
   * @protected
   */
  _mapFilters() {
    return this._filters.map((filter2) => {
      return {
        path: filter2.path,
        value: filter2.value
      };
    });
  }
};
function isRow(element) {
  return element instanceof HTMLTableRowElement;
}
function isCell(element) {
  return element instanceof HTMLTableCellElement;
}
function isDetailsCell(element) {
  return element.matches('[part~="details-cell"]');
}
var KeyboardNavigationMixin = (superClass) => class KeyboardNavigationMixin extends superClass {
  static get properties() {
    return {
      /** @private */
      _headerFocusable: {
        type: Object,
        observer: "_focusableChanged",
        sync: true
      },
      /**
       * @type {!HTMLElement | undefined}
       * @protected
       */
      _itemsFocusable: {
        type: Object,
        observer: "_focusableChanged",
        sync: true
      },
      /** @private */
      _footerFocusable: {
        type: Object,
        observer: "_focusableChanged",
        sync: true
      },
      /** @private */
      _navigatingIsHidden: Boolean,
      /**
       * @type {number}
       * @protected
       */
      _focusedItemIndex: {
        type: Number,
        value: 0
      },
      /** @private */
      _focusedColumnOrder: Number,
      /** @private */
      _focusedCell: {
        type: Object,
        observer: "_focusedCellChanged",
        sync: true
      },
      /**
       * Indicates whether the grid is currently in interaction mode.
       * In interaction mode the user is currently interacting with a control,
       * such as an input or a select, within a cell.
       * In interaction mode keyboard navigation between cells is disabled.
       * Interaction mode also prevents the focus target cell of that section of
       * the grid from receiving focus, allowing the user to switch focus to
       * controls in adjacent cells, rather than focussing the outer cell
       * itself.
       * @type {boolean}
       * @private
       */
      interacting: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        readOnly: true,
        observer: "_interactingChanged"
      }
    };
  }
  /** @private */
  get __rowFocusMode() {
    return [this._headerFocusable, this._itemsFocusable, this._footerFocusable].some(isRow);
  }
  set __rowFocusMode(value) {
    ["_itemsFocusable", "_footerFocusable", "_headerFocusable"].forEach((prop) => {
      const focusable = this[prop];
      if (value) {
        const parent = focusable && focusable.parentElement;
        if (isCell(focusable)) {
          this[prop] = parent;
        } else if (isCell(parent)) {
          this[prop] = parent.parentElement;
        }
      } else if (!value && isRow(focusable)) {
        const cell = focusable.firstElementChild;
        this[prop] = cell._focusButton || cell;
      }
    });
  }
  /** @private */
  get _visibleItemsCount() {
    return this._lastVisibleIndex - this._firstVisibleIndex - 1;
  }
  /** @protected */
  ready() {
    super.ready();
    if (this._ios || this._android) {
      return;
    }
    this.addEventListener("keydown", this._onKeyDown);
    this.addEventListener("keyup", this._onKeyUp);
    this.addEventListener("focusin", this._onFocusIn);
    this.addEventListener("focusout", this._onFocusOut);
    this.$.table.addEventListener("focusin", this._onContentFocusIn.bind(this));
    this.addEventListener("mousedown", () => {
      this.toggleAttribute("navigating", false);
      this._isMousedown = true;
      this._focusedColumnOrder = void 0;
    });
    this.addEventListener("mouseup", () => {
      this._isMousedown = false;
    });
  }
  /** @private */
  _focusableChanged(focusable, oldFocusable) {
    if (oldFocusable) {
      oldFocusable.setAttribute("tabindex", "-1");
    }
    if (focusable) {
      this._updateGridSectionFocusTarget(focusable);
    }
  }
  /** @private */
  _focusedCellChanged(focusedCell, oldFocusedCell) {
    if (oldFocusedCell) {
      removeValueFromAttribute(oldFocusedCell, "part", "focused-cell");
    }
    if (focusedCell) {
      addValueToAttribute(focusedCell, "part", "focused-cell");
    }
  }
  /** @private */
  _interactingChanged() {
    this._updateGridSectionFocusTarget(this._headerFocusable);
    this._updateGridSectionFocusTarget(this._itemsFocusable);
    this._updateGridSectionFocusTarget(this._footerFocusable);
  }
  /**
   * Since the focused cell/row state is stored as an element reference, the reference may get
   * out of sync when the virtual indexes for elements update due to effective size change.
   * This function updates the reference to the correct element after a possible index change.
   * @private
   */
  __updateItemsFocusable() {
    if (!this._itemsFocusable) {
      return;
    }
    const wasFocused = this.shadowRoot.activeElement === this._itemsFocusable;
    this._getRenderedRows().forEach((row) => {
      if (row.index === this._focusedItemIndex) {
        if (this.__rowFocusMode) {
          this._itemsFocusable = row;
        } else {
          let parent = this._itemsFocusable.parentElement;
          let cell = this._itemsFocusable;
          if (parent) {
            if (isCell(parent)) {
              cell = parent;
              parent = parent.parentElement;
            }
            const cellIndex = [...parent.children].indexOf(cell);
            this._itemsFocusable = this.__getFocusable(row, row.children[cellIndex]);
          }
        }
      }
    });
    if (wasFocused) {
      this._itemsFocusable.focus();
    }
  }
  /**
   * @param {!KeyboardEvent} e
   * @protected
   */
  _onKeyDown(e) {
    const key = e.key;
    let keyGroup;
    switch (key) {
      case "ArrowUp":
      case "ArrowDown":
      case "ArrowLeft":
      case "ArrowRight":
      case "PageUp":
      case "PageDown":
      case "Home":
      case "End":
        keyGroup = "Navigation";
        break;
      case "Enter":
      case "Escape":
      case "F2":
        keyGroup = "Interaction";
        break;
      case "Tab":
        keyGroup = "Tab";
        break;
      case " ":
        keyGroup = "Space";
        break;
    }
    this._detectInteracting(e);
    if (this.interacting && keyGroup !== "Interaction") {
      keyGroup = void 0;
    }
    if (keyGroup) {
      this[`_on${keyGroup}KeyDown`](e, key);
    }
  }
  /** @private */
  __ensureFlatIndexInViewport(index) {
    const targetRowInDom = [...this.$.items.children].find((child) => child.index === index);
    if (!targetRowInDom) {
      this._scrollToFlatIndex(index);
    } else {
      this.__scrollIntoViewport(targetRowInDom);
    }
  }
  /** @private */
  __isRowExpandable(row) {
    if (this.itemHasChildrenPath) {
      const item = row._item;
      return !!(item && get(this.itemHasChildrenPath, item) && !this._isExpanded(item));
    }
  }
  /** @private */
  __isRowCollapsible(row) {
    return this._isExpanded(row._item);
  }
  /** @private */
  _onNavigationKeyDown(e, key) {
    e.preventDefault();
    const isRTL = this.__isRTL;
    const activeRow = e.composedPath().find(isRow);
    const activeCell = e.composedPath().find(isCell);
    let dx = 0, dy = 0;
    switch (key) {
      case "ArrowRight":
        dx = isRTL ? -1 : 1;
        break;
      case "ArrowLeft":
        dx = isRTL ? 1 : -1;
        break;
      case "Home":
        if (this.__rowFocusMode) {
          dy = -Infinity;
        } else if (e.ctrlKey) {
          dy = -Infinity;
        } else {
          dx = -Infinity;
        }
        break;
      case "End":
        if (this.__rowFocusMode) {
          dy = Infinity;
        } else if (e.ctrlKey) {
          dy = Infinity;
        } else {
          dx = Infinity;
        }
        break;
      case "ArrowDown":
        dy = 1;
        break;
      case "ArrowUp":
        dy = -1;
        break;
      case "PageDown":
        if (this.$.items.contains(activeRow)) {
          const currentRowIndex = this.__getIndexInGroup(activeRow, this._focusedItemIndex);
          this._scrollToFlatIndex(currentRowIndex);
        }
        dy = this._visibleItemsCount;
        break;
      case "PageUp":
        dy = -this._visibleItemsCount;
        break;
    }
    if (this.__rowFocusMode && !activeRow || !this.__rowFocusMode && !activeCell) {
      return;
    }
    const forwardsKey = isRTL ? "ArrowLeft" : "ArrowRight";
    const backwardsKey = isRTL ? "ArrowRight" : "ArrowLeft";
    if (key === forwardsKey) {
      if (this.__rowFocusMode) {
        if (this.__isRowExpandable(activeRow)) {
          this.expandItem(activeRow._item);
          return;
        }
        this.__rowFocusMode = false;
        this._onCellNavigation(activeRow.firstElementChild, 0, 0);
        return;
      }
    } else if (key === backwardsKey) {
      if (this.__rowFocusMode) {
        if (this.__isRowCollapsible(activeRow)) {
          this.collapseItem(activeRow._item);
          return;
        }
      } else {
        const activeRowCells = [...activeRow.children].sort((a, b2) => a._order - b2._order);
        if (activeCell === activeRowCells[0] || isDetailsCell(activeCell)) {
          this.__rowFocusMode = true;
          this._onRowNavigation(activeRow, 0);
          return;
        }
      }
    }
    if (this.__rowFocusMode) {
      this._onRowNavigation(activeRow, dy);
    } else {
      this._onCellNavigation(activeCell, dx, dy);
    }
  }
  /**
   * Focuses the target row after navigating by the given dy offset.
   * If the row is not in the viewport, it is first scrolled to.
   * @private
   */
  _onRowNavigation(activeRow, dy) {
    const {
      dstRow
    } = this.__navigateRows(dy, activeRow);
    if (dstRow) {
      dstRow.focus();
    }
  }
  /** @private */
  __getIndexInGroup(row, bodyFallbackIndex) {
    const rowGroup = row.parentNode;
    if (rowGroup === this.$.items) {
      return bodyFallbackIndex !== void 0 ? bodyFallbackIndex : row.index;
    }
    return [...rowGroup.children].indexOf(row);
  }
  /**
   * Returns the target row after navigating by the given dy offset.
   * Also returns information whether the details cell should be the target on the target row.
   * If the row is not in the viewport, it is first scrolled to.
   * @private
   */
  __navigateRows(dy, activeRow, activeCell) {
    const currentRowIndex = this.__getIndexInGroup(activeRow, this._focusedItemIndex);
    const activeRowGroup = activeRow.parentNode;
    const maxRowIndex = (activeRowGroup === this.$.items ? this._flatSize : activeRowGroup.children.length) - 1;
    let dstRowIndex = Math.max(0, Math.min(currentRowIndex + dy, maxRowIndex));
    if (activeRowGroup !== this.$.items) {
      if (dstRowIndex > currentRowIndex) {
        while (dstRowIndex < maxRowIndex && activeRowGroup.children[dstRowIndex].hidden) {
          dstRowIndex += 1;
        }
      } else if (dstRowIndex < currentRowIndex) {
        while (dstRowIndex > 0 && activeRowGroup.children[dstRowIndex].hidden) {
          dstRowIndex -= 1;
        }
      }
      this.toggleAttribute("navigating", true);
      return {
        dstRow: activeRowGroup.children[dstRowIndex]
      };
    }
    let dstIsRowDetails = false;
    if (activeCell) {
      const isRowDetails = isDetailsCell(activeCell);
      if (activeRowGroup === this.$.items) {
        const item = activeRow._item;
        const {
          item: dstItem
        } = this._dataProviderController.getFlatIndexContext(dstRowIndex);
        if (isRowDetails) {
          dstIsRowDetails = dy === 0;
        } else {
          dstIsRowDetails = dy === 1 && this._isDetailsOpened(item) || dy === -1 && dstRowIndex !== currentRowIndex && this._isDetailsOpened(dstItem);
        }
        if (dstIsRowDetails !== isRowDetails && (dy === 1 && dstIsRowDetails || dy === -1 && !dstIsRowDetails)) {
          dstRowIndex = currentRowIndex;
        }
      }
    }
    this.__ensureFlatIndexInViewport(dstRowIndex);
    this._focusedItemIndex = dstRowIndex;
    this.toggleAttribute("navigating", true);
    return {
      dstRow: [...activeRowGroup.children].find((el) => !el.hidden && el.index === dstRowIndex),
      dstIsRowDetails
    };
  }
  /**
   * Focuses the target cell after navigating by the given dx and dy offset.
   * If the cell is not in the viewport, it is first scrolled to.
   * @private
   */
  _onCellNavigation(activeCell, dx, dy) {
    const activeRow = activeCell.parentNode;
    const {
      dstRow,
      dstIsRowDetails
    } = this.__navigateRows(dy, activeRow, activeCell);
    if (!dstRow) {
      return;
    }
    let columnIndex = [...activeRow.children].indexOf(activeCell);
    if (this.$.items.contains(activeCell)) {
      columnIndex = [...this.$.sizer.children].findIndex((sizerCell) => sizerCell._column === activeCell._column);
    }
    const isCurrentCellRowDetails = isDetailsCell(activeCell);
    const activeRowGroup = activeRow.parentNode;
    const currentRowIndex = this.__getIndexInGroup(activeRow, this._focusedItemIndex);
    if (this._focusedColumnOrder === void 0) {
      if (isCurrentCellRowDetails) {
        this._focusedColumnOrder = 0;
      } else {
        this._focusedColumnOrder = this._getColumns(activeRowGroup, currentRowIndex).filter((c) => !c.hidden)[columnIndex]._order;
      }
    }
    if (dstIsRowDetails) {
      const dstCell = [...dstRow.children].find(isDetailsCell);
      dstCell.focus();
    } else {
      const dstRowIndex = this.__getIndexInGroup(dstRow, this._focusedItemIndex);
      const dstColumns = this._getColumns(activeRowGroup, dstRowIndex).filter((c) => !c.hidden);
      const dstSortedColumnOrders = dstColumns.map((c) => c._order).sort((b2, a) => b2 - a);
      const maxOrderedColumnIndex = dstSortedColumnOrders.length - 1;
      const orderedColumnIndex = dstSortedColumnOrders.indexOf(dstSortedColumnOrders.slice(0).sort((b2, a) => Math.abs(b2 - this._focusedColumnOrder) - Math.abs(a - this._focusedColumnOrder))[0]);
      const dstOrderedColumnIndex = dy === 0 && isCurrentCellRowDetails ? orderedColumnIndex : Math.max(0, Math.min(orderedColumnIndex + dx, maxOrderedColumnIndex));
      if (dstOrderedColumnIndex !== orderedColumnIndex) {
        this._focusedColumnOrder = void 0;
      }
      const columnIndexByOrder = dstColumns.reduce((acc, col, i) => {
        acc[col._order] = i;
        return acc;
      }, {});
      const dstColumnIndex = columnIndexByOrder[dstSortedColumnOrders[dstOrderedColumnIndex]];
      let dstCell;
      if (this.$.items.contains(activeCell)) {
        const dstSizerCell = this.$.sizer.children[dstColumnIndex];
        if (this._lazyColumns) {
          if (!this.__isColumnInViewport(dstSizerCell._column)) {
            dstSizerCell.scrollIntoView();
          }
          this.__updateColumnsBodyContentHidden();
          this.__updateHorizontalScrollPosition();
        }
        dstCell = [...dstRow.children].find((cell) => cell._column === dstSizerCell._column);
        this._scrollHorizontallyToCell(dstCell);
      } else {
        dstCell = dstRow.children[dstColumnIndex];
        this._scrollHorizontallyToCell(dstCell);
      }
      dstCell.focus();
    }
  }
  /** @private */
  _onInteractionKeyDown(e, key) {
    const localTarget = e.composedPath()[0];
    const localTargetIsTextInput = localTarget.localName === "input" && !/^(button|checkbox|color|file|image|radio|range|reset|submit)$/iu.test(localTarget.type);
    let wantInteracting;
    switch (key) {
      case "Enter":
        wantInteracting = this.interacting ? !localTargetIsTextInput : true;
        break;
      case "Escape":
        wantInteracting = false;
        break;
      case "F2":
        wantInteracting = !this.interacting;
        break;
    }
    const {
      cell
    } = this._getGridEventLocation(e);
    if (this.interacting !== wantInteracting && cell !== null) {
      if (wantInteracting) {
        const focusTarget = cell._content.querySelector("[focus-target]") || // If a child element hasn't been explicitly marked as a focus target,
        // fall back to any focusable element inside the cell.
        [...cell._content.querySelectorAll("*")].find((node) => this._isFocusable(node));
        if (focusTarget) {
          e.preventDefault();
          focusTarget.focus();
          this._setInteracting(true);
          this.toggleAttribute("navigating", false);
        }
      } else {
        e.preventDefault();
        this._focusedColumnOrder = void 0;
        cell.focus();
        this._setInteracting(false);
        this.toggleAttribute("navigating", true);
      }
    }
    if (key === "Escape") {
      this._hideTooltip(true);
    }
  }
  /** @private */
  _predictFocusStepTarget(srcElement, step) {
    const tabOrder = [this.$.table, this._headerFocusable, this.__emptyState ? this.$.emptystatecell : this._itemsFocusable, this._footerFocusable, this.$.focusexit];
    let index = tabOrder.indexOf(srcElement);
    index += step;
    while (index >= 0 && index <= tabOrder.length - 1) {
      let rowElement = tabOrder[index];
      if (rowElement && !this.__rowFocusMode) {
        rowElement = tabOrder[index].parentNode;
      }
      if (!rowElement || rowElement.hidden) {
        index += step;
      } else {
        break;
      }
    }
    let focusStepTarget = tabOrder[index];
    if (focusStepTarget && !this.__isHorizontallyInViewport(focusStepTarget)) {
      const firstVisibleColumn = this._getColumnsInOrder().find((column) => this.__isColumnInViewport(column));
      if (firstVisibleColumn) {
        if (focusStepTarget === this._headerFocusable) {
          focusStepTarget = firstVisibleColumn._headerCell;
        } else if (focusStepTarget === this._itemsFocusable) {
          const rowIndex = focusStepTarget._column._cells.indexOf(focusStepTarget);
          focusStepTarget = firstVisibleColumn._cells[rowIndex];
        } else if (focusStepTarget === this._footerFocusable) {
          focusStepTarget = firstVisibleColumn._footerCell;
        }
      }
    }
    return focusStepTarget;
  }
  /** @private */
  _onTabKeyDown(e) {
    let focusTarget = this._predictFocusStepTarget(e.composedPath()[0], e.shiftKey ? -1 : 1);
    if (!focusTarget) {
      return;
    }
    e.stopPropagation();
    if (focusTarget === this._itemsFocusable) {
      this.__ensureFlatIndexInViewport(this._focusedItemIndex);
      this.__updateItemsFocusable();
      focusTarget = this._itemsFocusable;
    }
    focusTarget.focus();
    if (focusTarget !== this.$.table && focusTarget !== this.$.focusexit) {
      e.preventDefault();
    }
    this.toggleAttribute("navigating", true);
  }
  /** @private */
  _onSpaceKeyDown(e) {
    e.preventDefault();
    const element = e.composedPath()[0];
    const isElementRow = isRow(element);
    if (isElementRow || !element._content || !element._content.firstElementChild) {
      this.dispatchEvent(new CustomEvent(isElementRow ? "row-activate" : "cell-activate", {
        detail: {
          model: this.__getRowModel(isElementRow ? element : element.parentElement)
        }
      }));
    }
  }
  /** @private */
  _onKeyUp(e) {
    if (!/^( |SpaceBar)$/u.test(e.key) || this.interacting) {
      return;
    }
    e.preventDefault();
    const cell = e.composedPath()[0];
    if (cell._content && cell._content.firstElementChild) {
      const wasNavigating = this.hasAttribute("navigating");
      cell._content.firstElementChild.dispatchEvent(new MouseEvent("click", {
        shiftKey: e.shiftKey,
        bubbles: true,
        composed: true,
        cancelable: true
      }));
      this.toggleAttribute("navigating", wasNavigating);
    }
  }
  /**
   * @param {!FocusEvent} e
   * @protected
   */
  _onFocusIn(e) {
    if (!this._isMousedown) {
      this.toggleAttribute("navigating", true);
    }
    const rootTarget = e.composedPath()[0];
    if (rootTarget === this.$.table || rootTarget === this.$.focusexit) {
      if (!this._isMousedown) {
        this._predictFocusStepTarget(rootTarget, rootTarget === this.$.table ? 1 : -1).focus();
      }
      this._setInteracting(false);
    } else {
      this._detectInteracting(e);
    }
  }
  /**
   * @param {!FocusEvent} e
   * @protected
   */
  _onFocusOut(e) {
    this.toggleAttribute("navigating", false);
    this._detectInteracting(e);
    this._hideTooltip();
    this._focusedCell = null;
  }
  /** @private */
  _onContentFocusIn(e) {
    const {
      section,
      cell,
      row
    } = this._getGridEventLocation(e);
    if (!cell && !this.__rowFocusMode) {
      return;
    }
    this._detectInteracting(e);
    if (section && (cell || row)) {
      this._activeRowGroup = section;
      if (section === this.$.header) {
        this._headerFocusable = this.__getFocusable(row, cell);
      } else if (section === this.$.items) {
        this._itemsFocusable = this.__getFocusable(row, cell);
        this._focusedItemIndex = row.index;
      } else if (section === this.$.footer) {
        this._footerFocusable = this.__getFocusable(row, cell);
      }
      if (cell) {
        const context = this.getEventContext(e);
        this.__pendingBodyCellFocus = this.loading && context.section === "body";
        if (!this.__pendingBodyCellFocus && cell !== this.$.emptystatecell) {
          cell.dispatchEvent(new CustomEvent("cell-focus", {
            bubbles: true,
            composed: true,
            detail: {
              context
            }
          }));
        }
        this._focusedCell = cell._focusButton || cell;
        if (isKeyboardActive() && e.target === cell) {
          this._showTooltip(e);
        }
      } else {
        this._focusedCell = null;
      }
    }
  }
  /**
   * @private
   */
  __dispatchPendingBodyCellFocus() {
    if (this.__pendingBodyCellFocus && this.shadowRoot.activeElement === this._itemsFocusable) {
      this._itemsFocusable.dispatchEvent(new Event("focusin", {
        bubbles: true,
        composed: true
      }));
    }
  }
  /**
   * Get the focusable element depending on the current focus mode.
   * It can be a row, a cell, or a focusable div inside a cell.
   *
   * @param {HTMLElement} row
   * @param {HTMLElement} cell
   * @return {HTMLElement}
   * @private
   */
  __getFocusable(row, cell) {
    return this.__rowFocusMode ? row : cell._focusButton || cell;
  }
  /**
   * Enables interaction mode if a cells descendant receives focus or keyboard
   * input. Disables it if the event is not related to cell content.
   * @param {!KeyboardEvent|!FocusEvent} e
   * @private
   */
  _detectInteracting(e) {
    const isInteracting = e.composedPath().some((el) => el.localName === "slot" && this.shadowRoot.contains(el));
    this._setInteracting(isInteracting);
    this.__updateHorizontalScrollPosition();
  }
  /**
   * Enables or disables the focus target of the containing section of the
   * grid from receiving focus, based on whether the user is interacting with
   * that section of the grid.
   * @param {HTMLElement} focusTarget
   * @private
   */
  _updateGridSectionFocusTarget(focusTarget) {
    if (!focusTarget) {
      return;
    }
    const section = this._getGridSectionFromFocusTarget(focusTarget);
    const isInteractingWithinActiveSection = this.interacting && section === this._activeRowGroup;
    focusTarget.tabIndex = isInteractingWithinActiveSection ? -1 : 0;
  }
  /** @protected */
  _preventScrollerRotatingCellFocus() {
    if (this._activeRowGroup !== this.$.items) {
      return;
    }
    this.__preventScrollerRotatingCellFocusDebouncer = Debouncer.debounce(this.__preventScrollerRotatingCellFocusDebouncer, animationFrame, () => {
      const isItemsRowGroupActive = this._activeRowGroup === this.$.items;
      const isFocusedItemRendered = this._getRenderedRows().some((row) => row.index === this._focusedItemIndex);
      if (isFocusedItemRendered) {
        this.__updateItemsFocusable();
        if (isItemsRowGroupActive && !this.__rowFocusMode) {
          this._focusedCell = this._itemsFocusable;
        }
        if (this._navigatingIsHidden) {
          this.toggleAttribute("navigating", true);
          this._navigatingIsHidden = false;
        }
      } else if (isItemsRowGroupActive) {
        this._focusedCell = null;
        if (this.hasAttribute("navigating")) {
          this._navigatingIsHidden = true;
          this.toggleAttribute("navigating", false);
        }
      }
    });
  }
  /**
   * @param {HTMLTableSectionElement=} rowGroup
   * @param {number=} rowIndex
   * @return {!Array<!GridColumn>}
   * @protected
   */
  _getColumns(rowGroup, rowIndex) {
    let columnTreeLevel = this._columnTree.length - 1;
    if (rowGroup === this.$.header) {
      columnTreeLevel = rowIndex;
    } else if (rowGroup === this.$.footer) {
      columnTreeLevel = this._columnTree.length - 1 - rowIndex;
    }
    return this._columnTree[columnTreeLevel];
  }
  /** @private */
  __isValidFocusable(element) {
    return this.$.table.contains(element) && element.offsetHeight;
  }
  /** @protected */
  _resetKeyboardNavigation() {
    if (!this.$ && this.performUpdate) {
      this.performUpdate();
    }
    ["header", "footer"].forEach((section) => {
      if (!this.__isValidFocusable(this[`_${section}Focusable`])) {
        const firstVisibleRow = [...this.$[section].children].find((row) => row.offsetHeight);
        const firstVisibleCell = firstVisibleRow ? [...firstVisibleRow.children].find((cell) => !cell.hidden) : null;
        if (firstVisibleRow && firstVisibleCell) {
          this[`_${section}Focusable`] = this.__getFocusable(firstVisibleRow, firstVisibleCell);
        }
      }
    });
    if (!this.__isValidFocusable(this._itemsFocusable) && this.$.items.firstElementChild) {
      const firstVisibleRow = this.__getFirstVisibleItem();
      const firstVisibleCell = firstVisibleRow ? [...firstVisibleRow.children].find((cell) => !cell.hidden) : null;
      if (firstVisibleCell && firstVisibleRow) {
        this._focusedColumnOrder = void 0;
        this._itemsFocusable = this.__getFocusable(firstVisibleRow, firstVisibleCell);
      }
    } else {
      this.__updateItemsFocusable();
    }
  }
  /**
   * @param {!HTMLElement} dstCell
   * @protected
   */
  _scrollHorizontallyToCell(dstCell) {
    if (dstCell.hasAttribute("frozen") || dstCell.hasAttribute("frozen-to-end") || isDetailsCell(dstCell)) {
      return;
    }
    const dstCellRect = dstCell.getBoundingClientRect();
    const dstRow = dstCell.parentNode;
    const dstCellIndex = Array.from(dstRow.children).indexOf(dstCell);
    const tableRect = this.$.table.getBoundingClientRect();
    let leftBoundary = tableRect.left, rightBoundary = tableRect.right;
    for (let i = dstCellIndex - 1; i >= 0; i--) {
      const cell = dstRow.children[i];
      if (cell.hasAttribute("hidden") || isDetailsCell(cell)) {
        continue;
      }
      if (cell.hasAttribute("frozen") || cell.hasAttribute("frozen-to-end")) {
        leftBoundary = cell.getBoundingClientRect().right;
        break;
      }
    }
    for (let i = dstCellIndex + 1; i < dstRow.children.length; i++) {
      const cell = dstRow.children[i];
      if (cell.hasAttribute("hidden") || isDetailsCell(cell)) {
        continue;
      }
      if (cell.hasAttribute("frozen") || cell.hasAttribute("frozen-to-end")) {
        rightBoundary = cell.getBoundingClientRect().left;
        break;
      }
    }
    if (dstCellRect.left < leftBoundary) {
      this.$.table.scrollLeft += Math.round(dstCellRect.left - leftBoundary);
    }
    if (dstCellRect.right > rightBoundary) {
      this.$.table.scrollLeft += Math.round(dstCellRect.right - rightBoundary);
    }
  }
  /**
   * @typedef {Object} GridEventLocation
   * @property {HTMLTableSectionElement | null} section - The table section element that the event occurred in (header, body, or footer), or null if the event did not occur in a section
   * @property {HTMLTableRowElement | null} row - The row element that the event occurred in, or null if the event did not occur in a row
   * @property {HTMLTableCellElement | null} cell - The cell element that the event occurred in, or null if the event did not occur in a cell
   * @private
   */
  /**
   * Takes an event and returns a location object describing in which part of the grid the event occurred.
   * The event may either target table section, a row, a cell or contents of a cell.
   * @param {Event} e
   * @returns {GridEventLocation}
   * @protected
   */
  _getGridEventLocation(e) {
    const path = e.__composedPath || e.composedPath();
    const tableIndex = path.indexOf(this.$.table);
    const section = tableIndex >= 1 ? path[tableIndex - 1] : null;
    const row = tableIndex >= 2 ? path[tableIndex - 2] : null;
    const cell = tableIndex >= 3 ? path[tableIndex - 3] : null;
    return {
      section,
      row,
      cell
    };
  }
  /**
   * Helper method that maps a focus target cell to the containing grid section
   * @param {HTMLElement} focusTarget
   * @returns {HTMLTableSectionElement | null}
   * @private
   */
  _getGridSectionFromFocusTarget(focusTarget) {
    if (focusTarget === this._headerFocusable) {
      return this.$.header;
    }
    if (focusTarget === this._itemsFocusable) {
      return this.$.items;
    }
    if (focusTarget === this._footerFocusable) {
      return this.$.footer;
    }
    return null;
  }
  /**
   * Fired when a cell is focused with click or keyboard navigation.
   *
   * Use context property of @see {@link GridCellFocusEvent} to get detail information about the event.
   *
   * @event cell-focus
   */
};
var RowDetailsMixin = (superClass) => class RowDetailsMixin extends superClass {
  static get properties() {
    return {
      /**
       * An array containing references to items with open row details.
       * @type {!Array<!GridItem>}
       */
      detailsOpenedItems: {
        type: Array,
        value: () => [],
        sync: true
      },
      /**
       * Custom function for rendering the content of the row details.
       * Receives three arguments:
       *
       * - `root` The row details content DOM element. Append your content to it.
       * - `grid` The `<vaadin-grid>` element.
       * - `model` The object with the properties related with
       *   the rendered item, contains:
       *   - `model.index` The index of the item.
       *   - `model.item` The item.
       *   - `model.level` The number of the item's tree sublevel, starts from 0.
       *   - `model.expanded` True if the item's tree sublevel is expanded.
       *   - `model.selected` True if the item is selected.
       *
       * @type {GridRowDetailsRenderer | null | undefined}
       */
      rowDetailsRenderer: {
        type: Function,
        sync: true
      },
      /**
       * @type {!Array<!HTMLElement> | undefined}
       * @protected
       */
      _detailsCells: {
        type: Array
      }
    };
  }
  static get observers() {
    return ["_detailsOpenedItemsChanged(detailsOpenedItems, rowDetailsRenderer)", "_rowDetailsRendererChanged(rowDetailsRenderer)"];
  }
  /** @protected */
  ready() {
    super.ready();
    this._detailsCellResizeObserver = new ResizeObserver((entries) => {
      entries.forEach(({
        target: cell
      }) => {
        this._updateDetailsCellHeight(cell.parentElement);
      });
      this.__virtualizer.__adapter._resizeHandler();
    });
  }
  /** @private */
  _rowDetailsRendererChanged(rowDetailsRenderer) {
    if (!rowDetailsRenderer) {
      return;
    }
    if (this._columnTree) {
      iterateChildren(this.$.items, (row) => {
        if (!row.querySelector("[part~=details-cell]")) {
          this._updateRow(row, this._columnTree[this._columnTree.length - 1]);
          const isDetailsOpened = this._isDetailsOpened(row._item);
          this._toggleDetailsCell(row, isDetailsOpened);
        }
      });
    }
  }
  /** @private */
  _detailsOpenedItemsChanged(_detailsOpenedItems, rowDetailsRenderer) {
    iterateChildren(this.$.items, (row) => {
      if (row.hasAttribute("details-opened")) {
        this._updateItem(row, row._item);
        return;
      }
      if (rowDetailsRenderer && this._isDetailsOpened(row._item)) {
        this._updateItem(row, row._item);
      }
    });
  }
  /**
   * @param {!HTMLElement} cell
   * @protected
   */
  _configureDetailsCell(cell) {
    cell.setAttribute("part", "cell details-cell");
    cell.toggleAttribute("frozen", true);
    this._detailsCellResizeObserver.observe(cell);
  }
  /**
   * @param {!HTMLElement} row
   * @param {!GridItem} item
   * @protected
   */
  _toggleDetailsCell(row, detailsOpened) {
    const cell = row.querySelector('[part~="details-cell"]');
    if (!cell) {
      return;
    }
    cell.hidden = !detailsOpened;
    if (cell.hidden) {
      return;
    }
    if (this.rowDetailsRenderer) {
      cell._renderer = this.rowDetailsRenderer;
    }
  }
  /** @protected */
  _updateDetailsCellHeight(row) {
    const cell = row.querySelector('[part~="details-cell"]');
    if (!cell) {
      return;
    }
    this.__updateDetailsRowPadding(row, cell);
    requestAnimationFrame(() => this.__updateDetailsRowPadding(row, cell));
  }
  /** @private */
  __updateDetailsRowPadding(row, cell) {
    if (cell.hidden) {
      row.style.removeProperty("padding-bottom");
    } else {
      row.style.setProperty("padding-bottom", `${cell.offsetHeight}px`);
    }
  }
  /** @protected */
  _updateDetailsCellHeights() {
    iterateChildren(this.$.items, (row) => {
      this._updateDetailsCellHeight(row);
    });
  }
  /**
   * @param {!GridItem} item
   * @return {boolean}
   * @protected
   */
  _isDetailsOpened(item) {
    return this.detailsOpenedItems && this._getItemIndexInArray(item, this.detailsOpenedItems) !== -1;
  }
  /**
   * Open the details row of a given item.
   * @param {!GridItem} item
   */
  openItemDetails(item) {
    if (!this._isDetailsOpened(item)) {
      this.detailsOpenedItems = [...this.detailsOpenedItems, item];
    }
  }
  /**
   * Close the details row of a given item.
   * @param {!GridItem} item
   */
  closeItemDetails(item) {
    if (this._isDetailsOpened(item)) {
      this.detailsOpenedItems = this.detailsOpenedItems.filter((i) => !this._itemsEqual(i, item));
    }
  }
};
function getNormalizedScrollLeft(element, direction) {
  const {
    scrollLeft
  } = element;
  if (direction !== "rtl") {
    return scrollLeft;
  }
  return element.scrollWidth - element.clientWidth + scrollLeft;
}
var observer = new ResizeObserver((entries) => {
  setTimeout(() => {
    entries.forEach((entry) => {
      if (!entry.target.isConnected) {
        return;
      }
      if (entry.target.resizables) {
        entry.target.resizables.forEach((resizable) => {
          resizable._onResize(entry.contentRect);
        });
      } else {
        entry.target._onResize(entry.contentRect);
      }
    });
  });
});
var ResizeMixin = dedupingMixin((superclass) => class ResizeMixinClass extends superclass {
  /**
   * When true, the parent element resize will be also observed.
   * Override this getter and return `true` to enable this.
   *
   * @protected
   */
  get _observeParent() {
    return false;
  }
  /** @protected */
  connectedCallback() {
    super.connectedCallback();
    observer.observe(this);
    if (this._observeParent) {
      const parent = this.parentNode instanceof ShadowRoot ? this.parentNode.host : this.parentNode;
      if (!parent.resizables) {
        parent.resizables = /* @__PURE__ */ new Set();
        observer.observe(parent);
      }
      parent.resizables.add(this);
      this.__parent = parent;
    }
  }
  /** @protected */
  disconnectedCallback() {
    super.disconnectedCallback();
    observer.unobserve(this);
    const parent = this.__parent;
    if (this._observeParent && parent) {
      const resizables = parent.resizables;
      if (resizables) {
        resizables.delete(this);
        if (resizables.size === 0) {
          observer.unobserve(parent);
        }
      }
      this.__parent = null;
    }
  }
  /**
   * A handler invoked on host resize. By default, it does nothing.
   * Override the method to implement your own behavior.
   *
   * @protected
   */
  _onResize(_contentRect) {
  }
});
var timeouts = {
  SCROLLING: 500,
  UPDATE_CONTENT_VISIBILITY: 100
};
var ScrollMixin = (superClass) => class ScrollMixin extends ResizeMixin(superClass) {
  static get properties() {
    return {
      /**
       * Allows you to choose between modes for rendering columns in the grid:
       *
       * "eager" (default): All columns are rendered upfront, regardless of their visibility within the viewport.
       * This mode should generally be preferred, as it avoids the limitations imposed by the "lazy" mode.
       * Use this mode unless the grid has a large number of columns and performance outweighs the limitations
       * in priority.
       *
       * "lazy": Optimizes the rendering of cells when there are multiple columns in the grid by virtualizing
       * horizontal scrolling. In this mode, body cells are rendered only when their corresponding columns are
       * inside the visible viewport.
       *
       * Using "lazy" rendering should be used only if you're dealing with a large number of columns and performance
       * is your highest priority. For most use cases, the default "eager" mode is recommended due to the
       * limitations imposed by the "lazy" mode.
       *
       * When using the "lazy" mode, keep the following limitations in mind:
       *
       * - Row Height: When only a number of columns are visible at once, the height of a row can only be that of
       * the highest cell currently visible on that row. Make sure each cell on a single row has the same height
       * as all other cells on that row. If row cells have different heights, users may experience jumpiness when
       * scrolling the grid horizontally as lazily rendered cells with different heights are scrolled into view.
       *
       * - Auto-width Columns: For the columns that are initially outside the visible viewport but still use auto-width,
       * only the header content is taken into account when calculating the column width because the body cells
       * of the columns outside the viewport are not initially rendered.
       *
       * - Screen Reader Compatibility: Screen readers may not be able to associate the focused cells with the correct
       * headers when only a subset of the body cells on a row is rendered.
       *
       * - Keyboard Navigation: Tabbing through focusable elements inside the grid body may not work as expected because
       * some of the columns that would include focusable elements in the body cells may be outside the visible viewport
       * and thus not rendered.
       *
       * @attr {eager|lazy} column-rendering
       * @type {!ColumnRendering}
       */
      columnRendering: {
        type: String,
        value: "eager",
        sync: true
      },
      /**
       * Cached array of frozen cells
       * @private
       */
      _frozenCells: {
        type: Array,
        value: () => []
      },
      /**
       * Cached array of cells frozen to end
       * @private
       */
      _frozenToEndCells: {
        type: Array,
        value: () => []
      }
    };
  }
  static get observers() {
    return ["__columnRenderingChanged(_columnTree, columnRendering)"];
  }
  /** @private */
  get _scrollLeft() {
    return this.$.table.scrollLeft;
  }
  /** @private */
  get _scrollTop() {
    return this.$.table.scrollTop;
  }
  /**
   * Override (from iron-scroll-target-behavior) to avoid document scroll
   * @private
   */
  set _scrollTop(top2) {
    this.$.table.scrollTop = top2;
  }
  /** @protected */
  get _lazyColumns() {
    return this.columnRendering === "lazy";
  }
  /** @protected */
  ready() {
    super.ready();
    this.scrollTarget = this.$.table;
    this.$.items.addEventListener("focusin", (e) => {
      const composedPath = e.composedPath();
      const row = composedPath[composedPath.indexOf(this.$.items) - 1];
      if (row) {
        if (!this._isMousedown) {
          const tableHeight = this.$.table.clientHeight;
          const headerHeight = this.$.header.clientHeight;
          const footerHeight = this.$.footer.clientHeight;
          const viewportHeight = tableHeight - headerHeight - footerHeight;
          const isRowLargerThanViewport = row.clientHeight > viewportHeight;
          const scrollTarget = isRowLargerThanViewport ? e.target : row;
          this.__scrollIntoViewport(scrollTarget);
        }
        if (!this.$.table.contains(e.relatedTarget)) {
          this.$.table.dispatchEvent(new CustomEvent("virtualizer-element-focused", {
            detail: {
              element: row
            }
          }));
        }
      }
    });
    this.$.table.addEventListener("scroll", () => this._afterScroll());
  }
  /**
   * @protected
   * @override
   */
  _onResize() {
    this._updateOverflow();
    this.__updateHorizontalScrollPosition();
    if (this._firefox) {
      const isVisible = !isElementHidden(this);
      if (isVisible && this.__previousVisible === false) {
        this._scrollTop = this.__memorizedScrollTop || 0;
      }
      this.__previousVisible = isVisible;
    }
  }
  /**
   * Scroll to a flat index in the grid. The method doesn't take into account
   * the hierarchy of the items.
   *
   * @param {number} index Row index to scroll to
   * @protected
   */
  _scrollToFlatIndex(index) {
    index = Math.min(this._flatSize - 1, Math.max(0, index));
    this.__virtualizer.scrollToIndex(index);
    const rowElement = [...this.$.items.children].find((child) => child.index === index);
    this.__scrollIntoViewport(rowElement);
  }
  /**
   * Makes sure the given element is fully inside the visible viewport,
   * taking header/footer into account.
   * @private
   */
  __scrollIntoViewport(element) {
    if (!element) {
      return;
    }
    const dstRect = element.getBoundingClientRect();
    const footerTop = this.$.footer.getBoundingClientRect().top;
    const headerBottom = this.$.header.getBoundingClientRect().bottom;
    if (dstRect.bottom > footerTop) {
      this.$.table.scrollTop += dstRect.bottom - footerTop;
    } else if (dstRect.top < headerBottom) {
      this.$.table.scrollTop -= headerBottom - dstRect.top;
    }
  }
  /** @private */
  _scheduleScrolling() {
    if (!this._scrollingFrame) {
      this._scrollingFrame = requestAnimationFrame(() => this.$.scroller.toggleAttribute("scrolling", true));
    }
    this._debounceScrolling = Debouncer.debounce(this._debounceScrolling, timeOut.after(timeouts.SCROLLING), () => {
      cancelAnimationFrame(this._scrollingFrame);
      delete this._scrollingFrame;
      this.$.scroller.toggleAttribute("scrolling", false);
    });
  }
  /** @private */
  _afterScroll() {
    this.__updateHorizontalScrollPosition();
    if (!this.hasAttribute("reordering")) {
      this._scheduleScrolling();
    }
    if (!this.hasAttribute("navigating")) {
      this._hideTooltip(true);
    }
    this._updateOverflow();
    this._debounceColumnContentVisibility = Debouncer.debounce(this._debounceColumnContentVisibility, timeOut.after(timeouts.UPDATE_CONTENT_VISIBILITY), () => {
      if (this._lazyColumns && this.__cachedScrollLeft !== this._scrollLeft) {
        this.__cachedScrollLeft = this._scrollLeft;
        this.__updateColumnsBodyContentHidden();
      }
    });
    if (this._firefox) {
      const isVisible = !isElementHidden(this);
      if (isVisible && this.__previousVisible !== false) {
        this.__memorizedScrollTop = this._scrollTop;
      }
    }
  }
  /** @private */
  __updateColumnsBodyContentHidden() {
    if (!this._columnTree || !this._areSizerCellsAssigned()) {
      return;
    }
    const columnsInOrder = this._getColumnsInOrder();
    let bodyContentHiddenChanged = false;
    columnsInOrder.forEach((column) => {
      const bodyContentHidden = this._lazyColumns && !this.__isColumnInViewport(column);
      if (column._bodyContentHidden !== bodyContentHidden) {
        bodyContentHiddenChanged = true;
        column._cells.forEach((cell) => {
          if (cell !== column._sizerCell) {
            if (bodyContentHidden) {
              cell.remove();
            } else if (cell.__parentRow) {
              const followingColumnCell = [...cell.__parentRow.children].find((child) => columnsInOrder.indexOf(child._column) > columnsInOrder.indexOf(column));
              cell.__parentRow.insertBefore(cell, followingColumnCell);
            }
          }
        });
      }
      column._bodyContentHidden = bodyContentHidden;
    });
    if (bodyContentHiddenChanged) {
      this._frozenCellsChanged();
    }
    if (this._lazyColumns) {
      const lastFrozenColumn = [...columnsInOrder].reverse().find((column) => column.frozen);
      const lastFrozenColumnEnd = this.__getColumnEnd(lastFrozenColumn);
      const firstVisibleColumn = columnsInOrder.find((column) => !column.frozen && !column._bodyContentHidden);
      this.__lazyColumnsStart = this.__getColumnStart(firstVisibleColumn) - lastFrozenColumnEnd;
      this.$.items.style.setProperty("--_grid-lazy-columns-start", `${this.__lazyColumnsStart}px`);
      this._resetKeyboardNavigation();
    }
  }
  /** @private */
  __getColumnEnd(column) {
    if (!column) {
      return this.__isRTL ? this.$.table.clientWidth : 0;
    }
    return column._sizerCell.offsetLeft + (this.__isRTL ? 0 : column._sizerCell.offsetWidth);
  }
  /** @private */
  __getColumnStart(column) {
    if (!column) {
      return this.__isRTL ? this.$.table.clientWidth : 0;
    }
    return column._sizerCell.offsetLeft + (this.__isRTL ? column._sizerCell.offsetWidth : 0);
  }
  /**
   * Returns true if the given column is horizontally inside the viewport.
   * @private
   */
  __isColumnInViewport(column) {
    if (column.frozen || column.frozenToEnd) {
      return true;
    }
    return this.__isHorizontallyInViewport(column._sizerCell);
  }
  /** @private */
  __isHorizontallyInViewport(element) {
    return element.offsetLeft + element.offsetWidth >= this._scrollLeft && element.offsetLeft <= this._scrollLeft + this.clientWidth;
  }
  /** @private */
  __columnRenderingChanged(_columnTree, columnRendering) {
    if (columnRendering === "eager") {
      this.$.scroller.removeAttribute("column-rendering");
    } else {
      this.$.scroller.setAttribute("column-rendering", columnRendering);
    }
    this.__updateColumnsBodyContentHidden();
  }
  /** @private */
  _updateOverflow() {
    this._debounceOverflow = Debouncer.debounce(this._debounceOverflow, animationFrame, () => {
      this.__doUpdateOverflow();
    });
  }
  /** @private */
  __doUpdateOverflow() {
    let overflow = "";
    const table = this.$.table;
    if (table.scrollTop < table.scrollHeight - table.clientHeight) {
      overflow += " bottom";
    }
    if (table.scrollTop > 0) {
      overflow += " top";
    }
    const scrollLeft = getNormalizedScrollLeft(table, this.getAttribute("dir"));
    if (scrollLeft > 0) {
      overflow += " start";
    }
    if (scrollLeft < table.scrollWidth - table.clientWidth) {
      overflow += " end";
    }
    if (this.__isRTL) {
      overflow = overflow.replace(/start|end/giu, (matched) => {
        return matched === "start" ? "end" : "start";
      });
    }
    if (table.scrollLeft < table.scrollWidth - table.clientWidth) {
      overflow += " right";
    }
    if (table.scrollLeft > 0) {
      overflow += " left";
    }
    const value = overflow.trim();
    if (value.length > 0 && this.getAttribute("overflow") !== value) {
      this.setAttribute("overflow", value);
    } else if (value.length === 0 && this.hasAttribute("overflow")) {
      this.removeAttribute("overflow");
    }
  }
  /** @protected */
  _frozenCellsChanged() {
    this._debouncerCacheElements = Debouncer.debounce(this._debouncerCacheElements, microTask, () => {
      Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach((cell) => {
        cell.style.transform = "";
      });
      this._frozenCells = Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]"));
      this._frozenToEndCells = Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]"));
      this.__updateHorizontalScrollPosition();
    });
    this._debounceUpdateFrozenColumn();
  }
  /** @protected */
  _debounceUpdateFrozenColumn() {
    this.__debounceUpdateFrozenColumn = Debouncer.debounce(this.__debounceUpdateFrozenColumn, microTask, () => this._updateFrozenColumn());
  }
  /** @private */
  _updateFrozenColumn() {
    if (!this._columnTree) {
      return;
    }
    const columnsRow = this._columnTree[this._columnTree.length - 1].slice(0);
    columnsRow.sort((a, b2) => {
      return a._order - b2._order;
    });
    let lastFrozen;
    let firstFrozenToEnd;
    for (let i = 0; i < columnsRow.length; i++) {
      const col = columnsRow[i];
      col._lastFrozen = false;
      col._firstFrozenToEnd = false;
      if (firstFrozenToEnd === void 0 && col.frozenToEnd && !col.hidden) {
        firstFrozenToEnd = i;
      }
      if (col.frozen && !col.hidden) {
        lastFrozen = i;
      }
    }
    if (lastFrozen !== void 0) {
      columnsRow[lastFrozen]._lastFrozen = true;
    }
    if (firstFrozenToEnd !== void 0) {
      columnsRow[firstFrozenToEnd]._firstFrozenToEnd = true;
    }
    this.__updateColumnsBodyContentHidden();
  }
  /** @private */
  __updateHorizontalScrollPosition() {
    if (!this._columnTree) {
      return;
    }
    const scrollWidth = this.$.table.scrollWidth;
    const clientWidth = this.$.table.clientWidth;
    const scrollLeft = Math.max(0, this.$.table.scrollLeft);
    const normalizedScrollLeft = getNormalizedScrollLeft(this.$.table, this.getAttribute("dir"));
    const transform = `translate(${-scrollLeft}px, 0)`;
    this.$.header.style.transform = transform;
    this.$.footer.style.transform = transform;
    this.$.items.style.transform = transform;
    const x = this.__isRTL ? normalizedScrollLeft + clientWidth - scrollWidth : scrollLeft;
    const transformFrozen = `translate(${x}px, 0)`;
    this._frozenCells.forEach((cell) => {
      cell.style.transform = transformFrozen;
    });
    const remaining = this.__isRTL ? normalizedScrollLeft : scrollLeft + clientWidth - scrollWidth;
    const transformFrozenToEnd = `translate(${remaining}px, 0)`;
    let transformFrozenToEndBody = transformFrozenToEnd;
    if (this._lazyColumns && this._areSizerCellsAssigned()) {
      const columnsInOrder = this._getColumnsInOrder();
      const lastVisibleColumn = [...columnsInOrder].reverse().find((column) => !column.frozenToEnd && !column._bodyContentHidden);
      const lastVisibleColumnEnd = this.__getColumnEnd(lastVisibleColumn);
      const firstFrozenToEndColumn = columnsInOrder.find((column) => column.frozenToEnd);
      const firstFrozenToEndColumnStart = this.__getColumnStart(firstFrozenToEndColumn);
      const translateX = remaining + (firstFrozenToEndColumnStart - lastVisibleColumnEnd) + this.__lazyColumnsStart;
      transformFrozenToEndBody = `translate(${translateX}px, 0)`;
    }
    this._frozenToEndCells.forEach((cell) => {
      if (this.$.items.contains(cell)) {
        cell.style.transform = transformFrozenToEndBody;
      } else {
        cell.style.transform = transformFrozenToEnd;
      }
    });
    if (this.hasAttribute("navigating") && this.__rowFocusMode) {
      this.$.table.style.setProperty("--_grid-horizontal-scroll-position", `${-x}px`);
    }
  }
  /** @private */
  _areSizerCellsAssigned() {
    return this._getColumnsInOrder().every((column) => column._sizerCell);
  }
};
var SelectionMixin = (superClass) => class SelectionMixin extends superClass {
  static get properties() {
    return {
      /**
       * An array that contains the selected items.
       * @type {!Array<!GridItem>}
       */
      selectedItems: {
        type: Object,
        notify: true,
        value: () => [],
        sync: true
      },
      /**
       * A function to check whether a specific item in the grid may be
       * selected or deselected by the user. Used by the selection column to
       * conditionally enable to disable checkboxes for individual items. This
       * function does not prevent programmatic selection/deselection of
       * items. Changing the function does not modify the currently selected
       * items.
       *
       * Configuring this function hides the select all checkbox of the grid
       * selection column, which means users can not select or deselect all
       * items anymore, nor do they get feedback on whether all items are
       * selected or not.
       *
       * Receives an item instance and should return a boolean indicating
       * whether users may change the selection state of that item.
       *
       * @type {(item: !GridItem) => boolean}
       */
      isItemSelectable: {
        type: Function,
        notify: /* @__PURE__ */ (() => true)()
        // prevent Polymer analyzer from documenting a changed event
      },
      /**
       * Set of selected item ids
       * @private
       */
      __selectedKeys: {
        type: Object,
        computed: "__computeSelectedKeys(itemIdPath, selectedItems)"
      }
    };
  }
  static get observers() {
    return ["__selectedItemsChanged(itemIdPath, selectedItems, isItemSelectable)"];
  }
  /**
   * @param {!GridItem} item
   * @return {boolean}
   * @protected
   */
  _isSelected(item) {
    return this.__selectedKeys.has(this.getItemId(item));
  }
  /**
   * Determines whether the selection state of an item may be changed by the
   * user.
   *
   * @private
   */
  __isItemSelectable(item) {
    if (!this.isItemSelectable || !item) {
      return true;
    }
    return this.isItemSelectable(item);
  }
  /**
   * Selects the given item.
   *
   * @method selectItem
   * @param {!GridItem} item The item object
   */
  selectItem(item) {
    if (!this._isSelected(item)) {
      this.selectedItems = [...this.selectedItems, item];
    }
  }
  /**
   * Deselects the given item if it is already selected.
   *
   * @method deselect
   * @param {!GridItem} item The item object
   */
  deselectItem(item) {
    if (this._isSelected(item)) {
      this.selectedItems = this.selectedItems.filter((i) => !this._itemsEqual(i, item));
    }
  }
  /** @private */
  __selectedItemsChanged() {
    this.requestContentUpdate();
  }
  /** @private */
  __computeSelectedKeys(_itemIdPath, selectedItems) {
    const selected = selectedItems || [];
    const selectedKeys = /* @__PURE__ */ new Set();
    selected.forEach((item) => {
      selectedKeys.add(this.getItemId(item));
    });
    return selectedKeys;
  }
  /**
   * Fired when the `selectedItems` property changes.
   *
   * @event selected-items-changed
   */
  /**
   * Fired when the user selects or deselects an item through the selection column.
   *
   * @event item-toggle
   * @param {Object} detail
   * @param {GridItem} detail.item the item that was selected or deselected
   * @param {boolean} detail.selected true if the item was selected
   * @param {boolean} detail.shiftKey true if the shift key was pressed
   */
};
var defaultMultiSortPriority = "prepend";
var SortMixin = (superClass) => class SortMixin extends superClass {
  static get properties() {
    return {
      /**
       * When `true`, all `<vaadin-grid-sorter>` are applied for sorting.
       * @attr {boolean} multi-sort
       * @type {boolean}
       */
      multiSort: {
        type: Boolean,
        value: false
      },
      /**
       * Controls how columns are added to the sort order when using multi-sort.
       * The sort order is visually indicated by numbers in grid sorters placed in column headers.
       *
       * By default, whenever an unsorted column is sorted, or the sort-direction of a column is
       * changed, that column gets sort priority 1, thus affecting the priority for all the other
       * sorted columns. This is identical to using `multi-sort-priority="prepend"`.
       *
       * Using this property allows to change this behavior so that sorting an unsorted column
       * would add it to the "end" of the sort, and changing column's sort direction would retain
       * it's previous priority. To set this, use `multi-sort-priority="append"`.
       *
       * @attr {string} multi-sort-priority
       */
      multiSortPriority: {
        type: String,
        value: () => defaultMultiSortPriority
      },
      /**
       * When `true`, Shift-clicking an unsorted column's sorter adds it to the multi-sort.
       * Shift + Space does the same action via keyboard. This property has precedence over the
       * `multiSort` property. If `multiSortOnShiftClick` is true, the multiSort property is effectively ignored.
       *
       * @attr {boolean} multi-sort-on-shift-click
       * @type {boolean}
       */
      multiSortOnShiftClick: {
        type: Boolean,
        value: false
      },
      /**
       * @type {!Array<!GridSorterDefinition>}
       * @protected
       */
      _sorters: {
        type: Array,
        value: () => []
      },
      /** @private */
      _previousSorters: {
        type: Array,
        value: () => []
      }
    };
  }
  /**
   * Sets the default multi-sort priority to use for all grid instances.
   * This method should be called before creating any grid instances.
   * Changing this setting does not affect the default for existing grids.
   *
   * @param {string} priority
   */
  static setDefaultMultiSortPriority(priority) {
    defaultMultiSortPriority = ["append", "prepend"].includes(priority) ? priority : "prepend";
  }
  /** @protected */
  ready() {
    super.ready();
    this.addEventListener("sorter-changed", this._onSorterChanged);
  }
  /** @private */
  _onSorterChanged(e) {
    const sorter = e.target;
    e.stopPropagation();
    sorter._grid = this;
    this.__updateSorter(sorter, e.detail.shiftClick, e.detail.fromSorterClick);
    this.__applySorters();
  }
  /** @private */
  __removeSorters(sortersToRemove) {
    if (sortersToRemove.length === 0) {
      return;
    }
    this._sorters = this._sorters.filter((sorter) => !sortersToRemove.includes(sorter));
    this.__applySorters();
  }
  /** @private */
  __updateSortOrders() {
    this._sorters.forEach((sorter) => {
      sorter._order = null;
    });
    const activeSorters = this._getActiveSorters();
    if (activeSorters.length > 1) {
      activeSorters.forEach((sorter, index) => {
        sorter._order = index;
      });
    }
  }
  /** @private */
  __updateSorter(sorter, shiftClick, fromSorterClick) {
    if (!sorter.direction && !this._sorters.includes(sorter)) {
      return;
    }
    sorter._order = null;
    const restSorters = this._sorters.filter((s) => s !== sorter);
    if (this.multiSort && (!this.multiSortOnShiftClick || !fromSorterClick) || this.multiSortOnShiftClick && shiftClick) {
      if (this.multiSortPriority === "append") {
        this._sorters = [...restSorters, sorter];
      } else {
        this._sorters = [sorter, ...restSorters];
      }
    } else if (sorter.direction || this.multiSortOnShiftClick) {
      this._sorters = sorter.direction ? [sorter] : [];
      restSorters.forEach((sorter2) => {
        sorter2._order = null;
        sorter2.direction = null;
      });
    }
  }
  /** @private */
  __applySorters() {
    this.__updateSortOrders();
    if (this.dataProvider && // No need to clear cache if sorters didn't change and grid is attached
    this.isAttached && JSON.stringify(this._previousSorters) !== JSON.stringify(this._mapSorters())) {
      this.__debounceClearCache();
    }
    this._a11yUpdateSorters();
    this._previousSorters = this._mapSorters();
  }
  /**
   * @type {GridSorterDefinition[]}
   * @protected
   */
  _getActiveSorters() {
    return this._sorters.filter((sorter) => sorter.direction && sorter.isConnected);
  }
  /**
   * @return {!Array<!GridSorterDefinition>}
   * @protected
   */
  _mapSorters() {
    return this._getActiveSorters().map((sorter) => {
      return {
        path: sorter.path,
        direction: sorter.direction
      };
    });
  }
};
var StylingMixin = (superClass) => class StylingMixin extends superClass {
  static get properties() {
    return {
      /**
       * A function that allows generating CSS class names for grid cells
       * based on their row and column. The return value should be the generated
       * class name as a string, or multiple class names separated by whitespace
       * characters.
       *
       * Receives two arguments:
       * - `column` The `<vaadin-grid-column>` element (`undefined` for details-cell).
       * - `model` The object with the properties related with
       *   the rendered item, contains:
       *   - `model.index` The index of the item.
       *   - `model.item` The item.
       *   - `model.expanded` Sublevel toggle state.
       *   - `model.level` Level of the tree represented with a horizontal offset of the toggle button.
       *   - `model.selected` Selected state.
       *
       * @type {GridCellClassNameGenerator | null | undefined}
       * @deprecated Use `cellPartNameGenerator` instead.
       */
      cellClassNameGenerator: {
        type: Function,
        sync: true
      },
      /**
       * A function that allows generating CSS `part` names for grid cells in Shadow DOM based
       * on their row and column, for styling from outside using the `::part()` selector.
       *
       * The return value should be the generated part name as a string, or multiple part names
       * separated by whitespace characters.
       *
       * Receives two arguments:
       * - `column` The `<vaadin-grid-column>` element (`undefined` for details-cell).
       * - `model` The object with the properties related with
       *   the rendered item, contains:
       *   - `model.index` The index of the item.
       *   - `model.item` The item.
       *   - `model.expanded` Sublevel toggle state.
       *   - `model.level` Level of the tree represented with a horizontal offset of the toggle button.
       *   - `model.selected` Selected state.
       *
       * @type {GridCellPartNameGenerator | null | undefined}
       */
      cellPartNameGenerator: {
        type: Function,
        sync: true
      }
    };
  }
  static get observers() {
    return ["__cellClassNameGeneratorChanged(cellClassNameGenerator)", "__cellPartNameGeneratorChanged(cellPartNameGenerator)"];
  }
  /** @private */
  __cellClassNameGeneratorChanged() {
    this.generateCellClassNames();
  }
  /** @private */
  __cellPartNameGeneratorChanged() {
    this.generateCellPartNames();
  }
  /**
   * Runs the `cellClassNameGenerator` for the visible cells.
   * If the generator depends on varying conditions, you need to
   * call this function manually in order to update the styles when
   * the conditions change.
   *
   * @deprecated Use `cellPartNameGenerator` and `generateCellPartNames()` instead.
   */
  generateCellClassNames() {
    iterateChildren(this.$.items, (row) => {
      if (!row.hidden) {
        this._generateCellClassNames(row, this.__getRowModel(row));
      }
    });
  }
  /**
   * Runs the `cellPartNameGenerator` for the visible cells.
   * If the generator depends on varying conditions, you need to
   * call this function manually in order to update the styles when
   * the conditions change.
   */
  generateCellPartNames() {
    iterateChildren(this.$.items, (row) => {
      if (!row.hidden) {
        this._generateCellPartNames(row, this.__getRowModel(row));
      }
    });
  }
  /** @private */
  _generateCellClassNames(row, model) {
    iterateRowCells(row, (cell) => {
      if (cell.__generatedClasses) {
        cell.__generatedClasses.forEach((className) => cell.classList.remove(className));
      }
      if (this.cellClassNameGenerator && !row.hasAttribute("loading")) {
        const result = this.cellClassNameGenerator(cell._column, model);
        cell.__generatedClasses = result && result.split(" ").filter((className) => className.length > 0);
        if (cell.__generatedClasses) {
          cell.__generatedClasses.forEach((className) => cell.classList.add(className));
        }
      }
    });
  }
  /** @private */
  _generateCellPartNames(row, model) {
    iterateRowCells(row, (cell) => {
      if (cell.__generatedParts) {
        cell.__generatedParts.forEach((partName) => {
          updatePart(cell, null, partName);
        });
      }
      if (this.cellPartNameGenerator && !row.hasAttribute("loading")) {
        const result = this.cellPartNameGenerator(cell._column, model);
        cell.__generatedParts = result && result.split(" ").filter((partName) => partName.length > 0);
        if (cell.__generatedParts) {
          cell.__generatedParts.forEach((partName) => {
            updatePart(cell, true, partName);
          });
        }
      }
    });
  }
};
var GridMixin = (superClass) => class extends ColumnAutoWidthMixin(ArrayDataProviderMixin(DataProviderMixin(DynamicColumnsMixin(ActiveItemMixin(ScrollMixin(SelectionMixin(SortMixin(RowDetailsMixin(KeyboardNavigationMixin(A11yMixin(FilterMixin(ColumnReorderingMixin(ColumnResizingMixin(EventContextMixin(DragAndDropMixin(StylingMixin(TabindexMixin(superClass)))))))))))))))))) {
  static get observers() {
    return ["_columnTreeChanged(_columnTree)", "_flatSizeChanged(_flatSize, __virtualizer, _hasData, _columnTree)"];
  }
  static get properties() {
    return {
      /** @private */
      _safari: {
        type: Boolean,
        value: isSafari
      },
      /** @private */
      _ios: {
        type: Boolean,
        value: isIOS
      },
      /** @private */
      _firefox: {
        type: Boolean,
        value: isFirefox
      },
      /** @private */
      _android: {
        type: Boolean,
        value: isAndroid
      },
      /** @private */
      _touchDevice: {
        type: Boolean,
        value: isTouch
      },
      /**
       * If true, the grid's height is defined by its rows.
       *
       * Effectively, this disables the grid's virtual scrolling so that all the rows are rendered in the DOM at once.
       * If the grid has a large number of items, using the feature is discouraged to avoid performance issues.
       * @attr {boolean} all-rows-visible
       * @type {boolean}
       */
      allRowsVisible: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /** @private */
      isAttached: {
        value: false
      },
      /**
       * An internal property that is mainly used by `vaadin-template-renderer`
       * to identify grid elements.
       *
       * @private
       */
      __gridElement: {
        type: Boolean,
        value: true
      },
      /** @private */
      __hasEmptyStateContent: {
        type: Boolean,
        value: false
      },
      /** @private */
      __emptyState: {
        type: Boolean,
        computed: "__computeEmptyState(_flatSize, __hasEmptyStateContent)"
      }
    };
  }
  constructor() {
    super();
    this.addEventListener("animationend", this._onAnimationEnd);
  }
  /** @private */
  get _firstVisibleIndex() {
    const firstVisibleItem = this.__getFirstVisibleItem();
    return firstVisibleItem ? firstVisibleItem.index : void 0;
  }
  /** @private */
  get _lastVisibleIndex() {
    const lastVisibleItem = this.__getLastVisibleItem();
    return lastVisibleItem ? lastVisibleItem.index : void 0;
  }
  /** @protected */
  connectedCallback() {
    super.connectedCallback();
    this.isAttached = true;
    this.__virtualizer.hostConnected();
  }
  /** @protected */
  disconnectedCallback() {
    super.disconnectedCallback();
    this.isAttached = false;
    this._hideTooltip(true);
  }
  /** @private */
  __getFirstVisibleItem() {
    return this._getRenderedRows().find((row) => this._isInViewport(row));
  }
  /** @private */
  __getLastVisibleItem() {
    return this._getRenderedRows().reverse().find((row) => this._isInViewport(row));
  }
  /** @private */
  _isInViewport(item) {
    const scrollTargetRect = this.$.table.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const headerHeight = this.$.header.getBoundingClientRect().height;
    const footerHeight = this.$.footer.getBoundingClientRect().height;
    return itemRect.bottom > scrollTargetRect.top + headerHeight && itemRect.top < scrollTargetRect.bottom - footerHeight;
  }
  /** @private */
  _getRenderedRows() {
    return Array.from(this.$.items.children).filter((item) => !item.hidden).sort((a, b2) => a.index - b2.index);
  }
  /** @protected */
  _getRowContainingNode(node) {
    const content = getClosestElement("vaadin-grid-cell-content", node);
    if (!content) {
      return;
    }
    const cell = content.assignedSlot.parentElement;
    return cell.parentElement;
  }
  /** @protected */
  _isItemAssignedToRow(item, row) {
    const model = this.__getRowModel(row);
    return this.getItemId(item) === this.getItemId(model.item);
  }
  /** @protected */
  ready() {
    super.ready();
    this.__virtualizer = new Virtualizer({
      createElements: this._createScrollerRows.bind(this),
      updateElement: this._updateScrollerItem.bind(this),
      scrollContainer: this.$.items,
      scrollTarget: this.$.table,
      reorderElements: true
    });
    new ResizeObserver(() => setTimeout(() => {
      this.__updateColumnsBodyContentHidden();
    })).observe(this.$.table);
    const minHeightObserver = new ResizeObserver(() => setTimeout(() => {
      this.__updateMinHeight();
    }));
    minHeightObserver.observe(this.$.header);
    minHeightObserver.observe(this.$.items);
    minHeightObserver.observe(this.$.footer);
    processTemplates(this);
    this._tooltipController = new TooltipController(this);
    this.addController(this._tooltipController);
    this._tooltipController.setManual(true);
    this.__emptyStateContentObserver = new SlotObserver(this.$.emptystateslot, ({
      currentNodes
    }) => {
      this.$.emptystatecell._content = currentNodes[0];
      this.__hasEmptyStateContent = !!this.$.emptystatecell._content;
    });
  }
  /** @private */
  __getBodyCellCoordinates(cell) {
    if (this.$.items.contains(cell) && cell.localName === "td") {
      return {
        item: cell.parentElement._item,
        column: cell._column
      };
    }
  }
  /** @private */
  __focusBodyCell({
    item,
    column
  }) {
    const row = this._getRenderedRows().find((row2) => row2._item === item);
    const cell = row && [...row.children].find((cell2) => cell2._column === column);
    if (cell) {
      cell.focus();
    }
  }
  /** @protected */
  _focusFirstVisibleRow() {
    const row = this.__getFirstVisibleItem();
    this.__rowFocusMode = true;
    row.focus();
  }
  /** @private */
  _flatSizeChanged(flatSize, virtualizer, hasData, columnTree) {
    if (virtualizer && hasData && columnTree) {
      const cell = this.shadowRoot.activeElement;
      const cellCoordinates = this.__getBodyCellCoordinates(cell);
      const previousSize = virtualizer.size || 0;
      virtualizer.size = flatSize;
      virtualizer.update(previousSize - 1, previousSize - 1);
      if (flatSize < previousSize) {
        virtualizer.update(flatSize - 1, flatSize - 1);
      }
      if (cellCoordinates && cell.parentElement.hidden) {
        this.__focusBodyCell(cellCoordinates);
      }
      this._resetKeyboardNavigation();
    }
  }
  /** @private */
  _createScrollerRows(count) {
    const rows = [];
    for (let i = 0; i < count; i++) {
      const row = document.createElement("tr");
      row.setAttribute("part", "row body-row");
      row.setAttribute("role", "row");
      row.setAttribute("tabindex", "-1");
      if (this._columnTree) {
        this._updateRow(row, this._columnTree[this._columnTree.length - 1], "body", false, true);
      }
      rows.push(row);
    }
    if (this._columnTree) {
      this._columnTree[this._columnTree.length - 1].forEach((c) => {
        if (c.isConnected && c._cells) {
          c._cells = [...c._cells];
        }
      });
    }
    this.__afterCreateScrollerRowsDebouncer = Debouncer.debounce(this.__afterCreateScrollerRowsDebouncer, animationFrame, () => {
      this._afterScroll();
    });
    return rows;
  }
  /** @private */
  _createCell(tagName, column) {
    const contentId = this._contentIndex = this._contentIndex + 1 || 0;
    const slotName = `vaadin-grid-cell-content-${contentId}`;
    const cellContent = document.createElement("vaadin-grid-cell-content");
    cellContent.setAttribute("slot", slotName);
    const cell = document.createElement(tagName);
    cell.id = slotName.replace("-content-", "-");
    cell.setAttribute("role", tagName === "td" ? "gridcell" : "columnheader");
    if (!isAndroid && !isIOS) {
      cell.addEventListener("mouseenter", (event) => {
        if (!this.$.scroller.hasAttribute("scrolling")) {
          this._showTooltip(event);
        }
      });
      cell.addEventListener("mouseleave", () => {
        this._hideTooltip();
      });
      cell.addEventListener("mousedown", () => {
        this._hideTooltip(true);
      });
    }
    const slot = document.createElement("slot");
    slot.setAttribute("name", slotName);
    if (column && column._focusButtonMode) {
      const div = document.createElement("div");
      div.setAttribute("role", "button");
      div.setAttribute("tabindex", "-1");
      cell.appendChild(div);
      cell._focusButton = div;
      cell.focus = function(options) {
        cell._focusButton.focus(options);
      };
      div.appendChild(slot);
    } else {
      cell.setAttribute("tabindex", "-1");
      cell.appendChild(slot);
    }
    cell._content = cellContent;
    cellContent.addEventListener("mousedown", () => {
      if (isChrome) {
        const mouseUpListener = (event) => {
          const contentContainsFocusedElement = cellContent.contains(this.getRootNode().activeElement);
          const mouseUpWithinCell = event.composedPath().includes(cellContent);
          if (!contentContainsFocusedElement && mouseUpWithinCell) {
            cell.focus({
              preventScroll: true
            });
          }
          document.removeEventListener("mouseup", mouseUpListener, true);
        };
        document.addEventListener("mouseup", mouseUpListener, true);
      } else {
        setTimeout(() => {
          if (!cellContent.contains(this.getRootNode().activeElement)) {
            cell.focus({
              preventScroll: true
            });
          }
        });
      }
    });
    return cell;
  }
  /**
   * @param {!HTMLTableRowElement} row
   * @param {!Array<!GridColumn>} columns
   * @param {?string} section
   * @param {boolean} isColumnRow
   * @param {boolean} noNotify
   * @protected
   */
  _updateRow(row, columns, section = "body", isColumnRow = false, noNotify = false) {
    const contentsFragment = document.createDocumentFragment();
    iterateRowCells(row, (cell) => {
      cell._vacant = true;
    });
    row.innerHTML = "";
    if (section === "body") {
      row.__cells = [];
      row.__detailsCell = null;
    }
    columns.filter((column) => !column.hidden).forEach((column, index, cols) => {
      let cell;
      if (section === "body") {
        if (!column._cells) {
          column._cells = [];
        }
        cell = column._cells.find((cell2) => cell2._vacant);
        if (!cell) {
          cell = this._createCell("td", column);
          if (column._onCellKeyDown) {
            cell.addEventListener("keydown", column._onCellKeyDown.bind(column));
          }
          column._cells.push(cell);
        }
        cell.setAttribute("part", "cell body-cell");
        cell.__parentRow = row;
        row.__cells.push(cell);
        const isSizerRow = row === this.$.sizer;
        if (!column._bodyContentHidden || isSizerRow) {
          row.appendChild(cell);
        }
        if (isSizerRow) {
          column._sizerCell = cell;
        }
        if (index === cols.length - 1 && this.rowDetailsRenderer) {
          if (!this._detailsCells) {
            this._detailsCells = [];
          }
          const detailsCell = this._detailsCells.find((cell2) => cell2._vacant) || this._createCell("td");
          if (this._detailsCells.indexOf(detailsCell) === -1) {
            this._detailsCells.push(detailsCell);
          }
          if (!detailsCell._content.parentElement) {
            contentsFragment.appendChild(detailsCell._content);
          }
          this._configureDetailsCell(detailsCell);
          row.appendChild(detailsCell);
          row.__detailsCell = detailsCell;
          this._a11ySetRowDetailsCell(row, detailsCell);
          detailsCell._vacant = false;
        }
        if (!noNotify) {
          column._cells = [...column._cells];
        }
      } else {
        const tagName = section === "header" ? "th" : "td";
        if (isColumnRow || column.localName === "vaadin-grid-column-group") {
          cell = column[`_${section}Cell`];
          if (!cell) {
            cell = this._createCell(tagName);
            if (column._onCellKeyDown) {
              cell.addEventListener("keydown", column._onCellKeyDown.bind(column));
            }
          }
          cell._column = column;
          row.appendChild(cell);
          column[`_${section}Cell`] = cell;
        } else {
          if (!column._emptyCells) {
            column._emptyCells = [];
          }
          cell = column._emptyCells.find((cell2) => cell2._vacant) || this._createCell(tagName);
          cell._column = column;
          row.appendChild(cell);
          if (column._emptyCells.indexOf(cell) === -1) {
            column._emptyCells.push(cell);
          }
        }
        cell.part.add("cell", `${section}-cell`);
      }
      if (!cell._content.parentElement) {
        contentsFragment.appendChild(cell._content);
      }
      cell._vacant = false;
      cell._column = column;
    });
    if (section !== "body") {
      this.__debounceUpdateHeaderFooterRowVisibility(row);
    }
    this.appendChild(contentsFragment);
    this._frozenCellsChanged();
    this._updateFirstAndLastColumnForRow(row);
  }
  /**
   * @param {HTMLTableRowElement} row
   * @protected
   */
  __debounceUpdateHeaderFooterRowVisibility(row) {
    row.__debounceUpdateHeaderFooterRowVisibility = Debouncer.debounce(row.__debounceUpdateHeaderFooterRowVisibility, microTask, () => this.__updateHeaderFooterRowVisibility(row));
  }
  /**
   * @param {HTMLTableRowElement} row
   * @protected
   */
  __updateHeaderFooterRowVisibility(row) {
    if (!row) {
      return;
    }
    const visibleRowCells = Array.from(row.children).filter((cell) => {
      const column = cell._column;
      if (column._emptyCells && column._emptyCells.indexOf(cell) > -1) {
        return false;
      }
      if (row.parentElement === this.$.header) {
        if (column.headerRenderer) {
          return true;
        }
        if (column.header === null) {
          return false;
        }
        if (column.path || column.header !== void 0) {
          return true;
        }
      } else if (column.footerRenderer) {
        return true;
      }
      return false;
    });
    if (row.hidden !== !visibleRowCells.length) {
      row.hidden = !visibleRowCells.length;
    }
    this._resetKeyboardNavigation();
  }
  /** @private */
  _updateScrollerItem(row, index) {
    this._preventScrollerRotatingCellFocus(row, index);
    if (!this._columnTree) {
      return;
    }
    this._updateRowOrderParts(row, index);
    this._a11yUpdateRowRowindex(row, index);
    this._getItem(index, row);
  }
  /** @private */
  _columnTreeChanged(columnTree) {
    this._renderColumnTree(columnTree);
    this.__updateColumnsBodyContentHidden();
  }
  /** @private */
  _updateRowOrderParts(row, index = row.index) {
    updateBooleanRowStates(row, {
      first: index === 0,
      last: index === this._flatSize - 1,
      odd: index % 2 !== 0,
      even: index % 2 === 0
    });
  }
  /** @private */
  _updateRowStateParts(row, {
    item,
    expanded,
    selected,
    detailsOpened
  }) {
    updateBooleanRowStates(row, {
      expanded,
      collapsed: this.__isRowExpandable(row),
      selected,
      nonselectable: this.__isItemSelectable(item) === false,
      "details-opened": detailsOpened
    });
  }
  /** @private */
  __computeEmptyState(flatSize, hasEmptyStateContent) {
    return flatSize === 0 && hasEmptyStateContent;
  }
  /**
   * @param {!Array<!GridColumn>} columnTree
   * @protected
   */
  _renderColumnTree(columnTree) {
    iterateChildren(this.$.items, (row) => {
      this._updateRow(row, columnTree[columnTree.length - 1], "body", false, true);
      const model = this.__getRowModel(row);
      this._updateRowOrderParts(row);
      this._updateRowStateParts(row, model);
      this._filterDragAndDrop(row, model);
    });
    while (this.$.header.children.length < columnTree.length) {
      const headerRow = document.createElement("tr");
      headerRow.setAttribute("part", "row");
      headerRow.setAttribute("role", "row");
      headerRow.setAttribute("tabindex", "-1");
      this.$.header.appendChild(headerRow);
      const footerRow = document.createElement("tr");
      footerRow.setAttribute("part", "row");
      footerRow.setAttribute("role", "row");
      footerRow.setAttribute("tabindex", "-1");
      this.$.footer.appendChild(footerRow);
    }
    while (this.$.header.children.length > columnTree.length) {
      this.$.header.removeChild(this.$.header.firstElementChild);
      this.$.footer.removeChild(this.$.footer.firstElementChild);
    }
    iterateChildren(this.$.header, (headerRow, index, rows) => {
      this._updateRow(headerRow, columnTree[index], "header", index === columnTree.length - 1);
      const cells = getBodyRowCells(headerRow);
      updateCellsPart(cells, "first-header-row-cell", index === 0);
      updateCellsPart(cells, "last-header-row-cell", index === rows.length - 1);
    });
    iterateChildren(this.$.footer, (footerRow, index, rows) => {
      this._updateRow(footerRow, columnTree[columnTree.length - 1 - index], "footer", index === 0);
      const cells = getBodyRowCells(footerRow);
      updateCellsPart(cells, "first-footer-row-cell", index === 0);
      updateCellsPart(cells, "last-footer-row-cell", index === rows.length - 1);
    });
    this._updateRow(this.$.sizer, columnTree[columnTree.length - 1]);
    this._resizeHandler();
    this._frozenCellsChanged();
    this._updateFirstAndLastColumn();
    this._resetKeyboardNavigation();
    this._a11yUpdateHeaderRows();
    this._a11yUpdateFooterRows();
    this.generateCellClassNames();
    this.generateCellPartNames();
    this.__updateHeaderAndFooter();
  }
  /**
   * @param {!HTMLElement} row
   * @param {GridItem} item
   * @protected
   */
  _updateItem(row, item) {
    row._item = item;
    const model = this.__getRowModel(row);
    this._toggleDetailsCell(row, model.detailsOpened);
    this._a11yUpdateRowLevel(row, model.level);
    this._a11yUpdateRowSelected(row, model.selected);
    this._updateRowStateParts(row, model);
    this._generateCellClassNames(row, model);
    this._generateCellPartNames(row, model);
    this._filterDragAndDrop(row, model);
    this.__updateDragSourceParts(row, model);
    iterateChildren(row, (cell) => {
      if (cell._column && !cell._column.isConnected) {
        return;
      }
      if (cell._renderer) {
        const owner = cell._column || this;
        cell._renderer.call(owner, cell._content, owner, model);
      }
    });
    this._updateDetailsCellHeight(row);
    this._a11yUpdateRowExpanded(row, model.expanded);
  }
  /** @private */
  _resizeHandler() {
    this._updateDetailsCellHeights();
    this.__updateHorizontalScrollPosition();
  }
  /** @private */
  _onAnimationEnd(e) {
    if (e.animationName.indexOf("vaadin-grid-appear") === 0) {
      e.stopPropagation();
      this._resetKeyboardNavigation();
      requestAnimationFrame(() => {
        this.__scrollToPendingIndexes();
      });
    }
  }
  /**
   * @param {!HTMLTableRowElement} row
   * @return {!GridItemModel}
   * @protected
   */
  __getRowModel(row) {
    return {
      index: row.index,
      item: row._item,
      level: this._getIndexLevel(row.index),
      expanded: this._isExpanded(row._item),
      selected: this._isSelected(row._item),
      detailsOpened: !!this.rowDetailsRenderer && this._isDetailsOpened(row._item)
    };
  }
  /**
   * @param {Event} event
   * @protected
   */
  _showTooltip(event) {
    const tooltip = this._tooltipController.node;
    if (tooltip && tooltip.isConnected) {
      const target = event.target;
      if (!this.__isCellFullyVisible(target)) {
        return;
      }
      this._tooltipController.setTarget(target);
      this._tooltipController.setContext(this.getEventContext(event));
      tooltip._stateController.open({
        focus: event.type === "focusin",
        hover: event.type === "mouseenter"
      });
    }
  }
  /** @private */
  __isCellFullyVisible(cell) {
    if (cell.hasAttribute("frozen") || cell.hasAttribute("frozen-to-end")) {
      return true;
    }
    let {
      left: left2,
      right: right2
    } = this.getBoundingClientRect();
    const frozen = [...cell.parentNode.children].find((cell2) => cell2.hasAttribute("last-frozen"));
    if (frozen) {
      const frozenRect = frozen.getBoundingClientRect();
      left2 = this.__isRTL ? left2 : frozenRect.right;
      right2 = this.__isRTL ? frozenRect.left : right2;
    }
    const frozenToEnd = [...cell.parentNode.children].find((cell2) => cell2.hasAttribute("first-frozen-to-end"));
    if (frozenToEnd) {
      const frozenToEndRect = frozenToEnd.getBoundingClientRect();
      left2 = this.__isRTL ? frozenToEndRect.right : left2;
      right2 = this.__isRTL ? right2 : frozenToEndRect.left;
    }
    const cellRect = cell.getBoundingClientRect();
    return cellRect.left >= left2 && cellRect.right <= right2;
  }
  /** @protected */
  _hideTooltip(immediate) {
    const tooltip = this._tooltipController && this._tooltipController.node;
    if (tooltip) {
      tooltip._stateController.close(immediate);
    }
  }
  /**
   * Requests an update for the content of cells.
   *
   * While performing the update, the following renderers are invoked:
   * - `Grid.rowDetailsRenderer`
   * - `GridColumn.renderer`
   * - `GridColumn.headerRenderer`
   * - `GridColumn.footerRenderer`
   *
   * It is not guaranteed that the update happens immediately (synchronously) after it is requested.
   */
  requestContentUpdate() {
    this.__updateHeaderAndFooter();
    this.__updateVisibleRows();
  }
  /** @private */
  __updateHeaderAndFooter() {
    (this._columnTree || []).forEach((level) => {
      level.forEach((column) => {
        if (column._renderHeaderAndFooter) {
          column._renderHeaderAndFooter();
        }
      });
    });
  }
  /** @protected */
  __updateVisibleRows(start2, end2) {
    if (this.__virtualizer) {
      this.__virtualizer.update(start2, end2);
    }
  }
  /** @private */
  __updateMinHeight() {
    const rowHeight = 36;
    const headerHeight = this.$.header.clientHeight;
    const footerHeight = this.$.footer.clientHeight;
    const scrollbarHeight = this.$.table.offsetHeight - this.$.table.clientHeight;
    const minHeight = headerHeight + rowHeight + footerHeight + scrollbarHeight;
    if (!this.__minHeightStyleSheet && supportsAdoptingStyleSheets) {
      this.__minHeightStyleSheet = new CSSStyleSheet();
      this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, this.__minHeightStyleSheet];
    }
    if (this.__minHeightStyleSheet) {
      this.__minHeightStyleSheet.replaceSync(`:host { --_grid-min-height: ${minHeight}px; }`);
    } else {
      this.style.setProperty("--_grid-min-height", `${minHeight}px`);
    }
  }
};
var gridStyles = i$3`
  @keyframes vaadin-grid-appear {
    to {
      opacity: 1;
    }
  }

  :host {
    display: flex;
    flex-direction: column;
    animation: 1ms vaadin-grid-appear;
    height: 400px;
    min-height: var(--_grid-min-height, 0);
    flex: 1 1 auto;
    align-self: stretch;
    position: relative;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  #scroller {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    transform: translateY(0);
    width: auto;
    height: auto;
    position: absolute;
    inset: 0;
  }

  :host([all-rows-visible]) {
    height: auto;
    align-self: flex-start;
    min-height: auto;
    flex-grow: 0;
    width: 100%;
  }

  :host([all-rows-visible]) #scroller {
    width: 100%;
    height: 100%;
    position: relative;
  }

  :host([all-rows-visible]) #items {
    min-height: 1px;
  }

  #table {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
    outline: none;
    /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
    z-index: 0;
  }

  #header,
  #footer {
    display: block;
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    overflow: visible;
    width: 100%;
    z-index: 1;
  }

  #header {
    top: 0;
  }

  th {
    text-align: inherit;
  }

  /* Safari doesn't work with "inherit" */
  [safari] th {
    text-align: initial;
  }

  #footer {
    bottom: 0;
  }

  #items {
    flex-grow: 1;
    flex-shrink: 0;
    display: block;
    position: -webkit-sticky;
    position: sticky;
    width: 100%;
    left: 0;
    overflow: visible;
  }

  [part~='row'] {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
  }

  [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
    visibility: hidden;
  }

  [column-rendering='lazy'] [part~='body-cell']:not([frozen]):not([frozen-to-end]) {
    transform: translateX(var(--_grid-lazy-columns-start));
  }

  #items [part~='row'] {
    position: absolute;
  }

  #items [part~='row']:empty {
    height: 100%;
  }

  [part~='cell']:not([part~='details-cell']) {
    flex-shrink: 0;
    flex-grow: 1;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    padding: 0;
    white-space: nowrap;
  }

  [part~='cell'] {
    outline: none;
  }

  [part~='cell'] > [tabindex] {
    display: flex;
    align-items: inherit;
    outline: none;
    position: absolute;
    inset: 0;
  }

  /* Switch the focusButtonMode wrapping element to "position: static" temporarily
     when measuring real width of the cells in the auto-width columns. */
  [measuring-auto-width] [part~='cell'] > [tabindex] {
    position: static;
  }

  [part~='details-cell'] {
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
  }

  [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: block;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [hidden] {
    display: none !important;
  }

  [frozen],
  [frozen-to-end] {
    z-index: 2;
    will-change: transform;
  }

  [no-scrollbars][safari] #table,
  [no-scrollbars][firefox] #table {
    overflow: hidden;
  }

  /* Empty state */

  #scroller:not([empty-state]) #emptystatebody,
  #scroller[empty-state] #items {
    display: none;
  }

  #emptystatebody {
    display: flex;
    position: sticky;
    inset: 0;
    flex: 1;
    overflow: hidden;
  }

  #emptystaterow {
    display: flex;
    flex: 1;
  }

  #emptystatecell {
    display: block;
    flex: 1;
    overflow: auto;
  }

  /* Reordering styles */
  :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
  :host([reordering]) [part~='resize-handle'],
  #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    pointer-events: none;
  }

  [part~='reorder-ghost'] {
    visibility: hidden;
    position: fixed;
    pointer-events: none;
    opacity: 0.5;

    /* Prevent overflowing the grid in Firefox */
    top: 0;
    left: 0;
  }

  :host([reordering]) {
    -webkit-user-select: none;
    user-select: none;
  }

  /* Resizing styles */
  [part~='resize-handle'] {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    cursor: col-resize;
    z-index: 1;
  }

  [part~='resize-handle']::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 35px;
    transform: translateX(-50%);
  }

  [last-column] [part~='resize-handle']::before,
  [last-frozen] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
    right: 0;
  }

  [frozen-to-end] [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  [frozen-to-end] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  [first-frozen-to-end] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
  }

  [first-frozen-to-end] {
    margin-inline-start: auto;
  }

  /* Hide resize handle if scrolled to end */
  :host(:not([overflow~='end'])) [first-frozen-to-end] [part~='resize-handle'] {
    display: none;
  }

  #scroller[column-resizing],
  #scroller[range-selecting] {
    -webkit-user-select: none;
    user-select: none;
  }

  /* Sizer styles */
  #sizer {
    display: flex;
    position: absolute;
    visibility: hidden;
  }

  #sizer [part~='details-cell'] {
    display: none !important;
  }

  #sizer [part~='cell'][hidden] {
    display: none !important;
  }

  #sizer [part~='cell'] {
    display: block;
    flex-shrink: 0;
    line-height: 0;
    height: 0 !important;
    min-height: 0 !important;
    max-height: 0 !important;
    padding: 0 !important;
    border: none !important;
  }

  #sizer [part~='cell']::before {
    content: '-';
  }

  #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: none !important;
  }

  /* RTL specific styles */

  :host([dir='rtl']) #items,
  :host([dir='rtl']) #header,
  :host([dir='rtl']) #footer {
    left: auto;
  }

  :host([dir='rtl']) [part~='reorder-ghost'] {
    left: auto;
    right: 0;
  }

  :host([dir='rtl']) [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [part~='resize-handle']::before {
    transform: translateX(50%);
  }

  :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
  :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle'] {
    right: 0;
    left: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle']::before {
    right: 0;
    left: auto;
  }

  @media (forced-colors: active) {
    [part~='selected-row'] [part~='first-column-cell']::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      border: 2px solid;
    }

    [part~='focused-cell']::before {
      outline: 2px solid !important;
      outline-offset: -1px;
    }
  }
`;
registerStyles("vaadin-grid", gridStyles, {
  moduleId: "vaadin-grid-styles"
});
var Grid = class extends GridMixin(ElementMixin(ThemableMixin(ControllerMixin(PolymerElement)))) {
  static get template() {
    return html`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
        empty-state$="[[__emptyState]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0" aria-label$="[[accessibleName]]">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tbody id="emptystatebody">
            <tr id="emptystaterow">
              <td part="empty-state" id="emptystatecell" tabindex="0">
                <slot name="empty-state" id="emptystateslot"></slot>
              </td>
            </tr>
          </tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <slot name="tooltip"></slot>

      <div id="focusexit" tabindex="0"></div>
    `;
  }
  static get is() {
    return "vaadin-grid";
  }
};
defineCustomElement(Grid);
var ERROR_MESSAGE2 = "Unable to locate the expected attributes. Please check the documentation and attach mandatory attributes";
registerStyles("vaadin-checkbox", i$3`
    :host {
      color: var(--vaadin-checkbox-label-color, var(--lumo-body-text-color));
      font-size: var(--vaadin-checkbox-label-font-size, var(--lumo-font-size-m));
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
      --_checkbox-size: var(--vaadin-checkbox-size, calc(var(--lumo-size-m) / 2));
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      --_selection-color: var(--vaadin-selection-color, var(--lumo-primary-color));
      --_invalid-background: var(--vaadin-input-field-invalid-background, var(--lumo-error-color-10pct));
      --_disabled-checkmark-color: var(--vaadin-checkbox-disabled-checkmark-color, var(--lumo-contrast-30pct));
    }

    [part='label'] {
      display: flex;
      position: relative;
      max-width: max-content;
    }

    :host([has-label]) ::slotted(label) {
      padding: var(
        --vaadin-checkbox-label-padding,
        var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs)
      );
    }

    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    :host([has-label][required]) ::slotted(label) {
      padding-inline-end: var(--lumo-space-m);
    }

    [part='checkbox'] {
      width: var(--_checkbox-size);
      height: var(--_checkbox-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--vaadin-checkbox-border-radius, var(--lumo-border-radius-s));
      background: var(--vaadin-checkbox-background, var(--lumo-contrast-20pct));
      transition:
        transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2),
        background-color 0.15s;
      cursor: var(--lumo-clickable-cursor);
      /* Default field border color */
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
    }

    :host([indeterminate]),
    :host([checked]) {
      --vaadin-input-field-border-color: transparent;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--_selection-color);
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--vaadin-checkbox-checkmark-char, var(--lumo-icons-checkmark));
      color: var(--vaadin-checkbox-checkmark-color, var(--lumo-primary-contrast-color));
      font-size: var(--vaadin-checkbox-checkmark-size, calc(var(--_checkbox-size) + 2px));
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    :host([readonly]:not([checked]):not([indeterminate])) {
      color: var(--lumo-secondary-text-color);
    }

    :host([readonly]:not([checked]):not([indeterminate])) [part='checkbox'] {
      background: transparent;
      box-shadow: none;
    }

    :host([readonly]:not([checked]):not([indeterminate])) [part='checkbox']::after {
      content: '';
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      top: 0;
      left: 0;
      opacity: 1;
      border: var(--vaadin-input-field-readonly-border, 1px dashed var(--lumo-contrast-50pct));
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: var(--vaadin-checkbox-checkmark-char-indeterminate, '');
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow:
        0 0 0 1px var(--lumo-base-color),
        0 0 0 calc(var(--_focus-ring-width) + 1px) var(--_focus-ring-color),
        inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
    }

    :host([focus-ring][readonly]:not([checked]):not([indeterminate])) [part='checkbox'] {
      box-shadow:
        0 0 0 1px var(--lumo-base-color),
        0 0 0 calc(var(--_focus-ring-width) + 1px) var(--_focus-ring-color);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--vaadin-checkbox-disabled-background, var(--lumo-contrast-10pct));
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--_disabled-checkmark-color);
    }

    :host([disabled]) [part='label'],
    :host([disabled]) [part='helper-text'] {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--_disabled-checkmark-color);
    }

    :host([readonly][checked]:not([disabled])) [part='checkbox'],
    :host([readonly][indeterminate]:not([disabled])) [part='checkbox'] {
      background-color: var(--vaadin-checkbox-readonly-checked-background, var(--lumo-contrast-70pct));
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_checkbox-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition:
        transform 0.1s,
        opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):not([readonly]):not([invalid]):hover) [part='checkbox'] {
      background: var(--vaadin-checkbox-background-hover, var(--lumo-contrast-30pct));
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      /* prettier-ignore */
      :host(:not([checked]):not([indeterminate]):not([disabled]):not([readonly]):not([invalid]):hover) [part='checkbox'] {
        background: var(--vaadin-checkbox-background, var(--lumo-contrast-20pct));
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }

    /* Required */
    :host([required]) [part='required-indicator'] {
      position: absolute;
      top: var(--lumo-space-xs);
      right: var(--lumo-space-xs);
    }

    :host([required][dir='rtl']) [part='required-indicator'] {
      right: auto;
      left: var(--lumo-space-xs);
    }

    :host([required]) [part='required-indicator']::after {
      content: var(--lumo-required-field-indicator, '\\2022');
      transition: opacity 0.2s;
      color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
      width: 1em;
      text-align: center;
    }

    :host(:not([has-label])) [part='required-indicator'] {
      display: none;
    }

    /* Invalid */
    :host([invalid]) {
      --vaadin-input-field-border-color: var(--lumo-error-color);
    }

    :host([invalid]) [part='checkbox'] {
      background: var(--_invalid-background);
      background-image: linear-gradient(var(--_invalid-background) 0%, var(--_invalid-background) 100%);
    }

    :host([invalid]:hover) [part='checkbox'] {
      background-image: linear-gradient(var(--_invalid-background) 0%, var(--_invalid-background) 100%),
        linear-gradient(var(--_invalid-background) 0%, var(--_invalid-background) 100%);
    }

    :host([invalid][focus-ring]) {
      --_focus-ring-color: var(--lumo-error-color-50pct);
    }

    :host([invalid]) [part='required-indicator']::after {
      color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
    }

    /* Error message */
    [part='error-message'] {
      font-size: var(--vaadin-input-field-error-font-size, var(--lumo-font-size-xs));
      line-height: var(--lumo-line-height-xs);
      font-weight: var(--vaadin-input-field-error-font-weight, 400);
      color: var(--vaadin-input-field-error-color, var(--lumo-error-text-color));
      will-change: max-height;
      transition: 0.4s max-height;
      max-height: 5em;
      padding-inline-start: var(--lumo-space-xs);
    }

    :host([has-error-message]) [part='error-message']::after,
    :host([has-helper]) [part='helper-text']::after {
      content: '';
      display: block;
      height: 0.4em;
    }

    :host(:not([invalid])) [part='error-message'] {
      max-height: 0;
      overflow: hidden;
    }

    /* Helper */
    [part='helper-text'] {
      display: block;
      color: var(--vaadin-input-field-helper-color, var(--lumo-secondary-text-color));
      font-size: var(--vaadin-input-field-helper-font-size, var(--lumo-font-size-xs));
      line-height: var(--lumo-line-height-xs);
      font-weight: var(--vaadin-input-field-helper-font-weight, 400);
      margin-left: calc(var(--lumo-border-radius-m) / 4);
      transition: color 0.2s;
      padding-inline-start: var(--lumo-space-xs);
    }

    :host(:hover:not([readonly])) [part='helper-text'] {
      color: var(--lumo-body-text-color);
    }

    :host([has-error-message]) ::slotted(label),
    :host([has-helper]) ::slotted(label) {
      padding-bottom: 0;
    }
  `, {
  moduleId: "lumo-checkbox"
});
var CheckedMixin = dedupingMixin((superclass) => class CheckedMixinClass extends DelegateStateMixin(DisabledMixin(InputMixin(superclass))) {
  static get properties() {
    return {
      /**
       * True if the element is checked.
       * @type {boolean}
       */
      checked: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true,
        sync: true
      }
    };
  }
  static get delegateProps() {
    return [...super.delegateProps, "checked"];
  }
  /**
   * @param {Event} event
   * @protected
   * @override
   */
  _onChange(event) {
    const input = event.target;
    this._toggleChecked(input.checked);
  }
  /** @protected */
  _toggleChecked(checked) {
    this.checked = checked;
  }
});
var CheckboxMixin = (superclass) => class CheckboxMixinClass extends SlotStylesMixin(FieldMixin(CheckedMixin(DelegateFocusMixin(ActiveMixin(superclass))))) {
  static get properties() {
    return {
      /**
       * True if the checkbox is in the indeterminate state which means
       * it is not possible to say whether it is checked or unchecked.
       * The state is reset once the user switches the checkbox by hand.
       *
       * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes
       *
       * @type {boolean}
       */
      indeterminate: {
        type: Boolean,
        notify: true,
        value: false,
        reflectToAttribute: true
      },
      /**
       * The name of the checkbox.
       *
       * @type {string}
       */
      name: {
        type: String,
        value: ""
      },
      /**
       * When true, the user cannot modify the value of the checkbox.
       * The difference between `disabled` and `readonly` is that the
       * read-only checkbox remains focusable, is announced by screen
       * readers and its value can be submitted as part of the form.
       */
      readonly: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      }
    };
  }
  static get observers() {
    return ["__readonlyChanged(readonly, inputElement)"];
  }
  /** @override */
  static get delegateProps() {
    return [...super.delegateProps, "indeterminate"];
  }
  /** @override */
  static get delegateAttrs() {
    return [...super.delegateAttrs, "name", "invalid", "required"];
  }
  constructor() {
    super();
    this._setType("checkbox");
    this._boundOnInputClick = this._onInputClick.bind(this);
    this.value = "on";
    this.tabindex = 0;
  }
  /** @protected */
  get slotStyles() {
    const tag = this.localName;
    return [`
          ${tag} > input[slot='input'] {
            opacity: 0;
          }
        `];
  }
  /** @protected */
  ready() {
    super.ready();
    this.addController(new InputController(this, (input) => {
      this._setInputElement(input);
      this._setFocusElement(input);
      this.stateTarget = input;
      this.ariaTarget = input;
    }));
    this.addController(new LabelledInputController(this.inputElement, this._labelController));
    this._createMethodObserver("_checkedChanged(checked)");
  }
  /**
   * Override method inherited from `ActiveMixin` to prevent setting `active`
   * attribute when readonly, or when clicking a link placed inside the label,
   * or when clicking slotted helper or error message element.
   *
   * @param {Event} event
   * @return {boolean}
   * @protected
   * @override
   */
  _shouldSetActive(event) {
    if (this.readonly || event.target.localName === "a" || event.target === this._helperNode || event.target === this._errorNode) {
      return false;
    }
    return super._shouldSetActive(event);
  }
  /**
   * Override method inherited from `InputMixin`.
   * @param {!HTMLElement} input
   * @protected
   * @override
   */
  _addInputListeners(input) {
    super._addInputListeners(input);
    input.addEventListener("click", this._boundOnInputClick);
  }
  /**
   * Override method inherited from `InputMixin`.
   * @param {!HTMLElement} input
   * @protected
   * @override
   */
  _removeInputListeners(input) {
    super._removeInputListeners(input);
    input.removeEventListener("click", this._boundOnInputClick);
  }
  /** @private */
  _onInputClick(event) {
    if (this.readonly) {
      event.preventDefault();
    }
  }
  /** @private */
  __readonlyChanged(readonly, inputElement) {
    if (!inputElement) {
      return;
    }
    if (readonly) {
      inputElement.setAttribute("aria-readonly", "true");
    } else {
      inputElement.removeAttribute("aria-readonly");
    }
  }
  /**
   * Override method inherited from `CheckedMixin` to reset
   * `indeterminate` state checkbox is toggled by the user.
   *
   * @param {boolean} checked
   * @protected
   * @override
   */
  _toggleChecked(checked) {
    if (this.indeterminate) {
      this.indeterminate = false;
    }
    super._toggleChecked(checked);
  }
  /**
   * @override
   * @return {boolean}
   */
  checkValidity() {
    return !this.required || !!this.checked;
  }
  /**
   * Override method inherited from `FocusMixin` to validate on blur.
   * @param {boolean} focused
   * @protected
   */
  _setFocused(focused) {
    super._setFocused(focused);
    if (!focused && document.hasFocus()) {
      this._requestValidation();
    }
  }
  /** @private */
  _checkedChanged(checked) {
    if (checked || this.__oldChecked) {
      this._requestValidation();
    }
    this.__oldChecked = checked;
  }
  /**
   * Override an observer from `FieldMixin`
   * to validate when required is removed.
   *
   * @protected
   * @override
   */
  _requiredChanged(required) {
    super._requiredChanged(required);
    if (required === false) {
      this._requestValidation();
    }
  }
  /** @private */
  _onRequiredIndicatorClick() {
    this._labelNode.click();
  }
  /**
   * Fired when the checkbox is checked or unchecked by the user.
   *
   * @event change
   */
};
var checkboxStyles = i$3`
  :host {
    display: inline-block;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    -webkit-tap-highlight-color: transparent;
  }

  .vaadin-checkbox-container {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: baseline;
  }

  [part='checkbox'],
  ::slotted(input),
  [part='label'] {
    grid-row: 1;
  }

  [part='checkbox'],
  ::slotted(input) {
    grid-column: 1;
  }

  [part='helper-text'],
  [part='error-message'] {
    grid-column: 2;
  }

  :host(:not([has-helper])) [part='helper-text'],
  :host(:not([has-error-message])) [part='error-message'] {
    display: none;
  }

  [part='checkbox'] {
    width: var(--vaadin-checkbox-size, 1em);
    height: var(--vaadin-checkbox-size, 1em);
    --_input-border-width: var(--vaadin-input-field-border-width, 0);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  [part='checkbox']::before {
    display: block;
    content: '\\202F';
    line-height: var(--vaadin-checkbox-size, 1em);
    contain: paint;
  }

  /* visually hidden */
  ::slotted(input) {
    cursor: inherit;
    margin: 0;
    align-self: stretch;
    -webkit-appearance: none;
    width: initial;
    height: initial;
  }

  @media (forced-colors: active) {
    [part='checkbox'] {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([disabled]) [part='checkbox'],
    :host([disabled]) [part='checkbox']::after {
      outline-color: GrayText;
    }

    :host(:is([checked], [indeterminate])) [part='checkbox']::after {
      outline: 1px solid;
      outline-offset: -1px;
      border-radius: inherit;
    }

    :host([focused]) [part='checkbox'],
    :host([focused]) [part='checkbox']::after {
      outline-width: 2px;
    }
  }
`;
registerStyles("vaadin-checkbox", checkboxStyles, {
  moduleId: "vaadin-checkbox-styles"
});
var Checkbox = class extends CheckboxMixin(ElementMixin(ThemableMixin(PolymerElement))) {
  static get is() {
    return "vaadin-checkbox";
  }
  static get template() {
    return html`
      <div class="vaadin-checkbox-container">
        <div part="checkbox" aria-hidden="true"></div>
        <slot name="input"></slot>
        <div part="label">
          <slot name="label"></slot>
          <div part="required-indicator" on-click="_onRequiredIndicatorClick"></div>
        </div>
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
  /** @protected */
  ready() {
    super.ready();
    this._tooltipController = new TooltipController(this);
    this._tooltipController.setAriaTarget(this.inputElement);
    this.addController(this._tooltipController);
  }
};
defineCustomElement(Checkbox);
var GridSelectionColumnBaseMixin = (superClass) => class GridSelectionColumnBaseMixin extends superClass {
  static get properties() {
    return {
      /**
       * Width of the cells for this column.
       */
      width: {
        type: String,
        value: "58px",
        sync: true
      },
      /**
       * Override `autoWidth` to enable auto-width
       */
      autoWidth: {
        type: Boolean,
        value: true
      },
      /**
       * Flex grow ratio for the cell widths. When set to 0, cell width is fixed.
       * @attr {number} flex-grow
       * @type {number}
       */
      flexGrow: {
        type: Number,
        value: 0,
        sync: true
      },
      /**
       * When true, all the items are selected.
       * @attr {boolean} select-all
       * @type {boolean}
       */
      selectAll: {
        type: Boolean,
        value: false,
        notify: true,
        sync: true
      },
      /**
       * When true, the active gets automatically selected.
       * @attr {boolean} auto-select
       * @type {boolean}
       */
      autoSelect: {
        type: Boolean,
        value: false,
        sync: true
      },
      /**
       * When true, rows can be selected by dragging over the selection column.
       * @attr {boolean} drag-select
       * @type {boolean}
       */
      dragSelect: {
        type: Boolean,
        value: false,
        sync: true
      },
      /** @protected */
      _indeterminate: {
        type: Boolean,
        sync: true
      },
      /** @protected */
      _selectAllHidden: Boolean,
      /**
       * Indicates whether the shift key is currently pressed.
       *
       * @protected
       */
      _shiftKeyDown: {
        type: Boolean,
        value: false
      }
    };
  }
  static get observers() {
    return ["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, selectAll, _indeterminate, _selectAllHidden)"];
  }
  constructor() {
    super();
    this.__onCellTrack = this.__onCellTrack.bind(this);
    this.__onCellClick = this.__onCellClick.bind(this);
    this.__onCellMouseDown = this.__onCellMouseDown.bind(this);
    this.__onGridInteraction = this.__onGridInteraction.bind(this);
    this.__onActiveItemChanged = this.__onActiveItemChanged.bind(this);
    this.__onSelectRowCheckboxChange = this.__onSelectRowCheckboxChange.bind(this);
    this.__onSelectAllCheckboxChange = this.__onSelectAllCheckboxChange.bind(this);
  }
  /** @protected */
  connectedCallback() {
    super.connectedCallback();
    if (this._grid) {
      this._grid.addEventListener("keyup", this.__onGridInteraction);
      this._grid.addEventListener("keydown", this.__onGridInteraction, {
        capture: true
      });
      this._grid.addEventListener("mousedown", this.__onGridInteraction);
      this._grid.addEventListener("active-item-changed", this.__onActiveItemChanged);
    }
  }
  /** @protected */
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._grid) {
      this._grid.removeEventListener("keyup", this.__onGridInteraction);
      this._grid.removeEventListener("keydown", this.__onGridInteraction, {
        capture: true
      });
      this._grid.removeEventListener("mousedown", this.__onGridInteraction);
      this._grid.removeEventListener("active-item-changed", this.__onActiveItemChanged);
    }
  }
  /**
   * Renders the Select All checkbox to the header cell.
   *
   * @override
   */
  _defaultHeaderRenderer(root, _column) {
    let checkbox = root.firstElementChild;
    if (!checkbox) {
      checkbox = document.createElement("vaadin-checkbox");
      checkbox.setAttribute("aria-label", "Select All");
      checkbox.classList.add("vaadin-grid-select-all-checkbox");
      checkbox.addEventListener("change", this.__onSelectAllCheckboxChange);
      root.appendChild(checkbox);
    }
    const checked = this.__isChecked(this.selectAll, this._indeterminate);
    checkbox.checked = checked;
    checkbox.hidden = this._selectAllHidden;
    checkbox.indeterminate = this._indeterminate;
  }
  /**
   * Renders the Select Row checkbox to the body cell.
   *
   * @override
   */
  _defaultRenderer(root, _column, {
    item,
    selected
  }) {
    let checkbox = root.firstElementChild;
    if (!checkbox) {
      checkbox = document.createElement("vaadin-checkbox");
      checkbox.setAttribute("aria-label", "Select Row");
      checkbox.addEventListener("change", this.__onSelectRowCheckboxChange);
      root.appendChild(checkbox);
      addListener(root, "track", this.__onCellTrack);
      root.addEventListener("mousedown", this.__onCellMouseDown);
      root.addEventListener("click", this.__onCellClick);
    }
    checkbox.__item = item;
    checkbox.checked = selected;
    const isSelectable = this._grid.__isItemSelectable(item);
    checkbox.readonly = !isSelectable;
    checkbox.hidden = !isSelectable && !selected;
  }
  /**
   * Updates the select all state when the Select All checkbox is switched.
   * The listener handles only user-fired events.
   *
   * @private
   */
  __onSelectAllCheckboxChange(e) {
    if (this._indeterminate || e.currentTarget.checked) {
      this._selectAll();
    } else {
      this._deselectAll();
    }
  }
  /** @private */
  __onGridInteraction(e) {
    this._shiftKeyDown = e.shiftKey;
    if (this.autoSelect) {
      this._grid.$.scroller.toggleAttribute("range-selecting", this._shiftKeyDown);
    }
  }
  /**
   * Selects or deselects the row when the Select Row checkbox is switched.
   * The listener handles only user-fired events.
   *
   * @private
   */
  __onSelectRowCheckboxChange(e) {
    this.__toggleItem(e.currentTarget.__item, e.currentTarget.checked);
  }
  /** @private */
  __onCellTrack(event) {
    if (!this.dragSelect) {
      return;
    }
    this.__dragCurrentY = event.detail.y;
    this.__dragDy = event.detail.dy;
    if (event.detail.state === "start") {
      const renderedRows = this._grid._getRenderedRows();
      const dragStartRow = renderedRows.find((row) => row.contains(event.currentTarget.assignedSlot));
      this.__selectOnDrag = !this._grid._isSelected(dragStartRow._item);
      this.__dragStartIndex = dragStartRow.index;
      this.__dragStartItem = dragStartRow._item;
      this.__dragAutoScroller();
    } else if (event.detail.state === "end") {
      if (this.__dragStartItem) {
        this.__toggleItem(this.__dragStartItem, this.__selectOnDrag);
      }
      setTimeout(() => {
        this.__dragStartIndex = void 0;
      });
    }
  }
  /** @private */
  __onCellMouseDown(e) {
    if (this.dragSelect) {
      e.preventDefault();
    }
  }
  /** @private */
  __onCellClick(e) {
    if (this.__dragStartIndex !== void 0) {
      e.preventDefault();
    }
  }
  /** @private */
  _onCellKeyDown(e) {
    const target = e.composedPath()[0];
    if (e.keyCode !== 32) {
      return;
    }
    if (target === this._headerCell) {
      if (this.selectAll) {
        this._deselectAll();
      } else {
        this._selectAll();
      }
    } else if (this._cells.includes(target) && !this.autoSelect) {
      const checkbox = target._content.firstElementChild;
      this.__toggleItem(checkbox.__item);
    }
  }
  /** @private */
  __onActiveItemChanged(e) {
    const activeItem = e.detail.value;
    if (this.autoSelect) {
      const item = activeItem || this.__previousActiveItem;
      if (item) {
        this.__toggleItem(item);
      }
    }
    this.__previousActiveItem = activeItem;
  }
  /** @private */
  __dragAutoScroller() {
    if (this.__dragStartIndex === void 0) {
      return;
    }
    const renderedRows = this._grid._getRenderedRows();
    const hoveredRow = renderedRows.find((row) => {
      const rowRect = row.getBoundingClientRect();
      return this.__dragCurrentY >= rowRect.top && this.__dragCurrentY <= rowRect.bottom;
    });
    let hoveredIndex = hoveredRow ? hoveredRow.index : void 0;
    const scrollableArea = this.__getScrollableArea();
    if (this.__dragCurrentY < scrollableArea.top) {
      hoveredIndex = this._grid._firstVisibleIndex;
    } else if (this.__dragCurrentY > scrollableArea.bottom) {
      hoveredIndex = this._grid._lastVisibleIndex;
    }
    if (hoveredIndex !== void 0) {
      renderedRows.forEach((row) => {
        if (hoveredIndex > this.__dragStartIndex && row.index >= this.__dragStartIndex && row.index <= hoveredIndex || hoveredIndex < this.__dragStartIndex && row.index <= this.__dragStartIndex && row.index >= hoveredIndex) {
          this.__toggleItem(row._item, this.__selectOnDrag);
          this.__dragStartItem = void 0;
        }
      });
    }
    const scrollTriggerArea = scrollableArea.height * 0.15;
    const maxScrollAmount = 10;
    if (this.__dragDy < 0 && this.__dragCurrentY < scrollableArea.top + scrollTriggerArea) {
      const dy = scrollableArea.top + scrollTriggerArea - this.__dragCurrentY;
      const percentage = Math.min(1, dy / scrollTriggerArea);
      this._grid.$.table.scrollTop -= percentage * maxScrollAmount;
    }
    if (this.__dragDy > 0 && this.__dragCurrentY > scrollableArea.bottom - scrollTriggerArea) {
      const dy = this.__dragCurrentY - (scrollableArea.bottom - scrollTriggerArea);
      const percentage = Math.min(1, dy / scrollTriggerArea);
      this._grid.$.table.scrollTop += percentage * maxScrollAmount;
    }
    setTimeout(() => this.__dragAutoScroller(), 10);
  }
  /**
   * Gets the scrollable area of the grid as a bounding client rect. The
   * scrollable area is the bounding rect of the grid minus the header and
   * footer.
   *
   * @private
   */
  __getScrollableArea() {
    const gridRect = this._grid.$.table.getBoundingClientRect();
    const headerRect = this._grid.$.header.getBoundingClientRect();
    const footerRect = this._grid.$.footer.getBoundingClientRect();
    return {
      top: gridRect.top + headerRect.height,
      bottom: gridRect.bottom - footerRect.height,
      left: gridRect.left,
      right: gridRect.right,
      height: gridRect.height - headerRect.height - footerRect.height,
      width: gridRect.width
    };
  }
  /**
   * Override to handle the user selecting all items.
   * @protected
   */
  _selectAll() {
  }
  /**
   * Override to handle the user deselecting all items.
   * @protected
   */
  _deselectAll() {
  }
  /**
   * Override to handle the user selecting an item.
   * @param {Object} item the item to select
   * @protected
   */
  _selectItem(_item) {
  }
  /**
   * Override to handle the user deselecting an item.
   * @param {Object} item the item to deselect
   * @protected
   */
  _deselectItem(_item) {
  }
  /**
   * Toggles the selected state of the given item.
   *
   * @param item the item to toggle
   * @param {boolean} [selected] whether to select or deselect the item
   * @private
   */
  __toggleItem(item, selected = !this._grid._isSelected(item)) {
    if (selected === this._grid._isSelected(item)) {
      return;
    }
    if (selected) {
      this._selectItem(item);
    } else {
      this._deselectItem(item);
    }
  }
  /**
   * IOS needs indeterminate + checked at the same time
   * @private
   */
  __isChecked(selectAll, indeterminate) {
    return indeterminate || selectAll;
  }
};
var GridSelectionColumnMixin = (superClass) => class extends GridSelectionColumnBaseMixin(superClass) {
  static get properties() {
    return {
      /**
       * The previous state of activeItem. When activeItem turns to `null`,
       * previousActiveItem will have an Object with just unselected activeItem
       * @private
       */
      __previousActiveItem: Object
    };
  }
  static get observers() {
    return ["__onSelectAllChanged(selectAll)"];
  }
  constructor() {
    super();
    this.__boundUpdateSelectAllVisibility = this.__updateSelectAllVisibility.bind(this);
    this.__boundOnSelectedItemsChanged = this.__onSelectedItemsChanged.bind(this);
  }
  /** @protected */
  disconnectedCallback() {
    this._grid.removeEventListener("data-provider-changed", this.__boundUpdateSelectAllVisibility);
    this._grid.removeEventListener("is-item-selectable-changed", this.__boundUpdateSelectAllVisibility);
    this._grid.removeEventListener("filter-changed", this.__boundOnSelectedItemsChanged);
    this._grid.removeEventListener("selected-items-changed", this.__boundOnSelectedItemsChanged);
    super.disconnectedCallback();
  }
  /** @protected */
  connectedCallback() {
    super.connectedCallback();
    if (this._grid) {
      this._grid.addEventListener("data-provider-changed", this.__boundUpdateSelectAllVisibility);
      this._grid.addEventListener("is-item-selectable-changed", this.__boundUpdateSelectAllVisibility);
      this._grid.addEventListener("filter-changed", this.__boundOnSelectedItemsChanged);
      this._grid.addEventListener("selected-items-changed", this.__boundOnSelectedItemsChanged);
      this.__updateSelectAllVisibility();
    }
  }
  /** @private */
  __onSelectAllChanged(selectAll) {
    if (selectAll === void 0 || !this._grid) {
      return;
    }
    if (!this.__selectAllInitialized) {
      this.__selectAllInitialized = true;
      return;
    }
    if (this._selectAllChangeLock) {
      return;
    }
    if (selectAll && this.__hasArrayDataProvider()) {
      this.__withFilteredItemsArray((items) => {
        this._grid.selectedItems = items;
      });
    } else {
      this._grid.selectedItems = [];
    }
  }
  /**
   * Override a method from `GridSelectionColumnBaseMixin` to handle the user
   * selecting all items.
   *
   * @protected
   * @override
   */
  _selectAll() {
    this.selectAll = true;
  }
  /**
   * Override a method from `GridSelectionColumnBaseMixin` to handle the user
   * deselecting all items.
   *
   * @protected
   * @override
   */
  _deselectAll() {
    this.selectAll = false;
  }
  /**
   * Override a method from `GridSelectionColumnBaseMixin` to handle the user
   * selecting an item.
   *
   * @param {Object} item the item to select
   * @protected
   * @override
   */
  _selectItem(item) {
    if (this._grid.__isItemSelectable(item)) {
      this._grid.selectItem(item);
      this._grid.dispatchEvent(new CustomEvent("item-toggle", {
        detail: {
          item,
          selected: true,
          shiftKey: this._shiftKeyDown
        }
      }));
    }
  }
  /**
   * Override a method from `GridSelectionColumnBaseMixin` to handle the user
   * deselecting an item.
   *
   * @param {Object} item the item to deselect
   * @protected
   * @override
   */
  _deselectItem(item) {
    if (this._grid.__isItemSelectable(item)) {
      this._grid.deselectItem(item);
      this._grid.dispatchEvent(new CustomEvent("item-toggle", {
        detail: {
          item,
          selected: false,
          shiftKey: this._shiftKeyDown
        }
      }));
    }
  }
  /** @private */
  __hasArrayDataProvider() {
    return Array.isArray(this._grid.items) && !!this._grid.dataProvider;
  }
  /** @private */
  __onSelectedItemsChanged() {
    this._selectAllChangeLock = true;
    if (this.__hasArrayDataProvider()) {
      this.__withFilteredItemsArray((items) => {
        if (!this._grid.selectedItems.length) {
          this.selectAll = false;
          this._indeterminate = false;
        } else if (items.every((item) => this._grid._isSelected(item))) {
          this.selectAll = true;
          this._indeterminate = false;
        } else {
          this.selectAll = false;
          this._indeterminate = true;
        }
      });
    }
    this._selectAllChangeLock = false;
  }
  /** @private */
  __updateSelectAllVisibility() {
    this._selectAllHidden = !Array.isArray(this._grid.items) || !!this._grid.isItemSelectable;
  }
  /**
   * Assuming the grid uses an items array data provider, fetches all the filtered items
   * from the data provider and invokes the callback with the resulting array.
   *
   * @private
   */
  __withFilteredItemsArray(callback) {
    const params = {
      page: 0,
      pageSize: Infinity,
      sortOrders: [],
      filters: this._grid._mapFilters()
    };
    this._grid.dataProvider(params, (items) => callback(items));
  }
};
var GridSelectionColumn = class extends GridSelectionColumnMixin(GridColumn) {
  static get is() {
    return "vaadin-grid-selection-column";
  }
};
defineCustomElement(GridSelectionColumn);
registerStyles("vaadin-text-field", inputFieldShared$1, {
  moduleId: "lumo-text-field-styles"
});
var InputFieldMixin = (superclass) => class InputFieldMixinClass extends InputControlMixin(superclass) {
  static get properties() {
    return {
      /**
       * Whether the value of the control can be automatically completed by the browser.
       * List of available options at:
       * https://developer.mozilla.org/en/docs/Web/HTML/Element/input#attr-autocomplete
       */
      autocomplete: {
        type: String
      },
      /**
       * This is a property supported by Safari that is used to control whether
       * autocorrection should be enabled when the user is entering/editing the text.
       * Possible values are:
       * on: Enable autocorrection.
       * off: Disable autocorrection.
       */
      autocorrect: {
        type: String,
        reflectToAttribute: true
      },
      /**
       * This is a property supported by Safari and Chrome that is used to control whether
       * autocapitalization should be enabled when the user is entering/editing the text.
       * Possible values are:
       * characters: Characters capitalization.
       * words: Words capitalization.
       * sentences: Sentences capitalization.
       * none: No capitalization.
       */
      autocapitalize: {
        type: String,
        reflectToAttribute: true
      }
    };
  }
  static get delegateAttrs() {
    return [...super.delegateAttrs, "autocapitalize", "autocomplete", "autocorrect"];
  }
  // Workaround for https://github.com/Polymer/polymer/issues/5259
  get __data() {
    return this.__dataValue || {};
  }
  set __data(value) {
    this.__dataValue = value;
  }
  /**
   * @param {HTMLElement} input
   * @protected
   * @override
   */
  _inputElementChanged(input) {
    super._inputElementChanged(input);
    if (input) {
      if (input.value && input.value !== this.value) {
        console.warn(`Please define value on the <${this.localName}> component!`);
        input.value = "";
      }
      if (this.value) {
        input.value = this.value;
      }
    }
  }
  /**
   * Override an event listener from `FocusMixin`.
   * @param {boolean} focused
   * @protected
   * @override
   */
  _setFocused(focused) {
    super._setFocused(focused);
    if (!focused && document.hasFocus()) {
      this._requestValidation();
    }
  }
  /**
   * Override an event listener from `InputMixin`
   * to mark as valid after user started typing.
   * @param {Event} event
   * @protected
   * @override
   */
  _onInput(event) {
    super._onInput(event);
    if (this.invalid) {
      this._requestValidation();
    }
  }
  /**
   * Override an observer from `InputMixin` to validate the field
   * when a new value is set programmatically.
   *
   * @param {string | undefined} newValue
   * @param {string | undefined} oldValue
   * @protected
   * @override
   */
  _valueChanged(newValue, oldValue) {
    super._valueChanged(newValue, oldValue);
    if (oldValue === void 0) {
      return;
    }
    if (this.invalid) {
      this._requestValidation();
    }
  }
};
var TextFieldMixin = (superClass) => class TextFieldMixinClass extends InputFieldMixin(superClass) {
  static get properties() {
    return {
      /**
       * Maximum number of characters (in Unicode code points) that the user can enter.
       */
      maxlength: {
        type: Number
      },
      /**
       * Minimum number of characters (in Unicode code points) that the user can enter.
       */
      minlength: {
        type: Number
      },
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
    return [...super.delegateAttrs, "maxlength", "minlength", "pattern"];
  }
  static get constraints() {
    return [...super.constraints, "maxlength", "minlength", "pattern"];
  }
  constructor() {
    super();
    this._setType("text");
  }
  /** @protected */
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
    }));
    this.addController(new LabelledInputController(this.inputElement, this._labelController));
  }
};
registerStyles("vaadin-text-field", inputFieldShared, {
  moduleId: "vaadin-text-field-styles"
});
var TextField = class extends TextFieldMixin(ThemableMixin(ElementMixin(PolymerElement))) {
  static get is() {
    return "vaadin-text-field";
  }
  static get template() {
    return html`
      <div class="vaadin-field-container">
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
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

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
  /** @protected */
  ready() {
    super.ready();
    this._tooltipController = new TooltipController(this);
    this._tooltipController.setPosition("top");
    this._tooltipController.setAriaTarget(this.inputElement);
    this.addController(this._tooltipController);
  }
};
defineCustomElement(TextField);
registerStyles("vaadin-grid-filter", i$3`
    :host {
      display: inline-flex;
      max-width: 100%;
    }

    ::slotted(*) {
      width: 100%;
      box-sizing: border-box;
    }
  `, {
  moduleId: "vaadin-grid-filter-styles"
});
var GridFilterElementMixin = (superClass) => class extends ControllerMixin(superClass) {
  static get properties() {
    return {
      /**
       * JS Path of the property in the item used for filtering the data.
       */
      path: {
        type: String,
        sync: true
      },
      /**
       * Current filter value.
       */
      value: {
        type: String,
        notify: true,
        sync: true
      },
      /** @private */
      _textField: {
        type: Object,
        sync: true
      }
    };
  }
  static get observers() {
    return ["_filterChanged(path, value, _textField)"];
  }
  /** @protected */
  ready() {
    super.ready();
    this._filterController = new SlotController(this, "", "vaadin-text-field", {
      initializer: (field) => {
        field.addEventListener("input", (e) => {
          this.value = e.target.value;
        });
        this._textField = field;
      }
    });
    this.addController(this._filterController);
  }
  /** @private */
  _filterChanged(path, value, textField) {
    if (path === void 0 || value === void 0 || !textField) {
      return;
    }
    textField.value = value;
    this._debouncerFilterChanged = Debouncer.debounce(this._debouncerFilterChanged, timeOut.after(200), () => {
      this.dispatchEvent(new CustomEvent("filter-changed", {
        bubbles: true
      }));
    });
  }
  focus() {
    if (this._textField) {
      this._textField.focus();
    }
  }
};
var GridFilter = class extends GridFilterElementMixin(ThemableMixin(PolymerElement)) {
  static get template() {
    return html`<slot></slot>`;
  }
  static get is() {
    return "vaadin-grid-filter";
  }
};
defineCustomElement(GridFilter);
var GridFilterColumnMixin = (superClass) => class extends superClass {
  static get properties() {
    return {
      /**
       * JS Path of the property in the item used for filtering the data.
       */
      path: {
        type: String,
        sync: true
      },
      /**
       * Text to display as the label of the column filter text-field.
       */
      header: {
        type: String,
        sync: true
      }
    };
  }
  static get observers() {
    return ["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)"];
  }
  /**
   * Renders the grid filter with the custom text field to the header cell.
   *
   * @override
   */
  _defaultHeaderRenderer(root, _column) {
    let filter2 = root.firstElementChild;
    let textField = filter2 ? filter2.firstElementChild : void 0;
    if (!filter2) {
      filter2 = document.createElement("vaadin-grid-filter");
      textField = document.createElement("vaadin-text-field");
      textField.setAttribute("theme", "small");
      textField.setAttribute("style", "max-width: 100%;");
      textField.setAttribute("focus-target", "");
      filter2.appendChild(textField);
      root.appendChild(filter2);
    }
    filter2.path = this.path;
    textField.label = this.__getHeader(this.header, this.path);
  }
  /**
   * The filter column doesn't allow to use a custom header renderer
   * to override the header cell content.
   * It always renders the grid filter to the header cell.
   *
   * @override
   */
  _computeHeaderRenderer() {
    return this._defaultHeaderRenderer;
  }
  /** @private */
  __getHeader(header, path) {
    if (header) {
      return header;
    }
    if (path) {
      return this._generateHeader(path);
    }
  }
};
var GridFilterColumn = class extends GridFilterColumnMixin(GridColumn) {
  static get is() {
    return "vaadin-grid-filter-column";
  }
};
defineCustomElement(GridFilterColumn);
var bhTabularListCss = `.bh-tabular-list {
	/* position: relative;   */
	--datepicker-input-field-height: 36px;
	--datepicker-input-icon-position-left: 4px;
	--datepicker-input-icon-position-top: 8px;
	--datepicker-input-value-padding: 0px 0px 0px 12px;
	--table-border-color: #ced7d4;
}

[data-theme="dark"] {
  .bh-tabular-list {
    --table-border-color: #595959;
  }
}

.bh-tabular-list__grid-template__header-with-filter__copy:after {
	position: absolute;
	font-family: var(--font-family-icon-small);
	font-size: var(--font-size-icon-small);
	color: var(--color-text-common-secondary);
	content: '\\e945';
	right: 12px;
	width: 18px;
	height: 18px;
	opacity: 0;
	-webkit-transition: all var(--motion-duration-fast) var(--motion-easing-fast);
	transition: all var(--motion-duration-fast) var(--motion-easing-fast);
}

/* 
.bh-tabular-list__grid-template__header-with-filter__copy:hover:after {
	opacity: 1;
	-webkit-transition: all var(--motion-duration-fast) var(--motion-easing-fast);
	transition: all var(--motion-duration-fast) var(--motion-easing-fast);
} */





.bh-tabular-list__container {
	border: var(--effect-border-width-regular) solid var(--table-border-color);
	border-radius: var(--effect-border-radius-medium);
	background-color: var(--color-fill-common-secondary);
	overflow: visible;
	position: relative;
}

/* Header */
.bh-tabular-list__header {
	padding: var(--spacing-padding-small);
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.bh-tabular-list__header__title {
	color: var(--color-text-common-primary);
}

.bh-tabular-list__header__cta-group {
	display: flex;
	align-items: center;
}

.bh-tabular-list__header__cta {
	margin-left: var(--spacing-margin-xsmall);
}

.bh-tabular-list__header__cta.hidden {
	display: none;
}

.bh-tabular-list__action-menu.hidden {
	display: none;
}

.bh-tabular-list__search {
	margin-left: var(--spacing-margin-xsmall);
}

/* Table */
.bh-tabular-list__table {
	overflow: hidden;
	border-radius: 0 0 var(--effect-border-radius-medium) var(--effect-border-radius-medium);
	position: relative;
}

/* Pagination */
.bh-tabular-list__pagination {
	border-top: 1px solid var(--color-border-common-primary);
	padding: var(--spacing-padding-small) var(--spacing-padding-small);
}

/* Tooltip */
.bh-tabular-list__tooltip {
	position: absolute;
	left: 50px;
	top: 0;
	background-color:var(--color-text-common-primary);
	color: var(--color-fill-common-secondary);
	display: table;
	padding: var(--spacing-padding-xsmall) var(--spacing-padding-small);
	border-radius: var(--effect-border-radius-medium);
	pointer-events: none;
	opacity: 0;
	transition: opacity var(--motion-duration-fast) var(--motion-easing-fast);
}

.bh-tabular-list__tooltip.shown {
	opacity: 1;
}

.bh-tabular-list__tooltip__ghost-element_tabularlist {
	visibility: hidden;
	pointer-events: none;
	display: table;
	padding: 0 var(--spacing-padding-small);
	height: 0;
	position: absolute;
}

.bh-tabular-list__empty-state {
	padding: var(--spacing-padding-medium);
	display: flex;
	justify-content: center;
}

/* Action Menu */
.bh-tabular-list__inline-action-menu-wrapper {
	width: 100%;
	display: flex;
	justify-content: flex-end;
}

.bh-tabular-list__inline-action-menu,
.bh-tabular-list__inline-action-menu .bh-button--small.bh-button--icon {
	width: 12px;
	height: 12px;
}

.bh-tabular-list__inline-action-menu .bh-button--small.bh-button--icon:hover {
	background-color: transparent;
}

.bh-tabular-list__inline-action-menu .bh-button--small.bh-button--icon:focus {
	box-shadow: none;
}

.bh-tabular-list__context-menu-container {
	position: fixed;
	z-index: 100000;
	top: 0;
	left: 0;
}

.bh-tabular-list__context-menu-container.hidden {
	display: none;
}

.bh-tabular-list__loading {
	position: absolute;
	top: 42px;
	width: 100%;
	height: calc(100% - 42px);
	display: flex;
	align-items: center;
	justify-content: center;
	pointer-events: none;

}

.bh-tabular-list__loading .bh-spinner {
	opacity: 1;
}

.bh-tabular-list__loading .overlay {
	opacity: 0.5;
	background-color: var(--color-fill-common-secondary);
	position: absolute;
	width: 100%;
	height: 100%;
}

@media (max-width: 599px) {
	.bh-tabular-list {
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.bh-tabular-list__search {
		width: 150px;
	}
}


/* In-Template Styles */
.bh-tabular-list__grid-template__header-with-filter__copy {
	height: 42px;
	display: flex;
	align-items: center;
	/* border-bottom: var(--effect-border-width-regular) solid var(--color-border-common-primary); */
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.bh-tabular-list__grid-template__header-with-filter__copy>span {
	overflow: var(--tabulatlist-header-cell-overflow);
	text-overflow: var(--tabulatlist-header-cell-textoverflow);
}

.bh-tabular-list__grid-template__header-with-filter__copy.filter-column {
	padding: 0 var(--spacing-padding-small);
}

.bh-tabular-list__grid-template__header-with-filter__text-field {
	height: 44px;
	background-color: var(--color-fill-common-secondary);
	padding: 0 var(--spacing-padding-xxsmall);
	border-bottom: 1px solid var(--color-border-common-primary);
}

.bh-tabular-list__grid-template__header-with-filter__sort-icon {
	margin-left: var(--spacing-margin-xsmall);
}

.bh-tabular-list .bh-dropdown__container .bh-dropdown__input{
	box-sizing: initial;
}
.bh-tabular-list   .bh-dropdown__container .placeholder {
	background-color: inherit;
}

.bh-pagination__container--paginator .bh-pagination__paginator-button{
	width: auto;
	min-width: 20px;
}
/* css to make dropdown icon align with dropdown*/
.bh-tabular-list__container bh-dropdown .bh-dropdown__icon {
	position: absolute !important;;
}
vaadin-grid::part(header-cell){
	background-color: var(--color-fill-cta-secondary-hover);
	color: var(--color-text-common-primary);
	font-family: var(--font-family-label-small);
	letter-spacing: var(--font-letter-spacing-label-small);
	line-height: var(--font-line-height-label-small);
	min-height: 42px !important;
	/* giving static value to min-width we need to check later*/
	/* min-width: var(--tabularlist-header-cell-min-width); */
	min-width: 50px;
	border-bottom: none;
	align-items: center;
	position: relative;
	cursor: pointer;      
	border-right: 1px solid var(--color-border-common-primary);
	/* border-bottom: 1px solid var(--color-border-common-primary); */
}
vaadin-grid::part(header-cell)  {
	font-weight: var(--font-weight-label-small);
	font-size: var(--font-size-label-small);
}

vaadin-grid::part(body-cell){
	color: var(--color-text-common-secondary);
	font-family: var(--font-family-body-medium);
	letter-spacing: var(--letter-spacing-body-medium);
	line-height: var(--font-line-height-body-medium);
	position: relative;
	border-top: 1px solid var(--color-border-common-primary);      
	min-width: 50px;
	background-color: var(--color-fill-common-secondary);
	border-right: 1px solid var(--color-border-common-primary);
	/* border-bottom: 1px solid var(--color-border-common-primary); */
}

.bh-tabular-list vaadin-grid[spacing~="small"]::part(body-cell){
	height: 36px;

	font-family:var(--font-family-body-small);
	font-size: var(--font-size-body-small);
    /* padding: var(--spacing-padding-xsmall) var(--spacing-padding-small); */
}
/* 
commenting this line for bug 1467
*/
.bh-tabular-list vaadin-grid[spacing~="medium"]::part(body-cell){
	height: 44px;
	font-family:var(--font-family-body-medium);
	font-size: var(--font-size-body-medium);
	/* z-index: 1; */
	/* padding: var(--spacing-padding-small) var(--spacing-padding-small); */
}

.bh-tabular-list vaadin-grid[spacing~="large"]::part(body-cell){
	height:60px;
	font-family:var(--font-family-body-large);
	font-size: var(--font-size-body-large);
	/* padding: var(--spacing-padding-medium) var(--spacing-padding-small); */
}

.bh-tabular-list vaadin-grid[spacing~="large"]::part(body-cell):hover{
	z-index: 1;
}

.bh-tabular-list__container {
	border: var(--effect-border-width-regular) solid var(--table-border-color);
	border-radius: var(--effect-border-radius-medium);
	background-color: var(--color-fill-common-secondary);
	overflow: visible;
	position: relative;
}

.bh-tabular-list__grid-template__header-with-filter__sort-icon {
	margin-left: var(--spacing-margin-xsmall);
}

/* Header */
.bh-tabular-list__header {
	padding: var(--spacing-padding-small);
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.bh-tabular-list__header__title {
	color: var(--color-text-common-primary);
}

.bh-tabular-list__header__cta-group {
	display: flex;
	align-items: center;
}

.bh-tabular-list__search {
	margin-left: var(--spacing-margin-xsmall);
}
@media (max-width: 599px) {
	.bh-tabular-list {
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	.bh-tabular-list__search {
		width: 150px;
	}
}

.bh-tabular-list__header__cta {
	margin-left: var(--spacing-margin-xsmall);
}

.bh-tabular-list__header__cta.hidden {
	display: none;
}

.bh-tabular-list__buttons{
	margin-left: auto;
}

.bh-tabular-list__grid-template__header-with-filter__copy:after {
	position: absolute;
	font-family: var(--font-family-icon-small);
	font-size: var(--font-size-icon-small);
	color: var(--color-text-common-secondary);
	content: '\\e945';
	right: 12px;
	width: 18px;
	height: 18px;
	opacity: 0;
	-webkit-transition: all var(--motion-duration-fast) var(--motion-easing-fast);
	transition: all var(--motion-duration-fast) var(--motion-easing-fast);
}

.bh-tabular-list__grid-template__header-with-filter__copy.filter-column {
	padding: 0 var(--spacing-padding-small);
}


.bh-tabular-list__grid-template__header-with-filter__copy:hover:after {
	opacity: 0;
	-webkit-transition: all var(--motion-duration-fast) var(--motion-easing-fast);
	transition: all var(--motion-duration-fast) var(--motion-easing-fast);
}

.bh-tabular-list__inline-action-menu-wrapper {
	width: 100%;
	display: flex;
	justify-content: flex-end;
}
.bh-tabular-list__inline-action-menu,
.bh-tabular-list__inline-action-menu .bh-button--small.bh-button--icon {
	width: 12px;
	height: 12px;
}

.bh-tabular-list__inline-action-menu .bh-button--small.bh-button--icon:hover {
	background-color: transparent;
}

.bh-tabular-list__inline-action-menu .bh-button--small.bh-button--icon:focus {
	box-shadow: none;
}

.bh-tabular-list__grid-template__header-with-filter__text-field {
	height: 44px;
	background-color: var(--color-fill-common-secondary);
	padding: 0 var(--spacing-padding-xxsmall);
	border-bottom: 1px solid var(--color-border-common-primary);
}

/* Pagination */
.bh-tabular-list__pagination {
	border-top: 1px solid var(--color-border-common-primary);
	padding: var(--spacing-padding-small) var(--spacing-padding-small);
}

.bh-tabular-list__table {
	overflow: hidden;
	border-radius: 0 0 var(--effect-border-radius-medium) var(--effect-border-radius-medium);
	position: relative;
}

/* css to make dropdown icon align with dropdown*/
.bh-tabular-list__container bh-dropdown .bh-dropdown__icon {
	position: unset;
}
/* css for selected row in grid*/
vaadin-grid{
    /* --_lumo-grid-selected-row-color:var(--color-fill-menu-selected-supplemental);	 */
}
vaadin-grid::part(selected-row){
	/* border-bottom: 1px solid var(--color-border-common-primary); */
}
vaadin-grid::part(selected-row-cell){
	background: var(--color-fill-menu-selected-supplemental);
}
/* 
commenting this line for bug 1467
*/
vaadin-grid::part(row):hover{
	/* z-index: 1; */
}
/* vaadin-grid::part(last-row){
    width: auto;
    border-bottom: 1px solid var(--color-border-common-primary);
} */
.selectAllCheckboxDiv{
	height: 42px;
	display: flex;
	align-items: center;
	/* border-bottom: var(--effect-border-width-regular) solid var(--color-border-common-primary); */
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	justify-content: center;
}
.bh-tabular-list vaadin-date-picker{
    width: 100%;
}
.bh-tabular-list vaadin-grid{
	border: none;
	background-color:var(--table-background-color);
}
.bh-tabular-list vaadin-grid::part(resize-handle){
	width: 2px;
	background-color: var(--color-fill-control-selected);
	right: 0px;
	-webkit-transition: background-color var(--motion-duration-fast) var(--motion-easing-fast);
	transition: background-color var(--motion-duration-fast) var(--motion-easing-fast);
  }

  .bh-tabular-list vaadin-grid::part(resize-handle)::before {
	width: 5px;
  }

  vaadin-grid::part(last-row-cell) {
	border-bottom: 1px solid var(--color-border-common-primary);
  }
  vaadin-grid::part(disable-row) {
  	background-color: var(--color-fill-control-disabled);
  	pointer-events: none;
  	color: var(--color-text-common-disabled)
  }
  
.bh-collapse-container{
	padding: 10px;
	height: var(--font-line-height-button-link-medium);
	cursor: pointer;
}

.bh-collapse-icon{
	padding-left: 0px !important;
}

.isCollapsed{
	display: none;
}

.bh-tabular-list__pagination [slot="table-empty-state"]{
	display: none!important;
}
.bh-tabular-list [slot="table-empty-state"]{
	display: none!important;
}
.bh-tabular-list__empty-state [slot="table-empty-state"]{
	display: block!important;
}
.allowOverflow{
	/* overflow-x: clip;
	overflow-y: visible; */
	    .picker-popup{
			/* overflow: scroll;
			height: 250px; */
		/* top: -12%; */
		}
		/* vaadin-grid{
			min-height: 340px;
		} */
}
`;
var BhTabularListStyle0 = bhTabularListCss;
var BhTabularList = class {
  watchOption() {
    this.parseData();
    this.isFirstTimeToRender = true;
    this.columnRenderer();
    this.handleUpdateDataToShow();
  }
  watchHeader() {
    this.parseData();
    this.handleUpdateDataToShow();
  }
  watchSchema() {
    this.parseData();
    setTimeout(() => {
      this.isFirstTimeToRender = true;
      this.columnRenderer();
    }, 100);
    this.handleUpdateDataToShow();
  }
  watchPayload() {
    var _a, _b;
    this.parseData();
    this.setPagination();
    this.payloadCurrentPageChange();
    this.filterWithWholeSearch();
    this.handleUpdateDataToShow();
    if (typeof this.payload === "object" && ((_a = this.payload) === null || _a === void 0 ? void 0 : _a.currentPage)) {
      if (((_b = this.payload) === null || _b === void 0 ? void 0 : _b.currentPage) === this._payload.currentPage) {
        this.manualPageChange = true;
      }
    }
  }
  watchSelectedItems() {
    this.parseData();
    this.handleUpdateDataToShow();
  }
  watchCustomSelectedItems() {
    this.parseData();
    this.handleUpdateDataToShow();
    this._selectedItems = typeof this.customSelectedItems === "string" ? JSON.parse(this.customSelectedItems) : this.customSelectedItems;
    this.setSelectedItems();
  }
  watchIdChange() {
    setTimeout(() => {
      this.resetScroll();
    }, 0);
  }
  watchOverrideCss() {
    this.registerStyle();
  }
  watchItemCount() {
    this._itemCount = this.itemCount;
    this.watchPayload();
  }
  clearFilterWatch() {
    this._clearFilter = this.clearFilter;
    if (this._clearFilter) {
      this.filterQueries = [];
      this.parseData();
      this.setPagination();
      this._currentPage = -1;
      setTimeout(() => {
        this._currentPage = 0;
        this.columnRenderer();
        this.clearFilter = false;
      });
    }
  }
  handleResize() {
    this.isWindowResizing = !this.isWindowResizing;
    const bp = getBreakpoint();
    if (this.viewport !== bp) this.viewport = bp;
  }
  setSearchResults(event) {
    if (this._header.search) {
      this.searchResults = event.detail;
      if (this.searchResults.length) {
        this.handlePaginationReset({
          itemCount: this._itemCount,
          currentPage: 0
        });
      }
      this.handleUpdateDataToShow(true);
    }
  }
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventSelected = createEvent(this, "bhEventSelected", 7);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this.bhEventCtaClick = createEvent(this, "bhEventCtaClick", 7);
    this.bhEventAppended = createEvent(this, "bhEventAppended", 7);
    this.bhEventScroll = createEvent(this, "bhEventScroll", 7);
    this.tableHeaderData = [];
    this.templateEvents = {};
    this._rowsSelected = [];
    this._currentPageRowsSelected = [];
    this._customSort = false;
    this._sortedData = [];
    this._currentPage = 0;
    this._data = [];
    this.paginationRefresh = false;
    this.initialData = [];
    this.toggleCollapse = () => {
      this.isCollapsed = !this.isCollapsed;
    };
    this.option = void 0;
    this._option = void 0;
    this.manualPageChange = false;
    this.header = void 0;
    this._header = void 0;
    this.schema = void 0;
    this._schema = [];
    this.payload = void 0;
    this._payload = void 0;
    this.selectedItems = void 0;
    this._selectedItems = void 0;
    this.customSelectedItems = void 0;
    this.id = void 0;
    this.customHtmlNoDataAvailable = false;
    this.customSortPagination = false;
    this.noDataAvailable = "No data available";
    this.sorter = {
      path: "",
      direction: "default"
    };
    this.isLoading = false;
    this.dataToShow = void 0;
    this.isFirstTimeToRender = true;
    this.viewport = void 0;
    this.searchQuery = void 0;
    this.searchResults = void 0;
    this.dataIndexStart = void 0;
    this.dataIndexEnd = void 0;
    this.paginationOptions = void 0;
    this.isContextMenuShown = false;
    this.contextMenuHighlight = void 0;
    this.overridecss = "";
    this._overridecss = void 0;
    this.enableMicroInteraction = true;
    this.extraClass = "";
    this.itemCount = 0;
    this._itemCount = 0;
    this.clearFilter = false;
    this._clearFilter = void 0;
    this.filterQueries = [];
    this.refresh = false;
    this.isTooltipShown = void 0;
    this.readyToBlurWithTabShift = false;
    this.isCollapsed = false;
    this.itemPerPageText = "Items per page";
    this.searchByText = "Search by";
    this.dropdownAllText = "All";
    this.applyLabelDateTimeRangeFilter = "Apply";
    this.resetLabelDateTimeRangeFilter = "Reset";
    this.placeholderDateTimeRangeFilter = "Select Date Range";
    this.todayLabelDatePicker = "Today";
    this.cancelLabelDatePicker = "Cancel";
  }
  /**
   * method to reset scroll on id change of table
   */
  resetScroll() {
    var _a, _b;
    try {
      const vaadinGrid = document.getElementById(`${this.id}__vaadin-grid`);
      if (vaadinGrid) {
        vaadinGrid.requestContentUpdate();
        const table = ((_a = vaadinGrid === null || vaadinGrid === void 0 ? void 0 : vaadinGrid.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById("table")) || ((_b = vaadinGrid === null || vaadinGrid === void 0 ? void 0 : vaadinGrid.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('[part="table"]'));
        if (table) {
          table.scrollLeft = 0;
        }
      }
    } catch (e) {
      console.warn("resetScroll failed", e);
    }
  }
  setPagination() {
    var _a;
    this.paginationOptions = ((_a = this._option) === null || _a === void 0 ? void 0 : _a.paginationOptions) || [10, 20, 50];
    this.handlePaginationChange({
      itemCount: this._itemCount || this.paginationOptions[0],
      currentPage: this._currentPage || 0
    });
  }
  registerStyle() {
    this._overridecss = this.overridecss;
    registerStyles("vaadin-grid", i$3`${r$2(this._overridecss)}`);
  }
  componentWillLoad() {
    var _a;
    try {
      this._itemCount = this.itemCount;
      this.parseData();
      this.setPagination();
      setTimeout(() => {
        this.columnRenderer();
        this.registerStyle();
      });
      this._clearFilter = this.clearFilter;
      if ((_a = this._option) === null || _a === void 0 ? void 0 : _a.isMultiRowsSelectable) {
        this.bhEventSelected.emit({
          type: "multi-rows-selection-componentWillLoad",
          payload: this._rowsSelected
        });
      }
    } catch (err) {
      console.warn(ERROR_MESSAGE2);
    }
  }
  payloadCurrentPageChange() {
    var _a, _b, _c, _d;
    if (((_a = this._payload) === null || _a === void 0 ? void 0 : _a.currentPage) >= 0) {
      this._currentPage = Number((_b = this._payload) === null || _b === void 0 ? void 0 : _b.currentPage);
      this.dataIndexStart = ((_c = this._option) === null || _c === void 0 ? void 0 : _c.paginationMode) === "hidden" ? 0 : this._itemCount * this._currentPage;
      this.dataIndexEnd = ((_d = this._option) === null || _d === void 0 ? void 0 : _d.paginationMode) === "hidden" ? this._payload.length : this._itemCount * (Number(this._currentPage) + 1);
    } else {
      if (this._option.dataLoadingMode !== "async") {
        this._currentPage = 0;
      }
    }
  }
  parseData() {
    try {
      this._header = typeof this.header === "string" ? JSON.parse(this.header) : this.header;
      if (typeof this.schema === "string") {
        try {
          this._schema = JSON.parse(this.schema);
        } catch (_a) {
          console.warn(ERROR_MESSAGE2);
        }
      } else {
        this._schema = this.schema;
      }
      this._payload = typeof this.payload === "string" ? JSON.parse(this.payload) : this.payload;
      this._option = typeof this.option === "string" ? JSON.parse(this.option) : this.option;
    } catch (e) {
      console.warn(ERROR_MESSAGE2);
    }
  }
  handleUpdateDataToShow(fromHeaderSearch = false) {
    var _a;
    try {
      this.manualPageChange = false;
      this.assignRowIndex();
      if (this._option && this._option.dataLoadingMode === "async") {
        this.handleDataAsyncMode();
      } else {
        this.handleDataSyncMode(fromHeaderSearch);
      }
      if (this._customCheckkbox) {
        this.currentPageRowsSelectedChange((_a = this._option) === null || _a === void 0 ? void 0 : _a.selectAllMode);
      }
    } catch (err) {
      console.warn(ERROR_MESSAGE2);
    }
  }
  handleSort(_data) {
    var _a, _b;
    let numberData = false;
    if (this.sorter) {
      this._sortedData = _.sortBy(_data, (i) => {
        var _a2, _b2, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        if (((_b2 = (_a2 = this.sorter) === null || _a2 === void 0 ? void 0 : _a2.option) === null || _b2 === void 0 ? void 0 : _b2.dataType) == "Number") {
          return isNaN(i[(_c = this.sorter) === null || _c === void 0 ? void 0 : _c.path]) ? 0 : i[(_d = this.sorter) === null || _d === void 0 ? void 0 : _d.path];
        }
        if (typeof i[(_e = this.sorter) === null || _e === void 0 ? void 0 : _e.path] === "number") {
          numberData = true;
          return i[(_f = this.sorter) === null || _f === void 0 ? void 0 : _f.path];
        }
        if (typeof i[(_g = this.sorter) === null || _g === void 0 ? void 0 : _g.path] !== "number") {
          if ((_h = this.sorter.option) === null || _h === void 0 ? void 0 : _h.dateFormat) {
            return hooks(i[(_j = this.sorter) === null || _j === void 0 ? void 0 : _j.path].toLowerCase(), (_k = this.sorter.option) === null || _k === void 0 ? void 0 : _k.dateFormat).valueOf();
          } else {
            return i[(_l = this.sorter) === null || _l === void 0 ? void 0 : _l.path].toLowerCase();
          }
        }
      });
      let data = this._sortedData;
      if (((_a = this.sorter) === null || _a === void 0 ? void 0 : _a.path) && ((_b = this.sorter.option) === null || _b === void 0 ? void 0 : _b.dateFormat) === void 0 && !numberData) {
        const sortAlphaNum = (a, b2) => {
          var _a2, _b2;
          return a[(_a2 = this.sorter) === null || _a2 === void 0 ? void 0 : _a2.path].localeCompare(b2[(_b2 = this.sorter) === null || _b2 === void 0 ? void 0 : _b2.path], "en", {
            numeric: true
          });
        };
        data.sort(sortAlphaNum);
      }
      return this.sorter.direction === "asc" ? data : data.reverse();
    }
    return _data;
  }
  handleDataAsyncMode() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    let _data = [];
    if (((_a = this._option) === null || _a === void 0 ? void 0 : _a.searchMode) === "whole") {
      _data = this.searchQuery ? this.searchResults : (_b = this._payload) === null || _b === void 0 ? void 0 : _b.data;
    } else if (((_c = this._option) === null || _c === void 0 ? void 0 : _c.searchMode) === "column") {
      _data = (_d = this._payload) === null || _d === void 0 ? void 0 : _d.data;
      this.filterQueries.forEach((fq) => {
        if (fq.optionSearchType && fq.optionSearchType !== "date-range") {
          fq.query = fq.query.trim();
        } else {
          fq.query = fq.query;
        }
        _data = _data.filter((datum) => {
          if (fq.optionSearchType && fq.optionSearchType === "date-picker") {
            let dateFormat = "MM/DD/YYYY";
            if (fq.optionDateFormat) {
              dateFormat = fq.optionDateFormat;
            }
            return datum[fq.prop] && fq.query && hooks(datum[fq.prop]).format(dateFormat) === hooks(fq.query).format(dateFormat);
          }
          if (fq.optionSearchType && fq.optionSearchType === "date-range") {
            let dateFormat = "YYYY/MM/DD";
            if (fq.optionDateFormat) {
              dateFormat = fq.optionDateFormat;
            }
            const dateToCheck = hooks(datum[fq.prop]);
            const startDate = hooks(fq.query["startDate"], dateFormat);
            const endDate = hooks(fq.query["endDate"], dateFormat);
            const isInRange = dateToCheck.isBetween(startDate, endDate, void 0, "[]");
            return datum[fq.prop] && fq.query && isInRange;
          }
          if (typeof datum[fq.prop] === "string") {
            if (fq.optionSearchType && fq.optionSearchType === "multiselect-dropdown") {
              return datum[fq.prop] && fq.query && fq.query.toLowerCase().split(",").includes(datum[fq.prop].toLowerCase());
            }
            return datum[fq.prop].toLowerCase().includes(fq.query.toLowerCase());
          } else {
            if (fq.optionSearchType && fq.optionSearchType === "multiselect-dropdown") {
              return datum[fq.prop] && fq.query && fq.query.split(",").includes(datum[fq.prop].toString());
            }
            return datum[fq.prop].toString().includes(fq.query);
          }
        });
      });
    } else {
      _data = (_e = this._payload) === null || _e === void 0 ? void 0 : _e.data;
    }
    this._data = [..._data];
    if (this._data.length > 0) {
      if (this.sorter && (this.sorter.direction === "asc" || this.sorter.direction === "desc")) {
        if (this._currentPage > 0) {
          this.dataToShow = this.handleSort(this._data);
        } else {
          this.dataToShow = ((_f = this._option) === null || _f === void 0 ? void 0 : _f.paginationMode) === "hidden" ? this.handleSort(this._data) : this.handleSort(this._data).slice(this.dataIndexStart, this.dataIndexEnd);
        }
        if (this._customSort) {
          if (((_g = this._option) === null || _g === void 0 ? void 0 : _g.searchMode) === "whole" && this.searchQuery) {
            this.dataToShow = this.searchResults.slice(this.dataIndexStart, this.dataIndexEnd);
          } else if (((_h = this._option) === null || _h === void 0 ? void 0 : _h.searchMode) === "column" && this.filterQueries.length > 0) {
            this.dataToShow = ((_j = this._option) === null || _j === void 0 ? void 0 : _j.paginationMode) === "hidden" ? this.handleSort(this._data) : this.handleSort(this._data).slice(this.dataIndexStart, this.dataIndexEnd);
          } else {
            this.dataToShow = ((_k = this._option) === null || _k === void 0 ? void 0 : _k.paginationMode) === "hidden" ? (_l = this._payload) === null || _l === void 0 ? void 0 : _l.data : (_m = this._payload) === null || _m === void 0 ? void 0 : _m.data;
          }
        }
      } else {
        if (this._currentPage > 0) {
          this.dataToShow = this._data;
        } else {
          this.dataToShow = ((_o = this._option) === null || _o === void 0 ? void 0 : _o.paginationMode) === "hidden" ? this._data : this._data.slice(this.dataIndexStart, this.dataIndexEnd);
        }
      }
      this._totalItemCount = this._payload.length;
    } else if (this.filterQueries.length > 0) {
      this.dataToShow = this._data;
      this._totalItemCount = this._data.length;
    } else {
      this.dataToShow = this._payload.data;
      this._totalItemCount = (_p = this._payload) === null || _p === void 0 ? void 0 : _p.length;
    }
  }
  handleDataSyncMode(headerData = false) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    let _data = [];
    if (((_a = this._option) === null || _a === void 0 ? void 0 : _a.searchMode) === "whole") {
      _data = this.searchQuery ? this.searchResults : (_b = this._payload) === null || _b === void 0 ? void 0 : _b.data;
    } else if (((_c = this._option) === null || _c === void 0 ? void 0 : _c.searchMode) === "column") {
      _data = (_d = this._payload) === null || _d === void 0 ? void 0 : _d.data;
      this.filterQueries.forEach((fq) => {
        if (fq.optionSearchType && fq.optionSearchType !== "date-range") {
          fq.query = fq.query.trim();
        } else {
          fq.query = fq.query;
        }
        _data = _data.filter((datum) => {
          if (typeof datum[fq.prop] === "string") {
            if (fq.optionSearchType && fq.optionSearchType === "dropdown") {
              return datum[fq.prop] && fq.query && datum[fq.prop] === fq.query;
            }
            if (fq.optionSearchType && fq.optionSearchType === "multiselect-dropdown") {
              return datum[fq.prop] && fq.query && fq.query.toLowerCase().split(",").includes(datum[fq.prop].toLowerCase());
            }
            if (fq.optionSearchType && fq.optionSearchType === "date-range") {
              let dateFormat = "YYYY/MM/DD";
              if (fq.optionDateFormat) {
                dateFormat = fq.optionDateFormat;
              }
              const dateToCheck = hooks(datum[fq.prop]);
              const startDate = hooks(fq.query["startDate"], dateFormat);
              const endDate = hooks(fq.query["endDate"], dateFormat);
              const isInRange = dateToCheck.isBetween(startDate, endDate, void 0, "[]");
              return datum[fq.prop] && fq.query && isInRange;
            }
            return datum[fq.prop].toLowerCase().includes(fq.query.toLowerCase());
          } else {
            if (fq.optionSearchType && fq.optionSearchType === "multiselect-dropdown") {
              return datum[fq.prop] && fq.query && fq.query.split(",").includes(datum[fq.prop].toString());
            }
            return datum[fq.prop].toString().includes(fq.query);
          }
        });
      });
    } else {
      _data = (_e = this._payload) === null || _e === void 0 ? void 0 : _e.data;
    }
    if (!!_data) {
      this._data = [..._data];
    }
    if (this._data.length > 0) {
      if (this.sorter && (this.sorter.direction === "asc" || this.sorter.direction === "desc")) {
        if (this._customSort) {
          if (((_f = this._option) === null || _f === void 0 ? void 0 : _f.searchMode) === "whole" && this.searchQuery) {
            this.dataToShow = this.searchResults.slice(this.dataIndexStart, this.dataIndexEnd);
          } else if (((_g = this._option) === null || _g === void 0 ? void 0 : _g.searchMode) === "column" && this.filterQueries.length > 0) {
            this.dataToShow = ((_h = this._option) === null || _h === void 0 ? void 0 : _h.paginationMode) === "hidden" ? this.handleSort(this._data) : this.handleSort(this._data).slice(this.dataIndexStart, this.dataIndexEnd);
          } else {
            this.dataToShow = ((_j = this._option) === null || _j === void 0 ? void 0 : _j.paginationMode) === "hidden" ? (_k = this._payload) === null || _k === void 0 ? void 0 : _k.data : (_l = this._payload) === null || _l === void 0 ? void 0 : _l.data.slice(this.dataIndexStart, this.dataIndexEnd);
          }
        } else {
          this.dataToShow = ((_m = this._option) === null || _m === void 0 ? void 0 : _m.paginationMode) === "hidden" ? this.handleSort(this._data) : this.handleSort(this._data).slice(this.dataIndexStart, this.dataIndexEnd);
        }
      } else {
        this.dataToShow = ((_o = this._option) === null || _o === void 0 ? void 0 : _o.paginationMode) === "hidden" ? this._data : this._data.slice(this.dataIndexStart, this.dataIndexEnd);
      }
      this._totalItemCount = this._data.length;
    } else if (this.filterQueries.length > 0) {
      this.dataToShow = [];
      this._totalItemCount = 0;
      this._currentPage = 0;
    } else if (this.searchQuery && !this.searchResults.length) {
      this.dataToShow = [];
      this._totalItemCount = 0;
      this._currentPage = 0;
    } else {
      if (headerData) {
        this.dataToShow = [];
        this._totalItemCount = 0;
      } else {
        if (this._payload) {
          this.dataToShow = this._payload.data.slice(this.dataIndexStart, this.dataIndexEnd);
        }
        this._totalItemCount = (_p = this._payload) === null || _p === void 0 ? void 0 : _p.length;
      }
    }
  }
  assignRowIndex() {
    if (this._payload && this._payload.data) {
      this._payload.data = this._sortedData = this._payload.data.map((item, index) => {
        item["bh-tabular-list-index"] = index;
        Object.keys(item).map(function(key) {
          if (item[key] == null) {
            item[key] = "";
          }
        });
        return item;
      });
    }
  }
  componentDidLoad() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    try {
      if (this._customCheckkbox) {
        this.currentPageRowsSelectedChange((_a = this._option) === null || _a === void 0 ? void 0 : _a.selectAllMode);
      }
      (_b = this.el__grid) === null || _b === void 0 ? void 0 : _b.addEventListener("active-item-changed", (event) => {
        var _a2;
        if ((_a2 = this._option) === null || _a2 === void 0 ? void 0 : _a2.isRowSelectable) {
          const item = event.detail.value;
          this.el__grid.selectedItems = item ? [item] : [];
          this.bhEventSelected.emit({
            type: "row-selection",
            item: item ? item : {}
          });
        }
      });
      (_c = this.el__grid) === null || _c === void 0 ? void 0 : _c.addEventListener("column-reorder", (e) => {
        let columnsName = [];
        for (let i = 0; i < e.detail.columns.length; i++) {
          columnsName.push(e.detail.columns[i].__data.path);
        }
        this.bhEventChange.emit({
          type: "column-reorder",
          payload: columnsName
        });
      });
      (_d = this.el__grid) === null || _d === void 0 ? void 0 : _d.addEventListener("column-resize", (event) => {
        this.bhEventChange.emit({
          type: "column-resize",
          payload: event.detail.resizedColumn["__data"]
        });
      });
      (_e = this.el__grid) === null || _e === void 0 ? void 0 : _e.addEventListener("selected-items-changed", (event) => {
        var _a2;
        event.preventDefault();
        if (!((_a2 = this._option) === null || _a2 === void 0 ? void 0 : _a2.isMultiRowsSelectable)) return;
        if (event.detail.path !== "selectedItems.splices") {
          if (this._rowsSelected.length === this.el__grid.selectedItems.length) {
            this.bhEventSelected.emit({
              type: "multi-rows-selection-selected-items-changed",
              payload: this.el__grid.selectedItems
            });
          }
        }
      });
      const shadowRoot = (_f = this.el__grid) === null || _f === void 0 ? void 0 : _f.shadowRoot;
      if (shadowRoot) {
        const observer2 = new MutationObserver(() => {
          const reorderGhost = shadowRoot.querySelector('[part="reorder-ghost"]');
          if (reorderGhost) {
            const wordsToRemove = ["north", "south", "search", "date_range", "unfold_more", "expand_more", "by"];
            let text = reorderGhost.textContent || "";
            wordsToRemove.forEach((word) => {
              let lowerText = text.toLowerCase();
              const lowerWord = word.toLowerCase();
              while (lowerText.includes(lowerWord)) {
                const index = lowerText.indexOf(lowerWord);
                text = text.substring(0, index) + text.substring(index + word.length);
                const newLowerText = text.toLowerCase();
                if (newLowerText === lowerText) break;
                lowerText = newLowerText;
              }
            });
            text = text.replace(/\s+/g, " ").trim();
            reorderGhost.textContent = text;
          }
        });
        observer2.observe(shadowRoot, {
          attributes: true,
          subtree: true,
          attributeFilter: ["style", "class"]
        });
      }
      window.addEventListener("scroll", (event) => {
        this.bhEventScroll.emit({
          type: "scroll",
          payload: {
            event,
            initiator: "windowScrollFromTabularlist"
          }
        });
      });
      (_g = this.el__grid) === null || _g === void 0 ? void 0 : _g.shadowRoot.getElementById("table").addEventListener("scroll", (event) => {
        this.bhEventScroll.emit({
          type: "scroll",
          payload: {
            event,
            initiator: "tabularlist"
          }
        });
      });
      try {
        if (this.hasHTMLTemplate) {
          const columnHeight2 = (_h = this.el__grid) === null || _h === void 0 ? void 0 : _h.shadowRoot.querySelector("tbody").querySelectorAll("tr")[0].cells[0].clientHeight;
          let initHeight = 0;
          (_j = this.el__grid) === null || _j === void 0 ? void 0 : _j.shadowRoot.querySelector("tbody").querySelectorAll("tr").forEach((item) => {
            item.style.transform = `translateY(${initHeight}px)`;
            initHeight += columnHeight2;
          });
        }
      } catch (e) {
        console.warn(ERROR_MESSAGE2);
      }
      const columnHeight = (_k = this.el__grid) === null || _k === void 0 ? void 0 : _k.shadowRoot.querySelector("tbody").querySelectorAll("tr")[0].cells[0].clientHeight;
      let tbodyHeight = this.el__grid.shadowRoot.querySelector("tbody").rows.length;
      this.el__grid.shadowRoot.querySelector("tbody").style.height = `${columnHeight * tbodyHeight}px`;
    } catch (err) {
      console.warn(ERROR_MESSAGE2);
    }
  }
  componentDidUpdate() {
  }
  parseHeaderWidth(width, columnWithUnit = "px") {
    if (columnWithUnit == "%" && width) {
      return `100%`;
    } else {
      if (typeof width === "number") {
        return width < 50 ? `50px` : `${width}px`;
      }
      if (typeof width === "string") {
        if (width.indexOf("px") > -1) {
          return parseInt(width.split("px")[0]) < 50 ? `50px` : width;
        }
        return null;
      }
    }
  }
  parseWidth(width, columnWithUnit = "px") {
    if (columnWithUnit == "%" && width) {
      return `${width}${columnWithUnit}`;
    } else {
      if (typeof width === "number") {
        return width < 50 ? `50px` : `${width}px`;
      }
      if (typeof width === "string") {
        if (width.indexOf("px") > -1) {
          return parseInt(width.split("px")[0]) < 50 ? `50px` : width;
        }
        return null;
      }
    }
  }
  mouseOverEvent(event, hideTooltip) {
    try {
      const root = event.target;
      if (hideTooltip) return;
      else if (root && root.shadowRoot && !root.withoutTemplate) {
        const textElem = root.shadowRoot.querySelector(".bh-a--text");
        if (textElem && textElem.offsetWidth < textElem.scrollWidth) {
          this.el__tooltipMessage.innerHTML = root.outerHTML.split('text="')[1].split('"')[0];
          this.tooltipRender(event);
        }
      } else {
        if (root.offsetWidth < root.scrollWidth) {
          this.el__tooltipMessage.innerHTML = root.innerHTML;
          this.tooltipRender(event);
        }
      }
    } catch (err) {
      console.warn(ERROR_MESSAGE2, err);
    }
  }
  getSortIconFromDirection(direction) {
    if (direction === "asc") return "north";
    if (direction === "desc") return "south";
    return "unfold_more";
  }
  tooltipRender(event) {
    var _a;
    this.el__tooltip.classList.add("shown");
    const eventTargetRect = event.target.getBoundingClientRect();
    const containerRect = this.el__container.getBoundingClientRect();
    if (eventTargetRect.y + eventTargetRect.height + containerRect.y > containerRect.height) {
      this.el__tooltip.style.top = `${eventTargetRect.top - this.el__tooltip.clientHeight - containerRect.top}px`;
      this.el__tooltip.style.left = `${eventTargetRect.left - containerRect.left}px`;
    } else {
      this.el__tooltip.style.top = `${eventTargetRect.top + ((_a = this.el__grid) === null || _a === void 0 ? void 0 : _a.shadowRoot.querySelector("tbody").querySelectorAll("tr")[0].cells[0].clientHeight) - containerRect.top}px`;
      this.el__tooltip.style.left = `${eventTargetRect.left - containerRect.left}px`;
    }
    if (eventTargetRect.x + eventTargetRect.width + containerRect.x > containerRect.width) {
      this.el__tooltip.style.left = `${eventTargetRect.left - containerRect.left - eventTargetRect.width}px`;
    } else {
      if (eventTargetRect.left < 0) {
        this.el__tooltip.style.left = `${-eventTargetRect.left - containerRect.left}px`;
      } else {
        this.el__tooltip.style.left = `${eventTargetRect.left - containerRect.left}px`;
      }
    }
    this.el__tooltip.style["word-break"] = "break-all";
  }
  mouseLeaveEvent() {
    try {
      this.el__tooltip.classList.remove("shown");
    } catch (err) {
      console.warn(ERROR_MESSAGE2);
    }
  }
  columnRenderer() {
    var _a, _b;
    try {
      const prefix = this.host.tagName.toLowerCase().replace(components.tabularList.tagNameBase, "");
      const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
      const columns = document.getElementById(this.id).querySelectorAll("vaadin-grid-column");
      const selection_columns = document.getElementById(this.id).querySelectorAll("vaadin-grid-selection-column");
      (_a = this._schema) === null || _a === void 0 ? void 0 : _a.forEach((schemaPartial, index) => {
        let schem = schemaPartial;
        const _mouseOverEvent = (event) => {
          this.mouseOverEvent(event, schem === null || schem === void 0 ? void 0 : schem.hideTooltip);
        };
        const _mouseLeaveEvent = () => {
          this.mouseLeaveEvent();
        };
        if (!columns[index]) return;
        this.settingHeaderActionMenu(columns);
        columns[index].headerRenderer = (root) => {
          if (this.isFirstTimeToRender || this._clearFilter) {
            root.innerHTML = this.columnHeaderRenderer(schemaPartial, Components, root);
            root.childNodes[0].childNodes[1].removeEventListener("mouseover", _mouseOverEvent, true);
            root.childNodes[0].childNodes[1].addEventListener("mouseover", _mouseOverEvent, true);
            root.childNodes[0].childNodes[1].removeEventListener("mouseleave", _mouseLeaveEvent, true);
            root.childNodes[0].childNodes[1].addEventListener("mouseleave", _mouseLeaveEvent, true);
            root.childNodes[0].childNodes[1]["withoutTemplate"] = true;
            this.eventHandlingOnColumnFilter(schemaPartial, root);
          }
        };
        columns[index].renderer = (root, column, model) => {
          this.columnBodyRenderer(schemaPartial, Components, root, column, model, columns, _mouseOverEvent, _mouseLeaveEvent);
        };
        if (!!selection_columns[index]) {
          selection_columns[index].renderer = (root, column, model) => {
            root.innerHTML = this.selectionCloumnRenderer(Components, model, index, selection_columns, root);
          };
        }
        this.selectAllCheckboxRenderer(selection_columns, index);
      });
      if ((_b = this._option) === null || _b === void 0 ? void 0 : _b.actionMenu) {
        columns[columns.length - 1].renderer = (root, column, model) => {
          if (!columns[columns.length - 1] || columns.length < 2) return;
          this.settingActionMenu(Components, root, model, column);
        };
      }
      this.setDisabledRow();
      this.setCustomPartNameGeneratorForCell();
    } catch (err) {
      console.warn(ERROR_MESSAGE2);
    }
  }
  setDisabledRow() {
    this.el__grid.cellPartNameGenerator = (_col, model) => {
      const item = model === null || model === void 0 ? void 0 : model.item;
      let parts = "";
      if (item.$rowDisabled) {
        parts += " disable-row";
      } else {
        parts += "";
      }
      return parts;
    };
  }
  /* method to generate custom part name for cell */
  setCustomPartNameGeneratorForCell() {
    this.el__grid.cellPartNameGenerator = (_col, model) => {
      const item = model === null || model === void 0 ? void 0 : model.item;
      let parts = "";
      if (item.$customCell) {
        parts += " custom-cell";
      } else {
        parts += "";
      }
      return parts;
    };
  }
  selectAllCheckboxRenderer(selection_columns, index) {
    var _a, _b, _c;
    if (!selection_columns[index]) return;
    this.selectAllCheckbox = this.el__grid.querySelector(".vaadin-grid-select-all-checkbox");
    if (this.selectAllCheckbox) {
      if (this.selectAllCheckbox.parentNode.childNodes.length === 3) {
        this.selectAllCheckbox.parentNode.childNodes[2].classList.add("bh-tabular-list__grid-template__header-with-filter__text-field");
      }
      if (this._option && ((_a = this._option) === null || _a === void 0 ? void 0 : _a.hideMultiRowsSelectable)) {
        this.selectAllCheckbox.style.display = "none";
        return;
      } else {
        if (!this._customCheckkbox) {
          this._customCheckkbox = ((_b = this._option) === null || _b === void 0 ? void 0 : _b.hideMultiRowsSelectable) ? document.createElement("span") : document.createElement("bh-checkbox");
        }
        this.selectAllCheckbox.style.display = "none";
        this._customCheckkbox.addEventListener(`bhEventChange`, (event) => {
          var _a2;
          this._customCheckkbox.removeAttribute("indeterminate");
          if (((_a2 = this._option) === null || _a2 === void 0 ? void 0 : _a2.selectAllMode) === "page") {
            if (event.detail) {
              this.selectAllCheckbox["checked"] = true;
              this.dataToShow.map((data) => data["$rowSelected"] = true);
              this.el__grid.selectedItems = [...this.dataToShow];
            } else {
              this.selectAllCheckbox["checked"] = false;
              this.dataToShow.map((data) => data["$rowSelected"] = false);
              this.el__grid.selectedItems = [];
            }
          } else {
            if (event.detail) {
              this.selectAllCheckbox["checked"] = true;
              this._payload.data.map((data) => data["$rowSelected"] = true);
              this.el__grid.selectedItems = [...this._payload.data];
            } else {
              this.selectAllCheckbox["checked"] = false;
              this._payload.data.map((data) => data["$rowSelected"] = false);
              this.el__grid.selectedItems = [];
            }
          }
          this._rowsSelected = this._payload.data.filter((item) => item["$rowSelected"]);
          this.bhEventSelected.emit({
            type: "multi-rows-selection",
            payload: this._rowsSelected
          });
        });
        if (((_c = this._option) === null || _c === void 0 ? void 0 : _c.searchMode) === "column") {
          if (this.selectAllCheckbox.parentNode.childNodes.length < 3) {
            let element1 = document.createElement("div");
            element1.className = "bh-tabular-list__grid-template__header-with-filter__copy";
            element1.className = "selectAllCheckboxDiv";
            element1.appendChild(this._customCheckkbox);
            let element2 = document.createElement("div");
            element2.className = "bh-tabular-list__grid-template__header-with-filter__text-field";
            this.selectAllCheckbox.parentElement.style.padding = "0";
            this.selectAllCheckbox.parentNode.appendChild(element1);
            this.selectAllCheckbox.parentNode.appendChild(element2);
          }
        } else {
          if (this.selectAllCheckbox.parentNode.childNodes.length === 3) {
            this.selectAllCheckbox.parentNode.childNodes[2].classList.remove("bh-tabular-list__grid-template__header-with-filter__text-field");
          }
          if (this.selectAllCheckbox.parentNode.childNodes.length < 2) {
            this.selectAllCheckbox.parentNode.appendChild(this._customCheckkbox);
          }
        }
      }
    } else {
      this.componentWillLoad();
    }
  }
  selectionCloumnRenderer(Components, model, index, selection_columns, root) {
    if (!selection_columns[index]) return;
    if (!this.templateEvents[model.index.toString()]) this.templateEvents[model.index.toString()] = {};
    if (!this.templateEvents[model.index.toString()]["bh-checkbox"]) this.templateEvents[model.index.toString()]["bh-checkbox"] = {};
    if (!this.templateEvents[model.index.toString()]["bh-checkbox"]["bhEventChange"]) this.templateEvents[model.index.toString()]["bh-checkbox"]["bhEventChange"] = {};
    root.removeEventListener(`bhEventChange`, this.templateEvents[model.index.toString()]["bh-checkbox"]["bhEventChange"]["func"]);
    this.templateEvents[model.index.toString()]["bh-checkbox"]["bhEventChange"]["func"] = (e) => {
      var _a, _b, _c;
      model.item["$rowSelected"] = e.detail;
      model.selected = e.detail;
      if ((_a = this._option) === null || _a === void 0 ? void 0 : _a.isRowSelectable) {
        const item = model.item;
        this.bhEventSelected.emit({
          type: "row-selection",
          item: item ? item : {}
        });
      } else if ((_b = this._option) === null || _b === void 0 ? void 0 : _b.isMultiRowsSelectable) {
        if (this._customCheckkbox) {
          this.currentPageRowsSelectedChange((_c = this._option) === null || _c === void 0 ? void 0 : _c.selectAllMode);
        }
        if (model.item["$rowSelected"]) {
          this.el__grid.selectItem(model.item);
        }
        if (!model.item["$rowSelected"]) {
          this.el__grid.deselectItem(model.item);
        }
        this.bhEventSelected.emit({
          type: "multi-rows-selection",
          payload: this._rowsSelected,
          model: model.item
        });
      }
    };
    root.addEventListener(`bhEventChange`, this.templateEvents[model.index.toString()]["bh-checkbox"]["bhEventChange"]["func"]);
    if (model.item["$rowDisabled"]) {
      return `<${Components.checkbox}
        data-index="${index}" 
        ${model.item["$rowDisabled"] ? "disabled" : ""}>
    </${Components.checkbox}>`;
    } else {
      return `<${Components.checkbox}
        data-index="${index}" 
        ${model.item["$rowSelected"] ? "checked" : ""} >
    </${Components.checkbox}>`;
    }
  }
  currentPageRowsSelectedChange(type) {
    this._currentPageRowsSelected = this.dataToShow.filter((item) => item["$rowSelected"]);
    this._rowsSelected = this._payload.data.filter((item) => item["$rowSelected"]);
    if (type === "page") {
      if (this._currentPageRowsSelected.length === 0) {
        this._customCheckkbox.removeAttribute("indeterminate");
        this._customCheckkbox.setAttribute("checked", "false");
      } else {
        if (this._currentPageRowsSelected.length === this.dataToShow.length) {
          this._customCheckkbox.removeAttribute("indeterminate");
          this._customCheckkbox.setAttribute("checked", "");
        } else if (this._currentPageRowsSelected.length < this.dataToShow.length) {
          this._customCheckkbox.setAttribute("indeterminate", "");
        }
        this.el__grid.selectedItems = [...this._currentPageRowsSelected];
      }
    } else {
      if (this._rowsSelected.length === 0) {
        this._customCheckkbox.removeAttribute("indeterminate");
        this._customCheckkbox.setAttribute("checked", "false");
      } else {
        if (this._rowsSelected.length === this._payload.data.length) {
          this._customCheckkbox.removeAttribute("indeterminate");
          this._customCheckkbox.setAttribute("checked", "");
        } else if (this._rowsSelected.length < this._payload.data.length) {
          this._customCheckkbox.setAttribute("indeterminate", "");
        }
      }
    }
    setTimeout(() => {
      this.isFirstTimeToRender = false;
    });
  }
  columnHeaderRenderer(schemaPartial, Components, root) {
    var _a, _b;
    if (((_a = this._option) === null || _a === void 0 ? void 0 : _a.searchMode) === "column") {
      root.style.padding = "0";
    } else {
      if (root.style.padding == "0px") {
        root.style["padding-left"] = "16px";
        root.style["padding-right"] = "16px";
        root.style["padding-top"] = "4px";
        root.style["padding-bottom"] = "4px";
      }
    }
    let headerSchema = this.columnSearchTemplates(schemaPartial, Components);
    if ((_b = schemaPartial.option) === null || _b === void 0 ? void 0 : _b.isSortable) {
      root.onkeydown = (e) => {
        e.stopImmediatePropagation();
      };
      root.onclick = (event) => {
        var _a2, _b2;
        if ((_b2 = (_a2 = this.el__grid) === null || _a2 === void 0 ? void 0 : _a2.querySelector(`.bh-tabular-list__grid-template__header-with-filter__copy[prop="${schemaPartial.prop}"]`)) === null || _b2 === void 0 ? void 0 : _b2.contains(event.target)) {
          if (schemaPartial === null || schemaPartial === void 0 ? void 0 : schemaPartial.isCustomSort) {
            this._customSort = true;
          } else {
            this._customSort = false;
          }
          this.handleSorting({
            path: schemaPartial.prop,
            option: schemaPartial.option
          });
        }
      };
    }
    return headerSchema;
  }
  handleSorting(arg) {
    try {
      if (!arg.path) return;
      let direction = "default";
      if (arg.path === this.sorter.path) {
        if (this._option.disableDefaultSort && this._option.disableDefaultSort === true) {
          if (this.sorter.direction === "asc") {
            direction = "desc";
          } else if (this.sorter.direction === "desc") {
            direction = "asc";
          } else {
            direction = "asc";
          }
        } else {
          if (this.sorter.direction === "asc") {
            direction = "desc";
          } else if (this.sorter.direction === "desc") {
            direction = "default";
          } else if (this.sorter.direction === "default") {
            direction = "asc";
          } else {
            direction = "asc";
          }
        }
      } else {
        if (arg.option.initialSortDirection === "desc") {
          direction = "default";
        } else if (arg.option.initialSortDirection === "asc") {
          direction = "desc";
        } else {
          direction = "asc";
        }
      }
      this.sorter = {
        direction,
        path: arg.path,
        option: arg.option
      };
      setTimeout(() => {
        var _a, _b, _c;
        (_a = this.el__grid) === null || _a === void 0 ? void 0 : _a.querySelectorAll(".bh-tabular-list__grid-template__header-with-filter__copy").forEach((el) => {
          var _a2;
          (_a2 = el === null || el === void 0 ? void 0 : el.querySelector(".bh-tabular-list__grid-template__header-with-filter__sort-icon")) === null || _a2 === void 0 ? void 0 : _a2.setAttribute("icon", "unfold_more");
        });
        const targetHeaderTemplateElement = (_c = (_b = this.el__grid) === null || _b === void 0 ? void 0 : _b.querySelector(`.bh-tabular-list__grid-template__header-with-filter__copy[prop="${arg.path}"]`)) === null || _c === void 0 ? void 0 : _c.querySelector(".bh-tabular-list__grid-template__header-with-filter__sort-icon");
        if (targetHeaderTemplateElement && arg.path === this.sorter.path) targetHeaderTemplateElement.setAttribute("icon", this.sorter.direction ? this.sorter.direction === "asc" ? "north" : "south" : this.sorter.direction ? this.sorter.direction === "default" ? "unfold_more" : "" : "");
        if (this.sorter.direction === "default") {
          targetHeaderTemplateElement.setAttribute("icon", "unfold_more");
        }
      });
      this.handleUpdateDataToShow();
      this.bhEventChange.emit({
        type: "sort",
        payload: this.sorter
      });
    } catch (err) {
      console.warn(ERROR_MESSAGE2);
    }
  }
  eventHandlingOnColumnFilter(schemaPartial, root) {
    var _a, _b, _c, _d;
    if (((_a = this._option) === null || _a === void 0 ? void 0 : _a.searchMode) === "column" && !(((_b = this._option.disableSearchProps) === null || _b === void 0 ? void 0 : _b.indexOf(schemaPartial.prop)) >= 0)) {
      switch ((_d = (_c = schemaPartial.option) === null || _c === void 0 ? void 0 : _c.searchType) === null || _d === void 0 ? void 0 : _d.component) {
        case "date-picker":
          this.datePickerColumnSearchEventHandle(schemaPartial, root);
          break;
        case "date-range":
          this.dateRangeColumnSearchEventHandle(schemaPartial, root);
          break;
        case "dropdown":
          this.dropdownColumnSearchEventHandle(schemaPartial, root);
          break;
        case "multiselect-dropdown":
          this.dropdownColumnSearchEventHandle(schemaPartial, root);
          break;
        default:
          root.onkeydown = (e) => {
            e.stopImmediatePropagation();
          };
          root.onkeyup = (event) => {
            this.columnSearchQuery({
              schemaPartial,
              value: event.target.value
            });
          };
      }
    }
  }
  datePickerColumnSearchEventHandle(schemaPartial, root) {
    var _a;
    const datePicker = root.getElementsByTagName("bh-date-picker");
    (_a = datePicker[0]) === null || _a === void 0 ? void 0 : _a.addEventListener("bhEventChange", (event) => {
      var _a2;
      event.stopImmediatePropagation();
      const selectedDate = event.detail;
      let query = "";
      if (selectedDate.trim() != "") {
        query = hooks(selectedDate, "YYYY-MM-DD").format((_a2 = schemaPartial.option) === null || _a2 === void 0 ? void 0 : _a2.dateFormat);
      }
      this.columnSearchQuery({
        schemaPartial,
        value: query
      });
    });
  }
  dateRangeColumnSearchEventHandle(schemaPartial, root) {
    var _a;
    const datePicker = root.getElementsByTagName("bh-datetime-range-picker");
    (_a = datePicker[0]) === null || _a === void 0 ? void 0 : _a.addEventListener("bhEventChange", (event) => {
      var _a2, _b;
      event.stopImmediatePropagation();
      const selectedDate = event.detail;
      let query = {
        startDate: "",
        endDate: ""
      };
      const startRaw = (_a2 = selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.startDate) !== null && _a2 !== void 0 ? _a2 : "";
      const endRaw = (_b = selectedDate === null || selectedDate === void 0 ? void 0 : selectedDate.endDate) !== null && _b !== void 0 ? _b : "";
      if (startRaw.trim() != "" && endRaw.trim() != "") {
        let dateFormat = "YYYY/MM/DD";
        if (schemaPartial.option.dateFormat) {
          dateFormat = schemaPartial.option.dateFormat;
        }
        query.startDate = hooks(startRaw, dateFormat).format(dateFormat);
        query.endDate = hooks(endRaw, dateFormat).format(dateFormat);
      }
      this.columnSearchQuery({
        schemaPartial,
        value: query
      });
    });
  }
  dropdownColumnSearchEventHandle(schemaPartial, root) {
    var _a;
    const dropdown = root.getElementsByTagName("bh-dropdown");
    (_a = dropdown[0]) === null || _a === void 0 ? void 0 : _a.addEventListener("bhEventSelected", (event) => {
      this.columnSearchQuery({
        schemaPartial,
        value: event["detail"]
      });
      event.stopImmediatePropagation();
    });
  }
  settingHeaderActionMenu(columns) {
    var _a;
    if ((_a = this._option) === null || _a === void 0 ? void 0 : _a.actionMenu) {
      if (!columns[columns.length - 1]) return;
      if (this._option.searchMode === "column") {
        columns[columns.length - 1].headerRenderer = (root) => {
          root.style.padding = "0";
          root.innerHTML = `
                        <div class="bh-tabular-list__grid-template__header-with-filter__copy"></div>
                        <div class="bh-tabular-list__grid-template__header-with-filter__text-field"></div>
                    `;
        };
      }
    }
  }
  settingActionMenu(Components, root, model, column) {
    try {
      const that = this;
      setTimeout(() => {
        var _a, _b;
        if (this.isWindowResizing) return;
        if ((_a = this._option) === null || _a === void 0 ? void 0 : _a.actionMenu) {
          root.innerHTML = `<div class="bh-tabular-list__inline-action-menu-wrapper"><${Components.actionMenu}   enable-micro-interaction='${this.enableMicroInteraction}' disable-tooltip="true" class="bh-tabular-list__inline-action-menu ${this._option.spacing}" small inline menu-items='${JSON.stringify((_b = this._option) === null || _b === void 0 ? void 0 : _b.actionMenu)}' width="small"></${Components.actionMenu}></div>`;
          if (!this.templateEvents[model.index.toString()]) this.templateEvents[model.index.toString()] = {};
          root.removeEventListener("bhEventSelected", this.templateEvents[model.index.toString()]["action-menu"]);
          this.templateEvents[model.index.toString()]["action-menu"] = function(event) {
            var _a2;
            event.preventDefault();
            event.stopPropagation();
            if (_.isEqual(model.item, (_a2 = that.el__grid.getEventContext(event)) === null || _a2 === void 0 ? void 0 : _a2.item)) {
              if (event.detail.label) {
                that.bhEventSelected.emit({
                  type: `action-menu-${event.detail.label}`,
                  payload: event.detail,
                  item: model.item
                });
              } else {
                that.bhEventSelected.emit({
                  type: `action-menu`,
                  payload: event.detail,
                  item: model.item
                });
              }
            }
          };
          root.addEventListener("bhEventSelected", this.templateEvents[model.index.toString()]["action-menu"]);
        }
      }, 300);
    } catch (err) {
      console.warn(ERROR_MESSAGE2);
    }
  }
  columnSearchQuery(payload) {
    try {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
        if (typeof payload.value === "object") {
          if (!payload.value.startDate) {
            let final = "";
            for (let i = 0; i < payload.value.length; i++) {
              if (final == "") {
                final = final + payload.value[i].value;
              } else {
                final = final + "," + payload.value[i].value;
              }
            }
            payload.value = final;
          }
        } else {
          payload.value = payload.value.trim();
        }
        const {
          schemaPartial,
          value
        } = payload;
        this.bhEventChange.emit({
          type: "search",
          payload: {
            label: schemaPartial.label,
            prop: schemaPartial.prop,
            query: value
          }
        });
        if (((_a = this._option) === null || _a === void 0 ? void 0 : _a.dataLoadingMode) === "sync" || ((_b = this._option) === null || _b === void 0 ? void 0 : _b.dataLoadingMode) === "async") {
          const propTar = schemaPartial.prop;
          const queryTar = value;
          if (this.filterQueries.find((q) => {
            return propTar === q.prop;
          })) {
            this.filterQueries = this.filterQueries.filter((q) => {
              return propTar !== q.prop;
            });
            if (queryTar) {
              if (schemaPartial === null || schemaPartial === void 0 ? void 0 : schemaPartial.option) {
                if ((_c = schemaPartial.option) === null || _c === void 0 ? void 0 : _c.searchType) {
                  if (((_e = (_d = schemaPartial.option) === null || _d === void 0 ? void 0 : _d.searchType) === null || _e === void 0 ? void 0 : _e.component) === "date-range" && ((_f = schemaPartial.option) === null || _f === void 0 ? void 0 : _f.dateFormat)) {
                    this.filterQueries = [...this.filterQueries, {
                      prop: propTar,
                      query: queryTar,
                      optionSearchType: (_h = (_g = schemaPartial.option) === null || _g === void 0 ? void 0 : _g.searchType) === null || _h === void 0 ? void 0 : _h.component,
                      optionDateFormat: (_j = schemaPartial.option) === null || _j === void 0 ? void 0 : _j.dateFormat
                    }];
                  } else {
                    this.filterQueries = [...this.filterQueries, {
                      prop: propTar,
                      query: queryTar,
                      optionSearchType: (_l = (_k = schemaPartial.option) === null || _k === void 0 ? void 0 : _k.searchType) === null || _l === void 0 ? void 0 : _l.component
                    }];
                  }
                } else {
                  this.filterQueries = [...this.filterQueries, {
                    prop: propTar,
                    query: queryTar
                  }];
                }
              } else {
                this.filterQueries = [...this.filterQueries, {
                  prop: propTar,
                  query: queryTar
                }];
              }
            }
          } else {
            if (queryTar) {
              if (schemaPartial === null || schemaPartial === void 0 ? void 0 : schemaPartial.option) {
                if ((_m = schemaPartial.option) === null || _m === void 0 ? void 0 : _m.searchType) {
                  if (((_p = (_o = schemaPartial.option) === null || _o === void 0 ? void 0 : _o.searchType) === null || _p === void 0 ? void 0 : _p.component) === "date-range" && ((_q = schemaPartial.option) === null || _q === void 0 ? void 0 : _q.dateFormat)) {
                    this.filterQueries = [...this.filterQueries, {
                      prop: propTar,
                      query: queryTar,
                      optionSearchType: (_s = (_r = schemaPartial.option) === null || _r === void 0 ? void 0 : _r.searchType) === null || _s === void 0 ? void 0 : _s.component,
                      optionDateFormat: (_t = schemaPartial.option) === null || _t === void 0 ? void 0 : _t.dateFormat
                    }];
                  } else {
                    this.filterQueries = [...this.filterQueries, {
                      prop: propTar,
                      query: queryTar,
                      optionSearchType: (_v = (_u = schemaPartial.option) === null || _u === void 0 ? void 0 : _u.searchType) === null || _v === void 0 ? void 0 : _v.component
                    }];
                  }
                  if ((_w = schemaPartial.option) === null || _w === void 0 ? void 0 : _w.dateFormat) {
                    this.filterQueries = [...this.filterQueries, {
                      prop: propTar,
                      query: queryTar,
                      optionSearchType: (_y = (_x = schemaPartial.option) === null || _x === void 0 ? void 0 : _x.searchType) === null || _y === void 0 ? void 0 : _y.component,
                      optionDateFormat: (_z = schemaPartial.option) === null || _z === void 0 ? void 0 : _z.dateFormat
                    }];
                  }
                } else {
                  this.filterQueries = [...this.filterQueries, {
                    prop: propTar,
                    query: queryTar
                  }];
                }
              } else {
                this.filterQueries = [...this.filterQueries, {
                  prop: propTar,
                  query: queryTar
                }];
              }
            }
          }
          if (this.filterQueries.length) {
            this.handlePaginationReset({
              itemCount: this._itemCount,
              currentPage: 0
            });
          }
          this.handleUpdateDataToShow();
        }
      }, 500);
    } catch (err) {
      console.warn(ERROR_MESSAGE2);
    }
  }
  addPropInTemplate(template2, schemaPartial) {
    let spaceIndex = template2.indexOf(" ");
    let tabularwidth = 0;
    if (schemaPartial.option !== void 0) {
      if (schemaPartial.option.width !== void 0) {
        tabularwidth = schemaPartial.option.width;
      }
    }
    switch (template2.substring(0, spaceIndex)) {
      case "<bh-a":
        template2 = template2.substring(0, spaceIndex) + " tabularwidth=" + tabularwidth + template2.substring(spaceIndex);
        break;
      case "<bh-dropdpwn":
        break;
      case "<bh-text-input":
        template2 = template2.substring(0, spaceIndex) + " small=true" + template2.substring(spaceIndex);
        break;
    }
    return template2;
  }
  columnBodyRenderer(schemaPartial, _Components, root, _column, model, _columns, _mouseOverEvent, _mouseLeaveEvent) {
    var _a, _b;
    root["hideTooltip"] = (schemaPartial === null || schemaPartial === void 0 ? void 0 : schemaPartial.hideTooltip) ? schemaPartial === null || schemaPartial === void 0 ? void 0 : schemaPartial.hideTooltip : false;
    if ((_a = schemaPartial === null || schemaPartial === void 0 ? void 0 : schemaPartial.html) === null || _a === void 0 ? void 0 : _a.template) {
      let _template = schemaPartial.html.template;
      (_b = schemaPartial.html.keys) === null || _b === void 0 ? void 0 : _b.forEach((key, index) => {
        _template = this.addPropInTemplate(_template, schemaPartial);
        _template = _template.replace(`{${index}}`, typeof model.item[key] === "object" ? JSON.stringify(model.item[key]) : model.item[key]);
      });
      root.innerHTML = _template;
      root.setAttribute("bh-tabular-list-index", model.item["bh-tabular-list-index"]);
      if (schemaPartial.html.events && schemaPartial.html.events.length) {
        schemaPartial.html.events.forEach((eventDefinition) => {
          var _a2;
          let _func = `if(this.getAttribute('bh-tabular-list-index')!= ${model.item["bh-tabular-list-index"]}) return;` + eventDefinition.func;
          if (_func) {
            (_a2 = schemaPartial.html.keys) === null || _a2 === void 0 ? void 0 : _a2.forEach((key, index) => {
              _func = _func.replace(`{${index}}`, typeof model.item[key] === "object" ? JSON.stringify(model.item[key]) : model.item[key]);
            });
            if (!this.templateEvents[model.index.toString()]) this.templateEvents[model.index.toString()] = {};
            if (!this.templateEvents[model.index.toString()][schemaPartial.prop]) this.templateEvents[model.index.toString()][schemaPartial.prop] = {};
            if (!this.templateEvents[model.index.toString()][schemaPartial.prop][eventDefinition.type]) this.templateEvents[model.index.toString()][schemaPartial.prop][eventDefinition.type] = {};
            root.removeEventListener(`${eventDefinition.type}`, this.templateEvents[model.index.toString()][schemaPartial.prop][eventDefinition.type]["func"]);
            this.templateEvents[model.index.toString()][schemaPartial.prop][eventDefinition.type]["func"] = new Function("event", _func);
            root.addEventListener(`${eventDefinition.type}`, this.templateEvents[model.index.toString()][schemaPartial.prop][eventDefinition.type]["func"]);
          }
          if (!this.templateEvents[model.index.toString()]) this.templateEvents[model.index.toString()] = {};
          if (!this.templateEvents[model.index.toString()][schemaPartial.prop]) this.templateEvents[model.index.toString()][schemaPartial.prop] = {};
          if (!this.templateEvents[model.index.toString()][schemaPartial.prop][eventDefinition.type]) this.templateEvents[model.index.toString()][schemaPartial.prop][eventDefinition.type] = {};
          root.removeEventListener(`${eventDefinition.type}`, this.templateEvents[model.index.toString()][schemaPartial.prop][eventDefinition.type]["appended"]);
          let that = this;
          this.templateEvents[model.index.toString()][schemaPartial.prop][eventDefinition.type]["appended"] = function(event) {
            var _a3;
            if (parseInt(this.getAttribute("bh-tabular-list-index")) !== model.item["bh-tabular-list-index"]) return;
            that.bhEventAppended.emit({
              type: eventDefinition.type,
              event,
              items: ((_a3 = schemaPartial === null || schemaPartial === void 0 ? void 0 : schemaPartial.html) === null || _a3 === void 0 ? void 0 : _a3.keys) ? schemaPartial.html.keys.reduce((item, key) => {
                return Object.assign(Object.assign({}, item), {
                  [key]: model.item[key]
                });
              }, {}) : model.item,
              rowId: model.item["bh-tabular-list-index"],
              itemRaw: model.item
            });
          };
          root.addEventListener(`${eventDefinition.type}`, this.templateEvents[model.index.toString()][schemaPartial.prop][eventDefinition.type]["appended"]);
        });
      }
    } else {
      const innerContent = model.item[schemaPartial.prop];
      root.innerHTML = `${innerContent}`;
      root["withoutTemplate"] = true;
    }
    root.removeEventListener("mouseover", _mouseOverEvent, true);
    root.addEventListener("mouseover", _mouseOverEvent, true);
    root.removeEventListener("mouseleave", _mouseLeaveEvent, true);
    root.addEventListener("mouseleave", _mouseLeaveEvent, true);
  }
  columnSearchTemplates(schemaPartial, Components) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    let columnSearchTemplate = ``;
    const searchPlaceHolder = ((_a = this._option) === null || _a === void 0 ? void 0 : _a.searchMode) === "column" ? this.settingPlaceholer() : "";
    if ((_b = schemaPartial.option) === null || _b === void 0 ? void 0 : _b.searchType) {
      switch ((_d = (_c = schemaPartial.option) === null || _c === void 0 ? void 0 : _c.searchType) === null || _d === void 0 ? void 0 : _d.component) {
        case "dropdown":
          columnSearchTemplate = this.dropdownColumnSearchTemplate(schemaPartial, Components);
          break;
        case "multiselect-dropdown":
          columnSearchTemplate = this.multiselectDropdownColumnSearchTemplate(schemaPartial, Components);
          break;
        case "date-picker":
          columnSearchTemplate = this.datePickerColumnSearchTemplate(schemaPartial, Components);
          break;
        case "date-range":
          columnSearchTemplate = this.dateRangePickerColumnSearchTemplate(schemaPartial, Components);
          break;
      }
    } else {
      if ((_e = schemaPartial.option) === null || _e === void 0 ? void 0 : _e.searchValue) {
        this.filterQueries = [...this.filterQueries, {
          prop: schemaPartial.prop,
          query: ((_f = schemaPartial.option) === null || _f === void 0 ? void 0 : _f.searchValue) ? (_g = schemaPartial.option) === null || _g === void 0 ? void 0 : _g.searchValue : ""
        }];
      }
      columnSearchTemplate = this.textColumnSearchTemplate(schemaPartial, Components);
    }
    setTimeout(() => {
      var _a2, _b2, _c2, _d2, _e2, _f2;
      if ((_a2 = schemaPartial.option) === null || _a2 === void 0 ? void 0 : _a2.isSortable) {
        const targetHeaderTemplateElement = (_c2 = (_b2 = this.el__grid) === null || _b2 === void 0 ? void 0 : _b2.querySelector(`.bh-tabular-list__grid-template__header-with-filter__copy[prop="${schemaPartial.prop}"]`)) === null || _c2 === void 0 ? void 0 : _c2.querySelector(".bh-tabular-list__grid-template__header-with-filter__sort-icon");
        if (targetHeaderTemplateElement) {
          targetHeaderTemplateElement.setAttribute("icon", this.getSortIconFromDirection((_d2 = schemaPartial.option) === null || _d2 === void 0 ? void 0 : _d2.initialSortDirection));
          if ((_e2 = schemaPartial.option) === null || _e2 === void 0 ? void 0 : _e2.initialSortDirection) {
            this.sorter = {
              direction: (_f2 = schemaPartial.option) === null || _f2 === void 0 ? void 0 : _f2.initialSortDirection,
              path: schemaPartial.prop,
              option: schemaPartial.option
            };
            this.handleUpdateDataToShow();
            this.bhEventChange.emit({
              type: "sort",
              payload: this.sorter
            });
          }
        }
        if (targetHeaderTemplateElement && schemaPartial.prop === this.sorter.path) {
          targetHeaderTemplateElement.setAttribute("icon", this.sorter.direction ? this.sorter.direction === "asc" ? "north" : "south" : "");
        }
      }
    });
    return ((_h = this._option) === null || _h === void 0 ? void 0 : _h.searchMode) === "column" && (!this._option.disableSearchProps || !(((_j = this._option.disableSearchProps) === null || _j === void 0 ? void 0 : _j.indexOf(schemaPartial.prop)) >= 0)) ? columnSearchTemplate : `<div class="bh-tabular-list__grid-template__header-with-filter__copy ${((_k = this._option) === null || _k === void 0 ? void 0 : _k.searchMode) === "column" ? "filter-column" : ""} " prop="${schemaPartial.prop}">
						<span>${schemaPartial.label}</span>
						${((_l = schemaPartial.option) === null || _l === void 0 ? void 0 : _l.isSortable) ? `<${Components.icon} class="bh-tabular-list__grid-template__header-with-filter__sort-icon" color="teal" size="small"></${Components.icon}>` : ""}
					</div>
					${searchPlaceHolder}`;
  }
  settingPlaceholer() {
    return `<div class="bh-tabular-list__grid-template__header-with-filter__text-field"></div>`;
  }
  textColumnSearchTemplate(schemaPartial, Components) {
    var _a, _b, _c, _d, _e, _f, _g;
    const value = [...this.filterQueries].find((i) => i.prop == schemaPartial.prop) ? [...this.filterQueries].find((i) => i.prop == schemaPartial.prop).query : "";
    return `<div class="bh-tabular-list__grid-template__header-with-filter__copy filter-column" prop="${schemaPartial.prop}">
            <span style='width: ${this.parseHeaderWidth((_a = schemaPartial === null || schemaPartial === void 0 ? void 0 : schemaPartial.option) === null || _a === void 0 ? void 0 : _a.width, (_b = schemaPartial === null || schemaPartial === void 0 ? void 0 : schemaPartial.option) === null || _b === void 0 ? void 0 : _b.columnWithUnit)}'>${schemaPartial.label}</span>
            ${((_c = schemaPartial.option) === null || _c === void 0 ? void 0 : _c.isSortable) ? `<${Components.icon} class="bh-tabular-list__grid-template__header-with-filter__sort-icon" color="teal" size="small"></${Components.icon}>` : ""}
        </div>
        <div class="bh-tabular-list__grid-template__header-with-filter__text-field">
            <${Components.textInput} focus-on-input="true" maxlength="${((_d = this._option) === null || _d === void 0 ? void 0 : _d.maxSearchLength) ? (_e = this._option) === null || _e === void 0 ? void 0 : _e.maxSearchLength : 40}" value="${((_f = schemaPartial.option) === null || _f === void 0 ? void 0 : _f.searchValue) ? (_g = schemaPartial.option) === null || _g === void 0 ? void 0 : _g.searchValue : value}" start-icon="search" fluid small placeholder="${this.searchByText} ${schemaPartial.label}"></${Components.textInput}>
        </div>`;
  }
  dropdownColumnSearchTemplate(schemaPartial, Components) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    if ((_a = schemaPartial.option) === null || _a === void 0 ? void 0 : _a.searchValue) {
      this.filterQueries = [...this.filterQueries, {
        prop: schemaPartial.prop,
        query: ((_b = schemaPartial.option) === null || _b === void 0 ? void 0 : _b.searchValue) ? (_c = schemaPartial.option) === null || _c === void 0 ? void 0 : _c.searchValue : ""
      }];
      return `<div class="bh-tabular-list__grid-template__header-with-filter__copy filter-column" prop="${schemaPartial.prop}">
                <span style='width: ${this.parseHeaderWidth((_d = schemaPartial === null || schemaPartial === void 0 ? void 0 : schemaPartial.option) === null || _d === void 0 ? void 0 : _d.width, (_e = schemaPartial === null || schemaPartial === void 0 ? void 0 : schemaPartial.option) === null || _e === void 0 ? void 0 : _e.columnWithUnit)}'>${schemaPartial.label}</span>
                ${((_f = schemaPartial.option) === null || _f === void 0 ? void 0 : _f.isSortable) ? `<${Components.icon} class="bh-tabular-list__grid-template__header-with-filter__sort-icon" color="teal" size="small"></${Components.icon}>` : ""}
            </div>
            <div class="bh-tabular-list__grid-template__header-with-filter__text-field">
                <${Components.dropdown} menu-items='${JSON.stringify((_g = schemaPartial.option) === null || _g === void 0 ? void 0 : _g.searchType.values)}' searchable='${((_h = schemaPartial.option) === null || _h === void 0 ? void 0 : _h.isSearchable) ? (_j = schemaPartial.option) === null || _j === void 0 ? void 0 : _j.isSearchable : false}' value="${(_k = schemaPartial.option) === null || _k === void 0 ? void 0 : _k.searchValue}" inline enable-micro-interaction='${this.enableMicroInteraction}' fromtabularlist='true' fluid small placeholder="${this.searchByText} ${schemaPartial.label}"></${Components.dropdown}>
            </div>`;
    } else {
      let dropdownMenuItems = {
        itemGroups: [{
          items: [{
            "label": `${this.dropdownAllText}`,
            "value": ""
          }, ...(_l = schemaPartial.option) === null || _l === void 0 ? void 0 : _l.searchType.values.itemGroups[0].items]
        }]
      };
      return `<div class="bh-tabular-list__grid-template__header-with-filter__copy filter-column" prop="${schemaPartial.prop}">
                <span>${schemaPartial.label}</span>
                ${((_m = schemaPartial.option) === null || _m === void 0 ? void 0 : _m.isSortable) ? `<${Components.icon} class="bh-tabular-list__grid-template__header-with-filter__sort-icon" color="teal" size="small"></${Components.icon}>` : ""}
            </div>
            <div class="bh-tabular-list__grid-template__header-with-filter__text-field">
                <${Components.dropdown} menu-items='${JSON.stringify(dropdownMenuItems)}' searchable='${((_o = schemaPartial.option) === null || _o === void 0 ? void 0 : _o.isSearchable) ? (_p = schemaPartial.option) === null || _p === void 0 ? void 0 : _p.isSearchable : false}' inline enable-micro-interaction='${this.enableMicroInteraction}' fromtabularlist='true' fluid small placeholder="${this.searchByText} ${schemaPartial.label}"></${Components.dropdown}>
            </div>`;
    }
  }
  multiselectDropdownColumnSearchTemplate(schemaPartial, Components) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    if ((_a = schemaPartial.option) === null || _a === void 0 ? void 0 : _a.searchValue) {
      this.filterQueries = [...this.filterQueries, {
        prop: schemaPartial.prop,
        query: ((_b = schemaPartial.option) === null || _b === void 0 ? void 0 : _b.searchValue) ? (_c = schemaPartial.option) === null || _c === void 0 ? void 0 : _c.searchValue : ""
      }];
      return `<div class="bh-tabular-list__grid-template__header-with-filter__copy filter-column" prop="${schemaPartial.prop}">
                <span style='width: ${this.parseHeaderWidth((_d = schemaPartial === null || schemaPartial === void 0 ? void 0 : schemaPartial.option) === null || _d === void 0 ? void 0 : _d.width, (_e = schemaPartial === null || schemaPartial === void 0 ? void 0 : schemaPartial.option) === null || _e === void 0 ? void 0 : _e.columnWithUnit)}'>${schemaPartial.label}</span>
                ${((_f = schemaPartial.option) === null || _f === void 0 ? void 0 : _f.isSortable) ? `<${Components.icon} class="bh-tabular-list__grid-template__header-with-filter__sort-icon" color="teal" size="small"></${Components.icon}>` : ""}
            </div>
            <div class="bh-tabular-list__grid-template__header-with-filter__text-field">
                <${Components.dropdown} enable-micro-interaction='${this.enableMicroInteraction}'selectall="true" multiselect="true" searchable='${(_g = schemaPartial.option) === null || _g === void 0 ? void 0 : _g.isSearchable}' fromtabularlist='true' menu-items='${JSON.stringify((_h = schemaPartial.option) === null || _h === void 0 ? void 0 : _h.searchType.values)}' value="${(_j = schemaPartial.option) === null || _j === void 0 ? void 0 : _j.searchValue}" inline fluid small placeholder="${this.searchByText} ${schemaPartial.label}"></${Components.dropdown}>
            </div>`;
    } else {
      return `<div class="bh-tabular-list__grid-template__header-with-filter__copy filter-column" prop="${schemaPartial.prop}">
                <span style='width: ${this.parseHeaderWidth((_k = schemaPartial === null || schemaPartial === void 0 ? void 0 : schemaPartial.option) === null || _k === void 0 ? void 0 : _k.width, (_l = schemaPartial === null || schemaPartial === void 0 ? void 0 : schemaPartial.option) === null || _l === void 0 ? void 0 : _l.columnWithUnit)}'>${schemaPartial.label}</span>
                ${((_m = schemaPartial.option) === null || _m === void 0 ? void 0 : _m.isSortable) ? `<${Components.icon} class="bh-tabular-list__grid-template__header-with-filter__sort-icon" color="teal" size="small"></${Components.icon}>` : ""}
            </div>
            <div class="bh-tabular-list__grid-template__header-with-filter__text-field">
                <${Components.dropdown} enable-micro-interaction='${this.enableMicroInteraction}' selectall="true"  multiselect="true" searchable='${(_o = schemaPartial.option) === null || _o === void 0 ? void 0 : _o.isSearchable}' fromtabularlist='true' menu-items='${JSON.stringify((_p = schemaPartial.option) === null || _p === void 0 ? void 0 : _p.searchType.values)}' value="${(_q = schemaPartial.option) === null || _q === void 0 ? void 0 : _q.searchValue}" inline fluid small placeholder="${this.searchByText} ${schemaPartial.label}"></${Components.dropdown}>
            </div>`;
    }
  }
  dateRangePickerColumnSearchTemplate(schemaPartial, Components) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var select_range = ((_b = (_a = schemaPartial.option) === null || _a === void 0 ? void 0 : _a.searchValue) === null || _b === void 0 ? void 0 : _b.start) && ((_d = (_c = schemaPartial.option) === null || _c === void 0 ? void 0 : _c.searchValue) === null || _d === void 0 ? void 0 : _d.end) ? `selected-range='{"start":"${(_f = (_e = schemaPartial.option) === null || _e === void 0 ? void 0 : _e.searchValue) === null || _f === void 0 ? void 0 : _f.start}","end":"${(_h = (_g = schemaPartial.option) === null || _g === void 0 ? void 0 : _g.searchValue) === null || _h === void 0 ? void 0 : _h.end}"}'` : "";
    return `<div class="bh-tabular-list__grid-template__header-with-filter__copy filter-column" prop="${schemaPartial.prop}">
        <span style='width: ${this.parseHeaderWidth((_j = schemaPartial === null || schemaPartial === void 0 ? void 0 : schemaPartial.option) === null || _j === void 0 ? void 0 : _j.width, (_k = schemaPartial === null || schemaPartial === void 0 ? void 0 : schemaPartial.option) === null || _k === void 0 ? void 0 : _k.columnWithUnit)}'>${schemaPartial.label}</span>
        ${((_l = schemaPartial.option) === null || _l === void 0 ? void 0 : _l.isSortable) ? `<${Components.icon} class="bh-tabular-list__grid-template__header-with-filter__sort-icon" color="teal" size="small"></${Components.icon}>` : ""}
    </div>
    <div class="bh-tabular-list__grid-template__header-with-filter__text-field">
        <${Components.datetimeRangePicker}
        label=''
        placeholder='${this.placeholderDateTimeRangeFilter}'
        helper-text=''
        id='dateTimeRangePicker'
        date-format=${((_m = schemaPartial.option) === null || _m === void 0 ? void 0 : _m.dateFormat) ? (_o = schemaPartial.option) === null || _o === void 0 ? void 0 : _o.dateFormat : "YYYY/MM/DD"}
        time-format=''
        inline="true"
        show-timepicker='false'
        fromtabularlist='true'
        apply-label='${this.applyLabelDateTimeRangeFilter}'
        reset-label='${this.resetLabelDateTimeRangeFilter}'
        is-single-date-picker='false'
        fluid = 'true'
        small = 'true'
        ${select_range}
    ></${Components.datetimeRangePicker}>
    </div>`;
  }
  datePickerColumnSearchTemplate(schemaPartial, Components) {
    var _a, _b, _c, _d, _e, _f, _g;
    const value = [...this.filterQueries].find((i) => i.prop == schemaPartial.prop) ? [...this.filterQueries].find((i) => i.prop == schemaPartial.prop).query : "";
    return `<div class="bh-tabular-list__grid-template__header-with-filter__copy filter-column" prop="${schemaPartial.prop}">
            <span style='width: ${this.parseHeaderWidth((_a = schemaPartial === null || schemaPartial === void 0 ? void 0 : schemaPartial.option) === null || _a === void 0 ? void 0 : _a.width, (_b = schemaPartial === null || schemaPartial === void 0 ? void 0 : schemaPartial.option) === null || _b === void 0 ? void 0 : _b.columnWithUnit)}'>${schemaPartial.label}</span>
            ${((_c = schemaPartial.option) === null || _c === void 0 ? void 0 : _c.isSortable) ? `<${Components.icon} class="bh-tabular-list__grid-template__header-with-filter__sort-icon" color="teal" size="small"></${Components.icon}>` : ""}
        </div>
        <div class="bh-tabular-list__grid-template__header-with-filter__text-field">
            <${Components.datePicker} value="${value}" disable-user-input="${((_d = schemaPartial.option) === null || _d === void 0 ? void 0 : _d.disableUserInput) ? (_e = schemaPartial.option) === null || _e === void 0 ? void 0 : _e.disableUserInput : false}" today-label="${this.todayLabelDatePicker}" cancel-label="${this.cancelLabelDatePicker}"  date-format="${((_f = schemaPartial.option) === null || _f === void 0 ? void 0 : _f.dateFormat) ? (_g = schemaPartial.option) === null || _g === void 0 ? void 0 : _g.dateFormat : "DD/MM/YYYY"}" label="" disable-helper="true" small="true" inline width="fluid" placeholder="${this.searchByText} ${schemaPartial.label}"></${Components.datePicker}>
        </div>`;
  }
  headerCtas(Components) {
    var _a;
    if (Array.isArray(this._header.ctas)) {
      return ((_a = this._header) === null || _a === void 0 ? void 0 : _a.ctas) && Array.isArray(this._header.ctas) && this._header.ctas.map((cta) => {
        return h(Components.button, {
          class: `bh-tabular-list__header__cta ${this.viewport === "small" ? "hidden" : ""}`,
          isSmall: cta.size === "medium" ? false : true,
          type: cta.type,
          label: cta.label,
          isDisabled: cta.isDisabled,
          isLoading: cta.isLoading,
          leftIcon: cta.leftIcon,
          rightIcon: cta.rightIcon,
          "tooltip-Message": cta.tooltipMessage,
          onClick: () => {
            if (cta.isDisabled) return;
            this.bhEventCtaClick.emit(cta.key || "");
          }
        });
      });
    } else {
      return this._header.ctas && !Array.isArray(this._header.ctas) && h(Components.button, {
        class: `bh-tabular-list__header__cta ${this.viewport === "small" ? "hidden" : ""}`,
        isSmall: true,
        type: this._header.ctas.type,
        label: this._header.ctas.label,
        isDisabled: this._header.ctas.isDisabled,
        isLoading: this._header.ctas.isLoading,
        leftIcon: this._header.ctas.leftIcon,
        rightIcon: this._header.ctas.rightIcon,
        "tooltip-Message": this._header.ctas.tooltipMessage,
        onClick: () => {
          if (this._header.ctas.isDisabled) return;
          this.bhEventCtaClick.emit(this._header.ctas.key || "");
        }
      });
    }
  }
  headerActionMenu(Components) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    return ((_a = this._header) === null || _a === void 0 ? void 0 : _a.actionMenu) && h("div", null, h(Components.actionMenu, {
      class: `bh-tabular-list__action-menu ${this.viewport === "small" ? "hidden" : ""}`,
      isSmall: true,
      disableTooltip: true,
      enableMicroInteraction: this.enableMicroInteraction,
      keyboardFocused: true,
      menuItems: (_b = this._header.actionMenu) === null || _b === void 0 ? void 0 : _b.menuItems,
      menuWidth: (_c = this._header.actionMenu) === null || _c === void 0 ? void 0 : _c.menuWidth,
      isMultiSelect: (_d = this._header.actionMenu) === null || _d === void 0 ? void 0 : _d.isMultiSelect,
      isSearchable: (_e = this._header.actionMenu) === null || _e === void 0 ? void 0 : _e.isSearchable,
      isUnselectable: (_f = this._header.actionMenu) === null || _f === void 0 ? void 0 : _f.isUnselectable,
      placeholder: (_g = this._header.actionMenu) === null || _g === void 0 ? void 0 : _g.placeholder,
      iconOverride: (_h = this._header.actionMenu) === null || _h === void 0 ? void 0 : _h.iconOverride,
      onBhEventSelected: (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.bhEventCtaClick.emit(event.detail.value);
      },
      onBhEventCtaClick: (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.bhEventCtaClick.emit(event.detail);
      }
    }), h(Components.actionMenu, {
      class: `bh-tabular-list__action-menu ${this.viewport === "small" ? "" : "hidden"}`,
      isSmall: true,
      "enable-micro-interaction": this.enableMicroInteraction,
      disableTooltip: true,
      keyboardFocused: true,
      // menuItems={
      //     headerCtaProp?.length > 0
      //         ? {
      //             itemGroups: [
      //                 { items: headerCtaProp, divider: false },
      //                 ...this._header.actionMenu?.menuItems
      //                     ?.itemGroups,
      //             ],
      //             ctas: this._header.actionMenu?.menuItems?.ctas,
      //         }
      //         : this._header.actionMenu?.menuItems
      // }
      menuWidth: (_j = this._header.actionMenu) === null || _j === void 0 ? void 0 : _j.menuWidth,
      isMultiSelect: (_k = this._header.actionMenu) === null || _k === void 0 ? void 0 : _k.isMultiSelect,
      isSearchable: (_l = this._header.actionMenu) === null || _l === void 0 ? void 0 : _l.isSearchable,
      isUnselectable: (_m = this._header.actionMenu) === null || _m === void 0 ? void 0 : _m.isUnselectable,
      placeholder: (_o = this._header.actionMenu) === null || _o === void 0 ? void 0 : _o.placeholder,
      iconOverride: (_p = this._header.actionMenu) === null || _p === void 0 ? void 0 : _p.iconOverride,
      onBhEventSelected: (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.bhEventCtaClick.emit(event.detail.value);
      },
      onBhEventCtaClick: (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.bhEventCtaClick.emit(event.detail);
      }
    }));
  }
  headerSearch(Components) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return ((_a = this._option) === null || _a === void 0 ? void 0 : _a.searchMode) === "whole" && h(Components.search, {
      class: `bh-tabular-list__search`,
      search: '[{"type": "ghost", "key": "search-ghost"}]',
      placeholder: (_c = (_b = this._header) === null || _b === void 0 ? void 0 : _b.search) === null || _c === void 0 ? void 0 : _c.placeholder,
      data: (_d = this._payload) === null || _d === void 0 ? void 0 : _d.data,
      value: this.searchQuery,
      searchParams: (_f = (_e = this._header) === null || _e === void 0 ? void 0 : _e.search) === null || _f === void 0 ? void 0 : _f.searchParams,
      isSmall: true,
      shouldTrim: true,
      disableFuzzySearch: (_g = this._option) === null || _g === void 0 ? void 0 : _g.disableFuzzySearch,
      fluid: true,
      disablePointerEvent: true,
      onQuery: (event) => {
        this.searchQuery = event.detail;
        this.bhEventChange.emit({
          type: "search",
          payload: {
            label: "_filter-query--all",
            prop: "_filter-query--all",
            query: this.searchQuery
          }
        });
      },
      maxlength: (_h = this._option) === null || _h === void 0 ? void 0 : _h.maxSearchLength
    });
  }
  columnFooterRenderer(_schemaPartial) {
    return "";
  }
  handlePaginationChange(arg) {
    try {
      this._itemCount = arg.itemCount;
      this.handlePaginationReset(arg);
      this.handleUpdateDataToShow();
    } catch (err) {
      console.warn(ERROR_MESSAGE2);
    }
  }
  handlePaginationReset(arg) {
    var _a, _b, _c, _d;
    try {
      if (((_a = this._payload) === null || _a === void 0 ? void 0 : _a.data.length) < arg.itemCount) {
        let grid = document.getElementById(`${this.id}__vaadin-grid`);
        if (grid) {
          grid.style.height = "auto";
        }
      } else {
        let grid = document.getElementById(`${this.id}__vaadin-grid`);
        if (grid) {
          this.el__grid.scrollToIndex(0);
        }
      }
      if (!Array.isArray((_b = this._payload) === null || _b === void 0 ? void 0 : _b.data)) return;
      const itemCount = arg.itemCount || 0;
      const currentPage = arg.currentPage || 0;
      this.dataIndexStart = ((_c = this._option) === null || _c === void 0 ? void 0 : _c.paginationMode) === "hidden" ? 0 : itemCount * currentPage;
      this.dataIndexEnd = ((_d = this._option) === null || _d === void 0 ? void 0 : _d.paginationMode) === "hidden" ? this._payload.length : itemCount * (currentPage + 1);
    } catch (err) {
      console.warn(ERROR_MESSAGE2);
    }
  }
  filterWithWholeSearch() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    try {
      if ((_a = this._option) === null || _a === void 0 ? void 0 : _a.clearSearchResults) {
        this.filterQueries = [];
        this.searchQuery = "";
      } else {
        if (this.searchQuery && this.searchQuery != "") {
          const params = ((_c = (_b = this._header) === null || _b === void 0 ? void 0 : _b.search) === null || _c === void 0 ? void 0 : _c.searchParams) || Object.keys((_d = this._payload) === null || _d === void 0 ? void 0 : _d.data[0]);
          if (((_e = this._option) === null || _e === void 0 ? void 0 : _e.disableFuzzySearch) && ((_f = this._payload) === null || _f === void 0 ? void 0 : _f.data)) {
            this.searchResults = (_h = (_g = this._payload) === null || _g === void 0 ? void 0 : _g.data) === null || _h === void 0 ? void 0 : _h.filter((item) => {
              for (let key of params) {
                if (item[key] && this.searchQuery && String(item[key]).toLowerCase().indexOf(this.searchQuery.toLowerCase()) >= 0) {
                  return true;
                }
              }
            });
          } else {
            let searcher = new FuzzySearch(this._payload.data, params);
            this.searchResults = searcher.search(this.searchQuery);
          }
        }
      }
    } catch (err) {
      console.warn(ERROR_MESSAGE2);
    }
  }
  handleLinkClick(event) {
    var _a, _b, _c, _d;
    try {
      const item = (_a = this.el__grid.getEventContext(event)) === null || _a === void 0 ? void 0 : _a.item;
      if (item && ((_b = this._option) === null || _b === void 0 ? void 0 : _b.link) && ((_c = this._option) === null || _c === void 0 ? void 0 : _c.link.prop)) {
        const href = item[this._option.link.prop];
        if (!href) return;
        window.open(href, ((_d = this._option.link) === null || _d === void 0 ? void 0 : _d.target) || "_self");
      }
    } catch (err) {
      console.warn(ERROR_MESSAGE2);
    }
  }
  componentShouldUpdate() {
    if (this.refresh) {
      this.paginationRefresh = true;
      this.isFirstTimeToRender = true;
      this.refresh = false;
    }
  }
  setSelectedItems() {
    var _a, _b;
    try {
      if (this._selectedItems && ((_a = this._selectedItems["value"]) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        const values = this._selectedItems["value"];
        this._payload.data = this._payload.data.map((item) => {
          if (values.find((iterator) => iterator === item["bh-tabular-list-index"])) {
            item["$rowSelected"] = true;
          }
          return item;
        });
        this.el__grid.selectedItems = this._payload.data.filter((item) => item["$rowSelected"]);
      } else if (this._selectedItems && ((_b = this._selectedItems["value"]) === null || _b === void 0 ? void 0 : _b.length) === 0) {
        this.el__grid.selectedItems = [];
      }
    } catch (e) {
      console.warn(ERROR_MESSAGE2);
    }
  }
  frozenFirstColumn(i, schemaPartial) {
    var _a, _b;
    if (i === 0) {
      return ((_a = this._option) === null || _a === void 0 ? void 0 : _a.freezeFirstColumn) ? (_b = this._option) === null || _b === void 0 ? void 0 : _b.freezeFirstColumn : false;
    } else {
      return (schemaPartial === null || schemaPartial === void 0 ? void 0 : schemaPartial.frozen) ? schemaPartial === null || schemaPartial === void 0 ? void 0 : schemaPartial.frozen : false;
    }
  }
  frozenLastColumn(i) {
    var _a, _b, _c, _d;
    if (!!this._option && ((_a = this._option) === null || _a === void 0 ? void 0 : _a.actionMenu)) {
      return false;
    } else {
      if (!!this._schema && ((_b = this._schema) === null || _b === void 0 ? void 0 : _b.length) - 1 === i) {
        return ((_c = this._option) === null || _c === void 0 ? void 0 : _c.freezeLastColumn) ? (_d = this._option) === null || _d === void 0 ? void 0 : _d.freezeLastColumn : false;
      }
      return false;
    }
  }
  headerCollapsed(_Components) {
    const iconClasses = ["bh-inline-dropdown__icon", "typography--icon-medium", "motion--normal", "bh-collapse-icon"];
    return h("div", {
      class: "bh-collapse-container",
      onClick: () => {
        this.toggleCollapse();
      }
    }, this.isCollapsed ? h("i", {
      class: iconClasses.join(" ")
    }, "expand_more") : h("i", {
      class: iconClasses.join(" ")
    }, "expand_less"));
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
    const prefix = this.host.tagName.toLowerCase().replace(components.tabularList.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
    let headerData = [];
    return h(Host, {
      key: "777222ac0523d940c8d64923d49fc735182895bd",
      class: "bh-tabular-list",
      id: this.id
    }, h("div", {
      key: "561d3ebd0f67e2abc9d862363112b260fc3a1759",
      class: "bh-tabular-list__container",
      ref: (el) => {
        this.el__container = el;
      }
    }, this._header && h("div", {
      class: "bh-tabular-list__header"
    }, ((_a = this._header) === null || _a === void 0 ? void 0 : _a.label) && h("span", {
      class: "bh-tabular-list__header__title typography--subtitle-medium"
    }, this._header.label), h("div", {
      class: "bh-tabular-list__buttons"
    }, h("div", {
      class: "bh-tabular-list__header__cta-group"
    }, Object.keys(this._header).forEach((el) => {
      var _a2;
      if (!this.isCollapsed && el === "actionMenu") {
        headerData.push(this.headerActionMenu(Components));
      }
      if (!this.isCollapsed && el === "search") {
        headerData.push(this.headerSearch(Components));
      }
      if (!this.isCollapsed && el === "ctas") {
        headerData.push(this.headerCtas(Components));
      }
      if (el === "isCollapsed" && ((_a2 = this._header) === null || _a2 === void 0 ? void 0 : _a2.isCollapsed)) {
        headerData.push(this.headerCollapsed(Components));
      }
    }), headerData))), h("div", {
      key: "4b407cb61f3618514eb737db6065d1ab7da03344",
      class: `${!this.isCollapsed ? "" : "isCollapsed"}`
    }, h("div", {
      key: "7b06b370a81692200f1f254310d1c559ea25182f",
      class: `${"bh-tabular-list__table "}` + this.extraClass,
      onContextMenu: (event) => {
        var _a2;
        if (!((_a2 = this._option) === null || _a2 === void 0 ? void 0 : _a2.contextMenu)) return;
        this.isContextMenuShown = true;
        this.el__contextMenuContainer.style.left = `${event.clientX + 160 > window.innerWidth ? event.clientX - 160 : event.clientX}px`;
        this.el__contextMenuContainer.style.top = `${event.clientY}px`;
        event.preventDefault();
        const item = this.el__grid.getEventContext(event).item;
        this.el__grid.selectedItems = this.el__grid.selectedItems[0] === item ? [] : [item];
      },
      onTouchStart: (event) => {
        var _a2;
        if (!((_a2 = this._option) === null || _a2 === void 0 ? void 0 : _a2.contextMenu)) return;
        this.contextMenuTimeout = setTimeout(() => {
          this.isContextMenuShown = true;
          this.el__contextMenuContainer.style.left = `${event.touches[0].clientX}px`;
          this.el__contextMenuContainer.style.top = `${event.touches[0].clientY}px`;
          event.preventDefault();
        }, 750);
      },
      onTouchEnd: () => {
        var _a2;
        if (!((_a2 = this._option) === null || _a2 === void 0 ? void 0 : _a2.contextMenu)) return;
        clearTimeout(this.contextMenuTimeout);
      }
    }, h("vaadin-grid", {
      key: "2dc7cbb98da3b57c126cda027aef8c653689db56",
      id: `${this.id}__vaadin-grid`,
      items: this.dataToShow,
      "all-rows-visible": ((_b = this._option) === null || _b === void 0 ? void 0 : _b.allRowsVisible) || true,
      ref: (el) => {
        this.el__grid = el;
      },
      spacing: ((_c = this._option) === null || _c === void 0 ? void 0 : _c.spacing) || "medium",
      "column-reordering-allowed": !((_d = this._option) === null || _d === void 0 ? void 0 : _d.columnReorderingDisabled)
    }, !!this._option && ((_e = this._option) === null || _e === void 0 ? void 0 : _e.isMultiRowsSelectable) && h("vaadin-grid-selection-column", {
      ref: (el) => {
        this.el__grid_column = el;
      },
      path: "selectionColumn",
      frozen: ((_f = this._option) === null || _f === void 0 ? void 0 : _f.freezeFirstColumn) ? (_g = this._option) === null || _g === void 0 ? void 0 : _g.freezeFirstColumn : false
    }), this._schema && this._schema.map((schemaPartial, i) => {
      var _a2, _b2;
      return h("vaadin-grid-column", {
        path: schemaPartial.prop,
        header: schemaPartial.label,
        "text-align": schemaPartial.textAlign,
        "auto-width": schemaPartial.autoWidth,
        frozen: this.frozenFirstColumn(i, schemaPartial),
        "frozen-to-end": this.frozenLastColumn(i),
        hidden: schemaPartial.hidden,
        resizable: schemaPartial.resizable == void 0 || schemaPartial.resizable ? true : false,
        width: this.parseWidth((_a2 = schemaPartial === null || schemaPartial === void 0 ? void 0 : schemaPartial.option) === null || _a2 === void 0 ? void 0 : _a2.width, (_b2 = schemaPartial === null || schemaPartial === void 0 ? void 0 : schemaPartial.option) === null || _b2 === void 0 ? void 0 : _b2.columnWithUnit)
      });
    }), ((_h = this._option) === null || _h === void 0 ? void 0 : _h.actionMenu) && h("vaadin-grid-column", {
      header: "",
      path: "actionMenuColumn",
      "frozen-to-end": ((_j = this._option) === null || _j === void 0 ? void 0 : _j.freezeLastColumn) ? (_k = this._option) === null || _k === void 0 ? void 0 : _k.freezeLastColumn : false
    })), this.isLoading && h("div", {
      class: "bh-tabular-list__loading"
    }, h("div", {
      class: "overlay"
    }), h(Components.spinner, {
      size: "medium",
      position: "inline"
    })), h("div", {
      key: "dcc3f50c5b08a59564b7c371a026df45decb6a49",
      class: `bh-tabular-list__context-menu-container ${this.isContextMenuShown ? "" : "hidden"}`,
      ref: (el) => {
        this.el__contextMenuContainer = el;
      }
    }, h(Components.menu, {
      key: "c2bc344b00a08db9a6e4656bbeb40d83e7596d03",
      menuItems: JSON.stringify((_m = (_l = this._option) === null || _l === void 0 ? void 0 : _l.contextMenu) === null || _m === void 0 ? void 0 : _m.menuItems),
      menuHeight: "small",
      menuWidth: "small",
      onBhEventSelected: (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.bhEventSelected.emit({
          type: "context",
          payload: event.detail,
          item: this.el__grid.selectedItems[0]
        });
        this.isContextMenuShown = false;
      },
      onBhEventChange: (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.bhEventChange.emit({
          type: "context",
          payload: event.detail,
          item: this.el__grid.selectedItems[0]
        });
      },
      onBhEventCtaClick: (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.bhEventCtaClick.emit({
          type: "context",
          payload: event.detail,
          item: this.el__grid.selectedItems[0]
        });
        this.isContextMenuShown = false;
      }
    }))), h("div", {
      key: "d270254c319bc56ea077931d5ab34da5d04996f5",
      class: `bh-tabular-list__tooltip`,
      ref: (el) => {
        this.el__tooltip = el;
      }
    }, h("span", {
      key: "5f988de94eaa7ff5a2acf54e22ab55c73d33a820",
      class: "typography--body-small-semi-bold",
      ref: (el) => {
        this.el__tooltipMessage = el;
      }
    })), h("div", {
      key: "90fa6e3b9c21ddb9b013e419a8a194c3518a0f8f",
      class: "bh-tabular-list__tooltip__ghost-element_tabularlist typography--body-medium",
      ref: (el) => {
        this.el__tooltipGhostElement = el;
      }
    }), ((_o = this.dataToShow) === null || _o === void 0 ? void 0 : _o.length) === 0 && (!this.customHtmlNoDataAvailable ? h("div", {
      class: "bh-tabular-list__empty-state"
    }, h("span", {
      class: "typography--body-medium typography--color-secondary"
    }, this.isLoading ? "" : this.noDataAvailable ? this.noDataAvailable : "")) : h("div", {
      class: "bh-tabular-list__empty-state"
    }, h("slot", {
      name: "table-empty-state"
    }))), (((_p = this._option) === null || _p === void 0 ? void 0 : _p.paginationMode) === "shown" || (!((_q = this._option) === null || _q === void 0 ? void 0 : _q.paginationMode) || ((_r = this._option) === null || _r === void 0 ? void 0 : _r.paginationMode) === "auto") && ((_s = this._payload) === null || _s === void 0 ? void 0 : _s.length) > Math.min.apply(Math, this.paginationOptions)) && this._totalItemCount > 0 && h("div", {
      class: "bh-tabular-list__pagination"
    }, h(Components.pagination, {
      id: "sb--pagination",
      itemCountOptions: this.paginationOptions,
      "total-item-count": this._totalItemCount,
      manualPageChange: this.manualPageChange,
      "item-per-page-text": this.itemPerPageText,
      enableMicroInteraction: this.enableMicroInteraction,
      itemCount: this._itemCount,
      customUpdate: this.itemCount > 0 ? true : false,
      pagePreSelect: this._currentPage + 1,
      onBhEventChange: (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.handlePaginationChange(event.detail);
        this.el__tooltip.style.top = "unset";
        this.el__tooltip.style.left = "unset";
        this.bhEventChange.emit({
          type: "pagination",
          payload: event.detail
        });
      },
      onBhEventSelected: (event) => {
        event.preventDefault();
        event.stopPropagation();
      }
    })))));
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "option": ["watchOption"],
      "header": ["watchHeader"],
      "schema": ["watchSchema"],
      "payload": ["watchPayload"],
      "selectedItems": ["watchSelectedItems"],
      "customSelectedItems": ["watchCustomSelectedItems"],
      "id": ["watchIdChange"],
      "overridecss": ["watchOverrideCss"],
      "itemCount": ["watchItemCount"],
      "clearFilter": ["clearFilterWatch"]
    };
  }
};
BhTabularList.style = BhTabularListStyle0;
var bhTextInputCss = ".bh-text-input{border:none;padding:var(--spacing-padding-none);margin:var(--spacing-margin-none);font:inherit;cursor:default;outline:none;-webkit-appearance:none;-moz-appearance:none;-o-appearance:none;appearance:none;display:flex;flex-direction:column;align-items:flex-start}input:not([type='range']){overflow:hidden}input[type='text'],input[type='number'],input[type='password'],input[type='email'],input[type='tel']{-webkit-appearance:none;-moz-appearance:none;appearance:none}input::placeholder{color:var(--color-text-label-placeholder)}input::-webkit-input-placeholder{color:var(--color-text-label-placeholder)}input::-moz-placeholder{color:var(--color-text-label-placeholder)}input:-ms-input-placeholder{color:var(--color-text-label-placeholder)}input:-moz-placeholder{color:var(--color-text-label-placeholder)}input::-moz-placeholder{opacity:1}.bh-text-input__container{display:flex;flex-direction:row;align-items:center;position:relative}.bh-text-input__container.flex{width:100%}.bh-text-input__label{color:var(--color-text-common-primary)}.bh-text-input__required:after{color:var(--color-text-label-critical);content:' *'}.bh-text-input__label--disabled.bh-text-input__required:after{color:var(--color-text-label-disabled-default)}.bh-text-input__label--disabled{color:var(--color-text-label-disabled-default)}.bh-text-input__end-icon{padding-left:var(--spacing-padding-small);align-self:center;color:inherit;display:flex;position:relative;left:-40px;margin-right:-30px}.bh-text-input__start-icon,.bh-text-input__start-icon.rounded.small{padding-left:var(--spacing-padding-small);align-self:center;color:inherit;display:flex;position:relative;margin-right:-30px}.bh-text-input__start-icon.rounded{padding-left:var(--spacing-padding-medium);margin-right:-38px}.bh-text-input__icon--error{color:var(--color-text-label-error)}.bh-text-input__unit{display:flex;justify-content:flex-end;position:absolute;right:12px;width:60px;padding-left:var(--spacing-padding-small);color:var(--color-text-label-placeholder)}.bh-text-input__unit--disabled{color:var(--color-text-label-disabled-default)}.bh-text-input__unit--error{color:var(--color-text-label-error)}.bh-text-input__input{box-sizing:border-box;width:280px;padding:calc(var(--spacing-padding-small) - 1px) var(--spacing-padding-small);margin-top:var(--spacing-margin-xxsmall);margin-bottom:var(--spacing-margin-xxsmall);border-radius:var(--effect-border-radius-medium);border-style:solid;border-width:var(--effect-border-width-regular);border-color:var(--color-border-form-default);background-color:var(--color-fill-common-secondary);color:var(--color-text-common-primary);cursor:text}.bh-text-input__input.small{padding:calc(var(--spacing-padding-xsmall) - 1px)\n    var(--spacing-padding-small)}.bh-text-input__input.rounded{border-radius:100px}.bh-text-input__input:hover{border-color:var(--color-border-form-hover);cursor:text}.bh-text-input__input:focus{outline:none;border-color:var(--color-border-form-focused);box-shadow:var(--effect-drop-shadow-focus-primary)}.bh-text-input__input:focus:not(:focus-visible){outline:none;border-color:unset;box-shadow:none}.bh-text-input__input--fluid{width:100%;}.bh-text-input__container--fluid{width:100%}.bh-text-input__input--disabled,.bh-text-input__input--disabled:hover{border-color:var(--color-border-form-disabled);background-color:var(--color-fill-form-disabled);color:var(--color-text-label-disabled-default);-webkit-text-fill-color:var(\n    --color-text-label-disabled-default\n  );opacity:1;cursor:not-allowed}.bh-text-input__input--disabled::placeholder .bh-text-input__input--disabled::placeholder{color:var(--color-text-label-disabled)}.bh-text-input__input--disabled::-webkit-input-placeholder{color:var(--color-text-label-disabled)}.bh-text-input__input--disabled::-moz-placeholder{color:var(--color-text-label-disabled)}.bh-text-input__input--disabled:-ms-input-placeholder{color:var(--color-text-label-disabled)}.bh-text-input__input--disabled:-moz-placeholder{color:var(--color-text-label-disabled)}.bh-text-input__input--error,.bh-text-input:invalid{background-color:var(--color-fill-form-error);border-color:var(--color-border-form-error)}.bh-text-input__input--read-only,.bh-text-input__input--read-only:hover,.bh-text-input__input--read-only:focus{border:var(--effect-border-width-regular) dashed\n    var(--color-border-form-default);box-shadow:none;cursor:default}.bh-text-input__input--read-only:focus:not(:focus-visible){border:var(--effect-border-width-regular) dashed\n    var(--color-border-form-default);box-shadow:none;cursor:default}.bh-text-input__input--error::placeholder{border-color:var(--color-border-form-error);color:var(--color-border-form-error)}.bh-text-input__input--error:hover{border-color:var(--color-border-form-error-hover)}.bh-text-input__input--error:focus{box-shadow:var(--effect-drop-shadow-focus-error);border-color:var(--color-border-form-error)}.bh-text-input__input--error:focus:not(:focus-visible){box-shadow:none;border-color:unset}.bh-text-input__input-withUnit{padding-right:25px}.bh-text-input__input--read-only.bh-text-input__input--inline-editing{border:var(--effect-border-width-regular) solid var(--color-Fill-Control-Disabled);transition:none !important;background-color:transparent}.bh-text-input__input--read-only.bh-text-input__input--inline-editing:hover{border:var(--effect-border-width-regular) solid var(--color-border-form-hover);background-color:var(--color-Fill-Menu-Highlighted);cursor:pointer}.bh-text-input__input--read-only.bh-text-input__input--inline-editing{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bh-text-input__multichipinput{flex:1 1 auto;width:100%;padding:calc(var(--spacing-padding-xsmall)) var(--spacing-padding-xsmall);border-style:none;background-color:var(--color-fill-common-secondary);color:var(--color-text-common-primary);cursor:text}.bh-text-input__multichipinput:focus{outline:none}";
var BhTextInputStyle0 = bhTextInputCss;
var BhTextInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventInput = createEvent(this, "bhEventInput", 7);
    this.bhEventChange = createEvent(this, "bhEventChange", 7);
    this.bhEventBlur = createEvent(this, "bhEventBlur", 7);
    this.type = "text";
    this.isMultiChipSearch = false;
    this.label = void 0;
    this.isRequired = false;
    this.placeholder = void 0;
    this.message = void 0;
    this.isFluid = false;
    this.isError = false;
    this.isDisabled = false;
    this.startIcon = void 0;
    this.endIcon = void 0;
    this.stopClickPropagation = true;
    this.maxLength = 40;
    this.pattern = void 0;
    this.value = "";
    this.isSmall = false;
    this.isRounded = false;
    this.isReadOnly = false;
    this.focusOnInput = false;
    this.unit = void 0;
    this.isSmallWidth = false;
    this.onFocus = void 0;
    this.isInlineEditing = false;
    this.hideTooltip = false;
    this.isEllipses = false;
    this.isInitializedAsReadOnly = void 0;
  }
  componentWillLoad() {
    this.isInitializedAsReadOnly = this.isReadOnly;
  }
  renderIconColor() {
    if (this.isError) {
      return "var(--color-text-label-error)";
    } else if (this.isDisabled) {
      return "var(--color-text-label-disabled-default)";
    } else {
      return "primary";
    }
  }
  handleChange(e) {
    var el = e.target;
    e.preventDefault();
    this.value = el.value;
    this.bhEventChange.emit(el.value);
  }
  handleBlur(e) {
    var el = e.target;
    e.preventDefault();
    this.value = el.value;
    this.bhEventBlur.emit(el.value);
    if (this.isInlineEditing && this.isInitializedAsReadOnly) {
      this.editTextArea(e, true);
      this.hideTooltip = false;
    }
  }
  editTextArea(e, readonly) {
    if (this.focusOnInput) {
      setTimeout(() => {
        var _a;
        (_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.focus();
      }, 1);
      return false;
    } else {
      if (this.stopClickPropagation) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (this.isInlineEditing && this.isInitializedAsReadOnly) {
        this.isReadOnly = readonly;
        this.hideTooltip = true;
      }
    }
  }
  handleInput(e) {
    var el = e.target;
    e.preventDefault();
    this.value = el.value;
    this.bhEventInput.emit(el.value);
    this.bhEventChange.emit(el.value);
  }
  setInputLeftPadding() {
    if (this.isRounded) {
      return this.startIcon && this.isSmall ? "34px" : "20px";
    } else if (this.startIcon) {
      return "34px";
    }
  }
  setInputRightPadding() {
    if (this.endIcon) {
      return "42px";
    } else {
      return "none";
    }
  }
  handelTooltip() {
    if (!(this.isInlineEditing && this.isInitializedAsReadOnly)) {
      return true;
    }
    if (!this.value) {
      return false;
    }
    const input = this.host.querySelector(".bh-text-input__input");
    if (input) {
      this.isEllipses = input.scrollWidth > input.offsetWidth;
      return this.hideTooltip || !this.isEllipses;
    }
    return false;
  }
  render() {
    const prefix = this.host.tagName.toLowerCase().replace(components.textInput.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
    const labelClasses = ["bh-text-input__label", "typography--label-small"];
    const containerClasses = ["bh-text-input__container"];
    const startIconClasses = ["bh-text-input__start-icon"];
    const endIconClasses = ["bh-text-input__end-icon", "typography--icon-small"];
    const unitClasses = ["bh-text-input__unit", "typography--body-small"];
    const inputClasses = ["bh-text-input__input", "typography--body-medium", "motion--normal"];
    const multichipinputClasses = ["bh-text-input__multichipinput"];
    if (this.isSmallWidth) {
      containerClasses.push("flex");
    }
    if (this.isRequired) {
      labelClasses.push("bh-text-input__required");
    }
    if (this.isFluid) {
      inputClasses.push("bh-text-input__input--fluid");
      containerClasses.push("bh-text-input__container--fluid");
    }
    if (this.isDisabled) {
      labelClasses.push("bh-text-input__label--disabled");
      inputClasses.push("bh-text-input__input--disabled");
      unitClasses.push("bh-text-input__unit--disabled");
    }
    if (this.isError) {
      inputClasses.push("bh-text-input__input--error");
      unitClasses.push("bh-text-input__unit--error");
    }
    if (this.isReadOnly) {
      inputClasses.push("bh-text-input__input--read-only");
    }
    if (this.isInlineEditing) {
      inputClasses.push("bh-text-input__input--inline-editing");
    }
    if (this.isSmall) {
      containerClasses.push("small");
      inputClasses.push("small");
      startIconClasses.push("small");
    }
    if (this.isRounded) {
      containerClasses.push("rounded");
      inputClasses.push("rounded");
      startIconClasses.push("rounded");
    }
    if (this.startIcon) {
      containerClasses.push("start-icon");
    }
    if (this.unit) {
      inputClasses.push("bh-text-input__input-withUnit");
    }
    return h(Host, {
      key: "10c218b3feedf815afe35a58d91bb60bf4e6bfc6",
      class: this.isMultiChipSearch ? "" : "bh-text-input"
    }, this.label && h("label", {
      class: labelClasses.join(" ")
    }, this.label), h("div", {
      key: "6dd53d4c3ae37fd7c311349a85a86eb61bb7a4e2",
      class: containerClasses.join(" ")
    }, this.startIcon && h(Components.icon, {
      icon: this.startIcon,
      size: "small",
      color: this.renderIconColor(),
      class: startIconClasses.join(" ")
    }), this.isInlineEditing && h(Components.tooltip, {
      message: this.value,
      hide: this.handelTooltip(),
      inline: "true"
    }, h("input", {
      style: {
        // Sets the allowance for the startIcon at the beginning of the input
        paddingLeft: this.setInputLeftPadding()
      },
      class: inputClasses.join(" "),
      type: this.type,
      placeholder: this.placeholder,
      disabled: this.isDisabled,
      readonly: this.isReadOnly,
      maxlength: this.maxLength,
      pattern: this.pattern,
      value: this.value,
      onFocus: this.onFocus,
      onBlur: (event) => {
        this.handleBlur(event);
      },
      onChange: (event) => {
        this.handleChange(event);
      },
      onInput: (event) => {
        this.handleInput(event);
      },
      onClick: (event) => {
        this.editTextArea(event, false);
      }
    })), !this.isInlineEditing && h("input", {
      style: {
        // Sets the allowance for the startIcon at the beginning of the input
        paddingLeft: this.setInputLeftPadding(),
        paddingRight: this.setInputRightPadding()
      },
      class: this.isMultiChipSearch ? multichipinputClasses.join(" ") : inputClasses.join(" "),
      type: this.type,
      ref: (el) => this.inputElement = el,
      placeholder: this.placeholder,
      disabled: this.isDisabled,
      readonly: this.isReadOnly,
      maxlength: this.maxLength,
      pattern: this.pattern,
      value: this.value,
      onFocus: this.onFocus,
      onBlur: (event) => {
        this.handleBlur(event);
      },
      onChange: (event) => {
        this.handleChange(event);
      },
      onInput: (event) => {
        this.handleInput(event);
      },
      onClick: (event) => {
        this.editTextArea(event, false);
      }
    }), this.unit && h("span", {
      class: unitClasses.join(" ")
    }, this.unit), this.endIcon && h(Components.icon, {
      icon: this.endIcon,
      size: "small",
      color: this.renderIconColor(),
      class: endIconClasses.join(" ")
    })), this.message && h(Components.formMessage, {
      message: this.message,
      isError: this.isError,
      isDisabled: this.isDisabled
    }));
  }
  get host() {
    return getElement(this);
  }
};
BhTextInput.style = BhTextInputStyle0;
var bhTitleWrapperCss = ".bh-title-wrapper__container{display:flex;justify-content:space-between;align-items:flex-start}.bh-title-wrapper__header-copy{color:var(--color-text-common-brand);margin:0 0 var(--spacing-margin-xxsmall)}.bh-title-wrapper__header-copy.no-subtext{margin-bottom:0}.bh-title-wrapper__subtext-copy{color:var(--color-text-common-secondary)}.bh-title-wrapper__ctas{display:flex;align-items:flex-start}.bh-title-wrapper__cta--primary,.bh-title-wrapper__cta--secondary,.bh-title-wrapper__cta--ghost{margin-left:var(--spacing-margin-small)}.bh-title-wrapper__header-actions__slot-container{display:flex;align-items:center}.bh-title-wrapper__header-actions__slot-container bh-button-group{justify-content:flex-end;align-items:center}.bh-title-wrapper__header-actions__slot-container bh-action-menu{display:block;height:36px;margin-right:var(--spacing-margin-xsmall)}.bh-title-wrapper__header-actions__slot-container__supplelemental-action-menu.hidden{display:none}@media (max-width: 599px){.bh-title-wrapper__cta--primary,.bh-title-wrapper__cta--secondary{display:none}}";
var BhTitleWrapperStyle0 = bhTitleWrapperCss;
var BhTitleWrapper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventCtaClick = createEvent(this, "bhEventCtaClick", 7);
    this.type = "title";
    this.header = void 0;
    this.subtext = void 0;
    this.cta = void 0;
    this._cta = void 0;
    this.breakpoint = void 0;
    this.withHeaderActionSlot = false;
  }
  handleResize() {
    this.breakpoint = getBreakpoint();
  }
  watchCta() {
    this._cta = typeof this.cta === "string" ? JSON.parse(this.cta) : this.cta;
  }
  componentWillLoad() {
    this._cta = typeof this.cta === "string" ? JSON.parse(this.cta) : this.cta;
    this.breakpoint = getBreakpoint();
  }
  componentDidLoad() {
    var _a, _b, _c;
    const prefix = this.host.tagName.toLowerCase().replace(components.titleWrapper.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
    if (this.withHeaderActionSlot) {
      const headerActionsSlot = (_a = this.host) === null || _a === void 0 ? void 0 : _a.querySelector('[slot="bh-title-wrapper__header-actions"]');
      if ((headerActionsSlot === null || headerActionsSlot === void 0 ? void 0 : headerActionsSlot.querySelector(Components.button)) && !(headerActionsSlot === null || headerActionsSlot === void 0 ? void 0 : headerActionsSlot.querySelector(Components.actionMenu))) {
        const element__buttons = headerActionsSlot.querySelectorAll(Components.button);
        const element__supplemental_action_menu = (_b = this.host) === null || _b === void 0 ? void 0 : _b.querySelector(".bh-title-wrapper__header-actions__slot-container__supplelemental-action-menu");
        element__supplemental_action_menu === null || element__supplemental_action_menu === void 0 ? void 0 : element__supplemental_action_menu.setAttribute("menu-items", JSON.stringify(Array.from(element__buttons).filter((el) => {
          return el.label;
        }).map((el) => {
          return el.getAttribute("label");
        })));
        if (this.breakpoint === "small") {
          element__buttons.forEach((el) => {
            if (el.getAttribute("label")) {
              el.style.display = "none";
            }
          });
        } else {
          element__buttons.forEach((el) => {
            if (el.getAttribute("label")) {
              el.style.display = "block";
            }
          });
        }
      } else {
        const element__supplemental_action_menu = (_c = this.host) === null || _c === void 0 ? void 0 : _c.querySelector(".bh-title-wrapper__header-actions__slot-container__supplelemental-action-menu");
        element__supplemental_action_menu.style.display = "none";
      }
    }
  }
  componentDidRender() {
    var _a;
    const headerActionsSlot = (_a = this.host) === null || _a === void 0 ? void 0 : _a.querySelector('[slot="bh-title-wrapper__header-actions"]');
    if (this.withHeaderActionSlot && !headerActionsSlot) {
      this.withHeaderActionSlot = false;
    } else if (!this.withHeaderActionSlot && headerActionsSlot) {
      this.withHeaderActionSlot = true;
    }
    if (this.withHeaderActionSlot) {
      if (headerActionsSlot === null || headerActionsSlot === void 0 ? void 0 : headerActionsSlot.querySelector("bh-button")) {
        if (headerActionsSlot === null || headerActionsSlot === void 0 ? void 0 : headerActionsSlot.querySelector("bh-action-menu")) {
          const element__actionMenu = headerActionsSlot.querySelector("bh-action-menu");
          const element__buttons = headerActionsSlot.querySelectorAll("bh-button");
          if (this.breakpoint === "small") {
            element__actionMenu.setAttribute("additional-menu-items", JSON.stringify(Array.from(element__buttons).filter((el) => {
              return el.label;
            }).map((el) => {
              return el.getAttribute("label");
            })));
            element__buttons.forEach((el) => {
              if (el.getAttribute("label")) {
                el.style.display = "none";
              }
            });
          } else {
            element__actionMenu.removeAttribute("additional-menu-items");
            element__buttons.forEach((el) => {
              if (el.getAttribute("label")) {
                el.style.display = "block";
              }
            });
          }
        } else {
          const element__buttons = headerActionsSlot.querySelectorAll("bh-button");
          if (this.breakpoint === "small") {
            element__buttons.forEach((el) => {
              if (el.getAttribute("label")) {
                el.style.display = "none";
              }
            });
          } else {
            element__buttons.forEach((el) => {
              if (el.getAttribute("label")) {
                el.style.display = "block";
              }
            });
          }
        }
      }
    }
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
    const prefix = this.host.tagName.toLowerCase().replace(components.titleWrapper.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
    const titleClasses = ["bh-title-wrapper__header-copy"];
    if (this.type == "title") {
      titleClasses.push("typography--title-medium");
    }
    if (this.type == "subtitle") {
      titleClasses.push("typography--subtitle-medium");
    }
    if (this.type == "label") {
      titleClasses.push("typography--label-small");
    }
    if (!this.subtext) {
      titleClasses.push("no-subtext");
    }
    const ctaProps = [];
    if ((_a = this._cta) === null || _a === void 0 ? void 0 : _a.primary) ctaProps.push(typeof ((_b = this._cta) === null || _b === void 0 ? void 0 : _b.primary) === "string" ? {
      label: this._cta.primary,
      value: `${this._cta.primary}`
    } : {
      label: this._cta.primary.label,
      value: this._cta.primary.key
    });
    if ((_c = this._cta) === null || _c === void 0 ? void 0 : _c.secondary) ctaProps.push(typeof ((_d = this._cta) === null || _d === void 0 ? void 0 : _d.secondary) === "string" ? {
      label: this._cta.secondary,
      value: `${this._cta.secondary}`
    } : {
      label: this._cta.secondary.label,
      value: this._cta.secondary.key
    });
    return h(Host, {
      key: "cdc98b695a14a5ec96efa4cd8331dbc315db279b",
      class: "bh-title-wrapper"
    }, h("div", {
      key: "14d51efe881a31898e35e99018624e41e70b3673",
      class: "bh-title-wrapper__container"
    }, h("div", {
      key: "914940d7e24257b004f8f90ae7b0d1df785a0ecd",
      class: "bh-title-wrapper__copies"
    }, h("h2", {
      key: "f5da54de6ee89171739b855645457f17827eda20",
      class: titleClasses.join(" ")
    }, this.header), this.subtext && h("span", {
      class: "typography--decorative-small bh-title-wrapper__subtext-copy"
    }, this.subtext)), this.withHeaderActionSlot && h("div", {
      class: "bh-title-wrapper__ctas bh-title-wrapper__header-actions__slot-container"
    }, h(Components.actionMenu, {
      class: `bh-title-wrapper__header-actions__slot-container__supplelemental-action-menu ${this.breakpoint === "small" ? "" : "hidden"}`,
      isSmall: true
    }), h("slot", {
      name: "bh-title-wrapper__header-actions"
    })), this._cta && h("div", {
      class: "bh-title-wrapper__ctas"
    }, h("div", null, (ctaProps.length > 0 || ((_e = this._cta) === null || _e === void 0 ? void 0 : _e.actionMenu)) && h(Components.actionMenu, {
      class: "bh-title-wrapper__cta--action-menu--mobile",
      isSmall: true,
      menuItems: {
        itemGroups: ((_f = this._cta.actionMenu) === null || _f === void 0 ? void 0 : _f.menuItems) && ((_h = (_g = this._cta.actionMenu) === null || _g === void 0 ? void 0 : _g.menuItems) === null || _h === void 0 ? void 0 : _h.itemGroups) ? ctaProps.length > 0 ? [{
          items: ctaProps,
          divider: false
        }, ...this._cta.actionMenu.menuItems.itemGroups] : this._cta.actionMenu.menuItems.itemGroups : [{
          items: ctaProps,
          divider: false
        }],
        ctas: (_l = (_k = (_j = this._cta) === null || _j === void 0 ? void 0 : _j.actionMenu) === null || _k === void 0 ? void 0 : _k.menuItems) === null || _l === void 0 ? void 0 : _l.ctas
      },
      onBhEventSelected: (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.bhEventCtaClick.emit(event.detail);
      }
    }), ((_m = this._cta) === null || _m === void 0 ? void 0 : _m.actionMenu) && h(Components.actionMenu, {
      class: "bh-title-wrapper__cta--action-menu--desktop",
      isSmall: false,
      menuItems: this._cta.actionMenu.menuItems,
      onBhEventSelected: (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.bhEventCtaClick.emit(event.detail);
      }
    })), ((_o = this._cta) === null || _o === void 0 ? void 0 : _o.ghost) && !Array.isArray((_p = this._cta) === null || _p === void 0 ? void 0 : _p.ghost) && h(Components.button, {
      class: "bh-title-wrapper__cta--ghost",
      type: "ghost",
      isDisabled: typeof this._cta.ghost === "string" ? false : this._cta.ghost.isDisabled,
      isLoading: typeof this._cta.ghost === "string" ? false : this._cta.ghost.isLoading,
      leftIcon: typeof this._cta.ghost === "string" ? "" : this._cta.ghost.leftIcon,
      rightIcon: typeof this._cta.ghost === "string" ? "" : this._cta.ghost.rightIcon,
      label: typeof this._cta.ghost === "string" ? this._cta.ghost : (_q = this._cta.ghost) === null || _q === void 0 ? void 0 : _q.label,
      onClick: () => {
        var _a2;
        if (typeof this._cta.ghost !== "string" && this._cta.ghost.isDisabled) return;
        this.bhEventCtaClick.emit(typeof this._cta.ghost === "string" ? this._cta.ghost : (_a2 = this._cta.ghost) === null || _a2 === void 0 ? void 0 : _a2.key);
      },
      isSmall: this.breakpoint === "small"
    }), ((_r = this._cta) === null || _r === void 0 ? void 0 : _r.ghost) && Array.isArray((_s = this._cta) === null || _s === void 0 ? void 0 : _s.ghost) && ((_t = this._cta) === null || _t === void 0 ? void 0 : _t.ghost.map((ghostCta) => {
      return h(Components.button, {
        class: "bh-title-wrapper__cta--ghost",
        type: "ghost",
        isDisabled: typeof ghostCta === "string" ? false : ghostCta.isDisabled,
        isLoading: typeof ghostCta === "string" ? false : ghostCta.isLoading,
        leftIcon: typeof ghostCta === "string" ? "" : ghostCta.leftIcon,
        rightIcon: typeof ghostCta === "string" ? "" : ghostCta.rightIcon,
        label: typeof ghostCta === "string" ? ghostCta : ghostCta === null || ghostCta === void 0 ? void 0 : ghostCta.label,
        onClick: () => {
          if (typeof ghostCta !== "string" && ghostCta.isDisabled) return;
          this.bhEventCtaClick.emit(typeof ghostCta === "string" ? ghostCta : ghostCta === null || ghostCta === void 0 ? void 0 : ghostCta.key);
        },
        isSmall: this.breakpoint === "small"
      });
    })), ((_u = this._cta) === null || _u === void 0 ? void 0 : _u.secondary) && h(Components.button, {
      class: `bh-title-wrapper__cta--secondary ${((_v = this._cta) === null || _v === void 0 ? void 0 : _v.actionMenu) ? "with-action-menu" : ""}`,
      type: "secondary",
      isDisabled: typeof this._cta.secondary === "string" ? false : this._cta.secondary.isDisabled,
      isLoading: typeof this._cta.secondary === "string" ? false : this._cta.secondary.isLoading,
      leftIcon: typeof this._cta.secondary === "string" ? "" : this._cta.secondary.leftIcon,
      rightIcon: typeof this._cta.secondary === "string" ? "" : this._cta.secondary.rightIcon,
      label: typeof this._cta.secondary === "string" ? this._cta.secondary : (_w = this._cta.secondary) === null || _w === void 0 ? void 0 : _w.label,
      onClick: () => {
        var _a2;
        if (typeof this._cta.secondary !== "string" && this._cta.secondary.isDisabled) return;
        this.bhEventCtaClick.emit(typeof this._cta.secondary === "string" ? this._cta.secondary : (_a2 = this._cta.secondary) === null || _a2 === void 0 ? void 0 : _a2.key);
      }
    }), ((_x = this._cta) === null || _x === void 0 ? void 0 : _x.primary) && h(Components.button, {
      class: `bh-title-wrapper__cta--primary ${((_y = this._cta) === null || _y === void 0 ? void 0 : _y.actionMenu) ? "with-action-menu" : ""}`,
      type: "primary",
      isDisabled: typeof this._cta.primary === "string" ? false : this._cta.primary.isDisabled,
      isLoading: typeof this._cta.primary === "string" ? false : this._cta.primary.isLoading,
      leftIcon: typeof this._cta.primary === "string" ? "" : this._cta.primary.leftIcon,
      rightIcon: typeof this._cta.primary === "string" ? "" : this._cta.primary.rightIcon,
      label: typeof this._cta.primary === "string" ? this._cta.primary : (_z = this._cta.primary) === null || _z === void 0 ? void 0 : _z.label,
      onClick: () => {
        var _a2;
        if (typeof this._cta.primary !== "string" && this._cta.primary.isDisabled) return;
        this.bhEventCtaClick.emit(typeof this._cta.primary === "string" ? this._cta.primary : (_a2 = this._cta.primary) === null || _a2 === void 0 ? void 0 : _a2.key);
      }
    }))));
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "cta": ["watchCta"]
    };
  }
};
BhTitleWrapper.style = BhTitleWrapperStyle0;
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox2 = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle$1(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox2 && css.willChange === "filter" || isFirefox2 && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle$1(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html2 = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html2.clientWidth;
  var height = html2.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html2 = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html2.scrollWidth, html2.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html2.scrollHeight, html2.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle$1(body || html2).direction === "rtl") {
    x += max(html2.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle$1(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b2) {
    return overflows[a] - overflows[b2];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = popperGenerator({
  defaultModifiers
});
var bhTooltipCss = ".bh-tooltip__slot-container{display:flex}.bh-tooltip__message-container{visibility:hidden;background-color:var(--color-text-common-primary);opacity:0;padding:var(--spacing-padding-xsmall) var(--spacing-padding-small);border-radius:var(--effect-border-radius-medium);z-index:3000;max-width:276px;transition:opacity;transition-timing-function:var(--motion-easing-fast);transition-duration:var(--motion-duration-fast)}.bh-tooltip__message-container.not-ready{width:0}.bh-tooltip__message-container.shown{visibility:visible;opacity:1;display:block;overflow-wrap:break-word}.bh-tooltip__message-container.hidden{display:none}.bh-tooltip__message-container.invisible{opacity:0}.bh-tooltip__message-container.inline{position:fixed !important;z-index:10000}.bh-tooltip__message-copy{color:var(--color-fill-common-secondary);white-space:pre-wrap;display:block;text-overflow:ellipsis;overflow-x:hidden}.bh-tooltip__message-copy.with-title{color:var(--color-fill-common-primary);white-space:pre-wrap;display:block;text-overflow:ellipsis;overflow-x:hidden}.bh-tooltip__message-copy.horizontal-placement{white-space:pre}.bh-tooltip--legend-li{display:flex}.bh-tooltip-bullets{height:8px;width:8px;border-radius:50%;margin-top:calc(var(--font-size-body-small) / 2);flex-shrink:0}.bh-tooltip--legend{list-style:none;margin:0px;padding:0px}.bh-tooltip-text{margin-left:5px}";
var BhTooltipStyle0 = bhTooltipCss;
var BhTooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventOpen = createEvent(this, "bhEventOpen", 3);
    this.bhEventClose = createEvent(this, "bhEventClose", 3);
    this.message = void 0;
    this.ismessage = void 0;
    this.legendData = void 0;
    this.tooltipTitle = void 0;
    this.tooltipMessageFromTop = void 0;
    this.tooltipLeftPadding = 0;
    this.hide = void 0;
    this.invisible = false;
    this.isInline = false;
    this.placement = "top";
    this.isLegend = false;
    this.isTitle = false;
    this.isFromTabularlist = false;
    this.isShown = void 0;
    this._isLegend = void 0;
    this.isReady = false;
  }
  isShownChange() {
    if (this.isShown) {
      this.bhEventOpen.emit();
      if (this.isInline) document.body.appendChild(this.el__tooltip);
    } else {
      this.bhEventClose.emit();
      if (this.isInline) document.body.removeChild(this.el__tooltip);
    }
  }
  isLegendChange() {
    this._isLegend = this.isLegend;
    this.componentDidLoad();
  }
  componentDidLoad() {
    this._isLegend = this.isLegend;
    if (!this.tooltipMessageFromTop) {
      this.tooltipMessageFromTop = 50;
    }
    if (!this.isInline) {
      const popperInstance = createPopper(this.el__slot, this.el__tooltip, {
        placement: this.placement ? this.placement : "top",
        modifiers: [{
          name: "offset",
          options: {
            offset: [0, 8]
          }
        }, {
          name: "flip",
          options: {
            padding: 72
          }
        }]
      });
      this.updatePopper(popperInstance);
      window.dispatchEvent(new CustomEvent("scroll"));
    }
    if (!this.isReady) this.isReady = true;
    if (this._isLegend) {
      try {
        if (typeof this.legendData == "string") {
          this.result.innerHTML = this.parseHTML(JSON.parse(this.legendData));
        } else {
          this.result.innerHTML = this.parseHTML(this.legendData);
        }
      } catch (err) {
        console.error(err.message);
      }
    }
  }
  parseHTML(data) {
    let liData = "";
    data.forEach((data2) => {
      liData = liData + `<li class="bh-tooltip--legend-li">
				<span class="bh-tooltip-bullets" style="background-color: ${data2.bulletBackgroundColor}"></span>
				<span class="typography--body-small bh-tooltip-label typography--color-inverse-primary bh-tooltip-text"> ${data2.label}</span>
			</li>`;
    });
    return `<ul class="bh-tooltip--legend">
			${liData}
		</ul>`;
  }
  updatePopper(_popperInstance) {
    return __async(this, null, function* () {
      yield _popperInstance.update();
    });
  }
  render() {
    var _a, _b, _c, _d;
    try {
      return h(Host, {
        key: "14789b23b7d55b77532510c9bf6ce0c6a57428a7",
        class: "bh-tooltip"
      }, h("div", {
        key: "38c84ee4175bae148013b5872598619b813a5a02",
        class: "bh-tooltip__slot-container",
        onMouseEnter: () => {
          this.isShown = true;
          if (this.isFromTabularlist) {
            this.hide = false;
          }
        },
        onMouseLeave: () => {
          this.isShown = false;
        },
        onFocus: () => {
          this.isShown = true;
        },
        onBlur: () => {
          this.isShown = false;
        },
        ref: (el) => this.el__slot = el
      }, h("slot", {
        key: "1c71cd8a2389b430e0f06986b12808259abd2f14"
      })), h("div", {
        key: "24a1517e9ac3fe0970f879c1bfbe284d3f5f42b4",
        class: `bh-tooltip__message-container ${this.isShown ? "shown" : ""} ${this.hide ? "hidden" : ""} ${this.isReady ? "" : "not-ready"} ${this.invisible ? "invisible" : ""} ${this.isInline ? "inline" : ""}
					${this.message === "" ? "hidden" : ""}
					`,
        ref: (el) => this.el__tooltip = el,
        style: this.isInline ? {
          position: `fixed`,
          top: `${((_b = (_a = this.el__slot) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.top) - this.tooltipMessageFromTop}px`,
          left: `${((_d = (_c = this.el__slot) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect()) === null || _d === void 0 ? void 0 : _d.left) + this.tooltipLeftPadding}px`
        } : {}
      }, this.isTitle && this.tooltipTitle && h("div", null, h("span", {
        class: `bh-tooltip__message-copy typography--body-small-semi-bold ${this.placement.includes("right") || this.placement.includes("left") ? "horizontal-placement" : ""}`
      }, this.tooltipTitle)), h("div", {
        key: "22a7d0ec588633d7f3bfaf9f28f8e42004f4a397"
      }, h("span", {
        key: "cfa26086738a190c1ce82da1df96da1fb6fb95d1",
        class: `${this._isLegend ? "" : "bh-tooltip__message-copy"} typography--body-small ${this.tooltipTitle && this.isTitle ? "with-title" : ""} ${this.placement.includes("right") || this.placement.includes("left") ? "horizontal-placement" : ""}`,
        ref: (e1) => {
          this.result = e1;
        }
      }, this.message))));
    } catch (e) {
      console.log(e);
    }
  }
  static get watchers() {
    return {
      "isShown": ["isShownChange"],
      "isLegend": ["isLegendChange"]
    };
  }
};
BhTooltip.style = BhTooltipStyle0;
registerStyles("vaadin-grid-tree-toggle", i$3`
    :host {
      --vaadin-grid-tree-toggle-level-offset: 2em;
      align-items: center;
      vertical-align: middle;
      transform: translateX(calc(var(--lumo-space-s) * -1));
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([leaf])) {
      cursor: default;
    }

    [part='toggle'] {
      display: inline-block;
      font-size: 1.5em;
      line-height: 1;
      width: 1em;
      height: 1em;
      text-align: center;
      color: var(--lumo-contrast-50pct);
      cursor: var(--lumo-clickable-cursor);
      /* Increase touch target area */
      padding: calc(1em / 3);
      margin: calc(1em / -3);
    }

    :host(:not([dir='rtl'])) [part='toggle'] {
      margin-right: 0;
    }

    @media (hover: hover) {
      :host(:hover) [part='toggle'] {
        color: var(--lumo-contrast-80pct);
      }
    }

    [part='toggle']::before {
      font-family: 'lumo-icons';
      display: inline-block;
      height: 100%;
    }

    :host(:not([expanded])) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
    }

    :host([expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
      transform: rotate(90deg);
    }

    /* Experimental support for hierarchy connectors, using an unsupported selector */
    :host([theme~='connectors']) #level-spacer {
      position: relative;
      z-index: -1;
      font-size: 1em;
      height: 1.5em;
    }

    :host([theme~='connectors']) #level-spacer::before {
      display: block;
      content: '';
      margin-top: calc(var(--lumo-space-m) * -1);
      height: calc(var(--lumo-space-m) + 3em);
      background-image: linear-gradient(
        to right,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-size: var(--vaadin-grid-tree-toggle-level-offset) var(--vaadin-grid-tree-toggle-level-offset);
      background-position: calc(var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px) 0;
    }

    /* RTL specific styles */

    :host([dir='rtl']) {
      margin-left: 0;
      margin-right: calc(var(--lumo-space-s) * -1);
    }

    :host([dir='rtl']) [part='toggle'] {
      margin-left: 0;
    }

    :host([dir='rtl'][expanded]) [part='toggle']::before {
      transform: rotate(-90deg);
    }

    :host([dir='rtl'][theme~='connectors']) #level-spacer::before {
      background-image: linear-gradient(
        to left,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-position: calc(100% - (var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px)) 0;
    }

    :host([dir='rtl']:not([expanded])) [part='toggle']::before,
    :host([dir='rtl'][expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-left);
    }
  `, {
  moduleId: "lumo-grid-tree-toggle"
});
var template$1 = document.createElement("template");
template$1.innerHTML = `
  <style>
    @font-face {
      font-family: "vaadin-grid-tree-icons";
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQkAA0AAAAABrwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAECAAAABoAAAAcgHwa6EdERUYAAAPsAAAAHAAAAB4AJwAOT1MvMgAAAZQAAAA/AAAAYA8TBIJjbWFwAAAB8AAAAFUAAAFeGJvXWmdhc3AAAAPkAAAACAAAAAgAAAAQZ2x5ZgAAAlwAAABLAAAAhIrPOhFoZWFkAAABMAAAACsAAAA2DsJI02hoZWEAAAFcAAAAHQAAACQHAgPHaG10eAAAAdQAAAAZAAAAHAxVAgBsb2NhAAACSAAAABIAAAASAIAAVG1heHAAAAF8AAAAGAAAACAACgAFbmFtZQAAAqgAAAECAAACTwflzbdwb3N0AAADrAAAADYAAABZQ7Ajh3icY2BkYGAA4twv3Vfi+W2+MnCzMIDANSOmbGSa2YEZRHEwMIEoAAoiB6sAeJxjYGRgYD7w/wADAwsDCDA7MDAyoAI2AFEEAtIAAAB4nGNgZGBg4GBgZgDRDAxMDGgAAAGbABB4nGNgZp7JOIGBlYGBaSbTGQYGhn4IzfiawZiRkwEVMAqgCTA4MDA+38d84P8BBgdmIAapQZJVYGAEAGc/C54AeJxjYYAAxlAIzQTELAwMBxgZGB0ACy0BYwAAAHicY2BgYGaAYBkGRgYQiADyGMF8FgYbIM3FwMHABISMDArP9/3/+/8/WJXC8z0Q9v8nEp5gHVwMMMAIMo+RDYiZoQJMQIKJARUA7WBhGN4AACFKDtoAAAAAAAAAAAgACAAQABgAJgA0AEIAAHichYvBEYBADAKBVHBjBT4swl9KS2k05o0XHd/yW1hAfBFwCv9sIlJu3nZaNS3PXAaXXHI8Lge7DlzF7C1RgXc7xkK6+gvcD2URmQB4nK2RQWoCMRiFX3RUqtCli65yADModOMBLLgQSqHddRFnQghIAnEUvEA3vUUP0LP0Fj1G+yb8R5iEhO9/ef/7FwFwj28o9EthiVp4hBlehcfUP4Ur8o/wBAv8CU+xVFvhOR7UB7tUdUdlVRJ6HnHWTnhM/V24In8JT5j/KzzFSi2E53hUz7jCcrcIiDDwyKSW1JEct2HdIPH1DFytbUM0PofWdNk5E5oUqb/Q6HHBiVGZpfOXkyUMEj5IyBuNmYZQjBobfsuassvnkKLe1OuBBj0VQ8cRni2xjLWsHaM0jrjx3peYA0/vrdmUYqe9iy7bzrX6eNP7Jh1SijX+AaUVbB8AAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSruZMzlHaB0q4A76kLlwAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKxJigiD6mhFTNowGACmcA/8AAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;
document.head.appendChild(template$1.content);
registerStyles("vaadin-grid-tree-toggle", i$3`
    :host {
      display: inline-flex;
      align-items: baseline;
      max-width: 100%;

      /* CSS API for :host */
      --vaadin-grid-tree-toggle-level-offset: 1em;
      --_collapsed-icon: '\\e7be\\00a0';
    }

    :host([dir='rtl']) {
      --_collapsed-icon: '\\e7bd\\00a0';
    }

    :host([hidden]) {
      display: none !important;
    }

    :host(:not([leaf])) {
      cursor: pointer;
    }

    #level-spacer,
    [part='toggle'] {
      flex: none;
    }

    #level-spacer {
      display: inline-block;
      width: calc(var(--_level, '0') * var(--vaadin-grid-tree-toggle-level-offset));
    }

    [part='toggle']::before {
      font-family: 'vaadin-grid-tree-icons';
      line-height: 1em; /* make icon font metrics not affect baseline */
    }

    :host(:not([expanded])) [part='toggle']::before {
      content: var(--_collapsed-icon);
    }

    :host([expanded]) [part='toggle']::before {
      content: '\\e7bc\\00a0'; /* icon glyph + single non-breaking space */
    }

    :host([leaf]) [part='toggle'] {
      visibility: hidden;
    }

    slot {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `, {
  moduleId: "vaadin-grid-tree-toggle-styles"
});
var GridTreeToggleMixin = (superClass) => class extends superClass {
  static get properties() {
    return {
      /**
       * Current level of the tree represented with a horizontal offset
       * of the toggle button.
       * @type {number}
       */
      level: {
        type: Number,
        value: 0,
        observer: "_levelChanged",
        sync: true
      },
      /**
       * Hides the toggle icon and disables toggling a tree sublevel.
       * @type {boolean}
       */
      leaf: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * Sublevel toggle state.
       * @type {boolean}
       */
      expanded: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true,
        sync: true
      }
    };
  }
  constructor() {
    super();
    this.addEventListener("click", (e) => this._onClick(e));
  }
  /** @private */
  _onClick(e) {
    if (this.leaf) {
      return;
    }
    if (isFocusable(e.target) || e.target instanceof HTMLLabelElement) {
      return;
    }
    e.preventDefault();
    this.expanded = !this.expanded;
  }
  /** @private */
  _levelChanged(level) {
    const value = Number(level).toString();
    this.style.setProperty("--_level", value);
  }
};
var GridTreeToggle = class extends GridTreeToggleMixin(ThemableMixin(DirMixin(PolymerElement))) {
  static get is() {
    return "vaadin-grid-tree-toggle";
  }
  static get template() {
    return html`
      <span id="level-spacer"></span>
      <span part="toggle"></span>
      <slot></slot>
    `;
  }
};
defineCustomElement(GridTreeToggle);
var GridTreeColumnMixin = (superClass) => class extends superClass {
  static get properties() {
    return {
      /**
       * JS Path of the property in the item used as text content for the tree toggle.
       */
      path: {
        type: String,
        sync: true
      }
    };
  }
  static get observers() {
    return ["_onRendererOrBindingChanged(_renderer, _cells, _bodyContentHidden, _cells.*, path)"];
  }
  constructor() {
    super();
    this.__boundOnExpandedChanged = this.__onExpandedChanged.bind(this);
  }
  /**
   * Renders the grid tree toggle to the body cell
   *
   * @private
   */
  __defaultRenderer(root, _column, {
    item,
    expanded,
    level
  }) {
    let toggle = root.firstElementChild;
    if (!toggle) {
      toggle = document.createElement("vaadin-grid-tree-toggle");
      toggle.addEventListener("expanded-changed", this.__boundOnExpandedChanged);
      root.appendChild(toggle);
    }
    toggle.__item = item;
    toggle.__rendererExpanded = expanded;
    toggle.expanded = expanded;
    toggle.leaf = this.__isLeafItem(item, this._grid.itemHasChildrenPath);
    toggle.textContent = this.__getToggleContent(this.path, item);
    toggle.level = level;
  }
  /**
   * The tree column doesn't allow to use a custom renderer
   * to override the content of body cells.
   * It always renders the grid tree toggle to body cells.
   *
   * @override
   */
  _computeRenderer() {
    return this.__defaultRenderer;
  }
  /**
   * Expands or collapses the row once the tree toggle is switched.
   * The listener handles only user-fired events.
   *
   * @private
   */
  __onExpandedChanged(e) {
    if (e.detail.value === e.target.__rendererExpanded) {
      return;
    }
    if (e.detail.value) {
      this._grid.expandItem(e.target.__item);
    } else {
      this._grid.collapseItem(e.target.__item);
    }
  }
  /** @private */
  __isLeafItem(item, itemHasChildrenPath) {
    return !item || !item[itemHasChildrenPath];
  }
  /** @private */
  __getToggleContent(path, item) {
    return path && get(path, item);
  }
};
var GridTreeColumn = class extends GridTreeColumnMixin(GridColumn) {
  static get is() {
    return "vaadin-grid-tree-column";
  }
};
defineCustomElement(GridTreeColumn);
function CreateDomModules$2(options) {
  const DomModuleTreeCol = document.createElement("dom-module");
  DomModuleTreeCol.setAttribute("theme-for", "vaadin-grid-tree-toggle");
  DomModuleTreeCol.setAttribute("id", `bh-tree__grid-toggle-style`);
  const innerHtmlStrCol = `<template><style>

    #level-spacer {
      height: 26px;
      border-right: 1px solid var(--color-border-common-primary);
      position: relative;
      left: -14px;
    }

    :host([expanded]) [part='toggle']::before {
      content: '\\e5cc';
      font-family: var(--font-family-icon-small);
      color: var(--color-fill-control-selected);
    }

    :host(:not([expanded])) [part='toggle']::before {
      content: '\\e5cc';
      font-family: var(--font-family-icon-small);
      color: var(--color-text-common-secondary);
    }

    :host([leaf]) [part='toggle'] {
      visibility: hidden;
    }

  </style>
  </template>`;
  DomModuleTreeCol.innerHTML = innerHtmlStrCol;
  return [
    //DomModuleGrid,
    DomModuleTreeCol
  ];
}
function CreateDomModules$1(options) {
  const DomModule = document.createElement("dom-module");
  DomModule.setAttribute("theme-for", "vaadin-grid");
  DomModule.setAttribute("id", `bh-ui-toolkit__vaadin-grid`);
  const innerHtmlStr = `<template><style>

  :host([gridtype="tree"]) {
    --_lumo-grid-border-width: 0px;
    background-color: transparent;
  }
  
  :host([gridtype="tree"]:not([theme~='no-border'])) {
    box-shadow: none!important;
    border: none!important;
  }


  :host([gridtype="tree"]:not([theme~='no-border'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
    box-shadow: none;
  }

  :host([gridtype="tree"]:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
    background-image: none;
  }

  :host([gridtype="tree"]) #header {
    display: none;
  }
  
  :host([gridtype="tree"]) [part~="body-cell"] {
    color: var(--color-text-common-secondary);
    font-family: var(--font-family-body-small);
    letter-spacing: var(--font-letter-spacing-body-small);
    line-height: var(--font-line-height-body-small);
    position: relative;  
    box-shadow: none;
    min-width: 180px;
    min-height: unset;
  }

  :host([gridtype="tree"]) [part='toggle'] {
      margin: none!important;
  }

 

  :host([gridtype="tree"][noverticalborder='true']) [part~="body-cell"] {
    border-right: none;
  }

  :host([gridtype="tree"]) [part~="cell"] {
    background-color: transparent;
  }

  :host([gridtype="tree"]) [part~="cell"] ::slotted(vaadin-grid-cell-content) {
    font-weight: var(--font-weight-body-small);
    font-size: var(--font-size-body-small);
    letter-spacing: var(--font-letter-spacing-body-small);
    line-height: var(--font-line-height-body-small);
    position: relative;
    padding-top:0 !important;
    padding-bottom:0 !important;
    cursor: pointer;
    transition: all;
    transition-timing-function: var(--motion-easing-fast);
    transition-duration: var(--motion-duration-fast);
  }

  :host([gridtype="tree"]) [part~='cell']:focus {
    outline: none !important;
  }
  :host([gridtype="tree"][navigating]) [part~='cell']:focus::before {
    box-shadow: none !important;
  }
 

  :host([gridtype="tree"]) [part~="body-cell"]:hover ::slotted(vaadin-grid-cell-content) {
    color: var(--color-text-common-primary);
  }

  :host([gridtype="tree"]:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
    background-image: none;
  }

   :host([gridtype="tree"]:not([theme~='no-border'])) [part~='row'][selected]  [part~="cell"] ::slotted(vaadin-grid-cell-content){
      color: var(--color-text-link-primary-default);
      text-decoration: underline;
      position: relative;
      padding-top:0 !important;
      padding-bottom:0 !important;
      background: none;
      box-shadow: none;
  }

  @media (hover: hover) {
    :host([gridtype="tree"]:hover) (:not([theme~='no-border'])) [part~='row'] [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      // color: var(--color-text-common-primary);
    }
  }

  :host([gridtype="tree"][spacing="medium"]) {
    height: unset;
  }

  :host([gridtype="tree"][spacing="medium"][shouldoverflow="true"]) {
    height:  var(--tabularlist-default-height) ;
  }

  :host([gridtype="tree"][spacing="medium"]) [part~="body-cell"] ::slotted(vaadin-grid-cell-content) {
    height: 26px;
    padding: var(--spacing-padding-small) var(--spacing-padding-small);
  }

  :host([gridtype="tree"]:not([theme~='no-row-borders'])) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
    transform: translateY(5px);
  }

    :host([gridtype="tabularlist"]) {
      border: none;
      background-color:var(--table-background-color);
    }

    :host([gridtype="tabularlist"][linkitem="true"]) [part~="body-cell"] ::slotted(vaadin-grid-cell-content) {
      cursor: pointer;
    }

    :host([gridtype="tabularlist"][reordering]) [part~="cell"][reorder-status="dragging"] {
      background-color: var(--color-fill-menu-selected-supplemental);
      background: var(--color-fill-menu-selected-supplemental);
    }

    :host([gridtype="tabularlist"]) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: none;
    }

    :host([gridtype="tabularlist"]) [part~="reorder-ghost"] {
      background: var(--color-fill-menu-selected-supplemental);
      background-color: var(--color-fill-menu-selected-supplemental);
      font-family: var(--font-family-label-small);
      letter-spacing: var(--font-letter-spacing-label-small);
      line-height: var(--font-line-height-label-small);
      font-weight: var(--font-weight-label-small);
      font-size: var(--font-size-label-small);
    }

    :host([gridtype="tabularlist"]) [part~="header-cell"] {
      background-color: var(--color-fill-common-tertiary);
      color: var(--color-text-common-primary);
      font-family: var(--font-family-label-small);
      letter-spacing: var(--font-letter-spacing-label-small);
      line-height: var(--font-line-height-label-small);
      min-height: 42px !important;
      min-width: var(--tabularlist-header-cell-min-width);
      height: 42px;
      align-items: center;
      position: relative;
      cursor: pointer;      
    }
    :host([gridtype="tabularlist"][noverticalborder='false']) [part~="header-cell"]{
      border-right: 1px solid var(--color-border-common-primary);    
      }
    :host([gridtype="tabularlist"][selection='true']) [part~="header-cell"]:first-child {
      min-width: 64px;
      width: 64px !important;
      padding: 0 8px;
      height: 42px;
      min-height: 42px !important;
    }

    :host([gridtype="tabularlist"][selection='true'][searchmode="column"]) [part~="header-cell"]:first-child {
      height: 87px;
      min-height: 87px !important;
    }
    
    :host([gridtype="tabularlist"][selection='true']) [part~="header-cell"]:first-child ::slotted(vaadin-grid-cell-content) {
      display: flex;
      justify-content: center;
    }

    :host([gridtype="tabularlist"][selection='true'][searchmode="column"]) [part~="header-cell"]:first-child ::slotted(vaadin-grid-cell-content) {
      padding-bottom: 44px;
    }

    :host([gridtype="tabularlist"][selection='true'][searchmode="column"]) [part~="header-cell"]:first-child:before {
      position: absolute;
      content: ' ';
      width: 64px;
      height: 44px;
      border-top: 1px solid var(--color-border-common-primary);
      background-color: var(--color-fill-common-secondary);
      top: 41px;
      left: 0;
    }

    :host([gridtype="tabularlist"][selection='true']) [part~='cell'][part~="header-cell"]:first-child ::slotted(vaadin-grid-cell-content) {
      text-overflow: clip;
      margin-right: 0;
    }

    :host([gridtype="tabularlist"][searchmode="column"]) [part~="header-cell"] {
      min-height: 87px !important;
      height: 87px;
    }

    :host([gridtype="tabularlist"][searchmode="column"]) [part~="header-cell"] ::slotted(vaadin-grid-cell-content) {
      margin-right: 0;
      padding: 0;
    }

    :host([gridtype="tabularlist"][searchmode="column"]) [part~="header-cell"]:after {
      top: 13px;
    }

    :host([gridtype="tabularlist"][searchmode="column"]) [part='resize-handle'] {
      height: 42px;
    }

    :host([gridtype="tabularlist"][noverticalborder='true']) [part~="header-cell"] {
      border-right: none;
    }

    

    :host([gridtype="tabularlist"]) [part~="header-cell"] ::slotted(vaadin-grid-cell-content) {
      font-weight: var(--font-weight-label-small);
      font-size: var(--font-size-label-small);
      padding: 0 var(--tabulatlist-header-cell-padding);
      position: relative;
      cursor: pointer;
      margin-right: var(--tabulatlist-header-cell-margin);
    }
    
    :host([gridtype="tabularlist"][rowselection="true"]) [role~="row"]:hover [part~="body-cell"] ::slotted(vaadin-grid-cell-content) {
      background-color: var(--color-fill-menu-highlighted);
      cursor: pointer;
    }

    :host([gridtype="tabularlist"]:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--color-fill-menu-selected-supplemental), var(--color-fill-menu-selected-supplemental));
    }

    :host([gridtype="tabularlist"][rowselection="true"]) [role~="row"][selected]:hover [part~="body-cell"] ::slotted(vaadin-grid-cell-content) {
      background-color: var(--color-fill-menu-selected-supplemental);
      background-image: linear-gradient(var(--color-fill-menu-selected-supplemental), var(--color-fill-menu-selected-supplemental));
    }

    :host([gridtype="tabularlist"]) [part~="body-cell"] {
      color: var(--color-text-common-secondary);
      font-family: var(--font-family-body-medium);
      letter-spacing: var(--letter-spacing-body-medium);
      line-height: var(--font-line-height-body-medium);
      position: relative;
      border-top: 1px solid var(--color-border-common-primary);      
      min-width: var(--tabularlist-header-cell-min-width);
      background-color: var(--color-fill-common-secondary);      
    }
    :host([gridtype="tabularlist"][noverticalborder='false']) [part~='body-cell'] {
      border-right: 1px solid var(--color-border-common-primary);
      border-bottom: 1px solid var(--color-border-common-primary);
  }
  :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']){
    border-top: 1px solid var(--color-border-common-primary);
  }
    :host([gridtype="tabularlist"][selection='true']) [part~="body-cell"]:first-child {
      min-width: 64px;
      width: 64px !important;
      padding: 0 8px;
    } 

    :host([gridtype="tabularlist"][selection='true']) [part~='cell'][part~="body-cell"]:first-child ::slotted(vaadin-grid-cell-content) {
      text-overflow: clip;
    }

    :host([gridtype="tabularlist"][noverticalborder='true']) [part~="body-cell"] {
      border-right: none;
    }

    :host([gridtype="tabularlist"][reordering]) [part~='cell'][reorder-status='allowed'] {
      background-color: var(--color-fill-common-secondary);
    }

    :host([gridtype="tabularlist"]) [part~="body-cell"] ::slotted(vaadin-grid-cell-content) {
      font-weight: var(--font-weight-body-medium);
      font-size: var(--font-size-body-medium);
      position: relative;
    }

    :host([gridtype="tabularlist"][spacing="large"]){
      height: unset;
      // max-height: 651px;
    }

    :host([gridtype="tabularlist"][spacing="large"][shouldoverflow="true"]) {
      height: 651px;
    }

    :host([gridtype="tabularlist"][spacing="large"]) [part~="body-cell"] ::slotted(vaadin-grid-cell-content) {
      height:60px;
      padding: var(--spacing-padding-medium) var(--spacing-padding-small);
    }
    :host([gridtype="tabularlist"][spacing="auto"]) [part~="body-cell"] ::slotted(vaadin-grid-cell-content) {
      padding: var(--spacing-padding-medium) var(--spacing-padding-small);
    }

    :host([gridtype="tabularlist"][spacing="auto"]) [part~="body-cell"] ::slotted(vaadin-grid-cell-content) {
      height: auto;
     
    }

    :host([gridtype="tabularlist"][spacing="medium"]) {
      height: unset;
    }

    :host([gridtype="tabularlist"][spacing="medium"][shouldoverflow="true"]) {
      height:  var(--tabularlist-default-height) ;
    }

    :host([gridtype="tabularlist"][spacing="medium"]) [part~="body-cell"] ::slotted(vaadin-grid-cell-content) {
      height: 44px;
      padding: var(--spacing-padding-small) var(--spacing-padding-small);
    }

    :host([gridtype="tabularlist"][spacing="small"]) {
      height: unset;
      // max-height: 411px;
    }

    :host([gridtype="tabularlist"][spacing="small"][shouldoverflow="true"]) {
      height: 411px;
    }

    :host([gridtype="tabularlist"][spacing="small"]) [part~="body-cell"] ::slotted(vaadin-grid-cell-content) {
      height: 36px;
      padding: var(--spacing-padding-xsmall) var(--spacing-padding-small);
    }

    :host([gridtype="tabularlist"]) [part='resize-handle'] {
      width: 2px;
      background-color: var(--color-fill-control-selected);
      right: 0px;
      -webkit-transition: background-color var(--motion-duration-fast) var(--motion-easing-fast);
      transition: background-color var(--motion-duration-fast) var(--motion-easing-fast);
    }

    :host([gridtype="tabularlist"]) [part='resize-handle']::before {
      width: 5px;
    }

    :host([gridtype="tabularlist"][navigating]) [part~='header-cell']:focus::before {
      height: 41px;
    }

    :host([gridtype="tabularlist"][navigating]) [part~='cell']:focus::before {
      box-shadow: inset 0 0 0 2px var(--color-border-common-focused);
    }

  </style>
  </template>`;
  DomModule.innerHTML = innerHtmlStr;
  const DomModuleCheckbox = document.createElement("dom-module");
  DomModuleCheckbox.setAttribute("theme-for", "vaadin-checkbox");
  DomModuleCheckbox.setAttribute("id", `bh-ui-toolkit__vaadin-checkbox`);
  const innerHtmlStrCheckbox = `<template><style>
    :host {
      width: var(--checkbox-width);
      height: var(--checkbox-height);
      margin: 0 var(--spacing-margin-xxsmall);
      cursor: pointer !important;
      border: none;
      transition: all;
      transition-timing-function: var(--motion-easing-fast);
      transition-duration: var(--motion-duration-fast);
    }

    :host [part~="checkbox"] {
      background-color: var(--color-fill-control-unselected);
      width: var(--checkbox-width);
      height: var(--checkbox-height);
      border-style: solid;
      border-width: var(--effect-border-width-thick);
      border-color: var(--color-border-control-unselected);
      box-sizing: border-box;
      border-radius: var(--effect-border-radius-light);
      margin: 0;
      transition: all;
      transition-timing-function: var(--motion-easing-fast);
      transition-duration: var(--motion-duration-fast);
    }

    :host(:active) [part~="checkbox"] {
      transform: unset;
    }

    :host(:hover) label {
      cursor: pointer !important;
    }

    :host(:focus) [part~="checkbox"] {
      box-shadow: var(--effect-drop-shadow-focus-primary);
    }

    :host [part~="checkbox"] input {
      border: none;
    }

    :host [part~="checkbox"]::before {
      background-color: var(--color-fill-control-unselected);
      width: var(--checkbox-width);
      height: var(--checkbox-height);
      border-style: solid;
      border-width: var(--effect-border-width-thick);
      border-color: var(--color-border-control-unselected);
      box-sizing: border-box;
      transition: all;
      transition-timing-function: var(--motion-easing-fast);
      transition-duration: var(--motion-duration-fast);
      transform: scale(1);
    }

    :host(:hover) [part~="checkbox"]::before {
      background-color: var(--color-fill-control-unselected) !important;
    }

    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background-color: var(--color-fill-control-unselected);
    }

    :host([checked]) [part='checkbox'] {
      background-color: var(--color-fill-control-selected);
      border-color: var(--color-border-control-selected);
    }

    :host([checked]:not([indeterminate])) [part='checkbox']:after {
      border-width: 2px 0 0 2px;
      transform: rotate(-135deg);
      width: 6px;
      height: 12px;
      top: 12px;
      left: 5px;
    }

    :host([indeterminate]) [part='checkbox']::after {
      width: 12px;
      height: 2px;
      left: 1px;
    }
  </style>
  </template>`;
  DomModuleCheckbox.innerHTML = innerHtmlStrCheckbox;
  return [DomModule, DomModuleCheckbox];
}
var bhTreeCss = ".bh-tree__container{position:relative}.bh-tree vaadin-grid::part(header-cell){display:none}.bh-tree vaadin-grid::part(cell){background-color:transparent;--_focus-ring-color:transparent;--_lumo-grid-selected-row-color:transparent}.bh-tree vaadin-grid::part(cell):focus-visible{background-color:red}.bh-tree vaadin-grid:not([theme~='no-border']){box-shadow:none!important;border:none!important}.bh-tree vaadin-grid::part(body-cell){color:var(--color-text-common-secondary);font-family:var(--font-family-body-small);border-top:0px;border-right:0px;border-bottom:0px;letter-spacing:var(--font-letter-spacing-body-small);line-height:var(--font-line-height-body-small);position:relative;box-shadow:none;min-width:180px;min-height:unset}.bh-tree vaadin-grid::part(toggle){margin:none!important}.bh-tree vaadin-grid::part(cell)::slotted(vaadin-grid-cell-content){font-weight:var(--font-weight-body-small);font-size:var(--font-size-body-small);letter-spacing:var(--font-letter-spacing-body-small);line-height:var(--font-line-height-body-small);height:26px;position:relative;padding-top:0 !important;padding-bottom:0 !important;cursor:pointer;transition:all;transition-timing-function:var(--motion-easing-fast);transition-duration:var(--motion-duration-fast)}.bh-tree vaadin-grid::part(cell):focus{outline:none !important;background-color:transparent}.bh-tree vaadin-grid::part(cell):hover ::slotted(vaadin-grid-cell-content){color:var(--color-text-common-primary);background-color:transparent}vaadin-grid-tree-toggle{height:26px;background-color:transparent;font-weight:var(--font-weight-body-small);font-size:var(--font-size-body-small);letter-spacing:var(--font-letter-spacing-body-small);line-height:var(--font-line-height-body-small);color:var(--color-text-common-secondary);font-family:var(--font-family-body-small);}vaadin-grid-tree-toggle::part(toggle){height:26px!important;position:relative!important;left:-9px !important;margin:none!important}vaadin-grid-tree-toggle[expanded]::part(toggle){content:'\\e5cc';color:var(--color-fill-control-selected);border-left:1px solid var(--color-border-common-primary)!important;}vaadin-grid-tree-toggle:not([expanded])::part(toggle){content:'\\e5cc';font-family:var(--font-family-icon-small);color:var(--color-text-common-secondary);border-left:1px solid var(--color-border-common-primary) !important}vaadin-grid-tree-toggle[leaf]::part(toggle)::before{content:''}vaadin-grid-tree-toggle[leaf]::part(toggle){visibility:visible;height:26px!important;position:relative!important}.bh-tree vaadin-grid{background-color:var(--table-background-color)}";
var BhTreeStyle0 = bhTreeCss;
var BhTree = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventSelected = createEvent(this, "bhEventSelected", 7);
    this.treeLoaded = false;
    this.id = void 0;
    this.payload = void 0;
    this._payload = void 0;
    this.option = void 0;
    this._option = void 0;
  }
  watchPayload() {
    if (this.el__grid) {
      this.parseData();
      const that = this;
      this.treeLoaded = true;
      that.el__grid.dataProvider = (params, callback) => {
        var _a, _b, _c, _d;
        let items = [];
        if (params.parentItem === void 0) {
          let topLevel = (_b = (_a = this._payload) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.filter((item) => item.level === 1);
          topLevel === null || topLevel === void 0 ? void 0 : topLevel.forEach((item) => {
            items.push(item);
          });
        } else {
          let childItems = (_d = (_c = this._payload) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.filter((item) => item.parentuid === params.parentItem.uid);
          childItems === null || childItems === void 0 ? void 0 : childItems.forEach((childItem) => {
            items.push(childItem);
          });
        }
        callback(items, items.length);
      };
    }
  }
  watchOption() {
    this.parseData();
  }
  parseData() {
    this._payload = typeof this.payload === "string" ? JSON.parse(this.payload) : this.payload;
    let flattenedArray = [];
    this.flattenNestedData(flattenedArray, this._payload.data);
    this._payload.data = flattenedArray;
    this._payload.length = flattenedArray.length;
    this._option = typeof this.option === "string" ? JSON.parse(this.option) : this.option;
  }
  flattenNestedData(flatArray, payloadData) {
    const flattenObject = function(item, uid, parentuid = "", level = 1) {
      let newItemToReturn = {};
      if (typeof item === "object" && !Array.isArray(item)) {
        const children = item === null || item === void 0 ? void 0 : item.children;
        if (children && Array.isArray(children)) {
          children.forEach((child, index) => {
            const curItemId = `${level + 1}-${index}-${uid}`;
            newItemToReturn = flattenObject(child, curItemId, uid, level + 1);
          });
        } else {
          newItemToReturn = item;
        }
      }
      const name = item.name;
      const key = item.key;
      const link = item.link;
      let hasChildren = false;
      if (item.children !== void 0) {
        hasChildren = true;
      }
      flatArray.push({
        name,
        key,
        uid,
        parentuid,
        level,
        link,
        hasChildren
      });
      return newItemToReturn;
    };
    let topLevelItemId = 0;
    payloadData.forEach((datum) => {
      topLevelItemId++;
      const uid = topLevelItemId.toString();
      flattenObject(datum, uid);
    });
    return payloadData;
  }
  componentWillLoad() {
    this.parseData();
    if (!document.getElementById("bh-tree__grid-toggle-style")) {
      CreateDomModules$2().forEach((m) => {
        document.body.appendChild(m);
      });
    }
    if (!document.getElementById("bh-ui-toolkit__vaadin-grid")) {
      CreateDomModules$1().forEach((m) => {
        document.body.appendChild(m);
      });
    }
  }
  componentDidLoad() {
    const that = this;
    if (!this.treeLoaded) {
      that.el__grid.dataProvider = (params, callback) => {
        var _a, _b, _c, _d;
        let items = [];
        if (params.parentItem === void 0) {
          let topLevel = (_b = (_a = this._payload) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.filter((item) => item.level === 1);
          topLevel === null || topLevel === void 0 ? void 0 : topLevel.forEach((item) => {
            items.push(item);
          });
        } else {
          let childItems = (_d = (_c = this._payload) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.filter((item) => item.parentuid === params.parentItem.uid);
          childItems === null || childItems === void 0 ? void 0 : childItems.forEach((childItem) => {
            items.push(childItem);
          });
        }
        callback(items, items.length);
      };
      this.el__grid.addEventListener("active-item-changed", (event) => {
        event.preventDefault();
        const item = event.detail.value;
        if (item !== null) {
          const itemLink = item.link;
          if (itemLink !== "") {
            this.el__grid.selectedItems = item ? [item] : [];
          }
        }
      });
    }
  }
  render() {
    var _a;
    return h(Host, {
      key: "75c8ccd6570e6dcaf6dba52e3bc5e3f6eff7e558",
      class: "bh-tree",
      id: this.id
    }, h("div", {
      key: "ba6412fe3cd3ac4d9ea1c9d3d0da1867b64b048e",
      class: "bh-tree__container",
      ref: (el) => {
        this.el__container = el;
      }
    }, h("vaadin-grid", {
      key: "deb683d7178dad92539d0fc25ab65817053d0691",
      gridtype: "tree",
      id: `${this.id}__vaadin-grid`,
      "aria-label": "Asset Tree",
      theme: "no-border",
      itemHasChildrenPath: "hasChildren",
      ref: (el) => {
        if (!this.treeLoaded) {
          this.el__grid = el;
        }
      },
      heightByRows: true,
      spacing: ((_a = this._option) === null || _a === void 0 ? void 0 : _a.spacing) || "medium",
      onClick: (event) => {
        var _a2;
        const item = (_a2 = this.el__grid.getEventContext(event)) === null || _a2 === void 0 ? void 0 : _a2.item;
        this.bhEventSelected.emit(item);
      }
    }, h("vaadin-grid-tree-column", {
      key: "016b35ef9fabd3186ef969ada6932781ccd98b03",
      path: "name",
      resizable: true
    }))));
  }
  static get watchers() {
    return {
      "payload": ["watchPayload"],
      "option": ["watchOption"]
    };
  }
};
BhTree.style = BhTreeStyle0;
var bhTypeAheadCss = ".bh-type-ahead__menu-container{position:relative;width:100%;z-index:1000}.bh-type-ahead__menu-inner-container{position:absolute;left:0;right:0px}.bh-type-ahead__menu-container.small{margin-top:0px}.chip-input-container{display:flex;flex-wrap:wrap;flex-direction:column}.chip-input-wrapper-outer{display:flex;flex-wrap:wrap;flex:1 1 auto;padding:var(--spacing-margin-xxsmall);background-color:var(--color-fill-common-secondary);border:1px solid var(--color-border-form-default);border-radius:6px}.chip-input-wrapper-outer:hover{border-color:var(--color-border-form-hover)}.chip-input-wrapper-outer.focused{outline:none;border-color:var(--color-border-form-focused);box-shadow:var(--effect-drop-shadow-focus-primary)}.chip-input-wrapper{display:flex;flex-wrap:wrap;align-items:center;flex:1 1 auto;max-height:120px;overflow-y:auto;overflow-x:hidden;scroll-behavior:smooth;scroll-snap-type:y mandatory}.chip-input-wrapper:focus-within{scroll-behavior:smooth}.bh_select-chip{display:flex;align-items:center;border:1px solid var(--color-border-control-unselected);border-radius:30px;padding:2px calc(var(--spacing-padding-small));color:var(--color-text-label-default);cursor:pointer;margin:var(--spacing-margin-xxsmall)}.bh_select-chip:hover{background-color:var(--color-fill-semantic-neutral-default)}.bh-chip-close--icon{display:flex;justify-content:center;align-items:center;padding-left:8px}.bh-chip-close--icon>i{color:var(--color-text-label-default)}";
var BhTypeAheadStyle0 = bhTypeAheadCss;
var BhTypeAhead = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selected = createEvent(this, "selected", 7);
    this.bhEventOpen = createEvent(this, "bhEventOpen", 7);
    this.bhEventClose = createEvent(this, "bhEventClose", 7);
    this.bhEventSelected = createEvent(this, "bhEventSelected", 7);
    this.removeEmail = (index) => {
      this.SelectedChipItems.splice(index, 1);
      this.SelectedChipItems = [...this.SelectedChipItems];
      if (!this.isFocused) {
        this.isFocused = true;
      }
      this.bhEventSelected.emit(this.SelectedChipItems);
    };
    this.isMultiChipSearch = false;
    this.data = void 0;
    this._data = void 0;
    this.showrecent = void 0;
    this._showrecent = true;
    this.value = "";
    this.placeholder = void 0;
    this.isFluid = false;
    this.isSmall = false;
    this.isDisabled = false;
    this.isError = false;
    this.label = "";
    this.message = "";
    this.clear = false;
    this.noMatchText = "No matches for";
    this.menuItems = void 0;
    this.isOpen = false;
    this.SelectedChipItems = [];
    this.isFocused = false;
    this.query = "";
  }
  watchData() {
    this._data = typeof this.data === "string" ? JSON.parse(this.data) : this.data;
  }
  watchShowrecent() {
    this._showrecent = this.showrecent !== void 0 ? this.showrecent : true;
  }
  watchIsOpen() {
    if (this.isOpen) {
      this.bhEventOpen.emit({
        "isOpen": this.isOpen,
        "value": this.value
      });
    } else {
      this.bhEventClose.emit({
        "isOpen": this.isOpen,
        "value": this.value
      });
    }
  }
  watchClear() {
    if (this.clear) {
      this.value = "";
      this.query = "";
      this.SelectedChipItems = [];
      this.clear = !this.clear;
    }
  }
  setMenuItems(event) {
    if (this.query) {
      this.isOpen = true;
      this.menuItems = {
        itemGroups: [{
          items: event.detail
        }]
      };
    }
  }
  setQuery(event) {
    this.query = event.detail;
    this.showRecentSearches();
  }
  handleFocusIn() {
    this.isFocused = true;
    this.ensureInputVisible();
  }
  handleFocusOut() {
    this.isFocused = false;
  }
  componentWillLoad() {
    this._data = typeof this.data === "string" ? JSON.parse(this.data) : this.data;
  }
  closeMenu() {
    this.isOpen = false;
  }
  ensureInputVisible() {
    setTimeout(() => {
      requestAnimationFrame(() => {
        var _a;
        if (this.chipWrapperRef) {
          (_a = this.chipWrapperRef) === null || _a === void 0 ? void 0 : _a.scrollTo({
            top: this.chipWrapperRef.scrollHeight,
            behavior: "smooth"
          });
        }
      });
    }, 10);
  }
  onSelect(item) {
    this.value = item.label;
    this.query = item.label;
    this.selected.emit(this.value);
    this.closeMenu();
    let existingSearches = JSON.parse(localStorage.getItem("recentSearches"));
    if (existingSearches == null) existingSearches = [];
    existingSearches.unshift(Object.assign(Object.assign({}, item), {
      icon: "schedule"
    }));
    localStorage.setItem("recentSearches", JSON.stringify(existingSearches));
    if (this.isMultiChipSearch) {
      const alreadyExists = this.SelectedChipItems.some((selected) => selected.value === item.value);
      if (!alreadyExists) {
        this.SelectedChipItems = [...this.SelectedChipItems, item];
      }
      this.query = "";
      setTimeout(() => {
        var _a, _b;
        (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.select();
        (_b = this.inputRef) === null || _b === void 0 ? void 0 : _b.focus();
      }, 0);
      this.bhEventSelected.emit(this.SelectedChipItems);
    } else {
      this.bhEventSelected.emit(this.value);
    }
    this.ensureInputVisible();
  }
  showRecentSearches() {
    var _a;
    const recentSearches = JSON.parse(window.localStorage.getItem("recentSearches"));
    if (this.query === "" && recentSearches) {
      const filteredMenuItems = Array.from(new Set(recentSearches.map((menuItem) => menuItem.label))).map((label) => {
        return recentSearches.find((menuItem) => menuItem.label === label);
      }).slice(0, 5);
      if (this._showrecent) {
        let multifilteredMenuItems = [];
        if (this.isMultiChipSearch) {
          const selectedValues = this.SelectedChipItems.map((item) => item.value);
          multifilteredMenuItems = ((_a = this.SelectedChipItems) === null || _a === void 0 ? void 0 : _a.length) > 0 ? filteredMenuItems.filter((item) => !selectedValues.includes(item.value)) : filteredMenuItems;
        }
        this.menuItems = {
          itemGroups: [{
            header: "Recent",
            items: this.isMultiChipSearch ? multifilteredMenuItems : filteredMenuItems
          }]
        };
        this.isOpen = true;
      }
    }
  }
  handleBlur() {
    setTimeout(() => {
      this.closeMenu();
    }, 300);
  }
  // Shared data mapping
  getMappedData() {
    var _a, _b;
    const selectedValues = this.SelectedChipItems.map((item) => item.value);
    if (Array.isArray(this._data)) {
      const mapped = typeof this._data[0] === "string" ? this._data.map((d) => ({
        label: d,
        value: d
      })) : this._data;
      return mapped.filter((item) => !selectedValues.includes(item.value));
    }
    const items = ((_b = (_a = this._data.itemGroups) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.items) || [];
    return items.filter((item) => !selectedValues.includes(item.value));
  }
  // Shared search input
  renderSearchInput(Components) {
    return h(Components.search, {
      ref: (el) => {
        var _a;
        return this.inputRef = (_a = el === null || el === void 0 ? void 0 : el.querySelector) === null || _a === void 0 ? void 0 : _a.call(el, "input");
      },
      type: this.isMultiChipSearch ? "multi-chip" : "",
      value: this.query,
      data: this.getMappedData(),
      searchParams: ["label"],
      placeholder: this.placeholder,
      onFocus: () => this.showRecentSearches(),
      onBlur: () => this.handleBlur(),
      isSmall: this.isSmall,
      isFluid: this.isFluid,
      isError: this.isError,
      isDisabled: this.isDisabled,
      isRounded: false,
      onbhEventBlur: () => {
        this.handleBlur();
      }
    });
  }
  // Shared menu rendering
  renderTypeAheadMenu(Components) {
    return this.menuItems && this.isOpen && h("div", {
      class: "bh-type-ahead__menu-inner-container"
    }, h(Components.menu, {
      isTypeAhead: true,
      menuWidth: this.isFluid ? "fluid" : "large",
      menuItems: this.menuItems,
      query: this.query,
      onBhEventSelected: (event) => {
        this.onSelect(event.detail);
        event.preventDefault();
        event.stopPropagation();
      },
      "no-match-text": this.noMatchText
    }));
  }
  // Standard search layout
  renderSearch(Components) {
    return h(Host, null, this.renderSearchInput(Components), h("div", {
      class: `bh-type-ahead__menu-container ${this.isSmall ? "small" : ""}`,
      ref: (el) => this.element__typeAheadMenu = el
    }, this.renderTypeAheadMenu(Components)));
  }
  // Multi-chip search layout
  renderMultiChipSearch(Components) {
    const labelClasses = ["bh-text-input__label", "typography--label-small"];
    return h(Host, null, h("div", {
      class: "chip-input-container"
    }, this.label && h("label", {
      class: labelClasses.join(" ")
    }, this.label), h("div", {
      class: `chip-input-wrapper-outer ${this.isFocused ? "focused" : ""}`
    }, h("div", {
      class: "chip-input-wrapper",
      ref: (el) => this.chipWrapperRef = el,
      onFocusin: () => this.handleFocusIn(),
      onFocusout: () => this.handleFocusOut()
    }, this.SelectedChipItems.map((email, index) => h("span", {
      class: "bh_select-chip typography--body-small"
    }, email.label, h(Components.icon, {
      icon: "close",
      size: "small",
      color: "primary",
      class: "bh-chip-close--icon",
      style: {
        cursor: "pointer"
      },
      onClick: () => this.removeEmail(index)
    }))), this.renderSearchInput(Components))), h("div", {
      class: `bh-type-ahead__menu-container ${this.isSmall ? "small" : ""}`,
      ref: (el) => this.element__typeAheadMenu = el
    }, this.renderTypeAheadMenu(Components)), this.message && h(Components.formMessage, {
      message: this.message
    })));
  }
  render() {
    const prefix = this.host.tagName.toLowerCase().replace(components.typeAhead.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix);
    return this.isMultiChipSearch ? this.renderMultiChipSearch(Components) : this.renderSearch(Components);
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "data": ["watchData"],
      "showrecent": ["watchShowrecent"],
      "isOpen": ["watchIsOpen"],
      "clear": ["watchClear"]
    };
  }
};
BhTypeAhead.style = BhTypeAheadStyle0;
registerStyles("vaadin-progress-bar", i$3`
    :host {
      height: calc(var(--lumo-size-l) / 10);
      margin: var(--lumo-space-s) 0;
    }

    [part='bar'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
    }

    [part='value'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-primary-color);
      /* Use width instead of transform to preserve border radius */
      transform: none;
      width: calc(var(--vaadin-progress-value) * 100%);
      will-change: width;
      transition: 0.1s width linear;
    }

    /* Indeterminate mode */
    :host([indeterminate]) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      width: 100%;
      background-color: transparent !important;
      background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      opacity: 0.75;
      will-change: transform;
      animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-indeterminate {
      0% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    :host(:not([aria-valuenow])) [part='value']::before,
    :host([indeterminate]) [part='value']::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: var(--lumo-primary-color);
      will-change: opacity;
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-pulse3 {
      0% {
        opacity: 1;
      }

      10% {
        opacity: 0;
      }

      40% {
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      50.1% {
        opacity: 1;
      }

      60% {
        opacity: 0;
      }

      90% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    /* Contrast color */
    :host([theme~='contrast']) [part='value'],
    :host([theme~='contrast']) [part='value']::before {
      background-color: var(--lumo-contrast-80pct);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error']) [part='value'],
    :host([theme~='error']) [part='value']::before {
      background-color: var(--lumo-error-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success']) [part='value'],
    :host([theme~='success']) [part='value']::before {
      background-color: var(--lumo-success-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }

    /* RTL specific styles */
    :host([indeterminate][dir='rtl']) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    :host(:not([aria-valuenow])[dir='rtl']) [part='value']::before,
    :host([indeterminate][dir='rtl']) [part='value']::before {
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    @keyframes vaadin-progress-indeterminate-rtl {
      0% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    /* Contrast color */
    :host([theme~='contrast'][dir='rtl']) [part='value'],
    :host([theme~='contrast'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error'][dir='rtl']) [part='value'],
    :host([theme~='error'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success'][dir='rtl']) [part='value'],
    :host([theme~='success'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }
  `, {
  moduleId: "lumo-progress-bar"
});
registerStyles("vaadin-upload", i$3`
    :host {
      line-height: var(--lumo-line-height-m);
    }

    :host(:not([nodrop])) {
      overflow: hidden;
      border: 1px dashed var(--lumo-contrast-20pct);
      border-radius: var(--lumo-border-radius-l);
      padding: var(--lumo-space-m);
      transition:
        background-color 0.6s,
        border-color 0.6s;
    }

    [part='drop-label'] {
      display: inline-block;
      white-space: normal;
      padding: 0 var(--lumo-space-s);
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
    }

    :host([dragover-valid]) {
      border-color: var(--lumo-primary-color-50pct);
      background: var(--lumo-primary-color-10pct);
      transition:
        background-color 0.1s,
        border-color 0.1s;
    }

    :host([dragover-valid]) [part='drop-label'] {
      color: var(--lumo-primary-text-color);
    }

    :host([disabled]) [part='drop-label'],
    :host([max-files-reached]) [part='drop-label'] {
      color: var(--lumo-disabled-text-color);
    }
  `, {
  moduleId: "lumo-upload"
});
registerStyles("vaadin-upload-icon", i$3`
    :host::before {
      content: var(--lumo-icons-upload);
      font-family: lumo-icons;
      font-size: var(--lumo-icon-size-m);
      line-height: 1;
      vertical-align: -0.25em;
    }
  `, {
  moduleId: "lumo-upload-icon"
});
registerStyles("vaadin-upload-file-list", i$3`
    ::slotted(li:not(:first-of-type)) {
      border-top: 1px solid var(--lumo-contrast-10pct);
    }
  `, {
  moduleId: "lumo-upload-file-list"
});
var uploadFile = i$3`
  :host {
    padding: var(--lumo-space-s) 0;
    outline: none;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
  }

  :host([focus-ring]) [part='row'] {
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  [part='row'] {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  [part='status'],
  [part='error'] {
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-s);
  }

  [part='info'] {
    display: flex;
    align-items: baseline;
    flex: auto;
  }

  [part='meta'] {
    width: 0.001px;
    flex: 1 1 auto;
  }

  [part='name'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [part='commands'] {
    display: flex;
    align-items: baseline;
    flex: none;
  }

  [part$='icon'] {
    margin-right: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-m);
    font-family: 'lumo-icons';
    line-height: 1;
  }

  /* When both icons are hidden, let us keep space for one */
  [part='done-icon'][hidden] + [part='warning-icon'][hidden] {
    display: block !important;
    visibility: hidden;
  }

  [part$='button'] {
    flex: none;
    margin-left: var(--lumo-space-xs);
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:focus {
    outline: none;
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  [part$='icon']::before,
  [part$='button']::before {
    vertical-align: -0.25em;
  }

  [part='done-icon']::before {
    content: var(--lumo-icons-checkmark);
    color: var(--lumo-primary-text-color);
  }

  [part='warning-icon']::before {
    content: var(--lumo-icons-error);
    color: var(--lumo-error-text-color);
  }

  [part='start-button']::before {
    content: var(--lumo-icons-play);
  }

  [part='retry-button']::before {
    content: var(--lumo-icons-reload);
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  [part='error'] {
    color: var(--lumo-error-text-color);
  }

  ::slotted([slot='progress']) {
    width: auto;
    margin-left: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
    margin-right: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
  }
`;
registerStyles("vaadin-upload-file", [fieldButton, uploadFile], {
  moduleId: "lumo-upload-file"
});
var UploadIcon = class extends ThemableMixin(PolymerElement) {
  static get is() {
    return "vaadin-upload-icon";
  }
  static get template() {
    return html`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
    `;
  }
};
defineCustomElement(UploadIcon);
var template = document.createElement("template");
template.innerHTML = `
  <style>
    @font-face {
      font-family: 'vaadin-upload-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;
document.head.appendChild(template.content);
var progressBarStyles = i$3`
  :host {
    display: block;
    width: 100%; /* prevent collapsing inside non-stretching column flex */
    height: 8px;
  }

  :host([hidden]) {
    display: none !important;
  }

  [part='bar'] {
    height: 100%;
  }

  [part='value'] {
    height: 100%;
    transform-origin: 0 50%;
    transform: scaleX(var(--vaadin-progress-value));
  }

  :host([dir='rtl']) [part='value'] {
    transform-origin: 100% 50%;
  }

  @media (forced-colors: active) {
    [part='bar'] {
      outline: 1px solid;
    }

    [part='value'] {
      background-color: AccentColor !important;
      forced-color-adjust: none;
    }
  }
`;
var ProgressMixin = (superClass) => class VaadinProgressMixin extends superClass {
  static get properties() {
    return {
      /**
       * Current progress value.
       */
      value: {
        type: Number,
        observer: "_valueChanged"
      },
      /**
       * Minimum bound of the progress bar.
       * @type {number}
       */
      min: {
        type: Number,
        value: 0,
        observer: "_minChanged"
      },
      /**
       * Maximum bound of the progress bar.
       * @type {number}
       */
      max: {
        type: Number,
        value: 1,
        observer: "_maxChanged"
      },
      /**
       * Indeterminate state of the progress bar.
       * This property takes precedence over other state properties (min, max, value).
       * @type {boolean}
       */
      indeterminate: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      }
    };
  }
  static get observers() {
    return ["_normalizedValueChanged(value, min, max)"];
  }
  /** @protected */
  ready() {
    super.ready();
    this.setAttribute("role", "progressbar");
  }
  /** @private */
  _normalizedValueChanged(value, min2, max2) {
    const newNormalizedValue = this._normalizeValue(value, min2, max2);
    this.style.setProperty("--vaadin-progress-value", newNormalizedValue);
  }
  /** @private */
  _valueChanged(newV) {
    this.setAttribute("aria-valuenow", newV);
  }
  /** @private */
  _minChanged(newV) {
    this.setAttribute("aria-valuemin", newV);
  }
  /** @private */
  _maxChanged(newV) {
    this.setAttribute("aria-valuemax", newV);
  }
  /**
   * Percent of current progress relative to whole progress bar (max - min)
   * @private
   */
  _normalizeValue(value, min2, max2) {
    let nV;
    if (!value && value !== 0) {
      nV = 0;
    } else if (min2 >= max2) {
      nV = 1;
    } else {
      nV = (value - min2) / (max2 - min2);
      nV = Math.min(Math.max(nV, 0), 1);
    }
    return nV;
  }
};
registerStyles("vaadin-progress-bar", progressBarStyles, {
  moduleId: "vaadin-progress-bar-styles"
});
var ProgressBar = class extends ElementMixin(ThemableMixin(ProgressMixin(PolymerElement))) {
  static get is() {
    return "vaadin-progress-bar";
  }
  static get template() {
    return html`
      <div part="bar">
        <div part="value"></div>
      </div>
    `;
  }
};
defineCustomElement(ProgressBar);
var UploadFileMixin = (superClass) => class UploadFileMixin extends FocusMixin(superClass) {
  static get properties() {
    return {
      /**
       * If true, the user cannot interact with this element.
       */
      disabled: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * True if uploading is completed, false otherwise.
       */
      complete: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * Error message returned by the server, if any.
       */
      errorMessage: {
        type: String,
        value: "",
        observer: "_errorMessageChanged"
      },
      /**
       * The object representing a file.
       */
      file: {
        type: Object
      },
      /**
       * Name of the uploading file.
       */
      fileName: {
        type: String
      },
      /**
       * True if uploading is not started, false otherwise.
       */
      held: {
        type: Boolean,
        value: false
      },
      /**
       * True if remaining time is unknown, false otherwise.
       */
      indeterminate: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * The object used to localize this component.
       */
      i18n: {
        type: Object
      },
      /**
       * Number representing the uploading progress.
       */
      progress: {
        type: Number
      },
      /**
       * Uploading status.
       */
      status: {
        type: String
      },
      /**
       * Indicates whether the element can be focused and where it participates in sequential keyboard navigation.
       * @protected
       */
      tabindex: {
        type: Number,
        value: 0
      },
      /**
       * True if uploading is in progress, false otherwise.
       */
      uploading: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /** @private */
      _progress: {
        type: Object
      }
    };
  }
  static get observers() {
    return ["__updateTabindex(tabindex, disabled)", "__updateProgress(_progress, progress, indeterminate)"];
  }
  /** @protected */
  ready() {
    super.ready();
    this.addController(new SlotController(this, "progress", "vaadin-progress-bar", {
      initializer: (progress) => {
        this._progress = progress;
      }
    }));
    this.shadowRoot.addEventListener("focusin", (e) => {
      const target = e.composedPath()[0];
      if (target.getAttribute("part").endsWith("button")) {
        this._setFocused(false);
      }
    });
    this.shadowRoot.addEventListener("focusout", (e) => {
      if (e.relatedTarget === this) {
        this._setFocused(true);
      }
    });
  }
  /**
   * Override method inherited from `FocusMixin` to mark the file as focused
   * only when the host is focused.
   * @param {Event} event
   * @return {boolean}
   * @protected
   */
  _shouldSetFocus(event) {
    return event.composedPath()[0] === this;
  }
  /** @private */
  __disabledChanged(disabled) {
    if (disabled) {
      this.removeAttribute("tabindex");
    } else {
      this.setAttribute("tabindex", this.tabindex);
    }
  }
  /** @private */
  _errorMessageChanged(errorMessage) {
    this.toggleAttribute("error", Boolean(errorMessage));
  }
  /** @private */
  __updateTabindex(tabindex, disabled) {
    if (disabled) {
      this.removeAttribute("tabindex");
    } else {
      this.setAttribute("tabindex", tabindex);
    }
  }
  /** @private */
  __updateProgress(progress, value, indeterminate) {
    if (progress) {
      progress.value = isNaN(value) ? 0 : value / 100;
      progress.indeterminate = indeterminate;
    }
  }
  /** @private */
  _fireFileEvent(e) {
    e.preventDefault();
    return this.dispatchEvent(new CustomEvent(e.target.getAttribute("file-event"), {
      detail: {
        file: this.file
      },
      bubbles: true,
      composed: true
    }));
  }
};
var uploadFileStyles = i$3`
  :host {
    display: block;
  }

  [hidden] {
    display: none;
  }

  [part='row'] {
    list-style-type: none;
  }

  button {
    background: transparent;
    padding: 0;
    border: none;
    box-shadow: none;
  }

  :host([complete]) ::slotted([slot='progress']),
  :host([error]) ::slotted([slot='progress']) {
    display: none !important;
  }
`;
registerStyles("vaadin-upload-file", uploadFileStyles, {
  moduleId: "vaadin-upload-file-styles"
});
var UploadFile = class extends UploadFileMixin(ThemableMixin(ControllerMixin(PolymerElement))) {
  static get template() {
    return html`
      <div part="row">
        <div part="info">
          <div part="done-icon" hidden$="[[!complete]]" aria-hidden="true"></div>
          <div part="warning-icon" hidden$="[[!errorMessage]]" aria-hidden="true"></div>

          <div part="meta">
            <div part="name" id="name">[[fileName]]</div>
            <div part="status" hidden$="[[!status]]" id="status">[[status]]</div>
            <div part="error" id="error" hidden$="[[!errorMessage]]">[[errorMessage]]</div>
          </div>
        </div>
        <div part="commands">
          <button
            type="button"
            part="start-button"
            file-event="file-start"
            on-click="_fireFileEvent"
            hidden$="[[!held]]"
            disabled$="[[disabled]]"
            aria-label$="[[i18n.file.start]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="retry-button"
            file-event="file-retry"
            on-click="_fireFileEvent"
            hidden$="[[!errorMessage]]"
            disabled$="[[disabled]]"
            aria-label$="[[i18n.file.retry]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="remove-button"
            file-event="file-abort"
            on-click="_fireFileEvent"
            disabled$="[[disabled]]"
            aria-label$="[[i18n.file.remove]]"
            aria-describedby="name"
          ></button>
        </div>
      </div>

      <slot name="progress"></slot>
    `;
  }
  static get is() {
    return "vaadin-upload-file";
  }
  /**
   * Fired when the retry button is pressed. It is listened by `vaadin-upload`
   * which will start a new upload process of this file.
   *
   * @event file-retry
   * @param {Object} detail
   * @param {Object} detail.file file to retry upload of
   */
  /**
   * Fired when the start button is pressed. It is listened by `vaadin-upload`
   * which will start a new upload process of this file.
   *
   * @event file-start
   * @param {Object} detail
   * @param {Object} detail.file file to start upload of
   */
  /**
   * Fired when abort button is pressed. It is listened by `vaadin-upload` which
   * will abort the upload in progress, and then remove the file from the list.
   *
   * @event file-abort
   * @param {Object} detail
   * @param {Object} detail.file file to abort upload of
   */
};
defineCustomElement(UploadFile);
var UploadFileListMixin = (superClass) => class UploadFileListMixin extends superClass {
  static get properties() {
    return {
      /**
       * The array of files being processed, or already uploaded.
       */
      items: {
        type: Array
      },
      /**
       * The object used to localize upload files.
       */
      i18n: {
        type: Object
      },
      /**
       * If true, the user cannot interact with this element.
       */
      disabled: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      }
    };
  }
  static get observers() {
    return ["__updateItems(items, i18n, disabled)"];
  }
  /** @private */
  __updateItems(items, i18n) {
    if (items && i18n) {
      this.requestContentUpdate();
    }
  }
  /**
   * Requests an update for the `vaadin-upload-file` elements.
   *
   * It is not guaranteed that the update happens immediately (synchronously) after it is requested.
   */
  requestContentUpdate() {
    const {
      items,
      i18n,
      disabled
    } = this;
    D(b`
          ${items.map((file) => b`
              <li>
                <vaadin-upload-file
                  .disabled="${disabled}"
                  .file="${file}"
                  .complete="${file.complete}"
                  .errorMessage="${file.error}"
                  .fileName="${file.name}"
                  .held="${file.held}"
                  .indeterminate="${file.indeterminate}"
                  .progress="${file.progress}"
                  .status="${file.status}"
                  .uploading="${file.uploading}"
                  .i18n="${i18n}"
                ></vaadin-upload-file>
              </li>
            `)}
        `, this);
  }
};
var UploadFileList = class extends UploadFileListMixin(ThemableMixin(PolymerElement)) {
  static get is() {
    return "vaadin-upload-file-list";
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

        [part='list'] {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
      </style>
      <ul part="list">
        <slot></slot>
      </ul>
    `;
  }
};
defineCustomElement(UploadFileList);
var AddButtonController = class extends SlotController {
  constructor(host) {
    super(host, "add-button", "vaadin-button");
  }
  /**
   * Override method inherited from `SlotController`
   * to add listeners to default and custom node.
   *
   * @param {Node} node
   * @protected
   * @override
   */
  initNode(node) {
    if (node._isDefault) {
      this.defaultNode = node;
    }
    node.addEventListener("touchend", (e) => {
      this.host._onAddFilesTouchEnd(e);
    });
    node.addEventListener("click", (e) => {
      this.host._onAddFilesClick(e);
    });
    this.host._addButton = node;
  }
};
var DropLabelController = class extends SlotController {
  constructor(host) {
    super(host, "drop-label", "span");
  }
  /**
   * Override method inherited from `SlotController`
   * to add listeners to default and custom node.
   *
   * @param {Node} node
   * @protected
   * @override
   */
  initNode(node) {
    if (node._isDefault) {
      this.defaultNode = node;
    }
    this.host._dropLabel = node;
  }
};
var UploadMixin = (superClass) => class UploadMixin extends superClass {
  static get properties() {
    return {
      /**
       * If true, the user cannot interact with this element.
       * @type {boolean}
       */
      disabled: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * Define whether the element supports dropping files on it for uploading.
       * By default it's enabled in desktop and disabled in touch devices
       * because mobile devices do not support drag events in general. Setting
       * it false means that drop is enabled even in touch-devices, and true
       * disables drop in all devices.
       *
       * @type {boolean}
       * @default true in touch-devices, false otherwise.
       */
      nodrop: {
        type: Boolean,
        reflectToAttribute: true,
        value: isTouch
      },
      /**
       * The server URL. The default value is an empty string, which means that
       * _window.location_ will be used.
       * @type {string}
       */
      target: {
        type: String,
        value: ""
      },
      /**
       * HTTP Method used to send the files. Only POST and PUT are allowed.
       * @type {!UploadMethod}
       */
      method: {
        type: String,
        value: "POST"
      },
      /**
       * Key-Value map to send to the server. If you set this property as an
       * attribute, use a valid JSON string, for example:
       * ```
       * <vaadin-upload headers='{"X-Foo": "Bar"}'></vaadin-upload>
       * ```
       * @type {object | string}
       */
      headers: {
        type: Object,
        value: {}
      },
      /**
       * Max time in milliseconds for the entire upload process, if exceeded the
       * request will be aborted. Zero means that there is no timeout.
       * @type {number}
       */
      timeout: {
        type: Number,
        value: 0
      },
      /** @private */
      _dragover: {
        type: Boolean,
        value: false,
        observer: "_dragoverChanged"
      },
      /**
       * The array of files being processed, or already uploaded.
       *
       * Each element is a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File)
       * object with a number of extra properties  to track the upload process:
       * - `uploadTarget`: The target URL used to upload this file.
       * - `elapsed`: Elapsed time since the upload started.
       * - `elapsedStr`: Human-readable elapsed time.
       * - `remaining`: Number of seconds remaining for the upload to finish.
       * - `remainingStr`: Human-readable remaining time for the upload to finish.
       * - `progress`: Percentage of the file already uploaded.
       * - `speed`: Upload speed in kB/s.
       * - `size`: File size in bytes.
       * - `totalStr`: Human-readable total size of the file.
       * - `loaded`: Bytes transferred so far.
       * - `loadedStr`: Human-readable uploaded size at the moment.
       * - `status`: Status of the upload process.
       * - `error`: Error message in case the upload failed.
       * - `abort`: True if the file was canceled by the user.
       * - `complete`: True when the file was transferred to the server.
       * - `uploading`: True while transferring data to the server.
       * @type {!Array<!UploadFile>}
       */
      files: {
        type: Array,
        notify: true,
        value: () => [],
        sync: true
      },
      /**
       * Limit of files to upload, by default it is unlimited. If the value is
       * set to one, native file browser will prevent selecting multiple files.
       * @attr {number} max-files
       * @type {number}
       */
      maxFiles: {
        type: Number,
        value: Infinity,
        sync: true
      },
      /**
       * Specifies if the maximum number of files have been uploaded
       * @attr {boolean} max-files-reached
       * @type {boolean}
       */
      maxFilesReached: {
        type: Boolean,
        value: false,
        notify: true,
        readOnly: true,
        reflectToAttribute: true
      },
      /**
       * Specifies the types of files that the server accepts.
       * Syntax: a comma-separated list of MIME type patterns (wildcards are
       * allowed) or file extensions.
       * Notice that MIME types are widely supported, while file extensions
       * are only implemented in certain browsers, so avoid using it.
       * Example: accept="video/*,image/tiff" or accept=".pdf,audio/mp3"
       * @type {string}
       */
      accept: {
        type: String,
        value: ""
      },
      /**
       * Specifies the maximum file size in bytes allowed to upload.
       * Notice that it is a client-side constraint, which will be checked before
       * sending the request. Obviously you need to do the same validation in
       * the server-side and be sure that they are aligned.
       * @attr {number} max-file-size
       * @type {number}
       */
      maxFileSize: {
        type: Number,
        value: Infinity
      },
      /**
       * Specifies if the dragover is validated with maxFiles and
       * accept properties.
       * @private
       */
      _dragoverValid: {
        type: Boolean,
        value: false,
        observer: "_dragoverValidChanged"
      },
      /**
       * Specifies the 'name' property at Content-Disposition
       * @attr {string} form-data-name
       * @type {string}
       */
      formDataName: {
        type: String,
        value: "file"
      },
      /**
       * Prevents upload(s) from immediately uploading upon adding file(s).
       * When set, you must manually trigger uploads using the `uploadFiles` method
       * @attr {boolean} no-auto
       * @type {boolean}
       */
      noAuto: {
        type: Boolean,
        value: false
      },
      /**
       * Set the withCredentials flag on the request.
       * @attr {boolean} with-credentials
       * @type {boolean}
       */
      withCredentials: {
        type: Boolean,
        value: false
      },
      /**
       * Pass-through to input's capture attribute. Allows user to trigger device inputs
       * such as camera or microphone immediately.
       */
      capture: String,
      /**
       * The object used to localize this component.
       * For changing the default localization, change the entire
       * _i18n_ object or just the property you want to modify.
       *
       * The object has the following JSON structure and default values:
       *
       * ```
       * {
       *   dropFiles: {
       *     one: 'Drop file here',
       *     many: 'Drop files here'
       *   },
       *   addFiles: {
       *     one: 'Upload File...',
       *     many: 'Upload Files...'
       *   },
       *   error: {
       *     tooManyFiles: 'Too Many Files.',
       *     fileIsTooBig: 'File is Too Big.',
       *     incorrectFileType: 'Incorrect File Type.'
       *   },
       *   uploading: {
       *     status: {
       *       connecting: 'Connecting...',
       *       stalled: 'Stalled',
       *       processing: 'Processing File...',
       *       held: 'Queued'
       *     },
       *     remainingTime: {
       *       prefix: 'remaining time: ',
       *       unknown: 'unknown remaining time'
       *     },
       *     error: {
       *       serverUnavailable: 'Upload failed, please try again later',
       *       unexpectedServerError: 'Upload failed due to server error',
       *       forbidden: 'Upload forbidden'
       *     }
       *   },
       *   file: {
       *     retry: 'Retry',
       *     start: 'Start',
       *     remove: 'Remove'
       *   },
       *   units: {
       *     size: ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
       *     sizeBase: 1000
       *   },
       *   formatSize: function(bytes) {
       *     // returns the size followed by the best suitable unit
       *   },
       *   formatTime: function(seconds, [secs, mins, hours]) {
       *     // returns a 'HH:MM:SS' string
       *   }
       * }
       * ```
       *
       * @type {!UploadI18n}
       * @default {English}
       */
      i18n: {
        type: Object,
        value() {
          return {
            dropFiles: {
              one: "Drop file here",
              many: "Drop files here"
            },
            addFiles: {
              one: "Upload File...",
              many: "Upload Files..."
            },
            error: {
              tooManyFiles: "Too Many Files.",
              fileIsTooBig: "File is Too Big.",
              incorrectFileType: "Incorrect File Type."
            },
            uploading: {
              status: {
                connecting: "Connecting...",
                stalled: "Stalled",
                processing: "Processing File...",
                held: "Queued"
              },
              remainingTime: {
                prefix: "remaining time: ",
                unknown: "unknown remaining time"
              },
              error: {
                serverUnavailable: "Upload failed, please try again later",
                unexpectedServerError: "Upload failed due to server error",
                forbidden: "Upload forbidden"
              }
            },
            file: {
              retry: "Retry",
              start: "Start",
              remove: "Remove"
            },
            units: {
              size: ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
            }
          };
        }
      },
      /** @private */
      _addButton: {
        type: Object
      },
      /** @private */
      _dropLabel: {
        type: Object
      },
      /** @private */
      _fileList: {
        type: Object
      },
      /** @private */
      _files: {
        type: Array
      }
    };
  }
  static get observers() {
    return ["__updateAddButton(_addButton, maxFiles, i18n, maxFilesReached, disabled)", "__updateDropLabel(_dropLabel, maxFiles, i18n)", "__updateFileList(_fileList, files, i18n, disabled)", "__updateMaxFilesReached(maxFiles, files)"];
  }
  /** @private */
  get __acceptRegexp() {
    if (!this.accept) {
      return null;
    }
    const processedTokens = this.accept.split(",").map((token) => {
      let processedToken = token.trim();
      processedToken = processedToken.replace(/[+.]/gu, "\\$&");
      if (processedToken.startsWith("\\.")) {
        processedToken = `.*${processedToken}$`;
      }
      return processedToken.replace(/\/\*/gu, "/.*");
    });
    return new RegExp(`^(${processedTokens.join("|")})$`, "iu");
  }
  /** @protected */
  ready() {
    super.ready();
    this.addEventListener("dragover", this._onDragover.bind(this));
    this.addEventListener("dragleave", this._onDragleave.bind(this));
    this.addEventListener("drop", this._onDrop.bind(this));
    this.addEventListener("file-retry", this._onFileRetry.bind(this));
    this.addEventListener("file-abort", this._onFileAbort.bind(this));
    this.addEventListener("file-start", this._onFileStart.bind(this));
    this.addEventListener("file-reject", this._onFileReject.bind(this));
    this.addEventListener("upload-start", this._onUploadStart.bind(this));
    this.addEventListener("upload-success", this._onUploadSuccess.bind(this));
    this.addEventListener("upload-error", this._onUploadError.bind(this));
    this._addButtonController = new AddButtonController(this);
    this.addController(this._addButtonController);
    this._dropLabelController = new DropLabelController(this);
    this.addController(this._dropLabelController);
    this.addController(new SlotController(this, "file-list", "vaadin-upload-file-list", {
      initializer: (list) => {
        this._fileList = list;
      }
    }));
    this.addController(new SlotController(this, "drop-label-icon", "vaadin-upload-icon"));
  }
  /** @private */
  _formatSize(bytes) {
    if (typeof this.i18n.formatSize === "function") {
      return this.i18n.formatSize(bytes);
    }
    const base = this.i18n.units.sizeBase || 1e3;
    const unit = ~~(Math.log(bytes) / Math.log(base));
    const dec = Math.max(0, Math.min(3, unit - 1));
    const size = parseFloat((bytes / base ** unit).toFixed(dec));
    return `${size} ${this.i18n.units.size[unit]}`;
  }
  /** @private */
  _splitTimeByUnits(time) {
    const unitSizes = [60, 60, 24, Infinity];
    const timeValues = [0];
    for (let i = 0; i < unitSizes.length && time > 0; i++) {
      timeValues[i] = time % unitSizes[i];
      time = Math.floor(time / unitSizes[i]);
    }
    return timeValues;
  }
  /** @private */
  _formatTime(seconds, split) {
    if (typeof this.i18n.formatTime === "function") {
      return this.i18n.formatTime(seconds, split);
    }
    while (split.length < 3) {
      split.push(0);
    }
    return split.reverse().map((number) => {
      return (number < 10 ? "0" : "") + number;
    }).join(":");
  }
  /** @private */
  _formatFileProgress(file) {
    const remainingTime = file.loaded > 0 ? this.i18n.uploading.remainingTime.prefix + file.remainingStr : this.i18n.uploading.remainingTime.unknown;
    return `${file.totalStr}: ${file.progress}% (${remainingTime})`;
  }
  /** @private */
  __updateMaxFilesReached(maxFiles, files) {
    this._setMaxFilesReached(maxFiles >= 0 && files.length >= maxFiles);
  }
  /** @private */
  __updateAddButton(addButton, maxFiles, i18n, maxFilesReached, disabled) {
    if (addButton) {
      addButton.disabled = disabled || maxFilesReached;
      if (addButton === this._addButtonController.defaultNode) {
        addButton.textContent = this._i18nPlural(maxFiles, i18n.addFiles);
      }
    }
  }
  /** @private */
  __updateDropLabel(dropLabel, maxFiles, i18n) {
    if (dropLabel && dropLabel === this._dropLabelController.defaultNode) {
      dropLabel.textContent = this._i18nPlural(maxFiles, i18n.dropFiles);
    }
  }
  /** @private */
  __updateFileList(list, files, i18n, disabled) {
    if (list) {
      list.items = [...files];
      list.i18n = i18n;
      list.disabled = disabled;
    }
  }
  /** @private */
  _onDragover(event) {
    event.preventDefault();
    if (!this.nodrop && !this._dragover) {
      this._dragoverValid = !this.maxFilesReached && !this.disabled;
      this._dragover = true;
    }
    event.dataTransfer.dropEffect = !this._dragoverValid || this.nodrop ? "none" : "copy";
  }
  /** @private */
  _onDragleave(event) {
    event.preventDefault();
    if (this._dragover && !this.nodrop) {
      this._dragover = this._dragoverValid = false;
    }
  }
  /** @private */
  _onDrop(event) {
    return __async(this, null, function* () {
      if (!this.nodrop && !this.disabled) {
        event.preventDefault();
        this._dragover = this._dragoverValid = false;
        const files = yield this.__getFilesFromDropEvent(event);
        this._addFiles(files);
      }
    });
  }
  /**
   * Get the files from the drop event. The dropped items may contain a
   * combination of files and directories. If a dropped item is a directory,
   * it will be recursively traversed to get all files.
   *
   * @param {!DragEvent} dropEvent - The drop event
   * @returns {Promise<File[]>} - The files from the drop event
   * @private
   */
  __getFilesFromDropEvent(dropEvent) {
    function getFilesFromEntry(entry) {
      return __async(this, null, function* () {
        if (entry.isFile) {
          return new Promise((resolve) => {
            entry.file(resolve, () => resolve([]));
          });
        } else if (entry.isDirectory) {
          const reader = entry.createReader();
          const entries = yield new Promise((resolve) => {
            reader.readEntries(resolve, () => resolve([]));
          });
          const files = yield Promise.all(entries.map(getFilesFromEntry));
          return files.flat();
        }
      });
    }
    const containsFolders = Array.from(dropEvent.dataTransfer.items).filter((item) => !!item).filter((item) => typeof item.webkitGetAsEntry === "function").map((item) => item.webkitGetAsEntry()).some((entry) => !!entry && entry.isDirectory);
    if (!containsFolders) {
      return Promise.resolve(dropEvent.dataTransfer.files ? Array.from(dropEvent.dataTransfer.files) : []);
    }
    const filePromises = Array.from(dropEvent.dataTransfer.items).map((item) => item.webkitGetAsEntry()).filter((entry) => !!entry).map(getFilesFromEntry);
    return Promise.all(filePromises).then((files) => files.flat());
  }
  /** @private */
  _createXhr() {
    return new XMLHttpRequest();
  }
  /** @private */
  _configureXhr(xhr) {
    if (typeof this.headers === "string") {
      try {
        this.headers = JSON.parse(this.headers);
      } catch (_2) {
        this.headers = void 0;
      }
    }
    Object.entries(this.headers).forEach(([key, value]) => {
      xhr.setRequestHeader(key, value);
    });
    if (this.timeout) {
      xhr.timeout = this.timeout;
    }
    xhr.withCredentials = this.withCredentials;
  }
  /** @private */
  _setStatus(file, total, loaded, elapsed) {
    file.elapsed = elapsed;
    file.elapsedStr = this._formatTime(file.elapsed, this._splitTimeByUnits(file.elapsed));
    file.remaining = Math.ceil(elapsed * (total / loaded - 1));
    file.remainingStr = this._formatTime(file.remaining, this._splitTimeByUnits(file.remaining));
    file.speed = ~~(total / elapsed / 1024);
    file.totalStr = this._formatSize(total);
    file.loadedStr = this._formatSize(loaded);
    file.status = this._formatFileProgress(file);
  }
  /**
   * Triggers the upload of any files that are not completed
   *
   * @param {!UploadFile | !Array<!UploadFile>=} files - Files being uploaded. Defaults to all outstanding files
   */
  uploadFiles(files = this.files) {
    if (files && !Array.isArray(files)) {
      files = [files];
    }
    files = files.filter((file) => !file.complete);
    Array.prototype.forEach.call(files, this._uploadFile.bind(this));
  }
  /** @private */
  _uploadFile(file) {
    if (file.uploading) {
      return;
    }
    const ini = Date.now();
    const xhr = file.xhr = this._createXhr();
    let stalledId, last;
    xhr.upload.onprogress = (e) => {
      clearTimeout(stalledId);
      last = Date.now();
      const elapsed = (last - ini) / 1e3;
      const loaded = e.loaded, total = e.total, progress = ~~(loaded / total * 100);
      file.loaded = loaded;
      file.progress = progress;
      file.indeterminate = loaded <= 0 || loaded >= total;
      if (file.error) {
        file.indeterminate = file.status = void 0;
      } else if (!file.abort) {
        if (progress < 100) {
          this._setStatus(file, total, loaded, elapsed);
          stalledId = setTimeout(() => {
            file.status = this.i18n.uploading.status.stalled;
            this._renderFileList();
          }, 2e3);
        } else {
          file.loadedStr = file.totalStr;
          file.status = this.i18n.uploading.status.processing;
        }
      }
      this._renderFileList();
      this.dispatchEvent(new CustomEvent("upload-progress", {
        detail: {
          file,
          xhr
        }
      }));
    };
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        clearTimeout(stalledId);
        file.indeterminate = file.uploading = false;
        if (file.abort) {
          return;
        }
        file.status = "";
        const evt2 = this.dispatchEvent(new CustomEvent("upload-response", {
          detail: {
            file,
            xhr
          },
          cancelable: true
        }));
        if (!evt2) {
          return;
        }
        if (xhr.status === 0) {
          file.error = this.i18n.uploading.error.serverUnavailable;
        } else if (xhr.status >= 500) {
          file.error = this.i18n.uploading.error.unexpectedServerError;
        } else if (xhr.status >= 400) {
          file.error = this.i18n.uploading.error.forbidden;
        }
        file.complete = !file.error;
        this.dispatchEvent(new CustomEvent(`upload-${file.error ? "error" : "success"}`, {
          detail: {
            file,
            xhr
          }
        }));
        this._renderFileList();
      }
    };
    const formData = new FormData();
    if (!file.uploadTarget) {
      file.uploadTarget = this.target || "";
    }
    file.formDataName = this.formDataName;
    const evt = this.dispatchEvent(new CustomEvent("upload-before", {
      detail: {
        file,
        xhr
      },
      cancelable: true
    }));
    if (!evt) {
      return;
    }
    formData.append(file.formDataName, file, file.name);
    xhr.open(this.method, file.uploadTarget, true);
    this._configureXhr(xhr);
    file.status = this.i18n.uploading.status.connecting;
    file.uploading = file.indeterminate = true;
    file.complete = file.abort = file.error = file.held = false;
    xhr.upload.onloadstart = () => {
      this.dispatchEvent(new CustomEvent("upload-start", {
        detail: {
          file,
          xhr
        }
      }));
      this._renderFileList();
    };
    const uploadEvt = this.dispatchEvent(new CustomEvent("upload-request", {
      detail: {
        file,
        xhr,
        formData
      },
      cancelable: true
    }));
    if (uploadEvt) {
      xhr.send(formData);
    }
  }
  /** @private */
  _retryFileUpload(file) {
    const evt = this.dispatchEvent(new CustomEvent("upload-retry", {
      detail: {
        file,
        xhr: file.xhr
      },
      cancelable: true
    }));
    if (evt) {
      this._uploadFile(file);
      this._updateFocus(this.files.indexOf(file));
    }
  }
  /** @private */
  _abortFileUpload(file) {
    const evt = this.dispatchEvent(new CustomEvent("upload-abort", {
      detail: {
        file,
        xhr: file.xhr
      },
      cancelable: true
    }));
    if (evt) {
      file.abort = true;
      if (file.xhr) {
        file.xhr.abort();
      }
      this._removeFile(file);
    }
  }
  /** @private */
  _renderFileList() {
    if (this._fileList && typeof this._fileList.requestContentUpdate === "function") {
      this._fileList.requestContentUpdate();
    }
  }
  /** @private */
  _addFiles(files) {
    Array.prototype.forEach.call(files, this._addFile.bind(this));
  }
  /**
   * Add the file for uploading. Called internally for each file after picking files from dialog or dropping files.
   *
   * @param {!UploadFile} file File being added
   * @protected
   */
  _addFile(file) {
    if (this.maxFilesReached) {
      this.dispatchEvent(new CustomEvent("file-reject", {
        detail: {
          file,
          error: this.i18n.error.tooManyFiles
        }
      }));
      return;
    }
    if (this.maxFileSize >= 0 && file.size > this.maxFileSize) {
      this.dispatchEvent(new CustomEvent("file-reject", {
        detail: {
          file,
          error: this.i18n.error.fileIsTooBig
        }
      }));
      return;
    }
    const re = this.__acceptRegexp;
    if (re && !(re.test(file.type) || re.test(file.name))) {
      this.dispatchEvent(new CustomEvent("file-reject", {
        detail: {
          file,
          error: this.i18n.error.incorrectFileType
        }
      }));
      return;
    }
    file.loaded = 0;
    file.held = true;
    file.status = this.i18n.uploading.status.held;
    this.files = [file, ...this.files];
    if (!this.noAuto) {
      this._uploadFile(file);
    }
  }
  /** @private */
  _updateFocus(fileIndex) {
    if (this.files.length === 0) {
      this._addButton.focus();
      return;
    }
    const lastFileRemoved = fileIndex === this.files.length;
    if (lastFileRemoved) {
      fileIndex -= 1;
    }
    this._fileList.children[fileIndex].firstElementChild.focus();
  }
  /**
   * Remove file from upload list. Called internally if file upload was canceled.
   * @param {!UploadFile} file File to remove
   * @protected
   */
  _removeFile(file) {
    const fileIndex = this.files.indexOf(file);
    if (fileIndex >= 0) {
      this.files = this.files.filter((i) => i !== file);
      this.dispatchEvent(new CustomEvent("file-remove", {
        detail: {
          file
        },
        bubbles: true,
        composed: true
      }));
      this._updateFocus(fileIndex);
    }
  }
  /** @private */
  _onAddFilesTouchEnd(e) {
    e.preventDefault();
    this._onAddFilesClick(e);
  }
  /** @private */
  _onAddFilesClick(e) {
    if (this.maxFilesReached) {
      return;
    }
    e.stopPropagation();
    this.$.fileInput.value = "";
    this.$.fileInput.click();
  }
  /** @private */
  _onFileInputChange(event) {
    this._addFiles(event.target.files);
  }
  /** @private */
  _onFileStart(event) {
    this._uploadFile(event.detail.file);
  }
  /** @private */
  _onFileRetry(event) {
    this._retryFileUpload(event.detail.file);
  }
  /** @private */
  _onFileAbort(event) {
    this._abortFileUpload(event.detail.file);
  }
  /** @private */
  _onFileReject(event) {
    announce(`${event.detail.file.name}: ${event.detail.error}`, {
      mode: "alert"
    });
  }
  /** @private */
  _onUploadStart(event) {
    announce(`${event.detail.file.name}: 0%`, {
      mode: "alert"
    });
  }
  /** @private */
  _onUploadSuccess(event) {
    announce(`${event.detail.file.name}: 100%`, {
      mode: "alert"
    });
  }
  /** @private */
  _onUploadError(event) {
    announce(`${event.detail.file.name}: ${event.detail.file.error}`, {
      mode: "alert"
    });
  }
  /** @private */
  _dragoverChanged(dragover) {
    if (dragover) {
      this.setAttribute("dragover", dragover);
    } else {
      this.removeAttribute("dragover");
    }
  }
  /** @private */
  _dragoverValidChanged(dragoverValid) {
    if (dragoverValid) {
      this.setAttribute("dragover-valid", dragoverValid);
    } else {
      this.removeAttribute("dragover-valid");
    }
  }
  /** @private */
  _i18nPlural(value, plural) {
    return value === 1 ? plural.one : plural.many;
  }
  /** @protected */
  _isMultiple(maxFiles) {
    return maxFiles !== 1;
  }
};
var Upload = class extends UploadMixin(ElementMixin(ThemableMixin(ControllerMixin(PolymerElement)))) {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          position: relative;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        [hidden] {
          display: none !important;
        }
      </style>

      <div part="primary-buttons">
        <slot name="add-button"></slot>
        <div part="drop-label" hidden$="[[nodrop]]" id="dropLabelContainer" aria-hidden="true">
          <slot name="drop-label-icon"></slot>
          <slot name="drop-label"></slot>
        </div>
      </div>
      <slot name="file-list"></slot>
      <slot></slot>
      <input
        type="file"
        id="fileInput"
        hidden
        on-change="_onFileInputChange"
        accept$="{{accept}}"
        multiple$="[[_isMultiple(maxFiles)]]"
        capture$="[[capture]]"
      />
    `;
  }
  static get is() {
    return "vaadin-upload";
  }
  /**
   * Fired when a file cannot be added to the queue due to a constrain:
   *  file-size, file-type or maxFiles
   *
   * @event file-reject
   * @param {Object} detail
   * @param {Object} detail.file the file added
   * @param {string} detail.error the cause
   */
  /**
   * Fired before the XHR is opened. Could be used for changing the request
   * URL. If the default is prevented, then XHR would not be opened.
   *
   * @event upload-before
   * @param {Object} detail
   * @param {Object} detail.xhr the xhr
   * @param {Object} detail.file the file being uploaded
   * @param {Object} detail.file.uploadTarget the upload request URL, initialized with the value of vaadin-upload `target` property
   */
  /**
   * Fired when the XHR has been opened but not sent yet. Useful for appending
   * data keys to the FormData object, for changing some parameters like
   * headers, etc. If the event is defaultPrevented, `vaadin-upload` will not
   * send the request allowing the user to do something on his own.
   *
   * @event upload-request
   * @param {Object} detail
   * @param {Object} detail.xhr the xhr
   * @param {Object} detail.file the file being uploaded
   * @param {Object} detail.formData the FormData object
   */
  /**
   * Fired when the XHR is sent.
   *
   * @event upload-start
   * @param {Object} detail
   * @param {Object} detail.xhr the xhr
   * @param {Object} detail.file the file being uploaded
   */
  /**
   * Fired as many times as the progress is updated.
   *
   * @event upload-progress
   * @param {Object} detail
   * @param {Object} detail.xhr the xhr
   * @param {Object} detail.file the file being uploaded with loaded info
   */
  /**
   * Fired when we have the actual server response, and before the component
   * analyses it. It's useful for developers to make the upload fail depending
   * on the server response. If the event is defaultPrevented the vaadin-upload
   * will return allowing the user to do something on his own like retry the
   * upload, etc. since he has full access to the `xhr` and `file` objects.
   * Otherwise, if the event is not prevented default `vaadin-upload` continues
   * with the normal workflow checking the `xhr.status` and `file.error`
   * which also might be modified by the user to force a customized response.
   *
   * @event upload-response
   * @param {Object} detail
   * @param {Object} detail.xhr the xhr
   * @param {Object} detail.file the file being uploaded
   */
  /**
   * Fired in case the upload process succeed.
   *
   * @event upload-success
   * @param {Object} detail
   * @param {Object} detail.xhr the xhr
   * @param {Object} detail.file the file being uploaded with loaded info
   */
  /**
   * Fired in case the upload process failed.
   *
   * @event upload-error
   * @param {Object} detail
   * @param {Object} detail.xhr the xhr
   * @param {Object} detail.file the file being uploaded
   */
  /**
   * Fired when retry upload is requested. If the default is prevented, then
   * retry would not be performed.
   *
   * @event upload-retry
   * @param {Object} detail
   * @param {Object} detail.xhr the previous upload xhr
   * @param {Object} detail.file the file being uploaded
   */
  /**
   * Fired when retry abort is requested. If the default is prevented, then the
   * file upload would not be aborted.
   *
   * @event upload-abort
   * @param {Object} detail
   * @param {Object} detail.xhr the xhr
   * @param {Object} detail.file the file being uploaded
   */
};
defineCustomElement(Upload);
function CreateDomModules(options) {
  const DomModuleUploaderUpload = document.createElement("dom-module");
  DomModuleUploaderUpload.setAttribute("theme-for", "vaadin-upload");
  DomModuleUploaderUpload.setAttribute("id", `bh-uploader__upload-style`);
  DomModuleUploaderUpload.innerHTML = `<template><style>
    :host(:not([nodrop])) {
      overflow: unset;
      padding: var(--spacing-padding-medium);
      min-height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      background-color: var(--color-fill-cta-secondary-hover);
      border: var(--effect-border-width-regular) dashed var(--color-border-form-hover);
      transition: var(--motion-duration-normal) var(--motion-easing-normal);
    }

    :host() ::slotted(add-button) {
      background-color: red;
    }

    :host([dragover-valid]) {
      background-color: var(--color-fill-cta-secondary-pressed);
      border: var(--effect-border-width-regular) dashed var(--color-border-form-hover);
    }

    :host([dragover-valid]) [part='drop-label'] {
      display: none;
    }

    :host(:not([nodrop])) [part='upload-button'] {
      background-color: transparent;

      color: var(--color-text-common-secondary);
      font-family: var(--font-family-body-small);
      font-size: var(--font-size-body-small);
      text-decoration: underline;
    }

    :host(:not([nodrop])) [part='upload-button']:hover::before {
      background-color: transparent;
      opacity: 0;
    }

    :host(:not([nodrop])) [part='upload-button']::after {
      transition: none;
      filter: none;
    }

    :host(:not([nodrop])) [part='upload-button']:active  {
      background-color: transparent;
    }

    :host(:not([nodrop])) [part='upload-button'][focused] {
      box-shadow: none;
    }

    [part='drop-label'] {
      display: none;
    }

    [part="primary-buttons"] {
      display: flex;
      flex-direction: column;
    }

    :host([nodrop]) [part='upload-button'] {
      min-width: 124px;
      height: 44px;
      padding: var(--spacing-padding-small) var(--spacing-padding-medium);
      margin: 0;
      box-sizing: border-box;
      font-family: var(--font-family-button-link-medium);
      font-size: var(--font-size-button-link-medium);
      font-weight: 600;
      color: var(--color-text-common-inverse-primary);
      background-color: var(--color-fill-cta-primary-default);
      border-radius: var(--effect-border-radius-medium);
      cursor: pointer;
      transition: var(--motion-duration-normal);
    }

    :host([nodrop]) [part='upload-button']:hover  {
      background-color: var(--color-fill-cta-primary-hover);
    }

    :host([nodrop]) [part='upload-button']:active  {
      background-color: var(--color-fill-cta-primary-pressed);
    }

    :host([nodrop]) [part='upload-button'][focused] {
      box-shadow: var(--effect-drop-shadow-focus-primary);
    }

    [part='file-list'] {
      width: 100%;
    }

    [part='file-list'] vaadin-upload-file:first-child {
      margin-top: var(--spacing-margin-medium);
    }

    [part='file-list'] vaadin-upload-file:last-child {
      margin-bottom: 0px;
    }
	</style></template>`;
  const DomModuleUploaderFile = document.createElement("dom-module");
  DomModuleUploaderFile.setAttribute("theme-for", "vaadin-upload-file");
  DomModuleUploaderFile.setAttribute("id", `bh-uploader__file-style`);
  DomModuleUploaderFile.innerHTML = `<template><style>
    :host {
      padding: 0;
      margin-bottom: var(--spacing-margin-medium);

      line-height: initial;
    }

    :host(:not(:first-child)) {
      border-top: none;
    }

    [part='info'] {
      align-items: initial;
    }

    [part='done-icon'], [part='warning-icon'] {
      font-size: var(--font-size-icon-small);
      font-family: var(--font-family-icon-small);
      margin-right: var(--spacing-margin-xsmall);
      margin-top: 1px;
    }

    [part='done-icon']::before {
      display: flex;
      content: 'check_circle';
      color: var(--color-fill-cta-primary-default);
    }

    [part='warning-icon']::before {
      display: flex;
      content: 'error_outline';
      color: var(--color-fill-cta-critical-default);
    }

    [part='name'] {
      color: var(--color-text-common-primary);
      font-family: var(--font-family-body-medium);
      font-size: var(--font-size-body-medium);
      line-height: var(--font-line-height-body-medium);
    }

    [part$="button"] {
      width: var(--font-size-icon-small);
      height: var(--font-size-icon-small);
    }

    [part='start-button'], [part='retry-button'], [part='clear-button'] {
      cursor: pointer;
      margin-left: var(--spacing-margin-small);
    }

    [part='clear-button']::before {
      display: flex;

      font-family: var(--font-family-icon-small);
      font-size: var(--font-size-icon-small);
      content: 'close';
      color: var(--color-text-common-secondary);
    }

    [part='retry-button']::before {
      display: flex;

      font-family: var(--font-family-icon-small);
      font-size: var(--font-size-icon-small);
      content: 'refresh';
      color: var(--color-text-common-secondary);
    }

    [part='start-button']::before {
      display: flex;

      font-family: var(--font-family-icon-small);
      font-size: var(--font-size-icon-small);
      content: 'play_arrow';
      color: var(--color-text-common-secondary);
    }

    [part='status'], [part='error'] {
      color: var(--color-text-common-secondary);
      font-family: var(--font-family-body-small);
      font-size: var(--font-size-body-small);
      line-height: var(--font-line-height-body-small);
    }

    [part='error'] {
      color: var(--color-fill-cta-critical-default);
    }

    [part='progress'] {
      height: var(--spacing-margin-xxsmall);
      margin-top: var(--spacing-margin-small);
    }
	</style></template>`;
  const DomModuleUploaderProgressBar = document.createElement("dom-module");
  DomModuleUploaderProgressBar.setAttribute("theme-for", "vaadin-progress-bar");
  DomModuleUploaderProgressBar.setAttribute("id", `bh-uploader__progress-bar-style`);
  DomModuleUploaderProgressBar.innerHTML = `<template><style>
    [part="bar"] {
      border-radius: 0;
      background-color: var(--color-border-data-viz-comparison-secondary);
    }

    [part="value"] {
      border-radius: 0;
      background-color: var(--color-fill-control-selected);
    }
  
    :host([indeterminate]) [part="value"] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--color-fill-control-selected) 10%, var(--color-fill-control-selected));
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--color-fill-control-selected) 10%, var(--color-fill-control-selected));
    }

    :host(:not([aria-valuenow])) [part="value"]::before, :host([indeterminate]) [part="value"]::before {
      background-color: var(--color-fill-control-selected);
    }
	</style></template>`;
  return [DomModuleUploaderUpload, DomModuleUploaderFile, DomModuleUploaderProgressBar];
}
var bhUploaderCss = "vaadin-progress-bar{background-color:var(--color-border-form-hover);--lumo-primary-color-10pct:var(--color-fill-semantic-success-default);--lumo-primary-color:var(--color-fill-semantic-success-default)}.bh-uploader--button{border:none;padding:0;font:inherit;outline:inherit;display:flex;justify-content:center;align-items:center;border-radius:var(--effect-border-radius-medium);box-shadow:none;padding:0 var(--spacing-padding-medium);background-color:var(--color-fill-cta-primary-default);color:var(--color-text-common-inverse-primary);height:var(--button-medium-height);min-width:var(--button-medium-width);-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;cursor:pointer}.bh-uploader--button:hover{background-color:var(--color-fill-cta-primary-hover)}.bh-uploader--button:active{background-color:var(--color-fill-cta-primary-pressed)}.bh-uploader--button:focus{box-shadow:var(--effect-drop-shadow-focus-primary)}.bh-uploader--button:focus:not(:focus-visible){box-shadow:none}.bh-uploader--button-icon{margin-right:var(--spacing-margin-xsmall)}.bh-uploader--help-text{color:var(--color-text-common-secondary)}.bh-uploader--dropzone-button{border:none;padding:0;font:inherit;outline:inherit;background-color:transparent;cursor:pointer}.bh-uploader--dropzone-text{color:var(--color-text-common-secondary);font-family:var(--font-family-body-small);font-size:var(--font-size-body-small);text-decoration:underline}.bh-uploader--secondary--disabled,.bh-uploader--secondary--disabled:hover,.bh-uploader--secondary--disabled:active{cursor:not-allowed}.bh-uploader--ghost--disabled,.bh-uploader--ghost--disabled:hover,.bh-uploader--ghost--disabled:active{cursor:not-allowed}.bh-uploader{display:block}vaadin-upload-file::part(done-icon):before{font-family:'Material Icons Outlined';content:'check_circle';color:var(--color-fill-cta-primary-default)}vaadin-upload-file::part(warning-icon)::before{font-family:'Material Icons Outlined';content:'error_outline';color:var(--color-fill-cta-critical-default)}vaadin-upload-file::part(clear-button)::before{font-family:var(--font-family-icon-small);font-size:var(--font-size-icon-small);font-family:'Material Icons Outlined';content:'close';color:var(--color-text-common-secondary)}vaadin-upload-file::part(retry-button)::before{font-family:var(--font-family-icon-small);font-size:var(--font-size-icon-small);font-family:'Material Icons Outlined';content:'refresh';color:var(--color-text-common-secondary)}vaadin-upload-file::part(start-button)::before{font-family:var(--font-family-icon-small);font-size:var(--font-size-icon-small);font-family:'Material Icons Outlined';content:'play_arrow';color:var(--color-text-common-secondary)}vaadin-upload-file::part(done-icon):before{font-family:'Material Icons Outlined';content:'check_circle';color:var(--color-fill-semantic-success-default)}vaadin-upload-file::part(warning-icon)::before{font-family:'Material Icons Outlined';content:'error_outline';color:var(--color-fill-cta-critical-default)}vaadin-upload-file::part(clear-button)::before{font-family:var(--font-family-icon-small);font-size:var(--font-size-icon-small);font-family:'Material Icons Outlined';content:'close';color:var(--color-text-common-secondary)}vaadin-upload-file::part(retry-button)::before{font-family:var(--font-family-icon-small);font-size:var(--font-size-icon-small);font-family:'Material Icons Outlined';content:'refresh';color:var(--color-text-common-secondary)}vaadin-upload-file::part(start-button)::before{font-family:var(--font-family-icon-small);font-size:var(--font-size-icon-small);font-family:'Material Icons Outlined';content:'play_arrow';color:var(--color-text-common-secondary)}vaadin-upload-file::part(name){color:var(--color-text-common-primary)}vaadin-upload-file::part(status){color:var(--color-text-common-primary)}vaadin-upload-file::part(start-button){color:var(--color-text-common-secondary)}vaadin-upload-file::part(retry-button){color:var(--color-text-common-secondary)}vaadin-upload-file::part(clear-button){color:var(--color-text-common-secondary)}vaadin-upload-file::part(remove-button){color:var(--color-text-common-secondary)}vaadin-upload-file::part(error){color:var(--color-fill-cta-critical-default)}";
var BhUploaderStyle0 = bhUploaderCss;
var BhUploader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhUploadSucess = createEvent(this, "bhUploadSucess", 7);
    this.bhUploadStart = createEvent(this, "bhUploadStart", 7);
    this.bhUploadError = createEvent(this, "bhUploadError", 7);
    this.bhUploadProgress = createEvent(this, "bhUploadProgress", 7);
    this.bhFileReject = createEvent(this, "bhFileReject", 7);
    this.bhFilesChanged = createEvent(this, "bhFilesChanged", 7);
    this.bhMaxFilesReachedChanged = createEvent(this, "bhMaxFilesReachedChanged", 7);
    this.bhUploadAbort = createEvent(this, "bhUploadAbort", 7);
    this.bhUploadBefore = createEvent(this, "bhUploadBefore", 7);
    this.bhUploadRequest = createEvent(this, "bhUploadRequest", 7);
    this.bhUploadResponse = createEvent(this, "bhUploadResponse", 7);
    this.bhUploadRetry = createEvent(this, "bhUploadRetry", 7);
    this.id = void 0;
    this.isSmall = false;
    this.helpText = void 0;
    this.fileType = "";
    this.maxFiles = void 0;
    this.method = "POST";
    this.maxFileSize = void 0;
    this.target = "";
    this.type = "primary";
    this.isTarget = true;
    this.leftIcon = "cloud_upload";
    this.noAuto = false;
    this.isDisabled = false;
    this.label = "Upload";
    this.headers = {};
  }
  uploadEventHandler(event) {
    if (event.detail) {
      this.el__uploader.uploadFiles(event.detail);
    } else {
      this.el__uploader.uploadFiles();
    }
  }
  reset() {
    return __async(this, null, function* () {
      this.el__uploader.files = [];
      return true;
    });
  }
  componentWillLoad() {
    if (!document.getElementById("bh-uploader__upload-style") || !document.getElementById("bh-uploader__button-style") || !document.getElementById("bh-uploader__file-style") || !document.getElementById("bh-uploader__progress-bar-style")) {
      CreateDomModules().forEach((m) => {
        document.body.appendChild(m);
      });
    }
  }
  componentDidLoad() {
    this.el__uploader.addEventListener("upload-success", (event) => this.bhUploadSucess.emit(event));
    this.el__uploader.addEventListener("upload-start", (event) => this.bhUploadStart.emit(event));
    this.el__uploader.addEventListener("upload-error", (event) => this.bhUploadError.emit(event));
    this.el__uploader.addEventListener("upload-progress", (event) => this.bhUploadProgress.emit(event));
    this.el__uploader.addEventListener("file-reject", (event) => this.bhFileReject.emit(event));
    this.el__uploader.addEventListener("files-changed", (event) => this.bhFilesChanged.emit(event));
    this.el__uploader.addEventListener("max-files-reached-changed", (event) => this.bhMaxFilesReachedChanged.emit(event));
    this.el__uploader.addEventListener("upload-abort", (event) => this.bhUploadAbort.emit(event));
    this.el__uploader.addEventListener("upload-before", (event) => this.bhUploadBefore.emit(event));
    this.el__uploader.addEventListener("upload-request", (event) => this.bhUploadRequest.emit(event));
    this.el__uploader.addEventListener("upload-response", (event) => this.bhUploadResponse.emit(event));
    this.el__uploader.addEventListener("upload-retry", (event) => this.bhUploadRetry.emit(event));
  }
  render() {
    const prefix = this.host.tagName.toLowerCase().replace(components.uploader.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
    const buttonClasses = ["bh-uploader motion--normal"];
    if (this.isDisabled && this.type === "secondary") {
      buttonClasses.push("bh-uploader--secondary--disabled");
    } else if (this.isDisabled && this.type === "ghost") {
      buttonClasses.push("bh-uploader--ghost--disabled");
    } else if (this.isDisabled) {
      buttonClasses.push("bh-uploader--disabled");
    } else {
      buttonClasses.push(`bh-uploader--type-${this.type}`);
    }
    return h(Host, {
      key: "93e0687d71b95cd168bc5ca8984e39f44d12aa87"
    }, this.isTarget && h("vaadin-upload", {
      class: buttonClasses.join(" "),
      disabled: this.isDisabled,
      ref: (el) => {
        this.el__uploader = el;
      },
      nodrop: true,
      headers: this.headers,
      method: this.method,
      "max-files": this.isDisabled ? 0 : this.maxFiles,
      accept: this.fileType,
      "max-file-size": this.maxFileSize,
      target: this.target,
      "no-auto": this.noAuto
    }, h(Components.button, {
      type: this.type,
      slot: "add-button",
      isSmall: this.isSmall,
      label: this.label,
      leftIcon: this.leftIcon,
      isDisabled: this.isDisabled,
      onClick: (event) => {
        if (this.isDisabled) event.stopPropagation();
        event.preventDefault();
      }
    }), this.helpText && h("span", {
      class: "typography--body-small bh-uploader--help-text"
    }, this.helpText)), !this.isTarget && h("vaadin-upload", {
      class: buttonClasses.join(" "),
      disabled: this.isDisabled,
      ref: (el) => {
        this.el__uploader = el;
      },
      nodrop: true,
      headers: this.headers,
      method: this.method,
      "max-files": this.isDisabled ? 0 : this.maxFiles,
      accept: this.fileType,
      "max-file-size": this.maxFileSize,
      "no-auto": this.noAuto
    }, h(Components.button, {
      type: this.type,
      slot: "add-button",
      isSmall: this.isSmall,
      label: this.label,
      leftIcon: this.leftIcon,
      isDisabled: this.isDisabled,
      onClick: (event) => {
        if (this.isDisabled) event.stopPropagation();
        event.preventDefault();
      }
    }), this.helpText && h("span", {
      class: "typography--body-small bh-uploader--help-text"
    }, this.helpText)));
  }
  get host() {
    return getElement(this);
  }
};
BhUploader.style = BhUploaderStyle0;
var bhVerticalMenuCss = ".bh-vertical-menu>.bh-menu__container{border-radius:var(--effect-border-radius-medium);box-shadow:none}.bh-vertical-menu>.bh-menu__container>.bh-menu__ul{max-height:none}";
var BhVerticalMenuStyle0 = bhVerticalMenuCss;
var BhVerticalMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bhEventSelected = createEvent(this, "bhEventSelected", 7);
    this.onSelect = (item) => {
      this.selected = item.value;
      this._selected = item.label;
      this.bhEventSelected.emit(item);
    };
    this.menuItems = void 0;
    this._menuItems = void 0;
    this.selected = void 0;
    this.stopClickPropagation = false;
    this._selected = void 0;
    this.viewport = void 0;
  }
  handleResize() {
    const bp = getBreakpoint();
    if (this.viewport !== bp) this.viewport = bp;
  }
  componentWillLoad() {
    this.viewport = getBreakpoint();
    this._menuItems = typeof this.menuItems === "string" ? JSON.parse(this.menuItems) : this.menuItems;
    if (!this.selected) {
      this.selected = this._menuItems.itemGroups[0].items[0].value;
      this._selected = this._menuItems.itemGroups[0].items[0].label;
    }
  }
  render() {
    const prefix = this.host.tagName.toLowerCase().replace(components.verticalMenu.tagNameBase, "");
    const Components = generateComponentLiteralWithPrefix(prefix || defaultPrefix);
    return h(Host, {
      key: "395bfa39dfe2622e0a43f62b4810f98298bc2e3c"
    }, this.viewport === "small" ? h(Components.dropdown, {
      onSelected: (event) => {
        this.onSelect(event.detail);
      },
      menuItems: this.menuItems,
      menuWidth: "fluid",
      selectedValue: this.selected,
      value: this._selected
    }) : h(Components.menu, {
      class: "bh-vertical-menu",
      menuItems: this.menuItems,
      selected: this.selected,
      stopClickPropagation: this.stopClickPropagation,
      onBhEventSelected: (e) => {
        this.onSelect(e.detail);
        e.preventDefault();
        e.stopPropagation();
      }
    }));
  }
  get host() {
    return getElement(this);
  }
};
BhVerticalMenu.style = BhVerticalMenuStyle0;
export {
  BhA as bh_a,
  BhActionBar as bh_action_bar,
  BhActionMenu as bh_action_menu,
  BhAppShell as bh_app_shell,
  BhBreadcrumbs as bh_breadcrumbs,
  BhButton as bh_button,
  BhButtonTabs as bh_button_tabs,
  BhCard as bh_card,
  BhCheckbox as bh_checkbox,
  BhChip as bh_chip,
  BhContent as bh_content,
  BhDateRangePicker as bh_date_range_picker,
  BhDonutChart as bh_donut_chart,
  BhDropdown as bh_dropdown,
  BhIcon as bh_icon,
  BhModal as bh_modal,
  BhRadioButton as bh_radio_button,
  BhSearch as bh_search,
  BhTabularList as bh_tabular_list,
  BhTextInput as bh_text_input,
  BhTitleWrapper as bh_title_wrapper,
  BhTooltip as bh_tooltip,
  BhTree as bh_tree,
  BhTypeAhead as bh_type_ahead,
  BhUploader as bh_uploader,
  BhVerticalMenu as bh_vertical_menu
};
/*! Bundled license information:

@bh-digital-solutions/ui-toolkit/dist/esm/bh-a_26.entry.js:
  (**
   * @license
   * Copyright (c) 2016 - 2025 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
  (**
   * @license
   * Copyright (c) 2021 - 2025 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
  (**
   * @license
   * Copyright (c) 2017 - 2025 Vaadin Ltd.
   * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   *)
*/
//# sourceMappingURL=bh-a_26.entry-NBFLJNEU.js.map
